// Timed practical exam ("bell-ringer" / tag test): each station pins one structure on a dissected 3D
// specimen; you type the answer from memory before the bell. No going back, graded at the end.
import { pretty, store, saveStore, addXP, recordAnswer, $, h, esc, shuffle } from "./util.js";

const PRESETS = [
  { id: "quick", name: "Quick spotter", desc: "10 stations · 45 s · big muscles & bones", n: 10, secs: 45, systems: ["muscular", "skeletal"], region: "all", min: 0.14, second: false },
  { id: "upper", name: "Upper limb practical", desc: "20 stations · 60 s · muscles, bones, nerves", n: 20, secs: 60, systems: ["muscular", "skeletal", "nerves"], region: "upper", min: 0.05, second: true },
  { id: "lower", name: "Lower limb practical", desc: "20 stations · 60 s · muscles, bones, nerves", n: 20, secs: 60, systems: ["muscular", "skeletal", "nerves"], region: "lower", min: 0.05, second: true },
  { id: "trunk", name: "Thorax, abdomen & back", desc: "20 stations · 60 s · organs, vessels, back muscles", n: 20, secs: 60, systems: ["muscular", "cardio", "respiratory", "digestive", "urinary", "skeletal"], region: "trunk", min: 0.06, second: true },
  { id: "neuro", name: "Neuroanatomy", desc: "15 stations · 60 s · brain, cranial & spinal nerves", n: 15, secs: 60, systems: ["nervous", "nerves"], region: "all", min: 0.03, second: false },
  { id: "full", name: "Full-body final", desc: "40 stations · 60 s · everything", n: 40, secs: 60, systems: ["muscular", "skeletal", "nerves", "cardio", "respiratory", "digestive", "urinary", "nervous"], region: "all", min: 0.05, second: true },
];
const PASS = 70;

// Layers shown around a station, by the target's system (the rest are switched off).
const CONTEXT = {
  muscular: ["muscular", "connective", "skeletal"],
  connective: ["connective", "muscular", "skeletal"],
  skeletal: ["skeletal"],
  nerves: ["nerves", "muscular", "skeletal"],
  cardio: ["cardio", "skeletal"],
  nervous: ["nervous"],
};
const ORGANS = ["respiratory", "digestive", "urinary", "endocrine", "lymphatic", "reproductive", "cardio"];

// ---------- answer checking ----------
const STRIP = /\b(muscle|muscles|musculus|m|mm|bone|nerve|nerves|n|nn|the|right|left|r|l|nsn|set of)\b/g;
const CN = ["olfactory", "optic", "oculomotor", "trochlear", "trigeminal", "abducens", "facial", "vestibulocochlear", "glossopharyngeal", "vagus", "accessory", "hypoglossal"];
const ROMAN = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii"];
// Lab shorthand and alternative names → the model's terms (applied to answers and keys alike).
const SYN = [
  [/\bcn ?(xii|xi|x|ix|viii|vii|vi|v|iv|iii|ii|i|1[0-2]|[1-9])\b/g, (_, n) => CN[(/\d/.test(n) ? +n : ROMAN.indexOf(n) + 1) - 1] + " nerve"],
  [/\bperoneus\b/g, "fibularis"], [/\bperoneal\b/g, "fibular"],
  [/\bglutes?\b/g, "gluteus"], [/\bgluteus max\b/g, "gluteus maximus"], [/\bgluteus med\b/g, "gluteus medius"], [/\bgluteus min\b/g, "gluteus minimus"],
  [/\bpecs?\b/g, "pectoralis"], [/\blats?\b/g, "latissimus dorsi"], [/\btraps?\b/g, "trapezius"], [/\bdelts?\b/g, "deltoid"],
  [/\bscm\b/g, "sternocleidomastoid"], [/\btfl\b/g, "tensor fasciae latae"], [/\bql\b/g, "quadratus lumborum"], [/\bvmo\b/g, "vastus medialis"],
  [/\b(it band|itb|it tract|iliotibial band)\b/g, "iliotibial tract"], [/\bachilles( tendon)?\b/g, "calcaneal tendon"],
  [/\bupper trunk\b/g, "superior trunk"], [/\blower trunk\b/g, "inferior trunk"],
  [/\bivc\b/g, "inferior vena cava"], [/\bsvc\b/g, "superior vena cava"], [/\blad\b/g, "anterior interventricular branch"],
  [/\bain\b/g, "anterior interosseous nerve"], [/\bpin\b/g, "posterior interosseous nerve"],
  [/\bfascia lata\b/g, "fasciae latae"],
];
export function normAnswer(s) {
  let t = String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/\([^)]*\)/g, " ").replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
  for (const [re, rep] of SYN) t = t.replace(re, rep);
  return t.replace(STRIP, " ").replace(/\s+/g, " ").trim();
}
// "long head of biceps" for "long head of biceps brachii": most of the name, in order.
function nearlyComplete(a, k) {
  const aw = a.split(" ").filter((w) => w !== "of");
  const kw = k.split(" ").filter((w) => w !== "of");
  if (aw.length < 2 || aw.length >= kw.length) return false;
  let j = 0;
  for (const w of kw) if (j < aw.length && w === aw[j]) j++;
  return j === aw.length && aw.length / kw.length >= 0.75;
}
function lev(a, b) {
  const m = a.length, n = b.length;
  if (!m || !n) return m + n;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    prev = cur;
  }
  return prev[n];
}
const sim = (a, b) => 1 - lev(a, b) / Math.max(a.length, b.length, 1);
const initials = (s) => s.split(" ").filter((w) => w !== "of" && w !== "and").map((w) => w[0]).join("");

// Accepted names for a unit: the exact part name, its study-note title and match phrases.
function keysFor(unit) {
  const raw = [unit.base, unit.kb?.title, ...(unit.kb?.match || [])].filter(Boolean);
  const keys = new Set();
  for (const r of raw) {
    const k = normAnswer(r);
    if (k.length < 3) continue;
    keys.add(k);
    // common short forms: "lateral gastrocnemius", "superior trunk" (of the brachial plexus)
    if (/ head of /.test(k)) keys.add(k.replace(/ head of /, " "));
    const short = k.replace(/ of (brachial|lumbar|sacral) plexus$/, "");
    if (short !== k) keys.add(short);
  }
  return [...keys];
}
// → { mark: 1 | 0, note }
export function gradeName(answer, unit) {
  const a = normAnswer(answer);
  if (!a) return { mark: 0, note: "No answer" };
  const keys = keysFor(unit);
  if (keys.includes(a)) return { mark: 1, note: "Correct" };
  for (const k of keys) {
    const words = k.split(" ");
    if (words.length >= 3 && a.replace(/ /g, "") === initials(k)) return { mark: 1, note: "Correct (abbreviation)" };
  }
  if (keys.some((k) => nearlyComplete(a, k))) return { mark: 1, note: "Accepted — give the full name" };
  const best = Math.max(...keys.map((k) => sim(a, k)));
  if (best >= 0.84) return { mark: 1, note: "Accepted — check spelling" };
  return { mark: 0, note: best >= 0.65 ? "Close, but not accepted" : "Incorrect" };
}
// Second-order: nerve supply. Compare against nerve names mentioned in the study note's innervation text.
function nerveKeys(text) {
  return String(text || "").split(/[;,/()]| and | or | via | plus |\bfrom\b/i)
    .map((s) => s.trim()).filter((s) => /nerve|ramus|rami|branch|plexus|cn |cranial/i.test(s))
    .map(normAnswer).filter((s) => s.length >= 3);
}
export function gradeNerve(answer, kb) {
  const a = normAnswer(answer);
  if (!a) return { mark: 0, note: "No answer" };
  const keys = nerveKeys(kb.innervation);
  for (const k of keys) {
    if (k === a || (a.length >= 5 && k.includes(a)) || sim(a, k) >= 0.84) return { mark: 1, note: k === a ? "Correct" : "Accepted" };
  }
  return { mark: 0, note: "Incorrect" };
}

export function initExam(app, el, back) {
  const st = { exam: null, timer: null, saved: null, review: null };

  function oneSide(ids) {
    const right = ids.filter((id) => app.byId.get(id).side === "right");
    return right.length ? right : ids;
  }

  function pool(preset) {
    const out = [];
    const seenKb = new Set();
    for (const [base, ids] of app.units) {
      const parts = ids.map((i) => app.byId.get(i));
      const p = parts[0];
      if (!preset.systems.includes(p.system)) continue;
      if (/hairs|eyebrows|^skin$|intervertebral disk|tooth|gingiva/.test(base)) continue;
      if (preset.region !== "all" && !parts.some((q) => q.region === preset.region)) continue;
      // small nerve twigs are only fair game in the specialist exams
      if (Math.max(...parts.map((q) => q.size)) < preset.min * (p.system === "nerves" && preset.id !== "neuro" ? 2.5 : 1)) continue;
      out.push({ base, ids, sys: p.system, kb: p.kb });
    }
    // weight toward weak spots, avoid two stations on the same study-note entry
    const ranked = out.map((u) => { const m = store.mastery[u.base]; return { u, k: Math.random() * (1 + (m ? (m.w + 1) / (m.c + 1) : 1)) }; })
      .sort((a, b) => b.k - a.k).map((x) => x.u);
    const picks = [];
    for (const u of ranked) {
      const key = u.kb?.key || u.base;
      if (seenKb.has(key)) continue;
      seenKb.add(key);
      picks.push(u);
      if (picks.length >= preset.n) break;
    }
    return picks;
  }

  // ---------- setup ----------
  function renderSetup() {
    stopTimer();
    const hist = store.exams || [];
    const best = hist.length ? Math.max(...hist.map((e) => e.pct)) : null;
    el.innerHTML = `<div class="card">
        <h2>⏱️ Practical exam</h2>
        <p class="muted">Like a bell-ringer: each station pins a structure on a dissected specimen. Type the answer before the bell — no options, no going back. Pass mark ${PASS}%.</p>
        <div class="opt-grid" id="x-presets"></div>
        <label class="check-row"><input type="checkbox" id="x-second" checked /> Include second-order questions (e.g. “nerve supply of the pinned muscle”)</label>
      </div>
      ${hist.length ? `<div class="card"><h4 style="margin-top:0">Recent exams</h4>
        <div class="exam-hist">${hist.slice(-8).map((e) => `<div class="eh ${e.pct >= PASS ? "pass" : "fail"}" title="${esc(e.name)} — ${new Date(e.t).toLocaleDateString()}"><div style="height:${Math.max(6, e.pct)}%"></div><span>${e.pct}</span></div>`).join("")}</div>
        <p class="muted" style="font-size:12px">Best: <b>${best}%</b> · ${hist.length} exam${hist.length > 1 ? "s" : ""} taken</p></div>` : ""}
      <button class="btn" id="x-back">◀ Other quiz modes</button>`;
    const box = el.querySelector("#x-presets");
    for (const p of PRESETS) {
      const b = h(`<button class="opt">${esc(p.name)}<br><span class="muted" style="font-weight:500;font-size:12px">${esc(p.desc)}</span></button>`);
      b.onclick = () => start(p, el.querySelector("#x-second").checked);
      box.appendChild(b);
    }
    el.querySelector("#x-back").onclick = back;
  }

  // ---------- exam ----------
  function start(preset, second) {
    const units = pool(preset);
    if (units.length < 5) { el.querySelector(".muted").textContent = "Not enough structures for this exam."; return; }
    st.saved = new Set(app.viewer.systemsVisible);
    const stations = units.map((u) => {
      const ask2 = second && u.kb?.innervation && u.sys === "muscular" && Math.random() < 0.25;
      return { unit: u, type: ask2 ? "nerve" : "id", answer: "", flagged: false };
    });
    st.exam = { preset, second, stations, i: 0, t0: Date.now() };
    app.hoverEnabled = false;
    showStation();
  }

  function setLayers(systems) {
    const all = new Set(app.parts.map((p) => p.system));
    for (const s of all) app.setLayer(s, systems.includes(s));
  }

  // Put the specimen on the bench: right layers, peel away anything hiding the target, place the pin.
  function stage(station) {
    const v = app.viewer;
    const u = station.unit;
    const ids = oneSide(u.ids);
    const ctx = CONTEXT[u.sys] || (ORGANS.includes(u.sys) ? [...ORGANS.filter((s) => s !== "cardio"), u.sys, "skeletal"] : [u.sys, "skeletal"]);
    setLayers(ctx);
    v.clearSpotlight();
    v.clearMarks();
    v.showAll();
    const dir = v.bestDir(ids);
    const box = v.boundsOf(ids);
    const c = box.getCenter(box.min.clone());
    const r = Math.max(box.getSize(box.min.clone()).length() / 2, 0.06);
    const camPos = c.clone().addScaledVector(dir, (r * 2.4) / Math.sin((v.camera.fov * Math.PI) / 360));
    let res = v.findVisiblePoint(ids, camPos);
    for (let k = 0; k < 4 && (!res.point || res.visible < 0.12) && res.blockers.length; k++) {
      v.hide(res.blockers); // dissect away what's in front
      res = v.findVisiblePoint(ids, camPos);
    }
    v.focus(ids, { dir, pad: 2.4 });
    v.setPin(res.point || c, res.normal || dir, r);
  }

  function showStation() {
    const ex = st.exam;
    const s = ex.stations[ex.i];
    stage(s);
    app.setLabels(app.viewer.pinHead ? [{ point: app.viewer.pinHead, text: `#${ex.i + 1}`, cls: "pin" }] : []);
    const q = s.type === "nerve" ? "What nerve supplies the pinned muscle?" : "Identify the pinned structure.";
    el.innerHTML = `<div class="card">
        <div class="qhead"><span>Station ${ex.i + 1}/${ex.stations.length}</span><span>${esc(ex.preset.name)}</span></div>
        <div class="stepbar">${ex.stations.map((x, j) => `<span class="${j < ex.i ? "on" : j === ex.i ? "cur" : ""}"></span>`).join("")}</div>
        <div class="exam-clock"><div class="ring-sm" id="x-ring"></div><div><div class="prompt" style="font-size:19px">${q}</div>
        <div class="muted" style="font-size:12px">Rotate &amp; zoom freely · Enter to submit</div></div></div>
        <form id="x-form" autocomplete="off"><input id="x-ans" class="exam-input" placeholder="Type your answer…" autocomplete="off" autocapitalize="off" spellcheck="false" />
        <div class="row"><button type="button" class="btn ${s.flagged ? "on" : ""}" id="x-flag">🚩 Flag</button><button type="submit" class="btn primary" style="flex:1">Submit ▶</button></div></form>
      </div><button class="btn" id="x-quit">✕ End exam</button>`;
    const input = el.querySelector("#x-ans");
    if (!matchMedia("(pointer: coarse)").matches) input.focus();
    el.querySelector("#x-form").addEventListener("submit", (e) => { e.preventDefault(); next(); });
    el.querySelector("#x-flag").onclick = (e) => { s.flagged = !s.flagged; e.target.classList.toggle("on", s.flagged); };
    el.querySelector("#x-quit").onclick = () => finish(true);
    s.t0 = performance.now();
    startTimer(s);
    app.openPanelMobile();
  }

  function ring(frac, label) {
    const R = 26, C = 2 * Math.PI * R;
    const col = frac > 0.33 ? "var(--accent)" : "var(--bad)";
    return `<svg width="64" height="64" viewBox="0 0 64 64"><circle cx="32" cy="32" r="${R}" stroke="var(--card2)" stroke-width="6" fill="none"/>
      <circle cx="32" cy="32" r="${R}" stroke="${col}" stroke-width="6" fill="none" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - frac)}" transform="rotate(-90 32 32)"/></svg><b>${label}</b>`;
  }
  function startTimer(s) {
    stopTimer();
    const total = st.exam.preset.secs;
    let warned = false;
    const tick = () => {
      const left = Math.max(0, total - (performance.now() - s.t0) / 1000);
      const elR = $("#x-ring");
      if (elR) elR.innerHTML = ring(left / total, Math.ceil(left));
      if (left <= 5 && !warned) { warned = true; beep(660, 0.08); }
      if (left <= 0) { beep(880, 0.25); next(); }
    };
    tick();
    st.timer = setInterval(tick, 200);
  }
  function stopTimer() { clearInterval(st.timer); st.timer = null; }

  function next() {
    const ex = st.exam;
    if (!ex) return;
    const s = ex.stations[ex.i];
    s.answer = $("#x-ans")?.value || "";
    s.secs = Math.round((performance.now() - s.t0) / 1000);
    ex.i++;
    if (ex.i >= ex.stations.length) finish(false);
    else showStation();
  }

  function finish(early) {
    stopTimer();
    const ex = st.exam;
    if (!ex) return renderSetup();
    st.exam = null;
    app.viewer.setPin(null);
    app.setLabels([]);
    const done = ex.stations.slice(0, early ? ex.i : ex.stations.length);
    for (const s of done) {
      s.result = s.type === "nerve" ? gradeNerve(s.answer, s.unit.kb) : gradeName(s.answer, s.unit);
      recordAnswer(s.unit.base, !!s.result.mark);
    }
    const score = done.reduce((a, s) => a + s.result.mark, 0);
    const pct = done.length ? Math.round((score / done.length) * 100) : 0;
    if (done.length >= 5) {
      (store.exams ||= []).push({ t: Date.now(), name: ex.preset.name, n: done.length, pct });
      saveStore();
      addXP(score * 4 + (pct >= 90 ? 60 : pct >= PASS ? 25 : 0));
    }
    st.review = done;
    renderResults(ex, done, score, pct, early);
  }

  function correctText(s) {
    if (s.type === "nerve") return s.unit.kb?.innervation || "";
    return pretty(s.unit.base) + (s.unit.kb && s.unit.kb.title.toLowerCase() !== s.unit.base ? ` (${s.unit.kb.title})` : "");
  }

  function renderResults(ex, done, score, pct, early) {
    const mins = Math.round((Date.now() - ex.t0) / 60000);
    const pass = pct >= PASS;
    el.innerHTML = `<div class="card">
        <h2>${pass ? "✅ Pass" : "❌ Not yet"} — ${esc(ex.preset.name)}</h2>
        <div class="score-big">${pct}%</div>
        <div class="stats"><div><b>${score}/${done.length}</b>Correct</div><div><b>${done.filter((s) => s.flagged).length}</b>Flagged</div><div><b>${mins} min</b>Time</div></div>
        ${early ? `<p class="muted">Ended early after ${done.length} station${done.length === 1 ? "" : "s"}.</p>` : ""}
        <p class="muted" style="font-size:12px">Tap a station to see the specimen again. Misses go into your weak-spot review and flashcards.</p>
        <div class="exam-review" id="x-review"></div>
        <div class="row"><button class="btn primary" id="x-again">Retake</button><button class="btn" id="x-setup">Choose another exam</button></div>
      </div>`;
    const list = el.querySelector("#x-review");
    done.forEach((s, i) => {
      const ok = s.result.mark === 1;
      const row = h(`<button class="xr ${ok ? "ok" : "no"}">
          <span class="xr-n">${i + 1}${s.flagged ? " 🚩" : ""}</span>
          <span class="xr-body"><span class="muted" style="font-size:11px">${s.type === "nerve" ? "Nerve supply" : "Identify"} · ${esc(s.result.note)}</span>
          <span>${s.answer ? esc(s.answer) : "<i class='muted'>blank</i>"}</span>
          ${ok && s.result.note === "Correct" ? "" : `<span class="xr-key">✓ ${esc(correctText(s))}</span>`}</span>
          <span class="xr-mark">${ok ? "✓" : "✗"}</span></button>`);
      row.onclick = () => {
        list.querySelectorAll(".xr").forEach((x) => x.classList.toggle("sel", x === row));
        stage(s);
        app.setLabels([{ point: app.viewer.pinHead, text: pretty(s.unit.base), cls: ok ? "ok" : "" }]);
      };
      list.appendChild(row);
    });
    el.querySelector("#x-again").onclick = () => start(ex.preset, ex.second);
    el.querySelector("#x-setup").onclick = () => { cleanup(); renderSetup(); };
    app.hoverEnabled = true;
  }

  function cleanup() {
    stopTimer();
    app.viewer.setPin(null);
    app.setLabels([]);
    app.viewer.showAll();
    if (st.saved) { const all = new Set(app.parts.map((p) => p.system)); for (const s of all) app.setLayer(s, st.saved.has(s)); st.saved = null; }
    app.hoverEnabled = true;
  }

  let actx;
  function beep(freq, dur) {
    try {
      actx ||= new (window.AudioContext || window.webkitAudioContext)();
      const o = actx.createOscillator(), g = actx.createGain();
      o.frequency.value = freq; g.gain.value = 0.09;
      o.connect(g); g.connect(actx.destination);
      o.start(); o.stop(actx.currentTime + dur);
    } catch { /* no audio */ }
  }

  return {
    renderSetup,
    active: () => !!st.exam,
    abort: () => { st.exam = null; cleanup(); },
  };
}
