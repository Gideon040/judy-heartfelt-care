// Zachte golfovergang tussen secties (signatuur 3). De kleur is altijd die
// van de VOLGENDE sectie, zodat er geen naad of witte rand ontstaat.
const KLEUR = { cream: "#FFF9F3", night: "#2A1C2C", peach: "#FCEBDD" } as const;
export type GolfKleur = keyof typeof KLEUR;

const VORM = {
  // onderkant van een sectie: de volgende sectie golft omhoog
  onder: "M0 70 V40 C300 70 520 10 760 30 S1180 70 1440 26 V70z",
  // bovenkant van een sectie: deze sectie golft over de vorige heen
  boven: "M0 70 V34 C260 0 520 60 760 36 S1200 0 1440 30 V70z",
  hero: "M0 40 C240 80 420 0 720 26 S1200 70 1440 22 V70 H0z",
};

export default function Golf({ kleur, vorm = "onder", className = "golf" }: { kleur: GolfKleur; vorm?: keyof typeof VORM; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path d={VORM[vorm]} fill={KLEUR[kleur]} />
    </svg>
  );
}
