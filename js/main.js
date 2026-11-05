import { Viewer } from "./viewer.js";
import {
  SYSTEM_ORDER, sysLabel, sysColor, sysBlurb, pretty, kbFor, regionOf, store, levelFor, xpForLevel, onXP,
  $, h, esc, toast,
} from "./util.js";
import { initQuiz } from "./quiz.js";
import { initPain } from "./painui.js";

const DEFAULT_ON = new Set(["muscular", "connective", "skeletal"]);

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
};
window.app = app; // handy for debugging in the console

async function boot() {
  const manifest = await (await fetch("models/parts.json")).json();
  for (const p of manifest) {
    p.region = regionOf(p);
    p.kb = kbFor(p.base);
    app.byId.set(p.id, p);
    if (!app.units.has(p.base)) app.units.set(p.base, []);
    app.units.get(p.base).push(p.id);
  }
  app.parts = manifest;

  const viewer = (app.viewer = new Viewer($("#canvas-wrap")));
  for (const s of DEFAULT_ON) viewer.systemsVisible.add(s);
  buildLayers();
  buildTree();
  buildSearch();
  bindToolbar();
  bindTabs();
  updateXP(false);
  onXP(updateXP);

  const systems = [...new Set(manifest.map((p) => p.system))];
  await viewer.load(manifest, systems, (f) => {
    $("#load-pct").textContent = Math.round(f * 100) + "%";
    $("#loadfill").style.width = f * 100 + "%";
  });
  $("#loading").classList.add("hidden");
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
  viewer.onFrame = updateLabel;

  app.modeHandlers.explore = { onPick: (id) => selectPart(id), enter: () => renderExplore() };
  initQuiz(app);
  initPain(app);
  renderExplore();
  handleHash();
}

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
  $("#skin-opacity").addEventListener("input", (e) => app.viewer.setSkinOpacity(+e.target.value));
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
function buildSearch() {
  const input = $("#search"), res = $("#search-results");
  const index = [];
  const seen = new Set();
  for (const p of app.parts) {
    index.push({ label: pretty(p.name), sub: sysLabel(p.system), ids: [p.id], text: p.name.toLowerCase() });
    if (p.kb && !seen.has(p.kb.key)) {
      seen.add(p.kb.key);
      const ids = app.parts.filter((q) => q.kb === p.kb).map((q) => q.id);
      index.push({ label: p.kb.title, sub: `${sysLabel(p.system)} · whole structure (${ids.length} parts)`, ids, text: (p.kb.title + " " + (p.kb.match || []).join(" ")).toLowerCase(), kb: true });
    }
  }
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
  if (!id) { app.viewer.select([]); renderExplore(); return; }
  const p = app.byId.get(id);
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

function updateLabel() {
  const lab = $("#sel-label");
  const id = app.selectedId;
  if (!id || !app.labelEnabled || app.mode !== "explore") { lab.style.display = "none"; return; }
  const pos = app.viewer.screenPos(id);
  if (!pos) { lab.style.display = "none"; return; }
  lab.style.display = "block";
  lab.style.left = pos.x + "px";
  lab.style.top = pos.y + "px";
  const txt = pretty(app.byId.get(id).name);
  const el = lab.querySelector(".txt");
  if (el.textContent !== txt) el.textContent = txt;
}

// ---------- explore panel ----------
const FIELD_LABELS = [
  ["origin", "Origin"], ["insertion", "Insertion"], ["action", "Action"], ["innervation", "Nerve"], ["blood", "Blood supply"],
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
        <p class="muted">A real 3D human body built from MRI-derived data — ${app.parts.length} selectable structures.</p>
        <h4>How to use it</h4>
        <p>• <b>Tap</b> any structure for origin, insertion, action, nerve and clinical notes.<br>
           • <b>Hide</b> superficial muscles to peel down to deeper layers.<br>
           • Toggle <b>layers</b> (left) — organs, brain, heart & vessels.<br>
           • <b>Double-tap</b> to zoom onto a part.</p>
        <div class="row"><button class="btn primary" id="rand">🎲 Random structure</button><button class="btn" id="goquiz">Start a quiz</button></div>
      </div>
      <div class="card">
        <h4 style="margin-top:0">Your progress</h4>
        <div class="stats"><div><b>${levelFor(store.xp)}</b>Level</div><div><b>${mastered}</b>Mastered</div><div><b>${store.rounds}</b>Quizzes</div></div>
        <p class="muted" style="font-size:12px">A structure counts as mastered after 3+ correct answers.</p>
      </div>`;
    el.querySelector("#rand").onclick = () => {
      const pool = app.parts.filter((p) => p.kb && app.viewer.systemsVisible.has(p.system) && p.size > 0.08);
      const p = pool[(Math.random() * pool.length) | 0];
      selectGroup(groupIdsFor(p));
    };
    el.querySelector("#goquiz").onclick = () => switchMode("quiz");
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
    </div></div>`;
  el.innerHTML = html;
  el.querySelectorAll(".parts-list button").forEach((b) => (b.onclick = () => { selectPart(b.dataset.id); app.viewer.focusSmart([b.dataset.id]); }));
  el.querySelector("#b-focus").onclick = () => app.viewer.focus([id], { pad: 2.2 });
  el.querySelector("#b-hide").onclick = hideSelected;
  el.querySelector("#b-iso").onclick = () => app.viewer.isolate(groupIdsFor(p));
  el.querySelector("#b-both")?.addEventListener("click", () => { const ids = group.map((q) => q.id); app.viewer.select([id], ids); app.viewer.isolate(ids); app.viewer.focus(ids); });
  el.querySelector("#b-hurt").onclick = () => { switchMode("pain"); app.pain?.fromPart(id); };
}

function hideSelected() {
  if (!app.selectedId) return toast("Tap a structure first");
  const id = app.selectedId;
  app.viewer.hide([id]);
  toast(`Hidden: ${pretty(app.byId.get(id).name)} — press Reset to bring it back`);
  app.selectedId = null;
  app.viewer.select([]);
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
    else if (k === "escape") { selectPart(null); }
    else if (k === "f" && app.selectedId) app.viewer.focus([app.selectedId], { pad: 2.2 });
  });
}
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
  app.modeHandlers[mode]?.enter?.();
  openPanelMobile();
  history.replaceState(null, "", mode === "explore" ? location.pathname : `#${mode}`);
}
app.switchMode = switchMode;
function handleHash() {
  const m = location.hash.slice(1);
  if (["quiz", "pain"].includes(m)) switchMode(m);
}

// ---------- XP ----------
function updateXP(levelUp) {
  const lvl = levelFor(store.xp);
  const a = xpForLevel(lvl), b = xpForLevel(lvl + 1);
  $("#lvl").textContent = `Lv ${lvl}`;
  $("#xpfill").style.width = ((store.xp - a) / (b - a)) * 100 + "%";
  $("#xptext").textContent = `${store.xp} XP`;
  if (levelUp) toast(`🎉 Level up! You're now level ${lvl}`);
}

boot().catch((err) => {
  console.error(err);
  $("#loading").innerHTML = `<div style="max-width:420px;text-align:center;padding:16px">Couldn't load the 3D models.<br><small>${esc(err.message)}</small><br><br>
  If you opened <code>index.html</code> directly from disk, run a local server instead (see README) — browsers block loading 3D files from <code>file://</code>.</div>`;
});
