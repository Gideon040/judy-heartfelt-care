import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/site.config";
import { haalArtikelen, artikelDatum } from "@/lib/kennisbank";
import { inhoud } from "./zorg/inhoud";
import { CtaBlok, Foto, Stappen, Tags, PlaatsPills, ZorgvraagKnop } from "@/components/Blokken";
import { Pijl, Vink, VinkKlein } from "@/components/Iconen";
import WerkgebiedKaart from "@/components/WerkgebiedKaart";
import Portret from "@/components/Portret";

export const metadata: Metadata = {
  alternates: { canonical: site.url },
};

// Kennisbankblok: nieuwe artikelen uit het portaal binnen een half uur zichtbaar.
export const revalidate = 1800;

const TAALKLEUR: Record<string, [string, string]> = {
  Nederlands: ["NL", "#D9653B"],
  Engels: ["EN", "#8E5A7A"],
  Papiaments: ["PAP", "#A8741F"],
  Spaans: ["ES", "#5B7A8E"],
};

const ROUTES = [
  { afk: "Pgb", titel: "Persoonsgebonden budget", tekst: "U kiest zelf uw zorgverlener. De meest gebruikte route voor zorg thuis." },
  { afk: "Wmo", titel: "Via uw gemeente", tekst: "Ondersteuning zoals begeleiding, dagbesteding of huishoudelijke hulp." },
  { afk: "Wlz", titel: "Wet langdurige zorg", tekst: "Voor wie blijvend intensieve zorg of toezicht nodig heeft, ook thuis." },
  { afk: "Particulier", titel: "Zelf betalen", tekst: "Geen indicatie nodig. Wij kunnen binnen enkele dagen starten." },
];

function lijstZin(items: readonly string[], klein = true) {
  const l = items.map((s, i) => (i === 0 || !klein ? s : s.toLowerCase()));
  return l.length > 1 ? `${l.slice(0, -1).join(", ")} en ${l[l.length - 1]}` : l[0];
}

export default async function Home() {
  const artikelen = await haalArtikelen();
  const g = site.gezicht;
  const ribA = [...g.ervaringMet.slice(0, 5), "Ambulante begeleiding", "Nachtzorg", "24-uurszorg", site.aankondiging.titel];
  const ribB = ["Geen wachtlijst", "Ook in het weekend", "Vanaf 1 uur zorg", "Kennismaking binnen 48 uur", ...g.talen];

  return (
    <main>
      {/* [2] Hero */}
      <section className="dk hero-home">
        <div className="wrap hero-grid">
          <div className="col" style={{ gap: 22, paddingBottom: 56 }}>
            {site.directPlek && <div className="eb rise">Direct plek voor nieuwe cliënten</div>}
            <h1 className="h1 rise e2">
              Thuiszorg met een vast gezicht <span className="it">in {site.plaats}</span> en omstreken
            </h1>
            <p className="lead rise e3">
              {lijstZin(["Persoonlijke verzorging", "begeleiding", "nachtzorg", "palliatieve zorg"])} bij u thuis in {site.plaats} en omstreken. Van één uur per week tot zorg rond de klok, zeven dagen per week.
            </p>
            <div className="row rise e4" style={{ marginTop: 6 }}>
              <ZorgvraagKnop />
              <a className="btn2" href="#diensten">Bekijk onze zorg</a>
            </div>
            <div className="col rise e4" style={{ gap: 9, marginTop: 4 }}>
              {["Kennismaking bij u thuis, meestal binnen 48 uur", "Via pgb, Wmo, Wlz of particulier", "Geen wachtlijst"].map((t) => (
                <div key={t} className="li"><Vink licht /><span>{t}</span></div>
              ))}
            </div>
            <div className="talen rise e4">
              <span>
                {g.talen.map((t) => (
                  <i key={t} style={{ background: TAALKLEUR[t]?.[1] }}>{TAALKLEUR[t]?.[0]}</i>
                ))}
              </span>
              Zorg in het {lijstZin(g.talen, false)}
            </div>
          </div>
          <div className="hv">
            <div className="gl" />
            <div className="pb">
              <Foto src="/afbeeldingen/judy-00-hero-keukentafel.webp" alt="Zorgverlener en oudere vrouw lachen samen aan de keukentafel" positie="62% 45%" sizes="390px" priority />
            </div>
            <div className="stat float" style={{ top: 34, right: 0 }}><b>{g.jarenErvaring} jaar</b><span>ervaring in de zorg</span></div>
            <div className="stat float" style={{ bottom: 46, right: 8 }}><b>48 uur</b><span>tot kennismaking</span></div>
            <div className="stat float f2" style={{ top: 60, left: 0 }}><b>Vast</b><span>gezicht en aanspreekpunt</span></div>
          </div>
        </div>
      </section>

      {/* [3] Trustbalk */}
      <section className="trust">
        <div className="wrap">
          {[
            [`KvK ${site.kvk}`, "ingeschreven"],
            [`AGB ${site.agb}`, "zorgaanbieder"],
            ...(site.vog ? [["VOG aanwezig", "actueel"]] : []),
            ...(site.wtza ? [["Wtza", site.wtza]] : []),
            ["Klachtenregeling", site.geschilleninstantie || "volgens de Wkkgz"],
            ["Geen wachtlijst", "directe start"],
          ].map(([b, s]) => (
            <div key={b} className="trust-item">
              <span><VinkKlein /></span>
              <span><b>{b}</b><small>{s}</small></span>
            </div>
          ))}
        </div>
      </section>

      {/* [4] Diensten */}
      <section className="sec" id="diensten" style={{ paddingBottom: 40 }}>
        <div className="wrap col" style={{ gap: 40 }}>
          <div className="col rv kopblok midden">
            <div className="eb">Onze zorg</div>
            <h2 className="h2">Thuiszorg op maat, <span className="it">7 dagen per week</span></h2>
            <p className="lead">Alle zorg is ook in het weekend beschikbaar. Na een kosteloze kennismaking leggen wij samen vast wat er nodig is.</p>
          </div>
          <div className="svc rv">
            {site.diensten.map((d) => {
              const t = inhoud[d.slug];
              return (
                <Link key={d.slug} href={`/zorg/${d.slug}`} className={d.slug === site.hoofddienst ? "open" : undefined}>
                  <Foto src={t.afbeelding} alt="" positie={t.positie} sizes="(max-width: 800px) 100vw, 40vw" />
                  <span className="vl">{d.naam}</span>
                  <span className="inf"><b>{d.naam}</b><span>{t.kaart}</span><i>ook in het weekend</i></span>
                </Link>
              );
            })}
          </div>
          <div className="card rv" style={{ padding: "26px 30px", borderRadius: 22, background: "#FFF5EC", borderColor: "#E3B49A", display: "flex", flexWrap: "wrap", gap: 18, alignItems: "center", justifyContent: "space-between" }}>
            <div className="col" style={{ gap: 8, maxWidth: "68ch" }}>
              <span className="abbr">Binnenkort</span>
              <h3 className="h3" style={{ fontSize: 24 }}>{site.aankondiging.titel}</h3>
              <p className="sm">{site.aankondiging.tekst}</p>
            </div>
            <Link className="btn2" href="/zorgvraag">Interesse melden <Pijl /></Link>
          </div>
        </div>
      </section>

      <div className="ribs" aria-hidden="true">
        <div className="rib ra"><div className="mq">{[...ribA, ...ribA, ...ribA, ...ribA].map((t, i) => <span key={i}>{t}</span>)}</div></div>
        <div className="rib rb"><div className="mq">{[...ribB, ...ribB, ...ribB, ...ribB].map((t, i) => <span key={i}>{t}</span>)}</div></div>
      </div>

      {/* [5] Zo werkt het */}
      <Stappen
        midden
        kop={<>Vandaag een zorgvraag, <span className="it">morgen aan tafel</span></>}
        teksten={[
          "Online in twee minuten of telefonisch. U hoort dezelfde werkdag van ons.",
          "Kosteloos bij u thuis. Wij luisteren, kijken mee en leggen de afspraken vast.",
          "Dezelfde zorgverlener, elke keer. Wij blijven uw aanspreekpunt.",
        ]}
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(260px,100%),1fr))", gap: 34, alignItems: "center" }}>
          <div className="col rv" style={{ gap: 32 }}>
            <div className="feat"><b>Vaste zorgverlener</b><p className="sm">Geen wisselende gezichten aan de deur.</p></div>
            <div className="feat"><b>Ook in het weekend</b><p className="sm">Zorg stopt niet op vrijdag. Wij ook niet.</p></div>
          </div>
          <div className="pb rv" style={{ height: 340, borderRadius: 24, border: "6px solid rgba(255,255,255,.08)" }}>
            <Foto src="/afbeeldingen/judy-07-voordeur.webp" alt="Zorgverlener en dochter bij de voordeur van een oudere vrouw" positie="50% 36%" sizes="(max-width: 900px) 100vw, 400px" />
          </div>
          <div className="col rv" style={{ gap: 32 }}>
            <div className="feat"><b>Samen met IG en verpleegkundigen</b><p className="sm">Voor verpleegtechnische zorg werken wij samen met bevoegde collega&apos;s.</p></div>
            <div className="feat"><b>Geen wachtlijst</b><p className="sm">Wij kunnen meestal binnen enkele dagen starten.</p></div>
          </div>
        </div>
      </Stappen>

      {/* [6] Gezicht */}
      <section className="sec">
        <div className="wrap col" style={{ gap: 40 }}>
          <div className="col rv kopblok midden">
            <div className="eb">Het gezicht achter {site.naam}</div>
            <h2 className="h2">Maak kennis met <span className="it">{g.voornaam}</span></h2>
          </div>
          <div className="card rv" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(380px,100%),1fr))", overflow: "hidden", borderRadius: 28, boxShadow: "0 20px 44px -22px rgba(60,30,40,.3)" }}>
            <Portret minHoogte={420} />
            <div className="col" style={{ gap: 14, padding: "clamp(26px,4vw,44px)" }}>
              <div style={{ color: "#C9572F", fontWeight: 700, fontSize: 14 }}>{g.functie}</div>
              <h3 className="h3" style={{ fontSize: 30 }}>{g.naam}</h3>
              <p className="sm" style={{ fontSize: 16.5 }}>&ldquo;{g.citaat}&rdquo;</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 12 }}>
                <div className="mini-stat"><b>{g.jarenErvaring} jaar</b><span className="sm">ervaring</span></div>
                <div className="mini-stat"><b>{g.opleiding}</b><span className="sm">{g.opleidingStatus}</span></div>
                <div className="mini-stat"><b>{g.talen.length} talen</b><span className="sm">aan het bed</span></div>
              </div>
              <Tags items={g.ervaringMet.slice(0, 5)} />
              <div className="row" style={{ marginTop: 6 }}><Link className="btn" href="/over">Meer over ons <Pijl /></Link></div>
            </div>
          </div>
        </div>
      </section>

      {/* [7] Vergoeding */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap col" style={{ gap: 36 }}>
          <div className="kopbalk">
            <div className="col rv kopblok" style={{ maxWidth: 700 }}>
              <div className="eb">Vergoeding</div>
              <h2 className="h2">Vier manieren om de zorg <span className="it">te betalen</span></h2>
              <p className="lead">Wij helpen kosteloos met de aanvraag, de zorgovereenkomst en de urenverantwoording.</p>
            </div>
            <Link className="btn2 rv" href="/tarieven-en-vergoeding">Tarieven en vergoeding <Pijl /></Link>
          </div>
          <div className="g4" style={{ gap: 20 }}>
            {ROUTES.map((r) => (
              <div key={r.afk} className="card col rv lift route">
                <span className="abbr">{r.afk}</span>
                <h3 className="h3" style={{ marginTop: 4 }}>{r.titel}</h3>
                <p className="sm">{r.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [8] Werkgebied */}
      <section className="sec" style={{ background: "#FBEFE4" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(440px,100%),1fr))", gap: 56, alignItems: "center" }}>
          <div className="col rv" style={{ gap: 18 }}>
            <div className="eb">Werkgebied</div>
            <h2 className="h2">Bij u in de buurt, in <span className="it">{site.regio}</span></h2>
            <p className="lead">Kies uw plaats om te zien wat wij daar doen.</p>
            <PlaatsPills />
            <Link className="tekstlink" href="/werkgebied">Alle plaatsen bekijken</Link>
          </div>
          <div className="card rv" style={{ padding: 26, borderRadius: 26 }}><WerkgebiedKaart /></div>
        </div>
      </section>

      {/* [9] Kennisbank: pas tonen bij minimaal 3 artikelen */}
      {artikelen.length >= 3 && (
        <section className="sec">
          <div className="wrap col" style={{ gap: 36 }}>
            <div className="kopbalk">
              <div className="col rv kopblok"><div className="eb">Kennisbank</div><h2 className="h2">Eerst even <span className="it">lezen?</span></h2></div>
              <Link className="btn2 rv" href="/kennisbank">Alle artikelen <Pijl /></Link>
            </div>
            <div className="g3">
              {artikelen.slice(0, 3).map((a) => (
                <Link key={a.slug} className="card col rv lift" href={`/kennisbank/${a.slug}`} style={{ gap: 10, padding: 26, borderRadius: 22, textDecoration: "none", color: "#2A1F2D" }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#C9572F", letterSpacing: ".08em", textTransform: "uppercase" }}>{artikelDatum(a.gepubliceerd_op)}</span>
                  <span className="h3">{a.titel}</span>
                  {a.samenvatting && <span className="sm">{a.samenvatting}</span>}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* [10] CTA */}
      <CtaBlok id="aanvraag" label="Vandaag een zorgvraag? Morgen aan tafel." titel={<>Vertel ons wat er nodig is, <span className="it">wij regelen de rest</span></>} />
    </main>
  );
}
