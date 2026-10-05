"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/site.config";
import { Hart, Telefoon } from "./Iconen";

const MENU = [
  { label: "Onze zorg", href: "/#diensten", actief: "/zorg/" },
  { label: "Tarieven", href: "/tarieven-en-vergoeding", actief: "/tarieven-en-vergoeding" },
  { label: "Over ons", href: "/over", actief: "/over" },
  { label: "Kennisbank", href: "/kennisbank", actief: "/kennisbank" },
];

export function Logo() {
  return (
    <Link href="/" className="logo">
      <span className="logo-merk"><Hart /></span>
      <span className="logo-tekst">
        <b>{site.naam}</b>
        <small>{site.ondertitel}</small>
      </span>
    </Link>
  );
}

export default function Kop() {
  const pad = usePathname();
  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <div className="hs" style={{ display: "flex", gap: 22 }}>
            <a href={`tel:${site.telefoon}`}>{site.telefoonWeergave}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>{site.bereikbaarheid}</span>
          </div>
          {site.directPlek && (
            <div className="badge-plek"><span className="dot" /><span>Geen wachtlijst</span></div>
          )}
        </div>
      </div>
      <header className="kop">
        <div className="wrap">
          <Logo />
          <nav className="nav" aria-label="Hoofdmenu">
            {MENU.map((m) => (
              <Link key={m.href} href={m.href} className={pad.startsWith(m.actief) ? "on" : undefined}>
                {m.label}
              </Link>
            ))}
          </nav>
          <div className="row" style={{ gap: 10 }}>
            <a className="btn2 s46 hs" href={`tel:${site.telefoon}`}><Telefoon />{site.telefoonWeergave}</a>
            <Link className="btn s46" href="/zorgvraag">Zorgvraag stellen</Link>
          </div>
        </div>
      </header>
    </>
  );
}
