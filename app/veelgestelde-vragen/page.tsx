import type { Metadata } from "next";
import { site } from "@/site.config";
import { faqSchema } from "@/lib/schema";
import { Band, CtaBlok, FaqLijst, HeroSub, JsonLd } from "@/components/Blokken";
import Accent from "@/components/Accent";

export const metadata: Metadata = {
  title: `Veelgestelde vragen | ${site.naam}`,
  description: `Antwoorden op de vragen die mensen ${site.naam} het vaakst stellen: over kosten, werkwijze, vergoeding en praktische zaken.`,
  alternates: { canonical: `${site.url}/veelgestelde-vragen` },
};

const GROEPEN = [
  {
    thema: "Kosten",
    vragen: [
      { vraag: "Wat kost thuiszorg bij jullie?", antwoord: "Wij werken met een vast tarief per uur of per nacht. Het bedrag hangt af van de zorgzwaarte, de duur en de reisafstand, en staat op papier voordat de zorg start." },
      { vraag: "Betaal ik voor de kennismaking?", antwoord: "Nee, de kennismaking bij u thuis is kosteloos en vrijblijvend." },
      { vraag: "Komt er btw bij?", antwoord: "Nee. Zorg aan huis is vrijgesteld van btw." },
    ],
  },
  {
    thema: "Werkwijze",
    vragen: [
      { vraag: "Hoe snel kunnen jullie starten?", antwoord: "Wij hebben geen wachtlijst. De kennismaking is meestal binnen 48 uur, de zorg kan daarna vaak binnen enkele dagen beginnen." },
      { vraag: "Krijg ik steeds dezelfde zorgverlener?", antwoord: "Ja, dat is het uitgangspunt. Een nieuw gezicht stellen wij altijd eerst aan u voor." },
      { vraag: "Doen jullie ook verpleegtechnische handelingen?", antwoord: "Daarvoor werken wij samen met verzorgenden IG en verpleegkundigen, of wij stemmen af met de wijkverpleging." },
    ],
  },
  {
    thema: "Vergoeding",
    vragen: [
      { vraag: "Kan ik jullie betalen vanuit een pgb?", antwoord: "Ja. Wij helpen u met de zorgovereenkomst bij de SVB en met de maandelijkse urenverantwoording." },
      { vraag: "Heb ik een indicatie nodig?", antwoord: "Niet als u de zorg particulier afneemt. Voor pgb, Wmo of Wlz wel. Wij denken mee over de aanvraag." },
      { vraag: "Vergoedt mijn zorgverzekering deze zorg?", antwoord: "Wijkverpleging vanuit de zorgverzekering valt buiten ons aanbod. Wij werken ernaast." },
    ],
  },
  {
    thema: "Praktisch",
    vragen: [
      { vraag: "Werken jullie ook in het weekend?", antwoord: "Ja, alle zorg is zeven dagen per week beschikbaar." },
      { vraag: "Kan de zorg mee op vakantie?", antwoord: `Dat kan in overleg, bijvoorbeeld naar ${site.vakantielanden.join(", ").replace(/, ([^,]*)$/, " of $1")}.` },
      { vraag: "Waar kan ik een klacht indienen?", antwoord: "Bespreek het eerst met ons. Komen wij er samen niet uit, dan geldt onze klachtenregeling met een onafhankelijke klachtenfunctionaris." },
    ],
  },
];

export default function Faq() {
  return (
    <main>
      <JsonLd data={faqSchema(GROEPEN.flatMap((g) => g.vragen))} />
      <HeroSub
        kruimels={[{ naam: "Veelgestelde vragen", pad: "/veelgestelde-vragen" }]}
        eb="Veelgestelde vragen"
        titel={<>Wat mensen ons <Accent>het vaakst vragen.</Accent></>}
        lead={`Staat uw vraag er niet bij? Bel ons ${site.bereikbaarKort} op ${site.telefoonWeergave}.`}
      />

      <section className="sec" style={{ paddingTop: 24 }}>
        <div className="wrap">
          {GROEPEN.map((g) => (
            <div key={g.thema} className="faq-groep">
              <h2 className="h2 rv" style={{ fontSize: "clamp(26px,2.8vw,34px)" }}>{g.thema}</h2>
              <FaqLijst vragen={g.vragen} schema={false} />
            </div>
          ))}
        </div>
      </section>

      <Band
        src="/afbeeldingen/judy-07-voordeur.webp"
        alt="Zorgverlener en dochter bij de voordeur van een oudere vrouw"
        eb="Tijd voor uw verhaal"
        titel={<>Geen vraag is <Accent>te klein</Accent></>}
        lead="Bij de kennismaking nemen wij de tijd. U hoeft niets voor te bereiden."
      />

      <CtaBlok label="Vraag niet beantwoord?" titel={<>Stel hem gerust <Accent>{`aan ${site.gezicht.voornaam}.`}</Accent></>} foto="raam" ill="bel" />
    </main>
  );
}
