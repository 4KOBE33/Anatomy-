// "Learn" mode: guided lessons. Each step spotlights structures in 3D (everything else fades),
// labels them, and teaches relationships; finishing a lesson unlocks a quiz on exactly those structures.
import { LESSONS as LESSONS_MAIN } from "./data/lessons.js";
let LESSONS_NERVES = [];
try { ({ LESSONS_NERVES } = await import("./data/lessons_nerves.js")); } catch { /* not present */ }
const LESSONS = [...LESSONS_MAIN, ...LESSONS_NERVES];
import { pretty, store, saveStore, addXP, $, h, esc, toast } from "./util.js";

const CATS = ["Upper limb", "Lower limb", "Trunk & back", "Head & neck", "Skeleton", "Heart & vessels", "Organs", "Brain"];
const reEsc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function initLearn(app) {
  const el = $("#panel-learn");
  const st = { lesson: null, step: 0 };

  // Whole-word matching so "ulna" doesn't grab "flexor carpi ulnaris"; falls back to substring if nothing matches.
  function matchIds(subs = [], side = "right", category = "") {
    const out = new Set();
    for (const sub of subs) {
      const re = new RegExp(`(^|[\\s,(])${reEsc(sub.toLowerCase())}($|[\\s,)])`);
      let hits = app.parts.filter((p) => re.test(p.base.toLowerCase()));
      if (!hits.length) hits = app.parts.filter((p) => p.base.toLowerCase().includes(sub.toLowerCase()));
      for (const p of hits) out.add(p);
    }
    let parts = [...out];
    if (category === "Upper limb") parts = parts.filter((p) => p.region !== "lower");
    if (category === "Lower limb") parts = parts.filter((p) => p.region !== "upper");
    if (side !== "both") {
      const sided = parts.filter((p) => !p.side || p.side === side);
      if (sided.length) parts = sided;
    }
    return parts.map((p) => p.id);
  }
  app.lessonMatch = matchIds;

  function lessonUnits(lesson) {
    const bases = new Set();
    for (const s of lesson.steps) for (const id of matchIds(s.structures, "both", lesson.category)) bases.add(app.byId.get(id).base);
    return [...bases];
  }

  // ---------- list ----------
  function renderList() {
    app.viewer.clearSpotlight();
    app.setLabels([]);
    const done = Object.values(store.lessons || {}).filter((l) => l.done).length;
    el.innerHTML = `<div class="card">
        <h2>Guided lessons</h2>
        <p class="muted">${LESSONS.length} bite-sized walkthroughs. Each step lights up the structures in 3D and fades everything else, then you can quiz yourself on exactly that group.</p>
        <div class="stats"><div><b>${done}/${LESSONS.length}</b>Completed</div><div><b>${LESSONS.reduce((a, l) => a + l.steps.length, 0)}</b>Steps</div><div><b>+50</b>XP each</div></div>
      </div><div id="l-list"></div>`;
    const list = el.querySelector("#l-list");
    for (const cat of CATS) {
      const ls = LESSONS.filter((l) => l.category === cat);
      if (!ls.length) continue;
      list.appendChild(h(`<div class="lesson-cat">${esc(cat)}</div>`));
      for (const l of ls) {
        const isDone = store.lessons?.[l.id]?.done;
        const b = h(`<button class="lesson" data-id="${esc(l.id)}"><span class="em">${l.emoji || "📘"}</span>
          <span><b>${esc(l.title)}</b><div class="meta">${l.steps.length} steps · ~${l.minutes || 3} min · ${"●".repeat(l.level || 1)}${"○".repeat(3 - (l.level || 1))}</div></span>
          ${isDone ? `<span class="done">✓</span>` : ""}</button>`);
        b.onclick = () => start(l);
        list.appendChild(b);
      }
    }
  }

  // ---------- player ----------
  function start(lesson) {
    st.lesson = lesson;
    st.step = 0;
    for (const s of lesson.systems || []) app.setLayer(s, true);
    app.viewer.showAll();
    showStep();
  }

  function showStep() {
    const L = st.lesson, i = st.step, step = L.steps[i];
    const side = step.side || "right";
    const ids = matchIds(step.structures, side, L.category);
    const ctx = matchIds(step.context || [], side, L.category).filter((x) => !ids.includes(x));
    app.ensureVisible(ids);
    app.viewer.spotlight(ids, { context: ctx, ghost: 0.13, pad: 1.3 });
    labelStep(ids);
    const kbs = [...new Map(ids.map((id) => app.byId.get(id).kb).filter(Boolean).map((k) => [k.key, k])).values()];
    el.innerHTML = `<div class="card">
        <div class="qhead"><span>${L.emoji || "📘"} ${esc(L.title)}</span><span>Step ${i + 1}/${L.steps.length}</span></div>
        <div class="stepbar">${L.steps.map((_, j) => `<span class="${j <= i ? "on" : ""}"></span>`).join("")}</div>
        ${i === 0 && L.intro ? `<p class="muted">${esc(L.intro)}</p>` : ""}
        <h2>${esc(step.title)}</h2>
        <p style="font-size:15px">${esc(step.text)}</p>
        ${kbs.length ? `<details style="margin-top:8px"><summary class="muted" style="cursor:pointer">📖 Study notes (${kbs.length})</summary>${kbs.slice(0, 6).map(noteHtml).join("")}</details>` : ""}
        <div class="row" style="justify-content:space-between">
          <button class="btn" id="l-prev" ${i === 0 ? "disabled" : ""}>◀ Back</button>
          <button class="btn" id="l-ctx" title="Show or fade the rest of the body">👁 Context</button>
          <button class="btn primary" id="l-next">${i + 1 < L.steps.length ? "Next ▶" : "Finish ✓"}</button>
        </div>
      </div>
      <button class="btn" id="l-exit">✕ All lessons</button>`;
    el.querySelector("#l-prev").onclick = () => { st.step--; showStep(); };
    el.querySelector("#l-next").onclick = () => { if (st.step + 1 < L.steps.length) { st.step++; showStep(); } else finish(); };
    el.querySelector("#l-exit").onclick = () => { st.lesson = null; renderList(); app.viewer.setView("front"); };
    el.querySelector("#l-ctx").onclick = () => app.viewer.toggleContext();
    app.openPanelMobile();
  }

  function noteHtml(k) {
    const rows = [["Origin", k.origin], ["Insertion", k.insertion], ["Action", k.action], ["Nerve", k.innervation], ["Roots", k.roots], ["Motor", k.motor], ["Sensory", k.sensory], ["Function", k.function]]
      .filter(([, v]) => v).map(([l, v]) => `<dt>${l}</dt><dd>${esc(v)}</dd>`).join("");
    return `<div style="margin-top:10px"><b>${esc(k.title)}</b>${rows ? `<dl class="kv">${rows}</dl>` : `<p class="muted">${esc(k.summary || "")}</p>`}</div>`;
  }

  // One label per structure; group by study-note entry when there are many pieces.
  function labelStep(ids) {
    const groups = new Map();
    const byBase = new Set(ids.map((id) => app.byId.get(id).base)).size <= 7;
    for (const id of ids) {
      const p = app.byId.get(id);
      const key = byBase ? p.base : p.kb?.key || p.base;
      const text = byBase ? pretty(p.base) : p.kb?.title || pretty(p.base);
      const g = groups.get(key);
      if (!g || p.size > app.byId.get(g.id).size) groups.set(key, { id, text });
    }
    app.setLabels([...groups.values()].slice(0, 10));
  }

  function finish() {
    const L = st.lesson;
    st.lesson = null;
    const first = !store.lessons?.[L.id]?.done;
    (store.lessons ||= {})[L.id] = { done: true, t: Date.now() };
    saveStore();
    if (first) addXP(50); else addXP(10);
    app.viewer.clearSpotlight();
    app.setLabels([]);
    app.viewer.setView("front");
    const idx = LESSONS.indexOf(L);
    const nextL = LESSONS[idx + 1];
    el.innerHTML = `<div class="card">
        <h2>${L.emoji || "📘"} ${esc(L.title)} — done!</h2>
        <p class="muted">${first ? "+50 XP" : "+10 XP (review)"}</p>
        <h4>Key takeaways</h4>
        ${(L.takeaways || []).map((t) => `<p>✅ ${esc(t)}</p>`).join("")}
        <button class="btn primary wide" id="l-quiz" style="margin-top:10px">🎯 Quiz me on this lesson</button>
        <div class="row">${nextL ? `<button class="btn" id="l-nextl">Next: ${nextL.emoji || ""} ${esc(nextL.title)} ▶</button>` : ""}<button class="btn" id="l-all">All lessons</button></div>
      </div>`;
    el.querySelector("#l-quiz").onclick = () => {
      const units = lessonUnits(L);
      if (units.length < 4) return toast("Not enough structures for a quiz here");
      app.startCustomQuiz(units, L.title, L.category);
    };
    el.querySelector("#l-nextl")?.addEventListener("click", () => start(nextL));
    el.querySelector("#l-all").onclick = () => { st.lesson = null; renderList(); };
  }

  app.modeHandlers.learn = {
    enter: () => (st.lesson ? showStep() : renderList()),
    exit: () => { app.viewer.clearSpotlight(); app.setLabels([]); },
    onPick: (id) => {
      if (!id) return;
      const p = app.byId.get(id);
      toast(pretty(p.name));
    },
  };
}
