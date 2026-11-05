// "What's hurting?" exercise-guidance data.
// Educational content only. Not a diagnosis. Exercises are common, conservative
// physiotherapy / sports-medicine home exercises.
//
// structures / target: lowercase substrings matched against model part names.
// dose: { sets, reps } or { sets, holdSec }, optional restSec. perSide: true means
// do the dose on each side.

export const DISCLAIMER = "For education only. This is not a diagnosis or medical advice. If pain is severe, keeps getting worse, or lasts more than a few weeks, see a qualified health professional. Stop any exercise that makes pain sharp, spreading or much worse, or that causes numbness or tingling.";

export const GLOBAL_RED_FLAGS = [
  "Chest pain or pressure, especially with breathlessness, sweating, nausea, or pain spreading to the arm, jaw, neck or back: call emergency services now.",
  "Loss of bladder or bowel control, trouble passing urine, or numbness around the groin, genitals or buttocks (saddle area): go to the emergency department now.",
  "Sudden weakness, numbness or drooping of the face, arm or leg, slurred speech, or sudden loss of vision: call emergency services (possible stroke).",
  "Sudden, severe 'worst ever' headache, or headache with fever, stiff neck, rash or confusion: emergency.",
  "Back or neck pain with fever, chills or feeling generally unwell, or after a recent infection or injecting drugs.",
  "Unexplained weight loss, a history of cancer, or pain that is constant and does not ease with rest or at night.",
  "Pain after major trauma such as a car accident or a fall from height, or after a minor fall if you are older or have osteoporosis.",
  "Unable to bear weight or use the limb, a visible deformity, or a cold, pale or blue hand or foot.",
  "A hot, red, swollen joint, especially with fever: get seen the same day (possible infection or gout).",
  "Weakness, numbness or pins and needles that is spreading or getting worse, or clumsiness and trouble with balance or walking.",
  "Calf swelling, redness, warmth or tenderness, especially after long travel, surgery or bed rest: get seen urgently (possible blood clot). With breathlessness or chest pain, call emergency services."
];

export const PAIN_REGIONS = [
  // ---------------------------------------------------------------- JAW
  {
    id: "jaw",
    name: "Jaw (TMJ)",
    keywords: ["jaw", "jaws", "tmj", "tmd", "jaw joint", "jaw click", "jaw clicks", "jaw clicking", "jaw popping", "jaw pops", "jaw locking", "jaw locks", "jaw stuck", "clenching", "clench", "grinding teeth", "teeth grinding", "grind my teeth", "bruxism", "chewing", "masseter", "jaw muscle", "jaw ache", "opening mouth", "cheek muscle"],
    structures: ["masseter", "temporalis", "lateral pterygoid", "medial pterygoid", "mandible", "temporal bone", "digastric"],
    causes: [
      { name: "Jaw muscle overload", note: "Clenching or grinding (often during sleep or stress) can tire the chewing muscles and make the jaw and temples ache." },
      { name: "TMJ disc clicking", note: "Clicking or popping is common and often harmless if it is not painful and the jaw does not lock." },
      { name: "Dental or ear problems", note: "Tooth infections, wisdom teeth and ear or sinus problems can feel like jaw pain." }
    ],
    tips: [
      "Rest position: lips together, teeth apart, tongue resting lightly on the roof of your mouth.",
      "Choose softer foods for a week or two; avoid gum, very chewy foods and wide yawns.",
      "Warmth on the cheek muscles for 10 minutes can ease tightness.",
      "If you grind at night, a dentist can check whether a night guard would help."
    ],
    exercises: [
      {
        name: "Jaw rest position",
        type: "mobility",
        target: ["masseter", "temporalis"],
        steps: ["Sit tall and close your lips gently.", "Let your teeth part slightly.", "Rest the tip of your tongue behind your upper front teeth.", "Breathe slowly through your nose and let your jaw go heavy."],
        dose: { sets: 3, holdSec: 30, restSec: 10 },
        cue: "You should feel the cheek muscles soften, not stretch.",
        level: 1
      },
      {
        name: "Masseter self-massage",
        type: "mobility",
        target: ["masseter"],
        steps: ["Find the thick muscle in front of your ear that bulges when you clench.", "Unclench and press gently with two fingertips.", "Make slow small circles, working down toward the jaw angle.", "Do both sides."],
        dose: { sets: 2, holdSec: 60, restSec: 10 },
        cue: "Gentle pressure only; tender is fine, sharp pain is not.",
        level: 1
      },
      {
        name: "Controlled jaw opening",
        type: "mobility",
        target: ["lateral pterygoid", "masseter"],
        steps: ["Place your tongue on the roof of your mouth.", "Keep it there and open your mouth slowly as far as you can without the tongue lifting off.", "Close slowly.", "Watch in a mirror and keep the jaw moving in a straight line."],
        dose: { sets: 2, reps: 10, restSec: 20 },
        cue: "Smooth and straight with no clicking; stop before any click.",
        level: 1
      },
      {
        name: "Resisted jaw opening",
        type: "isometric",
        target: ["digastric", "lateral pterygoid"],
        steps: ["Place your thumb under your chin.", "Try to open your mouth slightly while your thumb gently resists.", "Hold without moving, then relax."],
        dose: { sets: 5, holdSec: 5, restSec: 5 },
        cue: "Light effort, about a third of your strength.",
        level: 2
      },
      {
        name: "Resisted side-to-side",
        type: "isometric",
        target: ["lateral pterygoid", "medial pterygoid"],
        steps: ["Place your fingers on the side of your jaw.", "Gently push your jaw sideways into your fingers without letting it move.", "Hold, relax, then do the other side."],
        dose: { sets: 5, holdSec: 5, restSec: 5 },
        perSide: true,
        cue: "Teeth slightly apart and the jaw stays still.",
        level: 2
      },
      {
        name: "Chin tuck",
        type: "strength",
        target: ["longus colli", "longus capitis"],
        steps: ["Sit or stand tall and look straight ahead.", "Glide your chin straight back, making a gentle double chin.", "Hold for 3 seconds, then relax."],
        dose: { sets: 2, reps: 10, restSec: 30 },
        cue: "Head stays level; this eases the forward-head posture that loads the jaw.",
        level: 2
      }
    ],
    redFlags: [
      "Jaw pain with chest pain, breathlessness, sweating or arm pain: this can be the heart, so call emergency services.",
      "Jaw locked open or closed and you cannot move it.",
      "Facial swelling, fever, a bad taste or a throbbing tooth (possible dental infection).",
      "Over 50 with new headache, scalp tenderness, jaw pain when chewing or vision changes: see a doctor the same day.",
      "Numbness of the face or jaw, or jaw pain after a blow where your teeth no longer meet normally."
    ],
    seeA: "dentist or physiotherapist experienced with TMJ"
  },

  // ---------------------------------------------------------------- HEAD
  {
    id: "head",
    name: "Head (tension-type headache)",
    keywords: ["headache", "headaches", "head ache", "head", "tension headache", "forehead", "temple", "temples", "back of head", "base of skull", "skull", "head pressure", "band around head", "tight band", "migraine", "migraines", "cervicogenic", "screen headache", "eye strain"],
    structures: ["frontalis", "occipitalis", "epicranius", "temporalis", "rectus capitis posterior", "obliquus capitis", "semispinalis capitis", "splenius capitis", "descending part of trapezius", "occipital bone"],
    causes: [
      { name: "Tension-type headache", note: "A dull, pressing band around the head, often linked to stress, poor sleep, long screen time or skipped meals." },
      { name: "Neck-related headache", note: "Stiff upper-neck joints and muscles can refer pain to the back of the head, temples or behind the eye, often on one side." },
      { name: "Migraine", note: "Throbbing pain, often one-sided, with nausea or sensitivity to light and sound. It is managed differently, so talk to a doctor if this sounds familiar." },
      { name: "Medication-overuse headache", note: "Taking painkillers on many days a month can itself keep headaches going." }
    ],
    tips: [
      "Keep regular sleep, meals and drinking water.",
      "Take screen breaks: every 20 minutes, look about 6 metres (20 feet) away for 20 seconds.",
      "Limit painkillers to a few days a week to avoid rebound headaches.",
      "A headache diary (sleep, stress, food, screen time) helps spot triggers."
    ],
    exercises: [
      {
        name: "Slow belly breathing",
        type: "mobility",
        target: ["descending part of trapezius", "frontalis"],
        steps: ["Sit or lie comfortably with one hand on your belly.", "Breathe in through your nose for 4 seconds, letting your belly rise.", "Breathe out slowly for 6 seconds.", "Let your shoulders and forehead soften each breath out."],
        dose: { sets: 1, reps: 10 },
        cue: "Your shoulders stay still and your belly moves.",
        level: 1
      },
      {
        name: "Chin tuck",
        type: "mobility",
        target: ["rectus capitis posterior", "semispinalis capitis"],
        steps: ["Sit tall and look straight ahead.", "Glide your chin straight back, making a double chin.", "Hold for 3 seconds and feel a gentle stretch at the base of the skull.", "Relax forward."],
        dose: { sets: 2, reps: 10, restSec: 30 },
        cue: "Do not tip your head down; slide it straight back.",
        level: 1
      },
      {
        name: "Suboccipital release",
        type: "mobility",
        target: ["rectus capitis posterior", "obliquus capitis", "occipitalis"],
        steps: ["Lie on your back.", "Place two tennis balls in a sock, or your fingertips, under the base of your skull.", "Let your head rest heavily on them.", "Make tiny slow nods 'yes'."],
        dose: { sets: 2, holdSec: 60, restSec: 15 },
        cue: "Gentle pressure that eases; stop if it causes dizziness or tingling.",
        level: 1
      },
      {
        name: "Upper trapezius stretch",
        type: "stretch",
        target: ["descending part of trapezius", "splenius capitis"],
        steps: ["Sit tall and hold the side of the chair with your right hand.", "Tilt your left ear toward your left shoulder.", "Optionally rest your left hand on your head for a little extra stretch.", "Hold, then switch sides."],
        dose: { sets: 3, holdSec: 30, restSec: 10 },
        perSide: true,
        cue: "A stretch along the side of the neck, not pain.",
        level: 1
      },
      {
        name: "Shoulder blade squeeze",
        type: "strength",
        target: ["transverse part of trapezius", "rhomboid"],
        steps: ["Sit tall with your arms relaxed.", "Draw your shoulder blades back and slightly down.", "Hold for 5 seconds, then relax."],
        dose: { sets: 2, reps: 10, restSec: 30 },
        cue: "Do not shrug; the shoulders stay away from the ears.",
        level: 1
      },
      {
        name: "Deep neck flexor hold",
        type: "isometric",
        target: ["longus colli", "longus capitis"],
        steps: ["Lie on your back with your knees bent and head on a thin pillow.", "Gently nod as if saying 'yes', keeping the back of your head on the pillow.", "Hold the nod without lifting your head.", "Relax fully between holds."],
        dose: { sets: 6, holdSec: 10, restSec: 10 },
        cue: "Small movement; the big front neck muscles should stay soft.",
        level: 2
      }
    ],
    redFlags: [
      "Sudden, severe 'thunderclap' headache that peaks within a minute: call emergency services.",
      "Headache with fever, stiff neck, rash, confusion or drowsiness: emergency.",
      "Headache with weakness, numbness, slurred speech, facial droop, loss of vision or double vision: call emergency services.",
      "Headache after a head injury, especially with vomiting or drowsiness.",
      "New headache over age 50, or with jaw pain on chewing, scalp tenderness or vision changes.",
      "Headaches that keep getting worse, wake you, or are worse lying down, coughing or straining, especially with vomiting.",
      "New headache during pregnancy or with cancer or a weakened immune system."
    ],
    seeA: "doctor (or physiotherapist for neck-related headache)"
  },

  // ---------------------------------------------------------------- NECK
  {
    id: "neck",
    name: "Neck",
    keywords: ["neck", "stiff neck", "neck stiff", "crick", "crick in neck", "wry neck", "torticollis", "cervical", "traps", "trap", "upper traps", "trapezius", "text neck", "tech neck", "desk", "posture", "computer", "phone", "whiplash", "slept funny", "slept wrong", "slept on it wrong", "base of neck", "side of neck", "neck and shoulder", "cant turn head", "turning head", "turn my head"],
    structures: ["descending part of trapezius", "levator scapulae", "sternocleidomastoid", "scalenus", "splenius", "semispinalis cervicis", "longissimus cervicis", "longus colli", "cervical vertebra"],
    causes: [
      { name: "Muscle strain / postural overload", note: "Long periods looking at a screen or phone can tire the neck and upper trapezius muscles." },
      { name: "Acute wry neck", note: "Waking with a stuck, painful neck that will not turn one way is common and usually settles within days to a couple of weeks." },
      { name: "Age-related changes", note: "Disc and joint 'wear' shows up on most adult scans and is often not the cause of pain." },
      { name: "Irritated nerve", note: "Pain, tingling or numbness travelling down the arm can come from a nerve in the neck." }
    ],
    tips: [
      "Keep moving gently; a stiff collar or long rest usually slows recovery.",
      "Raise your screen to eye level and bring your phone up rather than looking down.",
      "Change position every 30 minutes.",
      "Warmth for 10 to 15 minutes can ease muscle spasm."
    ],
    exercises: [
      {
        name: "Neck rotation",
        type: "mobility",
        target: ["sternocleidomastoid", "splenius"],
        steps: ["Sit tall with your shoulders relaxed.", "Slowly turn your head to look over one shoulder as far as is comfortable.", "Return to the middle and turn the other way."],
        dose: { sets: 2, reps: 10, restSec: 20 },
        cue: "Move only into mild discomfort and keep the movement smooth.",
        level: 1
      },
      {
        name: "Chin tuck",
        type: "mobility",
        target: ["longus colli", "semispinalis cervicis"],
        steps: ["Sit tall and look straight ahead.", "Glide your chin straight back, making a double chin.", "Hold for 3 seconds, then relax."],
        dose: { sets: 2, reps: 10, restSec: 30 },
        cue: "Eyes stay level; slide back, do not nod down.",
        level: 1
      },
      {
        name: "Upper trapezius stretch",
        type: "stretch",
        target: ["descending part of trapezius", "scalenus"],
        steps: ["Sit and hold the edge of the chair with one hand.", "Tilt the opposite ear toward the opposite shoulder.", "Hold, then switch sides."],
        dose: { sets: 3, holdSec: 30, restSec: 10 },
        perSide: true,
        cue: "Gentle stretch along the side of the neck.",
        level: 1
      },
      {
        name: "Levator scapulae stretch",
        type: "stretch",
        target: ["levator scapulae"],
        steps: ["Sit and hold the edge of the chair with your right hand.", "Turn your head 45 degrees to the left.", "Look down toward your left pocket.", "Hold, then switch sides."],
        dose: { sets: 3, holdSec: 30, restSec: 10 },
        perSide: true,
        cue: "You should feel the stretch at the back and side of the neck toward the shoulder blade.",
        level: 1
      },
      {
        name: "Deep neck flexor hold",
        type: "isometric",
        target: ["longus colli", "longus capitis"],
        steps: ["Lie on your back with your knees bent.", "Gently nod 'yes' while keeping your head on the pillow.", "Hold the nod.", "Relax fully."],
        dose: { sets: 6, holdSec: 10, restSec: 10 },
        cue: "The front neck muscles stay soft; this is a small, quiet movement.",
        level: 2
      },
      {
        name: "Band row",
        type: "strength",
        target: ["transverse part of trapezius", "rhomboid", "levator scapulae"],
        steps: ["Anchor a resistance band at chest height.", "Hold one end in each hand with your arms straight.", "Pull your elbows back, squeezing your shoulder blades together.", "Return slowly."],
        dose: { sets: 3, reps: 12, restSec: 45 },
        cue: "Shoulders stay down and away from your ears.",
        level: 2
      }
    ],
    redFlags: [
      "Neck pain with weakness or numbness in both arms, clumsy hands, or trouble walking or balancing: see a doctor urgently.",
      "Neck pain after a car accident, fall or sports collision, especially with numbness or severe pain: get assessed before moving it a lot.",
      "Neck pain with fever, severe headache, rash or sensitivity to light: emergency.",
      "Dizziness, double vision, trouble speaking or swallowing, or fainting with neck movement: emergency.",
      "Rheumatoid arthritis or Down syndrome with new neck pain or tingling."
    ],
    seeA: "physiotherapist (urgent doctor if arm weakness or balance problems)"
  },

  // ---------------------------------------------------------------- UPPER BACK
  {
    id: "upper-back",
    name: "Upper back / between shoulder blades",
    keywords: ["upper back", "between shoulder blades", "between my shoulder blades", "shoulder blade", "shoulder blades", "scapula", "rhomboid", "rhomboids", "knot in back", "knot", "knots", "thoracic", "hunched", "hunching", "slouch", "slouching", "rounded shoulders", "upper back knot"],
    structures: ["rhomboid", "transverse part of trapezius", "ascending part of trapezius", "levator scapulae", "serratus posterior superior", "semispinalis thoracis", "spinalis thoracis", "scapula", "infraspinatus"],
    causes: [
      { name: "Postural muscle overload", note: "Long hours sitting or looking down can leave the muscles between the shoulder blades tired and achy ('knots')." },
      { name: "Stiff thoracic joints", note: "The upper back can stiffen with little movement, causing a dull ache or sharp catch when you twist or breathe deeply." },
      { name: "Referred from the neck", note: "Neck joints and nerves can refer pain to the area around the shoulder blade." }
    ],
    tips: [
      "Move often: stand, reach and twist every 30 to 60 minutes.",
      "Strengthening the upper back usually helps more than stretching alone.",
      "Warmth can ease tight muscles.",
      "Set up your screen and chair so you sit tall without effort."
    ],
    exercises: [
      {
        name: "Seated thoracic extension",
        type: "mobility",
        target: ["spinalis thoracis", "semispinalis thoracis"],
        steps: ["Sit in a chair with a backrest that reaches mid-back.", "Place your hands behind your head and keep your elbows in.", "Gently lean back over the chair, lifting your chest.", "Return to upright."],
        dose: { sets: 2, reps: 10, restSec: 20 },
        cue: "Movement comes from the upper back, not by arching the lower back.",
        level: 1
      },
      {
        name: "Open book",
        type: "mobility",
        target: ["rhomboid", "spinalis thoracis"],
        steps: ["Lie on your side with your knees bent and arms straight in front.", "Keep your knees together and lift the top arm up and over to the other side.", "Follow your hand with your eyes.", "Return slowly. Switch sides after the set."],
        dose: { sets: 2, reps: 8, restSec: 20 },
        perSide: true,
        cue: "Knees stay stacked; feel the rotation through your upper back.",
        level: 1
      },
      {
        name: "Thread the needle",
        type: "mobility",
        target: ["rhomboid", "transverse part of trapezius"],
        steps: ["Start on hands and knees.", "Slide one arm under your body along the floor, letting your shoulder and head lower.", "Reverse and reach that arm up toward the ceiling.", "Switch sides after the set."],
        dose: { sets: 2, reps: 8, restSec: 20 },
        perSide: true,
        cue: "Hips stay over your knees.",
        level: 1
      },
      {
        name: "Shoulder blade squeeze",
        type: "strength",
        target: ["rhomboid", "transverse part of trapezius"],
        steps: ["Sit or stand tall.", "Draw your shoulder blades back and down.", "Hold for 5 seconds, then relax."],
        dose: { sets: 2, reps: 10, restSec: 30 },
        cue: "No shrugging; the neck stays relaxed.",
        level: 1
      },
      {
        name: "Band pull-apart",
        type: "strength",
        target: ["rhomboid", "transverse part of trapezius", "infraspinatus"],
        steps: ["Hold a light band in front at shoulder height, arms straight.", "Pull the band apart until it touches your chest.", "Return slowly."],
        dose: { sets: 3, reps: 12, restSec: 45 },
        cue: "Feel the muscles between your shoulder blades working.",
        level: 2
      },
      {
        name: "Prone Y and T raise",
        type: "strength",
        target: ["ascending part of trapezius", "transverse part of trapezius", "rhomboid"],
        steps: ["Lie face down with your forehead on a towel.", "With thumbs up, lift both arms a few centimetres in a 'Y' shape and lower.", "Then lift them straight out to the sides in a 'T' and lower.", "That pair is one rep."],
        dose: { sets: 3, reps: 8, restSec: 60 },
        cue: "Small lift, shoulders drawn down, neck long.",
        level: 3
      }
    ],
    redFlags: [
      "Pain between the shoulder blades with chest pain, breathlessness, sweating or nausea: call emergency services.",
      "Sudden severe tearing or ripping pain in the back: emergency.",
      "Upper back pain with fever, cough or breathlessness.",
      "Pain that does not change with movement or position, or night pain with weight loss.",
      "Upper back pain after a minor fall or lift if you have osteoporosis or take long-term steroids."
    ],
    seeA: "physiotherapist"
  },

  // ---------------------------------------------------------------- SHOULDER
  {
    id: "shoulder",
    name: "Shoulder (front / rotator cuff)",
    keywords: ["shoulder", "shoulders", "rotator cuff", "rotator", "cuff", "impingement", "shoulder impingement", "frozen shoulder", "front of shoulder", "front shoulder", "deltoid", "delt", "delts", "supraspinatus", "overhead", "reaching overhead", "lifting arm", "raise my arm", "painful arc", "sleeping on shoulder", "throwing", "swimmers shoulder", "bench press", "biceps tendon", "shoulder bursitis"],
    structures: ["supraspinatus", "infraspinatus", "teres minor", "subscapularis", "deltoid", "long head of biceps brachii", "humerus", "scapula"],
    causes: [
      { name: "Rotator cuff related pain", note: "Irritation of the cuff tendons, often from more lifting or overhead work than usual, causes pain raising the arm or lying on that side." },
      { name: "Bursitis", note: "The fluid sac above the cuff can become irritated alongside tendon problems." },
      { name: "Frozen shoulder", note: "Gradual pain then stiffness in every direction, most common at ages 40 to 60 and with diabetes; it improves slowly over months." },
      { name: "Referred from the neck", note: "Neck problems can cause pain over the shoulder, especially with tingling down the arm." }
    ],
    tips: [
      "Keep the shoulder moving within comfort; complete rest tends to stiffen it.",
      "Ease off repeated or heavy overhead lifting for a few weeks rather than stopping all use.",
      "Mild pain during exercise (up to about 3 out of 10) is OK if it settles by the next day.",
      "At night, avoid lying on the sore side; hugging a pillow can help."
    ],
    exercises: [
      {
        name: "Pendulum",
        type: "mobility",
        target: ["supraspinatus", "deltoid"],
        steps: ["Lean forward with your good hand on a table.", "Let the sore arm hang down loosely.", "Gently sway your body so the arm swings in small circles.", "Change direction halfway."],
        dose: { sets: 2, reps: 10, restSec: 20 },
        cue: "The arm is relaxed; your body creates the movement.",
        level: 1
      },
      {
        name: "Table slide",
        type: "mobility",
        target: ["deltoid", "supraspinatus"],
        steps: ["Sit beside a table with your hand on a towel.", "Slide your hand forward, letting your chest lean toward the table.", "Slide back to the start."],
        dose: { sets: 2, reps: 10, restSec: 20 },
        cue: "Go to a gentle stretch, not into pain.",
        level: 1
      },
      {
        name: "Isometric external rotation",
        type: "isometric",
        target: ["infraspinatus", "teres minor"],
        steps: ["Stand side-on to a wall with your elbow bent to 90 degrees and tucked at your side.", "Press the back of your wrist into the wall (or a folded towel).", "Hold without moving."],
        dose: { sets: 5, holdSec: 20, restSec: 30 },
        cue: "Moderate effort that you can hold steadily; this often eases pain.",
        level: 1
      },
      {
        name: "Side-lying external rotation",
        type: "strength",
        target: ["infraspinatus", "teres minor"],
        steps: ["Lie on your good side with a rolled towel between your elbow and ribs.", "Bend the top elbow to 90 degrees, forearm across your belly.", "Rotate your forearm up toward the ceiling, keeping the elbow on the towel.", "Lower slowly. Add a light weight when easy."],
        dose: { sets: 3, reps: 12, restSec: 45 },
        cue: "The elbow stays glued to your side.",
        level: 2
      },
      {
        name: "Scaption raise",
        type: "strength",
        target: ["supraspinatus", "deltoid"],
        steps: ["Stand with your arms by your sides, thumbs up.", "Raise your arms forward at about 30 degrees out from your body to shoulder height.", "Lower slowly."],
        dose: { sets: 3, reps: 10, restSec: 45 },
        cue: "Shoulders stay down; stop below the height that hurts.",
        level: 2
      },
      {
        name: "Wall push-up plus",
        type: "strength",
        target: ["serratus anterior", "pectoralis major"],
        steps: ["Stand facing a wall with your hands at shoulder height.", "Lower your chest toward the wall.", "Push back to straight arms, then push a little further so the shoulder blades spread apart."],
        dose: { sets: 3, reps: 10, restSec: 45 },
        cue: "Feel the muscles around your ribs under the armpit working at the end.",
        level: 3
      }
    ],
    redFlags: [
      "Shoulder or arm pain (especially the left) with chest pain, breathlessness, sweating or nausea: call emergency services.",
      "After a fall: deformity, inability to lift the arm at all, or a sudden loss of strength (possible dislocation, fracture or tendon tear).",
      "Hot, red, swollen shoulder or fever.",
      "Shoulder-tip pain with abdominal pain or breathlessness: this can come from the abdomen or lungs.",
      "Spreading numbness, tingling or weakness down the arm."
    ],
    seeA: "physiotherapist or sports medicine doctor"
  },

  // ---------------------------------------------------------------- CHEST
  {
    id: "chest",
    name: "Chest (muscular)",
    keywords: ["chest", "chest hurts", "chest pain", "chest tight", "tight chest", "pec", "pecs", "pectoral", "pectorals", "chest muscle", "chest wall", "pulled pec", "pec strain", "chest strain", "breastbone", "breast bone", "sternum", "costochondritis", "chest press", "hurts to breathe", "breathing", "deep breath"],
    structures: ["pectoralis major", "pectoralis minor", "intercostal", "body of sternum", "manubrium", "costal cartilage", "serratus anterior", "subclavius"],
    causes: [
      { name: "Heart, lung or blood vessel causes (rule out first)", note: "Chest pain can come from the heart, lungs or major blood vessels. If you are not sure, treat it as an emergency. Muscle pain is a diagnosis to reach only after these are excluded." },
      { name: "Chest muscle strain", note: "Pushing, lifting or a sudden reach can strain the pec muscles; it usually hurts when you press on the spot or use the muscle." },
      { name: "Costochondritis", note: "Irritation where the ribs join the breastbone, tender to press and often worse with deep breaths." },
      { name: "Rib or intercostal strain", note: "Coughing or twisting can strain the small muscles between the ribs." }
    ],
    tips: [
      "If in any doubt, get checked first. Do not drive yourself if you think it could be your heart.",
      "Pain that changes when you press on it can still be cardiac; only a clinician can rule this out.",
      "Only start these exercises once heart and lung causes have been excluded or the strain is clearly from a known muscle injury.",
      "Return to pushing exercises such as bench press gradually, starting light."
    ],
    exercises: [
      {
        name: "Belly breathing",
        type: "mobility",
        target: ["diaphragm", "intercostal"],
        steps: ["Sit or lie comfortably with one hand on your belly.", "Breathe in slowly through your nose, letting your belly and lower ribs expand.", "Breathe out slowly through pursed lips."],
        dose: { sets: 1, reps: 10 },
        cue: "Easy, comfortable breaths; stop if breathing hurts sharply.",
        level: 1
      },
      {
        name: "Shoulder blade squeeze",
        type: "strength",
        target: ["rhomboid", "transverse part of trapezius"],
        steps: ["Sit tall.", "Draw your shoulder blades back and down, opening the chest.", "Hold for 5 seconds, then relax."],
        dose: { sets: 2, reps: 10, restSec: 30 },
        cue: "Gentle opening across the front of the chest.",
        level: 1
      },
      {
        name: "Doorway pec stretch",
        type: "stretch",
        target: ["pectoralis major", "pectoralis minor"],
        steps: ["Stand in a doorway with your forearm on the frame, elbow at shoulder height.", "Step forward slowly with the same-side foot until you feel a stretch across the chest.", "Hold, then switch sides."],
        dose: { sets: 3, holdSec: 30, restSec: 10 },
        perSide: true,
        cue: "A stretch across the chest and front of the shoulder, never a sharp pain.",
        level: 1
      },
      {
        name: "Towel-roll chest opener",
        type: "mobility",
        target: ["pectoralis major", "intercostal"],
        steps: ["Lie on your back with a rolled towel along your spine.", "Let your arms rest out to the sides, palms up.", "Breathe slowly and relax."],
        dose: { sets: 2, holdSec: 60, restSec: 15 },
        cue: "Let the chest open with gravity.",
        level: 1
      },
      {
        name: "Wall push-up",
        type: "strength",
        target: ["pectoralis major", "serratus anterior"],
        steps: ["Stand facing a wall with your hands at shoulder height.", "Lower your chest toward the wall with control.", "Push back to straight arms."],
        dose: { sets: 3, reps: 10, restSec: 45 },
        cue: "Body in a straight line; pain should stay mild.",
        level: 2
      },
      {
        name: "Incline push-up",
        type: "strength",
        target: ["pectoralis major", "serratus anterior"],
        steps: ["Place your hands on a sturdy table or bench.", "Walk your feet back so your body is straight.", "Lower your chest to the edge and push back up."],
        dose: { sets: 3, reps: 8, restSec: 60 },
        cue: "Progress only when wall push-ups are pain-free.",
        level: 3
      }
    ],
    redFlags: [
      "Chest pain, pressure or tightness with breathlessness, sweating, nausea, or pain spreading to the arm, jaw, neck or back: call emergency services now.",
      "Sudden sharp chest pain with breathlessness or coughing up blood, especially after surgery, long travel or with a swollen calf (possible blood clot in the lung): emergency.",
      "Chest pain that comes on with exertion and eases with rest: see a doctor promptly.",
      "Chest pain with a racing or irregular heartbeat, fainting or dizziness.",
      "Chest pain with fever and cough, or after a blow or fall with painful or difficult breathing.",
      "Sudden severe tearing pain into the back: emergency."
    ],
    seeA: "emergency services or doctor first; physiotherapist once heart and lung causes are ruled out"
  },

  // ---------------------------------------------------------------- ELBOW OUTER
  {
    id: "elbow-outer",
    name: "Elbow, outer (tennis elbow)",
    keywords: ["tennis elbow", "elbow", "elbows", "outer elbow", "outside elbow", "outside of elbow", "lateral elbow", "lateral epicondylitis", "lateral epicondyle", "epicondylitis", "elbow tendonitis", "elbow tendinitis", "forearm", "forearms", "gripping", "grip", "mouse elbow", "lifting kettle", "turning door handle", "screwdriver"],
    structures: ["extensor carpi radialis brevis", "extensor carpi radialis longus", "extensor carpi ulnaris", "supinator", "brachioradialis", "anconeus", "humerus", "radius"],
    causes: [
      { name: "Lateral elbow tendinopathy", note: "Overload of the wrist-extensor tendons from gripping, lifting, typing or racket sports. It is common at ages 35 to 55 and most people improve within a year." },
      { name: "Nerve irritation", note: "A nerve near the outer forearm, or the neck, can occasionally cause similar pain, often with aching further down the forearm." },
      { name: "Elbow joint irritation", note: "Less commonly the joint itself is the source, especially if it clicks, catches or swells." }
    ],
    tips: [
      "Lift with your palm facing up and keep objects close to your body.",
      "Use a lighter grip, thicker handles and frequent breaks.",
      "Keep using the arm; tendons recover with gradual loading over 6 to 12 weeks.",
      "A forearm strap just below the elbow may ease pain during activity."
    ],
    exercises: [
      {
        name: "Wrist extensor stretch",
        type: "stretch",
        target: ["extensor carpi radialis brevis", "extensor carpi radialis longus"],
        steps: ["Hold your arm out straight, palm down.", "Use the other hand to gently bend the wrist down.", "Hold, then relax."],
        dose: { sets: 3, holdSec: 30, restSec: 10 },
        cue: "A stretch along the top of the forearm, not sharp elbow pain.",
        level: 1
      },
      {
        name: "Isometric wrist extension",
        type: "isometric",
        target: ["extensor carpi radialis brevis", "extensor carpi radialis longus"],
        steps: ["Rest your forearm on a table, palm down, wrist over the edge.", "Place your other hand on the back of the hand.", "Try to lift the hand up while the other hand stops it moving.", "Hold steadily."],
        dose: { sets: 5, holdSec: 30, restSec: 30 },
        cue: "Moderate effort; pain should stay at 3 out of 10 or less.",
        level: 1
      },
      {
        name: "Grip squeeze",
        type: "strength",
        target: ["extensor carpi radialis brevis", "flexor digitorum superficialis"],
        steps: ["Hold a soft ball or rolled towel.", "Squeeze firmly for 3 seconds.", "Release slowly."],
        dose: { sets: 3, reps: 10, restSec: 30 },
        cue: "Keep the wrist slightly extended (bent back) as you squeeze.",
        level: 1
      },
      {
        name: "Slow wrist extension with weight",
        type: "strength",
        target: ["extensor carpi radialis brevis", "extensor carpi radialis longus"],
        steps: ["Rest your forearm on a table, palm down, wrist over the edge, holding a light weight (0.5 to 2 kg or a water bottle).", "Use your other hand to help lift the wrist up.", "Lower slowly over 3 to 4 seconds on your own."],
        dose: { sets: 3, reps: 15, restSec: 60 },
        cue: "The slow lowering is the important part.",
        level: 2
      },
      {
        name: "Forearm rotation with hammer",
        type: "strength",
        target: ["supinator", "brachioradialis"],
        steps: ["Rest your forearm on a table, holding a hammer or bottle upright.", "Slowly rotate your palm down, then back up to the middle.", "Then rotate palm up and back."],
        dose: { sets: 3, reps: 10, restSec: 45 },
        cue: "Hold the handle lower down to make it easier.",
        level: 2
      }
    ],
    redFlags: [
      "Deformity, major swelling or inability to straighten the elbow after a fall.",
      "Hot, red, swollen elbow or fever.",
      "Numbness, tingling or weakness in the hand.",
      "Elbow locking or catching."
    ],
    seeA: "physiotherapist or sports medicine doctor"
  },

  // ---------------------------------------------------------------- ELBOW INNER
  {
    id: "elbow-inner",
    name: "Elbow, inner (golfer's elbow)",
    keywords: ["golfers elbow", "golfer elbow", "inner elbow", "inside elbow", "inside of elbow", "inside of my elbow", "medial elbow", "medial epicondylitis", "medial epicondyle", "funny bone", "climbers elbow", "throwing elbow", "pitchers elbow", "ulnar nerve", "pinky tingling", "little finger tingling", "ring finger numb"],
    structures: ["flexor carpi radialis", "flexor carpi ulnaris", "pronator teres", "palmaris longus", "flexor digitorum superficialis", "humerus", "ulna"],
    causes: [
      { name: "Medial elbow tendinopathy", note: "Overload of the wrist-flexor tendons from gripping, throwing, climbing, golf or lifting." },
      { name: "Ulnar nerve irritation", note: "Tingling in the ring and little fingers can come from the 'funny bone' nerve, often from leaning on the elbow or keeping it bent for long." },
      { name: "Ligament strain", note: "Repeated throwing can strain the ligament on the inside of the elbow." }
    ],
    tips: [
      "Avoid leaning on the inside of your elbow.",
      "If fingers tingle, avoid keeping the elbow fully bent for long (phone calls, sleeping with the arm bent).",
      "Ease grip-heavy and throwing activities, then build back up gradually.",
      "Mild discomfort during exercise is fine if it settles by the next day."
    ],
    exercises: [
      {
        name: "Wrist flexor stretch",
        type: "stretch",
        target: ["flexor carpi radialis", "flexor carpi ulnaris", "palmaris longus"],
        steps: ["Hold your arm out straight, palm up.", "Use the other hand to gently bend the wrist and fingers back.", "Hold, then relax."],
        dose: { sets: 3, holdSec: 30, restSec: 10 },
        cue: "Stretch along the inner forearm.",
        level: 1
      },
      {
        name: "Isometric wrist flexion",
        type: "isometric",
        target: ["flexor carpi radialis", "flexor carpi ulnaris"],
        steps: ["Rest your forearm on a table, palm up, wrist over the edge.", "Place your other hand on your palm.", "Try to curl the wrist up while the other hand stops it moving.", "Hold steadily."],
        dose: { sets: 5, holdSec: 30, restSec: 30 },
        cue: "Moderate effort; pain should stay mild.",
        level: 1
      },
      {
        name: "Grip squeeze",
        type: "strength",
        target: ["flexor digitorum superficialis", "flexor carpi ulnaris"],
        steps: ["Hold a soft ball or rolled towel.", "Squeeze firmly for 3 seconds.", "Release slowly."],
        dose: { sets: 3, reps: 10, restSec: 30 },
        cue: "Firm but comfortable.",
        level: 1
      },
      {
        name: "Ulnar nerve glide",
        type: "nerve glide",
        target: ["flexor carpi ulnaris"],
        steps: ["Stand with your arm out to the side, palm facing forward.", "Bend your elbow and bring your palm toward your ear, fingers pointing back, as if making a mask with an 'OK' sign.", "Return to the start.", "Move only until you feel a mild pull or tingle, then back off."],
        dose: { sets: 2, reps: 8, restSec: 20 },
        cue: "Gentle and rhythmic; tingling should fade within seconds.",
        level: 2
      },
      {
        name: "Slow wrist flexion with weight",
        type: "strength",
        target: ["flexor carpi radialis", "flexor carpi ulnaris"],
        steps: ["Rest your forearm on a table, palm up, wrist over the edge, holding a light weight.", "Use your other hand to help curl the wrist up.", "Lower slowly over 3 to 4 seconds on your own."],
        dose: { sets: 3, reps: 15, restSec: 60 },
        cue: "Slow, controlled lowering.",
        level: 2
      },
      {
        name: "Forearm rotation with hammer",
        type: "strength",
        target: ["pronator teres", "supinator"],
        steps: ["Rest your forearm on a table, holding a hammer upright.", "Slowly rotate your palm down, then back to the middle.", "Then rotate palm up and back."],
        dose: { sets: 3, reps: 10, restSec: 45 },
        cue: "Hold lower on the handle to make it easier.",
        level: 2
      }
    ],
    redFlags: [
      "Weakness or wasting of the hand muscles, or dropping things.",
      "Constant numbness in the ring and little fingers.",
      "A pop with sudden pain on the inside of the elbow while throwing.",
      "Deformity or major swelling after a fall, or a hot, red, swollen elbow."
    ],
    seeA: "physiotherapist or sports medicine doctor"
  },

  // ---------------------------------------------------------------- WRIST & HAND
  {
    id: "wrist-hand",
    name: "Wrist & hand",
    keywords: ["wrist", "wrists", "hand", "hands", "carpal tunnel", "carpal", "numb fingers", "numb hand", "hand numb", "tingling fingers", "fingers tingling", "pins and needles", "thumb", "thumbs", "texting thumb", "de quervain", "de quervains", "typing", "keyboard", "mouse", "gaming", "texting", "finger", "fingers", "knuckle", "knuckles", "rsi", "repetitive strain", "trigger finger", "palm", "wrist sprain", "sprained wrist"],
    structures: ["flexor retinaculum of wrist", "flexor digitorum superficialis", "flexor digitorum profundus", "flexor pollicis longus", "abductor pollicis longus", "extensor pollicis brevis", "opponens pollicis", "lumbricals of hand", "scaphoid", "lunate", "radius", "ulna", "first metacarpal bone"],
    causes: [
      { name: "Overuse of forearm tendons", note: "Long spells of typing, mouse use, gaming or phone use can irritate the tendons that move the wrist and fingers." },
      { name: "Carpal tunnel-type symptoms", note: "Tingling or numbness in the thumb, index and middle fingers, often worse at night, can come from pressure on the median nerve at the wrist." },
      { name: "Thumb-side tendon irritation (De Quervain's)", note: "Pain on the thumb side of the wrist with gripping or texting; common in new parents." },
      { name: "Base-of-thumb arthritis", note: "Aching at the base of the thumb with pinching and opening jars, more common after 50." }
    ],
    tips: [
      "Keep your wrist straight when typing; lower the keyboard and keep it flat.",
      "Take micro-breaks every 20 to 30 minutes to shake out and stretch your hands.",
      "For night tingling, a wrist splint that keeps the wrist straight at night often helps.",
      "Swap thumbs or use voice input to reduce texting load."
    ],
    exercises: [
      {
        name: "Wrist bends and circles",
        type: "mobility",
        target: ["flexor carpi radialis", "extensor carpi radialis brevis"],
        steps: ["Rest your forearm on a table with the hand over the edge.", "Slowly bend the wrist up and down.", "Then make slow circles both ways."],
        dose: { sets: 2, reps: 10, restSec: 20 },
        cue: "Slow and easy, through a comfortable range.",
        level: 1
      },
      {
        name: "Tendon glides",
        type: "mobility",
        target: ["flexor digitorum superficialis", "flexor digitorum profundus"],
        steps: ["Start with your fingers straight.", "Make a hook fist (bend only the top two finger joints).", "Make a full fist, then a flat 'tabletop' hand.", "Finish with a straight fist (fingertips to the base of the palm) and return to straight."],
        dose: { sets: 2, reps: 5, restSec: 20 },
        cue: "Hold each position for about 3 seconds.",
        level: 1
      },
      {
        name: "Prayer stretch",
        type: "stretch",
        target: ["flexor carpi radialis", "palmaris longus", "flexor retinaculum of wrist"],
        steps: ["Press your palms together in front of your chest.", "Slowly lower your hands toward your waist, keeping the palms together.", "Hold when you feel a stretch."],
        dose: { sets: 3, holdSec: 20, restSec: 10 },
        cue: "Gentle stretch in the wrists and forearms; ease off if tingling starts.",
        level: 1
      },
      {
        name: "Median nerve glide",
        type: "nerve glide",
        target: ["flexor retinaculum of wrist", "flexor digitorum superficialis"],
        steps: ["Stand with your arm out to the side at shoulder height, elbow bent and palm facing up.", "Slowly straighten the elbow while bending the wrist back.", "Return to the start.", "Stop at a mild pull or tingle."],
        dose: { sets: 2, reps: 8, restSec: 20 },
        cue: "A gentle sliding movement, never a strong stretch; tingling should settle within seconds.",
        level: 2
      },
      {
        name: "Putty or ball squeeze",
        type: "strength",
        target: ["flexor digitorum superficialis", "lumbricals of hand", "opponens pollicis"],
        steps: ["Hold a soft ball or putty.", "Squeeze with the whole hand for 3 seconds.", "Then pinch it between your thumb and each fingertip."],
        dose: { sets: 3, reps: 10, restSec: 30 },
        cue: "Comfortable effort; wrist stays straight.",
        level: 2
      },
      {
        name: "Wrist curls with light weight",
        type: "strength",
        target: ["flexor carpi radialis", "extensor carpi radialis brevis"],
        steps: ["Rest your forearm on a table with your hand over the edge, holding a light weight.", "Palm up: curl the wrist up and lower slowly.", "Turn palm down and repeat for the other side of the forearm."],
        dose: { sets: 3, reps: 12, restSec: 45 },
        cue: "Slow, controlled movement.",
        level: 2
      }
    ],
    redFlags: [
      "After a fall on an outstretched hand, pain at the base of the thumb (in the hollow on the thumb side of the wrist): get an X-ray, as scaphoid fractures are easily missed.",
      "Constant numbness, weakness, dropping things, or wasting of the muscle at the base of the thumb.",
      "A hot, red, swollen finger or hand, especially after a cut, bite or splinter: get seen the same day.",
      "Sudden numbness or weakness of the hand with facial droop or speech changes: call emergency services.",
      "Deformity or inability to move a finger after injury."
    ],
    seeA: "physiotherapist or hand therapist (doctor if numbness is constant)"
  },

  // ---------------------------------------------------------------- MID BACK / RIB
  {
    id: "mid-back-rib",
    name: "Mid back / ribs",
    keywords: ["mid back", "middle back", "middle of back", "middle of my back", "rib", "ribs", "rib cage", "side of ribs", "side ribs", "intercostal", "pulled rib", "rib out", "rib out of place", "pulled muscle in ribs", "twisting", "cough", "coughing", "thoracic spine", "lat", "lats", "latissimus", "flank", "under shoulder blade", "under my shoulder blade"],
    structures: ["intercostal", "rib", "thoracic vertebra", "iliocostalis thoracis", "longissimus thoracis", "latissimus dorsi", "serratus anterior", "serratus posterior inferior", "levatores costarum", "thoracic rotator"],
    causes: [
      { name: "Intercostal muscle strain", note: "Twisting, lifting, reaching or heavy coughing can strain the muscles between the ribs, making breathing or turning painful." },
      { name: "Rib or spinal joint irritation", note: "A rib joint near the spine can become irritated and stiff; it is not truly 'out of place' and usually settles with movement." },
      { name: "Rib injury", note: "A fall, blow or severe coughing (especially with osteoporosis) can bruise or crack a rib." },
      { name: "Organ or nerve causes", note: "Kidney problems can cause flank pain, and shingles can cause a burning band of pain before the rash appears." }
    ],
    tips: [
      "Keep taking some slow deep breaths each hour to keep the lungs clear.",
      "Hug a pillow against the sore side when you cough or sneeze.",
      "Gentle twisting and reaching help; avoid heavy twisting lifts for a week or two.",
      "Warmth can ease muscle spasm."
    ],
    exercises: [
      {
        name: "Rib-expansion breathing",
        type: "mobility",
        target: ["intercostal", "diaphragm"],
        steps: ["Sit tall with your hands on the sides of your lower ribs.", "Breathe in slowly, pushing your ribs out into your hands.", "Breathe out slowly and let the ribs fall in."],
        dose: { sets: 2, reps: 10, restSec: 20 },
        cue: "Breathe into the comfortable range; no forced deep breaths.",
        level: 1
      },
      {
        name: "Seated rotation",
        type: "mobility",
        target: ["thoracic rotator", "external oblique"],
        steps: ["Sit on a chair with your arms crossed over your chest.", "Keep your hips facing forward and turn your upper body to one side.", "Return to the middle and turn to the other side."],
        dose: { sets: 2, reps: 10, restSec: 20 },
        cue: "Turn from the mid back and keep the movement smooth.",
        level: 1
      },
      {
        name: "Cat–cow",
        type: "mobility",
        target: ["spinalis thoracis", "longissimus thoracis"],
        steps: ["Start on hands and knees, hands under shoulders and knees under hips.", "Breathe out and round your back up toward the ceiling.", "Breathe in and let your chest sink and look slightly forward."],
        dose: { sets: 2, reps: 10, restSec: 20 },
        cue: "Move one segment at a time, slowly.",
        level: 1
      },
      {
        name: "Side-bend reach",
        type: "stretch",
        target: ["latissimus dorsi", "intercostal", "external oblique"],
        steps: ["Stand with your feet hip-width apart.", "Reach one arm overhead and lean gently to the opposite side.", "Hold, then switch sides."],
        dose: { sets: 3, holdSec: 20, restSec: 10 },
        perSide: true,
        cue: "Stretch along the side of the ribs; keep your hips still.",
        level: 1
      },
      {
        name: "Open book",
        type: "mobility",
        target: ["thoracic rotator", "pectoralis major"],
        steps: ["Lie on your side, knees bent, arms straight in front.", "Lift the top arm up and over to the other side, following it with your eyes.", "Return slowly. Switch sides after the set."],
        dose: { sets: 2, reps: 8, restSec: 20 },
        perSide: true,
        cue: "Knees stay together.",
        level: 2
      },
      {
        name: "Band row",
        type: "strength",
        target: ["latissimus dorsi", "rhomboid"],
        steps: ["Anchor a band at chest height.", "Pull your elbows back past your ribs, squeezing your shoulder blades.", "Return slowly."],
        dose: { sets: 3, reps: 12, restSec: 45 },
        cue: "Tall posture throughout.",
        level: 2
      }
    ],
    redFlags: [
      "Rib or mid-back pain with breathlessness, chest pain or coughing up blood: emergency.",
      "Pain after a fall or blow with painful breathing (possible rib fracture), especially if breathless: get seen urgently.",
      "Flank pain with fever, painful urination or blood in the urine (possible kidney infection or stone).",
      "A burning, one-sided band of pain, followed by a rash (possible shingles): see a doctor early.",
      "Constant night pain, weight loss, or a history of cancer or osteoporosis."
    ],
    seeA: "physiotherapist (doctor if after a fall or with breathing problems)"
  },

  // ---------------------------------------------------------------- ABDOMEN / CORE
  {
    id: "abdomen-core",
    name: "Abdomen / core strain",
    keywords: ["abs", "ab", "abdomen", "abdominal", "abdominals", "stomach", "tummy", "belly", "core", "six pack", "oblique", "obliques", "side stitch", "stitch", "pulled ab", "ab strain", "abdominal strain", "lower stomach", "lower abdomen", "belly button", "hernia", "waist", "crunches", "sit ups", "situps"],
    structures: ["rectus abdominis", "external oblique", "internal oblique", "transversus abdominis", "linea alba", "pyramidalis", "inguinal ligament"],
    causes: [
      { name: "Abdominal muscle strain", note: "A sudden twist, heavy lifting, sit-ups or hard coughing can strain the abs. It usually hurts when you tense them, sit up or cough, and eases at rest." },
      { name: "Side stitch", note: "A sharp pain under the ribs during running or exercise that fades when you stop." },
      { name: "Hernia", note: "A soft bulge at the groin or belly button, more noticeable when coughing or standing. It needs a doctor's review." },
      { name: "Internal organ causes", note: "Pain from the appendix, gallbladder, kidneys, bowel or reproductive organs is often not linked to movement and needs medical assessment." }
    ],
    tips: [
      "Muscle strains are usually linked to movement; pain that is constant or unrelated to movement should be checked by a doctor.",
      "Avoid sit-ups, heavy lifting and twisting sports until it settles.",
      "Hold a pillow against your belly when you cough or sneeze.",
      "Return to sport gradually once everyday movements are pain-free."
    ],
    exercises: [
      {
        name: "Belly breathing",
        type: "mobility",
        target: ["diaphragm", "transversus abdominis"],
        steps: ["Lie on your back with your knees bent.", "Breathe in through your nose, letting your belly rise.", "Breathe out slowly, letting your belly fall."],
        dose: { sets: 1, reps: 10 },
        cue: "Relaxed and comfortable.",
        level: 1
      },
      {
        name: "Gentle core activation",
        type: "isometric",
        target: ["transversus abdominis", "internal oblique"],
        steps: ["Lie on your back with your knees bent.", "Breathe out and gently draw your lower belly in toward your spine.", "Hold while breathing normally, then relax."],
        dose: { sets: 8, holdSec: 10, restSec: 10 },
        cue: "About 30 percent effort; your back stays still.",
        level: 1
      },
      {
        name: "Pelvic tilt",
        type: "mobility",
        target: ["rectus abdominis", "transversus abdominis"],
        steps: ["Lie on your back with your knees bent.", "Gently flatten your lower back into the floor by tilting your pelvis.", "Relax back to neutral."],
        dose: { sets: 2, reps: 10, restSec: 20 },
        cue: "Small, slow movement.",
        level: 1
      },
      {
        name: "Dead bug",
        type: "strength",
        target: ["transversus abdominis", "rectus abdominis", "external oblique"],
        steps: ["Lie on your back, arms pointing to the ceiling, hips and knees at 90 degrees.", "Keep your lower back gently pressed down.", "Slowly lower one arm overhead and the opposite leg toward the floor.", "Return and switch sides."],
        dose: { sets: 3, reps: 8, restSec: 45 },
        perSide: true,
        cue: "Only go as far as you can keep your back still.",
        level: 2
      },
      {
        name: "Plank from knees",
        type: "isometric",
        target: ["rectus abdominis", "transversus abdominis"],
        steps: ["Rest on your forearms and knees.", "Lift your hips so your body is straight from knees to shoulders.", "Hold, breathing steadily."],
        dose: { sets: 3, holdSec: 20, restSec: 30 },
        cue: "No sagging or arching; stop if the strain hurts.",
        level: 2
      },
      {
        name: "Side plank from knees",
        type: "isometric",
        target: ["external oblique", "internal oblique", "quadratus lumborum"],
        steps: ["Lie on your side, propped on your forearm, knees bent.", "Lift your hips so your body is straight from knees to head.", "Hold, then switch sides."],
        dose: { sets: 3, holdSec: 20, restSec: 30 },
        perSide: true,
        cue: "Elbow under shoulder, hips pushed forward.",
        level: 3
      }
    ],
    redFlags: [
      "Severe or worsening abdominal pain, especially starting near the belly button and moving to the lower right, with fever, vomiting or pain when walking or coughing (possible appendicitis): get seen urgently.",
      "A hernia bulge that becomes painful, firm or tender, cannot be pushed back, or comes with vomiting: emergency.",
      "Vomiting blood, black tarry stools, or blood in the stool.",
      "A rigid or swollen belly, or being unable to pass stool or wind.",
      "Abdominal pain if you could be pregnant, or with abnormal vaginal bleeding: emergency.",
      "Yellow skin or eyes, or upper-right pain after fatty meals.",
      "Upper abdominal pain with chest tightness, breathlessness or sweating: can be the heart, call emergency services.",
      "Sudden severe abdominal or back pain in an older adult, especially with a pulsing feeling: emergency.",
      "Sudden severe testicular pain: emergency."
    ],
    seeA: "doctor if it is not clearly a muscle strain; physiotherapist for strains"
  },

  // ---------------------------------------------------------------- LOWER BACK
  {
    id: "lower-back",
    name: "Lower back",
    keywords: ["lower back", "low back", "back", "lumbar", "lower back pain", "lbp", "lumbago", "slipped disc", "slipped disk", "disc", "disk", "bulging disc", "herniated disc", "back spasm", "pulled back", "threw out my back", "threw my back out", "put my back out", "bending over", "bend over", "bending down", "lifting heavy", "picking up", "si joint", "sacroiliac", "back stiff", "stiff back"],
    structures: ["iliocostalis lumborum", "longissimus thoracis", "multifidus", "quadratus lumborum", "lumbar vertebra", "psoas major", "gluteus maximus", "sacrum", "lumbar rotator", "interspinales lumborum"],
    causes: [
      { name: "Muscle strain / non-specific low back pain", note: "By far the most common type. Muscles, joints and ligaments become sensitive after lifting, bending or a long spell of sitting, and it usually improves within a few weeks." },
      { name: "Disc-related pain", note: "Discs can bulge and irritate nearby tissues; this often settles on its own, and disc bulges are common on scans of people without pain." },
      { name: "Joint stiffness / sacroiliac joint", note: "Small spinal joints or the joint at the back of the pelvis can become irritated, causing one-sided pain." }
    ],
    tips: [
      "Keep moving gently; bed rest slows recovery.",
      "Short, frequent walks are among the best things you can do.",
      "Warmth and changing position often ease spasm.",
      "Scans are rarely needed for back pain without red flags."
    ],
    exercises: [
      {
        name: "Pelvic tilt",
        type: "mobility",
        target: ["multifidus", "rectus abdominis"],
        steps: ["Lie on your back with your knees bent and feet flat.", "Gently flatten your lower back into the floor.", "Then gently arch it a little.", "Rock slowly between the two."],
        dose: { sets: 2, reps: 10, restSec: 20 },
        cue: "Small, comfortable movement.",
        level: 1
      },
      {
        name: "Knee to chest",
        type: "stretch",
        target: ["iliocostalis lumborum", "multifidus", "gluteus maximus"],
        steps: ["Lie on your back with your knees bent.", "Hug one knee toward your chest with both hands.", "Hold, then switch. Try both knees together if comfortable."],
        dose: { sets: 3, holdSec: 30, restSec: 10 },
        perSide: true,
        cue: "Gentle stretch in the lower back and buttock.",
        level: 1
      },
      {
        name: "Cat–cow",
        type: "mobility",
        target: ["iliocostalis lumborum", "longissimus thoracis", "multifidus"],
        steps: ["On hands and knees, hands under shoulders and knees under hips.", "Breathe out and round your back up.", "Breathe in and let your back gently sag, looking slightly forward."],
        dose: { sets: 2, reps: 10, restSec: 20 },
        cue: "Slow and smooth within comfort.",
        level: 1
      },
      {
        name: "Lower trunk rotation",
        type: "mobility",
        target: ["lumbar rotator", "quadratus lumborum", "external oblique"],
        steps: ["Lie on your back with your knees bent and together.", "Slowly let your knees fall to one side.", "Bring them back to the middle and go to the other side."],
        dose: { sets: 2, reps: 10, restSec: 20 },
        cue: "Shoulders stay on the floor.",
        level: 1
      },
      {
        name: "Glute bridge",
        type: "strength",
        target: ["gluteus maximus", "multifidus", "iliocostalis lumborum"],
        steps: ["Lie on your back, knees bent, feet hip-width apart.", "Squeeze your buttocks and lift your hips until your body is straight from shoulders to knees.", "Hold for 2 seconds and lower slowly."],
        dose: { sets: 3, reps: 10, restSec: 45 },
        cue: "Push through your heels; feel your buttocks, not your lower back.",
        level: 2
      },
      {
        name: "Bird dog",
        type: "strength",
        target: ["multifidus", "iliocostalis lumborum", "gluteus maximus"],
        steps: ["Start on hands and knees.", "Slowly reach one arm forward and the opposite leg back.", "Hold for 3 seconds, keeping your back level.", "Return and switch sides."],
        dose: { sets: 3, reps: 8, restSec: 45 },
        perSide: true,
        cue: "Imagine balancing a cup of water on your lower back.",
        level: 2
      }
    ],
    redFlags: [
      "Loss of bladder or bowel control, difficulty passing urine, or numbness around the genitals, buttocks or inner thighs: go to the emergency department now.",
      "Leg weakness that is getting worse, or a foot that drops or slaps when walking.",
      "Back pain with fever, recent infection, injecting drug use or a weakened immune system.",
      "History of cancer, unexplained weight loss, or constant pain that is worse at night.",
      "Back pain after significant trauma, or after a minor fall if you are older, have osteoporosis or take long-term steroids.",
      "Under 40 with gradually worsening back pain and morning stiffness over 30 minutes that improves with exercise: see a doctor (possible inflammatory back pain)."
    ],
    seeA: "physiotherapist or GP"
  },

  // ---------------------------------------------------------------- BUTTOCK / SCIATIC
  {
    id: "buttock-sciatic",
    name: "Buttock & sciatic-type pain",
    keywords: ["sciatica", "sciatic", "sciatic nerve", "buttock", "buttocks", "butt", "bum", "butt cheek", "glute", "glutes", "piriformis", "pain down leg", "down leg", "down my leg", "down the back of my leg", "going down my leg", "shooting down leg", "shooting pain leg", "radiating leg", "leg tingling", "numb leg", "leg numb", "nerve pain leg", "pins and needles leg", "pins and needles foot", "tailbone", "coccyx", "sitting bone", "sit bone", "deep buttock"],
    structures: ["piriformis", "gluteus maximus", "gluteus medius", "gemellus", "obturator internus", "quadratus femoris", "sacrum", "fifth lumbar vertebra", "long head of biceps femoris", "hip bone"],
    causes: [
      { name: "Sciatica (irritated nerve root)", note: "An irritated nerve in the lower back can cause pain, tingling or numbness down the back of the leg, often worse than the back pain itself. It often improves within 6 to 12 weeks." },
      { name: "Deep buttock / piriformis pain", note: "Tight or irritated deep hip muscles can press on or sensitise the sciatic nerve, often worse with sitting." },
      { name: "Hamstring tendon irritation", note: "Pain right at the sitting bone, worse when sitting on hard chairs or bending forward." },
      { name: "Referred back or pelvic joint pain", note: "The lower back and sacroiliac joint often refer pain into the buttock." }
    ],
    tips: [
      "Stay as active as you can; walking is usually helpful.",
      "Break up sitting every 20 to 30 minutes; a cushion can help.",
      "Avoid strong stretches into nerve pain; gentle movement is better.",
      "Track your symptoms: leg pain moving up toward your back is usually a good sign."
    ],
    exercises: [
      {
        name: "Knee to opposite shoulder",
        type: "stretch",
        target: ["piriformis", "gluteus maximus"],
        steps: ["Lie on your back with your legs straight.", "Bend one knee and gently pull it toward the opposite shoulder.", "Hold, then switch sides."],
        dose: { sets: 3, holdSec: 30, restSec: 10 },
        perSide: true,
        cue: "Stretch deep in the buttock, not tingling down the leg.",
        level: 1
      },
      {
        name: "Figure-4 stretch",
        type: "stretch",
        target: ["piriformis", "gemellus", "obturator internus"],
        steps: ["Lie on your back with your knees bent.", "Cross one ankle over the opposite knee.", "Gently pull the lower thigh toward your chest.", "Hold, then switch sides."],
        dose: { sets: 3, holdSec: 30, restSec: 10 },
        perSide: true,
        cue: "Mild stretch in the buttock of the crossed leg.",
        level: 1
      },
      {
        name: "Sciatic nerve glide (seated)",
        type: "nerve glide",
        target: ["long head of biceps femoris", "piriformis"],
        steps: ["Sit tall on the edge of a chair.", "Straighten one knee while pointing your toes up and lifting your head to look up.", "Then bend the knee, point your toes down and look down.", "Keep the movement rhythmic and gentle."],
        dose: { sets: 2, reps: 10, restSec: 20 },
        perSide: true,
        cue: "A light pull or brief tingle is OK; it should fade within seconds.",
        level: 1
      },
      {
        name: "Prone press-up",
        type: "mobility",
        target: ["multifidus", "iliocostalis lumborum"],
        steps: ["Lie face down with your hands under your shoulders.", "Keep your hips on the floor and gently push your upper body up.", "Hold for 1 to 2 seconds, then lower."],
        dose: { sets: 2, reps: 10, restSec: 30 },
        cue: "Good if leg symptoms ease or move toward the back; stop if they spread further down the leg.",
        level: 2
      },
      {
        name: "Glute bridge",
        type: "strength",
        target: ["gluteus maximus", "gluteus medius"],
        steps: ["Lie on your back, knees bent, feet hip-width apart.", "Squeeze your buttocks and lift your hips.", "Hold for 2 seconds and lower slowly."],
        dose: { sets: 3, reps: 10, restSec: 45 },
        cue: "Feel your buttocks working.",
        level: 2
      },
      {
        name: "Clamshell",
        type: "strength",
        target: ["gluteus medius", "piriformis", "gemellus"],
        steps: ["Lie on your side with your hips and knees bent, feet together.", "Keep your feet touching and lift the top knee.", "Lower slowly. Switch sides after the set."],
        dose: { sets: 3, reps: 12, restSec: 45 },
        perSide: true,
        cue: "Do not roll your hips back.",
        level: 2
      }
    ],
    redFlags: [
      "Loss of bladder or bowel control, or numbness around the genitals, buttocks or inner thighs: go to the emergency department now.",
      "Sciatica in both legs at once.",
      "Weakness in the leg or foot that is getting worse, or foot drop.",
      "Sciatica with fever, a history of cancer, or unexplained weight loss.",
      "Severe pain that is not controlled with simple pain relief."
    ],
    seeA: "physiotherapist or GP (urgent if weakness or numbness spreads)"
  },

  // ---------------------------------------------------------------- HIP OUTER
  {
    id: "hip-outer",
    name: "Hip, outer side",
    keywords: ["hip", "hips", "outer hip", "outside hip", "outside of hip", "outside of my hip", "side of hip", "side of my hip", "side hip", "hip bursitis", "trochanteric bursitis", "trochanteric", "bursitis", "greater trochanter", "trochanter", "glute med", "gluteus medius", "lying on side", "sleeping on side", "lying on my side", "hip night"],
    structures: ["gluteus medius", "gluteus minimus", "tensor fasciae latae", "iliotibial tract", "femur"],
    causes: [
      { name: "Gluteal tendinopathy (often called hip bursitis)", note: "Irritation of the glute tendons on the outer hip bone. It hurts lying on that side, on stairs, or standing on one leg, and is common in women aged 40 to 60." },
      { name: "Hip joint arthritis", note: "Usually felt deeper in the groin with stiffness, but it can ache on the side of the hip." },
      { name: "Referred from the lower back", note: "The lower back can refer pain to the outer hip and thigh." }
    ],
    tips: [
      "Avoid crossing your legs or standing with your weight hanging on one hip.",
      "Sleep with a pillow between your knees, or on your back.",
      "Avoid strong stretches across the outer hip; they squeeze the sore tendon.",
      "Exercise and education work better long-term than injections for most people."
    ],
    exercises: [
      {
        name: "Isometric hip abduction",
        type: "isometric",
        target: ["gluteus medius", "gluteus minimus"],
        steps: ["Lie on your back with your legs straight and a belt looped around your knees.", "Push your knees outward into the belt without moving.", "Hold steadily, then relax."],
        dose: { sets: 5, holdSec: 30, restSec: 30 },
        cue: "Moderate effort; this often eases tendon pain.",
        level: 1
      },
      {
        name: "Glute bridge",
        type: "strength",
        target: ["gluteus maximus", "gluteus medius"],
        steps: ["Lie on your back, knees bent, feet hip-width apart.", "Squeeze your buttocks and lift your hips.", "Hold for 2 seconds and lower slowly."],
        dose: { sets: 3, reps: 10, restSec: 45 },
        cue: "Keep your knees in line with your hips.",
        level: 1
      },
      {
        name: "Sit to stand",
        type: "strength",
        target: ["gluteus medius", "gluteus maximus", "vastus lateralis"],
        steps: ["Sit on a firm chair with your feet hip-width apart.", "Lean forward and stand up without using your hands.", "Sit down slowly."],
        dose: { sets: 3, reps: 10, restSec: 45 },
        cue: "Knees stay pointing over your toes, not caving in.",
        level: 2
      },
      {
        name: "Side-lying hip lift",
        type: "strength",
        target: ["gluteus medius", "gluteus minimus", "tensor fasciae latae"],
        steps: ["Lie on your good side with a pillow between your knees and the bottom knee bent.", "Keep the top leg straight and slightly behind you.", "Lift it to hip height, then lower slowly. Switch sides after the set."],
        dose: { sets: 3, reps: 10, restSec: 45 },
        perSide: true,
        cue: "Toes point forward, not up; do not let the leg drop below hip level.",
        level: 2
      },
      {
        name: "Single-leg stand",
        type: "balance",
        target: ["gluteus medius", "gluteus minimus"],
        steps: ["Stand near a counter for support.", "Lift one foot and keep your pelvis level.", "Hold, then switch."],
        dose: { sets: 3, holdSec: 30, restSec: 15 },
        perSide: true,
        cue: "Do not let your hip drop or push out to the side.",
        level: 2
      },
      {
        name: "Step-up",
        type: "strength",
        target: ["gluteus medius", "gluteus maximus", "vastus medialis"],
        steps: ["Stand facing a low step.", "Step up with one foot and bring the other up to meet it.", "Step down slowly with the same leg leading. Switch legs after the set."],
        dose: { sets: 3, reps: 8, restSec: 60 },
        perSide: true,
        cue: "Keep your pelvis level and the knee over your toes.",
        level: 3
      }
    ],
    redFlags: [
      "Unable to bear weight after a fall, especially if you are older: go to the emergency department (possible hip fracture).",
      "Hot, swollen hip with fever.",
      "A child or teenager with a new limp or hip, thigh or knee pain.",
      "Deep groin pain with long-term steroid or heavy alcohol use.",
      "Constant night pain or unexplained weight loss."
    ],
    seeA: "physiotherapist"
  },

  // ---------------------------------------------------------------- HIP FRONT / GROIN
  {
    id: "hip-front-groin",
    name: "Hip front & groin",
    keywords: ["groin", "groin strain", "groin pull", "pulled groin", "strained groin", "hip flexor", "hip flexors", "front of hip", "front hip", "front of my hip", "inner thigh", "adductor", "adductors", "psoas", "iliopsoas", "hip impingement", "fai", "labrum", "labral tear", "pubic", "pubic bone", "osteitis pubis", "sports hernia", "inguinal", "kicking", "hip pinch", "pinching in hip", "deep hip"],
    structures: ["iliacus", "psoas major", "rectus femoris", "sartorius", "adductor longus", "adductor brevis", "adductor magnus", "pectineus", "gracilis", "inguinal ligament", "hip bone"],
    causes: [
      { name: "Adductor (groin) strain", note: "Common in sports with kicking, sprinting and quick changes of direction such as football and hockey." },
      { name: "Hip flexor strain or tendinopathy", note: "Pain at the front of the hip with sprinting, kicking or lifting the knee." },
      { name: "Hip joint irritation", note: "A deep pinching pain in the groin with sitting, squatting or twisting can come from the hip joint (impingement, labrum or arthritis)." },
      { name: "Inguinal-related pain or hernia", note: "Pain or a bulge near the groin crease, worse with coughing or sit-ups." }
    ],
    tips: [
      "Avoid painful stretching for the first few days after a strain.",
      "Strengthen the adductors progressively; strong adductors reduce groin injury risk.",
      "Return to kicking and sprinting gradually, building speed and distance.",
      "For deep hip pinching, avoid prolonged deep squatting and low seats for now."
    ],
    exercises: [
      {
        name: "Adductor squeeze",
        type: "isometric",
        target: ["adductor longus", "adductor brevis", "gracilis", "pectineus"],
        steps: ["Lie on your back with your knees bent.", "Place a ball or folded pillow between your knees.", "Squeeze the knees together and hold.", "Relax fully between holds."],
        dose: { sets: 6, holdSec: 10, restSec: 15 },
        cue: "Firm but comfortable; pain should stay mild.",
        level: 1
      },
      {
        name: "Standing march",
        type: "strength",
        target: ["iliacus", "psoas major", "rectus femoris"],
        steps: ["Stand tall holding a counter.", "Slowly lift one knee to hip height.", "Lower with control and switch legs."],
        dose: { sets: 3, reps: 10, restSec: 30 },
        perSide: true,
        cue: "Stay tall; do not lean back.",
        level: 1
      },
      {
        name: "Half-kneeling hip flexor stretch",
        type: "stretch",
        target: ["iliacus", "psoas major", "rectus femoris"],
        steps: ["Kneel on one knee with the other foot flat in front.", "Tuck your tailbone under and gently shift forward.", "Hold, then switch sides."],
        dose: { sets: 3, holdSec: 30, restSec: 10 },
        perSide: true,
        cue: "Mild stretch at the front of the back hip; skip in the first days after a fresh strain.",
        level: 1
      },
      {
        name: "Side-lying adduction",
        type: "strength",
        target: ["adductor longus", "adductor magnus", "gracilis"],
        steps: ["Lie on your side with your top leg bent and foot in front of the bottom knee.", "Keep the bottom leg straight and lift it a few centimetres.", "Lower slowly. Switch sides after the set."],
        dose: { sets: 3, reps: 10, restSec: 45 },
        perSide: true,
        cue: "Small, controlled lift from the inner thigh.",
        level: 2
      },
      {
        name: "Banded knee drive",
        type: "strength",
        target: ["iliacus", "psoas major", "rectus femoris"],
        steps: ["Loop a light band around your feet and lie on your back.", "Draw one knee toward your chest against the band.", "Return slowly. Switch sides after the set."],
        dose: { sets: 3, reps: 10, restSec: 45 },
        perSide: true,
        cue: "Keep your lower back steady.",
        level: 2
      },
      {
        name: "Copenhagen plank (short lever)",
        type: "isometric",
        target: ["adductor longus", "adductor magnus", "gracilis"],
        steps: ["Lie on your side propped on your forearm, top knee resting on a bench or chair.", "Lift your hips so your body is straight, keeping the bottom leg under the bench.", "Hold, then switch sides."],
        dose: { sets: 3, holdSec: 15, restSec: 45 },
        perSide: true,
        cue: "Only once adductor squeezes and side-lying lifts are pain-free.",
        level: 3
      }
    ],
    redFlags: [
      "A groin bulge that becomes painful, firm or tender, cannot be pushed back, or comes with vomiting: emergency.",
      "Sudden severe testicular pain or swelling: emergency.",
      "Unable to bear weight after a fall or a pop with immediate inability to walk.",
      "Groin pain with fever, or a child or teenager with a new limp.",
      "Deep groin pain at night, or with unexplained weight loss."
    ],
    seeA: "sports physiotherapist or sports medicine doctor"
  },

  // ---------------------------------------------------------------- FRONT THIGH
  {
    id: "front-thigh",
    name: "Front of thigh (quad strain)",
    keywords: ["thigh", "thighs", "quad", "quads", "quadricep", "quadriceps", "front of thigh", "front thigh", "front of my thigh", "dead leg", "charley horse", "corked thigh", "cork", "pulled quad", "quad strain", "thigh strain", "rectus femoris", "thigh bruise"],
    structures: ["rectus femoris", "vastus lateralis", "vastus medialis", "vastus intermedius", "femur"],
    causes: [
      { name: "Quadriceps strain", note: "Sprinting or kicking can strain the front thigh, most often the rectus femoris near the hip or mid-thigh." },
      { name: "Thigh bruise ('dead leg')", note: "A knee or blow to the thigh bruises the muscle, causing pain and stiffness bending the knee." },
      { name: "Referred nerve pain", note: "Burning or tingling on the front or outer thigh can come from a nerve at the hip or the lower back." }
    ],
    tips: [
      "After a bruise, avoid massage, heat and alcohol for the first 2 to 3 days.",
      "Keep the knee bending gently within comfort.",
      "Rebuild strength before returning to sprinting or kicking.",
      "Stretch only gently, once walking is pain-free."
    ],
    exercises: [
      {
        name: "Quad set",
        type: "isometric",
        target: ["vastus medialis", "rectus femoris", "vastus lateralis"],
        steps: ["Sit or lie with your leg straight and a small towel under the knee.", "Tighten your thigh, pressing the back of the knee into the towel.", "Hold, then relax."],
        dose: { sets: 10, holdSec: 5, restSec: 5 },
        cue: "Feel the kneecap pull up as the thigh tightens.",
        level: 1
      },
      {
        name: "Heel slide",
        type: "mobility",
        target: ["rectus femoris", "vastus intermedius"],
        steps: ["Lie on your back with your legs straight.", "Slide one heel toward your buttock, bending the knee.", "Slide back out slowly."],
        dose: { sets: 2, reps: 10, restSec: 20 },
        perSide: true,
        cue: "Bend only as far as comfortable.",
        level: 1
      },
      {
        name: "Straight leg raise",
        type: "strength",
        target: ["rectus femoris", "vastus medialis"],
        steps: ["Lie on your back with one knee bent and the other leg straight.", "Tighten the straight thigh and lift the leg to the height of the bent knee.", "Lower slowly."],
        dose: { sets: 3, reps: 10, restSec: 45 },
        perSide: true,
        cue: "Keep the knee fully straight throughout.",
        level: 1
      },
      {
        name: "Standing quad stretch",
        type: "stretch",
        target: ["rectus femoris", "vastus intermedius"],
        steps: ["Hold a counter for balance.", "Bend one knee and hold your ankle behind you.", "Keep your knees together and gently tuck your tailbone.", "Hold, then switch."],
        dose: { sets: 3, holdSec: 30, restSec: 10 },
        perSide: true,
        cue: "Mild stretch at the front of the thigh. Use a strap if you cannot reach comfortably.",
        level: 2
      },
      {
        name: "Sit to stand",
        type: "strength",
        target: ["vastus lateralis", "vastus medialis", "rectus femoris"],
        steps: ["Sit on a firm chair with your feet hip-width apart.", "Stand up without using your hands.", "Sit down slowly over 3 seconds."],
        dose: { sets: 3, reps: 10, restSec: 45 },
        cue: "Weight evenly through both legs.",
        level: 2
      },
      {
        name: "Split squat",
        type: "strength",
        target: ["rectus femoris", "vastus lateralis", "vastus medialis"],
        steps: ["Stand in a long stride with your back heel lifted.", "Lower your back knee toward the floor.", "Push back up through the front foot. Switch sides after the set."],
        dose: { sets: 3, reps: 8, restSec: 60 },
        perSide: true,
        cue: "Front knee tracks over your toes.",
        level: 3
      }
    ],
    redFlags: [
      "A very tense, swollen thigh with severe pain, numbness or pain out of proportion: emergency (possible compartment syndrome).",
      "Unable to straighten the knee or lift the leg after injury (possible tendon tear).",
      "Severe thigh pain after high-energy trauma.",
      "A hard lump that grows in the weeks after a bruise.",
      "Fever or feeling unwell with thigh pain."
    ],
    seeA: "sports physiotherapist"
  },

  // ---------------------------------------------------------------- BACK OF THIGH
  {
    id: "back-thigh",
    name: "Back of thigh (hamstring strain)",
    keywords: ["hamstring", "hamstrings", "hammy", "hammies", "hamstring pulled", "pulled hamstring", "hamstring strain", "strained hamstring", "hamstring tear", "torn hamstring", "tight hamstrings", "back of thigh", "back thigh", "back of my thigh", "back of leg", "back of my leg", "back leg", "back of knee", "back of my knee", "behind knee", "behind my knee", "biceps femoris", "sprinting"],
    structures: ["biceps femoris", "semitendinosus", "semimembranosus", "adductor magnus", "popliteus"],
    causes: [
      { name: "Hamstring strain", note: "A sudden sharp pain at the back of the thigh, often while sprinting or overstretching." },
      { name: "High hamstring tendinopathy", note: "A deep ache near the sitting bone, worse when sitting or bending forward." },
      { name: "Referred from the lower back", note: "Back problems can cause pain or tingling at the back of the thigh." },
      { name: "Behind-knee causes", note: "Pain behind the knee can come from the hamstring or calf tendons, a fluid-filled (Baker's) cyst, or rarely a blood clot." }
    ],
    tips: [
      "Avoid hard stretching in the first few days.",
      "Early, gentle strengthening speeds recovery.",
      "Walk with a normal stride as soon as comfortable.",
      "Return to sprinting only when strength is back and fast running is pain-free; rushing leads to re-injury."
    ],
    exercises: [
      {
        name: "Hamstring heel dig",
        type: "isometric",
        target: ["biceps femoris", "semitendinosus", "semimembranosus"],
        steps: ["Lie on your back with your knees bent.", "Dig your heels into the floor as if pulling them toward you, without moving.", "Hold, then relax."],
        dose: { sets: 5, holdSec: 10, restSec: 15 },
        cue: "Gentle to moderate effort, no cramping.",
        level: 1
      },
      {
        name: "Glute bridge",
        type: "strength",
        target: ["gluteus maximus", "biceps femoris", "semitendinosus"],
        steps: ["Lie on your back, knees bent, feet hip-width apart.", "Lift your hips until your body is straight from shoulders to knees.", "Lower slowly."],
        dose: { sets: 3, reps: 10, restSec: 45 },
        cue: "Push through your heels.",
        level: 1
      },
      {
        name: "Towel hamstring stretch",
        type: "stretch",
        target: ["biceps femoris", "semitendinosus", "semimembranosus"],
        steps: ["Lie on your back with a towel around one foot.", "Keep the knee almost straight and raise the leg until you feel a mild pull.", "Hold, then switch."],
        dose: { sets: 3, holdSec: 30, restSec: 10 },
        perSide: true,
        cue: "Mild pull only, never sharp pain. Skip it for the first few days after a fresh strain.",
        level: 1
      },
      {
        name: "Single-leg bridge",
        type: "strength",
        target: ["biceps femoris", "semitendinosus", "gluteus maximus"],
        steps: ["Lie on your back with one knee bent and the other leg lifted.", "Push through the planted heel to lift your hips.", "Lower slowly. Switch sides after the set."],
        dose: { sets: 3, reps: 8, restSec: 45 },
        perSide: true,
        cue: "Keep your hips level.",
        level: 2
      },
      {
        name: "Romanian deadlift",
        type: "strength",
        target: ["biceps femoris", "semimembranosus", "semitendinosus", "gluteus maximus"],
        steps: ["Stand with a slight bend in your knees, holding light weights or nothing.", "Hinge at the hips, sliding your hands down your thighs with a flat back.", "Stop at a mild hamstring pull and stand back up by squeezing your buttocks."],
        dose: { sets: 3, reps: 10, restSec: 60 },
        cue: "Hips go back; your back stays flat.",
        level: 2
      },
      {
        name: "Assisted Nordic curl",
        type: "strength",
        target: ["biceps femoris", "semitendinosus", "semimembranosus"],
        steps: ["Kneel on a cushion with your ankles held by a partner or under a sturdy sofa.", "Keep your body straight and lower forward slowly from the knees.", "Catch yourself with your hands, then push back up."],
        dose: { sets: 3, reps: 5, restSec: 90 },
        cue: "Only lower as far as you can control. Late-stage exercise; skip if any pain.",
        level: 3
      }
    ],
    redFlags: [
      "A pop high up near the sitting bone with large bruising, or difficulty walking: get seen within days (tendon tears here can need early surgery).",
      "Swelling, warmth, redness or tenderness behind the knee or in the calf: get seen urgently (possible blood clot).",
      "Numbness, tingling or weakness down the leg.",
      "Large or rapidly growing swelling."
    ],
    seeA: "sports physiotherapist (urgent review if you felt a pop near the sitting bone)"
  },

  // ---------------------------------------------------------------- KNEE FRONT
  {
    id: "knee-front",
    name: "Knee, front (kneecap / patellar tendon)",
    keywords: ["knee", "knees", "kneecap", "kneecaps", "knee cap", "patella", "front of knee", "front knee", "front of my knee", "patellofemoral", "pfps", "runners knee", "runner knee", "jumpers knee", "jumper knee", "patellar tendon", "patellar tendonitis", "patellar tendinitis", "patellar tendinopathy", "below kneecap", "under kneecap", "behind kneecap", "stairs", "downstairs", "going down stairs", "squatting", "squats", "kneeling", "knee grinding", "crepitus", "chondromalacia", "osgood"],
    structures: ["patella", "rectus femoris", "vastus medialis", "vastus lateralis", "vastus intermedius", "femur"],
    causes: [
      { name: "Patellofemoral pain (runner's knee)", note: "Aching around or behind the kneecap, worse with stairs, squats, hills or sitting for long." },
      { name: "Patellar tendinopathy (jumper's knee)", note: "Pain just below the kneecap with jumping, running or squatting." },
      { name: "Growth-related pain", note: "In active children and teens, the bony bump below the kneecap can become sore (Osgood-Schlatter)." },
      { name: "Knee arthritis", note: "Stiffness and aching, more common after 50. Exercise is one of the best treatments." }
    ],
    tips: [
      "Reduce aggravating activities (deep squats, stairs, hills, jumping) for a while rather than stopping everything.",
      "Strengthening the thigh and hip muscles is the best-supported treatment.",
      "Mild pain during exercise (up to about 3 out of 10) is OK if it settles by the next day.",
      "Runners: slightly shorter, quicker steps can reduce load on the knee."
    ],
    exercises: [
      {
        name: "Quad set",
        type: "isometric",
        target: ["vastus medialis", "rectus femoris"],
        steps: ["Sit with your leg straight and a towel roll under the knee.", "Tighten your thigh and press the knee down.", "Hold, then relax."],
        dose: { sets: 10, holdSec: 5, restSec: 5 },
        cue: "Feel the kneecap glide upward.",
        level: 1
      },
      {
        name: "Straight leg raise",
        type: "strength",
        target: ["rectus femoris", "vastus medialis"],
        steps: ["Lie on your back with one knee bent.", "Tighten the straight thigh and lift the leg to the height of the other knee.", "Lower slowly."],
        dose: { sets: 3, reps: 10, restSec: 45 },
        perSide: true,
        cue: "Knee stays locked straight.",
        level: 1
      },
      {
        name: "Clamshell",
        type: "strength",
        target: ["gluteus medius", "gluteus minimus"],
        steps: ["Lie on your side with your knees bent and feet together.", "Lift the top knee while keeping your feet touching.", "Lower slowly. Switch sides after the set."],
        dose: { sets: 3, reps: 12, restSec: 45 },
        perSide: true,
        cue: "Hips stay stacked; strong hips help the knee track well.",
        level: 1
      },
      {
        name: "Wall sit",
        type: "isometric",
        target: ["vastus medialis", "vastus lateralis", "rectus femoris"],
        steps: ["Lean your back against a wall with your feet about 50 cm in front.", "Slide down to a comfortable angle (start shallow, around 30 to 45 degrees of knee bend).", "Hold, then stand up."],
        dose: { sets: 5, holdSec: 30, restSec: 60 },
        cue: "Choose a depth where pain is 3 out of 10 or less; this often eases tendon pain.",
        level: 2
      },
      {
        name: "Partial squat to chair",
        type: "strength",
        target: ["vastus lateralis", "vastus medialis", "gluteus maximus"],
        steps: ["Stand in front of a chair with your feet hip-width apart.", "Push your hips back and lower until you lightly touch the chair.", "Stand back up."],
        dose: { sets: 3, reps: 10, restSec: 45 },
        cue: "Knees follow the line of your toes.",
        level: 2
      },
      {
        name: "Slow step-down",
        type: "strength",
        target: ["vastus medialis", "rectus femoris", "gluteus medius"],
        steps: ["Stand on a low step on one leg.", "Slowly lower the other heel toward the floor.", "Push back up. Switch sides after the set."],
        dose: { sets: 3, reps: 8, restSec: 60 },
        perSide: true,
        cue: "Keep the knee over the second toe and the pelvis level.",
        level: 3
      }
    ],
    redFlags: [
      "Unable to bear weight or straighten the knee after an injury.",
      "Rapid swelling within a few hours of injury (possible ligament tear or fracture).",
      "The knee locks and you cannot straighten it, or it keeps giving way.",
      "A hot, red, swollen knee with fever: get seen the same day (possible infection).",
      "Calf swelling, warmth or redness (possible blood clot).",
      "A child or teen with knee pain and a limp: the hip may be the cause, so get them checked."
    ],
    seeA: "physiotherapist or sports medicine doctor"
  },

  // ---------------------------------------------------------------- KNEE OUTER
  {
    id: "knee-outer",
    name: "Knee, outer side (IT band)",
    keywords: ["outer knee", "outside knee", "outside of knee", "outside of my knee", "lateral knee", "side of knee", "side of my knee", "it band", "itb", "itbs", "it band syndrome", "iliotibial", "iliotibial band", "itb syndrome", "outer thigh", "outside of thigh", "outside thigh"],
    structures: ["iliotibial tract", "tensor fasciae latae", "vastus lateralis", "biceps femoris", "gluteus maximus", "gluteus medius"],
    causes: [
      { name: "IT band syndrome", note: "Common in runners and cyclists: pain on the outer knee that starts after a set distance and is worse downhill." },
      { name: "Lateral ligament or meniscus injury", note: "Pain after a twist or blow, sometimes with swelling, clicking or locking." },
      { name: "Hamstring tendon irritation", note: "The outer hamstring tendon can become sore where it attaches near the knee." }
    ],
    tips: [
      "Reduce running distance and downhill running temporarily.",
      "Foam rolling may ease symptoms short-term, but it does not lengthen the IT band.",
      "Strengthen your hips; weak hip muscles often contribute.",
      "Cyclists: check saddle height and cleat position."
    ],
    exercises: [
      {
        name: "Clamshell",
        type: "strength",
        target: ["gluteus medius", "gluteus maximus"],
        steps: ["Lie on your side with your knees bent and feet together.", "Lift the top knee while keeping your feet touching.", "Lower slowly. Switch sides after the set."],
        dose: { sets: 3, reps: 12, restSec: 45 },
        perSide: true,
        cue: "Don't roll your hips back.",
        level: 1
      },
      {
        name: "Side-lying leg lift",
        type: "strength",
        target: ["gluteus medius", "tensor fasciae latae"],
        steps: ["Lie on your side with the bottom knee bent.", "Keep the top leg straight and slightly behind you.", "Lift to hip height and lower slowly. Switch sides after the set."],
        dose: { sets: 3, reps: 12, restSec: 45 },
        perSide: true,
        cue: "Toes point forward.",
        level: 1
      },
      {
        name: "Standing side stretch",
        type: "stretch",
        target: ["tensor fasciae latae", "iliotibial tract"],
        steps: ["Stand side-on to a wall with the sore leg closer to it.", "Cross the sore leg behind the other.", "Lean your hips toward the wall.", "Hold, then switch."],
        dose: { sets: 3, holdSec: 30, restSec: 10 },
        perSide: true,
        cue: "Gentle stretch on the outer hip, not at the knee.",
        level: 1
      },
      {
        name: "Lateral band walk",
        type: "strength",
        target: ["gluteus medius", "tensor fasciae latae"],
        steps: ["Place a light band around your legs just above the knees.", "Bend your knees slightly.", "Step sideways 10 steps, then 10 steps back."],
        dose: { sets: 3, reps: 10, restSec: 45 },
        cue: "Keep tension on the band and your toes pointing forward.",
        level: 2
      },
      {
        name: "Slow step-down",
        type: "strength",
        target: ["gluteus medius", "vastus lateralis"],
        steps: ["Stand on a low step on one leg.", "Slowly lower the other heel to the floor.", "Push back up. Switch sides after the set."],
        dose: { sets: 3, reps: 8, restSec: 60 },
        perSide: true,
        cue: "Knee stays in line with your toes and the pelvis stays level.",
        level: 2
      },
      {
        name: "Single-leg Romanian deadlift",
        type: "balance",
        target: ["gluteus medius", "gluteus maximus", "biceps femoris"],
        steps: ["Stand on one leg holding a counter if needed.", "Hinge forward at the hip, reaching the free leg back.", "Return to standing. Switch sides after the set."],
        dose: { sets: 3, reps: 8, restSec: 60 },
        perSide: true,
        cue: "Keep your hips level, as if your pelvis were a tray.",
        level: 3
      }
    ],
    redFlags: [
      "Swelling, locking or giving way after a twist.",
      "Unable to bear weight after an injury.",
      "Numbness on the top of the foot or a foot that drops after a knee injury: get seen urgently.",
      "A hot, red, swollen knee with fever."
    ],
    seeA: "sports physiotherapist"
  },

  // ---------------------------------------------------------------- KNEE INNER
  {
    id: "knee-inner",
    name: "Knee, inner side",
    keywords: ["inner knee", "inside knee", "inside of knee", "inside of my knee", "medial knee", "inner side of knee", "mcl", "medial collateral", "medial ligament", "pes anserine", "pes anserinus", "anserine", "goosefoot", "medial meniscus", "meniscus", "torn meniscus", "twisted knee", "knee twisted", "breaststroke knee"],
    structures: ["sartorius", "gracilis", "semitendinosus", "semimembranosus", "vastus medialis", "femur"],
    causes: [
      { name: "Pes anserine tendon / bursa irritation", note: "Tenderness just below the inner knee, worse on stairs and often seen alongside knee arthritis." },
      { name: "MCL sprain", note: "A ligament sprain from a blow to the outside of the knee or a twist, with pain along the inner knee." },
      { name: "Medial meniscus irritation", note: "Twisting injuries or wear can cause joint-line pain, catching or swelling." },
      { name: "Knee arthritis", note: "The inner side of the knee is often affected first, with stiffness and aching." }
    ],
    tips: [
      "Sleep with a pillow between your knees.",
      "Avoid deep squats and twisting on a planted foot for now.",
      "Cycling, walking and swimming (not breaststroke kick) keep the knee moving.",
      "A hinged brace may help for a moderate MCL sprain; ask a clinician."
    ],
    exercises: [
      {
        name: "Quad set",
        type: "isometric",
        target: ["vastus medialis"],
        steps: ["Sit with your leg straight and a towel roll under the knee.", "Tighten your thigh and press the knee down.", "Hold, then relax."],
        dose: { sets: 10, holdSec: 5, restSec: 5 },
        cue: "Focus on the inner thigh muscle just above the knee.",
        level: 1
      },
      {
        name: "Heel slide",
        type: "mobility",
        target: ["semitendinosus", "sartorius"],
        steps: ["Lie on your back with your legs straight.", "Slide your heel toward your buttock.", "Slide back out slowly."],
        dose: { sets: 2, reps: 10, restSec: 20 },
        perSide: true,
        cue: "Bend only as far as comfortable.",
        level: 1
      },
      {
        name: "Straight leg raise",
        type: "strength",
        target: ["vastus medialis", "rectus femoris"],
        steps: ["Lie on your back with one knee bent.", "Tighten the straight thigh and lift the leg to the height of the other knee.", "Lower slowly."],
        dose: { sets: 3, reps: 10, restSec: 45 },
        perSide: true,
        cue: "Knee stays straight.",
        level: 1
      },
      {
        name: "Mini squat",
        type: "strength",
        target: ["vastus medialis", "vastus lateralis", "gluteus maximus"],
        steps: ["Stand holding a counter with your feet hip-width apart.", "Bend your knees a quarter of the way down.", "Stand back up."],
        dose: { sets: 3, reps: 10, restSec: 45 },
        cue: "Knees point over your toes, not inward.",
        level: 2
      },
      {
        name: "Single-leg stand",
        type: "balance",
        target: ["vastus medialis", "gluteus medius"],
        steps: ["Stand near a counter.", "Lift one foot with a soft bend in the standing knee.", "Hold, then switch."],
        dose: { sets: 3, holdSec: 30, restSec: 15 },
        perSide: true,
        cue: "Keep the knee from rolling inward.",
        level: 2
      },
      {
        name: "Step-up",
        type: "strength",
        target: ["vastus medialis", "gluteus maximus"],
        steps: ["Stand facing a low step.", "Step up with one foot and straighten that leg.", "Step down slowly. Switch legs after the set."],
        dose: { sets: 3, reps: 8, restSec: 60 },
        perSide: true,
        cue: "Knee tracks over the middle toes.",
        level: 3
      }
    ],
    redFlags: [
      "Unable to bear weight or straighten the knee after injury.",
      "Rapid swelling within hours of a twist.",
      "The knee locks, catches badly or gives way.",
      "A hot, red, swollen knee with fever: get seen the same day.",
      "Calf swelling, warmth or redness (possible blood clot)."
    ],
    seeA: "physiotherapist or sports medicine doctor"
  },

  // ---------------------------------------------------------------- SHIN
  {
    id: "shin",
    name: "Shin (shin splints)",
    keywords: ["shin", "shins", "shin splint", "shin splints", "shinsplints", "shin splits", "medial tibial stress", "mtss", "tibia", "stress fracture", "front of leg", "front of my leg", "lower leg", "inside of shin", "inner shin", "compartment syndrome"],
    structures: ["tibialis anterior", "tibialis posterior", "tibia", "soleus", "flexor digitorum longus", "interosseous membrane of leg", "extensor digitorum longus"],
    causes: [
      { name: "Shin splints (medial tibial stress syndrome)", note: "A diffuse ache along the inner shin after a jump in running or jumping load." },
      { name: "Bone stress injury", note: "Pain in one small spot on the bone, pain when hopping, or pain at rest or at night can mean a stress fracture." },
      { name: "Exertional compartment syndrome", note: "Tight, burning pain in the front of the shin during exercise that eases with rest, sometimes with numbness on the top of the foot." }
    ],
    tips: [
      "Cut running volume and impact (for example by half) and cross-train with cycling or swimming.",
      "Increase training gradually, by about 10 percent a week.",
      "Check that shoes are not worn out; softer surfaces can help.",
      "Eat enough to fuel training; low energy intake raises bone stress risk."
    ],
    exercises: [
      {
        name: "Bent-knee calf stretch",
        type: "stretch",
        target: ["soleus", "tibialis posterior"],
        steps: ["Face a wall with one foot back.", "Bend both knees, keeping the back heel down.", "Lean in until you feel a stretch low in the calf.", "Hold, then switch."],
        dose: { sets: 3, holdSec: 30, restSec: 10 },
        perSide: true,
        cue: "Stretch low in the calf near the ankle.",
        level: 1
      },
      {
        name: "Band ankle lift",
        type: "strength",
        target: ["tibialis anterior", "extensor digitorum longus"],
        steps: ["Sit with your leg straight and a band anchored in front, looped over the top of your foot.", "Pull your toes and foot toward you against the band.", "Return slowly."],
        dose: { sets: 3, reps: 15, restSec: 30 },
        perSide: true,
        cue: "Feel the front of the shin working.",
        level: 1
      },
      {
        name: "Double-leg calf raise",
        type: "strength",
        target: ["soleus", "gastrocnemius", "tibialis posterior"],
        steps: ["Stand holding a counter.", "Rise onto the balls of both feet.", "Lower slowly over 3 seconds."],
        dose: { sets: 3, reps: 15, restSec: 45 },
        cue: "Go straight up, not rolling out to the little toes.",
        level: 1
      },
      {
        name: "Single-leg stand",
        type: "balance",
        target: ["tibialis anterior", "tibialis posterior", "fibularis longus"],
        steps: ["Stand on one leg near a counter.", "Keep a soft knee and your arch lifted.", "Hold, then switch."],
        dose: { sets: 3, holdSec: 30, restSec: 15 },
        perSide: true,
        cue: "Let the foot and shin muscles make small corrections.",
        level: 2
      },
      {
        name: "Heel walk",
        type: "strength",
        target: ["tibialis anterior", "extensor digitorum longus"],
        steps: ["Lift your toes and the front of your feet off the floor.", "Walk slowly on your heels.", "Rest, then repeat."],
        dose: { sets: 3, holdSec: 30, restSec: 30 },
        cue: "Burning in the front of the shin is expected; stop if pain is sharp.",
        level: 2
      },
      {
        name: "Single-leg calf raise",
        type: "strength",
        target: ["soleus", "gastrocnemius", "tibialis posterior"],
        steps: ["Stand on one leg holding a counter.", "Rise onto the ball of your foot.", "Lower slowly. Switch sides after the set."],
        dose: { sets: 3, reps: 10, restSec: 60 },
        perSide: true,
        cue: "Work toward 20 or more before returning to full running.",
        level: 3
      }
    ],
    redFlags: [
      "Pain in one small spot on the bone, pain when hopping, or pain at rest or at night: stop running and get checked for a stress fracture.",
      "Tight shin pain with numbness or weakness of the foot during exercise.",
      "After an injury, a tense, swollen shin with severe pain made worse by moving the toes: emergency (possible compartment syndrome).",
      "Calf swelling, warmth or redness (possible blood clot)."
    ],
    seeA: "sports physiotherapist or sports medicine doctor"
  },

  // ---------------------------------------------------------------- CALF
  {
    id: "calf",
    name: "Calf strain",
    keywords: ["calf", "calves", "calf strain", "pulled calf", "strained calf", "torn calf", "calf tear", "tennis leg", "calf cramp", "cramp", "cramps", "cramping", "gastrocnemius", "gastroc", "soleus", "tight calf", "tight calves", "back of lower leg", "calf muscle"],
    structures: ["gastrocnemius", "soleus", "plantaris", "calcaneal tendon", "flexor hallucis longus", "tibialis posterior"],
    causes: [
      { name: "Calf muscle strain", note: "A sudden push-off can strain the calf, often felt like being kicked or hit in the back of the leg ('tennis leg')." },
      { name: "Soleus strain", note: "Gradual tightness lower in the calf, common in runners." },
      { name: "Cramp", note: "A sudden, temporary tightening, often at night or with fatigue." },
      { name: "Blood clot (DVT)", note: "A swollen, warm, red or tender calf without a clear strain needs urgent medical review." }
    ],
    tips: [
      "If the calf is swollen, warm or red without a clear injury, see a doctor first.",
      "A small heel lift in the shoe can ease walking for the first few days.",
      "Walk normally as soon as you can.",
      "Return to running when you can do about 20 single-leg calf raises without pain."
    ],
    exercises: [
      {
        name: "Ankle pumps",
        type: "mobility",
        target: ["gastrocnemius", "soleus"],
        steps: ["Sit or lie with your legs out.", "Point your feet down, then pull them up toward you.", "Keep a steady rhythm."],
        dose: { sets: 2, reps: 20, restSec: 15 },
        cue: "Smooth movement; gets blood flowing.",
        level: 1
      },
      {
        name: "Straight-knee calf stretch",
        type: "stretch",
        target: ["gastrocnemius"],
        steps: ["Face a wall with one foot back and the knee straight.", "Keep the back heel down and lean in.", "Hold, then switch."],
        dose: { sets: 3, holdSec: 30, restSec: 10 },
        perSide: true,
        cue: "Mild stretch in the upper calf; skip in the first days after a fresh strain.",
        level: 1
      },
      {
        name: "Bent-knee calf stretch",
        type: "stretch",
        target: ["soleus"],
        steps: ["Face a wall with one foot back.", "Bend both knees, keeping the back heel down.", "Hold, then switch."],
        dose: { sets: 3, holdSec: 30, restSec: 10 },
        perSide: true,
        cue: "Stretch lower down, closer to the ankle.",
        level: 1
      },
      {
        name: "Calf raise hold",
        type: "isometric",
        target: ["gastrocnemius", "soleus"],
        steps: ["Stand holding a counter.", "Rise halfway onto your toes on both feet.", "Hold steady, then lower."],
        dose: { sets: 4, holdSec: 30, restSec: 30 },
        cue: "Mild discomfort is OK; no sharp pain.",
        level: 1
      },
      {
        name: "Double-leg calf raise",
        type: "strength",
        target: ["gastrocnemius", "soleus"],
        steps: ["Stand holding a counter.", "Rise onto the balls of both feet.", "Lower slowly over 3 seconds."],
        dose: { sets: 3, reps: 15, restSec: 45 },
        cue: "Full range, slow lowering.",
        level: 2
      },
      {
        name: "Single-leg calf raise",
        type: "strength",
        target: ["gastrocnemius", "soleus"],
        steps: ["Stand on one leg holding a counter.", "Rise onto the ball of your foot and lower slowly.", "Do one set with a straight knee and one with the knee slightly bent. Switch sides."],
        dose: { sets: 3, reps: 10, restSec: 60 },
        perSide: true,
        cue: "Equal height on both sides is the goal.",
        level: 3
      }
    ],
    redFlags: [
      "Calf swelling, warmth, redness or tenderness, especially after long travel, surgery, bed rest, pregnancy, hormone treatment or cancer: get seen the same day (possible blood clot).",
      "Calf symptoms with breathlessness or chest pain: call emergency services.",
      "A pop or kick sensation at the back of the heel and weak push-off (possible Achilles rupture).",
      "A very tense, swollen calf with severe pain.",
      "Calf pain that comes on with walking and eases with rest, especially if you smoke or have diabetes (possible circulation problem)."
    ],
    seeA: "sports physiotherapist (doctor urgently if signs of a blood clot)"
  },

  // ---------------------------------------------------------------- ACHILLES
  {
    id: "achilles",
    name: "Achilles tendon",
    keywords: ["achilles", "achilles tendon", "achilles tendonitis", "achilles tendinitis", "achilles tendinopathy", "achillies", "achilies", "achillis", "achilis", "achiles", "achilles heel", "back of heel", "back of my heel", "back heel", "heel cord", "above heel", "back of ankle", "back of my ankle", "back ankle"],
    structures: ["calcaneal tendon", "gastrocnemius", "soleus", "plantaris", "calcaneus"],
    causes: [
      { name: "Mid-portion Achilles tendinopathy", note: "Pain and stiffness 2 to 6 cm above the heel, worst first thing in the morning, often warming up with activity." },
      { name: "Insertional Achilles pain", note: "Pain where the tendon joins the heel bone, worse with uphill walking or shoes rubbing." },
      { name: "Partial or full tear", note: "A sudden pop or feeling of being kicked, with weak push-off." }
    ],
    tips: [
      "Tendons recover with steady, progressive loading; complete rest weakens them.",
      "Reduce hills, speed work and jumping for now.",
      "Pain up to about 3 out of 10 during exercise is OK if morning stiffness is not worse the next day.",
      "Some antibiotics (fluoroquinolones) are linked to tendon problems; mention any recent courses to your doctor."
    ],
    exercises: [
      {
        name: "Ankle pumps",
        type: "mobility",
        target: ["calcaneal tendon", "gastrocnemius"],
        steps: ["Sit with your legs out.", "Point your feet down, then pull them up toward you.", "Keep a steady rhythm."],
        dose: { sets: 2, reps: 20, restSec: 15 },
        cue: "Good to do before getting out of bed.",
        level: 1
      },
      {
        name: "Calf raise hold",
        type: "isometric",
        target: ["calcaneal tendon", "gastrocnemius", "soleus"],
        steps: ["Stand holding a counter.", "Rise halfway onto your toes (on both feet, or one foot when ready).", "Hold steady, then lower."],
        dose: { sets: 5, holdSec: 45, restSec: 60 },
        cue: "Steady hold; this often eases tendon pain.",
        level: 1
      },
      {
        name: "Double-leg calf raise (floor)",
        type: "strength",
        target: ["calcaneal tendon", "gastrocnemius", "soleus"],
        steps: ["Stand on a flat floor holding a counter.", "Rise onto the balls of both feet over 2 seconds.", "Lower slowly over 3 seconds."],
        dose: { sets: 3, reps: 15, restSec: 45 },
        cue: "Slow up, slower down.",
        level: 1
      },
      {
        name: "Seated calf raise",
        type: "strength",
        target: ["soleus", "calcaneal tendon"],
        steps: ["Sit with your feet flat and a weight (or bag) resting on your knees.", "Lift your heels as high as you can.", "Lower slowly."],
        dose: { sets: 3, reps: 15, restSec: 45 },
        cue: "Targets the deeper calf muscle.",
        level: 2
      },
      {
        name: "Single-leg calf raise (floor)",
        type: "strength",
        target: ["calcaneal tendon", "gastrocnemius", "soleus"],
        steps: ["Stand on one leg on a flat floor holding a counter.", "Rise onto the ball of your foot.", "Lower slowly. Switch sides after the set."],
        dose: { sets: 3, reps: 10, restSec: 60 },
        perSide: true,
        cue: "Equal height on both sides is the goal.",
        level: 2
      },
      {
        name: "Slow heel drop off step",
        type: "strength",
        target: ["calcaneal tendon", "gastrocnemius", "soleus"],
        steps: ["Stand on the edge of a step on the balls of your feet, holding a rail.", "Rise up on both feet.", "Shift onto the sore leg and lower the heel slowly below the step.", "Use both feet to come back up."],
        dose: { sets: 3, reps: 15, restSec: 60 },
        perSide: true,
        cue: "For pain at the heel bone itself, stop at step level and do not drop below it.",
        level: 3
      }
    ],
    redFlags: [
      "A sudden pop or feeling of being kicked in the back of the ankle, and difficulty rising onto your toes: get seen the same day (possible rupture; early treatment matters).",
      "Calf swelling, warmth or redness (possible blood clot).",
      "A hot, red, swollen heel with fever.",
      "Pain in both Achilles tendons with other joint pain, eye inflammation or back stiffness.",
      "New tendon pain after starting a fluoroquinolone antibiotic: contact your prescriber."
    ],
    seeA: "physiotherapist or sports medicine doctor"
  },

  // ---------------------------------------------------------------- ANKLE
  {
    id: "ankle",
    name: "Ankle (sprain)",
    keywords: ["ankle", "ankles", "rolled ankle", "rolled my ankle", "rolled", "sprained ankle", "ankle sprain", "sprain", "sprained", "twisted ankle", "twisted my ankle", "turned ankle", "turned my ankle", "inversion", "ankle swelling", "swollen ankle", "weak ankle", "unstable ankle", "wobbly ankle", "outside of ankle", "outer ankle", "peroneal", "fibularis"],
    structures: ["fibularis longus", "fibularis brevis", "talus", "fibula", "tibialis anterior", "calcaneus", "tibialis posterior"],
    causes: [
      { name: "Lateral ankle sprain", note: "Rolling the foot inward stretches the ligaments on the outer ankle; it is the most common sports injury." },
      { name: "High ankle sprain", note: "Pain higher up, between the shin bones, after a twisting injury; it usually takes longer to recover." },
      { name: "Fracture", note: "Some sprains include a broken bone; the Ottawa ankle rules help decide if an X-ray is needed." },
      { name: "Peroneal tendon irritation", note: "Pain behind the outer ankle bone, often after repeated sprains." }
    ],
    tips: [
      "Get an X-ray if you could not take 4 steps right after the injury or now, or there is bone tenderness at the back edge or tip of either ankle bone or at the base of the fifth toe bone.",
      "First few days: protect, elevate and compress, and walk as comfort allows.",
      "Balance training reduces the risk of spraining it again.",
      "Consider a brace or tape for sport for a few months."
    ],
    exercises: [
      {
        name: "Ankle pumps",
        type: "mobility",
        target: ["tibialis anterior", "gastrocnemius"],
        steps: ["Sit with your leg raised.", "Point your foot down, then pull it up toward you.", "Keep a steady rhythm to help reduce swelling."],
        dose: { sets: 2, reps: 20, restSec: 15 },
        cue: "Move within comfort.",
        level: 1
      },
      {
        name: "Calf stretch",
        type: "stretch",
        target: ["gastrocnemius", "soleus"],
        steps: ["Face a wall with the sore foot back.", "Keep the heel down and lean in.", "Hold, then repeat with the knee slightly bent."],
        dose: { sets: 3, holdSec: 30, restSec: 10 },
        perSide: true,
        cue: "Stretch in the calf; ankle pain should stay mild.",
        level: 1
      },
      {
        name: "Band eversion",
        type: "strength",
        target: ["fibularis longus", "fibularis brevis"],
        steps: ["Sit with a band looped around the outside of your forefoot and anchored on the other side.", "Turn your foot outward against the band.", "Return slowly."],
        dose: { sets: 3, reps: 15, restSec: 30 },
        perSide: true,
        cue: "Movement comes from the ankle, not by rotating the leg.",
        level: 2
      },
      {
        name: "Calf raise",
        type: "strength",
        target: ["gastrocnemius", "soleus", "fibularis longus"],
        steps: ["Stand holding a counter.", "Rise onto the balls of both feet.", "Lower slowly."],
        dose: { sets: 3, reps: 15, restSec: 45 },
        cue: "Keep your weight over the big toe, not rolling out.",
        level: 2
      },
      {
        name: "Single-leg balance",
        type: "balance",
        target: ["fibularis longus", "fibularis brevis", "tibialis anterior"],
        steps: ["Stand on the sore leg near a counter.", "Hold your balance with a soft knee.", "Progress by closing your eyes or standing on a cushion."],
        dose: { sets: 3, holdSec: 30, restSec: 15 },
        perSide: true,
        cue: "Wobbling is normal; it trains the ankle's reflexes.",
        level: 2
      },
      {
        name: "Star reach",
        type: "balance",
        target: ["fibularis longus", "tibialis posterior", "gluteus medius"],
        steps: ["Stand on the sore leg.", "Reach the other foot forward, to the side and behind, tapping lightly each time.", "Return to the middle between reaches."],
        dose: { sets: 3, reps: 6, restSec: 45 },
        perSide: true,
        cue: "Keep the standing knee over the toes.",
        level: 3
      }
    ],
    redFlags: [
      "Unable to take 4 steps, or bone tenderness at the back edge or tip of the ankle bones or the base of the fifth toe bone: get an X-ray.",
      "Visible deformity, or a cold, pale or numb foot: emergency.",
      "A pop at the back of the heel with weak push-off (possible Achilles rupture).",
      "Calf swelling, warmth or redness (possible blood clot).",
      "A hot, red, swollen ankle without injury (possible gout or infection).",
      "The ankle keeps giving way months after the sprain."
    ],
    seeA: "physiotherapist (urgent care for an X-ray if the Ottawa rules apply)"
  },

  // ---------------------------------------------------------------- HEEL & SOLE
  {
    id: "heel-sole",
    name: "Heel & sole (plantar fascia)",
    keywords: ["heel", "heels", "heel pain", "heel pain morning", "heel pain in the morning", "plantar", "plantar fasciitis", "plantar fascia", "plantar fasciitus", "planter fasciitis", "plantar faciitis", "plantar fascitis", "fasciitis", "sole", "sole of foot", "sole of my foot", "bottom of foot", "bottom of my foot", "bottom foot", "arch", "arches", "arch pain", "foot", "feet", "first steps", "first step", "heel spur", "flat feet", "flat foot"],
    structures: ["calcaneus", "flexor digitorum brevis", "abductor hallucis", "abductor digiti minimi of foot", "long plantar ligament", "flexor accessorius", "calcaneal tendon"],
    causes: [
      { name: "Plantar heel pain (plantar fasciitis)", note: "Pain under the heel, worst with the first steps in the morning or after sitting, often easing as you move." },
      { name: "Heel fat pad irritation", note: "A bruised feeling in the middle of the heel, worse on hard floors or barefoot." },
      { name: "Heel bone stress", note: "Pain when squeezing the sides of the heel, especially after a jump in running or walking." },
      { name: "Nerve irritation", note: "Burning, tingling or numbness in the sole can come from a nerve at the inner ankle." }
    ],
    tips: [
      "Wear supportive, cushioned shoes; avoid going barefoot on hard floors.",
      "Do the plantar fascia stretch before your first steps in the morning.",
      "Heel cups or arch-supporting insoles can help.",
      "Most cases improve within 6 to 12 months; strengthening helps speed this up."
    ],
    exercises: [
      {
        name: "Plantar fascia stretch",
        type: "stretch",
        target: ["flexor digitorum brevis", "abductor hallucis", "long plantar ligament"],
        steps: ["Sit and cross the sore foot over the other knee.", "Pull your toes back toward your shin with one hand.", "Feel the stretch along the arch.", "Do this before getting up in the morning."],
        dose: { sets: 3, holdSec: 30, restSec: 10 },
        cue: "Feel the band under the arch tighten with your other thumb.",
        level: 1
      },
      {
        name: "Foot roll",
        type: "mobility",
        target: ["flexor digitorum brevis", "abductor hallucis", "flexor accessorius"],
        steps: ["Sit with a ball or frozen water bottle under your foot.", "Roll it slowly from heel to toes.", "Use moderate pressure."],
        dose: { sets: 2, holdSec: 60, restSec: 15 },
        cue: "Comfortable pressure, not pain.",
        level: 1
      },
      {
        name: "Calf stretch",
        type: "stretch",
        target: ["gastrocnemius", "soleus", "calcaneal tendon"],
        steps: ["Face a wall with the sore foot back.", "Keep the heel down and lean in.", "Hold, then repeat with the knee bent."],
        dose: { sets: 3, holdSec: 30, restSec: 10 },
        perSide: true,
        cue: "Tight calves add load to the heel.",
        level: 1
      },
      {
        name: "Towel scrunch",
        type: "strength",
        target: ["flexor digitorum brevis", "abductor hallucis", "flexor accessorius"],
        steps: ["Sit with a towel flat under your foot.", "Scrunch the towel toward you with your toes.", "Spread it out and repeat."],
        dose: { sets: 3, reps: 10, restSec: 30 },
        cue: "Keep your heel on the floor.",
        level: 1
      },
      {
        name: "Double-leg heel raise",
        type: "strength",
        target: ["gastrocnemius", "soleus", "flexor digitorum brevis"],
        steps: ["Stand holding a counter.", "Rise onto the balls of both feet.", "Lower slowly over 3 seconds."],
        dose: { sets: 3, reps: 12, restSec: 45 },
        cue: "Smooth and controlled.",
        level: 2
      },
      {
        name: "Single-leg heel raise with toe towel",
        type: "strength",
        target: ["flexor digitorum brevis", "abductor hallucis", "gastrocnemius"],
        steps: ["Roll a towel and place it under your toes so they are bent back.", "Stand on the sore leg, holding a counter.", "Rise up over 3 seconds, hold 2 seconds, lower over 3 seconds."],
        dose: { sets: 3, reps: 12, restSec: 90 },
        perSide: true,
        cue: "Do this every other day; add a backpack with books as it gets easier.",
        level: 3
      }
    ],
    redFlags: [
      "Heel pain after a fall or jump from height.",
      "Swelling, redness and warmth with fever.",
      "Numbness, burning or tingling in the sole.",
      "Pain at rest or at night, unrelated to activity.",
      "Pain in both heels with other joint pain or back stiffness.",
      "Diabetes with foot pain, a wound, or colour change: get it checked promptly."
    ],
    seeA: "physiotherapist or podiatrist"
  },

  // ---------------------------------------------------------------- TOP OF FOOT / TOES
  {
    id: "top-foot-toes",
    name: "Top of foot & toes",
    keywords: ["top of foot", "top of my foot", "top foot", "toe", "toes", "big toe", "bunion", "bunions", "ball of foot", "ball of my foot", "ball foot", "metatarsal", "metatarsals", "metatarsalgia", "forefoot", "midfoot", "mortons neuroma", "morton neuroma", "neuroma", "turf toe", "stubbed toe", "instep", "laces", "shoelaces", "hammer toe", "gout"],
    structures: ["extensor digitorum longus", "extensor digitorum brevis", "extensor hallucis longus", "extensor hallucis brevis", "metatarsal", "phalanx of big toe", "toe", "sesamoid bone of foot", "dorsal interossei of foot"],
    causes: [
      { name: "Extensor tendon irritation", note: "Tight laces or stiff shoes can irritate the tendons on the top of the foot." },
      { name: "Metatarsal stress fracture", note: "Pain in one spot on the top of the foot with swelling, after more running or walking than usual." },
      { name: "Ball-of-foot pain / Morton's neuroma", note: "Aching or burning under the ball of the foot or between the toes, worse in tight or high-heeled shoes." },
      { name: "Big toe joint problems", note: "Stiffness, a bunion or arthritis at the big toe; sudden severe redness and swelling can be gout." }
    ],
    tips: [
      "Loosen your laces or skip the eyelet over the sore spot.",
      "Choose shoes with a wide toe box and lower heels.",
      "A metatarsal pad can offload the ball of the foot.",
      "Reduce running or long walks until the pain settles."
    ],
    exercises: [
      {
        name: "Toe spread",
        type: "mobility",
        target: ["dorsal interossei of foot", "abductor hallucis"],
        steps: ["Sit with your feet flat on the floor.", "Spread your toes as wide as you can.", "Hold for 3 seconds and relax."],
        dose: { sets: 2, reps: 10, restSec: 20 },
        cue: "It may be hard at first; small movements still count.",
        level: 1
      },
      {
        name: "Towel scrunch",
        type: "strength",
        target: ["flexor digitorum brevis", "flexor accessorius"],
        steps: ["Sit with a towel flat under your foot.", "Scrunch the towel toward you with your toes.", "Spread it back out and repeat."],
        dose: { sets: 3, reps: 10, restSec: 30 },
        cue: "Heel stays on the floor.",
        level: 1
      },
      {
        name: "Big toe stretch",
        type: "stretch",
        target: ["phalanx of big toe", "first metatarsal bone", "flexor hallucis longus"],
        steps: ["Sit and cross the foot over your other knee.", "Gently bend the big toe up toward you.", "Hold, then gently bend it down."],
        dose: { sets: 3, holdSec: 20, restSec: 10 },
        cue: "Gentle; stop if it is sharp or the joint is hot and red.",
        level: 1
      },
      {
        name: "Top-of-foot stretch",
        type: "stretch",
        target: ["extensor digitorum longus", "extensor hallucis longus", "tibialis anterior"],
        steps: ["Stand holding a counter.", "Place the top of your toes on the floor behind you.", "Gently press the ankle forward until you feel a stretch on the top of the foot."],
        dose: { sets: 3, holdSec: 20, restSec: 10 },
        perSide: true,
        cue: "Mild stretch over the top of the foot and front of the ankle.",
        level: 1
      },
      {
        name: "Heel raise",
        type: "strength",
        target: ["flexor hallucis longus", "gastrocnemius", "soleus"],
        steps: ["Stand holding a counter.", "Rise onto the balls of both feet, keeping weight over the big toe.", "Lower slowly."],
        dose: { sets: 3, reps: 12, restSec: 45 },
        cue: "Skip if it hurts the ball of the foot.",
        level: 2
      }
    ],
    redFlags: [
      "A suddenly hot, red, very painful, swollen big toe or joint: see a doctor the same day, urgently if you have a fever.",
      "Pain in one spot on a bone that is worse with walking (possible stress fracture).",
      "Deformity or inability to bear weight after an injury.",
      "Diabetes with numbness, a wound or colour change on the foot: get seen promptly.",
      "A toe that is cold, pale or blue."
    ],
    seeA: "podiatrist or physiotherapist"
  }
];

// ------------------------------------------------------------------ matching

const STOPWORDS = new Set([
  "a", "an", "the", "my", "me", "i", "im", "ive", "is", "am", "are", "was", "be", "been",
  "of", "on", "in", "at", "to", "from", "and", "or", "when", "while", "after", "during", "with", "for",
  "since", "this", "that", "there", "have", "has", "had", "got", "get", "getting", "feel", "feels",
  "feeling", "like", "really", "very", "so", "bit", "little", "kind", "sort", "just", "some", "its",
  "pain", "pains", "painful", "hurt", "hurts", "hurting", "sore", "soreness", "ache", "aches", "aching", "achy"
]);

function stem(w) {
  if (w.length > 4 && w.endsWith("ies")) return w.slice(0, -3) + "y";
  if (w.length > 4 && /(s|x|z|ch|sh)es$/.test(w)) return w.slice(0, -2);
  if (w.length > 3 && w.endsWith("s") && !/(ss|us|is)$/.test(w)) return w.slice(0, -1);
  return w;
}

function rawTokens(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/['’`]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .split(" ")
    .filter((w) => w && !STOPWORDS.has(w));
}

function lev(a, b) {
  if (Math.abs(a.length - b.length) > 1) return 2;
  const prev = new Array(b.length + 1);
  for (let j = 0; j <= b.length; j++) prev[j] = j;
  for (let i = 1; i <= a.length; i++) {
    let diag = prev[0];
    prev[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = prev[j];
      prev[j] = Math.min(prev[j] + 1, prev[j - 1] + 1, diag + (a[i - 1] === b[j - 1] ? 0 : 1));
      diag = tmp;
    }
  }
  return prev[b.length];
}

let INDEX = null;

function buildIndex() {
  const known = new Set();
  const regions = PAIN_REGIONS.map((region) => {
    const seen = new Set();
    const phrases = [];
    for (const kw of region.keywords) {
      const raw = rawTokens(kw);
      if (!raw.length) continue;
      const stems = raw.map(stem);
      const key = stems.join(" ");
      if (seen.has(key)) continue;
      seen.add(key);
      stems.forEach((s) => known.add(s));
      phrases.push({ key, raw, words: stems.length, weight: 1 + 2 * (stems.length - 1) });
    }
    return { region, phrases };
  });
  return { regions, known };
}

// Returns regions ranked by how well the free text matches (score>0 only). Handles plurals and simple typos lightly.
export function matchPain(text) {
  if (!INDEX) INDEX = buildIndex();
  const raw = rawTokens(text);
  if (!raw.length) return [];
  const stems = raw.map(stem);
  const hay = " " + stems.join(" ") + " ";
  // Tokens eligible for fuzzy matching: long enough and not already a known keyword word.
  const fuzzy = [];
  raw.forEach((r, i) => {
    if (r.length >= 5 && !INDEX.known.has(stems[i])) fuzzy.push([r, stems[i]]);
  });

  const out = [];
  for (const { region, phrases } of INDEX.regions) {
    let score = 0;
    for (const p of phrases) {
      if (hay.includes(" " + p.key + " ")) {
        score += p.weight;
      } else if (p.words === 1 && p.raw[0].length >= 5 && fuzzy.length) {
        const kr = p.raw[0];
        const ks = p.key;
        if (fuzzy.some(([r, s]) => lev(r, kr) <= 1 || lev(s, ks) <= 1)) score += 0.5;
      }
    }
    if (score > 0) out.push({ region, score });
  }
  return out.sort((a, b) => b.score - a.score);
}
