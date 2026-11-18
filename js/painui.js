// "What hurts?" mode: free-text or tap-on-body pain lookup -> structures highlighted in 3D,
// common causes, red flags, and a guided exercise routine with timers.
import { PAIN_REGIONS, GLOBAL_RED_FLAGS, DISCLAIMER, matchPain } from "./data/pain.js";
import { confetti, doneBadge } from "./fx.js";
import { icon } from "./icons.js";
import { pretty, store, saveStore, addXP, $, h, esc, toast } from "./util.js";
let POSES = {};
try { ({ POSES } = await import("./data/exercise_poses.js")); } catch { /* demos not available */ }

const MODE_LABEL = { stretch: ["#46a8ff", "blue = muscles being stretched"], work: ["#ff4a3d", "red = muscles working"], mobility: ["#ffa43d", "orange = muscles moving through range"] };

const PAIN_COLOR = 0xff8a3d;

export function initPain(app) {
  const el = $("#panel-pain");
  const st = { region: null, others: [], prev: null, playing: null, tapMode: false, severity: 3, text: "" };

  const idsFor = (subs) => {
    const ss = (subs || []).map((s) => s.toLowerCase());
    return app.parts.filter((p) => ss.some((s) => p.base.toLowerCase().includes(s))).map((p) => p.id);
  };

  function render() {
    el.innerHTML = `
      <div class="card">
        <h2>What's hurting?</h2>
        <div class="pain-input" style="margin-top:10px">
          <input id="p-text" placeholder="e.g. outside of my knee when I run" value="${esc(st.text)}" />
          <button class="btn primary" id="p-go">Go</button>
        </div>
        <p class="muted tiny">…or tap the spot on the body. <button class="linkbtn" id="p-browse">Browse areas</button><button class="linkbtn hidden" id="p-tap"></button></p>
        <div class="sev">Pain <input type="range" min="0" max="10" value="${st.severity}" id="p-sev" /><b id="p-sev-v">${st.severity}</b></div>
        <div class="chips region-chips hidden" id="p-areas"></div>
        ${app.body === "female" ? `<p class="muted tiny">3D highlights and demos use the male body. <button class="linkbtn" id="p-tomale">Switch to male</button></p>` : ""}
      </div>
      <div id="p-result"></div>
      <p class="muted tiny">${esc(DISCLAIMER)}</p>`;
    const input = el.querySelector("#p-text");
    const go = () => { st.text = input.value; search(input.value); };
    el.querySelector("#p-go").onclick = go;
    el.querySelector("#p-tomale")?.addEventListener("click", () => app.loadBody("male").then(() => app.switchMode("pain")));
    input.addEventListener("keydown", (e) => e.key === "Enter" && go());
    el.querySelector("#p-tap").onclick = () => { toast("Tap the spot on the body that hurts"); app.viewer.setView("front"); };
    el.querySelector("#p-sev").oninput = (e) => {
      st.severity = +e.target.value;
      el.querySelector("#p-sev-v").textContent = st.severity;
      renderResult();
    };
    const areas = el.querySelector("#p-areas");
    for (const r of PAIN_REGIONS) {
      const b = h(`<button class="${st.region === r ? "on" : ""}">${esc(r.name)}</button>`);
      b.onclick = () => showRegion(r, []);
      areas.appendChild(b);
    }
    el.querySelector("#p-browse").onclick = () => areas.classList.toggle("hidden");
    renderResult();
  }

  function search(text) {
    const res = matchPain(text || "");
    if (!res.length) {
      el.querySelector("#p-result").innerHTML = `<div class="card empty"><div class="big">${icon("explore")}</div>I couldn't place that. Try words like “lower back”, “knee”, “heel”, or tap the body.</div>`;
      return;
    }
    showRegion(res[0].region, res.slice(1, 4).map((r) => r.region));
  }

  function showRegion(region, others, { fromTap = false } = {}) {
    stopDemo({ remark: false });
    // a tap on the body that lands somewhere new can be undone with "Back"
    st.prev = fromTap && st.region && st.region !== region ? { region: st.region, others: st.others } : null;
    st.region = region;
    st.others = others;
    st.tapMode = false;
    const ids = idsFor(region.structures);
    for (const s of ["muscular", "skeletal", "connective"]) app.setLayer(s, true);
    app.viewer.showAll();
    app.viewer.clearMarks();
    app.viewer.select([]);
    app.viewer.mark(ids, PAIN_COLOR);
    if (ids.length) app.viewer.focusSmart(ids);
    render();
    app.openPanelMobile();
  }

  function renderResult() {
    const box = el.querySelector("#p-result");
    if (!box) return;
    const r = st.region;
    if (!r) {
      box.innerHTML = `<p class="muted" style="margin:0 0 14px">You'll see the muscles involved on the body and a short routine to do at home.</p>`;
      return;
    }
    const sev = st.severity;
    const sevNote = sev >= 8
      ? `<div class="alert red"><b>That's a lot of pain.</b> At ${sev}/10, please get it checked by a doctor or physio before exercising — especially if it came on suddenly or after an injury.</div>`
      : sev >= 6 ? `<div class="alert amber">Keep exercises gentle and pain-free. Mild discomfort (≤3/10) is okay; sharp or worsening pain means stop.</div>` : "";
    const flags = [...(r.redFlags || [])];
    let html = `${sevNote}<div class="card">
      <div class="res-head"><h2>${esc(r.name)}</h2>
        <button class="icon-btn sm" id="p-clear" title="Clear and pick another spot" aria-label="Clear">${icon("close")}</button></div>
      ${st.prev ? `<button class="back-chip" id="p-back">${icon("back")}Go back to ${esc(st.prev.region.name)}</button>` : ""}
      ${st.others.length ? `<div class="chips region-chips">Or: ${st.others.map((o, i) => `<button data-o="${i}">${esc(o.name)}</button>`).join("")}</div>` : ""}
      <button class="btn primary wide" style="margin-top:12px" id="p-start">${icon("play")}Start guided routine · ${r.exercises.length} exercises</button>
      <div id="p-ex"></div>
      <details class="fold"><summary>Why it hurts</summary>
        ${(r.causes || []).map((c) => `<p><b>${esc(c.name)}</b> — <span class="muted">${esc(c.note)}</span></p>`).join("")}
        ${r.tips?.length ? `<h4>Tips</h4>${r.tips.map((t) => `<p>• ${esc(t)}</p>`).join("")}` : ""}
        <h4>Structures involved</h4>
        <div class="parts-list">${[...new Set(r.structures)].map((s) => `<button data-s="${esc(s)}">${esc(pretty(s))}</button>`).join("")}</div>
      </details>
      <details class="fold flags"><summary>When to see a ${esc(r.seeA || "professional")}</summary>
        <ul>${flags.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
        <h4>General warning signs</h4><ul>${GLOBAL_RED_FLAGS.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
      </details>
    </div>`;
    box.innerHTML = html;
    box.querySelector("#p-clear").onclick = clearRegion;
    box.querySelector("#p-back")?.addEventListener("click", () => showRegion(st.prev.region, st.prev.others));
    box.querySelectorAll("[data-o]").forEach((b) => (b.onclick = () => showRegion(st.others[+b.dataset.o], [st.region, ...st.others.filter((_, i) => i !== +b.dataset.o)])));
    box.querySelectorAll("[data-s]").forEach((b) => (b.onclick = () => {
      const ids = idsFor([b.dataset.s]);
      if (!ids.length) return toast("Not in the 3D model");
      app.viewer.select(ids);
      app.viewer.focusSmart(ids);
    }));
    const exBox = box.querySelector("#p-ex");
    r.exercises.forEach((ex, i) => {
      const card = h(`<div class="ex">
        <div class="ex-head"><b>${i + 1}. ${esc(ex.name)}</b><span class="type ${esc(ex.type)}">${esc(ex.type)}</span></div>
        <div class="muted" style="font-size:12px">${doseText(ex.dose)} · ${"●".repeat(ex.level || 1)}${"○".repeat(3 - (ex.level || 1))}</div>
        <div class="ex-body hidden"><ol>${ex.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>${ex.cue ? `<div class="cue">${icon("facts")}${esc(ex.cue)}</div>` : ""}</div>
        ${POSES[`${r.id}|${ex.name}`]?.dofs ? `<button class="watch-btn" title="Watch the body do this exercise"></button>` : ""}
      </div>`);
      card.dataset.ex = ex.name;
      const watch = card.querySelector(".watch-btn");
      watch?.addEventListener("click", (e) => {
        e.stopPropagation();
        st.playing === ex.name ? stopDemo() : playDemo(r, ex);
      });
      card.querySelector(".ex-head").onclick = () => {
        const body = card.querySelector(".ex-body");
        const opening = body.classList.contains("hidden");
        body.classList.toggle("hidden");
        if (opening && watch) { if (st.playing !== ex.name) playDemo(r, ex); return; }
        if (watch) return;
        const ids = idsFor(ex.target);
        app.viewer.select(ids);
        if (ids.length) app.viewer.focusSmart(ids);
      };
      exBox.appendChild(card);
    });
    box.querySelector("#p-start").onclick = () => startRoutine(r);
    syncWatch();
  }

  // ---------- exercise demos in the result list ----------
  function playDemo(region, ex) {
    // building the rig takes a moment: show that the tap registered, then build on the next frame
    const btn = [...el.querySelectorAll("#p-ex .ex")].find((c) => c.dataset.ex === ex.name)?.querySelector(".watch-btn");
    if (btn) { btn.classList.add("on"); btn.innerHTML = `${icon("play")}Loading…`; }
    const token = (st.demoToken = (st.demoToken || 0) + 1);
    setTimeout(() => requestAnimationFrame(() => {
      if (token !== st.demoToken || st.region !== region) return; // something else was tapped meanwhile
      const d = demoFor(region, ex);
      if (d.none) { toast(d.none); syncWatch(); return; }
      st.playing = ex.name;
      syncWatch(d);
      showNowPlaying(ex, d);
    }), 30);
  }
  function stopDemo({ remark = true } = {}) {
    st.demoToken = (st.demoToken || 0) + 1; // cancels a demo that's still loading
    const was = st.playing;
    st.playing = null;
    hideNowPlaying();
    if (!was) { syncWatch(); return; }
    app.motion?.stop();
    syncWatch();
    if (remark && st.region) app.viewer.mark(idsFor(st.region.structures), PAIN_COLOR);
  }
  // buttons + legend follow whichever exercise is playing
  function syncWatch(spec) {
    el.querySelectorAll("#p-ex .ex").forEach((card) => {
      const on = card.dataset.ex === st.playing;
      const b = card.querySelector(".watch-btn");
      if (b) { b.classList.toggle("on", on); b.innerHTML = on ? `${icon("pause")}Stop` : `${icon("play")}Watch it`; }
      card.classList.toggle("playing", on);
      if (!on) card.querySelector(".demo-note")?.remove();
      else if (spec && !card.querySelector(".demo-note")) card.appendChild(h(`<div class="demo-note">${demoLegend(spec)}</div>`));
    });
  }
  function nowBar() {
    let bar = $("#now-playing");
    if (!bar) {
      bar = h(`<div class="now-playing hidden" id="now-playing"></div>`);
      $("#stage").appendChild(bar);
    }
    return bar;
  }
  function showNowPlaying(ex, d) {
    const [col, txt] = MODE_LABEL[d.mode] || MODE_LABEL.mobility;
    const bar = nowBar();
    bar.innerHTML = `<span class="ph-dot" style="background:${col};box-shadow:0 0 8px ${col}"></span>
      <div class="np-text"><b>${esc(ex.name)}</b><span>${esc(txt)}</span></div>
      <button class="np-stop" title="Stop the demo" aria-label="Stop the demo">${icon("close")}</button>`;
    bar.querySelector(".np-stop").onclick = () => stopDemo();
    bar.classList.remove("hidden");
  }
  function hideNowPlaying() { $("#now-playing")?.classList.add("hidden"); }

  function clearRegion() {
    stopDemo({ remark: false });
    st.region = null; st.others = []; st.prev = null; st.text = "";
    app.viewer.clearMarks();
    app.viewer.select([]);
    app.viewer.setView("front");
    render();
  }

  function doseText(d = {}) {
    const sets = d.sets ? `${d.sets} × ` : "";
    if (d.holdSec) return `${sets}${d.holdSec}s hold`;
    if (d.reps) return `${sets}${d.reps} reps`;
    return "as tolerated";
  }

  // ---------- tap to locate ----------
  function regionFromPart(id) {
    const p = app.byId.get(id);
    const name = p.base.toLowerCase();
    const scored = PAIN_REGIONS.map((r) => ({ r, s: (r.structures || []).reduce((a, s, i) => a + (name.includes(s.toLowerCase()) ? (10 + s.length * 0.2) * (i === 0 ? 1.6 : i < 3 ? 1.25 : 1) : 0), 0) }))
      .filter((x) => x.s > 0).sort((a, b) => b.s - a.s);
    if (scored.length) {
      // several regions may share a muscle — break ties by distance to the region's structures
      const top = scored.filter((x) => x.s >= scored[0].s * 0.95).map((x) => x.r);
      const ranked = rankByDistance(top, p.center);
      return [ranked[0], ...ranked.slice(1), ...scored.map((x) => x.r).filter((r) => !top.includes(r))];
    }
    return rankByDistance(PAIN_REGIONS, p.center);
  }
  function rankByDistance(regions, c) {
    const dist = (r) => {
      let best = Infinity;
      for (const id of idsFor(r.structures)) {
        const q = app.byId.get(id);
        if (Math.sign(q.center[0]) !== Math.sign(c[0]) && Math.abs(q.center[0]) > 0.05 && Math.abs(c[0]) > 0.05) continue;
        best = Math.min(best, Math.hypot(q.center[0] - c[0], q.center[1] - c[1], q.center[2] - c[2]));
      }
      return best;
    };
    return regions.map((r) => ({ r, d: dist(r) })).sort((a, b) => a.d - b.d).map((x) => x.r);
  }
  function fromPart(id) {
    const ranked = regionFromPart(id);
    if (ranked.length) showRegion(ranked[0], ranked.slice(1, 4), { fromTap: true });
  }
  app.pain = { fromPart };

  // ---------- routine player ----------
  // Play an exercise on the 3D skeleton. Returns the pose spec (or a reason it can't be shown).
  function demoFor(region, ex) {
    const raw = POSES[`${region.id}|${ex.name}`];
    if (!raw?.dofs) return { none: raw?.note || "No 3D demo for this one — follow the steps." };
    if (app.body !== "male") return { none: "3D demos use the male body's full skeleton and muscles — switch with ♂ at the top." };
    const posture = postureFor(ex, raw);
    // lying exercises are now shown lying down, so drop the "Shown standing —" apology from the note
    const note = posture && raw.note ? raw.note.replace(/^Shown (standing|upright)( as [^—]*)? — (\w)/i, (_, a, b, c) => c.toUpperCase()) : raw.note;
    const spec = { ...raw, posture, note };
    app.motion.demo(spec);
    return spec;
  }
  // Lying exercises get laid down on a mat. Bridges and trunk rotations need the pelvis or the left side
  // to move (the rig can't), and planks need both arms, so those stay standing with their note.
  const STAY_STANDING = /^(glute bridge|single-leg bridge|lower trunk rotation|side-lying adduction)$/i;
  function postureFor(ex, spec) {
    const n = (spec.note || "").toLowerCase();
    if (STAY_STANDING.test(ex.name) || n.startsWith("shown upright")) return null;
    if (/on your (left |other )?side|side-lying/.test(n)) return "side";
    if (/on your back/.test(n)) return "supine";
    if (/face down/.test(n)) return "prone";
    return null;
  }
  function demoLegend(d) {
    if (!d || d.none) return `<span class="muted">${esc(d?.none || "")}</span>`;
    const [col, txt] = MODE_LABEL[d.mode] || MODE_LABEL.mobility;
    return `<span class="ph-dot" style="background:${col};box-shadow:0 0 8px ${col}"></span> ${esc(txt)}${d.note ? ` · <span class="muted">${esc(d.note)}</span>` : ""}`;
  }

  function startRoutine(region) {
    stopDemo({ remark: false });
    const modal = el;
    let lastDemo = null;
    const play = (ex) => { if (lastDemo !== ex) { lastDemo = ex; lastSpec = demoFor(region, ex); } return lastSpec; };
    let lastSpec = null;
    const steps = [];
    region.exercises.forEach((ex, i) => {
      const sets = ex.dose?.sets || 1;
      for (let s = 1; s <= sets; s++) {
        steps.push({ ex, i, set: s, sets, kind: "work" });
        if (!(i === region.exercises.length - 1 && s === sets)) steps.push({ ex, i, set: s, sets, kind: "rest", secs: ex.dose?.restSec || (s < sets ? 20 : 15) });
      }
    });
    let k = 0, timer = null, remaining = 0, paused = false;
    const stop = () => { clearInterval(timer); app.motion.stop(); st.routine = false; render(); app.viewer.clearMarks(); app.viewer.mark(idsFor(region.structures), PAIN_COLOR); };
    st.routine = true;
    const ring = (frac, num, sub) => {
      const R = 74, C = 2 * Math.PI * R;
      return `<div class="ring"><svg width="170" height="170"><circle cx="85" cy="85" r="${R}" stroke="#1f2a3a" stroke-width="12" fill="none"/>
        <circle cx="85" cy="85" r="${R}" stroke="${sub === "rest" ? "#4cc3ff" : "#ffc93c"}" stroke-width="12" fill="none" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - frac)}"/></svg>
        <div class="num">${num}<small>${sub}</small></div></div>`;
    };
    const show = () => {
      clearInterval(timer);
      if (k >= steps.length) return done();
      const s = steps[k];
      const ex = s.ex;
      // show the exercise (or, while resting, the next one) on the 3D body
      const spec = play(s.kind === "rest" ? steps[k + 1]?.ex || ex : ex);
      if (spec.none) {
        app.viewer.clearMarks();
        app.viewer.mark(idsFor(ex.target?.length ? ex.target : region.structures), s.kind === "rest" ? 0x4cc3ff : PAIN_COLOR);
      }
      const legend = `<div class="demo-note">${demoLegend(spec)}</div>`;
      const dots = region.exercises.map((_, j) => `<span class="${j < s.i ? "done" : j === s.i ? "cur" : ""}"></span>`).join("");
      if (s.kind === "rest") {
        const nxt = steps[k + 1]?.ex;
        remaining = s.secs;
        modal.innerHTML = `<div class="card routine"><div class="dots">${dots}</div><h2 style="text-align:center;margin:0">Rest</h2>
          <p class="muted" style="text-align:center">Next: <b style="color:var(--text)">${esc(nxt?.name || "")}</b> (preview on the body)</p>${legend}
          <div id="r-ring">${ring(1, remaining, "rest")}</div>
          <div class="row" style="justify-content:center"><button class="btn" id="r-skip">Skip rest${icon("next")}</button><button class="btn" id="r-quit">End</button></div></div>`;
        tick(s.secs, "rest");
      } else {
        const hold = ex.dose?.holdSec;
        modal.innerHTML = `<div class="card routine"><div class="dots">${dots}</div>
          <div class="qhead"><span>Exercise ${s.i + 1}/${region.exercises.length}</span><span>Set ${s.set}/${s.sets}</span></div>
          <h2 style="margin:6px 0">${esc(ex.name)}</h2><span class="type ${esc(ex.type)}">${esc(ex.type)}</span>${legend}
          <ol>${ex.steps.map((x) => `<li>${esc(x)}</li>`).join("")}</ol>
          ${ex.cue ? `<div class="cue" style="color:var(--accent2)">${icon("facts")}${esc(ex.cue)}</div>` : ""}
          <div id="r-ring">${hold ? ring(1, hold, "hold") : ring(1, ex.dose?.reps || "✓", "reps")}</div>
          <div class="row" style="justify-content:center">
            ${hold ? `<button class="btn primary" id="r-go">${icon("play")}Start ${hold}s</button>` : `<button class="btn primary" id="r-done">${icon("check")}Set done</button>`}
            <button class="btn" id="r-skip">Skip</button><button class="btn" id="r-quit">End</button></div>
          <p class="muted" style="font-size:11px;text-align:center;margin-top:10px">Stop if pain becomes sharp or goes above 3/10.</p></div>`;
        modal.querySelector("#r-go")?.addEventListener("click", (e) => { e.target.remove(); tick(hold, "hold"); });
        modal.querySelector("#r-done")?.addEventListener("click", () => { k++; show(); });
      }
      modal.querySelector("#r-skip").onclick = () => { k++; show(); };
      modal.querySelector("#r-quit").onclick = stop;
    };
    const tick = (total, label) => {
      remaining = total;
      clearInterval(timer);
      timer = setInterval(() => {
        if (paused) return;
        remaining -= 0.1;
        const el2 = modal.querySelector("#r-ring");
        if (el2) el2.innerHTML = ring(Math.max(0, remaining / total), Math.ceil(Math.max(0, remaining)), label);
        if (remaining <= 0) { clearInterval(timer); beep(); k++; setTimeout(show, 400); }
      }, 100);
    };
    const done = () => {
      store.routines = (store.routines || 0) + 1;
      saveStore();
      addXP(40);
      app.motion.stop();
      modal.innerHTML = `<div class="card routine" style="text-align:center">${doneBadge()}<h2>Routine complete</h2>
        <p class="muted">+40 XP · ${store.routines} routine${store.routines > 1 ? "s" : ""} done so far. Consistency beats intensity — try this daily for 2–3 weeks.</p>
        <button class="btn primary" id="r-close">Close</button></div>`;
      modal.querySelector("#r-close").onclick = stop;
      const rc = modal.querySelector(".card").getBoundingClientRect();
      confetti({ x: rc.left + rc.width / 2, y: rc.top + 40 });
    };
    show();
    app.openPanelMobile();
  }

  let actx;
  function beep() {
    try {
      actx ||= new (window.AudioContext || window.webkitAudioContext)();
      const o = actx.createOscillator(), g = actx.createGain();
      o.frequency.value = 880; g.gain.value = 0.08;
      o.connect(g); g.connect(actx.destination);
      o.start(); o.stop(actx.currentTime + 0.18);
    } catch { /* no audio */ }
  }

  app.modeHandlers.pain = {
    enter: () => { app.viewer.select([]); app.selectedId = null; render(); if (st.region) showRegion(st.region, st.others); },
    exit: () => { stopDemo({ remark: false }); app.motion?.stop(); st.routine = false; app.viewer.clearMarks(); st.tapMode = false; },
    onPick: (id) => {
      if (st.routine) return;
      if (st.playing) { stopDemo(); return; } // a tap while a demo plays just stops it
      if (id) fromPart(id); // otherwise a tap on the body looks up that spot
    },
  };
}
