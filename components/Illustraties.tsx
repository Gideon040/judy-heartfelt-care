// Illustraties uit het ontwerp (ontwerp-bron), automatisch omgezet naar JSX.
// Animaties zitten in globals.css (beat, alert, steam, pop, glow, blink, zz, bell).

export function StapZorgvraag() {
  return (
    <svg viewBox="0 0 200 120" width="200" height="120" aria-hidden="true"><rect x="76" y="14" width="48" height="92" rx="11" fill="#ffffff" stroke="#2A1F2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><line x1="92" y1="94" x2="108" y2="94" stroke="#2A1F2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><path className="beat" d="M100 68c-10-6.500-14-12-14-18 0-4.500 3.300-8 7.200-8 3 0 5.200 1.800 6.800 4.400 1.600-2.600 3.800-4.400 6.800-4.400 3.900 0 7.200 3.500 7.200 8 0 6-4 11.500-14 18z" fill="#E8915F" stroke="#2A1F2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><g className="alert" fill="none" stroke="#C9572F" strokeWidth="3" strokeLinecap="round"><path d="M136 40c6 6 6 18 0 24M146 32c11 11 11 29 0 40M64 40c-6 6-6 18 0 24M54 32c-11 11-11 29 0 40" /></g></svg>
  );
}

export function StapKennismaking() {
  return (
    <svg viewBox="0 0 200 120" width="200" height="120" aria-hidden="true"><path d="M24 74h152M42 74v34M158 74v34" fill="none" stroke="#2A1F2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M58 52h28v8a11 11 0 0 1-11 11h-6a11 11 0 0 1-11-11z" fill="#ffffff" stroke="#2A1F2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M112 52h28v8a11 11 0 0 1-11 11h-6a11 11 0 0 1-11-11z" fill="#E8915F" stroke="#2A1F2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><g fill="none" stroke="#2A1F2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path className="steam" d="M68 44c-3-5 3-8 0-13" /><path className="steam m2" d="M78 44c-3-5 3-8 0-13" /><path className="steam m3" d="M122 44c-3-5 3-8 0-13" /><path className="steam" d="M132 44c-3-5 3-8 0-13" /></g><g className="pop"><rect x="156" y="10" width="38" height="34" rx="7" fill="#F6C667" stroke="#2A1F2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><text x="175" y="33" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="14" fill="#2A1F2D">48u</text></g></svg>
  );
}

export function StapStart() {
  return (
    <svg viewBox="0 0 200 120" width="200" height="120" aria-hidden="true"><path d="M50 104V58l44-32 44 32v46z" fill="#ffffff" stroke="#2A1F2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><path className="beat" d="M94 88c-10-6.500-14-12-14-18 0-4.500 3.300-8 7.200-8 3 0 5.200 1.800 6.800 4.400 1.600-2.600 3.800-4.400 6.800-4.400 3.900 0 7.200 3.500 7.200 8 0 6-4 11.500-14 18z" fill="#E8915F" stroke="#2A1F2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><line x1="30" y1="104" x2="170" y2="104" stroke="#2A1F2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><g className="pop"><circle cx="158" cy="34" r="16" fill="#9CC3A8" stroke="#2A1F2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M150 34l6 6 10-11" fill="none" stroke="#2A1F2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg>
  );
}

export function Waakdienst() {
  return (
    <svg viewBox="0 0 200 120" width="200" height="120" aria-hidden="true"><circle className="glow" cx="150" cy="38" r="30" fill="#F6C667" opacity=".45" /><path d="M138 34h24l-7-18h-10z" fill="#F6C667" stroke="#2A1F2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><line x1="150" y1="34" x2="150" y2="100" stroke="#2A1F2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><line x1="138" y1="102" x2="162" y2="102" stroke="#2A1F2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M40 100V62c0-10 8-16 18-16h14c10 0 18 6 18 16v38z" fill="#E8915F" stroke="#2A1F2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M30 100V80c0-5 4-8 8-8s8 3 8 8v20zM84 100V80c0-5 4-8 8-8s8 3 8 8v20z" fill="#FBEFE4" stroke="#2A1F2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><line x1="22" y1="102" x2="108" y2="102" stroke="#2A1F2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><circle cx="65" cy="32" r="12" fill="#ffffff" stroke="#2A1F2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><g className="blink" fill="#2A1F2D"><circle cx="61" cy="32" r="1.9" /><circle cx="69" cy="32" r="1.9" /></g></svg>
  );
}

export function Slaapdienst() {
  return (
    <svg viewBox="0 0 200 120" width="200" height="120" aria-hidden="true"><rect x="30" y="66" width="120" height="22" rx="6" fill="#E8915F" stroke="#2A1F2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><rect x="38" y="52" width="34" height="16" rx="8" fill="#ffffff" stroke="#2A1F2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><circle cx="56" cy="46" r="10" fill="#ffffff" stroke="#2A1F2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M51 46h4M58 46h4" stroke="#2A1F2D" strokeWidth="2" strokeLinecap="round" /><path d="M66 66c12-12 64-12 80 0" fill="#FBEFE4" stroke="#2A1F2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><line x1="34" y1="88" x2="34" y2="98" stroke="#2A1F2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><line x1="146" y1="88" x2="146" y2="98" stroke="#2A1F2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><g fill="#C9572F" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800"><text className="zz" x="74" y="38" fontSize="14">z</text><text className="zz z2" x="86" y="28" fontSize="11">z</text></g><g className="bell"><path d="M166 30c0-9 5-14 10-14s10 5 10 14v8l4 5h-28l4-5z" fill="#F6C667" stroke="#2A1F2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><circle cx="176" cy="48" r="3" fill="#2A1F2D" /></g></svg>
  );
}

