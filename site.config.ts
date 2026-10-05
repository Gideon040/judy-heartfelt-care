// Per klant invullen. slug MOET gelijk zijn aan organisaties.slug in het portaal.

// Diensten die Judy aanbiedt (intake). Volgorde = volgorde op de site en in
// de wizard; de eerste gekozen dienst gaat als zorgvraag naar het portaal.
// "zorgvraag" is de waarde uit het API-contract (zie CLAUDE.md).
// Tarieven staan op "Op aanvraag", zoals Judy in de intake koos.
const diensten = [
  {
    slug: "persoonlijke-verzorging",
    naam: "Persoonlijke verzorging",
    zorgvraag: "persoonlijke_verzorging",
    tarieven: [{ label: "Persoonlijke verzorging", eenheid: "per uur", prijs: "Op aanvraag" }],
  },
  {
    slug: "begeleiding",
    naam: "Begeleiding",
    zorgvraag: "begeleiding",
    tarieven: [{ label: "Begeleiding", eenheid: "per uur", prijs: "Op aanvraag" }],
  },
  {
    slug: "nachtzorg",
    naam: "Nachtzorg",
    zorgvraag: "nachtzorg",
    tarieven: [
      { label: "Waakdienst", eenheid: "per nacht", prijs: "Op aanvraag" },
      { label: "Slaapdienst", eenheid: "per nacht", prijs: "Op aanvraag" },
    ],
  },
  {
    slug: "dagbesteding",
    naam: "Dagbesteding",
    zorgvraag: "dagbesteding",
    tarieven: [{ label: "Dagbesteding", eenheid: "per uur", prijs: "Op aanvraag" }],
  },
  {
    slug: "huishoudelijke-hulp",
    naam: "Huishoudelijke hulp",
    zorgvraag: "huishoudelijk",
    tarieven: [{ label: "Huishoudelijke hulp", eenheid: "per uur", prijs: "Op aanvraag" }],
  },
  {
    slug: "palliatieve-zorg",
    naam: "Palliatieve zorg",
    zorgvraag: "palliatieve_zorg",
    tarieven: [{ label: "Palliatieve zorg", eenheid: "per uur of per nacht", prijs: "Op aanvraag" }],
  },
] as const;

// Werkgebied. LET OP: in de intake staat alleen "Limburg"; deze zes plaatsen
// komen uit het ontwerp en moeten door Judy bevestigd worden.
// - "diensten": alleen combinaties die Judy echt aanbiedt krijgen een
//   dienst×plaatspagina (regel 6.1 structuurspec).
// - "eigenZin": de ene zin van Judy over zorg in deze plaats (intake). Zolang
//   die leeg is, slaat de pagina dat blok over.
// - "context": alleen na te lopen feiten (ziekenhuis, gemeente, ligging).
// - "kaart": positie op het schematische kaartje (viewBox 440×260).
const alleDiensten = diensten.map((d) => d.slug);
const werkgebied = [
  {
    naam: "Maastricht",
    slug: "maastricht",
    gemeente: "Maastricht",
    kernen: ["Wyck", "Heer", "Amby", "Scharn", "Gronsveld", "Cadier en Keer"],
    ligging:
      "Maastricht is de grootste stad van Zuid-Limburg, met het Maastricht UMC+ als academisch ziekenhuis van de regio.",
    context:
      "Wie in het Maastricht UMC+ is opgenomen, komt vaak sneller thuis dan de omgeving had verwacht. Dan moet de zorg thuis meteen staan.",
    dichtbij: ["meerssen", "valkenburg-aan-de-geul", "beek"],
    eigenZin: "",
    kaart: { x: 178, y: 172 },
    diensten: alleDiensten,
  },
  {
    naam: "Meerssen",
    slug: "meerssen",
    gemeente: "Meerssen",
    kernen: ["Bunde", "Ulestraten", "Geulle", "Rothem"],
    ligging:
      "Meerssen ligt aan de Geul, tussen Maastricht en Valkenburg. Bij de gemeente horen ook Bunde, Ulestraten en Geulle.",
    context:
      "Het dichtstbijzijnde ziekenhuis is het Maastricht UMC+. In de kleinere kernen woont men vaak al een leven lang in hetzelfde huis, en daar wil men ook blijven.",
    dichtbij: ["maastricht", "valkenburg-aan-de-geul", "beek"],
    eigenZin: "",
    kaart: { x: 236, y: 116 },
    diensten: alleDiensten,
  },
  {
    naam: "Valkenburg aan de Geul",
    slug: "valkenburg-aan-de-geul",
    gemeente: "Valkenburg aan de Geul",
    kernen: ["Valkenburg", "Berg en Terblijt", "Schin op Geul", "Houthem", "Sibbe", "Vilt"],
    ligging:
      "Valkenburg aan de Geul ligt midden in het Heuvelland. De gemeente bestaat uit Valkenburg zelf en dorpen als Berg en Terblijt, Schin op Geul en Houthem.",
    context:
      "Het Heuvelland is mooi, maar heuvels, trappen en drempels maken thuis wonen zwaarder naarmate iemand minder mobiel wordt. Dat nemen wij mee in de afspraken.",
    dichtbij: ["meerssen", "maastricht", "heerlen"],
    eigenZin: "",
    kaart: { x: 290, y: 150 },
    diensten: alleDiensten,
  },
  {
    naam: "Sittard-Geleen",
    slug: "sittard-geleen",
    gemeente: "Sittard-Geleen",
    kernen: ["Sittard", "Geleen", "Born", "Limbricht", "Munstergeleen", "Einighausen"],
    ligging:
      "Sittard-Geleen is de gemeente in de Westelijke Mijnstreek, met naast Sittard en Geleen ook Born, Limbricht en Munstergeleen.",
    context:
      "Het ziekenhuis is Zuyderland Medisch Centrum in Sittard-Geleen. Na een opname daar regelen wij de zorg thuis zodat de eerste dagen niet op de familie neerkomen.",
    dichtbij: ["beek", "meerssen"],
    eigenZin: "",
    kaart: { x: 300, y: 40 },
    diensten: alleDiensten,
  },
  {
    naam: "Heerlen",
    slug: "heerlen",
    gemeente: "Heerlen",
    kernen: ["Hoensbroek", "Heerlerheide", "Heerlerbaan", "Welten"],
    ligging:
      "Heerlen is de grootste plaats van Parkstad. Ook Hoensbroek, Heerlerheide en Heerlerbaan horen bij de gemeente.",
    context:
      "Het ziekenhuis is Zuyderland Medisch Centrum in Heerlen. Wij stemmen af met de huisarts en de wijkverpleging die al bij u over de vloer komen.",
    dichtbij: ["valkenburg-aan-de-geul", "meerssen"],
    eigenZin: "",
    kaart: { x: 350, y: 110 },
    diensten: alleDiensten,
  },
  {
    naam: "Beek",
    slug: "beek",
    gemeente: "Beek",
    kernen: ["Spaubeek", "Neerbeek", "Genhout", "Geverik"],
    ligging:
      "Beek ligt tussen Maastricht en Sittard-Geleen. Bij de gemeente horen ook Spaubeek, Neerbeek, Genhout en Geverik.",
    context:
      "Voor het ziekenhuis gaat u vanuit Beek naar Zuyderland in Sittard-Geleen of naar het Maastricht UMC+. Thuis herstellen scheelt dus veel heen-en-weer reizen.",
    dichtbij: ["sittard-geleen", "meerssen", "maastricht"],
    eigenZin: "",
    kaart: { x: 262, y: 70 },
    diensten: alleDiensten,
  },
] as const;

const vastePaginas = [
  "/tarieven-en-vergoeding",
  "/over",
  "/zorgvraag",
  "/contact",
  "/veelgestelde-vragen",
  "/werkgebied",
  "/privacy",
  "/klachtenregeling",
  "/algemene-voorwaarden",
];

export const site = {
  slug: "judy-heartfelt-care",
  naam: "Judy Heartfelt Care",
  plaats: "Maastricht",
  segment: "thuiszorg",
  telefoon: "+31686353313",
  email: "judyheartfeltcare@gmail.com",
  // Productie-URL zonder slash aan het einde. Gebruikt voor sitemap,
  // robots, canonicals en schema.org.
  // TODO: definitief domein van Judy invullen.
  url: "https://www.judyheartfeltcare.nl",
  ga4Id: "G-XXXXXXX",
  // Extra paden van deze site (bijv. "/diensten/huishoudelijke-hulp-hengelo")
  // zodat ze in de sitemap komen zonder de basisbestanden aan te passen.
  extraPaginas: [
    ...vastePaginas,
    ...diensten.map((d) => `/zorg/${d.slug}`),
    ...werkgebied.flatMap((p) =>
      (p.diensten as readonly string[]).map((d) => `/zorg/${d}/${p.slug}`)
    ),
  ] as readonly string[],
  // Lokaal ontwikkelen: post naar het lokale portaal i.p.v. productie.
  apiUrl:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001/api/leads"
      : "https://app.zorgbaar.nl/api/leads",

  // --- Klantgegevens die in de teksten van deze site terugkomen ---
  telefoonWeergave: "06 86 35 33 13",
  bereikbaarheid: "ma t/m vr 10:00 - 17:00",
  bereikbaarKort: "tussen 10:00 en 17:00",
  regio: "Zuid-Limburg",
  ondertitel: "Particuliere thuiszorg",
  directPlek: true,
  kvk: "96481706",
  agb: "41552677",
  vog: true,
  // Leeg = niet tonen. Invullen zodra Judy het aanlevert.
  wtza: "", // TODO: Wtza-status (melding/vergunning)
  geschilleninstantie: "", // TODO: naam geschilleninstantie (Wkkgz)
  klachtenfunctionaris: "", // TODO: naam/organisatie klachtenfunctionaris
  aansprakelijkheid: "", // TODO: verzekeraar beroeps- en bedrijfsaansprakelijkheid
  financiering: ["Pgb", "Wmo", "Wlz", "Particulier"],
  // Plaats-pills (home, werkgebied, footer) linken naar deze dienst×plaats.
  hoofddienst: "nachtzorg",
  gezicht: {
    naam: "Judy Hernandez",
    voornaam: "Judy",
    functie: "Oprichter en zorgcoördinator",
    foto: "/afbeeldingen/judy-portret.jpg" as string, // Leeg = monogram.
    jarenErvaring: 9,
    opleiding: "Hbo-V",
    opleidingStatus: "in opleiding",
    talen: ["Nederlands", "Engels", "Papiaments", "Spaans"],
    ervaringMet: ["Dementie", "Palliatieve zorg", "Parkinson", "Diabetes", "GGZ", "Ambulante begeleiding"],
    citaat:
      "Ik ben in de zorg gaan werken omdat ik iets wil betekenen voor mensen die ondersteuning nodig hebben. Voor mij is zorg meer dan helpen bij de dagelijkse verzorging. Iemand moet zich gezien, gehoord en gerespecteerd voelen. Ik bied zorg zoals ik die zelf zou willen ontvangen.",
    verhaal: [
      "Ik ben in de zorg gaan werken omdat ik graag iets wil betekenen voor mensen die ondersteuning nodig hebben. Voor mij is zorg meer dan alleen helpen bij de dagelijkse verzorging. Ik vind het belangrijk dat iemand zich gezien, gehoord en gerespecteerd voelt.",
      "Door mijn ervaring heb ik geleerd om met geduld, aandacht en betrokkenheid te werken. Ik kijk naar de persoon achter de zorgvraag en probeer altijd zorg te bieden zoals ik die zelf ook zou willen ontvangen.",
    ],
    bio: "Negen jaar ervaring in de ouderenzorg, de thuiszorg en de particuliere zorg. Gediplomeerd zorgprofessional en student hbo-Verpleegkunde. Judy doet de kennismaking, legt de afspraken vast en blijft uw aanspreekpunt.",
  },
  // Binnenkort-aankondiging uit de intake.
  aankondiging: {
    titel: "Culturele dagbesteding in Arnhem",
    tekst: "Naast zorg aan huis starten wij binnenkort met culturele dagbesteding in Arnhem.",
  },
  vakantielanden: ["België", "Spanje", "Curaçao"],
  // Pas tonen bij minimaal 3 echte reviews (voornaam, plaats, datum).
  reviews: [] as readonly { tekst: string; voornaam: string; plaats: string; datum: string }[],
  diensten,
  werkgebied,
} as const;

export type Dienst = (typeof diensten)[number];
export type Plaats = (typeof werkgebied)[number];
