import type { Metadata } from "next";
import { site } from "@/site.config";
import { CtaBlok, FaqSectie, Foto, HeroSub, SectieKop, ZorgvraagKnop } from "@/components/Blokken";
import Accent from "@/components/Accent";
import Golf from "@/components/Golf";
import { FOTO } from "@/components/fotos";
import { IllPapier } from "@/components/Illustraties";

export const metadata: Metadata = {
  title: `Tarieven en vergoeding | ${site.naam}`,
  description: `Wat kost thuiszorg bij ${site.naam}? Een vast tarief per uur of per nacht, vooraf op papier. Betalen via pgb, Wmo, Wlz of particulier.`,
  alternates: { canonical: `${site.url}/tarieven-en-vergoeding` },
};

// Wat bij elke tariefregel is inbegrepen (ontwerp).
const INBEGREPEN: Record<string, string> = {
  "Persoonlijke verzorging": "Wassen, aankleden, rapportage en overleg met familie",
  Begeleiding: "Structuur, afspraken en meedenken met de administratie",
  Dagbesteding: "Activiteit op maat, vervoer in overleg",
  "Huishoudelijke hulp": "Schoonmaak, was en boodschappen",
  Waakdienst: "Wakend toezicht, verzorging en overdracht in de ochtend",
  Slaapdienst: "Aanwezigheid, opstaan wanneer het nodig is",
  "Palliatieve zorg": "Comfortzorg, nabijheid en steun voor de naasten",
};

// Titels per route komen van de homepage (zelfde vier routes).
const ROUTES = [
  {
    afk: "Pgb",
    titel: "Persoonsgebonden budget",
    wat: "Een persoonsgebonden budget waarmee u zelf uw zorgverlener kiest.",
    wie: "Mensen met een indicatie die zelf de regie willen houden.",
    hoe: "Via het CIZ of de gemeente. Daarna sluit u een zorgovereenkomst via de SVB.",
  },
  {
    afk: "Wmo",
    titel: "Via uw gemeente",
    wat: "Ondersteuning vanuit de gemeente, zoals begeleiding, dagbesteding of huishoudelijke hulp.",
    wie: "Mensen die thuis wonen en hulp nodig hebben om zich te redden.",
    hoe: "Met een melding bij het Wmo-loket van uw gemeente, gevolgd door een gesprek.",
  },
  {
    afk: "Wlz",
    titel: "Wet langdurige zorg",
    wat: "De Wet langdurige zorg, voor wie blijvend intensieve zorg of toezicht nodig heeft.",
    wie: "Onder meer mensen met gevorderde dementie die thuis willen blijven.",
    hoe: "Via het CIZ. Met een Wlz-indicatie en een pgb is zorg thuis vaak mogelijk.",
  },
  {
    afk: "Particulier",
    titel: "Zelf betalen",
    wat: "U betaalt de zorg zelf, zonder gemeente of zorgkantoor ertussen.",
    wie: "Iedereen die snel wil starten of de wachttijd wil overbruggen.",
    hoe: "Dat hoeft niet. Na de kennismaking kunnen wij binnen enkele dagen beginnen.",
  },
].filter((r) => (site.financiering as readonly string[]).includes(r.afk));

const FAQ = [
  { vraag: "Waarom staan de tarieven niet op de website?", antwoord: "Omdat de prijs afhangt van de zorgzwaarte, de duur van de dienst en de reisafstand. U krijgt liever één bedrag dat klopt dan een vanaf-prijs die later anders uitvalt." },
  { vraag: "Betaal ik voor de kennismaking?", antwoord: "Nee. De kennismaking bij u thuis is kosteloos en vrijblijvend." },
  { vraag: "Komt er btw bij?", antwoord: "Nee. Zorg aan huis is vrijgesteld van btw." },
  { vraag: "Wat als mijn pgb niet toereikend is?", antwoord: "Dan kijken wij samen naar een combinatie: een deel uit het pgb en een deel particulier, of een andere verdeling van de uren." },
  { vraag: "Vergoedt mijn zorgverzekering deze zorg?", antwoord: "Wijkverpleging vanuit de zorgverzekering valt buiten ons aanbod. Wij werken naast de wijkverpleging, via pgb, Wmo, Wlz of particulier." },
];

export default function Tarieven() {
  const rijen = site.diensten.flatMap((d) =>
    d.tarieven.map((r) => ({ ...r, naam: d.tarieven.length > 1 ? `${d.naam}, ${r.label.toLowerCase()}` : d.naam }))
  );
  return (
    <main>
      <HeroSub
        kruimels={[{ naam: "Tarieven en vergoeding", pad: "/tarieven-en-vergoeding" }]}
        eb="Tarieven en vergoeding"
        titel={<>Wat kost thuiszorg bij <Accent>{`${site.naam}?`}</Accent></>}
        lead="Een vast tarief per uur of per nacht, vooraf op papier. Geen opstartkosten en geen btw, want zorg is daarvan vrijgesteld."
        acties={<ZorgvraagKnop>Prijsopgave aanvragen</ZorgvraagKnop>}
        foto={{ src: FOTO.keukentafel.src, alt: FOTO.keukentafel.alt, positie: "62% 45%" }}
      />

      {/* Tarieven per zorgvorm */}
      <section className="sec met-golf">
        <div className="wrap">
          <SectieKop
            eb="Tarieven"
            titel={<>Per zorgvorm, <Accent>zonder verrassingen.</Accent></>}
            tekst="Het tarief hangt af van de zorgzwaarte, de duur en de reisafstand. Tijdens de kosteloze kennismaking krijgt u één bedrag dat klopt."
          />
          <div className="rijen rv">
            <div className="r h" aria-hidden="true"><span>ZORGVORM</span><span>EENHEID</span><span>TARIEF</span></div>
            {rijen.map((r) => (
              <div key={r.naam} className="r">
                <div><b>{r.naam}</b><small>{INBEGREPEN[r.label]}</small></div>
                <span className="eenheid">{r.eenheid}</span>
                <span className="bedrag">{r.prijs}</span>
              </div>
            ))}
          </div>
          <ul className="checks rv" style={{ marginTop: 24 }}>
            {["Kennismaking thuis is kosteloos", "Geen opstartkosten", "U betaalt alleen de geleverde uren of nachten"].map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <Golf kleur="peach" />
      </section>

      {/* Vergoeding: vier routes */}
      <section className="sec peach met-golf">
        <div className="wrap">
          <SectieKop
            eb="Vergoeding"
            titel={<>Vier routes, <Accent>eerlijk uitgelegd.</Accent></>}
            tekst="Niet elke route staat voor iedereen open. Tijdens de kennismaking kijken wij welke bij u past."
          />
          <div className="raster r4">
            {ROUTES.map((r) => (
              <div key={r.afk} className={r.afk === "Particulier" ? "kaart donker label-snel rv" : "kaart rv"}>
                <span className="abbr">{r.afk}</span>
                <h3 className="h3" style={{ marginTop: 16, fontSize: 18 }}>{r.titel}</h3>
                <div className="route-tekst">
                  <p><b>Wat het is.</b> {r.wat}</p>
                  <p><b>Voor wie.</b> {r.wie}</p>
                  <p><b>Hoe aanvragen.</b> {r.hoe}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Golf kleur="cream" />
      </section>

      {/* Wij helpen */}
      <section className="sec">
        <div className="wrap split mid">
          <div className="kopblok rv">
            <div className="eb">Wij helpen</div>
            <h2 className="h2">De aanvraag doet u <Accent>niet alleen.</Accent></h2>
            <p className="big">Papierwerk hoort erbij, maar het hoeft niet op uw bord te belanden. Deze hulp is kosteloos.</p>
            <ul className="checks">
              {[
                "Meedenken met de aanvraag bij het CIZ of de gemeente",
                "Samen de zorgovereenkomst voor de SVB invullen",
                "Elke maand een urenoverzicht dat direct ingediend kan worden",
              ].map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
          <div className="cta-beeld rv" style={{ display: "block", width: "min(380px,100%)" }}>
            <div className="cta-foto"><Foto src={FOTO.pgb.src} alt={FOTO.pgb.alt} positie="30% 50%" sizes="380px" /></div>
            <span className="cta-tegel"><IllPapier /></span>
          </div>
        </div>
      </section>

      <FaqSectie kop={<>Vragen over <Accent>kosten.</Accent></>} vragen={FAQ} />

      <CtaBlok label="Wilt u weten wat het kost?" titel={<>Vraag een prijsopgave aan, <Accent>vrijblijvend.</Accent></>} foto="keukentafel" ill="papier" />
    </main>
  );
}
