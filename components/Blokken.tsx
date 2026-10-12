// Bouwstenen die op meerdere pagina's terugkomen (structuurspec hoofdstuk 4,
// vormgeving redesign/LEESMIJ.md).
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/site.config";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import type { Kop } from "@/app/zorg/inhoud";
import Accent from "./Accent";
import Golf, { type GolfKleur } from "./Golf";
import { FOTO, type FotoNaam } from "./fotos";
import { Pijl, Telefoon } from "./Iconen";
import { HART_PAD, Ill, type IllNaam } from "./Illustraties";

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

// Kop met een cursief accentwoord en de hartlijn.
export function K({ k }: { k: Kop }) {
  return (
    <>
      {k.voor}
      <Accent>{k.it}</Accent>
      {k.na}
    </>
  );
}

export function Foto({ src, alt, positie = "50% 50%", sizes = "(max-width: 1020px) 100vw, 50vw", preload = false }: {
  src: string;
  alt: string;
  positie?: string;
  sizes?: string;
  preload?: boolean;
}) {
  return (
    <Image src={src} alt={alt} fill sizes={sizes} preload={preload} fetchPriority={preload ? "high" : undefined}
      style={{ objectFit: "cover", objectPosition: positie }} />
  );
}

export function BelKnop() {
  return <a className="btn2" href={`tel:${site.telefoon}`}><Telefoon />{site.telefoonWeergave}</a>;
}

// zorg/plaats vullen de wizard alvast in.
export function ZorgvraagKnop({ children = "Zorgvraag stellen", zorg, plaats }: { children?: ReactNode; zorg?: string; plaats?: string }) {
  const q = new URLSearchParams({ ...(zorg && { zorg }), ...(plaats && { plaats }) }).toString();
  return <Link className="btn" href={q ? `/zorgvraag?${q}` : "/zorgvraag"}>{children} <Pijl /></Link>;
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
            <b key={it.pad} aria-current="page">{it.naam}</b>
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

const HARTLIJN = "M30 470 C10 300 20 150 90 70 C150 5 250 5 310 70 C380 150 392 300 372 470 M372 470 C372 440 350 420 330 432 C312 410 284 420 290 446 C296 470 330 488 342 500";

// Boogfoto met de hartlijn eromheen, eindigend in een klein hartje.
export function Boog({ src, alt, positie, sizes = "(max-width: 1020px) 90vw, 440px", preload = false, klein = false }: {
  src: string; alt: string; positie?: string; sizes?: string; preload?: boolean; klein?: boolean;
}) {
  return (
    <div className={klein ? "boog klein" : "boog"}>
      <div className="boog-foto"><Foto src={src} alt={alt} positie={positie} sizes={sizes} preload={preload} /></div>
      <svg className="hartlijn" viewBox="0 0 400 500" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d={HARTLIJN} pathLength={1} />
      </svg>
    </div>
  );
}

// Donkere hero van alle subpagina's.
export function HeroSub({ kruimels, eb, titel, lead, acties, foto, feiten = !!foto, golf = "cream" }: {
  kruimels: { naam: string; pad: string }[];
  eb?: string;
  titel: ReactNode;
  lead: ReactNode;
  acties?: ReactNode;
  foto?: { src: string; alt: string; positie?: string };
  feiten?: boolean;
  golf?: GolfKleur;
}) {
  return (
    <section className="hero hero-sub">
      <div className={foto ? "wrap hero-grid" : "wrap hero-grid breed"}>
        <div>
          <Kruimelpad items={kruimels} />
          {eb && <div className="eb fade" style={{ marginBottom: 18 }}>{eb}</div>}
          <h1 className="h1">{titel}</h1>
          <p className="lead fade">{lead}</p>
          {acties && <div className="cta-row fade f2">{acties}</div>}
          {feiten && (
            <div className="hero-feiten fade f3">
              <span><b>48 uur</b> tot kennismaking</span>
              <span><b>7 dagen</b> per week, ook weekend</span>
            </div>
          )}
        </div>
        {foto && <Boog src={foto.src} alt={foto.alt} positie={foto.positie} preload />}
      </div>
      <Golf kleur={golf} vorm="hero" className="golf-hero" />
    </section>
  );
}

// Sectiekop: eyebrow-pill, H2 met accent, optionele tekst rechts of eronder.
export function SectieKop({ eb, titel, tekst, midden = false, className = "" }: {
  eb: string; titel: ReactNode; tekst?: ReactNode; midden?: boolean; className?: string;
}) {
  return (
    <div className={`head rv${midden ? " midden" : ""} ${className}`}>
      <div className={midden ? "kopblok midden" : "kopblok"}>
        <div className="eb">{eb}</div>
        <h2 className="h2">{titel}</h2>
        {midden && tekst && <p className="lead">{tekst}</p>}
      </div>
      {!midden && tekst && <div className="head-tekst">{tekst}</div>}
    </div>
  );
}

// Afsluitende CTA-kaart: perzikverloop, boogfoto en een illustratietegel.
export function CtaBlok({ label, titel, id, foto = "keukentafel", ill = "bel" }: {
  label: string; titel: ReactNode; id?: string; foto?: FotoNaam; ill?: IllNaam;
}) {
  const f = FOTO[foto];
  return (
    <section id={id} className="cta-sec">
      <div className="wrap">
        <div className="cta rv">
          <div>
            <div className="cta-label">{label}</div>
            <h2 className="h2">{titel}</h2>
            <p>Online in twee minuten, of bel ons {site.bereikbaarKort}.</p>
            <div className="cta-row">
              <ZorgvraagKnop />
              <BelKnop />
            </div>
          </div>
          <div className="cta-beeld" aria-hidden="true">
            <div className="cta-foto"><Foto src={f.src} alt="" sizes="320px" /></div>
            <span className="cta-tegel"><Ill naam={ill} /></span>
          </div>
        </div>
      </div>
    </section>
  );
}

const STAP_ILL: IllNaam[] = ["bel", "tafel", "huis"];
const STAP_PAD = "M166 86 C200 20 300 10 340 40 S440 76 500 40 S620 4 680 34 S800 70 834 86";

// "Zo werkt het": donkere sectie, drie stapkaarten met illustraties. Met
// usp (alleen home) staan de deurfoto en de vier punten erboven en verbindt
// een gestippelde hartlijn de stappen.
export function Stappen({ kop, teksten, titels, usp, boven = "cream", onder = "cream" }: {
  kop: ReactNode;
  teksten: readonly [string, string, string];
  titels?: readonly [string, string, string];
  usp?: ReactNode;
  boven?: GolfKleur | null;
  onder?: GolfKleur;
}) {
  const t = titels ?? ["Zorgvraag stellen", "Kennismaking binnen 48 uur", "Vaste zorg start"];
  return (
    <section className="dk sec met-golf">
      {boven && <Golf kleur="night" vorm="boven" className="golf-top" />}
      <div className="gloedbal-vlak" aria-hidden="true"><div className="gloedbal" /></div>
      <div className="wrap" style={{ position: "relative" }}>
        <SectieKop eb="Zo werkt het" titel={kop} midden />
        {usp}
        <div className={usp ? "stappen-blok met-pad" : "stappen-blok"}>
          {usp && (
            <svg className="stap-pad" data-stappad="" viewBox="0 0 1000 86" preserveAspectRatio="none" aria-hidden="true" focusable="false">
              <path className="lijn" d={STAP_PAD} />
              <path className="masker" d={STAP_PAD} pathLength={1} />
              <g className="reiziger"><path d={HART_PAD} transform="translate(-11 -10) scale(.92)" fill="#F39A6B" /></g>
            </svg>
          )}
          <ol className="stappen">
          {teksten.map((tekst, i) => (
            <li key={i} className="stap rv">
              <div className="tegel"><Ill naam={STAP_ILL[i]} /></div>
              <div className="stap-kop"><span className="nr">{i + 1}</span><h3 className="h3">{t[i]}</h3></div>
              <p>{tekst}</p>
            </li>
          ))}
          </ol>
        </div>
      </div>
      <Golf kleur={onder} />
    </section>
  );
}

// FAQ-lijst met FAQPage-schema.
export function FaqLijst({ vragen, schema = true }: { vragen: readonly { vraag: string; antwoord: string }[]; schema?: boolean }) {
  return (
    <>
      {schema && <JsonLd data={faqSchema(vragen)} />}
      <div className="faq rv">
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
      <div className="wrap">
        <SectieKop eb="Veelgestelde vragen" titel={kop} midden className="faq-kop" />
        <FaqLijst vragen={vragen} />
      </div>
    </section>
  );
}

export function Band({ src, alt, eb, titel, lead }: { src: string; alt: string; eb: string; titel: ReactNode; lead: string }) {
  return (
    <section className="sec krap">
      <div className="wrap">
        <div className="dk band rv">
          <Foto src={src} alt={alt} sizes="(max-width: 1180px) 100vw, 1180px" />
          <div className="band-tekst">
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
    <div className="chips">
      {items.map((t) => <span key={t} className="tagc">{t}</span>)}
    </div>
  );
}

// Plaats-pills naar de dienst×plaatspagina van de hoofddienst (spec 5).
export function PlaatsPills({ dienst = site.hoofddienst, prefix = "" }: { dienst?: string; prefix?: string }) {
  return (
    <div className="chips">
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
    <section className="sec krap">
      <div className="wrap">
        <div className="kopblok rv">
          <div className="eb">Werkgebied</div>
          <h2 className="h2">Waar wij <Accent>komen.</Accent></h2>
          <PlaatsPills />
          <div><Link className="tekstlink" href="/werkgebied">Alle plaatsen bekijken</Link></div>
        </div>
      </div>
    </section>
  );
}

// Uitklappende fotopanelen: desktop hover (flex-grow), mobiel swipen.
// Zonder JavaScript: hover en focus werken met CSS, alle tekst staat in de HTML.
export type PaneelItem = { titel: string; tekst: string; label: string; foto: { src: string; alt: string; positie?: string }; href?: string };

export function Panelen({ items, open = 0, kop = "h3" }: { items: readonly PaneelItem[]; open?: number; kop?: "h2" | "h3" }) {
  const H = kop;
  return (
    <ul className="panelen rv">
      {items.map((it, i) => {
        const binnen = (
          <>
            <Foto src={it.foto.src} alt={it.foto.alt} positie={it.foto.positie} sizes="(max-width: 1020px) 78vw, 640px" />
            <span className="vt">{it.titel}</span>
            <div className="pb">
              <H className="h3">{it.titel}</H>
              <p>{it.tekst}</p>
              <i className="label">{it.label}</i>
            </div>
          </>
        );
        const klasse = i === open ? "paneel open" : "paneel";
        return (
          <li key={it.titel} style={{ display: "contents" }}>
            {it.href ? (
              <Link href={it.href} className={klasse}>{binnen}</Link>
            ) : (
              <div className={klasse} tabIndex={0}>{binnen}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

// Kleine kaart met illustratietegel.
export function Mini({ ill, titel, children, kop = "h3" }: { ill: IllNaam; titel: ReactNode; children: ReactNode; kop?: "h2" | "h3" }) {
  const H = kop;
  return (
    <div className="mini rv">
      <div className="tegel"><Ill naam={ill} /></div>
      <H className="h3">{titel}</H>
      {children}
    </div>
  );
}
