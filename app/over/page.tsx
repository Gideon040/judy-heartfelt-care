import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/site.config";
import { CtaBlok, HeroSub, Tags, Werkgebiedblok } from "@/components/Blokken";
import Portret from "@/components/Portret";

export const metadata: Metadata = {
  title: `Over ons | ${site.naam}`,
  description: `${site.naam} is een kleinschalige thuiszorgorganisatie in ${site.regio}, opgericht door ${site.gezicht.naam}. Een vast gezicht, korte lijnen en afspraken die worden nagekomen.`,
  alternates: { canonical: `${site.url}/over` },
};

const WERKWIJZE = [
  { titel: "Een vast gezicht", tekst: "U hoeft uw verhaal niet telkens opnieuw te vertellen. Dezelfde zorgverlener, elke keer." },
  { titel: "Korte lijnen", tekst: `Eén nummer voor cliënt, familie en casemanager. U krijgt ${site.gezicht.voornaam} zelf aan de lijn.` },
  { titel: "Afspraken nakomen", tekst: "Tijden, taken en tarief staan vooraf op papier. Verandert er iets, dan hoort u het eerst." },
];

export default function Over() {
  const g = site.gezicht;
  const registraties = [
    { label: "KvK-nummer", waarde: site.kvk },
    { label: "AGB-code", waarde: site.agb },
    ...(site.vog ? [{ label: "VOG", waarde: "Aanwezig" }] : []),
    ...(site.wtza ? [{ label: "Wtza", waarde: site.wtza }] : []),
  ];
  return (
    <main>
      <HeroSub
        kruimels={[{ naam: "Over ons", pad: "/over" }]}
        eb={`Over ${site.naam}`}
        titel={<>Zorg die om de mens heen <span className="it">wordt georganiseerd.</span></>}
        lead={`Een particuliere thuiszorgorganisatie in ${site.regio}. Bewust kleinschalig, zodat u altijd weet wie er binnenkomt.`}
        foto={{ src: "/afbeeldingen/tijdelijk-09-tuinbankje.jpg", alt: "Zorgverlener en cliënt lachen samen" }}
      />

      {/* [1] Verhaal */}
      <section className="sec">
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(440px,100%),1fr))", gap: 72, alignItems: "start" }}>
          <div className="col rv" style={{ gap: 22 }}>
            <div className="eb">Ons verhaal</div>
            <h2 className="h2">Gezien, gehoord en <span className="it">gerespecteerd.</span></h2>
            {g.verhaal.map((alinea) => <p key={alinea} className="lead">{alinea}</p>)}
            <div className="handschrift">{g.naam}</div>
          </div>
          <div className="rv" style={{ display: "flex", justifyContent: "center" }}>
            <div className="arch" style={{ width: "min(430px,100%)", overflow: "hidden" }}>
              <Portret />
            </div>
          </div>
        </div>
      </section>

      {/* [2] Gezicht */}
      <section className="sec" style={{ background: "#FFF5EC" }}>
        <div className="wrap col" style={{ gap: 44 }}>
          <div className="col rv" style={{ gap: 16, maxWidth: 760 }}>
            <div className="eb">Het gezicht</div>
            <h2 className="h2">Wie er bij u <span className="it">binnenkomt.</span></h2>
          </div>
          <div className="card rv" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(360px,100%),1fr))", overflow: "hidden", borderRadius: 32 }}>
            <Portret />
            <div className="col" style={{ gap: 18, padding: "clamp(28px,4vw,52px)" }}>
              <div className="eb">{g.functie}</div>
              <h3 className="h3" style={{ fontSize: 36 }}>{g.naam}</h3>
              <p className="sm" style={{ fontSize: 17 }}>{g.bio}</p>
              <div className="col" style={{ gap: 10 }}>
                <div style={{ fontWeight: 700, fontSize: 15 }}>Ervaring met</div>
                <Tags items={g.ervaringMet} />
              </div>
              <div className="col" style={{ gap: 10 }}>
                <div style={{ fontWeight: 700, fontSize: 15 }}>Talen</div>
                <Tags items={g.talen} />
              </div>
            </div>
          </div>
          <p className="sm rv" style={{ maxWidth: "80ch" }}>
            Voor verpleegtechnische en voorbehouden handelingen werken wij samen met verzorgenden IG en verpleegkundigen. Een nieuw gezicht stellen wij altijd eerst aan u voor.
          </p>
        </div>
      </section>

      {/* [3] Werkwijze */}
      <section className="sec">
        <div className="wrap col" style={{ gap: 44 }}>
          <div className="col rv" style={{ gap: 16, maxWidth: 760 }}>
            <div className="eb">Werkwijze</div>
            <h2 className="h2">Drie dingen waar u ons <span className="it">op mag aanspreken.</span></h2>
          </div>
          <div className="g3">
            {WERKWIJZE.map((w) => (
              <div key={w.titel} className="card col rv lift" style={{ gap: 14, padding: 28, borderRadius: 28 }}>
                <h3 className="h3">{w.titel}</h3>
                <p className="sm">{w.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [4] Registraties */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="card rv" style={{ padding: "clamp(28px,4vw,48px)", borderRadius: 32, display: "flex", flexDirection: "column", gap: 28 }}>
            <div className="col" style={{ gap: 12 }}>
              <div className="eb">Registraties</div>
              <h2 className="h3" style={{ fontSize: 34 }}>Waar u ons kunt terugvinden</h2>
            </div>
            <div className="g4">
              {registraties.map((r) => (
                <div key={r.label}><div className="sm" style={{ fontSize: 14 }}>{r.label}</div><div className="cijfer">{r.waarde}</div></div>
              ))}
            </div>
            <div className="row"><Link className="btn2" href="/klachtenregeling">Klachtenregeling</Link></div>
          </div>
        </div>
      </section>

      {/* [5] Werkgebied */}
      <Werkgebiedblok />

      {/* [6] CTA */}
      <CtaBlok label="Kennismaken?" titel={<>Wij komen graag <span className="it">bij u langs.</span></>} />
    </main>
  );
}
