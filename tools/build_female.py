"""Build the female body (models/female/*.glb + models/female/parts.json) from meshes extracted by
tools/extract_female.mjs out of the HRA Visible Human Female reference organs (CC BY 4.0).

The source is already in metres, Y up, facing +Z, body's left on +X (same as this app); it is only
translated so the feet stand on y = 0 and the body is centred.

usage: python tools/build_female.py <extract_dir> <out_dir>   (needs numpy, trimesh, fast-simplification, gltfpack)
"""
import json, os, re, subprocess, sys
import numpy as np, trimesh, fast_simplification

# source file -> system
SYSTEM = [
    (r"Brain|eye-[lr]", "nervous"), (r"Nerves_of_Eye", "nerves"), (r"Spinal_Cord", "nerves"),
    (r"Muscles_", "muscular"), (r"Ligaments_Knee", "connective"),
    (r"Knee_|Pelvis|Vertebrae", "skeletal"),
    (r"Heart|vasculature", "cardio"),
    (r"lung|bronchus|trachea|larynx", "respiratory"),
    (r"Intestine|Liver|Gallbladder|Biliary|Ducts_of|Pancreas", "digestive"),
    (r"Kidney|Ureter|Bladder", "urinary"),
    (r"Fallopian|Ovary|Uterus|Vagina|Ligaments_Uterus|mammary", "reproductive"),
    (r"Spleen|tonsil", "lymphatic"), (r"Thymus", "endocrine"),
    (r"skin", "skin"),
]
TYPOS = {"fibria": "fimbria", "heptopancreatic": "hepatopancreatic", "epiglotic": "epiglottic", "perichondular": "perichondral",
         "segm": "segment", "segmennt": "segment", "eigth": "eighth", "hepatadu": "hepatoduodenal"}
# landmark markers in the knee files, not anatomy to study
DROP = re.compile(r"enthesis|most point|perichondral surface")
# names that need their organ to make sense on their own
CONTEXT = [(r"mammary", r"^(fat|nipple|areola|areolar tubercles|suspensory ligaments)$", lambda b: "mammary " + b if b == "fat" else b + " of breast"),
           (r"lung", r"^hilum( (upper|middle|lower))?$", lambda b: b.replace("hilum", "hilum of lung"))]
BUDGET = dict(skin=60_000, nervous=130_000, cardio=120_000, respiratory=80_000, digestive=80_000, urinary=50_000,
              reproductive=70_000, skeletal=110_000, nerves=30_000, lymphatic=10_000, endocrine=4_000, muscular=12_000, connective=8_000)
MIN_T, MAX_T = 120, 24_000


def system_of(src):
    for pat, s in SYSTEM:
        if re.search(pat, src, re.I):
            return s
    return None


def clean(raw):
    n = re.sub(r"^(VH_F|Allen|SBU|NIH|Yao)_", "", raw)
    toks = [t for t in re.split(r"[_\s]+", n.lower()) if t]
    side = None
    out = []
    i = 0
    while i < len(toks):
        t = toks[i]
        if t in ("l", "r", "left", "right") and side is None:
            side = "left" if t in ("l", "left") else "right"
            # drop index letters that follow a side marker (renal_pyramid_L_a)
            while i + 1 < len(toks) and re.fullmatch(r"[a-z]|\d+", toks[i + 1]):
                i += 1
        else:
            out.append(TYPOS.get(t, t))
        i += 1
    # trailing copy letters ("descending aorta a")
    while len(out) > 1 and re.fullmatch(r"[a-z]", out[-1]):
        out.pop()
    return " ".join(out), side


def main(src, out):
    index = json.load(open(os.path.join(src, "index.json")))
    skin = next(e for e in index if e["raw"] == "VH_F_skin")
    lo, hi = np.array(skin["min"]), np.array(skin["max"])
    shift = np.array([-(lo[0] + hi[0]) / 2, -lo[1], -(lo[2] + hi[2]) / 2])
    groups = {}
    for e in index:
        sysname = system_of(e["src"])
        if not sysname:
            continue
        base, side = clean(e["raw"])
        if not base or DROP.search(base):
            continue
        for src_pat, name_pat, fix in CONTEXT:
            if re.search(src_pat, e["src"], re.I) and re.search(name_pat, base):
                base = fix(base)
        groups.setdefault((sysname, base, side), []).append(e)
    os.makedirs(out, exist_ok=True)
    manifest = []
    systems = sorted(set(k[0] for k in groups))
    for s in systems:
        items = []
        for (sysname, base, side), es in groups.items():
            if sysname != s:
                continue
            parts = []
            for e in es:
                d = json.load(open(os.path.join(src, e["file"])))
                v = np.array(d["p"], dtype=np.float64).reshape(-1, 3) + shift
                f = np.array(d["i"], dtype=np.int64).reshape(-1, 3)
                parts.append(trimesh.Trimesh(v, f, process=False))
            m = trimesh.util.concatenate(parts)
            m.merge_vertices()
            items.append((base, side, m))
        w = {i: max(m.area, 1e-6) ** 0.8 for i, (_, _, m) in enumerate(items)}
        tot = sum(w.values())
        scene = trimesh.Scene()
        tris = 0
        for i, (base, side, m) in enumerate(sorted(items, key=lambda x: (x[0], str(x[1])))):
            target = int(np.clip(BUDGET[s] * w[i] / tot, MIN_T, MAX_T))
            v, f = m.vertices, m.faces
            if len(f) > target * 1.15:
                v, f = fast_simplification.simplify(v, f, target_reduction=1 - target / len(f))
            mm = trimesh.Trimesh(np.asarray(v), np.asarray(f), process=True)
            fid = f"F{len(manifest):04d}"
            scene.add_geometry(mm, node_name=fid, geom_name=fid)
            tris += len(mm.faces)
            c = mm.bounds.mean(axis=0)
            manifest.append(dict(id=fid, name=f"{side} {base}" if side else base, base=base, side=side, system=s,
                                 tris=len(mm.faces), center=[round(float(x), 4) for x in c],
                                 size=round(float(np.linalg.norm(mm.extents)), 4)))
        raw = os.path.join(out, f"{s}.raw.glb")
        scene.export(raw)
        dst = os.path.join(out, f"{s}.glb")
        subprocess.run(["gltfpack", "-i", raw, "-o", dst, "-cc", "-kn", "-km", "-vp", "14", "-vn", "8"], check=True)
        os.remove(raw)
        print(f"{s:13s} parts={sum(1 for p in manifest if p['system'] == s):4d} tris={tris:7d} size={os.path.getsize(dst)/1e6:5.2f} MB", flush=True)
    json.dump(manifest, open(os.path.join(out, "parts.json"), "w"), separators=(",", ":"))
    print("total parts", len(manifest))


if __name__ == "__main__":
    main(*sys.argv[1:3])
