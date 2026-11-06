# Anatomy 3D — study atlas

An interactive **3D human anatomy atlas** that runs in the browser, built for studying (med school / PT / nursing level).

- **Real anatomy.** 933 separately clickable structures from the MRI-derived [BodyParts3D](https://lifesciencedb.jp/bp3d/) dataset: every bone, about 420 muscle parts, tendons and ligaments, brain structures, heart and great vessels, lungs, digestive, urinary, endocrine and reproductive organs, and skin.
- **Study notes for every structure.** Muscles have origin, insertion, action, nerve (with root values) and blood supply, plus clinical notes, mnemonics and high-yield facts. Bones have key landmarks. Brain structures have functions and lesion effects. Vessels have their course and what they supply or drain.
- **Realistic rendering.** Muscle-fibre surface detail that follows each muscle's fibre direction, white tendons where muscles taper, wet-looking organs, and ambient-occlusion shadows in the creases. There's a ⚡ Fast mode for older phones.
- **Peripheral nerves.** A Nerves layer with 244 structures: the brachial plexus and every major arm and leg nerve down to the digital branches, the lumbosacral plexus, the spinal cord and cauda equina, the intercostal nerves, the sympathetic trunk and cranial nerves III–XII.
- **Explore.** Rotate, zoom and tap anything. Turn body systems on and off, **hide** muscles to peel down to deeper layers, **isolate** a structure, and search all 900+ names.
- **Cross-sections.** Slice the body in the transverse, sagittal or coronal plane and slide the cut through it.
- **Guided lessons (33).** Short walkthroughs such as the rotator cuff, quadriceps, leg compartments, coronary arteries, the brain and the visual pathway. Each step fades everything else, flies the camera to the structures and labels them. Finishing a lesson unlocks a quiz on exactly those structures.
- **Quiz modes:**
  - *Find it*: tap the named structure on the body.
  - *Name it*: pick the name of a highlighted structure. Wrong answers are always nearby structures, so it's not easy.
  - *Facts*: nerve, action, origin, insertion and blood-supply questions.
  - *Mix*: all three shuffled.
  - *Practical exam*: a timed bell-ringer (tag test). Each station pins one structure on a dissected specimen, with anything covering it peeled away. You type the name from memory, with optional second-order questions like "nerve supply of the pinned muscle". A countdown runs at each station and there's no going back. Grading accepts minor misspellings and common shorthand (FDP, SCM, glute med, CN VII, peroneal/fibular), and you get a pass/fail score with a station-by-station review. Presets: quick spotter, upper limb, lower limb, trunk, neuroanatomy, full-body final.
  - *Flashcards*: spaced repetition (Again / Hard / Good / Easy), so cards you know come back less often.

  Every question spotlights its structure: one side only, with the rest of the body faded so you can see what's being asked. A 👁 Context button brings the rest back.

  You can filter by system, region and difficulty. You earn XP, levels, a daily study streak and badges, and a **weak-spot review** brings back what you missed. Progress is saved in your browser.
- **What hurts?** Type where it hurts ("outside of my knee when I run", "tennis elbow", "heel pain in the morning") or tap the spot on the body. You get:
  - the structures usually involved, highlighted in 3D
  - common causes and tips
  - a guided exercise routine with hold timers and rest periods (26 body areas, 154 exercises)
  - clear red flags for when to see a professional.

> ⚠️ The exercise guidance is educational and is **not** medical advice or a diagnosis. Severe, sudden or persistent pain should be checked by a clinician.

## Run it

It's a static site with no build step. Browsers won't load 3D files from `file://`, so serve the folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

### Put it online for free (GitHub Pages)
In the repo on GitHub, go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then pick the branch and `/ (root)`. After about a minute it will be live at `https://<your-username>.github.io/<repo-name>/`, and it works on phones too.

## Controls
| Action | Mouse / keys | Touch |
|---|---|---|
| Rotate | left-drag | one-finger drag |
| Zoom | scroll | pinch |
| Pan | right-drag | two-finger drag |
| Select | click | tap |
| Zoom onto a part | double-click / `F` | double-tap |
| Hide / isolate / reset | `H` / `I` / `A` | toolbar |

## Project layout
```
index.html            app shell (import map for three.js)
css/style.css
js/main.js            boot, layers, search, browse tree, labels, Explore mode
js/viewer.js          three.js scene: materials/shaders, AO, picking (BVH), spotlight, slicing, camera
js/learn.js           Learn mode (guided lessons)
js/quiz.js            quiz modes, flashcards (spaced repetition), scoring, mastery tracking
js/exam.js            timed practical exam: station staging, dissection, pins, answer grading
js/painui.js          "What hurts?" mode + routine player
js/util.js            helpers, study-note lookup, progress store
js/data/kb.js         study notes (395 entries)
js/data/pain.js       pain areas, exercises, red flags, text matcher
js/data/lessons.js    guided lessons (29 lessons, 191 steps)
js/data/kb_nerves.js  study notes for nerves (101 entries)
js/data/lessons_nerves.js  nerve lessons (brachial plexus, injuries, lower limb, cranial nerves)
models/*.glb          one compressed model per body system (~5 MB total)
models/parts.json     part list: FMA id, name, side, system
tools/                scripts that build the models from BodyParts3D
vendor/               three.js r170 + three-mesh-bvh (MIT)
```

### Rebuilding the models
`tools/build_models.py` turns the original BodyParts3D STL files into web models. It merges vertices, simplifies each mesh to about 1.5M triangles in total, converts to metres with Y up, and writes one GLB per body system, compressed with [gltfpack](https://github.com/zeux/meshoptimizer). `tools/classify.py` assigns each part a system, a side and a base name, and its output is `tools/parts_source.json`.

```bash
pip install numpy trimesh fast-simplification && npm i -g gltfpack
python tools/build_models.py path/to/stl tools/parts_source.json models
```

## Credits & licences
- **3D anatomy data:** BodyParts3D, © The Database Center for Life Science (DBCLS), licensed under [CC BY-SA 2.1 Japan](https://creativecommons.org/licenses/by-sa/2.1/jp/deed.en). The files in `models/` are simplified derivatives and are shared under the same licence. Source STL files came from the [BodyParts3D mirror by Kevin Moerman](https://github.com/Kevin-Mattheus-Moerman/BodyParts3D).
- **three.js** and **three-mesh-bvh**: MIT (see `vendor/*/LICENSE`).
