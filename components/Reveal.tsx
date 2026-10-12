"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// De ene reveal-hook van de site (IntersectionObserver, geen libraries).
// - Alles staat zonder JavaScript gewoon in beeld.
// - Pas hier krijgen .rv-blokken en accentlijnen ONDER de vouw de klasse
//   "wacht", en zodra ze in beeld komen "zichtbaar".
// - De gestippelde hartlijn tussen de stappen tekent mee met scrollen en
//   er reist een hartje over.
// - Bij prefers-reduced-motion gebeurt er niets: alles staat direct goed.
export function useReveal() {
  const pad = usePathname();
  useEffect(() => {
    document.documentElement.classList.add("js");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (items) => {
        for (const it of items) {
          if (!it.isIntersecting) continue;
          it.target.classList.add("zichtbaar");
          io.unobserve(it.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    const vouw = window.innerHeight * 0.92;
    document.querySelectorAll<HTMLElement>("main .rv, main .em, main .portret, footer .rv").forEach((el, i) => {
      if (el.closest(".hero")) return;
      if (el.getBoundingClientRect().top < vouw) {
        el.classList.add("zichtbaar");
        return;
      }
      el.classList.add("wacht");
      if (el.classList.contains("rv")) el.style.transitionDelay = `${(i % 4) * 0.07}s`;
      io.observe(el);
    });

    // Illustraties buiten beeld pauzeren: SVG-animaties lopen op de
    // hoofdthread, ook als je ze niet ziet.
    const pauze = new IntersectionObserver(
      (items) => {
        for (const it of items) it.target.classList.toggle("pauze", !it.isIntersecting);
      },
      { rootMargin: "100px 0px" }
    );
    document.querySelectorAll<HTMLElement>(".tegel, .cta-tegel, .belofte-rij, .kaartvlak, .tijdlijn-balk").forEach((el) => {
      el.classList.add("pauze");
      pauze.observe(el);
    });

    // Stappen: lijn en reizend hartje
    const svg = document.querySelector<SVGSVGElement>("[data-stappad]");
    const lijn = svg?.querySelector<SVGPathElement>(".lijn");
    const masker = svg?.querySelector<SVGPathElement>(".masker");
    const hart = svg?.querySelector<SVGGElement>(".reiziger");
    let rAF = 0;
    function opScroll() {
      if (!svg || !lijn || !masker || !hart) return;
      cancelAnimationFrame(rAF);
      rAF = requestAnimationFrame(() => {
        if (!svg.getBoundingClientRect().width) return;
        const blok = svg.parentElement!.getBoundingClientRect();
        const t = Math.max(0, Math.min(1, (window.innerHeight * 0.85 - blok.top) / (blok.height + window.innerHeight * 0.2)));
        masker.style.strokeDashoffset = String(-t);
        const L = lijn.getTotalLength();
        const p = lijn.getPointAtLength(L * t);
        // De svg is met preserveAspectRatio="none" geschaald; het hartje
        // tekenen we in schermpixels zodat het niet vervormt.
        const vb = svg.viewBox.baseVal;
        const r = svg.getBoundingClientRect();
        if (!r.width || !r.height) return; // verborgen (mobiel)
        hart.setAttribute("transform", `translate(${p.x} ${p.y}) scale(${vb.width / r.width} ${vb.height / r.height})`);
        hart.style.opacity = t > 0.02 && t < 0.995 ? "1" : "0";
      });
    }
    if (svg) {
      opScroll();
      window.addEventListener("scroll", opScroll, { passive: true });
      window.addEventListener("resize", opScroll);
    }
    return () => {
      io.disconnect();
      pauze.disconnect();
      window.removeEventListener("scroll", opScroll);
      window.removeEventListener("resize", opScroll);
      cancelAnimationFrame(rAF);
    };
  }, [pad]);
}

export default function Reveal() {
  useReveal();
  return null;
}
