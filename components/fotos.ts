// Alle foto's van de site met hun alt-tekst. De alt-teksten komen letterlijk
// uit de bestaande code; alleen judy-10 had er nog geen.
const A = "/afbeeldingen/";
export const FOTO = {
  keukentafel: { src: `${A}judy-00-hero-keukentafel.webp`, alt: "Zorgverlener en oudere vrouw lachen samen aan de keukentafel" },
  verzorging: { src: `${A}judy-01-persoonlijke-verzorging.webp`, alt: "Zorgverlener helpt een oudere vrouw bij de ochtendverzorging" },
  begeleiding: { src: `${A}tijdelijk-02-begeleiding.jpg`, alt: "Begeleider en cliënt in gesprek aan tafel" },
  nachtzorg: { src: `${A}judy-03-nachtzorg.webp`, alt: "Nachtzorg aan huis" },
  dagbesteding: { src: `${A}judy-04-dagbesteding.webp`, alt: "Zorgverlener en oudere man samen bezig aan tafel" },
  huishouden: { src: `${A}tijdelijk-05-huishoudelijke-hulp.jpg`, alt: "Huishoudelijke hulp aan het werk in de keuken" },
  palliatief: { src: `${A}judy-06-palliatieve-zorg.webp`, alt: "Zorgverlener houdt de hand vast van een oudere vrouw in bed" },
  voordeur: { src: `${A}judy-07-voordeur.webp`, alt: "Zorgverlener en dochter bij de voordeur van een oudere vrouw" },
  tarieven: { src: `${A}tijdelijk-08-tarieven.jpg`, alt: "Familie neemt samen de kosten door" },
  tuinbankje: { src: `${A}tijdelijk-09-tuinbankje.jpg`, alt: "Zorgverlener en cliënt lachen samen" },
  raam: { src: `${A}judy-10-bij-het-raam.webp`, alt: "Oudere vrouw zit in haar leunstoel bij het raam, in het licht van een leeslamp" },
  avond: { src: `${A}judy-11-band-nachtzorg.webp`, alt: "Zorgverlener bij een cliënt in de avond" },
  straat: { src: `${A}tijdelijk-13-straat.jpg`, alt: "Zorgverlener loopt met een oudere man met rollator door de straat" },
  pgb: { src: `${A}judy-14-formulier-pgb.webp`, alt: "Samen een pgb-formulier invullen" },
  voordeurWerkgebied: { src: `${A}tijdelijk-voordeur-werkgebied.jpg`, alt: "Kennismaking aan de voordeur" },
} as const;
export type FotoNaam = keyof typeof FOTO;
