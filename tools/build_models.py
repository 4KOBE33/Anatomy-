"""Build web-ready GLB models from BodyParts3D STL files.

Pipeline: STL (mm, Z-up, body faces -Y) -> merge vertices -> quadric decimation
-> convert to metres, Y-up, body facing +Z, feet at y=0 -> one GLB per body system
(each part is a named node = FMA id). Then compress with gltfpack (meshopt).

Usage:
  python tools/build_models.py <stl_dir> <parts.json> <out_dir> [systems,to,rebuild]
Requires: numpy, trimesh, fast-simplification; and `gltfpack` on PATH (npm i -g gltfpack).
"""
import json, os, subprocess, sys
import numpy as np, trimesh, fast_simplification

# Triangle budget per system (sum ~1.2M) - tuned for laptops & recent phones.
BUDGET = dict(muscular=520_000, skeletal=300_000, nervous=110_000, cardio=80_000,
              connective=45_000, digestive=45_000, respiratory=35_000, skin=60_000,
              endocrine=8_000, urinary=12_000, reproductive=8_000, lymphatic=4_000)
MIN_T, MAX_T = 160, 16_000
MAX_T_SYS = dict(skin=48_000)
CENTER_Y_MM = -96.0  # front/back centre of body in source coords

def load(path):
    m = trimesh.load(path, force="mesh", process=False)
    m.merge_vertices()
    m.remove_unreferenced_vertices()
    return m

def to_web(v):
    x, y, z = v[:, 0], v[:, 1], v[:, 2]
    return np.stack([x, z, -(y - CENTER_Y_MM)], axis=1) * 0.001

def main(stl_dir, parts_path, out_dir, only=None):
    """`only`: optional comma list of systems to rebuild; other systems keep their existing manifest entries."""
    parts = json.load(open(parts_path))
    keep = []
    if only:
        only = set(only.split(","))
        old = os.path.join(out_dir, "parts.json")
        keep = [p for p in json.load(open(old)) if p["system"] not in only] if os.path.exists(old) else []
        parts = [p for p in parts if p["system"] in only]
    os.makedirs(out_dir, exist_ok=True)
    systems = sorted(set(p["system"] for p in parts))
    manifest = []
    for s in systems:
        group = [p for p in parts if p["system"] == s]
        meshes = {p["id"]: load(os.path.join(stl_dir, p["id"] + ".stl")) for p in group}
        areas = {k: float(m.area) for k, m in meshes.items()}
        w = {p["id"]: areas[p["id"]] ** 0.85 for p in group}
        tot = sum(w.values())
        scene = trimesh.Scene()
        tris = 0
        for p in group:
            m = meshes[p["id"]]
            n = len(m.faces)
            target = int(np.clip(BUDGET[s] * w[p["id"]] / tot, MIN_T, MAX_T_SYS.get(s, MAX_T)))
            v, f = m.vertices, m.faces
            if n > target * 1.15:
                v, f = fast_simplification.simplify(v, f, target_reduction=1 - target / n)
            mm = trimesh.Trimesh(to_web(np.asarray(v)), np.asarray(f), process=True)
            scene.add_geometry(mm, node_name=p["id"], geom_name=p["id"])
            tris += len(mm.faces)
            c = mm.bounds.mean(axis=0)
            manifest.append(dict(p, tris=len(mm.faces), center=[round(float(x), 4) for x in c],
                                 size=round(float(np.linalg.norm(mm.extents)), 4)))
        raw = os.path.join(out_dir, f"{s}.raw.glb")
        scene.export(raw)
        out = os.path.join(out_dir, f"{s}.glb")
        subprocess.run(["gltfpack", "-i", raw, "-o", out, "-cc", "-kn", "-km", "-vp", "14", "-vn", "8"], check=True)
        os.remove(raw)
        print(f"{s:13s} parts={len(group):4d} tris={tris:8d} size={os.path.getsize(out)/1e6:6.2f} MB", flush=True)
    for p in manifest:
        p.pop("bytes", None)
    manifest = keep + manifest
    json.dump(manifest, open(os.path.join(out_dir, "parts.json"), "w"), separators=(",", ":"))

if __name__ == "__main__":
    main(*sys.argv[1:5])
