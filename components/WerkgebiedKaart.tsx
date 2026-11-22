import Link from "next/link";
import { site, type Plaats } from "@/site.config";
import { HART_PAD } from "./Illustraties";

// Kaart van Limburg (schematisch) met een kloppend hartje als pin per regio.
// Posities per plaats staan in site.config.ts ("kaart", viewBox 400x400). De
// eerste plaats van een regio is het midden; de rest hangt er met lijntjes
// aan. Arnhem ligt buiten Limburg en staat als losse pin boven de provincie.
const PROVINCIE = "M150 14 C190 10 222 16 238 40 C252 64 236 96 240 124 C246 156 256 184 252 214 C250 236 276 252 298 270 C318 290 318 330 296 356 C270 386 220 392 200 368 C186 350 200 320 192 296 C184 272 160 260 140 238 C116 212 108 176 112 140 C114 100 120 70 132 44 C138 30 142 18 150 14z";

function Pin({ x, y }: { x: number; y: number }) {
  return (
    <>
      <circle className="ring" cx={x} cy={y} r="42" />
      <g className="pin"><path className="fa" d={HART_PAD} transform={`translate(${x - 13} ${y - 18}) scale(${26 / 24})`} /></g>
    </>
  );
}

const korteNaam = (naam: string) => naam.replace(" aan de Geul", "");

export function LimburgKaart() {
  return (
    <div className="kaartvlak rv">
      <svg viewBox="0 0 400 400" role="img" aria-label={`Kaart van het werkgebied: ${site.regios.map((r) => r.titel).join(", ")}`}>
        <path className="prov" d={PROVINCIE} />
        {site.regios.map((r, i) => {
          const plaatsen = r.plaatsen
            .map((slug) => site.werkgebied.find((p) => p.slug === slug))
            .filter((p): p is Plaats => !!p);
          const [midden, ...rest] = plaatsen;
          if (!midden) return null;
          const buiten = midden.regio === "arnhem";
          return (
            <g key={r.sleutel} className="gebied" data-gebied={i}>
              {rest.map((p) => (
                <path key={`l-${p.slug}`} className="lijntje" d={`M${midden.kaart.x} ${midden.kaart.y}L${p.kaart.x} ${p.kaart.y}`} />
              ))}
              <Pin x={midden.kaart.x} y={midden.kaart.y} />
              {buiten ? (
                // Buiten Limburg: naam en provincie gecentreerd onder de pin.
                <>
                  <text className="groot" x={midden.kaart.x} y={midden.kaart.y + 60} textAnchor="middle">{midden.naam}</text>
                  <text x={midden.kaart.x} y={midden.kaart.y + 76} textAnchor="middle">(Gelderland)</text>
                </>
              ) : (
                <text
                  className="groot"
                  x={midden.kaart.links ? midden.kaart.x - 30 : midden.kaart.x + 30}
                  y={midden.kaart.y + 6}
                  textAnchor={midden.kaart.links ? "end" : "start"}
                >
                  {midden.naam}
                </text>
              )}
              {rest.map((p) => (
                <g key={p.slug}>
                  <circle className="stip" cx={p.kaart.x} cy={p.kaart.y} r="4" />
                  <text x={p.kaart.x + (p.kaart.links ? -8 : 8)} y={p.kaart.y + 4} textAnchor={p.kaart.links ? "end" : "start"}>
                    {korteNaam(p.naam)}
                  </text>
                </g>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// Regio-schakelaar (radio + CSS, werkt zonder JavaScript). Met één regio
// verschijnt er geen schakelaar. CSS kent regio-0 t/m regio-2.
export function RegioKiezer({ kop, lead }: { kop: React.ReactNode; lead: string }) {
  const regios = site.regios.filter((r) => r.plaatsen.length);
  const meer = regios.length > 1;
  return (
    <div className="regio regio-blok">
      <div className="kopblok rv">
        <div className="eb">Werkgebied</div>
        <h2 className="h2">{kop}</h2>
        <p className="lead">{lead}</p>
        {meer && (
          <>
            {regios.map((r, i) => (
              <input key={r.naam} className="regio-keuze" type="radio" name="regio" id={`regio-${i}`} defaultChecked={i === 0} />
            ))}
            <div className="seg" role="group" aria-label="Kies regio">
              {regios.map((r, i) => <label key={r.naam} htmlFor={`regio-${i}`}>{r.naam}</label>)}
            </div>
          </>
        )}
        {regios.map((r, i) => (
          <div key={r.naam} className="regio-paneel" data-paneel={i}>
            {meer && <h3 className="h3">{r.titel}</h3>}
            <div className="chips">
              {site.werkgebied.filter((p) => r.plaatsen.includes(p.slug)).map((p) => (
                <Link key={p.slug} className="pill" href={`/zorg/${site.hoofddienst}/${p.slug}`}>{p.naam}</Link>
              ))}
            </div>
          </div>
        ))}
        <div><Link className="tekstlink" href="/werkgebied">Alle plaatsen bekijken</Link></div>
      </div>
      <LimburgKaart />
    </div>
  );
}
