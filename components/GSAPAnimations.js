"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register once at module level — safe because "use client" never runs on server
gsap.registerPlugin(ScrollTrigger);

/* ─── Config ──────────────────────────────────────────────────────── */
const DURATION = 0.85;
const EASE = "power3.out";
const START = "top 88%";
const STAGGER = 0.08;

const SKIP_ZONES = [
  ".dropdown-menu",
  ".modal",
  ".main-nav",
  "nav.navbar",
  ".audience-slider-track",
  ".crs-partners-track",
  ".about-partner-track",
  ".pcn-team-wrap",
  ".pcn-team-slider-wrap",
];

function inSkip(el) {
  return SKIP_ZONES.some((s) => el.closest(s));
}

function inHero(el) {
  return !!el.closest("header.hero-seamless, header[class*='hero']");
}

function xDist() {
  const w = window.innerWidth;
  return w < 768 ? 22 : w < 1024 ? 35 : 50;
}

/* ─── Single element entrance ─────────────────────────────────────── */
function fade(el, dir, delay = 0) {
  if (!el) return;
  const x = dir === "fade-left" ? -xDist() : xDist();

  gsap.set(el, { opacity: 0, x });
  el.setAttribute("data-ga", "1");

  let revealed = false;
  const reveal = () => {
    if (revealed) return;
    revealed = true;
    gsap.to(el, {
      opacity: 1,
      x: 0,
      duration: DURATION,
      ease: EASE,
      delay,
      clearProps: "transform",
    });
  };

  ScrollTrigger.create({
    trigger: el,
    start: START,
    once: true,
    onEnter: reveal,
    onEnterBack: reveal,
  });

  // Immediately reveal if already in or above the viewport on load
  const rect = el.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.92) {
    reveal();
  }
}

/* ─── Grouped stagger (siblings animate together) ──────────────────── */
function fadeGroup(els, tagged) {
  const visEls = [];
  els.forEach((el, i) => {
    if (!el || tagged.has(el) || inHero(el) || inSkip(el)) return;
    tagged.add(el);
    const dir = i % 2 === 0 ? "fade-left" : "fade-right";
    const x = dir === "fade-left" ? -xDist() : xDist();
    gsap.set(el, { opacity: 0, x });
    el.setAttribute("data-ga", "1");
    visEls.push(el);
  });

  if (!visEls.length) return;

  let revealed = false;
  const revealGroup = () => {
    if (revealed) return;
    revealed = true;
    gsap.to(visEls, {
      opacity: 1,
      x: 0,
      duration: DURATION,
      ease: EASE,
      stagger: STAGGER,
      clearProps: "transform",
    });
  };

  const triggerEl = visEls[0].parentElement || visEls[0];
  ScrollTrigger.create({
    trigger: triggerEl,
    start: START,
    once: true,
    onEnter: revealGroup,
    onEnterBack: revealGroup,
  });

  const rect = triggerEl.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.92) {
    revealGroup();
  }
}

/* ─── Hero entrance (immediate, no scroll) ───────────────────────── */
function heroEntrance(hero) {
  if (!hero) return;
  const q = (s) => hero.querySelector(s);
  const tl = gsap.timeline({ defaults: { ease: EASE } });

  const eyebrow = q(".hero-eyebrow-text-gold, .intern-hero-eyebrow, .hero-eyebrow-eyebrow, .mahsn-heroEyebrow, .ev-eyebrow");
  const bar = q(".hero-eyebrow-bar-maroon");
  const title = q(".hero-seamless-title, .mahsn-heroTitle, h1");
  const lead = q(".hero-seamless-lead, .mahsn-heroLead");
  const actions = q(".hero-seamless-actions, .mahsn-heroActions");
  const quote = q(".hero-seamless-quote, .intern-hero-quote-panel, .mahsn-heroQuotePanel");

  if (eyebrow) tl.fromTo(eyebrow, { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.7, clearProps: "transform" }, 0);
  if (bar)     tl.fromTo(bar,     { opacity: 0, scaleX: 0, transformOrigin: "left center" }, { opacity: 1, scaleX: 1, duration: 0.6, clearProps: "transform" }, 0.25);
  if (title)   tl.fromTo(title,   { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.9, clearProps: "transform" }, 0.08);
  if (lead)    tl.fromTo(lead,    { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.8, clearProps: "transform" }, 0.28);
  if (actions) tl.fromTo(actions, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.7, clearProps: "transform" }, 0.44);
  if (quote)   tl.fromTo(quote,   { opacity: 0, x:  50 }, { opacity: 1, x: 0, duration: 0.9, clearProps: "transform" }, 0.18);
}

/* ─── Main init (runs inside gsap.context) ────────────────────────── */
function initAnimations(main) {
  const tagged = new WeakSet();

  function tag(el) {
    if (!el || tagged.has(el) || inHero(el) || inSkip(el)) return false;
    tagged.add(el);
    return true;
  }

  /* 1. Hero */
  heroEntrance(main.querySelector("header.hero-seamless, header[class*='hero']"));

  /* 2. Explicit data-animate */
  main.querySelectorAll("[data-animate]").forEach((el) => {
    if (tag(el)) fade(el, el.dataset.animate);
  });

  /* 3. Bootstrap columns inside <section> */
  main.querySelectorAll("section .row").forEach((row) => {
    if (inSkip(row)) return;
    const cols = [...row.children].filter((c) => /\bcol/.test(c.className));
    if (cols.length === 0) return;
    if (cols.length === 1) {
      if (tag(cols[0])) fade(cols[0], "fade-left");
    } else {
      cols.forEach((col, i) => {
        if (tag(col)) fade(col, i % 2 === 0 ? "fade-left" : "fade-right");
      });
    }
  });

  /* 4. Section headings + eyebrows NOT inside a column */
  main.querySelectorAll("section").forEach((sec) => {
    sec.querySelectorAll("h2, h3").forEach((el) => {
      if (!el.closest('[class*="col"]') && !el.closest('[class*="-card"]') && tag(el)) {
        fade(el, "fade-left");
      }
    });
    sec.querySelectorAll('[class*="eyebrow"]:not([class*="hero"])').forEach((el) => {
      if (!el.closest('[class*="col"]') && tag(el)) fade(el, "fade-left");
    });
  });

  /* 5. Standalone card/article grids — grouped stagger per parent */
  const parentMap = new Map();
  const cardSel =
    "article, [class*='-card'], .intern-overview-photo, .intern-support-img, .ct-office-photo, .intern-pub-img-wrap";

  main.querySelectorAll(cardSel).forEach((el) => {
    if (
      tagged.has(el) ||
      inHero(el) ||
      inSkip(el) ||
      el.closest('[class*="col"]') ||
      el.closest('[class*="slider"]') ||
      el.closest('[class*="track"]')
    ) {
      return;
    }
    const p = el.parentElement || el;
    if (!parentMap.has(p)) parentMap.set(p, []);
    parentMap.get(p).push(el);
  });

  parentMap.forEach((els) => {
    fadeGroup(els, tagged);
  });

  /* 6. Refresh after layout settles */
  ScrollTrigger.refresh();
}

/* ─── Component ───────────────────────────────────────────────────── */
export default function GSAPAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    let ctx;
    let timer;
    let refreshTimer;

    const onLoadRefresh = () => ScrollTrigger.refresh();

    const raf = requestAnimationFrame(() => {
      timer = setTimeout(() => {
        ctx = gsap.context(() => {
          initAnimations(main);
        }, main);
        refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 350);
        window.addEventListener("load", onLoadRefresh);
      }, 60);
    });

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      clearTimeout(refreshTimer);
      window.removeEventListener("load", onLoadRefresh);
      if (ctx) ctx.revert();
      main.querySelectorAll("[data-ga]").forEach((el) => el.removeAttribute("data-ga"));
    };
  }, [pathname]);

  return null;
}
