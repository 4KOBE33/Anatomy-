// Shared helpers: naming, KB lookup, regions, progress store, small DOM utils.
import { KB as KB_MAIN, SYSTEM_INFO as SI_MAIN } from "./data/kb.js";
// nerve notes are optional (the app still runs without the file)
let KB_NERVES = [], NERVE_SYSTEM_INFO = { label: "Nerves", color: "#f2c94c", blurb: "Peripheral nerves, plexuses, spinal cord and cranial nerves." };
try { ({ KB_NERVES, NERVE_SYSTEM_INFO } = await import("./data/kb_nerves.js")); } catch { /* not present */ }
const KB = [...KB_MAIN, ...KB_NERVES];
const SYSTEM_INFO = { ...SI_MAIN, nerves: NERVE_SYSTEM_INFO };

export const SYSTEM_ORDER = ["skin", "muscular", "connective", "skeletal", "nerves", "nervous", "cardio", "respiratory", "digestive", "urinary", "endocrine", "lymphatic", "reproductive"];
const FALLBACK_SYS = {
  skin: ["Skin & hair", "#d9a383"], muscular: ["Muscles", "#c0392b"], connective: ["Tendons & ligaments", "#d8d0b8"],
  skeletal: ["Skeleton", "#e8dcc0"], nervous: ["Brain & eye", "#e4b3a6"], nerves: ["Nerves", "#f2c94c"], cardio: ["Heart & vessels", "#d23a3a"],
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
export const store = Object.assign({ xp: 0, mastery: {}, rounds: 0, routines: 0, best: 0, perfect: 0, lessons: {}, cards: {}, reviews: 0, streak: 0, lastDay: null }, readStore());
export function saveStore() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch { /* private mode */ } }
export function levelFor(xp) { return Math.floor(Math.sqrt(xp / 60)) + 1; }
export function xpForLevel(l) { return (l - 1) * (l - 1) * 60; }
const listeners = [];
export function onXP(fn) { listeners.push(fn); }
// ---------- daily streak ----------
const dayKey = (d = new Date()) => `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
export function touchDay() {
  const today = dayKey();
  if (store.lastDay === today) return;
  const y = new Date(); y.setDate(y.getDate() - 1);
  store.streak = store.lastDay === dayKey(y) ? (store.streak || 0) + 1 : 1;
  store.lastDay = today;
  saveStore();
}
export function currentStreak() {
  const y = new Date(); y.setDate(y.getDate() - 1);
  return store.lastDay === dayKey() || store.lastDay === dayKey(y) ? store.streak || 0 : 0;
}

export function achievements() {
  const mastered = Object.values(store.mastery).filter((m) => m.c >= 3 && m.c > m.w).length;
  const lessonsDone = Object.values(store.lessons || {}).filter((l) => l.done).length;
  return [
    { icon: "🎯", name: "First quiz", desc: "Finish a quiz round", got: store.rounds >= 1 },
    { icon: "💯", name: "Perfect", desc: "Score 100% on a full round", got: (store.perfect || 0) >= 1 },
    { icon: "📚", name: "Student", desc: "Complete a guided lesson", got: lessonsDone >= 1 },
    { icon: "🎓", name: "Scholar", desc: "Complete 10 lessons", got: lessonsDone >= 10 },
    { icon: "🃏", name: "Card shark", desc: "Review 100 flashcards", got: (store.reviews || 0) >= 100 },
    { icon: "🔥", name: "On fire", desc: "3-day study streak", got: (store.streak || 0) >= 3 },
    { icon: "📅", name: "Week warrior", desc: "7-day study streak", got: (store.streak || 0) >= 7 },
    { icon: "🧠", name: "Memory 50", desc: "Master 50 structures", got: mastered >= 50 },
    { icon: "💪", name: "Rehab hero", desc: "Finish 3 exercise routines", got: (store.routines || 0) >= 3 },
    { icon: "⭐", name: "Level 10", desc: "Reach level 10", got: levelFor(store.xp) >= 10 },
  ];
}

export function addXP(n) {
  touchDay();
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
  touchDay();
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
