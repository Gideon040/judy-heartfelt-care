// Alle foto's van de site met hun alt-tekst. De alt-teksten komen letterlijk
// uit de bestaande code; alleen judy-10 had er nog geen. Alleen Judy's eigen
// foto's, geen tijdelijke beelden meer.
const A = "/afbeeldingen/";
export const FOTO = {
  keukentafel: { src: `${A}judy-00-hero-keukentafel.webp`, alt: "Zorgverlener en oudere vrouw lachen samen aan de keukentafel" },
  verzorging: { src: `${A}judy-01-persoonlijke-verzorging.webp`, alt: "Zorgverlener helpt een oudere vrouw bij de ochtendverzorging" },
  nachtzorg: { src: `${A}judy-03-nachtzorg.webp`, alt: "Nachtzorg aan huis" },
  dagbesteding: { src: `${A}judy-04-dagbesteding.webp`, alt: "Zorgverlener en oudere man samen bezig aan tafel" },
  palliatief: { src: `${A}judy-06-palliatieve-zorg.webp`, alt: "Zorgverlener houdt de hand vast van een oudere vrouw in bed" },
  voordeur: { src: `${A}judy-07-voordeur.webp`, alt: "Zorgverlener en dochter bij de voordeur van een oudere vrouw" },
  raam: { src: `${A}judy-10-bij-het-raam.webp`, alt: "Oudere vrouw zit in haar leunstoel bij het raam, in het licht van een leeslamp" },
  avond: { src: `${A}judy-11-band-nachtzorg.webp`, alt: "Zorgverlener bij een cliënt in de avond" },
  pgb: { src: `${A}judy-14-formulier-pgb.webp`, alt: "Samen een pgb-formulier invullen" },
} as const;
export type FotoNaam = keyof typeof FOTO;
