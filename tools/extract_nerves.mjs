// Extract peripheral nerves from Z-Anatomy's NervousSystem100.fbx, transform them into this
// project's web coordinates (metres, Y up, body facing +Z) and write one JSON per nerve mesh.
// usage: NM=<node_modules with three> node tools/extract_nerves.mjs NervousSystem100.fbx xf.json outdir
// xf.json = { s, R, t } similarity transform solved by matching bones (see tools/align_zanatomy.py).
import fs from "node:fs";
import path from "node:path";
globalThis.self = globalThis; globalThis.window = globalThis;
globalThis.document = { createElementNS: () => ({ style: {} }), createElement: () => ({ style: {}, getContext: () => null }) };
const THREE = await import(process.env.NM + "/three/build/three.module.js");
const { FBXLoader } = await import(process.env.NM + "/three/examples/jsm/loaders/FBXLoader.js");
const [fbxPath, xfPath, outDir] = process.argv.slice(2);
const xf = JSON.parse(fs.readFileSync(xfPath, "utf8"));
const buf = fs.readFileSync(fbxPath);
const root = new FBXLoader().parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength), "");
root.updateMatrixWorld(true);

const KEEP = /nerve|plexus|cauda_equina|sympathetic_trunk|intercostal|rami_of|spinal_cord$|^spinal_cord/i;
const DROP = /nucleus|optic|olfactory|cochlear_nerve$|vestibul|root_of_spinal|tract|fasciculus|funiculus|horn|grey_matter|central|^branches_of|part_of_brachial_plexus|^brachial_plexus|^lumbar_plexus|^lumbosacral_plexus|^cervical_plexus|^sacral_plexus|division_of_.*nerve(s)?j?$|cross_section|curve/i;
const meshes = [];
root.traverse((o) => o.isMesh && meshes.push(o));
const names = new Set(meshes.map((m) => m.name.replace(/\.\d+$/, "")));
fs.mkdirSync(outDir, { recursive: true });
const M = new THREE.Matrix4().set(...xf.R[0].map((v) => v * xf.s), xf.t[0], ...xf.R[1].map((v) => v * xf.s), xf.t[1], ...xf.R[2].map((v) => v * xf.s), xf.t[2], 0, 0, 0, 1);
const index = [];
for (const m of meshes) {
  const raw = m.name.replace(/\.\d+$/, "");
  if (!KEEP.test(raw) || DROP.test(raw)) continue;
  let base = raw, side = null;
  const sfx = raw.slice(-1);
  const stem = raw.slice(0, -1);
  if ((sfx === "l" || sfx === "r") && names.has(stem + (sfx === "l" ? "r" : "l"))) { side = sfx === "l" ? "left" : "right"; base = stem; }
  else if (sfx === "j" || sfx === "i") { if ([...names].some((n) => n === stem + "l" || n === stem + "r")) continue; base = stem; }
  base = base.replace(/[()]/g, "").replace(/_/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
  const g = m.geometry.clone().applyMatrix4(m.matrixWorld).applyMatrix4(M);
  const pos = g.attributes.position;
  if (!pos || pos.count < 6) continue;
  const idx = g.index ? Array.from(g.index.array) : [...Array(pos.count).keys()];
  const file = `${index.length}.json`;
  fs.writeFileSync(path.join(outDir, file), JSON.stringify({ p: Array.from(pos.array, (v) => +v.toFixed(5)), i: idx }));
  index.push({ file, raw, base, side, verts: pos.count });
}
fs.writeFileSync(path.join(outDir, "index.json"), JSON.stringify(index, null, 0));
console.log(index.length, "nerve meshes;", index.reduce((a, x) => a + x.verts, 0), "verts");
