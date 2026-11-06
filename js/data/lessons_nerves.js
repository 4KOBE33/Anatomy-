// Guided lessons for the "nerves" layer. Same schema as LESSONS in lessons.js: each step highlights `structures`
// (lowercase substrings matched as whole words against part base names), keeps `context` solid for orientation and
// fades everything else. Side defaults to "right". Content follows Moore / Netter / Gray's and teaches the plexus
// logic and the classic lesion patterns rather than repeating the per-nerve notes in kb_nerves.js.
export const LESSONS_NERVES = [
  // ───────────────────────────── UPPER LIMB ─────────────────────────────
  {
    id: "brachial-plexus",
    title: "Brachial plexus",
    emoji: "🔀",
    category: "Upper limb",
    level: 2,
    minutes: 6,
    systems: ["nerves", "skeletal", "muscular", "cardio"],
    intro: "Every motor and sensory fibre in the upper limb passes through the brachial plexus. It looks like a tangle, but it is built in five stages that always appear in the same order, and if you know that order you can work out where a lesion is from the deficit. Remember: Randy Travis Drinks Cold Beer (Roots, Trunks, Divisions, Cords, Branches).",
    steps: [
      {
        title: "Roots: C5–T1 between the scalenes",
        structures: ["roots of brachial plexus", "dorsal scapular nerve", "long thoracic nerve"],
        context: ["scalenus anterior", "scalenus medius", "first rib", "clavicle", "subclavian artery"],
        text: "The roots are the anterior rami of C5, C6, C7, C8 and T1. They come out between scalenus anterior and scalenus medius, together with the subclavian artery (the vein passes in front of scalenus anterior). Only two named nerves come straight off the roots: the dorsal scapular nerve (C5) to the rhomboids and the long thoracic nerve (C5–C7) to serratus anterior. If a patient with a plexus injury also has paralysed rhomboids or a winged scapula, the damage is at root level, often an avulsion from the cord that cannot be repaired."
      },
      {
        title: "Trunks: upper, middle, lower",
        structures: ["superior trunk of brachial plexus", "middle trunk of brachial plexus", "inferior trunk of brachial plexus", "suprascapular nerve", "subclavian nerve"],
        context: ["first rib", "clavicle", "scapula", "subclavian artery"],
        text: "In the posterior triangle of the neck the roots join into three trunks (each is shown with its two divisions). C5 and C6 form the upper trunk at Erb's point. C7 carries on alone as the middle trunk. C8 and T1 form the lower trunk, which lies on the first rib behind the subclavian artery. Only the upper trunk has branches: the suprascapular nerve, which runs back to supraspinatus and infraspinatus, and the small nerve to subclavius."
      },
      {
        title: "Divisions: front for flexors, back for extensors",
        structures: ["anterior division of superior trunk of brachial plexus", "anterior division of middle trunk of brachial plexus", "anterior division of inferior trunk of brachial plexus", "posterior division of superior trunk of brachial plexus", "posterior division of middle trunk of brachial plexus", "posterior division of inferior trunk of brachial plexus"],
        context: ["clavicle", "first rib", "scapula"],
        text: "Behind the clavicle each trunk splits into an anterior and a posterior division, giving six in all. Divisions have no branches. The split follows function: anterior divisions carry the fibres for the flexor (front) compartments and posterior divisions carry the fibres for the extensor (back) compartments. The lumbar plexus uses the same rule, with the obturator nerve built from anterior divisions and the femoral nerve from posterior divisions."
      },
      {
        title: "Cords: named around the axillary artery",
        structures: ["posterior cord of brachial plexus", "superior subscapular nerve", "thoracodorsal nerve", "inferior subscapular nerve", "lateral pectoral nerve", "medial pectoral nerve", "medial brachial cutaneous nerve", "medial antebrachial cutaneous nerve"],
        context: ["clavicle", "scapula", "humerus", "pectoralis minor"],
        text: "Behind pectoralis minor the divisions regroup into three cords, named by where they sit relative to the axillary artery. The lateral cord is the anterior divisions of the upper and middle trunks (C5–C7). The medial cord is the anterior division of the lower trunk (C8–T1). The posterior cord (shown) is all three posterior divisions (C5–T1), and its branches are STAR: upper and lower Subscapular, Thoracodorsal, Axillary, Radial. The lateral cord gives the lateral pectoral nerve. The medial cord gives the medial pectoral nerve and the medial cutaneous nerves of the arm and forearm. The pectoral nerves are named after their cords, not their positions."
      },
      {
        title: "Terminal branches: the 'M' and the two posterior nerves",
        structures: ["musculocutaneous nerve", "median nerve", "ulnar nerve", "axillary nerve", "radial nerve"],
        context: ["clavicle", "scapula", "humerus", "radius", "ulna"],
        text: "There are five terminal branches. The lateral cord ends as the musculocutaneous nerve. The medial cord ends as the ulnar nerve. The lateral and medial cords each also send a root to the median nerve, and these three nerves form the letter 'M' in front of the axillary artery, which is how you find the plexus in the dissection room. The posterior cord ends as the axillary nerve, which goes round the surgical neck of the humerus, and the radial nerve, which goes down the back of the arm. As a rule: musculocutaneous supplies the flexors of the arm, median and ulnar supply the flexors of the forearm and hand, and radial supplies every extensor."
      },
      {
        title: "Erb vs Klumpke: upper vs lower plexus injury",
        structures: ["superior trunk of brachial plexus", "inferior trunk of brachial plexus"],
        context: ["first rib", "clavicle", "scapula", "humerus"],
        text: "Upper trunk (C5–C6) injury is Erb–Duchenne palsy. It follows anything that forces the neck and shoulder apart, such as shoulder dystocia at birth or landing on the shoulder in a motorcycle fall. Deltoid, the rotator cuff, biceps and brachialis are lost, so the arm hangs adducted and medially rotated with the elbow extended and the forearm pronated: the 'waiter's tip'. Lower trunk (C8–T1) injury is Klumpke palsy. It follows a violent upward pull on the arm, such as grabbing a branch while falling or a breech delivery. All the intrinsic hand muscles are lost, giving a claw hand, with sensory loss along the medial forearm and hand. Horner syndrome means T1 has been avulsed. A cervical rib or a Pancoast tumour can compress the lower trunk slowly."
      }
    ],
    takeaways: [
      "Roots C5–T1 → 3 trunks → 6 divisions → 3 cords → 5 terminal branches (Randy Travis Drinks Cold Beer).",
      "Branches from the roots: dorsal scapular (C5) and long thoracic (C5–C7). From the upper trunk: suprascapular and nerve to subclavius. The divisions have none.",
      "Anterior divisions → lateral and medial cords → flexors. Posterior divisions → posterior cord (STAR) → extensors.",
      "Erb (C5–C6, upper trunk) = waiter's tip. Klumpke (C8–T1, lower trunk) = claw hand ± Horner syndrome."
    ]
  },
  {
    id: "upper-limb-nerve-injuries",
    title: "Nerves of the upper limb & classic injuries",
    emoji: "✋",
    category: "Upper limb",
    level: 2,
    minutes: 7,
    systems: ["nerves", "skeletal", "muscular", "connective"],
    intro: "Most upper limb nerve injuries happen where a nerve lies against bone or passes through a tight space. Learn where each nerve is vulnerable and what it supplies, and the classic signs follow: winged scapula, flat shoulder, wrist drop, ape hand and claw hand.",
    steps: [
      {
        title: "Long thoracic nerve → winged scapula",
        structures: ["long thoracic nerve"],
        context: ["scapula", "serratus anterior", "first rib", "humerus"],
        text: "This nerve (C5–C7) runs down the medial wall of the axilla on the outer surface of serratus anterior. Because it lies on the surface of the muscle, axillary node clearance, a stab wound or heavy straps over the shoulder can damage it. When serratus anterior is paralysed, the medial border and inferior angle of the scapula lift away from the chest wall when the patient pushes against a wall (winging). The arm also cannot be raised above the horizontal, because nothing rotates the scapula upward."
      },
      {
        title: "Axillary nerve → flat shoulder",
        structures: ["axillary nerve", "superior lateral brachial cutaneous nerve"],
        context: ["humerus", "scapula", "teres minor", "teres major"],
        text: "The axillary nerve (C5–C6) passes backward through the quadrangular space with the posterior circumflex humeral artery. It then wraps around the surgical neck of the humerus to supply deltoid and teres minor. A fracture of the surgical neck or an anterior shoulder dislocation can stretch or tear it. The result is weak abduction beyond the first 15° (supraspinatus can still start the movement), a flattened shoulder as deltoid wastes, and a numb 'regimental badge' patch over the lower deltoid. Always test sensation over that patch before and after you reduce a dislocated shoulder."
      },
      {
        title: "Musculocutaneous nerve: flexors of the arm",
        structures: ["musculocutaneous nerve", "lateral antebrachial cutaneous nerve"],
        context: ["humerus", "coracobrachialis", "radius", "ulna"],
        text: "The musculocutaneous nerve pierces coracobrachialis and then runs between biceps and brachialis, supplying all three. Above the elbow it comes out lateral to the biceps tendon as the lateral cutaneous nerve of the forearm. It lies deep in the axilla, so it is rarely injured on its own. When it is, elbow flexion and supination become weak but are not lost, because brachioradialis and supinator are supplied by the radial nerve. The biceps reflex (C5–C6) disappears and the lateral forearm goes numb."
      },
      {
        title: "Radial nerve → wrist drop",
        structures: ["radial nerve", "posterior antebrachial cutaneous nerve", "inferior lateral brachial cutaneous nerve"],
        context: ["humerus", "radius", "ulna"],
        text: "The radial nerve (C5–T1) passes through the triangular interval and then spirals around the back of the humerus in the radial groove, lying directly on bone. A midshaft fracture of the humerus, or an arm hung over a chair back during deep sleep ('Saturday night palsy'), damages it at this point. The patient has wrist drop: the wrist and the MCP joints cannot be extended. A small patch over the dorsal first web space goes numb. Triceps usually still works because its branches leave the nerve above the groove. A crutch pressing into the axilla injures the nerve higher up and paralyses triceps as well. Mnemonic: BEST (Brachioradialis, Extensors, Supinator, Triceps)."
      },
      {
        title: "Deep vs superficial radial: finger drop without wrist drop",
        structures: ["deep branch of radial nerve", "posterior interosseous nerve", "superficial branch of radial nerve"],
        context: ["radius", "ulna", "supinator", "humerus"],
        text: "In front of the lateral epicondyle the radial nerve divides. The deep branch winds through supinator and comes out as the posterior interosseous nerve, which supplies the finger and thumb extensors. It has no cutaneous branch. If it is injured (radial head fracture, Monteggia injury, compression at the arcade of Frohse), the patient has finger drop with no sensory loss. The wrist can still extend, but it drifts radially, because ECRL is supplied above the split. The superficial branch is purely sensory. It runs under brachioradialis and crosses the anatomical snuffbox, where a tight watch strap or handcuffs can compress it."
      },
      {
        title: "Median nerve → carpal tunnel and ape hand",
        structures: ["median nerve", "anterior interosseous nerve"],
        context: ["humerus", "radius", "ulna", "flexor retinaculum of wrist", "scaphoid", "trapezium"],
        text: "The median nerve gives no branches in the arm. In the forearm it passes between the two heads of pronator teres and runs under FDS, supplying most of the forearm flexors; its anterior interosseous branch supplies FPL, the lateral half of FDP and pronator quadratus. It then passes deep to the flexor retinaculum through the carpal tunnel to the LOAF muscles (lateral two Lumbricals, Opponens pollicis, Abductor pollicis brevis, Flexor pollicis brevis). Carpal tunnel syndrome causes night-time tingling in the lateral 3½ digits and wasting of the thenar eminence. The palm still feels normal, because the palmar cutaneous branch runs over the retinaculum, not through the tunnel. A lesion at the elbow (supracondylar fracture) gives the 'hand of benediction' when the patient tries to make a fist. Long-standing thenar wasting leaves the thumb lying flat beside the fingers (ape hand)."
      },
      {
        title: "Ulnar nerve → claw hand",
        structures: ["ulnar nerve"],
        context: ["humerus", "ulna", "radius", "pisiform", "hamate"],
        text: "The ulnar nerve (C8–T1) passes behind the medial epicondyle through the cubital tunnel; this is the 'funny bone'. It enters the forearm between the heads of FCU and supplies FCU and the medial half of FDP. It reaches the hand over the flexor retinaculum, through Guyon's canal between the pisiform and the hook of hamate, and there splits into a superficial branch (mostly sensory) and a deep branch (motor). The deep branch supplies every intrinsic hand muscle except LOAF. When it is damaged the ring and little fingers claw (MCP joints hyperextended, IP joints flexed), the interossei waste, and Froment's sign is positive. The 'ulnar paradox': an injury at the elbow causes less clawing than one at the wrist, because the medial half of FDP is paralysed too and can no longer flex the fingers. If sensation on the back of the hand is normal, the lesion is at the wrist, below where the dorsal branch leaves."
      }
    ],
    takeaways: [
      "Long thoracic → winged scapula. Axillary (surgical neck) → flat shoulder and a numb regimental badge patch.",
      "Radial at the radial groove → wrist drop with triceps spared. Posterior interosseous → finger drop with no wrist drop and no sensory loss.",
      "Median at the wrist → carpal tunnel syndrome (palm spared), thenar wasting, ape hand. Median at the elbow → hand of benediction.",
      "Ulnar → claw ring and little fingers, interosseous wasting, Froment's sign. The more proximal the lesion, the less the clawing (ulnar paradox)."
    ]
  },

  // ───────────────────────────── LOWER LIMB ─────────────────────────────
  {
    id: "lower-limb-nerves",
    title: "Lumbosacral plexus & nerves of the lower limb",
    emoji: "🦵",
    category: "Lower limb",
    level: 2,
    minutes: 7,
    systems: ["nerves", "skeletal", "muscular", "connective"],
    intro: "The lower limb is supplied by two plexuses. The lumbar plexus (L1–L4) forms inside psoas and supplies the front and medial thigh. The sacral plexus (L4–S4) lies on the back wall of the pelvis and supplies the buttock, the back of the thigh and everything below the knee. Follow each nerve from where it starts to where it ends and the classic lesions make sense: meralgia paraesthetica, Trendelenburg gait, sciatica and foot drop.",
    steps: [
      {
        title: "Lumbar plexus: born inside psoas",
        structures: ["anterior rami of lumbar nerves", "iliohypogastric nerve", "ilio-inguinal nerve", "genitofemoral nerve", "lateral femoral cutaneous nerve"],
        context: ["psoas major", "lumbar vertebra", "hip bone", "inguinal ligament"],
        text: "The anterior rami of L1–L4 join inside psoas major, and their branches come out around the muscle. The iliohypogastric and ilio-inguinal nerves (L1) leave its lateral border and run round the abdominal wall. The ilio-inguinal travels through the inguinal canal and is the nerve most often caught during hernia repair. The genitofemoral nerve (L1–L2) pierces the front of psoas. Its genital branch supplies cremaster and its femoral branch supplies skin just below the inguinal ligament. The lateral femoral cutaneous nerve (L2–L3) passes under the inguinal ligament close to the ASIS, and it is compressed there by tight belts, obesity or pregnancy. That compression is meralgia paraesthetica: burning and numbness over the anterolateral thigh with no weakness."
      },
      {
        title: "Femoral nerve: knee extension",
        structures: ["femoral nerve", "saphenous nerve"],
        context: ["hip bone", "femur", "patella", "tibia", "inguinal ligament"],
        text: "The femoral nerve (L2–L4, from the posterior divisions) runs in the groove between psoas and iliacus. It passes under the inguinal ligament lateral to the femoral artery, outside the femoral sheath (NAVEL, from lateral to medial: Nerve, Artery, Vein, Empty space, Lymphatics). It supplies iliacus, pectineus, sartorius and quadriceps. If it is damaged the knee gives way, the knee jerk (L3–L4) is lost and the front of the thigh goes numb. Its longest branch, the saphenous nerve, runs through the adductor canal and then alongside the great saphenous vein, supplying skin on the medial leg and foot. It is the only part of the femoral nerve that reaches below the knee, and it can be injured when that vein is harvested or stripped."
      },
      {
        title: "Obturator nerve: adductors",
        structures: ["obturator nerve"],
        context: ["hip bone", "femur", "sacrum"],
        text: "The obturator nerve (L2–L4, from the anterior divisions) leaves the medial border of psoas, runs along the side wall of the pelvis and passes through the obturator canal. In the thigh it splits into anterior and posterior branches on either side of adductor brevis. It supplies the adductors, gracilis and obturator externus, and a patch of skin on the medial thigh. Pelvic surgery and pelvic tumours can damage it, and the leg then swings outward when the patient walks. The obturator nerve supplies both the hip and the knee, so a child with hip disease may complain only of knee pain."
      },
      {
        title: "Superior gluteal nerve → Trendelenburg sign",
        structures: ["superior gluteal nerve", "nerve to piriformis", "nerve to quadratus femoris"],
        context: ["hip bone", "sacrum", "femur", "gluteus medius", "piriformis"],
        text: "Piriformis divides the greater sciatic foramen into an upper and a lower half. The superior gluteal nerve (L4–S1) is the only nerve that leaves above it. It then runs between gluteus medius and gluteus minimus and supplies both, as well as tensor fasciae latae. These muscles abduct the hip and keep the pelvis level when you stand on one leg. If the nerve is injured (a badly placed injection, or the lateral approach to the hip), the pelvis drops on the opposite side when the patient stands on the affected leg. That is a positive Trendelenburg sign, and walking becomes a lurching 'gluteal' gait. Give gluteal injections in the upper outer quadrant to stay clear of this nerve and the sciatic. Small direct branches also supply piriformis and quadratus femoris."
      },
      {
        title: "Sciatic, posterior femoral cutaneous & pudendal: below piriformis",
        structures: ["sciatic nerve", "posterior femoral cutaneous nerve", "pudendal nerve"],
        context: ["hip bone", "sacrum", "femur", "piriformis"],
        text: "The sciatic nerve (L4–S3) leaves below piriformis and runs down halfway between the greater trochanter and the ischial tuberosity, deep to gluteus maximus and then under the hamstrings. It is really two nerves in one sheath, the tibial and the common fibular, and it usually separates into them above the knee. A posterior hip dislocation or a misplaced injection can damage the whole nerve. 'Sciatica' usually means an L5 or S1 root compressed by a disc, not a lesion of the nerve itself. Next to it, the posterior femoral cutaneous nerve (S1–S3) supplies skin on the back of the thigh. The pudendal nerve (S2–S4) hooks round the ischial spine and runs forward in Alcock's canal to supply the perineum and the external sphincters ('S2, 3, 4 keeps the poo and pee off the floor'). In a pudendal block the needle is aimed at the ischial spine."
      },
      {
        title: "Tibial nerve: plantarflexion and the sole",
        structures: ["tibial nerve", "medial sural cutaneous nerve", "sural nerve", "medial plantar nerve", "lateral plantar nerve"],
        context: ["femur", "tibia", "fibula", "calcaneus", "calcaneal tendon"],
        text: "The tibial nerve runs straight down the popliteal fossa. It is the most superficial of the three central structures there: nerve, then vein, then artery deepest. It passes deep to soleus, supplies every muscle in the back of the leg, and goes behind the medial malleolus through the tarsal tunnel (Tom, Dick, ANd Harry). There it divides into the medial plantar nerve, which works like the median nerve in the hand (LAFF), and the lateral plantar nerve, which works like the ulnar nerve. It lies deep and is rarely injured. When it is, the patient loses plantarflexion and the ankle jerk (S1). Its medial sural cutaneous branch joins a branch from the common fibular nerve to form the sural nerve, which runs beside the calcaneal tendon. The sural nerve is purely sensory, so it is the usual donor for nerve grafts and biopsies."
      },
      {
        title: "Common fibular nerve → foot drop",
        structures: ["common fibular nerve", "superficial fibular nerve", "deep fibular nerve", "dorsal cutaneous nerve of foot"],
        context: ["fibula", "tibia", "femur", "talus", "interosseous membrane of leg"],
        text: "The common fibular nerve follows the biceps femoris tendon and then winds around the neck of the fibula, lying just under the skin. It is the most commonly injured nerve in the lower limb: a fibular neck fracture, a tight plaster cast or long periods with the legs crossed can all damage it. The result is foot drop, a high-stepping gait and numbness over the dorsum of the foot. The superficial fibular nerve supplies fibularis longus and brevis (eversion) and most of the skin on the dorsum of the foot. The deep fibular nerve runs with the anterior tibial artery on the interosseous membrane. It supplies the dorsiflexors and only the first web space of skin. In an L5 root lesion, inversion (tibialis posterior) and hip abduction are weak as well, which helps tell it apart from a fibular nerve palsy."
      }
    ],
    takeaways: [
      "Lumbar plexus forms inside psoas: femoral (posterior divisions, knee extension, lateral to the artery) and obturator (anterior divisions, adduction). The lateral femoral cutaneous nerve is the one involved in meralgia paraesthetica.",
      "Superior gluteal is the only nerve above piriformis (abductors → Trendelenburg sign). Sciatic and pudendal leave below it.",
      "Tibial nerve: plantarflexion, sole (medial plantar is like the median, lateral plantar like the ulnar), tarsal tunnel.",
      "Common fibular at the fibular neck → foot drop (superficial = eversion + dorsum of foot; deep = dorsiflexion + first web space)."
    ]
  },

  // ───────────────────────────── HEAD & NECK ─────────────────────────────
  {
    id: "cranial-nerves",
    title: "Cranial nerves III–XII",
    emoji: "🧠",
    category: "Head & neck",
    level: 2,
    minutes: 7,
    systems: ["nerves", "skeletal", "nervous", "muscular", "cardio"],
    intro: "Cranial nerves III–XII leave the brainstem: III and IV from the midbrain, V from the pons, VI–VIII at the pontomedullary junction and IX–XII from the medulla. Each leaves the skull through a particular opening. If you know where a nerve leaves and what it supplies, you can locate a lesion from a single sign such as a dilated pupil, a deviated tongue or a drooping shoulder. (CN I and II belong to the forebrain; the optic nerve is in the brain layer.)",
    steps: [
      {
        title: "Eye movements: III, IV, VI",
        structures: ["oculomotor nerve", "trochlear nerve", "abducens nerve"],
        context: ["midbrain", "pons", "eyeball", "sphenoid bone"],
        text: "All three reach the orbit through the superior orbital fissure. To remember which supplies what: LR6 SO4, the rest 3. The oculomotor nerve also lifts the eyelid and constricts the pupil. A complete III palsy leaves the eye 'down and out', with ptosis and a dilated pupil. An aneurysm of the posterior communicating artery affects the pupil early, because the parasympathetic fibres run on the outside of the nerve. A IV palsy causes double vision when looking down, for example on stairs, and the patient tilts the head away from the affected side. A VI palsy turns the eye inward. Raised intracranial pressure can stretch VI where it crosses the petrous apex, and it runs through the cavernous sinus itself rather than in its wall."
      },
      {
        title: "Trigeminal nerve: three sensory divisions",
        structures: ["trigeminal nerve", "ophthalmic nerve", "maxillary nerve", "mandibular nerve"],
        context: ["pons", "sphenoid bone", "temporal bone", "maxilla", "mandible"],
        text: "CN V leaves the side of the pons as a large sensory root and a small motor root, which reach the trigeminal ganglion in Meckel's cave. The three divisions leave through different openings: V1 through the superior orbital fissure, V2 through the foramen rotundum and V3 through the foramen ovale (Standing Room Only). V1 and V2 are purely sensory. V3 also carries the motor root to the muscles of mastication. Trigeminal neuralgia causes stabbing pain in the V2/V3 area. The corneal reflex tests V1 (sensory in) and VII (motor out). If the motor root is damaged, the jaw deviates towards the weak side when the mouth opens."
      },
      {
        title: "Branches of V3: dentist's nerves",
        structures: ["inferior alveolar nerve", "lingual nerve", "mental nerve", "buccal nerve", "nerve to mylohyoid"],
        context: ["mandible", "maxilla", "mylohyoid", "temporal bone"],
        text: "The inferior alveolar nerve enters the mandibular foramen, runs in the mandibular canal to supply the lower teeth, and comes out at the mental foramen as the mental nerve to the lower lip and chin. Just before entering the foramen it gives off the nerve to mylohyoid (mylohyoid and the anterior belly of digastric). The lingual nerve picks up the chorda tympani (taste and secretomotor fibres from VII) and lies right against the bone next to the third molar, so a wisdom tooth extraction can cause a numb tongue with loss of taste. One more exam trap: the buccal nerve is a sensory branch of V3. Buccinator is supplied by the facial nerve."
      },
      {
        title: "Facial nerve: the face, a taste and the tears",
        structures: ["facial nerve"],
        context: ["temporal bone", "mandible", "pons", "maxilla"],
        text: "CN VII leaves at the cerebellopontine angle, enters the internal acoustic meatus and follows the facial canal through the temporal bone. Inside the canal it gives off the greater petrosal nerve (lacrimal gland), the nerve to stapedius and the chorda tympani (taste and the submandibular and sublingual glands). It leaves the skull at the stylomastoid foramen, passes into the parotid gland and divides there into five branches: To Zanzibar By Motor Car. In Bell's palsy (a lower motor neuron lesion) the whole of one side of the face is weak, forehead included. After a stroke (an upper motor neuron lesion) the forehead is spared, because the upper face receives input from both sides of the cortex."
      },
      {
        title: "IX and X: through the jugular foramen",
        structures: ["glossopharyngeal nerve", "vagus nerve"],
        context: ["medulla oblongata", "occipital bone", "temporal bone", "common carotid artery", "internal jugular vein"],
        text: "IX, X and XI all leave through the jugular foramen. IX carries taste and sensation from the posterior third of the tongue and sensation from the pharynx (it is the sensory side of the gag reflex). It also supplies the carotid sinus and body, stylopharyngeus, and the parotid gland via the otic ganglion. X runs down in the carotid sheath between the carotid artery and the internal jugular vein. It supplies the palate, pharynx and larynx, and carries parasympathetic fibres to the gut as far as the left colic flexure. If X is damaged, the uvula is pulled towards the healthy side and the voice becomes hoarse. The left recurrent laryngeal nerve loops under the aortic arch, so an aortic aneurysm or a left-sided lung cancer can also cause hoarseness."
      },
      {
        title: "XI and XII: shoulder shrug and tongue",
        structures: ["accessory nerve", "hypoglossal nerve"],
        context: ["occipital bone", "mandible", "hyoid bone", "sternocleidomastoid"],
        text: "The accessory nerve supplies sternocleidomastoid and then crosses the posterior triangle just under the skin to reach trapezius. A lymph node biopsy in the posterior triangle can cut it, leaving a drooping shoulder that the patient cannot shrug. The hypoglossal nerve leaves through the hypoglossal canal, loops forward below the posterior belly of digastric and supplies every tongue muscle except palatoglossus. With a lower motor neuron lesion, the tongue wastes and points TOWARDS the damaged side when it is stuck out, because the healthy genioglossus pushes it over unopposed. Compare X, where the uvula moves AWAY from the lesion."
      }
    ],
    takeaways: [
      "III, IV, VI and V1 pass through the superior orbital fissure, V2 through the foramen rotundum, V3 through the foramen ovale, VII through the internal acoustic meatus to the stylomastoid foramen, IX–XI through the jugular foramen and XII through the hypoglossal canal.",
      "III palsy = down and out, ptosis, dilated pupil. IV = trouble looking down, head tilted. VI = eye turned in.",
      "LMN facial palsy involves the forehead. UMN facial palsy spares it.",
      "The uvula deviates away from a vagal lesion and the tongue deviates towards a hypoglossal lesion. Accessory nerve injury = shoulder droop and weak shrug."
    ]
  }
];
