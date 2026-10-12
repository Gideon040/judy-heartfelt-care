import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/site.config";
import { haalArtikelen, artikelDatum } from "@/lib/kennisbank";
import { inhoud } from "./zorg/inhoud";
import { CtaBlok, Foto, Panelen, SectieKop, Stappen, Tags, ZorgvraagKnop } from "@/components/Blokken";
import Accent from "@/components/Accent";
import Golf from "@/components/Golf";
import Portret from "@/components/Portret";
import { RegioKiezer } from "@/components/WerkgebiedKaart";
import { FOTO } from "@/components/fotos";
import { Pijl } from "@/components/Iconen";
import { IllAgenda, IllCultuur, IllHuis, IllPapier } from "@/components/Illustraties";

export const metadata: Metadata = {
  alternates: { canonical: site.url },
};

// Kennisbankblok: nieuwe artikelen uit het portaal binnen een half uur zichtbaar.
export const revalidate = 1800;

const TAALKLEUR: Record<string, [string, string]> = {
  Nederlands: ["NL", "#B24C1E"],
  Engels: ["EN", "#8E5A7A"],
  Papiaments: ["PAP", "#8A5C12"],
  Spaans: ["ES", "#4E6B7E"],
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

function Talen() {
  return (
    <span className="talen">
      {site.gezicht.talen.map((t) => (
        <i key={t} style={{ background: TAALKLEUR[t]?.[1] }}>{TAALKLEUR[t]?.[0]}</i>
      ))}
    </span>
  );
}

export default async function Home() {
  const artikelen = await haalArtikelen();
  const g = site.gezicht;
  const open = site.diensten.findIndex((d) => d.slug === site.hoofddienst);

  return (
    <main>
      {/* Hero: geen pill boven de H1, geen zwevende kaartjes op de foto */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <h1 className="h1">
              <span className="ln"><span>Thuiszorg met een vast gezicht </span></span>
              <span className="ln"><span><Accent>in {site.plaats}</Accent> en omstreken</span></span>
            </h1>
            <p className="lead fade">
              {lijstZin(["Persoonlijke verzorging", "begeleiding", "nachtzorg", "palliatieve zorg"])} bij u thuis in {site.plaats} en omstreken. Van één uur per week tot zorg rond de klok, zeven dagen per week.
            </p>
            <div className="cta-row fade f2">
              <ZorgvraagKnop />
              <a className="btn2" href="#diensten">Bekijk onze zorg</a>
            </div>
            <div className="hero-feiten fade f3">
              <span><b>{g.jarenErvaring} jaar</b> ervaring in de zorg</span>
              <span><b>48 uur</b> tot kennismaking</span>
              <span><b>Vast</b> gezicht en aanspreekpunt</span>
            </div>
            <div className="wie fade f3">
              {g.foto && <span className="wie-foto"><Foto src={g.foto} alt="" positie="50% 18%" sizes="52px" /></span>}
              <div><b>{g.naam}</b><span>{g.functie}, uw vaste aanspreekpunt</span></div>
            </div>
          </div>
          <div className="boog">
            <div className="boog-foto">
              <Foto src={FOTO.keukentafel.src} alt={FOTO.keukentafel.alt} positie="62% 45%" sizes="(max-width: 1020px) 90vw, 440px" preload />
            </div>
            <svg className="hartlijn" viewBox="0 0 400 500" preserveAspectRatio="none" aria-hidden="true" focusable="false">
              <path pathLength={1} d="M30 470 C10 300 20 150 90 70 C150 5 250 5 310 70 C380 150 392 300 372 470 M372 470 C372 440 350 420 330 432 C312 410 284 420 290 446 C296 470 330 488 342 500" />
            </svg>
          </div>
        </div>
        <Golf kleur="cream" vorm="hero" className="golf-hero" />
      </section>

      {/* Beloftebalk: witte kaart half over de golf */}
      <section className="belofte">
        <div className="wrap">
          <div className="belofte-rij rv">
            <div><IllHuis /><span><b>Binnen 48 uur</b>{" "}Kennismaking bij u thuis, meestal binnen 48 uur</span></div>
            <div><IllPapier /><span><b>Pgb, Wmo, Wlz</b>{" "}Via pgb, Wmo, Wlz of particulier</span></div>
            <div><Talen /><span><b>{g.talen.length === 4 ? "Vier" : g.talen.length} talen</b>{" "}Zorg in het {lijstZin(g.talen, false)}</span></div>
            <div><IllAgenda /><span><b>Geen wachtlijst</b>{" "}{site.directPlek ? "Direct plek voor nieuwe cliënten" : "Vanaf 1 uur zorg"}</span></div>
          </div>
        </div>
      </section>

      {/* Zorgvormen als uitklappende fotopanelen */}
      <section className="sec" id="diensten" style={{ paddingBottom: "calc(clamp(72px,9vw,112px) + var(--golf))" }}>
        <div className="wrap">
          <SectieKop
            eb="Onze zorg"
            titel={<>Thuiszorg op maat, <Accent>7 dagen per week</Accent></>}
            tekst="Alle zorg is ook in het weekend beschikbaar. Na een kosteloze kennismaking leggen wij samen vast wat er nodig is."
            midden
          />
          <Panelen
            open={open}
            items={site.diensten.map((d) => {
              const t = inhoud[d.slug];
              return { titel: d.naam, tekst: t.kaart, label: "ook in het weekend", href: `/zorg/${d.slug}`, foto: { src: t.afbeelding, alt: t.alt, positie: t.positie } };
            })}
          />
          <p className="ook rv">
            Ook: <span>24-uurszorg</span> &middot; <Link href="/zorg/begeleiding">Ambulante begeleiding</Link> &middot; <Link href="/zorgvraag">{site.aankondiging.titel}</Link> <span className="binnenkort">binnenkort</span>
          </p>
          <div className="aankondiging rv">
            <div className="aankondiging-tekst">
              <span className="tegel"><IllCultuur /></span>
              <div className="col" style={{ gap: 6 }}>
                <span className="abbr" style={{ background: "#fff" }}>Binnenkort</span>
                <h3 className="h3" style={{ fontSize: 22 }}>{site.aankondiging.titel}</h3>
                <p className="sm" style={{ color: "var(--text)" }}>{site.aankondiging.tekst}</p>
              </div>
            </div>
            <Link className="btn2" href="/zorgvraag">Interesse melden <Pijl /></Link>
          </div>
        </div>
      </section>

      {/* Zo werkt het: deurfoto met vier punten, drie stappen */}
      <Stappen
        kop={<>Vandaag een zorgvraag, <Accent>morgen aan tafel</Accent></>}
        teksten={[
          "Online in twee minuten of telefonisch. U hoort dezelfde werkdag van ons.",
          "Kosteloos bij u thuis. Wij luisteren, kijken mee en leggen de afspraken vast.",
          "Dezelfde zorgverlener, elke keer. Wij blijven uw aanspreekpunt.",
        ]}
        usp={
          <div className="usp">
            <div className="usp-kol rv">
              <div><b>Vaste zorgverlener</b><p>Geen wisselende gezichten aan de deur.</p></div>
              <div><b>Ook in het weekend</b><p>Zorg stopt niet op vrijdag. Wij ook niet.</p></div>
            </div>
            <div className="usp-foto rv">
              <Foto src={FOTO.voordeur.src} alt={FOTO.voordeur.alt} positie="45% 40%" sizes="(max-width: 1020px) 90vw, 300px" />
            </div>
            <div className="usp-kol rv">
              <div><b>Samen met IG en verpleegkundigen</b><p>Voor verpleegtechnische zorg werken wij samen met bevoegde collega&apos;s.</p></div>
              <div><b>Geen wachtlijst</b><p>Wij kunnen meestal binnen enkele dagen starten.</p></div>
            </div>
          </div>
        }
      />

      {/* Judy-blok */}
      <section className="sec met-golf">
        <div className="wrap judy">
          <Portret onderschrift={false} />
          <div className="rv">
            <div className="eb">Het gezicht achter {site.naam}</div>
            <h2 className="h2" style={{ marginTop: 16 }}>Maak kennis met <Accent>{g.voornaam}</Accent></h2>
            <p className="quote">&ldquo;{g.citaat}&rdquo;</p>
            <div style={{ marginTop: 16 }}>
              <h3 className="h3">{g.naam}</h3>
              <div className="functie" style={{ marginTop: 4 }}>{g.functie}</div>
            </div>
            <div className="feiten">
              <div><b>{g.jarenErvaring} jaar</b><span>ervaring</span></div>
              <div><b>{g.talen.length} talen</b><span>aan het bed</span></div>
              <div><b>{g.opleiding}</b><span>{g.opleidingStatus}</span></div>
            </div>
            <div style={{ marginTop: 22 }}><Tags items={g.ervaringMet.slice(0, 5)} /></div>
            <div className="row" style={{ marginTop: 28 }}><Link className="btn2" href="/over">Meer over ons <Pijl /></Link></div>
            <div className="regs">
              <span><b>KvK {site.kvk}</b>{" "}ingeschreven</span>
              {site.agbTonen && <span><b>AGB {site.agb}</b>{" "}zorgaanbieder</span>}
              {site.vog && <span><b>VOG aanwezig</b>{" "}actueel</span>}
              {site.wtza && <span><b>Wtza</b>{" "}{site.wtza}</span>}
              <span><b>Klachtenregeling</b>{" "}{site.geschilleninstantie || "volgens de Wkkgz"}</span>
              <span><b>Geen wachtlijst</b>{" "}directe start</span>
            </div>
          </div>
        </div>
        <Golf kleur="peach" />
      </section>

      {/* Vergoeding */}
      <section className="sec peach met-golf">
        <div className="wrap">
          <SectieKop
            eb="Vergoeding"
            titel={<>Vier manieren om de zorg <Accent>te betalen</Accent></>}
            tekst={<><p>Wij helpen kosteloos met de aanvraag, de zorgovereenkomst en de urenverantwoording.</p><p style={{ marginTop: 10 }}><Link className="tekstlink" href="/tarieven-en-vergoeding">Tarieven en vergoeding</Link></p></>}
          />
          <div className="raster r4">
            {ROUTES.map((r) => (
              <div key={r.afk} className={r.afk === "Particulier" ? "kaart donker label-snel rv" : "kaart rv"}>
                <span className="abbr">{r.afk}</span>
                <h3 className="h3" style={{ marginTop: 16, fontSize: 18 }}>{r.titel}</h3>
                <p className="sm" style={{ marginTop: 8 }}>{r.tekst}</p>
              </div>
            ))}
          </div>
        </div>
        <Golf kleur="cream" />
      </section>

      {/* Regio's */}
      <section className="sec">
        <div className="wrap">
          <RegioKiezer kop={<>Bij u in de buurt, in <Accent>{site.regio}</Accent></>} lead="Kies uw plaats om te zien wat wij daar doen." />
        </div>
      </section>

      {/* Kennisbank: pas tonen bij minimaal 3 artikelen */}
      {artikelen.length >= 3 && (
        <section className="sec krap">
          <div className="wrap">
            <SectieKop eb="Kennisbank" titel={<>Eerst even <Accent>lezen?</Accent></>} tekst={<Link className="tekstlink" href="/kennisbank">Alle artikelen</Link>} />
            <div className="raster r3">
              {artikelen.slice(0, 3).map((a) => (
                <Link key={a.slug} className="kaart rv col" href={`/kennisbank/${a.slug}`} style={{ gap: 10, textDecoration: "none", color: "var(--ink)" }}>
                  <span className="functie">{artikelDatum(a.gepubliceerd_op)}</span>
                  <span className="h3">{a.titel}</span>
                  {a.samenvatting && <span className="sm">{a.samenvatting}</span>}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBlok id="aanvraag" label="Vandaag een zorgvraag? Morgen aan tafel." titel={<>Vertel ons wat er nodig is, <Accent>wij regelen de rest</Accent></>} foto="tuinbankje" ill="bel" />
    </main>
  );
}
