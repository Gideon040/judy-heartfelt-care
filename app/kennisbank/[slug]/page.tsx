import { notFound } from "next/navigation";
import { haalArtikel, artikelDatum } from "../../../lib/kennisbank";
import { artikelSchema, breadcrumbSchema } from "../../../lib/schema";
import { site } from "../../../site.config";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const artikel = await haalArtikel(slug);
  if (!artikel) return { title: `Kennisbank | ${site.naam}` };
  return {
    title: `${artikel.titel} | ${site.naam}`,
    description: artikel.samenvatting ?? undefined,
    alternates: { canonical: `${site.url}/kennisbank/${slug}` },
  };
}

// Inhoud is eenvoudige tekst: "## " wordt een tussenkop,
// een lege regel begint een nieuwe alinea.
function Blokken({ inhoud }: { inhoud: string }) {
  const blokken = inhoud.replace(/\r\n/g, "\n").split(/\n{2,}/);
  return (
    <>
      {blokken.map((blok, i) =>
        blok.startsWith("## ") ? (
          <h2 key={i}>{blok.slice(3).trim()}</h2>
        ) : (
          <p key={i}>{blok.trim()}</p>
        )
      )}
    </>
  );
}

export default async function Artikel({ params }: Props) {
  const { slug } = await params;
  const artikel = await haalArtikel(slug);
  if (!artikel) notFound();

  const schemas = [
    artikelSchema(artikel),
    breadcrumbSchema([
      { naam: site.naam, pad: "" },
      { naam: "Kennisbank", pad: "/kennisbank" },
      { naam: artikel.titel, pad: `/kennisbank/${artikel.slug}` },
    ]),
  ];

  return (
    <main className="zb-artikel">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <a className="zb-artikel-terug" href="/kennisbank">&larr; Kennisbank</a>
      <article>
        <h1>{artikel.titel}</h1>
        <time dateTime={artikel.gepubliceerd_op}>
          {artikelDatum(artikel.gepubliceerd_op)}
        </time>
        <Blokken inhoud={artikel.inhoud} />
      </article>
      <aside className="zb-artikel-cta">
        <p>Vragen over uw situatie? {site.naam} helpt u graag verder.</p>
        <a href="/#aanvraag">Stel uw zorgvraag</a>
        <a href={`tel:${site.telefoon}`}>{site.telefoon}</a>
      </aside>
    </main>
  );
}
