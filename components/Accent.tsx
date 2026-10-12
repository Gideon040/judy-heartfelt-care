// Accentwoord in Fraunces cursief met de hartlijn eronder (signatuur 1).
// De lijn staat in de HTML en is dus zonder JavaScript zichtbaar; de
// reveal-hook laat hem onder de vouw "schrijven" zodra de kop in beeld komt.
import type { ReactNode } from "react";

const LIJNEN = [
  "M2 9 C 30 3, 60 12, 100 6 S 160 2, 198 8",
  "M2 7 C 40 12, 80 2, 120 8 S 170 11, 198 5",
  "M2 8 C 50 2, 90 12, 140 6 S 185 6, 198 9",
];

function tekstVan(n: ReactNode): string {
  if (typeof n === "string" || typeof n === "number") return String(n);
  if (Array.isArray(n)) return n.map(tekstVan).join("");
  return "";
}

export default function Accent({ children }: { children: ReactNode }) {
  const t = tekstVan(children);
  const d = LIJNEN[t.length % LIJNEN.length];
  // Korte accenten niet afbreken (prototype: white-space:nowrap).
  const kort = t.trim().split(/\s+/).length <= 3;
  return (
    <span className={kort ? "em nw" : "em"}>
      {children}
      <svg viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d={d} pathLength={1} />
      </svg>
    </span>
  );
}
