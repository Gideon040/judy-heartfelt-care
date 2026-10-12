"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { site } from "@/site.config";
import { Telefoon } from "./Iconen";
import { HartIcoon } from "./Illustraties";

const MENU = [
  { label: "Onze zorg", href: "/#diensten", actief: "/zorg/" },
  { label: "Tarieven", href: "/tarieven-en-vergoeding", actief: "/tarieven-en-vergoeding" },
  { label: "Over ons", href: "/over", actief: "/over" },
  { label: "Werkgebied", href: "/werkgebied", actief: "/werkgebied" },
  { label: "Kennisbank", href: "/kennisbank", actief: "/kennisbank" },
];

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

export default function Kop() {
  const pad = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);
  // Mobiel menu (details/summary, werkt zonder JS) sluiten na navigatie.
  useEffect(() => {
    if (menu.current) menu.current.open = false;
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
