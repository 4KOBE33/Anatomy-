// Quiz mode: "Find it" (click in 3D), "Name it" (multiple choice on a highlighted structure),
// "Facts" (origin / insertion / action / nerve questions), plus a weak-spot review.
import { initExam } from "./exam.js";
import { pretty, sysLabel, sysColor, REGIONS, store, saveStore, addXP, recordAnswer, $, h, esc, toast, shuffle } from "./util.js";

const MODES = [
  ["find", "🎯 Find it", "We name it — you click it on the body."],
  ["name", "🏷️ Name it", "We highlight it — you pick the name."],
  ["facts", "🧠 Facts", "Origins, insertions, actions, nerves."],
  ["mix", "🔀 Mix", "All three, shuffled."],
  ["cards", "🃏 Flashcards", "Spaced repetition — review what's due today."],
  ["exam", "⏱️ Practical exam", "Timed bell-ringer: pinned structures, type the answer."],
];
const DIFF = [["easy", "Big structures"], ["med", "Medium"], ["hard", "Everything (tiny too)"]];
const QUIZ_SYSTEMS = ["muscular", "skeletal", "nerves", "nervous", "cardio", "respiratory", "digestive", "urinary", "connective", "endocrine", "reproductive", "lymphatic"];
const Q_TIME = 25;
const ROUND = 10;

export function initQuiz(app) {
  const st = {
    settings: { mode: "find", systems: new Set(["muscular"]), diff: "easy", region: "all", review: false },
    round: null,
    timer: null,
    custom: null, // { bases:Set, title } — quiz restricted to a lesson's structures
    cards: null,
  };
  const el = $("#panel-quiz");
  const exam = initExam(app, el, () => { st.settings.mode = "find"; renderSetup(); });
  app.bodyHooks.push((body) => {
    st.custom = null;
    st.settings.systems = new Set(body === "female" ? ["reproductive", "urinary", "digestive"] : ["muscular"]);
    st.settings.region = "all";
    st.settings.diff = body === "female" ? "med" : "easy";
  });

  // Show one side only (the body's right when paired) so the camera can get close.
  function oneSide(ids) {
    const right = ids.filter((id) => app.byId.get(id).side === "right");
    return right.length ? right : ids;
  }
  function biggest(ids) { return ids.reduce((a, b) => (app.byId.get(b).size > app.byId.get(a).size ? b : a)); }
  function spotlight(ids, label, cls = "") {
    const s = oneSide(ids);
    app.ensureVisible(s);
    app.viewer.spotlight(s, { ghost: 0.12, pad: 1.35 });
    app.setLabels(label ? [{ id: biggest(s), text: label, cls }] : []);
  }

  // Units = base names (side-agnostic); each has a list of part ids.
  function unitPool() {
    const s = st.settings;
    const min = { easy: 0.16, med: 0.07, hard: 0 }[s.diff];
    const pool = [];
    for (const [base, ids] of app.units) {
      const parts = ids.map((i) => app.byId.get(i));
      const p = parts[0];
      if (st.custom) {
        if (st.custom.bases.has(base)) pool.push({ base, ids, sys: p.system, center: p.center, kb: p.kb });
        continue;
      }
      if (!s.systems.has(p.system)) continue;
      if (s.region !== "all" && !parts.some((q) => q.region === s.region)) continue;
      if (Math.max(...parts.map((q) => q.size)) < min) continue;
      if (/hairs|eyebrows|^skin$/.test(base)) continue;
      pool.push({ base, ids, sys: p.system, center: p.center, kb: p.kb });
    }
    return pool;
  }

  function renderSetup() {
    clearTimer();
    app.viewer.clearMarks();
    app.viewer.clearSpotlight();
    app.setLabels([]);
    app.hoverEnabled = true;
    const s = st.settings;
    if (st.custom) return renderCustomSetup();
    if (s.mode === "exam") return exam.renderSetup();
    const pool = unitPool();
    const weak = Object.entries(store.mastery).filter(([, m]) => m.w > 0 && m.w >= m.c).length;
    el.innerHTML = `
      <div class="card">
        <h2>Quiz yourself</h2>
        <p class="muted">10 questions · faster answers + streaks = more XP.</p>
        <h4>Mode</h4><div class="opt-grid" id="q-modes"></div>
        <h4>Systems</h4><div class="seg-pick" id="q-sys"></div>
        <h4>Region</h4><div class="seg-pick" id="q-reg"></div>
        <h4>Difficulty</h4><div class="seg-pick" id="q-diff"></div>
        <p class="muted" style="margin-top:10px">${s.mode === "cards" ? `${cardDeck().filter(isDue).length} cards due · ${cardDeck().filter((c) => !store.cards?.[c.key]).length} new` : `${pool.length} structures in this pool.`}</p>
        <button class="btn primary wide" id="q-start" ${pool.length < 4 && s.mode !== "cards" ? "disabled" : ""}>${s.mode === "cards" ? "Start reviewing 🃏" : "Start round ▶"}</button>
        ${weak ? `<button class="btn wide" style="margin-top:8px" id="q-weak">🔁 Review my ${weak} weak spot${weak > 1 ? "s" : ""}</button>` : ""}
      </div>
      <div class="card"><h4 style="margin-top:0">Best round</h4><div class="score-big">${store.best || 0}</div></div>`;
    const modes = el.querySelector("#q-modes");
    for (const [k, l, d] of MODES) {
      const b = h(`<button class="opt ${s.mode === k ? "right" : ""}">${l}<br><span class="muted" style="font-weight:500;font-size:12px">${d}</span></button>`);
      b.onclick = () => { s.mode = k; renderSetup(); };
      modes.appendChild(b);
    }
    const sysEl = el.querySelector("#q-sys");
    const present = new Set(app.parts.map((p) => p.system));
    for (const k of QUIZ_SYSTEMS.filter((x) => present.has(x))) {
      const b = h(`<button class="${s.systems.has(k) ? "on" : ""}"><span class="swatch" style="display:inline-block;background:${sysColor(k)};margin-right:5px"></span>${esc(sysLabel(k))}</button>`);
      b.onclick = () => { s.systems.has(k) ? s.systems.size > 1 && s.systems.delete(k) : s.systems.add(k); renderSetup(); };
      sysEl.appendChild(b);
    }
    const regEl = el.querySelector("#q-reg");
    for (const [k, l] of REGIONS) {
      const b = h(`<button class="${s.region === k ? "on" : ""}">${l}</button>`);
      b.onclick = () => { s.region = k; renderSetup(); };
      regEl.appendChild(b);
    }
    const dEl = el.querySelector("#q-diff");
    for (const [k, l] of DIFF) {
      const b = h(`<button class="${s.diff === k ? "on" : ""}">${l}</button>`);
      b.onclick = () => { s.diff = k; renderSetup(); };
      dEl.appendChild(b);
    }
    el.querySelector("#q-start").onclick = () => (s.mode === "cards" ? startCards() : startRound(false));
    el.querySelector("#q-weak")?.addEventListener("click", () => startRound(true));
  }

  // ---------- question building ----------
  function nearest(unit, pool, n) {
    const d = (a) => Math.hypot(a.center[0] - unit.center[0], a.center[1] - unit.center[1], a.center[2] - unit.center[2]);
    return pool.filter((u) => u.base !== unit.base && displayName(u) !== displayName(unit))
      .sort((a, b) => d(a) - d(b)).slice(0, n * 3);
  }
  function displayName(u) { return pretty(u.base); }

  const FACT_FIELDS = [
    ["innervation", (t) => `What is the nerve supply of the <b>${t}</b>?`],
    ["action", (t) => `What is the main action of the <b>${t}</b>?`],
    ["origin", (t) => `Where does the <b>${t}</b> originate?`],
    ["insertion", (t) => `Where does the <b>${t}</b> insert?`],
    ["function", (t) => `What is the main function of the <b>${t}</b>?`],
    ["blood", (t) => `What is the main blood supply of the <b>${t}</b>?`],
    ["roots", (t) => `What are the spinal roots of the <b>${t}</b>?`],
    ["motor", (t) => `Which muscles does the <b>${t}</b> supply?`],
    ["sensory", (t) => `What skin area does the <b>${t}</b> supply?`],
  ];
  function factQuestion(unit, pool) {
    const kb = unit.kb;
    if (!kb) return null;
    const kbs = [...new Set(pool.map((u) => u.kb).filter(Boolean))];
    const fields = shuffle(FACT_FIELDS.filter(([f]) => kb[f]));
    for (const [f, q] of fields) {
      const others = shuffle(kbs.filter((k) => k !== kb && k[f] && k[f] !== kb[f] && k.kind === kb.kind));
      const opts = [...new Set(others.map((k) => k[f]))].slice(0, 3);
      if (opts.length < 3) continue;
      // Reverse question sometimes: give the fact, ask for the structure.
      if (Math.random() < 0.4 && (f === "action" || f === "function" || f === "innervation" || f === "motor")) {
        const titles = shuffle(others.filter((k) => k.title !== kb.title)).map((k) => k.title);
        const uniq = [...new Set(titles)].slice(0, 3);
        if (uniq.length === 3) {
          return { type: "facts", reverse: true, unit, prompt: `Which structure matches: <b>${esc(clip(kb[f]))}</b>`, label: f === "innervation" ? "Nerve supply" : f === "action" ? "Action" : "Function", answer: kb.title, options: shuffle([kb.title, ...uniq]) };
        }
      }
      return { type: "facts", unit, prompt: q(esc(kb.title)), label: kb.title, answer: kb[f], options: shuffle([kb[f], ...opts]) };
    }
    return null;
  }
  function clip(s) { return s.length > 160 ? s.slice(0, 157) + "…" : s; }

  function buildQuestions(pool, review) {
    let picks;
    if (review) {
      const weak = new Set(Object.entries(store.mastery).filter(([, m]) => m.w > 0 && m.w >= m.c).map(([k]) => k));
      const all = [];
      for (const [base, ids] of app.units) if (weak.has(base)) { const p = app.byId.get(ids[0]); all.push({ base, ids, sys: p.system, center: p.center, kb: p.kb }); }
      picks = shuffle(all).slice(0, ROUND);
      pool = all.length >= 6 ? pool.concat(all) : pool.concat(all);
    } else {
      // weight toward less-mastered units
      const w = pool.map((u) => { const m = store.mastery[u.base]; return { u, k: Math.random() * (1 + (m ? (m.w + 1) / (m.c + 1) : 1.2)) }; });
      picks = w.sort((a, b) => b.k - a.k).map((x) => x.u);
    }
    const qs = [];
    for (const unit of picks) {
      if (qs.length >= ROUND) break;
      let type = st.settings.mode === "mix" ? ["find", "name", "facts"][(Math.random() * 3) | 0] : st.settings.mode;
      if (review || st.custom || type === "cards") type = ["find", "name"][(Math.random() * 2) | 0];
      if (type === "facts") {
        const q = factQuestion(unit, pool);
        if (q) { qs.push(q); continue; }
        if (st.settings.mode === "facts") continue;
        type = "name";
      }
      if (type === "name") {
        const ds = shuffle(nearest(unit, pool, 3));
        const names = [...new Set(ds.map(displayName))].slice(0, 3);
        if (names.length < 3) continue;
        qs.push({ type, unit, answer: displayName(unit), options: shuffle([displayName(unit), ...names]) });
      } else qs.push({ type: "find", unit, answer: displayName(unit) });
    }
    return qs;
  }

  // ---------- round flow ----------
  function startRound(review) {
    const pool = unitPool();
    const qs = buildQuestions(pool, review);
    if (qs.length < 3) { toast(st.settings.mode === "facts" ? "Not enough study notes for this pool — try Muscles" : "Pool too small — add systems"); return; }
    st.round = { qs, i: 0, score: 0, streak: 0, bestStreak: 0, correct: 0, missed: [], review };
    if (!st.custom) for (const s of st.settings.systems) app.setLayer(s, true);
    for (const u of pool) app.ensureVisible(u.ids.slice(0, 1));
    app.viewer.showAll();
    ask();
  }

  function ask() {
    const r = st.round;
    const q = r.qs[r.i];
    q.answered = false;
    q.t0 = performance.now();
    app.viewer.clearMarks();
    app.viewer.clearSpotlight();
    app.setLabels([]);
    app.selectedId = null;
    app.hoverEnabled = false; // no name-tooltips: that would give the answer away
    app.ensureVisible(q.unit.ids);
    let body = "";
    if (q.type === "find") {
      body = `<div class="prompt"><small>Find &amp; tap</small>${esc(q.answer)}</div>
        <p class="muted" style="font-size:13px">Either side counts. Deep structure? Use <b>Hide</b> to peel layers away, rotate to look behind.</p>
        <div class="row"><button class="btn" id="q-hint">💡 Hint (−50%)</button><button class="btn" id="q-skip">Show me</button></div>`;
      app.viewer.setView("front");
    } else if (q.type === "name") {
      body = `<div class="prompt"><small>What is the highlighted structure?</small></div>
        <div class="row" style="margin-top:4px"><button class="btn" id="q-ctx" title="Show or fade the rest of the body">👁 Context</button><button class="btn" id="q-refocus">🎯 Re-center</button></div>
        <div class="opt-grid" id="q-opts"></div>`;
      spotlight(q.unit.ids);
    } else {
      body = `<div class="prompt" style="font-size:17px"><small>${esc(sysLabel(q.unit.sys))}</small>${q.prompt}</div><div class="opt-grid" id="q-opts"></div>`;
      if (!q.reverse) spotlight(q.unit.ids, q.unit.kb?.title);
      else app.viewer.setView("front");
    }
    el.innerHTML = `<div class="card">
      <div class="qhead"><span>Question ${r.i + 1}/${r.qs.length}</span><span>Score <b style="color:var(--text)">${r.score}</b></span>${r.streak > 1 ? `<span class="streak">🔥 ${r.streak}</span>` : "<span></span>"}</div>
      <div class="timer"><div id="q-timer" style="width:100%"></div></div>
      ${body}
      <div id="q-fb"></div>
      </div>
      <button class="btn" id="q-quit">✕ End round</button>`;
    if (q.options) {
      const box = el.querySelector("#q-opts");
      for (const o of q.options) {
        const b = h(`<button class="opt">${esc(o)}</button>`);
        b.onclick = () => answer(o === q.answer, b, o);
        box.appendChild(b);
      }
    }
    el.querySelector("#q-hint")?.addEventListener("click", () => {
      q.hinted = true;
      app.viewer.focusSmart(q.unit.ids);
      toast("Look where the camera points 👀");
    });
    el.querySelector("#q-skip")?.addEventListener("click", () => answer(false, null, null));
    el.querySelector("#q-ctx")?.addEventListener("click", () => app.viewer.toggleContext());
    el.querySelector("#q-refocus")?.addEventListener("click", () => spotlight(q.unit.ids));
    el.querySelector("#q-quit").onclick = finish;
    startTimer();
    app.openPanelMobile();
  }

  function startTimer() {
    clearTimer();
    const r = st.round, q = r.qs[r.i];
    st.timer = setInterval(() => {
      const left = Math.max(0, Q_TIME - (performance.now() - q.t0) / 1000);
      const bar = $("#q-timer");
      if (bar) { bar.style.width = (left / Q_TIME) * 100 + "%"; bar.style.backgroundPosition = `${(left / Q_TIME) * 100}% 0`; }
      if (left <= 0 && !q.answered) { q.timedOut = true; clearTimer(); }
    }, 100);
  }
  function clearTimer() { clearInterval(st.timer); st.timer = null; }

  function answer(ok, btn, picked) {
    const r = st.round, q = r.qs[r.i];
    if (q.answered) return;
    q.answered = true;
    clearTimer();
    const secs = (performance.now() - q.t0) / 1000;
    let pts = 0;
    if (ok) {
      r.streak++; r.correct++;
      r.bestStreak = Math.max(r.bestStreak, r.streak);
      const speed = Math.max(0, Q_TIME - secs) / Q_TIME;
      pts = Math.round((100 + 60 * speed) * (1 + Math.min(r.streak - 1, 5) * 0.1) * (q.hinted ? 0.5 : 1));
      r.score += pts;
    } else {
      r.streak = 0;
      r.missed.push(q);
    }
    recordAnswer(q.unit.base, ok);
    // reveal
    el.querySelectorAll(".opt").forEach((b) => {
      if (b.textContent === q.answer) b.classList.add("right");
      else if (b === btn) b.classList.add("wrong");
      b.disabled = true;
    });
    const shown = q.clickedSide ? q.unit.ids.filter((id) => app.byId.get(id).side === q.clickedSide) : q.unit.ids;
    spotlight(shown.length ? shown : q.unit.ids, pretty(q.unit.base), ok ? "ok" : "");
    app.viewer.select([]);
    app.viewer.mark(oneSide(shown.length ? shown : q.unit.ids), ok ? 0x3ddc84 : 0xff5d5d);
    const kb = q.unit.kb;
    const extra = kb && q.type !== "facts" ? `<div class="muted" style="font-weight:500;margin-top:4px">${esc(kb.summary || "")}</div>` : "";
    const fb = $("#q-fb");
    fb.innerHTML = `<div class="feedback ${ok ? "ok" : "no"}">${ok ? `✅ Correct! +${pts}` : `❌ ${picked ? "Not quite." : ""} It's <b>${esc(q.type === "facts" ? q.answer : q.answer)}</b>`}${q.type === "facts" && !ok ? "" : ""}${extra}</div>
      <button class="btn primary wide" style="margin-top:10px" id="q-next">${r.i + 1 < r.qs.length ? "Next ▶" : "See results"}</button>`;
    fb.querySelector("#q-next").onclick = next;
    el.querySelector("#q-hint")?.remove();
    el.querySelector("#q-skip")?.remove();
    if (ok) st.autoNext = setTimeout(next, 1600);
  }

  function next() {
    clearTimeout(st.autoNext);
    const r = st.round;
    if (!r) return;
    r.i++;
    if (r.i >= r.qs.length) finish();
    else ask();
  }

  function finish() {
    clearTimer();
    clearTimeout(st.autoNext);
    const r = st.round;
    if (!r) return renderSetup();
    st.round = null;
    app.hoverEnabled = true;
    app.viewer.clearMarks();
    app.viewer.clearSpotlight();
    app.setLabels([]);
    app.viewer.setView("front");
    const answered = r.qs.filter((q) => q.answered).length;
    const acc = answered ? Math.round((r.correct / answered) * 100) : 0;
    const xp = Math.round(r.score / 8) + (acc === 100 && answered >= ROUND ? 50 : 0);
    if (answered) {
      store.rounds++;
      store.best = Math.max(store.best || 0, r.score);
      if (acc === 100 && answered >= ROUND) store.perfect = (store.perfect || 0) + 1;
      saveStore();
      addXP(xp);
    }
    el.innerHTML = `<div class="card">
      <h2>${acc >= 90 ? "🏆 Outstanding!" : acc >= 70 ? "💪 Nice work!" : acc >= 40 ? "📈 Getting there" : "🧠 Keep studying"}</h2>
      <div class="score-big">${r.score}</div>
      <div class="stats"><div><b>${acc}%</b>Accuracy</div><div><b>${r.bestStreak}</b>Best streak</div><div><b>+${xp}</b>XP</div></div>
      ${r.missed.length ? `<h4>Review these (tap to view)</h4><div class="parts-list" id="q-missed"></div>` : answered ? `<p>Perfect round — no misses!</p>` : ""}
      <div class="row"><button class="btn primary" id="q-again">Play again</button><button class="btn" id="q-setup">Change settings</button></div>
    </div>`;
    const m = el.querySelector("#q-missed");
    for (const q of r.missed) {
      const b = h(`<button>${esc(pretty(q.unit.base))}</button>`);
      b.onclick = () => app.selectGroup(q.unit.ids);
      m?.appendChild(b);
    }
    el.querySelector("#q-again").onclick = () => startRound(r.review);
    el.querySelector("#q-setup").onclick = () => { st.custom = null; renderSetup(); };
  }

  function onPick(id) {
    const r = st.round;
    if (exam.active()) return; // exam: tapping doesn't reveal anything
    if (st.cards) return; // flashcards: tapping just lets you rotate/explore the view
    if (!r) { if (id) app.selectPart(id); return; }
    const q = r.qs[r.i];
    if (q.type !== "find" || q.answered || !id) return;
    const p = app.byId.get(id);
    if (p.base === q.unit.base) { q.clickedSide = p.side; answer(true); }
    else {
      app.viewer.mark([id], 0xff5d5d);
      setTimeout(() => app.viewer.unmark(id), 700);
      $("#q-fb").innerHTML = `<div class="feedback no">That's the <b>${esc(pretty(p.base))}</b> — try again${q.tries ? "" : " (one more go)"}</div>`;
      q.tries = (q.tries || 0) + 1;
      if (q.tries >= 2) answer(false, null, p.base);
    }
  }

  // ---------- lesson quiz ----------
  function renderCustomSetup() {
    const pool = unitPool();
    el.innerHTML = `<div class="card">
        <h2>🎯 Lesson quiz</h2>
        <p><b>${esc(st.custom.title)}</b> — ${pool.length} structures</p>
        <p class="muted">A mix of “find it” and “name it”. Each question spotlights the structure.</p>
        <button class="btn primary wide" id="q-start">Start ▶</button>
        <button class="btn wide" style="margin-top:8px" id="q-clear">Back to normal quizzes</button>
      </div>`;
    el.querySelector("#q-start").onclick = () => startRound(false);
    el.querySelector("#q-clear").onclick = () => { st.custom = null; renderSetup(); };
  }
  app.startCustomQuiz = (bases, title) => {
    st.custom = { bases: new Set(bases), title };
    app.switchMode("quiz");
    startRound(false);
  };

  // ---------- flashcards (spaced repetition) ----------
  const DAY = 864e5;
  function cardDeck() {
    const map = new Map();
    for (const p of app.parts) {
      if (!p.kb || !st.settings.systems.has(p.system)) continue;
      if (!map.has(p.kb.key)) map.set(p.kb.key, { key: p.kb.key, kb: p.kb, ids: [] });
      map.get(p.kb.key).ids.push(p.id);
    }
    return [...map.values()];
  }
  const isDue = (c) => { const r = store.cards?.[c.key]; return r && r.due <= Date.now(); };
  function startCards() {
    const deck = cardDeck();
    const due = shuffle(deck.filter(isDue));
    const fresh = shuffle(deck.filter((c) => !store.cards?.[c.key])).sort((a, b) => Math.max(...b.ids.map((i) => app.byId.get(i).size)) - Math.max(...a.ids.map((i) => app.byId.get(i).size)));
    const queue = [...due, ...fresh.slice(0, 10)];
    if (!queue.length) return toast("All caught up! 🎉 Come back tomorrow.");
    st.cards = { queue, done: 0, total: queue.length };
    showCard();
  }
  function nextIntervals(rec) {
    const iv = rec?.iv || 0, ease = rec?.ease || 2.5;
    return {
      again: 0,
      hard: Math.max(1, Math.round(iv * 1.2) || 1),
      good: iv ? Math.round(iv * ease) : 1,
      easy: iv ? Math.round(iv * ease * 1.4) : 4,
    };
  }
  function showCard() {
    const c = st.cards.queue[0];
    if (!c) return finishCards();
    app.hoverEnabled = false;
    spotlight(c.ids);
    const fields = c.kb.kind === "muscle" ? "origin · insertion · action · nerve" : c.kb.kind === "nerve" ? "roots · course · muscles supplied · injury sign" : "function · key features";
    el.innerHTML = `<div class="card flash">
        <div class="qhead"><span>🃏 Flashcards</span><span>${st.cards.done}/${st.cards.total}</span></div>
        <div class="q" style="margin-top:10px">What is the highlighted structure?</div>
        <p class="muted">Say the name, then recall its ${fields}. Rotate the body if you need to.</p>
        <button class="btn primary wide" id="c-flip">Show answer</button>
      </div><button class="btn" id="c-quit">✕ Stop</button>`;
    el.querySelector("#c-flip").onclick = () => flip(c);
    el.querySelector("#c-quit").onclick = finishCards;
    app.openPanelMobile();
  }
  function flip(c) {
    const k = c.kb;
    app.setLabels([{ id: biggest(oneSide(c.ids)), text: k.title }]);
    const rows = [["Origin", k.origin], ["Insertion", k.insertion], ["Action", k.action], ["Nerve", k.innervation], ["Blood", k.blood], ["Roots", k.roots], ["Motor", k.motor], ["Sensory", k.sensory], ["Function", k.function]]
      .filter(([, v]) => v).map(([l, v]) => `<dt>${l}</dt><dd>${esc(v)}</dd>`).join("");
    const iv = nextIntervals(store.cards?.[c.key]);
    const fmt = (d) => (d === 0 ? "<1m" : d === 1 ? "1d" : d < 30 ? `${d}d` : `${Math.round(d / 30)}mo`);
    el.innerHTML = `<div class="card">
        <div class="qhead"><span>🃏 Flashcards</span><span>${st.cards.done}/${st.cards.total}</span></div>
        <h2 style="margin-top:8px">${esc(k.title)}</h2>
        ${k.summary ? `<p class="muted">${esc(k.summary)}</p>` : ""}
        ${rows ? `<dl class="kv">${rows}</dl>` : ""}
        ${k.features?.length ? `<p>${k.features.slice(0, 6).map(esc).join(" · ")}</p>` : ""}
        ${k.clinical ? `<div class="note clin"><b>Clinical:</b> ${esc(k.clinical)}</div>` : ""}
        <p class="muted" style="margin:12px 0 0;font-size:12px">How well did you know it?</p>
        <div class="rate">
          <button class="again" data-r="again">Again<small>${fmt(iv.again)}</small></button>
          <button class="hard" data-r="hard">Hard<small>${fmt(iv.hard)}</small></button>
          <button class="good" data-r="good">Good<small>${fmt(iv.good)}</small></button>
          <button class="easy" data-r="easy">Easy<small>${fmt(iv.easy)}</small></button>
        </div>
      </div><button class="btn" id="c-quit">✕ Stop</button>`;
    el.querySelectorAll(".rate button").forEach((b) => (b.onclick = () => rate(c, b.dataset.r)));
    el.querySelector("#c-quit").onclick = finishCards;
  }
  function rate(c, r) {
    const cards = (store.cards ||= {});
    const rec = cards[c.key] || { iv: 0, ease: 2.5, reps: 0 };
    const iv = nextIntervals(rec)[r];
    rec.ease = Math.max(1.3, rec.ease + { again: -0.2, hard: -0.15, good: 0, easy: 0.15 }[r]);
    rec.iv = iv;
    rec.reps++;
    rec.due = Date.now() + (iv === 0 ? 60e3 : iv * DAY);
    cards[c.key] = rec;
    store.reviews = (store.reviews || 0) + 1;
    recordAnswer(app.byId.get(c.ids[0]).base, r !== "again");
    st.cards.queue.shift();
    if (r === "again") st.cards.queue.splice(Math.min(3, st.cards.queue.length), 0, c);
    else st.cards.done++;
    saveStore();
    addXP(r === "again" ? 1 : 3);
    app.setLabels([]);
    showCard();
  }
  function finishCards() {
    const done = st.cards?.done || 0;
    st.cards = null;
    app.viewer.clearSpotlight();
    app.setLabels([]);
    app.hoverEnabled = true;
    app.viewer.setView("front");
    const tomorrow = Object.values(store.cards || {}).filter((r) => r.due <= Date.now() + DAY).length;
    el.innerHTML = `<div class="card" style="text-align:center"><div style="font-size:48px">🃏</div>
      <h2>${done} card${done === 1 ? "" : "s"} reviewed</h2>
      <p class="muted">${tomorrow} due within a day. Short daily reviews beat cramming — spaced repetition moves cards you know further out.</p>
      <button class="btn primary" id="c-back">Done</button></div>`;
    el.querySelector("#c-back").onclick = renderSetup;
  }

  app.modeHandlers.quiz = {
    enter: () => { app.viewer.select([]); app.selectedId = null; renderSetup(); },
    exit: () => {
      exam.abort();
      clearTimer(); clearTimeout(st.autoNext);
      app.viewer.clearMarks(); app.viewer.clearSpotlight(); app.setLabels([]);
      app.hoverEnabled = true;
      st.round = null; st.cards = null;
    },
    onPick,
  };
}
