// Study notes keyed by structure. Matching: the app lowercases a part's base name and picks the entry whose `match` strings
// contain the LONGEST substring found in the name (so "long head of biceps brachii" -> entry with match ["biceps brachii"]).
// Content is exam-note style (Gray's / Moore / Netter level). Root values follow Moore's Clinically Oriented Anatomy
// where sources differ.
export const KB = [
  // ───────────────────────────── MUSCLES: HEAD & NECK ─────────────────────────────
  {
    key: "frontalis", title: "Frontalis (frontal belly of occipitofrontalis)", match: ["frontalis"], kind: "muscle", region: "head & neck",
    summary: "Frontal belly of the occipitofrontalis; the forehead muscle that raises the eyebrows.",
    origin: "Epicranial aponeurosis (galea aponeurotica)",
    insertion: "Skin and superficial fascia of the eyebrows and forehead (blends with procerus, corrugator and orbicularis oculi); no bony insertion",
    action: "Elevates the eyebrows and wrinkles the forehead horizontally (surprise)",
    innervation: "Temporal branches of the facial nerve (CN VII)",
    blood: "Supraorbital and supratrochlear arteries; frontal branch of superficial temporal artery",
    clinical: "Forehead sparing: in an upper motor neuron (central) facial palsy the forehead still wrinkles because the upper face receives bilateral cortical input; in a lower motor neuron (Bell's) palsy the whole half of the face, forehead included, is paralysed.",
    facts: ["Frontalis and occipitalis are joined by the galea; together they form the occipitofrontalis (epicranius)."]
  },
  {
    key: "occipitalis", title: "Occipitalis (occipital belly of occipitofrontalis)", match: ["occipitalis"], kind: "muscle", region: "head & neck",
    summary: "Occipital belly of the occipitofrontalis at the back of the scalp.",
    origin: "Lateral two-thirds of the superior nuchal line of the occipital bone and mastoid part of the temporal bone",
    insertion: "Epicranial aponeurosis",
    action: "Retracts the scalp posteriorly (works with frontalis to move the scalp)",
    innervation: "Posterior auricular branch of the facial nerve (CN VII)",
    blood: "Occipital and posterior auricular arteries",
    clinical: "Paralysed together with the rest of the facial muscles in a lower motor neuron facial nerve lesion proximal to the posterior auricular branch."
  },
  {
    key: "temporoparietalis", title: "Temporoparietalis", match: ["temporoparietalis"], kind: "muscle", region: "head & neck",
    summary: "Thin, variable sheet of scalp muscle above the ear, between frontalis and the auricular muscles.",
    origin: "Temporal fascia above and in front of the auricle",
    insertion: "Lateral border of the epicranial aponeurosis",
    action: "Tightens the scalp; may raise the auricle",
    innervation: "Temporal branches of the facial nerve (CN VII)",
    blood: "Superficial temporal artery",
    clinical: "Its fascia (temporoparietal fascia) is a common vascularised flap in head and neck reconstruction."
  },
  {
    key: "corrugator-supercilii", title: "Corrugator supercilii", match: ["corrugator supercilii"], kind: "muscle", region: "head & neck",
    summary: "Small pyramidal muscle deep to the medial eyebrow that produces the frown.",
    origin: "Medial end of the superciliary arch of the frontal bone",
    insertion: "Skin of the middle of the eyebrow",
    action: "Draws the eyebrows medially and downward, producing vertical glabellar frown lines",
    innervation: "Temporal branches of the facial nerve (CN VII)",
    blood: "Supratrochlear and supraorbital arteries",
    clinical: "Main target of botulinum toxin for glabellar ('11') lines; supraorbital/supratrochlear nerves pass through or near it."
  },
  {
    key: "procerus", title: "Procerus", match: ["procerus"], kind: "muscle", region: "head & neck",
    summary: "Small muscle over the bridge of the nose, continuous with frontalis.",
    origin: "Fascia over the lower nasal bone and upper lateral nasal cartilage",
    insertion: "Skin of the lower forehead between the eyebrows",
    action: "Pulls the medial eyebrows down, producing transverse wrinkles over the nasal bridge",
    innervation: "Facial nerve (CN VII) — temporal/zygomatic (some texts: buccal) branches",
    blood: "Branches of the facial and ophthalmic (dorsal nasal) arteries",
    clinical: "Treated with corrugator in botulinum toxin injection for frown lines."
  },
  {
    key: "nasalis", title: "Nasalis", match: ["nasalis"], kind: "muscle", region: "head & neck",
    summary: "Muscle of the nose with a transverse (compressor) and an alar (dilator) part.",
    origin: "Maxilla: transverse part above the canine and lateral incisor; alar part above the lateral incisor",
    insertion: "Transverse part: aponeurosis across the nasal dorsum; alar part: alar cartilage",
    action: "Transverse part compresses the nostril; alar part flares (dilates) the nostril",
    innervation: "Buccal branches of the facial nerve (CN VII)",
    blood: "Branches of the facial artery (superior labial, lateral nasal)",
    clinical: "Nasal flaring (alar part) is a sign of respiratory distress, especially in infants."
  },
  {
    key: "depressor-septi-nasi", title: "Depressor septi nasi", match: ["depressor septi nasi"], kind: "muscle", region: "head & neck",
    summary: "Small muscle under the upper lip that pulls the nasal tip down.",
    origin: "Incisive fossa of the maxilla (above the central incisor)",
    insertion: "Mobile part of the nasal septum and ala",
    action: "Draws the septum and ala downward, narrowing the nostril; depresses the nasal tip on smiling",
    innervation: "Buccal branches of the facial nerve (CN VII)",
    blood: "Superior labial artery",
    clinical: "Sometimes divided in rhinoplasty to stop the nasal tip drooping when smiling."
  },
  {
    key: "orbicularis-oculi", title: "Orbicularis oculi", match: ["orbicularis oculi"], kind: "muscle", region: "head & neck",
    summary: "Sphincter of the eyelids with an orbital part (forceful closure) and a palpebral part (blinking); a small lacrimal part lies behind the lacrimal sac.",
    origin: "Orbital part: nasal part of frontal bone, frontal process of maxilla and medial palpebral ligament; palpebral part: medial palpebral ligament",
    insertion: "Orbital part: fibres encircle the orbit and return to the origin, blending with skin of the eyebrow and cheek; palpebral part: lateral palpebral raphe",
    action: "Orbital part: tight closure (squinting, screwing up the eyes); palpebral part: gentle closure (blinking, sleep)",
    innervation: "Temporal and zygomatic branches of the facial nerve (CN VII)",
    blood: "Branches of the facial, superficial temporal and ophthalmic arteries",
    clinical: "In a facial nerve palsy the eye cannot be closed (lagophthalmos) → corneal drying/ulceration. Corneal blink reflex: afferent CN V1, efferent CN VII (this muscle).",
    facts: ["A genuine (Duchenne) smile contracts the orbital part as well as zygomaticus major."]
  },
  {
    key: "orbicularis-oris", title: "Orbicularis oris", match: ["orbicularis oris"], kind: "muscle", region: "head & neck",
    summary: "Sphincter-like muscle of the lips, partly formed by fibres of buccinator and other muscles converging on the mouth.",
    origin: "Medial maxilla and mandible, deep surface of perioral skin, and fibres from buccinator and other facial muscles at the modiolus",
    insertion: "Skin and mucous membrane of the lips",
    action: "Closes and purses (protrudes) the lips; shapes lips in speech, whistling, kissing",
    innervation: "Buccal and marginal mandibular branches of the facial nerve (CN VII)",
    blood: "Superior and inferior labial arteries (from facial artery)",
    clinical: "Weakness causes drooling and food escaping the mouth on the affected side in facial palsy; cleft lip repair must re-unite this muscle."
  },
  {
    key: "buccinator", title: "Buccinator", match: ["buccinator"], kind: "muscle", region: "head & neck",
    summary: "Thin quadrilateral muscle of the cheek forming the lateral wall of the oral cavity.",
    origin: "Alveolar processes of maxilla and mandible opposite the molars, and the pterygomandibular raphe",
    insertion: "Angle of the mouth (modiolus), blending with orbicularis oris",
    action: "Presses the cheek against the molars to keep food between the teeth during chewing; expels air (blowing, playing a trumpet)",
    innervation: "Buccal branches of the facial nerve (CN VII) — the buccal nerve of CN V3 is sensory only",
    blood: "Buccal artery (from maxillary artery) and facial artery branches",
    clinical: "Pierced by the parotid duct opposite the upper second molar. Paralysis lets food collect in the vestibule (cheek pocket) in facial palsy.",
    facts: ["Name from Latin 'buccina', a trumpet."]
  },
  {
    key: "levator-labii-superioris-alaeque-nasi", title: "Levator labii superioris alaeque nasi", match: ["levator labii superioris alaeque nasi"], kind: "muscle", region: "head & neck",
    summary: "Slip of muscle along the side of the nose that lifts both the upper lip and the nostril.",
    origin: "Frontal process of the maxilla",
    insertion: "Alar cartilage/skin of the nose and the upper lip",
    action: "Elevates the upper lip and dilates the nostril (snarl)",
    innervation: "Zygomatic and buccal branches of the facial nerve (CN VII)",
    blood: "Facial artery (angular and superior labial branches)",
    clinical: "Contributes to the nasolabial fold; affected with other elevators in facial palsy (flattened nasolabial fold).",
    facts: ["Often cited as the muscle with the longest name."]
  },
  {
    key: "levator-labii-superioris", title: "Levator labii superioris", match: ["levator labii superioris"], kind: "muscle", region: "head & neck",
    summary: "Flat muscle from the lower orbital margin to the upper lip.",
    origin: "Infraorbital margin of the maxilla, above the infraorbital foramen",
    insertion: "Skin and muscle of the upper lip",
    action: "Elevates and everts the upper lip; deepens the nasolabial fold",
    innervation: "Zygomatic and buccal branches of the facial nerve (CN VII)",
    blood: "Facial and infraorbital arteries",
    clinical: "Covers the infraorbital foramen: the infraorbital nerve emerges between this muscle and levator anguli oris (site of infraorbital nerve block)."
  },
  {
    key: "levator-anguli-oris", title: "Levator anguli oris", match: ["levator anguli oris"], kind: "muscle", region: "head & neck",
    summary: "Deep elevator of the corner of the mouth.",
    origin: "Canine fossa of the maxilla, below the infraorbital foramen",
    insertion: "Angle of the mouth (modiolus)",
    action: "Elevates the angle of the mouth; deepens the nasolabial fold",
    innervation: "Zygomatic and buccal branches of the facial nerve (CN VII)",
    blood: "Facial and infraorbital arteries",
    clinical: "Infraorbital vessels and nerve lie between it and levator labii superioris."
  },
  {
    key: "zygomaticus-major", title: "Zygomaticus major", match: ["zygomaticus major"], kind: "muscle", region: "head & neck",
    summary: "The main 'smiling' muscle, running from the cheekbone to the corner of the mouth.",
    origin: "Lateral surface of the zygomatic bone",
    insertion: "Angle of the mouth (modiolus)",
    action: "Draws the angle of the mouth superolaterally (smiling, laughing)",
    innervation: "Zygomatic and buccal branches of the facial nerve (CN VII)",
    blood: "Superior labial branch of the facial artery",
    clinical: "Asymmetric smile is an early sign of facial nerve weakness; a bifid zygomaticus major is thought to cause cheek dimples."
  },
  {
    key: "zygomaticus-minor", title: "Zygomaticus minor", match: ["zygomaticus minor"], kind: "muscle", region: "head & neck",
    summary: "Small slip medial to zygomaticus major that lifts the upper lip.",
    origin: "Anterior (malar) surface of the zygomatic bone, medial to zygomaticus major",
    insertion: "Upper lip, lateral to levator labii superioris",
    action: "Elevates the upper lip; deepens the nasolabial fold (sneer, sad expression)",
    innervation: "Zygomatic and buccal branches of the facial nerve (CN VII)",
    blood: "Superior labial branch of the facial artery",
    clinical: "One of the lip elevators that produce the nasolabial fold — lost (fold flattened) in facial palsy."
  },
  {
    key: "risorius", title: "Risorius", match: ["risorius"], kind: "muscle", region: "head & neck",
    summary: "Thin, variable muscle pulling the corner of the mouth sideways.",
    origin: "Parotid fascia and fascia over the masseter",
    insertion: "Angle of the mouth (modiolus)",
    action: "Retracts the angle of the mouth laterally (grimace, grin)",
    innervation: "Buccal branches of the facial nerve (CN VII)",
    blood: "Superior labial branch of the facial artery",
    clinical: "Highly variable and frequently absent.",
    facts: ["Name from Latin 'risus', laughter."]
  },
  {
    key: "depressor-anguli-oris", title: "Depressor anguli oris", match: ["depressor anguli oris"], kind: "muscle", region: "head & neck",
    summary: "Triangular muscle below the corner of the mouth that produces a frown.",
    origin: "Oblique line of the mandible (below the canine/premolars)",
    insertion: "Angle of the mouth (modiolus)",
    action: "Draws the angle of the mouth downward and laterally (frowning, sadness)",
    innervation: "Marginal mandibular and buccal branches of the facial nerve (CN VII)",
    blood: "Inferior labial branch of the facial artery",
    clinical: "Injury to the marginal mandibular nerve (e.g. submandibular gland surgery) gives an asymmetric lower lip. Congenital hypoplasia causes asymmetric crying facies in infants."
  },
  {
    key: "depressor-labii-inferioris", title: "Depressor labii inferioris", match: ["depressor labii inferioris"], kind: "muscle", region: "head & neck",
    summary: "Quadrilateral muscle that pulls the lower lip down.",
    origin: "Oblique line of the mandible, between the symphysis and mental foramen",
    insertion: "Skin and mucosa of the lower lip",
    action: "Depresses the lower lip and draws it laterally",
    innervation: "Marginal mandibular branch of the facial nerve (CN VII)",
    blood: "Inferior labial branch of the facial artery",
    clinical: "Paralysed by marginal mandibular nerve injury → the lower lip on that side cannot be depressed (asymmetric smile)."
  },
  {
    key: "mentalis", title: "Mentalis", match: ["mentalis"], kind: "muscle", region: "head & neck",
    summary: "Small muscle of the chin; the 'pouting' muscle.",
    origin: "Incisive fossa of the mandible",
    insertion: "Skin of the chin",
    action: "Elevates and protrudes the lower lip; wrinkles the skin of the chin (pouting, doubt)",
    innervation: "Marginal mandibular branch of the facial nerve (CN VII)",
    blood: "Inferior labial and mental arteries",
    clinical: "Overactivity causes a 'pebbled' (peau d'orange) chin, treatable with botulinum toxin."
  },
  {
    key: "platysma", title: "Platysma", match: ["platysma"], kind: "muscle", region: "head & neck",
    summary: "Broad, thin sheet of muscle in the superficial fascia of the neck.",
    origin: "Superficial fascia over the upper parts of pectoralis major and deltoid",
    insertion: "Inferior border of the mandible, skin of the lower face and angle of the mouth",
    action: "Tenses the skin of the neck (grimace); depresses the mandible and angle of the mouth",
    innervation: "Cervical branch of the facial nerve (CN VII)",
    blood: "Submental (facial) and suprascapular arteries",
    clinical: "Must be reapproximated when closing neck incisions for a good scar. Platysmal bands become prominent with age ('turkey neck').",
    facts: ["A muscle of facial expression despite lying in the neck — it develops from the 2nd pharyngeal arch."]
  },
  {
    key: "temporalis", title: "Temporalis", match: ["temporalis"], kind: "muscle", region: "head & neck",
    summary: "Fan-shaped muscle of mastication filling the temporal fossa.",
    origin: "Floor of the temporal fossa and deep surface of the temporal fascia",
    insertion: "Tip and medial surface of the coronoid process and anterior border of the ramus of the mandible",
    action: "Elevates the mandible (closes jaw); posterior (horizontal) fibres retract the mandible",
    innervation: "Deep temporal nerves (CN V3)",
    blood: "Deep temporal arteries (maxillary artery); middle temporal artery (superficial temporal)",
    clinical: "Jaw claudication in giant cell (temporal) arteritis reflects ischaemia of the muscles of mastication. Depressed zygomatic arch fractures can impinge on temporalis/coronoid → limited mouth opening.",
    mnemonic: "Muscles of mastication (all CN V3): 'M-T-P-P' — Masseter, Temporalis, lateral and medial Pterygoids; only the lateral pterygoid opens the jaw."
  },
  {
    key: "masseter", title: "Masseter", match: ["masseter"], kind: "muscle", region: "head & neck",
    summary: "Powerful quadrilateral muscle of mastication on the side of the jaw, with superficial and deep parts.",
    origin: "Superficial part: zygomatic process of maxilla and anterior two-thirds of the inferior border of the zygomatic arch; deep part: posterior third and medial surface of the zygomatic arch",
    insertion: "Lateral surface of the ramus and angle of the mandible (superficial part lower; deep part upper ramus/coronoid process)",
    action: "Elevates the mandible (closes jaw); superficial part assists protrusion",
    innervation: "Masseteric nerve (CN V3)",
    blood: "Masseteric artery (maxillary artery); facial and transverse facial arteries",
    clinical: "Trismus ('lockjaw') in tetanus is due to masseter spasm. Masseteric hypertrophy occurs with bruxism.",
    facts: ["Easily palpated by clenching the teeth; the parotid duct runs across its anterior border."]
  },
  {
    key: "lateral-pterygoid", title: "Lateral pterygoid", match: ["lateral pterygoid"], kind: "muscle", region: "head & neck",
    summary: "Two-headed muscle in the infratemporal fossa; the only muscle of mastication that opens the mouth.",
    origin: "Upper (superior) head: infratemporal surface and crest of the greater wing of sphenoid; lower (inferior) head: lateral surface of the lateral pterygoid plate",
    insertion: "Pterygoid fovea on the neck of the mandible; upper head also into the TMJ capsule and articular disc",
    action: "Bilaterally: protrudes the mandible and depresses the chin (opens mouth, pulling condyle and disc forward onto the articular eminence). Unilaterally: moves the jaw to the opposite side (grinding)",
    innervation: "Nerve to lateral pterygoid (CN V3)",
    blood: "Pterygoid branches of the maxillary artery",
    clinical: "In a CN V3 lesion the jaw deviates TOWARD the side of the lesion on opening (unopposed contralateral lateral pterygoid). Spasm contributes to anterior TMJ dislocation."
  },
  {
    key: "medial-pterygoid", title: "Medial pterygoid", match: ["medial pterygoid"], kind: "muscle", region: "head & neck",
    summary: "Quadrangular muscle on the inner surface of the ramus, mirroring the masseter.",
    origin: "Deep head: medial surface of the lateral pterygoid plate and pyramidal process of palatine bone; superficial head: maxillary tuberosity and pyramidal process of palatine bone",
    insertion: "Medial surface of the ramus and angle of the mandible",
    action: "Elevates the mandible; bilaterally protrudes; unilaterally moves the jaw to the opposite side (grinding)",
    innervation: "Nerve to medial pterygoid (CN V3)",
    blood: "Pterygoid branches of the maxillary artery",
    clinical: "Forms a pterygomasseteric sling with the masseter. Needle trauma during inferior alveolar nerve block can cause trismus.",
    facts: ["The nerve to medial pterygoid also supplies tensor tympani and tensor veli palatini."]
  },
  {
    key: "digastric", title: "Digastric", match: ["digastric"], kind: "muscle", region: "head & neck",
    summary: "Suprahyoid muscle with two bellies joined by an intermediate tendon; the two bellies have different nerve supplies.",
    origin: "Anterior belly: digastric fossa of the mandible; posterior belly: mastoid notch of the temporal bone",
    insertion: "Intermediate tendon, held to the body and greater horn of the hyoid by a fibrous sling",
    action: "Depresses the mandible (opens mouth against resistance); elevates and steadies the hyoid during swallowing and speech",
    innervation: "Anterior belly: nerve to mylohyoid (CN V3); posterior belly: facial nerve (CN VII)",
    blood: "Anterior belly: submental artery; posterior belly: posterior auricular and occipital arteries",
    clinical: "Bellies outline the submandibular (digastric) triangle; anterior bellies bound the submental triangle. The posterior belly is a key surgical landmark in the upper neck (ICA, IJV, CN XI, XII lie deep to it).",
    facts: ["Different nerves reflect embryology: anterior belly from the 1st pharyngeal arch, posterior belly from the 2nd."]
  },
  {
    key: "mylohyoid", title: "Mylohyoid", match: ["mylohyoid"], kind: "muscle", region: "head & neck",
    summary: "Flat muscle forming the muscular floor of the mouth (oral diaphragm).",
    origin: "Mylohyoid line of the mandible",
    insertion: "Median fibrous raphe and body of the hyoid",
    action: "Supports and elevates the floor of the mouth and tongue (swallowing); elevates hyoid; depresses mandible when hyoid fixed",
    innervation: "Nerve to mylohyoid (branch of inferior alveolar nerve, CN V3)",
    blood: "Mylohyoid branch of the inferior alveolar artery; submental artery",
    clinical: "Dental infection from teeth whose roots lie below the mylohyoid line (2nd/3rd molars) spreads to the submandibular space; bilateral submandibular/sublingual cellulitis = Ludwig's angina (airway emergency)."
  },
  {
    key: "geniohyoid", title: "Geniohyoid", match: ["geniohyoid"], kind: "muscle", region: "head & neck",
    summary: "Narrow suprahyoid muscle lying just above (deep to) the mylohyoid.",
    origin: "Inferior mental spine (genial tubercle) of the mandible",
    insertion: "Anterior surface of the body of the hyoid",
    action: "Pulls the hyoid anterosuperiorly, widening the pharynx in swallowing; depresses mandible when hyoid fixed",
    innervation: "C1 fibres carried by the hypoglossal nerve (CN XII)",
    blood: "Sublingual branch of the lingual artery",
    clinical: "Its C1 supply 'hitch-hikes' on CN XII — the hypoglossal nerve itself supplies only tongue muscles."
  },
  {
    key: "stylohyoid", title: "Stylohyoid", match: ["stylohyoid"], kind: "muscle", region: "head & neck",
    summary: "Slender suprahyoid muscle along the upper border of the posterior belly of digastric.",
    origin: "Posterior border of the styloid process of the temporal bone",
    insertion: "Body of the hyoid at the junction with the greater horn (split around the digastric tendon)",
    action: "Elevates and retracts the hyoid, elongating the floor of the mouth during swallowing",
    innervation: "Facial nerve (CN VII) — stylohyoid branch",
    clinical: "A 2nd pharyngeal arch derivative (like the posterior belly of digastric and stapedius); an elongated, calcified stylohyoid ligament causes Eagle syndrome."
  },
  {
    key: "sternohyoid", title: "Sternohyoid", match: ["sternohyoid"], kind: "muscle", region: "head & neck",
    summary: "Superficial strap (infrahyoid) muscle of the anterior neck.",
    origin: "Posterior surface of the manubrium and medial end of the clavicle (and sternoclavicular ligament)",
    insertion: "Inferior border of the body of the hyoid",
    action: "Depresses the hyoid after swallowing",
    innervation: "Ansa cervicalis (C1–C3)",
    blood: "Superior thyroid artery",
    clinical: "Strap muscles are retracted (or divided high to preserve their nerve supply from below) in thyroidectomy."
  },
  {
    key: "sternothyroid", title: "Sternothyroid", match: ["sternothyroid"], kind: "muscle", region: "head & neck",
    summary: "Strap muscle deep to sternohyoid, running from the sternum to the thyroid cartilage.",
    origin: "Posterior surface of the manubrium (below sternohyoid) and 1st costal cartilage",
    insertion: "Oblique line of the thyroid cartilage",
    action: "Depresses the larynx and hyoid (via thyroid cartilage)",
    innervation: "Ansa cervicalis (C1–C3)",
    blood: "Superior thyroid artery",
    clinical: "Its attachment to the oblique line binds down the thyroid gland superiorly, so an enlarging goitre tends to extend downward (retrosternally)."
  },
  {
    key: "thyrohyoid", title: "Thyrohyoid", match: ["thyrohyoid"], kind: "muscle", region: "head & neck",
    summary: "Short strap muscle continuing sternothyroid upward from the thyroid cartilage to the hyoid.",
    origin: "Oblique line of the thyroid cartilage",
    insertion: "Inferior border of the body and greater horn of the hyoid",
    action: "Depresses the hyoid; elevates the larynx when the hyoid is fixed (swallowing, high notes)",
    innervation: "C1 fibres via the hypoglossal nerve (CN XII) — not via the ansa",
    blood: "Superior thyroid artery",
    clinical: "The internal laryngeal nerve and superior laryngeal artery pierce the thyrohyoid membrane deep to this muscle."
  },
  {
    key: "omohyoid", title: "Omohyoid", match: ["omohyoid"], kind: "muscle", region: "head & neck",
    summary: "Two-bellied strap muscle passing from the scapula to the hyoid, with an intermediate tendon tethered to the clavicle.",
    origin: "Inferior belly: superior border of the scapula near the suprascapular notch (and superior transverse scapular ligament)",
    insertion: "Superior belly: inferior border of the body of the hyoid (bellies joined by an intermediate tendon held to the clavicle by a fascial sling)",
    action: "Depresses, retracts and steadies the hyoid; may tense the carotid sheath",
    innervation: "Ansa cervicalis (C1–C3)",
    blood: "Superior thyroid and transverse cervical arteries",
    clinical: "Subdivides the neck triangles (superior belly separates carotid from muscular triangle; inferior belly separates occipital from supraclavicular triangle). Crosses the IJV at about the level of the cricoid — a landmark in neck dissection.",
    facts: ["'Omo' = shoulder (Greek ōmos)."]
  },
  {
    key: "sternocleidomastoid", title: "Sternocleidomastoid", match: ["sternocleidomastoid"], kind: "muscle", region: "head & neck",
    summary: "Prominent two-headed neck muscle that divides the neck into anterior and posterior triangles.",
    origin: "Sternal head: anterior surface of the manubrium; clavicular head: superior surface of the medial third of the clavicle",
    insertion: "Lateral surface of the mastoid process and lateral half of the superior nuchal line",
    action: "Unilateral: laterally flexes the neck to the same side and rotates the face to the opposite side. Bilateral: flexes the neck (and extends the head at the atlanto-occipital joint); accessory muscle of inspiration",
    innervation: "Spinal accessory nerve (CN XI) — motor; C2–C3 — proprioception",
    blood: "Occipital and superior thyroid arteries (sternocleidomastoid branches); suprascapular artery",
    clinical: "Congenital muscular torticollis: fibrosis/shortening tilts the head toward the affected side with the chin turned to the opposite side. Test CN XI by turning the head against resistance (the contralateral SCM is tested).",
    facts: ["The carotid pulse is felt at its anterior border; the IJV lies deep to it."]
  },
  {
    key: "scalenus-anterior", title: "Scalenus anterior (anterior scalene)", match: ["scalenus anterior"], kind: "muscle", region: "head & neck",
    summary: "Key landmark muscle of the root of the neck, running from cervical transverse processes to the first rib.",
    origin: "Anterior tubercles of the transverse processes of C3–C6",
    insertion: "Scalene tubercle on the inner border of the 1st rib",
    action: "Elevates the 1st rib (accessory inspiration); laterally flexes and rotates the neck",
    innervation: "Ventral rami of C4–C6",
    blood: "Ascending cervical artery (from inferior thyroid)",
    clinical: "The phrenic nerve runs down its anterior surface. Subclavian vein passes in front of it; subclavian artery and brachial plexus roots pass behind it through the scalene triangle (with scalenus medius) — compression causes thoracic outlet syndrome.",
    facts: ["Subclavian vein passes anterior, subclavian artery posterior to scalenus anterior — it divides the subclavian artery into three parts."]
  },
  {
    key: "scalenus-medius", title: "Scalenus medius (middle scalene)", match: ["scalenus medius"], kind: "muscle", region: "head & neck",
    summary: "Largest and longest scalene; forms the posterior boundary of the scalene triangle.",
    origin: "Posterior tubercles of the transverse processes of C2–C7 (often atlas too)",
    insertion: "Superior surface of the 1st rib, behind the groove for the subclavian artery",
    action: "Elevates the 1st rib; laterally flexes the neck",
    innervation: "Ventral rami of C3–C8",
    blood: "Ascending cervical artery",
    clinical: "Pierced by the dorsal scapular nerve and the C5–C6 roots of the long thoracic nerve; brachial plexus and subclavian artery pass between it and scalenus anterior."
  },
  {
    key: "scalenus-posterior", title: "Scalenus posterior (posterior scalene)", match: ["scalenus posterior"], kind: "muscle", region: "head & neck",
    summary: "Smallest and deepest scalene, the only one inserting on the 2nd rib.",
    origin: "Posterior tubercles of the transverse processes of C4–C6",
    insertion: "External border of the 2nd rib",
    action: "Elevates the 2nd rib; laterally flexes the neck",
    innervation: "Ventral rami of lower cervical nerves (C6–C8; Moore: C7–C8)",
    blood: "Ascending cervical and superficial cervical arteries",
    clinical: "Like the other scalenes it becomes an active accessory muscle of respiration in respiratory distress."
  },
  {
    key: "longus-colli", title: "Longus colli", match: ["longus colli"], kind: "muscle", region: "head & neck",
    summary: "Prevertebral neck flexor lying on the front of the cervical and upper thoracic vertebral bodies, in three parts (vertical, superior oblique, inferior oblique).",
    origin: "Vertical intermediate part: bodies of C5–T3; superior oblique part: anterior tubercles of transverse processes of C3–C5; inferior oblique part: bodies of T1–T3",
    insertion: "Vertical part: bodies of C2–C4; superior oblique part: anterior tubercle of the atlas; inferior oblique part: anterior tubercles of transverse processes of C5–C6",
    action: "Flexes the cervical spine; slight rotation and lateral flexion to the same side",
    innervation: "Ventral rami of C2–C6",
    blood: "Inferior thyroid, ascending cervical and vertebral arteries",
    clinical: "Acute calcific tendinitis of longus colli causes neck pain and painful swallowing (retropharyngeal swelling on imaging). Strengthened in 'deep neck flexor' rehabilitation for whiplash."
  },
  {
    key: "longus-capitis", title: "Longus capitis", match: ["longus capitis"], kind: "muscle", region: "head & neck",
    summary: "Prevertebral muscle in front of the upper cervical spine that flexes the head.",
    origin: "Anterior tubercles of the transverse processes of C3–C6",
    insertion: "Basilar part of the occipital bone",
    action: "Flexes the head at the atlanto-occipital joint and the upper neck",
    innervation: "Ventral rami of C1–C3",
    blood: "Ascending pharyngeal, ascending cervical and vertebral arteries",
    clinical: "Lies behind the retropharyngeal space; infection in the 'danger space' tracks down in front of the prevertebral muscles into the mediastinum."
  },
  {
    key: "rectus-capitis-anterior", title: "Rectus capitis anterior", match: ["rectus capitis anterior"], kind: "muscle", region: "head & neck",
    summary: "Short prevertebral muscle between the atlas and the skull base.",
    origin: "Anterior surface of the lateral mass of the atlas",
    insertion: "Basilar part of the occipital bone, anterior to the occipital condyle",
    action: "Flexes the head at the atlanto-occipital joint",
    innervation: "Branches from the loop between C1 and C2 ventral rami",
    blood: "Vertebral and ascending pharyngeal arteries",
    clinical: "A deep stabiliser of the craniovertebral junction."
  },
  {
    key: "rectus-capitis-lateralis", title: "Rectus capitis lateralis", match: ["rectus capitis lateralis"], kind: "muscle", region: "head & neck",
    summary: "Short muscle from the atlas transverse process to the jugular process of the occipital bone (homologue of a posterior intertransversarius).",
    origin: "Transverse process of the atlas",
    insertion: "Jugular process of the occipital bone",
    action: "Laterally flexes the head; stabilises the atlanto-occipital joint",
    innervation: "Branches from the loop between C1 and C2 ventral rami",
    blood: "Vertebral, occipital and ascending pharyngeal arteries",
    clinical: "Landmark in surgery of the jugular foramen: the IJV lies anterior to it."
  },
  {
    key: "rectus-capitis-posterior-major", title: "Rectus capitis posterior major", match: ["rectus capitis posterior major"], kind: "muscle", region: "back",
    summary: "Suboccipital muscle forming the superomedial boundary of the suboccipital triangle.",
    origin: "Spinous process of the axis (C2)",
    insertion: "Lateral part of the inferior nuchal line of the occipital bone",
    action: "Extends the head and rotates it to the same side",
    innervation: "Suboccipital nerve (dorsal ramus of C1)",
    blood: "Vertebral and occipital arteries",
    clinical: "Suboccipital triangle (this muscle + obliquus capitis superior and inferior) contains the vertebral artery and suboccipital nerve — relevant in posterior cervical surgery.",
    mnemonic: "Suboccipital triangle: 'Major, Superior, Inferior' — rectus capitis posterior major, obliquus capitis superior, obliquus capitis inferior."
  },
  {
    key: "rectus-capitis-posterior-minor", title: "Rectus capitis posterior minor", match: ["rectus capitis posterior minor"], kind: "muscle", region: "back",
    summary: "Small suboccipital muscle medial to rectus capitis posterior major.",
    origin: "Posterior tubercle of the atlas (C1)",
    insertion: "Medial part of the inferior nuchal line of the occipital bone",
    action: "Extends the head",
    innervation: "Suboccipital nerve (dorsal ramus of C1)",
    blood: "Vertebral and occipital arteries",
    clinical: "Connected to the spinal dura by a 'myodural bridge'; rich in muscle spindles, so important in head-position proprioception — implicated in cervicogenic headache."
  },
  {
    key: "obliquus-capitis-superior", title: "Obliquus capitis superior", match: ["obliquus capitis superior"], kind: "muscle", region: "back",
    summary: "Suboccipital muscle forming the lateral boundary of the suboccipital triangle.",
    origin: "Transverse process of the atlas (C1)",
    insertion: "Occipital bone between the superior and inferior nuchal lines (lateral part)",
    action: "Extends the head and laterally flexes it to the same side",
    innervation: "Suboccipital nerve (dorsal ramus of C1)",
    blood: "Vertebral and occipital arteries",
    clinical: "Postural/proprioceptive muscle of the craniovertebral junction."
  },
  {
    key: "obliquus-capitis-inferior", title: "Obliquus capitis inferior", match: ["obliquus capitis inferior"], kind: "muscle", region: "back",
    summary: "Suboccipital muscle forming the inferior boundary of the suboccipital triangle; despite its name it has no skull attachment.",
    origin: "Spinous process of the axis (C2)",
    insertion: "Transverse process of the atlas (C1)",
    action: "Rotates the atlas (and head) to the same side",
    innervation: "Suboccipital nerve (dorsal ramus of C1)",
    blood: "Vertebral and occipital arteries",
    clinical: "The greater occipital nerve (dorsal ramus C2) emerges below its lower border — a target for occipital nerve blocks in occipital neuralgia.",
    facts: ["The only 'capitis' muscle that does not attach to the skull."]
  },
  // ───────────────────────────── MUSCLES: BACK ─────────────────────────────
  {
    key: "trapezius", title: "Trapezius", match: ["trapezius"], kind: "muscle", region: "back",
    summary: "Large, flat, triangular superficial back muscle with descending (upper), transverse (middle) and ascending (lower) parts that move and stabilise the scapula.",
    origin: "Descending part: medial third of superior nuchal line, external occipital protuberance, ligamentum nuchae; transverse part: spinous processes of C7–T4 (approx.); ascending part: spinous processes of lower thoracic vertebrae (to T12)",
    insertion: "Descending: lateral third of the clavicle; transverse: acromion and spine of scapula; ascending: medial end (tubercle) of the spine of scapula",
    action: "Descending: elevates scapula (shrug); transverse: retracts scapula; ascending: depresses scapula. Descending + ascending together rotate the glenoid upward (needed for full abduction)",
    innervation: "Spinal accessory nerve (CN XI) — motor; C3–C4 — proprioception",
    blood: "Transverse cervical artery (superficial branch); also occipital and dorsal scapular arteries",
    clinical: "CN XI injury in the posterior triangle (e.g. lymph node biopsy) → drooping shoulder, weak shrug and difficulty abducting above 90°. Test: shrug against resistance.",
    facts: ["Left and right trapezius together form a trapezoid/diamond shape — hence the name."]
  },
  {
    key: "latissimus-dorsi", title: "Latissimus dorsi", match: ["latissimus dorsi"], kind: "muscle", region: "back",
    summary: "Broadest muscle of the back, sweeping from the trunk to the humerus; a powerful extensor/adductor of the arm (climbing, swimming).",
    origin: "Spinous processes of T7–T12, thoracolumbar fascia, iliac crest, inferior 3–4 ribs (often inferior angle of scapula)",
    insertion: "Floor of the intertubercular sulcus (bicipital groove) of the humerus",
    action: "Extends, adducts and medially rotates the humerus; raises the body toward the arms in climbing; assists forced expiration (coughing)",
    innervation: "Thoracodorsal nerve (C6–C8)",
    blood: "Thoracodorsal artery (from subscapular artery)",
    clinical: "Pedicled latissimus dorsi flap is used for breast reconstruction. The thoracodorsal nerve is at risk in axillary lymph node dissection.",
    mnemonic: "Intertubercular sulcus: 'a Lady between two Majors' — Latissimus dorsi in the floor, between Pectoralis major (lateral lip) and Teres major (medial lip)."
  },
  {
    key: "levator-scapulae", title: "Levator scapulae", match: ["levator scapulae"], kind: "muscle", region: "back",
    summary: "Strap-like muscle running from the upper cervical transverse processes to the superior angle of the scapula.",
    origin: "Posterior tubercles of the transverse processes of C1–C4",
    insertion: "Medial border of the scapula from the superior angle to the root of the spine",
    action: "Elevates the scapula and rotates the glenoid downward; laterally flexes the neck",
    innervation: "Dorsal scapular nerve (C5) and cervical nerves C3–C4",
    blood: "Dorsal scapular artery",
    clinical: "Common site of muscle tension and trigger points causing 'stiff neck'; it forms part of the floor of the posterior triangle."
  },
  {
    key: "rhomboid-major", title: "Rhomboid major", match: ["rhomboid major"], kind: "muscle", region: "back",
    summary: "Quadrilateral muscle between the thoracic spine and the medial border of the scapula, below rhomboid minor.",
    origin: "Spinous processes of T2–T5",
    insertion: "Medial border of the scapula from the root of the spine to the inferior angle",
    action: "Retracts the scapula and rotates the glenoid downward; fixes the scapula to the thoracic wall",
    innervation: "Dorsal scapular nerve (C4–C5)",
    blood: "Dorsal scapular artery",
    clinical: "Dorsal scapular nerve injury → scapula drifts laterally away from the midline (mild winging) on the affected side."
  },
  {
    key: "rhomboid-minor", title: "Rhomboid minor", match: ["rhomboid minor"], kind: "muscle", region: "back",
    summary: "Small rhomboid lying just above rhomboid major.",
    origin: "Ligamentum nuchae and spinous processes of C7–T1",
    insertion: "Medial border of the scapula at the level of the root of the spine",
    action: "Retracts the scapula and rotates the glenoid downward; fixes the scapula to the thoracic wall",
    innervation: "Dorsal scapular nerve (C4–C5)",
    blood: "Dorsal scapular artery",
    clinical: "Tested with rhomboid major by pressing the hands on the hips and pushing the elbows backward."
  },
  {
    key: "serratus-posterior-superior", title: "Serratus posterior superior", match: ["serratus posterior superior"], kind: "muscle", region: "back",
    summary: "Thin intermediate back muscle deep to the rhomboids.",
    origin: "Ligamentum nuchae and spinous processes of C7–T3",
    insertion: "Superior borders of ribs 2–4 (or 5), lateral to their angles",
    action: "Traditionally said to elevate the ribs (inspiration); may be mainly proprioceptive",
    innervation: "Intercostal nerves T2–T5",
    blood: "Posterior intercostal arteries",
    clinical: "Implicated as a source of myofascial upper back pain."
  },
  {
    key: "serratus-posterior-inferior", title: "Serratus posterior inferior", match: ["serratus posterior inferior"], kind: "muscle", region: "back",
    summary: "Thin intermediate back muscle deep to latissimus dorsi at the thoracolumbar junction.",
    origin: "Spinous processes of T11–L2 (via thoracolumbar fascia)",
    insertion: "Inferior borders of ribs 9–12 near their angles",
    action: "Traditionally said to depress the lower ribs (expiration); may be mainly proprioceptive",
    innervation: "Ventral rami of T9–T12 (lower intercostal and subcostal nerves)",
    blood: "Posterior intercostal, subcostal and lumbar arteries",
    clinical: "Lies superficial to the erector spinae in the lower thoracic region."
  },
  {
    key: "splenius-capitis", title: "Splenius capitis", match: ["splenius capitis"], kind: "muscle", region: "back",
    summary: "Bandage-like superficial deep back muscle covering the deep neck muscles; turns the head.",
    origin: "Inferior half of ligamentum nuchae and spinous processes of C7–T3/T4",
    insertion: "Mastoid process and lateral third of the superior nuchal line",
    action: "Bilateral: extends the head and neck. Unilateral: laterally flexes and rotates the face to the SAME side",
    innervation: "Dorsal rami of the middle cervical spinal nerves",
    blood: "Occipital artery (descending branch); deep cervical artery",
    clinical: "Commonly strained in whiplash; forms part of the floor of the posterior triangle.",
    facts: ["'Splenius' from Greek splēnion, a bandage."]
  },
  {
    key: "splenius-cervicis", title: "Splenius cervicis", match: ["splenius cervicis"], kind: "muscle", region: "back",
    summary: "Lower part of the splenius group, inserting on the upper cervical transverse processes.",
    origin: "Spinous processes of T3–T6",
    insertion: "Posterior tubercles of the transverse processes of C1–C3",
    action: "Bilateral: extends the neck. Unilateral: laterally flexes and rotates the neck to the same side",
    innervation: "Dorsal rami of the lower cervical spinal nerves",
    blood: "Occipital and deep cervical arteries",
    clinical: "Works with splenius capitis and contralateral sternocleidomastoid to turn the head."
  },
  {
    key: "iliocostalis", title: "Iliocostalis (lumborum, thoracis, cervicis)", match: ["iliocostalis"], kind: "muscle", region: "back",
    summary: "Lateral column of the erector spinae, attaching to the ribs; divided into lumborum, thoracis and cervicis parts.",
    origin: "Lumborum: common erector spinae tendon (posterior iliac crest, sacrum, sacroiliac ligaments, lumbar spinous processes); thoracis: angles of lower six ribs; cervicis: angles of ribs 3–6",
    insertion: "Lumborum: angles of lower 6–9 ribs; thoracis: angles of upper six ribs and transverse process of C7; cervicis: posterior tubercles of transverse processes of C4–C6",
    action: "Bilateral: extends the vertebral column and head. Unilateral: laterally flexes the vertebral column",
    innervation: "Dorsal rami of spinal nerves",
    blood: "Segmental arteries (posterior intercostal, subcostal, lumbar; deep cervical)",
    clinical: "Erector spinae spasm is a common cause of acute low back pain; the muscles are innervated segmentally by dorsal (not ventral) rami.",
    mnemonic: "Erector spinae from lateral to medial: 'I Love Spaghetti' — Iliocostalis, Longissimus, Spinalis."
  },
  {
    key: "longissimus", title: "Longissimus (thoracis, cervicis, capitis)", match: ["longissimus"], kind: "muscle", region: "back",
    summary: "Intermediate (largest) column of the erector spinae, attaching mainly to transverse processes; parts: thoracis, cervicis, capitis.",
    origin: "Thoracis: common erector spinae tendon and lumbar transverse processes; cervicis: transverse processes of T1–T5; capitis: transverse processes of T1–T5 and articular processes of C4–C7",
    insertion: "Thoracis: tips of transverse processes of all thoracic vertebrae and ribs between tubercles and angles; cervicis: transverse processes of C2–C6; capitis: posterior margin of the mastoid process",
    action: "Bilateral: extends the vertebral column and head. Unilateral: laterally flexes; longissimus capitis turns the face to the same side",
    innervation: "Dorsal rami of spinal nerves",
    blood: "Segmental arteries (posterior intercostal, lumbar; deep cervical, occipital)",
    clinical: "Paraspinal muscle bulk lateral to the spinous processes in the lumbar region is mostly longissimus and iliocostalis.",
    mnemonic: "Erector spinae lateral to medial: 'I Love Spaghetti'."
  },
  {
    key: "spinalis", title: "Spinalis (thoracis, cervicis)", match: ["spinalis thoracis", "spinalis cervicis"], kind: "muscle", region: "back",
    summary: "Most medial, smallest column of the erector spinae, running between spinous processes.",
    origin: "Thoracis: spinous processes of T11–L2; cervicis: ligamentum nuchae and spinous process of C7 (T1–T2)",
    insertion: "Thoracis: spinous processes of upper thoracic vertebrae (T1–T8, variable); cervicis: spinous process of the axis (C2–C4)",
    action: "Extends the vertebral column; unilateral lateral flexion",
    innervation: "Dorsal rami of spinal nerves",
    blood: "Segmental arteries (posterior intercostal, lumbar)",
    clinical: "Spinalis cervicis is often poorly developed or absent.",
    mnemonic: "Erector spinae lateral to medial: 'I Love Spaghetti'."
  },
  {
    key: "semispinalis", title: "Semispinalis (capitis, cervicis, thoracis)", match: ["semispinalis capitis", "semispinalis cervicis", "semispinalis thoracis"], kind: "muscle", region: "back",
    summary: "Superficial layer of the transversospinalis group, spanning about 4–6 segments; semispinalis capitis forms the large longitudinal bulge at the back of the neck.",
    origin: "Thoracis: transverse processes of T6–T10; cervicis: transverse processes of T1–T6; capitis: transverse processes of C7–T6/T7 and articular processes of C4–C6",
    insertion: "Thoracis: spinous processes of C6–T4; cervicis: spinous processes of C2–C5; capitis: occipital bone between the superior and inferior nuchal lines",
    action: "Extends the head and the cervical/thoracic spine; rotates them to the opposite side",
    innervation: "Dorsal rami of spinal nerves",
    blood: "Deep cervical, occipital and posterior intercostal arteries",
    clinical: "The greater occipital nerve pierces semispinalis capitis — a site of entrapment in occipital neuralgia."
  },
  {
    key: "multifidus", title: "Multifidus", match: ["multifidus"], kind: "muscle", region: "back",
    summary: "Middle layer of the transversospinalis group; thickest in the lumbar region where it is a key segmental stabiliser.",
    origin: "Sacrum, posterior superior iliac spine, erector spinae aponeurosis, mammillary processes of lumbar vertebrae, transverse processes of thoracic vertebrae and articular processes of C4–C7",
    insertion: "Spinous processes 2–4 segments above the origin",
    action: "Stabilises vertebrae during movement; extends, laterally flexes and rotates the column to the opposite side",
    innervation: "Dorsal rami (medial branches) of spinal nerves",
    blood: "Segmental arteries (posterior intercostal, lumbar, lateral sacral)",
    clinical: "Atrophy and fatty infiltration of lumbar multifidus are associated with chronic low back pain; it is a focus of core-stability rehabilitation."
  },
  {
    key: "rotatores", title: "Rotatores (cervical, thoracic, lumbar)", match: ["cervical rotator", "thoracic rotator", "lumbar rotator"], kind: "muscle", region: "back",
    summary: "Deepest layer of the transversospinalis group: small muscles spanning 1 (brevis) or 2 (longus) segments; best developed in the thoracic region.",
    origin: "Transverse processes of vertebrae",
    insertion: "Junction of lamina and transverse process, or spinous process, of the vertebra 1–2 segments above",
    action: "Stabilise vertebrae; assist extension and rotation to the opposite side; important proprioceptive role",
    innervation: "Dorsal rami of spinal nerves",
    blood: "Segmental arteries",
    clinical: "Very rich in muscle spindles — thought to act more as position sensors than prime movers."
  },
  {
    key: "interspinales", title: "Interspinales", match: ["interspinales"], kind: "muscle", region: "back",
    summary: "Short paired muscles between adjacent spinous processes, best developed in the cervical and lumbar regions (rudimentary or absent in much of the thoracic spine).",
    origin: "Superior surface of a spinous process",
    insertion: "Inferior surface of the spinous process of the vertebra above",
    action: "Extend and stabilise the vertebral column; proprioception",
    innervation: "Dorsal rami of spinal nerves",
    blood: "Segmental arteries",
    clinical: "Divided in midline posterior spinal approaches."
  },
  {
    key: "intertransversarii", title: "Intertransversarii", match: ["intertransversari"], kind: "muscle", region: "back",
    summary: "Small muscles between adjacent transverse processes: anterior and posterior groups in the neck, medial and lateral groups in the lumbar region.",
    origin: "Transverse process of a vertebra",
    insertion: "Transverse process of the adjacent vertebra above",
    action: "Assist lateral flexion and stabilise the vertebral column",
    innervation: "Cervical anterior and lumbar lateral intertransversarii: ventral rami; cervical posterior and lumbar medial intertransversarii: dorsal rami",
    blood: "Segmental arteries (vertebral, deep cervical, lumbar)",
    clinical: "Their mixed ventral/dorsal ramus supply reflects that some are not true 'deep back' (epaxial) muscles."
  },
  {
    key: "levatores-costarum", title: "Levatores costarum (breves and longi)", match: ["levatores costarum"], kind: "muscle", region: "back",
    summary: "Twelve pairs of small fan-shaped muscles from the transverse processes to the ribs below.",
    origin: "Tips of the transverse processes of C7–T11",
    insertion: "Breves: rib immediately below, between tubercle and angle; longi (lower ones): rib two levels below",
    action: "Elevate the ribs (minor role in inspiration); assist lateral flexion of the vertebral column",
    innervation: "Dorsal rami of C8–T11",
    blood: "Posterior intercostal arteries",
    clinical: "Although supplied by dorsal rami, they are often classed functionally with the thoracic wall muscles."
  },
  {
    key: "quadratus-lumborum", title: "Quadratus lumborum", match: ["quadratus lumborum"], kind: "muscle", region: "abdomen",
    summary: "Quadrilateral muscle of the posterior abdominal wall between the iliac crest and the 12th rib.",
    origin: "Iliolumbar ligament and internal lip of the iliac crest",
    insertion: "Medial half of the inferior border of the 12th rib and tips of the transverse processes of L1–L4",
    action: "Extends and laterally flexes the vertebral column; fixes the 12th rib during inspiration",
    innervation: "Ventral rami of T12–L4",
    blood: "Lumbar, subcostal and iliolumbar arteries",
    clinical: "Frequent source of mechanical low back pain; target of the quadratus lumborum regional anaesthetic block. Lies posterior to the kidney (with psoas and diaphragm)."
  },
  // ───────────────────────────── MUSCLES: THORAX ─────────────────────────────
  {
    key: "pectoralis-major", title: "Pectoralis major", match: ["pectoralis major"], kind: "muscle", region: "upper limb",
    summary: "Large fan-shaped chest muscle with clavicular, sternocostal and abdominal parts, forming the anterior axillary fold.",
    origin: "Clavicular head: anterior surface of medial half of clavicle; sternocostal head: anterior surface of sternum and superior six costal cartilages; abdominal part: aponeurosis of external oblique",
    insertion: "Lateral lip of the intertubercular sulcus of the humerus",
    action: "Adducts and medially rotates the humerus; clavicular head flexes the arm; sternocostal head extends the flexed arm",
    innervation: "Lateral (C5–C7) and medial (C8–T1) pectoral nerves; clavicular head C5–C6, sternocostal head C7–T1",
    blood: "Pectoral branch of the thoracoacromial artery; perforating branches of the internal thoracic artery",
    clinical: "Poland syndrome: congenital absence of the sternocostal head (± hand anomalies). Tendon rupture occurs in weightlifters (bench press).",
    mnemonic: "Lateral pectoral nerve is medial to medial pectoral nerve — named for the cords (lateral/medial) of origin, not position."
  },
  {
    key: "pectoralis-minor", title: "Pectoralis minor", match: ["pectoralis minor"], kind: "muscle", region: "upper limb",
    summary: "Triangular muscle deep to pectoralis major; an important landmark of the axilla.",
    origin: "Ribs 3–5 near their costal cartilages",
    insertion: "Medial border and superior surface of the coracoid process of the scapula",
    action: "Stabilises the scapula by drawing it anteroinferiorly against the thoracic wall; elevates ribs in forced inspiration",
    innervation: "Medial pectoral nerve (C8–T1)",
    blood: "Pectoral branch of the thoracoacromial artery; lateral thoracic artery",
    clinical: "Divides the axillary artery into three parts and defines axillary lymph node levels (I lateral, II deep, III medial) for breast cancer surgery. Tightness can compress the neurovascular bundle (pectoralis minor syndrome)."
  },
  {
    key: "subclavius", title: "Subclavius", match: ["subclavius"], kind: "muscle", region: "upper limb",
    summary: "Small muscle under the clavicle that anchors it to the first rib.",
    origin: "Junction of the 1st rib and its costal cartilage",
    insertion: "Inferior surface of the middle third of the clavicle",
    action: "Anchors and depresses the clavicle; stabilises the sternoclavicular joint",
    innervation: "Nerve to subclavius (C5–C6)",
    blood: "Clavicular branch of the thoracoacromial artery",
    clinical: "Acts as a cushion protecting the subclavian vessels and brachial plexus in clavicle fractures."
  },
  {
    key: "serratus-anterior", title: "Serratus anterior", match: ["serratus anterior"], kind: "muscle", region: "upper limb",
    summary: "Saw-toothed muscle on the lateral thoracic wall that holds the scapula against the chest ('boxer's muscle').",
    origin: "External surfaces of the lateral parts of ribs 1–8 (or 9)",
    insertion: "Anterior (costal) surface of the medial border of the scapula, from superior to inferior angle",
    action: "Protracts the scapula and holds it against the thoracic wall; lower fibres rotate the glenoid upward, allowing abduction above 90°",
    innervation: "Long thoracic nerve (C5–C7)",
    blood: "Lateral thoracic artery; thoracodorsal artery",
    clinical: "Long thoracic nerve injury (axillary surgery, carrying heavy loads on the shoulder) → medial winging of the scapula, best seen when pushing against a wall; cannot raise the arm above the head.",
    mnemonic: "Long thoracic nerve 'C5, 6, 7 — raise your wings to heaven' (lesion → winged scapula)."
  },
  {
    key: "external-intercostal", title: "External intercostal muscles", match: ["external intercostal"], kind: "muscle", region: "thorax",
    summary: "Outermost layer of the intercostal muscles; fibres run inferoanteriorly ('hands in pockets').",
    origin: "Inferior border of the rib above",
    insertion: "Superior border of the rib below (from rib tubercles to costochondral junctions; replaced anteriorly by the external intercostal membrane)",
    action: "Elevate the ribs during forced inspiration; maintain intercostal space rigidity",
    innervation: "Intercostal nerves (T1–T11)",
    blood: "Posterior and anterior intercostal arteries",
    clinical: "Same fibre direction as the external oblique of the abdomen.",
    mnemonic: "External = 'hands in your pockets' (down and forward)."
  },
  {
    key: "internal-intercostal", title: "Internal intercostal muscles", match: ["internal intercostal"], kind: "muscle", region: "thorax",
    summary: "Middle layer of the intercostal muscles; fibres run at right angles to the externals (inferoposteriorly).",
    origin: "Inferior border of the rib above (floor of costal groove)",
    insertion: "Superior border of the rib below (from sternum to rib angles; replaced posteriorly by the internal intercostal membrane)",
    action: "Interosseous part depresses ribs in forced expiration; interchondral part elevates ribs",
    innervation: "Intercostal nerves (T1–T11)",
    blood: "Posterior and anterior intercostal arteries",
    clinical: "The intercostal neurovascular bundle runs between the internal and innermost layers.",
    mnemonic: "Same direction as internal oblique of the abdomen."
  },
  {
    key: "innermost-intercostal", title: "Innermost intercostal muscles", match: ["innermost intercostal"], kind: "muscle", region: "thorax",
    summary: "Deepest, incomplete layer of the intercostals, best developed laterally; fibres run like the internal intercostals.",
    origin: "Internal surface of the rib above (near the costal groove)",
    insertion: "Internal surface of the rib below",
    action: "Probably act with the internal intercostals in forced expiration",
    innervation: "Intercostal nerves",
    blood: "Posterior and anterior intercostal arteries",
    clinical: "The intercostal vein, artery and nerve (VAN, superior to inferior) run in the costal groove between internal and innermost intercostals — insert chest drains and needles just above the upper border of the rib below.",
    mnemonic: "VAN — Vein, Artery, Nerve from top to bottom in the costal groove."
  },
  {
    key: "transversus-thoracis", title: "Transversus thoracis", match: ["transversus thoracis"], kind: "muscle", region: "thorax",
    summary: "Thin muscle on the inner surface of the anterior thoracic wall, continuous below with transversus abdominis.",
    origin: "Posterior surface of the lower sternum (body and xiphoid process) and lower costal cartilages",
    insertion: "Internal surfaces of costal cartilages 2–6",
    action: "Weakly depresses ribs and costal cartilages (expiration)",
    innervation: "Intercostal nerves (T2–T6)",
    blood: "Internal thoracic artery branches",
    clinical: "The internal thoracic vessels lie anterior to it (between it and the costal cartilages) — the artery commonly harvested for CABG."
  },
  {
    key: "diaphragm", title: "Diaphragm", match: ["diaphragm"], kind: "muscle", region: "thorax",
    summary: "Dome-shaped musculotendinous sheet separating the thoracic and abdominal cavities; the chief muscle of inspiration.",
    origin: "Sternal part: posterior xiphoid process; costal part: internal surfaces of lower six costal cartilages/ribs; lumbar part: medial and lateral arcuate ligaments and crura (right crus L1–L3, left crus L1–L2)",
    insertion: "Central tendon",
    action: "Contracts and descends to enlarge the vertical dimension of the thorax (inspiration); raises intra-abdominal pressure (straining, defecation, parturition)",
    innervation: "Phrenic nerves (C3–C5) — all motor and central sensory; peripheral sensory from lower intercostal nerves",
    blood: "Superior and inferior phrenic, pericardiacophrenic and musculophrenic arteries",
    clinical: "Diaphragmatic irritation refers pain to the shoulder tip (C4 dermatome). Phrenic nerve palsy → paradoxical elevation of the hemidiaphragm. Congenital Bochdalek hernia is posterolateral and usually left-sided.",
    mnemonic: "'C3, 4, 5 keeps the diaphragm alive.' Openings: 'I 8 10 Eggs At 12' — IVC T8, (o)Esophagus T10, Aorta T12.",
    facts: ["The vagal trunks go with the oesophagus (T10); the thoracic duct and azygos vein pass with the aorta (T12)."]
  },
  // ───────────────────────────── MUSCLES: ABDOMEN ─────────────────────────────
  {
    key: "rectus-abdominis", title: "Rectus abdominis", match: ["rectus abdominis"], kind: "muscle", region: "abdomen",
    summary: "Long strap-like anterior abdominal muscle enclosed in the rectus sheath, crossed by tendinous intersections ('six-pack').",
    origin: "Pubic symphysis and pubic crest",
    insertion: "Xiphoid process and costal cartilages 5–7",
    action: "Flexes the trunk (lumbar spine); compresses abdominal viscera; stabilises and tilts the pelvis",
    innervation: "Thoracoabdominal nerves (ventral rami T7–T11) and subcostal nerve (T12)",
    blood: "Superior epigastric (from internal thoracic) and inferior epigastric (from external iliac) arteries",
    clinical: "Rectus sheath haematoma (inferior epigastric artery rupture). Diastasis recti = separation along the linea alba. Basis of TRAM and DIEP flaps for breast reconstruction.",
    facts: ["Usually three tendinous intersections, adherent to the anterior layer of the rectus sheath."]
  },
  {
    key: "external-oblique", title: "External oblique", match: ["external oblique"], kind: "muscle", region: "abdomen",
    summary: "Largest and most superficial of the flat anterolateral abdominal muscles; fibres run inferomedially.",
    origin: "External surfaces of ribs 5–12",
    insertion: "Linea alba, pubic tubercle and anterior half of the iliac crest (its aponeurosis forms the inguinal ligament)",
    action: "Compresses and supports abdominal viscera; flexes the trunk; rotates the trunk to the opposite side; lateral flexion",
    innervation: "Thoracoabdominal nerves (T7–T11) and subcostal nerve (T12)",
    blood: "Lower posterior intercostal, subcostal, superior and inferior epigastric, deep circumflex iliac arteries",
    clinical: "The superficial inguinal ring is a triangular opening in its aponeurosis above the pubic tubercle; the inguinal ligament is its rolled lower border.",
    mnemonic: "Fibres run like 'hands in pockets' (same as external intercostals)."
  },
  {
    key: "internal-oblique", title: "Internal oblique", match: ["internal oblique"], kind: "muscle", region: "abdomen",
    summary: "Middle flat abdominal muscle, fibres running superomedially (at right angles to external oblique).",
    origin: "Thoracolumbar fascia, anterior two-thirds of the iliac crest and lateral half of the inguinal ligament (connective tissue deep to it)",
    insertion: "Inferior borders of ribs 10–12, linea alba (via rectus sheath) and pecten pubis via the conjoint tendon",
    action: "Compresses and supports abdominal viscera; flexes the trunk; rotates the trunk to the SAME side",
    innervation: "Thoracoabdominal nerves (T7–T11), subcostal nerve (T12) and first lumbar nerve (iliohypogastric and ilioinguinal, L1)",
    blood: "Lower posterior intercostal, subcostal, superior and inferior epigastric, deep circumflex iliac arteries",
    clinical: "Its lowest fibres give rise to the cremaster muscle in the spermatic cord (cremasteric reflex, L1–L2). Forms the roof of the inguinal canal (with transversus) and the conjoint tendon reinforcing the posterior wall."
  },
  {
    key: "transversus-abdominis", title: "Transversus abdominis", match: ["transversus abdominis"], kind: "muscle", region: "abdomen",
    summary: "Innermost flat abdominal muscle with horizontal fibres — a key 'core' stabiliser.",
    origin: "Internal surfaces of costal cartilages 7–12, thoracolumbar fascia, iliac crest and lateral third of the inguinal ligament (connective tissue deep to it)",
    insertion: "Linea alba (with aponeurosis of internal oblique), pubic crest and pecten pubis via the conjoint tendon",
    action: "Compresses and supports the abdominal viscera; stabilises the lumbar spine",
    innervation: "Thoracoabdominal nerves (T7–T11), subcostal nerve (T12) and first lumbar nerve (L1)",
    blood: "Lower posterior intercostal, subcostal, deep circumflex iliac and epigastric arteries",
    clinical: "Transversus abdominis plane (TAP) block: local anaesthetic between internal oblique and transversus abdominis, where the anterior abdominal wall nerves run."
  },
  {
    key: "pyramidalis", title: "Pyramidalis", match: ["pyramidalis"], kind: "muscle", region: "abdomen",
    summary: "Small triangular muscle in front of the lower rectus abdominis; absent in about 20% of people.",
    origin: "Body of the pubis / pubic crest, anterior to rectus abdominis",
    insertion: "Linea alba (below the umbilicus)",
    action: "Tenses the linea alba",
    innervation: "Subcostal nerve (T12) (often also iliohypogastric, L1)",
    blood: "Inferior epigastric artery",
    clinical: "A useful midline landmark for finding the linea alba in Pfannenstiel/lower midline incisions."
  },
  // ───────────────────────────── MUSCLES: POSTERIOR ABDOMINAL WALL & PELVIS ─────────────────────────────
  {
    key: "psoas-major", title: "Psoas major", match: ["psoas major"], kind: "muscle", region: "abdomen",
    summary: "Long fusiform muscle beside the lumbar spine; with iliacus it forms iliopsoas, the strongest hip flexor.",
    origin: "Sides of the bodies of T12–L5 and the intervening discs; transverse processes of all lumbar vertebrae",
    insertion: "Lesser trochanter of the femur (with iliacus)",
    action: "Flexes the thigh at the hip; acting from below flexes the trunk (sit-up from supine); unilateral contraction laterally flexes the lumbar spine",
    innervation: "Ventral rami of L1–L3",
    blood: "Lumbar arteries; iliolumbar artery",
    clinical: "Psoas sign (pain on hip extension) in retrocaecal appendicitis. Psoas abscess (e.g. TB of the spine) can track down to the groin under the inguinal ligament. The lumbar plexus forms within the muscle.",
    facts: ["Psoas minor (absent in ~40%) lies on its anterior surface."]
  },
  {
    key: "iliacus", title: "Iliacus", match: ["iliacus"], kind: "muscle", region: "pelvis",
    summary: "Triangular muscle filling the iliac fossa; joins psoas major as iliopsoas.",
    origin: "Superior two-thirds of the iliac fossa, ala of the sacrum and anterior sacroiliac ligaments",
    insertion: "Lesser trochanter and shaft just below it, and the tendon of psoas major",
    action: "Flexes the thigh at the hip and stabilises the hip joint (with psoas)",
    innervation: "Femoral nerve (L2–L4)",
    blood: "Iliac branch of the iliolumbar artery; deep circumflex iliac artery",
    clinical: "Iliacus haematoma (e.g. on anticoagulants or in haemophilia) can compress the femoral nerve → quadriceps weakness and anterior thigh numbness."
  },
  {
    key: "obturator-internus", title: "Obturator internus", match: ["obturator internus"], kind: "muscle", region: "pelvis",
    summary: "Fan-shaped muscle on the lateral pelvic wall whose tendon leaves via the lesser sciatic foramen to reach the femur.",
    origin: "Pelvic surface of the obturator membrane and surrounding bone (ilium and ischium)",
    insertion: "Medial surface of the greater trochanter (via tendon blending with the gemelli)",
    action: "Laterally rotates the extended thigh; abducts the flexed thigh; steadies the femoral head in the acetabulum",
    innervation: "Nerve to obturator internus (L5–S2)",
    blood: "Internal pudendal and obturator arteries",
    clinical: "Its fascia forms the pudendal (Alcock's) canal, containing the pudendal nerve and internal pudendal vessels, and gives origin to the tendinous arch of levator ani."
  },
  {
    key: "obturator-externus", title: "Obturator externus", match: ["obturator externus"], kind: "muscle", region: "lower limb",
    summary: "Flat muscle covering the outer surface of the obturator membrane; usually grouped with the medial (adductor) thigh muscles.",
    origin: "Margins of the obturator foramen and external surface of the obturator membrane",
    insertion: "Trochanteric fossa of the femur",
    action: "Laterally rotates the thigh; steadies the femoral head in the acetabulum",
    innervation: "Obturator nerve (L3–L4)",
    blood: "Obturator and medial circumflex femoral arteries",
    clinical: "Only adductor-compartment muscle that is not an adductor; obturator hernias pass above it."
  },
  {
    key: "piriformis", title: "Piriformis", match: ["piriformis"], kind: "muscle", region: "lower limb",
    summary: "Pear-shaped muscle that leaves the pelvis through the greater sciatic foramen — the key landmark of the gluteal region.",
    origin: "Anterior surface of the sacrum (S2–S4), superior margin of the greater sciatic notch and sacrotuberous ligament",
    insertion: "Superior border of the greater trochanter",
    action: "Laterally rotates the extended thigh; abducts the flexed thigh; steadies the femoral head",
    innervation: "Nerve to piriformis (ventral rami S1–S2)",
    blood: "Superior and inferior gluteal arteries; lateral sacral arteries",
    clinical: "Superior gluteal vessels and nerve exit ABOVE it; inferior gluteal vessels/nerve, sciatic nerve, pudendal nerve and others exit BELOW. The sciatic nerve (or its common fibular division) may pierce it → piriformis syndrome (buttock pain and sciatica)."
  },
  {
    key: "gemellus-superior", title: "Gemellus superior", match: ["gemellus superior"], kind: "muscle", region: "lower limb",
    summary: "Small triangular muscle above the obturator internus tendon.",
    origin: "Ischial spine",
    insertion: "Medial surface of the greater trochanter (via the obturator internus tendon)",
    action: "Laterally rotates the extended thigh; abducts the flexed thigh; steadies the femoral head",
    innervation: "Nerve to obturator internus (L5–S2)",
    blood: "Inferior gluteal and internal pudendal arteries",
    clinical: "The gemelli and obturator internus form the 'triceps coxae'; they are divided in the posterior approach to the hip.",
    mnemonic: "Superior gemellus gets the nerve of the muscle above-and-inside (obturator internus); inferior gemellus gets the nerve of the muscle below (quadratus femoris)."
  },
  {
    key: "gemellus-inferior", title: "Gemellus inferior", match: ["gemellus inferior"], kind: "muscle", region: "lower limb",
    summary: "Small triangular muscle below the obturator internus tendon.",
    origin: "Ischial tuberosity (upper part)",
    insertion: "Medial surface of the greater trochanter (via the obturator internus tendon)",
    action: "Laterally rotates the extended thigh; abducts the flexed thigh; steadies the femoral head",
    innervation: "Nerve to quadratus femoris (L4–S1)",
    blood: "Medial circumflex femoral artery",
    clinical: "Part of the short lateral rotator group protected/repaired in posterior hip arthroplasty to reduce dislocation risk."
  },
  {
    key: "quadratus-femoris", title: "Quadratus femoris", match: ["quadratus femoris"], kind: "muscle", region: "lower limb",
    summary: "Short, flat, rectangular lateral rotator of the hip, below the gemellus inferior.",
    origin: "Lateral border of the ischial tuberosity",
    insertion: "Quadrate tubercle on the intertrochanteric crest of the femur",
    action: "Laterally rotates the thigh; steadies the femoral head",
    innervation: "Nerve to quadratus femoris (L4–S1)",
    blood: "Medial circumflex femoral artery",
    clinical: "The medial circumflex femoral artery (main supply to the femoral head) runs near its upper border — relevant in hip surgery."
  },
  {
    key: "gluteus-maximus", title: "Gluteus maximus", match: ["gluteus maximus"], kind: "muscle", region: "lower limb",
    summary: "Largest and most superficial gluteal muscle; powerful hip extensor used in climbing stairs and rising from sitting.",
    origin: "Ilium posterior to the posterior gluteal line, dorsal surface of sacrum and coccyx, sacrotuberous ligament, thoracolumbar fascia",
    insertion: "Most fibres into the iliotibial tract (→ lateral tibial condyle); deep inferior fibres into the gluteal tuberosity of the femur",
    action: "Extends the thigh (especially from the flexed position) and laterally rotates it; steadies the thigh and helps extend the knee via the iliotibial tract",
    innervation: "Inferior gluteal nerve (L5–S2)",
    blood: "Inferior and superior gluteal arteries",
    clinical: "Intramuscular injections go in the superolateral quadrant of the buttock to avoid the sciatic nerve. Weakness → difficulty climbing stairs or rising from a chair; backward-lurching gait.",
    facts: ["Not needed for normal level walking — mainly recruited for forceful extension."]
  },
  {
    key: "gluteus-medius", title: "Gluteus medius", match: ["gluteus medius"], kind: "muscle", region: "lower limb",
    summary: "Fan-shaped hip abductor that keeps the pelvis level during walking.",
    origin: "External surface of the ilium between the anterior and posterior gluteal lines",
    insertion: "Lateral surface of the greater trochanter",
    action: "Abducts and medially rotates the thigh; keeps the pelvis level when the opposite foot is off the ground",
    innervation: "Superior gluteal nerve (L4–S1)",
    blood: "Superior gluteal artery",
    clinical: "Positive Trendelenburg sign: with gluteus medius/minimus weakness (e.g. superior gluteal nerve injury) the pelvis DROPS on the unsupported (opposite) side when standing on the affected leg; waddling/Trendelenburg gait."
  },
  {
    key: "gluteus-minimus", title: "Gluteus minimus", match: ["gluteus minimus"], kind: "muscle", region: "lower limb",
    summary: "Smallest and deepest gluteal muscle; acts with gluteus medius.",
    origin: "External surface of the ilium between the anterior and inferior gluteal lines",
    insertion: "Anterior surface of the greater trochanter",
    action: "Abducts and medially rotates the thigh; keeps the pelvis level in single-limb stance",
    innervation: "Superior gluteal nerve (L4–S1)",
    blood: "Superior gluteal artery",
    clinical: "Weakness contributes to a positive Trendelenburg sign; tendinopathy is part of greater trochanteric pain syndrome."
  },
  {
    key: "tensor-fasciae-latae", title: "Tensor fasciae latae", match: ["tensor fasciae latae"], kind: "muscle", region: "lower limb",
    summary: "Small muscle at the front of the hip enclosed in fascia lata, inserting into the iliotibial tract.",
    origin: "Anterior superior iliac spine and anterior part of the iliac crest",
    insertion: "Iliotibial tract → lateral condyle of tibia (Gerdy's tubercle)",
    action: "Abducts, medially rotates and flexes the thigh; tenses the fascia lata and helps keep the knee extended",
    innervation: "Superior gluteal nerve (L4–S1)",
    blood: "Ascending branch of the lateral circumflex femoral artery; superior gluteal artery",
    clinical: "Overuse is linked to iliotibial band syndrome; TFL flap is used in reconstructive surgery."
  },
  // ───────────────────────────── MUSCLES: PELVIC FLOOR & PERINEUM ─────────────────────────────
  {
    key: "pubococcygeus", title: "Pubococcygeus (levator ani)", match: ["pubococcygeus"], kind: "muscle", region: "pelvis",
    summary: "Main part of the levator ani, running from the pubis back to the coccyx; supports the pelvic viscera.",
    origin: "Posterior surface of the body of the pubis and anterior part of the tendinous arch of levator ani",
    insertion: "Anococcygeal body (ligament) and coccyx; medial fibres into the perineal body (levator prostatae in males)",
    action: "Supports pelvic viscera and resists rises in intra-abdominal pressure; assists urinary and faecal continence",
    innervation: "Nerve to levator ani (S4) and branches of the pudendal nerve (inferior rectal/perineal; S2–S4)",
    blood: "Inferior gluteal, internal pudendal and inferior vesical arteries",
    clinical: "Strengthened by pelvic floor (Kegel) exercises, e.g. for stress incontinence after prostatectomy or childbirth."
  },
  {
    key: "puborectalis", title: "Puborectalis (levator ani)", match: ["puborectalis"], kind: "muscle", region: "pelvis",
    summary: "U-shaped sling of the levator ani looping around the anorectal junction; essential for faecal continence.",
    origin: "Posterior surface of the body of the pubis on either side of the symphysis",
    insertion: "Forms a sling behind the anorectal junction, continuous with the muscle of the opposite side",
    action: "Maintains the anorectal angle (~90°) for faecal continence; relaxes during defecation to straighten the angle",
    innervation: "Nerve to levator ani (S3–S4) and inferior rectal branch of the pudendal nerve",
    blood: "Inferior rectal and inferior gluteal arteries",
    clinical: "Paradoxical contraction (dyssynergic defecation/anismus) causes obstructed defecation. Palpable posteriorly on digital rectal examination as the anorectal ring."
  },
  {
    key: "iliococcygeus", title: "Iliococcygeus (levator ani)", match: ["iliococcygeus"], kind: "muscle", region: "pelvis",
    summary: "Posterolateral, thinnest part of the levator ani.",
    origin: "Ischial spine and posterior part of the tendinous arch of levator ani",
    insertion: "Anococcygeal body and coccyx",
    action: "Supports pelvic viscera; raises the pelvic floor",
    innervation: "Nerve to levator ani (S3–S4) and pudendal nerve branches",
    blood: "Inferior gluteal and internal pudendal arteries",
    clinical: "Often poorly muscularised (aponeurotic) in adults; weakness contributes to pelvic organ prolapse.",
    facts: ["Levator ani = puborectalis + pubococcygeus + iliococcygeus; with coccygeus it forms the pelvic diaphragm."]
  },
  {
    key: "coccygeus", title: "Coccygeus (ischiococcygeus)", match: ["coccygeus"], kind: "muscle", region: "pelvis",
    summary: "Posterior part of the pelvic diaphragm, lying on the deep surface of the sacrospinous ligament.",
    origin: "Ischial spine",
    insertion: "Inferior end of the sacrum and lateral margins of the coccyx",
    action: "Supports pelvic viscera; flexes (pulls forward) the coccyx",
    innervation: "Branches of the ventral rami of S4–S5 (S3–S4 in some texts)",
    blood: "Inferior gluteal artery",
    clinical: "Largely fibrous in humans — the sacrospinous ligament is thought to be its degenerated posterior part."
  },
  {
    key: "external-anal-sphincter", title: "External anal sphincter", match: ["external anal sphincter"], kind: "muscle", region: "pelvis",
    summary: "Voluntary skeletal-muscle sphincter of the anal canal with subcutaneous, superficial and deep parts.",
    origin: "Perineal body anteriorly (subcutaneous part encircles the anus; superficial part from perineal body)",
    insertion: "Anococcygeal body posteriorly (superficial part); deep part blends with puborectalis",
    action: "Voluntarily closes the anal canal (faecal continence)",
    innervation: "Inferior rectal (anal) nerve of the pudendal nerve (S2–S4); perineal branch of S4",
    blood: "Inferior rectal artery (internal pudendal)",
    clinical: "Obstetric anal sphincter injury → faecal incontinence. Anal wink reflex tests S2–S4. Internal sphincter (involuntary smooth muscle) is a separate structure."
  },
  // ───────────────────────────── MUSCLES: SHOULDER & ARM ─────────────────────────────
  {
    key: "deltoid", title: "Deltoid", match: ["deltoid"], kind: "muscle", region: "upper limb",
    summary: "Thick triangular muscle forming the rounded contour of the shoulder, with clavicular (anterior), acromial (middle) and spinal (posterior) parts.",
    origin: "Clavicular part: lateral third of the clavicle; acromial part: acromion; spinal part: spine of the scapula",
    insertion: "Deltoid tuberosity of the humerus",
    action: "Clavicular part: flexes and medially rotates the arm; acromial part: abducts the arm beyond the first ~15° (after supraspinatus initiates); spinal part: extends and laterally rotates the arm",
    innervation: "Axillary nerve (C5–C6)",
    blood: "Posterior circumflex humeral artery; deltoid branch of the thoracoacromial artery",
    clinical: "Axillary nerve injury (surgical neck fracture, anterior shoulder dislocation) → flattened shoulder, weak abduction and numbness over the lower deltoid ('regimental badge' area). Common IM injection site — inject into the upper/middle part to avoid the axillary nerve.",
    mnemonic: "Named after the Greek letter delta (Δ)."
  },
  {
    key: "supraspinatus", title: "Supraspinatus", match: ["supraspinatus"], kind: "muscle", region: "upper limb",
    summary: "Rotator cuff muscle in the supraspinous fossa; initiates abduction.",
    origin: "Supraspinous fossa of the scapula",
    insertion: "Superior facet of the greater tubercle of the humerus",
    action: "Initiates abduction (first ~15°) and assists deltoid; holds the humeral head in the glenoid (rotator cuff)",
    innervation: "Suprascapular nerve (C4–C6)",
    blood: "Suprascapular artery",
    clinical: "Most commonly torn/impinged rotator cuff tendon (passes under the coracoacromial arch) → painful arc (≈60–120°) and weakness on the empty-can (Jobe) test.",
    mnemonic: "Rotator cuff = SITS: Supraspinatus, Infraspinatus, Teres minor, Subscapularis (S-I-T on greater tubercle in that order top to bottom; S on lesser tubercle)."
  },
  {
    key: "infraspinatus", title: "Infraspinatus", match: ["infraspinatus"], kind: "muscle", region: "upper limb",
    summary: "Thick triangular rotator cuff muscle filling the infraspinous fossa; main lateral rotator of the arm.",
    origin: "Infraspinous fossa of the scapula",
    insertion: "Middle facet of the greater tubercle of the humerus",
    action: "Laterally rotates the arm; stabilises the glenohumeral joint (rotator cuff)",
    innervation: "Suprascapular nerve (C5–C6)",
    blood: "Suprascapular and circumflex scapular arteries",
    clinical: "Suprascapular nerve compression at the spinoglenoid notch (e.g. ganglion cyst, volleyball players) causes isolated infraspinatus wasting and weak external rotation.",
    mnemonic: "Rotator cuff = SITS."
  },
  {
    key: "teres-minor", title: "Teres minor", match: ["teres minor"], kind: "muscle", region: "upper limb",
    summary: "Narrow rotator cuff muscle below infraspinatus.",
    origin: "Middle part of the lateral border of the scapula",
    insertion: "Inferior facet of the greater tubercle of the humerus",
    action: "Laterally rotates the arm; stabilises the glenohumeral joint (rotator cuff)",
    innervation: "Axillary nerve (C5–C6)",
    blood: "Circumflex scapular artery",
    clinical: "Forms the upper border of the quadrangular space (axillary nerve and posterior circumflex humeral vessels) and triangular space.",
    mnemonic: "Teres minor is IN the cuff; teres major is NOT."
  },
  {
    key: "teres-major", title: "Teres major", match: ["teres major"], kind: "muscle", region: "upper limb",
    summary: "Thick, rounded muscle from the inferior angle of the scapula to the humerus; NOT part of the rotator cuff.",
    origin: "Posterior surface of the inferior angle of the scapula",
    insertion: "Medial lip of the intertubercular sulcus of the humerus",
    action: "Adducts and medially rotates the arm; extends the arm",
    innervation: "Lower subscapular nerve (C5–C6)",
    blood: "Circumflex scapular and thoracodorsal arteries",
    clinical: "Forms the lower border of the quadrangular and triangular spaces; its lower border marks where the axillary artery becomes the brachial artery."
  },
  {
    key: "subscapularis", title: "Subscapularis", match: ["subscapularis"], kind: "muscle", region: "upper limb",
    summary: "Largest rotator cuff muscle, on the anterior (costal) surface of the scapula.",
    origin: "Subscapular fossa",
    insertion: "Lesser tubercle of the humerus",
    action: "Medially rotates and adducts the arm; stabilises the glenohumeral joint (rotator cuff)",
    innervation: "Upper and lower subscapular nerves (C5–C6)",
    blood: "Subscapular artery",
    clinical: "Tested with the lift-off (Gerber) and belly-press tests; its tendon reinforces the front of the joint against anterior dislocation.",
    mnemonic: "Rotator cuff = SITS — the only one on the lesser tubercle."
  },
  {
    key: "coracobrachialis", title: "Coracobrachialis", match: ["coracobrachialis"], kind: "muscle", region: "upper limb",
    summary: "Slender anterior-arm muscle from the coracoid process to the mid-humerus, pierced by the musculocutaneous nerve.",
    origin: "Tip of the coracoid process of the scapula",
    insertion: "Middle third of the medial surface of the humerus",
    action: "Flexes and adducts the arm; resists downward dislocation of the shoulder",
    innervation: "Musculocutaneous nerve (C5–C7)",
    blood: "Muscular branches of the brachial artery",
    clinical: "The musculocutaneous nerve pierces it — a landmark; the brachial artery can be compressed against the humerus just medial to it."
  },
  {
    key: "biceps-brachii", title: "Biceps brachii", match: ["biceps brachii"], kind: "muscle", region: "upper limb",
    summary: "Two-headed muscle of the anterior arm; a powerful supinator and elbow flexor.",
    origin: "Long head: supraglenoid tubercle of the scapula (tendon runs intracapsularly through the intertubercular sulcus); short head: tip of the coracoid process",
    insertion: "Radial tuberosity, and via the bicipital aponeurosis into the deep fascia of the medial forearm",
    action: "Supinates the forearm (most powerfully with the elbow flexed); flexes the elbow; weakly flexes the arm at the shoulder",
    innervation: "Musculocutaneous nerve (C5–C6)",
    blood: "Muscular branches of the brachial artery",
    clinical: "Biceps reflex tests C5–C6. Rupture of the long head tendon → 'Popeye' bulge. The bicipital aponeurosis protects the brachial artery and median nerve in the cubital fossa.",
    mnemonic: "Biceps puts the corkscrew in (supination) and pulls the cork out (flexion)."
  },
  {
    key: "brachialis", title: "Brachialis", match: ["brachialis"], kind: "muscle", region: "upper limb",
    summary: "Flattened muscle deep to biceps — the main flexor of the elbow in all positions.",
    origin: "Distal half of the anterior surface of the humerus",
    insertion: "Coronoid process and tuberosity of the ulna",
    action: "Flexes the elbow in all positions (the 'workhorse' elbow flexor)",
    innervation: "Musculocutaneous nerve (C5–C6); small lateral part from the radial nerve (C7)",
    blood: "Brachial artery; radial recurrent artery",
    clinical: "Myositis ossificans traumatica can develop in brachialis after elbow dislocation/supracondylar fracture, limiting movement."
  },
  {
    key: "triceps-brachii", title: "Triceps brachii", match: ["triceps brachii"], kind: "muscle", region: "upper limb",
    summary: "Three-headed muscle forming the posterior compartment of the arm; the chief extensor of the elbow.",
    origin: "Long head: infraglenoid tubercle of the scapula; lateral head: posterior humerus superior to the radial groove; medial head: posterior humerus inferior to the radial groove",
    insertion: "Proximal end of the olecranon of the ulna and deep fascia of the forearm",
    action: "Extends the elbow; long head also extends and adducts the arm and steadies the humeral head",
    innervation: "Radial nerve (C6–C8)",
    blood: "Profunda brachii (deep artery of the arm); superior ulnar collateral artery",
    clinical: "Triceps reflex tests C7 (C6–C7). In a mid-shaft humerus fracture the radial nerve is injured in the radial groove → wrist drop, but triceps is usually spared because its branches arise higher."
  },
  {
    key: "anconeus", title: "Anconeus", match: ["anconeus"], kind: "muscle", region: "upper limb",
    summary: "Small triangular muscle on the posterolateral elbow, partly blended with triceps.",
    origin: "Lateral epicondyle of the humerus",
    insertion: "Lateral surface of the olecranon and upper posterior surface of the ulna",
    action: "Assists triceps in extending the elbow; stabilises the elbow; may abduct the ulna during pronation",
    innervation: "Radial nerve (C7–T1)",
    blood: "Recurrent interosseous artery; middle collateral artery",
    clinical: "Used as a landmark in the posterolateral (Kocher) approach to the radial head."
  },
  // ───────────────────────────── MUSCLES: FOREARM ─────────────────────────────
  {
    key: "brachioradialis", title: "Brachioradialis", match: ["brachioradialis"], kind: "muscle", region: "upper limb",
    summary: "Superficial lateral forearm muscle; an elbow flexor even though it is supplied by the radial (extensor) nerve.",
    origin: "Proximal two-thirds of the lateral supracondylar ridge of the humerus",
    insertion: "Lateral surface of the distal radius, just proximal to the styloid process",
    action: "Flexes the elbow, especially with the forearm in mid-pronation (e.g. lifting a glass); brings the forearm to mid-position",
    innervation: "Radial nerve (C5–C7)",
    blood: "Radial recurrent artery",
    clinical: "Brachioradialis reflex tests C6 (C5–C6). The radial artery and superficial radial nerve lie under its medial edge.",
    facts: ["Nicknamed the 'beer-drinking muscle'."]
  },
  {
    key: "pronator-teres", title: "Pronator teres", match: ["pronator teres"], kind: "muscle", region: "upper limb",
    summary: "Two-headed superficial flexor that pronates the forearm; the median nerve passes between its heads.",
    origin: "Humeral head: medial epicondyle (common flexor origin); ulnar head: coronoid process of the ulna",
    insertion: "Middle of the lateral surface of the radius (pronator tuberosity)",
    action: "Pronates the forearm and flexes the elbow",
    innervation: "Median nerve (C6–C7)",
    blood: "Ulnar and anterior ulnar recurrent arteries",
    clinical: "Median nerve compression between its two heads → pronator syndrome (forearm pain, sensory loss including palm). Forms the medial border of the cubital fossa."
  },
  {
    key: "flexor-carpi-radialis", title: "Flexor carpi radialis", match: ["flexor carpi radialis"], kind: "muscle", region: "upper limb",
    summary: "Superficial forearm flexor whose tendon is a key landmark at the wrist.",
    origin: "Medial epicondyle of the humerus (common flexor origin)",
    insertion: "Base of the 2nd metacarpal (and 3rd)",
    action: "Flexes and abducts (radially deviates) the wrist",
    innervation: "Median nerve (C6–C7)",
    blood: "Radial artery branches",
    clinical: "The radial pulse is felt just lateral to its tendon. Its tendon runs in its own compartment of the flexor retinaculum, outside the carpal tunnel."
  },
  {
    key: "palmaris-longus", title: "Palmaris longus", match: ["palmaris longus"], kind: "muscle", region: "upper limb",
    summary: "Small fusiform superficial flexor with a long tendon; absent in roughly 14% of people.",
    origin: "Medial epicondyle of the humerus (common flexor origin)",
    insertion: "Distal half of the flexor retinaculum and apex of the palmar aponeurosis",
    action: "Flexes the wrist and tenses the palmar aponeurosis",
    innervation: "Median nerve (C7–C8)",
    blood: "Ulnar artery branches",
    clinical: "Commonly harvested as a tendon graft. The median nerve lies deep and slightly lateral to its tendon at the wrist (carpal tunnel injection landmark).",
    facts: ["Test for presence: oppose thumb to little finger and flex the wrist — the tendon stands out."]
  },
  {
    key: "flexor-carpi-ulnaris", title: "Flexor carpi ulnaris", match: ["flexor carpi ulnaris"], kind: "muscle", region: "upper limb",
    summary: "Most medial superficial forearm flexor, with humeral and ulnar heads; the only superficial flexor supplied by the ulnar nerve.",
    origin: "Humeral head: medial epicondyle (common flexor origin); ulnar head: olecranon and posterior border of the ulna",
    insertion: "Pisiform, hook of hamate (via pisohamate ligament) and base of the 5th metacarpal (via pisometacarpal ligament)",
    action: "Flexes and adducts (ulnar deviates) the wrist",
    innervation: "Ulnar nerve (C7–C8; C8–T1 in some texts)",
    blood: "Ulnar artery; posterior ulnar recurrent artery",
    clinical: "The ulnar nerve enters the forearm between its two heads (cubital tunnel) — a common site of ulnar nerve compression."
  },
  {
    key: "flexor-digitorum-superficialis", title: "Flexor digitorum superficialis", match: ["flexor digitorum superficialis"], kind: "muscle", region: "upper limb",
    summary: "Intermediate-layer forearm flexor with humeroulnar and radial heads; flexes the PIP joints.",
    origin: "Humeroulnar head: medial epicondyle, ulnar collateral ligament and coronoid process; radial head: superior half of the anterior border of the radius",
    insertion: "Sides of the shafts of the middle phalanges of the medial four digits",
    action: "Flexes the PIP joints; also MCP joints and wrist",
    innervation: "Median nerve (C7–T1)",
    blood: "Ulnar and radial arteries",
    clinical: "Test FDS: hold the other fingers in extension (blocking FDP) and ask the patient to flex the free finger at the PIP joint. The median nerve runs on its deep surface in the forearm.",
    mnemonic: "'Superficialis splits in two to let profundus through' — FDS tendons split (Camper's chiasm) for the FDP tendons."
  },
  {
    key: "flexor-digitorum-profundus", title: "Flexor digitorum profundus", match: ["flexor digitorum profundus"], kind: "muscle", region: "upper limb",
    summary: "Deep forearm flexor; the only muscle that flexes the DIP joints. Dual nerve supply.",
    origin: "Proximal three-quarters of the medial and anterior surfaces of the ulna and interosseous membrane",
    insertion: "Bases of the distal phalanges of the medial four digits",
    action: "Flexes the DIP joints (and assists PIP, MCP and wrist flexion)",
    innervation: "Medial part (digits 4–5): ulnar nerve (C8–T1); lateral part (digits 2–3): anterior interosseous nerve of median (C8–T1)",
    blood: "Ulnar artery and anterior interosseous artery",
    clinical: "'Jersey finger' = avulsion of the FDP tendon (often ring finger) — cannot flex the DIP. Its lumbricals arise from its tendons. Ulnar paradox: a high ulnar lesion paralyses medial FDP, so clawing is LESS marked than with a lower lesion."
  },
  {
    key: "flexor-pollicis-longus", title: "Flexor pollicis longus", match: ["flexor pollicis longus"], kind: "muscle", region: "upper limb",
    summary: "Deep forearm flexor of the thumb.",
    origin: "Anterior surface of the radius and adjacent interosseous membrane",
    insertion: "Base of the distal phalanx of the thumb",
    action: "Flexes the IP joint of the thumb (and MCP/CMC)",
    innervation: "Anterior interosseous nerve (median; C7–C8)",
    blood: "Anterior interosseous artery",
    clinical: "Anterior interosseous nerve palsy → cannot make an 'OK' sign (FPL and index FDP paralysed — pinch becomes a flat 'pinch'). Its tendon runs through the carpal tunnel in its own (radial) bursa."
  },
  {
    key: "pronator-quadratus", title: "Pronator quadratus", match: ["pronator quadratus"], kind: "muscle", region: "upper limb",
    summary: "Deepest muscle of the anterior forearm, a square sheet across the distal radius and ulna.",
    origin: "Distal quarter of the anterior surface of the ulna",
    insertion: "Distal quarter of the anterior surface of the radius",
    action: "Prime mover of pronation (initiates it); binds the radius and ulna together",
    innervation: "Anterior interosseous nerve (median; C8–T1)",
    blood: "Anterior interosseous artery",
    clinical: "Tested with the elbow fully flexed (to minimise pronator teres) in suspected anterior interosseous nerve palsy; it is lifted in volar plating of distal radius fractures."
  },
  {
    key: "extensor-carpi-radialis-longus", title: "Extensor carpi radialis longus", match: ["extensor carpi radialis longus"], kind: "muscle", region: "upper limb",
    summary: "Superficial lateral extensor of the wrist arising from the supracondylar ridge.",
    origin: "Lateral supracondylar ridge of the humerus",
    insertion: "Dorsal surface of the base of the 2nd metacarpal",
    action: "Extends and abducts (radially deviates) the wrist; active in making a fist",
    innervation: "Radial nerve (C6–C7)",
    blood: "Radial artery; radial recurrent artery",
    clinical: "Its tendon (with ECRB) lies in the 2nd dorsal compartment; crossed by APL and EPB in the distal forearm (intersection syndrome)."
  },
  {
    key: "extensor-carpi-radialis-brevis", title: "Extensor carpi radialis brevis", match: ["extensor carpi radialis brevis"], kind: "muscle", region: "upper limb",
    summary: "Short radial wrist extensor arising from the common extensor origin.",
    origin: "Lateral epicondyle of the humerus (common extensor origin)",
    insertion: "Dorsal surface of the base of the 3rd metacarpal",
    action: "Extends and abducts the wrist",
    innervation: "Deep branch of the radial nerve (C7–C8)",
    blood: "Radial artery",
    clinical: "Lateral epicondylitis ('tennis elbow') mainly involves the ECRB origin — pain over the lateral epicondyle on resisted wrist extension."
  },
  {
    key: "extensor-digitorum", title: "Extensor digitorum", match: ["extensor digitorum"], kind: "muscle", region: "upper limb",
    summary: "Main extensor of the medial four fingers in the superficial posterior forearm.",
    origin: "Lateral epicondyle of the humerus (common extensor origin)",
    insertion: "Extensor expansions (dorsal hoods) of the medial four digits → middle and distal phalanges",
    action: "Extends the MCP joints of the medial four digits (and IP joints with the lumbricals/interossei); extends the wrist",
    innervation: "Posterior interosseous nerve (deep radial; C7–C8)",
    blood: "Posterior interosseous artery",
    clinical: "Tendons are linked by intertendinous connections (juncturae), limiting independent finger extension. Avulsion at the middle phalanx base (central slip) → boutonnière deformity."
  },
  {
    key: "extensor-digiti-minimi", title: "Extensor digiti minimi", match: ["extensor digiti minimi"], kind: "muscle", region: "upper limb",
    summary: "Slender extensor of the little finger, partly detached from extensor digitorum.",
    origin: "Lateral epicondyle of the humerus (common extensor origin)",
    insertion: "Extensor expansion of the 5th digit",
    action: "Extends the little finger at the MCP and IP joints",
    innervation: "Posterior interosseous nerve (C7–C8)",
    blood: "Posterior interosseous artery",
    clinical: "Runs in the 5th dorsal compartment over the distal radioulnar joint; often ruptures in rheumatoid arthritis (Vaughan-Jackson lesion)."
  },
  {
    key: "extensor-carpi-ulnaris", title: "Extensor carpi ulnaris", match: ["extensor carpi ulnaris"], kind: "muscle", region: "upper limb",
    summary: "Medial superficial extensor of the wrist with humeral and ulnar heads.",
    origin: "Humeral head: lateral epicondyle (common extensor origin); ulnar head: posterior border of the ulna",
    insertion: "Dorsal surface of the base of the 5th metacarpal",
    action: "Extends and adducts (ulnar deviates) the wrist",
    innervation: "Posterior interosseous nerve (C7–C8)",
    blood: "Ulnar artery",
    clinical: "ECU tendon subluxation/tendinitis (6th dorsal compartment) causes ulnar-sided wrist pain, e.g. in tennis players."
  },
  {
    key: "supinator", title: "Supinator", match: ["supinator"], kind: "muscle", region: "upper limb",
    summary: "Deep posterior forearm muscle wrapping around the proximal radius; the deep branch of the radial nerve passes through it.",
    origin: "Lateral epicondyle, radial collateral and anular ligaments, supinator fossa and crest of the ulna",
    insertion: "Lateral, posterior and anterior surfaces of the proximal third of the radius",
    action: "Supinates the forearm (slow, unresisted supination; biceps adds power)",
    innervation: "Deep branch of the radial nerve (C6–C7; root values vary between texts)",
    blood: "Radial recurrent and recurrent interosseous arteries",
    clinical: "The deep branch of the radial nerve passes through it under the arcade of Frohse → posterior interosseous nerve syndrome: finger drop without wrist drop and without sensory loss."
  },
  {
    key: "abductor-pollicis-longus", title: "Abductor pollicis longus", match: ["abductor pollicis longus"], kind: "muscle", region: "upper limb",
    summary: "Deep posterior forearm 'outcropping' muscle that emerges to cross the radius to the thumb.",
    origin: "Posterior surfaces of the proximal halves of the ulna, radius and interosseous membrane",
    insertion: "Base of the 1st metacarpal (lateral side)",
    action: "Abducts the thumb and extends it at the carpometacarpal joint; assists radial deviation of the wrist",
    innervation: "Posterior interosseous nerve (C7–C8)",
    blood: "Posterior interosseous artery",
    clinical: "De Quervain tenosynovitis: inflammation of APL and EPB in the 1st dorsal compartment — positive Finkelstein test. With EPB it forms the lateral (radial) border of the anatomical snuffbox."
  },
  {
    key: "extensor-pollicis-brevis", title: "Extensor pollicis brevis", match: ["extensor pollicis brevis"], kind: "muscle", region: "upper limb",
    summary: "Deep forearm muscle running with APL to the thumb.",
    origin: "Posterior surface of the distal third of the radius and interosseous membrane",
    insertion: "Dorsal surface of the base of the proximal phalanx of the thumb",
    action: "Extends the proximal phalanx (MCP joint) and CMC joint of the thumb",
    innervation: "Posterior interosseous nerve (C7–C8)",
    blood: "Posterior interosseous artery",
    clinical: "Involved with APL in de Quervain tenosynovitis; forms the lateral border of the anatomical snuffbox."
  },
  {
    key: "extensor-pollicis-longus", title: "Extensor pollicis longus", match: ["extensor pollicis longus"], kind: "muscle", region: "upper limb",
    summary: "Long thumb extensor whose tendon hooks around the dorsal (Lister's) tubercle of the radius.",
    origin: "Posterior surface of the middle third of the ulna and interosseous membrane",
    insertion: "Dorsal surface of the base of the distal phalanx of the thumb",
    action: "Extends the IP joint of the thumb (and MCP, CMC); helps adduct the extended thumb",
    innervation: "Posterior interosseous nerve (C7–C8)",
    blood: "Posterior interosseous artery",
    clinical: "Can rupture weeks after a (minimally displaced) distal radius fracture as it frays at Lister's tubercle. Its tendon forms the medial (ulnar) border of the anatomical snuffbox — scaphoid and radial artery in the floor."
  },
  {
    key: "extensor-indicis", title: "Extensor indicis", match: ["extensor indicis"], kind: "muscle", region: "upper limb",
    summary: "Deep forearm muscle giving the index finger independent extension.",
    origin: "Posterior surface of the distal third of the ulna and interosseous membrane",
    insertion: "Extensor expansion of the index finger (ulnar to the extensor digitorum tendon)",
    action: "Extends the index finger independently (pointing); helps extend the wrist",
    innervation: "Posterior interosseous nerve (C7–C8)",
    blood: "Posterior interosseous artery",
    clinical: "Its tendon is commonly transferred to restore thumb extension after EPL rupture."
  },
  // ───────────────────────────── MUSCLES: HAND ─────────────────────────────
  {
    key: "abductor-pollicis-brevis", title: "Abductor pollicis brevis", match: ["abductor pollicis brevis"], kind: "muscle", region: "upper limb",
    summary: "Superficial thenar muscle forming the lateral part of the thenar eminence.",
    origin: "Flexor retinaculum and tubercles of the scaphoid and trapezium",
    insertion: "Lateral side of the base of the proximal phalanx of the thumb",
    action: "Abducts the thumb (palmar abduction); helps opposition",
    innervation: "Recurrent (motor) branch of the median nerve (C8–T1)",
    blood: "Superficial palmar branch of the radial artery",
    clinical: "Best single muscle for testing median nerve motor function; wasting of the thenar eminence occurs in advanced carpal tunnel syndrome.",
    mnemonic: "Thenar muscles (median, recurrent branch) = 'OAF': Opponens pollicis, Abductor pollicis brevis, Flexor pollicis brevis."
  },
  {
    key: "flexor-pollicis-brevis", title: "Flexor pollicis brevis", match: ["flexor pollicis brevis"], kind: "muscle", region: "upper limb",
    summary: "Thenar muscle with superficial and deep heads that have different nerve supplies.",
    origin: "Superficial head: flexor retinaculum and tubercle of the trapezium; deep head: trapezoid and capitate (floor of carpal tunnel)",
    insertion: "Lateral side of the base of the proximal phalanx of the thumb (via the radial sesamoid)",
    action: "Flexes the thumb at the MCP joint; assists opposition",
    innervation: "Superficial head: recurrent branch of the median nerve (C8–T1); deep head: deep branch of the ulnar nerve (C8–T1)",
    blood: "Superficial palmar branch of the radial artery",
    clinical: "Dual supply means thumb MCP flexion may persist after median nerve injury.",
    mnemonic: "Thenar 'OAF' muscles (median nerve)."
  },
  {
    key: "opponens-pollicis", title: "Opponens pollicis", match: ["opponens pollicis"], kind: "muscle", region: "upper limb",
    summary: "Deep thenar muscle that rotates the thumb into opposition.",
    origin: "Flexor retinaculum and tubercle of the trapezium",
    insertion: "Entire lateral border of the 1st metacarpal",
    action: "Opposes the thumb — flexes and medially rotates the 1st metacarpal at the CMC joint toward the palm",
    innervation: "Recurrent (motor) branch of the median nerve (C8–T1)",
    blood: "Superficial palmar branch of the radial artery",
    clinical: "Loss of opposition ('ape hand') after median nerve injury at the wrist; the recurrent branch is superficial and easily cut by lacerations at the thenar eminence ('million-dollar nerve').",
    mnemonic: "Thenar 'OAF' muscles (median nerve)."
  },
  {
    key: "adductor-pollicis", title: "Adductor pollicis", match: ["adductor pollicis"], kind: "muscle", region: "upper limb",
    summary: "Fan-shaped deep palm muscle with oblique and transverse heads; key for pinch and power grip.",
    origin: "Oblique head: bases of 2nd–3rd metacarpals, capitate and adjacent carpals; transverse head: anterior surface of the shaft of the 3rd metacarpal",
    insertion: "Medial side of the base of the proximal phalanx of the thumb (via the ulnar sesamoid)",
    action: "Adducts the thumb toward the middle finger; provides power for pinch grip",
    innervation: "Deep branch of the ulnar nerve (C8–T1)",
    blood: "Deep palmar arch",
    clinical: "Froment's sign: in ulnar nerve palsy the patient flexes the thumb IP joint (substituting FPL, median nerve) to grip a sheet of paper between thumb and index finger."
  },
  {
    key: "abductor-digiti-minimi-hand", title: "Abductor digiti minimi (hand)", match: ["abductor digiti minimi of hand"], kind: "muscle", region: "upper limb",
    summary: "Most superficial hypothenar muscle.",
    origin: "Pisiform and tendon of flexor carpi ulnaris",
    insertion: "Medial side of the base of the proximal phalanx of the 5th digit",
    action: "Abducts the little finger; assists flexion of its proximal phalanx",
    innervation: "Deep branch of the ulnar nerve (C8–T1)",
    blood: "Deep palmar branch of the ulnar artery",
    clinical: "Wasting of the hypothenar eminence indicates ulnar nerve damage (e.g. at Guyon's canal or elbow).",
    mnemonic: "Hypothenar muscles (ulnar, deep branch) = 'OAF': Opponens, Abductor, Flexor digiti minimi."
  },
  {
    key: "flexor-digiti-minimi-brevis-hand", title: "Flexor digiti minimi brevis (hand)", match: ["flexor digiti minimi brevis of hand"], kind: "muscle", region: "upper limb",
    summary: "Hypothenar muscle lateral to abductor digiti minimi.",
    origin: "Hook of the hamate and flexor retinaculum",
    insertion: "Medial side of the base of the proximal phalanx of the 5th digit",
    action: "Flexes the proximal phalanx (MCP joint) of the little finger",
    innervation: "Deep branch of the ulnar nerve (C8–T1)",
    blood: "Deep palmar branch of the ulnar artery",
    clinical: "Paralysed with the other hypothenar muscles in ulnar nerve lesions.",
    mnemonic: "Hypothenar 'OAF'."
  },
  {
    key: "opponens-digiti-minimi-hand", title: "Opponens digiti minimi (hand)", match: ["opponens digiti minimi of hand"], kind: "muscle", region: "upper limb",
    summary: "Deepest hypothenar muscle, inserting along the 5th metacarpal.",
    origin: "Hook of the hamate and flexor retinaculum",
    insertion: "Medial border of the 5th metacarpal",
    action: "Draws the 5th metacarpal anteriorly and rotates it laterally, bringing the little finger into opposition with the thumb (cupping the palm)",
    innervation: "Deep branch of the ulnar nerve (C8–T1)",
    blood: "Deep palmar branch of the ulnar artery",
    clinical: "Weakness makes cupping the hand and gripping round objects difficult in ulnar nerve palsy.",
    mnemonic: "Hypothenar 'OAF'."
  },
  {
    key: "lumbricals-hand", title: "Lumbricals of the hand", match: ["lumbricals of hand"], kind: "muscle", region: "upper limb",
    summary: "Four worm-like muscles arising from the FDP tendons; flex the MCP and extend the IP joints.",
    origin: "Tendons of flexor digitorum profundus (1st and 2nd: lateral sides of the tendons to digits 2–3, unipennate; 3rd and 4th: adjacent sides of tendons 3–5, bipennate)",
    insertion: "Lateral (radial) sides of the extensor expansions of digits 2–5",
    action: "Flex the MCP joints and extend the IP joints ('table-top' / writing position)",
    innervation: "1st and 2nd: median nerve (C8–T1); 3rd and 4th: deep branch of the ulnar nerve (C8–T1)",
    blood: "Superficial and deep palmar arches; dorsal digital arteries",
    clinical: "Ulnar nerve palsy paralyses the 3rd–4th lumbricals → 'claw hand' (hyperextended MCP, flexed IP of ring and little fingers). Combined median + ulnar lesion → full claw.",
    mnemonic: "'Lumbricals: 1 and 2 median, 3 and 4 ulnar' (like FDP)."
  },
  {
    key: "dorsal-interossei-hand", title: "Dorsal interossei of the hand", match: ["dorsal interossei of hand"], kind: "muscle", region: "upper limb",
    summary: "Four bipennate muscles between the metacarpals that ABduct the fingers from the axis of the middle finger.",
    origin: "Adjacent sides of two metacarpals",
    insertion: "Bases of the proximal phalanges and extensor expansions: 1st – lateral side of index; 2nd – lateral side of middle; 3rd – medial side of middle; 4th – medial side of ring finger",
    action: "Abduct digits 2–4 from the axial line of the middle finger; assist lumbricals in flexing MCP and extending IP joints",
    innervation: "Deep branch of the ulnar nerve (C8–T1)",
    blood: "Dorsal and palmar metacarpal arteries",
    clinical: "Test by spreading the fingers against resistance; 1st dorsal interosseous wasting (dorsal web space) is an early sign of ulnar nerve or T1 root lesions.",
    mnemonic: "DAB — Dorsal ABduct; PAD — Palmar ADduct."
  },
  {
    key: "palmar-interossei-hand", title: "Palmar interossei of the hand", match: ["palmar interossei of hand"], kind: "muscle", region: "upper limb",
    summary: "Three unipennate muscles that ADduct the fingers toward the middle finger.",
    origin: "Palmar surfaces of the 2nd, 4th and 5th metacarpals (sides facing the middle finger)",
    insertion: "Bases of the proximal phalanges and extensor expansions of digits 2, 4 and 5 (sides facing the middle finger)",
    action: "Adduct digits 2, 4 and 5 toward the axial line; assist lumbricals in flexing MCP and extending IP joints",
    innervation: "Deep branch of the ulnar nerve (C8–T1)",
    blood: "Palmar metacarpal arteries (deep palmar arch)",
    clinical: "Card test: patient grips a card between extended fingers — weak in ulnar nerve palsy.",
    mnemonic: "PAD — Palmar ADduct; DAB — Dorsal ABduct."
  },
  // ───────────────────────────── MUSCLES: HIP & THIGH ─────────────────────────────
  {
    key: "sartorius", title: "Sartorius", match: ["sartorius"], kind: "muscle", region: "lower limb",
    summary: "Long, strap-like 'tailor's muscle' crossing the front of the thigh obliquely; longest muscle in the body.",
    origin: "Anterior superior iliac spine and the notch below it",
    insertion: "Superior part of the medial surface of the tibia (pes anserinus)",
    action: "Flexes, abducts and laterally rotates the thigh at the hip; flexes the knee (cross-legged sitting posture)",
    innervation: "Femoral nerve (L2–L3)",
    blood: "Muscular branches of the femoral artery",
    clinical: "Forms the lateral border of the femoral triangle and the roof of the adductor canal. Avulsion of the ASIS in adolescent sprinters.",
    mnemonic: "Pes anserinus (anterior → posterior): 'Say Grace before Tea' — Sartorius, Gracilis, semiTendinosus."
  },
  {
    key: "rectus-femoris", title: "Rectus femoris", match: ["rectus femoris"], kind: "muscle", region: "lower limb",
    summary: "The only quadriceps muscle that crosses both hip and knee.",
    origin: "Straight head: anterior inferior iliac spine; reflected head: ilium just above the acetabulum",
    insertion: "Base of the patella and, via the patellar ligament, the tibial tuberosity",
    action: "Extends the knee; flexes the thigh at the hip (kicking)",
    innervation: "Femoral nerve (L2–L4)",
    blood: "Descending branch of the lateral circumflex femoral artery",
    clinical: "Patellar (knee-jerk) reflex tests L3–L4. AIIS avulsion fractures occur in adolescent kicking athletes; common site of quadriceps strain.",
    facts: ["Quadriceps femoris = rectus femoris + vastus lateralis, medialis and intermedius."]
  },
  {
    key: "vastus-lateralis", title: "Vastus lateralis", match: ["vastus lateralis"], kind: "muscle", region: "lower limb",
    summary: "Largest component of the quadriceps, on the lateral thigh.",
    origin: "Greater trochanter and lateral lip of the linea aspera",
    insertion: "Base and lateral border of the patella; tibial tuberosity via the patellar ligament",
    action: "Extends the knee",
    innervation: "Femoral nerve (L2–L4)",
    blood: "Lateral circumflex femoral artery (descending branch); profunda femoris perforators",
    clinical: "Preferred IM injection site in infants (anterolateral thigh); standard site for muscle biopsy."
  },
  {
    key: "vastus-medialis", title: "Vastus medialis", match: ["vastus medialis"], kind: "muscle", region: "lower limb",
    summary: "Medial quadriceps muscle; its lowest oblique fibres (VMO) stabilise the patella.",
    origin: "Intertrochanteric line and medial lip of the linea aspera",
    insertion: "Base and medial border of the patella; tibial tuberosity via the patellar ligament",
    action: "Extends the knee; oblique fibres pull the patella medially, resisting lateral displacement",
    innervation: "Femoral nerve (L2–L4)",
    blood: "Femoral artery; descending genicular artery",
    clinical: "VMO weakness/atrophy (after knee injury or surgery) predisposes to lateral patellar maltracking and patellofemoral pain."
  },
  {
    key: "vastus-intermedius", title: "Vastus intermedius", match: ["vastus intermedius"], kind: "muscle", region: "lower limb",
    summary: "Deep quadriceps muscle lying on the femoral shaft beneath rectus femoris.",
    origin: "Anterior and lateral surfaces of the femoral shaft",
    insertion: "Deep surface of the quadriceps tendon/base of the patella; tibial tuberosity via the patellar ligament",
    action: "Extends the knee",
    innervation: "Femoral nerve (L2–L4)",
    blood: "Lateral circumflex femoral artery; profunda femoris",
    clinical: "Deep fibres form articularis genus, which retracts the suprapatellar bursa during knee extension."
  },
  {
    key: "pectineus", title: "Pectineus", match: ["pectineus"], kind: "muscle", region: "lower limb",
    summary: "Flat quadrangular muscle in the floor of the femoral triangle.",
    origin: "Superior pubic ramus (pecten pubis)",
    insertion: "Pectineal line of the femur, just below the lesser trochanter",
    action: "Adducts and flexes the thigh; assists medial rotation",
    innervation: "Femoral nerve (L2–L3); may receive a branch from the obturator nerve",
    blood: "Medial circumflex femoral and obturator arteries",
    clinical: "Floor of the femoral triangle (with iliopsoas laterally and adductor longus medially); femoral hernias lie anterior to it."
  },
  {
    key: "adductor-longus", title: "Adductor longus", match: ["adductor longus"], kind: "muscle", region: "lower limb",
    summary: "Most anterior adductor; forms the medial border of the femoral triangle.",
    origin: "Body of the pubis, inferior to the pubic crest",
    insertion: "Middle third of the linea aspera of the femur",
    action: "Adducts the thigh (and assists flexion)",
    innervation: "Obturator nerve, anterior branch (L2–L4)",
    blood: "Profunda femoris and obturator arteries",
    clinical: "Most commonly injured muscle in 'groin strain' (football, ice hockey); its tendon is easily palpated at the pubis."
  },
  {
    key: "adductor-brevis", title: "Adductor brevis", match: ["adductor brevis"], kind: "muscle", region: "lower limb",
    summary: "Short adductor lying deep to pectineus and adductor longus; separates the two branches of the obturator nerve.",
    origin: "Body and inferior ramus of the pubis",
    insertion: "Pectineal line and proximal part of the linea aspera",
    action: "Adducts the thigh; assists flexion",
    innervation: "Obturator nerve (L2–L4)",
    blood: "Profunda femoris and obturator arteries",
    clinical: "Anterior branch of the obturator nerve lies in front of it and posterior branch behind it — a landmark for obturator nerve block."
  },
  {
    key: "adductor-magnus", title: "Adductor magnus", match: ["adductor magnus"], kind: "muscle", region: "lower limb",
    summary: "Largest adductor, a composite of an adductor part and a hamstring part with different nerve supplies.",
    origin: "Adductor part: inferior pubic ramus and ischial ramus; hamstring part: ischial tuberosity",
    insertion: "Adductor part: gluteal tuberosity, linea aspera and medial supracondylar line; hamstring part: adductor tubercle of the femur",
    action: "Adducts the thigh; adductor part flexes, hamstring part extends the thigh",
    innervation: "Adductor part: obturator nerve, posterior branch (L2–L4); hamstring part: tibial part of the sciatic nerve (L4)",
    blood: "Profunda femoris, obturator and perforating arteries",
    clinical: "The adductor hiatus (gap between its two parts) transmits the femoral vessels into the popliteal fossa; the adductor tubercle marks the femoral distal epiphyseal line."
  },
  {
    key: "adductor-minimus", title: "Adductor minimus", match: ["adductor minimus"], kind: "muscle", region: "lower limb",
    summary: "Upper, often separately distinguishable part of adductor magnus.",
    origin: "Inferior pubic ramus",
    insertion: "Gluteal tuberosity / upper linea aspera of the femur",
    action: "Adducts the thigh",
    innervation: "Obturator nerve, posterior branch (L2–L4)",
    blood: "Medial circumflex femoral and obturator arteries",
    clinical: "Considered part of adductor magnus in most texts; its upper border lies against quadratus femoris."
  },
  {
    key: "gracilis", title: "Gracilis", match: ["gracilis"], kind: "muscle", region: "lower limb",
    summary: "Long, slender, most superficial medial thigh muscle; crosses both hip and knee.",
    origin: "Body and inferior ramus of the pubis",
    insertion: "Superior part of the medial surface of the tibia (pes anserinus)",
    action: "Adducts the thigh; flexes the knee; medially rotates the leg",
    innervation: "Obturator nerve (L2–L3)",
    blood: "Profunda femoris and medial circumflex femoral arteries",
    clinical: "Expendable muscle used as a free or pedicled flap (e.g. facial reanimation, perineal reconstruction); its tendon is used for ACL reconstruction.",
    mnemonic: "Pes anserinus: 'Say Grace before Tea' (Sartorius, Gracilis, semiTendinosus)."
  },
  {
    key: "biceps-femoris", title: "Biceps femoris", match: ["biceps femoris"], kind: "muscle", region: "lower limb",
    summary: "Lateral hamstring with a long head (true hamstring) and a short head (crosses only the knee).",
    origin: "Long head: ischial tuberosity; short head: lateral lip of the linea aspera and lateral supracondylar line of the femur",
    insertion: "Lateral side of the head of the fibula (tendon split by the fibular collateral ligament)",
    action: "Flexes the knee and laterally rotates the leg when the knee is flexed; long head extends the thigh at the hip",
    innervation: "Long head: tibial division of the sciatic nerve (L5–S2); short head: common fibular division (L5–S2)",
    blood: "Perforating branches of profunda femoris; inferior gluteal artery",
    clinical: "Short head is the only hamstring muscle supplied by the common fibular division. Its tendon guides the surgeon to the common fibular nerve, which runs along its medial border."
  },
  {
    key: "semitendinosus", title: "Semitendinosus", match: ["semitendinosus"], kind: "muscle", region: "lower limb",
    summary: "Medial hamstring with a long cord-like distal tendon.",
    origin: "Ischial tuberosity",
    insertion: "Medial surface of the superior tibia (pes anserinus)",
    action: "Extends the thigh; flexes the knee and medially rotates the leg when the knee is flexed",
    innervation: "Tibial division of the sciatic nerve (L5–S2)",
    blood: "Perforating branches of profunda femoris; inferior gluteal artery",
    clinical: "Its tendon (often with gracilis) is a standard autograft for ACL reconstruction.",
    mnemonic: "Pes anserinus: 'Say Grace before Tea'."
  },
  {
    key: "semimembranosus", title: "Semimembranosus", match: ["semimembranosus"], kind: "muscle", region: "lower limb",
    summary: "Broad medial hamstring with a flattened membranous proximal tendon.",
    origin: "Ischial tuberosity",
    insertion: "Posterior part of the medial condyle of the tibia; reflected expansion forms the oblique popliteal ligament",
    action: "Extends the thigh; flexes the knee and medially rotates the leg when the knee is flexed",
    innervation: "Tibial division of the sciatic nerve (L5–S2)",
    blood: "Perforating branches of profunda femoris; inferior gluteal artery",
    clinical: "A popliteal (Baker's) cyst usually arises from the gastrocnemius–semimembranosus bursa. Forms the superomedial border of the popliteal fossa."
  },
  // ───────────────────────────── MUSCLES: LEG ─────────────────────────────
  {
    key: "tibialis-anterior", title: "Tibialis anterior", match: ["tibialis anterior"], kind: "muscle", region: "lower limb",
    summary: "Strongest dorsiflexor of the foot, lying just lateral to the shin.",
    origin: "Lateral condyle and superior half of the lateral surface of the tibia; interosseous membrane",
    insertion: "Medial and inferior surfaces of the medial cuneiform and base of the 1st metatarsal",
    action: "Dorsiflexes the ankle and inverts the foot; supports the medial longitudinal arch",
    innervation: "Deep fibular nerve (L4–L5)",
    blood: "Anterior tibial artery",
    clinical: "Common fibular nerve injury at the fibular neck → foot drop with high-stepping (steppage) gait. Involved in anterior compartment syndrome and 'shin splints'.",
    facts: ["Its tendon is the most medial and prominent on the front of the ankle."]
  },
  {
    key: "extensor-digitorum-longus", title: "Extensor digitorum longus", match: ["extensor digitorum longus"], kind: "muscle", region: "lower limb",
    summary: "Anterior compartment muscle that extends the lateral four toes.",
    origin: "Lateral condyle of the tibia, superior three-quarters of the medial surface of the fibula and interosseous membrane",
    insertion: "Middle and distal phalanges of the lateral four toes (via dorsal digital expansions)",
    action: "Extends the lateral four toes; dorsiflexes the ankle",
    innervation: "Deep fibular nerve (L5–S1)",
    blood: "Anterior tibial artery",
    clinical: "Paralysed with the other anterior compartment muscles in foot drop."
  },
  {
    key: "extensor-hallucis-longus", title: "Extensor hallucis longus", match: ["extensor hallucis longus"], kind: "muscle", region: "lower limb",
    summary: "Anterior compartment muscle that extends the big toe.",
    origin: "Middle part of the anterior surface of the fibula and interosseous membrane",
    insertion: "Dorsal aspect of the base of the distal phalanx of the big toe",
    action: "Extends the big toe; dorsiflexes the ankle",
    innervation: "Deep fibular nerve (L5–S1)",
    blood: "Anterior tibial artery",
    clinical: "Great-toe extension is the classic test of the L5 myotome. The dorsalis pedis pulse is felt just lateral to its tendon."
  },
  {
    key: "fibularis-tertius", title: "Fibularis (peroneus) tertius", match: ["fibularis tertius"], kind: "muscle", region: "lower limb",
    summary: "Small anterior-compartment muscle, really a detached part of extensor digitorum longus; absent in some people.",
    origin: "Inferior third of the anterior surface of the fibula and interosseous membrane",
    insertion: "Dorsum of the base of the 5th metatarsal",
    action: "Dorsiflexes the ankle and everts the foot",
    innervation: "Deep fibular nerve (L5–S1)",
    blood: "Anterior tibial artery",
    clinical: "Unlike fibularis longus/brevis it is in the ANTERIOR compartment and supplied by the deep (not superficial) fibular nerve."
  },
  {
    key: "fibularis-longus", title: "Fibularis (peroneus) longus", match: ["fibularis longus"], kind: "muscle", region: "lower limb",
    summary: "Superficial lateral-compartment muscle whose tendon crosses the sole to the medial foot.",
    origin: "Head and superior two-thirds of the lateral surface of the fibula",
    insertion: "Base of the 1st metatarsal and medial cuneiform (plantar aspect)",
    action: "Everts the foot and weakly plantarflexes the ankle; supports the transverse and lateral longitudinal arches",
    innervation: "Superficial fibular nerve (L5–S2)",
    blood: "Anterior tibial and fibular arteries",
    clinical: "Tendon passes behind the lateral malleolus and through a groove on the cuboid; fibular tendon subluxation follows retinacular injury.",
    facts: ["With tibialis anterior it forms a 'stirrup' under the foot."]
  },
  {
    key: "fibularis-brevis", title: "Fibularis (peroneus) brevis", match: ["fibularis brevis"], kind: "muscle", region: "lower limb",
    summary: "Lateral-compartment muscle deep to fibularis longus, inserting on the 5th metatarsal.",
    origin: "Inferior two-thirds of the lateral surface of the fibula",
    insertion: "Dorsal surface of the tuberosity on the lateral side of the base of the 5th metatarsal",
    action: "Everts the foot and weakly plantarflexes the ankle",
    innervation: "Superficial fibular nerve (L5–S2)",
    blood: "Fibular artery",
    clinical: "Inversion injury can avulse the 5th metatarsal tuberosity via its tendon (pseudo-Jones fracture)."
  },
  {
    key: "gastrocnemius", title: "Gastrocnemius", match: ["gastrocnemius"], kind: "muscle", region: "lower limb",
    summary: "Superficial two-headed calf muscle crossing knee and ankle; with soleus forms triceps surae.",
    origin: "Lateral head: lateral aspect of the lateral condyle of the femur; medial head: popliteal surface of the femur above the medial condyle",
    insertion: "Posterior surface of the calcaneus via the calcaneal (Achilles) tendon",
    action: "Plantarflexes the ankle (most effective with the knee extended); raises the heel in walking; flexes the knee",
    innervation: "Tibial nerve (S1–S2)",
    blood: "Sural arteries (from popliteal artery)",
    clinical: "Ankle-jerk reflex tests S1–S2. Tear of the medial head ('tennis leg'). The heads form the inferior borders of the popliteal fossa."
  },
  {
    key: "soleus", title: "Soleus", match: ["soleus"], kind: "muscle", region: "lower limb",
    summary: "Broad, flat calf muscle deep to gastrocnemius — the postural plantarflexor.",
    origin: "Posterior aspect of the head and upper quarter of the fibula, soleal line and medial border of the tibia, and a tendinous arch between them",
    insertion: "Posterior surface of the calcaneus via the calcaneal tendon",
    action: "Plantarflexes the ankle independent of knee position; steadies the leg on the foot when standing",
    innervation: "Tibial nerve (S1–S2)",
    blood: "Popliteal, posterior tibial and fibular arteries",
    clinical: "Soleal venous sinuses act as a 'musculovenous pump' (peripheral heart) returning blood upward — immobility here predisposes to DVT."
  },
  {
    key: "plantaris", title: "Plantaris", match: ["plantaris"], kind: "muscle", region: "lower limb",
    summary: "Small muscle with a very long thin tendon; absent in about 6–8% of people.",
    origin: "Inferior end of the lateral supracondylar line of the femur and oblique popliteal ligament",
    insertion: "Posterior surface of the calcaneus (with/medial to the calcaneal tendon)",
    action: "Weakly assists gastrocnemius in plantarflexion and knee flexion; probably mainly proprioceptive",
    innervation: "Tibial nerve (S1–S2)",
    blood: "Popliteal artery",
    clinical: "Its tendon is used as a graft for tendon reconstruction; rupture can mimic a calf tear.",
    facts: ["Sometimes called the 'freshman's nerve' because students mistake its long tendon for a nerve."]
  },
  {
    key: "popliteus", title: "Popliteus", match: ["popliteus"], kind: "muscle", region: "lower limb",
    summary: "Thin triangular muscle in the floor of the popliteal fossa that 'unlocks' the extended knee.",
    origin: "Lateral surface of the lateral condyle of the femur and lateral meniscus",
    insertion: "Posterior surface of the tibia superior to the soleal line",
    action: "Weakly flexes the knee and unlocks it by laterally rotating the femur on the fixed tibia (medially rotates the tibia of the free limb)",
    innervation: "Tibial nerve (L4–S1)",
    blood: "Inferior medial and lateral genicular arteries",
    clinical: "Its tendon is intracapsular but extrasynovial, separating the lateral meniscus from the fibular collateral ligament — which is why the lateral meniscus is more mobile and less often torn than the medial."
  },
  {
    key: "flexor-digitorum-longus", title: "Flexor digitorum longus", match: ["flexor digitorum longus"], kind: "muscle", region: "lower limb",
    summary: "Deep posterior-compartment muscle that flexes the lateral four toes.",
    origin: "Posterior surface of the tibia inferior to the soleal line",
    insertion: "Bases of the distal phalanges of the lateral four toes",
    action: "Flexes the lateral four toes; plantarflexes the ankle; supports the longitudinal arches",
    innervation: "Tibial nerve (S2–S3)",
    blood: "Posterior tibial artery",
    clinical: "Used in tendon transfer for tibialis posterior dysfunction.",
    mnemonic: "Behind the medial malleolus (anterior → posterior): 'Tom, Dick And Very Nervous Harry' — Tibialis posterior, flexor Digitorum longus, posterior tibial Artery, Vein, tibial Nerve, flexor Hallucis longus."
  },
  {
    key: "flexor-hallucis-longus", title: "Flexor hallucis longus", match: ["flexor hallucis longus"], kind: "muscle", region: "lower limb",
    summary: "Powerful deep posterior-compartment flexor of the big toe; key for push-off.",
    origin: "Inferior two-thirds of the posterior surface of the fibula and interosseous membrane",
    insertion: "Base of the distal phalanx of the big toe",
    action: "Flexes the big toe at all joints; weakly plantarflexes the ankle; supports the medial longitudinal arch; provides push-off in gait",
    innervation: "Tibial nerve (S2–S3)",
    blood: "Fibular artery",
    clinical: "Its tendon grooves the posterior talus and passes under the sustentaculum tali; tenosynovitis is common in ballet dancers ('dancer's tendinitis').",
    mnemonic: "'Tom, Dick And Very Nervous Harry' — Harry (FHL) is most posterior behind the medial malleolus."
  },
  {
    key: "tibialis-posterior", title: "Tibialis posterior", match: ["tibialis posterior"], kind: "muscle", region: "lower limb",
    summary: "Deepest posterior-compartment muscle; the main dynamic support of the medial longitudinal arch.",
    origin: "Interosseous membrane, posterior surface of the tibia inferior to the soleal line, and posterior surface of the fibula",
    insertion: "Tuberosity of the navicular; also cuneiforms, cuboid and bases of the 2nd–4th metatarsals",
    action: "Plantarflexes the ankle and inverts the foot; supports the medial longitudinal arch",
    innervation: "Tibial nerve (L4–L5)",
    blood: "Posterior tibial artery",
    clinical: "Tibialis posterior tendon dysfunction is the commonest cause of acquired adult flatfoot ('too many toes' sign, cannot do single-leg heel raise).",
    mnemonic: "'Tom' in 'Tom, Dick And Very Nervous Harry' — most anterior behind the medial malleolus."
  },
  // ───────────────────────────── MUSCLES: FOOT ─────────────────────────────
  {
    key: "extensor-digitorum-brevis", title: "Extensor digitorum brevis", match: ["extensor digitorum brevis"], kind: "muscle", region: "lower limb",
    summary: "Small fleshy muscle on the dorsum of the foot extending toes 2–4.",
    origin: "Superolateral surface of the calcaneus (floor of tarsal sinus) and inferior extensor retinaculum",
    insertion: "Long extensor tendons of toes 2–4",
    action: "Assists extensor digitorum longus in extending toes 2–4",
    innervation: "Deep fibular nerve (L5–S1)",
    blood: "Lateral tarsal artery (from dorsalis pedis)",
    clinical: "Its fleshy belly on the lateral dorsum can be mistaken for swelling; atrophy is a sign of L5/S1 radiculopathy or deep fibular nerve injury."
  },
  {
    key: "extensor-hallucis-brevis", title: "Extensor hallucis brevis", match: ["extensor hallucis brevis"], kind: "muscle", region: "lower limb",
    summary: "Medial part of the extensor digitorum brevis mass, going to the big toe.",
    origin: "Superolateral surface of the calcaneus (with extensor digitorum brevis)",
    insertion: "Dorsal surface of the base of the proximal phalanx of the big toe",
    action: "Extends the big toe at the MTP joint",
    innervation: "Deep fibular nerve (L5–S1)",
    blood: "Dorsalis pedis artery (lateral tarsal branch)",
    clinical: "Its tendon crosses the dorsalis pedis artery — a landmark when palpating the pulse."
  },
  {
    key: "abductor-hallucis", title: "Abductor hallucis", match: ["abductor hallucis"], kind: "muscle", region: "lower limb",
    summary: "Superficial (1st layer) muscle along the medial border of the sole.",
    origin: "Medial process of the calcaneal tuberosity, flexor retinaculum and plantar aponeurosis",
    insertion: "Medial side of the base of the proximal phalanx of the big toe",
    action: "Abducts and flexes the big toe; supports the medial longitudinal arch",
    innervation: "Medial plantar nerve (S2–S3)",
    blood: "Medial plantar artery",
    clinical: "Medial and lateral plantar nerves pass deep to it after leaving the tarsal tunnel — site of compression in tarsal tunnel syndrome."
  },
  {
    key: "flexor-digitorum-brevis", title: "Flexor digitorum brevis", match: ["flexor digitorum brevis"], kind: "muscle", region: "lower limb",
    summary: "Central 1st-layer muscle of the sole, the foot equivalent of FDS.",
    origin: "Medial process of the calcaneal tuberosity, plantar aponeurosis and intermuscular septa",
    insertion: "Both sides of the middle phalanges of the lateral four toes",
    action: "Flexes the lateral four toes (PIP joints)",
    innervation: "Medial plantar nerve (S2–S3)",
    blood: "Medial and lateral plantar arteries",
    clinical: "Its tendons split to let the FDL tendons pass, exactly like FDS/FDP in the hand."
  },
  {
    key: "abductor-digiti-minimi-foot", title: "Abductor digiti minimi (foot)", match: ["abductor digiti minimi of foot"], kind: "muscle", region: "lower limb",
    summary: "1st-layer muscle along the lateral border of the sole.",
    origin: "Medial and lateral processes of the calcaneal tuberosity, plantar aponeurosis and intermuscular septum",
    insertion: "Lateral side of the base of the proximal phalanx of the 5th toe",
    action: "Abducts and flexes the little toe; supports the lateral longitudinal arch",
    innervation: "Lateral plantar nerve (S2–S3)",
    blood: "Lateral plantar artery",
    clinical: "Entrapment of the first branch of the lateral plantar nerve (Baxter's nerve) supplying it causes chronic heel pain."
  },
  {
    key: "flexor-accessorius", title: "Flexor accessorius (quadratus plantae)", match: ["flexor accessorius"], kind: "muscle", region: "lower limb",
    summary: "2nd-layer muscle of the sole that straightens the oblique pull of FDL.",
    origin: "Medial head: medial surface of the calcaneus; lateral head: lateral margin of the plantar surface of the calcaneus",
    insertion: "Posterolateral margin of the flexor digitorum longus tendon",
    action: "Corrects the oblique pull of FDL so the toes flex in line; assists flexion of toes 2–5",
    innervation: "Lateral plantar nerve (S2–S3)",
    blood: "Medial and lateral plantar arteries",
    clinical: "Allows effective toe flexion even when the ankle is plantarflexed (FDL slack)."
  },
  {
    key: "lumbricals-foot", title: "Lumbricals of the foot", match: ["lumbrical of foot"], kind: "muscle", region: "lower limb",
    summary: "Four small 2nd-layer muscles arising from the FDL tendons.",
    origin: "Tendons of flexor digitorum longus (1st: medial side of the first tendon; 2nd–4th: adjacent sides of tendons, bipennate)",
    insertion: "Medial sides of the extensor expansions of toes 2–5",
    action: "Flex the MTP joints and extend the IP joints of the lateral four toes",
    innervation: "1st lumbrical: medial plantar nerve; 2nd–4th: deep branch of the lateral plantar nerve (S2–S3)",
    blood: "Lateral plantar artery and plantar metatarsal arteries",
    clinical: "Intrinsic muscle weakness (e.g. diabetic neuropathy) contributes to claw and hammer toe deformities.",
    mnemonic: "Medial plantar nerve supplies only 'LAFF': 1st Lumbrical, Abductor hallucis, Flexor hallucis brevis, Flexor digitorum brevis; lateral plantar supplies the rest."
  },
  {
    key: "flexor-hallucis-brevis", title: "Flexor hallucis brevis", match: ["flexor hallucis brevis"], kind: "muscle", region: "lower limb",
    summary: "3rd-layer muscle with medial and lateral heads, each containing a sesamoid bone.",
    origin: "Plantar surfaces of the cuboid and lateral cuneiform",
    insertion: "Both sides of the base of the proximal phalanx of the big toe (medial head with abductor hallucis, lateral head with adductor hallucis), via the sesamoids",
    action: "Flexes the proximal phalanx (MTP joint) of the big toe",
    innervation: "Medial plantar nerve (S2–S3)",
    blood: "Medial plantar artery; first plantar metatarsal artery",
    clinical: "The two sesamoids in its tendons can fracture or become inflamed (sesamoiditis) in runners and dancers."
  },
  {
    key: "adductor-hallucis", title: "Adductor hallucis", match: ["adductor hallucis"], kind: "muscle", region: "lower limb",
    summary: "3rd-layer muscle with oblique and transverse heads, inserting on the lateral big toe.",
    origin: "Oblique head: bases of metatarsals 2–4; transverse head: plantar ligaments of the MTP joints of toes 3–5",
    insertion: "Lateral side of the base of the proximal phalanx of the big toe (via lateral sesamoid)",
    action: "Adducts the big toe; helps maintain the transverse arch",
    innervation: "Deep branch of the lateral plantar nerve (S2–S3)",
    blood: "Plantar arch and plantar metatarsal arteries",
    clinical: "Its pull contributes to hallux valgus; it is released in some bunion corrections."
  },
  {
    key: "flexor-digiti-minimi-brevis-foot", title: "Flexor digiti minimi brevis (foot)", match: ["flexor digiti minimi brevis of foot"], kind: "muscle", region: "lower limb",
    summary: "3rd-layer muscle flexing the little toe.",
    origin: "Base of the 5th metatarsal",
    insertion: "Base of the proximal phalanx of the 5th toe",
    action: "Flexes the proximal phalanx (MTP joint) of the little toe",
    innervation: "Superficial branch of the lateral plantar nerve (S2–S3)",
    blood: "Lateral plantar artery",
    clinical: "Part of the lateral intrinsic group supplied by the lateral plantar nerve."
  },
  {
    key: "opponens-digiti-minimi-foot", title: "Opponens digiti minimi (foot)", match: ["opponens digiti minimi of foot"], kind: "muscle", region: "lower limb",
    summary: "Inconstant slip of flexor digiti minimi brevis inserting on the 5th metatarsal; often not described as a separate muscle.",
    origin: "Long plantar ligament / sheath of fibularis longus near the base of the 5th metatarsal",
    insertion: "Lateral border of the 5th metatarsal",
    action: "Draws the 5th metatarsal plantarward and medially (minor action)",
    innervation: "Lateral plantar nerve (superficial branch; S2–S3)",
    blood: "Lateral plantar artery",
    clinical: "Of little functional significance; usually regarded as part of flexor digiti minimi brevis."
  },
  {
    key: "plantar-interossei-foot", title: "Plantar interossei of the foot", match: ["plantar interosseous of foot"], kind: "muscle", region: "lower limb",
    summary: "Three unipennate 4th-layer muscles that adduct toes 3–5 toward the 2nd toe.",
    origin: "Bases and medial sides of metatarsals 3–5",
    insertion: "Medial sides of the bases of the proximal phalanges of toes 3–5",
    action: "Adduct toes 3–5 toward the axis of the 2nd toe; flex the MTP joints",
    innervation: "Lateral plantar nerve (S2–S3)",
    blood: "Plantar arch and plantar metatarsal arteries",
    clinical: "In the foot the reference axis is the 2nd toe (in the hand it is the middle finger).",
    mnemonic: "PAD — Plantar ADduct; DAB — Dorsal ABduct."
  },
  {
    key: "dorsal-interossei-foot", title: "Dorsal interossei of the foot", match: ["dorsal interossei of foot"], kind: "muscle", region: "lower limb",
    summary: "Four bipennate 4th-layer muscles between the metatarsals that abduct toes 2–4.",
    origin: "Adjacent sides of metatarsals 1–5",
    insertion: "1st: medial side of the proximal phalanx of the 2nd toe; 2nd–4th: lateral sides of the proximal phalanges of toes 2–4 (and extensor expansions)",
    action: "Abduct toes 2–4 from the axis of the 2nd toe; flex the MTP joints",
    innervation: "Lateral plantar nerve (S2–S3; 1st–2nd may also receive deep fibular branches)",
    blood: "Arcuate artery (dorsal metatarsal arteries) and plantar arch",
    clinical: "The 2nd toe receives two dorsal interossei (one on each side) and so has no plantar interosseous.",
    mnemonic: "DAB — Dorsal ABduct; PAD — Plantar ADduct."
  },
  // ───────────────────────────── BONES: SKULL ─────────────────────────────
  {
    key: "frontal-bone", title: "Frontal bone", match: ["frontal bone"], kind: "bone", region: "head & neck",
    summary: "Forms the forehead, the roofs of the orbits and most of the anterior cranial fossa.",
    features: ["Squamous part (forehead) with frontal tuberosities", "Supraorbital margin with supraorbital notch/foramen", "Superciliary arches and glabella", "Zygomatic processes", "Orbital plates (roof of orbits)", "Frontal sinuses", "Coronal suture with parietal bones; nasion with nasal bones"],
    function: "Protects the frontal lobes; forms the forehead and orbital roofs; houses the frontal sinuses",
    clinical: "Frontal sinus fractures may involve the anterior cranial fossa (CSF rhinorrhoea). Frontal sinusitis can spread to the orbit or intracranially (Pott's puffy tumour = frontal osteomyelitis).",
    facts: ["Formed from two halves joined by the metopic suture, which normally fuses in infancy but persists in a minority of adults."]
  },
  {
    key: "parietal-bone", title: "Parietal bone", match: ["parietal bone"], kind: "bone", region: "head & neck",
    summary: "Paired bones forming most of the roof and sides of the skull vault.",
    features: ["Sagittal, coronal, lambdoid and squamous sutures", "Parietal tuberosity (eminence)", "Superior and inferior temporal lines", "Grooves for the middle meningeal vessels on the inner surface", "Groove for the superior sagittal sinus", "Contributes to the pterion (with frontal, sphenoid and temporal bones)"],
    function: "Protects the parietal lobes; forms the cranial vault",
    clinical: "Fracture at the pterion (thinnest part of the lateral skull) can tear the anterior branch of the middle meningeal artery → extradural haematoma with a 'lucid interval'.",
    facts: ["Bregma = junction of sagittal and coronal sutures (anterior fontanelle); lambda = junction of sagittal and lambdoid sutures (posterior fontanelle)."]
  },
  {
    key: "occipital-bone", title: "Occipital bone", match: ["occipital bone"], kind: "bone", region: "head & neck",
    summary: "Forms the back and much of the base of the skull, surrounding the foramen magnum.",
    features: ["Squamous part with external occipital protuberance (inion)", "Superior and inferior nuchal lines", "Foramen magnum (medulla, vertebral arteries, spinal roots of CN XI)", "Occipital condyles (atlanto-occipital joint)", "Hypoglossal canals (CN XII)", "Basilar part (clivus)", "Jugular process; internal occipital protuberance and grooves for transverse sinuses"],
    function: "Protects the occipital lobes, cerebellum and brainstem; articulates with the atlas (nodding — 'yes' movement)",
    clinical: "Chiari malformation: cerebellar tonsils herniate through the foramen magnum. Raised intracranial pressure can cause tonsillar herniation ('coning') compressing the medulla."
  },
  {
    key: "temporal-bone", title: "Temporal bone", match: ["temporal bone"], kind: "bone", region: "head & neck",
    summary: "Complex lateral skull bone containing the middle and inner ear and forming the jaw joint socket.",
    features: ["Squamous part with zygomatic process (forms zygomatic arch)", "Mandibular fossa and articular tubercle (TMJ)", "Petrous part (houses cochlea and vestibular apparatus)", "Mastoid part with mastoid process and air cells", "Tympanic part and external acoustic meatus", "Internal acoustic meatus (CN VII, VIII)", "Styloid process; stylomastoid foramen (CN VII exits)", "Carotid canal; jugular fossa"],
    function: "Houses the organs of hearing and balance; transmits the ICA and CN VII; forms part of the middle cranial fossa and TMJ",
    clinical: "Basal skull fracture through the petrous temporal bone → Battle's sign (mastoid bruising), haemotympanum, CSF otorrhoea, facial nerve palsy, hearing loss. Mastoiditis can spread to the sigmoid sinus or meninges."
  },
  {
    key: "sphenoid-bone", title: "Sphenoid bone", match: ["sphenoid bone"], kind: "bone", region: "head & neck",
    summary: "Butterfly-shaped bone at the centre of the skull base, articulating with all other cranial bones.",
    features: ["Body with sella turcica (hypophyseal fossa — pituitary) and sphenoidal sinuses", "Lesser wings with optic canals (CN II, ophthalmic artery)", "Superior orbital fissure (CN III, IV, V1, VI, ophthalmic veins)", "Greater wings with foramen rotundum (V2), foramen ovale (V3) and foramen spinosum (middle meningeal artery)", "Pterygoid processes with medial and lateral pterygoid plates", "Anterior and posterior clinoid processes"],
    function: "Keystone of the cranial base; forms parts of the orbit, middle cranial fossa and nasal cavity; houses the pituitary",
    clinical: "Transsphenoidal surgery reaches pituitary tumours through the sphenoidal sinus.",
    mnemonic: "Trigeminal exits 'Standing Room Only': V1 Superior orbital fissure, V2 foramen Rotundum, V3 foramen Ovale (all in the sphenoid)."
  },
  {
    key: "ethmoid", title: "Ethmoid bone", match: ["ethmoid"], kind: "bone", region: "head & neck",
    summary: "Light, spongy midline bone between the orbits, forming the roof of the nasal cavity and part of the septum.",
    features: ["Cribriform plate (olfactory nerve filaments)", "Crista galli (attachment of falx cerebri)", "Perpendicular plate (upper nasal septum)", "Ethmoidal labyrinth with ethmoidal air cells", "Superior and middle nasal conchae", "Orbital plate (lamina papyracea) — medial orbital wall"],
    function: "Separates nasal cavity from cranial cavity and orbits; supports olfaction; contributes to the nasal septum and lateral nasal wall",
    clinical: "Cribriform plate fracture → anosmia and CSF rhinorrhoea. Ethmoid sinusitis can spread through the paper-thin lamina papyracea → orbital cellulitis."
  },
  {
    key: "maxilla", title: "Maxilla", match: ["maxilla"], kind: "bone", region: "head & neck",
    summary: "Paired upper jaw bones forming the centre of the face, upper teeth sockets, most of the hard palate and the orbit floor.",
    features: ["Body containing the maxillary sinus", "Frontal, zygomatic, alveolar and palatine processes", "Infraorbital margin, groove and foramen (infraorbital nerve, V2)", "Alveolar process with upper teeth", "Incisive fossa and canal (nasopalatine nerve)", "Anterior nasal spine; maxillary tuberosity"],
    function: "Holds the upper teeth; forms the floor of the orbit, lateral wall of the nasal cavity and anterior hard palate",
    clinical: "Le Fort I–III fractures of the midface. Maxillary sinus ostium is high on the medial wall (drains poorly into the middle meatus) — upper molar/premolar roots lie close to the sinus floor (oro-antral fistula after extraction). Cleft palate results from failed fusion of the palatine processes."
  },
  {
    key: "mandible", title: "Mandible", match: ["mandible"], kind: "bone", region: "head & neck",
    summary: "The lower jaw — the largest and strongest facial bone and the only mobile skull bone.",
    features: ["Body with alveolar part (lower teeth)", "Ramus, angle and mandibular notch", "Condylar process (head and neck) — TMJ", "Coronoid process (temporalis)", "Mandibular foramen and lingula (inferior alveolar nerve and vessels)", "Mental foramen (mental nerve) below the 2nd premolar", "Mylohyoid line; digastric fossa; genial (mental) spines; mental protuberance"],
    function: "Holds the lower teeth; mastication and speech; attachment for muscles of mastication and tongue/floor of mouth",
    clinical: "Behaves like a ring, so fractures are often bilateral (e.g. angle on one side + condyle on the other). Inferior alveolar nerve block is given near the mandibular foramen. TMJ dislocation is anterior (condyle in front of the articular eminence).",
    facts: ["Inferior alveolar nerve injury (e.g. third molar removal, fracture) → numbness of the lower lip and chin."]
  },
  {
    key: "zygomatic-bone", title: "Zygomatic bone", match: ["zygomatic bone"], kind: "bone", region: "head & neck",
    summary: "The cheekbone, forming the prominence of the cheek and part of the lateral wall and floor of the orbit.",
    features: ["Frontal process (frontozygomatic suture)", "Temporal process (forms zygomatic arch with temporal bone)", "Maxillary border", "Orbital surface", "Zygomaticofacial and zygomaticotemporal foramina"],
    function: "Gives cheek prominence; protects the eye; origin of masseter and zygomaticus muscles",
    clinical: "Zygomaticomaxillary complex ('tripod') fracture → flattened cheek, infraorbital numbness (V2), diplopia and trismus (depressed arch impinging on coronoid/temporalis)."
  },
  {
    key: "nasal-bone", title: "Nasal bone", match: ["nasal bone"], kind: "bone", region: "head & neck",
    summary: "Paired small bones forming the bony bridge of the nose.",
    features: ["Articulate with frontal bone (nasion), each other, frontal processes of maxillae and perpendicular plate of ethmoid", "Lower border attaches to the upper lateral nasal cartilages"],
    function: "Forms the bridge of the nose and supports the nasal cartilages",
    clinical: "Most commonly fractured facial bone; always check for septal haematoma after nasal trauma."
  },
  {
    key: "lacrimal-bone", title: "Lacrimal bone", match: ["lacrimal bone"], kind: "bone", region: "head & neck",
    summary: "Smallest and most fragile facial bone, in the medial wall of the orbit.",
    features: ["Posterior lacrimal crest", "Lacrimal groove — with frontal process of maxilla forms the fossa for the lacrimal sac", "Contributes to the nasolacrimal canal"],
    function: "Houses the lacrimal sac; part of the tear drainage pathway",
    clinical: "Dacryocystorhinostomy (for nasolacrimal duct obstruction) creates an opening through the lacrimal bone into the nose."
  },
  {
    key: "palatine-bone", title: "Palatine bone", match: ["palatine bone"], kind: "bone", region: "head & neck",
    summary: "Paired L-shaped bones forming the back of the hard palate and part of the nasal cavity wall.",
    features: ["Horizontal plate (posterior third of hard palate)", "Perpendicular plate (lateral nasal wall)", "Pyramidal, orbital and sphenoidal processes", "Greater and lesser palatine foramina", "Posterior nasal spine"],
    function: "Forms posterior hard palate, part of the nasal cavity floor/lateral wall and orbit floor; contributes to the pterygopalatine fossa",
    clinical: "Greater palatine nerve block is given at the greater palatine foramen (medial to the 3rd molar). Involved in cleft palate."
  },
  {
    key: "vomer", title: "Vomer", match: ["vomer"], kind: "bone", region: "head & neck",
    summary: "Thin, plough-shaped bone forming the posteroinferior part of the nasal septum.",
    features: ["Articulates with sphenoid, perpendicular plate of ethmoid, maxillae, palatine bones and septal cartilage", "Alae (wings) on its upper border", "Free posterior border separating the choanae"],
    function: "Forms part of the bony nasal septum",
    clinical: "Deviated nasal septum may involve the vomer; nasopalatine nerve and vessels groove its surface.",
    facts: ["Name from Latin for 'ploughshare'."]
  },
  {
    key: "inferior-nasal-concha", title: "Inferior nasal concha", match: ["inferior nasal concha"], kind: "bone", region: "head & neck",
    summary: "Separate scroll-shaped bone on the lateral wall of the nasal cavity (unlike the superior and middle conchae, which belong to the ethmoid).",
    features: ["Articulates with maxilla, lacrimal, ethmoid and palatine bones", "Overhangs the inferior meatus, into which the nasolacrimal duct opens"],
    function: "Increases mucosal surface area to warm, humidify and filter inspired air",
    clinical: "Turbinate (concha) hypertrophy causes nasal obstruction (treated by reduction). Watery eye after trauma may reflect nasolacrimal duct injury in the inferior meatus."
  },
  {
    key: "hyoid-bone", title: "Hyoid bone", match: ["hyoid bone"], kind: "bone", region: "head & neck",
    summary: "U-shaped bone in the upper neck at C3 that does not articulate with any other bone.",
    features: ["Body", "Greater horns (cornua)", "Lesser horns", "Attachments of supra- and infrahyoid muscles, middle constrictor, hyoglossus, thyrohyoid membrane, stylohyoid ligament"],
    function: "Anchors the tongue and suspends the larynx; moves during swallowing and speech",
    clinical: "Fracture of the greater horn suggests manual strangulation. A thyroglossal duct cyst is closely related to the hyoid body (moves on swallowing and tongue protrusion) — Sistrunk procedure removes the central hyoid with the tract."
  },
  // ───────────────────────────── BONES: VERTEBRAL COLUMN ─────────────────────────────
  {
    key: "atlas", title: "Atlas (C1)", match: ["atlas"], kind: "bone", region: "head & neck",
    summary: "First cervical vertebra; a ring of bone with no body or spinous process that supports the skull.",
    features: ["Anterior arch with anterior tubercle and facet for the dens", "Posterior arch with posterior tubercle and groove for the vertebral artery", "Lateral masses with superior articular facets (occipital condyles) and inferior facets (axis)", "Transverse processes with transverse foramina", "Transverse ligament holds the dens against the anterior arch"],
    function: "Atlanto-occipital joint permits nodding ('yes'); atlanto-axial joint permits rotation ('no')",
    clinical: "Jefferson fracture: burst fracture of the ring from axial loading (e.g. diving).",
    facts: ["Named after the Titan Atlas, who held up the heavens (the skull 'globe')."]
  },
  {
    key: "axis", title: "Axis (C2)", match: ["axis"], kind: "bone", region: "head & neck",
    summary: "Second cervical vertebra, with the dens (odontoid process) acting as the pivot for the atlas.",
    features: ["Dens (odontoid process) — embryologically the body of C1", "Large superior articular facets for the atlas", "Large bifid spinous process (first palpable spinous process below the occiput)", "Pars interarticularis between superior and inferior facets"],
    function: "Pivot for rotation of the head (atlanto-axial joint provides ~50% of cervical rotation)",
    clinical: "Dens fractures (types I–III; type II at the base most common/non-union prone). Hangman's fracture = bilateral pars fractures of C2 (traumatic spondylolisthesis). Atlanto-axial instability in rheumatoid arthritis and Down syndrome."
  },
  {
    key: "vertebra-prominens", title: "C7 — vertebra prominens", match: ["seventh cervical vertebra"], kind: "bone", region: "head & neck",
    summary: "Seventh cervical vertebra, with the long non-bifid spinous process that forms the visible bump at the base of the neck.",
    features: ["Long, non-bifid spinous process (attachment of ligamentum nuchae)", "Small transverse foramina, usually transmitting only accessory vertebral veins (vertebral artery usually enters at C6)", "Large transverse processes (may bear a cervical rib)"],
    function: "Transitional vertebra between cervical and thoracic spine; surface landmark for counting vertebrae",
    clinical: "A cervical rib arising from C7 can compress the lower brachial plexus (T1) or subclavian artery (thoracic outlet syndrome). Note C8 spinal nerve exits below C7."
  },
  {
    key: "cervical-vertebra", title: "Cervical vertebra (typical, C3–C6)", match: ["cervical vertebra"], kind: "bone", region: "head & neck",
    summary: "Small vertebrae of the neck, identified by their transverse foramina.",
    features: ["Small, broad body with uncinate processes (uncovertebral 'joints of Luschka')", "Transverse foramina (vertebral artery passes through C6–C1)", "Anterior and posterior tubercles of transverse processes; C6 anterior tubercle = carotid tubercle", "Short bifid spinous processes (C3–C6)", "Large triangular vertebral foramen", "Articular facets oriented obliquely (~45°)"],
    function: "Support the head and allow a wide range of neck movement; protect the cervical cord and vertebral arteries",
    clinical: "Cervical spinal nerves exit ABOVE the vertebra of the same number (C6 nerve between C5 and C6). Commonest disc herniations: C5–C6 (C6 root) and C6–C7 (C7 root). Uncovertebral osteophytes narrow the intervertebral foramina."
  },
  {
    key: "thoracic-vertebra", title: "Thoracic vertebra", match: ["thoracic vertebra"], kind: "bone", region: "thorax",
    summary: "Twelve vertebrae that articulate with the ribs, identified by their costal facets.",
    features: ["Heart-shaped body with superior and inferior costal (demi)facets for rib heads", "Transverse costal facets (T1–T10) for rib tubercles", "Long spinous processes sloping inferiorly (overlapping)", "Small circular vertebral foramen", "Articular facets in the coronal plane (favour rotation)", "T1 and T9–T12 have atypical costal facets"],
    function: "Support the thoracic cage; limit flexion/extension, permit rotation; protect the thoracic spinal cord",
    clinical: "Osteoporotic wedge compression fractures (thoracic kyphosis, height loss). The thoracolumbar junction (T11–L2) is the commonest site of traumatic spinal fractures. Thoracic disc herniation is rare because the rib cage stabilises the column."
  },
  {
    key: "lumbar-vertebra", title: "Lumbar vertebra", match: ["lumbar vertebra"], kind: "bone", region: "back",
    summary: "Five large weight-bearing vertebrae of the lower back, with no transverse foramina or costal facets.",
    features: ["Large kidney-shaped body", "Short, thick quadrilateral (hatchet-shaped) spinous processes", "Long slender transverse processes; mammillary and accessory processes", "Articular facets in the sagittal plane (favour flexion/extension, limit rotation)", "Pars interarticularis", "Triangular vertebral foramen"],
    function: "Bear most of the body weight; allow flexion/extension of the trunk; protect the conus and cauda equina",
    clinical: "Disc herniation most often at L4–L5 and L5–S1, compressing the traversing L5 and S1 roots respectively. Spondylolysis (pars defect, 'Scottie dog collar') ± spondylolisthesis, usually L5. Lumbar puncture at L3–L4 or L4–L5 (cord ends ~L1–L2); the iliac crests (Tuffier's/supracristal line) mark ~L4."
  },
  {
    key: "sacrum", title: "Sacrum", match: ["sacrum"], kind: "bone", region: "pelvis",
    summary: "Triangular bone of five fused vertebrae wedged between the hip bones, forming the back of the pelvis.",
    features: ["Promontory (anterior lip of S1 body)", "Alae (wings)", "Four pairs of anterior and posterior sacral foramina", "Median, intermediate and lateral sacral crests", "Sacral canal, sacral hiatus and sacral cornua", "Auricular surfaces (sacroiliac joints)", "Apex articulates with the coccyx"],
    function: "Transmits body weight from the spine to the pelvis via the sacroiliac joints; protects sacral nerve roots",
    clinical: "Caudal epidural anaesthesia via the sacral hiatus (between the cornua). The promontory is the posterior point of the obstetric (true) conjugate. Sacral insufficiency fractures occur in osteoporosis."
  },
  {
    key: "intervertebral-disk", title: "Intervertebral disc", match: ["intervertebral disk", "disk of seventh cervical vertebra"], kind: "joint-structure", region: "back",
    summary: "Fibrocartilaginous cushions between adjacent vertebral bodies (none between occiput–C1 or C1–C2), forming secondary cartilaginous joints (symphyses).",
    features: ["Nucleus pulposus — gelatinous centre (notochord remnant)", "Anulus fibrosus — concentric lamellae of fibrocartilage with alternating fibre direction", "Cartilaginous end plates", "Thinner posterolaterally where the posterior longitudinal ligament is narrow"],
    function: "Absorb shock, allow movement between vertebrae and make up about a quarter of the length of the presacral column",
    clinical: "Herniation is usually posterolateral; in the lumbar spine it compresses the traversing root (L4–L5 disc → L5 root), in the cervical spine the exiting root of the lower vertebra (C5–C6 → C6). Central herniation may cause cauda equina syndrome (saddle anaesthesia, retention — emergency). Discs dehydrate with age → loss of height.",
    facts: ["The disc labelled 'of axis' here lies between C2 and C3 — the first intervertebral disc."]
  },
  // ───────────────────────────── BONES: THORAX ─────────────────────────────
  {
    key: "first-rib", title: "First rib", match: ["first rib"], kind: "bone", region: "thorax",
    summary: "Shortest, broadest and most sharply curved rib; an atypical rib closely related to the subclavian vessels and brachial plexus.",
    features: ["Flat superior and inferior surfaces", "Single facet on the head (articulates with T1 only)", "Scalene tubercle (scalenus anterior)", "Groove for subclavian vein (anterior to tubercle) and subclavian artery/lower trunk of brachial plexus (posterior)", "Attachment of scalenus medius, subclavius, serratus anterior"],
    function: "Forms the boundary of the superior thoracic aperture (thoracic inlet)",
    clinical: "Fracture implies high-energy trauma and may injure the subclavian vessels or brachial plexus. Thoracic outlet syndrome may result from a narrow scalene triangle or cervical rib."
  },
  {
    key: "second-rib", title: "Second rib", match: ["second rib"], kind: "bone", region: "thorax",
    summary: "Atypical rib, thinner and less curved than the first, joining the sternum at the sternal angle.",
    features: ["Two facets on the head (T1 and T2)", "Tuberosity for serratus anterior on its upper surface", "Costal cartilage articulates at the manubriosternal junction (sternal angle)"],
    function: "Part of the upper thoracic wall; landmark for counting ribs",
    clinical: "Ribs are counted from the 2nd costal cartilage at the palpable sternal angle (angle of Louis) — the 1st rib is usually hidden under the clavicle."
  },
  {
    key: "typical-rib", title: "Rib (typical, ribs 3–9)", match: ["third rib", "fourth rib", "fifth rib", "sixth rib", "seventh rib", "eighth rib", "ninth rib"], kind: "bone", region: "thorax",
    summary: "Typical ribs (3rd–9th) are curved flat bones forming the thoracic cage; ribs 1–7 are true (vertebrosternal), 8–10 false (vertebrochondral), 11–12 floating.",
    features: ["Head with two articular facets (own vertebra and the one above) separated by a crest", "Neck", "Tubercle articulating with the transverse process of its own vertebra", "Angle (weakest point)", "Shaft (body) with the costal groove on its inferior inner surface", "Anterior end joined to a costal cartilage"],
    function: "Protect thoracic and upper abdominal organs; move during respiration (pump-handle in upper ribs, bucket-handle in lower ribs)",
    clinical: "Fractures most often occur near the angle of the middle ribs; may cause pneumothorax/haemothorax. Flail chest = ≥3 adjacent ribs each broken in ≥2 places → paradoxical movement. Lower rib fractures may injure the liver or spleen.",
    facts: ["The intercostal vein, artery and nerve (VAN) run in the costal groove — needles go above the rib."]
  },
  {
    key: "tenth-rib", title: "Tenth rib", match: ["tenth rib"], kind: "bone", region: "thorax",
    summary: "Last false rib; atypical because its head usually has a single facet (T10 only).",
    features: ["Single facet on the head", "Costal cartilage joins the 9th costal cartilage to form the costal margin"],
    function: "Forms part of the lower thoracic cage and costal margin",
    clinical: "Overlies the spleen (the spleen's long axis lies along the 10th rib); lower rib fractures raise suspicion of splenic or liver injury."
  },
  {
    key: "floating-ribs", title: "Floating ribs (11th and 12th)", match: ["eleventh rib", "twelfth rib"], kind: "bone", region: "thorax",
    summary: "Short atypical ribs whose anterior ends are free in the abdominal wall muscles (no sternal or cartilage attachment).",
    features: ["Single facet on the head", "No neck or tubercle", "Short tapered anterior ends tipped with cartilage"],
    function: "Protect the posterior abdominal organs (kidneys); give attachment to the diaphragm, quadratus lumborum and abdominal muscles",
    clinical: "The 12th rib lies across the upper pole of the kidney; the pleura extends below the medial part of the 12th rib, so a posterior renal (loin) approach risks pneumothorax."
  },
  {
    key: "costal-cartilage", title: "Costal cartilage", match: ["costal cartilage"], kind: "joint-structure", region: "thorax",
    summary: "Bars of hyaline cartilage extending the ribs anteriorly, giving the thoracic wall elasticity.",
    features: ["1st costal cartilage: primary cartilaginous joint (synchondrosis) with the manubrium", "2nd–7th: synovial sternocostal joints", "8th–10th: join the cartilage above (interchondral joints), forming the costal margin", "11th–12th: cap the floating rib tips"],
    function: "Allow the thoracic wall to move and recoil during respiration; absorb impact",
    clinical: "Costochondritis (Tietze syndrome when there is swelling) causes anterior chest wall pain that mimics cardiac pain. Calcify with age. Harvested for grafts (rhinoplasty, ear reconstruction)."
  },
  {
    key: "manubrium", title: "Manubrium of sternum", match: ["manubrium"], kind: "bone", region: "thorax",
    summary: "Upper, widest part of the sternum, at the level of T3–T4.",
    features: ["Jugular (suprasternal) notch", "Clavicular notches (sternoclavicular joints)", "Facets for the 1st costal cartilage and upper part of the 2nd", "Manubriosternal joint (sternal angle, angle of Louis)"],
    function: "Anchors the clavicles and first ribs, linking the upper limb to the axial skeleton",
    clinical: "The sternal angle (T4/T5 disc level) marks: 2nd costal cartilage; beginning and end of the aortic arch; tracheal bifurcation (carina); azygos vein joining the SVC; boundary of superior/inferior mediastinum."
  },
  {
    key: "body-of-sternum", title: "Body of sternum", match: ["body of sternum"], kind: "bone", region: "thorax",
    summary: "Long middle part of the sternum, formed by four fused sternebrae.",
    features: ["Articulates with the manubrium (sternal angle) and xiphoid process", "Notches for the 2nd (lower half) to 7th costal cartilages", "Transverse ridges marking fusion of sternebrae"],
    function: "Forms the anterior midline of the thoracic cage; protects the heart",
    clinical: "Median sternotomy for cardiac surgery; sternal marrow aspiration; CPR compressions on the lower half of the sternum. Sternal fracture (e.g. seat-belt injury) may be associated with myocardial contusion.",
    facts: ["Congenital variants: pectus excavatum (funnel chest) and pectus carinatum (pigeon chest)."]
  },
  {
    key: "xiphoid-process", title: "Xiphoid process", match: ["xiphoid process"], kind: "bone", region: "thorax",
    summary: "Small, variable lower tip of the sternum, cartilaginous in youth and ossifying in adulthood.",
    features: ["Xiphisternal joint (about T9 level)", "Attachments of the diaphragm, linea alba and rectus abdominis"],
    function: "Attachment for diaphragm and abdominal wall muscles",
    clinical: "Landmark for subxiphoid pericardiocentesis and CPR hand position (stay above it); may fracture during CPR. A prominent xiphoid can be mistaken for an epigastric mass."
  },
  // ───────────────────────────── BONES: UPPER LIMB ─────────────────────────────
  {
    key: "clavicle", title: "Clavicle", match: ["clavicle"], kind: "bone", region: "upper limb",
    summary: "S-shaped collarbone acting as a strut between the sternum and the scapula — the only bony link of the upper limb to the trunk.",
    features: ["Sternal (medial) end — sternoclavicular joint", "Acromial (lateral) end — acromioclavicular joint", "Medial two-thirds convex anteriorly, lateral third concave", "Conoid tubercle and trapezoid line (coracoclavicular ligament)", "Groove for subclavius; impression for costoclavicular ligament"],
    function: "Holds the upper limb away from the trunk for free movement; transmits forces from the limb to the axial skeleton",
    clinical: "Most commonly fractured bone, usually at the junction of middle and lateral thirds: the medial fragment is pulled up by sternocleidomastoid, the lateral fragment drops (weight of the arm, pectoralis major).",
    facts: ["First bone to start ossifying (intramembranous, week 5–6) and among the last to complete fusion (medial epiphysis ~mid-20s)."]
  },
  {
    key: "scapula", title: "Scapula", match: ["scapula"], kind: "bone", region: "upper limb",
    summary: "Triangular shoulder blade on the posterolateral chest wall (ribs 2–7), linking the humerus to the clavicle.",
    features: ["Spine and acromion", "Coracoid process", "Glenoid cavity with supra- and infraglenoid tubercles", "Supraspinous, infraspinous and subscapular fossae", "Superior, medial and lateral borders; superior and inferior angles", "Suprascapular notch (suprascapular nerve) bridged by the superior transverse scapular ligament", "Neck"],
    function: "Forms the socket of the shoulder joint and gives attachment to 17 muscles, allowing a wide range of arm movement",
    clinical: "Winging of the scapula: medial (long thoracic nerve/serratus anterior) or lateral (CN XI/trapezius). Scapular fractures imply high-energy trauma. Landmarks: superior angle ~T2, root of spine ~T3, inferior angle ~T7."
  },
  {
    key: "humerus", title: "Humerus", match: ["humerus"], kind: "bone", region: "upper limb",
    summary: "Long bone of the arm, articulating with the scapula at the shoulder and with the radius and ulna at the elbow.",
    features: ["Head, anatomical neck, surgical neck", "Greater and lesser tubercles with intertubercular sulcus", "Deltoid tuberosity", "Radial (spiral) groove", "Medial and lateral supracondylar ridges and epicondyles", "Capitulum (radius) and trochlea (ulna)", "Olecranon, coronoid and radial fossae"],
    function: "Lever for arm movement; attachments for shoulder and elbow muscles",
    clinical: "Nerves in contact with the bone: surgical neck — axillary nerve; radial groove — radial nerve (wrist drop); medial epicondyle — ulnar nerve ('funny bone'); supracondylar region — median nerve and brachial artery (supracondylar fracture in children → Volkmann ischaemic contracture)."
  },
  {
    key: "radius", title: "Radius", match: ["radius"], kind: "bone", region: "upper limb",
    summary: "Lateral forearm bone; small proximally, broad distally where it forms the main wrist articulation.",
    features: ["Head (articulates with capitulum and radial notch of ulna; held by the anular ligament)", "Neck and radial tuberosity (biceps)", "Interosseous border", "Pronator tuberosity (mid-shaft)", "Dorsal (Lister's) tubercle", "Styloid process", "Ulnar notch (distal radioulnar joint)", "Carpal articular surface (scaphoid and lunate)"],
    function: "Rotates around the ulna in pronation/supination; transmits forces from the hand to the forearm",
    clinical: "Colles fracture: distal radius, dorsally displaced ('dinner-fork' deformity) after a fall on the outstretched hand; Smith = volar displacement. Pulled elbow (radial head subluxation) in toddlers. Galeazzi = radial shaft fracture + DRUJ dislocation.",
    mnemonic: "'MUGR' — Monteggia = Ulna fracture, Galeazzi = Radius fracture."
  },
  {
    key: "ulna", title: "Ulna", match: ["ulna"], kind: "bone", region: "upper limb",
    summary: "Medial forearm bone; large proximally, forming the main hinge of the elbow with the humerus.",
    features: ["Olecranon (triceps)", "Coronoid process and ulnar tuberosity (brachialis)", "Trochlear notch (humerus)", "Radial notch (proximal radioulnar joint)", "Supinator crest", "Interosseous border", "Head (distal) and styloid process"],
    function: "Stabilises the forearm; forms the elbow hinge; radius rotates around it",
    clinical: "Monteggia fracture: proximal ulnar fracture + radial head dislocation. Isolated shaft ('nightstick') fracture from defending a blow. Olecranon fractures are pulled apart by triceps (usually need fixation).",
    mnemonic: "'MUGR' — Monteggia = Ulna, Galeazzi = Radius."
  },
  {
    key: "scaphoid", title: "Scaphoid", match: ["scaphoid"], kind: "bone", region: "upper limb",
    summary: "Boat-shaped, largest bone of the proximal carpal row, bridging both rows.",
    features: ["Tubercle (attachment of flexor retinaculum and APB)", "Waist", "Proximal pole (articulates with the radius)", "Lies in the floor of the anatomical snuffbox"],
    function: "Links proximal and distal carpal rows; transmits force from the hand to the radius",
    clinical: "Most commonly fractured carpal bone (fall on outstretched hand) — snuffbox tenderness even with a normal initial X-ray. Blood supply enters distally (retrograde), so waist/proximal fractures risk avascular necrosis of the proximal pole and non-union.",
    mnemonic: "Carpal bones (proximal row lateral→medial, then distal row lateral→medial): 'Some Lovers Try Positions That They Can't Handle' — Scaphoid, Lunate, Triquetrum, Pisiform, Trapezium, Trapezoid, Capitate, Hamate."
  },
  {
    key: "lunate", title: "Lunate", match: ["lunate"], kind: "bone", region: "upper limb",
    summary: "Crescent-shaped proximal carpal bone between the scaphoid and triquetrum.",
    features: ["Articulates with radius proximally and capitate distally", "Concave distal surface"],
    function: "Central bone of the radiocarpal joint",
    clinical: "Most commonly DISLOCATED carpal bone (anteriorly into the carpal tunnel → median nerve compression). Kienböck disease = avascular necrosis of the lunate.",
    mnemonic: "'Some Lovers Try Positions That They Can't Handle'."
  },
  {
    key: "triquetral", title: "Triquetrum (triquetral)", match: ["triquetral"], kind: "bone", region: "upper limb",
    summary: "Pyramidal medial bone of the proximal carpal row.",
    features: ["Articulates with lunate, hamate and pisiform (anterior facet)", "Contacts the articular disc of the distal radioulnar joint"],
    function: "Part of the proximal row and ulnar side of the wrist",
    clinical: "Dorsal chip (avulsion) fracture is the second most common carpal fracture.",
    mnemonic: "'Some Lovers Try Positions That They Can't Handle'."
  },
  {
    key: "pisiform", title: "Pisiform", match: ["pisiform"], kind: "bone", region: "upper limb",
    summary: "Small pea-shaped sesamoid bone in the tendon of flexor carpi ulnaris, on the palmar surface of the triquetrum.",
    features: ["Attachment of FCU, flexor retinaculum, abductor digiti minimi, pisohamate and pisometacarpal ligaments", "Medial wall of Guyon's (ulnar) canal"],
    function: "Increases the lever arm of FCU",
    clinical: "Ulnar nerve and artery pass lateral to it through Guyon's canal (between pisiform and hook of hamate) — compression causes ulnar tunnel syndrome (e.g. cyclists).",
    mnemonic: "'Some Lovers Try Positions That They Can't Handle'."
  },
  {
    key: "trapezium", title: "Trapezium", match: ["trapezium"], kind: "bone", region: "upper limb",
    summary: "Lateral bone of the distal carpal row, forming the saddle joint of the thumb.",
    features: ["Saddle-shaped facet for the 1st metacarpal (thumb CMC joint)", "Tubercle (flexor retinaculum, thenar muscles)", "Groove for flexor carpi radialis tendon"],
    function: "Allows the wide range of thumb movement, including opposition",
    clinical: "Thumb base (CMC) osteoarthritis is common in older women; treated by trapeziectomy.",
    mnemonic: "'TrapeziUM is by the thUMb'."
  },
  {
    key: "trapezoid", title: "Trapezoid", match: ["trapezoid"], kind: "bone", region: "upper limb",
    summary: "Small wedge-shaped bone of the distal carpal row between trapezium and capitate.",
    features: ["Articulates with the 2nd metacarpal, trapezium, capitate and scaphoid"],
    function: "Stable base for the index metacarpal",
    clinical: "Least commonly fractured carpal bone, being well protected by its neighbours."
  },
  {
    key: "capitate", title: "Capitate", match: ["capitate"], kind: "bone", region: "upper limb",
    summary: "Largest carpal bone, at the centre of the wrist in the distal row.",
    features: ["Head fits into the concavity of scaphoid and lunate", "Articulates mainly with the 3rd metacarpal", "Origin of deep head of FPB and part of adductor pollicis"],
    function: "Keystone of the carpal arch; axis of wrist movement",
    clinical: "Usually the first carpal bone to ossify (first few months of life) — used in bone-age assessment."
  },
  {
    key: "hamate", title: "Hamate", match: ["hamate"], kind: "bone", region: "upper limb",
    summary: "Wedge-shaped medial bone of the distal carpal row with a hook (hamulus) projecting into the palm.",
    features: ["Hook of hamate (flexor retinaculum, FDMB, ODM)", "Articulates with the 4th and 5th metacarpals", "Lateral boundary of Guyon's canal"],
    function: "Medial attachment of the flexor retinaculum (roof of carpal tunnel)",
    clinical: "Hook of hamate fracture in golf, racket and baseball players (handle hits the palm) → ulnar-sided pain, possible ulnar nerve symptoms."
  },
  {
    key: "metacarpal", title: "Metacarpal bones", match: ["metacarpal bone"], kind: "bone", region: "upper limb",
    summary: "Five long bones of the palm, numbered from the thumb (1st) to the little finger (5th).",
    features: ["Base (articulates with carpus and adjacent metacarpals)", "Shaft", "Head (knuckle; MCP joint)", "1st metacarpal shortest, most mobile (saddle CMC joint)"],
    function: "Skeleton of the palm; form the arches of the hand",
    clinical: "Boxer's fracture: neck of the 5th metacarpal from punching. Bennett's fracture: intra-articular fracture-dislocation of the base of the 1st metacarpal."
  },
  {
    key: "phalanges-hand", title: "Phalanges of the hand", match: ["of thumb", "of index finger", "of middle finger", "of ring finger", "of little finger"], kind: "bone", region: "upper limb",
    summary: "Fourteen finger bones: the thumb has two (proximal, distal), the other digits three (proximal, middle, distal).",
    features: ["Base, shaft and head (trochlea) of each phalanx", "Distal phalanges end in a tuberosity (tuft) supporting the nail bed", "Joints: MCP (condyloid), PIP and DIP (hinge)"],
    function: "Grasping, pinching and fine manipulation",
    clinical: "Mallet finger: avulsion of the extensor tendon from the base of the distal phalanx (DIP droops). Tuft fractures from crush injuries. Jersey finger = FDP avulsion."
  },
  // ───────────────────────────── BONES: PELVIS & LOWER LIMB ─────────────────────────────
  {
    key: "hip-bone", title: "Hip bone (os coxae)", match: ["hip bone"], kind: "bone", region: "pelvis",
    summary: "Large irregular bone formed by fusion of the ilium, ischium and pubis at the acetabulum; with the sacrum it forms the pelvis.",
    features: ["Ilium: iliac crest, ASIS, AIIS, PSIS, PIIS, iliac fossa, gluteal lines, auricular surface, arcuate line", "Ischium: ischial spine, ischial tuberosity, greater and lesser sciatic notches", "Pubis: body, superior and inferior rami, pubic tubercle, pubic crest, pecten pubis, symphyseal surface", "Acetabulum (lunate surface, acetabular notch)", "Obturator foramen"],
    function: "Transmits body weight to the lower limbs; protects pelvic viscera; attachment of trunk and lower-limb muscles",
    clinical: "The pelvic ring usually breaks in two places; pelvic fractures can cause life-threatening haemorrhage. Adolescent avulsion fractures: ASIS (sartorius), AIIS (rectus femoris), ischial tuberosity (hamstrings). Iliac crest is used for bone marrow biopsy and bone graft.",
    facts: ["The three parts fuse at the Y-shaped (triradiate) cartilage in the acetabulum in mid-adolescence."]
  },
  {
    key: "femur", title: "Femur", match: ["femur"], kind: "bone", region: "lower limb",
    summary: "Longest and strongest bone in the body; the thigh bone.",
    features: ["Head with fovea (ligament of head)", "Neck (neck–shaft angle ~125°)", "Greater and lesser trochanters, intertrochanteric line and crest, quadrate tubercle", "Gluteal tuberosity, pectineal line, linea aspera", "Medial and lateral condyles and epicondyles; adductor tubercle", "Intercondylar fossa; patellar surface"],
    function: "Supports body weight; lever for hip and knee movement",
    clinical: "Intracapsular femoral neck fracture in the elderly → leg shortened and laterally rotated; risk of avascular necrosis of the head (retinacular branches of the medial circumflex femoral artery are torn). Slipped capital femoral epiphysis in obese adolescents. Shaft fractures can lose >1 L of blood."
  },
  {
    key: "patella", title: "Patella", match: ["patella"], kind: "bone", region: "lower limb",
    summary: "Kneecap — the largest sesamoid bone, within the quadriceps tendon.",
    features: ["Base (superior; quadriceps tendon)", "Apex (inferior; patellar ligament)", "Posterior articular surface with larger lateral and smaller medial facets"],
    function: "Increases the leverage of quadriceps; protects the front of the knee joint",
    clinical: "Lateral patellar dislocation (lateral pull of quadriceps, larger Q-angle; resisted by VMO and the lateral femoral condyle). Bipartite patella (usually superolateral) can be mistaken for a fracture. Transverse fractures disrupt the extensor mechanism."
  },
  {
    key: "tibia", title: "Tibia", match: ["tibia"], kind: "bone", region: "lower limb",
    summary: "Shin bone — the medial, weight-bearing bone of the leg.",
    features: ["Medial and lateral condyles (tibial plateau)", "Intercondylar eminence (cruciate and meniscal attachments)", "Tibial tuberosity (patellar ligament)", "Gerdy's tubercle (iliotibial tract)", "Subcutaneous anterior border and medial surface", "Soleal line", "Medial malleolus; fibular notch"],
    function: "Transmits body weight from femur to talus",
    clinical: "Most common long bone to have an open (compound) fracture because its anteromedial surface is subcutaneous; slow healing distally. Tibial plateau fractures (bumper injury). Osgood–Schlatter disease = traction apophysitis of the tibial tuberosity in adolescents."
  },
  {
    key: "fibula", title: "Fibula", match: ["fibula"], kind: "bone", region: "lower limb",
    summary: "Slender lateral bone of the leg; bears little weight but stabilises the ankle and anchors muscles.",
    features: ["Head (apex/styloid process; biceps femoris and fibular collateral ligament)", "Neck", "Shaft", "Lateral malleolus (lower than the medial malleolus)"],
    function: "Muscle attachment; forms the lateral wall of the ankle mortise",
    clinical: "The common fibular nerve winds round the fibular neck — injured by fractures or tight casts → foot drop. Lateral malleolus fractures (Weber A–C) are the commonest ankle fractures. Used as a vascularised bone graft (e.g. mandible reconstruction)."
  },
  {
    key: "talus", title: "Talus", match: ["talus"], kind: "bone", region: "lower limb",
    summary: "Tarsal bone between the leg and the foot; has no muscle attachments.",
    features: ["Body with trochlea (articulates in the ankle mortise)", "Neck", "Head (articulates with navicular)", "Posterior process with groove for FHL", "Sulcus tali (forms tarsal sinus/canal with calcaneus)"],
    function: "Transmits body weight from the tibia to the rest of the foot",
    clinical: "Talar neck fracture (forced dorsiflexion, 'aviator's astragalus') → high risk of avascular necrosis of the body because blood supply enters distally. Osteochondral lesions of the talar dome cause chronic ankle pain."
  },
  {
    key: "calcaneus", title: "Calcaneus", match: ["calcaneus"], kind: "bone", region: "lower limb",
    summary: "Heel bone — the largest tarsal bone.",
    features: ["Calcaneal tuberosity (calcaneal tendon; medial and lateral processes)", "Sustentaculum tali (supports talus; FHL groove beneath)", "Fibular trochlea", "Sulcus calcanei", "Cuboid articular surface"],
    function: "Transmits body weight to the ground; lever for plantarflexion",
    clinical: "Fracture from a fall from height (axial load) — check the lumbar spine for associated fractures; Böhler's angle is reduced. Plantar fasciitis causes heel pain at the medial tubercle.",
    facts: ["Calcaneal apophysitis (Sever disease) is a common cause of heel pain in active children."]
  },
  {
    key: "navicular-foot", title: "Navicular (foot)", match: ["navicular bone of foot"], kind: "bone", region: "lower limb",
    summary: "Boat-shaped tarsal bone on the medial side of the foot, between the talar head and the cuneiforms.",
    features: ["Navicular tuberosity (main insertion of tibialis posterior)", "Concave posterior surface for the talar head", "Three anterior facets for the cuneiforms"],
    function: "Keystone of the medial longitudinal arch",
    clinical: "Navicular stress fracture in sprinters/jumpers (poorly vascularised central third). An accessory navicular can cause medial foot pain. Köhler disease = osteochondrosis in children."
  },
  {
    key: "cuboid", title: "Cuboid", match: ["cuboid bone"], kind: "bone", region: "lower limb",
    summary: "Cube-shaped tarsal bone on the lateral side of the foot.",
    features: ["Groove for the fibularis longus tendon on its plantar surface", "Tuberosity", "Articulates with calcaneus, 4th and 5th metatarsals, lateral cuneiform (and sometimes navicular)"],
    function: "Part of the lateral longitudinal arch; pulley for fibularis longus",
    clinical: "'Nutcracker' fracture from forced abduction of the forefoot; cuboid syndrome causes lateral midfoot pain in athletes."
  },
  {
    key: "cuneiform", title: "Cuneiform bones (medial, intermediate, lateral)", match: ["cuneiform bone"], kind: "bone", region: "lower limb",
    summary: "Three wedge-shaped tarsal bones between the navicular and the first three metatarsals.",
    features: ["Medial cuneiform: largest; insertion of tibialis anterior and fibularis longus", "Intermediate cuneiform: smallest, recessed so the 2nd metatarsal base is 'keyed in'", "Lateral cuneiform: articulates with the cuboid and 3rd metatarsal"],
    function: "Form the transverse arch of the foot",
    clinical: "Lisfranc injury: disruption of the tarsometatarsal joints; the Lisfranc ligament runs from the medial cuneiform to the base of the 2nd metatarsal — easily missed on X-ray."
  },
  {
    key: "fifth-metatarsal", title: "Fifth metatarsal", match: ["fifth metatarsal bone"], kind: "bone", region: "lower limb",
    summary: "Lateral metatarsal with a prominent tuberosity at its base.",
    features: ["Tuberosity (fibularis brevis insertion)", "Dorsal base (fibularis tertius)", "Shaft and head"],
    function: "Forms the lateral border of the forefoot and lateral longitudinal arch",
    clinical: "Avulsion fracture of the tuberosity in inversion injuries (fibularis brevis/lateral plantar aponeurosis). Jones fracture at the metaphyseal–diaphyseal junction heals poorly (watershed blood supply)."
  },
  {
    key: "metatarsal", title: "Metatarsal bones", match: ["metatarsal bone"], kind: "bone", region: "lower limb",
    summary: "Five long bones of the forefoot, numbered from medial (big toe) to lateral.",
    features: ["Base, shaft and head", "1st metatarsal: shortest, thickest; two sesamoids under its head", "2nd: longest, base keyed between cuneiforms"],
    function: "Bear weight during the stance and push-off phases of gait; form the arches of the foot",
    clinical: "March (stress) fractures typically affect the 2nd/3rd metatarsal shafts. Morton's neuroma lies between the 3rd and 4th metatarsal heads. Hallux valgus involves medial deviation of the 1st metatarsal."
  },
  {
    key: "phalanges-foot", title: "Phalanges of the foot", match: ["of big toe", "of second toe", "of third toe", "of fourth toe", "of little toe"], kind: "bone", region: "lower limb",
    summary: "Fourteen toe bones: the big toe (hallux) has two, the others three (the middle and distal phalanges of the little toe are often fused).",
    features: ["Base, shaft and head", "Distal phalanges with tuberosities", "MTP joints (condyloid) and IP joints (hinge)"],
    function: "Balance and push-off during walking",
    clinical: "Stubbed-toe fractures are common and usually treated by buddy strapping; deformities include hammer, claw and mallet toes."
  },
  {
    key: "sesamoid-foot", title: "Sesamoid bones of the foot", match: ["sesamoid bone of foot"], kind: "bone", region: "lower limb",
    summary: "Two small bones (medial/tibial and lateral/fibular) within the tendons of flexor hallucis brevis under the 1st metatarsal head.",
    features: ["Medial (tibial) and lateral (fibular) sesamoids", "Separated by the groove for the FHL tendon", "Plantar plate attachments"],
    function: "Protect the FHL tendon, increase the lever arm of FHB and absorb weight under the first metatarsal head",
    clinical: "Sesamoiditis and stress fractures in dancers and runners; a bipartite medial sesamoid is a normal variant that can mimic a fracture."
  },
  // ───────────────────────────── TEETH & GUMS ─────────────────────────────
  {
    key: "teeth", title: "Teeth (permanent dentition)", match: ["tooth"], kind: "organ", region: "head & neck",
    summary: "Permanent (secondary) teeth anchored in the alveolar processes of the maxilla and mandible by gomphosis joints.",
    features: ["Per quadrant: 2 incisors, 1 canine, 2 premolars, 3 molars (32 total; third molars are absent in this model)", "Crown, neck and root", "Enamel, dentine, pulp, cementum and periodontal ligament", "Canine has the longest root"],
    function: "Cutting (incisors), tearing (canines) and grinding (premolars, molars) food; speech",
    innervation: "Upper teeth: superior alveolar nerves (CN V2); lower teeth: inferior alveolar nerve (CN V3)",
    blood: "Superior and inferior alveolar arteries (maxillary artery)",
    clinical: "Lower third molar extraction risks inferior alveolar and lingual nerve injury. Upper molar roots project close to the maxillary sinus (sinusitis can present as toothache). Dental abscess can spread to fascial spaces (Ludwig's angina).",
    facts: ["Enamel is the hardest substance in the body.", "Dental formula (permanent) 2-1-2-3; deciduous 2-1-0-2 (20 teeth)."]
  },
  {
    key: "gingiva", title: "Gingiva (gums)", match: ["gingiva"], kind: "organ", region: "head & neck",
    summary: "Keratinised oral mucosa covering the alveolar processes and surrounding the necks of the teeth.",
    features: ["Free (marginal) gingiva and gingival sulcus", "Attached gingiva bound to alveolar bone", "Interdental papillae", "Mucogingival junction with the alveolar mucosa"],
    function: "Seals and protects the tooth-supporting tissues",
    innervation: "Upper: superior alveolar, infraorbital, greater palatine and nasopalatine nerves (V2). Lower: inferior alveolar via mental nerve (labial), lingual and buccal nerves (V3)",
    clinical: "Gingivitis (plaque) can progress to periodontitis and tooth loss. Drug-induced gingival hyperplasia: phenytoin, ciclosporin, calcium-channel blockers (nifedipine). Blue 'Burton's line' in lead poisoning."
  },
  // ───────────────────────────── CONNECTIVE TISSUE ─────────────────────────────
  {
    key: "epicranial-aponeurosis", title: "Epicranial aponeurosis (galea aponeurotica)", match: ["aponeurosis of epicranius"], kind: "other", region: "head & neck",
    summary: "Tough fibrous sheet over the skull vault connecting the frontal and occipital bellies of occipitofrontalis.",
    features: ["Layer 'A' of the SCALP", "Attached posteriorly to the occipital bellies/superior nuchal line, anteriorly to the frontal bellies", "Lies on the loose areolar tissue layer"],
    function: "Allows coordinated movement of the scalp by occipitofrontalis",
    clinical: "A scalp wound gapes if the galea is cut transversely. The loose areolar layer beneath is the 'danger zone' — infection can spread via emissary veins into the cranial cavity; subgaleal haemorrhage in neonates can be massive.",
    mnemonic: "SCALP: Skin, Connective tissue (dense), Aponeurosis, Loose areolar tissue, Pericranium."
  },
  {
    key: "calcaneal-tendon", title: "Calcaneal (Achilles) tendon", match: ["calcaneal tendon"], kind: "other", region: "lower limb",
    summary: "Thickest and strongest tendon in the body, the common tendon of gastrocnemius and soleus (triceps surae).",
    features: ["Inserts into the middle of the posterior surface of the calcaneus", "Fibres rotate ~90° as they descend", "Retrocalcaneal bursa deep to the insertion", "Plantaris tendon runs along its medial side"],
    function: "Transmits the force of triceps surae for plantarflexion (walking, running, jumping)",
    clinical: "Rupture (often 2–6 cm above the insertion, a poorly vascularised zone) → feeling of being 'kicked in the heel'; positive Thompson (Simmonds) calf-squeeze test. Ankle-jerk reflex (S1–S2) tests this unit. Fluoroquinolones increase rupture risk."
  },
  {
    key: "flexor-retinaculum-wrist", title: "Flexor retinaculum of the wrist (transverse carpal ligament)", match: ["flexor retinaculum of wrist"], kind: "other", region: "upper limb",
    summary: "Strong fibrous band across the front of the carpus that forms the roof of the carpal tunnel.",
    features: ["Lateral attachments: scaphoid tubercle and trapezium", "Medial attachments: pisiform and hook of hamate", "Carpal tunnel contents: median nerve + 4 FDS + 4 FDP + FPL tendons (FCR in a separate split)", "Superficial to it: ulnar nerve and artery, palmar cutaneous branch of median nerve, palmaris longus"],
    function: "Holds the long flexor tendons against the carpus (acts as a pulley); origin of thenar and hypothenar muscles",
    clinical: "Carpal tunnel syndrome: median nerve compression → paraesthesia of the lateral 3½ digits (palm spared, as the palmar cutaneous branch passes superficial), thenar wasting; Tinel and Phalen tests; treated by dividing the retinaculum."
  },
  {
    key: "taeniae-coli", title: "Taeniae coli (free, mesocolic, omental)", match: ["taenia"], kind: "other", region: "abdomen",
    summary: "Three longitudinal bands formed by the outer longitudinal muscle layer of the colon.",
    features: ["Mesocolic taenia: posteromedial, at the attachment of the transverse/sigmoid mesocolon", "Omental taenia: posterolateral, where the greater omentum attaches on the transverse colon", "Free taenia: anterior, no attachment", "Converge at the base of the appendix; spread out at the rectosigmoid junction (absent in the rectum)"],
    function: "Their tonic contraction (being shorter than the colon) creates the sacculations (haustra)",
    clinical: "Surgeons follow the taeniae down to the caecum to locate the appendix base. Taeniae, haustra and omental appendices distinguish colon from small intestine."
  },
  {
    key: "iliotibial-tract", title: "Iliotibial tract (band)", match: ["iliotibial tract"], kind: "other", region: "lower limb",
    summary: "Thickened lateral part of the fascia lata running from the iliac crest to the lateral tibial condyle.",
    features: ["Receives tensor fasciae latae and most of gluteus maximus", "Inserts on Gerdy's tubercle (anterolateral tibial condyle)", "Passes over the lateral femoral epicondyle"],
    function: "Stabilises the hip and the extended knee laterally; helps maintain upright posture",
    clinical: "Iliotibial band syndrome: lateral knee pain in runners/cyclists from friction over the lateral femoral epicondyle."
  },
  {
    key: "inguinal-ligament", title: "Inguinal ligament", match: ["inguinal ligament"], kind: "other", region: "pelvis",
    summary: "Rolled-under inferior border of the external oblique aponeurosis, from the ASIS to the pubic tubercle.",
    features: ["Forms the floor of the inguinal canal", "Medially gives the lacunar and pectineal ligaments", "Superior boundary of the femoral triangle", "Midinguinal point (femoral artery) vs midpoint of the ligament (deep inguinal ring)"],
    function: "Separates abdomen from thigh; retinaculum for structures passing to the thigh",
    clinical: "Inguinal hernias appear above and medial to the pubic tubercle; femoral hernias below and lateral to it. Structures beneath it (lateral → medial): femoral Nerve, Artery, Vein, Empty space, Lymphatics (NAVEL).",
    mnemonic: "NAVEL (lateral → medial): Nerve, Artery, Vein, Empty space (femoral canal), Lymphatics."
  },
  {
    key: "intermediate-tendon", title: "Intermediate tendon of digastric", match: ["intermediate tendon"], kind: "other", region: "head & neck",
    summary: "Short round tendon joining the anterior and posterior bellies of the digastric, slung to the hyoid.",
    features: ["Held to the body and greater horn of the hyoid by a fibrous loop (sling)", "Passes through (perforates) the stylohyoid insertion"],
    function: "Lets the two-bellied digastric act as a pulley to depress the mandible and elevate the hyoid",
    clinical: "Marks the apex of the submandibular (digastric) triangle; the hypoglossal nerve runs just above it.",
    facts: ["The omohyoid also has an intermediate tendon, tethered to the clavicle by a fascial sling."]
  },
  {
    key: "interosseous-membrane-forearm", title: "Interosseous membrane of the forearm", match: ["interosseous membrane of forearm"], kind: "other", region: "upper limb",
    summary: "Fibrous sheet joining the interosseous borders of the radius and ulna (a syndesmosis).",
    features: ["Main fibres run inferomedially from radius to ulna", "Gap superiorly for the posterior interosseous vessels", "Anterior interosseous vessels pierce it distally", "Separates anterior and posterior compartments"],
    function: "Transfers forces from the hand (radius) to the ulna and humerus; attachment for deep forearm muscles",
    clinical: "Essex-Lopresti injury: radial head fracture + interosseous membrane tear + distal radioulnar joint disruption (proximal migration of the radius)."
  },
  {
    key: "interosseous-membrane-leg", title: "Interosseous membrane of the leg", match: ["interosseous membrane of leg"], kind: "other", region: "lower limb",
    summary: "Strong fibrous sheet between the interosseous borders of the tibia and fibula.",
    features: ["Separates anterior and posterior compartments", "Opening superiorly for the anterior tibial vessels", "Perforating branch of the fibular artery passes through distally", "Continuous distally with the interosseous ligament of the tibiofibular syndesmosis"],
    function: "Binds tibia and fibula; attachment for leg muscles; transmits load",
    clinical: "Maisonneuve fracture: proximal fibular fracture + medial ankle injury + tear of the syndesmosis/interosseous membrane — always examine the whole fibula in ankle injuries."
  },
  {
    key: "linea-alba", title: "Linea alba", match: ["linea alba"], kind: "other", region: "abdomen",
    summary: "Midline fibrous raphe from the xiphoid process to the pubic symphysis, formed by interlacing aponeuroses of the anterolateral abdominal muscles.",
    features: ["Umbilicus lies within it", "Broader above the umbilicus, narrow below", "Separates the two rectus sheaths"],
    function: "Central anchoring line of the anterior abdominal wall",
    clinical: "Relatively avascular — used for midline laparotomy incisions. Epigastric hernias occur through it; diastasis recti widens it (e.g. pregnancy). Pigmented as the linea nigra in pregnancy."
  },
  {
    key: "long-plantar-ligament", title: "Long plantar ligament", match: ["long plantar ligament"], kind: "other", region: "lower limb",
    summary: "Longest ligament of the sole, running from the calcaneus to the cuboid and lateral metatarsal bases.",
    features: ["From the plantar surface of the calcaneus (anterior to the tuberosity)", "To the ridge/tuberosity of the cuboid and bases of the lateral metatarsals", "Forms a tunnel for the fibularis longus tendon", "Short plantar (plantar calcaneocuboid) ligament lies deep to it"],
    function: "Supports the lateral longitudinal arch",
    clinical: "Arch-supporting ligaments (with plantar aponeurosis and spring ligament) fail in acquired flatfoot."
  },
  {
    key: "nasal-cartilages", title: "Nasal cartilages", match: ["nasal cartilage"], kind: "other", region: "head & neck",
    summary: "Hyaline cartilages forming the flexible lower part of the external nose and anterior septum.",
    features: ["Septal cartilage", "Lateral (upper lateral) cartilages", "Major alar cartilages with medial and lateral crura", "Minor alar (accessory) cartilages"],
    function: "Shape and support the external nose; keep the nasal valves open",
    clinical: "Septal haematoma after trauma must be drained urgently to prevent cartilage necrosis and saddle-nose deformity. The internal nasal valve (between septum and upper lateral cartilage) is the narrowest part of the airway."
  },
  {
    key: "tendinous-arch-levator-ani", title: "Tendinous arch of levator ani", match: ["tendinous arch of levator ani"], kind: "other", region: "pelvis",
    summary: "Thickened band of obturator internus fascia from the pubis to the ischial spine, giving origin to the levator ani.",
    features: ["Runs from the posterior body of the pubis to the ischial spine", "Origin of iliococcygeus and part of pubococcygeus"],
    function: "Anchors the pelvic diaphragm to the lateral pelvic wall",
    clinical: "Detachment of pelvic floor support from the lateral wall contributes to pelvic organ prolapse; used as an anchor point in pelvic floor repair."
  },
  {
    key: "thyroid-cartilage", title: "Thyroid cartilage", match: ["thyroid cartilage"], kind: "other", region: "head & neck",
    summary: "Largest laryngeal cartilage; its two laminae meet anteriorly as the laryngeal prominence (Adam's apple) at about C4–C5.",
    features: ["Right and left laminae", "Laryngeal prominence and superior thyroid notch", "Superior horns (thyrohyoid ligament) and inferior horns (cricothyroid joints)", "Oblique line (sternothyroid, thyrohyoid, inferior constrictor)", "Vocal ligaments attach to the inner angle"],
    function: "Protects the larynx and vocal folds; tilting at the cricothyroid joint tenses the vocal folds (pitch)",
    clinical: "Emergency airway: cricothyroidotomy through the cricothyroid membrane just below it. Hyaline cartilage that may ossify with age (can mimic a foreign body on X-ray). More prominent in males after puberty."
  },
  // ───────────────────────────── NERVOUS SYSTEM: EYE & VISUAL PATHWAY ─────────────────────────────
  {
    key: "eyeball", title: "Eyeball (globe)", match: ["eyeball"], kind: "organ", region: "head & neck",
    summary: "The organ of sight: a fluid-filled sphere with three coats that focuses light onto the retina.",
    features: ["Fibrous coat: sclera and cornea", "Vascular coat (uvea): choroid, ciliary body, iris", "Inner coat: retina, with optic disc (blind spot), macula and fovea", "Lens (suspended by zonular fibres)", "Aqueous humour (anterior and posterior chambers) and vitreous body"],
    function: "Refracts light (cornea ≈ two-thirds of refractive power, lens provides accommodation) onto photoreceptors; converts light into neural signals",
    innervation: "Extraocular muscles: CN III, IV (superior oblique), VI (lateral rectus). Sensory: CN V1 (nasociliary → long ciliary nerves). Parasympathetic (CN III via ciliary ganglion): sphincter pupillae and ciliary muscle. Sympathetic: dilator pupillae",
    blood: "Ophthalmic artery (central retinal artery, ciliary arteries)",
    clinical: "Central retinal artery occlusion → sudden painless monocular loss with a cherry-red spot. Glaucoma = optic neuropathy usually with raised intraocular pressure (impaired aqueous drainage via the canal of Schlemm). Papilloedema = optic disc swelling from raised ICP. Horner syndrome: ptosis, miosis, anhidrosis.",
    mnemonic: "Extraocular nerves: 'LR6 SO4, rest 3'."
  },
  {
    key: "optic-nerve", title: "Optic nerve (CN II)", match: ["optic nerve"], kind: "brain", region: "head & neck",
    summary: "Carries visual information from the retina of one eye to the optic chiasm; technically a CNS tract wrapped in meninges.",
    function: "Transmits all visual information from the ipsilateral eye; afferent limb of the pupillary light reflex",
    features: ["Axons of retinal ganglion cells", "Myelinated by oligodendrocytes (hence affected in MS)", "Leaves the orbit through the optic canal with the ophthalmic artery", "Surrounded by dura, arachnoid and pia with subarachnoid space"],
    clinical: "Lesion → ipsilateral monocular blindness and a relative afferent pupillary defect (Marcus Gunn pupil: swinging-light test shows paradoxical dilation). Optic neuritis (often MS) → painful visual loss, colour desaturation. Raised ICP transmitted along its sheath → papilloedema."
  },
  {
    key: "optic-chiasm", title: "Optic chiasm", match: ["optic chiasm"], kind: "brain", region: "head & neck",
    summary: "X-shaped crossing where fibres from the nasal half of each retina decussate, just above the pituitary gland.",
    function: "Routes information from each visual hemifield to the opposite hemisphere: nasal retinal fibres (carrying the temporal visual fields) cross; temporal retinal fibres stay ipsilateral",
    features: ["Lies above the diaphragma sellae and pituitary, anterior to the tuber cinereum/infundibulum", "Forms part of the floor of the third ventricle", "Internal carotid arteries lie lateral to it"],
    clinical: "Compression of the crossing fibres → bitemporal hemianopia ('tunnel vision'). A pituitary adenoma (from below) typically affects the superior temporal fields first; a craniopharyngioma (from above) the inferior fields first."
  },
  {
    key: "optic-tract", title: "Optic tract", match: ["optic tract"], kind: "brain", region: "head & neck",
    summary: "Continuation of visual fibres from the chiasm around the cerebral peduncle to the lateral geniculate body.",
    function: "Carries ipsilateral temporal and contralateral nasal retinal fibres — i.e. the entire contralateral visual field; some fibres go to the pretectal area (pupillary reflex) and superior colliculus",
    features: ["Winds around the cerebral peduncle", "Ends mainly in the lateral geniculate body"],
    clinical: "Lesion → contralateral homonymous hemianopia (often incongruous), sometimes with a relative afferent pupillary defect in the contralateral eye."
  },
  {
    key: "lateral-geniculate-body", title: "Lateral geniculate body (nucleus)", match: ["lateral geniculate body"], kind: "brain", region: "head & neck",
    summary: "Thalamic relay nucleus of the visual pathway, on the posterior underside of the thalamus.",
    function: "Relays visual information from the optic tract to primary visual cortex (area 17) via the optic radiations (geniculocalcarine tract)",
    features: ["Six layers: 1, 4, 6 receive contralateral eye; 2, 3, 5 ipsilateral eye", "Magnocellular layers 1–2 (motion), parvocellular layers 3–6 (detail, colour)"],
    clinical: "Lesion → contralateral homonymous hemianopia.",
    mnemonic: "Lateral = Light (vision); Medial = Music (hearing)."
  },
  {
    key: "superior-colliculus", title: "Superior colliculus", match: ["superior colliculus"], kind: "brain", region: "head & neck",
    summary: "Upper pair of bumps on the back of the midbrain (tectum) involved in visual reflexes.",
    function: "Orients the eyes and head toward visual stimuli (reflex saccades); gives rise to the tectospinal tract; integrates visual, auditory and somatic input",
    clinical: "Dorsal midbrain (Parinaud) syndrome — e.g. from a pineal tumour compressing the tectum/posterior commissure: upgaze palsy, light–near dissociation of pupils, convergence–retraction nystagmus, eyelid retraction (Collier's sign)."
  },
  {
    key: "brachium-superior-colliculus", title: "Brachium of superior colliculus", match: ["brachium of superior colliculus"], kind: "brain", region: "head & neck",
    summary: "Fibre bundle connecting the optic tract (bypassing the lateral geniculate body) with the superior colliculus and pretectal area.",
    function: "Carries retinal and visual cortical fibres for visual reflexes, including the pathway to the pretectal nuclei for the pupillary light reflex",
    clinical: "Explains why the pupillary light reflex is preserved in cortical blindness (pathway leaves before the geniculate/cortex)."
  },
  {
    key: "inferior-colliculus", title: "Inferior colliculus", match: ["inferior colliculus"], kind: "brain", region: "head & neck",
    summary: "Lower pair of bumps on the back of the midbrain; a major relay in the auditory pathway.",
    function: "Integrates ascending auditory input (via lateral lemniscus) for sound localisation and auditory reflexes (startle); projects to the medial geniculate body",
    clinical: "Lies just above the exit of CN IV (trochlear), the only cranial nerve to emerge from the dorsal brainstem. Auditory pathway is bilateral, so unilateral lesions rarely cause deafness."
  },
  {
    key: "brachium-inferior-colliculus", title: "Brachium of inferior colliculus", match: ["brachium of inferior colliculus"], kind: "brain", region: "head & neck",
    summary: "Fibre bundle linking the inferior colliculus to the medial geniculate body.",
    function: "Carries ascending auditory fibres from the inferior colliculus to the thalamus (medial geniculate body)",
    clinical: "Part of the central auditory pathway assessed by brainstem auditory evoked potentials."
  },
  {
    key: "medial-geniculate-body", title: "Medial geniculate body (nucleus)", match: ["medial geniculate body"], kind: "brain", region: "head & neck",
    summary: "Thalamic relay nucleus of the auditory pathway.",
    function: "Relays auditory information from the inferior colliculus to primary auditory cortex (transverse temporal gyri of Heschl, areas 41/42) via the acoustic radiation",
    clinical: "Unilateral lesions cause little hearing loss because auditory pathways are bilaterally represented above the cochlear nuclei.",
    mnemonic: "Medial = Music (hearing); Lateral = Light (vision)."
  },
  // ───────────────────────────── NERVOUS SYSTEM: BRAINSTEM & CEREBELLUM ─────────────────────────────
  {
    key: "midbrain", title: "Midbrain (mesencephalon)", match: ["midbrain"], kind: "brain", region: "head & neck",
    summary: "Uppermost part of the brainstem, between the pons and the diencephalon, traversed by the cerebral aqueduct.",
    function: "Contains CN III and IV nuclei, red nucleus and substantia nigra (dopaminergic motor control); visual and auditory reflex centres (colliculi); carries descending motor and ascending sensory tracts",
    features: ["Tectum (superior and inferior colliculi)", "Tegmentum (red nucleus, CN III/IV nuclei, periaqueductal grey)", "Substantia nigra", "Cerebral peduncles (crura cerebri)", "Cerebral aqueduct"],
    clinical: "Parkinson's disease: degeneration of the substantia nigra (pars compacta). Weber syndrome (ventral midbrain): ipsilateral CN III palsy + contralateral hemiparesis. Uncal herniation compresses the midbrain and CN III."
  },
  {
    key: "cerebral-peduncle", title: "Cerebral peduncle (peduncle of midbrain)", match: ["peduncle of midbrain"], kind: "brain", region: "head & neck",
    summary: "Massive paired columns on the ventral midbrain, carrying descending fibres from the cerebral cortex.",
    function: "Crus cerebri carries corticospinal (middle), corticobulbar and corticopontine fibres from cortex to brainstem and spinal cord",
    clinical: "Weber syndrome (PCA branch occlusion): CN III palsy + contralateral hemiplegia. In uncal herniation the opposite peduncle can be pushed against the tentorium (Kernohan's notch) → hemiparesis IPSILATERAL to the lesion (false localising sign)."
  },
  {
    key: "interpeduncular-fossa", title: "Interpeduncular fossa", match: ["interpeduncular fossa"], kind: "brain", region: "head & neck",
    summary: "Depression between the two cerebral peduncles on the ventral midbrain, from which the oculomotor nerves emerge.",
    function: "Landmark containing the posterior perforated substance (perforating branches of posterior cerebral arteries) and the emerging CN III; part of the interpeduncular cistern",
    clinical: "Posterior communicating artery aneurysms near here compress CN III → painful 'blown' pupil with ptosis and 'down and out' eye (parasympathetic fibres on the outside of the nerve are affected first)."
  },
  {
    key: "pons", title: "Pons", match: ["pons"], kind: "brain", region: "head & neck",
    summary: "Bulging middle part of the brainstem, bridging the midbrain and medulla and connected to the cerebellum by the middle cerebellar peduncles.",
    function: "Relays cortex to cerebellum (pontine nuclei); contains nuclei of CN V, VI, VII and VIII; respiratory centres (pneumotaxic, apneustic); carries long ascending/descending tracts",
    features: ["Ventral (basilar) part with pontine nuclei and transverse fibres", "Tegmentum", "Forms the upper floor of the fourth ventricle (facial colliculus)", "Basilar artery runs in its anterior groove"],
    clinical: "Locked-in syndrome: ventral pontine infarct (basilar artery) → quadriplegia and anarthria with preserved consciousness and vertical eye movements. Pontine haemorrhage → pinpoint pupils, coma. Osmotic demyelination (central pontine myelinolysis) from over-rapid correction of hyponatraemia."
  },
  {
    key: "medulla-oblongata", title: "Medulla oblongata", match: ["medulla oblongata"], kind: "brain", region: "head & neck",
    summary: "Lowest part of the brainstem, continuous with the spinal cord at the foramen magnum.",
    function: "Vital cardiovascular and respiratory centres; vomiting centre (area postrema); nuclei of CN IX, X, XII (and part of VIII, V); pyramidal decussation; relays dorsal column sensation (nucleus gracilis/cuneatus → medial lemniscus)",
    features: ["Pyramids (corticospinal tracts) and pyramidal decussation", "Olives (inferior olivary nuclei)", "Gracile and cuneate tubercles", "Lower floor of the fourth ventricle"],
    clinical: "Lateral medullary (Wallenberg) syndrome — PICA/vertebral artery: vertigo, ataxia, dysphagia, hoarseness, ipsilateral Horner's and facial pain/temperature loss, contralateral body pain/temperature loss. Medial medullary syndrome — contralateral hemiparesis and proprioceptive loss, ipsilateral tongue deviation (CN XII). Compression by tonsillar herniation is rapidly fatal."
  },
  {
    key: "cerebellum", title: "Cerebellum", match: ["cerebellum"], kind: "brain", region: "head & neck",
    summary: "'Little brain' in the posterior cranial fossa, behind the pons and medulla; coordinates movement.",
    function: "Coordinates voluntary movement, posture, balance, muscle tone and eye movements; motor learning. Vermis — trunk/axial control; hemispheres — ipsilateral limb coordination; flocculonodular lobe — balance and eye movements",
    features: ["Two hemispheres and midline vermis", "Anterior, posterior and flocculonodular lobes", "Deep nuclei: dentate, emboliform, globose, fastigial", "Superior (midbrain), middle (pons) and inferior (medulla) cerebellar peduncles", "Tonsils"],
    blood: "Superior cerebellar (SCA), anterior inferior cerebellar (AICA) and posterior inferior cerebellar (PICA) arteries",
    clinical: "Hemisphere lesions cause IPSILATERAL signs. Vermis lesions (e.g. alcohol) → truncal/gait ataxia.",
    mnemonic: "Cerebellar signs 'DANISH': Dysdiadochokinesia, Ataxia, Nystagmus, Intention tremor, Slurred (scanning) speech, Hypotonia."
  },
  {
    key: "fourth-ventricle", title: "Fourth ventricle", match: ["fourth ventricle"], kind: "brain", region: "head & neck",
    summary: "Diamond-shaped CSF cavity between the pons/upper medulla (floor) and the cerebellum (roof).",
    function: "Passes CSF from the cerebral aqueduct to the subarachnoid space and central canal",
    features: ["Floor = rhomboid fossa (facial colliculus, hypoglossal and vagal trigones, area postrema)", "Median aperture (foramen of Magendie)", "Two lateral apertures (foramina of Luschka)", "Choroid plexus in the roof"],
    clinical: "Posterior fossa tumours in children (medulloblastoma, ependymoma, pilocytic astrocytoma) obstruct it → hydrocephalus. Dandy–Walker malformation: cystic dilation with vermis hypoplasia.",
    mnemonic: "Luschka = Lateral, Magendie = Median."
  },
  {
    key: "cerebral-aqueduct", title: "Cerebral aqueduct (of Sylvius)", match: ["cerebral aqueduct"], kind: "brain", region: "head & neck",
    summary: "Narrow channel through the midbrain connecting the third and fourth ventricles.",
    function: "Conducts CSF from the third to the fourth ventricle; surrounded by periaqueductal grey (pain modulation)",
    clinical: "Aqueductal stenosis is the commonest cause of congenital obstructive hydrocephalus (lateral and third ventricles dilated, fourth normal). Tumours of the pineal/tectal region compress it."
  },
  {
    key: "central-canal", title: "Central canal of spinal cord", match: ["central canal"], kind: "brain", region: "back",
    summary: "Narrow ependyma-lined channel running through the centre of the spinal cord, continuous with the fourth ventricle; often obliterated in adults.",
    function: "Remnant of the neural tube lumen; may contain CSF",
    clinical: "Syringomyelia: a fluid-filled cavity (syrinx) around the central canal damages crossing spinothalamic fibres in the anterior white commissure → bilateral 'cape-like' loss of pain and temperature with preserved touch and proprioception; often with Chiari I malformation."
  },
  // ───────────────────────────── NERVOUS SYSTEM: DIENCEPHALON ─────────────────────────────
  {
    key: "thalamus", title: "Thalamus", match: ["thalamus"], kind: "brain", region: "head & neck",
    summary: "Paired egg-shaped grey matter masses forming the lateral walls of the third ventricle; the gateway to the cortex.",
    function: "Relays and gates sensory (all except smell), motor (cerebellar and basal ganglia loops), limbic and arousal information to the cortex. Key nuclei: VPL (body sensation), VPM (face sensation, taste), VL/VA (motor), LGN (vision), MGN (hearing), anterior (memory/Papez), mediodorsal (limbic/prefrontal), pulvinar (attention)",
    blood: "Thalamoperforating and thalamogeniculate branches of the posterior cerebral artery; posterior communicating and anterior choroidal arteries",
    clinical: "Thalamic stroke → contralateral hemisensory loss; later thalamic pain syndrome (Dejerine–Roussy). Bilateral paramedian infarcts (artery of Percheron) → coma/hypersomnolence and memory loss."
  },
  {
    key: "hypothalamus", title: "Hypothalamus", match: ["hypothalamus"], kind: "brain", region: "head & neck",
    summary: "Small region below the thalamus forming the floor and lower walls of the third ventricle; the master regulator of homeostasis.",
    function: "Controls the pituitary (releasing hormones; makes ADH and oxytocin), autonomic nervous system, temperature, hunger and thirst, circadian rhythms, sexual behaviour. Nuclei: supraoptic (ADH), paraventricular (oxytocin, CRH, ADH), arcuate (dopamine, releasing hormones), suprachiasmatic (circadian clock), ventromedial (satiety), lateral (hunger), anterior (cooling), posterior (heating)",
    features: ["Mammillary bodies", "Tuber cinereum and median eminence", "Infundibulum (pituitary stalk)", "Optic chiasm in front"],
    clinical: "Lesions → central diabetes insipidus (supraoptic/paraventricular), hyperphagia and obesity (ventromedial), anorexia (lateral), poikilothermia. Craniopharyngioma commonly affects it.",
    mnemonic: "Lateral lesion → Lean (loss of hunger); VentroMedial lesion → Very Massive (loss of satiety)."
  },
  {
    key: "mammillary-body", title: "Mammillary body", match: ["mammillary body"], kind: "brain", region: "head & neck",
    summary: "Paired round eminences at the back of the hypothalamus, part of the limbic memory circuit.",
    function: "Receive the fornix (from hippocampus) and project to the anterior thalamic nucleus via the mammillothalamic tract — part of the Papez circuit for memory",
    clinical: "Atrophy/haemorrhage in Wernicke–Korsakoff syndrome (thiamine deficiency, e.g. alcohol): Wernicke's triad of confusion, ophthalmoplegia, ataxia; Korsakoff's amnesia with confabulation."
  },
  {
    key: "tuber-cinereum", title: "Tuber cinereum", match: ["tuber cinereum"], kind: "brain", region: "head & neck",
    summary: "Grey-matter bulge of the hypothalamic floor between the optic chiasm and the mammillary bodies, from which the pituitary stalk arises.",
    function: "Contains the arcuate (infundibular) nucleus; its median eminence releases hypothalamic hormones into the hypophyseal portal system",
    clinical: "Hypothalamic hamartoma of the tuber cinereum → gelastic (laughing) seizures and central precocious puberty."
  },
  {
    key: "lamina-terminalis", title: "Lamina terminalis", match: ["lamina terminalis"], kind: "brain", region: "head & neck",
    summary: "Thin sheet forming the anterior wall of the third ventricle, from the optic chiasm to the rostrum of the corpus callosum.",
    function: "Contains the anterior commissure; the organum vasculosum (OVLT), a circumventricular organ lacking a blood–brain barrier, senses plasma osmolality to drive thirst and ADH release",
    clinical: "Represents the rostral end of the embryonic neural tube (closure of the anterior neuropore). May be fenestrated surgically to drain CSF."
  },
  {
    key: "habenula", title: "Habenula", match: ["habenula"], kind: "brain", region: "head & neck",
    summary: "Small paired nucleus of the epithalamus at the posterior dorsomedial thalamus, beside the pineal gland.",
    function: "Links forebrain limbic areas with midbrain monoamine centres: receives the stria medullaris, projects via the fasciculus retroflexus; involved in reward/aversion, stress responses and regulation of dopamine and serotonin",
    clinical: "The habenular commissure commonly calcifies (radiological midline marker near the pineal). Habenular overactivity is implicated in depression in research studies."
  },
  {
    key: "stria-medullaris", title: "Stria medullaris of thalamus", match: ["stria medullaris"], kind: "brain", region: "head & neck",
    summary: "Fibre bundle along the dorsomedial edge of the thalamus, at the attachment of the third ventricle roof.",
    function: "Carries fibres from the septal nuclei, hypothalamus and other limbic areas to the habenula (epithalamic limbic pathway)",
    clinical: "Marks the line of attachment of the tela choroidea of the third ventricle."
  },
  {
    key: "third-ventricle", title: "Third ventricle", match: ["third ventricle"], kind: "brain", region: "head & neck",
    summary: "Narrow midline CSF cavity between the two thalami and hypothalami.",
    function: "Receives CSF from the lateral ventricles via the interventricular foramina and passes it to the fourth ventricle via the cerebral aqueduct",
    features: ["Interthalamic adhesion crosses it", "Lamina terminalis anteriorly", "Optic, infundibular, pineal and suprapineal recesses", "Choroid plexus in its roof"],
    clinical: "Colloid cyst near the foramen of Monro → acute obstructive hydrocephalus (positional headache, sudden death). Endoscopic third ventriculostomy opens its floor to bypass aqueductal obstruction."
  },
  // ───────────────────────────── NERVOUS SYSTEM: VENTRICLES & CSF ─────────────────────────────
  {
    key: "lateral-ventricle", title: "Lateral ventricle", match: ["lateral ventricle"], kind: "brain", region: "head & neck",
    summary: "Large C-shaped CSF cavity within each cerebral hemisphere.",
    function: "Produces (choroid plexus) and contains CSF, which drains to the third ventricle via the interventricular foramen",
    features: ["Frontal (anterior) horn, body, atrium (trigone), occipital (posterior) horn, temporal (inferior) horn", "Choroid plexus in body, atrium and temporal horn (not frontal or occipital horns)", "Caudate nucleus in the lateral wall; corpus callosum in the roof; septum pellucidum medially"],
    clinical: "Ventriculomegaly in hydrocephalus; external ventricular drains are placed in the frontal horn (Kocher's point). Germinal matrix/intraventricular haemorrhage in preterm infants. Total CSF ~150 mL, produced ~500 mL/day."
  },
  {
    key: "interventricular-foramen", title: "Interventricular foramen (of Monro)", match: ["interventricular foramen"], kind: "brain", region: "head & neck",
    summary: "Opening connecting each lateral ventricle with the third ventricle.",
    function: "Channels CSF from the lateral ventricles to the third ventricle",
    features: ["Bounded anteriorly by the column of the fornix and posteriorly by the anterior thalamus", "Choroid plexus continuous through it"],
    clinical: "Obstruction (colloid cyst; subependymal giant cell astrocytoma in tuberous sclerosis) → hydrocephalus of one or both lateral ventricles."
  },
  {
    key: "choroid-plexus", title: "Choroid plexus", match: ["choroid plexus"], kind: "brain", region: "head & neck",
    summary: "Vascular fringes of pia and ependyma projecting into the ventricles that secrete CSF.",
    function: "Produces most of the CSF (~500 mL/day) via choroid epithelium, which forms the blood–CSF barrier",
    blood: "Anterior and posterior choroidal arteries (lateral ventricle); superior cerebellar/PICA branches (fourth ventricle)",
    clinical: "Commonly calcifies (glomus in the atrium) — a radiological landmark. Choroid plexus papilloma can cause hydrocephalus by CSF overproduction. Choroid plexus cysts are a common fetal ultrasound finding."
  },
  {
    key: "septum-pellucidum", title: "Septum pellucidum", match: ["septum pellucidum"], kind: "brain", region: "head & neck",
    summary: "Thin vertical double membrane separating the frontal horns and bodies of the two lateral ventricles.",
    function: "Partition between the lateral ventricles, stretching from the corpus callosum to the fornix; contains fibres related to the septal nuclei",
    clinical: "Cavum septi pellucidi (fluid between its leaves) is a normal variant but is more common in boxers. Absence occurs in septo-optic dysplasia (optic nerve hypoplasia, pituitary deficiency). Midline shift on CT is measured at the septum."
  },
  // ───────────────────────────── NERVOUS SYSTEM: COMMISSURES & WHITE MATTER ─────────────────────────────
  {
    key: "corpus-callosum", title: "Corpus callosum", match: ["corpus callosum"], kind: "brain", region: "head & neck",
    summary: "Largest commissure of the brain — a thick arch of white matter joining the two cerebral hemispheres.",
    function: "Connects corresponding cortical areas of the two hemispheres, allowing interhemispheric transfer of information",
    features: ["Rostrum, genu, body (trunk) and splenium", "Forms the roof of the lateral ventricles"],
    blood: "Pericallosal branches of the anterior cerebral artery; splenium from the posterior cerebral artery",
    clinical: "Callosotomy (for intractable epilepsy) → disconnection ('split-brain') syndrome. Agenesis may be asymptomatic. MS plaques at the callososeptal interface (Dawson's fingers). Glioblastoma crossing it → 'butterfly glioma'."
  },
  {
    key: "anterior-commissure", title: "Anterior commissure", match: ["anterior commissure"], kind: "brain", region: "head & neck",
    summary: "Small bundle crossing the midline in the lamina terminalis, in front of the columns of the fornix.",
    function: "Connects the two temporal lobes (including amygdalae) and olfactory structures",
    clinical: "The anterior commissure–posterior commissure (AC–PC) line is the reference plane for stereotactic neurosurgery and brain atlases."
  },
  {
    key: "posterior-commissure", title: "Posterior commissure", match: ["posterior commissure"], kind: "brain", region: "head & neck",
    summary: "Fibre bundle crossing at the junction of the third ventricle and cerebral aqueduct, below the pineal gland.",
    function: "Connects the pretectal nuclei for the consensual pupillary light reflex; involved in vertical gaze",
    clinical: "Damage (e.g. pineal tumour) contributes to Parinaud syndrome with upgaze palsy and light–near dissociation. Defines the posterior point of the AC–PC line."
  },
  {
    key: "fornix", title: "Fornix", match: ["fornix of forebrain"], kind: "brain", region: "head & neck",
    summary: "Arched C-shaped fibre tract that is the main output of the hippocampus.",
    function: "Carries hippocampal output (fimbria → crus → body → columns) to the mammillary bodies and septal nuclei — part of the Papez circuit for memory",
    clinical: "Bilateral fornix damage (e.g. during colloid cyst removal) causes anterograde amnesia. Its columns form the anterior boundary of the interventricular foramen."
  },
  {
    key: "commissure-of-fornix", title: "Commissure of fornix (hippocampal commissure)", match: ["commissure of fornix of forebrain"], kind: "brain", region: "head & neck",
    summary: "Thin sheet of fibres crossing between the two crura of the fornix beneath the splenium of the corpus callosum.",
    function: "Connects the hippocampal formations of the two sides",
    clinical: "Small in humans; damaged together with the fornix/splenium in midline lesions affecting memory."
  },
  {
    key: "internal-capsule", title: "Internal capsule", match: ["internal capsule"], kind: "brain", region: "head & neck",
    summary: "V-shaped band of white matter between the caudate and thalamus (medially) and the lentiform nucleus (laterally), through which most cortical input and output passes.",
    function: "Anterior limb: frontopontine fibres and anterior thalamic radiation (thalamus ↔ prefrontal cortex). Genu: corticobulbar fibres. Posterior limb: corticospinal and thalamocortical sensory fibres. Retro-/sublenticular parts: optic and auditory radiations",
    features: ["Anterior limb (between caudate head and lentiform nucleus)", "Genu", "Posterior limb (between thalamus and lentiform nucleus)", "Retrolenticular and sublenticular parts"],
    blood: "Lenticulostriate branches of the MCA; anterior choroidal artery; recurrent artery of Heubner (ACA) to the anterior limb",
    clinical: "Lacunar infarct in the posterior limb → pure motor hemiparesis (face, arm and leg equally) because fibres are tightly packed. Hypertensive haemorrhages from lenticulostriate arteries often involve it."
  },
  {
    key: "cerebral-white-matter", title: "White matter of the cerebral hemisphere", match: ["white matter"], kind: "brain", region: "head & neck",
    summary: "Myelinated axons beneath the cortex connecting brain regions.",
    function: "Association fibres (within a hemisphere, e.g. arcuate fasciculus), commissural fibres (between hemispheres, e.g. corpus callosum) and projection fibres (cortex ↔ subcortical structures, e.g. corona radiata, internal capsule)",
    clinical: "Multiple sclerosis plaques (periventricular), small-vessel ischaemic disease (leukoaraiosis), leukodystrophies, diffuse axonal injury after trauma, progressive multifocal leukoencephalopathy (JC virus)."
  },
  // ───────────────────────────── NERVOUS SYSTEM: BASAL NUCLEI & LIMBIC ─────────────────────────────
  {
    key: "caudate-nucleus", title: "Caudate nucleus", match: ["caudate nucleus"], kind: "brain", region: "head & neck",
    summary: "C-shaped basal nucleus following the lateral ventricle (head, body, tail); with the putamen it forms the striatum.",
    function: "Part of basal ganglia loops for motor planning, cognition, learning and motivation; receives dopaminergic input from the substantia nigra",
    blood: "Lenticulostriate arteries (MCA); recurrent artery of Heubner (ACA)",
    clinical: "Atrophy of the caudate head in Huntington's disease (boxcar-shaped frontal horns) → chorea, psychiatric change and dementia."
  },
  {
    key: "putamen", title: "Putamen", match: ["putamen"], kind: "brain", region: "head & neck",
    summary: "Outer part of the lentiform nucleus; with the caudate forms the striatum.",
    function: "Input nucleus of the basal ganglia motor loop — receives cortical (glutamate) and nigral (dopamine) input, projects to the globus pallidus",
    blood: "Lenticulostriate branches of the MCA",
    clinical: "Most common site of hypertensive intracerebral haemorrhage → contralateral hemiplegia (internal capsule involvement). Affected in Wilson's disease and Parkinson's (dopamine loss)."
  },
  {
    key: "globus-pallidus", title: "Globus pallidus", match: ["globus pallidus"], kind: "brain", region: "head & neck",
    summary: "Inner, paler part of the lentiform nucleus with external (GPe) and internal (GPi) segments.",
    function: "GPi is a main inhibitory (GABA) output of the basal ganglia to the thalamus; GPe is part of the indirect pathway",
    blood: "Lenticulostriate arteries (MCA); anterior choroidal artery",
    clinical: "GPi is a target for deep brain stimulation (Parkinson's disease, dystonia). Bilateral pallidal necrosis is characteristic of carbon monoxide poisoning; also affected in kernicterus."
  },
  {
    key: "amygdala", title: "Amygdala", match: ["amygdala"], kind: "brain", region: "head & neck",
    summary: "Almond-shaped nuclear complex in the anteromedial temporal lobe, in front of the hippocampus.",
    function: "Emotional processing (especially fear), emotional memory, autonomic and endocrine responses to emotion (via the stria terminalis to the hypothalamus)",
    clinical: "Bilateral destruction → Klüver–Bucy syndrome (placidity, hyperorality, hypersexuality, visual agnosia). Temporal lobe seizures often begin with a fear aura; amygdala hyperactivity is implicated in anxiety and PTSD."
  },
  {
    key: "stria-terminalis", title: "Stria terminalis", match: ["stria terminalis"], kind: "brain", region: "head & neck",
    summary: "C-shaped fibre bundle running from the amygdala alongside the caudate nucleus (in the groove between caudate and thalamus).",
    function: "Major efferent pathway of the amygdala to the septal area, hypothalamus and bed nucleus of the stria terminalis",
    clinical: "Accompanies the thalamostriate vein in the floor of the lateral ventricle; the bed nucleus is implicated in sustained anxiety and stress responses."
  },
  {
    key: "hippocampus", title: "Hippocampus", match: ["hippocampus"], kind: "brain", region: "head & neck",
    summary: "Curved seahorse-shaped structure in the floor of the temporal horn of the lateral ventricle (medial temporal lobe).",
    function: "Consolidation of new declarative (episodic) memories and spatial navigation; part of the limbic system and Papez circuit",
    features: ["Dentate gyrus, Ammon's horn (CA1–CA4), subiculum", "Fimbria continues as the fornix"],
    blood: "Posterior cerebral artery (hippocampal branches); anterior choroidal artery",
    clinical: "Bilateral damage → anterograde amnesia (patient H.M.). Early atrophy in Alzheimer's disease. CA1 is very sensitive to hypoxia. Mesial temporal sclerosis is the commonest cause of drug-resistant temporal lobe epilepsy."
  },
  {
    key: "parahippocampal-gyrus", title: "Parahippocampal gyrus", match: ["parahippocampal gyrus"], kind: "brain", region: "head & neck",
    summary: "Gyrus on the medial-inferior temporal lobe beside the hippocampus, ending anteriorly in the uncus.",
    function: "Anterior part contains the entorhinal cortex — the main gateway between neocortex and hippocampus (memory); posterior part processes scenes and spatial context (parahippocampal place area); uncus contains primary olfactory cortex",
    clinical: "Uncal herniation over the tentorium compresses CN III (dilated pupil) and the midbrain. Entorhinal cortex is among the first areas affected in Alzheimer's disease. Uncinate seizures produce olfactory hallucinations."
  },
  {
    key: "cingulate-gyrus", title: "Cingulate gyrus", match: ["cingulate gyrus"], kind: "brain", region: "head & neck",
    summary: "Gyrus on the medial surface of the hemisphere arching above the corpus callosum; part of the limbic lobe.",
    function: "Anterior cingulate: emotion, motivation, affective component of pain, error monitoring, autonomic control. Posterior cingulate: memory and spatial orientation (default mode network); the cingulum bundle is part of the Papez circuit",
    blood: "Anterior cerebral artery (pericallosal and callosomarginal branches)",
    clinical: "Bilateral anterior cingulate lesions → akinetic mutism/apathy. Subfalcine (cingulate) herniation under the falx can compress the ACA → contralateral leg weakness."
  },
  // ───────────────────────────── NERVOUS SYSTEM: CEREBRAL CORTEX ─────────────────────────────
  {
    key: "precentral-gyrus", title: "Precentral gyrus (primary motor cortex)", match: ["precentral gyrus"], kind: "brain", region: "head & neck",
    summary: "Gyrus immediately in front of the central sulcus — the primary motor cortex (Brodmann area 4).",
    function: "Initiates voluntary movement of the contralateral body; origin of corticospinal and corticobulbar tracts (Betz cells). Motor homunculus: leg/foot on the medial surface (paracentral lobule), trunk and arm superiorly, hand and face laterally",
    blood: "Middle cerebral artery (lateral: face, arm); anterior cerebral artery (medial: leg)",
    clinical: "Lesion → contralateral upper motor neuron weakness (spasticity, hyperreflexia, upgoing plantar). MCA stroke → face and arm > leg; ACA stroke → leg > arm. Focal seizures may spread along the homunculus (Jacksonian march)."
  },
  {
    key: "postcentral-gyrus", title: "Postcentral gyrus (primary somatosensory cortex)", match: ["postcentral gyrus"], kind: "brain", region: "head & neck",
    summary: "Gyrus immediately behind the central sulcus — the primary somatosensory cortex (areas 3, 1, 2).",
    function: "Receives touch, pressure, vibration, proprioception, pain and temperature from the contralateral body via VPL/VPM thalamus; organised as a sensory homunculus",
    blood: "Middle cerebral artery (lateral); anterior cerebral artery (medial: leg)",
    clinical: "Lesion → contralateral cortical sensory loss: impaired two-point discrimination, position sense, astereognosis and graphaesthesia, with relatively preserved crude pain/temperature."
  },
  {
    key: "superior-frontal-gyrus", title: "Superior frontal gyrus", match: ["superior frontal gyrus"], kind: "brain", region: "head & neck",
    summary: "Uppermost frontal gyrus, running from the frontal pole back to the precentral gyrus and onto the medial surface.",
    function: "Posterior part contains the supplementary motor area (planning and sequencing of movement); anterior parts are prefrontal cortex involved in working memory, self-awareness and executive control",
    blood: "Anterior cerebral artery (medial and superior parts)",
    clinical: "Supplementary motor area lesions → akinesia, reduced spontaneous speech, alien hand phenomena; frontal lobe lesions cause personality change and executive dysfunction."
  },
  {
    key: "middle-frontal-gyrus", title: "Middle frontal gyrus", match: ["middle frontal gyrus"], kind: "brain", region: "head & neck",
    summary: "Frontal gyrus between the superior and inferior frontal gyri.",
    function: "Posterior part contains the frontal eye field (area 8) for voluntary saccades to the opposite side; anterior part is dorsolateral prefrontal cortex (working memory, planning, executive function)",
    blood: "Middle cerebral artery (with ACA watershed superiorly)",
    clinical: "Acute destructive lesion of the frontal eye field → eyes deviate TOWARD the side of the lesion ('look at the lesion'); an irritative focus (seizure) drives them away. Dorsolateral prefrontal damage → dysexecutive syndrome, perseveration."
  },
  {
    key: "accessory-short-gyrus", title: "Accessory short gyrus (inferolateral frontal region)", match: ["accessory short gyrus"], kind: "brain", region: "head & neck",
    summary: "BodyParts3D label. In Terminologia this name refers to a small gyrus of the anterior insula, but in this model the mesh lies on the lateral frontal lobe below the middle frontal gyrus — the territory of the inferior frontal gyrus/frontal operculum overlying the insula.",
    function: "Inferior frontal gyrus (pars opercularis and triangularis, areas 44/45) in the dominant (usually left) hemisphere = Broca's area — speech production and grammar; the non-dominant homologue contributes to prosody. The insular short gyri themselves are involved in interoception and taste",
    blood: "Superior division of the middle cerebral artery",
    clinical: "Dominant inferior frontal lesion → Broca's (expressive) aphasia: non-fluent, effortful, agrammatic speech with impaired repetition but relatively preserved comprehension; patients are aware and frustrated; often with right face/arm weakness.",
    mnemonic: "Broca's = Broken speech; Wernicke's = Wordy but meaningless."
  },
  {
    key: "insula", title: "Insula", match: ["insula"], kind: "brain", region: "head & neck",
    summary: "Lobe of cortex hidden deep in the lateral sulcus, covered by the frontal, parietal and temporal opercula.",
    function: "Interoception and visceral sensation, primary gustatory (taste) cortex, autonomic regulation, pain, emotional awareness (e.g. disgust), aspects of speech planning",
    features: ["Short gyri (anterior) and long gyri (posterior) separated by the central insular sulcus", "Circular sulcus around its margin", "Limen insulae at its anteroinferior pole"],
    blood: "Insular (M2) branches of the middle cerebral artery running over its surface",
    clinical: "Loss of the 'insular ribbon' (grey–white differentiation) on CT is an early sign of MCA territory infarction. Insular epilepsy can mimic other seizure types."
  },
  {
    key: "superior-temporal-gyrus-anterior", title: "Superior temporal gyrus (anterior part)", match: ["anterior part of superior temporal gyrus"], kind: "brain", region: "head & neck",
    summary: "Front part of the uppermost temporal gyrus, below the lateral sulcus, extending toward the temporal pole.",
    function: "Auditory processing and recognition of sounds, speech and voices; the primary auditory cortex (transverse temporal gyri of Heschl, areas 41/42) lies on the upper surface of the superior temporal gyrus; anterior temporal regions also support semantic and social processing",
    blood: "Middle cerebral artery (temporal branches)",
    clinical: "Unilateral auditory cortex lesions cause little deafness (bilateral representation); bilateral lesions → cortical deafness or auditory agnosia. Deep temporal lesions damaging Meyer's loop → contralateral superior quadrantanopia ('pie in the sky')."
  },
  {
    key: "superior-temporal-gyrus-posterior", title: "Superior temporal gyrus (posterior part) — Wernicke's area", match: ["posterior part of superior temporal gyrus"], kind: "brain", region: "head & neck",
    summary: "Back part of the superior temporal gyrus; in the dominant hemisphere it contains Wernicke's area (posterior area 22).",
    function: "Comprehension of spoken (and written) language; auditory association cortex; connected to Broca's area by the arcuate fasciculus",
    blood: "Inferior division of the middle cerebral artery",
    clinical: "Wernicke's (receptive) aphasia: fluent but meaningless speech with paraphasias and neologisms, poor comprehension and repetition; patients are often unaware of the deficit. Commonly accompanied by a contralateral superior quadrantanopia.",
    mnemonic: "Wernicke's = Wordy (fluent) but Wrong; Broca's = Broken speech."
  },
  {
    key: "middle-temporal-gyrus", title: "Middle temporal gyrus", match: ["middle temporal gyrus"], kind: "brain", region: "head & neck",
    summary: "Temporal gyrus between the superior and inferior temporal sulci.",
    function: "Semantic memory and word meaning, language comprehension (dominant side); posterior part near the temporo-occipital junction (area MT/V5) processes visual motion",
    blood: "Middle cerebral artery (temporal branches)",
    clinical: "Bilateral posterior lesions involving V5 → akinetopsia (inability to perceive motion; rare). Dominant lesions contribute to word-finding and comprehension difficulties."
  },
  {
    key: "inferior-temporal-gyrus", title: "Inferior temporal gyrus", match: ["inferior temporal gyrus"], kind: "brain", region: "head & neck",
    summary: "Lowest gyrus on the lateral temporal surface, curving onto its inferior surface.",
    function: "Higher visual processing in the ventral ('what') stream — object recognition and visual memory",
    blood: "Middle and posterior cerebral arteries",
    clinical: "Lesions of the ventral visual stream produce visual (object) agnosia — patients see objects but cannot recognise them."
  },
  {
    key: "fusiform-gyrus", title: "Fusiform gyrus (occipitotemporal gyrus)", match: ["fusiform gyrus"], kind: "brain", region: "head & neck",
    summary: "Spindle-shaped gyrus on the basal surface of the temporal and occipital lobes, lateral to the parahippocampal gyrus.",
    function: "Contains the fusiform face area (face recognition) and, on the left, the visual word form area (reading); colour processing (V4) nearby",
    blood: "Posterior cerebral artery",
    clinical: "Bilateral (or right) lesions → prosopagnosia (inability to recognise faces). Left lesions → pure alexia; with splenium damage → alexia without agraphia (left PCA stroke). Achromatopsia with adjacent damage."
  },
  {
    key: "supramarginal-gyrus", title: "Supramarginal gyrus", match: ["supramarginal gyrus"], kind: "brain", region: "head & neck",
    summary: "Part of the inferior parietal lobule arching around the posterior end of the lateral sulcus (area 40).",
    function: "Phonological processing and verbal working memory (dominant hemisphere), praxis (skilled movement planning), somatosensory association",
    blood: "Middle cerebral artery (inferior division)",
    clinical: "Dominant lesions (with the underlying arcuate fasciculus) → conduction aphasia (fluent speech, good comprehension, very poor repetition) and ideomotor apraxia."
  },
  {
    key: "angular-gyrus", title: "Angular gyrus", match: ["angular gyrus"], kind: "brain", region: "head & neck",
    summary: "Part of the inferior parietal lobule arching around the end of the superior temporal sulcus (area 39).",
    function: "Reading and writing, calculation, semantic integration, spatial attention; multimodal association hub",
    blood: "Middle cerebral artery (angular branch, inferior division)",
    clinical: "Dominant angular gyrus lesion → Gerstmann syndrome (agraphia, acalculia, finger agnosia, left–right disorientation) and alexia with agraphia.",
    mnemonic: "Gerstmann — 'AALF': Agraphia, Acalculia, Left–right confusion, Finger agnosia."
  },
  {
    key: "superior-parietal-lobule-precuneus", title: "Superior parietal lobule and precuneus", match: ["superior parietal lobule"], kind: "brain", region: "head & neck",
    summary: "Superior parietal lobule (lateral, areas 5 and 7) combined in this model with the precuneus on the medial surface of the parietal lobe.",
    function: "Superior parietal lobule: integrates somatosensory and visual information for spatial orientation and visually guided reaching (dorsal 'where/how' stream). Precuneus: visuospatial imagery, episodic memory retrieval, self-referential thought (hub of the default mode network)",
    blood: "Superior parietal lobule: MCA/ACA watershed; precuneus: anterior cerebral artery (with posterior cerebral)",
    clinical: "Lesions → contralateral astereognosis and sensory inattention; optic ataxia (misreaching under visual guidance). Bilateral parieto-occipital damage → Bálint syndrome (optic ataxia, oculomotor apraxia, simultanagnosia). Non-dominant (right) parietal lesions cause contralateral hemineglect (more often inferior parietal). Precuneus hypometabolism is an early Alzheimer's finding."
  },
  {
    key: "occipital-lobe", title: "Occipital lobe", match: ["occipital lobe"], kind: "brain", region: "head & neck",
    summary: "Posterior lobe of the cerebral hemisphere, the visual cortex.",
    function: "Primary visual cortex (V1, striate cortex, area 17) along the calcarine sulcus; visual association areas (18, 19). Cuneus (above calcarine) = inferior visual field; lingual gyrus (below) = superior visual field",
    blood: "Posterior cerebral artery (calcarine branch); occipital pole also receives MCA branches",
    clinical: "PCA infarct → contralateral homonymous hemianopia with macular sparing (dual MCA/PCA supply of the pole). Bilateral lesions → cortical blindness, sometimes with denial (Anton syndrome); pupillary light reflexes are preserved."
  },
  {
    key: "orbital-gyri-gyrus-rectus", title: "Orbital gyri and straight gyrus (gyrus rectus)", match: ["orbital gyri"], kind: "brain", region: "head & neck",
    summary: "Gyri on the inferior (orbital) surface of the frontal lobe resting on the orbital roofs; the straight gyrus lies most medially, beside the olfactory sulcus.",
    function: "Orbitofrontal cortex: decision-making, reward value, impulse control, social behaviour and emotion regulation; secondary olfactory and gustatory processing",
    blood: "Anterior cerebral artery (orbitofrontal branches) medially; middle cerebral artery laterally",
    clinical: "Lesions → disinhibition, impulsivity and personality change (cf. Phineas Gage). Contusions are common here after head injury (brain hits the rough orbital roof). Olfactory groove meningioma → anosmia ± Foster Kennedy syndrome; anterior communicating artery aneurysm rupture damages the gyrus rectus."
  },
  // ───────────────────────────── HEART ─────────────────────────────
  {
    key: "heart", title: "Heart", match: ["wall of heart"], kind: "organ", region: "thorax",
    summary: "Four-chambered muscular pump in the middle mediastinum, enclosed in the pericardium.",
    features: ["Right atrium: SA node, crista terminalis, fossa ovalis, openings of SVC, IVC and coronary sinus", "Right ventricle: trabeculae carneae, septomarginal trabecula (moderator band), conus arteriosus", "Left atrium: four pulmonary veins, left auricle", "Left ventricle: thickest wall, forms the apex", "Layers: epicardium, myocardium, endocardium; fibrous and serous pericardium", "Surfaces: anterior (mostly RV), base/posterior (mostly LA), diaphragmatic (LV and RV); apex at left 5th intercostal space, midclavicular line"],
    function: "Right side pumps deoxygenated blood to the lungs; left side pumps oxygenated blood to the systemic circulation",
    innervation: "Sympathetic (T1–T4/T5, cardiac nerves — ↑rate and contractility); parasympathetic via vagus nerves (↓rate); visceral pain afferents run with sympathetics",
    blood: "Right and left coronary arteries (from the aortic sinuses); venous return via the coronary sinus and anterior cardiac veins",
    clinical: "Myocardial ischaemia refers pain to the chest, left arm and jaw (T1–T4 dermatomes). Cardiac tamponade: Beck's triad (hypotension, raised JVP, muffled heart sounds). An enlarged left atrium (mitral stenosis) can compress the oesophagus (dysphagia).",
    mnemonic: "Valve auscultation 'All Patients Take Medicine' (APT M): Aortic — right 2nd ICS; Pulmonary — left 2nd ICS; Tricuspid — left lower sternal border; Mitral — apex."
  },
  {
    key: "papillary-muscles", title: "Papillary muscles", match: ["papillary muscle"], kind: "organ", region: "thorax",
    summary: "Conical muscular projections of the ventricular walls attached by chordae tendineae to the cusps of the atrioventricular valves.",
    features: ["Right ventricle: anterior (largest), posterior and septal papillary muscles → tricuspid valve", "Left ventricle: anterior (anterolateral) and posterior (posteromedial) papillary muscles → mitral valve", "Each papillary muscle sends chordae to adjacent cusps"],
    function: "Contract during systole to tense the chordae, preventing the valve cusps from everting (prolapsing) into the atria",
    blood: "Coronary arteries — the LV posteromedial muscle usually has a single supply (posterior interventricular artery), the anterolateral a dual supply (LAD and circumflex)",
    clinical: "Papillary muscle rupture after MI (typically days 2–7; usually posteromedial, inferior MI) → acute severe mitral regurgitation, pulmonary oedema and cardiogenic shock.",
    facts: ["The anterior papillary muscle of the right ventricle receives the moderator band carrying the right bundle branch."]
  },
  {
    key: "mitral-valve", title: "Mitral (left atrioventricular) valve", match: ["mitral valve"], kind: "organ", region: "thorax",
    summary: "Two-cusped valve between the left atrium and left ventricle.",
    features: ["Anterior and posterior cusps", "Chordae tendineae to anterolateral and posteromedial papillary muscles", "Annulus continuous with the aortic valve (aortomitral continuity)"],
    function: "Prevents backflow from the left ventricle into the left atrium during systole",
    clinical: "Auscultate at the apex. Mitral stenosis (usually rheumatic): opening snap and mid-diastolic rumble, left atrial enlargement, atrial fibrillation. Mitral regurgitation: pansystolic murmur radiating to the axilla. Mitral valve prolapse: mid-systolic click.",
    facts: ["Named for its resemblance to a bishop's mitre."]
  },
  {
    key: "tricuspid-valve", title: "Tricuspid (right atrioventricular) valve", match: ["tricuspid valve"], kind: "organ", region: "thorax",
    summary: "Three-cusped valve between the right atrium and right ventricle.",
    features: ["Anterior, posterior and septal cusps", "Chordae tendineae to anterior, posterior and septal papillary muscles"],
    function: "Prevents backflow from the right ventricle into the right atrium during systole",
    clinical: "Auscultate at the left lower sternal border. Infective endocarditis of the tricuspid valve is typical of IV drug use. Tricuspid regurgitation: pansystolic murmur louder on inspiration (Carvallo's sign), giant v waves, pulsatile liver. Ebstein anomaly (apical displacement) is linked to maternal lithium."
  },
  {
    key: "pulmonary-valve", title: "Pulmonary valve", match: ["pulmonary valve"], kind: "organ", region: "thorax",
    summary: "Three-cusped semilunar valve at the outlet of the right ventricle (conus arteriosus) into the pulmonary trunk.",
    features: ["Anterior, right and left semilunar cusps", "Nodules and lunules on each cusp", "Pulmonary sinuses above the cusps"],
    function: "Prevents backflow from the pulmonary trunk into the right ventricle during diastole",
    clinical: "Auscultate at the left 2nd intercostal space. Pulmonary stenosis occurs in tetralogy of Fallot, Noonan syndrome and carcinoid heart disease. Physiological splitting of S2: pulmonary closure (P2) is delayed during inspiration."
  },
  // ───────────────────────────── CORONARY ARTERIES ─────────────────────────────
  {
    key: "left-main-coronary", title: "Left main coronary artery", match: ["stem of coronary artery"], kind: "vessel", region: "thorax",
    summary: "Short trunk of the left coronary artery from the left aortic sinus, dividing into the LAD and circumflex arteries.",
    course: "Arises from the left aortic sinus, passes between the pulmonary trunk and left auricle for ~1–2 cm, then bifurcates (sometimes trifurcates with a ramus intermedius)",
    supplies: "Via its branches: most of the left ventricle and left atrium, anterior two-thirds of the interventricular septum",
    clinical: "Significant left main stenosis jeopardises a very large territory — usually treated by CABG; acute occlusion is often fatal."
  },
  {
    key: "lad", title: "Anterior interventricular artery (LAD)", match: ["anterior interventricular branch"], kind: "vessel", region: "thorax",
    summary: "Left anterior descending artery — branch of the left coronary artery running in the anterior interventricular groove to the apex.",
    course: "From the left main coronary artery down the anterior interventricular groove around the apex, often anastomosing with the posterior interventricular artery",
    supplies: "Anterior left ventricle, anterior two-thirds of the interventricular septum (septal branches), apex, right and left bundle branches; diagonal branches to the anterolateral LV",
    clinical: "Most commonly occluded coronary artery ('widow-maker'); anterior MI → ST elevation in V1–V4. Left internal thoracic artery is the classic bypass graft to it."
  },
  {
    key: "circumflex", title: "Circumflex artery", match: ["circumflex branch of coronary artery"], kind: "vessel", region: "thorax",
    summary: "Branch of the left coronary artery running in the left atrioventricular (coronary) groove around the left border of the heart.",
    course: "From the left main coronary artery, curves leftward and posteriorly in the coronary groove; gives obtuse marginal branches",
    supplies: "Left atrium, lateral and posterior left ventricle; SA node in ~40%; gives the posterior interventricular artery in left-dominant hearts (~10%)",
    clinical: "Occlusion → lateral MI (leads I, aVL, V5–V6); posterior infarcts may be electrically 'silent' on standard leads."
  },
  {
    key: "right-coronary-artery", title: "Right coronary artery (trunk)", match: ["trunk of coronary artery"], kind: "vessel", region: "thorax",
    summary: "Arises from the right aortic sinus and runs in the right atrioventricular (coronary) groove.",
    course: "From the right aortic sinus between the pulmonary trunk and right auricle, along the right coronary groove to the crux of the heart; branches: conus, SA nodal (~60%), right marginal, AV nodal (~80%), posterior interventricular (in right-dominant hearts), posterolateral",
    supplies: "Right atrium, most of the right ventricle, SA node (~60%), AV node (~80%), inferior (diaphragmatic) LV and posterior third of the septum in right-dominant hearts",
    clinical: "Occlusion → inferior MI (II, III, aVF) often with bradycardia/heart block (AV nodal artery) and right ventricular infarction (preload-dependent — avoid nitrates).",
    facts: ["About 80–85% of hearts are 'right dominant' — the RCA gives the posterior interventricular artery."]
  },
  {
    key: "right-marginal-artery", title: "Right marginal artery", match: ["marginal branch of coronary artery"], kind: "vessel", region: "thorax",
    summary: "Branch of the right coronary artery running along the acute (inferior right) margin of the heart toward the apex.",
    course: "Arises from the RCA in the coronary groove and descends along the acute margin of the heart",
    supplies: "Right ventricular free wall and apex region",
    clinical: "The equivalent branches of the circumflex along the left border are the obtuse marginal arteries."
  },
  {
    key: "pda", title: "Posterior interventricular artery (PDA)", match: ["posterior interventricular branch"], kind: "vessel", region: "thorax",
    summary: "Posterior descending artery in the posterior interventricular groove; its origin defines coronary dominance.",
    course: "Usually from the RCA at the crux (right dominance), descends in the posterior interventricular groove toward the apex",
    supplies: "Posterior third of the interventricular septum, inferior walls of both ventricles, posteromedial papillary muscle",
    clinical: "Occlusion → inferior MI; the single blood supply to the posteromedial papillary muscle makes it prone to rupture (acute mitral regurgitation)."
  },
  {
    key: "posterolateral-branch-rca", title: "Posterolateral branch of right coronary artery", match: ["posterolateral branch"], kind: "vessel", region: "thorax",
    summary: "Continuation of the RCA beyond the crux in right-dominant hearts.",
    course: "Passes from the crux along the left coronary groove/inferior LV wall",
    supplies: "Posterolateral (inferolateral) wall of the left ventricle",
    clinical: "Its size reflects the degree of right dominance; contributes to inferolateral infarcts in RCA occlusion."
  },
  {
    key: "septal-branches", title: "Interventricular septal branches", match: ["interventricular septal branches"], kind: "vessel", region: "thorax",
    summary: "Septal perforator arteries entering the interventricular septum from the LAD (anterior) and the posterior interventricular artery (posterior).",
    course: "Plunge perpendicularly into the septum from the anterior and posterior interventricular arteries",
    supplies: "Anterior two-thirds of the septum (from LAD) and posterior third (from PDA), including the bundle of His and bundle branches",
    clinical: "Septal infarction can cause bundle branch block. Alcohol septal ablation (injection into the first septal perforator) treats hypertrophic obstructive cardiomyopathy."
  },
  // ───────────────────────────── CARDIAC VEINS ─────────────────────────────
  {
    key: "coronary-sinus", title: "Coronary sinus", match: ["coronary sinus"], kind: "vessel", region: "thorax",
    summary: "Main venous channel of the heart, lying in the posterior coronary (atrioventricular) groove.",
    course: "Runs from left to right in the posterior coronary groove and opens into the right atrium between the IVC orifice and the tricuspid orifice (guarded by the valve of the coronary sinus)",
    drains: "Most of the heart: great, middle and small cardiac veins, posterior vein of the left ventricle, left marginal and oblique veins",
    clinical: "Cannulated for left ventricular leads in cardiac resynchronisation therapy (CRT) and for retrograde cardioplegia. Dilated when a persistent left SVC drains into it."
  },
  {
    key: "great-cardiac-vein", title: "Great cardiac vein", match: ["great cardiac vein"], kind: "vessel", region: "thorax",
    summary: "Main tributary of the coronary sinus, accompanying the LAD and then the circumflex artery.",
    course: "Begins near the apex, ascends in the anterior interventricular groove beside the LAD, then turns left in the coronary groove with the circumflex to become the coronary sinus",
    drains: "Areas supplied by the left coronary artery (anterior ventricles, septum, left atrium)",
    clinical: "Its junction with the coronary sinus is marked by the oblique vein of the left atrium/valve of Vieussens; used to place LV pacing leads."
  },
  {
    key: "middle-cardiac-vein", title: "Middle cardiac vein", match: ["middle cardiac vein"], kind: "vessel", region: "thorax",
    summary: "Cardiac vein in the posterior interventricular groove, accompanying the posterior interventricular artery.",
    course: "From the apex up the posterior interventricular groove to end in the coronary sinus near its opening",
    drains: "Posterior (diaphragmatic) parts of both ventricles and the posterior septum",
    clinical: "Alternative target vessel for LV lead placement."
  },
  {
    key: "anterior-cardiac-veins", title: "Anterior cardiac veins", match: ["anterior cardiac vein"], kind: "vessel", region: "thorax",
    summary: "Two to four small veins on the anterior surface of the right ventricle.",
    course: "Cross the right coronary groove and open DIRECTLY into the right atrium (not via the coronary sinus)",
    drains: "Anterior wall of the right ventricle",
    clinical: "With the smallest cardiac (Thebesian) veins they account for venous drainage bypassing the coronary sinus."
  },
  {
    key: "posterior-vein-lv", title: "Posterior vein of left ventricle", match: ["posterior veins of ventricle"], kind: "vessel", region: "thorax",
    summary: "Vein(s) on the diaphragmatic surface of the left ventricle.",
    course: "Ascends on the posterior/inferior surface of the left ventricle to the coronary sinus (sometimes the great cardiac vein)",
    drains: "Posterior and inferior wall of the left ventricle",
    clinical: "Posterolateral cardiac veins are preferred sites for LV leads in cardiac resynchronisation therapy."
  },
  // ───────────────────────────── GREAT VESSELS ─────────────────────────────
  {
    key: "ascending-aorta", title: "Ascending aorta", match: ["ascending aorta"], kind: "vessel", region: "thorax",
    summary: "First part of the aorta, from the aortic valve to the level of the sternal angle, inside the pericardium.",
    course: "From the aortic orifice of the left ventricle (behind the left half of the sternum at the 3rd ICS) upward and to the right to the level of the sternal angle, where it becomes the arch",
    supplies: "Right and left coronary arteries arise from its aortic sinuses — its only branches",
    clinical: "Stanford type A aortic dissection involves it (surgical emergency; may cause tamponade, AR, coronary occlusion). Aneurysm in Marfan syndrome and tertiary syphilis. Aortic stenosis murmur is heard at the right 2nd intercostal space, radiating to the carotids."
  },
  {
    key: "arch-of-aorta", title: "Arch of aorta", match: ["arch of aorta"], kind: "vessel", region: "thorax",
    summary: "Curved continuation of the ascending aorta in the superior mediastinum, arching over the left main bronchus and pulmonary bifurcation.",
    course: "Begins and ends at the level of the sternal angle (T4/T5), passing posteriorly and to the left over the left main bronchus; continues as the descending aorta",
    supplies: "Brachiocephalic trunk, left common carotid and left subclavian arteries (head, neck and upper limbs)",
    clinical: "The left recurrent laryngeal nerve hooks under it (aneurysm → hoarseness). Coarctation near the ligamentum arteriosum → upper-limb hypertension, radiofemoral delay, rib notching. Traumatic rupture at the isthmus in deceleration injuries.",
    mnemonic: "Branches 'ABC'S': Arch gives Brachiocephalic, left Common carotid, left Subclavian."
  },
  {
    key: "descending-aorta", title: "Descending aorta", match: ["descending aorta"], kind: "vessel", region: "thorax",
    summary: "Continuation of the arch down the posterior mediastinum (thoracic aorta) and through the diaphragm (abdominal aorta).",
    course: "From T4/T5 down the left side of the vertebral bodies, through the aortic hiatus at T12 (with the thoracic duct and azygos vein), to bifurcate into the common iliac arteries at L4",
    supplies: "Thoracic: posterior intercostal (3–11), subcostal, bronchial, oesophageal, pericardial, superior phrenic. Abdominal: coeliac trunk (T12), SMA (L1), renal (L1–L2), gonadal, IMA (L3), inferior phrenic, suprarenal, lumbar and median sacral arteries",
    clinical: "Abdominal aortic aneurysm (usually infrarenal) — screening in older men; rupture → back pain, shock, pulsatile mass. Stanford type B dissection begins distal to the left subclavian. The bifurcation (L4) lies slightly below and to the left of the umbilicus."
  },
  {
    key: "brachiocephalic-artery", title: "Brachiocephalic trunk", match: ["brachiocephalic artery"], kind: "vessel", region: "thorax",
    summary: "First and largest branch of the aortic arch, supplying the right side of the head, neck and right upper limb.",
    course: "Ascends to the right from the arch, anterior to the trachea, and divides behind the right sternoclavicular joint",
    supplies: "Right common carotid and right subclavian arteries (occasionally a thyroidea ima artery)",
    clinical: "Lies in front of the trachea: a low tracheostomy can erode it → tracheo-innominate fistula with catastrophic haemorrhage."
  },
  {
    key: "common-carotid-artery", title: "Common carotid artery", match: ["common carotid artery"], kind: "vessel", region: "head & neck",
    summary: "Main artery of the head and neck; right from the brachiocephalic trunk, left directly from the aortic arch.",
    course: "Ascends in the carotid sheath (with the internal jugular vein laterally and vagus nerve posteriorly) to bifurcate at the upper border of the thyroid cartilage (C3–C4) into internal and external carotid arteries",
    supplies: "Head and neck via the external carotid (face, scalp, neck) and internal carotid (brain, eye) arteries; no branches before its bifurcation",
    clinical: "Carotid pulse palpated at the anterior border of sternocleidomastoid. Carotid sinus (baroreceptor, CN IX) and carotid body (chemoreceptor) at the bifurcation — carotid sinus massage slows the heart. Carotid stenosis → TIA/stroke, amaurosis fugax; treated by endarterectomy."
  },
  {
    key: "subclavian-artery", title: "Subclavian artery", match: ["subclavian artery"], kind: "vessel", region: "head & neck",
    summary: "Main artery to the upper limb, also supplying the brain (vertebral artery), neck and thoracic wall.",
    course: "Right from the brachiocephalic trunk, left from the aortic arch; arches over the pleural cupola, passes behind scalenus anterior (dividing it into three parts) and becomes the axillary artery at the lateral border of the 1st rib",
    supplies: "1st part: vertebral, internal thoracic, thyrocervical trunk; 2nd part: costocervical trunk; 3rd part: dorsal scapular (variable)",
    clinical: "Subclavian steal syndrome: proximal stenosis → reversed vertebral flow → vertebrobasilar symptoms when the arm is exercised. Compressed in thoracic outlet syndrome (cervical rib).",
    mnemonic: "Branches 'VIT C & D': Vertebral, Internal thoracic, Thyrocervical, Costocervical, Dorsal scapular."
  },
  {
    key: "subclavian-vein", title: "Subclavian vein", match: ["subclavian vein"], kind: "vessel", region: "head & neck",
    summary: "Continuation of the axillary vein, draining the upper limb.",
    course: "From the lateral border of the 1st rib, passes ANTERIOR to scalenus anterior and behind the clavicle; joins the internal jugular vein behind the sternoclavicular joint to form the brachiocephalic vein",
    drains: "Upper limb (via axillary vein) and external jugular vein; the venous angle receives the thoracic duct (left) and right lymphatic duct (right)",
    clinical: "Common site for central venous catheters (infraclavicular approach; risk of pneumothorax). Effort thrombosis (Paget–Schroetter syndrome) in athletes."
  },
  {
    key: "internal-jugular-vein", title: "Internal jugular vein", match: ["internal jugular vein"], kind: "vessel", region: "head & neck",
    summary: "Major vein draining the brain, face and neck.",
    course: "Begins at the jugular foramen as the continuation of the sigmoid sinus; descends in the carotid sheath lateral to the internal/common carotid; joins the subclavian vein behind the sternal end of the clavicle",
    drains: "Brain (dural sinuses), face (facial vein), neck (lingual, pharyngeal, superior and middle thyroid veins)",
    clinical: "The right IJV is used to assess jugular venous pressure and for central venous cannulation (apex of the triangle between the two heads of sternocleidomastoid). Lemierre syndrome = septic thrombophlebitis after pharyngitis."
  },
  {
    key: "brachiocephalic-vein", title: "Brachiocephalic vein", match: ["brachiocephalic vein"], kind: "vessel", region: "thorax",
    summary: "Paired veins formed behind the sternoclavicular joints that unite to form the superior vena cava.",
    course: "Formed by the internal jugular + subclavian veins; the left (longer) crosses obliquely in front of the arch branches; both unite behind the right 1st costal cartilage to form the SVC",
    drains: "Head, neck and upper limbs; tributaries include vertebral, internal thoracic and inferior thyroid veins (left also left superior intercostal vein)",
    clinical: "The left brachiocephalic vein can be compressed between the sternum and aorta, or injured in median sternotomy/thyroid surgery; route for central venous lines."
  },
  {
    key: "superior-vena-cava", title: "Superior vena cava", match: ["superior vena cava"], kind: "vessel", region: "thorax",
    summary: "Large valveless vein returning blood from above the diaphragm (except the heart and lungs) to the right atrium.",
    course: "Formed by union of the brachiocephalic veins behind the right 1st costal cartilage; descends on the right of the ascending aorta to enter the right atrium at the level of the 3rd costal cartilage; receives the azygos vein at about T4",
    drains: "Head, neck, upper limbs and thoracic wall (via azygos system)",
    clinical: "SVC obstruction (lung cancer, lymphoma, thrombosis around catheters) → facial and arm swelling, distended neck and chest veins, headache."
  },
  {
    key: "inferior-vena-cava", title: "Inferior vena cava", match: ["inferior vena cava"], kind: "vessel", region: "abdomen",
    summary: "Largest vein of the body, returning blood from below the diaphragm to the right atrium.",
    course: "Formed by union of the common iliac veins at L5, right of midline; ascends to the right of the aorta, behind the liver, through the caval opening of the central tendon of the diaphragm at T8 to the right atrium",
    drains: "Lower limbs, pelvis and abdomen: common iliacs, lumbar, right gonadal, renal, right suprarenal, inferior phrenic and hepatic veins (left gonadal and left suprarenal drain into the left renal vein)",
    clinical: "Supine hypotensive syndrome in late pregnancy (uterus compresses the IVC — tilt to the left). IVC filters for recurrent PE when anticoagulation fails. Renal cell carcinoma can extend into it."
  },
  {
    key: "pulmonary-artery", title: "Pulmonary trunk and arteries", match: ["pulmonary artery"], kind: "vessel", region: "thorax",
    summary: "Carry deoxygenated blood from the right ventricle to the lungs.",
    course: "Pulmonary trunk from the right ventricle (conus arteriosus) ascends to the left of the ascending aorta and divides under the aortic arch (≈T4/T5) into right and left pulmonary arteries; the right passes behind the ascending aorta and SVC",
    supplies: "The lungs (gas exchange), following the bronchial tree",
    clinical: "Saddle pulmonary embolus lodges at the bifurcation. Pulmonary hypertension dilates the trunk. The ligamentum arteriosum (ductus arteriosus remnant) joins the left pulmonary artery to the aortic arch; a patent ductus produces a continuous 'machinery' murmur."
  },
  {
    key: "pulmonary-vein", title: "Pulmonary veins", match: ["pulmonary vein"], kind: "vessel", region: "thorax",
    summary: "Usually four veins (two from each lung) carrying oxygenated blood to the left atrium.",
    course: "Leave each lung hilum (superior and inferior pulmonary veins) and open into the posterior left atrium",
    drains: "Lungs (oxygenated blood); also some bronchial venous blood",
    clinical: "Atrial fibrillation is commonly triggered from myocardial sleeves in the pulmonary veins — treated by catheter pulmonary vein isolation. Anomalous pulmonary venous return is a congenital left-to-right shunt."
  },
  // ───────────────────────────── ABDOMINAL & PELVIC VESSELS ─────────────────────────────
  {
    key: "celiac-trunk", title: "Coeliac trunk", match: ["celiac artery"], kind: "vessel", region: "abdomen",
    summary: "Short, wide artery of the foregut, arising from the anterior aorta at T12 just below the aortic hiatus.",
    course: "Passes forward ~1 cm above the pancreas and trifurcates",
    supplies: "Foregut — lower oesophagus to the 2nd part of the duodenum (major papilla), liver, gallbladder, pancreas (partly) and spleen, via the left gastric, splenic and common hepatic arteries",
    clinical: "Median arcuate ligament syndrome (compression by the diaphragm → postprandial pain). Coeliac plexus block relieves pain from pancreatic cancer.",
    mnemonic: "Coeliac branches: 'Left Hand Side' — Left gastric, Hepatic (common), Splenic."
  },
  {
    key: "left-gastric-artery", title: "Left gastric artery", match: ["gastric artery"], kind: "vessel", region: "abdomen",
    summary: "Smallest branch of the coeliac trunk, supplying the lesser curvature of the stomach and the abdominal oesophagus.",
    course: "Ascends to the cardia, gives oesophageal branches, then runs along the lesser curvature in the lesser omentum to anastomose with the right gastric artery (from the hepatic artery)",
    supplies: "Lesser curvature of the stomach and abdominal oesophagus",
    clinical: "Bleeding from lesser-curvature gastric ulcers; embolised to control haemorrhage. Its companion left gastric vein forms a portosystemic anastomosis with oesophageal veins — oesophageal varices in portal hypertension."
  },
  {
    key: "common-hepatic-artery", title: "Common hepatic artery", match: ["common hepatic artery"], kind: "vessel", region: "abdomen",
    summary: "Branch of the coeliac trunk running to the right along the upper border of the pancreas.",
    course: "Passes right to the duodenum, gives the gastroduodenal artery (and often the right gastric), then continues as the proper hepatic artery in the hepatoduodenal ligament, dividing into right and left hepatic arteries (cystic artery usually from the right hepatic)",
    supplies: "Liver, gallbladder, pylorus and lesser curvature (right gastric), greater curvature (right gastro-omental via GDA), duodenum and head of pancreas (superior pancreaticoduodenal)",
    clinical: "Pringle manoeuvre: clamping the hepatoduodenal ligament (hepatic artery proper, portal vein, bile duct) controls liver bleeding. A posterior duodenal ulcer can erode the gastroduodenal artery → major haemorrhage."
  },
  {
    key: "splenic-artery", title: "Splenic artery", match: ["splenic artery"], kind: "vessel", region: "abdomen",
    summary: "Largest branch of the coeliac trunk; tortuous course along the upper border of the pancreas to the spleen.",
    course: "Runs left behind the stomach along the superior border of the pancreas, then in the splenorenal ligament to the splenic hilum",
    supplies: "Spleen; pancreas (body and tail — dorsal and great pancreatic arteries); fundus (short gastrics); greater curvature (left gastro-omental); posterior gastric artery",
    clinical: "Splenic artery aneurysm is the commonest visceral aneurysm (more common in women; risk of rupture in pregnancy). A posterior gastric ulcer can erode it."
  },
  {
    key: "splenic-vein", title: "Splenic vein", match: ["splenic vein"], kind: "vessel", region: "abdomen",
    summary: "Vein draining the spleen, running behind the pancreas to form the hepatic portal vein.",
    course: "From the splenic hilum runs right in a groove on the posterior pancreas; joins the superior mesenteric vein behind the neck of the pancreas to form the portal vein",
    drains: "Spleen, pancreas, short gastric and left gastro-omental veins; usually receives the inferior mesenteric vein",
    clinical: "Splenic vein thrombosis (e.g. pancreatitis) → isolated gastric fundal varices ('sinistral' or left-sided portal hypertension), treated by splenectomy."
  },
  {
    key: "superior-mesenteric-artery", title: "Superior mesenteric artery", match: ["superior mesenteric artery"], kind: "vessel", region: "abdomen",
    summary: "Artery of the midgut, arising from the aorta at L1 behind the neck of the pancreas.",
    course: "Descends anterior to the left renal vein, uncinate process and 3rd part of the duodenum into the root of the mesentery",
    supplies: "Midgut — duodenum distal to the major papilla, jejunum, ileum, caecum, appendix, ascending colon and proximal two-thirds of the transverse colon (via inferior pancreaticoduodenal, jejunal/ileal, ileocolic, right colic and middle colic arteries)",
    clinical: "Acute mesenteric ischaemia (embolus in atrial fibrillation) → pain out of proportion to findings. SMA syndrome: the 3rd part of the duodenum is compressed between SMA and aorta. Nutcracker syndrome: left renal vein compressed between SMA and aorta."
  },
  {
    key: "superior-mesenteric-vein", title: "Superior mesenteric vein", match: ["superior mesenteric vein"], kind: "vessel", region: "abdomen",
    summary: "Vein draining the midgut, lying to the right of the SMA.",
    course: "Ascends in the root of the mesentery to the right of the SMA, crossing the 3rd part of the duodenum and uncinate process; joins the splenic vein behind the pancreatic neck to form the portal vein",
    drains: "Small intestine, caecum, appendix, ascending and transverse colon, head of pancreas (corresponding to SMA territory)",
    clinical: "Mesenteric venous thrombosis causes intestinal ischaemia. A reversed SMA/SMV relationship on imaging suggests intestinal malrotation."
  },
  {
    key: "inferior-mesenteric-artery", title: "Inferior mesenteric artery", match: ["inferior mesenteric artery"], kind: "vessel", region: "abdomen",
    summary: "Artery of the hindgut, arising from the aorta at L3.",
    course: "Runs down and to the left retroperitoneally; branches: left colic, sigmoid arteries, then continues as the superior rectal artery",
    supplies: "Hindgut — distal third of the transverse colon, descending and sigmoid colon, rectum and upper anal canal",
    clinical: "Watershed areas (splenic flexure; rectosigmoid) are vulnerable to ischaemic colitis; collateral flow via the marginal artery (of Drummond). Often ligated in AAA repair. A horseshoe kidney ascends only until trapped under the IMA."
  },
  {
    key: "renal-artery", title: "Renal artery", match: ["renal artery"], kind: "vessel", region: "abdomen",
    summary: "Paired arteries from the aorta at about L1–L2, just below the SMA.",
    course: "Pass laterally to the renal hila; the right is longer and passes behind the IVC; divide into segmental (end) arteries near the hilum",
    supplies: "Kidneys (≈20–25% of cardiac output), also suprarenal (inferior suprarenal) and ureteric branches",
    clinical: "Renal artery stenosis (atherosclerosis in older adults; fibromuscular dysplasia in young women) → renovascular hypertension; ACE inhibitors can precipitate renal failure if bilateral. Accessory renal arteries are common.",
    facts: ["Segmental arteries are end arteries — occlusion causes segmental infarction."]
  },
  {
    key: "renal-vein", title: "Renal vein", match: ["renal vein"], kind: "vessel", region: "abdomen",
    summary: "Paired veins draining the kidneys into the IVC; the left is much longer.",
    course: "Lie anterior to the renal arteries at the hilum; the left renal vein crosses anterior to the aorta just below the SMA to reach the IVC",
    drains: "Kidneys; the left renal vein also receives the left gonadal, left suprarenal and left inferior phrenic veins",
    clinical: "Nutcracker syndrome (left renal vein compression) → haematuria, left varicocele. A new left varicocele in an adult may indicate renal cell carcinoma invading the left renal vein. Left kidney is preferred for live donation because of its longer vein.",
    mnemonic: "Hilum, anterior → posterior: VAP — Vein, Artery, Pelvis."
  },
  {
    key: "common-iliac-artery", title: "Common iliac artery", match: ["common iliac artery"], kind: "vessel", region: "pelvis",
    summary: "Terminal branches of the abdominal aorta.",
    course: "From the aortic bifurcation at L4, run inferolaterally to divide in front of the sacroiliac joint (L5–S1) into external and internal iliac arteries; the ureter crosses at the bifurcation",
    supplies: "Pelvis, perineum, gluteal region and lower limbs (via its branches)",
    clinical: "Aortoiliac occlusive disease (Leriche syndrome): buttock/thigh claudication, absent femoral pulses, erectile dysfunction. Aneurysms often coexist with AAA."
  },
  {
    key: "common-iliac-vein", title: "Common iliac vein", match: ["common iliac vein"], kind: "vessel", region: "pelvis",
    summary: "Formed by the external and internal iliac veins; the two unite to form the IVC.",
    course: "Formed anterior to the sacroiliac joint; ascend to join at L5 to the right of the midline, behind the right common iliac artery",
    drains: "Lower limbs and pelvis; also iliolumbar and (left) median sacral veins",
    clinical: "May–Thurner syndrome: the left common iliac vein is compressed by the overlying right common iliac artery → left iliofemoral DVT."
  },
  {
    key: "external-iliac-artery", title: "External iliac artery", match: ["external iliac artery"], kind: "vessel", region: "pelvis",
    summary: "Main artery to the lower limb, continuing as the femoral artery.",
    course: "Runs along the medial border of psoas major and passes under the inguinal ligament at the midinguinal point to become the femoral artery",
    supplies: "Lower limb (via femoral artery); inferior epigastric and deep circumflex iliac branches to the abdominal wall",
    clinical: "Its inferior epigastric branch distinguishes indirect (lateral to it) from direct (medial, Hesselbach's triangle) inguinal hernias. Recipient artery for renal transplants."
  },
  {
    key: "external-iliac-vein", title: "External iliac vein", match: ["external iliac vein"], kind: "vessel", region: "pelvis",
    summary: "Continuation of the femoral vein above the inguinal ligament.",
    course: "Begins behind the inguinal ligament, medial to the external iliac artery; ascends along the pelvic brim to join the internal iliac vein in front of the sacroiliac joint",
    drains: "Lower limb; inferior epigastric and deep circumflex iliac veins",
    clinical: "Iliofemoral DVT can extend here (risk of large PE); used for venous anastomosis in renal transplantation."
  },
  {
    key: "internal-iliac-artery", title: "Internal iliac artery", match: ["internal iliac artery"], kind: "vessel", region: "pelvis",
    summary: "Main artery of the pelvis, perineum and gluteal region.",
    course: "From the common iliac bifurcation descends into the pelvis and divides into anterior and posterior divisions near the greater sciatic foramen",
    supplies: "Posterior division: iliolumbar, lateral sacral, superior gluteal. Anterior division: umbilical (→ superior vesical), obturator, inferior vesical (male), middle rectal, internal pudendal, inferior gluteal (+ uterine and vaginal in females)",
    clinical: "Embolised or ligated to control pelvic haemorrhage (trauma, postpartum). Bilateral occlusion causes buttock claudication and erectile dysfunction.",
    mnemonic: "Posterior division 'P.I.L.S.': Posterior → Iliolumbar, Lateral sacral, Superior gluteal."
  },
  {
    key: "internal-iliac-vein", title: "Internal iliac vein", match: ["internal iliac vein"], kind: "vessel", region: "pelvis",
    summary: "Drains the pelvis, perineum and gluteal region.",
    course: "Ascends posteromedial to the internal iliac artery and joins the external iliac vein in front of the sacroiliac joint to form the common iliac vein",
    drains: "Tributaries match the arterial branches (gluteal, pudendal, obturator, sacral, rectal, vesical) and the pelvic venous plexuses (vesical, prostatic, rectal)",
    clinical: "Pelvic venous plexuses connect with the valveless vertebral venous plexus (Batson's) — a route for prostate cancer to spread to the vertebrae."
  },
  // ───────────────────────────── RESPIRATORY ─────────────────────────────
  {
    key: "trachea", title: "Trachea", match: ["trachea"], kind: "organ", region: "thorax",
    summary: "Windpipe — fibrocartilaginous tube from the larynx to the carina.",
    features: ["Extends from the cricoid cartilage (C6) to the carina at the sternal angle (T4/T5)", "16–20 C-shaped hyaline cartilage rings, open posteriorly where the trachealis muscle lies against the oesophagus", "Lined by pseudostratified ciliated columnar epithelium with goblet cells", "Thyroid isthmus overlies rings 2–4"],
    function: "Conducts air to and from the lungs; mucociliary clearance; cough reflex",
    blood: "Inferior thyroid and bronchial arteries",
    innervation: "Vagus (recurrent laryngeal branches) and sympathetic trunk",
    clinical: "Tracheostomy is placed through rings 2–4. Tracheal deviation: away from a tension pneumothorax or large effusion, toward lobar collapse. The carina is highly sensitive (cough reflex); its widening suggests subcarinal lymphadenopathy or left atrial enlargement."
  },
  {
    key: "bronchus", title: "Bronchi (main and lobar)", match: ["bronchus"], kind: "organ", region: "thorax",
    summary: "Airways branching from the carina into the lungs: main (primary) → lobar (secondary) → segmental (tertiary) bronchi.",
    features: ["Right main bronchus: shorter, wider and more vertical", "Left main bronchus: longer, passes under the aortic arch and in front of the oesophagus", "3 lobar bronchi on the right, 2 on the left", "Segmental bronchi supply bronchopulmonary segments (10 right, 8–10 left)", "Cartilage plates, smooth muscle and seromucous glands in the wall"],
    function: "Conduct air to the lung segments; mucociliary clearance",
    blood: "Bronchial arteries (from thoracic aorta/posterior intercostal); bronchial veins to azygos system",
    clinical: "Inhaled foreign bodies usually enter the right main bronchus. Aspiration when supine → posterior segment of right upper lobe or superior segment of right lower lobe; upright → right lower lobe basal segments. Bronchogenic carcinoma, bronchiectasis and asthma (bronchoconstriction via vagal stimulation) involve the bronchi."
  },
  {
    key: "upper-lobe-lung", title: "Upper (superior) lobe of lung", match: ["upper lobe of lung"], kind: "organ", region: "thorax",
    summary: "Upper lobe of each lung, above the oblique fissure (and, on the right, above the horizontal fissure).",
    features: ["Right: apical, posterior and anterior segments", "Left: apicoposterior, anterior, and superior and inferior lingular segments (lingula = homologue of the right middle lobe)", "Apex rises ~2–3 cm above the medial third of the clavicle into the neck", "Left upper lobe has the cardiac notch"],
    function: "Gas exchange",
    blood: "Pulmonary arteries (gas exchange) and bronchial arteries (nutrition)",
    clinical: "Pancoast (superior sulcus) tumour at the apex → Horner syndrome, T1 root pain and hand wasting, sometimes SVC obstruction. Reactivation tuberculosis favours the apical/posterior segments. The apex can be punctured by needles in the root of the neck (pneumothorax).",
    facts: ["Mostly auscultated from the front of the chest."]
  },
  {
    key: "middle-lobe-lung", title: "Middle lobe of right lung", match: ["middle lobe of lung"], kind: "organ", region: "thorax",
    summary: "Wedge-shaped lobe present only in the right lung, between the horizontal and oblique fissures.",
    features: ["Lateral and medial segments", "Horizontal fissure along the 4th rib/costal cartilage anteriorly", "Lies against the right heart border"],
    function: "Gas exchange",
    blood: "Pulmonary arteries (gas exchange) and bronchial arteries (nutrition)",
    clinical: "Auscultated anteriorly on the right between the 4th and 6th ribs. Loss of the right heart border on chest X-ray (silhouette sign) indicates middle-lobe disease. Right middle lobe syndrome: recurrent collapse because of a long, narrow bronchus surrounded by lymph nodes."
  },
  {
    key: "lower-lobe-lung", title: "Lower (inferior) lobe of lung", match: ["lower lobe of lung"], kind: "organ", region: "thorax",
    summary: "Lower lobe of each lung, below and behind the oblique fissure; lies mostly posteriorly.",
    features: ["Superior, anterior basal, lateral basal and posterior basal segments; medial basal segment (right; often combined on left)", "Oblique fissure runs from about the T2/T3 spinous process to the 6th costal cartilage", "Diaphragmatic surface rests on the dome of the diaphragm"],
    function: "Gas exchange (largest share of ventilation in the upright position)",
    blood: "Pulmonary arteries (gas exchange) and bronchial arteries (nutrition)",
    clinical: "Mostly auscultated from the back. Aspiration pneumonia in an upright patient favours the right lower lobe. Lower lobe pneumonia can refer pain to the abdomen. Effusions collect first in the costodiaphragmatic recess behind it."
  },
  // ───────────────────────────── DIGESTIVE ─────────────────────────────
  {
    key: "lips", title: "Lips (labial part of mouth)", match: ["labial part of mouth"], kind: "organ", region: "head & neck",
    summary: "Mobile musculofibrous folds around the oral fissure, with orbicularis oris at their core.",
    features: ["Vermilion border", "Philtrum (upper lip)", "Labial glands and mucosa", "Labial frenula", "Labial commissures at the angles of the mouth"],
    function: "Closing the mouth, speech articulation, food intake, facial expression; highly sensitive",
    innervation: "Sensory: upper lip — infraorbital nerve (V2); lower lip — mental nerve (V3). Motor: facial nerve (CN VII)",
    blood: "Superior and inferior labial arteries (from facial artery)",
    clinical: "Squamous cell carcinoma usually affects the lower lip (sun exposure); lower lip lymph drains to submental (central) and submandibular nodes. Cleft lip results from failed fusion of the maxillary and medial nasal prominences. Angular cheilitis in iron/B-vitamin deficiency."
  },
  {
    key: "esophagus", title: "Oesophagus", match: ["esophagus"], kind: "organ", region: "thorax",
    summary: "Muscular tube (~25 cm) carrying food from the pharynx to the stomach.",
    features: ["Begins at C6 (cricopharyngeus); passes through the diaphragm at T10; ends at the cardia (~T11)", "Upper third skeletal, middle mixed, lower third smooth muscle", "Non-keratinised stratified squamous epithelium", "Constrictions: pharyngo-oesophageal junction, crossing of the aortic arch and left main bronchus, diaphragmatic hiatus", "Lower oesophageal sphincter (physiological)"],
    function: "Transports food by peristalsis; prevents reflux",
    blood: "Inferior thyroid (cervical), oesophageal branches of the thoracic aorta (thoracic), left gastric artery (abdominal)",
    innervation: "Vagus nerves (oesophageal plexus) and sympathetic trunks",
    clinical: "Oesophageal varices (portosystemic anastomosis between left gastric and azygos/oesophageal veins) in portal hypertension. Barrett's oesophagus (columnar metaplasia) → adenocarcinoma of the lower third; squamous cell carcinoma in the upper/middle thirds. Zenker's diverticulum (Killian's dehiscence), achalasia, hiatal hernia."
  },
  {
    key: "stomach", title: "Stomach", match: ["stomach"], kind: "organ", region: "abdomen",
    summary: "J-shaped dilated part of the GI tract in the left upper quadrant/epigastrium between the oesophagus and duodenum.",
    features: ["Cardia, fundus, body, pyloric antrum and canal, pylorus (sphincter)", "Lesser and greater curvatures", "Rugae", "Three muscle layers including an inner oblique layer", "Parietal (HCl, intrinsic factor), chief (pepsinogen) and G cells (gastrin, antrum)"],
    function: "Stores and mixes food, begins protein digestion, secretes acid and intrinsic factor (for B12 absorption)",
    blood: "Left and right gastric (lesser curvature), left and right gastro-omental (greater curvature), short gastric arteries (fundus) — all from the coeliac trunk",
    innervation: "Vagal trunks (anterior = mainly left vagus, posterior = mainly right) increase secretion/motility; sympathetic T6–T9 via greater splanchnic nerves (pain)",
    clinical: "Peptic ulcer disease (H. pylori, NSAIDs); a posterior ulcer may erode the splenic artery or penetrate the pancreas. Gastric cancer may spread to the left supraclavicular node (Virchow's node, Troisier's sign). Hiatal hernia; pyloric stenosis in infants (projectile vomiting, olive-shaped mass)."
  },
  {
    key: "duodenum", title: "Duodenum", match: ["duodenum"], kind: "organ", region: "abdomen",
    summary: "C-shaped first part of the small intestine (~25 cm), curving around the head of the pancreas; mostly retroperitoneal.",
    features: ["1st (superior) part: intraperitoneal 'duodenal cap'", "2nd (descending) part: major duodenal papilla — opening of bile and pancreatic ducts (ampulla of Vater); minor papilla", "3rd (horizontal) part: crossed by the SMA and SMV", "4th (ascending) part: duodenojejunal flexure, suspensory ligament (of Treitz)"],
    function: "Receives chyme, bile and pancreatic juice; neutralises acid (Brunner's glands); iron absorption",
    blood: "Superior pancreaticoduodenal (gastroduodenal, coeliac) and inferior pancreaticoduodenal (SMA) arteries — foregut/midgut junction at the major papilla",
    clinical: "Most peptic ulcers occur in the 1st part: posterior ulcers erode the gastroduodenal artery (bleeding), anterior ulcers perforate (peritonitis). The ligament of Treitz separates upper from lower GI bleeding. Duodenal atresia → 'double-bubble' sign (associated with Down syndrome)."
  },
  {
    key: "jejunum", title: "Jejunum", match: ["jejunum"], kind: "organ", region: "abdomen",
    summary: "Proximal two-fifths of the mobile small intestine, suspended by the mesentery, mainly in the left upper abdomen.",
    features: ["Thicker wall and wider lumen than the ileum", "Prominent, tall plicae circulares", "Long vasa recta and few arterial arcades", "Less mesenteric fat; deeper red colour"],
    function: "Main site of digestion and nutrient absorption",
    blood: "Jejunal arteries (from SMA)",
    clinical: "Features above distinguish jejunum from ileum at surgery; the jejunum is used in Roux-en-Y reconstructions and feeding jejunostomies."
  },
  {
    key: "ileum", title: "Ileum", match: ["ileum"], kind: "organ", region: "abdomen",
    summary: "Distal three-fifths of the mobile small intestine, ending at the ileocaecal valve, mainly in the lower right abdomen.",
    features: ["Thinner wall, narrower lumen, fewer and lower plicae", "Short vasa recta and many arterial arcades", "More mesenteric fat", "Peyer's patches (aggregated lymphoid follicles)"],
    function: "Absorbs vitamin B12 (with intrinsic factor) and bile salts in the terminal ileum; remaining nutrients and water",
    blood: "Ileal arteries and ileocolic artery (from SMA)",
    clinical: "Crohn's disease classically affects the terminal ileum. Terminal ileal resection → B12 deficiency, bile-acid diarrhoea and gallstones. Meckel's diverticulum arises from the antimesenteric border.",
    mnemonic: "Meckel's 'rule of 2s': 2% of people, 2 feet (~60 cm) from the ileocaecal valve, 2 inches long, 2 types of ectopic tissue (gastric, pancreatic), often presents before age 2."
  },
  {
    key: "appendix", title: "Vermiform appendix", match: ["appendix"], kind: "organ", region: "abdomen",
    summary: "Narrow blind-ended tube (~6–10 cm) arising from the posteromedial caecum where the three taeniae coli converge.",
    features: ["Positions: retrocaecal (most common), pelvic, subcaecal, pre-/post-ileal", "Mesoappendix carrying the appendicular artery", "Rich in lymphoid tissue"],
    function: "Lymphoid organ; may act as a reservoir for gut flora",
    blood: "Appendicular artery (from ileocolic artery, SMA) — an end artery",
    clinical: "Appendicitis: early periumbilical (visceral, T10) pain migrating to the right iliac fossa (McBurney's point — one-third of the way from ASIS to umbilicus) when the parietal peritoneum is irritated; Rovsing, psoas and obturator signs. Thrombosis of the end-artery leads to gangrene and perforation."
  },
  {
    key: "colon", title: "Colon (large intestine)", match: ["colon"], kind: "organ", region: "abdomen",
    summary: "Large intestine from the caecum to the rectum, framing the small intestine.",
    features: ["Caecum, ascending colon (retroperitoneal), hepatic (right colic) flexure", "Transverse colon (intraperitoneal, transverse mesocolon)", "Splenic (left colic) flexure, descending colon (retroperitoneal)", "Sigmoid colon (sigmoid mesocolon)", "Taeniae coli, haustra and omental (epiploic) appendices"],
    function: "Absorbs water and electrolytes; forms and stores faeces; fermentation by gut bacteria",
    blood: "SMA (ileocolic, right colic, middle colic) to the proximal two-thirds of the transverse colon; IMA (left colic, sigmoid) beyond; linked by the marginal artery",
    innervation: "Vagus to the proximal two-thirds of the transverse colon (midgut); pelvic splanchnic nerves (S2–S4) beyond; sympathetic via splanchnic nerves",
    clinical: "Colorectal cancer: right-sided tumours present with anaemia, left-sided with obstruction and altered bowel habit. Diverticular disease in the sigmoid (where vasa recta penetrate the wall). Sigmoid volvulus ('coffee-bean' sign). Ischaemic colitis at the splenic flexure watershed."
  },
  {
    key: "rectum", title: "Rectum", match: ["rectum"], kind: "organ", region: "pelvis",
    summary: "Terminal part of the large intestine (~12–15 cm) from the rectosigmoid junction (S3) to the anorectal junction at the puborectalis sling.",
    features: ["No taeniae, haustra or omental appendices (taeniae spread out)", "Transverse rectal folds (valves of Houston)", "Rectal ampulla", "Upper third covered by peritoneum anteriorly and laterally, lower third below the peritoneum", "Rectovesical pouch anteriorly in males"],
    function: "Stores faeces before defecation; stretch receptors signal the urge to defecate",
    blood: "Superior rectal (IMA), middle rectal (internal iliac) and inferior rectal (internal pudendal) arteries; superior rectal vein drains to the portal system, middle/inferior to the systemic system (portosystemic anastomosis)",
    clinical: "Digital rectal examination palpates the prostate and seminal vesicles anteriorly in males. Rectal cancer is treated by total mesorectal excision. Upper rectal lymph drains to inferior mesenteric nodes; lower rectal to internal iliac nodes."
  },
  {
    key: "liver", title: "Liver", match: ["liver"], kind: "organ", region: "abdomen",
    summary: "Largest gland in the body (~1.5 kg), occupying the right upper quadrant under the diaphragm.",
    features: ["Right and left anatomical lobes (falciform ligament); caudate and quadrate lobes", "Eight functional (Couinaud) segments based on hepatic veins and portal triads", "Porta hepatis: portal vein, hepatic artery proper, common hepatic duct", "Bare area (no peritoneum) in contact with the diaphragm", "Hepatic veins drain into the IVC"],
    function: "Metabolism (glucose, lipid, protein), bile production, detoxification and drug metabolism, synthesis of albumin and clotting factors, storage of glycogen, iron, vitamins",
    blood: "Dual supply: hepatic portal vein (~75%, nutrient-rich) and hepatic artery proper (~25%, oxygen); drained by hepatic veins to the IVC",
    innervation: "Hepatic plexus (sympathetic and vagal); capsule pain via lower intercostal and phrenic nerves",
    clinical: "Cirrhosis → portal hypertension: oesophageal varices, caput medusae, splenomegaly, ascites. Liver capsule stretch causes RUQ pain; diaphragmatic irritation refers pain to the right shoulder. The hepatorenal recess (Morison's pouch) is the most dependent part of the peritoneal cavity when supine."
  },
  {
    key: "gallbladder", title: "Gallbladder", match: ["gallbladder"], kind: "organ", region: "abdomen",
    summary: "Pear-shaped sac in a fossa on the visceral surface of the liver that stores and concentrates bile.",
    features: ["Fundus, body and neck (Hartmann's pouch)", "Cystic duct with spiral fold (valve of Heister)", "Fundus surface marking: tip of the right 9th costal cartilage at the midclavicular line", "Cystohepatic (Calot's) triangle: cystic duct, common hepatic duct, inferior border of liver — contains the cystic artery"],
    function: "Stores (~30–50 mL) and concentrates bile; contracts in response to CCK after fatty meals",
    blood: "Cystic artery (usually from the right hepatic artery) — an end artery",
    clinical: "Gallstones → biliary colic, acute cholecystitis (positive Murphy's sign), choledocholithiasis, gallstone pancreatitis. Pain may refer to the right shoulder/scapula. Courvoisier's law: a palpable, non-tender gallbladder with jaundice is unlikely to be due to stones (think pancreatic head cancer).",
    mnemonic: "Gallstone risk '5 Fs': Fat, Female, Fertile, Forty, Fair."
  },
  {
    key: "pancreas", title: "Pancreas", match: ["pancreas"], kind: "organ", region: "abdomen",
    summary: "Elongated retroperitoneal gland lying across the posterior abdominal wall at L1–L2, with exocrine and endocrine functions.",
    features: ["Head (in the C-loop of the duodenum) with uncinate process (behind the SMV)", "Neck (anterior to the SMV/portal vein confluence)", "Body (crosses the aorta and L1–L2)", "Tail (in the splenorenal ligament, reaching the splenic hilum)", "Main and accessory pancreatic ducts"],
    function: "Exocrine: acinar cells secrete digestive enzymes, ductal cells bicarbonate. Endocrine (islets of Langerhans): β cells insulin, α cells glucagon, δ cells somatostatin",
    blood: "Superior pancreaticoduodenal (gastroduodenal), inferior pancreaticoduodenal (SMA) and pancreatic branches of the splenic artery",
    clinical: "Acute pancreatitis (gallstones, alcohol): epigastric pain radiating to the back, raised lipase/amylase. Pancreatic head adenocarcinoma → painless obstructive jaundice; treated by Whipple's procedure. Annular pancreas can obstruct the duodenum."
  },
  {
    key: "pancreatic-duct", title: "Pancreatic duct (of Wirsung)", match: ["pancreatic duct"], kind: "organ", region: "abdomen",
    summary: "Main excretory duct running the length of the pancreas.",
    features: ["Runs from tail to head, receiving many small tributaries", "Joins the common bile duct to form the hepatopancreatic ampulla (of Vater)", "Opens at the major duodenal papilla in the 2nd part of the duodenum, controlled by the sphincter of Oddi", "Accessory duct (of Santorini) opens at the minor papilla"],
    function: "Delivers pancreatic enzymes and bicarbonate into the duodenum",
    clinical: "A gallstone impacted at the ampulla can obstruct both ducts → gallstone pancreatitis. Pancreas divisum (failed fusion of dorsal and ventral ducts) predisposes to recurrent pancreatitis. Examined and stented at ERCP; dilated in chronic pancreatitis and pancreatic head tumours (double-duct sign)."
  },
  // ───────────────────────────── URINARY ─────────────────────────────
  {
    key: "kidney", title: "Kidney", match: ["kidney"], kind: "organ", region: "abdomen",
    summary: "Paired bean-shaped retroperitoneal organs on the posterior abdominal wall (T12–L3); the right sits slightly lower because of the liver.",
    features: ["Hilum at L1 (transpyloric plane): renal vein, artery and pelvis (anterior → posterior)", "Cortex, medulla with renal pyramids and papillae", "Minor and major calyces, renal pelvis", "Fibrous capsule, perirenal fat, renal (Gerota's) fascia, pararenal fat", "Posterior relations: diaphragm, 12th rib, psoas major, quadratus lumborum, transversus abdominis; subcostal, iliohypogastric and ilioinguinal nerves"],
    function: "Filters blood and forms urine; regulates fluid, electrolytes and acid–base balance; secretes renin and erythropoietin; activates vitamin D (1α-hydroxylation)",
    blood: "Renal arteries (segmental end arteries); renal veins to the IVC",
    innervation: "Renal plexus — sympathetic T10–L1; pain referred to the loin and groin",
    clinical: "Renal colic: loin-to-groin pain from ureteric stones. Horseshoe kidney is trapped beneath the IMA. Pyelonephritis → costovertebral angle tenderness. Renal cell carcinoma may invade the renal vein/IVC.",
    mnemonic: "Hilum anterior → posterior: VAP — Vein, Artery, Pelvis."
  },
  {
    key: "ureter", title: "Ureter", match: ["ureter"], kind: "organ", region: "abdomen",
    summary: "Muscular tube (~25–30 cm) carrying urine from the renal pelvis to the bladder by peristalsis.",
    features: ["Descends retroperitoneally on psoas major, roughly along the tips of the lumbar transverse processes", "Crosses the pelvic brim anterior to the common iliac bifurcation", "Enters the bladder obliquely (valve-like intramural course)", "Three narrowings: pelviureteric junction, pelvic brim, vesicoureteric junction (narrowest)", "In males crossed superiorly by the ductus deferens"],
    function: "Transports urine to the bladder; oblique entry prevents reflux",
    blood: "Segmental supply from renal, gonadal, aortic, common/internal iliac and vesical arteries (renal/abdominal part from medial side; pelvic part from lateral side)",
    clinical: "Stones lodge at the three narrowings → colicky loin-to-groin pain and haematuria. Iatrogenic ureteric injury in pelvic surgery (in females near the uterine artery).",
    mnemonic: "'Water under the bridge': the ureter passes under the ductus deferens (male) or uterine artery (female)."
  },
  {
    key: "urinary-bladder", title: "Urinary bladder", match: ["urinary bladder"], kind: "organ", region: "pelvis",
    summary: "Hollow muscular reservoir for urine lying behind the pubic symphysis, rising into the abdomen as it fills.",
    features: ["Apex (attached to the median umbilical ligament — urachus remnant), body, fundus (base) and neck", "Trigone: smooth triangle between the two ureteric orifices and internal urethral orifice", "Detrusor muscle", "Internal urethral sphincter at the neck (males)", "Rectovesical pouch behind it in males"],
    function: "Stores (~400–600 mL adult capacity) and expels urine",
    blood: "Superior and inferior vesical arteries (internal iliac); vesical venous plexus",
    innervation: "Parasympathetic (pelvic splanchnic nerves, S2–S4): detrusor contraction — micturition. Sympathetic (T11–L2): detrusor relaxation, internal sphincter contraction. Somatic (pudendal nerve, S2–S4): external urethral sphincter",
    clinical: "A full bladder rises above the pubis without peritoneum in front → suprapubic catheterisation without entering the peritoneal cavity. Bladder rupture can be intraperitoneal (dome) or extraperitoneal (pelvic fracture). Spinal cord lesions cause neurogenic bladder. Urothelial carcinoma (smoking).",
    mnemonic: "'Parasympathetic Pees, Sympathetic Stores.'"
  },
  {
    key: "urethra", title: "Urethra (male)", match: ["urethra"], kind: "organ", region: "pelvis",
    summary: "Male urethra (~18–20 cm) carries urine and semen from the bladder neck to the external urethral orifice.",
    features: ["Preprostatic (intramural) part — internal sphincter", "Prostatic part: seminal colliculus with openings of the ejaculatory ducts and prostatic ducts", "Intermediate (membranous) part: through the external urethral sphincter — narrowest and least distensible", "Spongy (penile) part in the corpus spongiosum: bulbourethral glands open into it; navicular fossa in the glans"],
    function: "Conducts urine and semen",
    blood: "Inferior vesical, middle rectal and internal pudendal branches",
    clinical: "Catheterisation is most difficult at the membranous part and bulb. Pelvic fractures injure the membranous urethra. Straddle injury ruptures the spongy (bulbar) urethra → urine extravasates into the superficial perineal pouch, scrotum, penis and lower abdominal wall but NOT the thighs (Colles' fascia attachments). Hypospadias: ventral opening."
  },
  // ───────────────────────────── ENDOCRINE ─────────────────────────────
  {
    key: "adrenal-gland", title: "Adrenal (suprarenal) gland", match: ["adrenal gland"], kind: "organ", region: "abdomen",
    summary: "Paired endocrine glands on the superomedial poles of the kidneys, within the renal fascia; right pyramidal, left crescent-shaped.",
    features: ["Cortex (mesoderm): zona glomerulosa, fasciculata, reticularis", "Medulla (neural crest): chromaffin cells innervated directly by preganglionic sympathetic fibres", "Single suprarenal vein: right → IVC, left → left renal vein"],
    function: "Cortex: aldosterone (glomerulosa), cortisol (fasciculata), androgens (reticularis). Medulla: adrenaline and noradrenaline",
    blood: "Superior (from inferior phrenic), middle (from aorta) and inferior (from renal artery) suprarenal arteries",
    clinical: "Cushing's syndrome (cortisol excess), Addison's disease (primary adrenal insufficiency), Conn's syndrome (aldosterone excess → hypertension, hypokalaemia), phaeochromocytoma (episodic hypertension, headache, sweating), Waterhouse–Friderichsen syndrome (haemorrhage in meningococcal sepsis).",
    mnemonic: "Cortex zones 'GFR' make 'Salt, Sugar, Sex' — 'the deeper you go, the sweeter it gets'."
  },
  {
    key: "thymus", title: "Thymus", match: ["thymus"], kind: "organ", region: "thorax",
    summary: "Bilobed primary lymphoid organ in the superior and anterior mediastinum, behind the manubrium; large in children and involuted (fatty) in adults.",
    features: ["Two lobes (right and left)", "Cortex (dense immature T cells) and medulla (Hassall's corpuscles)", "Derived from the 3rd pharyngeal pouch"],
    function: "Site of T-cell maturation and selection (positive selection in cortex, negative selection in medulla); secretes thymic hormones",
    blood: "Internal thoracic arteries (and inferior thyroid arteries); veins to the left brachiocephalic vein",
    clinical: "Thymoma is associated with myasthenia gravis (thymectomy can help). DiGeorge syndrome (22q11 deletion): thymic aplasia → T-cell immunodeficiency, with hypocalcaemia (absent parathyroids) and cardiac defects. Normal infant thymus can give a 'sail sign' on chest X-ray."
  },
  {
    key: "pineal-body", title: "Pineal gland (body)", match: ["pineal body"], kind: "organ", region: "head & neck",
    summary: "Small cone-shaped endocrine gland of the epithalamus, behind the third ventricle and above the superior colliculi.",
    features: ["Pinealocytes", "Attached by the habenular and posterior commissures", "Often calcified (corpora arenacea, 'brain sand') in adults"],
    function: "Secretes melatonin in darkness, regulating circadian rhythm (retina → suprachiasmatic nucleus → spinal cord → superior cervical ganglion → pineal)",
    clinical: "Calcification makes it a midline marker on X-ray/CT. Pineal tumours (e.g. germinoma) compress the tectum and cerebral aqueduct → Parinaud syndrome and obstructive hydrocephalus; hCG-secreting tumours can cause precocious puberty in boys."
  },
  {
    key: "pituitary-gland", title: "Pituitary gland (hypophysis)", match: ["pituitary gland"], kind: "organ", region: "head & neck",
    summary: "Pea-sized 'master' endocrine gland in the sella turcica of the sphenoid, connected to the hypothalamus by the infundibulum.",
    features: ["Anterior lobe (adenohypophysis, from Rathke's pouch — oral ectoderm)", "Posterior lobe (neurohypophysis, from neuroectoderm)", "Covered by the diaphragma sellae; optic chiasm above; cavernous sinuses (with ICA and CN III, IV, V1, V2, VI) on either side; sphenoidal sinus below"],
    function: "Anterior lobe: GH, prolactin, ACTH, TSH, FSH, LH. Posterior lobe: stores and releases ADH (vasopressin) and oxytocin made in the hypothalamus",
    blood: "Superior and inferior hypophyseal arteries (internal carotid); hypophyseal portal system carries hypothalamic releasing hormones to the anterior lobe",
    clinical: "Pituitary adenoma (prolactinoma most common) → hormonal syndromes and bitemporal hemianopia from chiasmal compression; removed transsphenoidally. Sheehan syndrome (postpartum necrosis). Pituitary apoplexy (sudden headache, visual loss, ophthalmoplegia).",
    mnemonic: "Anterior pituitary hormones 'FLAT PiG': FSH, LH, ACTH, TSH, Prolactin, GH."
  },
  // ───────────────────────────── LYMPHATIC ─────────────────────────────
  {
    key: "spleen", title: "Spleen", match: ["spleen"], kind: "organ", region: "abdomen",
    summary: "Largest lymphoid organ, in the left hypochondrium under ribs 9–11, its long axis along the 10th rib.",
    features: ["Intraperitoneal; gastrosplenic and splenorenal ligaments", "Diaphragmatic and visceral surfaces; notched superior border", "White pulp (lymphoid tissue around central arterioles) and red pulp (sinusoids and cords)", "Hilum with splenic vessels; tail of pancreas nearby"],
    function: "Filters blood, removing old/abnormal red cells and particles; immune responses to blood-borne antigens, especially encapsulated bacteria; reservoir of platelets and monocytes; fetal haematopoiesis",
    blood: "Splenic artery (coeliac trunk); splenic vein to the portal system",
    clinical: "Most commonly injured organ in blunt abdominal trauma (especially with left lower rib fractures); haemoperitoneum may refer pain to the left shoulder (Kehr's sign). Splenomegaly enlarges toward the right iliac fossa (notch palpable). After splenectomy: vaccinate against encapsulated organisms (pneumococcus, Hib, meningococcus); Howell–Jolly bodies on blood film.",
    mnemonic: "'1, 3, 5, 7, 9, 11': 1 × 3 × 5 inches, ~7 oz, lies between ribs 9 and 11."
  },
  // ───────────────────────────── REPRODUCTIVE (MALE) ─────────────────────────────
  {
    key: "testis", title: "Testis", match: ["testis"], kind: "organ", region: "pelvis",
    summary: "Paired male gonads in the scrotum, producing sperm and testosterone.",
    features: ["Tunica vaginalis (visceral and parietal layers, from the processus vaginalis)", "Tunica albuginea and septa dividing ~250 lobules", "Seminiferous tubules (spermatogenesis; Sertoli cells)", "Interstitial (Leydig) cells (testosterone)", "Rete testis → efferent ductules → epididymis"],
    function: "Spermatogenesis and androgen (testosterone) production",
    blood: "Testicular artery (from the aorta at ~L2); venous drainage via the pampiniform plexus → testicular vein (right → IVC; left → left renal vein)",
    clinical: "Testicular torsion (bell-clapper deformity) — surgical emergency, absent cremasteric reflex. Varicocele (usually left). Hydrocele. Germ-cell tumours (seminoma) metastasise to para-aortic (lumbar) lymph nodes, NOT inguinal nodes — reflecting the testis's abdominal origin. Cremasteric reflex tests L1–L2."
  },
  {
    key: "epididymis", title: "Epididymis", match: ["epididymis"], kind: "organ", region: "pelvis",
    summary: "Comma-shaped, highly coiled duct (~6 m uncoiled) on the posterolateral surface of the testis.",
    features: ["Head (receives efferent ductules)", "Body", "Tail (continues as the ductus deferens)", "Sinus of epididymis between it and the testis"],
    function: "Storage and maturation of sperm (acquire motility)",
    blood: "Testicular artery branches",
    clinical: "Epididymitis: young men — Chlamydia/gonorrhoea; older men — E. coli (with UTI); pain may be relieved by elevating the testis (Prehn sign). Spermatocele (epididymal cyst) transilluminates and lies separate from the testis."
  },
  {
    key: "ductus-deferens", title: "Ductus (vas) deferens", match: ["deferent duct"], kind: "organ", region: "pelvis",
    summary: "Thick-walled muscular duct (~45 cm) carrying sperm from the tail of the epididymis to the ejaculatory duct.",
    features: ["Ascends in the spermatic cord through the inguinal canal (deep ring lateral to inferior epigastric vessels)", "Crosses the external iliac vessels and passes over the ureter", "Dilates as the ampulla behind the bladder", "Joins the duct of the seminal vesicle to form the ejaculatory duct (opens into prostatic urethra)"],
    function: "Propels sperm by peristalsis during emission (sympathetic)",
    blood: "Artery to the ductus deferens (from superior or inferior vesical artery)",
    clinical: "Palpable as a firm cord in the spermatic cord — divided in vasectomy. Congenital bilateral absence is associated with cystic fibrosis (CFTR mutations) → male infertility.",
    mnemonic: "'Water under the bridge' — the ureter runs under the ductus deferens."
  },
  {
    key: "seminal-vesicle", title: "Seminal vesicle (gland)", match: ["seminal vesicle"], kind: "organ", region: "pelvis",
    summary: "Paired coiled tubular glands on the posterior surface of the bladder base, lateral to the ampullae of the ductus deferens.",
    features: ["Lie above the prostate, anterior to the rectum (separated by the rectoprostatic fascia)", "Duct joins the ductus deferens to form the ejaculatory duct"],
    function: "Secretes most of the semen volume (~60–70%): alkaline, fructose-rich fluid with prostaglandins and semenogelin (coagulation)",
    blood: "Inferior vesical and middle rectal arteries",
    clinical: "Enlarged seminal vesicles may be palpable on DRE; invasion by prostate cancer upstages the tumour (T3b)."
  },
  {
    key: "prostate", title: "Prostate", match: ["prostate"], kind: "organ", region: "pelvis",
    summary: "Walnut-sized fibromuscular gland surrounding the prostatic urethra just below the bladder neck.",
    features: ["Base (against bladder neck) and apex (on the external urethral sphincter)", "Zones: peripheral (~70% of glandular tissue, posterior), central (around ejaculatory ducts), transition (around urethra), anterior fibromuscular stroma", "Capsule and prostatic venous plexus", "Ejaculatory ducts pass through it"],
    function: "Secretes ~20–30% of semen (PSA, citrate, zinc) — liquefies semen; smooth muscle helps expel semen",
    blood: "Inferior vesical, middle rectal and internal pudendal arteries; prostatic venous plexus → internal iliac veins and vertebral venous plexus",
    innervation: "Inferior hypogastric plexus; cavernous nerves (erection) run posterolaterally and are at risk in radical prostatectomy",
    clinical: "Benign prostatic hyperplasia arises in the transition zone → urinary obstruction. Prostate cancer arises mostly in the peripheral zone (palpable on DRE) and spreads to vertebrae via Batson's plexus (osteoblastic metastases). Prostatitis."
  },
  {
    key: "corpus-cavernosum", title: "Corpus cavernosum of penis", match: ["corpus cavernosum"], kind: "organ", region: "pelvis",
    summary: "Paired dorsal erectile bodies of the penis, enclosed by tunica albuginea.",
    features: ["Separated by an incomplete septum", "Proximal crura attached to the ischiopubic rami, covered by ischiocavernosus", "Deep (cavernosal) artery in the centre of each, giving helicine arteries"],
    function: "Fill with blood to produce erection (parasympathetic, S2–S4 via cavernous nerves → nitric oxide → smooth muscle relaxation)",
    blood: "Deep arteries of the penis (from internal pudendal artery)",
    clinical: "Priapism (e.g. sickle cell disease) is a urological emergency. Penile 'fracture' = rupture of the tunica albuginea during intercourse. Peyronie disease: fibrous plaque → curvature. PDE5 inhibitors (sildenafil) enhance the NO pathway.",
    mnemonic: "'Point and Shoot': Parasympathetic → erection (point); Sympathetic → emission/ejaculation (shoot)."
  },
  {
    key: "corpus-spongiosum", title: "Corpus spongiosum of penis", match: ["corpus spongiosum"], kind: "organ", region: "pelvis",
    summary: "Single ventral erectile body of the penis containing the spongy urethra; expands proximally as the bulb and distally as the glans.",
    features: ["Bulb of penis attached to the perineal membrane, covered by bulbospongiosus", "Surrounds the spongy urethra", "Distal expansion forms the glans penis"],
    function: "Erectile tissue that stays relatively compressible during erection, keeping the urethra open for ejaculation",
    blood: "Artery of the bulb of the penis and dorsal arteries (internal pudendal)",
    clinical: "Straddle injuries rupture the urethra within the bulb. Hypospadias reflects incomplete closure of the urethral folds."
  },
  {
    key: "glans-penis", title: "Glans penis", match: ["glans penis"], kind: "organ", region: "pelvis",
    summary: "Cone-shaped distal expansion of the corpus spongiosum, capping the corpora cavernosa.",
    features: ["Corona and neck", "External urethral orifice", "Navicular fossa of the urethra", "Covered by the prepuce (foreskin), attached by the frenulum"],
    function: "Highly sensitive sensory region; protects the corpora cavernosa tips",
    innervation: "Dorsal nerve of the penis (pudendal nerve, S2–S4)",
    clinical: "Hypospadias (ventral meatus) and epispadias (dorsal). Phimosis and paraphimosis (emergency). Balanitis. Dorsal penile nerve block is used for circumcision."
  },
];

// Fallback blurbs per system when a structure has no KB entry.
export const SYSTEM_INFO = {
  muscular: { label: "Muscular", color: "#c0392b", blurb: "Skeletal muscles move the skeleton across joints, maintain posture and generate heat. Each has an origin (usually the fixed, proximal attachment), an insertion (moving attachment), an action and a nerve supply from specific spinal cord segments (myotomes)." },
  skeletal: { label: "Skeletal", color: "#e8dcc0", blurb: "The skeleton (206 bones in the adult) supports and protects the body, provides levers for muscles, stores calcium and phosphate, and houses red bone marrow for blood cell production. It is divided into axial (skull, vertebral column, thorax) and appendicular (limbs and girdles) parts." },
  connective: { label: "Connective tissue", color: "#b8a07e", blurb: "Dense connective tissues — tendons, ligaments, aponeuroses, retinacula, fascial bands and cartilages — transmit muscle forces, bind bones together, hold tendons in place and give shape and flexibility to structures such as the nose and larynx." },
  nervous: { label: "Nervous", color: "#e6b800", blurb: "The nervous system comprises the brain and spinal cord (CNS) and peripheral nerves. It receives sensory information, integrates it and controls movement, behaviour and the internal environment. Lesion location determines the pattern of deficits — the key to clinical neuroanatomy." },
  cardio: { label: "Heart & vessels", color: "#b03a48", blurb: "The cardiovascular system consists of the heart and blood vessels. The heart pumps blood through the pulmonary circuit (gas exchange) and the systemic circuit (oxygen and nutrient delivery); arteries carry blood away from the heart and veins return it." },
  respiratory: { label: "Respiratory", color: "#6fa8dc", blurb: "The respiratory system conducts air through the trachea and bronchial tree to the alveoli of the lungs, where oxygen and carbon dioxide are exchanged with the blood. The right lung has three lobes, the left two." },
  digestive: { label: "Digestive", color: "#d98c5f", blurb: "The digestive system — the alimentary canal from mouth to anus plus accessory organs (liver, gallbladder, pancreas) — ingests food, digests it, absorbs nutrients and water, and eliminates waste. Foregut, midgut and hindgut are supplied by the coeliac trunk, SMA and IMA respectively." },
  urinary: { label: "Urinary", color: "#d4ac0d", blurb: "The urinary system (kidneys, ureters, bladder, urethra) filters the blood, regulates fluid, electrolyte and acid–base balance, and stores and eliminates urine." },
  endocrine: { label: "Endocrine", color: "#9b59b6", blurb: "Endocrine glands (pituitary, pineal, thyroid, parathyroid, adrenal, thymus, pancreatic islets, gonads) secrete hormones into the blood that regulate growth, metabolism, reproduction, stress responses and circadian rhythms." },
  reproductive: { label: "Reproductive", color: "#e08bb0", blurb: "The male reproductive system comprises the testes (sperm and testosterone production), a duct system (epididymis, ductus deferens, ejaculatory ducts, urethra), accessory glands (seminal vesicles, prostate, bulbourethral glands) and the penis." },
  lymphatic: { label: "Lymphatic", color: "#27ae60", blurb: "The lymphoid system returns tissue fluid to the blood and provides immune defence. Lymphoid organs include the thymus and bone marrow (primary) and the spleen, lymph nodes, tonsils and MALT (secondary)." },
  skin: { label: "Skin", color: "#e0ac90", blurb: "The integument — skin, hair, nails and glands — is the body's largest organ. It protects against injury, infection and dehydration, regulates temperature, synthesises vitamin D and contains sensory receptors. Dermatomes map skin areas to spinal nerve segments." },
};
