import type { Metadata } from "next";
import { site } from "@/site.config";
import { JuriBlok, JuriPagina } from "@/components/Juridisch";

export const metadata: Metadata = {
  title: `Algemene voorwaarden | ${site.naam}`,
  description: `De afspraken die bij de zorg van ${site.naam} horen: start, tarieven, afzeggen, opzeggen en klachten.`,
  alternates: { canonical: `${site.url}/algemene-voorwaarden` },
};

export default function Voorwaarden() {
  return (
    <JuriPagina
      naam="Algemene voorwaarden"
      pad="/algemene-voorwaarden"
      titel={<>De afspraken die bij onze zorg <span className="it">horen</span></>}
      lead="Kort en leesbaar. Wat hier staat, geldt tenzij wij samen schriftelijk iets anders afspreken."
    >
      <JuriBlok kop="Start van de zorg">
        De zorg begint na een kosteloze kennismaking en een ondertekende zorgovereenkomst, met daarin de zorgvorm, de tijden en het tarief.
      </JuriBlok>
      <JuriBlok kop="Tarieven en factuur">
        Tarieven spreken wij vooraf schriftelijk af. Wij factureren per maand, op basis van de geleverde uren of nachten. Zorg is vrijgesteld van btw.
      </JuriBlok>
      <JuriBlok kop="Afzeggen">
        Afzeggen kan kosteloos tot 24 uur voor de dienst. Daarna brengen wij de geplande uren in rekening.
      </JuriBlok>
      <JuriBlok kop="Wijzigen en stoppen">
        Beide partijen kunnen schriftelijk opzeggen met de termijn uit de zorgovereenkomst. Bij een opname of overlijden vervalt die termijn.
      </JuriBlok>
      <JuriBlok kop="Wat u van ons mag verwachten">
        Zorg volgens de gemaakte afspraken, door een gediplomeerde zorgverlener met een VOG, met een rapportage per dienst.
      </JuriBlok>
      <JuriBlok kop="Wat wij van u vragen">
        Een veilige werkplek, de benodigde hulpmiddelen, en bij een slaapdienst een eigen slaapplek.
      </JuriBlok>
      {site.aansprakelijkheid && <JuriBlok kop="Aansprakelijkheid">{site.aansprakelijkheid}</JuriBlok>}
      <JuriBlok kop="Klachten">
        Klachten behandelen wij volgens onze klachtenregeling. Op deze voorwaarden is Nederlands recht van toepassing.
      </JuriBlok>
    </JuriPagina>
  );
}
