"""Build models/nerves.glb from meshes extracted by tools/extract_nerves.mjs (Z-Anatomy, CC BY-SA 4.0)
and append their entries to models/parts.json with system "nerves".

usage: python tools/build_nerves.py <extract_dir> <models_dir>
"""
import json, os, subprocess, sys
import numpy as np, trimesh, fast_simplification

DROP = {"choroid plexus", "cochlear nervel", "cranial nerves", "roots of nerves", "white matter of spinal cord"}
RENAME = {
    "common plantar digital branches of medial plantar nervel": "common plantar digital branches of medial plantar nerve",
    "abducens nerve vi": "abducens nerve (VI)", "accessory nerve xi": "accessory nerve (XI)", "facial nerve vii": "facial nerve (VII)",
    "glossopharyngeal nerve ix": "glossopharyngeal nerve (IX)", "hypoglossal nerve xii": "hypoglossal nerve (XII)",
    "oculomotor nerve iii": "oculomotor nerve (III)", "trigeminal nerve v": "trigeminal nerve (V)", "trochlear nerve iv": "trochlear nerve (IV)",
    "vagus nerve x": "vagus nerve (X)",
}
BUDGET = 190_000
MIN_T, MAX_T = 120, 6000

def main(src, models):
    index = json.load(open(os.path.join(src, "index.json")))
    groups = {}
    for e in index:
        base = RENAME.get(e["base"], e["base"])
        if base in DROP: continue
        groups.setdefault((base, e["side"]), []).append(e)
    meshes = {}
    for (base, side), es in groups.items():
        parts = []
        for e in es:
            d = json.load(open(os.path.join(src, e["file"])))
            v = np.array(d["p"], dtype=np.float64).reshape(-1, 3)
            f = np.array(d["i"], dtype=np.int64).reshape(-1, 3)
            parts.append(trimesh.Trimesh(v, f, process=False))
        m = trimesh.util.concatenate(parts)
        m.merge_vertices()
        meshes[(base, side)] = m
    w = {k: m.area ** 0.8 for k, m in meshes.items()}
    tot = sum(w.values())
    scene = trimesh.Scene()
    manifest, tris = [], 0
    for i, ((base, side), m) in enumerate(sorted(meshes.items(), key=lambda kv: (kv[0][0], str(kv[0][1])))):
        target = int(np.clip(BUDGET * w[(base, side)] / tot, MIN_T, MAX_T))
        v, f = m.vertices, m.faces
        if len(f) > target * 1.15:
            v, f = fast_simplification.simplify(v, f, target_reduction=1 - target / len(f))
        mm = trimesh.Trimesh(np.asarray(v), np.asarray(f), process=True)
        fid = f"ZN{i:04d}"
        scene.add_geometry(mm, node_name=fid, geom_name=fid)
        tris += len(mm.faces)
        name = f"{side} {base}" if side else base
        c = mm.bounds.mean(axis=0)
        manifest.append(dict(id=fid, name=name, base=base, side=side, system="nerves", tris=len(mm.faces),
                             center=[round(float(x), 4) for x in c], size=round(float(np.linalg.norm(mm.extents)), 4)))
    raw = os.path.join(models, "nerves.raw.glb")
    scene.export(raw)
    out = os.path.join(models, "nerves.glb")
    subprocess.run(["gltfpack", "-i", raw, "-o", out, "-cc", "-kn", "-km", "-vp", "14", "-vn", "8"], check=True)
    os.remove(raw)
    pj = os.path.join(models, "parts.json")
    parts = [p for p in json.load(open(pj)) if p["system"] != "nerves"] + manifest
    json.dump(parts, open(pj, "w"), separators=(",", ":"))
    print(f"nerves parts={len(manifest)} tris={tris} size={os.path.getsize(out)/1e6:.2f} MB")

if __name__ == "__main__":
    main(*sys.argv[1:3])
