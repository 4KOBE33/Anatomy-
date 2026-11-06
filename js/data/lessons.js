// Guided lessons. Each step highlights `structures` (lowercase substrings matched with name.includes() against part
// base names), keeps `context` solid for orientation, and fades everything else. Side defaults to "right".
// Content follows Moore / Netter / Gray's; it teaches relationships, groupings and clinical patterns rather than
// repeating the per-structure study notes in kb.js.
export const LESSONS = [
  // ───────────────────────────── UPPER LIMB ─────────────────────────────
  {
    id: "rotator-cuff",
    title: "Rotator cuff",
    emoji: "💪",
    category: "Upper limb",
    level: 1,
    minutes: 4,
    systems: ["muscular", "skeletal"],
    intro: "The glenohumeral joint trades stability for range: a big humeral head sits on a shallow glenoid like a golf ball on a tee. Four short muscles (SITS) hold it in place, and they cause a large share of the shoulder pain you will see in clinic.",
    steps: [
      {
        title: "Supraspinatus: the one that gets pinched",
        structures: ["supraspinatus"],
        context: ["scapula", "humerus", "clavicle"],
        text: "It fills the supraspinous fossa and runs laterally under the acromion to the top facet of the greater tubercle. With the deltoid it starts abduction. Its tendon has to pass through the narrow subacromial space, so it is the cuff tendon most often impinged and torn. A painful arc between about 60° and 120° of abduction is the classic sign."
      },
      {
        title: "Infraspinatus",
        structures: ["infraspinatus"],
        context: ["scapula", "humerus"],
        text: "Below the spine of the scapula, it fills the infraspinous fossa and inserts on the middle facet of the greater tubercle. It is the main lateral rotator. The suprascapular nerve supplies both 'spinatus' muscles. A lesion at the suprascapular notch weakens both; a lesion at the spinoglenoid notch (for example a ganglion cyst) affects only infraspinatus."
      },
      {
        title: "Teres minor",
        structures: ["teres minor"],
        context: ["scapula", "humerus", "teres major", "long head of triceps brachii"],
        text: "Teres minor is the narrow strip along the lateral border of the scapula, just under infraspinatus. It inserts on the lowest facet of the greater tubercle and laterally rotates. Don't mix it up with teres major: the long head of triceps passes between them. Teres minor runs behind the humerus to the greater tubercle, while teres major runs to the front of the humerus. The axillary nerve supplies teres minor and deltoid."
      },
      {
        title: "Subscapularis: the hidden one",
        structures: ["subscapularis"],
        context: ["scapula", "humerus", "serratus anterior"],
        text: "Rotate the model to look at the front of the scapula. Subscapularis lines the costal surface, sandwiched against serratus anterior. It is the only cuff muscle on the lesser tubercle, and it is the largest and strongest of the four. It is the cuff's medial rotator. Test it with the lift-off or belly-press test."
      },
      {
        title: "The cuff as a unit",
        structures: ["supraspinatus", "infraspinatus", "teres minor", "subscapularis"],
        context: ["scapula", "humerus"],
        text: "The four tendons blend with the joint capsule and wrap it on all sides except underneath. That bare inferior capsule is why most dislocations go anteroinferiorly. On the greater tubercle the order from top to bottom is S-I-T; S(ubscapularis) goes to the lesser tubercle. As the deltoid lifts the arm, the cuff pulls the head into the glenoid. When the cuff fails, the deltoid's pull makes the humeral head ride upward."
      }
    ],
    takeaways: [
      "SITS: supraspinatus, infraspinatus and teres minor go to the greater tubercle (top to bottom); subscapularis goes to the lesser tubercle.",
      "Supraspinatus starts abduction and is the tendon most often torn (painful arc, empty-can test).",
      "Infraspinatus and teres minor rotate laterally; subscapularis rotates medially.",
      "The inferior capsule has no cuff over it, so anteroinferior dislocation is the most common."
    ]
  },
  {
    id: "shoulder-movers",
    title: "Deltoid & the big shoulder movers",
    emoji: "🏋️",
    category: "Upper limb",
    level: 1,
    minutes: 4,
    systems: ["muscular", "skeletal"],
    intro: "The cuff keeps the humeral head centred, but these big muscles generate the force that moves the arm. Learn them by where they insert on the humerus and you can predict their actions.",
    steps: [
      {
        title: "Deltoid: three muscles in one",
        structures: ["deltoid"],
        context: ["clavicle", "scapula", "humerus"],
        text: "The deltoid has the same U-shaped origin as trapezius's insertion: lateral clavicle, acromion and spine of the scapula. Its clavicular (anterior) part flexes and medially rotates the arm. The acromial (middle) part is multipennate and abducts from about 15° to 90°. The spinal (posterior) part extends and laterally rotates. All three meet on the deltoid tuberosity halfway down the humerus."
      },
      {
        title: "Deltoid & the axillary nerve",
        structures: ["acromial part of deltoid"],
        context: ["humerus", "teres minor", "clavicular part of deltoid", "spinal part of deltoid"],
        text: "The axillary nerve wraps around the surgical neck of the humerus deep to the deltoid. A surgical-neck fracture or an anterior dislocation can stretch it. The result is a flattened shoulder contour, weak abduction past the first few degrees, and numbness over the 'regimental badge' patch of lateral arm skin."
      },
      {
        title: "Pectoralis major",
        structures: ["pectoralis major"],
        context: ["clavicle", "humerus", "body of sternum", "manubrium"],
        text: "The model separates it into clavicular, sternocostal and abdominal parts. All parts adduct and medially rotate the arm. The clavicular head also flexes the arm, and the sternocostal head extends it from a flexed position (pulling down from overhead). Its tendon twists on the way in, so the lowest fibres insert highest on the lateral lip of the intertubercular groove. Its lower border forms the anterior axillary fold."
      },
      {
        title: "Pectoralis minor & subclavius",
        structures: ["pectoralis minor", "subclavius"],
        context: ["clavicle", "scapula", "third rib", "fourth rib", "fifth rib", "first rib"],
        text: "Pectoralis minor runs from ribs 3–5 to the coracoid process. It is the landmark that divides the axillary artery into its three parts (above, behind and below it), and it pulls the scapula forward and down. Subclavius lies under the clavicle. In a clavicle fracture it acts as a cushion over the subclavian vessels."
      },
      {
        title: "Latissimus dorsi",
        structures: ["latissimus dorsi"],
        context: ["humerus", "scapula", "hip bone"],
        text: "The broadest muscle of the back arises from the thoracolumbar fascia, the lower thoracic spines, the iliac crest and the lowest ribs. It spirals around teres major to the floor of the intertubercular groove. It extends, adducts and medially rotates: the climbing, rowing and crutch-walking muscle. Its nerve, the thoracodorsal nerve, makes it a favourite pedicled flap for breast reconstruction."
      },
      {
        title: "Teres major",
        structures: ["teres major"],
        context: ["scapula", "humerus", "latissimus dorsi"],
        text: "Teres major runs from the inferior angle of the scapula to the medial lip of the intertubercular groove. Think of it as 'lat's little helper': it has the same actions and wraps together with latissimus to form the posterior axillary fold. Its lower border is where the axillary artery becomes the brachial artery."
      },
      {
        title: "The intertubercular groove",
        structures: ["pectoralis major", "latissimus dorsi", "teres major"],
        context: ["humerus", "long head of biceps brachii"],
        text: "Remember 'the lady between two majors': pectoralis major on the lateral lip, latissimus dorsi (the lady) on the floor, teres major on the medial lip. The tendon of the long head of biceps runs in the groove itself. All three are adductors and medial rotators, so medial rotation is much stronger than lateral rotation."
      }
    ],
    takeaways: [
      "Deltoid: anterior part flexes, middle abducts (15–90°), posterior extends. Axillary nerve at the surgical neck.",
      "Intertubercular groove: pec major (lateral lip), lat dorsi (floor), teres major (medial lip).",
      "Pec minor divides the axillary artery into 3 parts; the lower border of teres major marks the start of the brachial artery.",
      "Anterior axillary fold = pec major; posterior axillary fold = lat dorsi + teres major."
    ]
  },
  {
    id: "scapular-stabilisers",
    title: "Scapular stabilisers",
    emoji: "🦋",
    category: "Upper limb",
    level: 2,
    minutes: 5,
    systems: ["muscular", "skeletal"],
    intro: "The arm can only move as well as the scapula it hangs from. These muscles anchor and steer the scapula. When their nerves fail you get a winged scapula or a drooping shoulder, both of which show up in exams.",
    steps: [
      {
        title: "Trapezius: descending part",
        structures: ["descending part of trapezius"],
        context: ["occipital bone", "clavicle", "scapula"],
        text: "The upper fibres run from the occiput and nuchal ligament to the lateral clavicle. They elevate the scapula (shrugging) and rotate it upward. The spinal accessory nerve (CN XI) crosses the posterior triangle superficially to reach the muscle, so a lymph-node biopsy there can cut it. The result is a drooping shoulder, a weak shrug and difficulty lifting the arm above the horizontal."
      },
      {
        title: "Trapezius: transverse & ascending parts",
        structures: ["transverse part of trapezius", "ascending part of trapezius"],
        context: ["scapula", "descending part of trapezius"],
        text: "The middle fibres run horizontally to the acromion and spine of the scapula and retract it. The lower fibres rise from the lower thoracic spines to the root of the spine and depress it. Upper and lower fibres pulling on opposite ends of the spine form a force couple that rotates the glenoid upward."
      },
      {
        title: "Levator scapulae",
        structures: ["levator scapulae"],
        context: ["scapula", "atlas", "axis", "cervical vertebra"],
        text: "It runs from the transverse processes of C1–C4 down to the superior angle of the scapula. It elevates the scapula and rotates it downward, and it bends the neck to the same side. Tension at its scapular attachment causes the familiar 'knot' in a stiff neck."
      },
      {
        title: "Rhomboids",
        structures: ["rhomboid minor", "rhomboid major"],
        context: ["scapula", "seventh cervical vertebra", "first thoracic vertebra", "second thoracic vertebra", "fifth thoracic vertebra"],
        text: "Rhomboid minor (C7–T1) and rhomboid major (T2–T5) run obliquely down to the medial border of the scapula. They lie deep to trapezius. They retract the scapula and rotate it downward, and they hold it against the chest wall. The dorsal scapular nerve supplies them and levator scapulae."
      },
      {
        title: "Serratus anterior",
        structures: ["serratus anterior"],
        context: ["scapula", "first rib", "second rib", "third rib", "fourth rib", "fifth rib", "sixth rib", "seventh rib", "eighth rib"],
        text: "Its saw-tooth digitations arise from the upper 8–9 ribs, wrap around the chest wall and insert along the anterior surface of the medial border. It protracts the scapula (the 'boxer's muscle'). Its strong lower fibres pull the inferior angle forward to rotate the glenoid up for overhead reach. The long thoracic nerve runs on its outer surface in the mid-axillary line. Injury in axillary surgery or a chest drain gives a winged scapula when the patient pushes against a wall."
      },
      {
        title: "Upward vs downward rotators",
        structures: ["trapezius", "serratus anterior", "levator scapulae", "rhomboid"],
        context: ["scapula", "clavicle", "humerus"],
        text: "Upward rotation (needed for any arm movement above 90°) comes from the upper and lower trapezius plus serratus anterior. Downward rotation comes from levator scapulae, the rhomboids and pectoralis minor. During abduction the glenohumeral joint and the scapula move at about 2:1, so roughly 60° of the full 180° comes from the scapula."
      }
    ],
    takeaways: [
      "Long thoracic nerve → serratus anterior → medial winging; CN XI → trapezius → drooping shoulder and weak shrug.",
      "Upward rotators: upper and lower trapezius + serratus anterior. Downward rotators: levator scapulae, rhomboids, pec minor.",
      "Rhomboids and levator scapulae share the dorsal scapular nerve.",
      "Scapulohumeral rhythm is about 2:1 (glenohumeral : scapulothoracic)."
    ]
  },
  {
    id: "arm-muscles",
    title: "Arm: flexors vs extensors",
    emoji: "💪",
    category: "Upper limb",
    level: 1,
    minutes: 4,
    systems: ["muscular", "skeletal"],
    intro: "The arm has two neat compartments. The front one (biceps, brachialis, coracobrachialis) is all musculocutaneous nerve; the back one (triceps) is all radial nerve. Learn the layers and the nerve relationships come for free.",
    steps: [
      {
        title: "Biceps brachii: two heads",
        structures: ["biceps brachii"],
        context: ["humerus", "scapula", "radius"],
        text: "The short head comes from the coracoid. The long head comes from the supraglenoid tubercle, runs inside the joint capsule and leaves through the intertubercular groove. Both heads insert on the radial tuberosity and, through the bicipital aponeurosis, into the forearm fascia. With the elbow flexed, biceps is the most powerful supinator, which is the movement of driving in a screw. A ruptured long-head tendon produces the 'Popeye' bulge."
      },
      {
        title: "Deep anterior layer: brachialis & coracobrachialis",
        structures: ["brachialis"],
        context: ["humerus", "biceps brachii", "scapula"],
        text: "This highlight catches both brachialis and coracobrachialis because they share the word. Brachialis lies deep to biceps on the distal humerus and inserts on the ulnar tuberosity. It is the pure elbow flexor and works in any forearm position: the 'workhorse'. Coracobrachialis runs from the coracoid to the medial midshaft and helps flex and adduct the arm. The musculocutaneous nerve pierces it, which makes it a useful landmark."
      },
      {
        title: "Triceps: long head",
        structures: ["long head of triceps brachii"],
        context: ["scapula", "humerus", "teres major", "teres minor"],
        text: "Only the long head crosses the shoulder: it starts at the infraglenoid tubercle and helps extend and adduct the arm. It runs vertically between teres minor and teres major, and in doing so divides the region into the quadrangular space (axillary nerve) and the triangular space."
      },
      {
        title: "Triceps: lateral & medial heads (+ anconeus)",
        structures: ["lateral head of triceps brachii", "medial head of triceps brachii", "anconeus"],
        context: ["humerus", "ulna"],
        text: "The lateral head arises above the radial groove and the medial head below it; the medial head lies deeper. The radial nerve and the profunda brachii artery spiral in the groove between them. A midshaft fracture causes wrist drop, but elbow extension usually survives because the nerve branches to triceps leave higher up. Anconeus is a small helper that extends the elbow and steadies it."
      },
      {
        title: "Both compartments together",
        structures: ["biceps brachii", "brachialis", "triceps brachii"],
        context: ["humerus", "radius", "ulna"],
        text: "Front: three flexors (BBC: biceps, brachialis, coracobrachialis) supplied by the musculocutaneous nerve (C5–C6). Back: triceps supplied by the radial nerve (C6–C8). The biceps reflex tests C5–C6 and the triceps reflex tests C7."
      }
    ],
    takeaways: [
      "Anterior arm = BBC = musculocutaneous; posterior arm = triceps = radial.",
      "Brachialis = pure elbow flexor; biceps = flexor + strongest supinator (elbow flexed).",
      "The long head of triceps separates the quadrangular and triangular spaces.",
      "Midshaft humerus fracture → radial nerve in the spiral groove → wrist drop; triceps is usually spared."
    ]
  },
  {
    id: "forearm-flexors",
    title: "Forearm flexors: three layers",
    emoji: "✋",
    category: "Upper limb",
    level: 2,
    minutes: 6,
    systems: ["muscular", "skeletal", "connective"],
    intro: "Eight anterior forearm muscles fall neatly into a superficial layer (4), an intermediate layer (1) and a deep layer (3). Nearly all are median nerve. The ulnar exceptions explain the claw hand.",
    steps: [
      {
        title: "Superficial four: the hand trick",
        structures: ["pronator teres", "flexor carpi radialis", "palmaris longus", "flexor carpi ulnaris"],
        context: ["humerus", "radius"],
        text: "All four start from the common flexor origin on the medial epicondyle. Put the heel of your opposite hand on your medial epicondyle and spread your fingers down the forearm. Thumb = pronator teres, index = flexor carpi radialis, middle = palmaris longus, ring = flexor carpi ulnaris. Overuse of this origin is medial epicondylitis, or golfer's elbow."
      },
      {
        title: "Pronator teres",
        structures: ["pronator teres"],
        context: ["humerus", "radius", "brachioradialis"],
        text: "It has a humeral head and an ulnar head, and the median nerve runs between them. Compression here (pronator syndrome) mimics carpal tunnel syndrome but also numbs the palm. It inserts at the most lateral point of the radius's curve, which gives it good leverage for pronation. It forms the medial border of the cubital fossa; brachioradialis forms the lateral border."
      },
      {
        title: "Flexor carpi radialis & palmaris longus",
        structures: ["flexor carpi radialis", "palmaris longus"],
        context: ["radius", "flexor retinaculum of wrist", "scaphoid", "trapezium"],
        text: "At the wrist the FCR tendon is your guide: the radial pulse is just lateral to it. Palmaris longus is missing in about 14% of people (check with thumb-to-little-finger opposition and wrist flexion). It runs superficial to the flexor retinaculum, and the median nerve lies just deep to it. It is the go-to donor tendon for grafts."
      },
      {
        title: "Flexor carpi ulnaris",
        structures: ["flexor carpi ulnaris"],
        context: ["humerus", "pisiform", "hamate"],
        text: "It is the only superficial flexor supplied by the ulnar nerve. The nerve enters the forearm between its two heads in the cubital tunnel, a common entrapment site. Its tendon contains the pisiform, a sesamoid bone, and continues to the hook of the hamate and the 5th metacarpal. Together with ECU it deviates the wrist toward the ulna."
      },
      {
        title: "Intermediate: flexor digitorum superficialis",
        structures: ["flexor digitorum superficialis"],
        context: ["radius", "humerus", "flexor digitorum profundus"],
        text: "Its two heads (humeroulnar and radial) form a fibrous arch that the median nerve and ulnar artery pass under. Each tendon splits to let the FDP tendon through and inserts on a middle phalanx, so it flexes the PIP joints. To test FDS on its own, hold the other fingers straight and ask the patient to bend one finger at the PIP joint."
      },
      {
        title: "Deep layer: FDP, FPL, pronator quadratus",
        structures: ["flexor digitorum profundus", "flexor pollicis longus", "pronator quadratus"],
        context: ["radius", "interosseous membrane of forearm"],
        text: "FDP reaches the distal phalanges (DIP flexion) and has a split nerve supply: the median nerve (anterior interosseous) to the index and middle fingers, and the ulnar nerve to the ring and little fingers. FPL bends the thumb tip. Pronator quadratus is the main pronator. An anterior interosseous nerve lesion knocks out FPL, lateral FDP and PQ, so the patient can't make an 'OK' sign and makes a 'pinch' instead."
      },
      {
        title: "Carpal tunnel",
        structures: ["flexor digitorum superficialis", "flexor digitorum profundus", "flexor pollicis longus", "flexor retinaculum of wrist"],
        context: ["scaphoid", "trapezium", "hamate", "pisiform", "capitate", "lunate", "triquetral", "trapezoid"],
        text: "The flexor retinaculum spans the carpal arch, from the scaphoid and trapezium to the pisiform and hook of hamate. Nine tendons run under it (4 FDS, 4 FDP and FPL) together with the median nerve. FCR runs in its own split in the retinaculum. Compression gives thenar weakness and tingling in the lateral 3½ fingers, but palm sensation is spared because the palmar cutaneous branch passes over the tunnel."
      }
    ],
    takeaways: [
      "Superficial (lateral to medial): PT, FCR, PL, FCU. Intermediate: FDS. Deep: FDP, FPL, PQ.",
      "All median except FCU and the medial half of FDP (ulnar).",
      "FDS bends the PIP joint; FDP bends the DIP joint.",
      "Carpal tunnel: 9 tendons + median nerve; palm sensation is spared."
    ]
  },
  {
    id: "forearm-extensors",
    title: "Forearm extensors & supinator",
    emoji: "🤚",
    category: "Upper limb",
    level: 2,
    minutes: 5,
    systems: ["muscular", "skeletal"],
    intro: "Every posterior forearm muscle is supplied by the radial nerve or its deep branch. Grouping them as the mobile wad, the superficial layer and the deep 'outcropping' thumb muscles makes tennis elbow, the snuffbox and posterior interosseous nerve palsy easy to understand.",
    steps: [
      {
        title: "Mobile wad: brachioradialis, ECRL, ECRB",
        structures: ["brachioradialis", "extensor carpi radialis longus", "extensor carpi radialis brevis"],
        context: ["humerus", "radius"],
        text: "These three sit along the lateral forearm, and you can grab them as a single mass. Brachioradialis is an odd one out: it lies in the extensor compartment and is supplied by the radial nerve, yet it flexes the elbow, most strongly with the forearm midway between pronation and supination (the beer-mug position). ECRL and ECRB extend the wrist and deviate it toward the radius. ECRB is the tendon usually involved in tennis elbow."
      },
      {
        title: "Superficial layer from the lateral epicondyle",
        structures: ["extensor digitorum", "extensor digiti minimi", "extensor carpi ulnaris"],
        context: ["humerus", "radius", "extensor carpi radialis brevis"],
        text: "These come from the common extensor origin with ECRB. Note that 'extensor digitorum' also lights up the leg and foot muscles of the same name. Extensor digitorum ends in extensor hoods, and juncturae tendinum link its tendons, which is why your ring finger can't lift fully on its own. ECU works with FCU to deviate the wrist toward the ulna."
      },
      {
        title: "Supinator & the posterior interosseous nerve",
        structures: ["supinator"],
        context: ["radius", "humerus", "biceps brachii"],
        text: "Supinator wraps around the upper radius. The deep branch of the radial nerve passes through it (under the arcade of Frohse) and becomes the posterior interosseous nerve. When it is trapped there the patient gets finger drop without wrist drop: ECRL is supplied higher up, so the wrist still extends but deviates toward the radius. Supinator supinates slowly with the elbow straight; biceps takes over for power."
      },
      {
        title: "Outcropping muscles & the anatomical snuffbox",
        structures: ["abductor pollicis longus", "extensor pollicis brevis", "extensor pollicis longus"],
        context: ["radius", "scaphoid", "trapezium", "first metacarpal bone"],
        text: "APL and EPB emerge between the extensors and curve over the radius to form the lateral border of the snuffbox. EPL hooks around Lister's tubercle to form the medial border. In the floor lie the scaphoid and trapezium, with the radial artery crossing them. Inflammation of the APL and EPB sheath is De Quervain's tenosynovitis (Finkelstein test). EPL can rupture weeks after a distal radius fracture."
      },
      {
        title: "Extensor indicis",
        structures: ["extensor indicis"],
        context: ["radius", "extensor digitorum", "second metacarpal bone"],
        text: "Extensor indicis is a deep muscle whose tendon joins the ED tendon to the index finger on its ulnar side. It lets you point independently. Along with extensor digiti minimi, it is a spare tendon often used for tendon transfers."
      },
      {
        title: "The whole posterior compartment",
        structures: ["brachioradialis", "extensor carpi", "extensor digitorum", "extensor digiti minimi", "supinator", "abductor pollicis longus", "extensor pollicis", "extensor indicis"],
        context: ["humerus", "radius"],
        text: "Superficial (7): BR, ECRL, ECRB, ED, EDM, ECU and the small anconeus. Deep (5): supinator, APL, EPB, EPL, EI. Every one is supplied by the radial nerve or its PIN branch. The wrist extensors are what make a strong grip possible: a fist with the wrist flexed is weak."
      }
    ],
    takeaways: [
      "Lateral epicondyle = common extensor origin → tennis elbow (ECRB).",
      "Snuffbox: APL + EPB laterally, EPL medially; scaphoid in the floor (and the radial artery).",
      "PIN palsy (through supinator): finger drop without wrist drop.",
      "Brachioradialis: radial-nerve muscle that flexes the elbow."
    ]
  },
  {
    id: "hand-intrinsics",
    title: "Intrinsic muscles of the hand",
    emoji: "🖐️",
    category: "Upper limb",
    level: 2,
    minutes: 5,
    systems: ["muscular", "skeletal", "connective"],
    intro: "Intrinsic hand muscles do precision work. Learn the four groups and one nerve rule, LOAF for the median nerve and the ulnar nerve for everything else, and you can explain the ape hand, the claw hand and Froment's sign.",
    steps: [
      {
        title: "Thenar eminence",
        structures: ["abductor pollicis brevis", "flexor pollicis brevis", "opponens pollicis"],
        context: ["first metacarpal bone", "trapezium", "scaphoid", "flexor retinaculum of wrist"],
        text: "These three short muscles arise from the flexor retinaculum and the trapezium and scaphoid tubercles. Abductor pollicis brevis is superficial and lateral, flexor pollicis brevis is medial, and opponens pollicis lies deep, inserting along the whole 1st metacarpal. The recurrent branch of the median nerve (the 'million-dollar nerve') supplies them. Chronic carpal tunnel syndrome wastes the thenar eminence and leads to an 'ape hand'."
      },
      {
        title: "Adductor pollicis",
        structures: ["adductor pollicis"],
        context: ["first metacarpal bone", "third metacarpal bone", "capitate", "proximal phalanx of thumb"],
        text: "Its oblique and transverse heads fan out from the capitate and the 3rd metacarpal into the first web space. It is a thumb muscle supplied by the deep branch of the ulnar nerve. Froment's sign: a patient with ulnar palsy who grips paper between thumb and index flexes the thumb tip with FPL (median) to make up for a weak adductor."
      },
      {
        title: "Hypothenar eminence",
        structures: ["digiti minimi of hand", "flexor digiti minimi brevis of hand"],
        context: ["pisiform", "hamate", "fifth metacarpal bone"],
        text: "Abductor digiti minimi (from the pisiform), flexor digiti minimi brevis and opponens digiti minimi (from the hook of hamate) mirror the thenar group. The ulnar nerve supplies all three. The ulnar nerve and artery pass between the pisiform and the hook of hamate in Guyon's canal, where cyclists and hammer users compress them."
      },
      {
        title: "Lumbricals",
        structures: ["lumbricals of hand"],
        context: ["flexor digitorum profundus", "metacarpal"],
        text: "These four slender muscles are unusual in arising from tendons, the FDP tendons. They pass on the radial side of each MCP joint into the extensor hoods. They flex the MCP joints and extend the IP joints, the 'tabletop' position. The 1st and 2nd are supplied by the median nerve, the 3rd and 4th by the ulnar nerve, which is why an ulnar claw affects mainly the ring and little fingers."
      },
      {
        title: "Interossei: PAD & DAB",
        structures: ["palmar interossei of hand", "dorsal interossei of hand"],
        context: ["metacarpal"],
        text: "They fill the gaps between the metacarpals and use the middle finger as their reference axis. Palmar interossei ADduct (PAD) and dorsal interossei ABduct (DAB). Both also help the lumbricals flex the MCP joints and extend the IP joints. The deep branch of the ulnar nerve supplies them all. A weak grip on a card held between the fingers, and guttering between the metacarpals on the back of the hand, suggest ulnar palsy."
      },
      {
        title: "Whole hand: the nerve map",
        structures: ["abductor pollicis brevis", "flexor pollicis brevis", "opponens pollicis", "adductor pollicis", "digiti minimi of hand", "flexor digiti minimi brevis of hand", "lumbricals of hand", "interossei of hand"],
        context: ["metacarpal", "finger", "thumb", "flexor retinaculum of wrist"],
        text: "The median nerve supplies LOAF: Lumbricals 1–2, Opponens pollicis, Abductor pollicis brevis, Flexor pollicis brevis (superficial head). The ulnar nerve supplies everything else. That is why an ulnar lesion weakens fine finger movements far more than a median lesion does."
      }
    ],
    takeaways: [
      "Median nerve in the hand = LOAF; the ulnar nerve supplies the rest.",
      "Lumbricals arise from FDP tendons: they flex the MCP joints and extend the IP joints.",
      "PAD/DAB about the axis of the middle finger.",
      "Froment's sign = weak adductor pollicis (ulnar) compensated by FPL (median)."
    ]
  },
  {
    id: "upper-limb-bones",
    title: "Bones of the upper limb",
    emoji: "🦴",
    category: "Skeleton",
    level: 1,
    minutes: 5,
    systems: ["skeletal"],
    intro: "From clavicle to fingertips: know the fracture hot spots and the nerve that lies on each one, and carpal-bone questions become free marks.",
    steps: [
      {
        title: "Clavicle",
        structures: ["clavicle"],
        context: ["manubrium", "scapula", "first rib"],
        text: "The clavicle is an S-shaped strut that holds the shoulder away from the trunk. It is the only bony link between the arm and the axial skeleton (through the sternoclavicular joint), and it is the first bone to start ossifying. It usually breaks at the junction of its middle and lateral thirds. SCM pulls the medial fragment up, and the weight of the arm pulls the lateral fragment down."
      },
      {
        title: "Scapula",
        structures: ["scapula"],
        context: ["clavicle", "humerus", "second rib", "seventh rib"],
        text: "Find the spine, the acromion, the coracoid (a 'crow's beak' pointing forward), the glenoid and the three angles. The scapula lies over ribs 2–7. Its inferior angle sits at about T7, which is useful for counting levels on a chest X-ray. Note: this highlight also catches levator scapulae and subscapularis, whose names contain 'scapula'."
      },
      {
        title: "Humerus: three nerves on one bone",
        structures: ["humerus"],
        context: ["scapula", "radius", "ulna"],
        text: "A surgical neck fracture endangers the axillary nerve. A midshaft fracture through the radial groove endangers the radial nerve. A supracondylar fracture (in children) endangers the median nerve and brachial artery. A medial epicondyle injury endangers the ulnar nerve (the 'funny bone'). The anatomical neck sits just below the head and rarely fractures."
      },
      {
        title: "Radius & ulna",
        structures: ["radius", "ulna"],
        context: ["humerus", "interosseous membrane of forearm", "scaphoid", "lunate"],
        text: "The ulna is the stable one: its olecranon and trochlear notch grip the humerus. The radius spins around it in pronation and supination, and its distal end forms most of the wrist joint. A Colles fracture (fall on an outstretched hand, distal fragment displaced dorsally, 'dinner-fork' deformity) is the commonest fracture in older adults. Note: 'ulna' also highlights the forearm muscles named '…ulnaris' and their ulnar heads."
      },
      {
        title: "Carpals: proximal row",
        structures: ["scaphoid", "lunate", "triquetral", "pisiform"],
        context: ["radius", "ulna", "trapezium", "trapezoid", "capitate", "hamate"],
        text: "Going lateral to medial, the order for both rows is 'Some Lovers Try Positions That They Can't Handle'. The proximal row is Scaphoid, Lunate, Triquetrum, Pisiform. The scaphoid is the most commonly fractured carpal (snuffbox tenderness). Blood enters it distally, so its proximal pole can undergo avascular necrosis. The lunate is the most commonly dislocated carpal; it moves anteriorly into the carpal tunnel."
      },
      {
        title: "Carpals: distal row",
        structures: ["trapezium", "trapezoid", "capitate", "hamate"],
        context: ["scaphoid", "lunate", "triquetral", "pisiform", "metacarpal"],
        text: "The distal row is Trapezium, Trapezoid, Capitate, Hamate. The trapezium sits under the thumb, and its saddle joint with the 1st metacarpal is a common site of osteoarthritis. The capitate is the largest carpal and the first to ossify. The hook of the hamate anchors the flexor retinaculum and borders Guyon's canal."
      },
      {
        title: "Metacarpals & phalanges",
        structures: ["metacarpal", "finger", "thumb"],
        context: ["trapezium", "trapezoid", "capitate", "hamate"],
        text: "Each hand has 5 metacarpals and 14 phalanges. The thumb has only two phalanges; each finger has three. A punch can fracture the neck of the 5th metacarpal (boxer's fracture). The thumb metacarpal sits at about 90° to the others, which is what makes opposition possible."
      }
    ],
    takeaways: [
      "Nerve at risk: surgical neck → axillary; midshaft → radial; supracondylar → median; medial epicondyle → ulnar.",
      "Some Lovers Try Positions That They Can't Handle (scaphoid → hamate, lateral to medial).",
      "Scaphoid: most fractured carpal, risk of proximal-pole avascular necrosis. Lunate: most dislocated.",
      "Clavicle fracture at the middle/lateral third junction: medial fragment up, lateral fragment down."
    ]
  },

  // ───────────────────────────── LOWER LIMB ─────────────────────────────
  {
    id: "gluteal-region",
    title: "Gluteal region",
    emoji: "🍑",
    category: "Lower limb",
    level: 2,
    minutes: 5,
    systems: ["muscular", "skeletal", "connective"],
    intro: "The gluteal region holds the body's most powerful hip extensor, the key stabilisers for walking and a row of deep rotators. Piriformis is the landmark that organises everything that passes through the region.",
    steps: [
      {
        title: "Gluteus maximus",
        structures: ["gluteus maximus"],
        context: ["hip bone", "sacrum", "femur", "iliotibial tract"],
        text: "It arises behind the posterior gluteal line, from the sacrum, coccyx and sacrotuberous ligament. Most of it inserts into the iliotibial tract, the rest into the gluteal tuberosity. It is the power extensor for rising from a chair, climbing stairs and running, and does little in level walking. The inferior gluteal nerve supplies it. Give intramuscular injections in the upper outer quadrant to stay clear of the sciatic nerve."
      },
      {
        title: "Gluteus medius",
        structures: ["gluteus medius"],
        context: ["hip bone", "femur", "gluteus maximus"],
        text: "It runs from the outer ilium to the lateral greater trochanter and abducts the hip; its anterior fibres also rotate it medially. Its real job is in single-leg stance: it stops the pelvis from dropping toward the swinging leg. If the superior gluteal nerve is injured, the pelvis drops on the unsupported side when the patient stands on the affected leg. This is a positive Trendelenburg sign."
      },
      {
        title: "Gluteus minimus",
        structures: ["gluteus minimus"],
        context: ["hip bone", "femur", "gluteus medius"],
        text: "It lies deep to medius on the anterior greater trochanter and works with medius: abducting the hip, rotating it medially and stabilising the pelvis. Like medius and TFL, it is supplied by the superior gluteal nerve. Gluteal tendinopathy of medius and minimus is the commonest cause of 'trochanteric bursitis' pain on the outer hip."
      },
      {
        title: "Tensor fasciae latae & IT tract",
        structures: ["tensor fasciae latae", "iliotibial tract"],
        context: ["hip bone", "femur", "tibia", "gluteus maximus"],
        text: "TFL arises near the ASIS and, together with gluteus maximus, tightens the iliotibial tract. The tract runs down to Gerdy's tubercle on the lateral tibia and braces the extended knee. Friction of the tract over the lateral femoral condyle is iliotibial band syndrome, a common runner's injury."
      },
      {
        title: "Piriformis: the landmark",
        structures: ["piriformis"],
        context: ["sacrum", "hip bone", "femur", "gluteus medius"],
        text: "Piriformis runs from the anterior sacrum through the greater sciatic foramen to the top of the greater trochanter. Above it pass the superior gluteal nerve and vessels. Below it pass the inferior gluteal nerve and vessels, the sciatic nerve, the pudendal nerve and the internal pudendal vessels. Some sciatic nerves pass through piriformis, and spasm can then cause 'piriformis syndrome' that mimics sciatica."
      },
      {
        title: "Deep lateral rotators",
        structures: ["gemellus", "obturator internus", "quadratus femoris", "obturator externus"],
        context: ["hip bone", "femur", "sacrum", "piriformis"],
        text: "From top to bottom: piriformis, gemellus superior, obturator internus, gemellus inferior, quadratus femoris. Obturator internus starts inside the pelvis and turns 90° around the lesser sciatic notch, and the two gemelli join its tendon. Obturator externus winds under the femoral neck and is supplied by the obturator nerve. Together these muscles hold the femoral head in its socket, like a rotator cuff for the hip."
      },
      {
        title: "The whole region",
        structures: ["gluteus", "tensor fasciae latae", "piriformis", "gemellus", "obturator internus", "quadratus femoris"],
        context: ["hip bone", "sacrum", "femur", "iliotibial tract"],
        text: "Superficial: gluteus maximus (extension, lateral rotation; inferior gluteal nerve). Middle: gluteus medius, gluteus minimus and TFL (abduction, medial rotation, pelvic stability; superior gluteal nerve). Deep: small lateral rotators, each with its own small nerve from the sacral plexus. A posterior hip dislocation can stretch the sciatic nerve as it passes over these rotators."
      }
    ],
    takeaways: [
      "Superior gluteal nerve → gluteus medius, gluteus minimus, TFL → Trendelenburg sign when injured.",
      "Inferior gluteal nerve → gluteus maximus (stairs, rising from a chair).",
      "Piriformis organises the region: superior gluteal neurovascular bundle above it, everything else below.",
      "Inject in the upper outer quadrant to avoid the sciatic nerve."
    ]
  },
  {
    id: "anterior-thigh",
    title: "Quadriceps & anterior thigh",
    emoji: "🦵",
    category: "Lower limb",
    level: 1,
    minutes: 4,
    systems: ["muscular", "skeletal", "connective"],
    intro: "The anterior thigh holds the hip flexors and the knee extensors. Quadriceps is what lets you stand up, and its patellar reflex is one of the first things you will test.",
    steps: [
      {
        title: "Iliopsoas",
        structures: ["psoas major", "iliacus"],
        context: ["lumbar vertebra", "hip bone", "femur", "twelfth thoracic vertebra"],
        text: "Psoas major arises from the T12–L5 vertebral bodies and transverse processes, and iliacus from the iliac fossa. They share a tendon to the lesser trochanter and form the strongest hip flexor. Psoas lies in the posterior abdominal wall. That is why an inflamed retrocaecal appendix makes hip extension painful (psoas sign) and why a spinal abscess can track down its sheath into the groin."
      },
      {
        title: "Sartorius",
        structures: ["sartorius"],
        context: ["hip bone", "femur", "tibia"],
        text: "Sartorius is the longest muscle in the body. It crosses obliquely from the ASIS to the medial upper tibia (pes anserinus). It flexes, abducts and laterally rotates the hip and flexes the knee, which together give the cross-legged 'tailor's' position. It forms the lateral border of the femoral triangle and the roof of the adductor canal."
      },
      {
        title: "Rectus femoris",
        structures: ["rectus femoris"],
        context: ["hip bone", "femur", "patella"],
        text: "It is the only quadriceps head that crosses the hip, arising from the AIIS and the area above the acetabulum. It therefore flexes the hip as well as extending the knee, and it is strongest in kicking. Its origin can avulse in adolescent athletes."
      },
      {
        title: "The three vasti",
        structures: ["vastus lateralis", "vastus intermedius", "vastus medialis"],
        context: ["femur", "patella", "rectus femoris"],
        text: "Vastus lateralis is the largest and is a common injection site in infants. Vastus intermedius lies deep on the femoral shaft. The lowest, oblique fibres of vastus medialis (VMO) are the only quadriceps fibres that pull the patella medially, against the lateral pull set by the Q-angle. A weak VMO lets the patella track or dislocate laterally."
      },
      {
        title: "Patella & extensor mechanism",
        structures: ["patella"],
        context: ["rectus femoris", "vastus", "femur", "tibia"],
        text: "The patella is the largest sesamoid bone in the body and sits in the quadriceps tendon. It increases the extensor's lever arm, and the patellar ligament continues to the tibial tuberosity. Tapping the ligament gives the knee jerk, supplied by the femoral nerve through roots L3–L4."
      },
      {
        title: "Quadriceps together",
        structures: ["rectus femoris", "vastus"],
        context: ["femur", "patella", "hip bone", "sartorius"],
        text: "Four heads, one tendon, one nerve (femoral). The femoral nerve supplies the whole anterior compartment, including sartorius, and also supplies iliacus. Quadriceps weakness makes stairs and rising from a chair hard. Look for it after femoral nerve injury and as early wasting after knee surgery."
      }
    ],
    takeaways: [
      "Iliopsoas → lesser trochanter = strongest hip flexor (psoas sign).",
      "Rectus femoris is the only quadriceps head that crosses the hip.",
      "VMO resists lateral patellar tracking.",
      "Femoral nerve (L2–L4): quadriceps + sartorius; knee jerk L3–L4."
    ]
  },
  {
    id: "hamstrings",
    title: "Hamstrings",
    emoji: "🏃",
    category: "Lower limb",
    level: 1,
    minutes: 4,
    systems: ["muscular", "skeletal"],
    intro: "The hamstrings extend the hip and flex the knee, and sprinters strain them all the time. A 'true' hamstring meets three criteria, and spotting which muscles fail them is a favourite exam question.",
    steps: [
      {
        title: "Semitendinosus",
        structures: ["semitendinosus"],
        context: ["hip bone", "femur", "tibia"],
        text: "The 'half-tendon' muscle is fleshy above and then becomes a long, cord-like tendon that curves to the pes anserinus on the medial tibia. Lying superficial on the medial side, it is easy to feel. Its tendon is a common graft for ACL reconstruction."
      },
      {
        title: "Semimembranosus",
        structures: ["semimembranosus"],
        context: ["hip bone", "femur", "tibia", "semitendinosus"],
        text: "The 'half-membrane' muscle lies deep to semitendinosus. Its origin starts as a flat membrane, and it inserts on the back of the medial tibial condyle. It sends the oblique popliteal ligament across the back of the knee. A Baker's (popliteal) cyst usually forms from the bursa between semimembranosus and the medial head of gastrocnemius."
      },
      {
        title: "Biceps femoris: long & short heads",
        structures: ["biceps femoris"],
        context: ["hip bone", "femur", "fibula"],
        text: "The long head comes from the ischial tuberosity and the short head from the linea aspera. Both join to insert on the head of the fibula. Biceps femoris is the main lateral rotator of the flexed knee. The common fibular nerve runs along its medial edge before winding around the fibular neck. That is where a tight cast or a fracture can injure it and cause foot drop."
      },
      {
        title: "Who counts as a 'true' hamstring?",
        structures: ["semitendinosus", "semimembranosus", "long head of biceps femoris", "adductor magnus"],
        context: ["hip bone", "femur", "tibia", "fibula"],
        text: "The criteria: origin on the ischial tuberosity, crossing both hip and knee, and supply by the tibial division of the sciatic nerve. Semitendinosus, semimembranosus and the long head of biceps all qualify. The short head fails: it crosses only the knee and is supplied by the common fibular division. The vertical, hamstring part of adductor magnus (ischial origin, tibial nerve) is often counted as a fourth."
      },
      {
        title: "Popliteal fossa borders",
        structures: ["semitendinosus", "semimembranosus", "biceps femoris", "gastrocnemius", "plantaris"],
        context: ["femur", "tibia", "fibula"],
        text: "This diamond-shaped space has semimembranosus and semitendinosus on its upper medial side and biceps femoris on its upper lateral side. Below, it is bounded by the two heads of gastrocnemius, with plantaris on the lateral side. From superficial to deep it contains the tibial nerve, the popliteal vein and the popliteal artery. The artery lies deepest, on the femur, so a supracondylar fracture can tear it."
      }
    ],
    takeaways: [
      "True hamstring: ischial tuberosity origin, crosses hip and knee, tibial nerve.",
      "The short head of biceps femoris is not a true hamstring (common fibular nerve).",
      "Semi-T goes to the pes anserinus (ACL graft); semi-M lies deeper (Baker's cyst).",
      "Popliteal fossa from superficial to deep: tibial nerve, popliteal vein, popliteal artery."
    ]
  },
  {
    id: "adductors",
    title: "Medial thigh: adductors",
    emoji: "🦵",
    category: "Lower limb",
    level: 2,
    minutes: 5,
    systems: ["muscular", "skeletal", "connective"],
    intro: "The medial thigh is the obturator nerve's territory. The adductors are stacked in layers like pages in a book, and two of them form the walls of the femoral triangle.",
    steps: [
      {
        title: "Pectineus",
        structures: ["pectineus"],
        context: ["hip bone", "femur", "psoas major", "adductor longus"],
        text: "Pectineus runs from the pectineal line of the pubis to just below the lesser trochanter. It is the odd one out: it is usually supplied by the femoral nerve, sometimes with help from the obturator nerve. It forms part of the floor of the femoral triangle, between iliopsoas laterally and adductor longus medially."
      },
      {
        title: "Adductor longus",
        structures: ["adductor longus"],
        context: ["hip bone", "femur", "pectineus", "sartorius"],
        text: "Adductor longus is the most anterior adductor. Its tendon is the cord you can feel just below the pubic tubercle. Its medial border forms the medial border of the femoral triangle. It is the muscle injured in a typical 'groin strain'."
      },
      {
        title: "Adductor brevis",
        structures: ["adductor brevis"],
        context: ["hip bone", "femur", "adductor longus", "adductor magnus"],
        text: "It forms the middle layer, and the obturator nerve splits around it. The anterior division runs in front of brevis (on its surface) and the posterior division behind it. This makes brevis a good landmark when you dissect the obturator nerve."
      },
      {
        title: "Adductor magnus (& minimus)",
        structures: ["adductor magnus", "adductor minimus"],
        context: ["hip bone", "femur"],
        text: "This is the large posterior layer. The adductor part comes from the pubic ramus and is supplied by the obturator nerve. The hamstring part comes from the ischial tuberosity, runs to the adductor tubercle and is supplied by the tibial nerve. The model shows the upper fibres as a separate 'adductor minimus'. Between the two insertions is the adductor hiatus, where the femoral vessels pass into the popliteal fossa."
      },
      {
        title: "Gracilis & obturator externus",
        structures: ["gracilis", "obturator externus"],
        context: ["hip bone", "femur", "tibia"],
        text: "Gracilis is the slender, most superficial medial muscle and the only adductor that crosses the knee, inserting on the pes anserinus. It is easily spared, so it is used for muscle flaps. To remember the pes anserinus, 'Say Grace before Tea': sartorius, gracilis, semitendinosus. Obturator externus lies deep across the obturator membrane and acts mainly as a lateral rotator."
      },
      {
        title: "Femoral triangle",
        structures: ["inguinal ligament", "sartorius", "adductor longus"],
        context: ["iliacus", "psoas major", "pectineus", "hip bone", "femur", "external iliac artery", "external iliac vein"],
        text: "The roof (base) is the inguinal ligament, the lateral border is sartorius and the medial border is adductor longus. The floor is iliopsoas laterally and pectineus and adductor longus medially. From lateral to medial it holds NAVeL: femoral Nerve, Artery, Vein, (empty space), Lymphatics. The external iliac vessels shown here become the femoral vessels as they pass under the ligament. The femoral canal on the medial side is where femoral hernias appear."
      }
    ],
    takeaways: [
      "The obturator nerve supplies the medial compartment; exceptions are pectineus (femoral) and the hamstring part of adductor magnus (tibial).",
      "Layers: pectineus/adductor longus → adductor brevis → adductor magnus; gracilis is the most superficial.",
      "Femoral triangle: inguinal ligament, sartorius, adductor longus; contents NAVeL from lateral to medial.",
      "Adductor hiatus: femoral vessels become popliteal vessels."
    ]
  },
  {
    id: "leg-compartments",
    title: "Leg compartments",
    emoji: "🦶",
    category: "Lower limb",
    level: 2,
    minutes: 6,
    systems: ["muscular", "skeletal", "connective"],
    intro: "Fascia, the interosseous membrane and the tibia and fibula divide the leg into anterior, lateral and posterior (superficial and deep) compartments. Each compartment has one main nerve and one main job, so compartment syndrome and foot drop become easy to work out.",
    steps: [
      {
        title: "Anterior compartment: dorsiflexors",
        structures: ["tibialis anterior", "extensor hallucis longus", "extensor digitorum longus", "fibularis tertius"],
        context: ["tibia", "fibula", "interosseous membrane of leg"],
        text: "The deep fibular nerve and the anterior tibial artery supply this compartment. All four muscles dorsiflex the ankle. Tibialis anterior also inverts the foot, and fibularis tertius everts it. If the nerve is lost, the patient has foot drop and walks with a high-stepping gait. This tight compartment is the classic site of compartment syndrome after a tibial fracture."
      },
      {
        title: "Ankle tendons in front",
        structures: ["tibialis anterior", "extensor hallucis longus", "extensor digitorum longus"],
        context: ["tibia", "talus", "medial cuneiform bone", "first metatarsal bone"],
        text: "From medial to lateral at the ankle: 'Tom Has Very Nice Dogs, Pig'. That is Tibialis anterior, extensor Hallucis longus, anterior tibial Vessels, deep fibular Nerve, extensor Digitorum longus, Peroneus (fibularis) tertius. Tibialis anterior inserts on the medial cuneiform and the base of the 1st metatarsal."
      },
      {
        title: "Lateral compartment: evertors",
        structures: ["fibularis longus", "fibularis brevis"],
        context: ["fibula", "cuboid bone", "fifth metatarsal bone", "first metatarsal bone", "medial cuneiform bone"],
        text: "The superficial fibular nerve supplies this compartment. Both tendons pass behind the lateral malleolus. Brevis inserts on the tuberosity of the 5th metatarsal, which can be avulsed in an inversion sprain. Longus turns under the cuboid and crosses the sole to the same bones as tibialis anterior. Together the two form a 'stirrup' that supports the arches."
      },
      {
        title: "Superficial posterior: the calf",
        structures: ["gastrocnemius", "soleus", "plantaris", "calcaneal tendon"],
        context: ["femur", "tibia", "fibula", "calcaneus"],
        text: "Gastrocnemius crosses the knee as well as the ankle. Soleus does not, so test it with the knee bent. Soleus contains large venous sinuses and acts as the calf pump, which is why immobility leads to DVT in the soleal veins. All three share the calcaneal (Achilles) tendon. A rupture gives a positive Thompson test (squeezing the calf does not plantarflex the foot). The ankle jerk tests S1."
      },
      {
        title: "Popliteus: the key that unlocks the knee",
        structures: ["popliteus"],
        context: ["femur", "tibia", "fibula", "lateral head of gastrocnemius"],
        text: "Popliteus is a small triangle on the back of the upper tibia. Its tendon passes inside the knee capsule to the lateral femoral condyle. When you start to bend a fully straightened knee, it rotates the femur laterally on the planted tibia to 'unlock' the joint."
      },
      {
        title: "Deep posterior: Tom, Dick & Harry",
        structures: ["tibialis posterior", "flexor digitorum longus", "flexor hallucis longus"],
        context: ["tibia", "fibula", "calcaneus", "talus", "navicular bone of foot"],
        text: "Behind the medial malleolus, from front to back: Tom, Dick And Very Nervous Harry. That is Tibialis posterior, flexor Digitorum longus, posterior tibial Artery and Vein, tibial Nerve, flexor Hallucis longus. They all pass under the flexor retinaculum in the tarsal tunnel. Tibialis posterior is the main invertor and holds up the medial arch, and when it fails the result is acquired flatfoot in adults. FHL is the 'push-off' muscle for the big toe."
      },
      {
        title: "All four compartments",
        structures: ["tibialis", "extensor hallucis longus", "extensor digitorum longus", "fibularis", "gastrocnemius", "soleus", "plantaris", "popliteus", "flexor digitorum longus", "flexor hallucis longus"],
        context: ["tibia", "fibula", "interosseous membrane of leg", "calcaneal tendon"],
        text: "Anterior: deep fibular nerve; dorsiflexion and toe extension. Lateral: superficial fibular nerve; eversion. Posterior: tibial nerve; plantarflexion, toe flexion and inversion. If the common fibular nerve is injured at the fibular neck, both the anterior and lateral compartments fail, so the foot drops and turns inward."
      }
    ],
    takeaways: [
      "Anterior compartment = deep fibular nerve (foot drop); lateral = superficial fibular nerve (eversion); posterior = tibial nerve.",
      "Medial malleolus: Tom, Dick And Very Nervous Harry.",
      "Soleus = venous pump (DVT); test it with the knee flexed.",
      "Popliteus unlocks the extended knee."
    ]
  },
  {
    id: "foot",
    title: "The foot: bones & sole",
    emoji: "🦶",
    category: "Lower limb",
    level: 2,
    minutes: 5,
    systems: ["skeletal", "muscular", "connective"],
    intro: "The foot is a sprung arch built from 26 bones. Its sole muscles are arranged in four layers, a classic exam favourite that is much easier to see in 3D than on a flat diagram.",
    steps: [
      {
        title: "Tarsal bones",
        structures: ["talus", "calcaneus", "navicular bone of foot", "cuboid bone", "cuneiform"],
        context: ["tibia", "fibula", "metatarsal"],
        text: "To remember them: 'Tiger Cubs Need MILC'. That is Talus, Calcaneus, Navicular, the Medial, Intermediate and Lateral cuneiforms, and the Cuboid. The talus sits in the ankle mortise and has no muscle attachments; most of its surface is articular cartilage. The calcaneus is the heel and the largest tarsal, and its sustentaculum tali props up the talus. The tibialis posterior tendon attaches to the navicular tuberosity."
      },
      {
        title: "Metatarsals, phalanges & sesamoids",
        structures: ["metatarsal", "toe", "sesamoid bone of foot"],
        context: ["cuneiform", "cuboid bone"],
        text: "There are 5 metatarsals and 14 phalanges, with the big toe having just two. Two sesamoids sit in the flexor hallucis brevis tendons under the 1st metatarsal head and take weight at push-off. A fracture of the proximal 5th metatarsal diaphysis (a Jones fracture) heals poorly; an avulsion of the tuberosity heals well."
      },
      {
        title: "Dorsum: the only muscles on top",
        structures: ["extensor digitorum brevis", "extensor hallucis brevis"],
        context: ["calcaneus", "metatarsal", "toe"],
        text: "EDB and EHB come from the upper surface of the calcaneus and are supplied by the deep fibular nerve. EDB makes a small fleshy bump in front of the lateral malleolus, which can be mistaken for swelling."
      },
      {
        title: "Sole layer 1",
        structures: ["abductor hallucis", "flexor digitorum brevis", "abductor digiti minimi of foot"],
        context: ["calcaneus", "metatarsal", "toe"],
        text: "This superficial layer runs from the calcaneal tuberosity: abductor hallucis on the medial side, flexor digitorum brevis in the middle and abductor digiti minimi on the lateral side. The plantar aponeurosis lies directly over this layer. Inflammation of the aponeurosis at its heel attachment is plantar fasciitis."
      },
      {
        title: "Sole layer 2",
        structures: ["flexor accessorius", "lumbrical of foot"],
        context: ["calcaneus", "flexor digitorum longus", "flexor hallucis longus", "metatarsal"],
        text: "This layer contains the long flexor tendons (FDL and FHL) and the muscles attached to the FDL tendon. Quadratus plantae (flexor accessorius) pulls on the FDL tendon from the side to straighten its oblique line of pull. The four lumbricals arise from the FDL tendons, exactly as the hand's lumbricals arise from FDP."
      },
      {
        title: "Sole layer 3",
        structures: ["flexor hallucis brevis", "adductor hallucis", "flexor digiti minimi brevis of foot", "opponens digiti minimi of foot"],
        context: ["metatarsal", "toe", "cuboid bone"],
        text: "Layer 3 acts on the big and little toes. Flexor hallucis brevis has two heads, each containing a sesamoid. Adductor hallucis has oblique and transverse heads. Flexor digiti minimi brevis has a small slip that the model shows as 'opponens digiti minimi'."
      },
      {
        title: "Sole layer 4 & the long plantar ligament",
        structures: ["plantar interosseous", "dorsal interossei of foot", "long plantar ligament"],
        context: ["metatarsal", "calcaneus", "cuboid bone", "fibularis longus", "tibialis posterior"],
        text: "The interossei fill the spaces between the metatarsals. In the foot their reference axis is the 2nd toe, with the same PAD and DAB rule as the hand. The long plantar ligament and the fibularis longus and tibialis posterior tendons lie in this deepest plane and support the lateral and transverse arches. The medial plantar nerve supplies only four sole muscles (abductor hallucis, FDB, FHB and the 1st lumbrical), much like the median nerve in the hand; the lateral plantar nerve supplies all the rest."
      }
    ],
    takeaways: [
      "Tiger Cubs Need MILC: talus, calcaneus, navicular, cuneiforms (medial, intermediate, lateral), cuboid.",
      "Sole layers: 1 (ABH, FDB, ADM) → 2 (QP, lumbricals + long tendons) → 3 (FHB, ADH, FDMB) → 4 (interossei).",
      "Foot interossei use the 2nd toe as their axis.",
      "Only EDB and EHB lie on the dorsum (deep fibular nerve)."
    ]
  },
  {
    id: "lower-limb-bones",
    title: "Bones of the lower limb",
    emoji: "🦴",
    category: "Skeleton",
    level: 1,
    minutes: 4,
    systems: ["skeletal"],
    intro: "Lower-limb bones are built for weight bearing, so their fractures are about load, blood supply and the nerves that wrap around them.",
    steps: [
      {
        title: "Hip bone",
        structures: ["hip bone"],
        context: ["sacrum", "femur", "fifth lumbar vertebra"],
        text: "Three bones fuse to form the hip bone: the ilium, the ischium and the pubis. They meet at the acetabulum through a Y-shaped cartilage that ossifies in the teens. Find the ASIS, the iliac crest, the ischial tuberosity (what you sit on) and the pubic tubercle. A line between the highest points of the iliac crests crosses the L4 spinous process, the landmark for a lumbar puncture."
      },
      {
        title: "The bony pelvis",
        structures: ["hip bone", "sacrum"],
        side: "both",
        context: ["fifth lumbar vertebra", "femur"],
        text: "The two hip bones and the sacrum form a ring joined at the pubic symphysis and the sacroiliac joints. A ring tends to break in two places, so look for a second fracture. This is a male model: note the narrow subpubic angle (under 70°) and the heart-shaped pelvic inlet. A female pelvis has a wider angle and a rounder inlet."
      },
      {
        title: "Femur",
        structures: ["femur"],
        context: ["hip bone", "patella", "tibia"],
        text: "Its neck meets the shaft at about 125°. Its head gets much of its blood from the retinacular branches of the medial circumflex femoral artery, which run up the neck. An intracapsular (subcapital) neck fracture tears these branches, causing avascular necrosis, so it is often treated with a hip replacement. Clinically the leg looks shortened and rotated outward. The linea aspera on the back anchors the adductors and the vasti."
      },
      {
        title: "Patella",
        structures: ["patella"],
        context: ["femur", "tibia"],
        text: "The patella develops inside the quadriceps tendon. Its lateral facet is larger and fits against the higher lateral femoral condyle, which helps resist lateral dislocation. A direct blow can split it, and a bipartite patella seen on X-ray is a normal variant, not a fracture."
      },
      {
        title: "Tibia & fibula",
        structures: ["tibia", "fibula"],
        context: ["femur", "talus", "interosseous membrane of leg"],
        text: "The tibia carries the body's weight. Its anteromedial surface lies directly under the skin, so open fractures and poor healing are common. The fibula mainly provides muscle attachment and forms the lateral wall of the ankle mortise. The lateral malleolus reaches lower than the medial one. The common fibular nerve wraps around the fibular neck. Note: these words also highlight the 'tibialis' and 'fibularis' muscles and the iliotibial tract."
      },
      {
        title: "The ankle & foot skeleton",
        structures: ["talus", "calcaneus", "navicular bone of foot", "cuboid bone", "cuneiform", "metatarsal", "toe"],
        context: ["tibia", "fibula"],
        text: "The talus is wider in front, so the ankle is most stable in dorsiflexion and most often sprained in plantarflexion plus inversion. The weight of the body passes from the tibia to the talus, then backward to the calcaneus and forward along the medial (higher) and lateral (lower) longitudinal arches."
      }
    ],
    takeaways: [
      "Hip bone = ilium + ischium + pubis fused at the acetabulum; the iliac crests mark the L4 level.",
      "Femoral neck fracture → medial circumflex femoral artery → avascular necrosis; the leg is shortened and laterally rotated.",
      "The tibia bears weight and lies just under the skin; the fibular neck carries the common fibular nerve.",
      "The ankle is most stable in dorsiflexion (the talus is wider in front)."
    ]
  },

  // ───────────────────────────── TRUNK & BACK ─────────────────────────────
  {
    id: "abdominal-wall",
    title: "Abdominal wall",
    emoji: "🧱",
    category: "Trunk & back",
    level: 2,
    minutes: 5,
    systems: ["muscular", "skeletal", "connective"],
    intro: "The anterolateral wall has three flat muscle sheets with their fibres crossing like plywood, plus the vertical rectus muscles. Their aponeuroses form the rectus sheath, the linea alba and the inguinal canal, the anatomy behind most hernia questions.",
    steps: [
      {
        title: "Rectus abdominis & pyramidalis",
        structures: ["rectus abdominis", "pyramidalis"],
        side: "both",
        context: ["costal cartilage", "xiphoid process", "hip bone", "linea alba"],
        text: "Rectus abdominis runs from the pubic crest up to the xiphoid process and the 5th–7th costal cartilages. Three tendinous intersections fuse with the anterior rectus sheath, which produces the 'six-pack'. It flexes the trunk and raises intra-abdominal pressure. Pyramidalis is a small triangle that tightens the linea alba; about 20% of people don't have one."
      },
      {
        title: "External oblique",
        structures: ["external oblique"],
        side: "both",
        context: ["fifth rib", "twelfth rib", "hip bone", "inguinal ligament"],
        text: "This is the outermost sheet, and its fibres run down and forward like hands in your front pockets. Its aponeurosis forms the anterior rectus sheath and, where its lower free edge rolls under, the inguinal ligament from the ASIS to the pubic tubercle. The superficial inguinal ring is a split in this aponeurosis just above the pubic tubercle."
      },
      {
        title: "Internal oblique",
        structures: ["internal oblique"],
        side: "both",
        context: ["hip bone", "inguinal ligament", "tenth rib", "twelfth rib"],
        text: "It lies deep to the external oblique, and its fibres mostly run at right angles to it, up and toward the midline. Its lowest fibres arch over the spermatic cord to form the cremaster muscle (cremasteric reflex, L1–L2). They then join the transversus to form the conjoint tendon. Each internal oblique turns the trunk toward its own side, working with the opposite external oblique."
      },
      {
        title: "Transversus abdominis",
        structures: ["transversus abdominis"],
        side: "both",
        context: ["hip bone", "costal cartilage", "linea alba"],
        text: "This is the deepest sheet, with horizontal fibres that act like a built-in corset for core stability. The nerves of the wall (T7–L1) run in the plane between the internal oblique and the transversus, which is the target of the TAP block. Deep to transversus is the transversalis fascia, where the deep inguinal ring opens."
      },
      {
        title: "Linea alba & inguinal ligament",
        structures: ["linea alba", "inguinal ligament"],
        side: "both",
        context: ["rectus abdominis", "xiphoid process", "hip bone"],
        text: "The linea alba is the fused aponeuroses in the midline. It has few vessels, which makes it a quick surgical incision, and it can separate after pregnancy (diastasis recti). An indirect inguinal hernia leaves through the deep ring, lateral to the inferior epigastric vessels. A direct hernia bulges through Hesselbach's triangle, which lies medial to them. A femoral hernia appears below the inguinal ligament and lateral to the pubic tubercle."
      },
      {
        title: "Posterior abdominal wall",
        structures: ["psoas major", "quadratus lumborum", "iliacus", "diaphragm"],
        side: "both",
        context: ["lumbar vertebra", "twelfth rib", "hip bone"],
        text: "Behind the abdominal contents: psoas major beside the vertebral bodies, quadratus lumborum lateral to it, iliacus in the iliac fossa, and the diaphragm's crura above. The kidneys lie on psoas and quadratus lumborum, so pus or blood around them tracks along these muscles."
      },
      {
        title: "The whole anterolateral wall",
        structures: ["rectus abdominis", "external oblique", "internal oblique", "transversus abdominis", "linea alba", "inguinal ligament"],
        side: "both",
        context: ["hip bone", "costal cartilage", "xiphoid process"],
        text: "The three flat muscles cross at angles like plywood and wrap into the rectus sheath. Above the arcuate line (about one-third of the way from umbilicus to pubis) the sheath lies both in front of and behind rectus. Below it, all the aponeuroses pass in front, leaving only transversalis fascia behind. All of these muscles are supplied by the lower intercostal nerves T7–T11, the subcostal nerve T12 and L1."
      }
    ],
    takeaways: [
      "External oblique runs like hands in pockets; internal oblique runs at right angles to it; transversus runs horizontally.",
      "The inguinal ligament is the rolled lower edge of the external oblique aponeurosis (ASIS → pubic tubercle).",
      "Indirect hernia: lateral to the inferior epigastric vessels. Direct hernia: medial (Hesselbach's triangle).",
      "The wall's nerve plane lies between the internal oblique and transversus (TAP block)."
    ]
  },
  {
    id: "back-muscles",
    title: "Deep back muscles",
    emoji: "🧍",
    category: "Trunk & back",
    level: 3,
    minutes: 6,
    systems: ["muscular", "skeletal"],
    intro: "The back has three muscle layers. The superficial layer moves the upper limb, the intermediate layer helps breathing, and the deep (intrinsic) layer holds you upright. Only the deep layer is supplied by dorsal rami, and it is the layer behind most low back pain.",
    steps: [
      {
        title: "Intermediate layer: serratus posterior",
        structures: ["serratus posterior"],
        side: "both",
        context: ["rib", "thoracic vertebra"],
        text: "Serratus posterior superior (C7–T3 → ribs 2–5) and serratus posterior inferior (T11–L2 → ribs 9–12) are thin sheets that attach to the ribs and have been said to raise and lower them. Their exact breathing role is debated. They are supplied by intercostal nerves, which are ventral rami, so they are not true back muscles."
      },
      {
        title: "Splenius: the bandage",
        structures: ["splenius"],
        side: "both",
        context: ["cervical vertebra", "thoracic vertebra", "occipital bone", "temporal bone"],
        text: "Splenius capitis and splenius cervicis wrap over the deep neck muscles like a bandage, running from the spinous processes up and outward to the mastoid and the cervical transverse processes. Working on one side they turn the head toward that side; working on both sides they extend it. They are the most superficial of the deep layer."
      },
      {
        title: "Erector spinae: iliocostalis",
        structures: ["iliocostalis"],
        side: "both",
        context: ["rib", "hip bone", "sacrum", "lumbar vertebra"],
        text: "Iliocostalis is the lateral column of the erector spinae. It runs from the iliac crest and sacrum up to the angles of the ribs and the lower cervical transverse processes, with lumborum, thoracis and cervicis parts. To remember the three columns from lateral to medial, use 'I Love Spinach': Iliocostalis, Longissimus, Spinalis."
      },
      {
        title: "Erector spinae: longissimus",
        structures: ["longissimus"],
        side: "both",
        context: ["rib", "hip bone", "thoracic vertebra", "cervical vertebra", "temporal bone"],
        text: "Longissimus is the intermediate and longest column, running from the sacrum to the mastoid process (longissimus capitis). It attaches mainly to transverse processes. Acting on both sides it extends the spine; on one side it bends the spine sideways."
      },
      {
        title: "Spinalis (and semispinalis beside it)",
        structures: ["spinalis"],
        side: "both",
        context: ["thoracic vertebra", "cervical vertebra", "occipital bone"],
        text: "Spinalis is the thin medial column, running from spinous process to spinous process. The highlight also lights semispinalis, because 'semispinalis' contains the word. Tell them apart by their attachments. Spinalis runs spine to spine and sits on the outside, next to the midline. Semispinalis runs from transverse processes up to spinous processes and lies deeper. Semispinalis capitis is the thick muscle that forms the bulge on either side of the nuchal furrow."
      },
      {
        title: "Transversospinalis: multifidus & rotatores",
        structures: ["multifidus", "rotator"],
        side: "both",
        context: ["lumbar vertebra", "thoracic vertebra", "sacrum"],
        text: "These short muscles run from transverse processes up to the spinous processes above. Multifidus spans 2–4 segments and is thickest in the lumbar region. It is a key segmental stabiliser that wastes after back injury, and targeted exercise helps people recover. Rotatores span 1–2 segments, are best developed in the thoracic region and probably act mainly as position sensors."
      },
      {
        title: "Suboccipital muscles",
        structures: ["rectus capitis posterior", "obliquus capitis"],
        side: "both",
        context: ["atlas", "axis", "occipital bone"],
        text: "Rectus capitis posterior major and minor and obliquus capitis superior and inferior fine-tune head position. The suboccipital triangle is bounded by RCP major and the two obliques. It contains the vertebral artery on the atlas and the suboccipital nerve (the dorsal ramus of C1). Tension here is a recognised source of cervicogenic headache."
      },
      {
        title: "Quadratus lumborum",
        structures: ["quadratus lumborum"],
        side: "both",
        context: ["twelfth rib", "hip bone", "lumbar vertebra"],
        text: "Quadratus lumborum runs between the 12th rib, the iliac crest and the lumbar transverse processes. It bends the trunk sideways, 'hitches' the hip and holds the 12th rib still so the diaphragm can pull against it. Strictly it is a posterior abdominal wall muscle (ventral rami T12–L4), but it is a common source of one-sided low back pain."
      }
    ],
    takeaways: [
      "Back layers: superficial (upper limb), intermediate (serratus posterior), deep (dorsal rami).",
      "Erector spinae from lateral to medial: I Love Spinach (iliocostalis, longissimus, spinalis).",
      "Transversospinalis: semispinalis, multifidus, rotatores (transverse process → spinous process).",
      "Suboccipital triangle: vertebral artery + C1 dorsal ramus."
    ]
  },
  {
    id: "spine-ribs",
    title: "Vertebral column & ribs",
    emoji: "🦴",
    category: "Skeleton",
    level: 1,
    minutes: 6,
    systems: ["skeletal"],
    intro: "With 33 vertebrae in five regions, 12 pairs of ribs and the sternum, the axial skeleton protects the spinal cord and the thoracic organs. Every region has features that let you identify a single vertebra on its own.",
    steps: [
      {
        title: "Regions & curves",
        structures: ["atlas", "axis", "cervical vertebra", "thoracic vertebra", "lumbar vertebra", "sacrum"],
        side: "both",
        context: ["hip bone", "occipital bone"],
        text: "The regions are 7 cervical, 12 thoracic, 5 lumbar, 5 fused sacral and the coccyx. The thoracic and sacral kyphoses are the primary curves, present in the fetus. The cervical and lumbar lordoses are secondary curves that develop as a baby holds up its head and then walks. An exaggerated thoracic curve is kyphosis, an exaggerated lumbar curve is lordosis, and a sideways curve is scoliosis."
      },
      {
        title: "Atlas & axis",
        structures: ["atlas", "axis"],
        side: "both",
        context: ["occipital bone", "third cervical vertebra"],
        text: "C1 (the atlas) has no body and no spinous process, only a ring with lateral masses that carry the skull. Nodding happens at the atlanto-occipital joint. C2 (the axis) has the dens, which the atlas pivots around. About half of all neck rotation happens at this atlanto-axial joint. Know the eponymous fractures: Jefferson (C1 burst), hangman's (C2 pedicles) and the dens fracture. There is no disc between C1 and C2."
      },
      {
        title: "Typical cervical vertebrae",
        structures: ["cervical vertebra"],
        side: "both",
        context: ["atlas", "axis", "first thoracic vertebra"],
        text: "Cervical vertebrae are small, with transverse foramina (the vertebral artery runs through C6 to C1) and short bifid spinous processes. C7 is the vertebra prominens, the first spinous process you can easily feel. The C5–C6 and C6–C7 levels take the most wear, so cervical spondylosis is common there."
      },
      {
        title: "Thoracic vertebrae",
        structures: ["thoracic vertebra"],
        side: "both",
        context: ["rib"],
        text: "Look for heart-shaped bodies, costal facets for the rib heads, facets on the transverse processes for the rib tubercles (T1–T10), and long spinous processes that slope down. Being locked into the rib cage makes this the stiffest region, but osteoporotic wedge fractures are common here."
      },
      {
        title: "Lumbar vertebrae & discs",
        structures: ["lumbar vertebra"],
        side: "both",
        context: ["sacrum", "hip bone", "twelfth thoracic vertebra"],
        text: "Lumbar vertebrae have large, kidney-shaped bodies and short, square spinous processes; the model shows their discs too. Each disc is a tough annulus fibrosus around a gel-like nucleus pulposus. Most herniations happen at L4–5 and L5–S1. A posterolateral bulge compresses the root that exits one level below, so an L4–5 disc compresses L5. The spinal cord ends at about L1–L2, so a lumbar puncture at L3–4 or L4–5 is safe."
      },
      {
        title: "True ribs & costal cartilages",
        structures: ["first rib", "second rib", "third rib", "fourth rib", "fifth rib", "sixth rib", "seventh rib", "costal cartilage"],
        side: "both",
        context: ["thoracic vertebra", "manubrium", "body of sternum"],
        text: "Ribs 1–7 are true (vertebrosternal) ribs because each joins the sternum through its own costal cartilage. Rib 1 is short, broad and flat. Its upper surface has grooves for the subclavian vein (in front) and artery (behind), separated by the scalene tubercle. Costal cartilages make the rib cage elastic and tend to calcify with age."
      },
      {
        title: "False & floating ribs",
        structures: ["eighth rib", "ninth rib", "tenth rib", "eleventh rib", "twelfth rib"],
        side: "both",
        context: ["costal cartilage", "thoracic vertebra", "body of sternum"],
        text: "The cartilages of ribs 8–10 join the cartilage above them and form the costal margin; these are false (vertebrochondral) ribs. Ribs 11–12 float freely in the muscle of the flank. Ribs 9–11 overlie the spleen on the left and the liver on the right, so lower rib fractures can tear those organs. The 12th rib crosses the kidney."
      },
      {
        title: "Sternum & sternal angle",
        structures: ["manubrium", "body of sternum", "xiphoid process", "second costal cartilage"],
        side: "both",
        context: ["clavicle", "first rib", "second rib"],
        text: "The sternum has three parts: manubrium, body and xiphoid. The sternal angle (of Louis) is where the manubrium meets the body. The 2nd costal cartilage attaches there, so start counting ribs from it. It also lies at the T4–T5 disc level, where the aortic arch begins and ends, the trachea divides, and the azygos vein drains into the SVC."
      }
    ],
    takeaways: [
      "C1 has no body; C2 has the dens; C7 is the vertebra prominens; cervical vertebrae have transverse foramina.",
      "A posterolateral disc herniation compresses the root below (an L4–5 disc compresses L5).",
      "Ribs: true 1–7, false 8–10, floating 11–12.",
      "Sternal angle = 2nd costal cartilage = T4/5: aortic arch, carina and azygos."
    ]
  },

  // ───────────────────────────── HEAD & NECK ─────────────────────────────
  {
    id: "mastication",
    title: "Muscles of mastication",
    emoji: "🦷",
    category: "Head & neck",
    level: 1,
    minutes: 4,
    systems: ["muscular", "skeletal"],
    intro: "Four muscles, one nerve (V3), and one exam twist: three of them close the jaw, but the lateral pterygoid opens it.",
    steps: [
      {
        title: "Temporalis",
        structures: ["temporalis"],
        context: ["temporal bone", "parietal bone", "frontal bone", "mandible", "zygomatic bone"],
        text: "Temporalis fans out across the temporal fossa and narrows to pass under the zygomatic arch onto the coronoid process. It elevates the mandible, and its horizontal posterior fibres pull it back (retrusion). You can feel it bulge at your temple when you clench."
      },
      {
        title: "Masseter",
        structures: ["masseter"],
        context: ["zygomatic bone", "maxilla", "mandible", "temporal bone"],
        text: "Masseter runs from the zygomatic arch to the lateral ramus and angle of the mandible, in a superficial part and a deep part. It is the most powerful elevator; feel it harden when you clench. The parotid duct crosses its outer surface, then turns inward to pierce buccinator."
      },
      {
        title: "Medial pterygoid",
        structures: ["medial pterygoid"],
        context: ["sphenoid bone", "mandible", "masseter"],
        text: "It lies on the inner surface of the ramus, mirroring masseter on the outside. Together they form a muscular sling that cradles the angle of the mandible. It elevates and protrudes the jaw and, with the lateral pterygoid, produces side-to-side grinding."
      },
      {
        title: "Lateral pterygoid: the opener",
        structures: ["lateral pterygoid"],
        context: ["sphenoid bone", "mandible", "temporal bone"],
        text: "Its two heads run almost horizontally from the lateral pterygoid plate and the greater wing of the sphenoid. The upper head attaches to the TMJ disc and capsule, the lower head to the mandibular neck. It pulls the condyle and disc forward onto the articular eminence, which starts mouth opening. Acting on one side it swings the jaw to the opposite side for grinding."
      },
      {
        title: "Helpers that depress the jaw",
        structures: ["digastric", "mylohyoid", "geniohyoid"],
        context: ["mandible", "hyoid bone", "lateral pterygoid"],
        text: "Gravity, the lateral pterygoid and the suprahyoid muscles (anterior belly of digastric, mylohyoid, geniohyoid) open the mouth wide, pulling down on the mandible against a fixed hyoid. Opening too wide can dislocate the condyle forward over the articular eminence, and the jaw then locks open."
      },
      {
        title: "All four together",
        structures: ["temporalis", "masseter", "medial pterygoid", "lateral pterygoid"],
        context: ["mandible", "temporal bone", "zygomatic bone", "sphenoid bone"],
        text: "All four develop from the first pharyngeal arch and are supplied by the mandibular nerve (V3). The jaw jerk tests V3 and is brisk in an upper motor neuron lesion above the pons. Spasm causes trismus ('lockjaw'), seen in tetanus and dental abscess. Buccinator keeps food on the teeth but is a muscle of facial expression supplied by CN VII, not a muscle of mastication."
      }
    ],
    takeaways: [
      "Elevators: temporalis, masseter, medial pterygoid. Opener: lateral pterygoid (plus the suprahyoids).",
      "All four: mandibular nerve V3 (first pharyngeal arch).",
      "Masseter + medial pterygoid = sling around the angle of the mandible.",
      "Buccinator is CN VII, not a muscle of mastication."
    ]
  },
  {
    id: "facial-expression",
    title: "Muscles of facial expression",
    emoji: "😄",
    category: "Head & neck",
    level: 2,
    minutes: 5,
    systems: ["muscular", "skeletal", "connective"],
    intro: "These skin muscles develop from the second pharyngeal arch and are all supplied by the facial nerve (CN VII). They work like sphincters and dilators around the eyes, nose and mouth. Facial palsy is the clinical payoff.",
    steps: [
      {
        title: "Occipitofrontalis & scalp",
        structures: ["frontalis", "occipitalis", "aponeurosis of epicranius", "temporoparietalis"],
        context: ["frontal bone", "parietal bone", "occipital bone"],
        text: "Frontalis and occipitalis share the epicranial aponeurosis (galea). Frontalis raises the eyebrows. The scalp layers spell SCALP: Skin, Connective tissue, Aponeurosis, Loose areolar tissue, Pericranium. The loose layer is the 'danger zone', because infection there can spread through emissary veins into the skull."
      },
      {
        title: "Orbicularis oculi",
        structures: ["orbicularis oculi"],
        context: ["frontal bone", "zygomatic bone", "maxilla", "eyeball"],
        text: "The palpebral part, within the eyelids, blinks gently. The orbital part around the rim screws the eye tightly shut. In Bell's palsy the eye cannot close, so the cornea dries out and needs taping or drops, and tears overflow (epiphora)."
      },
      {
        title: "Frowning & the nose",
        structures: ["corrugator supercilii", "procerus", "nasalis", "depressor septi nasi"],
        context: ["frontal bone", "nasal bone", "maxilla", "set of nasal cartilages"],
        text: "Corrugator supercilii pulls the eyebrows together to make vertical frown lines. Procerus pulls the skin between the eyebrows down to make horizontal lines across the bridge of the nose. Both are classic Botox targets. Nasalis and depressor septi nasi flare and narrow the nostrils."
      },
      {
        title: "Orbicularis oris & buccinator",
        structures: ["orbicularis oris", "buccinator"],
        context: ["maxilla", "mandible"],
        text: "Orbicularis oris is the sphincter of the lips (whistling, kissing). Buccinator forms the cheek and presses it against the teeth so food stays between them during chewing. In facial palsy, food collects in the vestibule between cheek and teeth and the patient drools from the weak corner of the mouth."
      },
      {
        title: "Smiling: lip elevators",
        structures: ["zygomaticus", "levator labii superioris", "levator anguli oris", "risorius"],
        context: ["zygomatic bone", "maxilla", "orbicularis oris"],
        text: "Zygomaticus major pulls the corner of the mouth up and back for a smile. Zygomaticus minor and levator labii superioris raise the upper lip, and the alaeque nasi slip also flares the nostril (sneering). Levator anguli oris and risorius widen the smile. Many of these converge on the modiolus, a knot of fibres beside the corner of the mouth."
      },
      {
        title: "Lip depressors & platysma",
        structures: ["depressor anguli oris", "depressor labii inferioris", "mentalis", "platysma"],
        context: ["mandible", "clavicle"],
        text: "Depressor anguli oris turns the corners of the mouth down, depressor labii inferioris pulls the lower lip down, and mentalis pouts and wrinkles the chin. Platysma is a thin sheet in the superficial fascia of the neck. Injury to the marginal mandibular branch of CN VII, for example during neck surgery, leaves an asymmetric smile."
      },
      {
        title: "The whole face & CN VII",
        structures: ["frontalis", "orbicularis oculi", "orbicularis oris", "buccinator", "zygomaticus", "levator labii", "levator anguli oris", "depressor", "mentalis", "risorius", "nasalis", "procerus", "corrugator", "platysma"],
        side: "both",
        context: ["frontal bone", "maxilla", "mandible", "zygomatic bone"],
        text: "The five branches of CN VII are 'To Zanzibar By Motor Car': Temporal, Zygomatic, Buccal, Marginal mandibular, Cervical. A lower motor neuron lesion (Bell's palsy) paralyses the whole face on that side. An upper motor neuron lesion (stroke) spares the forehead, because the forehead's motor neurons get input from both hemispheres."
      }
    ],
    takeaways: [
      "All facial expression muscles = CN VII (second pharyngeal arch).",
      "Forehead sparing → upper motor neuron (central) lesion; whole half-face → lower motor neuron (Bell's palsy).",
      "Buccinator keeps food on the teeth; orbicularis oculi closes the eye (corneal protection).",
      "Branches of CN VII: To Zanzibar By Motor Car."
    ]
  },
  {
    id: "anterior-neck",
    title: "Anterior neck: SCM, scalenes & strap muscles",
    emoji: "🦒",
    category: "Head & neck",
    level: 2,
    minutes: 6,
    systems: ["muscular", "skeletal", "cardio", "respiratory", "connective"],
    intro: "SCM divides the neck into triangles, the scalenes frame the route to the arm, and the hyoid muscles move the larynx when you swallow. These landmarks get you safely through central lines, nerve blocks and neck surgery.",
    steps: [
      {
        title: "Platysma: the outer sheet",
        structures: ["platysma"],
        context: ["mandible", "clavicle"],
        text: "Platysma lies in the superficial fascia over the front of the neck. It is supplied by the cervical branch of CN VII and tightens the neck skin. Surgeons close it as a separate layer after neck incisions so the scar sits neatly."
      },
      {
        title: "Sternocleidomastoid",
        structures: ["sternocleidomastoid"],
        context: ["manubrium", "clavicle", "temporal bone", "occipital bone"],
        text: "SCM has two heads (sternal and clavicular) that run up to the mastoid process. Contracting on one side, it tilts the head toward that side and turns the face to the opposite side. Contracting on both sides, it flexes the neck. It separates the anterior triangle from the posterior triangle. It is supplied by CN XI, and a shortened SCM in infants causes congenital torticollis."
      },
      {
        title: "Scalenes & the interscalene gap",
        structures: ["scalenus"],
        context: ["first rib", "second rib", "subclavian artery", "subclavian vein", "cervical vertebra"],
        text: "Scalenus anterior and medius run to the 1st rib and scalenus posterior to the 2nd. The brachial plexus and the subclavian artery pass between anterior and middle scalene; the subclavian vein passes in front of scalenus anterior. The phrenic nerve runs down the front of scalenus anterior. Narrowing here, for example from a cervical rib, causes thoracic outlet syndrome. This gap is also where an interscalene block is placed."
      },
      {
        title: "Suprahyoid muscles",
        structures: ["digastric", "intermediate tendon", "stylohyoid", "mylohyoid", "geniohyoid"],
        context: ["hyoid bone", "mandible", "temporal bone"],
        text: "These muscles raise the hyoid when you swallow and help open the jaw. Their nerve supplies are a classic exam topic. The anterior belly of digastric and mylohyoid are supplied by V3 (nerve to mylohyoid). The posterior belly of digastric and stylohyoid are supplied by CN VII. Geniohyoid is supplied by C1, whose fibres travel with CN XII. Mylohyoid forms the floor of the mouth."
      },
      {
        title: "Infrahyoid (strap) muscles",
        structures: ["sternohyoid", "sternothyroid", "thyrohyoid", "omohyoid"],
        context: ["hyoid bone", "thyroid cartilage", "trachea", "manubrium", "scapula"],
        text: "Sternohyoid and omohyoid lie superficially. Sternothyroid and thyrohyoid lie deeper, running to and from the thyroid cartilage. Omohyoid has two bellies joined by an intermediate tendon and runs to the scapula. The ansa cervicalis (C1–C3) supplies all of them except thyrohyoid, which gets C1 fibres travelling with CN XII. Surgeons split them in the midline to reach the thyroid or the trachea."
      },
      {
        title: "Prevertebral muscles",
        structures: ["longus colli", "longus capitis", "rectus capitis anterior", "rectus capitis lateralis"],
        side: "both",
        context: ["atlas", "axis", "cervical vertebra", "occipital bone"],
        text: "These muscles lie flat on the front of the cervical spine, behind the pharynx and oesophagus. They flex the head and neck. Whiplash injuries strain them, and in a retropharyngeal abscess pus collects in front of them."
      },
      {
        title: "Carotid sheath & carotid triangle",
        structures: ["common carotid artery", "internal jugular vein"],
        context: ["sternocleidomastoid", "omohyoid", "posterior belly of digastric", "thyroid cartilage"],
        text: "The carotid sheath holds the common carotid artery (medially), the internal jugular vein (laterally) and the vagus nerve between and behind them. The carotid triangle is bounded by SCM, the superior belly of omohyoid and the posterior belly of digastric. In it the common carotid divides at the upper border of the thyroid cartilage (C4), and you can feel the carotid pulse. A central line goes into the IJV, which lies lateral to the artery."
      }
    ],
    takeaways: [
      "SCM: contracting on one side turns the face to the opposite side; CN XI.",
      "Between scalenus anterior and medius: brachial plexus + subclavian artery. The subclavian vein passes in front of scalenus anterior.",
      "Suprahyoid nerve supply: V3 (ant. digastric, mylohyoid), VII (post. digastric, stylohyoid), C1 (geniohyoid).",
      "Infrahyoid = ansa cervicalis, except thyrohyoid (C1 via XII)."
    ]
  },
  {
    id: "skull",
    title: "Skull bones",
    emoji: "💀",
    category: "Skeleton",
    level: 2,
    minutes: 5,
    systems: ["skeletal"],
    intro: "The skull has 22 bones (plus the hyoid), split into the cranium that holds the brain and the facial skeleton. For exams, focus on the weak points: the pterion, the orbit and the cribriform plate.",
    steps: [
      {
        title: "Calvaria",
        structures: ["frontal bone", "parietal bone", "occipital bone"],
        side: "both",
        context: ["temporal bone", "sphenoid bone"],
        text: "The skull vault is made of the frontal bone, the paired parietal bones and the occipital bone. The coronal suture separates frontal from parietal bones, the sagittal suture runs between the parietals, and the lambdoid suture separates parietals from occipital. In infants the anterior fontanelle (the soft spot where coronal and sagittal sutures meet) closes by about 18 months. The foramen magnum in the occipital bone transmits the medulla."
      },
      {
        title: "Temporal bone",
        structures: ["temporal bone"],
        side: "both",
        context: ["parietal bone", "mandible", "zygomatic bone", "occipital bone"],
        text: "It has three parts. The squamous part forms the side wall and has the TMJ fossa. The petrous part is the densest bone in the body and houses the middle and inner ear. The mastoid part contains air cells. The zygomatic process joins the zygomatic bone to form the arch. A petrous fracture can cause CSF leaking from the ear, Battle's sign (bruising over the mastoid) and facial nerve palsy."
      },
      {
        title: "Pterion: the weak spot",
        structures: ["frontal bone", "parietal bone", "temporal bone", "sphenoid bone"],
        context: ["zygomatic bone"],
        text: "The pterion is an H-shaped junction about 3–4 cm above the zygomatic arch where the frontal, parietal, temporal and greater wing of the sphenoid meet. The bone is thin here, and the anterior branch of the middle meningeal artery runs just inside it. A blow here causes an extradural haematoma: brief loss of consciousness, a lucid interval, then rapid deterioration."
      },
      {
        title: "Sphenoid & ethmoid: the central bones",
        structures: ["sphenoid bone", "ethmoid"],
        side: "both",
        context: ["pituitary gland", "frontal bone", "vomer"],
        text: "The bat-shaped sphenoid touches nearly every other cranial bone. Its sella turcica cradles the pituitary, and that is why surgeons can reach the pituitary through the nose and the sphenoid sinus. The ethmoid's cribriform plate lets the olfactory nerve fibres through. A fracture here causes anosmia and CSF rhinorrhoea. Its thin orbital plate (lamina papyracea) forms most of the medial orbital wall."
      },
      {
        title: "Facial skeleton & orbit",
        structures: ["maxilla", "zygomatic bone", "nasal bone", "lacrimal bone", "palatine bone", "vomer", "inferior nasal concha"],
        side: "both",
        context: ["frontal bone", "ethmoid", "sphenoid bone", "eyeball"],
        text: "Seven bones form the orbit: frontal, zygomatic, maxilla, lacrimal, ethmoid, sphenoid and palatine. A blow-out fracture breaks the thin floor (maxilla) or medial wall (ethmoid). The eye can then sink and its upward gaze is limited by a trapped inferior rectus. The vomer and the ethmoid's perpendicular plate form the bony nasal septum. LeFort I–III fractures separate the maxilla from the skull at different levels."
      },
      {
        title: "Mandible & teeth",
        structures: ["mandible", "tooth", "gingiva"],
        side: "both",
        context: ["maxilla", "temporal bone", "hyoid bone"],
        text: "The mandible is the only movable skull bone, and its condyle sits in the temporal bone at the TMJ. Like the pelvis, it is a ring with the skull, so look for fractures in two places, such as the condyle and the opposite angle. Each adult quadrant has 2 incisors, 1 canine, 2 premolars and 3 molars, 32 teeth in all; this model has no third molars. The inferior alveolar nerve runs in the mandibular canal under the teeth."
      },
      {
        title: "Hyoid",
        structures: ["hyoid bone"],
        side: "both",
        context: ["mandible", "thyroid cartilage", "third cervical vertebra"],
        text: "The U-shaped hyoid sits at C3 and does not articulate with any other bone. It hangs from muscles and ligaments and anchors the tongue and larynx. A fractured hyoid at autopsy suggests manual strangulation."
      }
    ],
    takeaways: [
      "Pterion = frontal + parietal + temporal + sphenoid; middle meningeal artery → extradural haematoma.",
      "Cribriform plate fracture → anosmia + CSF rhinorrhoea.",
      "Orbit: 7 bones; blow-out fracture through the floor (maxilla) or medial wall (ethmoid).",
      "The hyoid (C3) does not articulate with any other bone."
    ]
  },

  // ───────────────────────────── HEART & VESSELS ─────────────────────────────
  {
    id: "heart",
    title: "The heart: valves & coronary circulation",
    emoji: "❤️",
    category: "Heart & vessels",
    level: 2,
    minutes: 6,
    systems: ["cardio"],
    intro: "The heart is two pumps working side by side, with four valves and its own blood supply. Learn which coronary branch supplies which wall and you can localise a heart attack from an ECG.",
    steps: [
      {
        title: "Surfaces & borders",
        structures: ["wall of heart"],
        side: "both",
        context: ["ascending aorta", "pulmonary artery", "superior vena cava", "inferior vena cava"],
        text: "Most of the front (sternocostal) surface is the right ventricle. The right border is the right atrium, the left border is mostly the left ventricle, and the base at the back is the left atrium. The apex (left ventricle) lies in the left 5th intercostal space at the midclavicular line. Because the left atrium sits right in front of the oesophagus, an enlarged left atrium can cause difficulty swallowing."
      },
      {
        title: "Atrioventricular valves",
        structures: ["tricuspid valve", "mitral valve"],
        side: "both",
        context: ["wall of heart"],
        text: "The tricuspid valve lies on the right and the mitral (bicuspid) valve on the left. They close at the start of systole and produce S1. Listen to the tricuspid at the left lower sternal border and the mitral at the apex. Mitral stenosis, usually rheumatic, enlarges the left atrium and predisposes to atrial fibrillation."
      },
      {
        title: "Papillary muscles",
        structures: ["papillary muscle"],
        side: "both",
        context: ["tricuspid valve", "mitral valve"],
        text: "Papillary muscles tighten the chordae tendineae during systole so the valve cusps don't flip back into the atria. The right ventricle has anterior, posterior and septal papillary muscles; the left has anterior and posterior. The posteromedial papillary muscle of the LV usually has a single blood supply (often the RCA/PDA). If it ruptures after an inferior MI, the result is sudden severe mitral regurgitation."
      },
      {
        title: "Pulmonary valve",
        structures: ["pulmonary valve"],
        side: "both",
        context: ["pulmonary artery", "wall of heart", "ascending aorta"],
        text: "The semilunar valves (pulmonary and aortic; only the pulmonary is in this model) close at the end of systole and make S2. A2 normally comes just before P2, and on inspiration P2 is delayed further, splitting S2 physiologically. Listen to the pulmonary valve at the left 2nd intercostal space and the aortic valve at the right 2nd."
      },
      {
        title: "Left coronary artery",
        structures: ["stem of coronary artery", "anterior interventricular branch", "circumflex branch", "interventricular septal branches"],
        side: "left",
        context: ["wall of heart", "ascending aorta"],
        text: "The short left main stem splits into the LAD (anterior interventricular) and the circumflex. The LAD supplies the anterior LV wall, the apex and the front two-thirds of the septum through its septal branches. A blocked LAD causes the 'widow-maker' MI, which shows as ST elevation in V1–V4. The circumflex runs in the left atrioventricular groove to the lateral wall (leads I, aVL, V5–V6)."
      },
      {
        title: "Right coronary artery",
        structures: ["trunk of coronary artery", "marginal branch", "posterior interventricular branch", "posterolateral branch", "interventricular septal branches"],
        side: "right",
        context: ["wall of heart", "ascending aorta"],
        text: "The RCA runs in the right atrioventricular groove. It gives off the right marginal branch and, in about 80–85% of people, the posterior interventricular artery (PDA). Which artery gives the PDA defines right or left 'dominance'. The RCA usually supplies the SA and AV nodes and the inferior wall. An inferior MI (II, III, aVF) can therefore cause bradycardia and heart block."
      },
      {
        title: "Cardiac veins",
        structures: ["great cardiac vein", "middle cardiac vein", "coronary sinus", "anterior cardiac veins", "posterior veins of ventricle"],
        side: "both",
        context: ["wall of heart", "inferior vena cava"],
        text: "The great cardiac vein runs alongside the LAD and the middle cardiac vein alongside the PDA. Both drain into the coronary sinus in the posterior atrioventricular groove, which opens into the right atrium. The anterior cardiac veins drain the right ventricle directly into the right atrium. The coronary sinus is the route for CRT pacing leads and some ablation catheters."
      }
    ],
    takeaways: [
      "Apex = LV at the left 5th intercostal space, midclavicular line; the front surface is mostly RV; the base is LA.",
      "S1 = AV valves close; S2 = semilunar valves close (physiological splitting on inspiration).",
      "LAD → anterior wall + anterior two-thirds of the septum (V1–V4). Circumflex → lateral wall. RCA → inferior wall + SA/AV nodes.",
      "Great cardiac vein (with the LAD) and middle cardiac vein (with the PDA) → coronary sinus → RA."
    ]
  },
  {
    id: "great-vessels",
    title: "Great vessels",
    emoji: "🩸",
    category: "Heart & vessels",
    level: 2,
    minutes: 6,
    systems: ["cardio"],
    intro: "Follow the blood out of the heart through the aorta and its big branches, and back through the venae cavae. Most of the asymmetries between left and right make sense once you see them in 3D.",
    steps: [
      {
        title: "Ascending aorta & arch",
        structures: ["ascending aorta", "arch of aorta"],
        side: "both",
        context: ["wall of heart", "pulmonary artery", "trachea"],
        text: "The aorta rises from the LV, and its only branches here are the coronary arteries. It arches backward over the left main bronchus and the pulmonary trunk. The arch starts and ends at the sternal angle (T4/5). The left recurrent laryngeal nerve hooks under it, so an aortic aneurysm can cause hoarseness."
      },
      {
        title: "Arch branches",
        structures: ["brachiocephalic artery", "common carotid artery", "subclavian artery"],
        side: "both",
        context: ["arch of aorta", "trachea", "clavicle"],
        text: "Three branches come off the arch, from right to left: the brachiocephalic trunk, the left common carotid and the left subclavian. On the right, the brachiocephalic trunk splits behind the sternoclavicular joint into the right subclavian and right common carotid arteries. The subclavian becomes the axillary artery at the outer border of the first rib."
      },
      {
        title: "Descending aorta & gut arteries",
        structures: ["descending aorta", "celiac artery", "superior mesenteric artery", "inferior mesenteric artery"],
        side: "both",
        context: ["diaphragm", "lumbar vertebra", "thoracic vertebra"],
        text: "The aorta passes through the diaphragm at T12 and gives three unpaired gut arteries. The coeliac trunk (T12) supplies the foregut, the SMA (L1) the midgut and the IMA (L3) the hindgut. The left renal vein and the third part of the duodenum pass between the SMA and the aorta and can be squeezed there (nutcracker syndrome and SMA syndrome)."
      },
      {
        title: "Coeliac trunk branches",
        structures: ["common hepatic artery", "splenic artery", "gastric artery", "celiac artery"],
        side: "both",
        context: ["stomach", "liver", "spleen", "pancreas"],
        text: "The coeliac trunk is short and splits into the left gastric, splenic and common hepatic arteries. The splenic artery winds along the top of the pancreas, and a posterior duodenal ulcer can erode the gastroduodenal artery, a hepatic branch. Together these arteries supply everything from the lower oesophagus to the middle of the duodenum."
      },
      {
        title: "Renal & iliac arteries",
        structures: ["renal artery", "common iliac artery", "external iliac artery", "internal iliac artery"],
        side: "both",
        context: ["descending aorta", "kidney", "hip bone", "sacrum"],
        text: "The renal arteries leave at about L1–L2, and the right one passes behind the IVC. The aorta divides at L4 (about the level of the umbilicus) into the common iliac arteries. Each common iliac splits in front of the sacroiliac joint into the internal iliac (pelvis and gluteal region) and the external iliac. The external iliac becomes the femoral artery under the inguinal ligament. Abdominal aortic aneurysms usually form below the renal arteries."
      },
      {
        title: "Venae cavae & tributaries",
        structures: ["superior vena cava", "inferior vena cava", "brachiocephalic vein", "internal jugular vein", "subclavian vein", "common iliac vein", "renal vein"],
        side: "both",
        context: ["wall of heart", "diaphragm"],
        text: "The internal jugular and subclavian veins join to form each brachiocephalic vein. The left one is longer and crosses in front of the arch branches. The two brachiocephalics join to form the SVC. The IVC lies to the right of the aorta, which is why the left renal vein is long and crosses in front of the aorta. The IVC passes through the diaphragm at T8."
      },
      {
        title: "Pulmonary circulation",
        structures: ["pulmonary artery", "pulmonary vein"],
        side: "both",
        context: ["wall of heart", "upper lobe of lung", "lower lobe of lung", "arch of aorta", "bronchus"],
        text: "The pulmonary trunk carries deoxygenated blood from the RV and splits under the aortic arch. The ligamentum arteriosum (the remnant of the ductus arteriosus) links it to the arch. The pulmonary veins, usually four, bring oxygenated blood to the LA. At the hilum the pulmonary artery sits above the bronchus on the left. On the right the main bronchus is highest, because the upper-lobe (eparterial) bronchus leaves above the artery."
      }
    ],
    takeaways: [
      "Arch branches (right to left): brachiocephalic trunk, left common carotid, left subclavian.",
      "Coeliac T12 (foregut), SMA L1 (midgut), IMA L3 (hindgut); aortic bifurcation at L4.",
      "Diaphragm openings: IVC T8, oesophagus T10, aorta T12.",
      "The left renal vein crosses in front of the aorta, under the SMA (nutcracker)."
    ]
  },

  // ───────────────────────────── ORGANS ─────────────────────────────
  {
    id: "lungs-airway",
    title: "Lungs & airway",
    emoji: "🫁",
    category: "Organs",
    level: 1,
    minutes: 4,
    systems: ["respiratory", "skeletal"],
    intro: "The right and left lungs are not mirror images, and those differences explain where inhaled objects and pneumonias end up and how the lobes appear on X-ray.",
    steps: [
      {
        title: "Larynx landmark & trachea",
        structures: ["thyroid cartilage", "trachea"],
        side: "both",
        context: ["hyoid bone", "manubrium", "esophagus"],
        text: "The thyroid cartilage (Adam's apple) sits at C4–C5. Below the cricoid at C6, the trachea runs down in front of the oesophagus, held open by C-shaped cartilage rings whose open side faces backward. It divides at the carina at T4/5, the sternal angle. A tracheostomy usually goes through the 2nd–4th tracheal rings."
      },
      {
        title: "Main bronchi",
        structures: ["bronchus"],
        side: "both",
        context: ["trachea", "arch of aorta", "pulmonary artery"],
        text: "The right main bronchus is wider, shorter and more vertical. Inhaled objects and aspirated fluid therefore usually go right, often to the posterior segment of the right upper lobe or to the right lower lobe when lying down. The left main bronchus passes under the aortic arch and in front of the oesophagus."
      },
      {
        title: "Right lung: three lobes",
        structures: ["upper lobe of lung", "middle lobe of lung", "lower lobe of lung"],
        side: "right",
        context: ["bronchus", "diaphragm", "rib"],
        text: "The oblique fissure separates the lower lobe from the rest, and the horizontal fissure (at the 4th costal cartilage) separates the upper and middle lobes. From the front you see mostly the upper and middle lobes; from behind, mostly the lower lobe. That is why you examine lower-lobe pneumonia from the back. Middle-lobe disease blurs the right heart border on X-ray."
      },
      {
        title: "Left lung: two lobes",
        structures: ["upper lobe of lung", "lower lobe of lung"],
        side: "left",
        context: ["bronchus", "wall of heart", "diaphragm"],
        text: "There is only an oblique fissure. The left upper lobe includes the lingula, the counterpart of the right middle lobe, and the cardiac notch where the heart pushes the lung aside. Disease of the lingula blurs the left heart border on X-ray."
      },
      {
        title: "Diaphragm & breathing muscles",
        structures: ["diaphragm", "external intercostal muscle", "internal intercostal muscle", "innermost intercostal muscle"],
        side: "both",
        context: ["rib", "lower lobe of lung", "liver"],
        text: "The diaphragm is the main muscle of inspiration and is supplied by the phrenic nerve (C3, C4, C5 'keep the diaphragm alive'). Its right dome sits higher because the liver is underneath. External intercostals help with inspiration, and internal intercostals drive forced expiration. The intercostal vessels and nerve run between the internal and innermost layers under each rib, so chest drains go just above a rib."
      },
      {
        title: "Both lungs in the chest",
        structures: ["lobe of lung", "trachea", "bronchus"],
        side: "both",
        context: ["rib", "diaphragm", "wall of heart"],
        text: "The apex of each lung rises 2–3 cm above the medial clavicle into the root of the neck, where a central line or stab wound can cause a pneumothorax. In quiet breathing the lungs reach the 6th rib at the midclavicular line, the 8th at the mid-axillary line and the 10th next to the spine. The pleura extends about two ribs further (8, 10, 12)."
      }
    ],
    takeaways: [
      "Right lung: 3 lobes, 2 fissures. Left lung: 2 lobes + lingula + cardiac notch.",
      "The right main bronchus is wider, shorter and more vertical, so aspiration goes right.",
      "Carina at T4/5 (sternal angle).",
      "Lung lower borders 6–8–10; pleura 8–10–12 (midclavicular, mid-axillary, paravertebral)."
    ]
  },
  {
    id: "gi-tract",
    title: "GI tract tour",
    emoji: "🍽️",
    category: "Organs",
    level: 1,
    minutes: 6,
    systems: ["digestive", "lymphatic", "cardio"],
    intro: "Follow food from the oesophagus to the rectum and then visit the solid organs that support digestion. Foregut, midgut and hindgut give you a framework for blood supply and pain.",
    steps: [
      {
        title: "Oesophagus",
        structures: ["esophagus"],
        side: "both",
        context: ["trachea", "descending aorta", "diaphragm", "stomach"],
        text: "The oesophagus starts at C6 behind the trachea and passes through the diaphragm at T10. It is narrowed at its start, where the aortic arch and left main bronchus cross it, and where it passes through the diaphragm. Swallowed objects lodge and cancers often form at these points. Its upper third is skeletal muscle, its lower third smooth muscle, and its middle third a mix."
      },
      {
        title: "Stomach",
        structures: ["stomach"],
        side: "both",
        context: ["esophagus", "duodenum", "liver", "spleen"],
        text: "Its parts are the cardia, fundus, body, antrum and pylorus, with a lesser and a greater curvature. The fundus sits under the left dome of the diaphragm (the gastric air bubble on X-ray). Behind the stomach lie the lesser sac and the pancreas, so a posterior gastric ulcer can erode into the pancreas or the splenic artery."
      },
      {
        title: "Small intestine",
        structures: ["duodenum", "jejunum", "ileum"],
        side: "both",
        context: ["stomach", "pancreas", "colon"],
        text: "The C-shaped duodenum (about 25 cm, mostly retroperitoneal) wraps around the head of the pancreas, and bile and pancreatic juice enter its 2nd part. The jejunum lies mainly in the upper left; it is wider, has thicker walls and has long vasa recta. The ileum lies in the lower right, with more fat and more arcades, and ends at the ileocaecal valve where B12 and bile salts are absorbed."
      },
      {
        title: "Large intestine & appendix",
        structures: ["colon", "taenia", "appendix", "rectum"],
        side: "both",
        context: ["ileum", "hip bone"],
        text: "The colon frames the small intestine. You can recognise it by its taeniae coli (three longitudinal bands), haustra and fatty appendices. The three taeniae meet at the base of the appendix, which is how surgeons find it. Appendicitis pain starts around the umbilicus (midgut, T10) and moves to McBurney's point once the parietal peritoneum is irritated. The rectum begins at S3, where the taeniae spread out into a continuous layer."
      },
      {
        title: "Liver & gallbladder",
        structures: ["liver", "gallbladder"],
        side: "both",
        context: ["diaphragm", "stomach", "duodenum", "rib"],
        text: "The liver is the largest gland in the body. It lies under the right dome of the diaphragm, protected by ribs 7–11. The gallbladder sits under the liver at the tip of the right 9th costal cartilage. Inflammation there causes Murphy's sign, and its pain can be referred to the right shoulder through the phrenic nerve. Gallstones can block the cystic duct (cholecystitis) or the common bile duct (jaundice)."
      },
      {
        title: "Pancreas & spleen",
        structures: ["pancreas", "pancreatic duct", "spleen", "splenic vein", "splenic artery"],
        side: "both",
        context: ["duodenum", "stomach", "kidney"],
        text: "The pancreas lies across the back of the abdomen at L1–L2. Its head sits in the curve of the duodenum and its tail reaches the splenic hilum. Pancreatitis pain bores through to the back. A tumour of the head blocks the bile duct and causes painless jaundice. The spleen lies under ribs 9–11 on the left and is the organ most often injured by blunt abdominal trauma."
      },
      {
        title: "Anorectum & pelvic floor",
        structures: ["rectum", "external anal sphincter", "puborectalis", "pubococcygeus", "iliococcygeus"],
        side: "both",
        context: ["sacrum", "hip bone", "urinary bladder", "prostate"],
        text: "Puborectalis forms a sling around the anorectal junction that keeps the anorectal angle at about 90°, which is key to continence. The external anal sphincter is voluntary muscle supplied by the pudendal nerve. In this male model the prostate lies directly in front of the rectum, so you can feel it on a digital rectal exam."
      }
    ],
    takeaways: [
      "Foregut (coeliac) to 2nd part of duodenum; midgut (SMA) to 2/3 of the transverse colon; hindgut (IMA) to the upper anal canal.",
      "The oesophagus passes through the diaphragm at T10; narrowings at the cricoid, aortic arch/left bronchus and diaphragm.",
      "Taeniae coli meet at the base of the appendix.",
      "The spleen is the organ most often injured in blunt trauma (left ribs 9–11)."
    ]
  },
  {
    id: "urinary-reproductive",
    title: "Urinary & male reproductive",
    emoji: "🫘",
    category: "Organs",
    level: 2,
    minutes: 5,
    systems: ["urinary", "reproductive", "endocrine", "cardio"],
    intro: "Urine runs from the kidneys to the urethra, and in the male the reproductive tract joins that route. Kidney stones, BPH and testicular pain referred to the abdomen all follow from this anatomy.",
    steps: [
      {
        title: "Kidneys & adrenals",
        structures: ["kidney", "adrenal gland"],
        side: "both",
        context: ["twelfth rib", "psoas major", "quadratus lumborum", "liver", "spleen"],
        text: "The kidneys lie behind the peritoneum from about T12 to L3. The right one sits lower because the liver is above it. The 12th rib crosses the back of each kidney. Each adrenal gland caps the upper pole of its kidney (the right is pyramid-shaped, the left crescent-shaped). The adrenals have their own fascial compartment, so they stay in place if a kidney drops or is removed."
      },
      {
        title: "Renal vessels",
        structures: ["renal artery", "renal vein"],
        side: "both",
        context: ["kidney", "descending aorta", "inferior vena cava"],
        text: "At the hilum, from front to back: vein, artery, pelvis (VAP). The left renal vein is long and crosses in front of the aorta, and it receives the left gonadal vein. That is why a left-sided varicocele can be the first sign of a left renal tumour."
      },
      {
        title: "Ureters",
        structures: ["ureter"],
        side: "both",
        context: ["kidney", "psoas major", "common iliac artery", "urinary bladder"],
        text: "The ureters run down on psoas and cross the pelvic brim over the iliac bifurcation. In the male the vas deferens crosses over them ('water under the bridge'). Stones lodge at the three narrowings: the pelviureteric junction, the pelvic brim and where the ureter enters the bladder. The pain moves from loin to groin as the stone travels down."
      },
      {
        title: "Bladder, prostate & urethra",
        structures: ["urinary bladder", "prostate", "urethra"],
        side: "both",
        context: ["hip bone", "rectum", "seminal vesicle"],
        text: "The bladder sits behind the pubic symphysis and rises into the abdomen when full, which allows a suprapubic catheter. The prostate surrounds the urethra just below the bladder. BPH (transition zone) blocks the urethra early; carcinoma (peripheral zone, at the back) is felt on rectal exam. The male urethra has prostatic, membranous and spongy parts. The membranous part is the shortest and narrowest and tears in pelvic fractures."
      },
      {
        title: "Testis to ejaculatory duct",
        structures: ["testis", "epididymis", "deferent duct", "seminal vesicle"],
        side: "both",
        context: ["prostate", "urinary bladder", "ureter"],
        text: "Sperm go from the testis to the epididymis, then into the vas (ductus) deferens through the inguinal canal. The vas crosses over the ureter and joins the duct of the seminal vesicle to form the ejaculatory duct inside the prostate. The testis develops high on the posterior abdominal wall and descends, so its lymph drains to the para-aortic nodes, not the inguinal nodes, and testicular pain can be felt in the abdomen."
      },
      {
        title: "Penis",
        structures: ["corpus cavernosum", "corpus spongiosum", "glans penis"],
        side: "both",
        context: ["urethra", "hip bone", "testis"],
        text: "The paired corpora cavernosa (on top) provide rigidity. The single corpus spongiosum (underneath) carries the urethra and expands into the glans. Erection is parasympathetic (pelvic splanchnics S2–S4) and ejaculation is sympathetic: 'Point and Shoot'."
      }
    ],
    takeaways: [
      "Kidneys T12–L3, the right one lower; hilum from front to back: vein, artery, pelvis.",
      "Ureter stones lodge at the pelviureteric junction, the pelvic brim and the vesicoureteric junction.",
      "The vas deferens passes over the ureter ('water under the bridge').",
      "Testicular lymph drains to the para-aortic nodes; BPH arises in the transition zone, cancer in the peripheral zone."
    ]
  },

  // ───────────────────────────── BRAIN ─────────────────────────────
  {
    id: "brain",
    title: "Brain: a guided tour",
    emoji: "🧠",
    category: "Brain",
    level: 2,
    minutes: 7,
    systems: ["nervous"],
    intro: "Go from cortex to brainstem: the functional areas, the deep nuclei, the ventricles and the posterior fossa. Each region has a typical lesion pattern, and that is how neurology cases are solved.",
    steps: [
      {
        title: "Motor & sensory strips",
        structures: ["precentral gyrus", "postcentral gyrus"],
        side: "both",
        context: ["superior frontal gyrus", "superior parietal lobule"],
        text: "The precentral gyrus is primary motor cortex and the postcentral gyrus is primary somatosensory cortex; the central sulcus lies between them. Both are laid out as a homunculus. The face and arm are on the lateral surface (middle cerebral artery territory), and the leg is on the medial surface (anterior cerebral artery territory). An MCA stroke therefore weakens the face and arm more than the leg."
      },
      {
        title: "Frontal & parietal association areas",
        structures: ["superior frontal gyrus", "middle frontal gyrus", "superior parietal lobule", "supramarginal gyrus", "angular gyrus", "orbital gyri"],
        side: "both",
        context: ["precentral gyrus", "postcentral gyrus"],
        text: "The frontal gyri plan, judge and control behaviour, and frontal damage changes personality. Broca's area is in the inferior frontal gyrus of the dominant hemisphere (not modelled separately). The supramarginal and angular gyri form part of Wernicke's language region. A dominant angular gyrus lesion causes Gerstmann syndrome: trouble with writing, arithmetic, telling left from right and naming fingers. A non-dominant parietal lesion causes neglect of the opposite side."
      },
      {
        title: "Temporal & occipital lobes",
        structures: ["superior temporal gyrus", "middle temporal gyrus", "inferior temporal gyrus", "fusiform gyrus", "occipital lobe", "insula"],
        side: "both",
        context: ["precentral gyrus"],
        text: "The superior temporal gyrus contains the primary auditory cortex (Heschl's gyrus) and, at its back, Wernicke's area. Damage there causes fluent but meaningless speech with poor comprehension. The fusiform gyrus recognises faces (prosopagnosia when damaged). The occipital lobe is visual cortex. The insula lies hidden deep in the lateral sulcus and handles taste and the body's internal sensations."
      },
      {
        title: "Basal ganglia & internal capsule",
        structures: ["caudate nucleus", "putamen", "globus pallidus", "internal capsule"],
        side: "both",
        context: ["thalamus", "lateral ventricle"],
        text: "The caudate curves around the lateral ventricle, and the putamen lies lateral to the globus pallidus; caudate plus putamen form the striatum. The caudate head wastes in Huntington's disease. The internal capsule runs between these nuclei and the thalamus and carries motor and sensory fibres. A small lacunar infarct there can cause complete weakness of one side of the body."
      },
      {
        title: "Thalamus & limbic system",
        structures: ["thalamus", "hippocampus", "amygdala", "fornix", "mammillary body", "cingulate gyrus"],
        side: "both",
        context: ["lateral ventricle", "corpus callosum", "third ventricle"],
        text: "The thalamus relays nearly all sensory input to the cortex; smell is the exception. This highlight also catches the hypothalamus below it. The Papez circuit runs hippocampus → fornix → mammillary bodies → thalamus → cingulate gyrus and back to the hippocampus. Hippocampal damage stops new memories forming. Mammillary body damage from thiamine deficiency causes Wernicke–Korsakoff syndrome. The amygdala handles fear."
      },
      {
        title: "Ventricles & CSF",
        structures: ["lateral ventricle", "interventricular foramen", "third ventricle", "cerebral aqueduct", "fourth ventricle", "choroid plexus"],
        side: "both",
        context: ["corpus callosum", "septum pellucidum", "cerebellum"],
        text: "CSF is made by the choroid plexus. It flows from each lateral ventricle through the interventricular foramen (of Monro) into the third ventricle, then down the cerebral aqueduct to the fourth ventricle and out into the subarachnoid space. The aqueduct is the narrowest point, so aqueductal stenosis causes non-communicating hydrocephalus, with the lateral and third ventricles enlarged but the fourth normal."
      },
      {
        title: "Brainstem",
        structures: ["midbrain", "peduncle of midbrain", "pons", "medulla oblongata", "superior colliculus", "inferior colliculus"],
        side: "both",
        context: ["cerebellum", "thalamus", "fourth ventricle"],
        text: "The midbrain holds CN III and IV, with the superior colliculi (vision) and inferior colliculi (hearing) on its back. The pons holds CN V–VIII, and the medulla CN IX–XII. Brainstem lesions give 'crossed' signs: cranial nerve problems on the same side and limb weakness on the opposite side. The pyramids decussate in the lower medulla. Cardiorespiratory centres sit in the medulla, so herniation there is fatal."
      },
      {
        title: "Cerebellum & the big picture",
        structures: ["cerebellum", "corpus callosum", "pituitary gland", "pineal body"],
        side: "both",
        context: ["pons", "medulla oblongata", "occipital lobe"],
        text: "The cerebellum coordinates movement on the same side of the body. A hemisphere lesion causes ipsilateral ataxia, intention tremor and dysdiadochokinesia; a vermis lesion causes truncal ataxia. The corpus callosum connects the two hemispheres. The pituitary hangs below the hypothalamus, and the pineal sits above the superior colliculi, where a pineal tumour causes upgaze palsy (Parinaud syndrome)."
      }
    ],
    takeaways: [
      "MCA territory: lateral face and arm (+ language if dominant); ACA territory: medial leg.",
      "Papez circuit: hippocampus → fornix → mammillary bodies → thalamus → cingulate gyrus.",
      "CSF: lateral ventricles → foramen of Monro → 3rd ventricle → aqueduct → 4th ventricle.",
      "Brainstem lesion = crossed signs; cerebellar lesion = ipsilateral signs."
    ]
  },
  {
    id: "visual-pathway",
    title: "Visual pathway & field defects",
    emoji: "👁️",
    category: "Brain",
    level: 3,
    minutes: 5,
    systems: ["nervous"],
    intro: "Follow the visual pathway from retina to cortex: lesions at different points cause specific visual field defects, so a field test tells you where the lesion is. It is an exam classic.",
    steps: [
      {
        title: "Eyeball & optic nerve",
        structures: ["eyeball", "optic nerve"],
        side: "both",
        context: ["optic chiasm", "sphenoid bone"],
        text: "Each retina is split into a nasal half and a temporal half. The nasal retina sees the temporal visual field, because the lens flips the image. The optic nerve (CN II) is really a tract of the CNS, wrapped in meninges, which is why raised intracranial pressure causes papilloedema. Damage to one optic nerve blinds that eye and causes a relative afferent pupillary defect."
      },
      {
        title: "Optic chiasm",
        structures: ["optic chiasm"],
        side: "both",
        context: ["optic nerve", "optic tract", "pituitary gland", "hypothalamus"],
        text: "Only the fibres from the nasal half of each retina cross here. The chiasm lies just above the pituitary, so a pituitary adenoma pressing up from below hits the crossing nasal fibres first. The result is bitemporal hemianopia: loss of both outer fields, often noticed first as bumping into things at the sides."
      },
      {
        title: "Optic tract",
        structures: ["optic tract"],
        side: "both",
        context: ["optic chiasm", "lateral geniculate body", "peduncle of midbrain"],
        text: "Each tract carries the temporal fibres from the same eye and the nasal fibres from the opposite eye, so it represents the opposite visual field. A tract lesion causes a contralateral homonymous hemianopia that is often incongruous (not identical in the two eyes). Some fibres branch off to the pretectal area for the pupillary light reflex."
      },
      {
        title: "Lateral geniculate body vs medial",
        structures: ["lateral geniculate body", "medial geniculate body"],
        side: "both",
        context: ["thalamus", "optic tract"],
        text: "The lateral geniculate body is the thalamic relay for vision, and the medial one is the relay for hearing. A memory hook: Lateral = Light, Medial = Music. The LGB has six layers that keep the input from each eye separate."
      },
      {
        title: "Optic radiation & visual cortex",
        structures: ["occipital lobe"],
        side: "both",
        context: ["lateral geniculate body", "lateral ventricle", "temporal gyrus"],
        text: "The fibres fan backward to the cortex around the calcarine sulcus. The lower fibres (Meyer's loop) curve through the temporal lobe and carry the upper visual field, so a temporal lesion gives an upper quadrant defect ('pie in the sky'). The upper fibres pass through the parietal lobe ('pie on the floor'). An occipital infarct of the PCA gives a homonymous hemianopia that spares the macula, because the macular region has a dual blood supply that includes the MCA."
      },
      {
        title: "Reflex side-branch: superior colliculus",
        structures: ["superior colliculus", "brachium of superior colliculus"],
        side: "both",
        context: ["lateral geniculate body", "optic tract", "pineal body"],
        text: "Some optic tract fibres skip the LGB and run through the brachium of the superior colliculus to the superior colliculus (visual orienting reflexes) and the pretectal nuclei (light reflex). Because the light reflex leaves the pathway before the LGB, the pupils still react in cortical blindness."
      },
      {
        title: "Whole pathway",
        structures: ["optic nerve", "optic chiasm", "optic tract", "lateral geniculate body", "occipital lobe"],
        side: "both",
        context: ["eyeball", "pituitary gland"],
        text: "Moving along the pathway: an optic nerve lesion blinds one eye, a chiasm lesion causes bitemporal hemianopia, a tract or LGB lesion causes contralateral homonymous hemianopia, Meyer's loop gives 'pie in the sky', parietal radiation gives 'pie on the floor', and the occipital cortex gives homonymous hemianopia with macular sparing. Every lesion behind the chiasm affects the opposite visual field in both eyes."
      }
    ],
    takeaways: [
      "Only the nasal fibres cross at the chiasm → pituitary adenoma → bitemporal hemianopia.",
      "Any lesion behind the chiasm → contralateral homonymous defect.",
      "Meyer's loop (temporal) → upper quadrant ('pie in the sky'); parietal → lower quadrant.",
      "PCA occipital infarct → homonymous hemianopia with macular sparing."
    ]
  }
];
