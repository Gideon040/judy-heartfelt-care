// Illustratieset in de lijnstijl van de site (redesign/LEESMIJ.md, punt 7).
// Elke illustratie is een losse SVG met viewBox 130x90; de animaties staan in
// globals.css (klop, golfje, stoom, zz, vlam, gloed, vink, vonk, zwaai,
// noot, zon). Alleen voor de beloftebalk, de stappen en kleine kaarten.
import type { ReactNode } from "react";

const HART = "M12 21s-7.5-4.6-9.6-9.2C.9 8.3 3 4.5 6.7 4.5c2.1 0 3.6 1.1 5.3 3 1.7-1.9 3.2-3 5.3-3 3.7 0 5.8 3.8 4.3 7.3C19.5 16.4 12 21 12 21z";

// Hartje op positie x,y met breedte b (in viewBox-eenheden).
function Hartje({ x, y, b, klop = true }: { x: number; y: number; b: number; klop?: boolean }) {
  return (
    <g className={klop ? "ill-hart" : undefined}>
      <path className="fa" d={HART} transform={`translate(${x} ${y}) scale(${b / 24})`} />
    </g>
  );
}

function Svg({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <svg viewBox="0 0 130 90" width="130" height="90" className={className} aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

export function HartIcoon({ maat = 20, kleur = "#fff" }: { maat?: number; kleur?: string }) {
  return (
    <svg width={maat} height={maat} viewBox="0 0 24 22" aria-hidden="true" focusable="false">
      <path d={HART} fill={kleur} />
    </svg>
  );
}
export const HART_PAD = HART;

export function IllBel() {
  return (
    <Svg>
      <rect className="st fw" x="48" y="10" width="34" height="68" rx="8" />
      <path className="st" d="M60 70h10" />
      <Hartje x={55} y={30} b={20} />
      <path className="st golfje" d="M38 30c-5 7-5 21 0 28" />
      <path className="st golfje g2" d="M29 24c-9 11-9 29 0 40" />
      <path className="st golfje" d="M92 30c5 7 5 21 0 28" />
      <path className="st golfje g2" d="M101 24c9 11 9 29 0 40" />
    </Svg>
  );
}

export function IllTafel() {
  return (
    <Svg>
      <path className="st" d="M16 58h98M28 58v24M102 58v24" />
      <path className="st fw" d="M40 44h20v6a10 10 0 0 1-20 0z" />
      <path className="fa" d="M70 44h20v6a10 10 0 0 1-20 0z" />
      <path className="st" d="M70 44h20v6a10 10 0 0 1-20 0z" />
      <path className="st stoom" d="M46 36c-3-4 3-6 0-10M54 36c-3-4 3-6 0-10" />
      <path className="st stoom s2" d="M76 36c-3-4 3-6 0-10M84 36c-3-4 3-6 0-10" />
      <rect x="96" y="12" width="26" height="20" rx="5" fill="#F7C35C" stroke="#24172A" strokeWidth="2" />
      <text className="badge48" x="101" y="26">48u</text>
    </Svg>
  );
}

export function IllHuis() {
  return (
    <Svg>
      <path className="st" d="M14 80h102" />
      <path className="st fw" d="M30 80V44l35-26 35 26v36" />
      <Hartje x={54} y={46} b={22} />
      <g className="vonk" style={{ animationDuration: "2.6s" }}>
        <circle cx="102" cy="22" r="11" fill="#5FD08D" />
        <path d="M97 22l4 4 7-8" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </Svg>
  );
}

export function IllNacht() {
  return (
    <Svg>
      <path className="st" d="M12 74V42M12 62h100v12M112 62V52" />
      <rect className="fl" x="20" y="50" width="26" height="12" rx="5" />
      <path className="fa" d="M48 62c4-11 22-13 36-13h20c4 0 8 3 8 7v6z" opacity=".9" />
      <path className="st" d="M20 61h92" />
      <path className="fa" d="M100 8a13 13 0 1 0 11 20 11 11 0 0 1-11-20z" />
      <text className="zz" x="70" y="36">z</text>
      <text className="zz zz2" x="77" y="30" style={{ fontSize: 10 }}>z</text>
      <text className="zz zz3" x="83" y="25" style={{ fontSize: 8 }}>z</text>
    </Svg>
  );
}

export function IllVerzorging() {
  return (
    <Svg>
      <path className="st" d="M50 16h22a6 6 0 0 1 6 6v6M78 28v4" />
      <circle className="fa druppel" cx="78" cy="40" r="3" />
      <path className="st fw" d="M30 56h70l-6 18H36z" />
      <path className="st" d="M24 56h82" />
      <rect className="fl" x="96" y="26" width="16" height="26" rx="4" />
      <Hartje x={57} y={60} b={16} />
    </Svg>
  );
}

export function IllAgenda() {
  return (
    <Svg>
      <rect className="st fw" x="32" y="14" width="66" height="64" rx="8" />
      <path className="fa" d="M32 22a8 8 0 0 1 8-8h50a8 8 0 0 1 8 8v8H32z" />
      <path className="st" d="M32 30h66M48 8v12M82 8v12" />
      <path className="st vink" d="M44 46l4 4 8-9" />
      <path className="st vink v2" d="M62 46l4 4 8-9" />
      <path className="st vink v3" d="M80 46l4 4 8-9" />
      <Hartje x={45} y={58} b={12} klop={false} />
      <rect className="fl" x="62" y="59" width="12" height="9" rx="2" />
    </Svg>
  );
}

export function IllHuishoud() {
  return (
    <Svg>
      <path className="st" d="M16 78h98" />
      <path className="st fw" d="M28 78V44l28-22 28 22v34" />
      <rect className="fa" x="48" y="58" width="16" height="20" rx="2" />
      <g className="zwaai">
        <path className="st" d="M100 14l-8 44" />
        <path className="fl" d="M82 56h18l3 18H78z" />
        <path className="st" d="M82 56h18l3 18H78z" />
      </g>
      <path className="fa vonk" d="M110 30l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
      <path className="fa vonk d2" d="M18 28l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5z" />
    </Svg>
  );
}

export function IllKaars() {
  return (
    <Svg>
      <circle className="fl gloed" cx="65" cy="32" r="24" />
      <path className="st fw" d="M54 80h22M57 80V46h16v34" />
      <path className="st" d="M65 46v-6" />
      <path className="fa vlam" d="M65 14c6 8 8 13 8 17a8 8 0 0 1-16 0c0-4 2-9 8-17z" />
      <Hartje x={59} y={58} b={12} klop={false} />
    </Svg>
  );
}

export function Ill24() {
  return (
    <Svg>
      <path className="st" d="M10 76h110" />
      <path className="st" strokeDasharray="4 6" d="M22 70c10-48 76-48 86 0" />
      <path className="st fw" d="M50 76V56l15-11 15 11v20" />
      <Hartje x={58} y={60} b={14} />
      <g className="zon">
        <circle cx="26" cy="34" r="8" fill="#F7C35C" />
        <path className="st" d="M26 20v-4M26 52v-4M12 34H8M44 34h-4M16 24l-3-3M36 24l3-3" />
      </g>
      <path className="fa" d="M104 20a10 10 0 1 0 9 14 8 8 0 0 1-9-14z" />
    </Svg>
  );
}

export function IllPad() {
  return (
    <Svg>
      <path className="st" strokeDasharray="3 7" d="M14 72c22-30 46 8 70-20s24-26 32-30" />
      <circle className="fa" cx="14" cy="72" r="5" />
      <g className="noot">
        <path className="fa" d="M112 6c-8 0-13 6-13 12 0 9 13 20 13 20s13-11 13-20c0-6-5-12-13-12z" />
        <circle cx="112" cy="18" r="4" fill="#fff" />
      </g>
    </Svg>
  );
}

export function IllCultuur() {
  return (
    <Svg>
      <path className="st" d="M30 78h70" />
      <ellipse className="fl" cx="65" cy="60" rx="22" ry="8" />
      <path className="st fw" d="M43 60v12c0 4 10 6 22 6s22-2 22-6V60" />
      <ellipse className="st" cx="65" cy="60" rx="22" ry="8" />
      <path className="fa noot" d="M44 32v14a4 4 0 1 1-2-3.5V30l12-3v4z" />
      <path className="fa noot n2" d="M84 28v14a4 4 0 1 1-2-3.5V26l12-3v4z" />
    </Svg>
  );
}

export function IllHand() {
  return (
    <Svg>
      <circle className="fl" cx="65" cy="45" r="32" />
      <Hartje x={47} y={26} b={36} />
      <path className="st" d="M24 70c10-4 20-2 28 4h18c4 0 4 6 0 6H54" />
      <path className="st" d="M106 70c-10-4-20-2-28 4" />
    </Svg>
  );
}

export function IllPapier() {
  return (
    <Svg>
      <rect className="st fw" x="38" y="10" width="54" height="70" rx="6" />
      <path className="st" d="M50 26h30M50 36h30M50 46h18" />
      <path className="st vink" d="M50 62l5 5 10-11" />
      <g className="zwaai" style={{ animationDuration: "3s" }}>
        <path className="st" d="M104 22l-18 44" />
        <path className="fa" d="M84 64l2 8 5-6z" />
      </g>
    </Svg>
  );
}

// Nachtzorg: waak- en slaapdienst (uit de huidige site, kleuren op de tokens).
export function Waakdienst() {
  return (
    <svg viewBox="0 0 200 120" width="200" height="120" aria-hidden="true" focusable="false">
      <circle className="gloed" cx="150" cy="38" r="30" fill="#F7C35C" opacity=".45" />
      <path d="M138 34h24l-7-18h-10z" className="st" style={{ fill: "#F7C35C" }} />
      <line x1="150" y1="34" x2="150" y2="100" className="st" />
      <line x1="138" y1="102" x2="162" y2="102" className="st" />
      <path d="M40 100V62c0-10 8-16 18-16h14c10 0 18 6 18 16v38z" className="st fa" />
      <path d="M30 100V80c0-5 4-8 8-8s8 3 8 8v20zM84 100V80c0-5 4-8 8-8s8 3 8 8v20z" className="st fl" />
      <line x1="22" y1="102" x2="108" y2="102" className="st" />
      <circle cx="65" cy="32" r="12" className="st fw" />
      <g className="knipper" fill="#24172A"><circle cx="61" cy="32" r="1.9" /><circle cx="69" cy="32" r="1.9" /></g>
    </svg>
  );
}

export function Slaapdienst() {
  return (
    <svg viewBox="0 0 200 120" width="200" height="120" aria-hidden="true" focusable="false">
      <rect x="30" y="66" width="120" height="22" rx="6" className="st fa" />
      <rect x="38" y="52" width="34" height="16" rx="8" className="st fw" />
      <circle cx="56" cy="46" r="10" className="st fw" />
      <path d="M51 46h4M58 46h4" className="st" strokeWidth="2" />
      <path d="M66 66c12-12 64-12 80 0" className="st fl" />
      <line x1="34" y1="88" x2="34" y2="98" className="st" />
      <line x1="146" y1="88" x2="146" y2="98" className="st" />
      <text className="zz" x="74" y="38" style={{ fontSize: 14 }}>z</text>
      <text className="zz zz2" x="86" y="28" style={{ fontSize: 11 }}>z</text>
      <g className="zwaai" style={{ animationDuration: "4s" }}>
        <path d="M166 30c0-9 5-14 10-14s10 5 10 14v8l4 5h-28l4-5z" className="st" style={{ fill: "#F7C35C" }} />
        <circle cx="176" cy="48" r="3" fill="#24172A" />
      </g>
    </svg>
  );
}

export const ILLUSTRATIES = {
  bel: IllBel, tafel: IllTafel, huis: IllHuis, nacht: IllNacht, verzorging: IllVerzorging,
  agenda: IllAgenda, huishoud: IllHuishoud, kaars: IllKaars, etmaal: Ill24, pad: IllPad,
  cultuur: IllCultuur, hand: IllHand, papier: IllPapier,
} as const;
export type IllNaam = keyof typeof ILLUSTRATIES;

export function Ill({ naam }: { naam: IllNaam }) {
  const C = ILLUSTRATIES[naam];
  return <C />;
}
