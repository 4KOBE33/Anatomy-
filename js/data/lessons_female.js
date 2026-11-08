// Guided lessons for the FEMALE body (HRA / Visible Human Female reference organs). Same schema as LESSONS in
// lessons.js: each step highlights `structures` (lowercase substrings matched as whole words against part base names,
// falling back to substring), keeps `context` solid for orientation and fades everything else. Side defaults to
// "right". Every lesson carries body: "female" so it is only offered when the female body is loaded. Content follows
// Moore / Netter / Gray's and teaches relationships and clinical patterns rather than repeating kb_female.js.
export const LESSONS_FEMALE = [
  // ───────────────────────────── FEMALE INTERNAL GENITALIA ─────────────────────────────
  {
    id: "female-internal-genitalia",
    body: "female",
    title: "Uterus, tubes, ovaries & vagina",
    emoji: "🌸",
    category: "Organs",
    level: 1,
    minutes: 6,
    systems: ["reproductive", "urinary", "digestive"],
    intro: "The female internal genital organs sit in the lesser pelvis between the bladder in front and the rectum behind. Learn the uterus by its regions, follow the tube out to the ovary, then come back down through the cervix to the vagina. Almost every clinical point (ectopic pregnancy, cervical screening, caesarean section) depends on knowing which part you are in.",
    steps: [
      {
        title: "The uterus: fundus, body and walls",
        structures: ["fundus of uterus", "body of uterus", "anterior wall of uterus", "posterior wall of uterus"],
        context: ["cervix", "vagina", "fundus of urinary bladder", "rectum"],
        side: "both",
        text: "The fundus is the dome above the entry of the tubes; the body is the upper two-thirds. In most women the uterus is anteverted (tipped forward on the vagina) and anteflexed (bent forward at the cervix), so its anterior wall rests on the bladder and its posterior wall faces the rectum. The wall has three layers: peritoneum outside, a thick myometrium and the endometrium that is shed each month. In pregnancy the fundus reaches the umbilicus at about 20 weeks; after delivery the contracting myometrium clamps the uterine vessels, and a floppy (atonic) uterus is the commonest cause of postpartum haemorrhage."
      },
      {
        title: "Cornua: where the tubes enter",
        structures: ["cornua"],
        context: ["fundus of uterus", "body of uterus", "isthmus of fallopian tube", "round ligament of uterus", "ovarian ligament"],
        side: "both",
        text: "The cornua (horns) are the upper outer angles of the uterus. Here the tube passes through the uterine wall (its intramural part), the round ligament leaves just in front and below, and the ovarian ligament just behind and below. Both ligaments are remnants of the gubernaculum, so they meet at the same point. A pregnancy implanted in the intramural tube (cornual or interstitial ectopic) can grow larger before it ruptures and then bleeds heavily."
      },
      {
        title: "Isthmus and cervix",
        structures: ["lower uterine segment", "cervix", "internal cervical os", "external cervical os"],
        context: ["body of uterus", "vagina"],
        side: "both",
        text: "Below the body the uterus narrows into a short isthmus at the internal os. In late pregnancy the isthmus thins and stretches into the lower uterine segment, which is where a transverse caesarean incision is made, and where a low-lying placenta (praevia) bleeds. The cervix runs from the internal os to the external os, which opens into the vagina. Its canal is lined by columnar epithelium and its vaginal surface by squamous epithelium; the junction between them, around the external os, is the transformation zone where HPV-driven cervical cancer starts and where a cervical sample is taken."
      },
      {
        title: "Vagina and the fornices",
        structures: ["vagina", "cervicovaginal junction"],
        context: ["cervix", "fundus of urinary bladder", "rectum"],
        side: "both",
        text: "The vagina runs up and back from the vestibule to the cervix. Its wall attaches around the cervix, leaving a gutter, the vaginal fornix, which is deepest posteriorly. The posterior fornix lies just in front of the rectouterine pouch, the lowest point of the peritoneal cavity, so fluid there can be seen on transvaginal ultrasound or sampled through the fornix. In front, the vagina is pressed against the bladder base and urethra, which is why prolonged obstructed labour can leave a vesicovaginal fistula."
      },
      {
        title: "The uterine tube, lateral to medial",
        structures: ["uterine tube infundibulum", "fimbria of uterine tube", "abdominal ostium of uterine tube", "ampulla of uterine tube", "isthmus of fallopian tube"],
        context: ["ovary", "cornua", "fundus of uterus"],
        side: "both",
        text: "Each tube is about 10 cm long. The infundibulum is a funnel whose fimbriae sweep over the ovary; its abdominal ostium opens straight into the peritoneal cavity, so infection can climb from the vagina to the peritoneum. The ampulla is the wide middle part where fertilisation usually happens, and it is the commonest site of ectopic pregnancy. The isthmus is the narrow medial third: an isthmic ectopic ruptures early, and this is where sterilisation clips go. Many 'ovarian' serous cancers actually begin in the fimbriae."
      },
      {
        title: "Ovary and its suspensory ligament",
        structures: ["ovary", "suspensory ligament of ovary"],
        context: ["ovarian ligament", "mesovarium", "fimbria of uterine tube", "uterine tube infundibulum", "ureter"],
        side: "both",
        text: "The ovary lies in the ovarian fossa on the side wall of the pelvis, with the ureter and internal iliac vessels just behind it and the obturator nerve lateral to it. It hangs from the back of the broad ligament by the mesovarium, is tied to the uterus by the ovarian ligament and to the pelvic brim by the suspensory ligament, which carries the ovarian artery (from the aorta at L2) and veins. Because its vessels and lymphatics come from high up, ovarian pain is felt around the umbilicus and ovarian cancer spreads first to para-aortic nodes. Twisting of the vascular pedicle (torsion) is a surgical emergency."
      }
    ],
    takeaways: [
      "Uterus = fundus, body, isthmus (lower uterine segment in pregnancy), cervix; usually anteverted and anteflexed over the bladder.",
      "Cervical cancer arises in the transformation zone around the external os.",
      "Tube: infundibulum (fimbriae, ostium) → ampulla (fertilisation, most ectopics) → isthmus (ligation) → intramural part at the cornu.",
      "The ovary's vessels and lymph run in the suspensory ligament to the aorta, IVC/left renal vein and para-aortic nodes.",
      "The posterior fornix of the vagina lies against the rectouterine pouch."
    ]
  },

  // ───────────────────────────── LIGAMENTS & POUCHES OF THE FEMALE PELVIS ─────────────────────────────
  {
    id: "female-pelvic-ligaments",
    body: "female",
    title: "Ligaments, pouches & the ureter in the female pelvis",
    emoji: "🎗️",
    category: "Organs",
    level: 2,
    minutes: 6,
    systems: ["reproductive", "urinary", "cardio", "digestive"],
    intro: "Peritoneum drapes over the uterus like a sheet over a washing line, forming the broad ligament and two pouches. Underneath it, condensed pelvic fascia (the cardinal and uterosacral ligaments) does the real work of holding the cervix up. Threading through all of this is the ureter, which every gynaecological surgeon has to find before clamping anything.",
    steps: [
      {
        title: "Broad ligament and its three parts",
        structures: ["broad ligament", "mesosalpinx", "mesovarium"],
        context: ["body of uterus", "ampulla of uterine tube", "ovary"],
        side: "both",
        text: "The broad ligament is a double fold of peritoneum running from the side of the uterus to the side wall of the pelvis. The part beside the uterus is the mesometrium, the part around the tube is the mesosalpinx, and a small fold from its back holds the ovary (the mesovarium). Between its layers run the uterine and ovarian vessels, the round and ovarian ligaments, and at its base the ureter. It carries vessels but gives the uterus very little support."
      },
      {
        title: "Round and ovarian ligaments: the old gubernaculum",
        structures: ["round ligament of uterus", "ovarian ligament"],
        context: ["cornua", "body of uterus", "ovary"],
        side: "both",
        text: "The ovarian ligament joins the ovary to the uterine horn; the round ligament continues from the same point forward to the deep inguinal ring, through the inguinal canal and into the labium majus. Together they are the female gubernaculum, which is why the ovary descends only as far as the pelvis. The round ligament is the female equivalent of the spermatic cord in the inguinal canal, stretches painfully in pregnancy, and can carry lymph from the uterine horn to the superficial inguinal nodes."
      },
      {
        title: "Suspensory ligament of the ovary",
        structures: ["suspensory ligament of ovary"],
        context: ["ovary", "ureter", "common iliac vein", "internal iliac vein"],
        side: "both",
        text: "This peritoneal fold runs from the ovary up over the pelvic brim and carries the ovarian artery, veins, lymphatics and nerves (it is also called the infundibulopelvic ligament). It is clamped to remove an ovary. The ureter crosses the brim into the pelvis just beneath and medial to it, so the ureter must be seen and kept clear before the clamp goes on."
      },
      {
        title: "Cardinal and uterosacral ligaments: the real supports",
        structures: ["cardinal ligament of uterus", "uterosacral ligament"],
        context: ["cervix", "vagina", "sacrum", "rectum"],
        side: "both",
        text: "The cardinal (transverse cervical) ligaments fan out from the cervix and upper vagina to the side walls of the pelvis; the uterosacral ligaments run back around the rectum to the sacrum, holding the cervix back so the uterus stays anteverted. With the pelvic floor they keep the uterus from descending. When they are stretched by childbirth and weakened after the menopause, the uterus and vaginal walls prolapse. Endometriosis often seeds the uterosacral ligaments."
      },
      {
        title: "Water under the bridge",
        structures: ["uterine artery", "ureter"],
        context: ["cervix", "cardinal ligament of uterus", "uterine vein", "internal iliac vein"],
        side: "both",
        text: "The uterine artery leaves the internal iliac artery and runs medially along the top of the cardinal ligament. About 2 cm lateral to the cervix it crosses ABOVE the ureter, which passes underneath toward the bladder. This is the classic place for the ureter to be clamped, cut or tied with the artery during a hysterectomy. The uterine veins form a plexus beside the uterus that drains to the internal iliac vein; it becomes huge in pregnancy."
      },
      {
        title: "Peritoneal pouches",
        structures: ["uterovesical pouch"],
        context: ["fundus of urinary bladder", "body of uterus", "cervicovaginal junction", "rectum"],
        side: "both",
        text: "As the peritoneum passes from the bladder onto the uterus it forms the shallow uterovesical pouch, which is opened at caesarean section so the bladder can be pushed down off the lower uterine segment. Behind the uterus the peritoneum dips much deeper, down to the posterior vaginal fornix, before turning onto the rectum: this is the rectouterine pouch (of Douglas, not modelled separately here). It is the lowest part of the female peritoneal cavity, so blood from a ruptured ectopic, pus and ascites collect there."
      }
    ],
    takeaways: [
      "Broad ligament = mesometrium + mesosalpinx + mesovarium: a mesentery, not a real support.",
      "Ovarian ligament + round ligament = the female gubernaculum; the round ligament passes through the inguinal canal.",
      "The suspensory (infundibulopelvic) ligament carries the ovarian vessels; the ureter lies close below it at the pelvic brim.",
      "Cardinal and uterosacral ligaments (with the pelvic floor) support the cervix; their failure causes prolapse.",
      "The uterine artery crosses above the ureter beside the cervix: water under the bridge."
    ]
  },

  // ───────────────────────────── BREAST ─────────────────────────────
  {
    id: "female-breast",
    body: "female",
    title: "The breast",
    emoji: "🩷",
    category: "Trunk & back",
    level: 1,
    minutes: 5,
    systems: ["reproductive"],
    intro: "The breast is a modified sweat gland lying in the subcutaneous fat over pectoralis major. Its anatomy explains how it makes and delivers milk, how breast cancer shows itself on the skin, and where that cancer spreads.",
    steps: [
      {
        title: "Glandular lobes and fat",
        structures: ["mammary lobes", "mammary fat"],
        context: ["suspensory ligaments of breast", "nipple of breast"],
        text: "Each breast has 15–20 glandular lobes arranged like the spokes of a wheel around the nipple, embedded in fat. The fat makes up most of the size of a non-lactating breast. The breast lies on the pectoral fascia from about the 2nd to the 6th rib, with a loose space behind it so it moves freely; a tail of tissue runs up into the axilla. Most glandular tissue, and most cancers, are in the upper outer quadrant."
      },
      {
        title: "Ducts and sinuses",
        structures: ["main lactiferous ducts", "main lactiferous sinuses"],
        context: ["mammary lobes", "nipple of breast", "areola of breast"],
        text: "Each lobe drains by one lactiferous duct that runs toward the nipple and widens beneath the areola into a lactiferous sinus. During feeding the baby's jaws compress the sinuses through the areola, so a good latch takes in the areola, not just the nipple. Most breast cancers start in the duct system; bloody discharge from a single duct suggests an intraductal papilloma."
      },
      {
        title: "Nipple, areola and Montgomery tubercles",
        structures: ["nipple of breast", "areola of breast", "areolar tubercles of breast"],
        context: ["main lactiferous sinuses", "mammary fat"],
        text: "The ducts open separately on the nipple, which contains smooth muscle and lies at about the 4th intercostal space (T4 dermatome) in a young woman. The pigmented areola darkens in pregnancy, and its small bumps (Montgomery tubercles) are sebaceous areolar glands that lubricate the nipple during breastfeeding. A newly retracted nipple, or an eczema-like rash that starts on the nipple (Paget's disease), suggests an underlying cancer."
      },
      {
        title: "Suspensory (Cooper's) ligaments",
        structures: ["suspensory ligaments of breast"],
        context: ["mammary lobes", "mammary fat"],
        text: "Fibrous bands run from the skin through the breast to the deep fascia, dividing the lobes and holding the breast up. A cancer that infiltrates them shortens them and pulls the skin in (dimpling). If tumour blocks the skin lymphatics, the skin swells but stays tied down at hair follicles and pores, giving the pitted look of orange peel (peau d'orange). A lump fixed to pectoralis major no longer moves when the muscle contracts."
      },
      {
        title: "Lymphatic drainage: where breast cancer spreads",
        structures: ["mammary lobes", "suspensory ligaments of breast"],
        context: ["nipple of breast", "areola of breast"],
        side: "both",
        text: "About 75% of lymph, mainly from the lateral quadrants, drains to the axillary nodes, reaching the pectoral (anterior) group first. Much of the medial quadrants drains to parasternal nodes along the internal thoracic vessels, and some lymph crosses to the other breast or down toward the abdomen. Axillary node levels are defined by pectoralis minor (I lateral, II behind, III medial). Sentinel node biopsy finds the first node; a full axillary clearance risks the long thoracic nerve (winged scapula), the thoracodorsal nerve and arm lymphoedema."
      }
    ],
    takeaways: [
      "15–20 lobes, each with its own lactiferous duct and sinus, opening on the nipple.",
      "Most tissue and most cancers are in the upper outer quadrant and axillary tail.",
      "Shortened Cooper's ligaments → skin dimpling; blocked lymphatics → peau d'orange; duct involvement → nipple retraction.",
      "Lymph: ~75% to axillary nodes; medial quadrants to parasternal nodes."
    ]
  },

  // ───────────────────────────── FEMALE BONY PELVIS ─────────────────────────────
  {
    id: "female-bony-pelvis",
    body: "female",
    title: "The female bony pelvis",
    emoji: "🦴",
    category: "Skeleton",
    level: 2,
    minutes: 6,
    systems: ["skeletal"],
    intro: "The female pelvis is built to let a baby's head through. Learn its three fused bones, the sacrum and coccyx behind, and then the features that make it gynecoid: a round inlet, a wide subpubic angle and well-spaced ischial spines. This model shows each hip bone's compact (outer) and spongy (inner) bone as separate pieces, and it has a sixth lumbar vertebra.",
    steps: [
      {
        title: "Ilium",
        structures: ["ilium"],
        context: ["sacrum", "ischium", "pubis", "femur"],
        text: "The ilium is the fan-shaped upper part of the hip bone and forms the top of the acetabulum. Find the iliac crest, the anterior superior iliac spine (ASIS) and, at the back, the auricular surface that forms the sacroiliac joint. The arcuate line on its inner surface is part of the pelvic brim. A line across the tops of the crests passes through L4, the landmark for lumbar puncture and labour epidurals. In women the greater sciatic notch is wide, close to 90°."
      },
      {
        title: "Ischium",
        structures: ["ischium"],
        context: ["ilium", "pubis", "sacrum", "coccyx"],
        text: "The ischium forms the back and lower part of the hip bone. Its tuberosity bears your weight when sitting. Its spine points inward and is the key obstetric landmark: the distance between the two spines (about 10 cm) is usually the narrowest part of the birth canal, the descent of the baby's head is measured as its 'station' above or below the spines, and the pudendal nerve passes just behind each spine, where a pudendal block is given."
      },
      {
        title: "Pubis and the pubic arch",
        structures: ["pubis"],
        context: ["ilium", "ischium", "femur"],
        side: "both",
        text: "The two pubic bones meet in front at the pubic symphysis. Below it, their inferior rami form the pubic arch. In women the subpubic angle is more than 80° (about the angle between your spread thumb and index finger); in men it is under 70°. The wide arch lets the head pass under the symphysis at delivery. In pregnancy the hormone relaxin loosens the symphysis, which can cause pelvic girdle pain."
      },
      {
        title: "Sacrum and coccyx",
        structures: ["sacrum", "coccyx"],
        context: ["ilium", "lumbar vertebra 5", "lumbar vertebra 6"],
        side: "both",
        text: "The sacrum closes the pelvis behind. The front edge of its first segment, the promontory, is the back end of the obstetric conjugate, the shortest front-to-back diameter of the inlet (normally at least 10 cm). In women the sacrum is shorter, wider and less curved. The coccyx below is more mobile in women and is pushed backward during delivery to widen the outlet; childbirth is a common cause of coccyx pain."
      },
      {
        title: "A sixth lumbar vertebra",
        structures: ["lumbar vertebra 6"],
        context: ["lumbar vertebra 5", "sacrum", "ilium"],
        side: "both",
        text: "This body has six lumbar-type vertebrae: a common variant called a lumbosacral transitional vertebra. It matters because it shifts every landmark you count from: a surgeon or anaesthetist counting up from the sacrum will be one level out. Always confirm levels by counting down from C2 or from the twelfth rib-bearing vertebra."
      },
      {
        title: "The pelvis as a birth canal",
        structures: ["ilium", "ischium", "pubis", "sacrum", "coccyx"],
        context: ["femur", "lumbar vertebra 5"],
        side: "both",
        text: "Put it together. Compared with the male pelvis, the female pelvis is lighter, with a wide, shallow lesser pelvis, an oval or round inlet (heart-shaped in men), a larger outlet, a wide pubic arch, oval obturator foramina, smaller acetabula and ischial spines that do not project far inward. This 'gynecoid' shape is the most common type in women and the most favourable for vaginal birth. Clinically the pelvis is assessed by the diagonal conjugate (promontory to the lower edge of the symphysis), the interspinous distance and the subpubic angle."
      }
    ],
    takeaways: [
      "Hip bone = ilium + ischium + pubis, meeting at the acetabulum.",
      "Female: round inlet, wide shallow cavity, subpubic angle > 80°, greater sciatic notch ~90°, everted ischial tuberosities.",
      "The interspinous diameter (~10 cm) is usually the narrowest plane; station is measured from the ischial spines.",
      "The obstetric conjugate runs from the sacral promontory to the back of the symphysis (normally ≥ 10 cm).",
      "Transitional (sixth) lumbar vertebrae are common and cause level-counting errors."
    ]
  },

  // ───────────────────────────── KIDNEY & URINARY TRACT ─────────────────────────────
  {
    id: "female-urinary-internal",
    body: "female",
    title: "Inside the kidney & bladder",
    emoji: "💧",
    category: "Organs",
    level: 2,
    minutes: 6,
    systems: ["urinary", "cardio", "reproductive"],
    intro: "The female model shows the kidney opened up into its working parts and the bladder divided into regions. Follow a drop of urine from the cortex to the urethra, then see how the female bladder sits on the vagina and uterus.",
    steps: [
      {
        title: "Capsule and cortex",
        structures: ["kidney capsule", "outer cortex of kidney"],
        context: ["renal artery", "renal vein"],
        text: "A tough fibrous capsule wraps the kidney; outside it lie perirenal fat and the renal fascia. Stretching the capsule (infection, obstruction, bleeding) causes loin pain. Beneath it the cortex holds the glomeruli and convoluted tubules and receives most of the renal blood flow. A shrunken, thin cortex on ultrasound is a sign of chronic kidney disease."
      },
      {
        title: "Medulla: pyramids, papillae and columns",
        structures: ["renal pyramid", "renal papilla", "renal column"],
        context: ["outer cortex of kidney", "minor calyx"],
        text: "The medulla is divided into 8–18 pyramids, striped by loops of Henle and collecting ducts that concentrate the urine. Each pyramid points inward to a papilla, which drips urine into a minor calyx. Cortex dips between the pyramids as renal columns, carrying the interlobar vessels; a large column can mimic a tumour on a scan. The papillae have a poor blood supply and can die and slough off (papillary necrosis) in diabetes, sickle cell disease or analgesic overuse."
      },
      {
        title: "Calyces and renal pelvis",
        structures: ["minor calyx", "major calyx", "renal pelvis"],
        context: ["renal papilla", "ureter"],
        text: "Minor calyces cup the papillae, join into two or three major calyces, and these form the funnel-shaped renal pelvis. Peristalsis starts here. On imaging, normally cupped calyces become blunted or clubbed with obstruction or scarring. A staghorn stone fills the pelvis and calyces. The pelviureteric junction is the first narrowing where stones stick and where congenital obstruction occurs."
      },
      {
        title: "The renal hilum",
        structures: ["hilum of kidney", "renal artery", "renal vein", "renal pelvis"],
        context: ["kidney capsule", "inferior vena cava", "descending aorta"],
        text: "At the hilum the structures line up front to back as Vein, Artery, Pelvis (VAP). The left renal vein is longer and crosses in front of the aorta just below the superior mesenteric artery; in women it also receives the left ovarian vein, while the right ovarian vein drains straight into the IVC. Fibromuscular dysplasia of the renal artery is a cause of hypertension in young women."
      },
      {
        title: "The ureter in the female pelvis",
        structures: ["ureter"],
        context: ["renal pelvis", "common iliac vein", "uterine artery", "cervix", "fundus of urinary bladder"],
        side: "both",
        text: "The ureter runs down on psoas, crosses the pelvic brim at the bifurcation of the common iliac vessels, then passes along the side wall behind the ovary. Near the cervix it runs under the uterine artery and beside the lateral vaginal fornix before entering the bladder. It narrows at three points (pelviureteric junction, pelvic brim, entry to the bladder) where stones lodge. In pregnancy it dilates (more on the right), making infection more likely."
      },
      {
        title: "Bladder: trigone, orifices, dome and neck",
        structures: ["trigone of urinary bladder", "ureteral orifice", "fundus of urinary bladder", "urinary bladder neck"],
        context: ["ureter", "body of uterus", "vagina", "cervix"],
        side: "both",
        text: "Inside, the smooth trigone lies between the two ureteric orifices and the internal urethral orifice; the ureters pass obliquely through the wall, which acts as a valve against reflux. The base of the bladder sits on the anterior vaginal wall and cervix (cystocele, vesicovaginal fistula), and the uterus rests on its peritoneum-covered dome; a blow to a full bladder ruptures the dome into the peritoneal cavity. The neck rests on the pelvic floor; women have no true internal sphincter, so loss of bladder-neck support after childbirth causes stress incontinence."
      }
    ],
    takeaways: [
      "Urine path: papilla → minor calyx → major calyx → renal pelvis → ureter → ureteric orifice → bladder.",
      "Hilum front to back: Vein, Artery, Pelvis.",
      "Ureter narrowings: pelviureteric junction, pelvic brim, vesicoureteric junction (narrowest).",
      "Female relations: bladder base on the vagina and cervix, uterus on the dome; ureter under the uterine artery."
    ]
  },

  // ───────────────────────────── THE EYE ─────────────────────────────
  {
    id: "female-eye",
    body: "female",
    title: "The eye: coats, fluids & muscles",
    emoji: "👁️",
    category: "Head & neck",
    level: 2,
    minutes: 7,
    systems: ["nervous", "muscular", "cardio", "nerves"],
    intro: "This body has a fully modelled eye. It is built in three coats (fibrous outside, vascular uvea in the middle, retina inside) around three spaces filled with aqueous and vitreous humour. Six extra-ocular muscles move it. Rotate the head and zoom into one eye.",
    steps: [
      {
        title: "The fibrous coat: cornea and sclera",
        structures: ["cornea", "sclera", "corneo scleral junction"],
        context: ["iris", "lens"],
        text: "The transparent cornea in front does most of the eye's focusing; it has no blood vessels and is very sensitive (corneal reflex: CN V1 in, CN VII out). The white sclera covers the rest and takes the tendons of the eye muscles. They meet at the limbus, which holds the stem cells of the corneal surface and overlies the drainage angle; a red ring here (ciliary flush) points to iritis or acute glaucoma rather than conjunctivitis."
      },
      {
        title: "The uvea: iris, ciliary body and choroid",
        structures: ["iris", "pupil", "ciliary body", "ciliary muscle", "ciliary processes", "optic choroid"],
        context: ["sclera", "lens"],
        text: "The iris is a diaphragm: the parasympathetic sphincter (CN III) makes the pupil small and the sympathetic dilator makes it large. The ciliary body behind it has two jobs: its processes secrete aqueous humour, and its smooth muscle relaxes the lens zonules for near vision. The choroid is a dense vascular layer that feeds the outer retina, including the photoreceptors."
      },
      {
        title: "Lens and zonules",
        structures: ["lens", "suspensory ligament of lens"],
        context: ["ciliary body", "iris"],
        text: "The lens hangs from the ciliary body by fine zonular fibres. At rest they are tight and keep the lens flat for distance; when the ciliary muscle contracts they slacken and the lens rounds up for reading. With age the lens stiffens (presbyopia) and clouds (cataract). Weak zonules in Marfan syndrome let the lens slip out of place."
      },
      {
        title: "Aqueous humour and its drainage",
        structures: ["aqueous humor", "trabecular meshwork", "schlemms canal"],
        context: ["cornea", "iris", "lens", "ciliary processes"],
        text: "Aqueous is made by the ciliary processes behind the iris, flows through the pupil into the anterior chamber and drains at the angle through the trabecular meshwork into the canal of Schlemm. If drainage fails the pressure rises and damages the optic nerve: glaucoma. In open-angle glaucoma the meshwork resists outflow slowly and painlessly; in acute angle closure the iris blocks it, giving a painful red eye with a mid-dilated pupil, an emergency."
      },
      {
        title: "Retina, macula, fovea and optic disc",
        structures: ["retina", "macula lutea", "fovea", "optic disc"],
        context: ["vitreous humor", "optic nerve", "optic choroid"],
        text: "The retina lines the back of the eye as far forward as the ora serrata. The macula, temporal to the disc, holds most of the cones, and the fovea at its centre gives the sharpest vision. The optic disc, where the nerve leaves, has no photoreceptors and makes the blind spot. Through an ophthalmoscope you can see a swollen disc (papilloedema from raised intracranial pressure), a cupped disc (glaucoma) and macular degeneration. The vitreous gel fills the space in front; when it peels away with age it can tear the retina."
      },
      {
        title: "Blood supply of the eye",
        structures: ["opthalmic artery", "central retinal artery", "central retinal vein", "long posterior ciliary artery"],
        context: ["optic nerve", "retina", "optic choroid"],
        text: "The ophthalmic artery is the first branch of the internal carotid. Its central retinal branch runs inside the optic nerve and feeds the inner retina as an end artery: blocking it causes sudden painless blindness with a cherry-red spot at the fovea, which still gets blood from the choroid. The ciliary arteries supply the choroid, ciliary body and iris. The central retinal vein drains to the ophthalmic veins and cavernous sinus; its occlusion gives a 'stormy sunset' fundus."
      },
      {
        title: "Extra-ocular muscles",
        structures: ["rectus extraocular muscle", "oblique extraocular muscle", "levator palpebrae superioris"],
        context: ["optic nerve", "sclera"],
        text: "Four recti arise from the common tendinous ring and insert in front of the equator; the superior oblique turns through its trochlea and the inferior oblique arises from the orbital floor, both inserting behind the equator. Remember LR6 SO4 R3: lateral rectus by the abducent nerve, superior oblique by the trochlear nerve, all the rest (and levator palpebrae) by the oculomotor nerve. To test an oblique, first adduct the eye; to test a vertical rectus, first abduct it."
      }
    ],
    takeaways: [
      "Three coats: fibrous (cornea, sclera), vascular uvea (iris, ciliary body, choroid), neural retina.",
      "Aqueous: ciliary processes → posterior chamber → pupil → anterior chamber → trabecular meshwork → canal of Schlemm.",
      "Central retinal artery = end artery to the inner retina; the choroid feeds the photoreceptors (cherry-red spot).",
      "LR6 SO4 R3; obliques are tested in adduction, vertical recti in abduction."
    ]
  },
];
