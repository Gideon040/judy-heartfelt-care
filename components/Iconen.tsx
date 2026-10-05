// Iconen uit het ontwerp.

export function Pijl() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Telefoon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

// Rond vinkje: "licht" op donkere achtergrond, anders terracotta.
export function Vink({ licht = false }: { licht?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" style={{ flex: "none", marginTop: 2 }}>
      <circle cx="11" cy="11" r="11" fill={licht ? "#F0934F" : "#C9572F"} />
      <path d="M6.5 11.5l3 3 6-6.5" fill="none" stroke={licht ? "#261B2A" : "#ffffff"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function VinkKlein() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9572F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

export function Hart() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
      <path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.3 3 4.5 6.7 4.5c2.1 0 3.6 1.2 4.4 2.5.8-1.3 2.3-2.5 4.4-2.5 3.7 0 5.8 3.8 4.3 7.2C19.5 16.4 12 21 12 21z" />
    </svg>
  );
}
