import { Viewer } from "./viewer.js";
import {
  SYSTEM_ORDER, sysLabel, sysColor, sysBlurb, pretty, kbFor, regionOf, store, levelFor, xpForLevel, onXP,
  $, h, esc, toast, achievements, currentStreak, setBodyKB,
} from "./util.js";
import { initLearn } from "./learn.js";
import { icon } from "./icons.js";
import { maybeTour, startTour } from "./tour.js";
import { initQuiz } from "./quiz.js";
import { initPain } from "./painui.js";

// Two reference bodies. The female body comes from a different dataset with different coverage.
const BODIES = {
  male: { base: "models", label: "Male", icon: "♂", on: ["muscular", "connective", "skeletal"], skin: 0.35 },
  female: { base: "models/female", label: "Female", icon: "♀", skin: 0.18,
    on: ["skin", "skeletal", "muscular", "connective", "nerves", "nervous", "cardio", "respiratory", "digestive", "urinary", "reproductive", "lymphatic", "endocrine"] },
};
function savedBody() { try { return localStorage.getItem("anatomy3d.body") === "female" ? "female" : "male"; } catch { return "male"; } }

const app = {
  viewer: null,
  parts: [],          // manifest entries
  byId: new Map(),
  units: new Map(),   // base name -> [part ids]
  mode: "explore",
  selectedId: null,
  modeHandlers: {},   // mode -> { onPick, enter, exit }
  hoverEnabled: true,
  labelEnabled: true,
  body: savedBody(),
  bodyHooks: [],      // called after a body loads
};
window.app = app; // handy for debugging in the console

async function boot() {
  const viewer = (app.viewer = new Viewer($("#canvas-wrap")));
  buildSearch();
  bindToolbar();
  bindTabs();
  updateXP(false);
  onXP(updateXP);
  $("#skin-opacity").addEventListener("input", (e) => app.viewer.setSkinOpacity(+e.target.value));
  $("#btn-body").onclick = () => loadBody(app.body === "male" ? "female" : "male");
  $("#btn-tour").onclick = () => { closeDrawerMobile(); startTour(); };
  $("#btn-keys").onclick = () => toggleKeys();
  await loadBody(app.body, true);
  setTimeout(() => ($("#hint").style.opacity = 0), 7000);

  viewer.onPick = (id, point, e) => {
    const handler = app.modeHandlers[app.mode]?.onPick;
    if (handler) return handler(id, point, e);
    selectPart(id);
  };
  viewer.onHover = (id, x, y) => {
    const tip = $("#hover-tip");
    if (!id || !app.hoverEnabled) { tip.style.display = "none"; return; }
    const p = app.byId.get(id);
    tip.innerHTML = `<i style="background:${sysColor(p.system)};box-shadow:0 0 8px ${sysColor(p.system)}"></i>${esc(pretty(p.name))}`;
    tip.style.display = "block";
    const r = $("#stage").getBoundingClientRect();
    tip.style.left = x - r.left + 14 + "px";
    tip.style.top = y - r.top + 14 + "px";
  };
  viewer.onFrame = updateLabels;
  viewer.cubeEl = $("#cube");

  app.modeHandlers.explore = { onPick: (id) => selectPart(id), enter: () => renderExplore() };
  initQuiz(app);
  initPain(app);
  initLearn(app);
  for (const f of app.bodyHooks) f(app.body); // modes set up for whichever body loaded first
  bindViewControls();
  renderExplore();
  handleHash();
}

// Load (or switch to) a body: manifest, study notes, layers, search, 3D models.
async function loadBody(body, first = false) {
  const cfg = BODIES[body];
  if (!first) {
    if (app.mode !== "explore") switchMode("explore");
    selectPart(null);
    app.viewer.setClip(null);
  }
  $("#loading").classList.remove("hidden");
  $("#load-pct").textContent = "0%";
  $("#loadfill").style.width = "0%";
  app.body = body;
  try { localStorage.setItem("anatomy3d.body", body); } catch { /* ignore */ }
  await setBodyKB(body);
  const manifest = await (await fetch(`${cfg.base}/parts.json`)).json();
  app.byId = new Map();
  app.units = new Map();
  for (const p of manifest) {
    p.kb = kbFor(p.base);
    p.region = regionOf(p, p.kb);
    app.byId.set(p.id, p);
    if (!app.units.has(p.base)) app.units.set(p.base, []);
    app.units.get(p.base).push(p.id);
  }
  app.parts = manifest;
  const v = app.viewer;
  v.clear();
  v.systemsVisible = new Set(cfg.on);
  v.skinOpacity = cfg.skin;
  $("#skin-opacity").value = cfg.skin;
  syncRange($("#skin-opacity"));
  buildLayers();
  buildSearchIndex();
  const systems = [...new Set(manifest.map((p) => p.system))];
  await v.load(manifest, systems, (f) => {
    $("#load-pct").textContent = Math.round(f * 100) + "%";
    $("#loadfill").style.width = f * 100 + "%";
  }, cfg.base);
  updateInset();
  v.setView("front");
  $("#loading").classList.add("hidden");
  setTimeout(maybeTour, 600);
  const btn = $("#btn-body");
  btn.innerHTML = `<span class="sym">${cfg.icon}</span><span class="only-desktop">${cfg.label}</span>`;
  btn.title = `Showing the ${cfg.label.toLowerCase()} body — tap to switch`;
  for (const f of app.bodyHooks) f(body);
  if (!first) { renderExplore(); toast(`${cfg.icon} ${cfg.label} body loaded`); }
}
app.loadBody = loadBody;

// ---------- layers ----------
const SHORT_SYS = { skin: "Skin", muscular: "Muscles", connective: "Tendons", skeletal: "Skeleton", nerves: "Nerves", nervous: "Brain", cardio: "Heart",
  respiratory: "Lungs", digestive: "Digestive", urinary: "Urinary", endocrine: "Endocrine", lymphatic: "Lymphatic", reproductive: "Reproductive" };
function buildLayers() {
  const counts = {};
  for (const p of app.parts) counts[p.system] = (counts[p.system] || 0) + 1;
  const wrap = $("#layers");
  wrap.innerHTML = "";
  for (const s of SYSTEM_ORDER) {
    if (!counts[s]) continue;
    const row = h(`<label class="layer" title="${esc(sysLabel(s))} · ${counts[s]} structures"><input type="checkbox" data-sys="${s}" ${app.viewer.systemsVisible.has(s) ? "checked" : ""}/>
      <span class="sys-ic" style="color:${sysColor(s)}">${icon(s)}</span><span class="lname">${esc(SHORT_SYS[s] || sysLabel(s))}</span></label>`);
    row.querySelector("input").addEventListener("change", (e) => app.viewer.setSystemVisible(s, e.target.checked));
    wrap.appendChild(row);
  }
}
export function setLayer(sys, on) {
  app.viewer.setSystemVisible(sys, on);
  const cb = document.querySelector(`#layers input[data-sys="${sys}"]`);
  if (cb) cb.checked = on;
}
app.setLayer = setLayer;
app.ensureVisible = (ids) => {
  for (const id of ids) {
    const p = app.byId.get(id);
    if (p && !app.viewer.systemsVisible.has(p.system)) setLayer(p.system, true);
  }
};

// ---------- search ----------
let index = [];
function buildSearchIndex() {
  index = [];
  const seen = new Set();
  for (const p of app.parts) {
    index.push({ label: pretty(p.name), sub: sysLabel(p.system), sys: p.system, ids: [p.id], text: p.name.toLowerCase() });
    if (p.kb && !seen.has(p.kb.key)) {
      seen.add(p.kb.key);
      const ids = app.parts.filter((q) => q.kb === p.kb).map((q) => q.id);
      index.push({ label: p.kb.title, sub: `${sysLabel(p.system)} · ${ids.length} part${ids.length > 1 ? "s" : ""}`, sys: p.system, ids,
        text: (p.kb.title + " " + (p.kb.match || []).join(" ")).toLowerCase(), kb: true });
    }
  }
}
// wrap each query word in <mark>: ranges are found on the raw label, then each piece is escaped
function highlight(label, words) {
  const low = label.toLowerCase(), on = new Uint8Array(label.length);
  for (const w of words.filter(Boolean)) for (let k = low.indexOf(w); k >= 0; k = low.indexOf(w, k + 1)) on.fill(1, k, k + w.length);
  let out = "", k = 0;
  while (k < label.length) {
    let e = k;
    while (e < label.length && on[e] === on[k]) e++;
    out += on[k] ? `<mark>${esc(label.slice(k, e))}</mark>` : esc(label.slice(k, e));
    k = e;
  }
  return out;
}
function buildSearch() {
  const input = $("#search"), res = $("#search-results");
  let active = 0;
  const rows = () => [...res.querySelectorAll("button")];
  const setActive = (k) => {
    const r = rows();
    if (!r.length) return;
    active = (k + r.length) % r.length;
    r.forEach((b, n) => b.classList.toggle("act", n === active));
    r[active].scrollIntoView({ block: "nearest" });
  };
  const run = () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) { res.classList.remove("open"); return; }
    const words = q.split(/\s+/);
    const hits = index
      .filter((e) => words.every((w) => e.text.includes(w)))
      .sort((a, b) => (b.kb - a.kb) || (a.text.indexOf(words[0]) - b.text.indexOf(words[0])) || a.label.length - b.label.length)
      .slice(0, 30);
    res.innerHTML = hits.length ? "" : `<div class="res-empty">No structure matches “${esc(input.value.trim())}”</div>`;
    for (const e of hits) {
      const b = h(`<button class="${e.kb ? "kb" : ""}"><span class="r-ic" style="color:${sysColor(e.sys)}">${icon(e.sys)}</span>
        <span class="r-t"><span class="r-l">${highlight(e.label, words)}</span><small>${esc(e.sub)}</small></span>${e.kb ? `<span class="r-tag">Structure</span>` : ""}</button>`);
      b.onclick = () => { res.classList.remove("open"); input.blur(); selectGroup(e.ids); closeDrawerMobile(); };
      b.onpointerenter = () => setActive(rows().indexOf(b));
      res.appendChild(b);
    }
    res.classList.add("open");
    setActive(0);
  };
  input.addEventListener("input", run);
  input.addEventListener("focus", run);
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive(active + 1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive(active - 1); }
    else if (e.key === "Enter") rows()[active]?.click();
    else if (e.key === "Escape") { res.classList.remove("open"); input.blur(); }
  });
  document.addEventListener("pointerdown", (e) => { if (!e.target.closest(".search")) res.classList.remove("open"); });
  // "/" or Ctrl/⌘-K jumps to search from anywhere (opening the sidebar if it is folded away)
  window.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea")) return;
    if (e.key === "/" || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) {
      e.preventDefault();
      if (matchMedia("(max-width: 820px)").matches) $("#drawer").classList.add("open");
      else if (document.body.classList.contains("drawer-closed")) $("#btn-drawer").click();
      input.focus();
    }
  });
}

// ---------- selection ----------
function groupIdsFor(p) {
  return p.kb ? app.parts.filter((q) => q.kb === p.kb && q.side === p.side).map((q) => q.id) : [p.id];
}
function selectPart(id, { focus = false } = {}) {
  app.selectedId = id;
  if (!id) { app.viewer.select([]); app.setLabels([]); renderExplore(); return; }
  const p = app.byId.get(id);
  app.setLabels([{ id, text: pretty(p.name) }]);
  app.ensureVisible([id]);
  app.viewer.select([id], groupIdsFor(p));
  if (focus) app.viewer.focusSmart([id]);
  if (app.mode !== "explore") switchMode("explore");
  else renderExplore();
  openPanelMobile();
}
function selectGroup(ids) {
  if (!ids.length) return;
  app.ensureVisible(ids);
  app.selectedId = ids[0];
  app.setLabels([{ id: ids[0], text: pretty(app.byId.get(ids[0]).name) }]);
  app.viewer.select(ids.length === 1 ? ids : [ids[0]], ids);
  app.viewer.isolated = null;
  for (const x of ids) app.viewer.hidden.delete(x);
  app.viewer._applyVisibility();
  app.viewer.focusSmart(ids);
  if (app.mode !== "explore") switchMode("explore");
  else renderExplore();
  openPanelMobile();
}
app.selectPart = selectPart;
app.selectGroup = selectGroup;

// ---------- labels (several at once, with leader lines) ----------
app.labels = [];
app.setLabels = (arr) => {
  const layer = $("#labels");
  layer.innerHTML = "";
  app.labels = (arr || []).map((l) => {
    const el = h(`<div class="label ${l.cls || ""}"><span class="line"></span><span class="dot"></span><span class="txt">${esc(l.text)}</span></div>`);
    layer.appendChild(el);
    return { ...l, el };
  });
  app.viewer?.invalidate();
};
function updateLabels() {
  if (!app.labels.length) return;
  // keep label boxes clear of the tool rail that runs down the right edge on phones
  const W = $("#stage").clientWidth - (matchMedia("(max-width: 820px)").matches ? 58 : 0);
  const items = [];
  for (const l of app.labels) {
    const p = l.point ? app.viewer.projectPoint(l.point) : app.viewer.screenPos(l.id);
    if (!p) { l.el.style.display = "none"; continue; }
    items.push({ l, p });
  }
  items.sort((a, b) => a.p.y - b.p.y);
  const lastY = { L: -1e9, R: -1e9 };
  const single = items.length === 1;
  for (const { l, p } of items) {
    const side = p.x < W * 0.5 ? "L" : "R";
    const ty = Math.max(p.y - (single ? 0 : 10), lastY[side] + 28);
    lastY[side] = ty;
    const dx = single ? 26 : (side === "L" ? -70 : 70), dy = ty - p.y;
    const len = Math.hypot(dx, dy), ang = Math.atan2(dy, dx);
    l.el.style.display = "block";
    l.el.style.left = p.x + "px";
    l.el.style.top = p.y + "px";
    const line = l.el.firstChild, txt = l.el.lastChild;
    line.style.width = (single ? 0 : len) + "px";
    line.style.transform = `rotate(${ang}rad)`;
    // keep the text box inside the stage
    const w = txt.offsetWidth || 120;
    let left = !single && side === "L" ? dx - w : dx;
    left = Math.max(4 - p.x, Math.min(left, W - 4 - p.x - w));
    txt.style.left = left + "px";
    txt.style.top = dy + "px";
    txt.style.transform = "translateY(-50%)";
  }
}

// ---------- explore panel ----------
const FIELD_LABELS = [
  ["origin", "Origin"], ["insertion", "Insertion"], ["action", "Action"], ["innervation", "Nerve"], ["blood", "Blood supply"],
  ["roots", "Roots"], ["motor", "Motor"], ["sensory", "Sensory"],
  ["function", "Function"], ["course", "Course"], ["supplies", "Supplies"], ["drains", "Drains"],
];
function renderExplore() {
  const el = $("#panel-explore");
  const id = app.selectedId;
  app.viewer?.setIdleSpin(!id && app.mode === "explore");
  if (!id) {
    const mastered = Object.values(store.mastery).filter((m) => m.c >= 3 && m.c > m.w).length;
    const badges = achievements();
    const got = badges.filter((a) => a.got).length;
    const lvl = levelFor(store.xp), xa = xpForLevel(lvl), xb = xpForLevel(lvl + 1);
    const frac = Math.max(0, Math.min(1, (store.xp - xa) / (xb - xa || 1)));
    const C = 2 * Math.PI * 26;
    const next = app.nextLesson?.(), lc = app.lessonCount?.() || { done: 0, total: 0 };
    const female = app.body === "female";
    const go = (id, ic, title, sub, color = "", cls = "") =>
      `<button class="go ${cls}" id="${id}" ${color ? `style="--c:${color}"` : ""}><span class="go-ic">${icon(ic)}</span><span class="go-t"><b>${title}</b><span>${sub}</span></span>${icon("next")}</button>`;
    el.innerHTML = `
      <div class="card hero">
        <div class="eyebrow">${female ? "Female" : "Male"} body · ${app.parts.length} structures</div>
        <h2>What are we studying today?</h2>
        <p class="muted">${female
          ? "Organs, vessels, brain, spine, pelvis and knees — no open female dataset has a full skeleton or muscles yet. Tap anything for its notes."
          : "Tap any muscle, bone, nerve or organ for its origin, insertion, action and nerve supply. Drag to turn the body."}</p>
        <div class="go-list">
          ${next ? go("golearn", "learn", lc.done ? "Continue learning" : "Start learning", `${esc(next.title)} · ${next.steps.length} steps`, "", "primary") : ""}
          ${go("goquiz", "quiz", "Quiz yourself", "Find it, name it, flashcards or a timed practical", "#7cc4ff")}
          ${go("gopain", "pain", "Something hurting?", "See the muscles involved and what helps", "#fb923c")}
          ${go("rand", "shuffle", "Surprise me", "Jump to a random structure", "#c4a1ff")}
        </div>
      </div>
      <div class="card">
        <div class="progress-card">
          <div class="lvl-ring"><svg viewBox="0 0 62 62"><circle class="track" cx="31" cy="31" r="26"/><circle class="fill" cx="31" cy="31" r="26" stroke-dasharray="${C.toFixed(1)}" stroke-dashoffset="${(C * (1 - frac)).toFixed(1)}"/></svg><b><small>Level</small>${lvl}</b></div>
          <div class="pstats"><div><b>${mastered}</b>mastered</div><div><b>${lc.done}</b>lessons</div><div><b>${currentStreak()}</b>day streak</div></div>
        </div>
        <div class="xp-line"><span>${store.xp} XP</span><span>${xb - store.xp} to level ${lvl + 1}</span></div>
        <details class="fold"><summary>Badges · ${got}/${badges.length}</summary>
          <div class="badges">${badges.map((a) => `<div class="badge ${a.got ? "got" : ""}" title="${esc(a.desc)}"><span>${a.icon}</span>${esc(a.name)}</div>`).join("")}</div>
        </details>
      </div>`;
    el.querySelector("#rand").onclick = () => {
      const pool = app.parts.filter((p) => p.kb && app.viewer.systemsVisible.has(p.system) && p.size > 0.08);
      const p = pool[(Math.random() * pool.length) | 0];
      if (p) selectGroup(groupIdsFor(p));
    };
    el.querySelector("#gopain").onclick = () => switchMode("pain");
    el.querySelector("#goquiz").onclick = () => switchMode("quiz");
    el.querySelector("#golearn")?.addEventListener("click", () => (next ? app.startLesson(next) : switchMode("learn")));
    return;
  }
  const p = app.byId.get(id);
  const kb = p.kb;
  const group = app.parts.filter((q) => q.kb && q.kb === kb);
  const sides = [...new Set(group.map((q) => q.side).filter(Boolean))];
  const rows = kb ? FIELD_LABELS.filter(([k]) => kb[k]) : [];
  const main = rows.slice(0, 4), extra = rows.slice(4);
  const dl = (list) => (list.length ? `<dl class="kv">${list.map(([k, l]) => `<dt>${l}</dt><dd>${esc(kb[k])}</dd>`).join("")}</dl>` : "");
  const more = kb && (extra.length || kb.features?.length || kb.clinical || kb.mnemonic || kb.facts?.length || group.length > 1);
  const canMove = app.body === "male" && app.motion?.movesFor(p.base).length;
  const partOf = kb && kb.title.toLowerCase() !== p.base.toLowerCase();
  el.innerHTML = `<div class="card">
    <div class="info-head">
      <span class="sys-badge" style="color:${sysColor(p.system)}">${icon(p.system)}</span>
      <div class="ih-t"><div class="eyebrow">${esc(sysLabel(p.system))}${p.side ? ` · ${p.side}` : ""}</div><h2>${esc(pretty(p.name))}</h2></div>
      <button class="icon-btn sm" id="b-close" title="Close (Esc)" aria-label="Close">${icon("close")}</button>
    </div>
    ${partOf ? `<div class="part-of">Part of <b>${esc(kb.title)}</b></div>` : ""}
    ${kb?.summary ? `<p class="summary">${esc(kb.summary)}</p>` : kb ? "" : `<p class="summary muted">${esc(sysBlurb(p.system))}</p>`}
    <div class="actionbar" style="--n:${canMove ? 4 : 3}">
      <button id="b-focus" title="Zoom in (F)">${icon("focus")}Focus</button>
      <button id="b-iso" title="Show only this (I)">${icon("isolate")}Isolate</button>
      <button id="b-hide" title="Hide it to see underneath (H)">${icon("hide")}Hide</button>
      ${canMove ? `<button id="b-move" class="hot" title="Watch the muscles that move this joint">${icon("play")}See it move</button>` : ""}
    </div>
    ${dl(main)}
    ${more ? `<details class="fold"><summary>More</summary>
      ${dl(extra)}
      ${kb.features?.length ? `<h4>Key features</h4><p>${kb.features.map(esc).join(" · ")}</p>` : ""}
      ${kb.clinical ? `<div class="note clin"><b>Clinical:</b> ${esc(kb.clinical)}</div>` : ""}
      ${kb.mnemonic ? `<div class="note"><b>Mnemonic:</b> ${esc(kb.mnemonic)}</div>` : ""}
      ${kb.facts?.length ? `<h4>Did you know?</h4>${kb.facts.map((f) => `<p>${esc(f)}</p>`).join("")}` : ""}
      ${group.length > 1 ? `<h4>Parts (${group.length})</h4><div class="parts-list">${group.map((q) => `<button data-id="${q.id}" class="${q.id === id ? "on" : ""}">${esc(pretty(q.name))}</button>`).join("")}</div>` : ""}
      <div class="row">${sides.length === 2 ? `<button class="btn" id="b-both">Both sides</button>` : ""}<button class="btn" id="b-hurt">${icon("hurt")}Hurts here?</button></div>
      <p class="muted tiny">ID ${p.id}</p>
    </details>` : `<div class="row"><button class="btn" id="b-hurt">${icon("hurt")}Hurts here?</button></div>`}
  </div>`;
  el.querySelectorAll(".parts-list button").forEach((b) => (b.onclick = () => { selectPart(b.dataset.id); app.viewer.focusSmart([b.dataset.id]); }));
  el.querySelector("#b-focus").onclick = () => app.viewer.focus([id], { pad: 2.2 });
  el.querySelector("#b-close").onclick = () => selectPart(null);
  el.querySelector("#b-hide").onclick = hideSelected;
  el.querySelector("#b-iso").onclick = () => app.viewer.spotlight(groupIdsFor(p), { highlight: false, pad: 1.8 });
  el.querySelector("#b-both")?.addEventListener("click", () => { const ids = group.map((q) => q.id); app.viewer.select([id], ids); app.viewer.isolate(ids); app.viewer.focus(ids); });
  el.querySelector("#b-hurt").onclick = () => { switchMode("pain"); app.pain?.fromPart(id); };
  el.querySelector("#b-move")?.addEventListener("click", () => app.playMove(app.motion.movesFor(p.base)[0]));
}

function hideSelected() {
  if (!app.selectedId) return toast("Tap a structure first");
  const id = app.selectedId;
  app.viewer.hide([id]);
  toast(`Hidden: ${pretty(app.byId.get(id).name)} — press Reset to bring it back`);
  app.selectedId = null;
  app.viewer.select([]);
  app.setLabels([]);
  renderExplore();
}

// ---------- toolbar / keys ----------
function bindToolbar() {
  document.querySelectorAll("[data-view]").forEach((b) => (b.onclick = () => app.viewer.setView(b.dataset.view)));
  $("#btn-turn").onclick = () => {
    const v = app.viewer;
    v.setView(v.camera.position.z - v.controls.target.z >= 0 ? "back" : "front");
  };
  $("#btn-hide").onclick = hideSelected;
  $("#btn-isolate").onclick = () => {
    if (app.viewer.isolated) return app.viewer.isolate(null);
    if (!app.selectedId) return toast("Tap a structure first");
    app.viewer.isolate(groupIdsFor(app.byId.get(app.selectedId)));
  };
  $("#btn-showall").onclick = () => { app.viewer.showAll(); toast("Everything visible again"); };
  $("#btn-drawer").onclick = () => {
    if (matchMedia("(max-width: 820px)").matches) { $("#drawer").classList.toggle("open"); return; }
    const closed = document.body.classList.toggle("drawer-closed");
    try { localStorage.setItem("anatomy3d.drawer", closed ? "closed" : "open"); } catch { /* private mode */ }
    setTimeout(updateInset, 320);
  };
  $("#panel-grip").onclick = () => {
    const p = $("#panel");
    if (p.classList.contains("collapsed")) p.classList.remove("collapsed");
    else if (!p.classList.contains("tall")) p.classList.add("tall");
    else { p.classList.remove("tall"); p.classList.add("collapsed"); }
  };
  window.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea")) return;
    const k = e.key.toLowerCase();
    if (k === "h") hideSelected();
    else if (k === "i") $("#btn-isolate").click();
    else if (k === "a") $("#btn-showall").click();
    else if (k === "escape") { if ($("#keys")) $("#keys").remove(); else if (app.mode === "explore") selectPart(null); }
    else if (k === "f" && app.selectedId) app.viewer.focus([app.selectedId], { pad: 2.2 });
    else if (e.key === "?") toggleKeys();
    else if (k === "1" || k === "2" || k === "3" || k === "4") {
      // answer options on screen take the number keys; otherwise they switch tabs
      const opts = [...document.querySelectorAll(".mode-panel:not(.hidden) .opt:not(:disabled)")];
      if (opts.length) opts[+k - 1]?.click();
      else switchMode(["explore", "learn", "quiz", "pain"][+k - 1]);
    }
    else if (k === "arrowright" || k === "arrowleft") {
      const id = k === "arrowright" ? "#l-next" : "#l-prev";
      const b = document.querySelector(`#panel-learn:not(.hidden) ${id}`);
      if (b && !b.disabled) b.click();
    }
    else if (k === "enter") document.querySelector(".mode-panel:not(.hidden) #q-next")?.click();
  });
}
function toggleKeys() {
  const old = $("#keys");
  if (old) { old.remove(); return; }
  const K = [["Drag", "Turn the body"], ["Scroll / pinch", "Zoom"], ["Right-drag", "Move the view"], ["/  or  Ctrl K", "Search"], ["1 – 4", "Switch tabs, or pick a quiz answer"], ["← →", "Previous / next lesson step"], ["Enter", "Next quiz question"],
    ["F", "Focus the selected structure"], ["H", "Hide it"], ["I", "Isolate it"], ["A", "Show everything"], ["Esc", "Close / deselect"], ["?", "This list"]];
  const m = h(`<div class="modal keys-modal" id="keys"><div class="keys-card"><div class="kc-head"><h3>Keyboard shortcuts</h3>
    <button class="icon-btn sm" aria-label="Close">${icon("close")}</button></div>
    ${K.map(([a, b]) => `<div class="krow"><span>${b}</span><span>${a.split(/\s+or\s+/).map((x) => `<kbd>${esc(x.trim())}</kbd>`).join(`<i class="kor">or</i>`)}</span></div>`).join("")}</div></div>`);
  m.onclick = (e) => { if (e.target === m || e.target.closest(".icon-btn")) m.remove(); };
  document.body.appendChild(m);
}
app.toggleKeys = toggleKeys;
// ---------- view: slice + graphics ----------
function bindViewControls() {
  let axis = null;
  const slider = $("#slice-pos");
  const apply = () => app.viewer.setClip(axis, +slider.value);
  document.querySelectorAll("#slice-axis button").forEach((b) => (b.onclick = () => {
    axis = b.dataset.axis || null;
    document.querySelectorAll("#slice-axis button").forEach((x) => x.classList.toggle("on", x === b));
    slider.disabled = !axis;
    if (axis) {
      slider.value = { transverse: 0.62, sagittal: 0.5, coronal: 0.5 }[axis];
      syncRange(slider);
      app.viewer.setView(axis === "sagittal" ? "left" : "front");
      toast({ transverse: "Horizontal slice — drag the slider to move up & down", sagittal: "Side-to-side slice — showing the body's right half", coronal: "Front-to-back slice — showing the back half" }[axis]);
    }
    apply();
  }));
  slider.addEventListener("input", apply);
  document.querySelectorAll("#quality button").forEach((b) => {
    b.classList.toggle("on", b.dataset.q === app.viewer.quality);
    b.onclick = () => {
      app.viewer.setQuality(b.dataset.q);
      document.querySelectorAll("#quality button").forEach((x) => x.classList.toggle("on", x === b));
    };
  });
}

// Keep the 3D focus point in the open area between the floating panels (above the sheet on phones).
function updateInset() {
  const mobile = matchMedia("(max-width: 820px)").matches;
  const panel = $("#panel"), drawer = $("#drawer");
  const W = window.innerWidth, H = window.innerHeight;
  if (mobile) {
    const bottom = panel.classList.contains("collapsed") ? 60 : Math.min(panel.offsetHeight + 8, H * 0.5);
    app.viewer?.setInsets({ top: 56, bottom });
  } else {
    const d = drawer.getBoundingClientRect(), p = panel.getBoundingClientRect();
    const left = document.body.classList.contains("drawer-closed") ? 0 : d.right + 8;
    const right = p.width ? W - p.left + 8 : 0;
    document.documentElement.style.setProperty("--inset-l", left + "px");
    document.documentElement.style.setProperty("--inset-r", right + "px");
    app.viewer?.setInsets({ left, right: right + 48, top: 64, bottom: 0 });
  }
}
new ResizeObserver(updateInset).observe(document.querySelector("#panel"));
window.addEventListener("resize", updateInset);

// range sliders paint their track up to the thumb (CSS reads --pct)
function syncRange(el) {
  const min = +el.min || 0, max = el.max === "" ? 100 : +el.max;
  el.style.setProperty("--pct", ((+el.value - min) / (max - min || 1)) * 100 + "%");
}
const syncRanges = () => document.querySelectorAll('input[type="range"]').forEach(syncRange);
document.addEventListener("input", (e) => { if (e.target.matches?.('input[type="range"]')) syncRange(e.target); });
new MutationObserver(syncRanges).observe(document.body, { childList: true, subtree: true });
app.syncRange = syncRange;
try { if (localStorage.getItem("anatomy3d.drawer") === "closed") document.body.classList.add("drawer-closed"); } catch { /* private mode */ }

function closeDrawerMobile() { $("#drawer").classList.remove("open"); }
function openPanelMobile() { $("#panel").classList.remove("collapsed"); }
app.openPanelMobile = openPanelMobile;

// ---------- modes ----------
function bindTabs() {
  document.querySelectorAll(".tab").forEach((t) => {
    t.insertAdjacentHTML("afterbegin", icon(t.dataset.mode, "tab-ic"));
    t.onclick = () => switchMode(t.dataset.mode);
  });
  // one gold pill that slides to the active tab
  $(".tabs").insertAdjacentHTML("afterbegin", `<span class="tab-ind" aria-hidden="true"></span>`);
  requestAnimationFrame(moveTabIndicator);
  window.addEventListener("resize", moveTabIndicator);
  document.fonts?.ready.then(moveTabIndicator);
}
function moveTabIndicator() {
  const t = document.querySelector(".tab.active"), ind = $(".tab-ind");
  if (!t || !ind) return;
  ind.style.width = t.offsetWidth + "px";
  ind.style.transform = `translateX(${t.offsetLeft - 4}px)`;
}
function switchMode(mode) {
  if (mode === app.mode) return;
  app.modeHandlers[app.mode]?.exit?.();
  app.mode = mode;
  document.querySelectorAll(".tab").forEach((t) => t.classList.toggle("active", t.dataset.mode === mode));
  moveTabIndicator();
  document.querySelectorAll(".mode-panel").forEach((p) => p.classList.toggle("hidden", p.id !== `panel-${mode}`));
  app.hoverEnabled = true;
  app.viewer.pickFilter = null;
  app.viewer.setIdleSpin(false);
  app.setLabels([]);
  app.modeHandlers[mode]?.enter?.();
  openPanelMobile();
  try { history.replaceState(null, "", mode === "explore" ? location.pathname : `#${mode}`); } catch { /* sandboxed viewer */ }
}
app.switchMode = switchMode;
function handleHash() {
  const m = location.hash.slice(1);
  if (["quiz", "pain", "learn"].includes(m)) switchMode(m);
}

// ---------- XP ----------
function updateXP(levelUp) {
  const lvl = levelFor(store.xp);
  const a = xpForLevel(lvl), b = xpForLevel(lvl + 1);
  $("#lvl").textContent = `Lv ${lvl}`;
  $("#xpfill").style.width = ((store.xp - a) / (b - a)) * 100 + "%";
  $("#xptext").textContent = `${store.xp} XP`;
  const sk = currentStreak();
  $("#streak").textContent = sk ? `🔥 ${sk}` : "";
  $("#streak").title = sk ? `${sk}-day study streak` : "";
  if (levelUp) toast(`🎉 Level up! You're now level ${lvl}`);
}

boot().catch((err) => {
  console.error(err);
  $("#loading").innerHTML = `<div style="max-width:420px;text-align:center;padding:16px">Couldn't load the 3D models.<br><small>${esc(err.message)}</small><br><br>
  If you opened <code>index.html</code> directly from disk, run a local server instead (see README) — browsers block loading 3D files from <code>file://</code>.</div>`;
});
