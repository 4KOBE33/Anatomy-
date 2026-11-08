"""Assemble a copy of the site for publishing as a private Claude artifact.

Differences from the GitHub Pages build:
- three.js / three-mesh-bvh load from cdn.jsdelivr.net (pinned) instead of vendor/
- models are re-encoded without meshopt compression (no WebAssembly decoder needed)
- index.html is reduced to head/body *content* (the artifact host adds the document skeleton)

usage: python tools/build_artifact.py <out_dir>   (needs gltfpack on PATH)
"""
import base64, json, os, re, shutil, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMPORTMAP = """<script type="importmap">
    {
      "imports": {
        "three": "https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.min.js",
        "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.170.0/examples/jsm/",
        "three-mesh-bvh": "https://cdn.jsdelivr.net/npm/three-mesh-bvh@0.8.3/build/index.module.js"
      }
    }
  </script>"""


def main(out):
    os.makedirs(out, exist_ok=True)
    html = open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()
    html = re.sub(r'<script type="importmap">.*?</script>', IMPORTMAP, html, flags=re.S)
    html = re.sub(r"<!doctype html>\s*", "", html, flags=re.I)
    html = re.sub(r"</?html[^>]*>|</?head>|</?body>", "", html)
    html = re.sub(r'<meta charset="utf-8" />\s*|<meta name="viewport"[^>]*>\s*', "", html)
    # inline the stylesheet (the artifact host only allows Google Fonts as external CSS)
    css = open(os.path.join(ROOT, "css", "style.css"), encoding="utf-8").read()
    html = html.replace('<link rel="stylesheet" href="css/style.css" />', "<style>\n" + css + "\n</style>")
    html = re.sub(r"<title>.*?</title>", "<title>Anatomy 3D</title>", html)
    # title first so the host finds it
    m = re.search(r"<title>.*?</title>", html)
    html = m.group(0) + "\n" + html.replace(m.group(0), "", 1).strip() + "\n"
    html = html.replace('<script type="module" src="js/main.js"></script>',
                        '<script>window.ANATOMY_MODEL_FORMAT = "b64";</script>\n  <script type="module" src="js/main.js"></script>')
    open(os.path.join(out, "index.html"), "w", encoding="utf-8").write(html)
    for d in ("js",):
        shutil.rmtree(os.path.join(out, d), ignore_errors=True)
        shutil.copytree(os.path.join(ROOT, d), os.path.join(out, d))
    # artifacts don't serve .glb: re-encode without meshopt, then wrap the bytes as base64 JSON
    for sub in ("models", os.path.join("models", "female")):
        src = os.path.join(ROOT, sub)
        md = os.path.join(out, sub)
        os.makedirs(md, exist_ok=True)
        shutil.copy(os.path.join(src, "parts.json"), md)
        for f in os.listdir(src):
            if f.endswith(".glb"):
                tmp = os.path.join(md, f)
                subprocess.run(["gltfpack", "-i", os.path.join(src, f), "-o", tmp,
                                "-kn", "-km", "-vp", "14", "-vn", "8"], check=True, capture_output=True)
                data = base64.b64encode(open(tmp, "rb").read()).decode("ascii")
                json.dump({"b64": data}, open(os.path.join(md, f[:-4] + ".b64.json"), "w"))
                os.remove(tmp)
    print("artifact build in", out)


if __name__ == "__main__":
    main(sys.argv[1])
