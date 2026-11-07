// Muscle actions: animate joints of the real skeleton (rigid bones rotating about pivots/axes measured
// from the bone meshes) while the muscles that produce the movement deform with them (each vertex follows
// the bone it is nearest, blended across the joint) and bulge as they shorten.
import * as THREE from "three";
import { pretty, store, saveStore, addXP, $, h, esc } from "./util.js";

const V = (x, y, z) => new THREE.Vector3(x, y, z);

// Bone groups (base names, whole-name regexes).
const HAND = /^(scaphoid|lunate|triquetral|pisiform|trapezium|trapezoid|capitate|hamate)$|metacarpal bone$|phalanx of (thumb|index finger|middle finger|ring finger|little finger)$/;
const FOREARM = /^(radius|ulna)$/;
const ARM = /^humerus$/;
const FOOT = /^(talus|calcaneus|navicular bone of foot|cuboid bone|(medial|intermediate|lateral) cuneiform bone|sesamoid bone of foot)$|metatarsal bone$|phalanx of (big|second|third|fourth|little) toe$/;
const LEG = /^(tibia|fibula)$/;
const THIGH = /^(femur|patella)$/;
const JAW = /^mandible$|^lower .*tooth$|^gingiva of lower jaw$/;
const SHOULDER_PROX = /^(scapula|clavicle|manubrium|body of sternum|xiphoid process|sacrum|hip bone)$|rib$|costal cartilage$|thoracic vertebra$|lumbar vertebra$/;
const SKULL = /^(frontal|parietal|occipital|temporal|sphenoid|zygomatic|nasal|lacrimal|palatine) bone$|^(maxilla|ethmoid|vomer|hyoid bone)$|^upper .*tooth$|^gingiva of upper jaw$/;

// Movements. Angles are degrees; `sign` turns "positive = the named movement" into a rotation about the axis
// for the body's RIGHT side (x < 0). Phase A runs range[0] → range[1], phase B back again.
export const MOVES = [
  { id: "jaw", name: "Jaw opening ↔ closing", region: "Head & neck", joint: "tmj", axis: "x", range: [0, 26], sign: 1, view: [-1, 0.15, 0.45], both: true,
    a: { label: "Opening (depression)", muscles: ["lateral pterygoid", "digastric", "mylohyoid", "geniohyoid"] },
    b: { label: "Closing (elevation)", muscles: ["masseter", "temporalis", "medial pterygoid"] },
    text: "The mandible hinges at the temporomandibular joint; for a wide opening the condyle also glides forward onto the articular eminence, pulled by lateral pterygoid. Masseter, temporalis and medial pterygoid close the jaw — temporalis and masseter are among the strongest muscles for their size." },
  { id: "sh-abd", name: "Shoulder abduction ↔ adduction", region: "Upper limb", joint: "shoulder", axis: "z", range: [0, 90], sign: -1, view: [-0.15, 0.1, 1],
    a: { label: "Abduction", muscles: ["supraspinatus", "acromial part of deltoid"] },
    b: { label: "Adduction", muscles: ["pectoralis major", "latissimus dorsi", "teres major"] },
    text: "Supraspinatus initiates abduction (first ~15°), then the acromial (middle) deltoid takes over. Beyond ~90° the scapula must rotate upward (trapezius + serratus anterior) — here only the glenohumeral joint moves. Adduction is mostly gravity, powered by pec major, lat dorsi and teres major against resistance." },
  { id: "sh-flex", name: "Shoulder flexion ↔ extension", region: "Upper limb", joint: "shoulder", axis: "x", range: [-30, 90], sign: -1, view: [-1, 0.12, 0.2],
    a: { label: "Flexion", muscles: ["clavicular part of deltoid", "clavicular part of pectoralis major", "coracobrachialis", "biceps brachii"] },
    b: { label: "Extension", muscles: ["latissimus dorsi", "teres major", "spinal part of deltoid", "long head of triceps brachii"] },
    text: "Flexion raises the arm forward: anterior (clavicular) deltoid and the clavicular head of pec major are prime movers, helped by coracobrachialis and biceps. Extension swings it back: lat dorsi, teres major, posterior (spinal) deltoid and the long head of triceps." },
  { id: "sh-rot", name: "Shoulder lateral ↔ medial rotation", region: "Upper limb", joint: "shoulder", axis: "rot", range: [-55, 45], sign: 1, view: [-0.35, 0.9, 0.7],
    pre: [{ joint: "elbow", axis: "x", deg: 90, sign: -1 }],
    a: { label: "Lateral rotation", muscles: ["infraspinatus", "teres minor", "spinal part of deltoid"] },
    b: { label: "Medial rotation", muscles: ["subscapularis", "pectoralis major", "latissimus dorsi", "teres major", "clavicular part of deltoid"] },
    text: "With the elbow bent to 90°, rotation of the humerus swings the forearm out and in. Infraspinatus and teres minor (rotator cuff) are the main lateral rotators; subscapularis, pec major, lat dorsi and teres major rotate medially — which is why medial rotation is the stronger direction." },
  { id: "elbow", name: "Elbow flexion ↔ extension", region: "Upper limb", joint: "elbow", axis: "x", range: [0, 140], sign: -1, view: [-1, 0.12, 0.3],
    a: { label: "Flexion", muscles: ["biceps brachii", "brachialis", "brachioradialis"] },
    b: { label: "Extension", muscles: ["triceps brachii", "anconeus"] },
    text: "Brachialis is the workhorse flexor in every forearm position; biceps is strongest with the forearm supinated; brachioradialis with it mid-prone (thumb up). Triceps extends, its long head also crossing the shoulder. Watch the biceps bulge as it shortens." },
  { id: "pron", name: "Forearm pronation ↔ supination", region: "Upper limb", joint: "radioulnar", axis: "ru", range: [0, 150], sign: -1, view: [-0.15, 0.25, 1],
    pre: [{ joint: "elbow", axis: "x", deg: 90, sign: -1 }],
    a: { label: "Pronation", muscles: ["pronator teres", "pronator quadratus"] },
    b: { label: "Supination", muscles: ["supinator", "biceps brachii"] },
    text: "The radius rolls around the fixed ulna, pivoting at the proximal and distal radio-ulnar joints. Pronator quadratus is the main pronator, joined by pronator teres for speed or force. Supinator works alone for slow, unresisted supination; biceps adds power (think turning a screwdriver)." },
  { id: "wrist", name: "Wrist flexion ↔ extension", region: "Upper limb", joint: "wrist", axis: "x", range: [-60, 70], sign: -1, view: [-1, 0.1, 0.25],
    a: { label: "Flexion", muscles: ["flexor carpi radialis", "flexor carpi ulnaris", "palmaris longus"] },
    b: { label: "Extension", muscles: ["extensor carpi radialis longus", "extensor carpi radialis brevis", "extensor carpi ulnaris"] },
    text: "The wrist flexors arise from the medial epicondyle (common flexor origin), the extensors from the lateral epicondyle (common extensor origin) — overuse gives golfer's and tennis elbow respectively. Extensors also stabilise the wrist during a power grip." },
  { id: "hip-flex", name: "Hip flexion ↔ extension", region: "Lower limb", joint: "hip", axis: "x", range: [-20, 75], sign: -1, view: [-1, 0.1, 0.2],
    a: { label: "Flexion", muscles: ["iliacus", "psoas major", "rectus femoris", "sartorius", "tensor fasciae latae"] },
    b: { label: "Extension", muscles: ["gluteus maximus", "long head of biceps femoris", "semitendinosus", "semimembranosus"] },
    text: "Iliopsoas (iliacus + psoas major) is the strongest hip flexor, helped by rectus femoris, sartorius and TFL. Gluteus maximus extends powerfully (climbing stairs, rising from a chair) with the hamstrings, which also cross the knee." },
  { id: "hip-abd", name: "Hip abduction ↔ adduction", region: "Lower limb", joint: "hip", axis: "z", range: [-10, 40], sign: -1, view: [-0.3, 0.1, 1],
    a: { label: "Abduction", muscles: ["gluteus medius", "gluteus minimus", "tensor fasciae latae"] },
    b: { label: "Adduction", muscles: ["adductor longus", "adductor brevis", "adductor magnus", "gracilis", "pectineus"] },
    text: "Gluteus medius and minimus abduct the hip — and, crucially, hold the pelvis level when you stand on one leg; weakness gives a Trendelenburg sign. The adductor group (obturator nerve, plus the tibial part of sciatic for adductor magnus) pulls the thigh back in." },
  { id: "knee", name: "Knee flexion ↔ extension", region: "Lower limb", joint: "knee", axis: "x", range: [0, 125], sign: 1, view: [-1, 0.1, -0.05],
    a: { label: "Flexion", muscles: ["biceps femoris", "semitendinosus", "semimembranosus", "gastrocnemius", "popliteus"] },
    b: { label: "Extension", muscles: ["rectus femoris", "vastus lateralis", "vastus medialis", "vastus intermedius"] },
    text: "The hamstrings flex the knee, assisted by gastrocnemius; popliteus 'unlocks' the fully extended knee by rotating the femur laterally on the tibia. The four quadriceps heads extend it through the patellar ligament — the patella increases their leverage." },
  { id: "ankle", name: "Ankle plantarflexion ↔ dorsiflexion", region: "Lower limb", joint: "ankle", axis: "ank", range: [-20, 45], sign: 1, view: [-1, 0.08, 0.1],
    a: { label: "Plantarflexion", muscles: ["gastrocnemius", "soleus", "calcaneal tendon", "tibialis posterior", "fibularis longus", "flexor hallucis longus"] },
    b: { label: "Dorsiflexion", muscles: ["tibialis anterior", "extensor digitorum longus", "extensor hallucis longus", "fibularis tertius"] },
    text: "Gastrocnemius and soleus (triceps surae) plantarflex via the calcaneal (Achilles) tendon — the push-off in walking. The anterior compartment (deep fibular nerve) dorsiflexes; its paralysis causes foot drop. The ankle axis runs between the malleolar tips, slightly oblique." },
  { id: "subtalar", name: "Foot inversion ↔ eversion", region: "Lower limb", joint: "subtalar", axis: "st", range: [-15, 25], sign: 1, view: [-0.25, 0.35, 1],
    a: { label: "Inversion", muscles: ["tibialis anterior", "tibialis posterior"] },
    b: { label: "Eversion", muscles: ["fibularis longus", "fibularis brevis", "fibularis tertius"] },
    text: "Inversion and eversion happen mainly at the subtalar and transverse tarsal joints, around an oblique axis. Tibialis anterior and posterior invert; the fibularis (peroneus) muscles evert. Most ankle sprains are inversion injuries to the lateral ligaments." },
];

const ORDER = ["tmj", "shoulder", "elbow", "radioulnar", "wrist", "hip", "knee", "ankle", "subtalar"];

export function initMotion(app) {
  const v = app.viewer;
  let J = null; // joints, computed lazily from bone meshes
  const st = { move: null, playing: true, speed: 1, t: 0, u: 0, phase: null, rig: null, onUpdate: null };

  const parts = (fn) => app.parts.filter(fn);
  const bones = (re, side = "right") => parts((p) => p.system === "skeletal" && re.test(p.base) && (!p.side || side === "both" || p.side === side)).map((p) => p.id);
  const verts = (ids) => {
    const out = [];
    for (const id of ids) {
      const a = v.parts.get(id)?.mesh.geometry.attributes.position;
      if (a) for (let i = 0; i < a.count; i++) out.push(V(a.getX(i), a.getY(i), a.getZ(i)));
    }
    return out;
  };
  const centroid = (pts) => pts.reduce((a, p) => a.add(p), V(0, 0, 0)).multiplyScalar(1 / Math.max(1, pts.length));
  const ext = (pts, f, sign) => pts.reduce((b, p) => (b === null || sign * f(p) > sign * f(b) ? p : b), null);
  const slab = (pts, axis, fromTop, depth) => {
    const vals = pts.map((p) => p[axis]);
    const lim = fromTop ? Math.max(...vals) - depth : Math.min(...vals) + depth;
    return pts.filter((p) => (fromTop ? p[axis] >= lim : p[axis] <= lim));
  };
  const toPlusX = (a) => (a.x < 0 ? a.negate() : a).normalize();

  // ---------- joints (pivots + axes measured on this skeleton) ----------
  function computeJoints() {
    const hum = verts(bones(/^humerus$/)), rad = verts(bones(/^radius$/)), uln = verts(bones(/^ulna$/));
    const fem = verts(bones(/^femur$/)), tib = verts(bones(/^tibia$/)), fib = verts(bones(/^fibula$/));
    const top = slab(hum, "y", true, 0.05);
    const medX = top.map((p) => Math.abs(p.x)).sort((a, b) => a - b)[top.length >> 1];
    const head = centroid(top.filter((p) => Math.abs(p.x) <= medX));
    const humLow = slab(hum, "y", false, 0.03);
    const elbow = centroid(slab(hum, "y", false, 0.02));
    const elbowAxis = toPlusX(ext(humLow, (p) => p.x, 1).clone().sub(ext(humLow, (p) => p.x, -1)));
    const radHead = centroid(slab(rad, "y", true, 0.015));
    const ulnHead = centroid(slab(uln, "y", false, 0.015));
    const wristAxis = toPlusX(ext(rad, (p) => -p.y, 1).clone().sub(ext(uln, (p) => -p.y, 1)));
    const ftop = slab(fem, "y", true, 0.06);
    const fmed = ftop.map((p) => Math.abs(p.x)).sort((a, b) => a - b)[ftop.length >> 1];
    const hip = centroid(ftop.filter((p) => Math.abs(p.x) <= fmed));
    const femLow = slab(fem, "y", false, 0.035);
    const knee = centroid(slab(fem, "y", false, 0.025));
    const kneeAxis = toPlusX(ext(femLow, (p) => p.x, 1).clone().sub(ext(femLow, (p) => p.x, -1)));
    const medMall = ext(tib, (p) => -p.y, 1), latMall = ext(fib, (p) => -p.y, 1);
    const ankle = medMall.clone().add(latMall).multiplyScalar(0.5);
    const talus = centroid(verts(bones(/^talus$/))), nav = centroid(verts(bones(/^navicular bone of foot$/)));
    const calcPost = ext(verts(bones(/^calcaneus$/)), (p) => -p.z, 1);
    const mand = verts(bones(/^mandible$/, "both"));
    const tmj = centroid(slab(mand, "y", true, 0.012));
    const grp = (...res) => new Set(res.flatMap((re) => bones(re)));
    J = {
      tmj: { pivot: tmj, axes: { x: V(1, 0, 0) }, distal: new Set(bones(JAW, "both")), prox: new Set(bones(SKULL, "both")) },
      shoulder: { pivot: head, axes: { x: V(1, 0, 0), z: V(0, 0, 1), rot: elbow.clone().sub(head).normalize() }, distal: grp(ARM, FOREARM, HAND), prox: new Set(bones(SHOULDER_PROX)) },
      elbow: { pivot: elbow, axes: { x: elbowAxis }, distal: grp(FOREARM, HAND), prox: grp(ARM, /^(scapula|clavicle)$/) },
      radioulnar: { pivot: radHead, axes: { ru: ulnHead.clone().sub(radHead).normalize() }, distal: grp(/^radius$/, HAND), prox: grp(/^ulna$/, ARM) },
      wrist: { pivot: centroid(verts(bones(/^capitate$/))), axes: { x: wristAxis }, distal: grp(HAND), prox: grp(FOREARM, ARM) },
      hip: { pivot: hip, axes: { x: V(1, 0, 0), z: V(0, 0, 1) }, distal: grp(THIGH, LEG, FOOT), prox: grp(/^(hip bone|sacrum)$/, /lumbar vertebra$/) },
      knee: { pivot: knee, axes: { x: kneeAxis }, distal: grp(LEG, FOOT, /^patella$/), prox: grp(/^femur$/, /^hip bone$/) },
      ankle: { pivot: ankle, axes: { ank: toPlusX(latMall.clone().sub(medMall)) }, distal: grp(FOOT), prox: grp(LEG, /^femur$/) },
      subtalar: { pivot: talus, axes: { st: nav.clone().sub(calcPost).normalize() }, distal: new Set(bones(FOOT).filter((id) => app.byId.get(id).base !== "talus")), prox: grp(/^talus$/, LEG) },
    };
  }

  const matchWord = (base, s) => new RegExp(`(^|\\s)${s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}($|\\s)`).test(base);
  function muscleIds(names, both) {
    return parts((p) => (p.system === "muscular" || p.system === "connective") && names.some((n) => matchWord(p.base, n)) && (both || !p.side || p.side === "right")).map((p) => p.id);
  }

  // ---------- rig ----------
  function sampleSet(ids, per = 140) {
    const out = [];
    for (const id of ids) {
      const a = v.parts.get(id)?.mesh.geometry.attributes.position;
      if (!a) continue;
      const step = Math.max(1, Math.floor(a.count / per));
      for (let i = 0; i < a.count; i += step) out.push(a.getX(i), a.getY(i), a.getZ(i));
    }
    return new Float32Array(out);
  }
  function nearest(samples, x, y, z) {
    let best = Infinity;
    for (let i = 0; i < samples.length; i += 3) {
      const dx = samples[i] - x, dy = samples[i + 1] - y, dz = samples[i + 2] - z;
      const d = dx * dx + dy * dy + dz * dz;
      if (d < best) best = d;
    }
    return Math.sqrt(best);
  }
  const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

  function buildRig(move) {
    if (!J) computeJoints();
    const joints = [...(move.pre || []).map((p) => ({ ...p, fixed: true })), { joint: move.joint, axis: move.axis, sign: move.sign, drive: true }]
      .sort((a, b) => ORDER.indexOf(a.joint) - ORDER.indexOf(b.joint))
      .map((j) => ({ ...j, J: J[j.joint], mat: new THREE.Matrix4(), rot: new THREE.Matrix3() }));
    const allA = muscleIds(move.a.muscles, move.both), allB = muscleIds(move.b.muscles, move.both);
    const muscles = [...new Set([...allA, ...allB])];
    const boneIds = new Set(joints.flatMap((j) => [...j.J.distal]));
    const samples = joints.map((j) => ({ prox: sampleSet([...j.J.prox]), dist: sampleSet([...j.J.distal]) }));
    const meshes = muscles.map((id) => {
      const mesh = v.parts.get(id).mesh, g = mesh.geometry;
      const pos = g.attributes.position, nor = g.attributes.normal;
      const n = pos.count;
      const base = Float32Array.from(pos.array), baseN = Float32Array.from(nor.array);
      const w = joints.map(() => new Float32Array(n));
      joints.forEach((j, k) => {
        const s = samples[k];
        for (let i = 0; i < n; i++) {
          const x = base[i * 3], y = base[i * 3 + 1], z = base[i * 3 + 2];
          const dP = nearest(s.prox, x, y, z), dD = nearest(s.dist, x, y, z);
          w[k][i] = smooth(0.32, 0.68, dP / (dP + dD + 1e-9));
        }
      });
      // bulge profile: strongest mid-belly, none in tendons
      const axis = mesh.material.userData.u.uAxis.value;
      const tend = g.attributes.aTendon?.array;
      let lo = Infinity, hi = -Infinity;
      for (let i = 0; i < n; i++) { const d = base[i * 3] * axis.x + base[i * 3 + 1] * axis.y + base[i * 3 + 2] * axis.z; lo = Math.min(lo, d); hi = Math.max(hi, d); }
      const bulge = new Float32Array(n);
      for (let i = 0; i < n; i++) {
        const d = (base[i * 3] * axis.x + base[i * 3 + 1] * axis.y + base[i * 3 + 2] * axis.z - lo) / (hi - lo || 1);
        bulge[i] = Math.sin(Math.PI * d) * (1 - (tend ? tend[i] : 0));
      }
      const size = app.byId.get(id).size;
      return { id, mesh, g, base, baseN, w, bulge, amp: Math.min(0.007, size * 0.025), group: allA.includes(id) ? "a" : "b" };
    });
    // the swing must stay on screen: sphere around the moving joint covering everything that moves
    const piv = joints.find((j) => j.drive).J.pivot;
    let r = 0.08;
    for (const id of [...boneIds, ...muscles]) {
      const bb = v.parts.get(id)?.mesh.geometry.boundingBox;
      if (!bb) continue;
      for (const c of [bb.min, bb.max]) r = Math.max(r, c.distanceTo(piv));
    }
    return { joints, muscles, allA, allB, boneIds: [...boneIds], meshes, pivot: piv, radius: Math.min(r, 0.95) };
  }

  const tmpP = V(0, 0, 0), tmpN = V(0, 0, 0), tmpQ = V(0, 0, 0);
  function pose(rig, u) {
    const move = st.move;
    for (const j of rig.joints) {
      const deg = j.drive ? move.range[0] + (move.range[1] - move.range[0]) * u : j.deg;
      const ang = THREE.MathUtils.degToRad(deg * j.sign);
      const ax = j.J.axes[j.axis];
      const R = new THREE.Matrix4().makeRotationAxis(ax, ang);
      j.mat.makeTranslation(j.J.pivot.x, j.J.pivot.y, j.J.pivot.z).multiply(R)
        .multiply(new THREE.Matrix4().makeTranslation(-j.J.pivot.x, -j.J.pivot.y, -j.J.pivot.z));
      j.rot.setFromMatrix4(R);
    }
    // bones: rigid, product of every joint they sit distal to (proximal joint applied last)
    for (const id of rig.boneIds) {
      const mesh = v.parts.get(id).mesh;
      mesh.matrixAutoUpdate = false;
      mesh.matrix.identity();
      for (const j of rig.joints) if (j.J.distal.has(id)) mesh.matrix.multiply(j.mat);
      mesh.matrixWorldNeedsUpdate = true;
    }
    // muscles: blend per joint (distal joint first), then bulge along the normal as they shorten
    const actA = u, actB = 1 - u;
    for (const m of rig.meshes) {
      const pos = m.g.attributes.position.array, nor = m.g.attributes.normal.array;
      const act = m.group === "a" ? actA : actB;
      const n = pos.length / 3;
      for (let i = 0; i < n; i++) {
        tmpP.set(m.base[i * 3], m.base[i * 3 + 1], m.base[i * 3 + 2]);
        tmpN.set(m.baseN[i * 3], m.baseN[i * 3 + 1], m.baseN[i * 3 + 2]);
        const b = m.bulge[i] * m.amp * (act - 0.35);
        tmpP.addScaledVector(tmpN, b);
        for (let k = rig.joints.length - 1; k >= 0; k--) {
          const w = m.w[k][i];
          if (w <= 0.001) continue;
          const j = rig.joints[k];
          tmpQ.copy(tmpP).applyMatrix4(j.mat);
          tmpP.lerp(tmpQ, w);
          tmpQ.copy(tmpN).applyMatrix3(j.rot);
          tmpN.lerp(tmpQ, w).normalize();
        }
        pos[i * 3] = tmpP.x; pos[i * 3 + 1] = tmpP.y; pos[i * 3 + 2] = tmpP.z;
        nor[i * 3] = tmpN.x; nor[i * 3 + 1] = tmpN.y; nor[i * 3 + 2] = tmpN.z;
      }
      m.g.attributes.position.needsUpdate = true;
      m.g.attributes.normal.needsUpdate = true;
    }
  }

  function restore(rig) {
    for (const id of rig.boneIds) {
      const mesh = v.parts.get(id).mesh;
      mesh.matrix.identity();
      mesh.matrixAutoUpdate = true;
      mesh.matrixWorldNeedsUpdate = true;
    }
    for (const m of rig.meshes) {
      m.g.attributes.position.array.set(m.base);
      m.g.attributes.normal.array.set(m.baseN);
      m.g.attributes.position.needsUpdate = true;
      m.g.attributes.normal.needsUpdate = true;
    }
  }

  // ---------- playback ----------
  function setPhase(ph) {
    if (st.phase === ph) return;
    st.phase = ph;
    const rig = st.rig, move = st.move;
    const ag = ph === "a" ? rig.allA : rig.allB, an = ph === "a" ? rig.allB : rig.allA;
    v.clearMarks();
    v.mark(ag, 0xff4a3d);
    if (st.showAnt) v.mark(an, 0x3fa0ff);
    const groups = new Map();
    for (const id of ag) {
      const p = app.byId.get(id);
      const key = p.kb?.key || p.base;
      const cur = groups.get(key);
      if (!cur || p.size > app.byId.get(cur.id).size) groups.set(key, { id, text: p.kb?.title || pretty(p.base) });
    }
    app.setLabels([...groups.values()]);
    st.onUpdate?.(move[ph]);
  }

  function tick(dt) {
    if (!st.move) return;
    if (st.playing) {
      st.t += dt * st.speed;
      const period = 3.4;
      st.u = 0.5 - 0.5 * Math.cos((2 * Math.PI * st.t) / period);
      setPhase(Math.sin((2 * Math.PI * st.t) / period) >= 0 ? "a" : "b");
    }
    pose(st.rig, st.u);
    st.onFrame?.(st.u);
  }

  function start(move, opts = {}) {
    stop();
    const ok = new Set(["skeletal", "muscular", "connective"]);
    st.saved = new Set(v.systemsVisible);
    for (const s of new Set(app.parts.map((p) => p.system))) app.setLayer(s, ok.has(s));
    v.showAll();
    v.setClip(null);
    st.move = move;
    st.rig = buildRig(move);
    // only the moving muscles are shown — the rest of the musculature and tendons are hidden
    const keep = new Set(st.rig.muscles);
    v.hide(app.parts.filter((p) => (p.system === "muscular" || p.system === "connective") && !keep.has(p.id)).map((p) => p.id));
    st.t = 0; st.u = 0; st.phase = null; st.playing = true;
    st.showAnt = opts.showAnt ?? true;
    const dir = V(...move.view).normalize();
    const fov = THREE.MathUtils.degToRad(v.camera.fov / 2);
    const hf = Math.atan(Math.tan(fov) * v.camera.aspect);
    const dist = (st.rig.radius * 1.15) / Math.sin(Math.min(fov, hf));
    const c = st.rig.pivot.clone();
    v._animateTo(c, c.clone().addScaledVector(dir, dist));
    v.onTick = tick;
    setPhase("a");
    store.movesSeen ||= {};
    if (!store.movesSeen[move.id]) { store.movesSeen[move.id] = 1; saveStore(); addXP(8); }
  }

  function stop() {
    if (!st.move) return;
    v.onTick = null;
    restore(st.rig);
    v.clearMarks();
    app.setLabels([]);
    v.showAll();
    if (st.saved) for (const s of new Set(app.parts.map((p) => p.system))) app.setLayer(s, st.saved.has(s));
    st.move = null; st.rig = null;
    v.invalidate();
  }

  return {
    MOVES,
    start, stop,
    active: () => !!st.move,
    current: () => st.move,
    setPlaying: (p) => { st.playing = p; },
    playing: () => st.playing,
    setSpeed: (s) => { st.speed = s; },
    scrub: (u) => {
      st.playing = false;
      st.u = u;
      // phase by which end you're closer to moving toward isn't knowable when scrubbing: show the shortening group
      setPhase(u >= 0.5 ? "a" : "b");
    },
    setShowAntagonists: (on) => { st.showAnt = on; const ph = st.phase; st.phase = null; setPhase(ph); },
    angle: () => (st.move ? Math.round(st.move.range[0] + (st.move.range[1] - st.move.range[0]) * st.u) : 0),
    on: (onUpdate, onFrame) => { st.onUpdate = onUpdate; st.onFrame = onFrame; },
    // best first: moves where the muscle is listed early as a prime mover
    movesFor: (base) => MOVES.map((m) => {
      const ia = m.a.muscles.findIndex((n) => matchWord(base, n)), ib = m.b.muscles.findIndex((n) => matchWord(base, n));
      return { m, score: ia >= 0 ? ia : ib >= 0 ? 10 + ib : -1 };
    }).filter((x) => x.score >= 0).sort((a, b) => a.score - b.score).map((x) => x.m),
  };
}
