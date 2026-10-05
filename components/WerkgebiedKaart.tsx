import { site } from "@/site.config";

// Schematisch kaartje uit het ontwerp; posities staan per plaats in
// site.config.ts. De eerste plaats is het middelpunt.
export default function WerkgebiedKaart() {
  const [midden, ...rest] = site.werkgebied;
  const { x, y } = midden.kaart;
  const font = { fontFamily: "var(--font-jakarta), sans-serif" };
  return (
    <svg viewBox="0 0 440 260" width="100%" role="img" aria-label={`Schematische weergave van het werkgebied rond ${midden.naam}`} style={{ display: "block" }}>
      <g fill="none" stroke="#F0DCCB" strokeWidth="1.6">
        <circle cx={x} cy={y} r="70" />
        <circle cx={x} cy={y} r="130" />
        <circle cx={x} cy={y} r="190" />
      </g>
      <circle className="rip" cx={x} cy={y} r="10" fill="none" stroke="#C9572F" strokeWidth="2" />
      <circle className="rip p2" cx={x} cy={y} r="10" fill="none" stroke="#C9572F" strokeWidth="2" />
      <circle cx={x} cy={y} r="10" fill="#C9572F" />
      <text x={x} y={y + 30} textAnchor="middle" fontWeight="800" fontSize="19" fill="#2A1F2D" style={font}>{midden.naam}</text>
      {rest.map((p) => (
        <g key={p.slug}>
          <path className="dash" d={`M${x} ${y}L${p.kaart.x} ${p.kaart.y}`} fill="none" stroke="#E3B49A" strokeWidth="1.6" />
          <circle cx={p.kaart.x} cy={p.kaart.y} r="6" fill="#E8915F" stroke="#2A1F2D" strokeWidth="2" />
          <text x={p.kaart.x + 11} y={p.kaart.y + 5} fontSize="13" fontWeight="600" fill="#2A1F2D" style={font}>
            {p.naam.replace(" aan de Geul", "")}
          </text>
        </g>
      ))}
    </svg>
  );
}
