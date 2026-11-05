// 3D anatomy viewer: loads per-system GLBs, handles picking, highlighting, hiding, isolating and camera moves.
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "three/addons/libs/meshopt_decoder.module.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from "three-mesh-bvh";

THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
THREE.Mesh.prototype.raycast = acceleratedRaycast;

// Base colours per system; a few names get their own colour.
const SYSTEM_STYLE = {
  muscular: { color: 0xa93a33, roughness: 0.52, jitter: 0.07 },
  connective: { color: 0xe6dfcc, roughness: 0.32 },
  skeletal: { color: 0xe8dcc0, roughness: 0.62 },
  nervous: { color: 0xe4b3a6, roughness: 0.55 },
  cardio: { color: 0xb3222b, roughness: 0.38 },
  respiratory: { color: 0xe39ba1, roughness: 0.6 },
  digestive: { color: 0xd99482, roughness: 0.45 },
  urinary: { color: 0x9a3a34, roughness: 0.45 },
  endocrine: { color: 0xc58a3a, roughness: 0.5 },
  reproductive: { color: 0xd395a3, roughness: 0.5 },
  lymphatic: { color: 0x6e2a4c, roughness: 0.5 },
  skin: { color: 0xd9a383, roughness: 0.6 },
};
const NAME_COLORS = [
  [/vein|vena cava|coronary sinus|cardiac veins|veins of ventricle/, 0x2f5db5],
  [/valve/, 0xe2c79c],
  [/wall of heart/, 0x9a2b2c],
  [/papillary/, 0x8a2426],
  [/liver/, 0x7a2b24],
  [/gallbladder/, 0x4e7a38],
  [/stomach|duodenum/, 0xd7897a],
  [/jejunum|ileum/, 0xe3a38c],
  [/colon|rectum|appendix|taenia/, 0xc4846e],
  [/pancrea/, 0xe5bf78],
  [/esophagus/, 0xc4685a],
  [/kidney/, 0x8e3330],
  [/ureter|bladder|urethra/, 0xe0b06a],
  [/adrenal/, 0xd29a3a],
  [/thymus/, 0xd7b19e],
  [/pituitary|pineal/, 0xb889d6],
  [/trachea|bronchus|thyroid cartilage|nasal cartilages/, 0xe6d6c2],
  [/intervertebral disk|costal cartilage/, 0xc6dbe2],
  [/tooth/, 0xf6f1e4],
  [/gingiva|labial part of mouth/, 0xd47c80],
  [/ventricle|aqueduct|foramen|central canal/, 0x6fa4dc],
  [/optic|eyeball/, 0xf0e2b0],
  [/white matter|callosum|capsule|fornix|commissure/, 0xf1e6d6],
  [/thalam|caudate|putamen|pallidus|amygdala|hippocampus|mammillary|geniculate|colliculus|pons|medulla|midbrain|cerebell/, 0xd4a090],
  [/hairs|eyebrows/, 0x3b2a1f],
  [/diaphragm/, 0xa8463e],
];

const tmpV = new THREE.Vector3();

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

export class Viewer {
  constructor(container) {
    this.container = container;
    this.parts = new Map(); // id -> { mesh, info }
    this.systemsVisible = new Set();
    this.hidden = new Set();
    this.isolated = null; // Set of ids or null
    this.selected = new Set();
    this.related = new Set();
    this.marks = new Map(); // id -> color hex (pain / quiz highlights)
    this.hoverId = null;
    this.skinOpacity = 0.35;
    this.onPick = null;
    this.onHover = null;
    this.pickFilter = null;
    this._tween = null;
    this._pulse = 0;
    this._dirty = true;

    const r = (this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" }));
    r.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 1.05;
    r.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(r.domElement);

    this.scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(r);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environmentIntensity = 0.55;

    this.camera = new THREE.PerspectiveCamera(35, 1, 0.01, 50);
    this.camera.position.set(0, 1.0, 3.6);
    const key = new THREE.DirectionalLight(0xfff4e8, 1.6);
    key.position.set(1.5, 2.5, 3);
    const rim = new THREE.DirectionalLight(0xbfd8ff, 1.0);
    rim.position.set(-2, 1.5, -2.5);
    const fill = new THREE.HemisphereLight(0xf2f6ff, 0x3a2a26, 0.55);
    this.scene.add(key, rim, fill);

    const c = (this.controls = new OrbitControls(this.camera, r.domElement));
    c.target.set(0, 0.95, 0);
    c.enableDamping = true;
    c.dampingFactor = 0.09;
    c.minDistance = 0.08;
    c.maxDistance = 6;
    c.zoomToCursor = true;
    c.rotateSpeed = 0.8;
    c.addEventListener("start", () => (this._tween = null));
    c.addEventListener("change", () => this.invalidate());

    this.raycaster = new THREE.Raycaster();
    this.raycaster.firstHitOnly = true;
    this._bindPointer();
    new ResizeObserver(() => this.resize()).observe(container);
    this.resize();
    this.camera.position.set(0, 0.95, this.fitDistance());
    this.controls.target.set(0, 0.86, 0);
    this.clock = new THREE.Clock();
    r.setAnimationLoop(() => this._frame());
  }

  resize() {
    const { clientWidth: w, clientHeight: h } = this.container;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.invalidate();
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
          const mesh = new THREE.Mesh(m.geometry, this._material(info));
          mesh.name = id;
          mesh.userData.id = id;
          mesh.renderOrder = info.system === "skin" ? 2 : 0;
          this.scene.add(mesh);
          this.parts.set(id, { mesh, info, base: mesh.material.color.clone() });
        }
        progress.set(sys, 1);
        report();
      })
    );
    this._buildBvhIdle();
    this._applyVisibility();
    this.invalidate();
  }

  _material(info) {
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
      c.offsetHSL(j * 0.15, j * 0.5, j * 0.6);
    }
    const isSkin = info.system === "skin" && !/hairs|eyebrows/.test(lname);
    const mat = new THREE.MeshStandardMaterial({
      color: c,
      roughness: st.roughness,
      metalness: 0,
      side: THREE.DoubleSide,
      transparent: isSkin,
      opacity: isSkin ? this.skinOpacity : 1,
      depthWrite: !isSkin,
    });
    mat.userData.isSkin = isSkin;
    return mat;
  }

  _buildBvhIdle() {
    const list = [...this.parts.values()];
    let i = 0;
    const step = (deadline) => {
      while (i < list.length && (deadline?.timeRemaining?.() ?? 1) > 2) {
        const g = list[i++].mesh.geometry;
        if (!g.boundsTree) g.computeBoundsTree();
      }
      if (i < list.length) (window.requestIdleCallback || ((f) => setTimeout(() => f(), 16)))(step);
    };
    (window.requestIdleCallback || ((f) => setTimeout(() => f(), 16)))(step);
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
  showAll() { this.hidden.clear(); this.isolated = null; this._applyVisibility(); }
  isolate(ids) { this.isolated = ids && ids.length ? new Set(ids) : null; this._applyVisibility(); }

  isVisible(id) {
    const p = this.parts.get(id);
    return !!p && p.mesh.visible && !(this.isolated && !this.isolated.has(id));
  }

  _applyVisibility() {
    for (const [id, p] of this.parts) {
      const vis = this.systemsVisible.has(p.info.system) && !this.hidden.has(id);
      const ghost = this.isolated && !this.isolated.has(id);
      p.mesh.visible = vis || (this.isolated?.has(id) ?? false);
      const m = p.mesh.material;
      if (m.userData.isSkin) continue;
      const want = !!ghost;
      if (m.transparent !== want) m.needsUpdate = true;
      m.transparent = want; m.opacity = want ? 0.06 : 1; m.depthWrite = !want;
    }
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
      if (this.marks.has(id)) { col = this.marks.get(id); k = 0.35 + 0.35 * pulse; }
      if (this.related.has(id)) { col = 0x3fb6ff; k = 0.18; }
      if (this.selected.has(id)) { col = 0xffc93c; k = 0.48; }
      if (this.hoverId === id && !this.selected.has(id)) { col = 0x7fd8ff; k = 0.25; }
      if (k === 0 && m.emissiveIntensity === 0) continue;
      m.emissive.setHex(col);
      m.emissiveIntensity = k;
    }
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
    const r = Math.max(sphere.radius, 0.04);
    const dist = (r * pad) / Math.sin(THREE.MathUtils.degToRad(this.camera.fov / 2));
    const d = dir ? dir.clone().normalize() : this.camera.position.clone().sub(this.controls.target).normalize();
    this._animateTo(sphere.center, sphere.center.clone().addScaledVector(d, dist));
  }
  // Point the camera at the side of the body where the structure is visible (front/back/side).
  focusSmart(ids) {
    const box = this.boundsOf(ids);
    if (box.isEmpty()) return;
    const c = box.getCenter(new THREE.Vector3());
    const dirs = [new THREE.Vector3(0, 0.15, 1), new THREE.Vector3(0, 0.15, -1), new THREE.Vector3(Math.sign(c.x) || 1, 0.1, 0.35)];
    let best = dirs[0], bestScore = -1;
    for (const d of dirs) {
      const s = this._visibilityScore(ids, c, d.clone().normalize());
      if (s > bestScore) { bestScore = s; best = d; }
    }
    this.focus(ids, { dir: best });
  }
  _visibilityScore(ids, center, dir) {
    const set = new Set(ids);
    const targets = this._pickables();
    let hits = 0;
    const offsets = [[0, 0], [0.02, 0], [-0.02, 0], [0, 0.03], [0, -0.03]];
    for (const [ox, oy] of offsets) {
      const p = center.clone().add(new THREE.Vector3(ox, oy, 0));
      this.raycaster.set(p.clone().addScaledVector(dir, 3), dir.clone().negate());
      const hit = this.raycaster.intersectObjects(targets, false)[0];
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
  }

  // ---------- picking ----------
  _pickables() {
    const out = [];
    for (const p of this.parts.values()) {
      const m = p.mesh;
      if (!m.visible) continue;
      if (this.isolated && !this.isolated.has(p.info.id)) continue;
      if (m.material.userData.isSkin && this.skinOpacity < 0.5) continue;
      if (this.pickFilter && !this.pickFilter(p.info)) continue;
      out.push(m);
    }
    return out;
  }
  pickAt(clientX, clientY) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1);
    this.raycaster.setFromCamera(ndc, this.camera);
    const hit = this.raycaster.intersectObjects(this._pickables(), false)[0];
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

  // Screen position of a part's centre (for labels).
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
      tw.t = Math.min(1, tw.t + dt / 0.75);
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
    this.renderer.render(this.scene, this.camera);
    this.onFrame?.();
  }
}
