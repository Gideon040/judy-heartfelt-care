import type { Metadata } from "next";
import { site } from "@/site.config";
import { CtaBlok, FaqSectie, Foto, HeroSub, ZorgvraagKnop } from "@/components/Blokken";
import { Vink } from "@/components/Iconen";

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

const ROUTES = [
  {
    afk: "Pgb",
    wat: "Een persoonsgebonden budget waarmee u zelf uw zorgverlener kiest.",
    wie: "Mensen met een indicatie die zelf de regie willen houden.",
    hoe: "Via het CIZ of de gemeente. Daarna sluit u een zorgovereenkomst via de SVB.",
  },
  {
    afk: "Wmo",
    wat: "Ondersteuning vanuit de gemeente, zoals begeleiding, dagbesteding of huishoudelijke hulp.",
    wie: "Mensen die thuis wonen en hulp nodig hebben om zich te redden.",
    hoe: "Met een melding bij het Wmo-loket van uw gemeente, gevolgd door een gesprek.",
  },
  {
    afk: "Wlz",
    wat: "De Wet langdurige zorg, voor wie blijvend intensieve zorg of toezicht nodig heeft.",
    wie: "Onder meer mensen met gevorderde dementie die thuis willen blijven.",
    hoe: "Via het CIZ. Met een Wlz-indicatie en een pgb is zorg thuis vaak mogelijk.",
  },
  {
    afk: "Particulier",
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
        titel={<>Wat kost thuiszorg bij <span className="it">{site.naam}?</span></>}
        lead="Een vast tarief per uur of per nacht, vooraf op papier. Geen opstartkosten en geen btw, want zorg is daarvan vrijgesteld."
        acties={<ZorgvraagKnop>Prijsopgave aanvragen</ZorgvraagKnop>}
        foto={{ src: "/afbeeldingen/tijdelijk-08-tarieven.jpg", alt: "Familie neemt samen de kosten door" }}
      />

      <section className="sec">
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(380px,100%),1fr))", gap: 64, alignItems: "start" }}>
          <div className="col rv" style={{ gap: 18 }}>
            <div className="eb">Tarieven</div>
            <h2 className="h2">Per zorgvorm, <span className="it">zonder verrassingen.</span></h2>
            <p className="lead">Het tarief hangt af van de zorgzwaarte, de duur en de reisafstand. Tijdens de kosteloze kennismaking krijgt u één bedrag dat klopt.</p>
            <div className="col" style={{ gap: 10 }}>
              {["Kennismaking thuis is kosteloos", "Geen opstartkosten", "U betaalt alleen de geleverde uren of nachten"].map((t) => (
                <div key={t} className="li"><Vink /><span>{t}</span></div>
              ))}
            </div>
          </div>
          <div className="card tarieven-tabel">
            {rijen.map((r) => (
              <div key={r.naam} className="rv tarief-rij">
                <div className="naam">{r.naam}<span className="sm">{INBEGREPEN[r.label]}</span></div>
                <div className="sm">{r.eenheid}</div>
                <div className="bedrag">{r.prijs}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "#FFF5EC" }}>
        <div className="wrap col" style={{ gap: 44 }}>
          <div className="col rv" style={{ gap: 16, maxWidth: 760 }}>
            <div className="eb">Vergoeding</div>
            <h2 className="h2">Vier routes, <span className="it">eerlijk uitgelegd.</span></h2>
            <p className="lead">Niet elke route staat voor iedereen open. Tijdens de kennismaking kijken wij welke bij u past.</p>
          </div>
          <div className="g2">
            {ROUTES.map((r) => (
              <div key={r.afk} className="card rv lift" style={{ padding: 30, borderRadius: 22, display: "flex", flexDirection: "column", gap: 14 }}>
                <span className="abbr">{r.afk}</span>
                <div className="col" style={{ gap: 12 }}>
                  <p className="sm"><b style={{ color: "#2A1F2D" }}>Wat het is.</b> {r.wat}</p>
                  <p className="sm"><b style={{ color: "#2A1F2D" }}>Voor wie.</b> {r.wie}</p>
                  <p className="sm"><b style={{ color: "#2A1F2D" }}>Hoe aanvragen.</b> {r.hoe}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dk sec">
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(440px,100%),1fr))", gap: 64, alignItems: "center" }}>
          <div className="col rv" style={{ gap: 20 }}>
            <div className="eb">Wij helpen</div>
            <h2 className="h2">De aanvraag doet u <span className="it">niet alleen.</span></h2>
            <p className="lead">Papierwerk hoort erbij, maar het hoeft niet op uw bord te belanden. Deze hulp is kosteloos.</p>
            <div className="col" style={{ gap: 12 }}>
              {[
                "Meedenken met de aanvraag bij het CIZ of de gemeente",
                "Samen de zorgovereenkomst voor de SVB invullen",
                "Elke maand een urenoverzicht dat direct ingediend kan worden",
              ].map((t) => (
                <div key={t} className="li"><Vink licht /><span>{t}</span></div>
              ))}
            </div>
          </div>
          <div className="rv" style={{ display: "flex", justifyContent: "center" }}>
            <div className="pb" style={{ width: "min(420px,100%)", height: 440, borderRadius: "200px 200px 24px 24px" }}>
              <Foto src="/afbeeldingen/judy-14-formulier-pgb.webp" alt="Samen een pgb-formulier invullen" sizes="420px" />
            </div>
          </div>
        </div>
      </section>

      <FaqSectie kop={<>Vragen over <span className="it">kosten.</span></>} vragen={FAQ} />

      <CtaBlok label="Wilt u weten wat het kost?" titel={<>Vraag een prijsopgave aan, <span className="it">vrijblijvend.</span></>} />
    </main>
  );
}
