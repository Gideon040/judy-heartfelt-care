// Iconen.

export function Pijl() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Telefoon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

// Rond vinkje: "licht" op donkere achtergrond, anders terracotta.
export function Vink({ licht = false }: { licht?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" focusable="false" style={{ flex: "none", marginTop: 2 }}>
      <circle cx="11" cy="11" r="11" fill={licht ? "#F39A6B" : "#B24C1E"} />
      <path d="M6.5 11.5l3 3 6-6.5" fill="none" stroke={licht ? "#2A1C2C" : "#ffffff"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
