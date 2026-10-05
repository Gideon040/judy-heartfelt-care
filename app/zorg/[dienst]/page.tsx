import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/site.config";
import { dienstSchema } from "@/lib/schema";
import { inhoud } from "../inhoud";
import { Band, BelKnop, CtaBlok, FaqSectie, HeroSub, JsonLd, K, PlaatsPills, Stappen, Tags, ZorgvraagKnop } from "@/components/Blokken";
import { Pijl, Vink } from "@/components/Iconen";
import { Tijdlijn, WaakEnSlaap } from "@/components/Nachtzorg";

type Props = { params: Promise<{ dienst: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return site.diensten.map((d) => ({ dienst: d.slug }));
}

function zoek(slug: string) {
  const dienst = site.diensten.find((d) => d.slug === slug);
  return dienst ? { dienst, t: inhoud[dienst.slug] } : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const gevonden = zoek((await params).dienst);
  if (!gevonden) return {};
  const { dienst, t } = gevonden;
  return {
    title: `${dienst.naam} aan huis in ${site.regio} | ${site.naam}`,
    description: `${t.heroLead} In ${site.werkgebied.map((p) => p.naam).slice(0, 4).join(", ")} en omstreken.`,
    alternates: { canonical: `${site.url}/zorg/${dienst.slug}` },
  };
}

export default async function DienstPagina({ params }: Props) {
  const gevonden = zoek((await params).dienst);
  if (!gevonden) notFound();
  const { dienst, t } = gevonden;
  const isNacht = dienst.slug === "nachtzorg";
  const pad = `/zorg/${dienst.slug}`;

  return (
    <main>
      <JsonLd data={dienstSchema({ naam: dienst.naam, beschrijving: t.heroLead, pad, plaats: site.regio })} />

      {/* [1-2] Kruimelpad + hero */}
      <HeroSub
        kruimels={[{ naam: dienst.naam, pad }]}
        eb={dienst.naam}
        titel={<K k={t.heroKop} />}
        lead={t.heroLead}
        acties={<><ZorgvraagKnop zorg={dienst.slug}>{t.ctaKnop}</ZorgvraagKnop><BelKnop /></>}
        foto={{ src: t.afbeelding, alt: t.alt, positie: t.positie }}
      />

      {/* [3] Wat is het */}
      <section className="sec">
        <div className="wrap col" style={{ gap: 40 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(440px,100%),1fr))", gap: "32px 64px", alignItems: "end" }}>
            <div className="col rv" style={{ gap: 16 }}>
              <div className="eb">Wat is {dienst.naam.toLowerCase()}</div>
              <h2 className="h2"><K k={t.watKop} /></h2>
            </div>
            <p className="lead rv">{t.watTekst}</p>
          </div>
          {isNacht ? (
            <>
              <Tijdlijn />
              <WaakEnSlaap />
            </>
          ) : (
            <div className="g4">
              {t.taken.map((taak) => (
                <div key={taak.titel} className="card col rv lift kaart-pad">
                  <div className="li"><Vink /><h3 className="h3">{taak.titel}</h3></div>
                  <p className="sm">{taak.tekst}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {t.band && <Band src={t.band.afbeelding} alt={t.band.alt} eb={t.band.eb} titel={<K k={t.band.kop} />} lead={t.band.lead} />}

      {/* [4] Voor wie */}
      <section className="sec" style={{ background: "#FFF5EC" }}>
        <div className="wrap col" style={{ gap: 44 }}>
          <div className="col rv" style={{ gap: 16, maxWidth: 760 }}>
            <div className="eb">Voor wie</div>
            <h2 className="h2"><K k={t.voorWieKop} /></h2>
          </div>
          <div className="g4">
            {t.voorWie.map((v) => (
              <div key={v.titel} className="card col rv lift kaart-pad">
                <h3 className="h3">{v.titel}</h3>
                <p className="sm">{v.tekst}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [5] Zo werkt het */}
      <Stappen kop={<K k={t.stappenKop} />} teksten={t.stappen} titels={["Zorgvraag stellen", "Kennismaking binnen 48 uur", t.stap3]} />

      {/* [6] Tarief + [7] plaatsen */}
      <section className="sec">
        <div className="wrap g2" style={{ gap: 64, alignItems: "start" }}>
          <div className="col rv" style={{ gap: 18 }}>
            <div className="eb">Tarief</div>
            <h2 className="h2"><K k={t.tariefKop} /></h2>
            <p className="lead">{t.tariefTekst}</p>
            <div>
              {dienst.tarieven.map((r) => (
                <div key={r.label} className="tr"><span>{r.label}, {r.eenheid}</span><b>{r.prijs}</b></div>
              ))}
              <div className="tr"><span>Kennismaking thuis</span><b>Kosteloos</b></div>
            </div>
            <div className="col" style={{ gap: 10 }}>
              <div style={{ fontWeight: 700, fontSize: 15 }}>Te betalen via</div>
              <Tags items={site.financiering} />
            </div>
            <div className="row"><Link className="btn2" href="/tarieven-en-vergoeding">Tarieven en vergoeding <Pijl /></Link></div>
          </div>
          <div className="col rv" style={{ gap: 18 }}>
            <div className="eb">{dienst.naam} in uw plaats</div>
            <h2 className="h2"><K k={t.plaatsenKop} /></h2>
            <p className="lead">Kies uw plaats voor de lokale pagina.</p>
            <PlaatsPills dienst={dienst.slug} prefix={`${dienst.naam} in `} />
          </div>
        </div>
      </section>

      {/* [8] FAQ */}
      <FaqSectie kop={<>Vragen over <span className="it">{dienst.naam.toLowerCase()}.</span></>} vragen={t.faq} />

      {/* [9] CTA */}
      <CtaBlok label={t.cta.label} titel={<K k={t.cta.kop} />} />
    </main>
  );
}
