"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { site } from "@/site.config";
import { Pijl, Telefoon } from "./Iconen";
import { HartIcoon, Ill, type IllNaam } from "./Illustraties";

const MENU = [
  { label: "Tarieven", href: "/tarieven-en-vergoeding", actief: "/tarieven-en-vergoeding" },
  { label: "Over ons", href: "/over", actief: "/over" },
  { label: "Werkgebied", href: "/werkgebied", actief: "/werkgebied" },
  { label: "Kennisbank", href: "/kennisbank", actief: "/kennisbank" },
];

// Korte regel per zorgvorm (dezelfde als in de zorgvraag-wizard) en een
// illustratie uit de set.
const ZORG: Record<string, { sub: string; ill: IllNaam }> = {
  "persoonlijke-verzorging": { sub: "Wassen en aankleden", ill: "verzorging" },
  begeleiding: { sub: "Structuur en ondersteuning", ill: "agenda" },
  nachtzorg: { sub: "Waakdienst of slaapdienst", ill: "nacht" },
  dagbesteding: { sub: "Activiteit en gezelschap", ill: "pad" },
  "huishoudelijke-hulp": { sub: "Schoonmaak en was", ill: "huishoud" },
  "palliatieve-zorg": { sub: "Laatste levensfase", ill: "kaars" },
};

export function Logo() {
  return (
    <Link href="/" className="logo">
      <span className="logo-merk"><HartIcoon /></span>
      <span className="logo-tekst">
        <b>{site.naam}</b>
        <small>{site.ondertitel}</small>
      </span>
    </Link>
  );
}

// Uitklappaneel onder "Onze zorg". Opent bij hover en bij toetsenbordfocus
// (CSS :hover/:focus-within), dus ook zonder JavaScript.
function ZorgPaneel() {
  return (
    <div className="mega" role="region" aria-label="Onze zorg">
      <div className="mega-kol">
        <div className="mega-kop">Zorgvormen, van één uur tot rond de klok</div>
        <ul className="mega-lijst">
          {site.diensten.map((d) => (
            <li key={d.slug}>
              <Link href={`/zorg/${d.slug}`} className="mega-dienst">
                <span className="tegel"><Ill naam={ZORG[d.slug]?.ill ?? "hand"} /></span>
                <span><b>{d.naam}</b><small>{ZORG[d.slug]?.sub}</small></span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/zorgvraag" className="mega-binnenkort">
          {site.aankondiging.titel} <i>binnenkort</i>
        </Link>
      </div>
      <div className="mega-kol">
        <div className="mega-kop">Werkgebied, {site.regio}</div>
        <ul className="mega-plaatsen">
          {site.werkgebied.map((p) => (
            <li key={p.slug}>
              <Link href={`/zorg/${site.hoofddienst}/${p.slug}`}>
                <b>{p.naam}</b>
                <small>{p.kernen.filter((k) => !p.naam.includes(k)).slice(0, 3).join(", ")}</small>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/werkgebied" className="tekstlink">Alle plaatsen bekijken</Link>
      </div>
      <div className="mega-cta">
        <span className="tegel"><Ill naam="bel" /></span>
        <b>Weet u niet wat past?</b>
        <p>Vertel kort wat er nodig is. U hoort dezelfde werkdag van ons.</p>
        <Link className="btn" href="/zorgvraag">Zorgvraag stellen <Pijl /></Link>
        <a href={`tel:${site.telefoon}`}>of bel {site.telefoonWeergave}</a>
      </div>
    </div>
  );
}

export default function Kop() {
  const pad = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);
  const mega = useRef<HTMLDivElement>(null);
  // Na navigatie: mobiel menu dicht en het uitklappaneel even uit, zodat het
  // niet open blijft staan onder de muis.
  useEffect(() => {
    if (menu.current) menu.current.open = false;
    const m = mega.current;
    if (!m) return;
    m.classList.add("dicht");
    (document.activeElement as HTMLElement | null)?.blur?.();
    const weg = () => m.classList.remove("dicht");
    m.addEventListener("mouseleave", weg, { once: true });
    const t = setTimeout(weg, 1200);
    return () => clearTimeout(t);
  }, [pad]);
  const klasse = (actief: string) => (pad.startsWith(actief) ? "on" : undefined);

  return (
    <>
      <div className="top">
        <div className="wrap">
          <a href={`tel:${site.telefoon}`}>{site.telefoonWeergave}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{site.bereikbaarheid}</span>
          {site.directPlek && <span className="sp">Geen wachtlijst</span>}
        </div>
      </div>
      <header className="kop">
        <div className="wrap">
          <Logo />
          <nav className="nav" aria-label="Hoofdmenu">
            <div className="nav-zorg" ref={mega}>
              <Link href="/#diensten" className={pad.startsWith("/zorg/") ? "on nav-open" : "nav-open"} aria-haspopup="true">
                Onze zorg
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
              </Link>
              <ZorgPaneel />
            </div>
            {MENU.map((m) => (
              <Link key={m.href} href={m.href} className={klasse(m.actief)} aria-current={klasse(m.actief) ? "page" : undefined}>
                {m.label}
              </Link>
            ))}
          </nav>
          <div className="kop-acties">
            <a className="btn2 s46" href={`tel:${site.telefoon}`}><Telefoon />{site.telefoonWeergave}</a>
            <Link className="btn s46" href="/zorgvraag">Zorgvraag stellen</Link>
            <details className="menu" ref={menu}>
              <summary aria-label="Menu">
                <svg className="open" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
                <svg className="dicht" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
              </summary>
              <nav className="menu-paneel" aria-label="Mobiel menu">
                <details className="menu-zorg" open>
                  <summary>Onze zorg</summary>
                  {site.diensten.map((d) => (
                    <Link key={d.slug} href={`/zorg/${d.slug}`} className={pad === `/zorg/${d.slug}` ? "on" : undefined}>
                      <span className="tegel"><Ill naam={ZORG[d.slug]?.ill ?? "hand"} /></span>
                      <span><b>{d.naam}</b><small>{ZORG[d.slug]?.sub}</small></span>
                    </Link>
                  ))}
                </details>
                {MENU.map((m) => (
                  <Link key={m.href} href={m.href} className={klasse(m.actief)}>{m.label}</Link>
                ))}
                <Link href="/contact" className={klasse("/contact")}>Contact</Link>
                <Link className="btn" href="/zorgvraag">Zorgvraag stellen</Link>
              </nav>
            </details>
          </div>
        </div>
      </header>
    </>
  );
}
