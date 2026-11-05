// Shared helpers: naming, KB lookup, regions, progress store, small DOM utils.
import { KB, SYSTEM_INFO } from "./data/kb.js";

export const SYSTEM_ORDER = ["skin", "muscular", "connective", "skeletal", "nervous", "cardio", "respiratory", "digestive", "urinary", "endocrine", "lymphatic", "reproductive"];
const FALLBACK_SYS = {
  skin: ["Skin & hair", "#d9a383"], muscular: ["Muscles", "#c0392b"], connective: ["Tendons & ligaments", "#d8d0b8"],
  skeletal: ["Skeleton", "#e8dcc0"], nervous: ["Brain & nerves", "#e4b3a6"], cardio: ["Heart & vessels", "#d23a3a"],
  respiratory: ["Lungs & airway", "#e39ba1"], digestive: ["Digestive", "#d99482"], urinary: ["Urinary", "#e0b06a"],
  endocrine: ["Endocrine", "#c58a3a"], lymphatic: ["Lymphatic", "#8e3a66"], reproductive: ["Reproductive", "#d395a3"],
};
export function sysLabel(s) { return FALLBACK_SYS[s]?.[0] || SYSTEM_INFO?.[s]?.label || s; }
export function sysColor(s) { return FALLBACK_SYS[s]?.[1] || SYSTEM_INFO?.[s]?.color || "#888"; }
export function sysBlurb(s) { return SYSTEM_INFO?.[s]?.blurb || ""; }

export function pretty(name) {
  const n = name.replace(/, nsn$/i, "").replace(/\bnsn\b/i, "").trim();
  return n.charAt(0).toUpperCase() + n.slice(1);
}

// KB lookup: longest `match` substring contained in the lowercase base name wins.
const kbCache = new Map();
export function kbFor(base) {
  const key = base.toLowerCase();
  if (kbCache.has(key)) return kbCache.get(key);
  let best = null, bestLen = 0;
  for (const e of KB) for (const m of e.match || []) {
    if (m.length > bestLen && key.includes(m)) { best = e; bestLen = m.length; }
  }
  kbCache.set(key, best);
  return best;
}

export const REGIONS = [
  ["all", "Whole body"], ["head", "Head & neck"], ["trunk", "Trunk"], ["upper", "Upper limb"], ["lower", "Lower limb"],
];
export function regionOf(part) {
  const [x, y] = part.center;
  if (y > 1.42) return "head";
  if (y < 0.8) return "lower";
  if (Math.abs(x) > 0.18 && y > 0.7) return "upper";
  return "trunk";
}

// ---------- progress store ----------
const KEY = "anatomy3d.progress.v1";
function readStore() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
}
export const store = Object.assign({ xp: 0, mastery: {}, rounds: 0, routines: 0, best: 0 }, readStore());
export function saveStore() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch { /* private mode */ } }
export function levelFor(xp) { return Math.floor(Math.sqrt(xp / 60)) + 1; }
export function xpForLevel(l) { return (l - 1) * (l - 1) * 60; }
const listeners = [];
export function onXP(fn) { listeners.push(fn); }
export function addXP(n) {
  const before = levelFor(store.xp);
  store.xp += Math.round(n);
  saveStore();
  const after = levelFor(store.xp);
  listeners.forEach((f) => f(after > before));
}
export function recordAnswer(unit, ok) {
  const m = (store.mastery[unit] ||= { c: 0, w: 0 });
  ok ? m.c++ : m.w++;
  m.t = Date.now();
  saveStore();
}

// ---------- DOM ----------
export const $ = (s, r = document) => r.querySelector(s);
export function h(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}
export function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}
let toastTimer;
export function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}
export function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
