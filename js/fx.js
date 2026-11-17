// Small finishing touches: a confetti burst for wins and an animated score ring for result screens.
import { esc } from "./util.js";

const COLORS = ["#f5c451", "#ff7a59", "#7cc4ff", "#4ade80", "#c4a1ff", "#ffffff"];
const reduced = () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

// Burst from a screen point (defaults to the right-hand panel, where results appear).
export function confetti({ x, y, count = 110 } = {}) {
  if (reduced()) return;
  const cv = document.createElement("canvas");
  cv.className = "confetti";
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const W = innerWidth, H = innerHeight;
  cv.width = W * dpr; cv.height = H * dpr;
  document.body.appendChild(cv);
  const ctx = cv.getContext("2d");
  ctx.scale(dpr, dpr);
  const panel = document.querySelector("#panel")?.getBoundingClientRect();
  const ox = x ?? (panel && panel.width ? panel.left + panel.width / 2 : W / 2);
  const oy = y ?? (panel && panel.height ? panel.top + Math.min(140, panel.height / 3) : H / 3);
  const ps = Array.from({ length: count }, () => {
    const a = -Math.PI / 2 + (Math.random() - 0.5) * 2.2, v = 6 + Math.random() * 9;
    return { x: ox, y: oy, vx: Math.cos(a) * v, vy: Math.sin(a) * v, r: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.4,
      w: 5 + Math.random() * 5, h: 3 + Math.random() * 4, c: COLORS[(Math.random() * COLORS.length) | 0] };
  });
  const t0 = performance.now(), DUR = 1800;
  let last = t0;
  const tick = (t) => {
    const k = (t - t0) / DUR;
    const f = Math.min(4, (t - last) / 16.7); // frames' worth of motion, so speed doesn't depend on refresh rate
    last = t;
    const drag = Math.pow(0.985, f);
    ctx.clearRect(0, 0, W, H);
    for (const p of ps) {
      p.vy += 0.32 * f; p.vx *= drag; p.vy *= drag;
      p.x += p.vx * f; p.y += p.vy * f; p.r += p.vr * f;
      ctx.save();
      ctx.globalAlpha = Math.max(0, 1 - Math.max(0, k - 0.6) / 0.4);
      ctx.translate(p.x, p.y); ctx.rotate(p.r);
      ctx.fillStyle = p.c;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.r * 2)) + 1);
      ctx.restore();
    }
    if (k < 1) requestAnimationFrame(tick); else cv.remove();
  };
  requestAnimationFrame(tick);
}

// Ring that fills to `pct` (0–100); `big` is the centre text, `small` the caption under it.
export function scoreRing(pct, big, small = "", tone = pct >= 70 ? "good" : pct >= 40 ? "mid" : "low") {
  const R = 52, C = 2 * Math.PI * R, off = C * (1 - Math.max(0, Math.min(100, pct)) / 100);
  return `<div class="score-ring ${tone}" style="--c:${C.toFixed(1)};--off:${off.toFixed(1)}">
    <svg viewBox="0 0 120 120" aria-hidden="true"><circle class="track" cx="60" cy="60" r="${R}"/><circle class="fill" cx="60" cy="60" r="${R}"/></svg>
    <div class="sr-text"><b>${esc(String(big))}</b>${small ? `<span>${esc(small)}</span>` : ""}</div></div>`;
}

// Result header: ring + title + one-line subtitle.
export function resultHead(ring, title, sub = "") {
  return `<div class="result-head">${ring}<div><h2>${esc(title)}</h2>${sub ? `<p class="muted">${sub}</p>` : ""}</div></div>`;
}

// Round badge with a check, for completions without a score.
export function doneBadge() {
  return `<div class="done-badge"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div>`;
}
