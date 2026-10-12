import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site, type Plaats } from "@/site.config";
import { dienstSchema } from "@/lib/schema";
import { inhoud } from "../../inhoud";
import { BelKnop, CtaBlok, FaqSectie, Foto, HeroSub, JsonLd, K, Mini, Stappen, Tags, ZorgvraagKnop } from "@/components/Blokken";
import Accent from "@/components/Accent";
import Golf from "@/components/Golf";
import { FOTO } from "@/components/fotos";
import { Pijl } from "@/components/Iconen";
import { vormgeving } from "../../vormgeving";
import { WaakEnSlaap } from "@/components/Nachtzorg";

type Props = { params: Promise<{ dienst: string; plaats: string }> };

export const dynamicParams = false;

// Alleen combinaties die Judy echt aanbiedt (regel 6.1 structuurspec).
export function generateStaticParams() {
  return site.werkgebied.flatMap((p) =>
    (p.diensten as readonly string[]).map((d) => ({ dienst: d, plaats: p.slug }))
  );
}

function biedtAan(p: Plaats, dienst: string) {
  return (p.diensten as readonly string[]).includes(dienst);
}

function zoek(dienstSlug: string, plaatsSlug: string) {
  const dienst = site.diensten.find((d) => d.slug === dienstSlug);
  const plaats = site.werkgebied.find((p) => p.slug === plaatsSlug);
  if (!dienst || !plaats || !biedtAan(plaats, dienst.slug)) return null;
  return { dienst, plaats, t: inhoud[dienst.slug] };
}

function opsomming(items: readonly string[]) {
  return items.length > 1 ? `${items.slice(0, -1).join(", ")} en ${items[items.length - 1]}` : items[0];
}

// Unieke intro per combinatie: dienst-zin + plaats + kernen (spec 4.3 blok 2).
function intro(dienstNaam: string, zin: string, plaats: Plaats) {
  // "Sittard" en "Valkenburg" overslaan: die zitten al in de plaatsnaam.
  const kernen = plaats.kernen.filter((kern) => !plaats.naam.includes(kern)).slice(0, 3);
  return `${site.naam} levert ${dienstNaam.toLowerCase()} bij mensen thuis in ${plaats.naam}. ${zin}${kernen.length ? ` Ook in ${opsomming(kernen)}.` : ""}`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { dienst: d, plaats: p } = await params;
  const gevonden = zoek(d, p);
  if (!gevonden) return {};
  const { dienst, plaats, t } = gevonden;
  return {
    title: `${dienst.naam} in ${plaats.naam} | ${site.naam}`,
    description: intro(dienst.naam, t.plaatsZin, plaats),
    alternates: { canonical: `${site.url}/zorg/${dienst.slug}/${plaats.slug}` },
  };
}

export default async function DienstPlaatsPagina({ params }: Props) {
  const { dienst: d, plaats: p } = await params;
  const gevonden = zoek(d, p);
  if (!gevonden) notFound();
  const { dienst, plaats, t } = gevonden;
  const pad = `/zorg/${dienst.slug}/${plaats.slug}`;
  const isNacht = dienst.slug === "nachtzorg";
  const v = vormgeving[dienst.slug];

  const andereDiensten = site.diensten.filter((x) => x.slug !== dienst.slug && biedtAan(plaats, x.slug));
  const buren = [
    ...plaats.dichtbij.map((s) => site.werkgebied.find((w) => w.slug === s)),
    ...site.werkgebied,
  ]
    .filter((w): w is Plaats => !!w && w.slug !== plaats.slug && biedtAan(w, dienst.slug))
    .filter((w, i, arr) => arr.findIndex((x) => x.slug === w.slug) === i)
    .slice(0, 4);

  return (
    <main>
      <JsonLd data={dienstSchema({ naam: `${dienst.naam} in ${plaats.naam}`, beschrijving: intro(dienst.naam, t.plaatsZin, plaats), pad, plaats: plaats.naam })} />

      {/* [1-2] Kruimelpad + H1 + intro */}
      <HeroSub
        kruimels={[{ naam: dienst.naam, pad: `/zorg/${dienst.slug}` }, { naam: plaats.naam, pad }]}
        eb={`${dienst.naam} in ${plaats.naam}`}
        titel={<>{dienst.naam} in <Accent>{plaats.naam}</Accent>, door een vast gezicht.</>}
        lead={intro(dienst.naam, t.plaatsZin, plaats)}
        acties={<><ZorgvraagKnop zorg={dienst.slug} plaats={plaats.slug}>Zorgvraag in {plaats.naam}</ZorgvraagKnop><BelKnop /></>}
        foto={{ src: t.afbeelding, alt: t.alt, positie: t.positie }}
      />

      {/* [3] Wat is het (ingekort) */}
      <section className="sec" style={{ paddingBottom: "calc(clamp(72px,9vw,112px) + var(--golf))" }}>
        <div className="wrap">
          <div className="split rv" style={{ alignItems: "end", marginBottom: 44 }}>
            <div className="kopblok">
              <div className="eb">Wat is {dienst.naam.toLowerCase()}</div>
              <h2 className="h2"><K k={t.plaatsWatKop} /></h2>
            </div>
            <p className="big">{t.plaatsWatTekst}</p>
          </div>
          {isNacht ? (
            <WaakEnSlaap kopNiveau="h3" />
          ) : (
            <div className="raster r4">
              {t.taken.map((taak, i) => (
                <Mini key={taak.titel} ill={v.taken[i]} titel={taak.titel}><p>{taak.tekst}</p></Mini>
              ))}
            </div>
          )}
          <div className="rv" style={{ marginTop: 28 }}>
            <Link className="tekstlink" href={`/zorg/${dienst.slug}`}>Alles over {dienst.naam.toLowerCase()} lezen</Link>
          </div>
        </div>
      </section>

      {/* [4] Zo werkt het */}
      <Stappen
        kop={<>Kennismaking bij u thuis in {plaats.naam}, <Accent>meestal binnen 48 uur.</Accent></>}
        teksten={t.stappen}
        titels={["Zorgvraag stellen", "Kennismaking binnen 48 uur", t.stap3]}
      />

      {/* [5] Plaatsblok: per plaats uniek (anti-doorway) */}
      <section className="sec met-golf">
        <div className="wrap split mid">
          <div className="plaats-foto rv">
            <Foto src={FOTO.straat.src} alt={FOTO.straat.alt} sizes="(max-width: 1020px) 90vw, 440px" />
          </div>
          <div className="kopblok rv">
            <div className="eb">Zorg in {plaats.naam}</div>
            <h2 className="h2">Wat wij van <Accent>{plaats.naam}</Accent> weten.</h2>
            {plaats.eigenZin && (
              <p className="big eigen-zin">&ldquo;{plaats.eigenZin}&rdquo; <span className="sm">{site.gezicht.voornaam}</span></p>
            )}
            <p className="big">{plaats.ligging}</p>
            <p className="big">{plaats.context}</p>
            <div className="col" style={{ gap: 12, marginTop: 6 }}>
              <div style={{ fontWeight: 700, color: "var(--ink)" }}>Wij komen ook in deze kernen</div>
              <Tags items={plaats.kernen} />
            </div>
          </div>
        </div>
        <Golf kleur="peach" />
      </section>

      {/* [6] Tarief + vergoeding */}
      <section className="sec peach met-golf">
        <div className="wrap raster r2" style={{ gap: 20 }}>
          <div className="kaart rv col" style={{ gap: 16, padding: "clamp(24px,3vw,36px)" }}>
            <div className="eb">Tarief</div>
            <h2 className="h3" style={{ fontSize: "clamp(22px,2.4vw,28px)" }}>{dienst.naam} in {plaats.naam}, {dienst.tarieven[0].eenheid}</h2>
            <div className="rijen">
              {dienst.tarieven.map((r) => (
                <div key={r.label} className="r twee"><b>{r.label}</b><span className="bedrag">{r.prijs}</span></div>
              ))}
            </div>
            <p className="sm">Reiskosten spreken wij vooraf af, zodat u niet achteraf voor verrassingen staat.</p>
            <div className="row"><Link className="btn2" href="/tarieven-en-vergoeding">Tarieven en vergoeding <Pijl /></Link></div>
          </div>
          <div className="kaart rv col" style={{ gap: 16, padding: "clamp(24px,3vw,36px)" }}>
            <div className="eb">Vergoeding</div>
            <h2 className="h3" style={{ fontSize: "clamp(22px,2.4vw,28px)" }}>Via pgb, Wmo, Wlz of particulier</h2>
            <p className="sm">
              Wmo-ondersteuning vraagt u aan bij de gemeente {plaats.gemeente}. Heeft u een pgb, dan kunt u ons daaruit betalen. Wij helpen kosteloos met de zorgovereenkomst en de urenverantwoording bij de SVB.
            </p>
            <Tags items={site.financiering} />
          </div>
        </div>
        <Golf kleur="cream" />
      </section>

      {/* [7] FAQ */}
      <FaqSectie kop={<>{dienst.naam} in {plaats.naam}, <Accent>kort beantwoord.</Accent></>} vragen={t.faq} />

      {/* [8] CTA */}
      <CtaBlok label={`Zorgvraag in ${plaats.naam}?`} titel={<K k={t.plaatsCta} />} foto={v.ctaFoto} ill={v.ctaIll} />

      {/* [9] Interne links */}
      <section className="sec krap">
        <div className="wrap raster r2" style={{ gap: 20 }}>
          {andereDiensten.length > 0 && (
            <div className="kaart rv col" style={{ gap: 16, padding: 30 }}>
              <h3 className="h3">Ook in {plaats.naam}</h3>
              <div className="chips">
                {andereDiensten.map((x) => (
                  <Link key={x.slug} className="pill" href={`/zorg/${x.slug}/${plaats.slug}`}>{x.naam}</Link>
                ))}
              </div>
            </div>
          )}
          {buren.length > 0 && (
            <div className="kaart rv col" style={{ gap: 16, padding: 30 }}>
              <h3 className="h3">{dienst.naam} ook in</h3>
              <div className="chips">
                {buren.map((w) => (
                  <Link key={w.slug} className="pill" href={`/zorg/${dienst.slug}/${w.slug}`}>{w.naam}</Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
