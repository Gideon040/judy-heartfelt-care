import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/site.config";
import { dienstSchema } from "@/lib/schema";
import { inhoud } from "../inhoud";
import { vormgeving } from "../vormgeving";
import { Band, BelKnop, CtaBlok, FaqSectie, HeroSub, JsonLd, K, Mini, Panelen, PlaatsPills, SectieKop, Stappen, Tags, ZorgvraagKnop } from "@/components/Blokken";
import Accent from "@/components/Accent";
import Golf from "@/components/Golf";
import { FOTO } from "@/components/fotos";
import { Pijl } from "@/components/Iconen";
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
  const v = vormgeving[dienst.slug];
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
      <section className={t.band ? "sec" : "sec met-golf"}>
        <div className="wrap">
          <div className="split rv" style={{ alignItems: "end" }}>
            <div className="kopblok">
              <div className="eb">Wat is {dienst.naam.toLowerCase()}</div>
              <h2 className="h2"><K k={t.watKop} /></h2>
            </div>
            <p className="big">{t.watTekst}</p>
          </div>
          {isNacht ? (
            <>
              <Tijdlijn />
              <WaakEnSlaap />
            </>
          ) : (
            <div className="raster r4" style={{ marginTop: 44 }}>
              {t.taken.map((taak, i) => (
                <Mini key={taak.titel} ill={v.taken[i]} titel={taak.titel}><p>{taak.tekst}</p></Mini>
              ))}
            </div>
          )}
        </div>
        {!t.band && <Golf kleur="peach" />}
      </section>

      {t.band && (
        <div className="met-golf" style={{ position: "relative", paddingBottom: "var(--golf)" }}>
          <Band src={t.band.afbeelding} alt={t.band.alt} eb={t.band.eb} titel={<K k={t.band.kop} />} lead={t.band.lead} />
          <Golf kleur="peach" />
        </div>
      )}

      {/* [4] Voor wie: situaties als uitklappende fotopanelen */}
      <section className="sec peach" style={{ paddingBottom: "calc(clamp(72px,9vw,112px) + var(--golf))" }}>
        <div className="wrap">
          <SectieKop eb="Voor wie" titel={<K k={t.voorWieKop} />} />
          <Panelen
            items={t.voorWie.map((s, i) => ({ titel: s.titel, tekst: s.tekst, label: dienst.naam, foto: FOTO[v.situaties[i]] }))}
          />
        </div>
      </section>

      {/* [5] Zo werkt het */}
      <Stappen kop={<K k={t.stappenKop} />} teksten={t.stappen} titels={["Zorgvraag stellen", "Kennismaking binnen 48 uur", t.stap3]} />

      {/* [6] Tarief + [7] plaatsen */}
      <section className="sec">
        <div className="wrap split">
          <div className="kopblok rv">
            <div className="eb">Tarief</div>
            <h2 className="h2"><K k={t.tariefKop} /></h2>
            <p className="sm" style={{ fontSize: 17 }}>{t.tariefTekst}</p>
            <div className="rijen">
              {dienst.tarieven.map((r) => (
                <div key={r.label} className="r twee"><b>{r.label}, {r.eenheid}</b><span className="bedrag">{r.prijs}</span></div>
              ))}
              <div className="r twee"><b>Kennismaking thuis</b><span className="bedrag">Kosteloos</span></div>
            </div>
            <div className="col" style={{ gap: 10 }}>
              <div style={{ fontWeight: 700, fontSize: 14.5, color: "var(--ink)" }}>Te betalen via</div>
              <Tags items={site.financiering} />
            </div>
            <div className="row"><Link className="btn2" href="/tarieven-en-vergoeding">Tarieven en vergoeding <Pijl /></Link></div>
          </div>
          <div className="kopblok rv">
            <div className="eb">{dienst.naam} in uw plaats</div>
            <h2 className="h2"><K k={t.plaatsenKop} /></h2>
            <p className="sm" style={{ fontSize: 17 }}>Kies uw plaats voor de lokale pagina.</p>
            <PlaatsPills dienst={dienst.slug} prefix={`${dienst.naam} in `} />
          </div>
        </div>
      </section>

      {/* [8] FAQ */}
      <FaqSectie kop={<>Vragen over <Accent>{`${dienst.naam.toLowerCase()}.`}</Accent></>} vragen={t.faq} />

      {/* [9] CTA */}
      <CtaBlok label={t.cta.label} titel={<K k={t.cta.kop} />} foto={v.ctaFoto} ill={v.ctaIll} />
    </main>
  );
}
