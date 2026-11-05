"""Classify BodyParts3D parts into body systems, sides and base names.

Usage: python classify.py parts_named.tsv  (tsv: FMA id, size, english name)
Prints JSON list to stdout.
"""
import json, re, sys

BONE = re.compile(r"\b(bone|vertebra|rib|costal cartilage|sternum|manubrium|xiphoid process|clavicle|scapula|humerus|radius|ulna|phalanx|metacarpal|metatarsal|scaphoid|lunate|triquetral|pisiform|trapezium|trapezoid|capitate|hamate|femur|patella|tibia|fibula|talus|calcaneus|cuneiform|sacrum|coccyx|mandible|maxilla|ethmoid|vomer|inferior nasal concha|atlas|axis|tooth|gingiva|intervertebral disk|sesamoid)\b")
CONNECTIVE = re.compile(r"(ligament|tendon|iliotibial tract|linea alba|aponeurosis|retinaculum|interosseous membrane|tendinous arch|cartilage|taenia)")
NERVOUS = re.compile(r"(gyrus|gyri|lobule|lobe of (?!lung|thymus)|occipital lobe|insula|thalam|hypothalamus|cerebell|cerebral|callosum|fornix|commissure|hippocampus|amygdala|caudate|putamen|globus pallidus|capsule|colliculus|geniculate|pons|medulla oblongata|midbrain|peduncle|mammillary|habenula|septum pellucidum|choroid plexus|optic|spinal cord|ventricle$|third ventricle|fourth ventricle|lateral ventricle|interventricular foramen|aqueduct|lamina terminalis|tuber cinereum|stria|interpeduncular|white matter|eyeball|nerve)")
CARDIO = re.compile(r"(artery|vein|aorta|vena cava|heart|valve|papillary|coronary|cardiac|veins of ventricle|coronary sinus)")
RESP = re.compile(r"(lung|trachea|bronchus)")
DIGEST = re.compile(r"(esophagus|stomach|duodenum|jejunum|ileum|colon|rectum|appendix|liver|gallbladder|pancrea|labial part of mouth)")
URINARY = re.compile(r"(kidney|ureter|urinary bladder|urethra)")
ENDO = re.compile(r"(adrenal|thymus|pituitary|pineal)")
REPRO = re.compile(r"(testis|epididymis|deferent duct|seminal vesicle|prostate|penis)")
LYMPH = re.compile(r"(spleen)")
SKIN = re.compile(r"(^skin$|hairs|eyebrows|^ear$)")

def split_side(name):
    side = None
    m = re.search(r"\b(right|left)\b ?", name)
    if m:
        side = m.group(1)
        name = (name[:m.start()] + name[m.end():]).strip()
        name = re.sub(r"\s+", " ", name)
    return side, name

def classify(base):
    b = base.lower()
    if SKIN.search(b): return "skin"
    if "pubic hairs" in b: return None
    if CARDIO.search(b): return "cardio"
    if NERVOUS.search(b): return "nervous"
    if RESP.search(b): return "respiratory"
    if DIGEST.search(b): return "digestive"
    if URINARY.search(b): return "urinary"
    if ENDO.search(b): return "endocrine"
    if REPRO.search(b): return "reproductive"
    if LYMPH.search(b): return "lymphatic"
    if BONE.search(b) and "muscle" not in b and not b.startswith(("flexor", "extensor", "abductor", "adductor", "opponens")): return "skeletal"
    if CONNECTIVE.search(b): return "connective"
    return "muscular"

def main(path):
    out = []
    for line in open(path):
        fid, size, name = line.rstrip("\n").split("\t")
        side, base = split_side(name)
        if "pubic hairs" in base: continue
        sysname = classify(base)
        out.append(dict(id=fid, name=name, base=base, side=side, system=sysname, bytes=int(size)))
    json.dump(out, sys.stdout, indent=0)

if __name__ == "__main__":
    main(sys.argv[1])
