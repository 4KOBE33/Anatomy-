// First-visit tips: three short steps, each spotlighting a real part of the UI. Shown once; replayable.
import { store, saveStore, esc } from "./util.js";

const mobile = () => matchMedia("(max-width: 820px)").matches;
const STEPS = [
  { el: () => "#canvas-wrap", title: "Explore the body", text: "Drag to turn it, pinch or scroll to zoom, and tap any structure for its study notes." },
  { el: () => (mobile() || document.body.classList.contains("drawer-closed") ? "#btn-drawer" : "#drawer .block"), title: "Choose what you see",
    text: "Turn body systems on and off — muscles, nerves, organs and more. Search finds any structure by name." },
  { el: () => ".tabs", title: "Study your way",
    text: "Guided lessons in Learn, quizzes and a timed practical in Quiz — and tell it what hurts to get exercise ideas." },
];

let cleanup = null, offered = false;

export function maybeTour() {
  const forced = /[?&]tour\b/.test(location.search);
  if (offered || (!forced && (store.tourDone || navigator.webdriver))) return;
  offered = true;
  startTour();
}

export function startTour() {
  cleanup?.();
  let i = 0;
  const ring = document.createElement("div");
  ring.className = "tour-ring";
  const tip = document.createElement("div");
  tip.className = "tour-tip";
  tip.setAttribute("role", "dialog");
  document.body.append(ring, tip);

  const place = () => {
    const s = STEPS[i];
    const target = document.querySelector(s.el());
    const r = target?.getBoundingClientRect();
    const pad = 6, W = innerWidth, H = innerHeight;
    // the stage is huge: ring a centred box instead of the whole canvas
    let box = r ? { l: r.left - pad, t: r.top - pad, w: r.width + pad * 2, h: r.height + pad * 2 } : { l: W / 2 - 60, t: H / 2 - 60, w: 120, h: 120 };
    if (s.el() === "#canvas-wrap" && r) {
      const bw = Math.min(r.width * 0.42, 340), bh = Math.min(r.height * 0.62, 520);
      box = { l: r.left + r.width / 2 - bw / 2, t: r.top + r.height * 0.14, w: bw, h: bh };
    }
    Object.assign(ring.style, { left: box.l + "px", top: box.t + "px", width: box.w + "px", height: box.h + "px" });
    tip.innerHTML = `<div class="tt-step">${i + 1} of ${STEPS.length}</div><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p>
      <div class="tt-row"><button class="linkbtn" data-a="skip">${i + 1 < STEPS.length ? "Skip" : ""}</button>
      <button class="btn primary" data-a="next">${i + 1 < STEPS.length ? "Next" : "Start exploring"}</button></div>`;
    const tw = Math.min(300, W - 32);
    tip.style.width = tw + "px";
    const th = tip.offsetHeight || 150;
    let left = box.l + box.w / 2 - tw / 2;
    left = Math.max(16, Math.min(W - tw - 16, left));
    let top = box.t + box.h + 12;
    if (top + th > H - 16) top = box.t - th - 12;
    if (top < 16) { // no room above or below: sit beside it
      top = Math.max(16, Math.min(H - th - 16, box.t + box.h / 2 - th / 2));
      left = box.l + box.w + 12 + tw < W ? box.l + box.w + 12 : Math.max(16, box.l - tw - 12);
    }
    Object.assign(tip.style, { width: tw + "px", left: left + "px", top: top + "px" });
    tip.querySelector('[data-a="next"]').focus({ preventScroll: true });
  };
  const end = () => { store.tourDone = 1; saveStore(); cleanup(); };
  tip.addEventListener("click", (e) => {
    const a = e.target.closest("[data-a]")?.dataset.a;
    if (a === "skip") end();
    else if (a === "next") { if (++i < STEPS.length) place(); else end(); }
  });
  const onKey = (e) => { if (e.key === "Escape") end(); };
  addEventListener("resize", place);
  addEventListener("keydown", onKey);
  cleanup = () => { ring.remove(); tip.remove(); removeEventListener("resize", place); removeEventListener("keydown", onKey); cleanup = null; };
  requestAnimationFrame(place);
}
