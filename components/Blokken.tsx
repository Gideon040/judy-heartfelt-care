// Bouwblokken die op meerdere pagina's terugkomen (structuurspec hoofdstuk 4).
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/site.config";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import type { Kop } from "@/app/zorg/inhoud";
import { Pijl, Telefoon } from "./Iconen";
import { StapKennismaking, StapStart, StapZorgvraag } from "./Illustraties";

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

// Kop met een cursief accentwoord, zoals overal in het ontwerp.
export function K({ k }: { k: Kop }) {
  return (
    <>
      {k.voor}
      <span className="it">{k.it}</span>
      {k.na}
    </>
  );
}

export function Foto({ src, alt, positie = "50% 50%", sizes = "(max-width: 900px) 100vw, 50vw", priority = false }: {
  src: string;
  alt: string;
  positie?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: "cover", objectPosition: positie }} />;
}

export function BelKnop() {
  return (
    <a className="btn2" href={`tel:${site.telefoon}`}><Telefoon />{site.telefoonWeergave}</a>
  );
}

// zorg/plaats vullen de wizard alvast in.
export function ZorgvraagKnop({ children = "Zorgvraag stellen", zorg, plaats }: { children?: ReactNode; zorg?: string; plaats?: string }) {
  const q = new URLSearchParams({ ...(zorg && { zorg }), ...(plaats && { plaats }) }).toString();
  return (
    <Link className="btn" href={q ? `/zorgvraag?${q}` : "/zorgvraag"}>{children} <Pijl /></Link>
  );
}

// Kruimelpad + BreadcrumbList-schema. items van hoog naar laag, zonder Home.
export function Kruimelpad({ items, licht = false }: { items: { naam: string; pad: string }[]; licht?: boolean }) {
  const alle = [{ naam: "Home", pad: "" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbSchema(alle)} />
      <nav className={licht ? "crumb lt" : "crumb"} aria-label="Kruimelpad">
        {alle.map((it, i) =>
          i === alle.length - 1 ? (
            <b key={it.pad}>{it.naam}</b>
          ) : (
            <span key={it.pad} style={{ display: "contents" }}>
              <Link href={it.pad || "/"}>{it.naam}</Link>
              <span aria-hidden="true">/</span>
            </span>
          )
        )}
      </nav>
    </>
  );
}

// Donkere hero van alle subpagina's.
export function HeroSub({ kruimels, eb, titel, lead, acties, foto }: {
  kruimels: { naam: string; pad: string }[];
  eb: string;
  titel: ReactNode;
  lead: ReactNode;
  acties?: ReactNode;
  foto?: { src: string; alt: string; positie?: string };
}) {
  return (
    <section className="dk hero-sub">
      <span className="glow hero-gloed" aria-hidden="true" />
      <div className="wrap col" style={{ gap: 30, position: "relative" }}>
        <Kruimelpad items={kruimels} />
        <div className={foto ? "hero-grid" : "hero-grid breed"}>
          <div className="col" style={{ gap: 20, paddingBottom: 60 }}>
            <div className="eb rise">{eb}</div>
            <h1 className="h1 rise e2">{titel}</h1>
            <p className="lead rise e3">{lead}</p>
            {acties && <div className="row rise e4">{acties}</div>}
          </div>
          {foto && (
            <div className="hv hs klein">
              <div className="gl" />
              <div className="pb"><Foto src={foto.src} alt={foto.alt} positie={foto.positie} sizes="300px" priority /></div>
              <div className="stat float" style={{ right: 0, top: 34 }}><b>48 uur</b><span>tot kennismaking</span></div>
              <div className="stat float f2" style={{ left: 0, bottom: 60 }}><b>7 dagen</b><span>per week, ook weekend</span></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Afsluitend CTA-blok (home blok 10 en verder op elke pagina).
export function CtaBlok({ label, titel, id }: { label: string; titel: ReactNode; id?: string }) {
  return (
    <section id={id} style={{ padding: "0 0 96px" }}>
      <div className="wrap rv">
        <div className="cta-blok">
          <span className="cirkel" aria-hidden="true" />
          <div className="label">{label}</div>
          <h2 className="h2">{titel}</h2>
          <p className="lead">Online in twee minuten, of bel ons {site.bereikbaarKort}.</p>
          <div className="row" style={{ justifyContent: "center", marginTop: 8 }}>
            <ZorgvraagKnop />
            <BelKnop />
          </div>
        </div>
      </div>
    </section>
  );
}

const ILLUSTRATIES = [StapZorgvraag, StapKennismaking, StapStart];

// "Zo werkt het": drie stappen op donker.
export function Stappen({ kop, teksten, titels, midden = false, children }: {
  kop: ReactNode;
  teksten: readonly [string, string, string];
  titels?: readonly [string, string, string];
  midden?: boolean;
  children?: ReactNode;
}) {
  const t = titels ?? ["Zorgvraag stellen", "Kennismaking binnen 48 uur", "Vaste zorg start"];
  return (
    <section className="dk sec">
      <div className="wrap col" style={{ gap: 48 }}>
        <div className={midden ? "col rv kopblok midden" : "col rv kopblok"} style={{ maxWidth: midden ? undefined : 760 }}>
          <div className="eb">Zo werkt het</div>
          <h2 className="h2">{kop}</h2>
        </div>
        {children}
        <div className="g3" style={{ gap: 20 }}>
          {teksten.map((tekst, i) => {
            const Ill = ILLUSTRATIES[i];
            return (
              <div key={i} className="col rv lift stap">
                <div className="ill"><Ill /></div>
                <div className="stap-kop"><span className="nc">{i + 1}</span><h3 className="h3">{t[i]}</h3></div>
                <p className="sm">{tekst}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// FAQ-lijst met FAQPage-schema.
export function FaqLijst({ vragen, schema = true }: { vragen: readonly { vraag: string; antwoord: string }[]; schema?: boolean }) {
  return (
    <>
      {schema && <JsonLd data={faqSchema(vragen)} />}
      <div className="faq">
        {vragen.map((v, i) => (
          <details key={v.vraag} open={i === 0}>
            <summary>{v.vraag}</summary>
            <p>{v.antwoord}</p>
          </details>
        ))}
      </div>
    </>
  );
}

export function FaqSectie({ kop, vragen }: { kop: ReactNode; vragen: readonly { vraag: string; antwoord: string }[] }) {
  return (
    <section className="sec">
      <div className="wrap col rv" style={{ gap: 32, maxWidth: 900 }}>
        <div className="col" style={{ gap: 16 }}>
          <div className="eb">Veelgestelde vragen</div>
          <h2 className="h2">{kop}</h2>
        </div>
        <FaqLijst vragen={vragen} />
      </div>
    </section>
  );
}

export function Band({ src, alt, eb, titel, lead }: { src: string; alt: string; eb: string; titel: ReactNode; lead: string }) {
  return (
    <section style={{ padding: "0 0 96px" }}>
      <div className="wrap rv">
        <div className="dk band">
          <Foto src={src} alt={alt} sizes="(max-width: 1248px) 100vw, 1200px" />
          <div className="band-schaduw" />
          <div className="col band-tekst">
            <div className="eb">{eb}</div>
            <h2 className="h2">{titel}</h2>
            <p className="lead">{lead}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Tags({ items }: { items: readonly string[] }) {
  return (
    <div className="row" style={{ gap: 8 }}>
      {items.map((t) => <span key={t} className="tagc">{t}</span>)}
    </div>
  );
}

// Plaats-pills naar de dienst×plaatspagina van de hoofddienst (spec 5).
export function PlaatsPills({ dienst = site.hoofddienst, prefix = "" }: { dienst?: string; prefix?: string }) {
  return (
    <div className="row" style={{ gap: 12 }}>
      {site.werkgebied
        .filter((p) => (p.diensten as readonly string[]).includes(dienst))
        .map((p) => (
          <Link key={p.slug} className="pill" href={`/zorg/${dienst}/${p.slug}`}>{prefix}{p.naam}</Link>
        ))}
    </div>
  );
}

export function Werkgebiedblok() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap col rv" style={{ gap: 18 }}>
        <div className="eb">Werkgebied</div>
        <h2 className="h2">Waar wij <span className="it">komen.</span></h2>
        <PlaatsPills />
        <Link className="tekstlink" href="/werkgebied">Alle plaatsen bekijken</Link>
      </div>
    </section>
  );
}
