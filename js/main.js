import { Viewer } from "./viewer.js";
import {
  SYSTEM_ORDER, sysLabel, sysColor, sysBlurb, pretty, kbFor, regionOf, store, levelFor, xpForLevel, onXP,
  $, h, esc, toast, achievements, currentStreak, setBodyKB,
} from "./util.js";
import { initLearn } from "./learn.js";
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
    tip.textContent = pretty(p.name);
    tip.style.display = "block";
    const r = $("#stage").getBoundingClientRect();
    tip.style.left = x - r.left + 14 + "px";
    tip.style.top = y - r.top + 14 + "px";
  };
  viewer.onFrame = updateLabels;

  app.modeHandlers.explore = { onPick: (id) => selectPart(id), enter: () => renderExplore() };
  initQuiz(app);
  initPain(app);
  initLearn(app);
  for (const f of app.bodyHooks) f(app.body); // modes set up for whichever body loaded first
  bindViewControls();
  renderExplore();
  handleHash();
}

// Load (or switch to) a body: manifest, study notes, layers, browse tree, search, 3D models.
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
  buildLayers();
  buildTree();
  buildSearchIndex();
  const systems = [...new Set(manifest.map((p) => p.system))];
  await v.load(manifest, systems, (f) => {
    $("#load-pct").textContent = Math.round(f * 100) + "%";
    $("#loadfill").style.width = f * 100 + "%";
  }, cfg.base);
  v.setView("front");
  $("#loading").classList.add("hidden");
  const btn = $("#btn-body");
  btn.innerHTML = `<span class="sym">${cfg.icon}</span><span class="only-desktop">${cfg.label}</span>`;
  btn.title = `Showing the ${cfg.label.toLowerCase()} body — tap to switch`;
  for (const f of app.bodyHooks) f(body);
  if (!first) { renderExplore(); toast(`${cfg.icon} ${cfg.label} body loaded`); }
}
app.loadBody = loadBody;

// ---------- layers ----------
function buildLayers() {
  const counts = {};
  for (const p of app.parts) counts[p.system] = (counts[p.system] || 0) + 1;
  const wrap = $("#layers");
  wrap.innerHTML = "";
  for (const s of SYSTEM_ORDER) {
    if (!counts[s]) continue;
    const row = h(`<label class="layer"><input type="checkbox" data-sys="${s}" ${app.viewer.systemsVisible.has(s) ? "checked" : ""}/>
      <span class="swatch" style="background:${sysColor(s)}"></span>${esc(sysLabel(s))}<span class="count">${counts[s]}</span></label>`);
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

// ---------- browse tree ----------
function buildTree() {
  const tree = $("#tree");
  tree.innerHTML = "";
  const bySys = {};
  for (const [base, ids] of app.units) {
    const s = app.byId.get(ids[0]).system;
    const kb = app.byId.get(ids[0]).kb;
    const group = kb?.title || pretty(base);
    ((bySys[s] ||= {})[group] ||= []).push(...ids);
  }
  for (const s of SYSTEM_ORDER) {
    if (!bySys[s]) continue;
    const det = h(`<details><summary><span class="swatch" style="background:${sysColor(s)}"></span>${esc(sysLabel(s))}</summary></details>`);
    const names = Object.keys(bySys[s]).sort((a, b) => a.localeCompare(b));
    det.addEventListener("toggle", () => {
      if (!det.open || det.dataset.built) return;
      det.dataset.built = 1;
      for (const g of names) {
        const b = h(`<button class="leaf">${esc(g)}</button>`);
        b.onclick = () => { selectGroup(bySys[s][g]); closeDrawerMobile(); };
        det.appendChild(b);
      }
    });
    tree.appendChild(det);
  }
}

// ---------- search ----------
let index = [];
function buildSearchIndex() {
  index = [];
  const seen = new Set();
  for (const p of app.parts) {
    index.push({ label: pretty(p.name), sub: sysLabel(p.system), ids: [p.id], text: p.name.toLowerCase() });
    if (p.kb && !seen.has(p.kb.key)) {
      seen.add(p.kb.key);
      const ids = app.parts.filter((q) => q.kb === p.kb).map((q) => q.id);
      index.push({ label: p.kb.title, sub: `${sysLabel(p.system)} · whole structure (${ids.length} parts)`, ids, text: (p.kb.title + " " + (p.kb.match || []).join(" ")).toLowerCase(), kb: true });
    }
  }
}
function buildSearch() {
  const input = $("#search"), res = $("#search-results");
  const run = () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) { res.classList.remove("open"); return; }
    const words = q.split(/\s+/);
    const hits = index
      .filter((e) => words.every((w) => e.text.includes(w)))
      .sort((a, b) => (b.kb - a.kb) || (a.text.indexOf(words[0]) - b.text.indexOf(words[0])) || a.label.length - b.label.length)
      .slice(0, 30);
    res.innerHTML = hits.length ? "" : `<div class="empty" style="padding:12px">No match</div>`;
    for (const e of hits) {
      const b = h(`<button class="${e.kb ? "kb" : ""}">${esc(e.label)}<small>${esc(e.sub)}</small></button>`);
      b.onclick = () => { res.classList.remove("open"); input.blur(); selectGroup(e.ids); closeDrawerMobile(); };
      res.appendChild(b);
    }
    res.classList.add("open");
  };
  input.addEventListener("input", run);
  input.addEventListener("focus", run);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") res.querySelector("button")?.click(); if (e.key === "Escape") res.classList.remove("open"); });
  document.addEventListener("pointerdown", (e) => { if (!e.target.closest(".search")) res.classList.remove("open"); });
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
  const W = $("#stage").clientWidth;
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
  if (!id) {
    const mastered = Object.values(store.mastery).filter((m) => m.c >= 3 && m.c > m.w).length;
    el.innerHTML = `
      <div class="card">
        <h2>Welcome to the atlas 👋</h2>
        <p class="muted">${app.body === "female"
          ? `The <b>female</b> body — ${app.parts.length} structures from the Visible Human Female (HRA). It has organs, vessels, brain, spine, pelvis and knees, but no full skeleton or muscles: those aren't in any open female dataset yet. Switch with ♂/♀ at the top.`
          : `A real 3D human body built from MRI-derived data — ${app.parts.length} selectable structures. Switch to the female body with ♂/♀ at the top.`}</p>
        <h4>How to use it</h4>
        <p>• <b>Tap</b> any structure for origin, insertion, action, nerve and clinical notes.<br>
           • <b>Hide</b> superficial muscles to peel down to deeper layers.<br>
           • Toggle <b>layers</b> (left) — organs, brain, heart & vessels.<br>
           • <b>Double-tap</b> to zoom onto a part.</p>
        <div class="row"><button class="btn primary" id="golearn">📚 Start a lesson</button><button class="btn" id="goquiz">🎯 Quiz</button><button class="btn" id="rand">🎲 Random</button></div>
      </div>
      <div class="card">
        <h4 style="margin-top:0">Your progress</h4>
        <div class="stats"><div><b>${levelFor(store.xp)}</b>Level</div><div><b>${mastered}</b>Mastered</div><div><b>🔥 ${currentStreak()}</b>Day streak</div></div>
        <p class="muted" style="font-size:12px">A structure counts as mastered after 3+ correct answers. Study every day to keep your streak.</p>
        <h4>Badges</h4>
        <div class="badges">${achievements().map((a) => `<div class="badge ${a.got ? "got" : ""}" title="${esc(a.desc)}"><span>${a.icon}</span>${esc(a.name)}</div>`).join("")}</div>
      </div>`;
    el.querySelector("#rand").onclick = () => {
      const pool = app.parts.filter((p) => p.kb && app.viewer.systemsVisible.has(p.system) && p.size > 0.08);
      const p = pool[(Math.random() * pool.length) | 0];
      selectGroup(groupIdsFor(p));
    };
    el.querySelector("#goquiz").onclick = () => switchMode("quiz");
    el.querySelector("#golearn").onclick = () => switchMode("learn");
    return;
  }
  const p = app.byId.get(id);
  const kb = p.kb;
  const group = app.parts.filter((q) => q.kb && q.kb === kb);
  const sides = [...new Set(group.map((q) => q.side).filter(Boolean))];
  const title = pretty(p.name);
  let html = `<div class="card">
    <h2>${esc(title)}</h2>
    <div class="chips"><span class="chip sys" style="background:${sysColor(p.system)}aa">${esc(sysLabel(p.system))}</span>
      ${p.side ? `<span class="chip">${p.side} side</span>` : ""}${kb?.region ? `<span class="chip">${esc(kb.region)}</span>` : ""}
      <span class="chip" title="Foundational Model of Anatomy ID">${p.id}</span></div>`;
  if (kb) {
    if (kb.title.toLowerCase() !== p.base.toLowerCase()) html += `<p class="muted">Part of <b style="color:var(--text)">${esc(kb.title)}</b></p>`;
    if (kb.summary) html += `<p>${esc(kb.summary)}</p>`;
    const rows = FIELD_LABELS.filter(([k]) => kb[k]).map(([k, l]) => `<dt>${l}</dt><dd>${esc(kb[k])}</dd>`).join("");
    if (rows) html += `<dl class="kv">${rows}</dl>`;
    if (kb.features?.length) html += `<h4>Key features</h4><p>${kb.features.map(esc).join(" · ")}</p>`;
    if (kb.clinical) html += `<div class="note clin"><b>Clinical:</b> ${esc(kb.clinical)}</div>`;
    if (kb.mnemonic) html += `<div class="note"><b>Mnemonic:</b> ${esc(kb.mnemonic)}</div>`;
    if (kb.facts?.length) html += `<h4>Did you know?</h4>${kb.facts.map((f) => `<p>✨ ${esc(f)}</p>`).join("")}`;
    if (group.length > 1) {
      html += `<h4>All parts (${group.length})</h4><div class="parts-list">${group
        .map((q) => `<button data-id="${q.id}" class="${q.id === id ? "on" : ""}">${esc(pretty(q.name))}</button>`).join("")}</div>`;
    }
  } else {
    html += `<p class="muted">${esc(sysBlurb(p.system))}</p>`;
  }
  html += `<div class="row">
      <button class="btn" id="b-focus">🎯 Focus</button>
      <button class="btn" id="b-hide">🙈 Hide</button>
      <button class="btn" id="b-iso">🔍 Isolate</button>
      ${sides.length === 2 ? `<button class="btn" id="b-both">↔ Both sides</button>` : ""}
      <button class="btn" id="b-hurt">🤕 Hurts here?</button>
      ${app.body === "male" && app.motion?.movesFor(p.base).length ? `<button class="btn" id="b-move">🎬 See it move</button>` : ""}
    </div></div>`;
  el.innerHTML = html;
  el.querySelectorAll(".parts-list button").forEach((b) => (b.onclick = () => { selectPart(b.dataset.id); app.viewer.focusSmart([b.dataset.id]); }));
  el.querySelector("#b-focus").onclick = () => app.viewer.focus([id], { pad: 2.2 });
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
  $("#btn-hide").onclick = hideSelected;
  $("#btn-isolate").onclick = () => {
    if (app.viewer.isolated) return app.viewer.isolate(null);
    if (!app.selectedId) return toast("Tap a structure first");
    app.viewer.isolate(groupIdsFor(app.byId.get(app.selectedId)));
  };
  $("#btn-showall").onclick = () => { app.viewer.showAll(); toast("Everything visible again"); };
  $("#btn-drawer").onclick = () => $("#drawer").classList.toggle("open");
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
    else if (k === "escape") { if (app.mode === "explore") selectPart(null); }
    else if (k === "f" && app.selectedId) app.viewer.focus([app.selectedId], { pad: 2.2 });
  });
}
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

// Keep the 3D focus point above the bottom sheet on phones.
function updateInset() {
  const mobile = matchMedia("(max-width: 820px)").matches;
  const panel = $("#panel");
  const stageH = $("#stage").clientHeight;
  const inset = mobile && !panel.classList.contains("collapsed") ? Math.min(panel.offsetHeight, stageH * 0.5) * 0.85 : 0;
  app.viewer?.setBottomInset(inset);
}
new ResizeObserver(updateInset).observe(document.querySelector("#panel"));
window.addEventListener("resize", updateInset);

function closeDrawerMobile() { $("#drawer").classList.remove("open"); }
function openPanelMobile() { $("#panel").classList.remove("collapsed"); }
app.openPanelMobile = openPanelMobile;

// ---------- modes ----------
function bindTabs() {
  document.querySelectorAll(".tab").forEach((t) => (t.onclick = () => switchMode(t.dataset.mode)));
}
function switchMode(mode) {
  if (mode === app.mode) return;
  app.modeHandlers[app.mode]?.exit?.();
  app.mode = mode;
  document.querySelectorAll(".tab").forEach((t) => t.classList.toggle("active", t.dataset.mode === mode));
  document.querySelectorAll(".mode-panel").forEach((p) => p.classList.toggle("hidden", p.id !== `panel-${mode}`));
  app.hoverEnabled = true;
  app.viewer.pickFilter = null;
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
