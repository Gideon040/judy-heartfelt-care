import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/site.config";
import { CtaBlok, HeroSub, Tags } from "@/components/Blokken";
import Accent from "@/components/Accent";
import Golf from "@/components/Golf";
import { Pijl } from "@/components/Iconen";
import { Ill24, IllCultuur, IllPad } from "@/components/Illustraties";
import { LimburgKaart } from "@/components/WerkgebiedKaart";

export const metadata: Metadata = {
  title: `Werkgebied: thuiszorg in ${site.regio} | ${site.naam}`,
  description: `${site.naam} komt bij mensen thuis in ${site.werkgebied.map((p) => p.naam).join(", ")}. Staat uw plaats er niet bij? Bel gerust.`,
  alternates: { canonical: `${site.url}/werkgebied` },
};

const AANTAL = ["Nul", "Eén", "Twee", "Drie", "Vier", "Vijf", "Zes", "Zeven", "Acht", "Negen", "Tien"];

export default function Werkgebied() {
  const n = site.werkgebied.length;
  return (
    <main>
      <HeroSub
        kruimels={[{ naam: "Werkgebied", pad: "/werkgebied" }]}
        eb="Werkgebied"
        titel={<>Zorg aan huis in <Accent>{`${site.regio}.`}</Accent></>}
        lead="Dit zijn de plaatsen waar wij vast komen. Kies uw plaats om te zien wat wij daar doen."
        foto={{ src: "/afbeeldingen/judy-07-voordeur.webp", alt: "Zorgverlener en dochter bij de voordeur van een oudere vrouw", positie: "50% 36%" }}
      />

      <section className="sec met-golf">
        <div className="wrap regio">
          <div className="kopblok rv">
            <div className="eb">Alle plaatsen</div>
            <h2 className="h2">{AANTAL[n] ?? n} plaatsen, <Accent>één vast gezicht.</Accent></h2>
            <p className="lead">Binnen ons werkgebied komen wij ook voor een los uur of een enkele nacht.</p>
            <div className="raster r2" style={{ gap: 12, marginTop: 8 }}>
              {site.werkgebied.map((p) => (
                <Link key={p.slug} className="plaatskaart" href={`/zorg/${site.hoofddienst}/${p.slug}`}>
                  <span>
                    <b>{p.naam}</b>
                    <span className="sm" style={{ fontSize: 14 }}>
                      {p.diensten.length === site.diensten.length ? "Alle zorgvormen" : `${p.diensten.length} zorgvormen`}
                    </span>
                  </span>
                  <Pijl />
                </Link>
              ))}
            </div>
          </div>
          <div className="col" style={{ gap: 0 }}>
            <LimburgKaart />
            <p className="kaart-noot">Schematische weergave, niet op schaal.</p>
          </div>
        </div>
        <Golf kleur="peach" />
      </section>

      <section className="sec peach met-golf">
        <div className="wrap raster r3">
          <div className="bento-kaart rv" style={{ background: "linear-gradient(140deg,#FDE7D6,#F8D2B7)", borderColor: "#F6CDB0", minHeight: 0 }}>
            <div className="tegel" style={{ background: "rgba(255,255,255,.65)" }}><IllCultuur /></div>
            <span className="abbr" style={{ background: "#fff", marginBottom: 10 }}>Binnenkort</span>
            <h3 className="h3" style={{ marginTop: 0, fontSize: 22 }}>{site.aankondiging.titel}</h3>
            <p style={{ color: "var(--text)" }}>Buiten ons vaste werkgebied starten wij binnenkort met culturele dagbesteding in Arnhem.</p>
            <div className="row" style={{ marginTop: 16 }}><Link className="btn2" href="/zorgvraag">Interesse melden</Link></div>
          </div>
          <div className="bento-kaart rv" style={{ minHeight: 0 }}>
            <div className="tegel"><Ill24 /></div>
            <h3 className="h3" style={{ marginTop: 0, fontSize: 22 }}>Staat uw plaats er niet bij?</h3>
            <p>Bel gerust. Bij langere diensten en 24-uurszorg reizen wij verder dan bij een los uur.</p>
            <div className="row" style={{ marginTop: 16 }}><a className="btn2" href={`tel:${site.telefoon}`}>{site.telefoonWeergave}</a></div>
          </div>
          <div className="bento-kaart donker rv" style={{ minHeight: 0 }}>
            <div className="tegel"><IllPad /></div>
            <h3 className="h3" style={{ marginTop: 0, fontSize: 22 }}>Zorg mee op vakantie</h3>
            <p>Gaat u naar {site.vakantielanden.join(", ").replace(/, ([^,]*)$/, " of $1")}? {site.gezicht.voornaam} spreekt de taal en reist in overleg mee.</p>
            <div style={{ marginTop: 16 }}><Tags items={site.vakantielanden} /></div>
          </div>
        </div>
        <Golf kleur="cream" />
      </section>

      <CtaBlok label="Zorg nodig in uw plaats?" titel={<>Wij kijken of het <Accent>te regelen is.</Accent></>} foto="voordeur" ill="huis" />
    </main>
  );
}
