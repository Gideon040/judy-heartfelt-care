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
    situaties: ["avond", "raam", "dagbesteding", "voordeur"],
    ctaFoto: "keukentafel",
    ctaIll: "verzorging",
  },
  begeleiding: {
    taken: ["agenda", "papier", "huis", "pad"],
    situaties: ["raam", "keukentafel", "avond", "voordeur"],
    ctaFoto: "dagbesteding",
    ctaIll: "agenda",
  },
  nachtzorg: {
    taken: [],
    situaties: ["avond", "voordeur", "raam", "palliatief"],
    ctaFoto: "raam",
    ctaIll: "nacht",
  },
  dagbesteding: {
    taken: ["pad", "tafel", "cultuur", "huishoud"],
    situaties: ["raam", "keukentafel", "voordeur", "avond"],
    ctaFoto: "dagbesteding",
    ctaIll: "cultuur",
  },
  "huishoudelijke-hulp": {
    taken: ["huishoud", "verzorging", "nacht", "pad"],
    situaties: ["voordeur", "keukentafel", "dagbesteding", "verzorging"],
    ctaFoto: "avond",
    ctaIll: "huishoud",
  },
  "palliatieve-zorg": {
    taken: ["kaars", "hand", "huis", "bel"],
    situaties: ["raam", "avond", "nachtzorg", "voordeur"],
    ctaFoto: "palliatief",
    ctaIll: "kaars",
  },
};
