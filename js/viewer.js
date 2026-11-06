// 3D anatomy viewer: loads per-system GLBs, realistic materials (procedural muscle fibres, tendons,
// bone/organ micro-surface), ambient occlusion, picking, highlighting, spotlight/ghosting,
// cross-section slicing and camera moves.
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "three/addons/libs/meshopt_decoder.module.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { GTAOPass } from "three/addons/postprocessing/GTAOPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from "three-mesh-bvh";

THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
THREE.Mesh.prototype.raycast = acceleratedRaycast;

// ---------- look ----------
// kind: which procedural micro-surface the shader adds (muscle fibres, bone, soft organ, skin).
const SYSTEM_STYLE = {
  muscular: { color: 0x9b2c27, roughness: 0.5, jitter: 0.08, kind: "MUSCLE", sheen: 0.55, clearcoat: 0.18 },
  connective: { color: 0xe4dccb, roughness: 0.3, kind: "ORGAN", sheen: 0.3, clearcoat: 0.3 },
  skeletal: { color: 0xe6d8b8, roughness: 0.58, kind: "BONE", clearcoat: 0.05 },
  nervous: { color: 0xe2ada0, roughness: 0.5, kind: "ORGAN", sheen: 0.4, clearcoat: 0.35 },
  cardio: { color: 0xb01f29, roughness: 0.32, kind: "ORGAN", clearcoat: 0.45 },
  respiratory: { color: 0xe0959b, roughness: 0.55, kind: "ORGAN", sheen: 0.5, clearcoat: 0.2 },
  digestive: { color: 0xd78f7d, roughness: 0.38, kind: "ORGAN", sheen: 0.3, clearcoat: 0.5 },
  urinary: { color: 0x963630, roughness: 0.4, kind: "ORGAN", clearcoat: 0.5 },
  endocrine: { color: 0xc58a3a, roughness: 0.45, kind: "ORGAN", clearcoat: 0.4 },
  reproductive: { color: 0xd395a3, roughness: 0.45, kind: "ORGAN", clearcoat: 0.4 },
  lymphatic: { color: 0x6e2a4c, roughness: 0.4, kind: "ORGAN", clearcoat: 0.5 },
  skin: { color: 0xd6a081, roughness: 0.55, kind: "SKIN", sheen: 0.6 },
  nerves: { color: 0xf0cd55, roughness: 0.35, kind: "ORGAN", sheen: 0.5, clearcoat: 0.4 },
};
const NAME_COLORS = [
  [/vein|vena cava|coronary sinus|cardiac veins|veins of ventricle/, 0x2c58b0],
  [/valve/, 0xe2c79c],
  [/wall of heart/, 0x962a2b],
  [/papillary/, 0x8a2426],
  [/liver/, 0x6e2620],
  [/gallbladder/, 0x4a7a36],
  [/stomach|duodenum/, 0xd4867a],
  [/jejunum|ileum/, 0xe0a08a],
  [/colon|rectum|appendix|taenia/, 0xc2826c],
  [/pancrea/, 0xe2bc76],
  [/esophagus/, 0xc4685a],
  [/kidney/, 0x8a302d],
  [/ureter|bladder|urethra/, 0xdcae6a],
  [/adrenal/, 0xd29a3a],
  [/thymus/, 0xd7b19e],
  [/pituitary|pineal/, 0xb889d6],
  [/trachea|bronchus|thyroid cartilage|nasal cartilages/, 0xe6d6c2],
  [/intervertebral disk|costal cartilage/, 0xbfd6de],
  [/tooth/, 0xf6f1e4],
  [/gingiva|labial part of mouth/, 0xd47c80],
  [/ventricle|aqueduct|foramen|central canal/, 0x6fa4dc],
  [/optic|eyeball/, 0xf0e2b0],
  [/white matter|callosum|capsule|fornix|commissure/, 0xf1e6d6],
  [/thalam|caudate|putamen|pallidus|amygdala|hippocampus|mammillary|geniculate|colliculus|pons|medulla|midbrain|cerebell/, 0xd4a090],
  [/hairs|eyebrows/, 0x3b2a1f],
  [/diaphragm/, 0xa8463e],
];

// Uniforms shared by every material (one change updates the whole body).
const SHARED = { uCut: { value: 0 }, uDetail: { value: 1 } };

const SHADER_COMMON = /* glsl */ `
varying vec3 vObjPos;
uniform vec3 uAxis;
uniform float uGhost;
uniform float uCut;
uniform vec3 uCutColor;
uniform float uDetail;
#ifdef MUSCLE
varying float vTendon;
#endif
float h3(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float vnoise(vec3 x) {
  vec3 i = floor(x); vec3 f = fract(x); f = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z);
}
// Micro-surface height (0..1) and an anti-alias measure (pattern cycles per pixel).
float surfHeight(vec3 p, out float aa) {
#ifdef MUSCLE
  vec3 a = uAxis;
  vec3 b = normalize(cross(a, abs(a.y) < 0.9 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0)));
  vec3 c = cross(a, b);
  // fascicles: long along the fibre axis, ~1.5 mm across
  vec3 q = vec3(dot(p, a) * 40.0, dot(p, b) * 560.0, dot(p, c) * 560.0);
  // rotate the noise lattice off-axis so no grid shows through
  vec3 qr = mat3(0.80, 0.36, -0.48, -0.60, 0.48, -0.64, 0.0, 0.80, 0.60) * q;
  float strands = 0.5 + 0.5 * sin(q.y * 1.3 + q.z * 0.45 + 3.2 * vnoise(qr * 0.35));
  float h = strands * 0.55 + vnoise(qr) * 0.3 + vnoise(qr * 2.1 + 7.1) * 0.15;
  aa = max(fwidth(q.y), fwidth(q.z)) * 1.3;
#elif defined(BONE)
  vec3 q = p * 700.0;
  float h = vnoise(q) * 0.55 + vnoise(q * 2.9 + 3.3) * 0.45;
  aa = fwidth(q.x) * 1.4;
#elif defined(SKIN)
  vec3 q = p * 1400.0;
  float h = vnoise(q);
  aa = fwidth(q.x);
#else
  vec3 q = p * 260.0;
  float h = vnoise(q) * 0.7 + vnoise(q * 3.3 + 1.7) * 0.3;
  aa = fwidth(q.x);
#endif
  return h;
}
vec3 perturbN(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDir) {
  vec3 sx = normalize(dFdx(surf_pos)); vec3 sy = normalize(dFdy(surf_pos));
  vec3 r1 = cross(sy, surf_norm); vec3 r2 = cross(surf_norm, sx);
  float det = dot(sx, r1) * faceDir;
  vec3 grad = sign(det) * (dHdxy.x * r1 + dHdxy.y * r2);
  return normalize(abs(det) * surf_norm - grad);
}
`;

function installShader(mat, kind, uniforms) {
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms, SHARED);
    shader.defines = { ...(shader.defines || {}), [kind]: "" };
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", `#include <common>
varying vec3 vObjPos;
#ifdef MUSCLE
attribute float aTendon;
varying float vTendon;
#endif`)
      .replace("#include <begin_vertex>", `#include <begin_vertex>
vObjPos = position;
#ifdef MUSCLE
vTendon = aTendon;
#endif`);
    const bump = { MUSCLE: 0.6, BONE: 0.4, SKIN: 0.25, ORGAN: 0.3 }[kind];
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", "#include <common>\n" + SHADER_COMMON)
      .replace("#include <color_fragment>", `#include <color_fragment>
float microAA;
float micro = surfHeight(vObjPos, microAA);
float microFade = (1.0 - smoothstep(0.55, 1.5, microAA)) * uDetail;
float tend = 0.0;
#ifdef MUSCLE
tend = smoothstep(0.12, 0.8, vTendon);
diffuseColor.rgb *= mix(1.0, mix(0.8, 1.1, micro), microFade * (1.0 - tend));
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.80, 0.76, 0.64), tend);
#else
diffuseColor.rgb *= mix(1.0, mix(0.9, 1.06, micro), microFade);
#endif`)
      .replace("#include <roughnessmap_fragment>", `#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.28, tend);`)
      .replace("#include <normal_fragment_maps>", `#include <normal_fragment_maps>
float bumpAmt = ${bump.toFixed(2)} * microFade * (1.0 - tend * 0.8);
if (bumpAmt > 0.001) normal = perturbN(-vViewPosition, normal, vec2(dFdx(micro), dFdy(micro)) * bumpAmt, faceDirection);`)
      .replace("#include <opaque_fragment>", `#include <opaque_fragment>
if (uCut > 0.5 && !gl_FrontFacing) gl_FragColor = vec4(uCutColor, 1.0);
gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(dot(gl_FragColor.rgb, vec3(0.3, 0.59, 0.11))) * vec3(0.72, 0.84, 1.0), uGhost * 0.85);`);
  };
  mat.customProgramCacheKey = () => kind;
}

// Principal axis of a mesh (fibre direction) and a per-vertex "tendon-ness" for long, tapering muscles.
function muscleFrame(geo) {
  const p = geo.attributes.position.array;
  const n = p.length / 3;
  let mx = 0, my = 0, mz = 0;
  for (let i = 0; i < n; i++) { mx += p[i * 3]; my += p[i * 3 + 1]; mz += p[i * 3 + 2]; }
  mx /= n; my /= n; mz /= n;
  let xx = 0, xy = 0, xz = 0, yy = 0, yz = 0, zz = 0;
  for (let i = 0; i < n; i++) {
    const x = p[i * 3] - mx, y = p[i * 3 + 1] - my, z = p[i * 3 + 2] - mz;
    xx += x * x; xy += x * y; xz += x * z; yy += y * y; yz += y * z; zz += z * z;
  }
  const C = [[xx, xy, xz], [xy, yy, yz], [xz, yz, zz]];
  const power = (M, v) => {
    for (let k = 0; k < 40; k++) {
      const w = [0, 1, 2].map((r) => M[r][0] * v[0] + M[r][1] * v[1] + M[r][2] * v[2]);
      const l = Math.hypot(...w) || 1;
      v = w.map((x) => x / l);
    }
    const Mv = [0, 1, 2].map((r) => M[r][0] * v[0] + M[r][1] * v[1] + M[r][2] * v[2]);
    return [v, v[0] * Mv[0] + v[1] * Mv[1] + v[2] * Mv[2]];
  };
  const [a, l1] = power(C, [0.3, 0.9, 0.2]);
  const C2 = C.map((row, r) => row.map((x, c) => x - l1 * a[r] * a[c]));
  const [, l2] = power(C2, [0.7, -0.1, 0.6]);
  const ratio = Math.sqrt(l1 / Math.max(l2, 1e-12));
  const tendon = new Float32Array(n);
  if (ratio > 1.9) {
    const t = new Float32Array(n), r = new Float32Array(n);
    let tmin = Infinity, tmax = -Infinity;
    for (let i = 0; i < n; i++) {
      const x = p[i * 3] - mx, y = p[i * 3 + 1] - my, z = p[i * 3 + 2] - mz;
      const d = x * a[0] + y * a[1] + z * a[2];
      t[i] = d;
      r[i] = Math.hypot(x - d * a[0], y - d * a[1], z - d * a[2]);
      tmin = Math.min(tmin, d); tmax = Math.max(tmax, d);
    }
    const B = 28, rmax = new Float32Array(B);
    const bin = (d) => Math.min(B - 1, Math.floor(((d - tmin) / (tmax - tmin || 1)) * B));
    for (let i = 0; i < n; i++) { const b = bin(t[i]); rmax[b] = Math.max(rmax[b], r[i]); }
    const R = Math.max(...rmax) || 1;
    const ss = (e0, e1, x) => { const k = Math.min(1, Math.max(0, (x - e0) / (e1 - e0))); return k * k * (3 - 2 * k); };
    for (let i = 0; i < n; i++) {
      const tn = (t[i] - tmin) / (tmax - tmin || 1);
      const thin = rmax[bin(t[i])] / R;
      const end = Math.min(tn, 1 - tn);
      tendon[i] = (1 - ss(0.2, 0.42, thin)) * (1 - ss(0.1, 0.3, end));
    }
  }
  geo.setAttribute("aTendon", new THREE.BufferAttribute(tendon, 1));
  return new THREE.Vector3(...a);
}

// gltfpack stores quantized (integer) attributes; convert to float before baking transforms into them.
function toFloat(geo, name) {
  const a = geo.getAttribute(name);
  if (!a || (a.array instanceof Float32Array && !a.isInterleavedBufferAttribute)) return;
  const out = new Float32Array(a.count * 3);
  for (let i = 0; i < a.count; i++) {
    out[i * 3] = a.getX(i); out[i * 3 + 1] = a.getY(i); out[i * 3 + 2] = a.getZ(i);
  }
  geo.setAttribute(name, new THREE.BufferAttribute(out, 3));
}

// Known fibre directions for flat/fan-shaped muscles where the mesh's long axis is misleading.
// [x, y, z] for the body's LEFT side (+x); x is mirrored for the right side.
const FIBER_DIR = [
  [/external oblique/, [-0.55, -0.83, 0.1]],
  [/internal oblique/, [-0.6, 0.8, 0.05]],
  [/transversus abdominis/, [1, 0, 0.2]],
  [/pectoralis major/, [1, 0.12, 0]],
  [/descending part of .*trapezius/, [0.65, -0.75, 0]],
  [/transverse part of .*trapezius/, [1, 0, 0]],
  [/ascending part of .*trapezius/, [0.6, 0.8, 0]],
  [/latissimus dorsi/, [0.55, 0.83, 0]],
  [/gluteus maximus/, [0.7, -0.7, 0]],
  [/rhomboid/, [0.8, -0.6, 0]],
];

const tmpV = new THREE.Vector3();
const CLIP_AXES = { transverse: new THREE.Vector3(0, -1, 0), sagittal: new THREE.Vector3(-1, 0, 0), coronal: new THREE.Vector3(0, 0, -1) };
const CLIP_RANGE = { transverse: [0, 1.75], sagittal: [-0.35, 0.35], coronal: [-0.2, 0.2] };

export class Viewer {
  constructor(container) {
    this.container = container;
    this.parts = new Map(); // id -> { mesh, info }
    this.systemsVisible = new Set();
    this.hidden = new Set();
    this.isolated = null; // Set of ids or null: everything else is ghosted
    this.ghostOpacity = 0.08;
    this.selected = new Set();
    this.related = new Set();
    this.marks = new Map(); // id -> color hex (pain / quiz highlights)
    this.hoverId = null;
    this.skinOpacity = 0.35;
    this.onPick = null;
    this.onHover = null;
    this.pickFilter = null;
    this.clip = null; // { axis, plane }
    this._tween = null;
    this._pulse = 0;
    this._dirty = true;

    const r = (this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" }));
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 1.08;
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.localClippingEnabled = false;
    container.appendChild(r.domElement);

    this.scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(r);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environmentIntensity = 0.5;

    this.camera = new THREE.PerspectiveCamera(35, 1, 0.01, 50);
    const key = new THREE.DirectionalLight(0xfff1e2, 1.9);
    key.position.set(1.6, 2.6, 3);
    const fillL = new THREE.DirectionalLight(0xe8f0ff, 0.45);
    fillL.position.set(-2.5, 1.2, 2);
    const rim = new THREE.DirectionalLight(0xc4dcff, 1.25);
    rim.position.set(-2, 1.8, -2.8);
    const rim2 = new THREE.DirectionalLight(0xffe2d0, 0.6);
    rim2.position.set(2.4, 0.8, -2.2);
    const hemi = new THREE.HemisphereLight(0xf2f6ff, 0x40302a, 0.45);
    this.scene.add(key, fillL, rim, rim2, hemi);

    const c = (this.controls = new OrbitControls(this.camera, r.domElement));
    c.enableDamping = true;
    c.dampingFactor = 0.09;
    c.minDistance = 0.06;
    c.maxDistance = 6;
    c.zoomToCursor = true;
    c.rotateSpeed = 0.8;
    c.addEventListener("start", () => (this._tween = null));
    c.addEventListener("change", () => this.invalidate());

    this.raycaster = new THREE.Raycaster();
    this.raycaster.firstHitOnly = true;
    this._bindPointer();

    const fast = matchMedia("(pointer: coarse)").matches || Math.min(screen.width, screen.height) < 600;
    this.setQuality(localStorageGet("anatomy3d.quality") || (fast ? "fast" : "high"));

    new ResizeObserver(() => this.resize()).observe(container);
    this.resize();
    this.camera.position.set(0, 0.95, this.fitDistance());
    this.controls.target.set(0, 0.86, 0);
    this.clock = new THREE.Clock();
    r.setAnimationLoop(() => this._frame());
  }

  // ---------- quality / post-processing ----------
  setQuality(q) {
    this.quality = q;
    try { localStorage.setItem("anatomy3d.quality", q); } catch { /* ignore */ }
    const r = this.renderer;
    r.setPixelRatio(Math.min(window.devicePixelRatio, q === "high" ? 2 : 1.5));
    SHARED.uDetail.value = 1;
    if (q === "high" && !this.composer) {
      const size = r.getDrawingBufferSize(new THREE.Vector2());
      const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: 4 });
      const comp = new EffectComposer(r, rt);
      comp.addPass(new RenderPass(this.scene, this.camera));
      const ao = new GTAOPass(this.scene, this.camera, size.x, size.y);
      ao.updateGtaoMaterial({ radius: 0.045, distanceExponent: 1.4, thickness: 0.03, scale: 1.15, samples: 16, distanceFallOff: 1 });
      ao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 16 });
      ao.blendIntensity = 0.9;
      comp.addPass(ao);
      comp.addPass(new OutputPass());
      this.composer = comp;
      this.aoPass = ao;
    }
    this.resize();
  }
  _aoActive() {
    if (this.quality !== "high" || !this.composer) return false;
    if (this.isolated) return false; // ghosts would wrongly occlude
    if (this.systemsVisible.has("skin") && this.skinOpacity < 0.95) return false;
    return true;
  }

  resize() {
    const { clientWidth: w, clientHeight: h } = this.container;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false);
    this.composer?.setPixelRatio(this.renderer.getPixelRatio());
    this.composer?.setSize(w, h);
    this.camera.aspect = w / h;
    // On phones a bottom sheet covers part of the canvas: shift the projection so the
    // orbit target sits in the middle of the area that's still visible.
    const inset = Math.round(this.bottomInset || 0);
    if (inset > 0) this.camera.setViewOffset(w, h + inset, 0, inset, w, h);
    else this.camera.clearViewOffset();
    this.camera.updateProjectionMatrix();
    this.invalidate();
  }
  setBottomInset(px) {
    if (Math.abs((this.bottomInset || 0) - px) < 2) return;
    this.bottomInset = px;
    this.resize();
  }

  invalidate() { this._dirty = true; }

  async load(manifest, systems, onProgress) {
    const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
    const byId = new Map(manifest.map((p) => [p.id, p]));
    const progress = new Map();
    const report = () => {
      let a = 0;
      for (const v of progress.values()) a += v;
      onProgress?.(a / systems.length);
    };
    await Promise.all(
      systems.map(async (sys) => {
        const gltf = await loader.loadAsync(`models/${sys}.glb`, (e) => {
          if (e.total) progress.set(sys, (e.loaded / e.total) * 0.95);
          report();
        });
        const root = gltf.scene;
        root.updateMatrixWorld(true);
        const meshes = [];
        root.traverse((o) => o.isMesh && meshes.push(o));
        for (const m of meshes) {
          let id = m.name;
          let n = m;
          while (n && !byId.has(id)) { n = n.parent; id = n?.name; }
          const info = byId.get(id);
          if (!info) continue;
          toFloat(m.geometry, "position");
          toFloat(m.geometry, "normal");
          m.geometry.applyMatrix4(m.matrixWorld);
          if (!m.geometry.attributes.normal) m.geometry.computeVertexNormals();
          m.geometry.computeBoundingSphere();
          m.geometry.computeBoundingBox();
          let axis = info.system === "muscular" ? muscleFrame(m.geometry) : new THREE.Vector3(0, 1, 0);
          const fd = info.system === "muscular" && FIBER_DIR.find(([re]) => re.test(info.name));
          if (fd) {
            const sx = Math.sign(m.geometry.boundingSphere.center.x) || 1;
            axis = new THREE.Vector3(fd[1][0] * sx, fd[1][1], fd[1][2]).normalize();
          }
          const mesh = new THREE.Mesh(m.geometry, this._material(info, axis));
          mesh.name = id;
          mesh.userData.id = id;
          mesh.renderOrder = info.system === "skin" ? 2 : 0;
          this.scene.add(mesh);
          this.parts.set(id, { mesh, info });
        }
        progress.set(sys, 1);
        report();
      })
    );
    const box = new THREE.Box3();
    for (const p of this.parts.values()) box.union(p.mesh.geometry.boundingBox);
    this.aoPass?.setSceneClipBox(box);
    this._buildBvhIdle();
    this._applyVisibility();
    this.invalidate();
  }

  _material(info, axis) {
    const st = SYSTEM_STYLE[info.system] || SYSTEM_STYLE.muscular;
    let color = st.color;
    const lname = info.name.toLowerCase();
    for (const [re, col] of NAME_COLORS) if (re.test(lname)) { color = col; break; }
    const c = new THREE.Color(color);
    if (st.jitter) {
      // deterministic per-structure tint so neighbouring muscles are distinguishable
      let h = 0;
      for (const ch of info.base) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
      const j = ((h % 1000) / 1000 - 0.5) * 2 * st.jitter;
      c.offsetHSL(j * 0.12, j * 0.4, j * 0.55);
    }
    const isSkin = info.system === "skin" && !/hairs|eyebrows/.test(lname);
    const isHair = /hairs|eyebrows/.test(lname);
    const mat = new THREE.MeshPhysicalMaterial({
      color: c,
      roughness: isHair ? 0.8 : st.roughness,
      metalness: 0,
      side: THREE.DoubleSide,
      sheen: st.sheen || 0,
      sheenRoughness: 0.45,
      sheenColor: new THREE.Color(c).lerp(new THREE.Color(0xffffff), 0.45),
      clearcoat: st.clearcoat || 0,
      clearcoatRoughness: 0.35,
      transparent: isSkin,
      opacity: isSkin ? this.skinOpacity : 1,
      depthWrite: !isSkin,
    });
    const cut = new THREE.Color(c).multiplyScalar(info.system === "skeletal" ? 0.85 : 0.6);
    mat.userData.u = { uAxis: { value: axis }, uGhost: { value: 0 }, uCutColor: { value: cut } };
    mat.userData.isSkin = isSkin;
    installShader(mat, isHair ? "ORGAN" : st.kind, mat.userData.u);
    return mat;
  }

  _buildBvhIdle() {
    const list = [...this.parts.values()];
    let i = 0;
    const later = window.requestIdleCallback || ((f) => setTimeout(() => f({ timeRemaining: () => 8 }), 16));
    const step = (deadline) => {
      while (i < list.length && deadline.timeRemaining() > 2) {
        const g = list[i++].mesh.geometry;
        if (!g.boundsTree) g.computeBoundsTree();
      }
      if (i < list.length) later(step);
    };
    later(step);
  }

  // ---------- visibility ----------
  setSystemVisible(sys, on) {
    on ? this.systemsVisible.add(sys) : this.systemsVisible.delete(sys);
    this._applyVisibility();
  }
  setSkinOpacity(v) {
    this.skinOpacity = v;
    for (const { mesh } of this.parts.values()) if (mesh.material.userData.isSkin) {
      mesh.material.opacity = v;
      mesh.material.depthWrite = v > 0.95;
    }
    this.invalidate();
  }
  hide(ids) { for (const id of ids) this.hidden.add(id); this._applyVisibility(); }
  showAll() { this.hidden.clear(); this.isolated = null; this.spotSystems = null; this._setXray([]); this._applyVisibility(); }
  // Ghost everything except `ids`. With `systems`, parts of other systems are hidden outright
  // (so e.g. skull + muscles don't stack up in front of a brain structure).
  isolate(ids, ghostOpacity = 0.08, systems = null) {
    this.isolated = ids && ids.length ? new Set(ids) : null;
    this.ghostOpacity = ghostOpacity;
    this.spotSystems = this.isolated && systems ? new Set(systems) : null;
    if (!this.isolated) { this._setXray([]); this._spotTargets = null; }
    this._applyVisibility();
  }
  // Translucent copies of the target drawn on top of everything, so it shows through whatever is in front.
  _setXray(ids) {
    for (const m of this._xray || []) this.scene.remove(m);
    this._xray = [];
    if (!ids.length) return;
    // drawn only where something solid sits in front of the target (GreaterDepth)
    this._xrayMat ||= new THREE.MeshBasicMaterial({ color: 0xffc93c, transparent: true, opacity: 0.45, depthFunc: THREE.GreaterDepth, depthWrite: false });
    for (const id of ids) {
      const p = this.parts.get(id);
      if (!p) continue;
      const m = new THREE.Mesh(p.mesh.geometry, this._xrayMat);
      m.renderOrder = 1000;
      m.raycast = () => {};
      this.scene.add(m);
      this._xray.push(m);
    }
    this.invalidate();
  }

  isVisible(id) {
    const p = this.parts.get(id);
    return !!p && p.mesh.visible && !(this.isolated && !this.isolated.has(id));
  }

  _applyVisibility() {
    for (const [id, p] of this.parts) {
      const sys = p.info.system;
      let vis = this.systemsVisible.has(sys) && !this.hidden.has(id);
      const ghost = !!this.isolated && !this.isolated.has(id);
      if (ghost && this.spotSystems && !this.spotSystems.has(sys)) vis = false;
      p.mesh.visible = vis || (this.isolated?.has(id) ?? false);
      const m = p.mesh.material;
      m.userData.u.uGhost.value = ghost ? 1 : 0;
      if (m.userData.isSkin) { if (this.isolated) p.mesh.visible = false; continue; }
      // spotlight targets render after the ghosts (transparent pass, higher order) so faded layers never wash them out
      const target = !!this._spotTargets?.has(id);
      p.mesh.renderOrder = target ? 10 : 0;
      const wantT = ghost || target;
      if (m.transparent !== wantT) m.needsUpdate = true;
      m.transparent = wantT;
      m.opacity = ghost ? this.ghostOpacity * (sys === "skeletal" && this.spotSystems ? 0.6 : 1) : 1;
      m.depthWrite = !ghost;
      if (target) m.opacity = 1;
    }
    this.invalidate();
  }

  // ---------- cross-section ----------
  // axis: null | "transverse" | "sagittal" | "coronal"; t in 0..1 across the body
  setClip(axis, t = 0.5) {
    if (!axis) {
      this.clip = null;
      this.renderer.clippingPlanes = [];
      SHARED.uCut.value = 0;
    } else {
      const [a, b] = CLIP_RANGE[axis];
      const n = CLIP_AXES[axis];
      const pos = a + (b - a) * t;
      // keep the part of the body "below" the plane: transverse keeps feet→cut, sagittal keeps body's right, coronal keeps back
      const plane = new THREE.Plane(n.clone(), pos);
      this.clip = { axis, plane };
      this.renderer.clippingPlanes = [plane];
      SHARED.uCut.value = 1;
    }
    this.raycaster.firstHitOnly = !this.clip;
    this.invalidate();
  }

  // ---------- selection / highlight ----------
  select(ids, related = []) {
    this.selected = new Set(ids);
    this.related = new Set(related.filter((r) => !this.selected.has(r)));
    this.invalidate();
  }
  mark(ids, color) { for (const id of ids) this.marks.set(id, color); this.invalidate(); }
  unmark(id) { this.marks.delete(id); this.invalidate(); }
  clearMarks() { this.marks.clear(); this.invalidate(); }

  _updateEmissive() {
    const pulse = 0.5 + 0.5 * Math.sin(this._pulse * 4);
    for (const [id, p] of this.parts) {
      const m = p.mesh.material;
      let col = 0x000000, k = 0;
      if (this.marks.has(id)) { col = this.marks.get(id); k = 0.3 + 0.3 * pulse; }
      if (this.related.has(id)) { col = 0x3fb6ff; k = 0.16; }
      if (this.selected.has(id)) { col = 0xffc93c; k = 0.42; }
      if (this.hoverId === id && !this.selected.has(id)) { col = 0x7fd8ff; k = 0.22; }
      if (k === 0 && m.emissiveIntensity === 0) continue;
      m.emissive.setHex(col);
      m.emissiveIntensity = k;
    }
  }

  // Fade everything except `ids` (+ optional solid `context`), highlight `ids`, and fly the camera in.
  spotlight(ids, { context = [], pad = 1.45, ghost = 0.1, highlight = true, xray = true } = {}) {
    if (!ids.length) return;
    this.isolated = null;
    this.spotSystems = null;
    this._applyVisibility();
    const dir = this.bestDir(ids);
    const systems = new Set(["skeletal"]);
    for (const id of [...ids, ...context]) { const p = this.parts.get(id); if (p) systems.add(p.info.system); }
    // muscles give useful context for nerves and vessels in the limbs
    if (systems.has("nerves") || systems.has("cardio")) systems.add("muscular");
    const g = systems.has("nervous") && this.parts.get(ids[0])?.info.system === "nervous" ? Math.min(ghost, 0.05) : ghost;
    this._lastSpot = { keep: [...ids, ...context], ghost: g, systems: [...systems], xray: xray ? ids : [], targets: ids };
    this._spotTargets = new Set(ids);
    this.isolate(this._lastSpot.keep, g, this._lastSpot.systems);
    this._setXray(this._lastSpot.xray);
    if (highlight) this.select(ids);
    this.focus(ids, { dir, pad });
  }
  clearSpotlight() { this._lastSpot = null; this.isolate(null); this.select([]); }
  // Flip between "spotlight" and "whole body" without moving the camera.
  toggleContext() {
    if (this.isolated) { this.isolate(null); return; }
    const l = this._lastSpot;
    if (!l) return;
    this._spotTargets = new Set(l.targets);
    this.isolate(l.keep, l.ghost, l.systems);
    this._setXray(l.xray);
  }

  // ---------- camera ----------
  boundsOf(ids) {
    const box = new THREE.Box3();
    for (const id of ids) {
      const p = this.parts.get(id);
      if (p) box.union(p.mesh.geometry.boundingBox);
    }
    return box;
  }
  focus(ids, { pad = 1.6, dir = null } = {}) {
    const box = this.boundsOf(ids);
    if (box.isEmpty()) return;
    const sphere = box.getBoundingSphere(new THREE.Sphere());
    const r = Math.max(sphere.radius, 0.035);
    const vf = THREE.MathUtils.degToRad(this.camera.fov / 2);
    const hf = Math.atan(Math.tan(vf) * this.camera.aspect);
    const dist = (r * pad) / Math.sin(Math.min(vf, hf));
    const d = dir ? dir.clone().normalize() : this.camera.position.clone().sub(this.controls.target).normalize();
    this._animateTo(sphere.center, sphere.center.clone().addScaledVector(d, dist));
  }
  // Direction from which the structures are least hidden by others.
  bestDir(ids) {
    const box = this.boundsOf(ids);
    const c = box.getCenter(new THREE.Vector3());
    const side = Math.sign(c.x) || 1;
    const dirs = [
      [0, 0.12, 1], [0, 0.12, -1], [side, 0.1, 0], [side, 0.1, 0.8], [side, 0.1, -0.8], [-side, 0.1, 0.6], [0, -0.6, 0.8], [0, 0.8, 0.5],
    ].map((v) => new THREE.Vector3(...v).normalize());
    let best = dirs[0], bestScore = -1;
    for (const d of dirs) {
      const s = this._visibilityScore(ids, box, d);
      if (s > bestScore + 0.01) { bestScore = s; best = d; }
    }
    return best;
  }
  focusSmart(ids) { this.focus(ids, { dir: this.bestDir(ids) }); }
  _visibilityScore(ids, box, dir) {
    const set = new Set(ids);
    const targets = this._pickables(true);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const u = new THREE.Vector3().crossVectors(dir, Math.abs(dir.y) > 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0)).normalize();
    const v = new THREE.Vector3().crossVectors(dir, u).normalize();
    const s = Math.max(size.x, size.y, size.z) * 0.28;
    const offsets = [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1], [0.7, 0.7], [-0.7, -0.7]];
    let hits = 0;
    for (const [ou, ov] of offsets) {
      const p = center.clone().addScaledVector(u, ou * s).addScaledVector(v, ov * s);
      this.raycaster.set(p.addScaledVector(dir, 3), dir.clone().negate());
      const hit = this._firstVisibleHit(targets);
      if (hit && set.has(hit.object.userData.id)) hits++;
    }
    return hits;
  }
  fitDistance() {
    const vf = THREE.MathUtils.degToRad(this.camera.fov / 2);
    const hf = Math.atan(Math.tan(vf) * this.camera.aspect);
    return Math.max(0.92 / Math.tan(vf), 0.42 / Math.tan(hf)) * 1.04;
  }
  setView(name) {
    const t = new THREE.Vector3(0, 0.86, 0);
    const D = this.fitDistance();
    const pos = {
      front: [0, 0.95, D], back: [0, 0.95, -D], left: [D, 0.95, 0], right: [-D, 0.95, 0], top: [0, D + 0.9, 0.01],
    }[name] || [0, 0.95, D];
    this._animateTo(t, new THREE.Vector3(...pos));
  }
  _animateTo(target, pos) {
    this._tween = { t: 0, fromT: this.controls.target.clone(), fromP: this.camera.position.clone(), toT: target.clone(), toP: pos.clone() };
    this.invalidate();
  }

  // ---------- picking ----------
  _pickables(ignoreIsolation = false) {
    const out = [];
    for (const p of this.parts.values()) {
      const m = p.mesh;
      if (!m.visible) continue;
      if (!ignoreIsolation && this.isolated && !this.isolated.has(p.info.id)) continue;
      if (m.material.userData.isSkin && this.skinOpacity < 0.5) continue;
      if (!ignoreIsolation && this.pickFilter && !this.pickFilter(p.info)) continue;
      out.push(m);
    }
    return out;
  }
  _firstVisibleHit(targets) {
    const hits = this.raycaster.intersectObjects(targets, false);
    if (!this.clip) return hits[0] || null;
    hits.sort((a, b) => a.distance - b.distance);
    return hits.find((h) => this.clip.plane.distanceToPoint(h.point) >= 0) || null;
  }
  pickAt(clientX, clientY) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1);
    this.raycaster.setFromCamera(ndc, this.camera);
    const hit = this._firstVisibleHit(this._pickables());
    return hit ? { id: hit.object.userData.id, point: hit.point } : null;
  }
  _bindPointer() {
    const el = this.renderer.domElement;
    let down = null, hoverQueued = null;
    el.addEventListener("pointerdown", (e) => (down = { x: e.clientX, y: e.clientY, t: performance.now() }));
    el.addEventListener("pointerup", (e) => {
      if (!down) return;
      const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
      if (moved < 6 && performance.now() - down.t < 600) {
        const hit = this.pickAt(e.clientX, e.clientY);
        this.onPick?.(hit?.id ?? null, hit?.point ?? null, e);
      }
      down = null;
    });
    el.addEventListener("dblclick", (e) => {
      const hit = this.pickAt(e.clientX, e.clientY);
      if (hit) this.focus([hit.id], { pad: 2.2 });
    });
    el.addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse" || e.buttons) return;
      hoverQueued = e;
    });
    el.addEventListener("pointerleave", () => { this.hoverId = null; this.invalidate(); this.onHover?.(null); });
    this._hoverTick = () => {
      if (!hoverQueued) return;
      const e = hoverQueued; hoverQueued = null;
      const hit = this.pickAt(e.clientX, e.clientY);
      const id = hit?.id ?? null;
      if (id !== this.hoverId) { this.hoverId = id; this.invalidate(); }
      this.onHover?.(id, e.clientX, e.clientY);
    };
  }

  // Screen position of a part's centre (for labels). Uses the visible surface point nearest the centre when possible.
  screenPos(id) {
    const p = this.parts.get(id);
    if (!p) return null;
    p.mesh.geometry.boundingBox.getCenter(tmpV);
    tmpV.project(this.camera);
    if (tmpV.z > 1) return null;
    const rect = this.renderer.domElement.getBoundingClientRect();
    return { x: (tmpV.x * 0.5 + 0.5) * rect.width, y: (-tmpV.y * 0.5 + 0.5) * rect.height };
  }

  _frame() {
    const dt = this.clock.getDelta();
    this._pulse += dt;
    if (this._tween) {
      const tw = this._tween;
      tw.t = Math.min(1, tw.t + dt / 0.8);
      const k = 1 - Math.pow(1 - tw.t, 3);
      this.controls.target.lerpVectors(tw.fromT, tw.toT, k);
      this.camera.position.lerpVectors(tw.fromP, tw.toP, k);
      if (tw.t >= 1) this._tween = null;
      this._dirty = true;
    }
    this._hoverTick?.();
    if (this.controls.update()) this._dirty = true;
    if (this.marks.size) this._dirty = true; // pulsing highlight
    if (!this._dirty) return;
    this._dirty = false;
    this._updateEmissive();
    if (this._aoActive()) this.composer.render();
    else this.renderer.render(this.scene, this.camera);
    this.onFrame?.();
  }
}

function localStorageGet(k) { try { return localStorage.getItem(k); } catch { return null; } }
