// Nachtzorg-blokken uit het ontwerp. Waak- en slaapdienst staan op één
// pagina als twee secties (regel 6.2 structuurspec), nooit als losse pagina's.
import { site } from "@/site.config";
import { Vink } from "./Iconen";
import { Slaapdienst, Waakdienst } from "./Illustraties";

export function Tijdlijn() {
  return (
    <div className="card rv tijdlijn">
      <div className="tijdlijn-uren"><span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>24:00</span></div>
      <div className="tijdlijn-balk">
        <span style={{ left: "0%", width: "29.167%", background: "#C9572F" }} />
        <span style={{ left: "95.833%", width: "4.167%", background: "#C9572F" }} />
        <span style={{ left: "29.167%", width: "66.666%", background: "repeating-linear-gradient(135deg,#FFF5EC 0 6px,#F0DCCB 6px 12px)" }} />
        <span className="sweep" style={{ width: 3, background: "#F6C667" }} />
      </div>
      <div className="tijdlijn-legenda">
        <span><i style={{ background: "#C9572F" }} />Nachtzorg, 23:00 tot 07:00</span>
        <span><i style={{ background: "repeating-linear-gradient(135deg,#FFF5EC 0 3px,#E3B49A 3px 6px)" }} />Overdag: mantelzorger, wijkzorg of dagbesteding</span>
      </div>
    </div>
  );
}

const VORMEN = [
  {
    eb: "Waakdienst",
    Ill: Waakdienst,
    kop: "De zorgverlener blijft de hele nacht wakker",
    tekst: "Doorlopend toezicht, direct handelen. Er is geen slaapplek nodig, wel een stoel met een leeslamp.",
    punten: ["Bij dwalen, valgevaar of ernstige onrust", "Bij zorg in de laatste levensfase"],
  },
  {
    eb: "Slaapdienst",
    Ill: Slaapdienst,
    kop: "De zorgverlener slaapt, en staat op als het nodig is",
    tekst: "Aanwezig voor de zekerheid. Hiervoor is een eigen slaapplek in een aparte ruimte nodig.",
    punten: ["Bij een rustige nacht met af en toe hulp", "Als alleen zijn geen optie meer is"],
  },
];

export function WaakEnSlaap({ kopNiveau = "h2" }: { kopNiveau?: "h2" | "h3" }) {
  const nacht = site.diensten.find((d) => d.slug === "nachtzorg");
  const H = kopNiveau;
  return (
    <div className="g2">
      {VORMEN.map((v) => {
        const prijs = nacht?.tarieven.find((t) => t.label === v.eb)?.prijs;
        return (
          <div key={v.eb} className="card col rv lift" style={{ gap: 14, padding: 32, borderRadius: 28 }}>
            <div className="ill"><v.Ill /></div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
              <div className="eb">{v.eb}</div>
              {prijs && <div style={{ fontWeight: 700, color: "#C9572F" }}>{prijs}</div>}
            </div>
            <H className="h3" style={{ fontSize: 30 }}>{v.kop}</H>
            <p className="sm">{v.tekst}</p>
            {v.punten.map((p) => <div key={p} className="li"><Vink /><span>{p}</span></div>)}
          </div>
        );
      })}
    </div>
  );
}
