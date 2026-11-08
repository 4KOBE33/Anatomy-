// Study notes for the FEMALE body (HRA / Visible Human Female reference organs). Same schema and matching rule as
// kb.js: the app lowercases a part's base name and picks the entry whose `match` strings contain the LONGEST substring
// found in the name. In female mode these entries are searched together with KB and KB_NERVES (KB_FEMALE first, so it
// wins ties). Match strings are deliberately specific ("body of uterus", "hilum of kidney", "fundus of urinary bladder
// dome"…) so they never capture unrelated structures. A few entries re-use an existing KB entry's notes under a new
// match string (`alias`) where the female model names a structure differently (e.g. "cervical vertebra 1" = atlas).
// Content follows Moore's Clinically Oriented Anatomy / Netter / Gray's.
import { KB } from "./kb.js";

const kbEntry = (key) => {
  const e = KB.find((x) => x.key === key);
  if (!e) throw new Error(`kb_female: missing KB entry ${key}`);
  return e;
};
// Re-use an existing entry's notes under new match strings (optionally overriding fields).
const alias = (key, newKey, match, extra = {}) => ({ ...kbEntry(key), key: newKey, match, ...extra });

const FEMALE_PELVIS = "Female vs male pelvis (Moore): lighter, thinner bones; wide, shallow lesser pelvis; oval or round inlet (heart-shaped in males); larger outlet; wide pubic arch with a subpubic angle > 80° (< 70° in males); oval obturator foramen; smaller acetabulum; greater sciatic notch close to 90° (about 70° in males).";
const SEGMENT_FEATURE = "A bronchopulmonary segment is a pyramidal, surgically resectable unit with its apex at the hilum, aerated by its own segmental (tertiary) bronchus and supplied by a segmental branch of the pulmonary artery running with it; the pulmonary veins run between segments (intersegmental) and mark the planes of resection";
const COUINAUD_FEATURE = "Each Couinaud segment has its own central portal triad (branch of the hepatic portal vein, hepatic artery and bile duct); the hepatic veins run between segments. This independence allows a single segment to be resected (segmentectomy)";

// ───────────────────────────── FEMALE REPRODUCTIVE: UTERUS ─────────────────────────────
const UTERUS = [
  {
    key: "uterus", title: "Uterus", match: ["uterus"], kind: "organ", region: "pelvis",
    summary: "Thick-walled, pear-shaped muscular organ in the lesser pelvis between the urinary bladder and the rectum, in which the embryo implants and the fetus develops (about 7.5 × 5 × 2.5 cm in a nulliparous woman).",
    features: ["Parts: fundus, body (corpus), isthmus and cervix", "Usually anteverted (the cervix tipped forward on the vagina) and anteflexed (the body bent forward on the cervix), so it rests on the bladder", "Wall: perimetrium (peritoneum), myometrium (smooth muscle) and endometrium (mucosa)", "The cavity is a slit in the sagittal plane and triangular in the coronal plane", "Supported mainly by the pelvic floor and by the cardinal and uterosacral ligaments at the cervix"],
    function: "Receives the conceptus, nourishes the embryo and fetus, and expels it at birth; sheds its functional endometrium at menstruation",
    blood: "Uterine arteries (internal iliac), anastomosing with the ovarian arteries; uterine venous plexus to the internal iliac veins",
    innervation: "Uterovaginal plexus (from the inferior hypogastric plexus). Pain from the fundus and body (in contact with peritoneum) runs with sympathetic fibres to the lower thoracic/upper lumbar cord; pain from the cervix runs with the pelvic splanchnic nerves (S2–S4)",
    clinical: "Leiomyomas (fibroids) are the commonest pelvic tumour in women. Endometrial carcinoma typically presents with postmenopausal bleeding. At hysterectomy the ureter is at risk where the uterine artery crosses over it beside the cervix.",
    facts: ["The uterus grows from about 50–70 g to roughly 1 kg by the end of pregnancy."]
  },
  {
    key: "fundus-of-uterus", title: "Fundus of uterus", match: ["fundus of uterus"], kind: "organ", region: "pelvis",
    summary: "Rounded upper part of the uterus that lies above the openings of the uterine tubes.",
    features: ["Completely covered by peritoneum", "Faces anterosuperiorly in the usual anteverted, anteflexed position, resting toward the bladder", "Related to coils of ileum and the sigmoid colon"],
    function: "Strongest region of myometrial contraction in labour (fundal dominance), driving the fetus toward the cervix",
    blood: "Uterine arteries, with anastomoses from the ovarian arteries near the uterine angles",
    clinical: "Fundal height tracks pregnancy: palpable just above the pubic symphysis at about 12 weeks and at the umbilicus at about 20 weeks; between 20 and 36 weeks the symphysis–fundal height in centimetres roughly equals the gestation in weeks. Fundal pressure and massage are used in the management of postpartum haemorrhage due to uterine atony."
  },
  {
    key: "body-of-uterus", title: "Body of uterus", match: ["body of uterus"], kind: "organ", region: "pelvis",
    summary: "Upper two-thirds of the uterus, between the fundus and the isthmus, enclosing the main part of the uterine cavity.",
    features: ["Lies between the layers of the broad ligament (mesometrium) laterally", "Anterior (vesical) surface faces the bladder across the uterovesical pouch", "Posterior (intestinal) surface faces the rectouterine pouch, sigmoid colon and ileum", "Usual site of implantation, most often on the posterior wall of the upper body"],
    function: "Houses and nourishes the developing embryo and fetus; its myometrium contracts in labour",
    blood: "Uterine arteries, running tortuously up the lateral margins between the layers of the broad ligament",
    clinical: "Fibroids may be submucosal (menorrhagia, subfertility), intramural or subserosal (pressure symptoms). Adenomyosis (endometrium within the myometrium) causes a bulky, tender uterus with heavy painful periods."
  },
  {
    key: "wall-of-uterus", title: "Uterine wall (anterior and posterior)", match: ["wall of uterus"], kind: "organ", region: "pelvis",
    summary: "Anterior and posterior walls of the uterine body, each made of three layers around the slit-like cavity.",
    features: ["Perimetrium: serosa (peritoneum) with a thin layer of connective tissue", "Myometrium: thick interlacing smooth muscle containing the main branches of the uterine vessels", "Endometrium: functional layer (shed at menstruation) on a basal layer that regenerates it", "Anterior wall rests on the bladder (uterovesical pouch in between); posterior wall faces the rectouterine pouch"],
    function: "The endometrium undergoes cyclical proliferation and secretion for implantation; the myometrium contracts in labour and compresses the spiral vessels after delivery",
    clinical: "Endometrial thickness is measured on ultrasound (a thick endometrium after menopause needs biopsy). The interlacing myometrial fibres act as 'living ligatures' after placental separation; uterine atony is the commonest cause of postpartum haemorrhage. A placenta that invades the myometrium (placenta accreta spectrum) is more likely over a previous caesarean scar."
  },
  {
    key: "uterine-cornua", title: "Cornua (horns) of the uterus", match: ["cornua", "cornu of uterus", "uterine horn"], kind: "organ", region: "pelvis",
    summary: "The superolateral angles of the uterus where the uterine tubes enter (uterotubal junctions).",
    features: ["The intramural (interstitial) part of each uterine tube passes through the myometrium here", "The round ligament attaches just anteroinferior to, and the ovarian ligament just posteroinferior to, the uterotubal junction", "Region of anastomosis between the uterine and ovarian arteries"],
    clinical: "Interstitial (cornual) ectopic pregnancy implants in the intramural part of the tube; it can enlarge further before rupturing and then bleeds heavily because of the rich uterine–ovarian blood supply. Incomplete fusion of the paramesonephric ducts gives a bicornuate uterus with two separate horns.",
    facts: ["Both the round ligament and the ovarian ligament are remnants of the gubernaculum, which is why they attach to the uterus at the same point."]
  },
  {
    key: "lower-uterine-segment", title: "Isthmus of uterus / lower uterine segment", match: ["lower uterine segment", "isthmus of uterus"], kind: "organ", region: "pelvis",
    summary: "Narrow, about 1 cm long isthmus between the body and the cervix in the non-pregnant uterus; in late pregnancy it thins and expands to form the lower uterine segment.",
    features: ["Lies at the level of the anatomical internal os", "Thinner and less muscular than the upper segment; it is stretched passively in labour while the upper segment contracts", "The bladder is related to its anterior surface across the uterovesical pouch"],
    clinical: "Site of the transverse lower-segment caesarean incision, which bleeds less and is less likely to rupture in a later labour than a classical (vertical upper-segment) incision. Placenta praevia is implantation over the lower segment, presenting as painless bleeding in the third trimester. Obstructed labour can make it thin dangerously (Bandl's retraction ring) before uterine rupture."
  },
  {
    key: "cervix", title: "Cervix of uterus", match: ["cervix", "cervix of uterus", "uterine cervix"], kind: "organ", region: "pelvis",
    summary: "Lower, cylindrical, narrow part of the uterus (about 2.5 cm), with a supravaginal part above the vagina and a vaginal part (portio vaginalis, ectocervix) projecting into it.",
    features: ["Cervical canal runs from the internal os to the external os; its mucosa forms palmate folds", "Endocervix lined by mucus-secreting columnar epithelium; ectocervix by non-keratinised stratified squamous epithelium", "Mostly dense collagenous tissue with relatively little smooth muscle", "The cardinal and uterosacral ligaments attach to the supravaginal part", "The ureter passes about 2 cm lateral to the supravaginal cervix, under the uterine artery"],
    function: "Cervical mucus forms a barrier to infection and changes through the cycle to let sperm pass at ovulation; the cervix holds the pregnancy in and then softens, effaces and dilates in labour",
    blood: "Cervical (descending) branches of the uterine artery",
    innervation: "Uterovaginal plexus; pain fibres run with the pelvic splanchnic nerves (S2–S4)",
    clinical: "Cervical cancer arises in the transformation zone around the external os and is driven by high-risk HPV (types 16 and 18); screening (HPV testing and cytology) and HPV vaccination prevent most cases. It spreads laterally into the parametrium, where it can obstruct the ureters (hydronephrosis, renal failure). Cervical insufficiency causes painless second-trimester dilatation and pregnancy loss and may be treated with a cerclage."
  },
  {
    key: "internal-cervical-os", title: "Internal os of cervix", match: ["internal cervical os", "internal os"], kind: "organ", region: "pelvis",
    summary: "The upper opening of the cervical canal into the uterine cavity, at the level of the uterine isthmus.",
    features: ["Anatomical internal os: where the canal narrows at the isthmus", "Histological internal os: slightly lower, where the endometrium changes to endocervical mucosa", "The uterine arteries reach the uterus at about this level"],
    clinical: "A cervical cerclage stitch is placed as high as possible, near the level of the internal os, for cervical insufficiency. Placenta praevia is graded by how close the placenta lies to, or whether it covers, the internal os (seen on transvaginal ultrasound)."
  },
  {
    key: "external-cervical-os", title: "External os of cervix", match: ["external cervical os", "external os"], kind: "organ", region: "pelvis",
    summary: "Opening of the cervical canal into the vagina at the tip of the vaginal part of the cervix: small and round in a nulliparous woman, a transverse slit after vaginal delivery.",
    features: ["Bounded by anterior and posterior lips", "The squamocolumnar junction, and the transformation zone around it, usually lies at or near the external os; it moves outward under oestrogen (puberty, pregnancy, combined pill) and back into the canal after menopause"],
    clinical: "The transformation zone around the external os is the site of cervical intraepithelial neoplasia and carcinoma, so a cervical sample must include it (it is harder to sample after menopause when it retreats into the canal). Cervical dilatation in labour (0–10 cm) is assessed at the external os. Nabothian cysts are harmless mucus-retention cysts of the ectocervix."
  },
  {
    key: "cervicovaginal-junction", title: "Cervicovaginal junction and vaginal fornices", match: ["cervicovaginal junction"], kind: "organ", region: "pelvis",
    summary: "The line where the vaginal wall attaches around the cervix; the recess between the cervix and the vaginal wall forms the anterior, posterior and lateral vaginal fornices.",
    features: ["The vaginal wall attaches higher on the posterior aspect of the cervix, so the posterior fornix is the deepest", "The posterior fornix is separated from the rectouterine pouch only by the vaginal wall and peritoneum", "The lateral fornices lie close to the uterine arteries and the ureters"],
    clinical: "The rectouterine pouch can be drained or sampled through the posterior fornix (culdocentesis). A stone in the terminal ureter may be palpable through the lateral fornix. The cuff of vagina at this junction is removed in a radical hysterectomy; after a hysterectomy the vault (cuff) is a site of prolapse."
  },
  {
    key: "vagina", title: "Vagina", match: ["vagina"], kind: "organ", region: "pelvis",
    summary: "Distensible fibromuscular tube (about 7–9 cm) running posterosuperiorly from the vestibule to the cervix; its posterior wall is longer than the anterior.",
    features: ["Anterior relations: base of the bladder and the urethra", "Posterior relations, from above down: rectouterine pouch, rectum, perineal body (anal canal)", "Lateral relations: levator ani, and the ureters near the lateral fornices", "Lined by non-keratinised stratified squamous epithelium with no glands; lubrication comes from transudate and cervical mucus"],
    function: "Canal for menstrual flow, the lower birth canal and the female organ of copulation",
    blood: "Vaginal arteries (internal iliac) and vaginal branches of the uterine arteries; also middle rectal and internal pudendal arteries",
    innervation: "Upper three-quarters visceral (uterovaginal plexus; pain via pelvic splanchnics S2–S4); lower quarter somatic (deep perineal nerve, a branch of the pudendal nerve) and sensitive to touch and temperature",
    clinical: "Lymph from the upper vagina drains to internal and external iliac nodes, from the lowest part to the superficial inguinal nodes, which matters for staging vaginal and vulval cancers. Prolonged obstructed labour can cause vesicovaginal or rectovaginal fistulas. Weakness of its support gives anterior (cystocele) or posterior (rectocele) wall prolapse.",
    facts: ["Distensibility is enough to allow passage of the fetal head, about 10 cm across."]
  },
];

// ───────────────────────────── UTERINE TUBES & OVARY ─────────────────────────────
const TUBE_OVARY = [
  {
    key: "uterine-tube", title: "Uterine (fallopian) tube", match: ["uterine tube", "fallopian tube"], kind: "organ", region: "pelvis",
    summary: "Paired tubes (about 10 cm) in the free upper edge of the broad ligament (mesosalpinx), running from the uterine cornua toward the ovaries.",
    features: ["Parts, lateral to medial: infundibulum (with fimbriae and abdominal ostium), ampulla, isthmus, uterine (intramural) part", "Lined by ciliated and secretory columnar epithelium; muscular wall shows peristalsis", "Opens into the peritoneal cavity at its lateral end, so the female peritoneal cavity communicates with the exterior"],
    function: "Picks up the ovulated oocyte, is the site of fertilisation (ampulla) and carries the early embryo to the uterus over about 3–4 days",
    blood: "Tubal branches of the uterine and ovarian arteries, anastomosing in the mesosalpinx",
    clinical: "Ectopic pregnancy: most occur in the tube (ampulla commonest). Pelvic inflammatory disease (Chlamydia, gonorrhoea) scars the tubes, causing infertility and raising ectopic risk. Tubal ligation or salpingectomy gives permanent contraception."
  },
  {
    key: "infundibulum-uterine-tube", title: "Infundibulum of uterine tube", match: ["uterine tube infundibulum", "infundibulum of uterine tube"], kind: "organ", region: "pelvis",
    summary: "Funnel-shaped lateral end of the uterine tube, opening into the peritoneal cavity through the abdominal ostium and fringed by fimbriae that spread over the ovary.",
    function: "Captures the oocyte at ovulation and guides it into the ampulla",
    clinical: "Because the infundibulum opens into the peritoneal cavity, ascending genital infection can reach the peritoneum (pelvic peritonitis; perihepatitis in Fitz-Hugh–Curtis syndrome). Distal tubal blockage after infection produces a fluid-filled hydrosalpinx, which lowers IVF success unless removed or clipped."
  },
  {
    key: "fimbriae-uterine-tube", title: "Fimbriae of uterine tube", match: ["fimbria of uterine tube", "fimbriae of uterine tube"], kind: "organ", region: "pelvis",
    summary: "Finger-like mucosal processes around the margin of the infundibulum; one longer ovarian fimbria is attached to the tubal pole of the ovary.",
    function: "Sweep over the ovarian surface at ovulation and, with ciliary currents, draw the oocyte into the tube",
    clinical: "Many high-grade serous 'ovarian' carcinomas are now thought to start in the fimbrial epithelium (serous tubal intraepithelial carcinoma); this is why salpingectomy is offered for risk reduction, for example in BRCA carriers and at the time of hysterectomy or sterilisation."
  },
  {
    key: "abdominal-ostium", title: "Abdominal ostium of uterine tube", match: ["abdominal ostium of uterine tube", "abdominal ostium"], kind: "organ", region: "pelvis",
    summary: "Small opening (about 3 mm) at the bottom of the infundibulum through which the lumen of the uterine tube communicates with the peritoneal cavity.",
    clinical: "Provides the open route from the genital tract to the peritoneal cavity: infection can ascend, menstrual blood can reflux (retrograde menstruation, one theory of endometriosis), and dye injected through the cervix spills out of it on hysterosalpingography if the tube is patent. Rarely a fertilised ovum implants in the peritoneal cavity (abdominal pregnancy)."
  },
  {
    key: "ampulla-uterine-tube", title: "Ampulla of uterine tube", match: ["ampulla of uterine tube"], kind: "organ", region: "pelvis",
    summary: "Widest and longest part of the uterine tube (more than half its length), between the infundibulum and the isthmus, with a thin wall and highly folded mucosa.",
    function: "Usual site of fertilisation",
    clinical: "Commonest site of ectopic pregnancy (most tubal ectopics). Because the lumen is wide, an ampullary ectopic tends to rupture later than an isthmic one. Rupture causes haemoperitoneum with abdominal pain, shoulder-tip pain from diaphragmatic irritation and shock; it can be mistaken for appendicitis on the right."
  },
  {
    key: "isthmus-uterine-tube", title: "Isthmus of uterine tube", match: ["isthmus of fallopian tube", "isthmus of uterine tube"], kind: "organ", region: "pelvis",
    summary: "Narrow, thick-walled medial third of the uterine tube, joining the ampulla to the intramural part at the uterine cornu.",
    clinical: "Usual site of tubal ligation (clips or rings for sterilisation). An isthmic ectopic pregnancy ruptures early because the lumen is narrow and the wall is muscular."
  },
  {
    key: "ovary", title: "Ovary", match: ["ovary"], kind: "organ", region: "pelvis",
    summary: "Paired almond-shaped female gonad (about 3 × 1.5 × 1 cm) lying in the ovarian fossa on the lateral pelvic wall, suspended by the mesovarium.",
    features: ["Ovarian fossa: bounded by the external iliac vessels above and the internal iliac vessels and ureter behind; the obturator nerve lies lateral to it", "Not covered by peritoneum: its surface is a cuboidal epithelium (misleadingly called the 'germinal epithelium') over the tunica albuginea", "Attached to the uterus by the ovarian ligament and to the pelvic wall by the suspensory ligament, which carries its vessels", "Cortex with follicles; medulla with vessels and nerves entering at the hilum"],
    function: "Oogenesis and the cyclical release of an oocyte; secretes oestrogens, progesterone and inhibin",
    blood: "Ovarian arteries from the abdominal aorta (about L2), with uterine artery anastomoses; ovarian veins: right to the IVC, left to the left renal vein",
    innervation: "Ovarian plexus (sympathetic about T10–T11 level, travelling with the ovarian vessels), so ovarian pain is felt periumbilically and in the loin",
    clinical: "Lymph drains with the ovarian vessels to the lumbar (para-aortic) nodes, not the pelvic nodes. Ovarian torsion twists the vascular pedicle and is a surgical emergency. Irritation of the obturator nerve by ovarian disease can refer pain to the medial thigh. Ovarian cancer spreads mainly across the peritoneal surfaces (omentum, diaphragm) and often presents late with bloating and ascites."
  },
  {
    key: "ovarian-ligament", title: "Ovarian ligament (proper ligament of ovary)", match: ["ovarian ligament", "ligament of ovary"], kind: "other", region: "pelvis",
    summary: "Fibromuscular cord in the broad ligament joining the uterine pole of the ovary to the lateral angle of the uterus, just below and behind the entry of the uterine tube.",
    features: ["Remnant of the upper part of the gubernaculum, continuous with the round ligament of the uterus at the uterine angle", "Carries an ovarian branch of the uterine artery anastomosing with the ovarian artery"],
    function: "Anchors the ovary to the uterus",
    clinical: "It is divided when the ovary is removed but the uterus kept (oophorectomy), and divided together with the tube at hysterectomy when the ovaries are conserved. It forms one axis about which an enlarged ovary can twist in torsion."
  },
  {
    key: "suspensory-ligament-ovary", title: "Suspensory ligament of ovary (infundibulopelvic ligament)", match: ["suspensory ligament of ovary", "infundibulopelvic ligament"], kind: "other", region: "pelvis",
    summary: "Fold of peritoneum running from the tubal pole of the ovary up over the external iliac vessels to the lateral pelvic wall, conveying the ovarian vessels, lymphatics and nerves.",
    features: ["Forms the lateral, upper edge of the broad ligament", "Contains the ovarian artery and veins, lymphatics to the lumbar nodes and the ovarian plexus"],
    clinical: "The ovarian vessels are clamped and ligated in this ligament at oophorectomy. The ureter crosses the pelvic brim close beneath and medial to it, so it must be identified before the ligament is clamped (a classic site of ureteric injury). Pelvic congestion syndrome is associated with dilated, incompetent ovarian veins."
  },
];

// ───────────────────────────── BROAD LIGAMENT, SUPPORTS & POUCHES ─────────────────────────────
const LIGAMENTS = [
  {
    key: "broad-ligament", title: "Broad ligament of uterus", match: ["broad ligament"], kind: "other", region: "pelvis",
    summary: "Double layer of peritoneum (mesentery) extending from the sides of the uterus to the lateral walls and floor of the pelvis, dividing the female pelvis into anterior (vesical) and posterior (rectal) compartments.",
    features: ["Parts: mesometrium (beside the uterus, the largest part), mesosalpinx (around the uterine tube) and mesovarium (to the ovary)", "Contains the uterine tube, ovarian ligament, round ligament, uterine and ovarian vessels, lymphatics and nerves", "The parametrium (extraperitoneal connective tissue) in its base contains the uterine artery and the ureter passing beneath it", "Vestigial mesonephric remnants (epoophoron, paroophoron, Gartner duct) lie between its layers"],
    function: "Keeps the uterus in a relatively normal position and carries its neurovascular supply; offers little real support",
    clinical: "A broad ligament haematoma may follow delivery or surgery; fibroids can grow between its layers and displace the ureter. Cervical cancer that extends into the parametrium (in the base of the broad ligament) is no longer treated by surgery alone."
  },
  {
    key: "mesosalpinx", title: "Mesosalpinx", match: ["mesosalpinx"], kind: "other", region: "pelvis",
    summary: "Upper part of the broad ligament, above the mesovarium, that encloses and suspends the uterine tube.",
    features: ["Contains the anastomosing tubal branches of the uterine and ovarian arteries", "Contains vestigial mesonephric structures (epoophoron) and paratubal cysts, including the pedunculated hydatid of Morgagni at the fimbrial end"],
    clinical: "Paratubal (paraovarian) cysts are common incidental findings and occasionally twist. At salpingectomy the tube is removed by dividing the mesosalpinx close to the tube to preserve the ovarian blood supply."
  },
  {
    key: "mesovarium", title: "Mesovarium", match: ["mesovarium"], kind: "other", region: "pelvis",
    summary: "Short peritoneal fold projecting from the posterior layer of the broad ligament that attaches the anterior (mesovarian) border of the ovary.",
    function: "Carries the ovarian vessels and nerves into the ovarian hilum",
    clinical: "Because the ovary is suspended on the mesovarium rather than covered by peritoneum, an ovulated oocyte (and any ovarian cancer cells) is released directly into the peritoneal cavity."
  },
  {
    key: "round-ligament-uterus", title: "Round ligament of uterus", match: ["round ligament of uterus"], kind: "other", region: "pelvis",
    summary: "Fibromuscular cord from the uterine angle (just anteroinferior to the uterotubal junction) running in the broad ligament to the deep inguinal ring, through the inguinal canal and into the labium majus.",
    features: ["Remnant of the lower part of the gubernaculum (the ovarian ligament is the upper part)", "Accompanied by the artery of the round ligament (from the inferior epigastric artery) and lymphatics", "In the inguinal canal it is the female counterpart of the spermatic cord"],
    function: "Contributes a little to keeping the uterus anteverted",
    clinical: "Stretching in pregnancy causes 'round ligament pain' in the groin. Lymph from the region of the uterine cornua can travel along it to the superficial inguinal nodes. A patent processus vaginalis around it (canal of Nuck) can give an indirect inguinal hernia or hydrocele in females."
  },
  {
    key: "cardinal-ligament", title: "Cardinal (transverse cervical) ligament", match: ["cardinal ligament"], kind: "other", region: "pelvis",
    summary: "Condensation of endopelvic fascia (Mackenrodt's ligament) passing from the supravaginal cervix and lateral fornices of the vagina to the lateral pelvic wall, at the base of the broad ligament.",
    features: ["With the uterosacral ligaments it forms the main passive support of the cervix and upper vagina", "The uterine vessels run along its upper border, and the ureter passes through it in a tunnel just below the uterine artery"],
    function: "Suspends the cervix and upper vagina and resists their descent",
    clinical: "Weakening (after childbirth or with age, with reduced oestrogen) contributes to uterovaginal prolapse. In radical hysterectomy for cervical cancer the cardinal ligaments are removed with the parametrium, which requires dissecting the ureter out of its tunnel."
  },
  {
    key: "uterosacral-ligament", title: "Uterosacral ligament", match: ["uterosacral ligament", "rectouterine ligament"], kind: "other", region: "pelvis",
    summary: "Fibromuscular band passing from the posterior supravaginal cervix around the sides of the rectum to the front of the sacrum; it raises the rectouterine fold of peritoneum.",
    features: ["Forms the lateral boundaries of the rectouterine pouch", "Carries autonomic fibres of the inferior hypogastric (uterovaginal) plexus"],
    function: "Holds the cervix back toward the sacrum, maintaining anteversion; supports the cervix and vaginal vault with the cardinal ligaments",
    clinical: "Common site of endometriotic deposits (nodularity on vaginal or rectal examination, deep dyspareunia). Used in surgery for prolapse to suspend the vaginal vault (uterosacral ligament suspension). The ureter runs close to its lateral side."
  },
  {
    key: "uterovesical-pouch", title: "Uterovesical (vesicouterine) pouch", match: ["uterovesical pouch", "vesicouterine pouch"], kind: "other", region: "pelvis",
    summary: "Shallow peritoneal recess between the anterior surface of the uterus (at the level of the isthmus) and the superior surface of the bladder.",
    features: ["Usually empty, because the anteverted uterus lies on the bladder", "Peritoneum here is loosely attached, so it moves as the bladder fills"],
    clinical: "At caesarean section the peritoneum of this pouch is incised (bladder flap) so the bladder can be pushed down off the lower uterine segment before the uterine incision. Endometriosis can involve it and the bladder wall."
  },
  {
    key: "rectouterine-pouch", title: "Rectouterine pouch (of Douglas)", match: ["rectouterine pouch", "pouch of douglas"], kind: "other", region: "pelvis",
    summary: "Deep peritoneal recess between the uterus (and posterior fornix of the vagina) in front and the rectum behind; the lowest part of the female peritoneal cavity in the upright and supine positions.",
    features: ["Bounded laterally by the rectouterine folds over the uterosacral ligaments", "Separated from the posterior vaginal fornix only by the vaginal wall and peritoneum"],
    clinical: "Blood, pus and ascitic fluid collect here (seen on transvaginal ultrasound; e.g. ruptured ectopic). It can be drained or sampled through the posterior fornix (culdocentesis) and felt on rectal or vaginal examination. Commonest site of endometriosis and of 'drop' peritoneal metastases."
  },
];

// ───────────────────────────── BREAST ─────────────────────────────
const BREAST = [
  {
    key: "mammary-lobes", title: "Mammary gland lobes", match: ["mammary lobe"], kind: "organ", region: "thorax",
    summary: "The glandular tissue of the breast, arranged as 15–20 lobes radiating from the nipple, each drained by its own lactiferous duct and separated by fat and suspensory ligaments.",
    features: ["The breast lies in the subcutaneous tissue over pectoralis major (and serratus anterior), from about rib 2 to rib 6 and from the sternal edge to the mid-axillary line", "A loose retromammary space separates it from the pectoral fascia, so a normal breast moves freely", "The axillary process (tail of Spence) extends into the axilla; the upper outer quadrant contains the most glandular tissue", "Each lobe consists of lobules of alveoli (terminal duct lobular units) lined by secretory cells and myoepithelial cells"],
    function: "Milk production (prolactin) and ejection (oxytocin acting on myoepithelial cells) during lactation",
    blood: "Medial mammary (perforating) branches of the internal thoracic artery, mainly through intercostal spaces 2–4; lateral thoracic and thoraco-acromial arteries; posterior intercostal arteries",
    innervation: "Anterior and lateral cutaneous branches of the 4th–6th intercostal nerves",
    clinical: "Lymph drainage: about 75% to the axillary nodes (pectoral/anterior group first), mostly from the lateral quadrants; much of the medial quadrants drains to parasternal nodes along the internal thoracic vessels; some reaches the opposite breast and the abdomen (via the rectus sheath). Most carcinomas arise in the upper outer quadrant. Sentinel node biopsy stages the axilla; axillary clearance can injure the long thoracic nerve (winged scapula), thoracodorsal nerve, or intercostobrachial nerve (numb medial arm), and causes lymphoedema of the arm.",
    mnemonic: "Axillary node levels follow pectoralis minor: level I lateral to it, II behind it, III medial to it."
  },
  {
    key: "lactiferous-ducts", title: "Lactiferous ducts", match: ["lactiferous duct"], kind: "organ", region: "thorax",
    summary: "The main ducts of the breast: one for each lobe (15–20), converging radially on the nipple, where each opens separately.",
    function: "Carry milk from the lobes to the nipple; each widens just beneath the areola into a lactiferous sinus",
    clinical: "Most breast carcinomas arise in the duct system (ductal carcinoma in situ, invasive ductal/no-special-type carcinoma). Bloody discharge from a single duct suggests an intraductal papilloma (or carcinoma); duct ectasia gives thick multi-duct discharge in older women. Infiltrating carcinoma can shorten the ducts and retract the nipple."
  },
  {
    key: "lactiferous-sinuses", title: "Lactiferous sinuses", match: ["lactiferous sinus"], kind: "organ", region: "thorax",
    summary: "Dilated portions of the lactiferous ducts lying deep to the areola, just before each duct opens on the nipple.",
    function: "Reservoirs for milk during lactation; the infant's jaws compress them through the areola to express milk",
    clinical: "A good latch takes in much of the areola, not just the nipple, so the infant's gums compress the sinuses; poor latch causes nipple pain and fissures. Blockage and infection here give mastitis and subareolar (periductal) abscesses, the latter strongly linked to smoking."
  },
  {
    key: "nipple", title: "Nipple (mammary papilla)", match: ["nipple"], kind: "organ", region: "thorax",
    summary: "Conical projection in the centre of the areola on which the lactiferous ducts open; in men and young women it usually lies at about the 4th intercostal space.",
    features: ["No fat, hair or sweat glands; contains circular and longitudinal smooth muscle that erects it and compresses the ducts", "Richly supplied with sensory endings (T4 dermatome)"],
    clinical: "Recent nipple retraction or inversion suggests an underlying carcinoma pulling on the ducts. Paget's disease of the nipple is an eczema-like change of the nipple and areola that signals underlying ductal carcinoma. Supernumerary nipples (polythelia) may occur anywhere along the embryonic mammary ridge (milk line) from axilla to groin.",
    facts: ["The T4 dermatome at the nipple is a standard landmark for checking the level of spinal or epidural anaesthesia."]
  },
  {
    key: "areola", title: "Areola", match: ["areola"], kind: "organ", region: "thorax",
    summary: "Circular pigmented skin surrounding the nipple; it darkens and enlarges in pregnancy.",
    features: ["Contains sebaceous areolar glands that form small elevations (areolar tubercles)", "Smooth muscle fibres in the dermis wrinkle it and help erect the nipple"],
    clinical: "Darkening of the areola is an early sign of pregnancy. Periareolar incisions give a well-hidden scar in breast surgery. Paget's disease spreads from the nipple onto the areola."
  },
  {
    key: "areolar-tubercles", title: "Areolar tubercles (Montgomery tubercles)", match: ["areolar tubercle"], kind: "organ", region: "thorax",
    summary: "Small elevations on the areola formed by the openings of the areolar glands (Montgomery glands), large sebaceous glands sometimes associated with small lactiferous units.",
    function: "Secrete an oily fluid that lubricates and protects the nipple and areola during breastfeeding",
    clinical: "They enlarge in early pregnancy (a presumptive sign of pregnancy). Blocked areolar glands can form small retention cysts or become infected."
  },
  {
    key: "suspensory-ligaments-breast", title: "Suspensory ligaments of breast (Cooper's ligaments)", match: ["suspensory ligaments of breast", "suspensory ligament of breast"], kind: "other", region: "thorax",
    summary: "Fibrous septa running through the breast from the dermis of the overlying skin to the deep (pectoral) fascia, separating the lobes and supporting the gland.",
    function: "Support the breast and divide it into compartments; laxity with age, pregnancy and weight change contributes to breast ptosis",
    clinical: "A carcinoma that infiltrates and shortens these ligaments pulls in the skin, producing dimpling or retraction. When tumour blocks the subdermal lymphatics, the skin becomes oedematous while staying tethered at hair follicles and sweat pores, giving the pitted 'peau d'orange' appearance (seen in inflammatory carcinoma). Tumour fixed to the pectoral fascia or muscle no longer moves when the patient contracts pectoralis major."
  },
  {
    key: "mammary-fat", title: "Mammary fat", match: ["mammary fat"], kind: "organ", region: "thorax",
    summary: "The fatty tissue packed between the glandular lobes and suspensory ligaments; it forms most of the bulk of the non-lactating breast.",
    function: "Gives the breast its size and shape; breast size mostly reflects fat content rather than glandular tissue",
    clinical: "Fatty breasts are easier to read on mammography; dense (glandular) breasts lower mammographic sensitivity and are themselves a risk factor for breast cancer. Fat necrosis after trauma or surgery forms a firm, sometimes tethered lump that can mimic carcinoma. Lipomas are common benign lumps."
  },
];

// ───────────────────────────── KIDNEY & URINARY BLADDER ─────────────────────────────
const URINARY = [
  {
    key: "hilum-of-kidney", title: "Hilum of kidney", match: ["hilum of kidney", "renal hilum"], kind: "organ", region: "abdomen",
    summary: "Vertical slit on the concave medial border of the kidney leading into the renal sinus, through which the renal vessels, nerves, lymphatics and renal pelvis pass.",
    features: ["From anterior to posterior: renal vein, renal artery, renal pelvis", "The left hilum lies near the transpyloric plane (L1), about 5 cm from the midline; the right is slightly lower", "Opens into the renal sinus, which contains the calyces, renal pelvis, vessels and fat"],
    clinical: "Hilar dissection is the key step in nephrectomy and living donor surgery; segmental arteries may branch before reaching the hilum, and accessory renal arteries are common. Renal cell carcinoma can grow into the renal vein at the hilum and on into the IVC.",
    mnemonic: "Front to back: VAP — Vein, Artery, Pelvis."
  },
  {
    key: "kidney-capsule", title: "Fibrous capsule of kidney", match: ["kidney capsule", "renal capsule", "capsule of kidney"], kind: "organ", region: "abdomen",
    summary: "Thin, tough fibrous capsule closely investing the kidney; outside it lie the perirenal fat, the renal (Gerota's) fascia and the pararenal fat.",
    features: ["Strips easily from a healthy kidney but is adherent over scars", "Turns in at the hilum to line the renal sinus"],
    clinical: "Stretching of the capsule (acute pyelonephritis, obstruction, haemorrhage) causes the dull loin pain and costovertebral angle tenderness of renal disease. A subcapsular haematoma after trauma or biopsy can compress the kidney (Page kidney, causing hypertension)."
  },
  {
    key: "renal-cortex", title: "Renal cortex", match: ["cortex of kidney", "renal cortex"], kind: "organ", region: "abdomen",
    summary: "Outer, paler granular layer of the kidney beneath the capsule, which arches over the bases of the pyramids and dips between them as the renal columns.",
    features: ["Contains the renal corpuscles (glomeruli), proximal and distal convoluted tubules and cortical collecting ducts", "Medullary rays of straight tubules project into it from the pyramids", "Receives about 90% of renal blood flow via the interlobular (cortical radiate) arteries"],
    function: "Filtration of blood at the glomeruli and most tubular reabsorption",
    clinical: "Cortical thickness and echogenicity on ultrasound reflect chronic kidney disease (small bright kidneys). Reflux nephropathy scars the cortex over the poles. Acute cortical necrosis can follow severe obstetric haemorrhage or placental abruption."
  },
  {
    key: "renal-column", title: "Renal columns (of Bertin)", match: ["renal column"], kind: "organ", region: "abdomen",
    summary: "Extensions of cortical tissue projecting into the medulla between adjacent renal pyramids.",
    features: ["Interlobar arteries and veins run through them toward the arcuate vessels at the corticomedullary junction"],
    clinical: "A prominent (hypertrophied) column of Bertin is a normal variant that can mimic a renal mass on ultrasound or CT."
  },
  {
    key: "renal-pyramid", title: "Renal pyramids", match: ["renal pyramid"], kind: "organ", region: "abdomen",
    summary: "Conical masses of renal medulla (about 8–18 per kidney) with their bases toward the cortex and their apices forming the renal papillae.",
    features: ["Striated appearance from parallel loops of Henle, collecting ducts and vasa recta", "A pyramid with its covering cortex forms a renal lobe; fetal lobulation may persist on the surface"],
    function: "Concentrates urine by the countercurrent mechanism (loops of Henle and vasa recta) and final water reabsorption in collecting ducts (ADH)",
    clinical: "The medulla is relatively hypoxic and vulnerable: papillary necrosis (analgesics, diabetes, sickle cell disease). Medullary nephrocalcinosis and medullary sponge kidney involve the pyramids, which appear echogenic on ultrasound."
  },
  {
    key: "renal-papilla", title: "Renal papilla", match: ["renal papilla"], kind: "organ", region: "abdomen",
    summary: "Apex of a renal pyramid projecting into a minor calyx; its surface (area cribrosa) is perforated by the openings of the papillary ducts.",
    function: "Discharges urine from the collecting ducts into the minor calyx",
    clinical: "In renal papillary necrosis a sloughed papilla can pass down the ureter, causing colic, haematuria and obstruction. Calcium plaques on the papillae (Randall's plaques) are a nidus for calcium oxalate stones."
  },
  {
    key: "minor-calyx", title: "Minor calyx", match: ["minor calyx", "minor calyces"], kind: "organ", region: "abdomen",
    summary: "Cup-shaped tube (about 7–14 per kidney) that receives one or more renal papillae; minor calyces unite to form the major calyces.",
    features: ["Each is indented ('cupped') by its papilla", "Smooth muscle in the wall begins the peristalsis that moves urine toward the ureter"],
    clinical: "On urography a normal minor calyx is sharply cupped; it becomes blunted or 'clubbed' with hydronephrosis, papillary necrosis or reflux scarring. Small stones often lodge in the dependent lower-pole calyces."
  },
  {
    key: "major-calyx", title: "Major calyx", match: ["major calyx", "major calyces"], kind: "organ", region: "abdomen",
    summary: "Two or three wide tubes formed by the union of the minor calyces; they join to form the renal pelvis.",
    clinical: "A staghorn calculus (classically struvite from urease-producing organisms such as Proteus) fills the renal pelvis and branches into the calyces. Calyceal anatomy guides percutaneous nephrolithotomy access (usually through a posterior lower-pole calyx)."
  },
  {
    key: "renal-pelvis", title: "Renal pelvis", match: ["renal pelvis"], kind: "organ", region: "abdomen",
    summary: "Flattened, funnel-shaped expansion of the upper end of the ureter, formed by the union of the major calyces and lying partly in the renal sinus.",
    features: ["Posterior-most structure at the hilum", "Narrows at the pelviureteric junction, the first of the three ureteric constrictions"],
    clinical: "Pelviureteric junction obstruction (intrinsic narrowing or a crossing lower-pole vessel) causes hydronephrosis, often first seen on antenatal scans. Stones lodge at the PUJ. Urothelial (transitional cell) carcinoma can arise in the pelvis. Mild physiological dilatation of the pelvis and ureter (more on the right) is normal in pregnancy."
  },
  {
    key: "trigone-of-bladder", title: "Trigone of urinary bladder", match: ["trigone of urinary bladder", "bladder trigone"], kind: "organ", region: "pelvis",
    summary: "Smooth triangular area on the inside of the bladder base, between the two ureteric orifices (above) and the internal urethral orifice (below).",
    features: ["Mucosa is firmly bound to the muscle, so it stays smooth when the rest of the bladder is folded (rugae)", "Interureteric fold (bar) joins the ureteric orifices along its upper border", "Develops largely from the incorporated ends of the mesonephric ducts"],
    function: "Funnels urine to the urethra; densely innervated by stretch receptors",
    clinical: "Very sensitive: irritation by stones, catheter tips or infection (trigonitis) causes frequency and urgency. The trigone and bladder base are examined carefully at cystoscopy because bladder tumours often occur here. In females the trigone sits on the anterior vaginal wall."
  },
  {
    key: "ureteral-orifice", title: "Ureteric (ureteral) orifice", match: ["ureteral orifice", "ureteric orifice"], kind: "organ", region: "pelvis",
    summary: "Slit-like openings of the ureters at the upper lateral angles of the trigone, about 2.5 cm apart in the empty bladder and further apart when it is full.",
    features: ["The ureter passes obliquely through the bladder wall (intramural part, about 1.5–2 cm), which acts as a flap valve when the bladder fills and contracts"],
    clinical: "The vesicoureteric junction is the narrowest point of the ureter, where stones most often lodge. A short or laterally placed intramural ureter causes vesicoureteric reflux (recurrent childhood UTI, renal scarring). Ureteric catheters and stents are passed through the orifices at cystoscopy. A ureterocele is a cystic dilatation of the terminal ureter at the orifice."
  },
  {
    key: "bladder-base", title: "Base (fundus) of urinary bladder", match: ["fundus of urinary bladder base", "base of urinary bladder"], kind: "organ", region: "pelvis",
    summary: "The posterior, roughly triangular surface of the bladder (its fundus or base); in the female it lies directly on the anterior wall of the vagina and the supravaginal cervix.",
    features: ["The ureters enter at its upper lateral angles", "Its internal aspect includes the trigone"],
    clinical: "Prolonged obstructed labour (pressure necrosis), pelvic surgery or radiotherapy can create a vesicovaginal fistula, causing continuous leakage of urine from the vagina. Loss of anterior vaginal wall support lets the bladder base bulge into the vagina (cystocele)."
  },
  {
    key: "bladder-dome", title: "Dome (superior surface) of urinary bladder", match: ["fundus of urinary bladder dome", "dome of urinary bladder", "apex of urinary bladder"], kind: "organ", region: "pelvis",
    summary: "The superior surface of the bladder, the only part covered by peritoneum; its anterior tip (apex) is continued to the umbilicus as the median umbilical ligament (urachus).",
    features: ["In the female the body of the anteverted uterus rests on it, separated by the uterovesical pouch", "Rises into the abdomen, stripping peritoneum off the anterior abdominal wall, as the bladder fills"],
    clinical: "A blow to a full bladder ruptures the dome intraperitoneally (urine in the peritoneal cavity); pelvic fractures more often cause extraperitoneal rupture. A distended bladder can be catheterised suprapubically without entering the peritoneum. Urachal remnants (cyst, sinus, adenocarcinoma) arise at the dome."
  },
  {
    key: "bladder-neck", title: "Neck of urinary bladder", match: ["urinary bladder neck", "neck of urinary bladder"], kind: "organ", region: "pelvis",
    summary: "Lowest and most fixed part of the bladder, where the base and inferolateral surfaces converge on the internal urethral orifice.",
    features: ["Held by the pubovesical ligaments and supported on the pelvic floor and anterior vaginal wall", "In women the smooth muscle at the neck forms no well-defined internal sphincter (unlike the male), so continence relies chiefly on the external urethral sphincter, urethral support and the urethral mucosa"],
    function: "Remains closed during filling and opens (funnels) at the start of voiding",
    clinical: "Stress urinary incontinence follows loss of bladder-neck and urethral support (childbirth, menopause, obesity): leakage on coughing or sneezing. It is treated with pelvic-floor training or surgery such as mid-urethral slings or colposuspension."
  },
];

// ───────────────────────────── LIVER: SEGMENTS, SURFACES, LIGAMENTS ─────────────────────────────
const LIVER = [
  {
    key: "liver-seg-posterolateral", title: "Left lateral posterior (posterolateral) segment of liver — Couinaud II", match: ["posterolateral segment of liver", "left posterolateral segment"], kind: "organ", region: "abdomen",
    summary: "Upper (posterior) part of the left lateral section of the liver, to the left of the falciform ligament and fissure for the ligamentum venosum.",
    features: [COUINAUD_FEATURE, "Drained by the left hepatic vein"],
    clinical: "With segment III it forms the left lateral section, the graft typically used for paediatric living-donor liver transplantation."
  },
  {
    key: "liver-seg-anterolateral", title: "Left lateral anterior (anterolateral) segment of liver — Couinaud III", match: ["anterolateral segment"], kind: "organ", region: "abdomen",
    summary: "Lower (anterior) part of the left lateral section of the liver, to the left of the falciform ligament and round ligament; it covers the anterior surface of the stomach.",
    features: [COUINAUD_FEATURE, "Drained by the left hepatic vein"],
    clinical: "Segments II and III (left lateral section) are the commonest graft for paediatric living-donor liver transplantation. The round ligament runs to the umbilical portion of the left portal vein along its right side, separating it from segment IV."
  },
  {
    key: "liver-seg-superomedial", title: "Left medial superior segment of liver — Couinaud IVa", match: ["superomedial segment"], kind: "organ", region: "abdomen",
    summary: "Upper part of the left medial section (segment IV), between the falciform ligament and the plane of the middle hepatic vein (Cantlie's line), under the diaphragm.",
    features: [COUINAUD_FEATURE, "Belongs to the functional LEFT liver although it lies to the right of the falciform ligament"],
    clinical: "Segment IV is removed with the left liver in a left hepatectomy; the middle hepatic vein on its right side is the key landmark between the functional left and right livers."
  },
  {
    key: "liver-seg-inferomedial", title: "Left medial inferior segment of liver — Couinaud IVb", match: ["inferomedial segment"], kind: "organ", region: "abdomen",
    summary: "Lower part of the left medial section, corresponding roughly to the quadrate lobe between the gallbladder fossa and the fissure for the round ligament.",
    features: [COUINAUD_FEATURE, "The gallbladder bed lies across segments IVb and V"],
    clinical: "Gallbladder carcinoma invades segments IVb and V directly, so radical cholecystectomy removes a wedge of these segments."
  },
  {
    key: "liver-seg-anteroinferior", title: "Right anterior inferior segment of liver — Couinaud V", match: ["anteroinferior segment"], kind: "organ", region: "abdomen",
    summary: "Lower part of the right anterior section of the liver, to the right of the gallbladder bed and below the portal plane.",
    features: [COUINAUD_FEATURE, "Lies between the middle and right hepatic veins", "The gallbladder bed lies across segments IVb and V"],
    clinical: "Commonly involved by gallbladder carcinoma; segments V and VIII together form the right anterior section."
  },
  {
    key: "liver-seg-anterosuperior", title: "Right anterior superior segment of liver — Couinaud VIII", match: ["anterosuperior segment"], kind: "organ", region: "abdomen",
    summary: "Upper part of the right anterior section of the liver, high under the dome of the diaphragm between the middle and right hepatic veins.",
    features: [COUINAUD_FEATURE, "Close to the hepatic vein confluence with the IVC"],
    clinical: "Lesions high in segments VII–VIII sit beneath the diaphragm and lung base, which makes percutaneous biopsy or ablation more difficult (transpleural route)."
  },
  {
    key: "liver-seg-posteroinferior", title: "Right posterior inferior segment of liver — Couinaud VI", match: ["posteroinferior segment"], kind: "organ", region: "abdomen",
    summary: "Lower part of the right posterior section of the liver, lateral to the right hepatic vein; it lies against the right kidney and the right colic flexure.",
    features: [COUINAUD_FEATURE, "Bears the renal and colic impressions"],
    clinical: "The lowest, most lateral part of the right liver; a Riedel lobe (tongue-like downward extension of the right lobe) is a normal variant that can be mistaken for an enlarged liver or a renal mass."
  },
  {
    key: "liver-seg-posterosuperior", title: "Right posterior superior segment of liver — Couinaud VII", match: ["posterosuperior segment"], kind: "organ", region: "abdomen",
    summary: "Upper part of the right posterior section of the liver, posterolateral under the diaphragm and lateral to the right hepatic vein, next to the bare area.",
    features: [COUINAUD_FEATURE, "Drained by the right hepatic vein"],
    clinical: "Pyogenic and amoebic liver abscesses are commonest in the right lobe; abscesses here can rupture through the bare area and diaphragm into the right pleural cavity."
  },
  {
    key: "caudate-lobe", title: "Caudate lobe of liver (Couinaud I)", match: ["caudate lobe"], kind: "organ", region: "abdomen",
    summary: "Small lobe on the posterior visceral surface between the groove for the IVC and the fissure for the ligamentum venosum, above the porta hepatis.",
    features: ["Its caudate process joins it to the right lobe behind the porta hepatis", "Receives portal and arterial branches from both right and left sides", "Drains by several short veins directly into the IVC rather than through the main hepatic veins", "Forms the anterior boundary of the superior recess of the omental bursa"],
    clinical: "In Budd–Chiari syndrome (hepatic vein outflow obstruction) the caudate lobe is spared and enlarges because its veins drain straight into the IVC. Caudate hypertrophy relative to the right lobe is also a sign of cirrhosis."
  },
  {
    key: "quadrate-lobe", title: "Quadrate lobe of liver", match: ["quadrate lobe"], kind: "organ", region: "abdomen",
    summary: "Anatomical lobe on the visceral surface bounded by the gallbladder fossa (right), the fissure for the round ligament (left) and the porta hepatis (behind).",
    features: ["Anatomically part of the right lobe, but functionally part of the LEFT liver (segment IVb), supplied by left portal and hepatic arterial branches", "Related to the pylorus and the first part of the duodenum"],
    clinical: "Illustrates the difference between anatomical lobes (defined by surface ligaments) and functional liver (defined by blood supply and biliary drainage), which is what surgeons resect."
  },
  {
    key: "bare-area-liver", title: "Bare area of liver", match: ["bare area of liver"], kind: "organ", region: "abdomen",
    summary: "Triangular area on the posterior diaphragmatic surface of the liver not covered by peritoneum, enclosed by the reflections of the coronary ligament, where the liver is in direct contact with the diaphragm.",
    features: ["Contains the groove for the IVC on its left side", "Small veins of the bare area communicate with phrenic veins (a minor portosystemic anastomosis)"],
    clinical: "Liver infection or tumour can spread from the bare area directly across the diaphragm into the thorax. A posterior liver laceration here bleeds into the retroperitoneum rather than the peritoneal cavity."
  },
  {
    key: "liver-capsule", title: "Fibrous capsule of liver (Glisson's capsule)", match: ["capsule of the liver", "capsule of liver", "glisson"], kind: "organ", region: "abdomen",
    summary: "Thin fibrous capsule surrounding the liver beneath its peritoneal covering; at the porta hepatis it continues into the liver around the portal triads (perivascular fibrous capsule).",
    clinical: "Liver parenchyma is relatively insensitive, but stretching of the capsule (hepatitis, congestive heart failure, tumour) causes right upper quadrant pain; irritation of the diaphragmatic peritoneum can refer pain to the right shoulder (C3–C5). A subcapsular haematoma may complicate liver biopsy, trauma or HELLP syndrome in pregnancy, and can rupture."
  },
  {
    key: "liver-impressions", title: "Impressions on the visceral surface of the liver", match: ["impression of liver"], kind: "organ", region: "abdomen",
    summary: "Shallow markings on the visceral (posteroinferior) surface of the liver made by neighbouring organs; best seen in fixed specimens.",
    features: ["Gastric impression: left lobe, over the anterior stomach", "Oesophageal impression: posterior surface of the left lobe, over the abdominal oesophagus", "Duodenal impression: near the neck of the gallbladder (first part of duodenum)", "Colic impression: right colic (hepatic) flexure, inferior right lobe", "Renal impression: right kidney, posterior right lobe", "Suprarenal impression: right suprarenal gland, beside the IVC near the bare area"],
    clinical: "These relations predict where pathology spreads: the hepatorenal recess (Morison's pouch) between the liver and the right kidney is the lowest part of the supracolic peritoneal cavity in the supine patient and the first place free fluid is seen on a FAST scan."
  },
  {
    key: "diaphragmatic-surface-liver", title: "Diaphragmatic surface of liver", match: ["diaphragmatic surface of liver"], kind: "organ", region: "abdomen",
    summary: "Smooth, dome-shaped anterior, superior and posterior surface of the liver, moulded to the underside of the diaphragm and covered by peritoneum except at the bare area.",
    features: ["Separated from the diaphragm by the subphrenic recesses, which the falciform ligament divides into right and left", "Projects up to about the 5th rib/intercostal space on the right in expiration"],
    clinical: "Subphrenic abscess (after perforation or surgery) collects between this surface and the diaphragm, causing fever, shoulder-tip pain and a raised hemidiaphragm. Percutaneous liver biopsy passes through the lower right intercostal spaces in the mid-axillary line during expiration to avoid the lung."
  },
  {
    key: "coronary-triangular-ligaments", title: "Coronary and triangular ligaments of the liver", match: ["coronary ligament of liver", "triangular ligament of liver"], kind: "other", region: "abdomen",
    summary: "Reflections of peritoneum from the diaphragm onto the liver: the anterior and posterior layers of the coronary ligament enclose the bare area and meet laterally to form the right and left triangular ligaments.",
    features: ["The left triangular ligament anchors the left lobe to the diaphragm", "The right triangular ligament lies at the apex of the bare area"],
    clinical: "These ligaments are divided to mobilise the liver in hepatic resection and transplantation. They also explain why the bare area is extraperitoneal."
  },
  {
    key: "falciform-ligament", title: "Falciform ligament", match: ["falciform ligament"], kind: "other", region: "abdomen",
    summary: "Sickle-shaped double fold of peritoneum attaching the liver to the anterior abdominal wall and diaphragm; its free lower edge contains the round ligament of the liver and the paraumbilical veins.",
    features: ["Marks the boundary between the anatomical right and left lobes (not the functional halves)", "Divides the subphrenic space into right and left parts", "Its two layers separate at the top to form the coronary ligament"],
    clinical: "In portal hypertension the paraumbilical veins in its edge open up and connect with the superficial epigastric veins, producing caput medusae around the umbilicus. Air outlining it on a supine abdominal film (football sign) indicates a large pneumoperitoneum."
  },
  {
    key: "round-ligament-liver", title: "Round ligament of liver (ligamentum teres hepatis)", match: ["round ligament of liver", "ligamentum teres hepatis"], kind: "other", region: "abdomen",
    summary: "Fibrous cord in the free edge of the falciform ligament, running from the umbilicus to the left branch of the portal vein in the fissure on the visceral surface; the obliterated left umbilical vein.",
    features: ["Accompanied by the paraumbilical veins", "Continuous with the ligamentum venosum at the left branch of the portal vein"],
    clinical: "In the fetus the umbilical vein carried oxygenated placental blood to the liver; it is used for umbilical venous catheterisation in neonates. Recanalised paraumbilical veins alongside it decompress portal hypertension to the abdominal wall (caput medusae).",
    facts: ["The round ligament of the liver and the round ligament of the uterus share a name but nothing else: one is a fetal vein, the other a gubernacular remnant."]
  },
  {
    key: "ligamentum-venosum", title: "Ligamentum venosum", match: ["ligamentum venosum"], kind: "other", region: "abdomen",
    summary: "Fibrous remnant of the fetal ductus venosus, lying in a fissure between the caudate lobe and the left lobe and running from the left branch of the portal vein to the IVC (or left hepatic vein).",
    features: ["The lesser omentum attaches in the depth of its fissure"],
    clinical: "Before birth the ductus venosus shunted much of the umbilical venous blood past the liver sinusoids into the IVC; it closes functionally within days of birth. A persistent ductus venosus is a rare cause of neonatal hyperammonaemia."
  },
  {
    key: "porta-hepatis", title: "Porta hepatis", match: ["porta hepatis"], kind: "organ", region: "abdomen",
    summary: "Transverse fissure on the visceral surface of the liver, between the quadrate and caudate lobes, where the portal triad enters and leaves.",
    features: ["Hepatic ducts (most anterior and to the right), hepatic artery proper branches (anterior, left), hepatic portal vein (posterior)", "Also transmits the hepatic nerve plexus and lymphatics (hepatic nodes)", "The lesser omentum (hepatoduodenal ligament) attaches around it"],
    clinical: "Hilar cholangiocarcinoma (Klatskin tumour) at the confluence of the hepatic ducts causes painless obstructive jaundice. Enlarged nodes at the porta can compress the bile ducts."
  },
  {
    key: "hepatoduodenal-ligament", title: "Hepatoduodenal ligament", match: ["hepatoduodenal ligament", "hepataduodenal ligament"], kind: "other", region: "abdomen",
    summary: "Thickened free right edge of the lesser omentum, running from the porta hepatis to the first part of the duodenum and enclosing the portal triad.",
    features: ["Bile duct anterior and to the right, hepatic artery proper anterior and to the left, hepatic portal vein posterior", "Forms the anterior boundary of the omental (epiploic) foramen, the entrance to the lesser sac"],
    clinical: "Pringle manoeuvre: compressing this ligament through the omental foramen controls arterial and portal inflow to the liver during liver surgery or trauma; continued bleeding then suggests injury to the hepatic veins or IVC."
  },
];

// ───────────────────────────── BILIARY TREE ─────────────────────────────
const BILIARY = [
  {
    key: "hepatic-ducts", title: "Right and left hepatic ducts", match: ["hepatic duct"], kind: "organ", region: "abdomen",
    summary: "Ducts draining bile from the functional right and left halves of the liver; they unite at the porta hepatis to form the common hepatic duct.",
    features: ["Formed by the union of segmental (sectoral) ducts accompanying the portal vein and hepatic artery branches", "The left hepatic duct has a longer extrahepatic course than the right"],
    function: "Carry bile from the intrahepatic ducts to the common hepatic duct",
    clinical: "Aberrant or low-inserting right sectoral ducts are common and can be divided by mistake at cholecystectomy, causing a bile leak. Tumours at the confluence (Klatskin) obstruct both sides."
  },
  {
    key: "common-hepatic-duct", title: "Common hepatic duct", match: ["common hepatic duct"], kind: "organ", region: "abdomen",
    summary: "Duct formed at the porta hepatis by the union of the right and left hepatic ducts; it is joined on its right by the cystic duct to form the (common) bile duct.",
    features: ["Forms the medial (left) boundary of the cystohepatic triangle (Calot's): common hepatic duct, cystic duct and inferior surface of the liver", "The right hepatic artery usually crosses behind it"],
    clinical: "Mirizzi syndrome: a stone impacted in the gallbladder neck or cystic duct compresses the common hepatic duct and causes obstructive jaundice. It is the duct most at risk of being mistaken for the cystic duct at laparoscopic cholecystectomy."
  },
  {
    key: "cystic-duct", title: "Cystic duct", match: ["cystic duct"], kind: "organ", region: "abdomen",
    summary: "Duct (about 4 cm) connecting the neck of the gallbladder to the common hepatic duct; its mucosa forms a spiral fold (of Heister).",
    function: "Lets bile flow into the gallbladder for storage and out again when the gallbladder contracts; the spiral fold keeps it open",
    clinical: "A stone impacted in the cystic duct causes biliary colic and, if it persists, acute cholecystitis. Before clipping it at cholecystectomy the surgeon must achieve the 'critical view of safety' (only two structures — cystic duct and cystic artery — entering the gallbladder) to avoid injuring the bile duct."
  },
  {
    key: "common-bile-duct", title: "Bile duct (common bile duct)", match: ["common bile duct", "bile duct"], kind: "organ", region: "abdomen",
    summary: "Duct formed by the union of the cystic and common hepatic ducts, carrying bile to the second part of the duodenum.",
    features: ["Supraduodenal part in the free edge of the lesser omentum, right of the hepatic artery and anterior to the portal vein", "Retroduodenal part behind the first part of the duodenum", "Pancreatic part in a groove on (or tunnel through) the posterior head of the pancreas", "Joins the main pancreatic duct to form the hepatopancreatic ampulla in the wall of the descending duodenum"],
    function: "Conveys bile from the liver and gallbladder to the duodenum",
    clinical: "Choledocholithiasis causes obstructive jaundice, cholangitis (Charcot's triad: fever, jaundice, right upper quadrant pain) and gallstone pancreatitis; stones are removed by ERCP. Carcinoma of the pancreatic head compresses its pancreatic part, giving painless jaundice with a palpable gallbladder (Courvoisier's law)."
  },
  {
    key: "hepatopancreatic-ampulla", title: "Hepatopancreatic ampulla (of Vater)", match: ["hepatopancreatic ampulla", "ampulla of vater"], kind: "organ", region: "abdomen",
    summary: "Dilatation formed by the union of the bile duct and the main pancreatic duct within the wall of the descending duodenum, opening on the summit of the major duodenal papilla.",
    features: ["The major duodenal papilla lies on the posteromedial wall of the descending (second) part of the duodenum", "Marks the embryological junction of the foregut and midgut"],
    clinical: "A gallstone impacted here obstructs both bile and pancreatic juice, causing jaundice and acute pancreatitis. Periampullary carcinoma presents early with obstructive jaundice and has a better prognosis than pancreatic head cancer. The papilla is cannulated at ERCP."
  },
  {
    key: "sphincter-of-oddi", title: "Sphincter of the hepatopancreatic ampulla (of Oddi)", match: ["sphincter of hepatopancreatic ampulla", "sphincter of oddi"], kind: "muscle", region: "abdomen",
    summary: "Ring of smooth muscle around the hepatopancreatic ampulla, together with the sphincters of the terminal bile duct and pancreatic duct.",
    function: "Regulates the flow of bile and pancreatic juice into the duodenum and prevents reflux of duodenal contents; when the bile duct sphincter is closed, bile backs up into the gallbladder",
    innervation: "Autonomic (vagal and sympathetic) fibres; relaxed by cholecystokinin after a fatty meal",
    clinical: "Endoscopic sphincterotomy at ERCP enlarges the opening to remove bile duct stones. Sphincter of Oddi dysfunction causes biliary-type pain after cholecystectomy. Opioids can increase sphincter tone."
  },
];

// ───────────────────────────── PANCREAS, DUODENUM, SMALL & LARGE INTESTINE ─────────────────────────────
const GUT = [
  {
    key: "head-of-pancreas", title: "Head of pancreas", match: ["head of pancreas"], kind: "organ", region: "abdomen",
    summary: "Expanded part of the pancreas lying within the C-shaped curve of the duodenum, to the right of the superior mesenteric vessels.",
    features: ["Posterior relations: IVC, right renal vessels and left renal vein", "The bile duct runs in a groove on, or embedded in, its posterior surface", "Its lower part continues as the uncinate process behind the superior mesenteric vessels"],
    blood: "Anterior and posterior superior pancreaticoduodenal arteries (from the gastroduodenal artery, coeliac territory) and inferior pancreaticoduodenal arteries (from the SMA) forming arcades",
    clinical: "Carcinoma of the head compresses the bile duct, causing painless progressive jaundice with a palpable, non-tender gallbladder (Courvoisier). Resectable tumours are removed by pancreaticoduodenectomy (Whipple procedure); the shared arcade blood supply is why the duodenum must be removed with the head."
  },
  {
    key: "uncinate-process", title: "Uncinate process of pancreas", match: ["uncinate process"], kind: "organ", region: "abdomen",
    summary: "Hook-like projection from the lower left part of the pancreatic head that passes posterior to the superior mesenteric vein and artery.",
    features: ["Derived from the ventral pancreatic bud", "Lies anterior to the aorta and IVC"],
    clinical: "Tumours of the uncinate process may involve the SMA and SMV early and cause duodenal obstruction before jaundice. Dissection of its attachment along the SMA (the 'mesopancreas') is the critical, often bloodiest, step of a Whipple operation."
  },
  {
    key: "neck-of-pancreas", title: "Neck of pancreas", match: ["neck of pancreas"], kind: "organ", region: "abdomen",
    summary: "Short narrow part (about 1.5–2 cm) joining the head to the body, lying anterior to the superior mesenteric vessels and the formation of the hepatic portal vein.",
    features: ["The superior mesenteric and splenic veins join to form the hepatic portal vein behind it", "Covered anteriorly by peritoneum next to the pylorus; the gastroduodenal artery runs down near its anterior surface"],
    clinical: "The neck is the plane of transection in a pancreaticoduodenectomy, after the surgeon tunnels between it and the portal/superior mesenteric vein. Tumours here readily invade the portal vein."
  },
  {
    key: "body-of-pancreas", title: "Body of pancreas", match: ["body of pancreas"], kind: "organ", region: "abdomen",
    summary: "Main part of the pancreas, crossing to the left over the aorta and L2 vertebra, behind the stomach and the omental bursa.",
    features: ["Posterior relations: aorta and origin of the SMA, left suprarenal gland, left kidney and renal vessels", "The tortuous splenic artery runs along its upper border; the splenic vein lies in a groove on its posterior surface", "Anterior surface forms part of the stomach bed, separated by the lesser sac"],
    blood: "Branches of the splenic artery (dorsal pancreatic, great pancreatic arteries)",
    clinical: "Compression against the vertebral column (handlebar or seat-belt injury) can transect the pancreas at the body/neck. Body and tail carcinomas present late with weight loss and back pain from invasion of the coeliac plexus. Fluid from pancreatitis collects in the lesser sac as a pseudocyst behind the stomach."
  },
  {
    key: "tail-of-pancreas", title: "Tail of pancreas", match: ["tail of pancreas"], kind: "organ", region: "abdomen",
    summary: "Narrow left end of the pancreas, lying in the splenorenal ligament with the splenic vessels and reaching the hilum of the spleen.",
    features: ["The only relatively mobile, intraperitoneal part of the pancreas", "Contains the highest density of pancreatic islets"],
    clinical: "Easily injured when the splenic hilum is clamped at splenectomy, causing a pancreatic fistula or left subphrenic collection. Distal pancreatectomy usually removes the spleen with the tail."
  },
  {
    key: "dorsal-pancreatic-duct", title: "Dorsal pancreatic duct (and accessory duct of Santorini)", match: ["dorsal pancreatic duct"], kind: "organ", region: "abdomen",
    summary: "Duct of the embryonic dorsal pancreatic bud. After the buds fuse, its distal part (body and tail) joins the ventral duct to form the main pancreatic duct, and its proximal part persists as the accessory pancreatic duct opening on the minor duodenal papilla.",
    features: ["The minor duodenal papilla lies about 2 cm above the major papilla in the descending duodenum", "The dorsal bud forms the upper head, neck, body and tail"],
    clinical: "Pancreas divisum (failure of the two duct systems to fuse, the commonest pancreatic anomaly) sends most pancreatic secretion out through the small minor papilla; it is usually harmless but is associated with recurrent pancreatitis in some people."
  },
  {
    key: "ventral-pancreatic-duct", title: "Ventral pancreatic duct (main duct of Wirsung, proximal part)", match: ["ventral pancreatic duct"], kind: "organ", region: "abdomen",
    summary: "Duct of the embryonic ventral pancreatic bud, which rotates with the bile duct to lie behind the dorsal bud; it forms the proximal (head) part of the main pancreatic duct, joining the bile duct at the hepatopancreatic ampulla.",
    features: ["The ventral bud forms the lower part of the head and the uncinate process", "Its duct shares its opening with the bile duct on the major duodenal papilla"],
    clinical: "Abnormal rotation of a bifid ventral bud produces an annular pancreas, a ring of pancreatic tissue around the descending duodenum that can cause duodenal obstruction (bilious vomiting in neonates; associated with Down syndrome)."
  },
  {
    key: "duodenal-ampulla", title: "Duodenal ampulla (duodenal cap / bulb)", match: ["duodenal ampulla", "duodenal cap", "duodenal bulb"], kind: "organ", region: "abdomen",
    summary: "The first 2 cm or so of the superior part of the duodenum just beyond the pylorus: mobile, intraperitoneal and smooth-walled, seen as the 'duodenal cap' on barium studies.",
    features: ["Attached above to the hepatoduodenal ligament and below to the greater omentum", "Unlike the rest of the duodenum it has a mesentery-like mobility"],
    clinical: "The commonest site of duodenal ulcers (Helicobacter pylori, NSAIDs). An anterior ulcer can perforate into the peritoneal cavity (free gas under the diaphragm); a posterior ulcer can erode the gastroduodenal artery and cause major haemorrhage."
  },
  {
    key: "duodenum-superior", title: "Superior (first) part of duodenum", match: ["duodenum superior", "superior part of duodenum"], kind: "organ", region: "abdomen",
    summary: "First part of the duodenum (about 5 cm), passing posterosuperiorly from the pylorus at about L1; its first 2 cm is the mobile duodenal ampulla, the rest retroperitoneal.",
    features: ["Anterior relations: liver (quadrate lobe) and gallbladder", "Posterior relations: bile duct, gastroduodenal artery, hepatic portal vein and IVC"],
    blood: "Supraduodenal and gastroduodenal artery branches (coeliac territory)",
    clinical: "Posterior duodenal ulcers erode the gastroduodenal artery behind it. A gallstone can erode from the gallbladder into it (cholecystoduodenal fistula) and pass on to obstruct the terminal ileum (gallstone ileus)."
  },
  {
    key: "duodenum-descending", title: "Descending (second) part of duodenum", match: ["duodenum descending", "descending part of duodenum"], kind: "organ", region: "abdomen",
    summary: "Second part of the duodenum (about 7–10 cm), running down to the right of L1–L3 and the IVC, curving around the head of the pancreas; retroperitoneal.",
    features: ["The bile and main pancreatic ducts open on the major duodenal papilla on its posteromedial wall; the accessory duct on the minor papilla above", "Crossed anteriorly by the transverse colon and its mesocolon", "Posterior relation: right kidney and renal hilum"],
    blood: "Superior and inferior pancreaticoduodenal arteries (foregut–midgut junction at the major papilla)",
    clinical: "Site of periampullary tumours and of the ERCP approach to the biliary tree. Mobilisation of this part with the pancreatic head (Kocher manoeuvre) exposes the IVC and the back of the pancreas. Annular pancreas obstructs it."
  },
  {
    key: "duodenum-horizontal", title: "Horizontal (third) part of duodenum", match: ["duodenum horizontal", "horizontal part of duodenum"], kind: "organ", region: "abdomen",
    summary: "Third part of the duodenum (about 6–8 cm), crossing from right to left over the IVC, aorta and L3 vertebra, with the superior mesenteric artery and vein passing in front of it.",
    clinical: "Superior mesenteric artery syndrome: after rapid weight loss the narrowed angle between the SMA and aorta compresses it, causing post-prandial pain and vomiting. It can be crushed against the vertebral column in blunt (seat-belt) trauma. An aortic graft can erode into it (aortoenteric fistula)."
  },
  {
    key: "duodenum-ascending", title: "Ascending (fourth) part of duodenum", match: ["duodenum ascending", "ascending part of duodenum"], kind: "organ", region: "abdomen",
    summary: "Fourth part of the duodenum (about 5 cm), ascending on the left of the aorta to the duodenojejunal flexure at about L2.",
    features: ["The flexure is held by the suspensory muscle of the duodenum (ligament of Treitz) from the right crus of the diaphragm", "The inferior mesenteric vein lies just to its left, beside the paraduodenal fossa"],
    clinical: "The ligament of Treitz divides upper from lower gastrointestinal bleeding. On a contrast study the duodenojejunal flexure normally lies to the left of the spine at the level of the pylorus; a low or right-sided flexure indicates malrotation (risk of midgut volvulus). Paraduodenal hernias occur in the fossae here."
  },
  alias("jejunum", "jejunum-f", ["jejenum"]),
  {
    key: "terminal-ileum", title: "Terminal ileum", match: ["ileum terminal", "terminal ileum"], kind: "organ", region: "abdomen",
    summary: "Last part of the ileum, entering the medial side of the caecum at the ileocaecal orifice in the right iliac fossa.",
    features: ["Abundant aggregated lymphoid follicles (Peyer's patches)", "Supplied by the ileal branches of the ileocolic artery and the end of the SMA"],
    function: "Specialised absorption of the vitamin B12–intrinsic factor complex and of conjugated bile salts (enterohepatic circulation)",
    clinical: "The commonest site of Crohn's disease. Resection or disease causes B12 deficiency (megaloblastic anaemia, neuropathy), bile-salt diarrhoea and gallstones. A Meckel's diverticulum lies on the ileum about 60 cm (2 feet) from the ileocaecal valve. Lymphoid hyperplasia here leads ileocolic intussusception in children; Yersinia infection mimics appendicitis."
  },
  {
    key: "caecum", title: "Caecum", match: ["caecum", "cecum"], kind: "organ", region: "abdomen",
    summary: "Blind-ended pouch of large intestine (about 7.5 cm long and wide) in the right iliac fossa, below the entry of the ileum and continuous above with the ascending colon.",
    features: ["Usually intraperitoneal but with no mesentery, so it is fairly mobile", "The three taeniae coli converge on the base of the appendix on its posteromedial wall", "Retrocaecal recess behind it often contains the appendix"],
    blood: "Anterior and posterior caecal arteries from the ileocolic artery (SMA)",
    clinical: "As the widest part of the colon it is the most likely part to perforate in distal large-bowel obstruction with a competent ileocaecal valve (Laplace's law). Right-sided (caecal) cancers present late with iron-deficiency anaemia rather than obstruction. Caecal volvulus occurs when it has an unusually long mesentery."
  },
  {
    key: "ileocecal-valve", title: "Ileocaecal valve (ileal orifice)", match: ["ileocecal valve", "ileocaecal valve"], kind: "organ", region: "abdomen",
    summary: "Opening of the terminal ileum into the caecum, bounded by upper and lower lips (folds) that meet as frenula; the ileum's circular muscle is thickened here (ileocaecal sphincter).",
    function: "Regulates the passage of ileal contents into the caecum and partly limits reflux of colonic contents into the ileum",
    clinical: "A competent valve in large-bowel obstruction creates a closed loop, so the caecum distends and may perforate. It is a landmark at colonoscopy (confirming the caecum has been reached) and the site of ileocolic intussusception in children."
  },
  {
    key: "ascending-colon", title: "Ascending colon", match: ["ascending colon"], kind: "organ", region: "abdomen",
    summary: "Part of the colon (about 12–15 cm) ascending from the caecum on the right posterior abdominal wall to the right colic (hepatic) flexure; secondarily retroperitoneal.",
    features: ["Lies on iliacus, quadratus lumborum and the lower pole of the right kidney", "The right paracolic gutter lateral to it connects the pelvis with the hepatorenal recess"],
    blood: "Ileocolic and right colic arteries (SMA); veins to the superior mesenteric vein",
    clinical: "Removed with the caecum and terminal ileum in a right hemicolectomy. Fluid and infection track along the right paracolic gutter, e.g. from a perforated duodenal ulcer down to the right iliac fossa."
  },
  {
    key: "hepatic-flexure", title: "Right colic (hepatic) flexure", match: ["hepatic flexure of colon", "right colic flexure"], kind: "organ", region: "abdomen",
    summary: "Bend where the ascending colon turns left into the transverse colon, under the right lobe of the liver (colic impression) and in front of the lower right kidney.",
    features: ["The descending (second) part of the duodenum lies just medial and posterior to it"],
    blood: "Right colic and middle colic arteries",
    clinical: "The duodenum is at risk when the flexure is mobilised in a right hemicolectomy. Interposition of the colon between the liver and diaphragm (Chilaiditi sign) can mimic free gas on an X-ray."
  },
  {
    key: "transverse-colon", title: "Transverse colon", match: ["transverse colon"], kind: "organ", region: "abdomen",
    summary: "The longest and most mobile part of the colon, suspended on the transverse mesocolon between the right and left colic flexures; the greater omentum hangs from it.",
    features: ["May sag as low as the pelvis, especially when standing", "Right two-thirds midgut (SMA, vagus), left third hindgut (IMA, pelvic splanchnics)"],
    blood: "Middle colic artery (SMA), with left colic (IMA) contributions to its left part",
    clinical: "The greater omentum and transverse colon are seen behind the stomach at surgery; gastric cancers can invade the mesocolon and middle colic vessels. It is often the site of a loop colostomy."
  },
  {
    key: "splenic-flexure", title: "Left colic (splenic) flexure", match: ["splenic flexure of colon", "left colic flexure"], kind: "organ", region: "abdomen",
    summary: "Higher, sharper bend where the transverse colon turns down into the descending colon, against the colic surface of the spleen and anterior to the left kidney; attached to the diaphragm by the phrenicocolic ligament.",
    blood: "Watershed between the middle colic (SMA) and left colic (IMA) territories, linked by the marginal artery",
    clinical: "The weak point of the marginal artery here (Griffiths' point) makes the flexure a classic site of ischaemic colitis. Excessive traction on it during colonic surgery can tear the splenic capsule. Flexure tumours can present with obstruction."
  },
  {
    key: "descending-colon", title: "Descending colon", match: ["descending colon"], kind: "organ", region: "abdomen",
    summary: "Part of the colon descending retroperitoneally from the left colic flexure to the left iliac fossa, where it becomes the sigmoid colon.",
    features: ["Lies on the left kidney, quadratus lumborum and iliacus", "Narrower than the right colon; stool is more solid"],
    blood: "Left colic artery and upper sigmoid arteries (IMA); veins to the inferior mesenteric vein",
    innervation: "Sympathetic from the lumbar splanchnics; parasympathetic from the pelvic splanchnic nerves (S2–S4)",
    clinical: "Left-sided cancers present with change in bowel habit, rectal bleeding and obstruction (narrower lumen, formed stool)."
  },
  {
    key: "sigmoid-colon", title: "Sigmoid colon", match: ["sigmoid colon"], kind: "organ", region: "pelvis",
    summary: "S-shaped loop of colon from the pelvic brim to the rectosigmoid junction at about S3, suspended on the sigmoid mesocolon.",
    features: ["The root of the sigmoid mesocolon forms an inverted V; the left ureter and the bifurcation of the left common iliac artery lie at its apex", "Taeniae coli spread out to form a continuous longitudinal muscle coat at the rectosigmoid junction"],
    blood: "Sigmoid arteries (IMA); veins to the inferior mesenteric vein",
    clinical: "Commonest site of diverticular disease (high intraluminal pressure). A long mesentery on a narrow base allows sigmoid volvulus ('coffee-bean' sign). The left ureter must be identified at the base of the mesocolon during sigmoid resection. In women, an inflamed sigmoid diverticulum can fistulate into the vagina or bladder."
  },
];

// ───────────────────────────── SPLEEN & TONSIL ─────────────────────────────
const SPLEEN = [
  {
    key: "surfaces-of-spleen", title: "Surfaces of the spleen", match: ["surface of spleen"], kind: "organ", region: "abdomen",
    summary: "The spleen has a convex diaphragmatic surface and a concave visceral surface with gastric, renal and colic impressions (and the tail of the pancreas at the hilum).",
    features: ["Diaphragmatic surface: against the diaphragm, which separates it from the pleura and lung base and ribs 9–11", "Gastric impression: the posterior stomach, in front of the hilum", "Renal impression: the left kidney, behind the hilum", "Colic impression: the left colic flexure, at the lower (anterior) pole"],
    clinical: "Fractures of the left 9th–11th ribs can lacerate the spleen; blood under the diaphragm causes left shoulder-tip pain (Kehr's sign). An enlarged spleen grows down and forward toward the right iliac fossa; its notched superior border is felt below the left costal margin and it moves with respiration (unlike the kidney, it cannot be 'got above')."
  },
  {
    key: "hilum-of-spleen", title: "Hilum of spleen", match: ["hilum of spleen", "splenic hilum"], kind: "organ", region: "abdomen",
    summary: "Slit on the visceral surface where the branches of the splenic artery enter and the tributaries of the splenic vein leave, between the gastric and renal impressions.",
    features: ["The tail of the pancreas reaches it within the splenorenal ligament", "The gastrosplenic ligament (short gastric and left gastro-omental vessels) and splenorenal ligament (splenic vessels, pancreatic tail) attach around it", "The splenic artery divides into segmental branches with relatively avascular planes between them"],
    clinical: "At splenectomy the hilar vessels are ligated close to the spleen to avoid the pancreatic tail. Accessory spleens (splenunculi) are common, especially near the hilum, and must be removed in splenectomy for haematological disease or the condition may recur. Splenic artery aneurysms (more common in women, with a risk of rupture in pregnancy) lie along the vessel toward the hilum."
  },
  {
    key: "palatine-tonsil", title: "Palatine tonsil", match: ["palatine tonsil"], kind: "organ", region: "head & neck",
    summary: "Mass of lymphoid tissue in the tonsillar fossa of the oropharynx, between the palatoglossal and palatopharyngeal arches; part of the pharyngeal lymphoid (Waldeyer's) ring.",
    features: ["Its medial surface has crypts; its lateral surface is covered by a fibrous capsule on the superior constrictor", "Glossopharyngeal nerve and the internal carotid artery lie lateral to the fossa (the artery about 2.5 cm posterolateral)"],
    blood: "Tonsillar branch of the facial artery (main supply), with branches of the ascending pharyngeal, lingual and palatine arteries; drained by the external palatine (paratonsillar) vein",
    innervation: "Glossopharyngeal nerve (CN IX) and lesser palatine nerves",
    clinical: "Tonsillitis is common; peritonsillar abscess (quinsy) pushes the tonsil and uvula to the opposite side with trismus. Post-tonsillectomy bleeding usually comes from the paratonsillar vein. Earache after tonsillectomy is referred pain via CN IX (tympanic branch). Lymph drains to the jugulodigastric (tonsillar) node."
  },
];

// ───────────────────────────── HEART ─────────────────────────────
const HEART = [
  {
    key: "cardiac-atria", title: "Atria of the heart", match: ["cardiac atrium", "atrium of heart"], kind: "organ", region: "thorax",
    summary: "The two thin-walled receiving chambers of the heart: the right atrium receives systemic venous blood, the left atrium oxygenated blood from the lungs.",
    features: ["Right atrium: smooth sinus venarum (SVC, IVC and coronary sinus open here) separated from the rough, pectinate-muscled auricle by the crista terminalis", "Interatrial septum with the fossa ovalis (remnant of the foramen ovale)", "SA node near the upper end of the crista terminalis at the SVC opening; AV node in the triangle of Koch near the coronary sinus opening", "Left atrium: forms most of the base (posterior surface) of the heart, receives four pulmonary veins and lies directly in front of the oesophagus; long narrow left auricle"],
    function: "Collect venous return and top up ventricular filling by atrial contraction (about 20% at rest, more during exercise)",
    blood: "SA nodal artery (from the RCA in about 60%, otherwise the circumflex); atrial branches of both coronary arteries",
    clinical: "In atrial fibrillation thrombus forms in the left atrial appendage and can embolise to the brain (stroke). An enlarged left atrium (mitral stenosis) indents the oesophagus (seen on barium swallow, used for transoesophageal echo) and may compress the left recurrent laryngeal nerve (hoarseness). A patent foramen ovale allows paradoxical embolism; atrial septal defects cause a fixed split second heart sound."
  },
  {
    key: "cardiac-ventricles", title: "Ventricles of the heart", match: ["ventricle"], kind: "organ", region: "thorax",
    summary: "The two pumping chambers of the heart: the right ventricle pumps into the low-pressure pulmonary circulation, the left ventricle into the high-pressure systemic circulation.",
    features: ["Right ventricle: forms most of the anterior (sternocostal) surface; trabeculae carneae, three papillary muscles, septomarginal trabecula (moderator band, carrying the right bundle branch); smooth conus arteriosus (infundibulum) leads to the pulmonary valve", "Left ventricle: forms the apex, most of the left border and the diaphragmatic surface; wall about 2–3 times thicker than the right; two papillary muscles; smooth aortic vestibule below the aortic valve", "Both separated by the interventricular septum"],
    function: "Eject the stroke volume into the pulmonary trunk and aorta in systole",
    blood: "LAD and circumflex (left ventricle, most of the septum); RCA (right ventricle, inferior wall in right-dominant hearts)",
    clinical: "The apex beat (left ventricle) is normally in the left 5th intercostal space at the mid-clavicular line; it is displaced by LV dilatation. LV hypertrophy follows hypertension or aortic stenosis. Right ventricular infarction accompanies a proximal RCA occlusion. Peripartum cardiomyopathy is LV systolic dysfunction arising in late pregnancy or the months after delivery."
  },
  {
    key: "interventricular-septum", title: "Interventricular septum", match: ["interventricular septum"], kind: "organ", region: "thorax",
    summary: "Wall between the ventricles: a thick muscular part forming most of it and a small thin membranous part in its upper posterior region just below the aortic valve.",
    features: ["Bulges into the right ventricle because left ventricular pressure is higher", "The AV bundle (of His) runs along the lower border of the membranous part and divides into right and left bundle branches on the muscular septum"],
    blood: "Anterior two-thirds by septal branches of the LAD; posterior third by the posterior interventricular (descending) artery",
    clinical: "Ventricular septal defect is the commonest congenital heart defect, usually perimembranous; it gives a harsh pansystolic murmur at the left sternal edge. Septal rupture can follow an MI (new murmur, shock). Asymmetric septal hypertrophy in hypertrophic cardiomyopathy obstructs the LV outflow tract (a cause of sudden death in young athletes)."
  },
  {
    key: "aortic-valve", title: "Aortic valve", match: ["aortic valve"], kind: "organ", region: "thorax",
    summary: "Semilunar valve between the left ventricle and the ascending aorta, with right, left and posterior (non-coronary) cusps.",
    features: ["Each cusp has a central nodule and thin lateral lunules", "Behind each cusp the aortic wall bulges as an aortic sinus; the right and left coronary arteries arise from the right and left sinuses", "Best heard in the right 2nd intercostal space at the sternal border"],
    function: "Prevents backflow from the aorta into the left ventricle in diastole; the recoil of blood into the sinuses closes it and fills the coronary arteries",
    clinical: "Aortic stenosis (calcific degeneration in the elderly, or a congenitally bicuspid valve in younger patients) causes an ejection systolic murmur radiating to the carotids, with angina, syncope and heart failure; treated by surgical or transcatheter valve replacement (TAVI). Aortic regurgitation causes an early diastolic murmur at the left sternal edge and a collapsing pulse."
  },
  {
    key: "coronary-arteries", title: "Coronary arteries", match: ["coronary artery"], kind: "vessel", region: "thorax",
    summary: "The right and left coronary arteries, the first branches of the aorta, arising from the right and left aortic sinuses and running in the coronary (atrioventricular) and interventricular grooves.",
    course: "Left coronary artery: short left main stem between the pulmonary trunk and left auricle, dividing into the anterior interventricular (LAD) and circumflex arteries. Right coronary artery: runs in the right coronary groove, giving the SA nodal (in about 60%), right marginal and AV nodal branches and, in right-dominant hearts, the posterior interventricular artery",
    supplies: "The myocardium, SA and AV nodes and conducting system; most coronary flow occurs in diastole",
    clinical: "Atherosclerotic coronary disease causes angina and myocardial infarction; the arteries behave as functional end arteries. Women more often present with 'atypical' symptoms (breathlessness, fatigue, nausea, epigastric or jaw pain) and are more affected by microvascular disease. Spontaneous coronary artery dissection mainly affects young and middle-aged women, including during pregnancy and after delivery.",
    facts: ["Dominance is defined by which artery gives the posterior interventricular artery: right in most people, left (from the circumflex) in a minority, and both in some."]
  },
  alias("lad", "lad-f", ["anterior descending artery"]),
  {
    key: "diagonal-branch", title: "Diagonal branch of the LAD", match: ["diagonal branch of anterior descending artery", "diagonal branch"], kind: "vessel", region: "thorax",
    summary: "One or more branches of the anterior interventricular artery (LAD) passing diagonally over the anterolateral surface of the left ventricle.",
    course: "Leave the LAD at an acute angle and run toward the obtuse margin of the heart",
    supplies: "Anterolateral wall of the left ventricle (and the anterolateral papillary muscle with the circumflex marginals)",
    clinical: "Occlusion causes an anterolateral (high lateral) infarct; lesions at the LAD–diagonal bifurcation are technically demanding to stent."
  },
  alias("circumflex", "circumflex-f", ["circumflex artery"]),
  {
    key: "posterior-descending-branch", title: "Posterior descending (interventricular) artery", match: ["posterior descending branch"], kind: "vessel", region: "thorax",
    summary: "Artery in the posterior interventricular groove running toward the apex; its origin defines coronary dominance. In this model it arises from the circumflex branch of the left coronary artery (left-dominant pattern, found in a minority of people).",
    course: "From the crux of the heart down the posterior interventricular groove toward the apex, giving septal branches",
    supplies: "Posterior third of the interventricular septum, inferior (diaphragmatic) walls of both ventricles and the posteromedial papillary muscle",
    clinical: "Occlusion gives an inferior myocardial infarction (ST elevation in II, III and aVF). In a left-dominant heart the left coronary system supplies the whole septum, so a left main or proximal circumflex occlusion is especially dangerous; the AV nodal artery then also comes from the circumflex."
  },
  {
    key: "posterior-ventricular-branch", title: "Posterior left ventricular branch(es)", match: ["posterior ventricular branch", "posterior left ventricular branch"], kind: "vessel", region: "thorax",
    summary: "Branch(es) running on the diaphragmatic surface of the left ventricle: from the terminal right coronary artery beyond the crux in right-dominant hearts, or from the circumflex in left-dominant hearts.",
    supplies: "Inferolateral (posterolateral) wall of the left ventricle",
    clinical: "Their occlusion contributes to inferolateral ('posterior') infarction, which may show only ST depression in V1–V3 on the standard ECG; posterior leads (V7–V9) reveal the ST elevation."
  },
  {
    key: "marginal-arteries-heart", title: "Marginal arteries of the heart (right and left/obtuse marginal)", match: ["marginal artery", "marginal branch"], kind: "vessel", region: "thorax",
    summary: "The right marginal artery (from the RCA) runs along the acute (inferior right) margin of the heart; the left (obtuse) marginal branches (from the circumflex) run along the obtuse (left) margin.",
    supplies: "Right marginal: the right ventricle toward the apex. Obtuse marginals: the lateral wall of the left ventricle",
    clinical: "Obtuse marginal arteries are frequent targets for coronary bypass grafts; their occlusion causes lateral wall infarction (often electrocardiographically 'silent'). The right marginal artery is an important source of collaterals."
  },
  {
    key: "marginal-veins-heart", title: "Marginal veins of the heart", match: ["marginal vein"], kind: "vessel", region: "thorax",
    summary: "The right marginal vein runs along the acute margin with the right marginal artery; the left marginal vein ascends along the obtuse margin of the left ventricle.",
    drains: "Right marginal vein: lateral right ventricle, into the small cardiac vein or directly into the right atrium. Left marginal vein: lateral left ventricle, into the great cardiac vein",
    clinical: "Lateral (left marginal) and posterolateral cardiac veins are the preferred sites for the left ventricular lead in cardiac resynchronisation therapy, reached through the coronary sinus."
  },
  {
    key: "small-cardiac-vein", title: "Small cardiac vein", match: ["small cardiac vein"], kind: "vessel", region: "thorax",
    summary: "Vein accompanying the right coronary artery (and right marginal artery) in the right coronary groove.",
    course: "Runs posteriorly in the right coronary groove to end in the right end of the coronary sinus (sometimes the middle cardiac vein or the right atrium)",
    drains: "Posterior right atrium and part of the right ventricle",
    clinical: "Variable and often small; the coronary venous anatomy matters for device lead placement and for retrograde cardioplegia via the coronary sinus."
  },
  {
    key: "oblique-vein-left-atrium", title: "Oblique vein of left atrium (of Marshall)", match: ["oblique vein of atrium", "oblique vein of left atrium"], kind: "vessel", region: "thorax",
    summary: "Small vein descending obliquely on the back of the left atrium to the coronary sinus, marking the point where the great cardiac vein becomes the coronary sinus.",
    drains: "Posterior wall of the left atrium",
    clinical: "It is the remnant of the embryonic left superior vena cava (left common cardinal vein). If that vessel persists (persistent left SVC, the commonest thoracic venous anomaly) it drains into a dilated coronary sinus. The ligament and vein of Marshall can be a source of atrial fibrillation triggers targeted in ablation.",
    facts: ["Its fold of pericardium is called the ligament of the left vena cava (of Marshall)."]
  },
  alias("posterior-vein-lv", "posterior-vein-lv-f", ["posterior vein of ventricle"]),
];

// ───────────────────────────── GREAT VESSELS, ABDOMINAL & PELVIC VESSELS ─────────────────────────────
const VESSELS = [
  alias("arch-of-aorta", "arch-of-aorta-f", ["aortic arch"]),
  alias("pulmonary-artery", "pulmonary-trunk-f", ["pulmonary trunk"]),
  alias("celiac-trunk", "celiac-trunk-f", ["celiac trunk", "coeliac trunk"]),
  {
    key: "hepatic-portal-vein", title: "Hepatic portal vein", match: ["portal vein"], kind: "vessel", region: "abdomen",
    summary: "Short, wide vein (about 8 cm) carrying venous blood from the abdominal gut, spleen, pancreas and gallbladder to the liver; it divides into right and left branches at the porta hepatis.",
    course: "Formed behind the neck of the pancreas (about L1–L2) by the union of the superior mesenteric and splenic veins (the inferior mesenteric usually joins the splenic). Passes behind the first part of the duodenum and ascends in the hepatoduodenal ligament, posterior to the bile duct and hepatic artery proper, to the porta hepatis, where it divides into right and left branches that follow the liver segments",
    drains: "Abdominal digestive tract from the lower oesophagus to the upper anal canal, plus spleen, pancreas and gallbladder; supplies about 75% of liver blood flow",
    clinical: "Portal hypertension (usually cirrhosis) opens portosystemic anastomoses: oesophageal varices (left gastric ↔ oesophageal/azygos veins), rectal varices, caput medusae (paraumbilical ↔ epigastric veins) and retroperitoneal collaterals; also splenomegaly and ascites. Treated with banding, beta-blockers or a TIPS shunt. Portal vein thrombosis occurs with cirrhosis, malignancy and prothrombotic states."
  },
  {
    key: "hepatic-veins", title: "Hepatic veins (right, middle, left)", match: ["hepatic vein"], kind: "vessel", region: "abdomen",
    summary: "Three large valveless veins running between the liver segments and draining into the IVC just below the diaphragm, at the top of the bare area.",
    course: "Right hepatic vein between the right anterior and posterior sections; middle hepatic vein in the plane between the functional right and left livers (Cantlie's line, gallbladder fossa to IVC); left hepatic vein between segments II/III and IV, often joining the middle vein before the IVC",
    drains: "Whole liver except the caudate lobe, which has its own short veins into the IVC",
    clinical: "Budd–Chiari syndrome (hepatic venous outflow obstruction, associated with myeloproliferative disorders, the combined pill and pregnancy) causes painful hepatomegaly, ascites and caudate lobe hypertrophy. Right heart failure congests the liver ('nutmeg liver'). The middle hepatic vein is the key landmark in right versus left hepatectomy."
  },
  {
    key: "hepatic-arteries", title: "Right and left hepatic arteries", match: ["hepatic artery"], kind: "vessel", region: "abdomen",
    summary: "Terminal branches of the hepatic artery proper, supplying the functional right and left halves of the liver.",
    course: "The right hepatic artery usually passes behind the common hepatic duct and enters the cystohepatic triangle, where it gives the cystic artery; the left passes to the left part of the porta hepatis. Replaced or accessory hepatic arteries are common: a right hepatic artery from the SMA, a left from the left gastric artery",
    supplies: "Liver (about a quarter of its blood flow but much of its oxygen) and, critically, the bile ducts",
    clinical: "Can be clipped or injured at cholecystectomy if mistaken for the cystic artery; bile ducts depend on arterial supply, so arterial injury or post-transplant hepatic artery thrombosis causes biliary strictures and necrosis."
  },
  {
    key: "proper-hepatic-artery", title: "Hepatic artery proper", match: ["proper hepatic artery", "hepatic artery proper"], kind: "vessel", region: "abdomen",
    summary: "Continuation of the common hepatic artery beyond the origin of the gastroduodenal artery.",
    course: "Ascends in the hepatoduodenal ligament to the left of the bile duct and anterior to the hepatic portal vein, usually giving the right gastric artery, and divides near the porta hepatis into right and left hepatic arteries",
    supplies: "Liver and gallbladder (via the cystic artery), and part of the lesser curvature of the stomach (right gastric)",
    clinical: "Compressed together with the portal vein in the Pringle manoeuvre. The gastroduodenal–hepatic arterial collaterals allow ligation of the common hepatic artery (proximal to the GDA) without liver infarction, but ligation of the hepatic artery proper is much riskier."
  },
  {
    key: "middle-hepatic-artery", title: "Middle hepatic artery (segment IV artery)", match: ["middle hepatic artery"], kind: "vessel", region: "abdomen",
    summary: "Branch supplying segment IV (the quadrate region) of the liver, arising variably from the left or right hepatic artery.",
    supplies: "Segment IV (IVa and IVb) of the liver",
    clinical: "Must be preserved when the left lateral section is used for living-donor transplantation or in an extended right hepatectomy that keeps segment IV, or segment IV becomes ischaemic."
  },
  {
    key: "segmental-hepatic-arteries", title: "Segmental (sectoral) hepatic arteries", match: ["segmental hepatic artery"], kind: "vessel", region: "abdomen",
    summary: "Anterior and posterior branches of the right hepatic artery (and the corresponding left branches) that accompany the portal vein and bile duct branches into each section and segment of the liver.",
    supplies: "Anterior branch: right anterior section (segments V and VIII). Posterior branch: right posterior section (segments VI and VII)",
    clinical: "Their segmental pattern allows selective embolisation or transarterial chemoembolisation (TACE) of liver tumours, which take most of their blood from the hepatic artery, and anatomical (segmental) liver resection."
  },
  {
    key: "cystic-artery", title: "Cystic artery", match: ["cystic artery"], kind: "vessel", region: "abdomen",
    summary: "Artery of the gallbladder and cystic duct, usually arising from the right hepatic artery within the cystohepatic triangle (of Calot).",
    course: "Runs to the neck of the gallbladder and divides into superficial and deep branches; its origin is highly variable (e.g. from the left hepatic, common hepatic or gastroduodenal artery, or double)",
    supplies: "Gallbladder and cystic duct (the gallbladder also receives small vessels from the liver bed)",
    clinical: "Identified, clipped and divided at cholecystectomy; misidentification risks injury to the right hepatic artery. Its relative 'end-artery' supply explains gangrene in severe acute cholecystitis."
  },
  {
    key: "cystic-veins", title: "Cystic veins", match: ["cystic vein"], kind: "vessel", region: "abdomen",
    summary: "Small veins of the gallbladder.",
    drains: "Veins from the neck and cystic duct enter the liver directly or via the hepatic portal vein; most veins of the fundus and body pass directly into the liver substance through the gallbladder bed",
    clinical: "Direct venous drainage into the liver bed explains early spread of gallbladder cancer into adjacent liver segments (IVb and V)."
  },
  {
    key: "colic-arteries", title: "Right and left colic arteries", match: ["colic artery"], kind: "vessel", region: "abdomen",
    summary: "The right colic artery (from the SMA, sometimes absent or from the ileocolic) supplies the ascending colon; the left colic artery (the first branch of the IMA) supplies the distal transverse and descending colon.",
    course: "Run retroperitoneally toward the colon and divide into ascending and descending branches that join the marginal artery",
    supplies: "Right colic: ascending colon and hepatic flexure. Left colic: distal transverse colon, splenic flexure and descending colon",
    clinical: "Ligated at their origins in oncological right and left hemicolectomy to remove the draining lymph nodes, which follow the arteries."
  },
  {
    key: "colic-veins", title: "Right and left colic veins", match: ["colic vein"], kind: "vessel", region: "abdomen",
    summary: "Veins accompanying the colic arteries.",
    drains: "Right colic vein: ascending colon into the superior mesenteric vein (often via the gastrocolic trunk). Left colic vein: descending colon into the inferior mesenteric vein",
    clinical: "Part of the portal system: colorectal cancer spreads by this venous route to the liver, the commonest site of its metastases."
  },
  {
    key: "ileocolic-artery", title: "Ileocolic artery", match: ["ileocolic artery"], kind: "vessel", region: "abdomen",
    summary: "Last (terminal) branch from the right side of the superior mesenteric artery.",
    course: "Runs down and to the right in the root of the mesentery to the ileocaecal junction, dividing into ascending (colic), anterior and posterior caecal, ileal and appendicular branches",
    supplies: "Terminal ileum, caecum, appendix (via the appendicular artery in the mesoappendix) and the start of the ascending colon",
    clinical: "The appendicular artery is an end artery, so an obstructed, inflamed appendix readily becomes gangrenous and perforates. The ileocolic pedicle is ligated at its origin in a right hemicolectomy for cancer."
  },
  {
    key: "ileocolic-vein", title: "Ileocolic vein", match: ["ileocolic vein"], kind: "vessel", region: "abdomen",
    summary: "Vein accompanying the ileocolic artery, draining into the superior mesenteric vein.",
    drains: "Terminal ileum, caecum, appendix and proximal ascending colon",
    clinical: "Septic thrombophlebitis of the portal system (pylephlebitis) after appendicitis spreads along it to the portal vein and can cause liver abscesses."
  },
  {
    key: "middle-colic-artery", title: "Middle colic artery", match: ["middle colic artery"], kind: "vessel", region: "abdomen",
    summary: "Branch of the superior mesenteric artery arising at the lower border of the pancreas and entering the transverse mesocolon.",
    course: "Runs in the transverse mesocolon and divides into right and left branches joining the marginal artery",
    supplies: "Transverse colon (mainly its right two-thirds)",
    clinical: "At risk in gastric, pancreatic and colonic surgery that involves the transverse mesocolon; its left branch forms one side of the splenic flexure watershed."
  },
  {
    key: "middle-colic-vein", title: "Middle colic vein", match: ["middle colic vein"], kind: "vessel", region: "abdomen",
    summary: "Vein of the transverse colon running in the transverse mesocolon.",
    drains: "Transverse colon, into the superior mesenteric vein (often through the gastrocolic trunk of Henle)",
    clinical: "The gastrocolic trunk is easily torn during mobilisation of the hepatic flexure, causing troublesome bleeding."
  },
  {
    key: "marginal-artery-drummond", title: "Marginal artery (of Drummond)", match: ["marginal artery of drummond"], kind: "vessel", region: "abdomen",
    summary: "Continuous arterial arcade running along the mesenteric border of the colon, formed by anastomosing branches of the ileocolic, right, middle and left colic and sigmoid arteries.",
    course: "From the ileocaecal junction to the rectosigmoid junction; the vasa recta to the colon wall arise from it",
    supplies: "The whole colon, linking the SMA and IMA territories",
    clinical: "It is weakest at the splenic flexure (Griffiths' point), a classic site of ischaemic colitis. After ligation of the IMA (e.g. during aortic aneurysm repair or rectal cancer surgery) the left colon survives on flow through the marginal artery from the middle colic. The arc of Riolan is a separate, more central SMA–IMA collateral."
  },
  {
    key: "sigmoid-arteries", title: "Sigmoid arteries", match: ["sigmoid artery"], kind: "vessel", region: "pelvis",
    summary: "Two to four branches of the inferior mesenteric artery running in the sigmoid mesocolon.",
    supplies: "Lower descending colon and sigmoid colon; they anastomose with the left colic artery above and, less freely, with the superior rectal artery below",
    clinical: "Ligated in sigmoid colectomy; the left ureter and gonadal vessels lie behind them under the root of the mesocolon."
  },
  {
    key: "sigmoid-veins", title: "Sigmoid veins", match: ["sigmoid vein"], kind: "vessel", region: "pelvis",
    summary: "Veins of the sigmoid colon in the sigmoid mesocolon.",
    drains: "Sigmoid colon, into the inferior mesenteric vein (portal system)",
    clinical: "Route of portal (liver) spread of sigmoid carcinoma."
  },
  {
    key: "superior-rectal-artery", title: "Superior rectal artery", match: ["superior rectal artery"], kind: "vessel", region: "pelvis",
    summary: "Continuation of the inferior mesenteric artery after its last sigmoid branch.",
    course: "Crosses the left common iliac vessels into the root of the sigmoid mesocolon and descends behind the rectum, dividing at about S3 into right and left branches",
    supplies: "Rectum and the anal canal above the pectinate line",
    clinical: "Ligated high in anterior resection for rectal cancer because the draining lymph nodes follow it (mesorectal excision). Its branches feed the internal haemorrhoidal cushions."
  },
  {
    key: "rectal-veins", title: "Rectal veins (superior, middle, inferior)", match: ["rectal vein"], kind: "vessel", region: "pelvis",
    summary: "Veins draining the rectal venous plexus: the superior rectal vein to the portal system and the middle and inferior rectal veins to the systemic (caval) system.",
    drains: "Superior rectal vein: rectum and upper anal canal, into the inferior mesenteric vein. Middle rectal vein: lower rectum, into the internal iliac vein. Inferior rectal vein: anal canal below the pectinate line, into the internal pudendal vein",
    clinical: "The rectal plexus is a portosystemic anastomosis (rectal varices in portal hypertension). Internal haemorrhoids are prolapsed vascular cushions of the internal plexus and are not primarily caused by portal hypertension; they are common in pregnancy. Upper rectal cancer metastasises to the liver (portal), lower rectal cancer may also reach the lungs (systemic)."
  },
  {
    key: "inferior-mesenteric-vein", title: "Inferior mesenteric vein", match: ["inferior mesenteric vein"], kind: "vessel", region: "abdomen",
    summary: "Portal tributary beginning as the superior rectal vein and draining the hindgut.",
    course: "Ascends retroperitoneally on psoas, lateral to the inferior mesenteric artery and to the left of the duodenojejunal flexure, and usually joins the splenic vein behind the body of the pancreas (sometimes the superior mesenteric vein or their confluence)",
    drains: "Rectum, sigmoid and descending colon and the splenic flexure",
    clinical: "A landmark at the duodenojejunal flexure: it lies in the free edge of the fold bounding the left paraduodenal fossa (site of left paraduodenal hernia). Divided high at the lower border of the pancreas to mobilise the colon in left-sided resections."
  },
  {
    key: "inferior-pancreaticoduodenal-vein", title: "Inferior pancreaticoduodenal vein(s)", match: ["pancreaticoduodenal vein"], kind: "vessel", region: "abdomen",
    summary: "Veins accompanying the inferior pancreaticoduodenal arteries.",
    drains: "Lower head of the pancreas, uncinate process and the third and fourth parts of the duodenum, into the superior mesenteric vein (or the first jejunal vein)",
    clinical: "Short, fragile tributaries that must be ligated individually when the uncinate process is freed from the superior mesenteric vein in a Whipple procedure."
  },
  {
    key: "median-sacral-vein", title: "Median sacral vein", match: ["median sacral vein"], kind: "vessel", region: "pelvis",
    summary: "Midline vein running up the front of the sacrum with the median sacral artery.",
    course: "Ascends on the anterior sacrum and usually ends in the left common iliac vein (or the confluence of the common iliac veins); communicates with the presacral venous plexus",
    drains: "Anterior sacrum and the presacral venous plexus",
    clinical: "The presacral venous plexus can bleed torrentially and is hard to control when the rectum is mobilised or when mesh is fixed to the sacral promontory in sacrocolpopexy for vault prolapse."
  },
  {
    key: "internal-pudendal-vein", title: "Internal pudendal vein", match: ["internal pudendal vein"], kind: "vessel", region: "pelvis",
    summary: "Vein(s) accompanying the internal pudendal artery and pudendal nerve.",
    course: "From the perineum through the pudendal (Alcock's) canal on the lateral wall of the ischio-anal fossa, around the ischial spine through the lesser and then greater sciatic foramina (below piriformis) to the internal iliac vein",
    drains: "Perineum, including the vulva, the lower anal canal (inferior rectal veins) and the urogenital triangle",
    clinical: "Lies with the pudendal nerve at the ischial spine, the landmark for a transvaginal pudendal nerve block in labour; a needle here can enter the vessels, so aspiration is checked before injecting."
  },
  {
    key: "uterine-artery", title: "Uterine artery", match: ["uterine artery"], kind: "vessel", region: "pelvis",
    summary: "Branch of the anterior division of the internal iliac artery supplying the uterus; it enlarges greatly in pregnancy.",
    course: "Runs medially on levator ani in the base of the broad ligament (along the cardinal ligament) and crosses ABOVE and in front of the ureter about 2 cm lateral to the cervix, near the level of the internal os and lateral fornix; then ascends tortuously along the side of the uterus between the layers of the broad ligament to anastomose with the ovarian artery near the cornua. A vaginal branch descends to the cervix and vagina",
    supplies: "Uterus, medial part of the uterine tube, cervix and upper vagina; ligaments of the uterus",
    clinical: "At hysterectomy the ureter is at risk when the uterine artery is clamped beside the cervix (it can be clamped, cut or ligated with the artery). Uterine artery embolisation treats fibroids and postpartum haemorrhage; bilateral ligation is a surgical option for PPH. Uterine artery Doppler in pregnancy screens for pre-eclampsia and placental insufficiency.",
    mnemonic: "'Water under the bridge': the ureter (water) passes under the uterine artery (bridge)."
  },
  {
    key: "uterine-vein", title: "Uterine veins", match: ["uterine vein"], kind: "vessel", region: "pelvis",
    summary: "Veins draining the uterine venous plexus, which lies on each side of the uterus within the broad ligament.",
    course: "The plexus communicates with the vaginal and ovarian (pampiniform) plexuses and with the vesical and rectal plexuses; the uterine veins accompany the uterine artery across the ureter (some pass behind it) to the internal iliac vein",
    drains: "Uterus, cervix and upper vagina",
    clinical: "The plexus enlarges hugely in pregnancy and is a source of bleeding at caesarean section and hysterectomy. Septic pelvic thrombophlebitis is a rare postpartum cause of persistent fever. Pelvic venous congestion involves the ovarian and uterine plexuses."
  },
  {
    key: "ophthalmic-artery", title: "Ophthalmic artery", match: ["ophthalmic artery", "opthalmic artery"], kind: "vessel", region: "head & neck",
    summary: "First major branch of the internal carotid artery, arising as it leaves the cavernous sinus, and the main artery of the orbit.",
    course: "Enters the orbit through the optic canal below and lateral to the optic nerve, then crosses over the nerve medially to run along the medial orbital wall",
    supplies: "Eyeball (central retinal and ciliary arteries), extra-ocular muscles, lacrimal gland, eyelids, ethmoid air cells and nasal cavity, forehead skin (supraorbital and supratrochlear) and the dorsum of the nose",
    clinical: "Emboli from the internal carotid artery cause transient monocular blindness (amaurosis fugax), a warning of stroke. Its terminal branches anastomose with branches of the external carotid (facial/angular, superficial temporal), a collateral pathway when the internal carotid is occluded."
  },
  {
    key: "central-retinal-artery", title: "Central retinal artery", match: ["central retinal artery"], kind: "vessel", region: "head & neck",
    summary: "Branch of the ophthalmic artery that pierces the dural sheath and runs within the optic nerve to the optic disc, where it divides into superior and inferior, nasal and temporal retinal branches.",
    supplies: "Inner layers of the retina (the outer layers, including the photoreceptors, are supplied by the choroid)",
    clinical: "An end artery: occlusion (embolus, giant cell arteritis) causes sudden painless monocular loss of vision with a pale retina and a cherry-red spot at the fovea, which is still supplied by the choroid. A cilioretinal artery, if present, can spare central vision.",
    facts: ["Its branches are the only arteries in the body that can be inspected directly, through the ophthalmoscope."]
  },
  {
    key: "central-retinal-vein", title: "Central retinal vein", match: ["central retinal vein"], kind: "vessel", region: "head & neck",
    summary: "Vein formed at the optic disc from the retinal veins; it leaves the eye within the optic nerve beside the artery.",
    course: "Exits the optic nerve and drains into the superior ophthalmic vein or directly into the cavernous sinus",
    drains: "The retina",
    clinical: "Central retinal vein occlusion causes painless visual loss with widespread retinal haemorrhages and swollen disc ('stormy sunset' fundus). Raised intracranial pressure transmitted along the optic nerve sheath compresses it, producing papilloedema; loss of spontaneous venous pulsation is an early sign."
  },
  {
    key: "posterior-ciliary-arteries", title: "Posterior ciliary arteries (long and short)", match: ["posterior ciliary artery"], kind: "vessel", region: "head & neck",
    summary: "Branches of the ophthalmic artery that pierce the sclera around the optic nerve: numerous short posterior ciliary arteries and two long posterior ciliary arteries.",
    course: "Short arteries enter around the optic nerve to the choroid; the two long arteries run forward between the sclera and choroid in the horizontal meridian to the ciliary body, where they form the major arterial circle of the iris with the anterior ciliary arteries",
    supplies: "Short: choroid (and through it the outer retina) and the optic nerve head. Long: ciliary body and iris",
    clinical: "Occlusion of the short posterior ciliary arteries causes anterior ischaemic optic neuropathy (sudden painless visual loss with a swollen disc); giant cell arteritis is the cause that must not be missed (raised ESR/CRP, jaw claudication, urgent steroids)."
  },
  {
    key: "ophthalmic-veins", title: "Superior and inferior ophthalmic veins", match: ["ophthalmic vein"], kind: "vessel", region: "head & neck",
    summary: "Valveless veins draining the orbit: the superior ophthalmic vein to the cavernous sinus and the inferior ophthalmic vein to the cavernous sinus and pterygoid plexus.",
    course: "Superior ophthalmic vein begins at the medial angle of the eye by joining the angular (facial) vein and passes through the superior orbital fissure; the inferior begins on the orbital floor and joins the superior vein or the cavernous sinus, communicating through the inferior orbital fissure with the pterygoid plexus",
    drains: "Orbit and eyeball (including the vortex and central retinal veins), and communicate with veins of the face",
    clinical: "Infection from the 'danger triangle' of the face can spread through these valveless veins to the cavernous sinus (cavernous sinus thrombosis: proptosis, chemosis, ophthalmoplegia, often CN VI first). A carotid–cavernous fistula arterialises the superior ophthalmic vein, giving pulsatile proptosis, chemosis and a bruit."
  },
];

// ───────────────────────────── LARYNX, TRACHEA, BRONCHI ─────────────────────────────
const AIRWAY = [
  {
    key: "arytenoid-cartilage", title: "Arytenoid cartilages", match: ["arytenoid cartilage"], kind: "other", region: "head & neck",
    summary: "Paired pyramidal cartilages sitting on the upper border of the cricoid lamina, to which the vocal folds and most intrinsic laryngeal muscles attach.",
    features: ["Apex carries the corniculate cartilage", "Vocal process (anterior) gives attachment to the vocal ligament", "Muscular process (lateral) gives attachment to the posterior and lateral crico-arytenoid muscles", "Synovial crico-arytenoid joints allow rotation and gliding that open and close the glottis"],
    function: "Position and tension the vocal folds: abduction for breathing, adduction for phonation and airway protection",
    clinical: "Posterior crico-arytenoid is the only muscle that abducts the vocal folds; bilateral recurrent laryngeal nerve palsy leaves the folds near the midline with stridor. The arytenoid can be dislocated by intubation, and rheumatoid arthritis of the crico-arytenoid joint causes hoarseness or stridor."
  },
  {
    key: "corniculate-cartilage", title: "Corniculate cartilages", match: ["corniculate cartilage"], kind: "other", region: "head & neck",
    summary: "Small nodules of elastic cartilage on the apices of the arytenoid cartilages, within the posterior part of the aryepiglottic folds.",
    function: "Support the aryepiglottic folds at the laryngeal inlet",
    clinical: "They raise the corniculate tubercles, which are seen at laryngoscopy as landmarks at the back of the laryngeal inlet."
  },
  {
    key: "cricoid-cartilage", title: "Cricoid cartilage", match: ["cricoid cartilage"], kind: "other", region: "head & neck",
    summary: "Signet-ring-shaped cartilage forming the only complete cartilaginous ring of the airway, with a narrow anterior arch and a tall posterior lamina; at the level of C6.",
    features: ["Articulates with the inferior horns of the thyroid cartilage (cricothyroid joints) and with the arytenoids", "Joined to the thyroid cartilage by the median cricothyroid ligament (membrane) and to the first tracheal ring by the cricotracheal ligament", "C6 level: the larynx becomes the trachea and the pharynx the oesophagus"],
    function: "Supports the larynx and keeps the subglottic airway open",
    clinical: "Emergency front-of-neck airway (cricothyroidotomy) is made through the cricothyroid membrane just above the cricoid arch. Cricoid pressure was used to compress the oesophagus during rapid-sequence induction. The subglottic ring is a narrow, rigid region where swelling (croup, post-intubation stenosis) critically narrows a child's airway."
  },
  {
    key: "epiglottic-cartilage", title: "Epiglottic cartilage (epiglottis)", match: ["epiglottic cartilage", "epiglottis"], kind: "other", region: "head & neck",
    summary: "Leaf-shaped plate of elastic cartilage behind the root of the tongue and hyoid bone, forming the anterior wall of the laryngeal inlet.",
    features: ["Its stalk is attached to the back of the thyroid angle by the thyro-epiglottic ligament", "The valleculae lie between it and the tongue base"],
    function: "Folds back over the laryngeal inlet during swallowing as the larynx is pulled up and forward, diverting food into the piriform recesses",
    clinical: "Acute epiglottitis (classically Haemophilus influenzae type b, now mostly adults) causes sore throat, drooling, muffled voice and stridor ('thumb sign' on lateral X-ray); do not examine the throat in a child, secure the airway. The tip of a curved laryngoscope blade sits in the vallecula to lift the epiglottis."
  },
  {
    key: "tracheal-cartilage", title: "Tracheal cartilages", match: ["tracheal cartilage"], kind: "other", region: "thorax",
    summary: "16–20 C-shaped rings of hyaline cartilage, open posteriorly, that keep the trachea patent; the gap is bridged by the trachealis muscle against the oesophagus.",
    function: "Prevent collapse of the trachea while allowing flexibility and expansion of the oesophagus behind it",
    clinical: "A tracheostomy is placed through the 2nd–4th rings, below the cricoid and usually through or below the thyroid isthmus (which lies over rings 2–4). Weak cartilages (tracheomalacia) collapse in expiration. They commonly calcify with age."
  },
  {
    key: "carina", title: "Carina of trachea", match: ["carina"], kind: "other", region: "thorax",
    summary: "Keel-like ridge of cartilage at the bifurcation of the trachea into the main bronchi, at about the level of the sternal angle (T4/T5) in the supine cadaver, lower in life when upright and in inspiration.",
    features: ["Its mucosa is one of the most sensitive areas of the airway (cough reflex)"],
    clinical: "Widening or distortion of the carina at bronchoscopy suggests enlarged subcarinal (inferior tracheobronchial) lymph nodes, e.g. from bronchogenic carcinoma; an enlarged left atrium also splays the carinal angle. The tip of an endotracheal tube should lie a few centimetres above it."
  },
  {
    key: "main-bronchus", title: "Main (primary) bronchi", match: ["main bronchus", "principal bronchus"], kind: "organ", region: "thorax",
    summary: "The right and left main bronchi arising at the carina and passing to the hila of the lungs.",
    features: ["Right main bronchus: wider, shorter (about 2.5 cm) and more vertical; gives the right superior lobar bronchus before entering the hilum", "Left main bronchus: longer (about 5 cm), passes under the arch of the aorta and in front of the oesophagus and descending aorta", "Supported by cartilaginous rings like the trachea"],
    function: "Conduct air to each lung",
    clinical: "Inhaled foreign bodies and aspirated material enter the right main bronchus more often because it is wider and more in line with the trachea. An endotracheal tube passed too far usually enters the right main bronchus, collapsing the left lung. Double-lumen tubes isolate one lung for thoracic surgery."
  },
  {
    key: "lobar-bronchi", title: "Lobar (secondary) bronchi", match: ["lobar bronchus", "lobar bronchi"], kind: "organ", region: "thorax",
    summary: "Branches of the main bronchi, one for each lobe: superior, middle and inferior on the right; superior and inferior on the left.",
    features: ["The right superior lobar bronchus arises before the main bronchus enters the hilum and lies above the pulmonary artery (the only 'eparterial' bronchus)", "The left superior lobar bronchus also supplies the lingula", "Each divides into segmental (tertiary) bronchi"],
    function: "Conduct air to each lobe of the lung",
    clinical: "The long, narrow right middle lobar bronchus surrounded by lymph nodes is easily compressed (middle lobe syndrome, recurrent collapse/infection). Lobectomy removes a lobe with its lobar bronchus and vessels."
  },
  {
    key: "bronchial-cartilage", title: "Bronchial cartilage", match: ["cartilage of main bronchus", "cartilage of lobar bronchus", "cartilage of tertiary bronchus", "bronchial cartilage"], kind: "other", region: "thorax",
    summary: "Hyaline cartilage in the bronchial walls: C-shaped rings in the main bronchi, becoming irregular plates around the lobar and segmental bronchi and disappearing in the bronchioles (below about 1 mm diameter).",
    function: "Keeps the larger airways open against changing intrathoracic pressure",
    clinical: "Bronchioles have no cartilage, so their calibre depends on smooth muscle and surrounding lung elastic recoil: bronchospasm in asthma and loss of elastic recoil in emphysema close them. Chronic infection destroys cartilage and muscle in bronchiectasis, leaving permanently dilated airways."
  },
  {
    key: "hilum-of-lung", title: "Hilum of lung (root of lung)", match: ["hilum of lung", "hilum of the lung"], kind: "organ", region: "thorax",
    summary: "Wedge-shaped area on the mediastinal surface of each lung where the structures of the root of the lung enter and leave.",
    features: ["Contents: main or lobar bronchi, pulmonary artery, two pulmonary veins, bronchial vessels, pulmonary plexus nerves, lymphatics and bronchopulmonary (hilar) nodes", "Pulmonary veins are most anterior and inferior; the bronchus is posterior", "Right hilum: the superior lobar (eparterial) bronchus lies above the pulmonary artery. Left hilum: the pulmonary artery is the most superior structure", "The pleural sleeve around the root hangs down as the pulmonary ligament"],
    clinical: "Hilar lymphadenopathy is seen in sarcoidosis (bilateral, symmetrical, often in young women), tuberculosis, lymphoma and lung cancer. The phrenic nerve passes in front of the root and the vagus behind it.",
    mnemonic: "RALS: Right — pulmonary artery Anterior to the bronchus; Left — artery Superior to the bronchus."
  },
];

// Bronchopulmonary segments (with their segmental bronchi). Numbering: right lung S1–S10; left lung has 8–10 (apicoposterior S1+2 and anteromedial basal S7+8 often fused).
const SEGMENTS = [
  {
    key: "seg-apical", title: "Apical bronchopulmonary segment and bronchus (upper lobe, S1)", match: ["apical bronchopulmonary segment", "apical bronchus", "apical segmental bronchus"], kind: "organ", region: "thorax",
    summary: "Uppermost segment of the upper lobe, extending into the cervical pleura above the clavicle; on the left it is usually fused with the posterior segment as the apicoposterior segment (S1+2).",
    features: [SEGMENT_FEATURE],
    clinical: "Reactivation (post-primary) tuberculosis favours the apical and posterior segments of the upper lobe (high oxygen tension). A Pancoast (superior sulcus) tumour at the apex can invade the lower brachial plexus (T1, hand wasting), the sympathetic chain (Horner syndrome) and the subclavian vessels."
  },
  {
    key: "seg-posterior", title: "Posterior bronchopulmonary segment and bronchus (upper lobe, S2)", match: ["posterior bronchopulmonary segment", "posterior bronchus", "posterior segmental bronchus"], kind: "organ", region: "thorax",
    summary: "Posterior segment of the upper lobe lying against the upper posterior chest wall; on the left fused with the apical segment (apicoposterior).",
    features: [SEGMENT_FEATURE],
    clinical: "With the superior segment of the lower lobe it receives aspirated material in a person lying supine, so these are classic sites of aspiration pneumonia and lung abscess (especially on the right). A favoured site of reactivation tuberculosis."
  },
  {
    key: "seg-anterior", title: "Anterior bronchopulmonary segment and bronchus (upper lobe, S3)", match: ["anterior bronchopulmonary segment", "anterior bronchus", "anterior segmental bronchus"], kind: "organ", region: "thorax",
    summary: "Anterior segment of the upper lobe, lying behind the upper anterior chest wall below the clavicle.",
    features: [SEGMENT_FEATURE],
    clinical: "Auscultated over the front of the upper chest; drained by postural drainage with the patient supine. Usually spared in reactivation tuberculosis, unlike S1 and S2."
  },
  {
    key: "seg-lateral-middle", title: "Lateral bronchopulmonary segment and bronchus (right middle lobe, S4)", match: ["lateral bronchopulmonary segment", "lateral bronchus", "lateral segmental bronchus"], kind: "organ", region: "thorax",
    summary: "Lateral segment of the right middle lobe, between the horizontal and oblique fissures; its counterpart on the left is the superior lingular segment.",
    features: [SEGMENT_FEATURE],
    clinical: "Middle lobe consolidation obscures the right heart border on a frontal chest X-ray (silhouette sign). The middle lobe is best heard over the right anterior chest below the 4th rib (horizontal fissure)."
  },
  {
    key: "seg-medial-middle", title: "Medial bronchopulmonary segment and bronchus (right middle lobe, S5)", match: ["medial bronchopulmonary segment", "medial bronchus", "medial segmental bronchus"], kind: "organ", region: "thorax",
    summary: "Medial segment of the right middle lobe, lying against the right border of the heart; its counterpart on the left is the inferior lingular segment.",
    features: [SEGMENT_FEATURE],
    clinical: "Consolidation here effaces the right heart border on the chest X-ray. Its bronchus shares the long, node-surrounded middle lobar bronchus (middle lobe syndrome)."
  },
  {
    key: "seg-lingula-superior", title: "Superior lingular segment and bronchus (left upper lobe, S4)", match: ["lingula superior bronchopulmonary segment", "lingula superior bronchus", "superior lingular"], kind: "organ", region: "thorax",
    summary: "Upper segment of the lingula, the tongue-like lower part of the left upper lobe that corresponds to the right middle lobe.",
    features: [SEGMENT_FEATURE, "The lingular bronchus arises from the left superior lobar bronchus"],
    clinical: "Lingular consolidation obscures the left heart border on a frontal chest X-ray. The lingula overlies the heart through the cardiac notch."
  },
  {
    key: "seg-lingula-inferior", title: "Inferior lingular segment and bronchus (left upper lobe, S5)", match: ["lingula inferior bronchopulmonary segment", "lingula inferior bronch", "inferior lingular"], kind: "organ", region: "thorax",
    summary: "Lower segment of the lingula of the left upper lobe, next to the cardiac notch and the apex of the heart.",
    features: [SEGMENT_FEATURE],
    clinical: "Effaces the left heart border when consolidated. A lingulectomy (removal of S4 and S5) is a common sublobar resection for small left-sided tumours."
  },
  {
    key: "seg-superior-lower", title: "Superior bronchopulmonary segment and bronchus (lower lobe, S6)", match: ["superior bronchopulmonary segment", "superior bronchus", "superior segmental bronchus"], kind: "organ", region: "thorax",
    summary: "Uppermost segment of each lower lobe (the 'apex' of the lower lobe), whose bronchus is the first branch from the back of the lower lobar bronchus.",
    features: [SEGMENT_FEATURE, "Projects posteriorly to about the level of the 4th–6th ribs, below the scapular spine"],
    clinical: "Its bronchus points straight backward, so in a supine patient aspirated material runs into it: the superior segment of the right lower lobe is the commonest site of aspiration pneumonia and lung abscess in bedridden patients."
  },
  {
    key: "seg-medial-basal", title: "Medial basal bronchopulmonary segment and bronchus (lower lobe, S7)", match: ["medial basal bronchopulmonary segment", "medial basal bronchus", "medial basal segmental bronchus"], kind: "organ", region: "thorax",
    summary: "Medial (cardiac) basal segment of the lower lobe, lying against the heart and IVC; well defined on the right, usually fused with the anterior basal segment on the left (anteromedial basal, S7+8).",
    features: [SEGMENT_FEATURE],
    clinical: "Lower-lobe consolidation does not efface the heart border (the lower lobes lie behind the heart) but blurs the hemidiaphragm outline."
  },
  {
    key: "seg-anterior-basal", title: "Anterior basal bronchopulmonary segment and bronchus (lower lobe, S8)", match: ["anterior basal bronchopulmonary segment", "anterior basal bronchus", "anterior basal segmental bronchus"], kind: "organ", region: "thorax",
    summary: "Anterior basal segment of the lower lobe, lying on the anterior part of the diaphragm; on the left often combined with the medial basal segment (anteromedial).",
    features: [SEGMENT_FEATURE],
    clinical: "Drained by postural drainage with the patient supine and head-down. Like the other basal segments, a site of aspiration in an upright patient and of basal atelectasis after abdominal surgery."
  },
  {
    key: "seg-lateral-basal", title: "Lateral basal bronchopulmonary segment and bronchus (lower lobe, S9)", match: ["lateral basal bronchopulmonary segment", "lateral basal bronchus", "lateral basal segmental bronchus"], kind: "organ", region: "thorax",
    summary: "Lateral basal segment of the lower lobe, lying against the lateral chest wall and the diaphragm in the costodiaphragmatic recess region.",
    features: [SEGMENT_FEATURE],
    clinical: "Auscultated laterally in the lower chest (mid-axillary line). Consolidation here may produce a pleural effusion that first fills the costodiaphragmatic recess."
  },
  {
    key: "seg-posterior-basal", title: "Posterior basal bronchopulmonary segment and bronchus (lower lobe, S10)", match: ["posterior basal bronchopulmonary segment", "posterior basal bronchus", "posterior basal segmental bronchus"], kind: "organ", region: "thorax",
    summary: "Largest and most dependent basal segment, lying posteriorly on the diaphragm and in the posterior costodiaphragmatic recess.",
    features: [SEGMENT_FEATURE],
    clinical: "In an upright (sitting or standing) person aspirated material falls into the posterior basal segments, especially of the right lower lobe. Best auscultated low on the back; drained with the patient prone and head-down."
  },
];

// ───────────────────────────── MUSCLES: EYE & KNEE ─────────────────────────────
const EYE_MUSCLES = [
  {
    key: "superior-rectus", title: "Superior rectus", match: ["superior rectus extraocular muscle", "superior rectus of eyeball"], kind: "muscle", region: "head & neck",
    summary: "Extra-ocular muscle above the eyeball; because the orbit points laterally, it also adducts and intorts.",
    origin: "Superior part of the common tendinous ring (anulus of Zinn)",
    insertion: "Sclera of the upper eyeball, just behind the corneoscleral junction",
    action: "Elevates, adducts and medially rotates (intorts) the eyeball; a pure elevator when the eye is abducted (the position used to test it)",
    innervation: "Oculomotor nerve (CN III), superior division",
    blood: "Muscular branches of the ophthalmic artery",
    clinical: "Weak in oculomotor palsy. In thyroid eye disease the inferior and medial recti are usually affected first, the superior rectus next; it is closely bound to levator palpebrae superioris, so surgery on it can change the eyelid position.",
    mnemonic: "LR6 SO4 R3: lateral rectus VI, superior oblique IV, the rest III."
  },
  {
    key: "inferior-rectus", title: "Inferior rectus", match: ["inferior rectus extraocular muscle", "inferior rectus of eyeball"], kind: "muscle", region: "head & neck",
    summary: "Extra-ocular muscle below the eyeball.",
    origin: "Inferior part of the common tendinous ring",
    insertion: "Sclera of the lower eyeball, behind the corneoscleral junction",
    action: "Depresses, adducts and laterally rotates (extorts) the eyeball; a pure depressor when the eye is abducted",
    innervation: "Oculomotor nerve (CN III), inferior division",
    blood: "Muscular branches of the ophthalmic artery; infra-orbital artery",
    clinical: "Can be trapped in an orbital floor ('blow-out') fracture, limiting upward gaze with vertical diplopia. The commonest muscle enlarged in thyroid eye disease (Graves' disease, more common in women), restricting elevation.",
    mnemonic: "LR6 SO4 R3."
  },
  {
    key: "medial-rectus", title: "Medial rectus", match: ["medial rectus extraocular muscle", "medial rectus of eyeball"], kind: "muscle", region: "head & neck",
    summary: "Largest and strongest extra-ocular muscle, on the medial side of the eyeball.",
    origin: "Medial part of the common tendinous ring",
    insertion: "Medial sclera, closest of the recti to the corneoscleral junction",
    action: "Adducts the eyeball",
    innervation: "Oculomotor nerve (CN III), inferior division",
    blood: "Muscular branches of the ophthalmic artery",
    clinical: "In internuclear ophthalmoplegia (a lesion of the medial longitudinal fasciculus, often multiple sclerosis in young women) the medial rectus fails to adduct on lateral gaze although it works in convergence. Second most often enlarged muscle in thyroid eye disease.",
    mnemonic: "LR6 SO4 R3."
  },
  {
    key: "lateral-rectus", title: "Lateral rectus", match: ["lateral rectus extraocular muscle", "lateral rectus of eyeball"], kind: "muscle", region: "head & neck",
    summary: "Extra-ocular muscle on the lateral side of the eyeball, the only muscle supplied by the abducent nerve.",
    origin: "Lateral part of the common tendinous ring (spanning the superior orbital fissure)",
    insertion: "Lateral sclera behind the corneoscleral junction",
    action: "Abducts the eyeball",
    innervation: "Abducent nerve (CN VI)",
    blood: "Muscular branches of the ophthalmic artery; lacrimal artery",
    clinical: "Abducent palsy causes a convergent squint with horizontal diplopia worse on looking to the affected side. The abducent nerve's long intracranial course makes it a false localising sign of raised intracranial pressure; it is usually the first nerve affected in cavernous sinus disease.",
    mnemonic: "LR6 SO4 R3."
  },
  {
    key: "superior-oblique", title: "Superior oblique", match: ["superior oblique extraocular muscle", "superior oblique of eyeball"], kind: "muscle", region: "head & neck",
    summary: "Extra-ocular muscle whose tendon hooks through a fibrocartilaginous pulley (the trochlea) at the superomedial orbital margin before turning back to the eyeball.",
    origin: "Body of the sphenoid, above and medial to the optic canal (outside the common tendinous ring)",
    insertion: "Its tendon passes through the trochlea and inserts into the sclera of the posterosuperolateral quadrant, deep to superior rectus",
    action: "Medially rotates (intorts), depresses and abducts the eyeball; its depressing action is greatest when the eye is adducted (the position used to test it)",
    innervation: "Trochlear nerve (CN IV)",
    blood: "Muscular branches of the ophthalmic artery",
    clinical: "Trochlear palsy causes vertical diplopia worst when looking down and in (reading, going downstairs); the patient tilts the head away from the affected side to compensate.",
    mnemonic: "LR6 SO4 R3."
  },
  {
    key: "inferior-oblique", title: "Inferior oblique", match: ["inferior oblique extraocular muscle", "inferior oblique of eyeball"], kind: "muscle", region: "head & neck",
    summary: "The only extra-ocular muscle arising from the front of the orbit; it passes laterally and backward beneath the eyeball.",
    origin: "Anterior part of the orbital floor (orbital surface of the maxilla), lateral to the nasolacrimal canal",
    insertion: "Sclera of the posteroinferolateral quadrant, deep to lateral rectus",
    action: "Laterally rotates (extorts), elevates and abducts the eyeball; its elevating action is greatest when the eye is adducted (the position used to test it)",
    innervation: "Oculomotor nerve (CN III), inferior division",
    blood: "Muscular branches of the ophthalmic artery; infra-orbital artery",
    clinical: "Inferior oblique overaction is a common cause of 'V-pattern' strabismus in children. Its nerve carries the parasympathetic fibres to the ciliary ganglion, so they travel together.",
    mnemonic: "LR6 SO4 R3."
  },
  {
    key: "levator-palpebrae-superioris", title: "Levator palpebrae superioris", match: ["levator palpebrae superioris"], kind: "muscle", region: "head & neck",
    summary: "Thin triangular muscle of the orbit that raises the upper eyelid; its deep layer contains smooth muscle (superior tarsal muscle).",
    origin: "Lesser wing of the sphenoid, above and in front of the optic canal",
    insertion: "Skin of the upper eyelid and the anterior surface of the superior tarsus (aponeurosis); smooth-muscle part (superior tarsal muscle) to the upper border of the tarsus",
    action: "Elevates the upper eyelid",
    innervation: "Oculomotor nerve (CN III), superior division; superior tarsal muscle by sympathetic fibres (from the superior cervical ganglion)",
    blood: "Muscular branches of the ophthalmic artery",
    clinical: "Complete ptosis in oculomotor palsy; partial ptosis (1–2 mm) in Horner syndrome from loss of the sympathetic superior tarsal muscle. Age-related stretching of the aponeurosis is the commonest cause of acquired ptosis. Fatigable ptosis suggests myasthenia gravis (more common in young women)."
  },
  {
    key: "quadriceps-tendon", title: "Quadriceps tendon", match: ["tendon of quadriceps femoris", "quadriceps tendon"], kind: "other", region: "lower limb",
    summary: "Common tendon of the four parts of quadriceps femoris (rectus femoris and the three vasti) attaching to the base of the patella; it continues beyond the patella as the patellar ligament.",
    function: "Transmits the force of quadriceps to the patella and tibial tuberosity to extend the knee",
    clinical: "Rupture (usually over 40, with steroid use, renal failure or diabetes) leaves a palpable gap above the patella and inability to straight-leg raise; the patella sits low (patella baja). The patella is a sesamoid bone that develops within this tendon."
  },
];

// ───────────────────────────── KNEE: LIGAMENTS, MENISCI, CARTILAGE, FEMORAL CONDYLES ─────────────────────────────
const KNEE = [
  {
    key: "acl", title: "Anterior cruciate ligament (ACL)", match: ["anterior cruciate ligament"], kind: "other", region: "lower limb",
    summary: "Intracapsular but extrasynovial ligament running from the anterior intercondylar area of the tibia posterosuperolaterally to the medial side of the lateral femoral condyle.",
    function: "Prevents anterior displacement of the tibia on the femur (posterior displacement of the femur on the tibia) and limits hyperextension and rotation; taut in extension",
    blood: "Middle genicular artery",
    clinical: "Torn in non-contact pivoting or landing injuries: an audible pop, rapid haemarthrosis and instability. The Lachman test (anterior drawer at 20–30° flexion) is the most sensitive; a Segond fracture (lateral tibial rim avulsion) is a marker. Female athletes rupture the ACL several times more often than males (landing mechanics with more knee valgus, a wider pelvis/Q-angle, a narrower intercondylar notch and hormonal influences). Often injured with the medial collateral ligament and menisci."
  },
  {
    key: "pcl", title: "Posterior cruciate ligament (PCL)", match: ["posterior cruciate ligament"], kind: "other", region: "lower limb",
    summary: "Stronger cruciate ligament running from the posterior intercondylar area of the tibia anteromedially to the lateral side of the medial femoral condyle.",
    function: "Prevents posterior displacement of the tibia on the femur (anterior displacement of the femur on the tibia), the main stabiliser of the flexed weight-bearing knee (e.g. walking downhill); taut in flexion",
    blood: "Middle genicular artery",
    clinical: "Torn by a blow to the front of the upper tibia with the knee flexed (dashboard injury) or a fall on the flexed knee. Posterior drawer test and 'sag' sign. Often managed conservatively."
  },
  {
    key: "anterolateral-ligament", title: "Anterolateral ligament of knee", match: ["anterolateral ligament of knee", "anterolateral ligament"], kind: "other", region: "lower limb",
    summary: "Capsular ligament on the anterolateral knee running from the region of the lateral femoral epicondyle (near the origin of the fibular collateral ligament) to the anterolateral tibia between Gerdy's tubercle and the head of the fibula.",
    function: "Helps control internal rotation of the tibia, particularly in flexion",
    clinical: "Re-described as a distinct structure in 2013 and still debated; the Segond fracture that accompanies ACL tears is thought to be an avulsion at its tibial attachment. Some surgeons add a lateral extra-articular reconstruction to ACL reconstruction for high-grade rotatory instability."
  },
  {
    key: "fibular-collateral-ligament", title: "Fibular (lateral) collateral ligament", match: ["fibular collateral ligament", "lateral collateral ligament of knee"], kind: "other", region: "lower limb",
    summary: "Strong cord-like extracapsular ligament from the lateral epicondyle of the femur to the lateral surface of the head of the fibula.",
    features: ["Separated from the lateral meniscus by the popliteus tendon, so it is not attached to the meniscus", "Splits the tendon of biceps femoris at its insertion"],
    function: "Resists varus (adduction) stress on the knee; taut in extension",
    clinical: "Injured by a varus force, often with the posterolateral corner and cruciate ligaments; test with varus stress at 0° and 30°. The common fibular nerve winding round the fibular neck may be damaged at the same time (foot drop)."
  },
  {
    key: "tibial-collateral-ligament", title: "Tibial (medial) collateral ligament", match: ["tibial collateral ligament", "medial collateral ligament of knee"], kind: "other", region: "lower limb",
    summary: "Flat, broad band from the medial epicondyle of the femur to the medial condyle and upper medial shaft of the tibia.",
    features: ["Its deep fibres are firmly attached to the joint capsule and the medial meniscus", "Lies deep to the pes anserinus tendons (sartorius, gracilis, semitendinosus)"],
    function: "Resists valgus (abduction) stress on the knee; taut in extension",
    clinical: "The most commonly injured knee ligament: a valgus blow to the lateral knee tears it, and because it is attached to the medial meniscus the meniscus may tear too ('unhappy triad' with the ACL). Test with valgus stress at 0° and 30°. Calcification at its femoral attachment after injury is the Pellegrini–Stieda lesion."
  },
  {
    key: "patellar-ligament", title: "Patellar ligament (patellar tendon)", match: ["patellar ligament", "patellar tendon"], kind: "other", region: "lower limb",
    summary: "Strong, flat continuation of the quadriceps tendon from the apex of the patella to the tibial tuberosity.",
    function: "Transmits the pull of quadriceps to the tibia to extend the knee",
    clinical: "Tapping it elicits the patellar (knee-jerk) reflex: femoral nerve, L3–L4. Osgood–Schlatter disease is traction apophysitis at its tibial insertion in adolescents; jumper's knee is tendinopathy at the patellar end. Rupture causes a high-riding patella (patella alta). Its central third with bone blocks is a classic ACL graft."
  },
  {
    key: "menisci", title: "Menisci of the knee", match: ["meniscus", "menisci"], kind: "joint-structure", region: "lower limb",
    summary: "Two crescent-shaped fibrocartilage discs on the tibial plateaus, thick at their outer margins and thin at their free inner edges, deepening the articular surfaces for the femoral condyles.",
    features: ["Medial meniscus: C-shaped, broader posteriorly, firmly attached to the tibial collateral ligament and capsule, so less mobile", "Lateral meniscus: nearly circular, smaller and more mobile; attached to the popliteus tendon and to the femur by meniscofemoral ligaments, not to the fibular collateral ligament", "Only the peripheral (outer) third has a blood supply (genicular arteries)"],
    function: "Increase congruity, spread load and absorb shock, contribute to stability and lubrication",
    clinical: "Torn by twisting on a flexed, weight-bearing knee: joint-line pain and tenderness, effusion over hours, and locking from a displaced bucket-handle fragment (McMurray's test). The medial meniscus tears more often because it is less mobile. Only tears in the vascular periphery are repaired; removing meniscus predisposes to osteoarthritis."
  },
  {
    key: "articular-cartilage-knee", title: "Articular cartilage of the knee", match: ["articular cartilage of knee"], kind: "joint-structure", region: "lower limb",
    summary: "Hyaline cartilage covering the femoral condyles and trochlea, the tibial plateaus and the back of the patella (the thickest articular cartilage in the body).",
    function: "Provides a nearly frictionless, load-spreading bearing surface",
    clinical: "Avascular and aneural, so it heals poorly. Osteoarthritis (more common in women) thins it, usually first in the medial tibiofemoral compartment, seen as joint-space narrowing with osteophytes. Chondromalacia patellae causes anterior knee pain in young people. Osteochondritis dissecans classically affects the lateral part of the medial femoral condyle."
  },
  {
    key: "femoral-condyles", title: "Femoral condyles", match: ["condyle of femur"], kind: "bone", region: "lower limb",
    summary: "The two large rounded masses at the distal femur that articulate with the tibial plateaus and, in front, with the patella.",
    features: ["Medial condyle larger and projects further distally, so the knee joint line is horizontal despite the oblique femoral shaft; adductor tubercle above it", "Lateral condyle more prominent anteriorly, buttressing the patella against lateral dislocation", "Separated posteriorly by the intercondylar fossa and joined anteriorly by the patellar surface (trochlea)", "Epicondyles give attachment to the collateral ligaments"],
    function: "Weight-bearing articular surfaces of the knee; their curvature allows rolling and gliding and the terminal 'locking' rotation in full extension",
    clinical: "In a supracondylar fracture gastrocnemius pulls the distal fragment backward, endangering the popliteal artery. Osteochondritis dissecans and spontaneous osteonecrosis affect the medial condyle. A bone bruise of the lateral condyle with the posterolateral tibial plateau is typical of ACL rupture."
  },
  {
    key: "intercondylar-fossa", title: "Intercondylar fossa (notch) of femur", match: ["intercondylar fossa", "intercondylar notch"], kind: "bone", region: "lower limb",
    summary: "Deep notch between the femoral condyles posteriorly and inferiorly, housing the cruciate ligaments.",
    features: ["The ACL attaches to the medial surface of the lateral condyle (back of the notch)", "The PCL attaches to the lateral surface of the medial condyle (front of the notch)"],
    clinical: "A narrow notch is associated with ACL injury (one explanation offered for the higher rate in women). Surgeons widen it (notchplasty) during ACL reconstruction to prevent graft impingement. Seen on the tunnel (notch) X-ray view, for example for loose bodies."
  },
  {
    key: "trochlear-groove", title: "Trochlear groove (patellar surface of femur)", match: ["trochlear groove"], kind: "bone", region: "lower limb",
    summary: "Anterior articular groove of the distal femur in which the patella glides; its lateral facet is larger and higher than the medial.",
    function: "Guides the patella during flexion and extension; the high lateral wall resists lateral displacement",
    clinical: "A shallow groove (trochlear dysplasia) predisposes to recurrent lateral patellar dislocation, commonest in adolescent girls and young women, in whom a wider pelvis and larger Q-angle also pull the patella laterally. Patellofemoral pain is the commonest cause of anterior knee pain in young women."
  },
];

// ───────────────────────────── SKELETON: VERTEBRAE, BONY PELVIS, SKIN ─────────────────────────────
const SKELETON = [
  alias("atlas", "atlas-f", ["cervical vertebra 1"]),
  alias("axis", "axis-f", ["cervical vertebra 2"]),
  alias("vertebra-prominens", "vertebra-prominens-f", ["cervical vertebra 7"]),
  {
    key: "lumbar-vertebra-6", title: "Sixth lumbar-type vertebra (lumbosacral transitional vertebra)", match: ["lumbar vertebra 6"], kind: "bone", region: "back",
    summary: "This model has six lumbar-type vertebrae: a normal variant in which the lumbosacral junction is 'transitional', usually from lumbarisation of the first sacral segment (or an extra presacral segment).",
    features: ["Lumbosacral transitional vertebrae are common (reported prevalence varies widely with definition, roughly from a few percent to over a quarter of people)", "The transitional segment may have enlarged transverse processes that articulate or fuse with the sacrum or ilium"],
    function: "Behaves as an extra mobile lumbar segment above the sacrum",
    clinical: "A frequent cause of miscounted spinal levels, which can lead to wrong-level injections or surgery: levels should be counted from C2 or by identifying the rib-bearing T12. An enlarged transverse process articulating with the sacrum can cause low back pain (Bertolotti syndrome), and the disc above a transitional segment tends to degenerate early. It also changes the landmarks used for neuraxial (spinal/epidural) anaesthesia in labour."
  },
  {
    key: "ilium", title: "Ilium", match: ["ilium"], kind: "bone", region: "pelvis",
    summary: "Largest, fan-shaped upper part of the hip bone, forming the upper two-fifths of the acetabulum. This model shows its outer compact (cortical) shell and inner spongy (cancellous) bone separately.",
    features: ["Ala (wing) with the iliac crest, tubercle of the crest, ASIS, AIIS, PSIS and PIIS", "Internal iliac fossa (iliacus); gluteal surface with gluteal lines externally", "Auricular surface for the sacroiliac joint; arcuate line forming part of the pelvic brim", "Greater sciatic notch below the PIIS", FEMALE_PELVIS],
    function: "Transmits body weight from the sacrum to the acetabulum and gives attachment to the abdominal, back, gluteal and hip flexor muscles",
    clinical: "The posterior iliac crest is the usual site for bone marrow aspiration/biopsy and for cancellous bone graft (red marrow fills the spongy bone). Adolescents avulse the ASIS (sartorius) or AIIS (rectus femoris). The line joining the highest points of the iliac crests (supracristal plane) crosses the L4 spinous process, the landmark for lumbar puncture and epidurals. A wide greater sciatic notch (close to 90°) is one of the most reliable signs of a female pelvis in forensic sexing."
  },
  {
    key: "ischium", title: "Ischium", match: ["ischium"], kind: "bone", region: "pelvis",
    summary: "Posteroinferior part of the hip bone, consisting of a body (forming the posteroinferior two-fifths of the acetabulum) and a ramus that joins the inferior pubic ramus. This model shows its compact and spongy bone separately.",
    features: ["Ischial spine: attachment of the sacrospinous ligament; the pudendal nerve and internal pudendal vessels cross behind it", "Ischial tuberosity: hamstrings, sacrotuberous ligament; bears weight in sitting", "Ischiopubic ramus forms part of the pubic arch and the obturator foramen", FEMALE_PELVIS],
    clinical: "The distance between the ischial spines (interspinous diameter, about 10 cm) is usually the narrowest part of the female pelvic canal; the station of the fetal head is measured in centimetres above or below the spines (station 0 = level of the spines). The spine is palpated vaginally to guide a pudendal nerve block. Hamstring avulsion from the tuberosity occurs in sprinters; in the female pelvis the tuberosities are further apart and everted, widening the outlet."
  },
  {
    key: "pubis", title: "Pubis (pubic bone)", match: ["pubis"], kind: "bone", region: "pelvis",
    summary: "Anteromedial part of the hip bone, with a body and superior and inferior rami, forming the anterior one-fifth of the acetabulum and meeting its partner at the pubic symphysis. This model shows its compact and spongy bone separately.",
    features: ["Pubic crest and pubic tubercle (attachment of the inguinal ligament)", "Pecten pubis (pectineal line) continuing the pelvic brim", "Symphyseal surface joined by fibrocartilage (secondary cartilaginous joint)", "Inferior rami of both sides form the pubic arch; in women the subpubic angle exceeds 80° (roughly the angle between the spread thumb and index finger), in men it is under 70°", FEMALE_PELVIS],
    clinical: "Relaxin and oestrogen loosen the pubic symphysis in pregnancy; symphysis pubis dysfunction causes painful walking, and the symphysis can separate (diastasis) during delivery. Pubic rami fractures after minor falls are common in older osteoporotic women and the pelvic ring often breaks in two places. The wide female pubic arch lets the fetal head pass under the symphysis during delivery."
  },
  {
    key: "coccyx", title: "Coccyx", match: ["coccyx"], kind: "bone", region: "pelvis",
    summary: "Small triangular bone formed by three to five (usually four) fused rudimentary vertebrae, articulating with the apex of the sacrum.",
    features: ["The first coccygeal vertebra has coccygeal cornua (articulating with the sacral cornua) and rudimentary transverse processes", "Attachments: gluteus maximus, coccygeus, the anococcygeal body (levator ani), sacrococcygeal ligaments and the filum terminale"],
    function: "Anchors the pelvic floor muscles and ligaments; bears some weight when leaning back in sitting",
    clinical: "In women the coccyx is more mobile and moves backward during delivery, enlarging the anteroposterior diameter of the pelvic outlet. Coccydynia (coccyx pain) is more common in women, after childbirth or a fall onto the buttocks. A sacrococcygeal teratoma is the commonest tumour of the newborn."
  },
  {
    key: "skin", title: "Skin", match: ["skin"], kind: "organ",
    summary: "The largest organ of the body: a protective covering of epidermis (keratinised stratified squamous epithelium) on dermis (dense connective tissue), lying on the subcutaneous tissue (hypodermis).",
    features: ["Epidermis: keratinocytes, melanocytes, Langerhans cells and Merkel cells; avascular", "Dermis: papillary and reticular layers containing vessels, nerves, hair follicles, sebaceous and sweat glands", "Collagen fibres in the dermis run in lines of tension (cleavage or Langer lines)", "Each strip of skin is supplied by one spinal nerve (dermatome)"],
    function: "Barrier against injury, infection and water loss; thermoregulation; sensation; vitamin D synthesis",
    clinical: "Incisions along cleavage lines heal with finer scars. Burns are sized by the rule of nines. Dermatomes localise spinal nerve root lesions and shingles. In women, pregnancy causes striae, linea nigra and melasma, and the breast skin shows signs of underlying cancer (dimpling, peau d'orange)."
  },
];

// ───────────────────────────── SPINAL CORD SEGMENTS & MENINGES ─────────────────────────────
const CORD = [
  {
    key: "cervical-cord-segments", title: "Cervical spinal cord segments (C1–C8)", match: ["segment of cervical spinal cord", "cervical spinal cord"], kind: "nerve", region: "back",
    summary: "The eight cervical segments of the spinal cord, giving rise to spinal nerves C1–C8; the lower segments form the cervical enlargement (about C4–T1) for the brachial plexus.",
    course: "Lie roughly one vertebral level above the vertebra of the same number in the lower neck; cervical nerves C1–C7 exit above their own vertebra and C8 exits below C7",
    motor: "Neck muscles, diaphragm (phrenic nerve C3–C5) and the upper limb (C5–T1)",
    sensory: "Back of the head, neck, shoulder and upper limb dermatomes (C2 occiput … C6 thumb, C7 middle finger, C8 little finger)",
    clinical: "Complete injury above C3–C5 paralyses the diaphragm and needs ventilation ('C3, 4, 5 keeps the diaphragm alive'). Lower cervical injuries cause tetraplegia with variable hand function. Central cord syndrome (hyperextension in a spondylotic neck) weakens the arms more than the legs.",
    facts: ["There are eight cervical spinal nerves but only seven cervical vertebrae."]
  },
  {
    key: "thoracic-cord-segments", title: "Thoracic spinal cord segments (T1–T12)", match: ["thoracic spinal cord segment", "thoracic spinal cord"], kind: "nerve", region: "back",
    summary: "The twelve thoracic segments, the thinnest part of the cord, with small anterior horns and a lateral horn (intermediolateral cell column) containing the sympathetic preganglionic neurons (T1–L2).",
    course: "The segments lie progressively higher than the corresponding vertebrae: upper thoracic segments about two vertebrae above, the lower ones about three; segments L1–S5 lie behind vertebrae T10–L1",
    motor: "Intercostal and abdominal wall muscles; sympathetic outflow to the whole body (T1–L2)",
    sensory: "Trunk dermatomes: T4 at the nipple, T10 at the umbilicus, T12 above the inguinal ligament",
    clinical: "Thoracic injury causes paraplegia. Lesions above T6 risk autonomic dysreflexia (dangerous hypertension triggered by bladder or bowel distension) and cut off the splanchnic sympathetic supply. The mid-thoracic cord has a relatively poor anterior spinal artery supply (watershed); the great anterior segmental artery (of Adamkiewicz), usually arising on the left between T9 and L2, supplies the lower cord and can be compromised in aortic surgery.",
    mnemonic: "T4 = 'teat pore', T10 = 'belly butTEN'."
  },
  {
    key: "lumbar-cord-segments", title: "Lumbar spinal cord segments (L1–L5)", match: ["lumbar spinal cord segment", "lumbar spinal cord"], kind: "nerve", region: "back",
    summary: "The five lumbar segments, forming the upper part of the lumbosacral enlargement; they lie behind the lower thoracic vertebrae (about T10–T12), well above the lumbar vertebrae.",
    course: "Their roots descend steeply in the vertebral canal as part of the cauda equina to exit below the corresponding lumbar vertebrae",
    motor: "Hip flexors and adductors, quadriceps (L2–L4); L1–L2 also contain the last sympathetic preganglionic neurons",
    sensory: "Groin, front and medial thigh, knee and medial leg (L1–L4) and dorsum of the foot (L5)",
    clinical: "Because the segments sit opposite T10–L1, a fracture at the thoracolumbar junction can damage cord segments and roots together (mixed upper and lower motor neuron signs). The knee jerk tests L3–L4."
  },
  {
    key: "sacral-cord-segments", title: "Sacral spinal cord segments (S1–S5) and conus medullaris", match: ["sacral spinal cord segment", "sacral spinal cord"], kind: "nerve", region: "back",
    summary: "The five sacral segments, which taper into the conus medullaris at about the L1–L2 vertebral level in adults.",
    course: "Their long roots form most of the cauda equina in the lumbar cistern and exit through the sacral foramina",
    motor: "Hip extensors, hamstrings and calf (S1–S2); pelvic floor and external sphincters (pudendal, S2–S4, Onuf's nucleus); parasympathetic outflow (pelvic splanchnic nerves, S2–S4) to the bladder, rectum and genital organs",
    sensory: "Sole and back of the leg (S1), back of the thigh (S2), perineum and perianal 'saddle' area (S3–S5); visceral pain from the cervix and other subperitoneal pelvic organs (S2–S4)",
    clinical: "A conus medullaris lesion causes early bladder, bowel and sexual dysfunction with saddle anaesthesia; cauda equina compression (central disc herniation) gives similar signs with more root pain and asymmetry — a surgical emergency. The ankle jerk tests S1. Labour pain from the cervix and vagina reaches these segments, which a low epidural or pudendal block must cover for delivery.",
    mnemonic: "S2, 3, 4 keeps the pee and poo off the floor."
  },
  {
    key: "dura-mater", title: "Dura mater", match: ["dura mater"], kind: "nerve", region: "back",
    summary: "The tough outermost meninx. Around the brain it has periosteal and meningeal layers that separate to enclose the dural venous sinuses and form folds (falx cerebri, tentorium cerebelli); around the cord it forms a tube (dural sac) from the foramen magnum to about S2.",
    course: "Spinal dura is separated from the vertebral canal by the epidural space (fat and the internal vertebral venous plexus); it extends along the spinal nerve roots as dural sleeves, and ends around S2, continuing as the coccygeal ligament around the filum terminale",
    sensory: "Cranial dura is pain-sensitive, mainly via the trigeminal nerve (and upper cervical nerves and vagus in the posterior fossa); spinal dura via the meningeal (recurrent) branches of the spinal nerves",
    clinical: "Labour epidurals place local anaesthetic in the epidural space outside the dura (usually at L3–L4); an accidental dural puncture can cause a postural post-dural-puncture headache treated by an epidural blood patch. Extradural haematoma (middle meningeal artery) lies outside the cranial dura; subdural haematoma (torn bridging veins) lies inside it."
  },
];

// ───────────────────────────── BRAIN (Allen atlas regions) ─────────────────────────────
const BRAIN = [
  // Amygdala
  alias("amygdala", "amygdaloid-complex-f", ["amygdaloid complex"]),
  {
    key: "amygdala-basolateral", title: "Basolateral nuclear group of the amygdala (lateral, basal and accessory basal nuclei)", match: ["basolateral nucleus", "basomedial nucleus", "lateral nucleus"], kind: "brain", region: "head & neck",
    summary: "The largest, cortex-like part of the amygdala, made up of the lateral nucleus, the basal (basolateral) nucleus and the accessory basal (basomedial) nucleus.",
    function: "The lateral nucleus is the main input station, receiving sensory information from the thalamus and cortex; the basal nuclei link it to the central nucleus, prefrontal cortex, hippocampus and nucleus accumbens. Together they attach emotional value to stimuli and underlie fear conditioning and emotional memory",
    clinical: "Overactivity is implicated in anxiety disorders and PTSD. Bilateral amygdala damage (e.g. Urbach–Wiethe disease, which calcifies the amygdalae) impairs recognition of fear in faces and the experience of fear."
  },
  {
    key: "amygdala-central", title: "Central nucleus of the amygdala (central nuclear group)", match: ["central nuclear group"], kind: "brain", region: "head & neck",
    summary: "Dorsomedial nuclear group of the amygdala that acts as its main output to the hypothalamus and brainstem.",
    function: "Triggers the autonomic, endocrine and behavioural expression of fear (freezing, tachycardia, raised blood pressure, startle potentiation, cortisol release) through the hypothalamus, periaqueductal grey, parabrachial nucleus and dorsal vagal complex",
    clinical: "Explains the autonomic features of temporal lobe seizures (tachycardia, epigastric rising sensation, fear). It is closely linked with the bed nucleus of the stria terminalis in sustained anxiety."
  },
  {
    key: "amygdala-corticomedial", title: "Corticomedial (superficial) amygdala: cortical and medial nuclei", match: ["anterior cortical nucleus", "posterior cortical nucleus", "medial nucleus", "anterior amygdaloid area", "amygdalohippocampal area"], kind: "brain", region: "head & neck",
    summary: "Superficial nuclei of the amygdala on the medial surface of the uncus: the anterior and posterior cortical nuclei, the medial nucleus, the anterior amygdaloid area and the amygdalohippocampal transition area.",
    function: "The cortical nuclei receive direct olfactory input (part of the olfactory cortex); the medial nucleus, rich in oestrogen and androgen receptors, is involved in social and reproductive behaviour and projects via the stria terminalis to the hypothalamus; the amygdalohippocampal area links the amygdala with the hippocampus",
    clinical: "Explains why smells evoke strong emotions and memories, and why uncal seizures produce olfactory auras with fear."
  },
  // Olfactory system & basal forebrain
  {
    key: "olfactory-bulb", title: "Olfactory bulb", match: ["olfactory bulb"], kind: "brain", region: "head & neck",
    summary: "Expanded front end of the olfactory pathway lying on the cribriform plate of the ethmoid, beneath the orbital surface of the frontal lobe.",
    function: "Receives the olfactory nerve filaments (CN I) through the cribriform plate; their axons synapse with mitral and tufted cells in glomeruli, which project back along the olfactory tract",
    clinical: "Head injury can shear the olfactory filaments at the cribriform plate (anosmia, CSF rhinorrhoea). Kallmann syndrome combines absent or hypoplastic olfactory bulbs with hypogonadotropic hypogonadism (failed migration of GnRH neurons from the olfactory placode), presenting in girls as absent puberty and primary amenorrhoea with anosmia. Loss of smell is an early feature of Parkinson's and Alzheimer's disease."
  },
  {
    key: "olfactory-tract", title: "Olfactory tract", match: ["olfactory tract"], kind: "brain", region: "head & neck",
    summary: "Band of fibres running back from the olfactory bulb in the olfactory sulcus, lateral to the gyrus rectus, and dividing at the olfactory trigone into lateral and medial olfactory striae.",
    function: "Carries olfactory information directly (without a thalamic relay) via the lateral stria to the primary olfactory cortex (piriform cortex, periamygdaloid cortex, cortical amygdala, entorhinal cortex)",
    clinical: "An olfactory groove meningioma compresses the tract and the adjacent frontal lobes: unilateral anosmia, personality change and, if it reaches the optic nerve, the Foster Kennedy syndrome (ipsilateral optic atrophy, contralateral papilloedema)."
  },
  {
    key: "anterior-olfactory-nucleus", title: "Anterior olfactory nucleus", match: ["anterior olfactory nucleus"], kind: "brain", region: "head & neck",
    summary: "Scattered groups of neurons along the olfactory tract (and in the bulb) between the bulb and the olfactory cortex.",
    function: "Processes olfactory information and links the two olfactory bulbs through the anterior commissure",
    clinical: "One of the earliest sites of alpha-synuclein (Lewy) pathology in Parkinson's disease and of tau pathology in Alzheimer's disease, explaining why reduced smell often precedes the motor or memory symptoms by years."
  },
  {
    key: "primary-olfactory-cortex", title: "Primary olfactory cortex (piriform cortex, lateral olfactory gyrus, gyrus ambiens)", match: ["piriform region", "lateral olfactory gyrus", "gyrus ambiens"], kind: "brain", region: "head & neck",
    summary: "Small region of old cortex (paleocortex) around the lateral olfactory stria at the junction of the frontal and temporal lobes and on the uncus: the piriform cortex, lateral olfactory gyrus and the gyrus ambiens (periamygdaloid cortex).",
    function: "Conscious perception and discrimination of smells; projects to the orbitofrontal cortex (via the mediodorsal thalamus and directly), the amygdala and the entorhinal cortex",
    clinical: "Seizures arising here or in the uncus ('uncinate fits') begin with brief unpleasant olfactory hallucinations. The gyrus ambiens forms part of the uncus, which herniates over the tentorial edge in transtentorial (uncal) herniation, compressing the oculomotor nerve (ipsilateral fixed dilated pupil)."
  },
  {
    key: "basal-forebrain", title: "Basal forebrain", match: ["basal forebrain"], kind: "brain", region: "head & neck",
    summary: "Group of structures on the ventral surface of the forebrain below the anterior commissure and basal ganglia, including the nucleus basalis (of Meynert) in the substantia innominata, the medial septal nucleus and the nuclei of the diagonal band.",
    function: "Main source of acetylcholine for the cerebral cortex and hippocampus, supporting attention, arousal and memory",
    clinical: "Its cholinergic neurons degenerate early in Alzheimer's disease, the basis for cholinesterase inhibitor treatment. Rupture or clipping of an anterior communicating artery aneurysm can damage it, causing amnesia with confabulation."
  },
  {
    key: "septal-nuclei", title: "Septal nuclei (septal area)", match: ["septal nuclei"], kind: "brain", region: "head & neck",
    summary: "Grey matter of the septal area beneath the rostrum of the corpus callosum, in front of the lamina terminalis and below the septum pellucidum.",
    function: "Reciprocally connected with the hippocampus (through the fornix), hypothalamus, amygdala and habenula; part of the limbic system involved in reward, emotion and the hippocampal theta rhythm (the medial septum acts as a pacemaker)",
    clinical: "Electrical stimulation of the septal area produces pleasurable sensations. Damage can follow anterior communicating artery aneurysms together with the basal forebrain."
  },
  {
    key: "nucleus-accumbens", title: "Nucleus accumbens (ventral striatum)", match: ["nucleus accumbens"], kind: "brain", region: "head & neck",
    summary: "Part of the striatum where the head of the caudate and the putamen fuse beneath the anterior limb of the internal capsule, close to the septal area.",
    function: "Receives dopamine from the ventral tegmental area (mesolimbic pathway) and input from the amygdala, hippocampus and prefrontal cortex; central to reward, motivation and reinforcement learning",
    clinical: "Addictive drugs raise dopamine here. It is an investigational deep brain stimulation target in treatment-resistant depression, obsessive–compulsive disorder and addiction."
  },
  // Basal ganglia & subthalamus
  alias("caudate-nucleus", "caudate-f", ["head of caudate", "body of caudate", "tail of caudate"]),
  {
    key: "globus-pallidus-external", title: "External segment of globus pallidus (GPe)", match: ["external segment of globus pallidus"], kind: "brain", region: "head & neck",
    summary: "Lateral segment of the globus pallidus, separated from the internal segment by the medial medullary lamina.",
    function: "Key relay of the basal ganglia indirect pathway: inhibited by striatal (D2-receptor, enkephalin) neurons and itself inhibits the subthalamic nucleus",
    blood: "Lenticulostriate arteries (MCA) and anterior choroidal artery",
    clinical: "Early loss of the striatal neurons that project to GPe in Huntington's disease disinhibits movement, producing chorea."
  },
  {
    key: "globus-pallidus-internal", title: "Internal segment of globus pallidus (GPi)", match: ["internal segment of globus pallidus"], kind: "brain", region: "head & neck",
    summary: "Medial segment of the globus pallidus, the main inhibitory (GABAergic) output nucleus of the basal ganglia together with the substantia nigra pars reticulata.",
    function: "Projects through the ansa lenticularis and lenticular fasciculus to the ventral anterior and ventral lateral thalamus, tonically inhibiting it; the direct pathway reduces this inhibition to release movement",
    blood: "Anterior choroidal artery and lenticulostriate arteries",
    clinical: "Deep brain stimulation target for Parkinson's disease (especially with dyskinesia) and the main target in dystonia; pallidotomy is the lesional equivalent. Bilateral pallidal damage is typical of carbon monoxide poisoning."
  },
  {
    key: "claustrum", title: "Claustrum", match: ["claustrum"], kind: "brain", region: "head & neck",
    summary: "Thin sheet of grey matter between the external capsule (medially) and the extreme capsule (laterally), deep to the insula.",
    function: "Reciprocally connected with almost all areas of the cerebral cortex; thought to coordinate cortical activity for attention and salience (its exact role is still uncertain)",
    clinical: "Bilateral claustral signal change on MRI (the 'claustrum sign') is described after prolonged seizures (status epilepticus). Otherwise lesions confined to it are rarely recognised clinically."
  },
  {
    key: "subthalamic-nucleus", title: "Subthalamic nucleus", match: ["subthalamic nucleus"], kind: "brain", region: "head & neck",
    summary: "Small lens-shaped nucleus below the thalamus, on the inner side of the internal capsule and above the substantia nigra.",
    function: "The only excitatory (glutamatergic) nucleus of the basal ganglia circuit: driven by the cortex (hyperdirect pathway) and GPe, it excites the GPi and substantia nigra pars reticulata, increasing their inhibition of the thalamus",
    clinical: "A lesion (usually a small stroke) causes contralateral hemiballismus (violent flinging movements). It is the commonest deep brain stimulation target for Parkinson's disease."
  },
  {
    key: "zona-incerta", title: "Zona incerta", match: ["zona incerta"], kind: "brain", region: "head & neck",
    summary: "Thin band of grey matter in the subthalamus between the thalamic fasciculus (above) and the lenticular fasciculus (below), continuous laterally with the reticular nucleus of the thalamus.",
    function: "Diverse roles in arousal, attention, visceral activity, posture and locomotion, with widespread connections to the cortex, thalamus and brainstem",
    clinical: "The caudal zona incerta is a deep brain stimulation target for tremor."
  },
  // Midbrain & brainstem
  {
    key: "substantia-nigra", title: "Substantia nigra", match: ["substantia nigra"], kind: "brain", region: "head & neck",
    summary: "Large pigmented nucleus in the midbrain between the crus cerebri and the tegmentum, with a dorsal pars compacta and a ventral pars reticulata.",
    function: "Pars compacta: dopaminergic (neuromelanin-containing) neurons projecting to the striatum (nigrostriatal pathway), facilitating movement. Pars reticulata: GABAergic output nucleus of the basal ganglia (like the GPi) to the thalamus and superior colliculus (saccades)",
    clinical: "Loss of pars compacta neurons with Lewy bodies causes Parkinson's disease (bradykinesia, rigidity, rest tremor); symptoms appear only after much of the nigrostriatal dopamine is lost. The pallor of the substantia nigra is visible at autopsy, and loss of its normal MRI appearance ('swallow-tail sign') is a supportive imaging sign."
  },
  {
    key: "red-nucleus", title: "Red nucleus", match: ["red nucleus"], kind: "brain", region: "head & neck",
    summary: "Oval, iron-rich nucleus in the tegmentum of the upper midbrain (superior colliculus level), traversed by fibres of the oculomotor nerve.",
    function: "Receives the crossed output of the cerebellum (dentate and interposed nuclei via the superior cerebellar peduncle) and motor cortex input; gives the rubrospinal tract (decussates, flexor tone of the upper limb) and rubro-olivary fibres to the inferior olive",
    clinical: "Benedikt syndrome (paramedian midbrain infarct): ipsilateral oculomotor palsy with contralateral tremor and ataxia. Lesions above the red nucleus give decorticate (flexor) posturing; below it, decerebrate (extensor) posturing."
  },
  {
    key: "midbrain-tegmentum", title: "Tegmentum of midbrain", match: ["midbrain tegmentum", "tegmentum of midbrain"], kind: "brain", region: "head & neck",
    summary: "Central part of the midbrain between the cerebral aqueduct (with the tectum behind it) and the cerebral peduncles in front.",
    features: ["Oculomotor and trochlear nuclei and the Edinger–Westphal nucleus near the periaqueductal grey", "Red nucleus, medial longitudinal fasciculus, medial lemniscus and spinothalamic tracts, decussation of the superior cerebellar peduncles", "Reticular formation (part of the ascending arousal system) and the ventral tegmental area (dopamine)"],
    function: "Eye movements, pupillary constriction, arousal, motor coordination and relay of ascending sensory pathways",
    clinical: "Tegmental infarcts cause oculomotor palsy with contralateral ataxia or tremor (Claude and Benedikt syndromes). Damage to the reticular formation here causes coma."
  },
  {
    key: "pretectal-region", title: "Pretectal region (pretectal nuclei)", match: ["pretectal"], kind: "brain", region: "head & neck",
    summary: "Group of nuclei at the junction of the midbrain and diencephalon, just rostral to the superior colliculus and near the posterior commissure.",
    function: "Centre of the pupillary light reflex: receives retinal fibres via the optic tract and projects bilaterally (crossing in the posterior commissure) to both Edinger–Westphal nuclei, producing direct and consensual constriction; also involved in vertical gaze",
    clinical: "Dorsal midbrain (Parinaud) syndrome, classically from a pineal tumour or hydrocephalus: paralysis of upward gaze, light–near dissociation of the pupils, convergence–retraction nystagmus and eyelid retraction. Argyll Robertson pupils (neurosyphilis) are attributed to a pretectal lesion."
  },
  {
    key: "pontine-tegmentum", title: "Tegmentum of pons", match: ["pontine tegmentum", "tegmentum of pons"], kind: "brain", region: "head & neck",
    summary: "Dorsal part of the pons, forming the upper floor of the fourth ventricle.",
    features: ["Nuclei of the trigeminal, abducent, facial and vestibulocochlear nerves; the facial colliculus (abducent nucleus encircled by facial fibres)", "Medial longitudinal fasciculus, paramedian pontine reticular formation (horizontal gaze centre), medial lemniscus, spinothalamic tracts", "Locus coeruleus (noradrenaline) and the pontine reticular formation (arousal, REM sleep)"],
    function: "Cranial nerve functions of the face and eye, horizontal gaze, arousal and sleep regulation",
    clinical: "A lesion of the MLF causes internuclear ophthalmoplegia (often multiple sclerosis); a lesion of the PPRF or abducent nucleus causes a horizontal gaze palsy; both together give the 'one-and-a-half' syndrome. Bilateral tegmental damage causes coma."
  },
  {
    key: "basilar-pons", title: "Basilar part of pons (basis pontis)", match: ["basilar part of pons", "basis pontis"], kind: "brain", region: "head & neck",
    summary: "Bulky ventral part of the pons, resting on the clivus and grooved by the basilar artery.",
    features: ["Longitudinal corticospinal and corticobulbar fibres", "Corticopontine fibres ending on the pontine nuclei", "Transverse pontocerebellar fibres crossing to the opposite middle cerebellar peduncle"],
    function: "Relays cerebral cortex output to the opposite cerebellum (planning and coordination) and carries descending motor tracts",
    clinical: "Basilar artery thrombosis infarcts it bilaterally, producing locked-in syndrome: quadriplegia and loss of speech and swallowing with preserved consciousness and vertical eye movements/blinking (tegmentum spared). Rapid correction of hyponatraemia causes central pontine myelinolysis here."
  },
  {
    key: "medullary-pyramid", title: "Pyramid of medulla oblongata", match: ["pyramidal part of medulla oblongata", "pyramid of medulla"], kind: "brain", region: "head & neck",
    summary: "Longitudinal ridge on each side of the anterior median fissure of the medulla, formed by the corticospinal tract.",
    function: "Carries corticospinal fibres to the spinal cord; at the lower medulla most (about 85–90%) cross in the pyramidal decussation to form the lateral corticospinal tract",
    clinical: "Medial medullary syndrome (vertebral or anterior spinal artery occlusion): contralateral hemiplegia (pyramid), contralateral loss of position and vibration sense (medial lemniscus) and ipsilateral tongue weakness (hypoglossal nerve). Lesions above the decussation give contralateral, below it ipsilateral, weakness."
  },
  {
    key: "central-canal-medulla", title: "Central canal of medulla oblongata", match: ["central canal of medulla oblongata"], kind: "brain", region: "head & neck",
    summary: "Narrow ependyma-lined canal in the lower ('closed') medulla, continuous below with the central canal of the spinal cord and opening above, at the obex, into the fourth ventricle.",
    function: "Remnant of the neural tube lumen; part of the CSF-containing ventricular system",
    clinical: "A syrinx may extend up from the cord into the medulla (syringobulbia), damaging lower cranial nerve nuclei: tongue wasting, palatal weakness, facial sensory loss and nystagmus; often associated with Chiari I malformation."
  },
  {
    key: "inferior-olive", title: "Inferior olive (inferior olivary nucleus)", match: ["inferior olive", "inferior olivary"], kind: "brain", region: "head & neck",
    summary: "Folded, bag-like nucleus forming the olive, the oval swelling lateral to the pyramid on the upper medulla.",
    function: "Source of all climbing fibres to the opposite cerebellar cortex (via the inferior cerebellar peduncle); signals errors for motor learning and timing; receives input from the red nucleus, spinal cord and cortex",
    clinical: "A lesion in the dentato-rubro-olivary (Guillain–Mollaret) triangle causes hypertrophic olivary degeneration, producing palatal tremor (myoclonus) months later."
  },
  {
    key: "white-matter-hindbrain", title: "White matter of the hindbrain (pons, medulla, cerebellum)", match: ["white matter of hindbrain"], kind: "brain", region: "head & neck",
    summary: "The fibre tracts of the pons, medulla oblongata and cerebellum: the cerebellar peduncles and the cerebellar medulla (arbor vitae), corticospinal tracts, medial lemnisci, spinothalamic tracts and the medial longitudinal fasciculus.",
    function: "Connects the cerebrum, cerebellum and spinal cord and links the cranial nerve nuclei for coordinated eye and head movement",
    clinical: "Multiple sclerosis plaques here cause internuclear ophthalmoplegia, ataxia and trigeminal neuralgia in young adults (more often women). Osmotic demyelination affects the central pons. Brainstem white matter lesions are also typical of vascular disease and some leukodystrophies."
  },
  // Cerebellum
  {
    key: "cerebellar-vermis", title: "Cerebellar vermis", match: ["cerebellar vermis"], kind: "brain", region: "head & neck",
    summary: "Narrow midline part of the cerebellum joining the two hemispheres.",
    function: "Controls posture, axial (trunk) muscles, gait and eye movements, projecting through the fastigial nucleus to the vestibular nuclei and reticular formation (vestibulospinal and reticulospinal tracts); the nodule with the flocculus forms the vestibulocerebellum",
    clinical: "Vermis damage causes truncal ataxia and a wide-based, staggering gait while limb coordination may be normal; chronic alcohol misuse classically degenerates the anterior superior vermis. Medulloblastoma, a common childhood brain tumour, arises in the vermis/roof of the fourth ventricle."
  },
  {
    key: "paravermis", title: "Paravermis (intermediate zone) of cerebellum", match: ["paravermis"], kind: "brain", region: "head & neck",
    summary: "Strip of cerebellar cortex on each side of the vermis, between it and the lateral hemisphere.",
    function: "Spinocerebellum: compares intended and actual movement of the limbs using spinal proprioceptive input, and corrects ongoing movement through the interposed (globose and emboliform) nuclei, red nucleus and thalamus",
    clinical: "Lesions cause ipsilateral limb ataxia with dysmetria and intention tremor."
  },
  {
    key: "cerebellar-hemisphere", title: "Lateral hemisphere of cerebellum (cerebrocerebellum)", match: ["lateral hemisphere of cerebellum", "cerebellar hemisphere"], kind: "brain", region: "head & neck",
    summary: "Large lateral part of each cerebellar hemisphere, connected with the opposite cerebral cortex through the pontine nuclei.",
    function: "Plans and times skilled, multi-joint voluntary movements and contributes to motor learning and cognition; output via the dentate nucleus to the contralateral ventral lateral thalamus and motor cortex",
    clinical: "Lesions produce IPSILATERAL limb signs (the pathways cross twice): dysmetria (past-pointing), intention tremor, dysdiadochokinesia, rebound, nystagmus and scanning dysarthria.",
    mnemonic: "DANISH: Dysdiadochokinesia, Ataxia, Nystagmus, Intention tremor, Slurred (scanning) speech, Hypotonia."
  },
  {
    key: "cerebellar-deep-nuclei", title: "Deep cerebellar nuclei", match: ["cerebellar deep nuclei", "deep cerebellar nuclei"], kind: "brain", region: "head & neck",
    summary: "Four pairs of nuclei embedded in the cerebellar white matter: from lateral to medial, the dentate, emboliform, globose and fastigial nuclei.",
    function: "With the vestibular nuclei they are the only output of the cerebellum. The cortex's Purkinje cells inhibit them (GABA): dentate → contralateral thalamus/motor cortex (planning); emboliform and globose (interposed) → red nucleus (limb control); fastigial → vestibular nuclei and reticular formation (posture, balance)",
    clinical: "Haemorrhage in the region of the dentate nucleus (hypertensive cerebellar haemorrhage) can compress the fourth ventricle and brainstem and may need urgent surgical evacuation.",
    mnemonic: "Lateral to medial: 'Don't Eat Greasy Food' — Dentate, Emboliform, Globose, Fastigial."
  },
  {
    key: "inferior-cerebellar-peduncle", title: "Inferior cerebellar peduncle", match: ["inferior cerebellar peduncle"], kind: "brain", region: "head & neck",
    summary: "Fibre bundle connecting the medulla with the cerebellum (restiform body plus the medial juxtarestiform body).",
    function: "Mainly afferent: dorsal spinocerebellar, cuneocerebellar, olivocerebellar (climbing fibres) and vestibulocerebellar fibres; the juxtarestiform part also carries cerebellar output to the vestibular nuclei",
    clinical: "Involved in the lateral medullary (Wallenberg) syndrome from vertebral/PICA occlusion, causing ipsilateral limb ataxia."
  },
  {
    key: "middle-cerebellar-peduncle", title: "Middle cerebellar peduncle (brachium pontis)", match: ["middle cerebellar peduncle", "brachium pontis"], kind: "brain", region: "head & neck",
    summary: "Largest cerebellar peduncle, joining the basilar pons to the cerebellum.",
    function: "Entirely afferent: pontocerebellar fibres from the contralateral pontine nuclei, relaying cerebral cortex information to the cerebellar hemispheres",
    clinical: "Atrophy and signal change are features of multiple system atrophy (cerebellar type, with the pontine 'hot cross bun' sign) and of fragile X–associated tremor/ataxia syndrome."
  },
  {
    key: "superior-cerebellar-peduncle", title: "Superior cerebellar peduncle (brachium conjunctivum)", match: ["superior cerebellar peduncle", "brachium conjunctivum"], kind: "brain", region: "head & neck",
    summary: "Fibre bundle joining the cerebellum to the midbrain, forming the upper lateral walls of the fourth ventricle.",
    function: "Main efferent pathway: dentate and interposed nuclei to the contralateral red nucleus and ventral lateral thalamus (decussating in the lower midbrain); also carries the ventral spinocerebellar tract into the cerebellum",
    clinical: "Atrophy of the superior cerebellar peduncle (and midbrain, 'hummingbird sign') supports the diagnosis of progressive supranuclear palsy. A lesion causes ipsilateral limb ataxia if below the decussation."
  },
  // Hypothalamic regions
  {
    key: "hth-preoptic", title: "Preoptic region of hypothalamus", match: ["preoptic region"], kind: "brain", region: "head & neck",
    summary: "Most anterior part of the hypothalamus, bordering the lamina terminalis in front of the optic chiasm.",
    function: "Medial preoptic area: thermoregulation (heat loss), reproductive behaviour and, with the infundibular region, gonadotropin-releasing hormone (GnRH) neurons that control the menstrual cycle; ventrolateral preoptic nucleus: initiates sleep; contains sexually dimorphic nuclei (larger in men)",
    clinical: "Lesions of the anterior hypothalamus cause hyperthermia and insomnia. Disrupted GnRH pulsatility underlies hypothalamic amenorrhoea."
  },
  {
    key: "hth-supraoptic", title: "Supraoptic (chiasmatic) region of hypothalamus", match: ["supraoptic region"], kind: "brain", region: "head & neck",
    summary: "Part of the hypothalamus above the optic chiasm containing the supraoptic, paraventricular, suprachiasmatic and anterior hypothalamic nuclei.",
    function: "Supraoptic and paraventricular nuclei make antidiuretic hormone (vasopressin) and oxytocin, carried down the hypothalamo-hypophyseal tract to the posterior pituitary; the paraventricular nucleus also makes CRH and TRH; the suprachiasmatic nucleus is the circadian clock, entrained by retinal input",
    clinical: "Destruction causes central diabetes insipidus; excess ADH causes SIADH. Oxytocin drives uterine contraction in labour and the milk-ejection (let-down) reflex triggered by suckling; synthetic oxytocin is used to induce labour and prevent postpartum haemorrhage."
  },
  {
    key: "hth-tuberal", title: "Tuberal region of hypothalamus", match: ["tuberal region"], kind: "brain", region: "head & neck",
    summary: "Middle part of the hypothalamus around the tuber cinereum and the infundibulum, containing the arcuate (infundibular), ventromedial and dorsomedial nuclei and the lateral hypothalamic area.",
    function: "The arcuate nucleus releases hypothalamic hormones into the portal vessels of the median eminence (GnRH, GHRH, dopamine that inhibits prolactin) and integrates appetite signals (leptin, ghrelin); the ventromedial nucleus signals satiety; the lateral hypothalamus drives hunger and wakefulness (orexin)",
    clinical: "Ventromedial lesions cause hyperphagia and obesity; lateral lesions cause aphagia. Compression of the pituitary stalk (e.g. a pituitary tumour) cuts off dopamine and raises prolactin (galactorrhoea, amenorrhoea). Stress, low weight or heavy exercise suppress GnRH (functional hypothalamic amenorrhoea). Loss of orexin neurons causes narcolepsy."
  },
  {
    key: "hth-mammillary", title: "Mammillary region of hypothalamus", match: ["mammillary region"], kind: "brain", region: "head & neck",
    summary: "Posterior part of the hypothalamus containing the mammillary bodies and the posterior hypothalamic nucleus.",
    function: "Mammillary bodies receive the fornix from the hippocampus and project to the anterior thalamic nuclei via the mammillothalamic tract (Papez circuit, episodic memory); the posterior hypothalamus promotes heat conservation and arousal",
    clinical: "Thiamine deficiency (alcohol misuse, and hyperemesis gravidarum in pregnancy) damages the mammillary bodies: Wernicke encephalopathy (confusion, ophthalmoplegia, ataxia) progressing to Korsakoff amnesia. Posterior hypothalamic lesions cause poikilothermia and somnolence."
  },
  {
    key: "mammillothalamic-tract", title: "Mammillothalamic tract", match: ["mammillothalamic tract"], kind: "brain", region: "head & neck",
    summary: "Fibre bundle running from the mammillary body up to the anterior nucleus of the thalamus.",
    function: "Part of the Papez circuit (hippocampus → fornix → mammillary body → mammillothalamic tract → anterior thalamus → cingulate gyrus → hippocampus) involved in episodic memory",
    clinical: "Anterior thalamic infarcts (tuberothalamic artery) that cut this tract cause a severe amnesia."
  },
  // Thalamic nuclei
  {
    key: "thal-anterior", title: "Anterior nuclear complex of thalamus", match: ["anterior nuclear complex of thalamus", "anterior nucleus of thalamus"], kind: "brain", region: "head & neck",
    summary: "Nuclei in the anterior tubercle of the thalamus, enclosed by the Y-shaped internal medullary lamina, just behind the interventricular foramen.",
    function: "Limbic relay: receives the mammillothalamic tract and projects to the cingulate gyrus (Papez circuit); involved in episodic and spatial memory",
    clinical: "Deep brain stimulation of the anterior nucleus reduces seizures in drug-resistant focal epilepsy. Damage contributes to the amnesia of Korsakoff syndrome and anterior thalamic infarcts."
  },
  {
    key: "thal-lateral-dorsal", title: "Lateral dorsal nucleus of thalamus", match: ["lateral dorsal nucleus of thalamus"], kind: "brain", region: "head & neck",
    summary: "Most rostral nucleus of the dorsal tier of the lateral thalamus, just behind the anterior nuclei.",
    function: "Functionally allied to the anterior nuclei: connected with the cingulate gyrus, retrosplenial and parietal cortex and the hippocampal formation; contributes to spatial memory and attention",
    clinical: "Rarely damaged in isolation; involved with the anterior nuclei in thalamic amnesia."
  },
  {
    key: "thal-lateral-posterior", title: "Lateral posterior nucleus of thalamus", match: ["lateral posterior nucleus of thalamus"], kind: "brain", region: "head & neck",
    summary: "Dorsal-tier nucleus of the lateral thalamus between the lateral dorsal nucleus and the pulvinar, with which it forms a continuum.",
    function: "Association nucleus connected with the superior parietal lobule and visual association cortex; receives input from the superior colliculus; involved in visuospatial attention and sensory integration",
    clinical: "Lesions contribute, with the pulvinar, to contralateral neglect and visual attention deficits."
  },
  {
    key: "thal-mediodorsal", title: "Mediodorsal (dorsomedial) nucleus of thalamus", match: ["mediodorsal nucleus", "dorsomedial nucleus of thalamus"], kind: "brain", region: "head & neck",
    summary: "Large nucleus of the medial thalamus, medial to the internal medullary lamina and beside the third ventricle.",
    function: "Reciprocally connected with the prefrontal cortex; also receives input from the amygdala, olfactory cortex and ventral pallidum; involved in executive function, working memory, emotion and olfaction",
    clinical: "Bilateral paramedian thalamic infarction (occlusion of a single artery of Percheron) causes hypersomnolence, amnesia and vertical gaze palsy. Its damage is linked to the memory loss of Korsakoff syndrome; reduced volume is reported in schizophrenia."
  },
  {
    key: "thal-centromedian", title: "Centromedian nucleus of thalamus", match: ["centromedian nucleus"], kind: "brain", region: "head & neck",
    summary: "Largest of the intralaminar nuclei, lying within the internal medullary lamina in the posterior thalamus.",
    function: "Part of the ascending arousal system and basal ganglia circuits: receives input from the GPi, motor cortex and reticular formation and projects mainly to the striatum; involved in attention, arousal and pain",
    clinical: "Deep brain stimulation target for drug-resistant generalised epilepsy (e.g. Lennox–Gastaut syndrome) and Tourette syndrome."
  },
  {
    key: "thal-parafascicular", title: "Parafascicular nucleus of thalamus", match: ["parafascicular nucleus"], kind: "brain", region: "head & neck",
    summary: "Intralaminar nucleus medial to the centromedian nucleus, surrounding the fasciculus retroflexus (habenulointerpeduncular tract).",
    function: "Projects to the striatum (especially the caudate) and frontal cortex; involved in attention, behavioural switching and pain",
    clinical: "Usually targeted together with the centromedian nucleus (CM–Pf complex) in deep brain stimulation for Tourette syndrome."
  },
  {
    key: "thal-midline", title: "Midline thalamic nuclei (including nucleus reuniens)", match: ["midline nuclear complex", "reuniens nucleus"], kind: "brain", region: "head & neck",
    summary: "Small nuclei along the wall of the third ventricle and in the interthalamic adhesion (paraventricular, rhomboid and reuniens/medioventral nuclei).",
    function: "Arousal and viscero-emotional functions; the nucleus reuniens links the medial prefrontal cortex with the hippocampus, coordinating memory processing",
    clinical: "Involved in paramedian thalamic infarcts (artery of Percheron), contributing to hypersomnolence and memory loss."
  },
  {
    key: "thal-pulvinar", title: "Pulvinar of thalamus", match: ["pulvinar of thalamus", "pulvinar"], kind: "brain", region: "head & neck",
    summary: "Largest thalamic nucleus, forming the posterior cushion-like projection of the thalamus that overhangs the geniculate bodies.",
    function: "Association nucleus with extensive connections to parietal, temporal and occipital association cortex and input from the superior colliculus; directs visual attention to salient stimuli",
    clinical: "Lesions cause contralateral visual neglect and attention deficits. Bilateral pulvinar hyperintensity on MRI (the 'pulvinar sign') is characteristic of variant Creutzfeldt–Jakob disease."
  },
  {
    key: "thal-va", title: "Ventral anterior nucleus of thalamus", match: ["ventral anterior nucleus of thalamus"], kind: "brain", region: "head & neck",
    summary: "Most anterior nucleus of the ventral tier of the lateral thalamus.",
    function: "Motor relay of the basal ganglia: receives inhibitory output from the GPi and substantia nigra pars reticulata and projects to premotor and prefrontal cortex for initiation and planning of movement",
    clinical: "Part of the 'motor thalamus' whose excessive inhibition by the basal ganglia explains the poverty of movement in Parkinson's disease."
  },
  {
    key: "thal-vl", title: "Ventral lateral nucleus of thalamus", match: ["ventral lateral nucleus of thalamus"], kind: "brain", region: "head & neck",
    summary: "Ventral-tier nucleus between the VA and VP nuclei; its anterior part receives pallidal input and its posterior part (including the ventral intermediate nucleus, Vim) receives cerebellar input.",
    function: "Relays cerebellar (dentate, via the superior cerebellar peduncle) and basal ganglia output to the primary motor and premotor cortex",
    clinical: "The ventral intermediate (Vim) part is the standard deep brain stimulation or focused-ultrasound target for essential tremor and tremor-dominant Parkinson's disease."
  },
  {
    key: "thal-vpl", title: "Ventral posterolateral nucleus of thalamus (VPL)", match: ["ventral posterior lateral nucleus", "ventral posterolateral nucleus"], kind: "brain", region: "head & neck",
    summary: "Lateral part of the ventral posterior nucleus, the main somatosensory relay for the body.",
    function: "Receives the medial lemniscus (touch, vibration, proprioception) and spinothalamic tract (pain, temperature) from the contralateral body and projects through the posterior limb of the internal capsule to the postcentral gyrus",
    clinical: "A thalamic stroke (thalamogeniculate branches of the posterior cerebral artery) causes contralateral hemisensory loss, sometimes followed by severe burning central pain (Dejerine–Roussy thalamic pain syndrome)."
  },
  {
    key: "thal-vpm", title: "Ventral posteromedial nucleus of thalamus (VPM)", match: ["ventral posterior medial nucleus", "ventral posteromedial nucleus"], kind: "brain", region: "head & neck",
    summary: "Medial part of the ventral posterior nucleus, the somatosensory relay for the face.",
    function: "Receives the trigeminothalamic (trigeminal lemniscus) pathways from the contralateral face and taste fibres from the solitary nucleus; projects to the face area of the postcentral gyrus and, for taste, to the insula and frontal operculum",
    clinical: "Lesions cause contralateral facial sensory loss (with VPL lesions, a complete hemisensory loss including the face).",
    mnemonic: "VPM = Make-up (face); VPL = Limbs."
  },
  alias("lateral-geniculate-body", "lgn-f", ["lateral geniculate nucleus"]),
  alias("medial-geniculate-body", "mgn-f", ["medial geniculate nuclei", "medial geniculate nucleus"]),
  // Ventricles
  {
    key: "lv-anterior-horn", title: "Anterior (frontal) horn of lateral ventricle", match: ["anterior horn of lateral ventricle", "frontal horn of lateral ventricle"], kind: "brain", region: "head & neck",
    summary: "Part of the lateral ventricle in the frontal lobe, in front of the interventricular foramen.",
    features: ["Roof and front: corpus callosum (body and genu)", "Medial wall: septum pellucidum", "Lateral wall and floor: bulging head of the caudate nucleus", "No choroid plexus"],
    clinical: "Atrophy of the caudate head in Huntington's disease gives 'box-car' frontal horns. External ventricular drains are usually placed in the frontal horn through Kocher's point. Periventricular capping of the frontal horns is common on MRI."
  },
  {
    key: "lv-body", title: "Body (central part) of lateral ventricle", match: ["body of lateral ventricle"], kind: "brain", region: "head & neck",
    summary: "Central part of the lateral ventricle in the frontal and parietal lobes, from the interventricular foramen back to the splenium of the corpus callosum.",
    features: ["Roof: body of the corpus callosum", "Floor: body of the caudate nucleus laterally, thalamus medially, with the stria terminalis and thalamostriate vein in the groove between", "Medial wall: septum pellucidum and fornix; choroid plexus in the choroid fissure"],
    clinical: "Multiple sclerosis plaques are typically periventricular and oriented perpendicular to the bodies of the lateral ventricles ('Dawson's fingers'). Ventricular dilatation with periventricular lucency indicates hydrocephalus."
  },
  {
    key: "lv-atrium", title: "Atrium (trigone) of lateral ventricle", match: ["atrium of lateral ventricle", "trigone of lateral ventricle"], kind: "brain", region: "head & neck",
    summary: "Wide triangular junction of the body, posterior horn and inferior horn of the lateral ventricle, near the splenium of the corpus callosum.",
    features: ["Contains the glomus, an enlarged tuft of choroid plexus that often calcifies (visible on CT)"],
    clinical: "Measured on the routine fetal anomaly scan: an atrial width of 10 mm or more is fetal ventriculomegaly and prompts further assessment. Choroid plexus papillomas in children and meningiomas in adults occur at the trigone."
  },
  {
    key: "lv-posterior-horn", title: "Posterior (occipital) horn of lateral ventricle", match: ["posterior horn of lateral ventricle", "occipital horn of lateral ventricle"], kind: "brain", region: "head & neck",
    summary: "Extension of the lateral ventricle back into the occipital lobe; very variable in size and often asymmetrical.",
    features: ["Roof and lateral wall: tapetum of the corpus callosum and optic radiation", "Medial wall: bulb of the posterior horn (forceps major) and calcar avis (the calcarine sulcus)"],
    clinical: "Most dependent part of the ventricles in a supine patient, so blood or pus layers here (fluid–fluid level on CT). Asymmetry of the posterior horns is a normal variant."
  },
  {
    key: "lv-inferior-horn", title: "Inferior (temporal) horn of lateral ventricle", match: ["inferior horn of lateral ventricle", "temporal horn of lateral ventricle"], kind: "brain", region: "head & neck",
    summary: "Extension of the lateral ventricle down and forward into the temporal lobe, ending just behind the amygdala.",
    features: ["Floor: hippocampus medially and the collateral eminence laterally", "Roof: tail of the caudate nucleus and stria terminalis; amygdala at its anterior end", "Choroid plexus enters through the choroid fissure"],
    clinical: "Dilatation of the temporal horns is an early sign of hydrocephalus; enlargement with hippocampal atrophy is seen in Alzheimer's disease."
  },
  // Cortical regions
  {
    key: "cingulate-isthmus", title: "Isthmus of cingulate gyrus", match: ["parahippocampal isthmus", "isthmus of cingulate gyrus"], kind: "brain", region: "head & neck",
    summary: "Narrow strip of cortex behind and below the splenium of the corpus callosum that joins the posterior cingulate gyrus to the parahippocampal gyrus, completing the C-shaped limbic lobe.",
    function: "Part of the limbic lobe and the posterior medial (default mode) network linking cingulate and medial temporal memory systems",
    clinical: "Together with the posterior cingulate and precuneus it shows early hypometabolism on PET in Alzheimer's disease."
  },
  {
    key: "perirhinal-cortex", title: "Perirhinal cortex (perirhinal gyrus)", match: ["perirhinal gyrus", "perirhinal cortex"], kind: "brain", region: "head & neck",
    summary: "Cortex (Brodmann areas 35 and 36) lining the banks of the rhinal and collateral sulci in the anterior medial temporal lobe, lateral to the entorhinal cortex.",
    function: "Part of the medial temporal lobe memory system: object recognition and familiarity memory; relays information from visual association cortex to the entorhinal cortex and hippocampus",
    clinical: "The transentorhinal region here is the first site of neurofibrillary tangles in Alzheimer's disease (Braak stages I–II)."
  },
  {
    key: "paracingulate-gyrus", title: "Paracingulate gyrus", match: ["paracingulate gyrus"], kind: "brain", region: "head & neck",
    summary: "Variable gyrus running parallel to and above the anterior cingulate gyrus on the medial frontal surface, separated from it by the paracingulate sulcus (present in many, but not all, hemispheres, more often on the left).",
    function: "Part of the anterior cingulate/medial prefrontal cortex: cognitive control, error monitoring and distinguishing self-generated from external events (reality monitoring)",
    clinical: "Its presence or absence is a normal variant; a shorter or absent paracingulate sulcus has been associated with hallucinations in schizophrenia."
  },
  {
    key: "cuneus", title: "Cuneus", match: ["cuneus"], kind: "brain", region: "head & neck",
    summary: "Wedge-shaped gyrus on the medial occipital surface between the calcarine sulcus (below) and the parieto-occipital sulcus (above).",
    function: "The upper bank of the calcarine sulcus contains primary visual cortex for the contralateral INFERIOR visual field quadrant",
    blood: "Calcarine and parieto-occipital branches of the posterior cerebral artery",
    clinical: "A lesion causes a contralateral homonymous inferior quadrantanopia."
  },
  {
    key: "precuneus", title: "Precuneus", match: ["precuneus"], kind: "brain", region: "head & neck",
    summary: "Medial part of the parietal lobe between the paracentral lobule (in front) and the cuneus (behind, across the parieto-occipital sulcus).",
    function: "Visuospatial imagery, episodic memory retrieval and self-referential thought; a core hub of the default mode network",
    blood: "Anterior cerebral artery (and posterior cerebral branches)",
    clinical: "One of the earliest sites of amyloid deposition and reduced metabolism in Alzheimer's disease, together with the posterior cingulate gyrus."
  },
  {
    key: "superior-parietal-lobule-f", title: "Superior parietal lobule", match: ["supraparietal lobule"], kind: "brain", region: "head & neck",
    summary: "Part of the lateral parietal lobe above the intraparietal sulcus and behind the postcentral gyrus (Brodmann areas 5 and 7).",
    function: "Integrates somatosensory and visual information for body schema, spatial orientation and visually guided reaching (dorsal 'where/how' stream)",
    blood: "Middle cerebral artery (with the anterior cerebral artery near the midline)",
    clinical: "Lesions cause contralateral astereognosis and sensory inattention and optic ataxia (misreaching under visual guidance); bilateral parieto-occipital damage causes Bálint syndrome."
  },
  {
    key: "paracentral-lobule", title: "Paracentral lobule", match: ["paracentral lobule"], kind: "brain", region: "head & neck",
    summary: "Medial continuation of the precentral (rostral, motor) and postcentral (caudal, sensory) gyri around the upper end of the central sulcus on the medial hemisphere.",
    function: "Motor and sensory cortex for the contralateral leg and foot; contains the cortical centre for voluntary control of micturition and defecation",
    blood: "Anterior cerebral artery",
    clinical: "Anterior cerebral artery infarction causes contralateral leg weakness and sensory loss (worse than in the arm) and urinary incontinence. A parasagittal (falx) meningioma can compress both paracentral lobules, causing spastic weakness of both legs and incontinence that can mimic a spinal cord lesion."
  },
  {
    key: "frontal-operculum", title: "Frontal operculum", match: ["frontal operculum"], kind: "brain", region: "head & neck",
    summary: "Part of the inferior frontal gyrus (mainly the pars opercularis) that overlies the anterior insula above the lateral sulcus.",
    function: "On the dominant (usually left) side forms part of Broca's area for speech production; with the anterior insula contains the primary gustatory (taste) cortex",
    clinical: "Dominant-side lesions cause Broca's (non-fluent, expressive) aphasia. Bilateral anterior opercular lesions cause Foix–Chavany–Marie syndrome (paralysis of voluntary facial, tongue, pharyngeal and chewing movements with preserved automatic movements such as yawning)."
  },
  {
    key: "parietal-operculum", title: "Parietal operculum", match: ["parietal operculum"], kind: "brain", region: "head & neck",
    summary: "Part of the parietal lobe that overhangs the posterior insula above the lateral sulcus, behind the postcentral gyrus's lower end.",
    function: "Contains the secondary somatosensory cortex (SII) and parts of the vestibular cortex; processes pain, temperature, touch and body position",
    clinical: "Seizures here produce somatosensory or painful auras; lesions can disturb pain and temperature perception on the opposite side."
  },
  {
    key: "frontal-pole", title: "Frontal pole and frontomarginal gyrus", match: ["frontal pole", "frontomarginal gyrus"], kind: "brain", region: "head & neck",
    summary: "Anterior tip of the frontal lobe (frontopolar cortex, Brodmann area 10), including the frontomarginal gyrus along its inferior margin.",
    function: "Highest-order prefrontal cortex: managing multiple goals, planning, exploring alternatives and reflecting on one's own thinking (metacognition)",
    clinical: "Frequently contused in head injury as the frontal lobes strike the inside of the frontal bone (coup–contrecoup), causing apathy, disinhibition and poor planning."
  },
  {
    key: "occipital-pole", title: "Occipital pole", match: ["occipital pole"], kind: "brain", region: "head & neck",
    summary: "Posterior tip of the occipital lobe, where the primary visual cortex for the central (macular) visual field lies.",
    function: "Represents central vision (the macula) with a very large cortical area",
    blood: "Posterior cerebral artery, with a contribution from the middle cerebral artery",
    clinical: "Dual blood supply explains macular sparing in posterior cerebral artery infarction. Injury to both poles (e.g. contrecoup, watershed infarction) causes central scotomas or cortical blindness."
  },
  {
    key: "temporal-pole", title: "Temporal pole", match: ["temporal pole"], kind: "brain", region: "head & neck",
    summary: "Anterior tip of the temporal lobe (Brodmann area 38), sitting in the middle cranial fossa behind the greater wing of the sphenoid.",
    function: "Semantic memory (knowledge of words, objects and people), social and emotional processing; strongly connected with the amygdala and orbitofrontal cortex",
    clinical: "Left-predominant anterior temporal atrophy causes semantic dementia (loss of word meaning and object knowledge). The temporal poles are often contused against the sphenoid ridge in head injury."
  },
  {
    key: "inferior-frontal-gyrus", title: "Inferior frontal gyrus (pars opercularis and triangularis — Broca's area)", match: ["inferior frontal gyrus"], kind: "brain", region: "head & neck",
    summary: "Lowest of the three frontal gyri on the lateral surface, divided by rami of the lateral sulcus into orbital, triangular and opercular parts.",
    function: "In the dominant (usually left) hemisphere the opercular and triangular parts (Brodmann areas 44 and 45) form Broca's area for speech production and grammar; the right inferior frontal gyrus is important for inhibiting responses",
    blood: "Superior division of the middle cerebral artery",
    clinical: "Broca's aphasia: non-fluent, effortful, telegraphic speech with relatively preserved comprehension, often with right face and arm weakness; patients are aware of and frustrated by their deficit."
  },
  {
    key: "occipital-gyri", title: "Lateral occipital gyri (superior and inferior occipital gyri)", match: ["occipital gyrus"], kind: "brain", region: "head & neck",
    summary: "Gyri on the lateral surface of the occipital lobe, divided by the lateral occipital sulcus.",
    function: "Visual association cortex (beyond V1): processing of shape, objects (lateral occipital complex), faces (occipital face area in the inferior occipital gyrus) and motion toward the occipitotemporal junction",
    blood: "Posterior cerebral artery and the middle cerebral artery (watershed)",
    clinical: "Lesions cause visual agnosias; damage to the inferior occipital and fusiform face areas (usually right or bilateral) causes prosopagnosia."
  },
  {
    key: "lingual-gyrus", title: "Lingual gyrus (medial occipitotemporal gyrus)", match: ["lingual gyrus"], kind: "brain", region: "head & neck",
    summary: "Gyrus on the medial and inferior occipital surface below the calcarine sulcus, continuous in front with the parahippocampal gyrus.",
    function: "The lower bank of the calcarine sulcus contains primary visual cortex for the contralateral SUPERIOR visual field quadrant; adjacent visual association cortex processes colour (V4) and letters",
    blood: "Posterior cerebral artery",
    clinical: "Lesion → contralateral homonymous superior quadrantanopia. Damage to the lingual/fusiform region can cause loss of colour vision (achromatopsia) and, with the splenium, pure alexia."
  },
  {
    key: "superior-temporal-gyrus-f", title: "Superior temporal gyrus", match: ["superior temporal gyrus"], kind: "brain", region: "head & neck",
    summary: "Uppermost gyrus of the lateral temporal lobe, below the lateral sulcus; its hidden upper surface (supratemporal plane) carries the transverse temporal gyri.",
    function: "Primary auditory cortex (Heschl's gyrus) and auditory association cortex; its posterior part in the dominant hemisphere (with the planum temporale) forms Wernicke's area for language comprehension",
    blood: "Inferior division of the middle cerebral artery",
    clinical: "Wernicke's aphasia: fluent but meaningless speech with neologisms and poor comprehension, often without weakness and with little insight (inferior division MCA infarct)."
  },
  {
    key: "transverse-temporal-gyrus", title: "Transverse temporal gyri (of Heschl)", match: ["transverse temporal gyrus", "heschl"], kind: "brain", region: "head & neck",
    summary: "One or two short gyri running obliquely across the upper surface of the superior temporal gyrus, deep in the lateral sulcus.",
    function: "Primary auditory cortex (Brodmann areas 41 and 42), tonotopically organised; receives the acoustic radiation from the medial geniculate nucleus with input from both ears",
    clinical: "Because each cortex receives input from both ears, a unilateral lesion causes little hearing loss; bilateral lesions cause cortical deafness or auditory agnosia."
  },
  {
    key: "planum-temporale", title: "Planum temporale", match: ["planum temporale"], kind: "brain", region: "head & neck",
    summary: "Triangular area of the superior temporal plane behind Heschl's gyrus, deep in the lateral sulcus.",
    function: "Auditory association cortex for processing speech sounds; part of Wernicke's area in the dominant hemisphere",
    clinical: "Usually larger on the left, one of the classic anatomical asymmetries linked to left-hemisphere language dominance; damage contributes to Wernicke's aphasia."
  },
  {
    key: "planum-polare", title: "Planum polare", match: ["planum polare"], kind: "brain", region: "head & neck",
    summary: "Part of the superior temporal plane in front of Heschl's gyrus, extending toward the temporal pole.",
    function: "Auditory association cortex involved in processing complex sounds such as music, melody and speech intonation",
    clinical: "Rarely damaged in isolation; may contribute to disordered music perception (amusia) after anterior temporal lesions."
  },
  alias("orbital-gyri-gyrus-rectus", "orbital-gyri-f", ["orbital gyrus", "gyrus rectus"]),
  {
    key: "subcallosal-area", title: "Subcallosal area (subcallosal and parolfactory gyri)", match: ["subcallosal gyrus", "parolfactory gyrus", "subcallosal area"], kind: "brain", region: "head & neck",
    summary: "Small cortical area on the medial frontal surface beneath the rostrum and genu of the corpus callosum, in front of the lamina terminalis, overlying the septal nuclei.",
    function: "Part of the limbic system and of the subgenual anterior cingulate cortex (Brodmann area 25), regulating mood, autonomic responses and reward",
    clinical: "The subgenual cingulate/subcallosal region is overactive in major depression and is an investigational deep brain stimulation target for treatment-resistant depression."
  },
  {
    key: "rostral-gyrus", title: "Rostral gyrus", match: ["rostral gyrus"], kind: "brain", region: "head & neck",
    summary: "Small gyrus on the medial surface of the frontal lobe, between the superior and inferior rostral sulci, in front of the subcallosal area and below the anterior cingulate gyrus.",
    function: "Part of the ventromedial prefrontal cortex: valuation of choices, emotion regulation and social decision-making",
    clinical: "Ventromedial prefrontal damage (trauma, anterior communicating artery aneurysm, meningioma) causes poor real-life decision-making and altered social behaviour despite normal intelligence."
  },
  alias("fornix", "fornix-f", ["fornix"]),
  alias("cerebral-peduncle", "cerebral-peduncle-f", ["cerebral peduncle", "crus cerebri"]),
  {
    key: "optic-radiation", title: "Optic radiation (geniculocalcarine tract)", match: ["optic radiation"], kind: "brain", region: "head & neck",
    summary: "Fan of fibres from the lateral geniculate nucleus to the primary visual cortex along the calcarine sulcus.",
    features: ["Lower fibres (upper visual field) loop forward around the inferior horn of the lateral ventricle in the temporal lobe (Meyer's loop)", "Upper fibres (lower visual field) pass through the deep parietal lobe", "Runs in the lateral wall of the posterior horn"],
    function: "Carries visual information for the contralateral visual hemifield",
    clinical: "Temporal lobe lesions (or anterior temporal lobectomy) cut Meyer's loop: contralateral homonymous SUPERIOR quadrantanopia ('pie in the sky'). Parietal lesions cause an inferior quadrantanopia ('pie on the floor'). Complete interruption gives a contralateral homonymous hemianopia."
  },
];

// ───────────────────────────── EYE ─────────────────────────────
const EYE = [
  {
    key: "cornea", title: "Cornea", match: ["cornea"], kind: "organ", region: "head & neck",
    summary: "Transparent, avascular front sixth of the outer fibrous coat of the eye, more curved than the sclera.",
    features: ["Five layers: epithelium, Bowman layer, stroma (regular collagen lamellae), Descemet membrane, endothelium (pumps water out to keep it clear)", "Nourished by tears, aqueous humour and limbal vessels", "Densely innervated by the ophthalmic nerve (long ciliary nerves from the nasociliary nerve)"],
    function: "Main refracting surface of the eye (about two-thirds of its focusing power) and protective window",
    clinical: "The corneal reflex tests CN V1 (afferent) and CN VII (efferent). Abrasions and ulcers are very painful. Being avascular, corneal grafts are rarely rejected. Keratoconus is progressive thinning and coning. A copper ring at the periphery in Descemet membrane (Kayser–Fleischer ring) indicates Wilson disease."
  },
  {
    key: "corneoscleral-junction", title: "Corneoscleral junction (limbus)", match: ["corneo scleral junction", "corneoscleral junction", "limbus of cornea"], kind: "organ", region: "head & neck",
    summary: "Circular transition zone between the transparent cornea and the opaque sclera.",
    features: ["Contains the limbal epithelial stem cells that renew the corneal epithelium", "Overlies the iridocorneal angle with the trabecular meshwork and scleral venous sinus", "Insertion line of reference for the rectus muscles"],
    clinical: "Most cataract and glaucoma surgery incisions are made here. Chemical (especially alkali) burns destroy limbal stem cells, causing corneal opacification. A ring of redness around the limbus (ciliary flush) signals anterior uveitis or acute angle-closure glaucoma rather than conjunctivitis."
  },
  {
    key: "sclera", title: "Sclera", match: ["sclera"], kind: "organ", region: "head & neck",
    summary: "Tough, opaque white outer fibrous coat of the posterior five-sixths of the eyeball.",
    features: ["Dense irregular collagen", "Pierced posteriorly by the optic nerve at the lamina cribrosa, where it blends with the dural sheath", "Gives insertion to the extra-ocular muscles", "Pierced by the ciliary vessels and nerves and the vortex veins"],
    function: "Maintains the shape of the eye, resists intraocular pressure and anchors the extra-ocular muscles",
    clinical: "Blue sclerae (thin sclera showing the choroid) occur in osteogenesis imperfecta. Scleritis is a painful, sight-threatening inflammation associated with rheumatoid arthritis and vasculitis. Blunt trauma ruptures the globe where the sclera is thinnest, just behind the rectus insertions. Jaundice is seen over the sclera (actually in the overlying conjunctiva)."
  },
  {
    key: "choroid", title: "Choroid", match: ["choroid"], kind: "organ", region: "head & neck",
    summary: "Thin, highly vascular and pigmented posterior part of the uveal (vascular) tract, between the retina and the sclera.",
    features: ["Innermost choriocapillaris supplies the outer retina (photoreceptors and retinal pigment epithelium)", "Supplied by the short posterior ciliary arteries; drained by the vortex veins", "Bruch membrane separates it from the retinal pigment epithelium"],
    function: "Nourishes the outer retina and absorbs stray light",
    clinical: "Choroidal melanoma is the commonest primary intraocular malignancy in adults. In wet age-related macular degeneration new choroidal vessels grow through Bruch membrane (treated with anti-VEGF injections). The cherry-red spot of central retinal artery occlusion is the choroid seen through the thin fovea."
  },
  {
    key: "ciliary-body", title: "Ciliary body", match: ["ciliary body"], kind: "organ", region: "head & neck",
    summary: "Ring-shaped thickening of the uveal tract between the choroid and the iris, containing the ciliary muscle and the ciliary processes.",
    function: "Produces aqueous humour (ciliary processes), changes lens shape for accommodation (ciliary muscle) and anchors the lens zonules",
    blood: "Long posterior and anterior ciliary arteries (major arterial circle of the iris)",
    clinical: "Many glaucoma drugs reduce aqueous production by the ciliary body (beta-blockers, carbonic anhydrase inhibitors, alpha-2 agonists); laser cyclophotocoagulation destroys part of it in refractory glaucoma. Ciliary body melanomas can hide behind the iris."
  },
  {
    key: "ciliary-muscle", title: "Ciliary muscle", match: ["ciliary muscle"], kind: "muscle", region: "head & neck",
    summary: "Ring of smooth muscle in the ciliary body, with longitudinal, radial and circular fibres.",
    origin: "Scleral spur (longitudinal fibres)",
    insertion: "Ciliary body and choroid; acts on the zonular fibres of the lens",
    action: "Contraction draws the ciliary body forward and inward, relaxing the zonules so the elastic lens becomes more convex for near vision (accommodation); also opens the trabecular meshwork",
    innervation: "Parasympathetic: oculomotor nerve (CN III) → ciliary ganglion → short ciliary nerves",
    blood: "Ciliary arteries",
    clinical: "Presbyopia (from about 40 years) is loss of accommodation as the lens stiffens. Cycloplegic drops (atropine, cyclopentolate) paralyse the ciliary muscle to examine the fundus or measure refraction in children. The accommodation reflex is lost in oculomotor palsy."
  },
  {
    key: "ciliary-processes", title: "Ciliary processes", match: ["ciliary processes", "ciliary process"], kind: "organ", region: "head & neck",
    summary: "About 70 radial folds on the inner surface of the ciliary body, covered by a double-layered (pigmented and non-pigmented) ciliary epithelium.",
    function: "The non-pigmented epithelium secretes aqueous humour into the posterior chamber; the zonular fibres of the lens attach between them",
    clinical: "Targets of aqueous-suppressing glaucoma drugs and of cyclodestructive laser procedures."
  },
  {
    key: "iris", title: "Iris", match: ["iris"], kind: "organ", region: "head & neck",
    summary: "Thin contractile diaphragm of the uveal tract in front of the lens, with a central aperture (the pupil); it separates the anterior and posterior chambers.",
    features: ["Sphincter pupillae (circular, parasympathetic CN III via the ciliary ganglion) constricts the pupil", "Dilator pupillae (radial, sympathetic from the superior cervical ganglion via the long ciliary nerves) dilates it", "Colour depends on the amount of melanin in the stroma"],
    function: "Controls the amount of light entering the eye and improves depth of focus",
    clinical: "Anterior uveitis (iritis) causes a painful red eye with photophobia and a small pupil (associated with HLA-B27 conditions and sarcoidosis). New vessels on the iris (rubeosis) after diabetic retinopathy or retinal vein occlusion cause neovascular glaucoma. In angle-closure glaucoma the peripheral iris blocks the drainage angle."
  },
  {
    key: "pupil", title: "Pupil", match: ["pupil"], kind: "organ", region: "head & neck",
    summary: "Circular aperture in the centre of the iris through which light reaches the lens and retina.",
    function: "Constricts in bright light and for near vision (with accommodation and convergence) and dilates in darkness and with sympathetic arousal",
    clinical: "The light reflex tests CN II (afferent) and CN III (efferent), with direct and consensual responses. A relative afferent pupillary defect indicates optic nerve disease. A fixed dilated pupil suggests oculomotor compression (uncal herniation, posterior communicating artery aneurysm); a small pupil with ptosis suggests Horner syndrome."
  },
  {
    key: "lens", title: "Lens", match: ["lens"], kind: "organ", region: "head & neck",
    summary: "Transparent, avascular biconvex structure behind the iris, enclosed in an elastic capsule and suspended from the ciliary body by zonular fibres.",
    features: ["Made of tightly packed lens fibres that keep growing throughout life", "Its curvature (mainly the anterior surface) changes in accommodation"],
    function: "Fine-tunes focusing (about one-third of the eye's refractive power) and allows accommodation for near vision",
    clinical: "Cataract (opacity) is the commonest cause of reversible blindness worldwide: age, diabetes, steroids, trauma and congenital causes (e.g. rubella). Presbyopia reflects age-related stiffening. Dislocation (ectopia lentis) occurs in Marfan syndrome (usually upward and outward) and homocystinuria (usually downward)."
  },
  {
    key: "suspensory-ligament-lens", title: "Suspensory ligament of lens (ciliary zonule)", match: ["suspensory ligament of lens", "ciliary zonule", "zonular fibres"], kind: "organ", region: "head & neck",
    summary: "System of fine zonular fibres (mainly fibrillin) running from the ciliary body to the equator of the lens capsule.",
    function: "At rest the zonules are taut and flatten the lens for distance vision; when the ciliary muscle contracts they relax and the lens rounds up for near vision",
    clinical: "Defective fibrillin-1 in Marfan syndrome weakens the zonules, causing lens subluxation. Weak zonules in pseudoexfoliation syndrome complicate cataract surgery."
  },
  {
    key: "aqueous-humor", title: "Aqueous humour", match: ["aqueous humor", "aqueous humour"], kind: "organ", region: "head & neck",
    summary: "Clear watery fluid filling the anterior and posterior chambers of the eye, in front of the lens.",
    function: "Nourishes the avascular lens and cornea and maintains intraocular pressure (normally about 10–21 mmHg). Pathway: ciliary processes → posterior chamber → through the pupil → anterior chamber → trabecular meshwork at the iridocorneal angle → scleral venous sinus (canal of Schlemm) → aqueous and episcleral veins; a smaller part leaves through the ciliary body (uveoscleral route)",
    clinical: "Imbalance between production and drainage raises the intraocular pressure (glaucoma), damaging the optic nerve head. Blood (hyphaema) or pus (hypopyon) can settle in the anterior chamber."
  },
  {
    key: "trabecular-meshwork", title: "Trabecular meshwork", match: ["trabecular meshwork"], kind: "organ", region: "head & neck",
    summary: "Sieve-like connective tissue in the iridocorneal angle, between the anterior chamber and the scleral venous sinus.",
    function: "The main (conventional) outflow pathway of aqueous humour and the main site of outflow resistance",
    clinical: "Increased resistance here causes primary open-angle glaucoma (painless, gradual peripheral field loss). In acute angle-closure glaucoma the iris blocks the meshwork: painful red eye, haloes, a mid-dilated unreactive pupil and vomiting, an emergency. Laser trabeculoplasty improves outflow; viewed clinically by gonioscopy."
  },
  {
    key: "scleral-venous-sinus", title: "Scleral venous sinus (canal of Schlemm)", match: ["schlemms canal", "schlemm", "scleral venous sinus"], kind: "organ", region: "head & neck",
    summary: "Circular endothelium-lined channel in the sclera at the corneoscleral junction, outside the trabecular meshwork.",
    function: "Collects aqueous humour from the trabecular meshwork and drains it via aqueous veins into the episcleral veins",
    clinical: "Maldevelopment of the angle and canal causes congenital glaucoma (enlarged cornea, 'buphthalmos'). Several minimally invasive glaucoma surgery devices are stents placed into the canal."
  },
  {
    key: "vitreous-humor", title: "Vitreous humour (vitreous body)", match: ["vitreous humor", "vitreous humour", "vitreous body"], kind: "organ", region: "head & neck",
    summary: "Transparent gel filling the vitreous chamber behind the lens, about four-fifths of the volume of the eye; mostly water with collagen fibrils and hyaluronan.",
    features: ["Firmly attached at the vitreous base near the ora serrata and around the optic disc"],
    function: "Transmits light, supports the retina against the choroid and maintains the shape of the eyeball",
    clinical: "With age it liquefies and separates from the retina (posterior vitreous detachment), causing floaters and flashes; traction can tear the retina, leading to detachment. Vitreous haemorrhage occurs in proliferative diabetic retinopathy. Vitrectomy removes it in retinal surgery."
  },
  {
    key: "retina", title: "Retina", match: ["retina"], kind: "organ", region: "head & neck",
    summary: "Inner light-sensitive coat of the eye: a neural layer (photoreceptors, bipolar cells, ganglion cells) on a retinal pigment epithelium, extending forward to the ora serrata.",
    features: ["Light passes through the inner layers to reach the rods and cones in the outer layer", "Ganglion cell axons converge on the optic disc to form the optic nerve", "Dual blood supply: central retinal artery (inner layers) and choroid (outer layers)"],
    function: "Converts light into nerve impulses and begins visual processing",
    clinical: "Retinal detachment (separation of the neural retina from the pigment epithelium, along the remnant of the optic vesicle cavity) causes a curtain-like field defect and needs urgent repair. Diabetic and hypertensive retinopathy are seen directly with an ophthalmoscope. Severe pre-eclampsia can cause retinal oedema, haemorrhages and serous detachment."
  },
  {
    key: "ora-serrata", title: "Ora serrata", match: ["ora serrata"], kind: "organ", region: "head & neck",
    summary: "Serrated (scalloped) anterior margin of the light-sensitive (optic) part of the retina, where it becomes the non-photosensitive ciliary part over the ciliary body.",
    function: "Marks the junction of the optic and non-visual retina and the posterior edge of the vitreous base",
    clinical: "Blunt trauma can tear the retina from the ora serrata (retinal dialysis). Peripheral retinal tears near the ora are found by examination with scleral indentation."
  },
  {
    key: "macula-lutea", title: "Macula lutea", match: ["macula lutea", "macula"], kind: "organ", region: "head & neck",
    summary: "Small oval yellowish area of the retina lateral (temporal) to the optic disc, coloured by the carotenoid pigments lutein and zeaxanthin; the fovea lies at its centre.",
    function: "Area of highest cone density, responsible for central, detailed and colour vision",
    clinical: "Age-related macular degeneration (dry with drusen and atrophy; wet with choroidal new vessels) is the commonest cause of severe central visual loss in older people. Diabetic macular oedema threatens reading vision. Macular sparing in occipital strokes reflects its large cortical representation."
  },
  {
    key: "fovea", title: "Fovea centralis", match: ["fovea"], kind: "organ", region: "head & neck",
    summary: "Central pit of the macula, about 2.5 disc diameters temporal to the optic disc, where the inner retinal layers are displaced aside so light falls directly on densely packed cones.",
    features: ["Contains only cones; no rods", "Foveal avascular zone: no retinal capillaries, supplied by the choroid"],
    function: "Point of sharpest visual acuity; the eyes move to place objects of interest on the fovea",
    clinical: "In central retinal artery occlusion (and in storage diseases such as Tay–Sachs) the surrounding retina turns pale while the thin fovea shows the red choroid: the 'cherry-red spot'. A macular hole at the fovea causes central distortion and loss."
  },
  {
    key: "optic-disc", title: "Optic disc", match: ["optic disc"], kind: "organ", region: "head & neck",
    summary: "Pale oval area (about 1.5 mm) nasal to the fovea where the ganglion cell axons leave the eye as the optic nerve and the central retinal vessels enter and leave.",
    features: ["Contains no photoreceptors, so it forms the physiological blind spot (about 15° temporal to fixation in the visual field)", "Has a central depression, the optic cup"],
    clinical: "Swelling of the disc with raised intracranial pressure is papilloedema (blurred margins, loss of venous pulsation); idiopathic intracranial hypertension typically affects young obese women. Enlargement of the cup (cup-to-disc ratio above about 0.6, or asymmetry) suggests glaucoma. Disc pallor indicates optic atrophy (e.g. after optic neuritis)."
  },
  {
    key: "conjunctiva", title: "Conjunctiva (bulbar and palpebral)", match: ["conjunctiva"], kind: "organ", region: "head & neck",
    summary: "Thin, transparent mucous membrane lining the inner surface of the eyelids (palpebral conjunctiva) and reflected at the superior and inferior fornices onto the front of the sclera (bulbar conjunctiva) up to the limbus, forming the conjunctival sac.",
    features: ["Palpebral conjunctiva is vascular and firmly attached to the tarsal plates", "Bulbar conjunctiva is loosely attached and does not cover the cornea", "Sensory supply: ophthalmic nerve (upper lid and most of the bulbar conjunctiva) and maxillary nerve (lower lid)"],
    function: "Lubricated surface allowing the lids to move over the eye; its goblet cells contribute mucus to the tear film",
    clinical: "Conjunctivitis (infective or allergic) gives a red, sticky or itchy eye with normal vision. Pallor of the palpebral conjunctiva suggests anaemia; yellowing over the sclera indicates jaundice. Subconjunctival haemorrhage is dramatic but harmless. Scarring of the upper palpebral conjunctiva in trachoma turns the lashes inward."
  },
];

export const KB_FEMALE = [
  ...UTERUS, ...TUBE_OVARY, ...LIGAMENTS, ...BREAST,
  ...URINARY,
  ...LIVER, ...BILIARY, ...GUT, ...SPLEEN,
  ...HEART, ...VESSELS,
  ...AIRWAY, ...SEGMENTS,
  ...EYE_MUSCLES, ...KNEE, ...SKELETON, ...CORD,
  ...BRAIN, ...EYE,
];
