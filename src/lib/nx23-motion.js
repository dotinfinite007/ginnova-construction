/* ============================================================
   NX23 MOTION - integracion React
   Nexum23 LLC | basado en WEB_MOTION_PLAYBOOK.md

   En React el motor NO puede arrancar en DOMContentLoaded:
   a esa altura el arbol todavia no esta montado y no encuentra
   nada que animar. Por eso se exporta initNx23Motion() y App.jsx
   lo llama en useLayoutEffect, ya con el DOM real en pantalla.
   ============================================================ */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { CustomEase } from 'gsap/CustomEase';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

/* ---- vocabulario de timing: 4 eases, 3 duraciones. Todo el sitio usa esto ---- */
if (!CustomEase.get('nxOut')) {
  CustomEase.create('nxInOut', '0.75,0,0.25,1');
  CustomEase.create('nxOut', '0.25,1,0.5,1');
  CustomEase.create('nxIn', '0.5,0,0.75,0');
  CustomEase.create('nxHor', '0.25,0,0.75,1');
}
const durL = 1.2;
const stagger = 0.09, delayRev = 0.2;
const BP = 1024;

/* ============================================================
   PRIMITIVAS DE TEXTO
   a = etiqueta | h = titular | p = parrafo | ctn = bloque
   ============================================================ */
function splitOf(el, cfg) {
  if (!el._nxsp) {
    try { el._nxsp = new SplitText(el, cfg); } catch { return null; }
  }
  return el._nxsp;
}
function fixBr(el) {
  // SplitText con mask:"lines" consume los <br> al dividir.
  // La reparacion va DESPUES del split - antes genera saltos dobles.
  if (el._nxbr) return;
  el.querySelectorAll('br').forEach((b) => {
    if (!b.nextSibling || b.nextSibling.nodeName !== 'BR') b.after(document.createElement('br'));
  });
  el._nxbr = true;
}
function fadeOnly(el, state, delay) {
  if (state === 'initial') gsap.set(el, { opacity: 0, y: 22 });
  if (state === 'reveal') gsap.to(el, { opacity: 1, y: 0, duration: durL, delay: delay ?? delayRev, ease: 'nxOut' });
}

function tA(els, state, delay) {
  gsap.utils.toArray(els).forEach((el, i) => {
    if (!el.textContent.trim()) return;
    const s = splitOf(el, { type: 'chars', tag: 'span', charsClass: 'nx-char', smartWrap: true });
    if (!s) return fadeOnly(el, state, delay);
    const off = i * stagger;
    if (state === 'initial') gsap.set(s.chars, { opacity: 0, x: '3rem' });
    if (state === 'reveal') gsap.fromTo(s.chars, { opacity: 0, x: '3rem' },
      { opacity: 1, x: 0, duration: durL, delay: (delay ?? delayRev) + off, stagger: stagger * 0.5, ease: 'nxOut', overwrite: true });
  });
}
function tH(els, state, delay) {
  gsap.utils.toArray(els).forEach((el, i) => {
    if (!el.textContent.trim()) return;
    const s = splitOf(el, { type: 'lines,words', tag: 'span', linesClass: 'nx-line', wordsClass: 'nx-word', mask: 'lines' });
    if (!s) return fadeOnly(el, state, delay);
    fixBr(el);
    const off = i * stagger;
    if (state === 'initial') gsap.set(s.lines, { yPercent: 112 });
    if (state === 'reveal') gsap.fromTo(s.lines, { yPercent: 112 },
      { yPercent: 0, duration: durL * 1.1, delay: (delay ?? delayRev) + off, stagger: stagger * 1.2, ease: 'nxOut', overwrite: true });
  });
}
function tP(els, state, delay) {
  gsap.utils.toArray(els).forEach((el, i) => {
    if (!el.textContent.trim()) return;
    const s = splitOf(el, { type: 'lines,words', tag: 'span', linesClass: 'nx-line', wordsClass: 'nx-word', mask: 'lines' });
    if (!s) return fadeOnly(el, state, delay);
    fixBr(el);
    const off = i * stagger;
    if (state === 'initial') gsap.set(s.lines, { yPercent: 110 });
    if (state === 'reveal') gsap.fromTo(s.lines, { yPercent: 110 },
      { yPercent: 0, duration: durL, delay: (delay ?? delayRev) + off, stagger, ease: 'nxOut', overwrite: true });
  });
}
function tC(els, state, delay) {
  const a = gsap.utils.toArray(els);
  if (!a.length) return;
  if (state === 'initial') gsap.set(a, { opacity: 0, y: '2.4rem' });
  if (state === 'reveal') gsap.fromTo(a, { opacity: 0, y: '2.4rem' },
    { opacity: 1, y: 0, duration: durL, delay: delay ?? delayRev, stagger, ease: 'nxOut', overwrite: true });
}
const REV = { a: tA, h: tH, p: tP, ctn: tC };

/* ============================================================
   INIT
   ============================================================ */
export function initNx23Motion() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    document.documentElement.classList.add('nx-off');
    return () => {};
  }
  document.documentElement.classList.add('nx-on');

  /* ---- scroll suave: Lenis y GSAP con UN solo reloj ---- */
  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    touchMultiplier: 2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
  const raf = (t) => lenis.raf(t * 1000);
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);

  const ctx = gsap.context(() => {
    /* ---- HERO: el video se acerca, el texto sale ---- */
    const heroArea = document.querySelector('[data-hero-area]');
    if (heroArea) {
      const media = heroArea.querySelector('[data-hero-media]');
      const copy = heroArea.querySelector('[data-hero-copy]');
      const cue = heroArea.querySelector('[data-hero-cue]');
      gsap.timeline({ scrollTrigger: { trigger: heroArea, start: 'top top', end: 'bottom bottom', scrub: true } })
        .fromTo(media, { scale: 1, transformOrigin: '50% 55%' }, { scale: 1.55, ease: 'nxIn' }, 0)
        .to([copy, cue].filter(Boolean), { opacity: 0, y: -70, ease: 'nxIn' }, 0);
    }

    /* ---- SCROLL HORIZONTAL (Proceso) - se guarda el tween para los reveals ---- */
    const mm = gsap.matchMedia();
    mm.add(`(min-width:${BP}px)`, () => {
      document.querySelectorAll('[data-hor]').forEach((area) => {
        const track = area.querySelector('[data-hor-track]');
        if (!track) return;
        const dist = track.scrollWidth - area.offsetWidth;
        if (dist <= 0) return;
        area.style.height = `${track.scrollWidth}px`;
        ScrollTrigger.refresh();
        area._nxTween = gsap.to(track, {
          x: -dist, ease: 'nxHor',
          scrollTrigger: { trigger: area, start: '2% top', end: '98% bottom', scrub: 0.25 },
        });
      });
    });

    /* ---- PARALLAX ---- */
    gsap.utils.toArray('[data-px="img"]').forEach((img) => {
      const w = img.closest('[data-px="w"]');
      if (!w) return;
      gsap.fromTo(img, { yPercent: -12 }, { yPercent: 12, ease: 'none',
        scrollTrigger: { trigger: w, start: 'top bottom', end: 'bottom top', scrub: 0.5 } });
    });

    /* ---- SISTEMA DE REVEALS por atributo ---- */
    Object.entries(REV).forEach(([key, fn]) => {
      const els = document.querySelectorAll(`[data-reveal="${key}"]`);
      if (!els.length) return;
      const groups = new Map();
      els.forEach((el) => {
        const trg = el.closest('[data-reveal="w"]') || el;
        if (!groups.has(trg)) groups.set(trg, []);
        groups.get(trg).push(el);
      });
      groups.forEach((items, trg) => {
        gsap.set(items, { visibility: 'visible' });
        fn(items, 'initial');
        const hor = trg.closest('[data-hor]');
        ScrollTrigger.create({
          trigger: trg,
          containerAnimation: hor?._nxTween,
          start: hor?._nxTween ? 'left bottom' : 'top 88%',
          once: true,
          onEnter: () => fn(items, 'reveal'),
        });
      });
    });

    /* ---- CONTADORES ---- */
    document.querySelectorAll('[data-count]').forEach((el) => {
      const end = parseFloat(el.dataset.count);
      const sfx = el.dataset.suffix || '';
      const o = { v: 0 };
      ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true,
        onEnter: () => gsap.to(o, { v: end, duration: 1.7, ease: 'nxOut',
          onUpdate: () => { el.textContent = Math.round(o.v) + sfx; } }) });
    });

    /* ---- BOTONES MAGNETICOS (solo desktop) ---- */
    mm.add(`(min-width:${BP}px)`, () => {
      const cleanups = [];
      document.querySelectorAll('[data-mag]').forEach((el) => {
        const move = (e) => {
          const r = el.getBoundingClientRect();
          const dx = (e.clientX - r.left) / el.offsetWidth - 0.5;
          const dy = (e.clientY - r.top) / el.offsetHeight - 0.5;
          gsap.to(el, { x: dx * 20, y: dy * 12, duration: 1.2, ease: 'power4.out' });
        };
        const leave = () => gsap.to(el, { x: 0, y: 0, duration: 1.3, ease: 'elastic.out(1,0.35)' });
        el.addEventListener('mousemove', move);
        el.addEventListener('mouseleave', leave);
        cleanups.push(() => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', leave); });
      });
      return () => cleanups.forEach((f) => f());
    });

    /* ---- BARRA DE PROGRESO ---- */
    const bar = document.querySelector('[data-progress]');
    const num = document.querySelector('[data-progress-num]');
    if (bar || num) {
      ScrollTrigger.create({ start: 'top top', end: 'bottom bottom', onUpdate: (s) => {
        if (bar) bar.style.setProperty('--nx-p', `${s.progress * 100}%`);
        if (num) num.textContent = String(Math.round(s.progress * 100)).padStart(2, '0');
      } });
    }
  });

  ScrollTrigger.refresh(true);

  let rt = null;
  const onResize = () => { clearTimeout(rt); rt = setTimeout(() => ScrollTrigger.refresh(true), 40); };
  window.addEventListener('resize', onResize);

  /* ---- limpieza: React StrictMode monta dos veces en desarrollo ---- */
  return () => {
    window.removeEventListener('resize', onResize);
    clearTimeout(rt);
    ctx.revert();
    gsap.ticker.remove(raf);
    lenis.destroy();
    ScrollTrigger.getAll().forEach((t) => t.kill());
    document.documentElement.classList.remove('nx-on');
  };
}
