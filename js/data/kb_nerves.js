// Study notes for the "nerves" layer (peripheral nerves, plexuses, cranial nerves III–XII, spinal cord, sympathetic trunk).
// Same schema and matching rule as kb.js: the app lowercases a part's base name and picks the entry whose `match`
// strings contain the LONGEST substring found in the name. These entries are searched together with KB, so every
// match string is a full phrase ending in "nerve"/"branch"/etc. (never a bare "ulnar", "radial", "femoral"…) so that
// muscles such as "flexor carpi ulnaris" are not captured, and nerve-to-muscle names beat the muscle's own entry.
// Nerve fields: roots, course, motor, sensory, clinical, mnemonic, facts. Root values follow Moore's Clinically
// Oriented Anatomy where sources differ.
export const KB_NERVES = [
  // ───────────────────────────── CRANIAL NERVES ─────────────────────────────
  {
    key: "oculomotor-nerve", title: "Oculomotor nerve (CN III)", match: ["oculomotor nerve"], kind: "nerve", region: "head & neck",
    summary: "Motor nerve to most of the extra-ocular muscles and levator palpebrae, carrying parasympathetic fibres for the pupil and lens.",
    roots: "Oculomotor nucleus and Edinger–Westphal (accessory oculomotor) nucleus of the midbrain",
    course: "Emerges into the interpeduncular fossa, passes between the posterior cerebral and superior cerebellar arteries, runs in the lateral wall of the cavernous sinus and enters the orbit through the superior orbital fissure (inside the common tendinous ring), splitting into superior and inferior divisions",
    motor: "Levator palpebrae superioris, superior rectus, medial rectus, inferior rectus, inferior oblique; parasympathetic (via the ciliary ganglion) to sphincter pupillae and ciliary muscle",
    clinical: "Complete palsy: eye 'down and out' (unopposed lateral rectus and superior oblique), ptosis, fixed dilated pupil and loss of accommodation. Compression (posterior communicating artery aneurysm, uncal herniation) affects the pupil early because the parasympathetic fibres lie superficially; ischaemic (diabetic) palsy typically spares the pupil.",
    mnemonic: "LR6 SO4 R3: lateral rectus = VI, superior oblique = IV, the rest = III."
  },
  {
    key: "trochlear-nerve", title: "Trochlear nerve (CN IV)", match: ["trochlear nerve"], kind: "nerve", region: "head & neck",
    summary: "Thinnest cranial nerve and the only one to leave the dorsal surface of the brainstem; supplies only the superior oblique.",
    roots: "Trochlear nucleus of the midbrain (fibres decussate before emerging)",
    course: "Emerges just below the inferior colliculus, winds around the cerebral peduncle, runs in the lateral wall of the cavernous sinus and enters the orbit through the superior orbital fissure outside the common tendinous ring",
    motor: "Superior oblique (depresses the eye most effectively when adducted; intorts and abducts)",
    clinical: "Vertical diplopia worse on looking down and in (reading, descending stairs); the patient tilts the head away from the affected side to compensate. Its long, thin intracranial course makes it vulnerable in head injury.",
    facts: ["It has the longest intracranial course of any cranial nerve.", "Because its fibres cross, a nuclear lesion causes a contralateral superior oblique palsy."]
  },
  {
    key: "trigeminal-nerve", title: "Trigeminal nerve (CN V)", match: ["trigeminal nerve"], kind: "nerve", region: "head & neck",
    summary: "Largest cranial nerve: the main sensory nerve of the face, mouth and nasal cavity, and motor to the muscles of mastication.",
    roots: "Large sensory root and small motor root from the lateral pons; sensory nuclei (mesencephalic, principal, spinal) and motor nucleus in the pons",
    course: "Roots cross the petrous apex to the trigeminal ganglion in the trigeminal (Meckel's) cave; the ganglion gives V1 (superior orbital fissure), V2 (foramen rotundum) and V3 (foramen ovale); the motor root passes beneath the ganglion to join V3",
    motor: "Via V3: masseter, temporalis, medial and lateral pterygoids, mylohyoid, anterior belly of digastric, tensor tympani, tensor veli palatini",
    sensory: "Skin of the face and anterior scalp, conjunctiva and cornea, nasal and oral mucosa, teeth, general sensation of the anterior two-thirds of the tongue, much of the dura",
    clinical: "Trigeminal neuralgia (tic douloureux): brief, lancinating pain in the V2/V3 territory triggered by light touch. Loss of the corneal reflex (afferent V1). A motor root lesion makes the jaw deviate towards the paralysed side on opening (unopposed opposite lateral pterygoid).",
    mnemonic: "Standing Room Only: V1 superior orbital fissure, V2 foramen Rotundum, V3 foramen Ovale."
  },
  {
    key: "trigeminal-sensory-root", title: "Sensory root of trigeminal nerve", match: ["sensory root of trigeminal nerve"], kind: "nerve", region: "head & neck",
    summary: "The large (portio major) root of CN V carrying the central processes of trigeminal ganglion cells into the pons.",
    course: "From the trigeminal ganglion in Meckel's cave, across the petrous apex, into the lateral pons",
    sensory: "All general sensation from the V1, V2 and V3 territories (face, eye, nose, mouth, teeth, anterior two-thirds of tongue)",
    clinical: "Classic trigeminal neuralgia is often caused by an artery (usually the superior cerebellar) compressing this root near the pons; microvascular decompression treats it."
  },
  {
    key: "trigeminal-motor-root", title: "Motor root of trigeminal nerve", match: ["motor root of trigeminal nerve"], kind: "nerve", region: "head & neck",
    summary: "The small (portio minor) root of CN V; it bypasses the ganglion and joins the mandibular nerve.",
    course: "From the motor nucleus in the pons, passes beneath (medial to) the trigeminal ganglion and leaves through the foramen ovale within V3",
    motor: "Muscles of mastication (masseter, temporalis, medial and lateral pterygoids), mylohyoid, anterior belly of digastric, tensor tympani, tensor veli palatini (all first pharyngeal arch muscles)",
    clinical: "Lesion: weak chewing on one side, wasting of temporalis/masseter, jaw deviates towards the lesion on opening; jaw jerk tests this pathway."
  },
  {
    key: "ophthalmic-nerve", title: "Ophthalmic nerve (CN V1)", match: ["ophthalmic nerve"], kind: "nerve", region: "head & neck",
    summary: "Smallest and purely sensory division of the trigeminal nerve, supplying the eye, forehead and dorsum of the nose.",
    course: "Runs in the lateral wall of the cavernous sinus and divides into lacrimal, frontal (→ supraorbital, supratrochlear) and nasociliary nerves, which enter the orbit through the superior orbital fissure",
    sensory: "Cornea and conjunctiva, upper eyelid, forehead and scalp to the vertex, dorsum and tip of the nose, frontal and ethmoidal sinuses, anterior cranial fossa dura",
    clinical: "Afferent limb of the corneal (blink) reflex. Herpes zoster ophthalmicus: vesicles on the tip of the nose (Hutchinson's sign, nasociliary branch) predict eye involvement."
  },
  {
    key: "maxillary-nerve", title: "Maxillary nerve (CN V2)", match: ["maxillary nerve"], kind: "nerve", region: "head & neck",
    summary: "Purely sensory middle division of the trigeminal nerve, supplying the midface, upper teeth, palate and nasal cavity.",
    course: "Lateral wall of the cavernous sinus → foramen rotundum → pterygopalatine fossa (suspends the pterygopalatine ganglion) → inferior orbital fissure → infraorbital groove and canal → emerges at the infraorbital foramen as the infraorbital nerve",
    sensory: "Lower eyelid, cheek, side of the nose and upper lip; maxillary teeth and gingiva; palate; posterior nasal cavity; maxillary sinus; dura of the middle cranial fossa",
    clinical: "Orbital floor (blow-out) and zygomaticomaxillary fractures injure the infraorbital nerve → numb cheek and upper lip. Maxillary sinusitis can be felt as upper toothache because the superior alveolar nerves run in the sinus wall."
  },
  {
    key: "maxillary-meningeal-branch", title: "Meningeal branch of maxillary nerve", match: ["meningeal branch of maxillary nerve"], kind: "nerve", region: "head & neck",
    summary: "Small branch given off by V2 inside the skull, before it enters the foramen rotundum.",
    course: "Arises in the middle cranial fossa and accompanies the frontal branch of the middle meningeal artery",
    sensory: "Dura mater of the anterior part of the middle cranial fossa",
    facts: ["Dura is supplied mainly by trigeminal meningeal branches (and upper cervical nerves/vagus posteriorly), which is why intracranial pathology is often felt as headache referred to the face and forehead."]
  },
  {
    key: "mandibular-nerve", title: "Mandibular nerve (CN V3)", match: ["mandibular nerve"], kind: "nerve", region: "head & neck",
    summary: "Largest division of the trigeminal nerve and the only one with motor fibres; supplies the lower face, lower teeth, tongue and muscles of mastication.",
    course: "Leaves through the foramen ovale into the infratemporal fossa (otic ganglion on its medial side); a short trunk gives the meningeal branch (nervus spinosus) and nerve to medial pterygoid, then splits into a small, mainly motor anterior division and a large, mainly sensory posterior division",
    motor: "Masseter, temporalis, medial and lateral pterygoids, mylohyoid, anterior belly of digastric, tensor tympani, tensor veli palatini",
    sensory: "Lower lip and chin, lower teeth and gingiva, cheek (buccal nerve), temporal region and anterior auricle (auriculotemporal), general sensation of the anterior two-thirds of the tongue and floor of the mouth (lingual)",
    clinical: "Anaesthetised for lower dental work by the inferior alveolar nerve block. Lesion (e.g. tumour at the foramen ovale) → numb lower face and weak chewing, jaw deviates to the affected side."
  },
  {
    key: "mandibular-anterior-division", title: "Anterior division of mandibular nerve", match: ["anterior division of mandibular nerve"], kind: "nerve", region: "head & neck",
    summary: "Smaller division of V3: mostly motor to the muscles of mastication, with one sensory branch (buccal nerve).",
    course: "Runs deep to the lateral pterygoid in the infratemporal fossa",
    motor: "Masseteric nerve (masseter), deep temporal nerves (temporalis), nerve to lateral pterygoid",
    sensory: "Buccal nerve: skin and mucosa of the cheek, buccal gingiva of the lower molars"
  },
  {
    key: "mandibular-posterior-division", title: "Posterior division of mandibular nerve", match: ["posterior division of mandibular nerve"], kind: "nerve", region: "head & neck",
    summary: "Larger division of V3: mostly sensory (auriculotemporal, lingual, inferior alveolar), with the nerve to mylohyoid as its motor component.",
    course: "Descends medial to the lateral pterygoid; the auriculotemporal nerve splits around the middle meningeal artery",
    motor: "Nerve to mylohyoid (mylohyoid, anterior belly of digastric)",
    sensory: "Auriculotemporal (temple, anterior auricle, TMJ), lingual (anterior two-thirds of tongue, floor of mouth), inferior alveolar (lower teeth, then mental nerve to chin and lower lip)",
    facts: ["The auriculotemporal nerve carries postganglionic parasympathetic fibres (CN IX → otic ganglion) to the parotid gland; misdirected regrowth after parotid surgery causes gustatory sweating (Frey syndrome)."]
  },
  {
    key: "buccal-nerve", title: "Buccal nerve (V3)", match: ["buccal nerve"], kind: "nerve", region: "head & neck",
    summary: "Sensory branch of the anterior division of the mandibular nerve to the cheek.",
    course: "Passes between the two heads of the lateral pterygoid, then forward on the buccinator, which it pierces with sensory twigs only",
    sensory: "Skin of the cheek, buccal mucosa and the buccal gingiva of the lower molars",
    clinical: "Classic exam trap: the buccal nerve (V3) is sensory and does NOT supply buccinator; buccinator is supplied by the buccal branches of the facial nerve (CN VII). Blocked separately (long buccal block) for lower molar extraction."
  },
  {
    key: "inferior-alveolar-nerve", title: "Inferior alveolar nerve", match: ["inferior alveolar nerve"], kind: "nerve", region: "head & neck",
    summary: "Branch of the posterior division of V3 that runs through the mandible to supply the lower teeth.",
    roots: "Posterior division of the mandibular nerve (CN V3)",
    course: "Descends between the sphenomandibular ligament and the ramus, gives off the nerve to mylohyoid, enters the mandibular foramen (guarded by the lingula), runs in the mandibular canal and divides at the mental foramen into the mental and incisive nerves",
    motor: "Via the nerve to mylohyoid: mylohyoid and anterior belly of digastric",
    sensory: "All mandibular teeth and their labial gingiva (anteriorly via the mental nerve); lower lip and chin via the mental nerve",
    clinical: "Inferior alveolar nerve block (needle at the mandibular foramen) numbs the lower teeth, lower lip and chin on that side, usually with the lingual nerve. Can be damaged in third-molar extraction or mandibular fractures → numb lower lip (also a 'numb chin' sign of metastatic disease)."
  },
  {
    key: "lingual-nerve", title: "Lingual nerve", match: ["lingual nerve"], kind: "nerve", region: "head & neck",
    summary: "Branch of V3 carrying general sensation from the anterior two-thirds of the tongue, joined by the chorda tympani (taste and parasympathetic).",
    roots: "Posterior division of the mandibular nerve (CN V3); receives the chorda tympani (CN VII)",
    course: "Descends deep to the lateral pterygoid, is joined by the chorda tympani, lies directly against the mandible just below and behind the third molar, then loops under the submandibular duct (lateral → below → medial) to reach the tongue",
    sensory: "General sensation of the anterior two-thirds of the tongue, floor of the mouth and lingual gingiva of the lower teeth; carries taste (anterior two-thirds) and preganglionic parasympathetic fibres to the submandibular ganglion from the chorda tympani",
    clinical: "At risk in third-molar extraction and submandibular gland surgery → numb anterior tongue with loss of taste on that side (and reduced salivation if the chorda tympani fibres are cut)."
  },
  {
    key: "mental-nerve", title: "Mental nerve", match: ["mental nerve"], kind: "nerve", region: "head & neck",
    summary: "Terminal cutaneous branch of the inferior alveolar nerve emerging on the face at the mental foramen.",
    course: "Leaves the mandibular canal through the mental foramen, usually below the second premolar",
    sensory: "Skin of the chin, skin and mucosa of the lower lip, labial gingiva of the anterior lower teeth",
    clinical: "Mental nerve block numbs the lower lip and chin. 'Numb chin syndrome' (mental neuropathy) can be the first sign of metastatic cancer or lymphoma in the mandible."
  },
  {
    key: "nerve-to-mylohyoid", title: "Nerve to mylohyoid", match: ["nerve to mylohyoid"], kind: "nerve", region: "head & neck",
    summary: "Motor branch of the inferior alveolar nerve to the two first-arch muscles of the floor of the mouth.",
    roots: "Inferior alveolar nerve (posterior division of V3)",
    course: "Arises just before the inferior alveolar nerve enters the mandibular foramen, pierces the sphenomandibular ligament and runs forward in the mylohyoid groove on the inner surface of the ramus",
    motor: "Mylohyoid and anterior belly of digastric",
    facts: ["The posterior belly of digastric is a second-arch muscle and is supplied by the facial nerve: the two bellies have different nerves because they come from different pharyngeal arches."]
  },
  {
    key: "abducens-nerve", title: "Abducens nerve (CN VI)", match: ["abducens nerve"], kind: "nerve", region: "head & neck",
    summary: "Motor nerve to the lateral rectus, with a long intracranial course that makes it easily stretched.",
    roots: "Abducens nucleus in the pons (under the facial colliculus)",
    course: "Emerges at the pontomedullary junction, climbs the clivus, bends over the petrous apex, runs THROUGH the cavernous sinus beside the internal carotid artery and enters the orbit through the superior orbital fissure inside the common tendinous ring",
    motor: "Lateral rectus (abducts the eye)",
    clinical: "Lesion: eye turned in (convergent squint) with horizontal diplopia worse on looking to the affected side. Raised intracranial pressure can stretch it over the petrous apex (a 'false localising' sign). It is typically the first nerve affected by a cavernous sinus thrombosis or carotid aneurysm because it lies within the sinus rather than in its wall."
  },
  {
    key: "facial-nerve", title: "Facial nerve (CN VII)", match: ["facial nerve"], kind: "nerve", region: "head & neck",
    summary: "Motor nerve to the muscles of facial expression, also carrying taste from the anterior tongue and parasympathetic fibres to the lacrimal, submandibular and sublingual glands.",
    roots: "Facial motor nucleus (pons); nervus intermedius carries taste (nucleus of solitary tract) and parasympathetic fibres (superior salivatory nucleus)",
    course: "Leaves the pontomedullary junction at the cerebellopontine angle → internal acoustic meatus → facial canal in the temporal bone (geniculate ganglion; gives greater petrosal nerve, nerve to stapedius, chorda tympani) → stylomastoid foramen → posterior auricular nerve and branches to posterior digastric and stylohyoid → enters the parotid gland and divides into five terminal branches",
    motor: "Muscles of facial expression (incl. buccinator, platysma, orbicularis oculi/oris), occipitofrontalis, stapedius, stylohyoid, posterior belly of digastric",
    sensory: "Taste from the anterior two-thirds of the tongue (chorda tympani); small area of skin of the external ear",
    clinical: "Bell's palsy (LMN): whole half of the face paralysed, including the forehead; may add hyperacusis (stapedius), loss of taste and dry eye depending on level. UMN lesion (stroke): lower face only — the forehead is spared because its motor neurons receive bilateral cortical input. Parotid tumours and parotidectomy endanger the branches.",
    mnemonic: "Terminal branches: To Zanzibar By Motor Car — temporal, zygomatic, buccal, marginal mandibular, cervical."
  },
  {
    key: "glossopharyngeal-nerve", title: "Glossopharyngeal nerve (CN IX)", match: ["glossopharyngeal nerve"], kind: "nerve", region: "head & neck",
    summary: "Mainly sensory nerve of the pharynx and posterior tongue; supplies one muscle (stylopharyngeus) and the parotid gland.",
    roots: "Medulla (post-olivary sulcus): nucleus ambiguus, inferior salivatory nucleus, nucleus of the solitary tract, spinal trigeminal nucleus",
    course: "Leaves the skull through the jugular foramen, descends between the internal and external carotid arteries, curves around the posterior border of stylopharyngeus and enters the pharynx between the superior and middle constrictors near the palatine tonsil",
    motor: "Stylopharyngeus; parasympathetic to the parotid gland (tympanic nerve → lesser petrosal nerve → otic ganglion → auriculotemporal nerve)",
    sensory: "Posterior third of the tongue (general sensation and taste), oropharynx and tonsil, middle ear and pharyngotympanic tube (tympanic nerve), carotid sinus and carotid body (carotid sinus nerve)",
    clinical: "Afferent limb of the gag reflex (efferent = vagus). Lesions rarely occur alone; jugular foramen lesions affect IX, X and XI together. Can be injured in tonsillectomy (loss of taste and sensation over the posterior tongue)."
  },
  {
    key: "vagus-nerve", title: "Vagus nerve (CN X)", match: ["vagus nerve"], kind: "nerve", region: "head & neck",
    summary: "The 'wandering' nerve: motor to the pharynx, soft palate and larynx, and the main parasympathetic supply to the thoracic and abdominal viscera.",
    roots: "Medulla: nucleus ambiguus (branchial motor), dorsal motor nucleus (parasympathetic), nucleus of the solitary tract (visceral sensory and taste), spinal trigeminal nucleus",
    course: "Leaves through the jugular foramen, descends in the carotid sheath posterior to and between the internal/common carotid artery and internal jugular vein, enters the thorax (right in front of the subclavian artery, left between the common carotid and subclavian), passes behind the lung root, forms the oesophageal plexus and enters the abdomen as the anterior and posterior vagal trunks",
    motor: "Pharyngeal constrictors and soft palate muscles (except stylopharyngeus and tensor veli palatini), palatoglossus, all intrinsic laryngeal muscles (cricothyroid via the external laryngeal branch, the rest via the recurrent laryngeal nerve); parasympathetic to heart, lungs and gut as far as the left colic flexure",
    sensory: "Larynx, laryngopharynx, part of the external acoustic meatus and auricle (auricular branch), dura of the posterior cranial fossa, thoracic and abdominal viscera; taste from the epiglottis",
    clinical: "Lesion: soft palate droops on the affected side and the uvula deviates TOWARDS the healthy side; hoarseness and dysphagia. The left recurrent laryngeal nerve hooks under the aortic arch, so aortic aneurysm, left hilar lung cancer or thyroid surgery can cause hoarseness. Touching the ear canal can trigger a cough (auricular branch).",
    mnemonic: "LARP: Left vagus → Anterior vagal trunk, Right → Posterior (from gut rotation)."
  },
  {
    key: "accessory-nerve", title: "Accessory nerve (CN XI)", match: ["accessory nerve"], kind: "nerve", region: "head & neck",
    summary: "Motor nerve to sternocleidomastoid and trapezius; it crosses the posterior triangle of the neck superficially, where it is easily injured.",
    roots: "Spinal accessory nucleus in the upper cervical spinal cord (about C1–C5); the 'cranial root' is now regarded as part of the vagus",
    course: "Rootlets ascend through the foramen magnum and leave through the jugular foramen; the nerve passes deep to (and supplies) sternocleidomastoid, then crosses the posterior triangle in the investing fascia over levator scapulae to reach the deep surface of trapezius",
    motor: "Sternocleidomastoid and trapezius (with proprioceptive fibres from C2–C4)",
    clinical: "Injury in the posterior triangle (lymph-node biopsy, neck dissection, penetrating wounds) → trapezius paralysis: drooping shoulder, weak shrug, difficulty abducting the arm above the horizontal and mild winging of the scapula; SCM is spared if the lesion is distal to it. Test: shrug against resistance (trapezius) and turn the head to the opposite side against resistance (SCM)."
  },
  {
    key: "hypoglossal-nerve", title: "Hypoglossal nerve (CN XII)", match: ["hypoglossal nerve"], kind: "nerve", region: "head & neck",
    summary: "Motor nerve of the tongue.",
    roots: "Hypoglossal nucleus in the medulla; rootlets emerge between the pyramid and olive",
    course: "Leaves through the hypoglossal canal, descends between the internal carotid artery and internal jugular vein, hooks forward around the occipital artery, crosses lateral to the internal and external carotid arteries and the loop of the lingual artery, passes deep to the posterior belly of digastric and runs on the lateral surface of hyoglossus into the tongue",
    motor: "All intrinsic and extrinsic muscles of the tongue (genioglossus, hyoglossus, styloglossus) except palatoglossus (vagus); it also carries C1 fibres to geniohyoid, thyrohyoid and the superior root of the ansa cervicalis",
    clinical: "LMN lesion: on protrusion the tongue deviates TOWARDS the side of the lesion (unopposed genioglossus of the healthy side), with atrophy and fasciculation on that side. At risk in carotid endarterectomy and submandibular surgery."
  },

  // ───────────────────────────── SPINAL CORD & SPINAL NERVES ─────────────────────────────
  {
    key: "spinal-cord", title: "Spinal cord", match: ["spinal cord"], kind: "nerve", region: "back",
    summary: "Part of the CNS in the vertebral canal, linking the brain with the 31 pairs of spinal nerves.",
    course: "Continuous with the medulla at the foramen magnum; ends as the conus medullaris at about the L1–L2 disc in adults (about L3 at birth); the filum terminale anchors it to the coccyx. Cervical (C4–T1) and lumbosacral (T11–S1) enlargements supply the limbs",
    clinical: "Because the cord ends at L1–L2, lumbar puncture is done at L3–L4 or L4–L5 (Tuffier's line between the iliac crests crosses L4). Cord lesions give upper motor neuron signs below the level; hemisection gives Brown-Séquard syndrome (ipsilateral weakness and loss of proprioception/vibration, contralateral loss of pain and temperature).",
    facts: ["31 segments: 8 cervical, 12 thoracic, 5 lumbar, 5 sacral, 1 coccygeal.", "It is surrounded by pia, arachnoid and dura; denticulate ligaments of pia anchor it laterally to the dura."]
  },
  {
    key: "cauda-equina", title: "Cauda equina", match: ["cauda equina"], kind: "nerve", region: "back",
    summary: "The 'horse's tail' of lumbar, sacral and coccygeal nerve roots descending in the lumbar cistern below the conus medullaris.",
    roots: "Dorsal and ventral roots of about L2–Co1",
    course: "From the conus medullaris (L1–L2) down through the subarachnoid space of the lumbar cistern to their intervertebral and sacral foramina",
    clinical: "Cauda equina syndrome (usually a large central L4–L5 or L5–S1 disc herniation): saddle anaesthesia, urinary retention/incontinence, faecal incontinence, bilateral leg pain and weakness, reduced anal tone — a surgical emergency. Lumbar puncture is safe here because the floating roots are pushed aside by the needle.",
    facts: ["Roots of the cauda equina are lower motor neurons, so lesions produce flaccid weakness and areflexia, unlike conus/cord lesions."]
  },
  {
    key: "spinal-nerves", title: "Spinal nerves", match: ["spinal nerves"], kind: "nerve", region: "back",
    summary: "31 pairs of mixed nerves formed where the dorsal (sensory) and ventral (motor) roots join in the intervertebral foramen.",
    roots: "8 cervical, 12 thoracic, 5 lumbar, 5 sacral, 1 coccygeal",
    course: "Each nerve is very short: just outside the intervertebral foramen it divides into a posterior ramus (deep back muscles, skin of the back, facet joints) and a larger anterior ramus (limbs and anterolateral trunk); rami communicantes connect it to the sympathetic trunk",
    clinical: "C1–C7 exit ABOVE the vertebra of the same number, C8 exits below C7, and from T1 downward each nerve exits below its vertebra. A posterolateral disc herniation compresses the root that exits one level lower in the lumbar spine (L4–L5 disc → L5 root) and the exiting root in the cervical spine (C5–C6 disc → C6 root).",
    facts: ["Each spinal nerve supplies a dermatome (skin) and myotome (muscles); landmarks: C6 thumb, T4 nipple, T10 umbilicus, L1 inguinal region, S1 lateral foot/sole."]
  },
  {
    key: "cervical-nerves", title: "Cervical spinal nerves (C1–C8)", match: ["cervical nerves"], kind: "nerve", region: "head & neck",
    summary: "Eight pairs of cervical spinal nerves (but only seven cervical vertebrae); their anterior rami form the cervical (C1–C4) and brachial (C5–T1) plexuses.",
    course: "C1–C7 leave above the vertebra of the same number; C8 leaves between C7 and T1",
    motor: "Cervical plexus: infrahyoid muscles (ansa cervicalis C1–C3), diaphragm (phrenic nerve C3–C5); brachial plexus: upper limb. Posterior rami: suboccipital (C1) and deep neck muscles",
    sensory: "Cervical plexus: lesser occipital, great auricular, transverse cervical and supraclavicular nerves; posterior ramus of C2 = greater occipital nerve (back of the scalp)",
    clinical: "Cervical radiculopathy: C6 (C5–C6 disc) → pain/numbness to the thumb, weak biceps/brachioradialis reflex; C7 (C6–C7 disc, the commonest) → middle finger, weak triceps reflex. Injury above C3–C5 stops diaphragmatic breathing.",
    mnemonic: "C3, 4, 5 keeps the diaphragm alive."
  },
  {
    key: "thoracic-nerves", title: "Thoracic spinal nerves (T1–T12)", match: ["thoracic nerves"], kind: "nerve", region: "thorax",
    summary: "Twelve pairs of spinal nerves; their anterior rami are the intercostal (T1–T11) and subcostal (T12) nerves and stay segmental (no plexus) apart from T1.",
    course: "Each exits below its vertebra; T1 contributes most of its anterior ramus to the brachial plexus; T1–L2 carry the preganglionic sympathetic outflow via white rami communicantes",
    motor: "Intercostal muscles, subcostals, transversus thoracis, serratus posterior; lower six supply the anterolateral abdominal wall muscles; posterior rami supply the deep (intrinsic) back muscles",
    sensory: "Segmental bands of skin of the thoracic and abdominal wall (T4 nipple, T10 umbilicus) and of the back",
    clinical: "Shingles (herpes zoster) reactivates in a dorsal root ganglion and produces a painful vesicular rash in a single dermatomal band, most often thoracic."
  },
  {
    key: "lumbar-nerves", title: "Lumbar spinal nerves (L1–L5)", match: ["lumbar nerves"], kind: "nerve", region: "abdomen",
    summary: "Five pairs of spinal nerves whose long roots descend in the cauda equina; their anterior rami form the lumbar plexus and help form the sacral plexus.",
    course: "Each exits below its vertebra through the upper part of the intervertebral foramen; L1–L4 anterior rami form the lumbar plexus within psoas major; part of L4 joins L5 as the lumbosacral trunk to the sacral plexus",
    clinical: "Commonest radiculopathies: L5 (L4–L5 disc) → weak great-toe extension and ankle dorsiflexion, numb dorsum of foot; S1 (L5–S1 disc) → weak plantarflexion, lost ankle jerk, numb lateral foot. L4 → weak knee extension, reduced knee jerk, numb medial leg."
  },
  {
    key: "lumbar-anterior-rami", title: "Anterior rami of lumbar nerves", match: ["anterior rami of lumbar nerves"], kind: "nerve", region: "abdomen",
    summary: "The anterior (ventral) rami of L1–L5, which form the lumbar plexus and the lumbosacral trunk.",
    roots: "L1–L5 (L1 often joined by T12)",
    course: "Pass laterally into the substance of psoas major, where L1–L4 interconnect as the lumbar plexus; L4 (part) and L5 form the lumbosacral trunk, which crosses the ala of the sacrum into the pelvis to join the sacral plexus; each receives a gray ramus from the lumbar sympathetic trunk and L1–L2 send white rami to it",
    motor: "Direct branches to psoas major, psoas minor, quadratus lumborum and the lumbar intertransversarii; then the lumbar plexus branches (iliohypogastric, ilio-inguinal, genitofemoral, lateral femoral cutaneous, femoral, obturator)",
    mnemonic: "Lumbar plexus branches, top to bottom: I, I Get Laid On Fridays — iliohypogastric, ilio-inguinal, genitofemoral, lateral femoral cutaneous, obturator, femoral."
  },
  {
    key: "lumbar-posterior-rami", title: "Posterior rami of lumbar nerves", match: ["posterior rami of lumbar nerves"], kind: "nerve", region: "back",
    summary: "Posterior (dorsal) rami of L1–L5, supplying the deep back muscles, the facet joints and the skin of the low back and upper buttock.",
    course: "Pass backwards medial to the intertransverse ligaments and divide into medial and lateral branches",
    motor: "Medial branches: multifidus, interspinales, rotatores; lateral branches: erector spinae (iliocostalis, longissimus)",
    sensory: "Skin of the lower back; lateral branches of L1–L3 become the superior cluneal nerves (skin of the upper buttock); medial branches supply the zygapophysial (facet) joints",
    clinical: "Each lumbar facet joint is innervated by medial branches from two levels, so medial branch blocks and radiofrequency denervation for facet joint pain target two adjacent nerves."
  },
  {
    key: "intercostal-nerves", title: "Intercostal nerves", match: ["intercostal nerves"], kind: "nerve", region: "thorax",
    summary: "Anterior rami of T1–T11 running in the intercostal spaces; they supply the thoracic wall and (T7–T11) the anterior abdominal wall.",
    roots: "Anterior rami of T1–T11 (T12 = subcostal nerve)",
    course: "Run in the costal groove along the lower border of each rib, between the internal and innermost intercostal muscles, below the posterior intercostal vein and artery (VAN from above down); give a lateral cutaneous branch at about the midaxillary line and end as anterior cutaneous branches; T7–T11 continue as thoraco-abdominal nerves between internal oblique and transversus abdominis",
    motor: "Intercostal muscles, subcostales, transversus thoracis, serratus posterior; T7–T11 also rectus abdominis, external and internal oblique and transversus abdominis",
    sensory: "Dermatomal bands of the chest and abdominal wall, parietal pleura and peripheral parietal peritoneum; the lateral cutaneous branch of T2 is the intercostobrachial nerve (axilla and medial arm)",
    clinical: "Chest drains and needle thoracocentesis are inserted just ABOVE the upper border of a rib to avoid the neurovascular bundle in the costal groove. Intercostal nerve block is placed at the lower border of the rib. Shingles affects one dermatome.",
    mnemonic: "VAN (vein, artery, nerve) from top to bottom in the costal groove; the nerve is the least protected."
  },

  // ───────────────────────────── AUTONOMIC ─────────────────────────────
  {
    key: "sympathetic-trunk", title: "Sympathetic trunk", match: ["sympathetic trunk"], kind: "nerve", region: "thorax",
    summary: "Paired chain of paravertebral ganglia from the base of the skull to the coccyx that distributes sympathetic fibres to the whole body.",
    roots: "Preganglionic fibres from the lateral horn of T1–L2 (thoracolumbar outflow) via white rami communicantes",
    course: "Cervical part lies on the prevertebral muscles behind the carotid sheath (superior, middle and inferior cervical ganglia; the inferior often fuses with T1 as the cervicothoracic/stellate ganglion); thoracic part lies on the rib heads; lumbar part on the vertebral bodies along the medial border of psoas; sacral part in front of the sacrum; the two trunks unite at the ganglion impar in front of the coccyx",
    motor: "Gray rami communicantes to EVERY spinal nerve (sweat glands, arrector pili, blood vessels); cardiopulmonary splanchnic nerves; abdominopelvic splanchnic nerves pass through without synapsing to prevertebral ganglia",
    clinical: "Interruption of the cervical sympathetic pathway (e.g. Pancoast tumour at the lung apex, stellate ganglion block, neck trauma) causes Horner syndrome: ptosis, miosis, anhidrosis (and apparent enophthalmos) on that side. Thoracoscopic T2–T3 sympathectomy treats palmar hyperhidrosis.",
    facts: ["About 3 cervical, 11–12 thoracic, 4 lumbar and 4–5 sacral ganglia plus the unpaired ganglion impar.", "White rami exist only at T1–L2; gray rami go to all 31 spinal nerves."]
  },
  {
    key: "sympathetic-ganglia", title: "Ganglia of sympathetic trunk", match: ["ganglia of sympathetic trunk"], kind: "nerve", region: "thorax",
    summary: "The paravertebral ganglia along the sympathetic trunk, where most preganglionic sympathetic fibres synapse.",
    course: "Superior cervical (C1–C2 level, behind the internal carotid), middle cervical (C6), inferior cervical (often fused with T1 as the stellate ganglion, in front of the neck of the first rib), thoracic ganglia on the rib heads, lumbar ganglia along psoas, sacral ganglia and the ganglion impar",
    motor: "Postganglionic fibres leave by gray rami to spinal nerves, by perivascular plexuses (e.g. the internal carotid plexus from the superior cervical ganglion → dilator pupillae, superior tarsal muscle) and by cardiopulmonary nerves",
    clinical: "Stellate ganglion block (anterior to C6–C7) is used for complex regional pain syndrome of the upper limb and produces a transient Horner syndrome as a sign of success."
  },
  {
    key: "sympathetic-nerves", title: "Sympathetic nerves (visceral branches)", match: ["sympathetic nerves"], kind: "nerve", region: "abdomen",
    summary: "Visceral branches from the sympathetic trunk: cardiopulmonary splanchnic nerves to thoracic organs and abdominopelvic splanchnic nerves to the prevertebral ganglia.",
    course: "Cardiopulmonary splanchnic nerves (cervical ganglia and T1–T5) → cardiac and pulmonary plexuses. Greater (T5–T9), lesser (T10–T11) and least (T12) thoracic splanchnic nerves pierce the crura of the diaphragm to the coeliac, aorticorenal and renal ganglia; lumbar splanchnic nerves → intermesenteric and superior hypogastric plexuses",
    motor: "Vasoconstriction, inhibition of gut motility and secretion, contraction of sphincters, increased heart rate and contractility, bronchodilation",
    sensory: "Visceral pain afferents travel back with these nerves to T1–L2 spinal segments, which is why visceral pain is referred to the corresponding dermatomes (e.g. heart → left arm T1–T4, appendix → umbilicus T10)",
    facts: ["The adrenal medulla is the exception: it receives preganglionic fibres directly (it is a modified postganglionic ganglion)."]
  },

  // ───────────────────────────── BRACHIAL PLEXUS ─────────────────────────────
  {
    key: "brachial-plexus-roots", title: "Brachial plexus – roots", match: ["roots of brachial plexus", "brachial plexus"], kind: "nerve", region: "upper limb",
    summary: "The brachial plexus is the network supplying the upper limb, formed by the anterior rami of C5–T1 (the 'roots'), which unite into trunks, split into divisions and regroup into cords.",
    roots: "Anterior rami of C5, C6, C7, C8 and T1 (small contributions from C4 or T2 are common)",
    course: "Roots emerge between scalenus anterior and scalenus medius with the subclavian artery, unite into three trunks in the posterior triangle of the neck, divide behind the clavicle and form cords around the axillary artery",
    motor: "Branches arising directly from the roots: dorsal scapular nerve (C5), long thoracic nerve (C5–C7), and a C5 contribution to the phrenic nerve",
    clinical: "Root avulsion (preganglionic) is not repairable and is suggested by winging of the scapula (long thoracic), paralysed rhomboids (dorsal scapular) or Horner syndrome (T1 avulsion with its sympathetic outflow). Interscalene block anaesthetises the roots/trunks for shoulder surgery and usually blocks the phrenic nerve too.",
    mnemonic: "Randy Travis Drinks Cold Beer: Roots, Trunks, Divisions, Cords, Branches (5–3–6–3–5)."
  },
  {
    key: "brachial-plexus-superior-trunk", title: "Superior (upper) trunk of brachial plexus", match: ["superior trunk of brachial plexus"], kind: "nerve", region: "upper limb",
    summary: "Formed by the union of the C5 and C6 roots at Erb's point; injury produces Erb–Duchenne palsy.",
    roots: "C5–C6",
    course: "Forms at the lateral border of scalenus medius in the posterior triangle and divides behind the clavicle into anterior (→ lateral cord) and posterior (→ posterior cord) divisions",
    motor: "Direct branches: suprascapular nerve (supraspinatus, infraspinatus) and nerve to subclavius",
    clinical: "Erb (Erb–Duchenne) palsy: a violent increase in the angle between neck and shoulder (shoulder dystocia, falling on the shoulder from a motorcycle). Loss of deltoid, cuff, biceps, brachialis and supinator → 'waiter's tip' position: arm adducted and medially rotated, elbow extended, forearm pronated. Sensory loss over the lateral arm and forearm."
  },
  {
    key: "brachial-plexus-middle-trunk", title: "Middle trunk of brachial plexus", match: ["middle trunk of brachial plexus"], kind: "nerve", region: "upper limb",
    summary: "Continuation of the C7 root alone.",
    roots: "C7",
    course: "Lies between the superior and inferior trunks in the posterior triangle; divides behind the clavicle into an anterior division (→ lateral cord) and a posterior division (→ posterior cord)",
    motor: "No named direct branches; its fibres reach the radial, median, musculocutaneous and thoracodorsal nerves",
    clinical: "Isolated C7 lesions are uncommon; the C7 contribution mainly weakens triceps (C7 reflex) and the wrist/finger extensors."
  },
  {
    key: "brachial-plexus-inferior-trunk", title: "Inferior (lower) trunk of brachial plexus", match: ["inferior trunk of brachial plexus"], kind: "nerve", region: "upper limb",
    summary: "Formed by C8 and T1; it lies on the first rib behind the subclavian artery, and its injury produces Klumpke palsy.",
    roots: "C8–T1",
    course: "Runs on the upper surface of the first rib posterior to the subclavian artery; divides behind the clavicle into an anterior division (→ medial cord) and a posterior division (→ posterior cord)",
    motor: "No direct branches; carries the fibres for the intrinsic hand muscles and the long finger flexors (via ulnar and median nerves)",
    clinical: "Klumpke palsy: excessive upward pull of the limb (grabbing a branch in a fall, breech delivery with the arm above the head). Paralysis of all intrinsic hand muscles → claw hand affecting all digits, sensory loss on the medial forearm and hand, and Horner syndrome if T1 is avulsed. Also compressed by a cervical rib (thoracic outlet syndrome) or a Pancoast tumour."
  },
  {
    key: "brachial-plexus-anterior-divisions", title: "Anterior divisions of brachial plexus",
    match: ["anterior division of superior trunk of brachial plexus", "anterior division of middle trunk of brachial plexus", "anterior division of inferior trunk of brachial plexus"],
    kind: "nerve", region: "upper limb",
    summary: "The three anterior divisions carry fibres for the flexor (anterior) compartments of the limb.",
    course: "Formed behind the clavicle; the anterior divisions of the superior and middle trunks join as the lateral cord (C5–C7); the anterior division of the inferior trunk continues as the medial cord (C8–T1)",
    motor: "Via lateral and medial cords: musculocutaneous, median and ulnar nerves, medial and lateral pectoral nerves → flexors of the arm, forearm and hand, and pectoral muscles",
    facts: ["Divisions are the only part of the plexus with no branches.", "Anterior = flexor compartments, posterior = extensor compartments: the same pattern as the femoral (posterior divisions) vs obturator (anterior divisions) in the lumbar plexus."]
  },
  {
    key: "brachial-plexus-posterior-divisions", title: "Posterior divisions of brachial plexus",
    match: ["posterior division of superior trunk of brachial plexus", "posterior division of middle trunk of brachial plexus", "posterior division of inferior trunk of brachial plexus"],
    kind: "nerve", region: "upper limb",
    summary: "The three posterior divisions (one from each trunk) unite to form the posterior cord, which supplies the extensor compartments.",
    roots: "C5–T1 (all three trunks)",
    course: "Formed behind the clavicle; all three join behind the axillary artery as the posterior cord",
    motor: "Via the posterior cord: axillary and radial nerves, subscapular and thoracodorsal nerves → deltoid, teres minor, subscapularis, teres major, latissimus dorsi and all extensors of the arm and forearm"
  },
  {
    key: "brachial-plexus-posterior-cord", title: "Posterior cord of brachial plexus", match: ["posterior cord of brachial plexus"], kind: "nerve", region: "upper limb",
    summary: "Formed by all three posterior divisions; lies behind the second part of the axillary artery and gives the nerves to the back of the shoulder and limb.",
    roots: "C5–T1",
    course: "Lies posterior to the axillary artery deep to pectoralis minor; ends by dividing into the axillary and radial nerves",
    motor: "Upper subscapular (subscapularis), thoracodorsal (latissimus dorsi), lower subscapular (subscapularis, teres major), axillary (deltoid, teres minor) and radial (all extensors of arm and forearm, brachioradialis, supinator)",
    sensory: "Via axillary and radial nerves: lateral and posterior arm, posterior forearm, lateral dorsum of the hand",
    clinical: "Compressed by a crutch pressing into the axilla ('crutch palsy') together with the radial nerve → wrist drop plus triceps weakness.",
    mnemonic: "Posterior cord branches: STAR — Subscapular (upper and lower), Thoracodorsal, Axillary, Radial."
  },

  // Branches of roots / trunks
  {
    key: "dorsal-scapular-nerve", title: "Dorsal scapular nerve", match: ["dorsal scapular nerve"], kind: "nerve", region: "upper limb",
    summary: "Branch of the C5 root to the rhomboids and levator scapulae.",
    roots: "C5 root (often with C4)",
    course: "Pierces scalenus medius and descends deep to levator scapulae and the rhomboids along the medial border of the scapula with the dorsal scapular artery",
    motor: "Rhomboid major, rhomboid minor; levator scapulae (with C3–C4)",
    clinical: "Isolated injury is rare: weak scapular retraction with mild lateral displacement of the medial border. Rhomboid paralysis after a plexus injury implies a very proximal (root-level) lesion."
  },
  {
    key: "long-thoracic-nerve", title: "Long thoracic nerve", match: ["long thoracic nerve"], kind: "nerve", region: "upper limb",
    summary: "Root-level branch (C5–C7) that runs on the outer surface of serratus anterior; injury gives a winged scapula.",
    roots: "C5–C7 roots",
    course: "C5 and C6 pierce scalenus medius, join C7 and descend behind the plexus into the axilla, running superficially on the external surface of serratus anterior along the medial axillary wall (roughly the midaxillary line)",
    motor: "Serratus anterior",
    clinical: "Injury (axillary node dissection/mastectomy, stab wounds, carrying heavy loads on the shoulder) → winged scapula: the medial border and inferior angle lift off the chest wall when pushing against a wall, and the arm cannot be abducted above the horizontal because the scapula cannot be rotated upward.",
    mnemonic: "C5, 6, 7 raise your wings to heaven."
  },
  {
    key: "suprascapular-nerve", title: "Suprascapular nerve", match: ["suprascapular nerve"], kind: "nerve", region: "upper limb",
    summary: "Branch of the superior trunk to supraspinatus and infraspinatus.",
    roots: "Superior trunk, C5–C6 (C4)",
    course: "Runs laterally across the posterior triangle above the plexus, passes through the suprascapular notch BELOW the superior transverse scapular ligament (the suprascapular artery passes above it), supplies supraspinatus, then winds around the spinoglenoid notch into the infraspinous fossa",
    motor: "Supraspinatus and infraspinatus",
    sensory: "Glenohumeral and acromioclavicular joints (no cutaneous area)",
    clinical: "Entrapment at the suprascapular notch weakens both muscles (weak initiation of abduction and lateral rotation); compression at the spinoglenoid notch (e.g. a paralabral ganglion cyst) wastes infraspinatus only.",
    mnemonic: "Army (artery) over the bridge, Navy (nerve) under the bridge."
  },
  {
    key: "subclavian-nerve", title: "Nerve to subclavius (subclavian nerve)", match: ["subclavian nerve"], kind: "nerve", region: "upper limb",
    summary: "Small branch of the superior trunk to the subclavius muscle.",
    roots: "Superior trunk, C5–C6 (C4)",
    course: "Descends in front of the plexus and the subclavian artery, behind the clavicle",
    motor: "Subclavius",
    facts: ["It often gives an accessory phrenic nerve, which joins the phrenic nerve in the thorax and may keep part of the diaphragm working after phrenic injury."]
  },

  // Cord branches
  {
    key: "lateral-pectoral-nerve", title: "Lateral pectoral nerve", match: ["lateral pectoral nerve"], kind: "nerve", region: "upper limb",
    summary: "Branch of the lateral cord that pierces the clavipectoral fascia to supply pectoralis major.",
    roots: "Lateral cord, C5–C7",
    course: "Pierces the clavipectoral fascia with the thoraco-acromial artery to reach the deep surface of pectoralis major; sends a loop to the medial pectoral nerve in front of the axillary artery",
    motor: "Pectoralis major (mainly the clavicular and upper sternocostal parts); pectoralis minor through the loop to the medial pectoral nerve",
    facts: ["Named for the cord it comes from, not its position: the lateral pectoral nerve lies MEDIAL to the medial pectoral nerve."]
  },
  {
    key: "medial-pectoral-nerve", title: "Medial pectoral nerve", match: ["medial pectoral nerve"], kind: "nerve", region: "upper limb",
    summary: "Branch of the medial cord that pierces pectoralis minor to reach pectoralis major.",
    roots: "Medial cord, C8–T1",
    course: "Passes forward between the axillary artery and vein, pierces and supplies pectoralis minor, then enters the deep surface of pectoralis major",
    motor: "Pectoralis minor and the sternocostal part of pectoralis major",
    clinical: "Can be damaged during axillary node dissection or when pectoralis minor is divided, causing partial atrophy of pectoralis major."
  },
  {
    key: "upper-subscapular-nerve", title: "Upper (superior) subscapular nerve", match: ["superior subscapular nerve"], kind: "nerve", region: "upper limb",
    summary: "Branch of the posterior cord to the upper part of subscapularis.",
    roots: "Posterior cord, C5–C6",
    course: "Short nerve passing posteriorly to enter the anterior surface of subscapularis",
    motor: "Superior part of subscapularis"
  },
  {
    key: "lower-subscapular-nerve", title: "Lower (inferior) subscapular nerve", match: ["inferior subscapular nerve"], kind: "nerve", region: "upper limb",
    summary: "Branch of the posterior cord to the lower part of subscapularis and teres major.",
    roots: "Posterior cord, C5–C6",
    course: "Descends along the subscapularis lateral to the subscapular vessels to reach teres major",
    motor: "Inferior part of subscapularis and teres major"
  },
  {
    key: "thoracodorsal-nerve", title: "Thoracodorsal nerve", match: ["thoracodorsal nerve"], kind: "nerve", region: "upper limb",
    summary: "Branch of the posterior cord to latissimus dorsi.",
    roots: "Posterior cord, C6–C8",
    course: "Arises between the upper and lower subscapular nerves and runs inferolaterally along the posterior axillary wall with the thoracodorsal artery to the deep surface of latissimus dorsi",
    motor: "Latissimus dorsi",
    clinical: "At risk in axillary lymph-node dissection (weak extension and medial rotation of the arm, e.g. climbing, crutch walking). Preserved with its artery when latissimus dorsi is used as a pedicled flap for breast reconstruction."
  },
  {
    key: "medial-brachial-cutaneous-nerve", title: "Medial cutaneous nerve of arm", match: ["medial brachial cutaneous nerve"], kind: "nerve", region: "upper limb",
    summary: "Smallest branch of the medial cord, supplying skin of the medial arm.",
    roots: "Medial cord, C8–T1",
    course: "Runs along the medial side of the axillary and brachial veins and pierces the deep fascia in the mid-arm; communicates with the intercostobrachial nerve (T2)",
    sensory: "Skin of the medial side of the arm down to the medial epicondyle",
    facts: ["Together with the intercostobrachial nerve it explains why cardiac pain (T1–T2) can be referred to the medial arm."]
  },
  {
    key: "medial-antebrachial-cutaneous-nerve", title: "Medial cutaneous nerve of forearm", match: ["medial antebrachial cutaneous nerve"], kind: "nerve", region: "upper limb",
    summary: "Branch of the medial cord supplying skin over the medial forearm.",
    roots: "Medial cord, C8–T1",
    course: "Runs between the axillary artery and vein, then medial to the brachial artery; pierces the deep fascia with the basilic vein in the mid-arm and divides into anterior and posterior (ulnar) branches",
    sensory: "Skin of the anterior and medial forearm to the wrist",
    clinical: "Lies next to the basilic and median cubital veins, so it can be injured by venepuncture in the cubital fossa or during cubital tunnel surgery (painful neuroma). Sensory loss here helps localise a lesion to the medial cord/lower trunk rather than the ulnar nerve."
  },
  {
    key: "musculocutaneous-nerve", title: "Musculocutaneous nerve", match: ["musculocutaneous nerve"], kind: "nerve", region: "upper limb",
    summary: "Terminal branch of the lateral cord supplying the anterior (flexor) compartment of the arm.",
    roots: "Lateral cord, C5–C7",
    course: "Pierces coracobrachialis, descends between biceps brachii and brachialis, and emerges lateral to the biceps tendon above the elbow as the lateral cutaneous nerve of the forearm",
    motor: "Coracobrachialis, biceps brachii, brachialis (most of it)",
    sensory: "Lateral forearm (via the lateral antebrachial cutaneous nerve)",
    clinical: "Isolated injury is uncommon (protected in the axilla). It weakens elbow flexion and supination (brachioradialis and supinator still work), abolishes the biceps reflex (C5–C6) and causes numbness of the lateral forearm."
  },
  {
    key: "lateral-antebrachial-cutaneous-nerve", title: "Lateral cutaneous nerve of forearm", match: ["lateral antebrachial cutaneous nerve"], kind: "nerve", region: "upper limb",
    summary: "The cutaneous continuation of the musculocutaneous nerve.",
    roots: "Musculocutaneous nerve, C6–C7",
    course: "Emerges lateral to the biceps tendon, deep to the cephalic vein in the cubital fossa, and descends along the radial side of the forearm",
    sensory: "Skin of the lateral (radial) forearm as far as the base of the thenar eminence",
    clinical: "Can be injured by cephalic vein cannulation or compressed by the biceps aponeurosis/tendon, causing lateral forearm paraesthesia."
  },

  // Axillary
  {
    key: "axillary-nerve", title: "Axillary nerve", match: ["axillary nerve"], kind: "nerve", region: "upper limb",
    summary: "Terminal branch of the posterior cord that winds round the surgical neck of the humerus to supply deltoid and teres minor.",
    roots: "Posterior cord, C5–C6",
    course: "Passes posteriorly through the quadrangular space (bounded by teres minor, teres major, long head of triceps and the humerus) with the posterior circumflex humeral artery, then winds around the surgical neck of the humerus deep to deltoid",
    motor: "Deltoid and teres minor",
    sensory: "Skin over the lower deltoid ('regimental badge' area) via the superior lateral cutaneous nerve of the arm; shoulder joint",
    clinical: "Injured by fracture of the surgical neck and anterior dislocation of the shoulder (also deltoid IM injections placed too low): weak abduction beyond the first 15° (supraspinatus still starts it), flattened shoulder contour from deltoid atrophy and numbness over the regimental badge area — test this patch after reducing a dislocation."
  },
  {
    key: "superior-lateral-brachial-cutaneous-nerve", title: "Superior lateral cutaneous nerve of arm", match: ["superior lateral brachial cutaneous nerve"], kind: "nerve", region: "upper limb",
    summary: "Cutaneous terminal branch of the axillary nerve.",
    roots: "Axillary nerve, C5–C6",
    course: "Winds around the posterior border of deltoid to reach the skin",
    sensory: "Skin over the lower half of deltoid (the 'regimental badge' area)",
    clinical: "Sensory testing of this patch is the quick bedside check of axillary nerve function after shoulder dislocation or surgical-neck fracture."
  },

  // Radial
  {
    key: "radial-nerve", title: "Radial nerve", match: ["radial nerve"], kind: "nerve", region: "upper limb",
    summary: "Largest branch of the brachial plexus and the nerve of the extensors of the arm and forearm.",
    roots: "Posterior cord, C5–T1",
    course: "Leaves the axilla behind the axillary artery, passes through the triangular interval (below teres major, between long head of triceps and humerus) with the profunda brachii artery, spirals in the radial groove of the humerus between the lateral and medial heads of triceps, pierces the lateral intermuscular septum and enters the cubital fossa between brachialis and brachioradialis, dividing in front of the lateral epicondyle into superficial (sensory) and deep (motor) branches",
    motor: "Triceps brachii, anconeus, brachioradialis, extensor carpi radialis longus; via the deep branch/posterior interosseous nerve: ECRB, supinator and all the remaining forearm extensors (extensor digitorum, EDM, ECU, APL, EPB, EPL, extensor indicis)",
    sensory: "Posterior arm (posterior cutaneous nerve of arm), lower lateral arm (inferior lateral cutaneous nerve of arm), posterior forearm (posterior cutaneous nerve of forearm), lateral dorsum of the hand and proximal dorsum of the lateral 3½ digits (superficial branch)",
    clinical: "Midshaft humeral fracture or 'Saturday night palsy' (arm draped over a chair) injures it in the radial groove → wrist drop (cannot extend wrist and MCP joints), weak supination with elbow extended, numbness over the dorsal first web space; triceps is usually spared because its branches arise higher. Axillary compression (crutch palsy) also paralyses triceps.",
    mnemonic: "BEST: the radial nerve supplies Brachioradialis, Extensors, Supinator, Triceps."
  },
  {
    key: "radial-deep-branch", title: "Deep branch of radial nerve / posterior interosseous nerve", match: ["deep branch of radial nerve", "posterior interosseous nerve"], kind: "nerve", region: "upper limb",
    summary: "Motor branch of the radial nerve that pierces supinator and continues as the posterior interosseous nerve to the forearm extensors.",
    roots: "Radial nerve, C7–C8",
    course: "Arises in front of the lateral epicondyle, winds around the neck of the radius within supinator (entering under the arcade of Frohse), and emerges in the posterior compartment as the posterior interosseous nerve, which runs on the interosseous membrane to the wrist",
    motor: "ECRB and supinator (deep branch); then extensor digitorum, extensor digiti minimi, extensor carpi ulnaris, abductor pollicis longus, extensor pollicis brevis, extensor pollicis longus and extensor indicis (posterior interosseous nerve)",
    sensory: "No skin; articular branches to the wrist",
    clinical: "Posterior interosseous nerve palsy (radial head fracture/dislocation, Monteggia injury, compression at the arcade of Frohse): 'finger drop' — cannot extend the MCP joints of the fingers and thumb — but NO wrist drop (ECRL spared, so the wrist extends with radial deviation) and NO sensory loss."
  },
  {
    key: "radial-superficial-branch", title: "Superficial branch of radial nerve", match: ["superficial branch of radial nerve", "dorsal digital branches of radial nerve"], kind: "nerve", region: "upper limb",
    summary: "Purely sensory terminal branch of the radial nerve to the lateral dorsum of the hand.",
    roots: "Radial nerve",
    course: "Descends under cover of brachioradialis, lateral to the radial artery, emerges from under the brachioradialis tendon in the distal forearm, crosses the roof of the anatomical snuffbox and divides into dorsal digital nerves",
    sensory: "Lateral two-thirds of the dorsum of the hand and the proximal dorsal skin of the lateral 3½ digits (the skin over the distal phalanges/nail beds is supplied by the median nerve); autonomous zone = dorsal first web space",
    clinical: "Easily compressed against the radius by tight watch straps or handcuffs (Wartenberg syndrome / cheiralgia paraesthetica) and at risk in de Quervain release and cephalic vein cannulation at the wrist ('intern's vein') → numbness/pain over the dorsal first web space."
  },
  {
    key: "inferior-lateral-brachial-cutaneous-nerve", title: "Inferior lateral cutaneous nerve of arm", match: ["inferior lateral brachial cutaneous nerve"], kind: "nerve", region: "upper limb",
    summary: "Cutaneous branch of the radial nerve given off in the radial groove.",
    roots: "Radial nerve",
    course: "Pierces the lateral head of triceps below the deltoid insertion",
    sensory: "Skin of the lower lateral arm, below the territory of the axillary nerve"
  },
  {
    key: "posterior-antebrachial-cutaneous-nerve", title: "Posterior cutaneous nerve of forearm", match: ["posterior antebrachial cutaneous nerve"], kind: "nerve", region: "upper limb",
    summary: "Cutaneous branch of the radial nerve arising in the radial groove.",
    roots: "Radial nerve",
    course: "Pierces the lateral head of triceps and descends behind the lateral epicondyle along the back of the forearm",
    sensory: "Skin of the posterior forearm down to the wrist",
    facts: ["Because it arises in the radial groove, a midshaft humeral fracture may or may not affect it depending on exactly where the nerve is damaged."]
  },

  // Median
  {
    key: "median-nerve", title: "Median nerve", match: ["median nerve"], kind: "nerve", region: "upper limb",
    summary: "Main nerve of the anterior forearm and the thenar muscles; it passes through the carpal tunnel.",
    roots: "Lateral root from the lateral cord (C5/C6–C7) and medial root from the medial cord (C8–T1)",
    course: "Formed in front of the axillary artery; descends lateral to the brachial artery, crosses (usually in front of) it at mid-arm to lie medial to it in the cubital fossa; gives NO branches in the arm; passes between the heads of pronator teres, runs adherent to the deep surface of flexor digitorum superficialis, becomes superficial just lateral to the FDS tendons above the wrist, and enters the hand through the carpal tunnel deep to the flexor retinaculum",
    motor: "Forearm: pronator teres, flexor carpi radialis, palmaris longus, FDS; via the anterior interosseous nerve: FPL, lateral half of FDP (index and middle), pronator quadratus. Hand: lateral two lumbricals, opponens pollicis, abductor pollicis brevis, flexor pollicis brevis (superficial head) — via the recurrent (thenar) branch",
    sensory: "Lateral palm (palmar cutaneous branch), palmar surface of the lateral 3½ digits and the dorsal skin over their distal phalanges (nail beds)",
    clinical: "Carpal tunnel syndrome (compression at the wrist): paraesthesia of the lateral 3½ digits, often at night, thenar wasting and weak thumb opposition; the palm is SPARED because the palmar cutaneous branch passes superficial to the retinaculum. Proximal lesion (supracondylar fracture): 'hand of benediction' when trying to make a fist (index and middle fingers stay extended), loss of forearm pronation and thumb flexion. Long-standing thenar wasting with an adducted, extended thumb = 'ape hand'.",
    mnemonic: "LOAF: Lateral two lumbricals, Opponens pollicis, Abductor pollicis brevis, Flexor pollicis brevis."
  },
  {
    key: "anterior-interosseous-nerve", title: "Anterior interosseous nerve", match: ["anterior interosseous nerve"], kind: "nerve", region: "upper limb",
    summary: "Purely motor branch of the median nerve to the deep flexors of the forearm.",
    roots: "Median nerve",
    course: "Arises from the median nerve in the distal cubital fossa (as it passes between the heads of pronator teres) and descends on the interosseous membrane with the anterior interosseous artery, between FPL and FDP, to end deep to pronator quadratus",
    motor: "Flexor pollicis longus, lateral half of flexor digitorum profundus (index and middle fingers), pronator quadratus",
    sensory: "No skin (articular branches to the wrist)",
    clinical: "Anterior interosseous nerve syndrome: cannot make an 'OK' sign — the thumb IP and index DIP joints do not flex, so the patient pinches with flat pads (pulp-to-pulp) instead of fingertips; no sensory loss."
  },
  {
    key: "median-palmar-branch", title: "Palmar branch of median nerve", match: ["palmar branch of median nerve"], kind: "nerve", region: "upper limb",
    summary: "Palmar cutaneous branch of the median nerve that passes OVER the flexor retinaculum.",
    roots: "Median nerve",
    course: "Arises in the distal forearm just proximal to the flexor retinaculum and passes superficial to it (not through the carpal tunnel)",
    sensory: "Skin of the central and lateral palm (over the thenar eminence)",
    clinical: "Because it does not pass through the carpal tunnel, palmar sensation is spared in carpal tunnel syndrome — a classic exam discriminator. It can be cut by a careless carpal tunnel release incision."
  },
  {
    key: "median-palmar-digital", title: "Palmar digital branches of median nerve", match: ["palmar digital branches of median nerve"], kind: "nerve", region: "upper limb",
    summary: "Common and proper palmar digital nerves: the terminal sensory branches of the median nerve in the hand.",
    roots: "Median nerve, after it leaves the carpal tunnel",
    course: "Common palmar digital nerves run to the first three web spaces deep to the superficial palmar arch and divide into proper palmar digital nerves along the sides of the digits, in front of the digital arteries",
    motor: "First and second lumbricals (via the digital branches to the index and middle fingers)",
    sensory: "Palmar surface of the thumb, index, middle and lateral half of the ring finger, plus the dorsal skin over their distal phalanges (nail beds)",
    clinical: "Digital nerve block (ring block) injects around these nerves at the base of the finger. Divided in palmar lacerations → numb fingertip."
  },
  {
    key: "median-ulnar-communicating-branch", title: "Communicating branch of median nerve with ulnar nerve", match: ["communicating branch of median nerve with ulnar nerve"], kind: "nerve", region: "upper limb",
    summary: "Connection in the palm between the median and ulnar digital nerves.",
    course: "Usually joins the common palmar digital nerve of the third web space (median) with that of the fourth web space (ulnar), deep to the superficial palmar arch",
    sensory: "Shares sensory supply of the ring finger and adjacent web",
    facts: ["Median–ulnar communications (in the palm, and the separate Martin-Gruber anastomosis in the forearm) explain why sensory and motor deficits after nerve injury do not always match the textbook map."]
  },

  // Ulnar
  {
    key: "ulnar-nerve", title: "Ulnar nerve", match: ["ulnar nerve"], kind: "nerve", region: "upper limb",
    summary: "Terminal branch of the medial cord and the main nerve of the intrinsic hand muscles; it passes behind the medial epicondyle ('funny bone').",
    roots: "Medial cord, C8–T1 (often C7)",
    course: "Descends medial to the brachial artery, pierces the medial intermuscular septum with the superior ulnar collateral artery, passes behind the medial epicondyle in the cubital tunnel (no branches in the arm), enters the forearm between the two heads of flexor carpi ulnaris, runs under FCU on FDP with the ulnar artery lateral to it, and enters the hand superficial to the flexor retinaculum through the ulnar (Guyon's) canal between the pisiform and the hook of hamate",
    motor: "Forearm: flexor carpi ulnaris and the medial half of FDP (ring and little fingers). Hand: hypothenar muscles, medial two lumbricals, all palmar and dorsal interossei, adductor pollicis, deep head of flexor pollicis brevis, palmaris brevis",
    sensory: "Medial palm and dorsum of the hand and the medial 1½ digits (front and back)",
    clinical: "Elbow (cubital tunnel, medial epicondyle fracture) or wrist (Guyon's canal) injury → ulnar claw hand: ring and little fingers hyperextended at the MCP and flexed at the IP joints, interosseous wasting, weak finger abduction/adduction, positive Froment's sign (thumb IP flexes because FPL substitutes for a weak adductor pollicis). 'Ulnar paradox': a proximal lesion causes LESS clawing because the medial FDP is also paralysed.",
    mnemonic: "Muscles of the hand: 'all of the hand is ulnar except LOAF' (median)."
  },
  {
    key: "ulnar-deep-branch", title: "Deep branch of ulnar nerve", match: ["deep branch of ulnar nerve"], kind: "nerve", region: "upper limb",
    summary: "Purely motor branch of the ulnar nerve to most of the intrinsic hand muscles.",
    roots: "Ulnar nerve (in Guyon's canal), C8–T1",
    course: "Passes between abductor and flexor digiti minimi, pierces opponens digiti minimi, curves around the hook of hamate and runs laterally with the deep palmar arch across the interossei to end in adductor pollicis",
    motor: "Abductor digiti minimi, flexor digiti minimi brevis, opponens digiti minimi, third and fourth lumbricals, all palmar and dorsal interossei, adductor pollicis, deep head of flexor pollicis brevis",
    clinical: "Isolated lesion (hook of hamate fracture, cyclist's palsy from handlebar pressure, ganglion in Guyon's canal) → clawing, interosseous wasting and Froment's sign with NO sensory loss. If the lesion is distal to the hypothenar branches, the hypothenar muscles are spared."
  },
  {
    key: "ulnar-superficial-branch", title: "Superficial branch of ulnar nerve", match: ["superficial branch of ulnar nerve"], kind: "nerve", region: "upper limb",
    summary: "Mainly sensory terminal branch of the ulnar nerve in the palm.",
    roots: "Ulnar nerve (in Guyon's canal)",
    course: "Runs distally deep to palmaris brevis and divides into a proper palmar digital nerve to the medial side of the little finger and a common palmar digital nerve to the fourth web space",
    motor: "Palmaris brevis",
    sensory: "Palmar skin of the little finger and the medial half of the ring finger (with the dorsal nail beds)"
  },
  {
    key: "ulnar-dorsal-branch", title: "Dorsal branch of ulnar nerve", match: ["dorsal branch of ulnar nerve", "dorsal digital branches of ulnar nerve"], kind: "nerve", region: "upper limb",
    summary: "Cutaneous branch that leaves the ulnar nerve in the distal forearm to supply the medial dorsum of the hand.",
    roots: "Ulnar nerve",
    course: "Arises about 5 cm above the wrist, passes backwards deep to the FCU tendon and divides into dorsal digital nerves",
    sensory: "Medial third of the dorsum of the hand and the dorsum of the little finger and medial half of the ring finger (proximal parts)",
    clinical: "Localising clue: a lesion in Guyon's canal SPARES the dorsal (and palmar) branches, so sensation on the medial dorsum of the hand is normal; a cubital tunnel lesion affects it."
  },
  {
    key: "ulnar-palmar-branch", title: "Palmar branch of ulnar nerve", match: ["palmar branch of ulnar nerve"], kind: "nerve", region: "upper limb",
    summary: "Palmar cutaneous branch of the ulnar nerve.",
    roots: "Ulnar nerve",
    course: "Arises in the mid-forearm and descends on the ulnar artery, passing superficial to the flexor retinaculum (outside Guyon's canal)",
    sensory: "Skin of the medial palm (hypothenar eminence)",
    clinical: "Spared in Guyon's canal lesions, like the dorsal branch."
  },
  {
    key: "ulnar-palmar-digital", title: "Palmar digital branches of ulnar nerve", match: ["palmar digital branches of ulnar nerve"], kind: "nerve", region: "upper limb",
    summary: "Common and proper palmar digital nerves from the superficial branch of the ulnar nerve.",
    roots: "Superficial branch of the ulnar nerve",
    course: "A common palmar digital nerve to the fourth web space divides into proper digital nerves for the adjacent sides of the ring and little fingers; a separate proper digital nerve supplies the medial side of the little finger",
    sensory: "Palmar skin of the medial 1½ digits and the dorsal skin over their distal phalanges"
  },

  // ───────────────────────────── LUMBAR PLEXUS ─────────────────────────────
  {
    key: "iliohypogastric-nerve", title: "Iliohypogastric nerve", match: ["iliohypogastric nerve"], kind: "nerve", region: "abdomen",
    summary: "First branch of the lumbar plexus, supplying the lower abdominal wall and the skin above the pubis and over the iliac crest.",
    roots: "L1 (often with T12)",
    course: "Emerges from the lateral border of psoas major, crosses anterior to quadratus lumborum behind the kidney, pierces transversus abdominis near the iliac crest and runs between transversus abdominis and internal oblique; its anterior cutaneous branch pierces the external oblique aponeurosis above the superficial inguinal ring",
    motor: "Internal oblique and transversus abdominis (lowest fibres)",
    sensory: "Skin over the iliac crest/upper lateral buttock (lateral cutaneous branch) and the suprapubic region (anterior cutaneous branch)",
    clinical: "Can be injured by lower abdominal incisions (e.g. open appendicectomy, Pfannenstiel) or trapped by sutures in hernia repair → suprapubic pain or numbness."
  },
  {
    key: "ilioinguinal-nerve", title: "Ilio-inguinal nerve", match: ["ilio-inguinal nerve"], kind: "nerve", region: "abdomen",
    summary: "Branch of L1 that traverses the inguinal canal to supply the skin of the groin and anterior genitalia.",
    roots: "L1",
    course: "Emerges from the lateral border of psoas below the iliohypogastric nerve, crosses quadratus lumborum and iliacus, pierces transversus abdominis and internal oblique, then runs through the inguinal canal (in front of the spermatic cord, entering it from the side — NOT through the deep ring) and leaves through the superficial inguinal ring",
    motor: "Lowest fibres of internal oblique and transversus abdominis",
    sensory: "Skin of the superomedial thigh, root of the penis and anterior scrotum (mons pubis and labium majus in females)",
    clinical: "Most commonly entrapped or divided nerve in inguinal hernia repair → chronic groin pain or numbness of the scrotum/labium and medial thigh. Injury at appendicectomy weakens the inguinal 'falx' fibres and may predispose to a direct inguinal hernia. Afferent limb of the cremasteric reflex."
  },
  {
    key: "genitofemoral-nerve", title: "Genitofemoral nerve", match: ["genitofemoral nerve"], kind: "nerve", region: "abdomen",
    summary: "Branch of L1–L2 that pierces psoas major and divides into genital and femoral branches.",
    roots: "L1–L2",
    course: "Pierces the anterior surface of psoas major and descends on it, behind the ureter, dividing above the inguinal ligament into genital and femoral branches",
    motor: "Cremaster (genital branch)",
    sensory: "Anterior scrotum/labium majus (genital branch); skin over the upper femoral triangle (femoral branch)",
    clinical: "The cremasteric reflex — stroking the superomedial thigh makes the testis rise — uses the genital branch as its efferent limb (afferent mainly ilio-inguinal, with the femoral branch). Absent reflex is a sign of testicular torsion.",
    facts: ["It lies on the anterior surface of psoas, so a psoas abscess or retroperitoneal mass can irritate it and cause groin pain."]
  },
  {
    key: "genitofemoral-genital-branch", title: "Genital branch of genitofemoral nerve", match: ["genital branch of genitofemoral nerve"], kind: "nerve", region: "abdomen",
    summary: "Branch of the genitofemoral nerve that enters the inguinal canal through the deep ring.",
    roots: "L1–L2",
    course: "Passes through the deep inguinal ring and runs within the spermatic cord (with the round ligament in females) through the inguinal canal",
    motor: "Cremaster",
    sensory: "Skin of the anterior scrotum or mons pubis/labium majus",
    clinical: "Efferent limb of the cremasteric reflex. Can be injured or entrapped in inguinal hernia repair (genitofemoral neuralgia)."
  },
  {
    key: "genitofemoral-femoral-branch", title: "Femoral branch of genitofemoral nerve", match: ["femoral branch of genitofemoral nerve"], kind: "nerve", region: "lower limb",
    summary: "Cutaneous branch of the genitofemoral nerve to the skin just below the inguinal ligament.",
    roots: "L1–L2",
    course: "Passes deep to the inguinal ligament lateral to the external iliac/femoral artery, within the femoral sheath, and pierces the anterior layer of the sheath and the fascia lata",
    sensory: "Skin over the upper part of the femoral triangle",
    facts: ["Not to be confused with the femoral nerve itself: it runs inside the femoral sheath, whereas the femoral nerve lies lateral to and outside the sheath."]
  },
  {
    key: "lateral-femoral-cutaneous-nerve", title: "Lateral femoral cutaneous nerve", match: ["lateral femoral cutaneous nerve"], kind: "nerve", region: "lower limb",
    summary: "Purely sensory branch of the lumbar plexus to the anterolateral thigh; compression causes meralgia paraesthetica.",
    roots: "L2–L3 (posterior divisions)",
    course: "Emerges from the lateral border of psoas, crosses iliacus obliquely towards the ASIS and passes deep to (or through) the inguinal ligament about 1–2 cm medial to the ASIS into the thigh",
    sensory: "Skin of the anterior and lateral thigh down to the knee",
    clinical: "Meralgia paraesthetica: compression where it passes under the inguinal ligament near the ASIS (tight belts or trousers, obesity, pregnancy, prolonged sitting, iliac crest bone-graft harvest) → burning pain and numbness of the anterolateral thigh with NO weakness and normal reflexes."
  },
  {
    key: "femoral-nerve", title: "Femoral nerve", match: ["femoral nerve"], kind: "nerve", region: "lower limb",
    summary: "Largest branch of the lumbar plexus and the nerve of the anterior thigh (knee extensors).",
    roots: "L2–L4 (posterior divisions)",
    course: "Emerges from the lateral border of psoas, runs in the groove between psoas and iliacus behind the iliac fascia, passes deep to the inguinal ligament LATERAL to the femoral artery and OUTSIDE the femoral sheath, and breaks up into branches in the femoral triangle a few centimetres below the ligament",
    motor: "Iliacus, pectineus, sartorius, quadriceps femoris (rectus femoris, vastus lateralis, vastus intermedius, vastus medialis)",
    sensory: "Anterior and medial thigh (anterior cutaneous branches); medial leg and foot (saphenous nerve)",
    clinical: "Injury (pelvic/hip surgery, retroperitoneal or iliacus haematoma in anticoagulated patients, penetrating groin wounds) → weak knee extension (the knee buckles), absent knee jerk (L3–L4) and numbness of the anterior thigh and medial leg. Femoral nerve block (lateral to the femoral pulse) is used for hip fracture analgesia.",
    mnemonic: "NAVEL, lateral to medial in the groin: Nerve, Artery, Vein, Empty space, Lymphatics (femoral canal)."
  },
  {
    key: "femoral-anterior-cutaneous", title: "Anterior cutaneous branches of femoral nerve", match: ["anterior cutaneous branches of femoral nerve"], kind: "nerve", region: "lower limb",
    summary: "Intermediate and medial cutaneous nerves of the thigh from the femoral nerve.",
    roots: "Femoral nerve, L2–L3",
    course: "Arise in the femoral triangle and pierce the fascia lata (often through sartorius) along the front of the thigh",
    sensory: "Skin of the anterior and medial thigh; contribute to the patellar plexus in front of the knee"
  },
  {
    key: "saphenous-nerve", title: "Saphenous nerve", match: ["saphenous nerve"], kind: "nerve", region: "lower limb",
    summary: "Longest cutaneous branch of the femoral nerve; the only femoral nerve branch below the knee.",
    roots: "Femoral nerve, L3–L4",
    course: "Descends through the femoral triangle and the adductor canal with the femoral vessels (crossing in front of the femoral artery from lateral to medial), does NOT pass through the adductor hiatus, emerges between sartorius and gracilis on the medial side of the knee, and accompanies the great saphenous vein down the medial leg in front of the medial malleolus",
    sensory: "Skin of the anterior and medial knee (infrapatellar branch), medial side of the leg (medial crural cutaneous branches) and medial side of the foot to about the ball of the great toe",
    clinical: "At risk during great saphenous vein harvesting or varicose vein stripping and with saphenous cutdowns at the ankle → numb medial leg/foot. Saphenous/adductor canal block gives knee and medial-leg analgesia while sparing most quadriceps strength."
  },
  {
    key: "saphenous-infrapatellar-branch", title: "Infrapatellar branch of saphenous nerve", match: ["infrapatellar branch of saphenous nerve"], kind: "nerve", region: "lower limb",
    summary: "Branch of the saphenous nerve that pierces sartorius to supply the skin in front of and below the patella.",
    roots: "Saphenous nerve (femoral, L3–L4)",
    course: "Pierces sartorius and the fascia lata on the medial side of the knee and curves laterally below the patella, joining the patellar plexus",
    sensory: "Skin over the anteromedial knee and the front of the knee below the patella",
    clinical: "Frequently cut by medial knee incisions (arthroscopy portals, total knee replacement, hamstring graft harvest) → numb patch lateral to the scar or a painful neuroma; also irritated by kneeling."
  },
  {
    key: "obturator-nerve", title: "Obturator nerve", match: ["obturator nerve"], kind: "nerve", region: "lower limb",
    summary: "Lumbar plexus nerve of the medial (adductor) compartment of the thigh.",
    roots: "L2–L4 (anterior divisions)",
    course: "Emerges from the MEDIAL border of psoas, runs along the lateral pelvic wall below the pelvic brim (in front of the ureter's crossing), passes through the obturator canal with the obturator vessels and divides into anterior and posterior branches around adductor brevis",
    motor: "Obturator externus, adductor longus, adductor brevis, gracilis, adductor part of adductor magnus (± pectineus)",
    sensory: "A variable patch of skin on the medial thigh; hip and knee joints",
    clinical: "Injured by pelvic surgery (pelvic lymphadenectomy), pelvic tumours or fractures, or difficult labour → weak adduction (the leg swings outward when walking) and medial thigh numbness. Because it supplies both hip and knee, hip disease (e.g. SUFE, Perthes) can present as knee pain."
  },
  {
    key: "obturator-anterior-branch", title: "Anterior branch of obturator nerve", match: ["anterior branch of obturator nerve"], kind: "nerve", region: "lower limb",
    summary: "Superficial branch of the obturator nerve lying in front of adductor brevis.",
    roots: "Obturator nerve, L2–L4",
    course: "Descends in front of adductor brevis, behind pectineus and adductor longus, ending in the subsartorial plexus",
    motor: "Adductor longus, adductor brevis, gracilis (± pectineus)",
    sensory: "Skin of the medial thigh; hip joint"
  },
  {
    key: "obturator-posterior-branch", title: "Posterior branch of obturator nerve", match: ["posterior branch of obturator nerve"], kind: "nerve", region: "lower limb",
    summary: "Deep branch of the obturator nerve between adductor brevis and adductor magnus.",
    roots: "Obturator nerve",
    course: "Pierces obturator externus, then descends behind adductor brevis and in front of adductor magnus",
    motor: "Obturator externus and the adductor part of adductor magnus (sometimes adductor brevis)",
    sensory: "Articular branch to the knee joint (via the popliteal fossa)"
  },

  // ───────────────────────────── SACRAL PLEXUS ─────────────────────────────
  {
    key: "superior-gluteal-nerve", title: "Superior gluteal nerve", match: ["superior gluteal nerve"], kind: "nerve", region: "lower limb",
    summary: "Sacral plexus nerve to the hip abductors; injury gives a positive Trendelenburg sign.",
    roots: "L4–S1 (posterior divisions)",
    course: "Leaves the pelvis through the greater sciatic foramen ABOVE piriformis with the superior gluteal vessels and runs between gluteus medius and gluteus minimus",
    motor: "Gluteus medius, gluteus minimus, tensor fasciae latae",
    clinical: "Injury (misplaced IM injection, hip surgery via a lateral approach) → paralysis of the hip abductors: positive Trendelenburg sign (when standing on the affected limb the pelvis drops on the opposite, unsupported side) and a waddling/lurching 'gluteal' gait. Gluteal injections are given in the upper outer quadrant to avoid it and the sciatic nerve."
  },
  {
    key: "nerve-to-piriformis", title: "Nerve to piriformis", match: ["nerve to piriformis"], kind: "nerve", region: "lower limb",
    summary: "Small direct branch of the sacral plexus to piriformis.",
    roots: "S1–S2",
    course: "Arises within the pelvis and enters the anterior (pelvic) surface of piriformis",
    motor: "Piriformis (lateral rotator and, with the hip flexed, abductor of the thigh)"
  },
  {
    key: "nerve-to-quadratus-femoris", title: "Nerve to quadratus femoris", match: ["nerve to quadratus femoris"], kind: "nerve", region: "lower limb",
    summary: "Sacral plexus branch to quadratus femoris and gemellus inferior.",
    roots: "L4–S1 (anterior divisions)",
    course: "Leaves the pelvis through the greater sciatic foramen below piriformis, deep to the sciatic nerve, and descends on the back of the hip joint deep to the gemelli and obturator internus tendon",
    motor: "Quadratus femoris and gemellus inferior",
    sensory: "Articular branch to the hip joint"
  },
  {
    key: "posterior-femoral-cutaneous-nerve", title: "Posterior femoral cutaneous nerve", match: ["posterior femoral cutaneous nerve"], kind: "nerve", region: "lower limb",
    summary: "Sensory nerve of the back of the thigh, lower buttock and part of the perineum.",
    roots: "S1–S3 (dorsal divisions of S1–S2 and ventral divisions of S2–S3, hence its 'anterior' and 'posterior' roots)",
    course: "Leaves the pelvis through the greater sciatic foramen below piriformis, descends deep to gluteus maximus beside the sciatic nerve, then runs down the back of the thigh deep to the fascia lata, piercing it in the popliteal fossa",
    sensory: "Skin of the lower buttock (inferior cluneal nerves), lateral perineum and posterior scrotum/labium (perineal branches), posterior thigh and popliteal fossa",
    facts: ["It is purely sensory; despite running alongside the sciatic nerve it supplies no muscles."]
  },
  {
    key: "pudendal-nerve", title: "Pudendal nerve", match: ["pudendal nerve"], kind: "nerve", region: "pelvis",
    summary: "Main somatic nerve of the perineum: motor to the external sphincters and sensory to the genitalia.",
    roots: "S2–S4 (anterior divisions)",
    course: "Leaves the pelvis through the greater sciatic foramen below piriformis, hooks around the sacrospinous ligament close to the ischial spine (medial to the internal pudendal vessels), re-enters through the lesser sciatic foramen and runs in the pudendal (Alcock's) canal in the obturator internus fascia, giving the inferior anal (rectal) nerve, perineal nerve and dorsal nerve of the penis/clitoris",
    motor: "External anal sphincter, external urethral sphincter, bulbospongiosus, ischiocavernosus, superficial and deep transverse perineal muscles (and part of levator ani)",
    sensory: "Most of the perineum: anal canal below the pectinate line, perianal skin, penis/clitoris, posterior scrotum/labia",
    clinical: "Pudendal nerve block (needle towards the ischial spine, usually through the vagina) anaesthetises the perineum for childbirth. Stretch injury in prolonged vaginal delivery contributes to faecal and stress urinary incontinence; compression in Alcock's canal (cyclists) causes perineal pain/numbness.",
    mnemonic: "S2, 3, 4 keeps the poo and pee off the floor."
  },
  {
    key: "sciatic-nerve", title: "Sciatic nerve", match: ["sciatic nerve"], kind: "nerve", region: "lower limb",
    summary: "Largest nerve in the body: two nerves (tibial and common fibular) in one sheath, supplying the posterior thigh and everything below the knee.",
    roots: "L4–S3",
    course: "Leaves the pelvis through the greater sciatic foramen below piriformis, descends midway between the greater trochanter and ischial tuberosity deep to gluteus maximus, lying on the gemelli, obturator internus and quadratus femoris, then on adductor magnus deep to the long head of biceps femoris; usually divides at the apex of the popliteal fossa into the tibial and common fibular nerves (division level varies)",
    motor: "Tibial division: semitendinosus, semimembranosus, long head of biceps femoris, hamstring part of adductor magnus; common fibular division: short head of biceps femoris; then all leg and foot muscles via its terminal branches",
    sensory: "Through its branches, the leg (except the medial side) and the whole foot (except the medial border)",
    clinical: "Injured by posterior dislocation of the hip, acetabular fractures, hip replacement and misplaced gluteal injections (give injections in the upper outer quadrant). Complete lesion → weak knee flexion, flail foot (foot drop), absent ankle jerk, sensory loss below the knee except medially. 'Sciatica' is usually L5 or S1 root compression by a disc rather than a lesion of the nerve itself; piriformis syndrome is a rare cause.",
    facts: ["In about 12% of people the common fibular division passes through (or above) piriformis."]
  },
  {
    key: "tibial-nerve", title: "Tibial nerve", match: ["tibial nerve"], kind: "nerve", region: "lower limb",
    summary: "Larger terminal branch of the sciatic nerve, supplying the posterior compartment of the leg and (via the plantar nerves) the sole.",
    roots: "L4–S3 (anterior divisions)",
    course: "Runs vertically through the popliteal fossa, the most superficial of the central structures (nerve, then popliteal vein, then artery deepest), passes deep to the tendinous arch of soleus, descends with the posterior tibial vessels between the superficial and deep calf muscles, passes behind the medial malleolus in the tarsal tunnel under the flexor retinaculum and divides into medial and lateral plantar nerves",
    motor: "Gastrocnemius, soleus, plantaris, popliteus, tibialis posterior, flexor digitorum longus, flexor hallucis longus; intrinsic muscles of the sole via the plantar nerves",
    sensory: "Medial sural cutaneous nerve (→ sural nerve), medial calcaneal branches (heel), sole of the foot via the plantar nerves",
    clinical: "Deep and well protected, so rarely injured except by popliteal fossa trauma (supracondylar femur fracture, posterior knee dislocation) → loss of plantarflexion and toe flexion, shuffling gait, absent ankle jerk (S1) and numb sole. Tarsal tunnel syndrome: burning pain and numbness of the sole from compression behind the medial malleolus.",
    mnemonic: "Behind the medial malleolus, anterior to posterior: Tom, Dick, ANd Harry — Tibialis posterior, flexor Digitorum longus, Artery, Nerve, flexor Hallucis longus."
  },
  {
    key: "medial-sural-cutaneous-nerve", title: "Medial sural cutaneous nerve", match: ["medial sural cutaneous nerve"], kind: "nerve", region: "lower limb",
    summary: "Cutaneous branch of the tibial nerve that forms the sural nerve.",
    roots: "Tibial nerve (S1–S2)",
    course: "Arises in the popliteal fossa, descends between the two heads of gastrocnemius with the small saphenous vein and pierces the deep fascia in the mid-calf, where it is joined by the sural communicating branch of the common fibular nerve to form the sural nerve",
    sensory: "Skin of the posterior calf (then via the sural nerve)"
  },
  {
    key: "sural-communicating-branch", title: "Sural communicating branch of common fibular nerve", match: ["sural communicating branch"], kind: "nerve", region: "lower limb",
    summary: "Branch of the common fibular nerve that joins the medial sural cutaneous nerve to form the sural nerve.",
    roots: "Common fibular nerve (L5–S2)",
    course: "Arises in the popliteal fossa and runs down the back of the lateral head of gastrocnemius to join the medial sural cutaneous nerve at a variable level in the calf",
    sensory: "Skin of the posterolateral leg (via the sural nerve)",
    facts: ["The level of union is variable and the two may fail to unite; this explains the variable sensory pattern after sural nerve harvest."]
  },
  {
    key: "sural-nerve", title: "Sural nerve", match: ["sural nerve"], kind: "nerve", region: "lower limb",
    summary: "Purely sensory nerve of the posterolateral leg and lateral foot, the commonest donor nerve for grafts and biopsy.",
    roots: "Medial sural cutaneous nerve (tibial) + sural communicating branch (common fibular); S1–S2",
    course: "Descends with the small saphenous vein lateral to the calcaneal tendon, passes behind the lateral malleolus and continues along the lateral border of the foot as the lateral dorsal cutaneous nerve",
    sensory: "Skin of the posterolateral lower leg, lateral ankle, lateral border of the foot and little toe",
    clinical: "Used for nerve biopsy (peripheral neuropathy work-up) and as an autologous nerve graft because loss of it leaves only a small numb area on the lateral foot. At risk in Achilles tendon repair, small saphenous vein surgery and lateral ankle approaches."
  },
  {
    key: "medial-plantar-nerve", title: "Medial plantar nerve", match: ["medial plantar nerve"], kind: "nerve", region: "lower limb",
    summary: "Larger terminal branch of the tibial nerve; the 'median nerve of the foot'.",
    roots: "Terminal branch of the tibial nerve",
    course: "Arises under the flexor retinaculum, runs forward deep to abductor hallucis, then between abductor hallucis and flexor digitorum brevis lateral to the medial plantar artery, giving common and proper plantar digital nerves",
    motor: "Abductor hallucis, flexor digitorum brevis, flexor hallucis brevis, first lumbrical",
    sensory: "Medial two-thirds of the sole and the plantar surface of the medial 3½ toes (including their nail beds)",
    clinical: "Can be compressed where it passes deep to abductor hallucis near the knot of Henry ('jogger's foot') → burning medial sole and arch pain.",
    mnemonic: "LAFF: 1st Lumbrical, Abductor hallucis, Flexor digitorum brevis, Flexor hallucis brevis — mirrors LOAF of the median nerve."
  },
  {
    key: "lateral-plantar-nerve", title: "Lateral plantar nerve", match: ["lateral plantar nerve"], kind: "nerve", region: "lower limb",
    summary: "Smaller terminal branch of the tibial nerve; the 'ulnar nerve of the foot', supplying most intrinsic foot muscles.",
    roots: "Terminal branch of the tibial nerve",
    course: "Arises under the flexor retinaculum and runs anterolaterally between quadratus plantae and flexor digitorum brevis with the lateral plantar artery, dividing near the base of the fifth metatarsal into superficial (mainly sensory) and deep (motor) branches; the deep branch follows the plantar arch",
    motor: "Quadratus plantae, abductor digiti minimi, flexor digiti minimi brevis, adductor hallucis, all plantar and dorsal interossei, lateral three lumbricals",
    sensory: "Lateral third of the sole and the plantar surface of the lateral 1½ toes",
    clinical: "Its first branch (inferior calcaneal nerve, to abductor digiti minimi — 'Baxter's nerve') can be entrapped and is a recognised cause of chronic heel pain mimicking plantar fasciitis."
  },

  // Common fibular
  {
    key: "common-fibular-nerve", title: "Common fibular (peroneal) nerve", match: ["common fibular nerve"], kind: "nerve", region: "lower limb",
    summary: "Smaller terminal branch of the sciatic nerve; it winds around the neck of the fibula and is the most frequently injured nerve in the lower limb.",
    roots: "L4–S2 (posterior divisions)",
    course: "Follows the medial border of biceps femoris out of the popliteal fossa, passes superficial to the lateral head of gastrocnemius, winds subcutaneously around the neck of the fibula and enters fibularis longus, where it divides into superficial and deep fibular nerves",
    motor: "No muscles above the knee from the nerve itself (the short head of biceps femoris is supplied by the common fibular division of the sciatic); via its branches, the anterior and lateral compartments of the leg and the dorsum of the foot",
    sensory: "Lateral sural cutaneous nerve (upper lateral leg) and sural communicating branch; via its branches the anterolateral leg and dorsum of the foot",
    clinical: "Fibular neck fracture, tight plaster casts, prolonged leg crossing, squatting or lying with pressure on the lateral knee → foot drop (loss of dorsiflexion and eversion; the foot hangs plantarflexed and inverted), high-stepping 'steppage' gait with foot slap, numb anterolateral leg and dorsum of foot. Distinguish from L5 radiculopathy, which also weakens inversion (tibialis posterior) and hip abduction."
  },
  {
    key: "superficial-fibular-nerve", title: "Superficial fibular (peroneal) nerve", match: ["superficial fibular nerve"], kind: "nerve", region: "lower limb",
    summary: "Branch of the common fibular nerve to the lateral compartment (evertors) and most of the skin of the dorsum of the foot.",
    roots: "Common fibular nerve (L5–S2)",
    course: "Descends in the lateral compartment between fibularis longus/brevis and extensor digitorum longus, pierces the deep fascia in the distal third of the leg and divides into the medial and intermediate dorsal cutaneous nerves of the foot",
    motor: "Fibularis longus and fibularis brevis (eversion)",
    sensory: "Distal anterolateral leg and most of the dorsum of the foot and toes, except the first web space (deep fibular) and the lateral border (sural)",
    clinical: "Isolated injury → weak eversion and numb dorsum of foot with preserved dorsiflexion. May be entrapped where it pierces the fascia or stretched in inversion ankle sprains; at risk with anterolateral ankle arthroscopy portals."
  },
  {
    key: "dorsal-cutaneous-nerves-of-foot", title: "Medial and intermediate dorsal cutaneous nerves of foot",
    match: ["medial dorsal cutaneous nerve of foot", "intermediate dorsal cutaneous nerve of foot", "dorsal digital branches of superficial fibular nerve"],
    kind: "nerve", region: "lower limb",
    summary: "Terminal cutaneous branches of the superficial fibular nerve across the dorsum of the foot.",
    roots: "Superficial fibular nerve",
    course: "The medial branch passes in front of the ankle to the medial side of the great toe and the 2nd/3rd web space; the intermediate branch runs to the 3rd/4th and 4th/5th web spaces; both end as dorsal digital nerves",
    sensory: "Dorsum of the foot and toes except the first web space (deep fibular) and the lateral border (sural)",
    clinical: "The intermediate dorsal cutaneous nerve can often be seen under the skin when the foot is plantarflexed and inverted; it is the structure most at risk from the anterolateral ankle arthroscopy portal."
  },
  {
    key: "deep-fibular-nerve", title: "Deep fibular (peroneal) nerve", match: ["deep fibular nerve"], kind: "nerve", region: "lower limb",
    summary: "Branch of the common fibular nerve to the anterior compartment (dorsiflexors) and the first web space.",
    roots: "Common fibular nerve, L4–L5 (S1)",
    course: "Pierces the anterior intermuscular septum and extensor digitorum longus, descends on the interosseous membrane with the anterior tibial artery, crosses the front of the ankle between the tendons of extensor hallucis longus and extensor digitorum longus, and divides on the dorsum into a lateral branch (to EDB/EHB) and a medial branch to the first web space",
    motor: "Tibialis anterior, extensor hallucis longus, extensor digitorum longus, fibularis tertius; extensor digitorum brevis and extensor hallucis brevis",
    sensory: "Skin of the first web space (adjacent sides of the great and second toes) via dorsal digital branches",
    clinical: "Anterior compartment syndrome or a lesion of this nerve → foot drop (weak dorsiflexion and toe extension) with eversion preserved and numbness only in the first web space. Compression under the extensor retinaculum by tight shoes or ski boots = anterior tarsal tunnel syndrome."
  }
];

export const NERVE_SYSTEM_INFO = {
  label: "Nerves",
  color: "#f2c94c",
  blurb: "Peripheral nerves carry motor, sensory and autonomic fibres between the spinal cord or brainstem and the rest of the body. Twelve pairs of cranial nerves supply the head and neck (with the vagus reaching the abdomen), and 31 pairs of spinal nerves form the cervical, brachial and lumbosacral plexuses that supply the neck and limbs, while intercostal nerves stay segmental. Knowing a nerve's roots, course, muscles and skin area lets you predict the deficit from a lesion — wrist drop, claw hand, foot drop and winged scapula are all anatomy at the bedside."
};
