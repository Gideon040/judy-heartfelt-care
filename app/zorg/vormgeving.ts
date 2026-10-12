// Vormgeving per dienst (redesign): welke illustratie bij elke taak, welke
// foto bij elke situatie en wat er in de CTA-kaart staat. Teksten staan in
// inhoud.ts en zijn ongewijzigd.
import type { FotoNaam } from "@/components/fotos";
import type { IllNaam } from "@/components/Illustraties";

export const vormgeving: Record<string, {
  taken: IllNaam[];
  situaties: [FotoNaam, FotoNaam, FotoNaam, FotoNaam];
  ctaFoto: FotoNaam;
  ctaIll: IllNaam;
}> = {
  "persoonlijke-verzorging": {
    taken: ["verzorging", "hand", "huis", "tafel"],
    situaties: ["straat", "raam", "dagbesteding", "voordeur"],
    ctaFoto: "keukentafel",
    ctaIll: "verzorging",
  },
  begeleiding: {
    taken: ["agenda", "papier", "huis", "pad"],
    situaties: ["raam", "keukentafel", "tuinbankje", "voordeur"],
    ctaFoto: "tuinbankje",
    ctaIll: "agenda",
  },
  nachtzorg: {
    taken: [],
    situaties: ["avond", "straat", "voordeur", "palliatief"],
    ctaFoto: "raam",
    ctaIll: "nacht",
  },
  dagbesteding: {
    taken: ["pad", "tafel", "cultuur", "huishoud"],
    situaties: ["raam", "keukentafel", "voordeur", "tuinbankje"],
    ctaFoto: "dagbesteding",
    ctaIll: "cultuur",
  },
  "huishoudelijke-hulp": {
    taken: ["huishoud", "verzorging", "nacht", "pad"],
    situaties: ["straat", "raam", "voordeur", "verzorging"],
    ctaFoto: "keukentafel",
    ctaIll: "huishoud",
  },
  "palliatieve-zorg": {
    taken: ["kaars", "hand", "huis", "bel"],
    situaties: ["raam", "avond", "nachtzorg", "tuinbankje"],
    ctaFoto: "palliatief",
    ctaIll: "kaars",
  },
};
