// Extract every mesh from the HRA Visible Human Female reference organs (CC BY 4.0) into JSON
// (world-space positions + indices, source file, raw name). Coordinates are converted to the web frame
// in tools/build_female.py once the axes are known.
// usage: NM=<node_modules with three> node tools/extract_female.mjs <outdir> <glb>...
import fs from "node:fs";
import path from "node:path";
globalThis.self = globalThis; globalThis.window = globalThis;
const THREE = await import(process.env.NM + "/three/build/three.module.js");
const { GLTFLoader } = await import(process.env.NM + "/three/examples/jsm/loaders/GLTFLoader.js");
const [outDir, ...files] = process.argv.slice(2);
fs.mkdirSync(outDir, { recursive: true });
const index = [];
for (const f of files) {
  const buf = fs.readFileSync(f);
  const gltf = await new Promise((res, rej) => new GLTFLoader().parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength), "", res, rej));
  gltf.scene.updateMatrixWorld(true);
  gltf.scene.traverse((o) => {
    if (!o.isMesh) return;
    const g = o.geometry.clone().applyMatrix4(o.matrixWorld);
    const pos = g.attributes.position;
    const idx = g.index ? Array.from(g.index.array) : [...Array(pos.count).keys()];
    g.computeBoundingBox();
    const file = `${index.length}.json`;
    fs.writeFileSync(path.join(outDir, file), JSON.stringify({ p: Array.from(pos.array, (v) => +v.toFixed(5)), i: idx }));
    index.push({ file, src: path.basename(f), raw: o.name || o.parent?.name || "", verts: pos.count,
      min: g.boundingBox.min.toArray().map((x) => +x.toFixed(4)), max: g.boundingBox.max.toArray().map((x) => +x.toFixed(4)) });
  });
}
fs.writeFileSync(path.join(outDir, "index.json"), JSON.stringify(index));
console.log(index.length, "meshes", index.reduce((a, x) => a + x.verts, 0), "verts");
