import { haalArtikelen, artikelDatum } from "../../lib/kennisbank";
import { site } from "../../site.config";

export const metadata = {
  title: `Kennisbank | ${site.naam}`,
  description: `Artikelen van ${site.naam} over zorg, kosten en vergoeding.`,
  alternates: { canonical: `${site.url}/kennisbank` },
};

export default async function Kennisbank() {
  const artikelen = await haalArtikelen();

  return (
    <main className="zb-kennisbank">
      <h1>Kennisbank</h1>
      <p className="zb-kennisbank-intro">
        Antwoorden op veelgestelde vragen over zorg, kosten en vergoeding —
        geschreven door {site.naam}.
      </p>
      {artikelen.length === 0 ? (
        <p className="zb-kennisbank-leeg">
          Er zijn nog geen artikelen. Kom binnenkort terug.
        </p>
      ) : (
        <ul className="zb-kennisbank-lijst">
          {artikelen.map((a) => (
            <li key={a.slug}>
              <a href={`/kennisbank/${a.slug}`}>
                <h2>{a.titel}</h2>
                {a.samenvatting && <p>{a.samenvatting}</p>}
                <time dateTime={a.gepubliceerd_op}>{artikelDatum(a.gepubliceerd_op)}</time>
              </a>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
