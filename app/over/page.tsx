import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/site.config";
import { CtaBlok, Foto, HeroSub, Mini, SectieKop, Tags, Werkgebiedblok, ZorgvraagKnop } from "@/components/Blokken";
import Accent from "@/components/Accent";
import Golf from "@/components/Golf";
import Portret from "@/components/Portret";
import { FOTO } from "@/components/fotos";
import { Pijl } from "@/components/Iconen";
import { IllBel, IllHuis, IllPapier } from "@/components/Illustraties";

export const metadata: Metadata = {
  title: `Over ons | ${site.naam}`,
  description: `${site.naam} is een kleinschalige thuiszorgorganisatie in ${site.regio}, opgericht door ${site.gezicht.naam}. Een vast gezicht, korte lijnen en afspraken die worden nagekomen.`,
  alternates: { canonical: `${site.url}/over` },
};

const WERKWIJZE = [
  { k: "Elke keer dezelfde", titel: "Een vast gezicht", tekst: "U hoeft uw verhaal niet telkens opnieuw te vertellen. Dezelfde zorgverlener, elke keer." },
  { k: "Eén nummer", titel: "Korte lijnen", tekst: `Eén nummer voor cliënt, familie en casemanager. U krijgt ${site.gezicht.voornaam} zelf aan de lijn.` },
  { k: "Op papier", titel: "Afspraken nakomen", tekst: "Tijden, taken en tarief staan vooraf op papier. Verandert er iets, dan hoort u het eerst." },
];

export default function Over() {
  const g = site.gezicht;
  const registraties = [
    { label: "KvK-nummer", waarde: site.kvk },
    ...(site.agbTonen ? [{ label: "AGB-code", waarde: site.agb }] : []),
    ...(site.vog ? [{ label: "VOG", waarde: "Aanwezig" }] : []),
    ...(site.wtza ? [{ label: "Wtza", waarde: site.wtza }] : []),
  ];
  return (
    <main>
      <HeroSub
        kruimels={[{ naam: "Over ons", pad: "/over" }]}
        eb={`Over ${site.naam}`}
        titel={<>Zorg die om de mens heen <Accent>wordt georganiseerd.</Accent></>}
        lead={`Een particuliere thuiszorgorganisatie in ${site.regio}. Bewust kleinschalig, zodat u altijd weet wie er binnenkomt.`}
        acties={<ZorgvraagKnop>Kennismaken</ZorgvraagKnop>}
        foto={{ src: FOTO.tuinbankje.src, alt: FOTO.tuinbankje.alt, positie: "50% 30%" }}
      />

      {/* [1] Verhaal, met het portret zonder lijn */}
      <section className="sec met-golf">
        <div className="wrap judy om">
          <div className="kopblok rv">
            <div className="eb">Ons verhaal</div>
            <h2 className="h2">Gezien, gehoord en <Accent>gerespecteerd.</Accent></h2>
            {g.verhaal.map((alinea) => <p key={alinea} className="big">{alinea}</p>)}
            <div className="functie" style={{ marginTop: 4 }}>{g.naam}</div>
          </div>
          <Portret />
        </div>
        <Golf kleur="peach" />
      </section>

      {/* [2] Gezicht */}
      <section className="sec peach met-golf">
        <div className="wrap">
          <div className="head rv">
            <div className="kopblok">
              <div className="eb">Het gezicht</div>
              <h2 className="h2">Wie er bij u <Accent>binnenkomt.</Accent></h2>
            </div>
            <div className="col" style={{ gap: 6 }}>
              <div className="functie">{g.functie}</div>
              <h3 className="h3" style={{ fontSize: 24 }}>{g.naam}</h3>
              <p className="sm" style={{ fontSize: 17, color: "var(--text)" }}>{g.bio}</p>
            </div>
          </div>
          <div className="raster r3">
            <Mini ill="hand" titel="Ervaring met"><div style={{ marginTop: 12 }}><Tags items={g.ervaringMet} /></div></Mini>
            <Mini ill="bel" titel="Talen"><div style={{ marginTop: 12 }}><Tags items={g.talen} /></div></Mini>
            <Mini ill="verzorging" titel="Samenwerking">
              <p>Voor verpleegtechnische en voorbehouden handelingen werken wij samen met verzorgenden IG en verpleegkundigen. Een nieuw gezicht stellen wij altijd eerst aan u voor.</p>
            </Mini>
          </div>
        </div>
        <Golf kleur="cream" />
      </section>

      {/* [3] Werkwijze + [4] registraties */}
      <section className="sec">
        <div className="wrap">
          <SectieKop eb="Werkwijze" titel={<>Drie dingen waar u ons <Accent>op mag aanspreken.</Accent></>} />
          <div className="raster r3">
            <div className="bento-kaart foto rv">
              <Foto src={FOTO.voordeur.src} alt={FOTO.voordeur.alt} positie="40% 40%" sizes="(max-width: 1020px) 100vw, 380px" />
              <span className="tegel"><IllHuis /></span>
              <div className="txt">
                <div className="k">{WERKWIJZE[0].k}</div>
                <h3 className="h3">{WERKWIJZE[0].titel}</h3>
                <p>{WERKWIJZE[0].tekst}</p>
              </div>
            </div>
            <div className="bento-kaart rv">
              <div className="tegel"><IllBel /></div>
              <div className="k">{WERKWIJZE[1].k}</div>
              <h3 className="h3" style={{ marginTop: 0 }}>{WERKWIJZE[1].titel}</h3>
              <p>{WERKWIJZE[1].tekst}</p>
            </div>
            <div className="bento-kaart donker rv">
              <div className="tegel"><IllPapier /></div>
              <div className="k">{WERKWIJZE[2].k}</div>
              <h3 className="h3" style={{ marginTop: 0 }}>{WERKWIJZE[2].titel}</h3>
              <p>{WERKWIJZE[2].tekst}</p>
            </div>
          </div>

          <div className="regs rv" style={{ alignItems: "center", marginTop: 48 }}>
            <div className="col" style={{ gap: 10, flex: "1 1 100%" }}>
              <div className="eb">Registraties</div>
              <h2 className="h3" style={{ fontSize: 22 }}>Waar u ons kunt terugvinden</h2>
            </div>
            {registraties.map((r) => (
              <span key={r.label}>{r.label}{" "}<b>{r.waarde}</b></span>
            ))}
            <span>Klachtenregeling{" "}<b>volgens de Wkkgz</b></span>
            <Link className="tekstlink" href="/klachtenregeling" style={{ marginLeft: "auto" }}>Klachtenregeling <Pijl /></Link>
          </div>
        </div>
      </section>

      {/* [5] Werkgebied */}
      <Werkgebiedblok />

      {/* [6] CTA */}
      <CtaBlok label="Kennismaken?" titel={<>Wij komen graag <Accent>bij u langs.</Accent></>} foto="voordeur" ill="huis" />
    </main>
  );
}
