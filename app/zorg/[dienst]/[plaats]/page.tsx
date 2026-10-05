import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site, type Plaats } from "@/site.config";
import { dienstSchema } from "@/lib/schema";
import { inhoud } from "../../inhoud";
import { BelKnop, CtaBlok, FaqSectie, Foto, HeroSub, JsonLd, K, Stappen, Tags, ZorgvraagKnop } from "@/components/Blokken";
import { Pijl, Vink } from "@/components/Iconen";
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
        titel={<>{dienst.naam} in <span className="it">{plaats.naam}</span>, door een vast gezicht.</>}
        lead={intro(dienst.naam, t.plaatsZin, plaats)}
        acties={<><ZorgvraagKnop zorg={dienst.slug} plaats={plaats.slug}>Zorgvraag in {plaats.naam}</ZorgvraagKnop><BelKnop /></>}
        foto={{ src: t.afbeelding, alt: t.alt, positie: t.positie }}
      />

      {/* [3] Wat is het (ingekort) */}
      <section className="sec">
        <div className="wrap col" style={{ gap: 40 }}>
          <div className="col rv" style={{ gap: 16, maxWidth: 800 }}>
            <div className="eb">Wat is {dienst.naam.toLowerCase()}</div>
            <h2 className="h2"><K k={t.plaatsWatKop} /></h2>
            <p className="lead">{t.plaatsWatTekst}</p>
          </div>
          {isNacht ? (
            <WaakEnSlaap kopNiveau="h3" />
          ) : (
            <div className="g4">
              {t.taken.map((taak) => (
                <div key={taak.titel} className="card col rv kaart-pad">
                  <div className="li"><Vink /><h3 className="h3">{taak.titel}</h3></div>
                  <p className="sm">{taak.tekst}</p>
                </div>
              ))}
            </div>
          )}
          <Link className="tekstlink rv" href={`/zorg/${dienst.slug}`}>Alles over {dienst.naam.toLowerCase()} lezen</Link>
        </div>
      </section>

      {/* [4] Zo werkt het */}
      <Stappen
        kop={<>Kennismaking bij u thuis in {plaats.naam}, <span className="it">meestal binnen 48 uur.</span></>}
        teksten={t.stappen}
        titels={["Zorgvraag stellen", "Kennismaking binnen 48 uur", t.stap3]}
      />

      {/* [5] Plaatsblok: per plaats uniek (anti-doorway) */}
      <section className="sec">
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(440px,100%),1fr))", gap: 64, alignItems: "center" }}>
          <div className="rv" style={{ display: "flex", justifyContent: "center" }}>
            <div className="pb" style={{ width: "min(440px,100%)", height: 500, borderRadius: "220px 220px 24px 24px" }}>
              <Foto src="/afbeeldingen/tijdelijk-13-straat.jpg" alt="Zorgverlener loopt met een oudere man met rollator door de straat" sizes="440px" />
            </div>
          </div>
          <div className="col rv" style={{ gap: 20 }}>
            <div className="eb">Zorg in {plaats.naam}</div>
            <h2 className="h2">Wat wij van <span className="it">{plaats.naam}</span> weten.</h2>
            {plaats.eigenZin && (
              <p className="lead" style={{ padding: "20px 24px", borderRadius: 18, background: "#FFF5EC", color: "#2A1F2D" }}>
                &ldquo;{plaats.eigenZin}&rdquo; <span className="sm">&mdash; {site.gezicht.voornaam}</span>
              </p>
            )}
            <p className="lead">{plaats.ligging}</p>
            <p className="lead">{plaats.context}</p>
            <div className="col" style={{ gap: 12 }}>
              <div style={{ fontWeight: 700 }}>Wij komen ook in deze kernen</div>
              <Tags items={plaats.kernen} />
            </div>
          </div>
        </div>
      </section>

      {/* [6] Tarief + vergoeding */}
      <section className="sec" style={{ background: "#FFF5EC" }}>
        <div className="wrap g2" style={{ gap: 24 }}>
          <div className="card col rv" style={{ gap: 16, padding: 36, borderRadius: 28 }}>
            <div className="eb">Tarief</div>
            <h2 className="h3" style={{ fontSize: 32 }}>{dienst.naam} in {plaats.naam}, {dienst.tarieven[0].eenheid}</h2>
            <div>
              {dienst.tarieven.map((r) => (
                <div key={r.label} className="tr"><span>{r.label}</span><b>{r.prijs}</b></div>
              ))}
            </div>
            <p className="sm">Reiskosten spreken wij vooraf af, zodat u niet achteraf voor verrassingen staat.</p>
            <div className="row"><Link className="btn2" href="/tarieven-en-vergoeding">Tarieven en vergoeding <Pijl /></Link></div>
          </div>
          <div className="card col rv" style={{ gap: 16, padding: 36, borderRadius: 28 }}>
            <div className="eb">Vergoeding</div>
            <h2 className="h3" style={{ fontSize: 32 }}>Via pgb, Wmo, Wlz of particulier</h2>
            <p className="sm">
              Wmo-ondersteuning vraagt u aan bij de gemeente {plaats.gemeente}. Heeft u een pgb, dan kunt u ons daaruit betalen. Wij helpen kosteloos met de zorgovereenkomst en de urenverantwoording bij de SVB.
            </p>
            <Tags items={site.financiering} />
          </div>
        </div>
      </section>

      {/* [7] FAQ */}
      <FaqSectie kop={<>{dienst.naam} in {plaats.naam}, <span className="it">kort beantwoord.</span></>} vragen={t.faq} />

      {/* [8] CTA */}
      <CtaBlok label={`Zorgvraag in ${plaats.naam}?`} titel={<K k={t.plaatsCta} />} />

      {/* [9] Interne links */}
      <section style={{ padding: "0 0 96px" }}>
        <div className="wrap g2">
          {andereDiensten.length > 0 && (
            <div className="card col rv" style={{ gap: 16, padding: 32 }}>
              <h3 className="h3">Ook in {plaats.naam}</h3>
              <div className="row" style={{ gap: 10 }}>
                {andereDiensten.map((x) => (
                  <Link key={x.slug} className="pill" href={`/zorg/${x.slug}/${plaats.slug}`}>{x.naam}</Link>
                ))}
              </div>
            </div>
          )}
          {buren.length > 0 && (
            <div className="card col rv" style={{ gap: 16, padding: 32 }}>
              <h3 className="h3">{dienst.naam} ook in</h3>
              <div className="row" style={{ gap: 10 }}>
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
