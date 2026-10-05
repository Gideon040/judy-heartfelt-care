import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/site.config";
import { HeroSub } from "./Blokken";

const PAGINAS = [
  { naam: "Privacy", pad: "/privacy" },
  { naam: "Klachtenregeling", pad: "/klachtenregeling" },
  { naam: "Algemene voorwaarden", pad: "/algemene-voorwaarden" },
];

// Sjabloon voor privacy, klachtenregeling en voorwaarden: standaardteksten
// van Zorgbaar, ingevuld met de gegevens van de klant.
export function JuriPagina({ naam, pad, titel, lead, zijKop = "Vragen hierover?", zijTekst, children }: {
  naam: string;
  pad: string;
  titel: ReactNode;
  lead: string;
  zijKop?: string;
  zijTekst?: ReactNode;
  children: ReactNode;
}) {
  return (
    <main>
      <HeroSub kruimels={[{ naam, pad }]} eb={naam} titel={titel} lead={lead} />
      <section style={{ padding: "48px 0 96px" }}>
        <div className="wrap juri">
          <div className="juri-tekst">{children}</div>
          <aside className="col juri-zij">
            <div className="dk zij-donker">
              <h2 className="h3">{zijKop}</h2>
              {zijTekst}
              <a className="tel" href={`tel:${site.telefoon}`}>{site.telefoonWeergave}</a>
              <a className="sm" href={`mailto:${site.email}`} style={{ overflowWrap: "anywhere", color: "#CBBBC8" }}>{site.email}</a>
            </div>
            <div className="card col" style={{ padding: 24, gap: 12 }}>
              <div style={{ fontWeight: 800 }}>Ook juridisch</div>
              {PAGINAS.filter((p) => p.pad !== pad).map((p) => (
                <Link key={p.pad} href={p.pad}>{p.naam}</Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export function JuriBlok({ kop, children }: { kop: string; children: ReactNode }) {
  return (
    <div className="rv juri-blok">
      <h2 className="h3">{kop}</h2>
      <p>{children}</p>
    </div>
  );
}
