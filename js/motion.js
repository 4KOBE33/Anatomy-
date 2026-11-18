// Muscle actions: animate joints of the real skeleton (rigid bones rotating about pivots/axes measured
// from the bone meshes) while the muscles that produce the movement deform with them (each vertex follows
// the bone it is nearest, blended across the joint) and bulge as they shorten.
import * as THREE from "three";
import { pretty, store, saveStore, addXP, $, h, esc, regionOf } from "./util.js";

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

const ORDER = ["lumbar", "neck", "tmj", "shoulder", "elbow", "radioulnar", "wrist", "hip", "knee", "ankle", "subtalar"];

// Named degrees of freedom: [joint, axis, sign] — positive degrees = the named movement (right side).
export const DOF = {
  neck_flex: ["neck", "x", 1], neck_side: ["neck", "z", 1], neck_rot: ["neck", "y", -1],
  lumbar_flex: ["lumbar", "x", 1], lumbar_side: ["lumbar", "z", 1], lumbar_rot: ["lumbar", "y", -1],
  jaw_open: ["tmj", "x", 1],
  sh_flex: ["shoulder", "x", -1], sh_abd: ["shoulder", "z", -1], sh_hadd: ["shoulder", "y", 1], sh_rot_lat: ["shoulder", "rot", 1],
  elbow_flex: ["elbow", "x", -1], pron: ["radioulnar", "ru", -1], wrist_flex: ["wrist", "x", -1],
  hip_flex: ["hip", "x", -1], hip_abd: ["hip", "z", -1], hip_rot_lat: ["hip", "rot", 1],
  knee_flex: ["knee", "x", 1], ankle_pf: ["ankle", "ank", 1], foot_inv: ["subtalar", "st", 1],
};
// Order rotations compose in at a joint, outermost first (shoulder: horizontal add., abduction, flexion, axial rotation).
const AXIS_ORDER = { shoulder: ["y", "z", "x", "rot"], hip: ["z", "x", "rot"], neck: ["x", "z", "y"], lumbar: ["x", "z", "y"] };
const MOVE_DOF = { "tmj:x": "jaw_open", "shoulder:z": "sh_abd", "shoulder:x": "sh_flex", "shoulder:rot": "sh_rot_lat", "elbow:x": "elbow_flex",
  "radioulnar:ru": "pron", "wrist:x": "wrist_flex", "hip:x": "hip_flex", "hip:z": "hip_abd", "knee:x": "knee_flex", "ankle:ank": "ankle_pf", "subtalar:st": "foot_inv" };
const UPPER = /thoracic vertebra$|cervical vertebra$|^(atlas|axis)$|^(first|second) lumbar vertebra$|rib$|costal cartilage$|^(manubrium|body of sternum|xiphoid process|scapula|clavicle|hyoid bone)$|intervertebral disk of (axis|.*(cervical|thoracic) vertebra|(first|second) lumbar vertebra)$/;
const HEAD = /^(atlas|axis|third cervical vertebra|fourth cervical vertebra|fifth cervical vertebra)$|intervertebral disk of (axis|(third|fourth|fifth) cervical vertebra)$/;

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
    const both = (...res) => new Set(res.flatMap((re) => bones(re, "both")));
    const L3 = centroid(verts(bones(/^third lumbar vertebra$/, "both")));
    const C6 = centroid(verts(bones(/^sixth cervical vertebra$/, "both")));
    J = {
      lumbar: { pivot: L3, axes: { x: V(1, 0, 0), z: V(0, 0, 1), y: V(0, 1, 0) }, distal: both(UPPER, SKULL, JAW, ARM, FOREARM, HAND),
        prox: both(/^(hip bone|sacrum)$/, /^(fourth|fifth) lumbar vertebra$/) },
      neck: { pivot: C6, axes: { x: V(1, 0, 0), z: V(0, 0, 1), y: V(0, 1, 0) }, distal: both(HEAD, SKULL, JAW),
        prox: both(/^(seventh cervical vertebra|first thoracic vertebra|second thoracic vertebra|clavicle|manubrium|scapula|sixth cervical vertebra)$/) },
      tmj: { pivot: tmj, axes: { x: V(1, 0, 0) }, distal: new Set(bones(JAW, "both")), prox: new Set(bones(SKULL, "both")) },
      shoulder: { pivot: head, axes: { x: V(1, 0, 0), z: V(0, 0, 1), y: V(0, 1, 0), rot: elbow.clone().sub(head).normalize() }, distal: grp(ARM, FOREARM, HAND), prox: new Set(bones(SHOULDER_PROX)) },
      elbow: { pivot: elbow, axes: { x: elbowAxis }, distal: grp(FOREARM, HAND), prox: grp(ARM, /^(scapula|clavicle)$/) },
      radioulnar: { pivot: radHead, axes: { ru: ulnHead.clone().sub(radHead).normalize() }, distal: grp(/^radius$/, HAND), prox: grp(/^ulna$/, ARM) },
      wrist: { pivot: centroid(verts(bones(/^capitate$/))), axes: { x: wristAxis }, distal: grp(HAND), prox: grp(FOREARM, ARM) },
      hip: { pivot: hip, axes: { x: V(1, 0, 0), z: V(0, 0, 1), rot: knee.clone().sub(hip).normalize() }, distal: grp(THIGH, LEG, FOOT), prox: grp(/^(hip bone|sacrum)$/, /lumbar vertebra$/) },
      knee: { pivot: knee, axes: { x: kneeAxis }, distal: grp(LEG, FOOT, /^patella$/), prox: grp(/^femur$/, /^hip bone$/) },
      ankle: { pivot: ankle, axes: { ank: toPlusX(latMall.clone().sub(medMall)) }, distal: grp(FOOT), prox: grp(LEG, /^femur$/) },
      subtalar: { pivot: talus, axes: { st: nav.clone().sub(calcPost).normalize() }, distal: new Set(bones(FOOT).filter((id) => app.byId.get(id).base !== "talus")), prox: grp(/^talus$/, LEG) },
    };
  }

  const matchWord = (base, s) => new RegExp(`(^|\\s)${s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}($|\\s)`).test(base);
  // A name that is an exact muscle name means just that muscle ("extensor digitorum" ≠ "extensor digitorum longus");
  // otherwise it picks up every part containing it as whole words ("deltoid" → its three parts).
  function muscleIds(names, both) {
    const soft = parts((p) => p.system === "muscular" || p.system === "connective");
    const out = new Set();
    for (const n of names) {
      const exact = soft.filter((p) => p.base === n);
      for (const p of exact.length ? exact : soft.filter((p) => matchWord(p.base, n))) if (both || !p.side || p.side === "right") out.add(p.id);
    }
    return [...out];
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
  // Bone samples at a fixed density (per metre of bone size), so the moving and stationary sets are
  // equally fine-grained: a fixed count per bone or per set biases every vertex toward the denser side.
  const DENS = 70;
  function sampleDense(ids) {
    const out = [];
    for (const id of ids) {
      const a = v.parts.get(id)?.mesh.geometry.attributes.position;
      if (!a) continue;
      const want = Math.max(3, Math.round((app.byId.get(id)?.size || 0.05) * DENS));
      const step = Math.max(1, Math.floor(a.count / want));
      for (let i = 0; i < a.count; i += step) out.push(a.getX(i), a.getY(i), a.getZ(i));
    }
    return new Float32Array(out);
  }
  const LEG_JOINTS = new Set(["hip", "knee", "ankle", "subtalar"]);
  // Proximal→distal blend weight sampled once on a voxel grid over `box`, then read per vertex with
  // trilinear interpolation: per-vertex nearest-bone searches were far too slow for whole-body demos.
  function weightField(prox, dist, box) {
    const size = box.getSize(V(0, 0, 0));
    let c = 0.02, nx, ny, nz;
    for (;;) {
      nx = Math.ceil(size.x / c) + 2; ny = Math.ceil(size.y / c) + 2; nz = Math.ceil(size.z / c) + 2;
      if (nx * ny * nz <= 12000) break;
      c *= 1.2;
    }
    const ox = box.min.x - c / 2, oy = box.min.y - c / 2, oz = box.min.z - c / 2;
    const f = new Float32Array(nx * ny * nz);
    for (let iz = 0; iz < nz; iz++) for (let iy = 0; iy < ny; iy++) for (let ix = 0; ix < nx; ix++) {
      const x = ox + ix * c, y = oy + iy * c, z = oz + iz * c;
      const dP = nearest(prox, x, y, z), dD = nearest(dist, x, y, z);
      f[(iz * ny + iy) * nx + ix] = smooth(0.32, 0.68, dP / (dP + dD + 1e-9));
    }
    const at = (ix, iy, iz) => f[(Math.min(nz - 1, Math.max(0, iz)) * ny + Math.min(ny - 1, Math.max(0, iy))) * nx + Math.min(nx - 1, Math.max(0, ix))];
    return (x, y, z) => {
      const fx = (x - ox) / c, fy = (y - oy) / c, fz = (z - oz) / c;
      const ix = Math.floor(fx), iy = Math.floor(fy), iz = Math.floor(fz), tx = fx - ix, ty = fy - iy, tz = fz - iz;
      const l = (a, b, t) => a + (b - a) * t;
      return l(l(l(at(ix, iy, iz), at(ix + 1, iy, iz), tx), l(at(ix, iy + 1, iz), at(ix + 1, iy + 1, iz), tx), ty),
        l(l(at(ix, iy, iz + 1), at(ix + 1, iy, iz + 1), tx), l(at(ix, iy + 1, iz + 1), at(ix + 1, iy + 1, iz + 1), tx), ty), tz);
    };
  }
  const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

  // spec: { dofs: [names], a: [muscle names], b: [muscle names], both, focusDof }
  function buildRig(spec) {
    if (!J) computeJoints();
    const used = [...new Set(spec.dofs.map((d) => DOF[d][0]))];
    const joints = used.sort((a, b) => ORDER.indexOf(a) - ORDER.indexOf(b))
      .map((name) => ({ joint: name, J: J[name], mat: new THREE.Matrix4(), rot: new THREE.Matrix3() }));
    const allA = muscleIds(spec.a || [], spec.both), allB = muscleIds(spec.b || [], spec.both);
    const muscles = [...new Set([...allA, ...allB])];
    const boneIds = new Set(joints.flatMap((j) => [...j.J.distal]));
    // Which side of each joint a muscle belongs to is decided by its nearest bone: the joint's moving
    // (distal) bones vs every bone that stays put. For leg joints the arms are left out of the
    // stationary set — the hands hang against the thighs and would otherwise "hold" thigh muscles.
    const skel = app.parts.filter((p) => p.system === "skeletal" && v.parts.has(p.id)).map((p) => p.id);
    const isArm = (id) => { const c = app.byId.get(id).center; return Math.abs(c[0]) > 0.19 && c[1] > 0.45 && c[1] < 1.45; };
    const cs = joints.map((j) => ({
      dist: sampleDense([...j.J.distal]),
      rest: sampleDense(skel.filter((id) => !j.J.distal.has(id) && !(LEG_JOINTS.has(j.joint) && isArm(id)))),
    }));
    // Context (optional): the rest of the musculature rides along, so the whole body does the exercise.
    // Muscles away from a moving joint move rigidly with their bones (a matrix — free per frame); only
    // those near the joint are blended per vertex.
    const moving = new Set(muscles);
    const ctxRigid = [], cands = [];
    if (spec.context) {
      const c = V(0, 0, 0);
      for (const p of app.parts) {
        if ((p.system !== "muscular" && p.system !== "connective") || moving.has(p.id)) continue;
        const mesh = v.parts.get(p.id)?.mesh;
        if (!mesh) continue;
        const g = mesh.geometry, bb = g.boundingBox;
        const near = joints.map((j) => bb.distanceToPoint(j.J.pivot) < 0.09);
        // which side of each joint the muscle rides with: majority vote of points spread along it
        const pa = g.attributes.position, stepV = Math.max(1, Math.floor(pa.count / 15));
        const side = joints.map((j, k) => {
          let dv = 0, nv = 0;
          for (let i = 0; i < pa.count; i += stepV) {
            c.fromBufferAttribute(pa, i);
            if (nearest(cs[k].dist, c.x, c.y, c.z) < nearest(cs[k].rest, c.x, c.y, c.z)) dv++;
            nv++;
          }
          return dv * 2 > nv ? 1 : 0;
        });
        // arm muscles never ride with a leg joint (the stationary set leaves the arms out for leg joints)
        if (regionOf(p, p.kb) === "upper") joints.forEach((j, k) => { if (LEG_JOINTS.has(j.joint)) { side[k] = 0; near[k] = false; } });
        if (!near.some(Boolean)) { if (side.some(Boolean)) ctxRigid.push({ id: p.id, mesh, side }); continue; }
        cands.push({ id: p.id, mesh, g, near, side });
      }
    }
    // one weight field per joint, over everything that gets blended there (target muscles + nearby context)
    const fields = joints.map((j, k) => {
      const box = new THREE.Box3();
      for (const id of muscles) box.union(v.parts.get(id).mesh.geometry.boundingBox);
      for (const m of cands) if (m.near[k]) box.union(m.g.boundingBox);
      return box.isEmpty() ? null : weightField(cs[k].rest, cs[k].dist, box.expandByScalar(0.03));
    });
    const meshes = muscles.map((id) => {
      const mesh = v.parts.get(id).mesh, g = mesh.geometry;
      const pos = g.attributes.position, nor = g.attributes.normal;
      const n = pos.count;
      const base = Float32Array.from(pos.array), baseN = Float32Array.from(nor.array);
      const w = joints.map(() => new Float32Array(n));
      joints.forEach((j, k) => {
        const F = fields[k];
        for (let i = 0; i < n; i++) w[k][i] = F(base[i * 3], base[i * 3 + 1], base[i * 3 + 2]);
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
      // label anchor: the vertex nearest the muscle's resting centre, so its name follows it as it moves
      const cc = g.boundingBox.getCenter(V(0, 0, 0));
      let anchorIdx = 0, ad = Infinity;
      for (let i = 0; i < n; i++) { const d = (base[i * 3] - cc.x) ** 2 + (base[i * 3 + 1] - cc.y) ** 2 + (base[i * 3 + 2] - cc.z) ** 2; if (d < ad) { ad = d; anchorIdx = i; } }
      return { id, mesh, g, base, baseN, w, bulge, amp: Math.min(0.007, size * 0.025), group: allA.includes(id) ? "a" : "b", anchorIdx };
    });
    const ctxMeshes = [];
    for (const m of cands) {
      const g = m.g, n = g.attributes.position.count;
      const base = Float32Array.from(g.attributes.position.array), baseN = Float32Array.from(g.attributes.normal.array);
      const w = joints.map((j, k) => {
        const arr = new Float32Array(n);
        if (!m.near[k]) return arr.fill(m.side[k]);
        const F = fields[k];
        for (let i = 0; i < n; i++) arr[i] = F(base[i * 3], base[i * 3 + 1], base[i * 3 + 2]);
        return arr;
      });
      // vertices that never move (weight 0 for every joint) are skipped each frame
      const act = [];
      for (let i = 0; i < n; i++) if (w.some((wk) => wk[i] > 0.001)) act.push(i);
      if (!act.length) continue;
      ctxMeshes.push({ id: m.id, mesh: m.mesh, g, base, baseN, w, bulge: new Float32Array(n), amp: 0, group: "c", active: Uint32Array.from(act) });
    }
    // the swing must stay on screen: sphere around the moving joint covering everything that moves
    const piv = J[spec.focusDof ? DOF[spec.focusDof][0] : joints[joints.length - 1].joint].pivot;
    let r = 0.08;
    for (const id of [...boneIds, ...muscles]) {
      const bb = v.parts.get(id)?.mesh.geometry.boundingBox;
      if (!bb) continue;
      for (const c of [bb.min, bb.max]) r = Math.max(r, c.distanceTo(piv));
    }
    return { joints, muscles, allA, allB, boneIds: [...boneIds], meshes: [...meshes, ...ctxMeshes], ctxRigid, pivot: piv, radius: Math.min(r, 0.95) };
  }

  const tmpP = V(0, 0, 0), tmpN = V(0, 0, 0), tmpQ = V(0, 0, 0);
  const tmpR = new THREE.Matrix4();
  // angles: { dof: degrees }; act(m) → bulge activation per muscle mesh (−1 thin … 1 bulging)
  function pose(rig, angles, act) {
    for (const j of rig.joints) {
      const R = new THREE.Matrix4();
      for (const ax of AXIS_ORDER[j.joint] || Object.keys(j.J.axes)) {
        const dof = Object.keys(DOF).find((d) => DOF[d][0] === j.joint && DOF[d][1] === ax);
        const deg = dof ? angles[dof] || 0 : 0;
        if (deg) R.multiply(tmpR.makeRotationAxis(j.J.axes[ax], THREE.MathUtils.degToRad(deg * DOF[dof][2])));
      }
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
    for (const c of rig.ctxRigid || []) {
      c.mesh.matrixAutoUpdate = false;
      c.mesh.matrix.identity();
      rig.joints.forEach((j, k) => c.side[k] && c.mesh.matrix.multiply(j.mat));
      c.mesh.matrixWorldNeedsUpdate = true;
    }
    // muscles: blend per joint (distal joint first), then bulge along the normal as they shorten
    for (const m of rig.meshes) {
      const pos = m.g.attributes.position.array, nor = m.g.attributes.normal.array;
      const a = act(m);
      const idx = m.active, count = idx ? idx.length : pos.length / 3;
      for (let q = 0; q < count; q++) {
        const i = idx ? idx[q] : q;
        tmpP.set(m.base[i * 3], m.base[i * 3 + 1], m.base[i * 3 + 2]);
        tmpN.set(m.baseN[i * 3], m.baseN[i * 3 + 1], m.baseN[i * 3 + 2]);
        const b = m.bulge[i] * m.amp * a;
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
      if (m.anchorIdx !== undefined) {
        const ai = m.anchorIdx * 3;
        (m.mesh.userData.anchor ||= V(0, 0, 0)).set(pos[ai], pos[ai + 1], pos[ai + 2]);
      }
    }
  }

  function restore(rig) {
    for (const id of rig.boneIds) {
      const mesh = v.parts.get(id).mesh;
      mesh.matrix.identity();
      mesh.matrixAutoUpdate = true;
      mesh.matrixWorldNeedsUpdate = true;
    }
    for (const c of rig.ctxRigid || []) {
      c.mesh.matrix.identity();
      c.mesh.matrixAutoUpdate = true;
      c.mesh.matrixWorldNeedsUpdate = true;
    }
    for (const m of rig.meshes) {
      delete m.mesh.userData.anchor;
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

  function moveAngles(move, u) {
    const a = {};
    for (const p of move.pre || []) a[MOVE_DOF[`${p.joint}:${p.axis}`]] = p.deg;
    a[MOVE_DOF[`${move.joint}:${move.axis}`]] = move.range[0] + (move.range[1] - move.range[0]) * u;
    return a;
  }
  function tick(dt) {
    if (st.demo) return demoTick(dt);
    if (!st.move) return;
    if (st.playing) {
      st.t += dt * st.speed;
      const period = 3.4;
      st.u = 0.5 - 0.5 * Math.cos((2 * Math.PI * st.t) / period);
      setPhase(Math.sin((2 * Math.PI * st.t) / period) >= 0 ? "a" : "b");
    }
    pose(st.rig, moveAngles(st.move, st.u), (m) => (m.group === "a" ? st.u : 1 - st.u) - 0.35);
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
    const md = MOVE_DOF[`${move.joint}:${move.axis}`];
    st.rig = buildRig({ dofs: [md, ...(move.pre || []).map((p) => MOVE_DOF[`${p.joint}:${p.axis}`])], a: move.a.muscles, b: move.b.muscles, both: move.both, focusDof: md });
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
    v.autoFit = false;
    v._animateTo(c, c.clone().addScaledVector(dir, dist));
    v.onTick = tick;
    setPhase("a");
    store.movesSeen ||= {};
    if (!store.movesSeen[move.id]) { store.movesSeen[move.id] = 1; saveStore(); addXP(8); }
  }

  // ---------- exercise demos ----------
  // spec: { dofs: [ {dof: deg, ...}, ... ] | null, muscles: [...], mode: "stretch" | "work" | "mobility" }
  const MODE_COLOR = { stretch: 0x46a8ff, work: 0xff4a3d, mobility: 0xffa43d };
  const DEMO_GHOST = 0.3;
  const ease = (x) => 0.5 - 0.5 * Math.cos(Math.PI * Math.min(1, Math.max(0, x)));
  function demo(spec) {
    stop();
    if (!spec?.dofs?.length) return false;
    const keys = [...new Set(spec.dofs.flatMap((p) => Object.keys(p)))].filter((d) => DOF[d]);
    if (!keys.length) return false;
    const ok = new Set(["skeletal", "muscular", "connective"]);
    st.saved = new Set(v.systemsVisible);
    for (const s of new Set(app.parts.map((p) => p.system))) app.setLayer(s, ok.has(s));
    v.showAll();
    v.setClip(null);
    // frame the most proximal moving joint (the whole body when the spine moves)
    const prox = keys.map((d) => DOF[d][0]).sort((a, b) => ORDER.indexOf(a) - ORDER.indexOf(b))[0];
    const focusDof = keys.find((d) => DOF[d][0] === prox);
    const t0 = performance.now();
    st.rig = buildRig({ dofs: keys, a: spec.muscles || [], b: [], focusDof, context: true });
    st.rigMs = performance.now() - t0;
    st.demo = { spec, keys, t: 0, frames: [{}, ...spec.dofs] };
    st.move = { id: "demo" };
    // the whole body does the exercise; everything but the skeleton and the target muscles is see-through
    v.isolate([...st.rig.allA, ...app.parts.filter((p) => p.system === "skeletal").map((p) => p.id)], DEMO_GHOST);
    v.clearMarks();
    v.mark(st.rig.allA, MODE_COLOR[spec.mode] || MODE_COLOR.mobility);
    const groups = new Map();
    for (const id of st.rig.allA) {
      const p = app.byId.get(id);
      const key = p.kb?.key || p.base;
      if (!groups.has(key) || p.size > app.byId.get(groups.get(key).id).size) groups.set(key, { id, text: p.kb?.title || pretty(p.base) });
    }
    app.setLabels([...groups.values()].slice(0, 5));
    // camera: side view unless the movement is mostly side-to-side or rotational
    const big = keys.reduce((b, d) => (Math.max(...spec.dofs.map((p) => Math.abs(p[d] || 0))) > Math.max(...spec.dofs.map((p) => Math.abs(p[b] || 0))) ? d : b), keys[0]);
    // lying demos: seen from the body's right side (or from the front when lying on the left side), a little above
    const LYING_DIR = { supine: V(-1, 0.1, 0.75), prone: V(-1, 0.1, -0.75), side: V(-0.35, 0.1, 1) };
    v.setPosture(spec.posture || null);
    const dir = LYING_DIR[spec.posture]?.clone() || (/abd|side|hadd|inv/.test(big) ? V(-0.25, 0.15, 1) : /rot/.test(big) ? V(-0.4, 0.7, 1) : V(-1, 0.15, 0.35));
    const fov = THREE.MathUtils.degToRad(v.camera.fov / 2);
    const hf = Math.atan(Math.tan(fov) * v.camera.aspect);
    // an arm and a leg moving together (dead bug, march) or the spine: frame the whole body
    const armAndLeg = keys.some((d) => /^(sh_|elbow|pron|wrist)/.test(d)) && keys.some((d) => /^(hip|knee|ankle|foot)/.test(d));
    const whole = prox === "lumbar" || armAndLeg;
    const r = whole ? 0.95 : st.rig.radius;
    const c = whole ? V(0, 0.95, 0) : st.rig.pivot.clone();
    v.autoFit = false;
    v._animateTo(c, c.clone().addScaledVector(dir.normalize(), (r * 1.15) / Math.sin(Math.min(fov, hf))));
    v.onTick = tick;
    return true;
  }
  // 1 pose: rest → pose, hold, back. Several poses: flow through them in a loop.
  function demoTick(dt) {
    const d = st.demo;
    d.t += dt * st.speed;
    const F = d.frames, n = F.length;
    let from, to, k, prog;
    if (n === 2) {
      const T = 6, x = d.t % T;
      if (x < 1.4) { from = F[0]; to = F[1]; k = ease(x / 1.4); } else if (x < 4.2) { from = to = F[1]; k = 1; }
      else if (x < 5.4) { from = F[1]; to = F[0]; k = ease((x - 4.2) / 1.2); } else { from = to = F[0]; k = 1; }
      prog = from === F[1] && to === F[1] ? 1 : to === F[1] ? k : from === F[1] ? 1 - k : 0;
    } else {
      const seg = 1.9, T = seg * n, x = d.t % T, i = Math.floor(x / seg), f = (x % seg) / seg;
      from = F[i]; to = F[(i + 1) % n]; k = ease(f / 0.7);
      prog = i === 0 ? k : (i + 1) % n === 0 ? 1 - k : 1;
    }
    const a = {};
    for (const key of d.keys) a[key] = (from[key] || 0) + ((to[key] || 0) - (from[key] || 0)) * k;
    const mode = d.spec.mode;
    pose(st.rig, a, () => (mode === "work" ? prog * 0.9 - 0.2 : mode === "stretch" ? -0.35 * prog : 0));
    st.onFrame?.(prog);
  }

  function stop() {
    st.demo = null;
    if (!st.move) return;
    v.setPosture(null);
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
    reset: () => { J = null; },
    demo,
    active: () => !!st.move,
    rigMs: () => st.rigMs,
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
