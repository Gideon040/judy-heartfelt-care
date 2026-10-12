import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/site.config";
import { CtaBlok, HeroSub, Tags } from "@/components/Blokken";
import { Pijl } from "@/components/Iconen";
import { LimburgKaart as WerkgebiedKaart } from "@/components/WerkgebiedKaart";

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
        titel={<>Zorg aan huis in <span className="it">{site.regio}.</span></>}
        lead="Dit zijn de plaatsen waar wij vast komen. Kies uw plaats om te zien wat wij daar doen."
        foto={{ src: "/afbeeldingen/tijdelijk-voordeur-werkgebied.jpg", alt: "Kennismaking aan de voordeur" }}
      />

      <section className="sec">
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(440px,100%),1fr))", gap: 64, alignItems: "center" }}>
          <div className="col rv" style={{ gap: 20 }}>
            <div className="eb">Alle plaatsen</div>
            <h2 className="h2">{AANTAL[n] ?? n} plaatsen, <span className="it">één vast gezicht.</span></h2>
            <p className="lead">Binnen ons werkgebied komen wij ook voor een los uur of een enkele nacht.</p>
            <div className="g2" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(min(240px,100%),1fr))", gap: 14 }}>
              {site.werkgebied.map((p) => (
                <Link key={p.slug} className="card lift plaatskaart" href={`/zorg/${site.hoofddienst}/${p.slug}`}>
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
          <div className="card rv" style={{ padding: 28, borderRadius: 32, background: "#FFF5EC" }}>
            <WerkgebiedKaart />
            <p className="sm" style={{ fontSize: 13.5, marginTop: 10 }}>Schematische weergave, niet op schaal.</p>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap g3">
          <div className="card col rv" style={{ gap: 12, padding: 36, borderRadius: 28, background: "#FFF5EC", borderColor: "#E3B49A" }}>
            <span className="abbr">Binnenkort</span>
            <h3 className="h3" style={{ fontSize: 30 }}>{site.aankondiging.titel}</h3>
            <p className="sm">Buiten ons vaste werkgebied starten wij binnenkort met culturele dagbesteding in Arnhem.</p>
            <div className="row"><Link className="btn2" href="/zorgvraag">Interesse melden</Link></div>
          </div>
          <div className="card col rv" style={{ gap: 12, padding: 36, borderRadius: 28 }}>
            <h3 className="h3" style={{ fontSize: 30 }}>Staat uw plaats er niet bij?</h3>
            <p className="sm">Bel gerust. Bij langere diensten en 24-uurszorg reizen wij verder dan bij een los uur.</p>
            <div className="row"><a className="btn2" href={`tel:${site.telefoon}`}>{site.telefoonWeergave}</a></div>
          </div>
          <div className="card col rv" style={{ gap: 12, padding: 36, borderRadius: 28 }}>
            <h3 className="h3" style={{ fontSize: 30 }}>Zorg mee op vakantie</h3>
            <p className="sm">Gaat u naar {site.vakantielanden.join(", ").replace(/, ([^,]*)$/, " of $1")}? {site.gezicht.voornaam} spreekt de taal en reist in overleg mee.</p>
            <Tags items={site.vakantielanden} />
          </div>
        </div>
      </section>

      <CtaBlok label="Zorg nodig in uw plaats?" titel={<>Wij kijken of het <span className="it">te regelen is.</span></>} />
    </main>
  );
}
