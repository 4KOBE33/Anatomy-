// Pose data for demonstrating the "What's hurting?" exercises (pain.js) on the
// 3D skeleton.
//
// Key = "<region id>|<exercise name>" exactly as in pain.js.
//   dofs:    array of joint-angle sets in DEGREES from anatomical position.
//            1 pose = move into it and hold; 2+ poses = cycle through them.
//            {} = rest (anatomical position); any dof not listed = 0.
//            null = can't be meaningfully shown with the rig (see note).
//   muscles: lowercase whole-word substrings of model muscle / connective names.
//   mode:    "stretch" (lengthening) | "work" (contracting) | "mobility".
//   note:    only when the demo differs from how the exercise is really done.
// The rig moves only the RIGHT limbs plus spine/neck/jaw of a standing skeleton.

// ---- shared poses -------------------------------------------------------
const REST = {};

// Shoulder-blade squeeze can't move the scapula; show the arm drawing back.
const SCAP_SQUEEZE = [REST, { sh_flex: -10, sh_rot_lat: 15 }];
const SCAP_NOTE = "The rig can't move the shoulder blade; the arm drawing back stands in for squeezing the blades together.";

const CHIN_TUCK = [REST, { neck_flex: 12 }];
const CHIN_TUCK_NOTE = "A chin tuck is a straight backward glide of the head; shown as a small nod.";

const DNF_HOLD = [{ neck_flex: 8 }];
const DNF_NOTE = "Shown standing — done lying on your back with the head on a thin pillow.";

const UPPER_TRAP = [{ neck_side: -35, neck_flex: 10 }]; // stretches the RIGHT upper trapezius

// Band row: arm forward → elbow pulled back, forearm level, neutral grip.
const ROW = (ext) => [{ sh_flex: 80, pron: 90 }, { sh_flex: -ext, elbow_flex: 115, pron: 90 }];

// Open book / reach-and-open: arm forward → arm opened back with trunk & head following.
const OPEN_BOOK = [
  { sh_abd: 90, sh_hadd: 90 },
  { sh_abd: 90, sh_hadd: -30, lumbar_rot: 35, neck_rot: 45 },
];
const OPEN_BOOK_NOTE = "Shown standing — done lying on your left side with knees bent (right arm on top); switch sides after the set.";

const CAT_COW = [{ lumbar_flex: 25, neck_flex: 30 }, { lumbar_flex: -20, neck_flex: -25 }];
const CAT_COW_NOTE = "Shown standing — do it on hands and knees.";

// Glute bridge: hip goes from bent (lying, knee up) to straight with the knee still bent.
const BRIDGE = [{ hip_flex: 60, knee_flex: 90 }, { hip_flex: 0, knee_flex: 90 }];
const BRIDGE_NOTE = "Done lying on your back lifting the hips; shown as the same hip-straightening movement of the right leg.";

// Clamshell: hip & knee bent, knee opens out (abduction + lateral rotation).
const CLAM = [
  { hip_flex: 45, knee_flex: 90 },
  { hip_flex: 45, knee_flex: 90, hip_abd: 20, hip_rot_lat: 30 },
];
const CLAM_NOTE = "Shown standing — done lying on your side with feet together; switch sides after the set.";

// Side-lying hip abduction with the leg slightly behind.
const SIDE_LEG_LIFT = [{ hip_flex: -5 }, { hip_flex: -5, hip_abd: 35 }];
const SIDE_LEG_LIFT_NOTE = "Shown standing — done lying on your side; switch sides after the set.";

const SIT_TO_STAND = [{ hip_flex: 90, knee_flex: 90, lumbar_flex: 30 }, REST];
const SIT_TO_STAND_NOTE = "The body can't lower onto a chair in the rig; the right leg and trunk show the seated-lean-forward to standing angles.";

const STEP_UP = [{ hip_flex: 60, knee_flex: 75 }, REST];
const STEP_UP_NOTE = "Right leg shown going from foot-on-the-step to straight; the body rising isn't shown.";

const STEP_DOWN = [REST, { hip_flex: 30, knee_flex: 45, ankle_pf: -10 }];
const STEP_DOWN_NOTE = "Right leg is the one standing on the step; its knee bends as the other heel lowers to the floor.";

const QUAD_SET = [{ knee_flex: 0, ankle_pf: -5 }];
const QUAD_SET_NOTE = "Done sitting or lying with the leg straight; the thigh tightens with little visible movement.";

const SLR = [REST, { hip_flex: 45 }];
const SLR_NOTE = "Shown standing — done lying on your back with the other knee bent.";

const HEEL_SLIDE = [REST, { hip_flex: 65, knee_flex: 110 }];
const HEEL_SLIDE_NOTE = "Shown standing — done lying on your back, sliding the heel along the floor.";

const LIFTED_LEG = [{ hip_flex: 30, knee_flex: 60 }];
const SOFT_KNEE_STANCE = [{ knee_flex: 10 }];
const STANCE_NOTE = "Right leg is the standing leg (soft knee); the other foot is lifted, then switch.";

const CALF_RAISE = [REST, { ankle_pf: 35 }];
const CALF_RAISE_NOTE = "The body can't rise in the rig, so the right ankle shows the rising (pointing) movement.";
const CALF_HOLD = [{ ankle_pf: 20 }];

const ANKLE_PUMPS = [{ ankle_pf: 35 }, { ankle_pf: -20 }];
const ANKLE_PUMPS_NOTE = "Done sitting or lying with the legs out.";

const CALF_STRETCH_STRAIGHT = { hip_flex: -15, knee_flex: 0, ankle_pf: -20 };
const CALF_STRETCH_BENT = { hip_flex: -5, knee_flex: 30, ankle_pf: -22 };

const FOREARM_ROT = [
  { elbow_flex: 90, pron: 90 },
  { elbow_flex: 90, pron: 150 },
  { elbow_flex: 90, pron: 90 },
  { elbow_flex: 90, pron: 10 },
];
const FOREARM_ROT_NOTE = "Forearm rests on a table, holding a hammer or bottle.";

// Wall push-up: straight arms (palm on wall) → chest to wall (elbows out, bent).
const WALL_PU_UP = { sh_flex: 90, pron: 150, wrist_flex: -70 };
const WALL_PU_DOWN = { sh_flex: 80, sh_hadd: -40, elbow_flex: 100, pron: 150, wrist_flex: -70 };

export const POSES = {
  // ------------------------------------------------------------------ JAW
  "jaw|Jaw rest position": {
    dofs: [{ jaw_open: 3 }],
    muscles: ["masseter", "temporalis"],
    mode: "mobility",
  },
  "jaw|Masseter self-massage": {
    dofs: null,
    muscles: ["masseter"],
    mode: "mobility",
    note: "Self-massage with the fingertips — no joint movement to show; the masseter is highlighted.",
  },
  "jaw|Controlled jaw opening": {
    dofs: [{ jaw_open: 0 }, { jaw_open: 25 }],
    muscles: ["lateral pterygoid", "digastric", "masseter"],
    mode: "mobility",
  },
  "jaw|Resisted jaw opening": {
    dofs: [{ jaw_open: 5 }],
    muscles: ["digastric", "lateral pterygoid"],
    mode: "work",
    note: "The thumb under the chin resists, so the jaw barely moves.",
  },
  "jaw|Resisted side-to-side": {
    dofs: [{ jaw_open: 3 }],
    muscles: ["lateral pterygoid", "medial pterygoid"],
    mode: "work",
    note: "A sideways push held against the fingers; the rig has no side-to-side jaw motion, so the jaw is shown held still.",
  },
  "jaw|Chin tuck": {
    dofs: CHIN_TUCK,
    muscles: ["longus colli", "longus capitis"],
    mode: "work",
    note: CHIN_TUCK_NOTE,
  },

  // ----------------------------------------------------------------- HEAD
  "head|Slow belly breathing": {
    dofs: null,
    muscles: ["diaphragm", "descending part of trapezius", "frontalis"],
    mode: "mobility",
    note: "Breathing exercise — no joint movement to show; let the shoulders and forehead relax.",
  },
  "head|Chin tuck": {
    dofs: [{ neck_flex: 12 }],
    muscles: ["rectus capitis posterior", "obliquus capitis", "semispinalis capitis"],
    mode: "stretch",
    note: CHIN_TUCK_NOTE,
  },
  "head|Suboccipital release": {
    dofs: [{ neck_flex: 0 }, { neck_flex: 10 }],
    muscles: ["rectus capitis posterior", "obliquus capitis"],
    mode: "mobility",
    note: "Shown standing — done lying on your back with the base of the skull resting on two balls, making tiny nods.",
  },
  "head|Upper trapezius stretch": {
    dofs: UPPER_TRAP,
    muscles: ["descending part of trapezius", "splenius capitis"],
    mode: "stretch",
  },
  "head|Shoulder blade squeeze": {
    dofs: SCAP_SQUEEZE,
    muscles: ["transverse part of trapezius", "rhomboid"],
    mode: "work",
    note: SCAP_NOTE,
  },
  "head|Deep neck flexor hold": {
    dofs: DNF_HOLD,
    muscles: ["longus colli", "longus capitis"],
    mode: "work",
    note: DNF_NOTE,
  },

  // ----------------------------------------------------------------- NECK
  "neck|Neck rotation": {
    dofs: [{ neck_rot: 60 }, { neck_rot: -60 }],
    muscles: ["sternocleidomastoid", "splenius"],
    mode: "mobility",
  },
  "neck|Chin tuck": {
    dofs: CHIN_TUCK,
    muscles: ["longus colli", "semispinalis cervicis"],
    mode: "mobility",
    note: CHIN_TUCK_NOTE,
  },
  "neck|Upper trapezius stretch": {
    dofs: UPPER_TRAP,
    muscles: ["descending part of trapezius", "scalenus"],
    mode: "stretch",
  },
  "neck|Levator scapulae stretch": {
    dofs: [{ neck_rot: -45, neck_flex: 35, neck_side: -15 }],
    muscles: ["levator scapulae"],
    mode: "stretch",
  },
  "neck|Deep neck flexor hold": {
    dofs: DNF_HOLD,
    muscles: ["longus colli", "longus capitis"],
    mode: "work",
    note: DNF_NOTE,
  },
  "neck|Band row": {
    dofs: ROW(30),
    muscles: ["transverse part of trapezius", "rhomboid", "spinal part of deltoid", "latissimus dorsi"],
    mode: "work",
    note: "Both arms pull together; right arm shown.",
  },

  // ------------------------------------------------------------ UPPER BACK
  "upper-back|Seated thoracic extension": {
    dofs: [
      { sh_flex: 150, elbow_flex: 140, sh_rot_lat: 20 },
      { sh_flex: 150, elbow_flex: 140, sh_rot_lat: 20, lumbar_flex: -20, neck_flex: -10 },
    ],
    muscles: ["spinalis thoracis", "semispinalis thoracis", "longissimus thoracis"],
    mode: "mobility",
    note: "Done seated, leaning back over the chair back; the rig bends at the lower back since it can't bend the mid-back alone.",
  },
  "upper-back|Open book": {
    dofs: OPEN_BOOK,
    muscles: ["rhomboid", "thoracic rotator", "pectoralis major"],
    mode: "mobility",
    note: OPEN_BOOK_NOTE,
  },
  "upper-back|Thread the needle": {
    dofs: [
      { sh_flex: 90, sh_hadd: 60, lumbar_rot: -30, neck_rot: -40 },
      { sh_abd: 90, sh_hadd: -20, lumbar_rot: 35, neck_rot: 45 },
    ],
    muscles: ["rhomboid", "transverse part of trapezius", "thoracic rotator"],
    mode: "mobility",
    note: "Shown standing — done on hands and knees; switch sides after the set.",
  },
  "upper-back|Shoulder blade squeeze": {
    dofs: SCAP_SQUEEZE,
    muscles: ["rhomboid", "transverse part of trapezius"],
    mode: "work",
    note: SCAP_NOTE,
  },
  "upper-back|Band pull-apart": {
    dofs: [{ sh_abd: 90, sh_hadd: 90 }, { sh_abd: 90, sh_hadd: -10 }],
    muscles: ["rhomboid", "transverse part of trapezius", "infraspinatus", "spinal part of deltoid"],
    mode: "work",
    note: "Both arms pull apart; right arm shown.",
  },
  "upper-back|Prone Y and T raise": {
    dofs: [
      { sh_abd: 130, sh_hadd: -10, sh_rot_lat: 40 },
      { sh_abd: 90, sh_hadd: -20, sh_rot_lat: 40 },
    ],
    muscles: ["ascending part of trapezius", "transverse part of trapezius", "rhomboid"],
    mode: "work",
    note: "Shown standing — done lying face down, lifting both arms a few centimetres in a Y, then a T.",
  },

  // -------------------------------------------------------------- SHOULDER
  "shoulder|Pendulum": {
    dofs: [
      { lumbar_flex: 45, sh_flex: 55 },
      { lumbar_flex: 45, sh_flex: 45, sh_abd: 10 },
      { lumbar_flex: 45, sh_flex: 35 },
      { lumbar_flex: 45, sh_flex: 45, sh_hadd: 10 },
    ],
    muscles: ["supraspinatus", "deltoid"],
    mode: "mobility",
    note: "Support yourself with the other hand on a table; the arm swings loosely from body sway.",
  },
  "shoulder|Table slide": {
    dofs: [
      { sh_flex: 20, elbow_flex: 80, pron: 150 },
      { sh_flex: 110, elbow_flex: 10, pron: 150, lumbar_flex: 30 },
    ],
    muscles: ["deltoid", "supraspinatus"],
    mode: "mobility",
    note: "Done sitting beside a table with the hand on a towel.",
  },
  "shoulder|Isometric external rotation": {
    dofs: [{ elbow_flex: 90, pron: 90, sh_rot_lat: 5 }],
    muscles: ["infraspinatus", "teres minor"],
    mode: "work",
    note: "Press the back of the wrist into a wall; the arm barely moves.",
  },
  "shoulder|Side-lying external rotation": {
    dofs: [
      { elbow_flex: 90, pron: 90, sh_rot_lat: -60 },
      { elbow_flex: 90, pron: 90, sh_rot_lat: 30 },
    ],
    muscles: ["infraspinatus", "teres minor"],
    mode: "work",
    note: "Shown standing — done lying on your other side with the elbow on a towel against the ribs.",
  },
  "shoulder|Scaption raise": {
    dofs: [REST, { sh_abd: 90, sh_hadd: 30 }],
    muscles: ["supraspinatus", "deltoid"],
    mode: "work",
    note: "Both arms raise together; right arm shown.",
  },
  "shoulder|Wall push-up plus": {
    dofs: [WALL_PU_UP, WALL_PU_DOWN, WALL_PU_UP, { ...WALL_PU_UP, sh_flex: 95, sh_hadd: 10 }],
    muscles: ["serratus anterior", "pectoralis major", "triceps brachii"],
    mode: "work",
    note: "Done leaning on a wall with both hands; the final 'plus' spreads the shoulder blades, which the rig can only hint at with a forward reach.",
  },

  // ----------------------------------------------------------------- CHEST
  "chest|Belly breathing": {
    dofs: null,
    muscles: ["diaphragm", "intercostal"],
    mode: "mobility",
    note: "Breathing exercise — no joint movement to show; the diaphragm and rib muscles are highlighted.",
  },
  "chest|Shoulder blade squeeze": {
    dofs: SCAP_SQUEEZE,
    muscles: ["rhomboid", "transverse part of trapezius"],
    mode: "work",
    note: SCAP_NOTE,
  },
  "chest|Doorway pec stretch": {
    dofs: [{ sh_abd: 90, sh_hadd: -30, sh_rot_lat: 60, elbow_flex: 90 }],
    muscles: ["pectoralis major", "pectoralis minor"],
    mode: "stretch",
    note: "Forearm rests on a door frame as you step through.",
  },
  "chest|Towel-roll chest opener": {
    dofs: [{ sh_abd: 70, sh_hadd: -20, sh_rot_lat: 30 }],
    muscles: ["pectoralis major", "pectoralis minor", "intercostal"],
    mode: "stretch",
    note: "Shown standing — done lying on your back on a rolled towel, arms out to the sides, palms up.",
  },
  "chest|Wall push-up": {
    dofs: [WALL_PU_UP, WALL_PU_DOWN],
    muscles: ["pectoralis major", "serratus anterior", "triceps brachii"],
    mode: "work",
    note: "Done leaning on a wall with both hands; right arm shown.",
  },
  "chest|Incline push-up": {
    dofs: [
      { sh_flex: 75, pron: 150, wrist_flex: -70 },
      { sh_flex: 60, sh_hadd: -40, elbow_flex: 100, pron: 150, wrist_flex: -70 },
    ],
    muscles: ["pectoralis major", "serratus anterior", "triceps brachii"],
    mode: "work",
    note: "Shown upright — done with hands on a table and the body slanted; right arm shown.",
  },

  // ----------------------------------------------------------- ELBOW OUTER
  "elbow-outer|Wrist extensor stretch": {
    dofs: [{ sh_flex: 90, elbow_flex: 0, pron: 150, wrist_flex: 70 }],
    muscles: ["extensor carpi radialis brevis", "extensor carpi radialis longus", "extensor digitorum"],
    mode: "stretch",
  },
  "elbow-outer|Isometric wrist extension": {
    dofs: [{ elbow_flex: 90, pron: 150, wrist_flex: -5 }],
    muscles: ["extensor carpi radialis brevis", "extensor carpi radialis longus"],
    mode: "work",
    note: "Forearm rests on a table; the other hand stops the wrist moving.",
  },
  "elbow-outer|Grip squeeze": {
    dofs: [{ elbow_flex: 90, pron: 90, wrist_flex: -15 }],
    muscles: ["extensor carpi radialis brevis", "flexor digitorum superficialis"],
    mode: "work",
    note: "Finger squeeze can't be shown; forearm shown in the gripping position with the wrist slightly back.",
  },
  "elbow-outer|Slow wrist extension with weight": {
    dofs: [
      { elbow_flex: 90, pron: 150, wrist_flex: -40 },
      { elbow_flex: 90, pron: 150, wrist_flex: 40 },
    ],
    muscles: ["extensor carpi radialis brevis", "extensor carpi radialis longus"],
    mode: "work",
    note: "Forearm rests on a table; the slow lowering is the important part.",
  },
  "elbow-outer|Forearm rotation with hammer": {
    dofs: FOREARM_ROT,
    muscles: ["supinator", "brachioradialis", "pronator teres"],
    mode: "work",
    note: FOREARM_ROT_NOTE,
  },

  // ----------------------------------------------------------- ELBOW INNER
  "elbow-inner|Wrist flexor stretch": {
    dofs: [{ sh_flex: 90, elbow_flex: 0, pron: 0, wrist_flex: -70 }],
    muscles: ["flexor carpi radialis", "flexor carpi ulnaris", "palmaris longus"],
    mode: "stretch",
  },
  "elbow-inner|Isometric wrist flexion": {
    dofs: [{ elbow_flex: 90, pron: 0, wrist_flex: 5 }],
    muscles: ["flexor carpi radialis", "flexor carpi ulnaris"],
    mode: "work",
    note: "Forearm rests on a table; the other hand stops the wrist moving.",
  },
  "elbow-inner|Grip squeeze": {
    dofs: [{ elbow_flex: 90, pron: 90, wrist_flex: -10 }],
    muscles: ["flexor digitorum superficialis", "flexor digitorum profundus", "flexor carpi ulnaris"],
    mode: "work",
    note: "Finger squeeze can't be shown; forearm shown in the gripping position.",
  },
  "elbow-inner|Ulnar nerve glide": {
    dofs: [
      { sh_abd: 90 },
      { sh_rot_lat: 80, sh_abd: 90, elbow_flex: 120, wrist_flex: -60 },
    ],
    muscles: ["flexor carpi ulnaris"],
    mode: "mobility",
    note: "Nerve glide — go only to a mild pull or tingle; the 'OK' finger shape isn't shown.",
  },
  "elbow-inner|Slow wrist flexion with weight": {
    dofs: [
      { elbow_flex: 90, pron: 0, wrist_flex: 50 },
      { elbow_flex: 90, pron: 0, wrist_flex: -40 },
    ],
    muscles: ["flexor carpi radialis", "flexor carpi ulnaris"],
    mode: "work",
    note: "Forearm rests on a table; the slow lowering is the important part.",
  },
  "elbow-inner|Forearm rotation with hammer": {
    dofs: FOREARM_ROT,
    muscles: ["pronator teres", "supinator"],
    mode: "work",
    note: FOREARM_ROT_NOTE,
  },

  // ------------------------------------------------------------ WRIST/HAND
  "wrist-hand|Wrist bends and circles": {
    dofs: [
      { elbow_flex: 90, pron: 150, wrist_flex: 50 },
      { elbow_flex: 90, pron: 150, wrist_flex: -50 },
    ],
    muscles: ["flexor carpi radialis", "extensor carpi radialis brevis"],
    mode: "mobility",
    note: "Only the up-and-down bend is shown; the rig can't do the side-to-side part of the circles.",
  },
  "wrist-hand|Tendon glides": {
    dofs: null,
    muscles: ["flexor digitorum superficialis", "flexor digitorum profundus"],
    mode: "mobility",
    note: "Finger-only exercise — the rig can't move individual fingers; the finger flexors are highlighted.",
  },
  "wrist-hand|Prayer stretch": {
    dofs: [{ sh_rot_lat: -45, sh_flex: 20, sh_abd: 35, elbow_flex: 100, pron: 90, wrist_flex: -65 }],
    muscles: ["flexor carpi radialis", "palmaris longus", "flexor carpi ulnaris", "flexor retinaculum of wrist"],
    mode: "stretch",
    note: "Both palms press together in front of the chest; right arm shown.",
  },
  "wrist-hand|Median nerve glide": {
    dofs: [
      { sh_rot_lat: 60, sh_abd: 90, elbow_flex: 90 },
      { sh_rot_lat: 60, sh_abd: 90, elbow_flex: 0, wrist_flex: -60 },
    ],
    muscles: ["flexor digitorum superficialis", "flexor retinaculum of wrist"],
    mode: "mobility",
    note: "Nerve glide — stop at a mild pull or tingle; finger position isn't shown.",
  },
  "wrist-hand|Putty or ball squeeze": {
    dofs: null,
    muscles: ["flexor digitorum superficialis", "lumbricals of hand", "opponens pollicis"],
    mode: "work",
    note: "Finger squeeze and pinch — the rig can't move fingers; the hand muscles are highlighted.",
  },
  "wrist-hand|Wrist curls with light weight": {
    dofs: [
      { elbow_flex: 90, pron: 0, wrist_flex: -40 },
      { elbow_flex: 90, pron: 0, wrist_flex: 50 },
      { elbow_flex: 90, pron: 150, wrist_flex: 40 },
      { elbow_flex: 90, pron: 150, wrist_flex: -40 },
    ],
    muscles: ["flexor carpi radialis", "flexor carpi ulnaris", "extensor carpi radialis brevis", "extensor carpi radialis longus"],
    mode: "work",
    note: "Forearm rests on a table: palm-up curls, then palm-down.",
  },

  // ------------------------------------------------------- MID BACK / RIBS
  "mid-back-rib|Rib-expansion breathing": {
    dofs: null,
    muscles: ["intercostal", "diaphragm"],
    mode: "mobility",
    note: "Breathing exercise — no joint movement to show; the rib muscles and diaphragm are highlighted.",
  },
  "mid-back-rib|Seated rotation": {
    dofs: [
      { sh_flex: 80, sh_hadd: 50, elbow_flex: 130, lumbar_rot: 35, neck_rot: 15 },
      { sh_flex: 80, sh_hadd: 50, elbow_flex: 130, lumbar_rot: -35, neck_rot: -15 },
    ],
    muscles: ["thoracic rotator", "external oblique", "internal oblique"],
    mode: "mobility",
    note: "Done seated with arms crossed; keep the hips facing forward.",
  },
  "mid-back-rib|Cat–cow": {
    dofs: CAT_COW,
    muscles: ["spinalis thoracis", "longissimus thoracis", "rectus abdominis"],
    mode: "mobility",
    note: CAT_COW_NOTE,
  },
  "mid-back-rib|Side-bend reach": {
    dofs: [{ sh_abd: 160, elbow_flex: 10, lumbar_side: -30, neck_side: -10 }],
    muscles: ["latissimus dorsi", "intercostal", "external oblique", "quadratus lumborum"],
    mode: "stretch",
  },
  "mid-back-rib|Open book": {
    dofs: OPEN_BOOK,
    muscles: ["thoracic rotator", "pectoralis major", "external oblique"],
    mode: "mobility",
    note: OPEN_BOOK_NOTE,
  },
  "mid-back-rib|Band row": {
    dofs: ROW(40),
    muscles: ["latissimus dorsi", "rhomboid", "transverse part of trapezius", "teres major"],
    mode: "work",
    note: "Both arms pull together; right arm shown.",
  },

  // ---------------------------------------------------------- ABDOMEN/CORE
  "abdomen-core|Belly breathing": {
    dofs: null,
    muscles: ["diaphragm", "transversus abdominis"],
    mode: "mobility",
    note: "Breathing exercise — no joint movement to show; done lying on your back with knees bent.",
  },
  "abdomen-core|Gentle core activation": {
    dofs: [REST],
    muscles: ["transversus abdominis", "internal oblique"],
    mode: "work",
    note: "Done lying on your back with knees bent; the lower belly draws in with no visible joint movement.",
  },
  "abdomen-core|Pelvic tilt": {
    dofs: [{ lumbar_flex: 0 }, { lumbar_flex: 10 }],
    muscles: ["rectus abdominis", "transversus abdominis"],
    mode: "mobility",
    note: "Shown standing — done lying on your back; the pelvis tilt is shown as a small lower-back bend.",
  },
  "abdomen-core|Dead bug": {
    dofs: [
      { sh_flex: 90, hip_flex: 90, knee_flex: 90 },
      { sh_flex: 165, hip_flex: 90, knee_flex: 90 },
      { sh_flex: 90, hip_flex: 90, knee_flex: 90 },
      { sh_flex: 90, hip_flex: 30, knee_flex: 20 },
    ],
    muscles: ["transversus abdominis", "rectus abdominis", "external oblique"],
    mode: "work",
    note: "Shown standing — done lying on your back; the arm and the OPPOSITE leg lower together (right arm, then right leg shown).",
  },
  "abdomen-core|Plank from knees": {
    dofs: [{ sh_flex: 90, elbow_flex: 90, pron: 120, knee_flex: 90 }],
    muscles: ["rectus abdominis", "transversus abdominis", "external oblique"],
    mode: "work",
    note: "Shown upright — held face down on the forearms and knees with the body straight.",
  },
  "abdomen-core|Side plank from knees": {
    dofs: [{ sh_abd: 90, elbow_flex: 90, pron: 90, knee_flex: 90 }],
    muscles: ["external oblique", "internal oblique", "quadratus lumborum"],
    mode: "work",
    note: "Shown upright — held on your side, propped on the forearm with hips lifted; switch sides.",
  },

  // ------------------------------------------------------------ LOWER BACK
  "lower-back|Pelvic tilt": {
    dofs: [{ lumbar_flex: 10 }, { lumbar_flex: -10 }],
    muscles: ["multifidus", "rectus abdominis"],
    mode: "mobility",
    note: "Shown standing — done lying on your back with knees bent; the pelvis rocking is shown as a small lower-back bend.",
  },
  "lower-back|Knee to chest": {
    dofs: [{ hip_flex: 120, knee_flex: 130, lumbar_flex: 15, sh_flex: 30, elbow_flex: 110 }],
    muscles: ["gluteus maximus", "iliocostalis lumborum", "multifidus"],
    mode: "stretch",
    note: "Shown standing — done lying on your back, hugging the knee to the chest.",
  },
  "lower-back|Cat–cow": {
    dofs: CAT_COW,
    muscles: ["iliocostalis lumborum", "longissimus thoracis", "multifidus", "rectus abdominis"],
    mode: "mobility",
    note: CAT_COW_NOTE,
  },
  "lower-back|Lower trunk rotation": {
    dofs: [{ lumbar_rot: 30 }, { lumbar_rot: -30 }],
    muscles: ["lumbar rotator", "quadratus lumborum", "external oblique", "multifidus"],
    mode: "mobility",
    note: "Shown standing as trunk rotation — done lying on your back, letting the bent knees fall side to side.",
  },
  "lower-back|Glute bridge": {
    dofs: BRIDGE,
    muscles: ["gluteus maximus", "multifidus", "iliocostalis lumborum"],
    mode: "work",
    note: BRIDGE_NOTE,
  },
  "lower-back|Bird dog": {
    dofs: [REST, { sh_flex: 165 }, REST, { hip_flex: -15 }],
    muscles: ["multifidus", "iliocostalis lumborum", "gluteus maximus", "longissimus thoracis"],
    mode: "work",
    note: "Shown standing — done on hands and knees; reach one arm with the OPPOSITE leg (arm and leg shown one at a time).",
  },

  // ------------------------------------------------------ BUTTOCK / SCIATIC
  "buttock-sciatic|Knee to opposite shoulder": {
    dofs: [{ hip_flex: 100, hip_abd: -20, knee_flex: 110 }],
    muscles: ["piriformis", "gluteus maximus"],
    mode: "stretch",
    note: "Shown standing — done lying on your back, pulling the knee toward the opposite shoulder.",
  },
  "buttock-sciatic|Figure-4 stretch": {
    dofs: [{ hip_flex: 95, hip_rot_lat: 45, hip_abd: -10, knee_flex: 100 }],
    muscles: ["piriformis", "gemellus", "obturator internus", "gluteus maximus"],
    mode: "stretch",
    note: "Shown standing — done lying on your back with the ankle crossed over the other knee.",
  },
  "buttock-sciatic|Sciatic nerve glide (seated)": {
    dofs: [
      { hip_flex: 90, knee_flex: 90, ankle_pf: 30, neck_flex: 30 },
      { hip_flex: 90, knee_flex: 5, ankle_pf: -20, neck_flex: -30 },
    ],
    muscles: ["long head of biceps femoris", "semitendinosus", "semimembranosus"],
    mode: "mobility",
    note: "Done seated on a chair; keep it gentle and rhythmic.",
  },
  "buttock-sciatic|Prone press-up": {
    dofs: [REST, { lumbar_flex: -25, neck_flex: -10 }],
    muscles: ["multifidus", "iliocostalis lumborum", "longissimus thoracis"],
    mode: "mobility",
    note: "Shown standing as a backward bend — done lying face down, pushing up with the arms while the hips stay down.",
  },
  "buttock-sciatic|Glute bridge": {
    dofs: BRIDGE,
    muscles: ["gluteus maximus", "gluteus medius"],
    mode: "work",
    note: BRIDGE_NOTE,
  },
  "buttock-sciatic|Clamshell": {
    dofs: CLAM,
    muscles: ["gluteus medius", "piriformis", "gemellus"],
    mode: "work",
    note: CLAM_NOTE,
  },

  // ------------------------------------------------------------- HIP OUTER
  "hip-outer|Isometric hip abduction": {
    dofs: [{ hip_abd: 5 }],
    muscles: ["gluteus medius", "gluteus minimus", "tensor fasciae latae"],
    mode: "work",
    note: "Done lying on your back pushing the knees out into a belt; little or no movement.",
  },
  "hip-outer|Glute bridge": {
    dofs: BRIDGE,
    muscles: ["gluteus maximus", "gluteus medius"],
    mode: "work",
    note: BRIDGE_NOTE,
  },
  "hip-outer|Sit to stand": {
    dofs: SIT_TO_STAND,
    muscles: ["gluteus medius", "gluteus maximus", "vastus lateralis"],
    mode: "work",
    note: SIT_TO_STAND_NOTE,
  },
  "hip-outer|Side-lying hip lift": {
    dofs: SIDE_LEG_LIFT,
    muscles: ["gluteus medius", "gluteus minimus", "tensor fasciae latae"],
    mode: "work",
    note: SIDE_LEG_LIFT_NOTE,
  },
  "hip-outer|Single-leg stand": {
    dofs: LIFTED_LEG,
    muscles: ["gluteus medius", "gluteus minimus"],
    mode: "work",
    note: "Right leg is the lifted one; the working hip muscles are in the standing leg — keep the pelvis level.",
  },
  "hip-outer|Step-up": {
    dofs: STEP_UP,
    muscles: ["gluteus medius", "gluteus maximus", "vastus medialis"],
    mode: "work",
    note: STEP_UP_NOTE,
  },

  // -------------------------------------------------------- HIP FRONT/GROIN
  "hip-front-groin|Adductor squeeze": {
    dofs: [{ hip_flex: 45, knee_flex: 90, hip_abd: -5 }],
    muscles: ["adductor longus", "adductor brevis", "gracilis", "pectineus"],
    mode: "work",
    note: "Shown standing — done lying on your back squeezing a ball between the knees.",
  },
  "hip-front-groin|Standing march": {
    dofs: [REST, { hip_flex: 90, knee_flex: 90 }],
    muscles: ["iliacus", "psoas major", "rectus femoris"],
    mode: "work",
  },
  "hip-front-groin|Half-kneeling hip flexor stretch": {
    dofs: [{ hip_flex: -15, knee_flex: 90 }],
    muscles: ["iliacus", "psoas major", "rectus femoris"],
    mode: "stretch",
    note: "Shown standing — done kneeling on the back (right) knee with the other foot in front.",
  },
  "hip-front-groin|Side-lying adduction": {
    dofs: [REST, { hip_abd: -20 }],
    muscles: ["adductor longus", "adductor magnus", "gracilis"],
    mode: "work",
    note: "Shown standing — done lying on your side, lifting the bottom leg; switch sides after the set.",
  },
  "hip-front-groin|Banded knee drive": {
    dofs: [REST, { hip_flex: 100, knee_flex: 100 }],
    muscles: ["iliacus", "psoas major", "rectus femoris"],
    mode: "work",
    note: "Shown standing — done lying on your back against a band around the feet.",
  },
  "hip-front-groin|Copenhagen plank (short lever)": {
    dofs: [{ hip_abd: -5 }],
    muscles: ["adductor longus", "adductor magnus", "gracilis"],
    mode: "work",
    note: "Shown upright — held on your side with the top knee on a bench and hips lifted; the top leg's inner-thigh muscles hold you up.",
  },

  // ------------------------------------------------------------ FRONT THIGH
  "front-thigh|Quad set": {
    dofs: QUAD_SET,
    muscles: ["vastus medialis", "rectus femoris", "vastus lateralis"],
    mode: "work",
    note: QUAD_SET_NOTE,
  },
  "front-thigh|Heel slide": {
    dofs: HEEL_SLIDE,
    muscles: ["rectus femoris", "vastus intermedius"],
    mode: "mobility",
    note: HEEL_SLIDE_NOTE,
  },
  "front-thigh|Straight leg raise": {
    dofs: SLR,
    muscles: ["rectus femoris", "vastus medialis"],
    mode: "work",
    note: SLR_NOTE,
  },
  "front-thigh|Standing quad stretch": {
    dofs: [{ knee_flex: 135, hip_flex: -10, ankle_pf: 20, sh_flex: -30, elbow_flex: 30 }],
    muscles: ["rectus femoris", "vastus intermedius", "vastus lateralis", "vastus medialis"],
    mode: "stretch",
  },
  "front-thigh|Sit to stand": {
    dofs: SIT_TO_STAND,
    muscles: ["vastus lateralis", "vastus medialis", "rectus femoris", "gluteus maximus"],
    mode: "work",
    note: SIT_TO_STAND_NOTE,
  },
  "front-thigh|Split squat": {
    dofs: [{ hip_flex: 20, knee_flex: 5 }, { hip_flex: 80, knee_flex: 90, ankle_pf: -10 }],
    muscles: ["rectus femoris", "vastus lateralis", "vastus medialis", "gluteus maximus"],
    mode: "work",
    note: "Right leg shown as the front leg; the body lowering isn't shown.",
  },

  // ------------------------------------------------------------- BACK THIGH
  "back-thigh|Hamstring heel dig": {
    dofs: [{ hip_flex: 45, knee_flex: 90 }],
    muscles: ["biceps femoris", "semitendinosus", "semimembranosus"],
    mode: "work",
    note: "Shown standing — done lying on your back with knees bent; the heel digs in with no movement.",
  },
  "back-thigh|Glute bridge": {
    dofs: BRIDGE,
    muscles: ["gluteus maximus", "biceps femoris", "semitendinosus"],
    mode: "work",
    note: BRIDGE_NOTE,
  },
  "back-thigh|Towel hamstring stretch": {
    dofs: [{ hip_flex: 75, knee_flex: 5, ankle_pf: -10 }],
    muscles: ["biceps femoris", "semitendinosus", "semimembranosus"],
    mode: "stretch",
    note: "Shown standing — done lying on your back with a towel around the foot.",
  },
  "back-thigh|Single-leg bridge": {
    dofs: BRIDGE,
    muscles: ["biceps femoris", "semitendinosus", "gluteus maximus"],
    mode: "work",
    note: "Done lying on your back with the other leg lifted; shown as the planted (right) leg's hip straightening.",
  },
  "back-thigh|Romanian deadlift": {
    dofs: [{ knee_flex: 10 }, { lumbar_flex: 60, knee_flex: 15, sh_flex: 45 }],
    muscles: ["biceps femoris", "semimembranosus", "semitendinosus", "gluteus maximus"],
    mode: "work",
    note: "The hinge really happens at the hips with a flat back; the rig can't tilt the pelvis, so it bends at the lower back instead.",
  },
  "back-thigh|Assisted Nordic curl": {
    dofs: [{ knee_flex: 90, ankle_pf: 40 }, { knee_flex: 25, ankle_pf: 40 }],
    muscles: ["biceps femoris", "semitendinosus", "semimembranosus"],
    mode: "work",
    note: "Shown standing — done kneeling with the ankles held, lowering the straight body forward from the knees.",
  },

  // ------------------------------------------------------------- KNEE FRONT
  "knee-front|Quad set": {
    dofs: QUAD_SET,
    muscles: ["vastus medialis", "rectus femoris"],
    mode: "work",
    note: QUAD_SET_NOTE,
  },
  "knee-front|Straight leg raise": {
    dofs: SLR,
    muscles: ["rectus femoris", "vastus medialis"],
    mode: "work",
    note: SLR_NOTE,
  },
  "knee-front|Clamshell": {
    dofs: CLAM,
    muscles: ["gluteus medius", "gluteus minimus"],
    mode: "work",
    note: CLAM_NOTE,
  },
  "knee-front|Wall sit": {
    dofs: [{ hip_flex: 45, knee_flex: 45, ankle_pf: -5 }],
    muscles: ["vastus medialis", "vastus lateralis", "rectus femoris"],
    mode: "work",
    note: "Back against a wall with both knees bent; the rig shows the right leg's angles but can't lower the body.",
  },
  "knee-front|Partial squat to chair": {
    dofs: [REST, { hip_flex: 70, knee_flex: 75, ankle_pf: -15 }],
    muscles: ["vastus lateralis", "vastus medialis", "gluteus maximus"],
    mode: "work",
    note: "Right leg shows the squat angles; the body lowering to the chair isn't shown.",
  },
  "knee-front|Slow step-down": {
    dofs: STEP_DOWN,
    muscles: ["vastus medialis", "rectus femoris", "gluteus medius"],
    mode: "work",
    note: STEP_DOWN_NOTE,
  },

  // ------------------------------------------------------------- KNEE OUTER
  "knee-outer|Clamshell": {
    dofs: CLAM,
    muscles: ["gluteus medius", "gluteus maximus"],
    mode: "work",
    note: CLAM_NOTE,
  },
  "knee-outer|Side-lying leg lift": {
    dofs: SIDE_LEG_LIFT,
    muscles: ["gluteus medius", "tensor fasciae latae"],
    mode: "work",
    note: SIDE_LEG_LIFT_NOTE,
  },
  "knee-outer|Standing side stretch": {
    dofs: [{ hip_abd: -20, hip_flex: -10, lumbar_side: -15 }],
    muscles: ["tensor fasciae latae", "iliotibial tract", "gluteus medius"],
    mode: "stretch",
    note: "Right leg crossed behind; the hips shift toward the wall, shown as the trunk leaning away.",
  },
  "knee-outer|Lateral band walk": {
    dofs: [{ hip_flex: 15, knee_flex: 20 }, { hip_flex: 15, knee_flex: 20, hip_abd: 25 }],
    muscles: ["gluteus medius", "tensor fasciae latae"],
    mode: "work",
    note: "Sideways stepping isn't shown; the right leg steps out against the band.",
  },
  "knee-outer|Slow step-down": {
    dofs: STEP_DOWN,
    muscles: ["gluteus medius", "vastus lateralis"],
    mode: "work",
    note: STEP_DOWN_NOTE,
  },
  "knee-outer|Single-leg Romanian deadlift": {
    dofs: [REST, { lumbar_flex: 60, hip_flex: -25, sh_flex: 60 }],
    muscles: ["gluteus medius", "gluteus maximus", "biceps femoris"],
    mode: "work",
    note: "You balance on the other leg; the rig bends at the lower back while the right leg reaches back.",
  },

  // ------------------------------------------------------------- KNEE INNER
  "knee-inner|Quad set": {
    dofs: QUAD_SET,
    muscles: ["vastus medialis"],
    mode: "work",
    note: QUAD_SET_NOTE,
  },
  "knee-inner|Heel slide": {
    dofs: HEEL_SLIDE,
    muscles: ["semitendinosus", "sartorius"],
    mode: "mobility",
    note: HEEL_SLIDE_NOTE,
  },
  "knee-inner|Straight leg raise": {
    dofs: SLR,
    muscles: ["vastus medialis", "rectus femoris"],
    mode: "work",
    note: SLR_NOTE,
  },
  "knee-inner|Mini squat": {
    dofs: [REST, { hip_flex: 35, knee_flex: 45, ankle_pf: -10 }],
    muscles: ["vastus medialis", "vastus lateralis", "gluteus maximus"],
    mode: "work",
    note: "Both knees bend a quarter of the way; the right leg shows the angles, the body lowering isn't shown.",
  },
  "knee-inner|Single-leg stand": {
    dofs: SOFT_KNEE_STANCE,
    muscles: ["vastus medialis", "gluteus medius"],
    mode: "work",
    note: STANCE_NOTE,
  },
  "knee-inner|Step-up": {
    dofs: STEP_UP,
    muscles: ["vastus medialis", "gluteus maximus"],
    mode: "work",
    note: STEP_UP_NOTE,
  },

  // ------------------------------------------------------------------ SHIN
  "shin|Bent-knee calf stretch": {
    dofs: [CALF_STRETCH_BENT],
    muscles: ["soleus", "tibialis posterior"],
    mode: "stretch",
  },
  "shin|Band ankle lift": {
    dofs: [{ ankle_pf: 15 }, { ankle_pf: -20 }],
    muscles: ["tibialis anterior", "extensor digitorum longus"],
    mode: "work",
    note: "Done sitting with the leg straight, pulling the foot up against a band.",
  },
  "shin|Double-leg calf raise": {
    dofs: CALF_RAISE,
    muscles: ["soleus", "gastrocnemius", "tibialis posterior"],
    mode: "work",
    note: CALF_RAISE_NOTE,
  },
  "shin|Single-leg stand": {
    dofs: SOFT_KNEE_STANCE,
    muscles: ["tibialis anterior", "tibialis posterior", "fibularis longus"],
    mode: "work",
    note: STANCE_NOTE,
  },
  "shin|Heel walk": {
    dofs: [{ ankle_pf: -20 }, { ankle_pf: -20, hip_flex: 25, knee_flex: 15 }],
    muscles: ["tibialis anterior", "extensor digitorum longus", "extensor hallucis longus"],
    mode: "work",
    note: "Toes stay lifted as you walk on your heels; only the right leg's step is shown.",
  },
  "shin|Single-leg calf raise": {
    dofs: CALF_RAISE,
    muscles: ["soleus", "gastrocnemius", "tibialis posterior"],
    mode: "work",
    note: CALF_RAISE_NOTE,
  },

  // ------------------------------------------------------------------ CALF
  "calf|Ankle pumps": {
    dofs: ANKLE_PUMPS,
    muscles: ["gastrocnemius", "soleus", "tibialis anterior"],
    mode: "mobility",
    note: ANKLE_PUMPS_NOTE,
  },
  "calf|Straight-knee calf stretch": {
    dofs: [CALF_STRETCH_STRAIGHT],
    muscles: ["gastrocnemius"],
    mode: "stretch",
  },
  "calf|Bent-knee calf stretch": {
    dofs: [CALF_STRETCH_BENT],
    muscles: ["soleus"],
    mode: "stretch",
  },
  "calf|Calf raise hold": {
    dofs: CALF_HOLD,
    muscles: ["gastrocnemius", "soleus"],
    mode: "work",
    note: CALF_RAISE_NOTE,
  },
  "calf|Double-leg calf raise": {
    dofs: CALF_RAISE,
    muscles: ["gastrocnemius", "soleus"],
    mode: "work",
    note: CALF_RAISE_NOTE,
  },
  "calf|Single-leg calf raise": {
    dofs: [REST, { ankle_pf: 35 }, { knee_flex: 20 }, { knee_flex: 20, ankle_pf: 35 }],
    muscles: ["gastrocnemius", "soleus"],
    mode: "work",
    note: "Straight-knee set, then bent-knee set. " + CALF_RAISE_NOTE,
  },

  // -------------------------------------------------------------- ACHILLES
  "achilles|Ankle pumps": {
    dofs: ANKLE_PUMPS,
    muscles: ["calcaneal tendon", "gastrocnemius", "soleus"],
    mode: "mobility",
    note: ANKLE_PUMPS_NOTE,
  },
  "achilles|Calf raise hold": {
    dofs: CALF_HOLD,
    muscles: ["calcaneal tendon", "gastrocnemius", "soleus"],
    mode: "work",
    note: CALF_RAISE_NOTE,
  },
  "achilles|Double-leg calf raise (floor)": {
    dofs: CALF_RAISE,
    muscles: ["calcaneal tendon", "gastrocnemius", "soleus"],
    mode: "work",
    note: CALF_RAISE_NOTE,
  },
  "achilles|Seated calf raise": {
    dofs: [{ hip_flex: 90, knee_flex: 90 }, { hip_flex: 90, knee_flex: 90, ankle_pf: 30 }],
    muscles: ["soleus", "calcaneal tendon"],
    mode: "work",
    note: "Done seated with a weight on the knees; the right leg shows the seated angles.",
  },
  "achilles|Single-leg calf raise (floor)": {
    dofs: CALF_RAISE,
    muscles: ["calcaneal tendon", "gastrocnemius", "soleus"],
    mode: "work",
    note: CALF_RAISE_NOTE,
  },
  "achilles|Slow heel drop off step": {
    dofs: [{ ankle_pf: 30 }, { ankle_pf: -20 }],
    muscles: ["calcaneal tendon", "gastrocnemius", "soleus"],
    mode: "work",
    note: "Standing on a step: lower the heel slowly below the step on the sore leg, come back up with both feet.",
  },

  // ----------------------------------------------------------------- ANKLE
  "ankle|Ankle pumps": {
    dofs: ANKLE_PUMPS,
    muscles: ["tibialis anterior", "gastrocnemius"],
    mode: "mobility",
    note: "Done sitting with the leg raised.",
  },
  "ankle|Calf stretch": {
    dofs: [CALF_STRETCH_STRAIGHT, CALF_STRETCH_BENT],
    muscles: ["gastrocnemius", "soleus"],
    mode: "stretch",
  },
  "ankle|Band eversion": {
    dofs: [REST, { foot_inv: -18 }],
    muscles: ["fibularis longus", "fibularis brevis"],
    mode: "work",
    note: "Done seated, turning the foot out against a band.",
  },
  "ankle|Calf raise": {
    dofs: CALF_RAISE,
    muscles: ["gastrocnemius", "soleus", "fibularis longus"],
    mode: "work",
    note: CALF_RAISE_NOTE,
  },
  "ankle|Single-leg balance": {
    dofs: SOFT_KNEE_STANCE,
    muscles: ["fibularis longus", "fibularis brevis", "tibialis anterior"],
    mode: "work",
    note: "Right leg is the standing (sore) leg with a soft knee; the other foot is lifted.",
  },
  "ankle|Star reach": {
    dofs: [REST, { hip_flex: 35 }, REST, { hip_abd: 30 }, REST, { hip_flex: -20 }],
    muscles: ["fibularis longus", "tibialis posterior", "gluteus medius"],
    mode: "work",
    note: "Right leg shown doing the forward, side and back taps; you balance on the sore leg, where these muscles work.",
  },

  // ------------------------------------------------------------ HEEL / SOLE
  "heel-sole|Plantar fascia stretch": {
    dofs: [{ hip_flex: 80, hip_rot_lat: 40, knee_flex: 100, ankle_pf: -20 }],
    muscles: ["flexor digitorum brevis", "abductor hallucis", "long plantar ligament"],
    mode: "stretch",
    note: "Done seated, foot crossed over the other knee, pulling the toes back by hand; the rig can't bend the toes, so the ankle is shown pulled up.",
  },
  "heel-sole|Foot roll": {
    dofs: null,
    muscles: ["flexor digitorum brevis", "abductor hallucis", "flexor accessorius"],
    mode: "mobility",
    note: "Rolling a ball or bottle under the foot — no joint movement to show; the sole muscles are highlighted.",
  },
  "heel-sole|Calf stretch": {
    dofs: [CALF_STRETCH_STRAIGHT, CALF_STRETCH_BENT],
    muscles: ["gastrocnemius", "soleus", "calcaneal tendon"],
    mode: "stretch",
  },
  "heel-sole|Towel scrunch": {
    dofs: null,
    muscles: ["flexor digitorum brevis", "abductor hallucis", "flexor accessorius"],
    mode: "work",
    note: "Toe-only exercise — the rig can't move the toes; the sole muscles are highlighted.",
  },
  "heel-sole|Double-leg heel raise": {
    dofs: CALF_RAISE,
    muscles: ["gastrocnemius", "soleus", "flexor digitorum brevis"],
    mode: "work",
    note: CALF_RAISE_NOTE,
  },
  "heel-sole|Single-leg heel raise with toe towel": {
    dofs: CALF_RAISE,
    muscles: ["gastrocnemius", "flexor digitorum brevis", "abductor hallucis"],
    mode: "work",
    note: "Toes rest bent back on a rolled towel (not shown). " + CALF_RAISE_NOTE,
  },

  // ------------------------------------------------------- TOP OF FOOT/TOES
  "top-foot-toes|Toe spread": {
    dofs: null,
    muscles: ["dorsal interossei of foot", "abductor hallucis"],
    mode: "work",
    note: "Toe-only exercise — the rig can't move the toes; the foot muscles are highlighted.",
  },
  "top-foot-toes|Towel scrunch": {
    dofs: null,
    muscles: ["flexor digitorum brevis", "flexor accessorius"],
    mode: "work",
    note: "Toe-only exercise — the rig can't move the toes; the sole muscles are highlighted.",
  },
  "top-foot-toes|Big toe stretch": {
    dofs: null,
    muscles: ["flexor hallucis longus", "extensor hallucis longus"],
    mode: "stretch",
    note: "Big-toe-only stretch — the rig can't move the toes; the big-toe muscles are highlighted.",
  },
  "top-foot-toes|Top-of-foot stretch": {
    dofs: [{ hip_flex: -10, knee_flex: 30, ankle_pf: 45 }],
    muscles: ["extensor digitorum longus", "extensor hallucis longus", "tibialis anterior"],
    mode: "stretch",
    note: "The tops of the toes rest on the floor behind you; toe bend isn't shown.",
  },
  "top-foot-toes|Heel raise": {
    dofs: CALF_RAISE,
    muscles: ["flexor hallucis longus", "gastrocnemius", "soleus"],
    mode: "work",
    note: CALF_RAISE_NOTE,
  },
};
