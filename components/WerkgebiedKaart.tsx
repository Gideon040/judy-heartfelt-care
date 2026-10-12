import Link from "next/link";
import { site } from "@/site.config";
import JudyNoot, { TOON_NOTEN } from "./JudyNoot";
import { HART_PAD } from "./Illustraties";

// Kaart van Limburg (schematisch) met een kloppend hartje als pin. Posities
// per plaats staan in site.config.ts ("kaart", viewBox 400x400).
const PROVINCIE = "M150 14 C190 10 222 16 238 40 C252 64 236 96 240 124 C246 156 256 184 252 214 C250 236 276 252 298 270 C318 290 318 330 296 356 C270 386 220 392 200 368 C186 350 200 320 192 296 C184 272 160 260 140 238 C116 212 108 176 112 140 C114 100 120 70 132 44 C138 30 142 18 150 14z";

// Voorstel uit het prototype voor regio Weert (NIET bevestigd, alleen in dev).
const WEERT = { x: 150, y: 128, plaatsen: [
  { naam: "Nederweert", x: 192, y: 100, tx: 200, ty: 104 },
  { naam: "Stramproy", x: 160, y: 166, tx: 168, ty: 170 },
  { naam: "Budel", x: 118, y: 146, tx: 66, ty: 150 },
  { naam: "Leudal", x: 206, y: 150, tx: 214, ty: 154 },
] };

function Pin({ x, y }: { x: number; y: number }) {
  return (
    <>
      <circle className="ring" cx={x} cy={y} r="42" />
      <g className="pin"><path className="fa" d={HART_PAD} transform={`translate(${x - 13} ${y - 18}) scale(${26 / 24})`} /></g>
    </>
  );
}

export function LimburgKaart() {
  const [midden, ...rest] = site.werkgebied;
  const weert = TOON_NOTEN && site.regios.some((r) => r.naam === "Regio Weert");
  return (
    <div className="kaartvlak rv">
      <svg viewBox="0 0 400 400" role="img" aria-label={`Kaart van Limburg met het werkgebied rond ${midden.naam}`}>
        <path className="prov" d={PROVINCIE} />
        {weert && (
          <g className="gebied" data-gebied="1">
            <Pin x={WEERT.x} y={WEERT.y} />
            <text className="groot" x="172" y="126">Weert</text>
            {WEERT.plaatsen.map((p) => (
              <g key={p.naam}><circle className="stip" cx={p.x} cy={p.y} r="4" /><text x={p.tx} y={p.ty}>{p.naam}</text></g>
            ))}
          </g>
        )}
        <g className="gebied" data-gebied="0">
          {rest.map((p) => (
            <path key={`l-${p.slug}`} className="lijntje" d={`M${midden.kaart.x} ${midden.kaart.y}L${p.kaart.x} ${p.kaart.y}`} />
          ))}
          <Pin x={midden.kaart.x} y={midden.kaart.y} />
          <text className="groot" x={midden.kaart.x - 96} y={midden.kaart.y + 8}>{midden.naam}</text>
          {rest.map((p) => (
            <g key={p.slug}>
              <circle className="stip" cx={p.kaart.x} cy={p.kaart.y} r="4" />
              <text x={p.kaart.x + 8} y={p.kaart.y + 4}>{p.naam.replace(" aan de Geul", "")}</text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

// Regio-schakelaar (radio + CSS, werkt zonder JavaScript). In productie
// alleen bevestigde regio's; met één regio verschijnt er geen schakelaar.
export function RegioKiezer({ kop, lead }: { kop: React.ReactNode; lead: string }) {
  const regios = site.regios.filter((r) => r.bevestigd || TOON_NOTEN);
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
            {r.bevestigd ? (
              <div className="chips">
                {site.werkgebied.filter((p) => r.plaatsen.includes(p.slug)).map((p) => (
                  <Link key={p.slug} className="pill" href={`/zorg/${site.hoofddienst}/${p.slug}`}>{p.naam}</Link>
                ))}
              </div>
            ) : (
              <>
                <p><JudyNoot>{`plaatsen in ${r.naam.toLowerCase()} bevestigen. Voorstel uit het prototype: ${"voorstel" in r ? r.voorstel.join(", ") : ""}. Pas daarna locatiepagina's maken.`}</JudyNoot></p>
                <div className="chips">
                  {"voorstel" in r && r.voorstel.map((n) => <span key={n} className="pill" data-judy="">{n}</span>)}
                </div>
              </>
            )}
          </div>
        ))}
        <div><Link className="tekstlink" href="/werkgebied">Alle plaatsen bekijken</Link></div>
      </div>
      <LimburgKaart />
    </div>
  );
}
