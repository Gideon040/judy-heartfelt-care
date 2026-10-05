import type { Metadata } from "next";
import { site } from "@/site.config";
import { JuriPagina } from "@/components/Juridisch";
import { Vink } from "@/components/Iconen";

export const metadata: Metadata = {
  title: `Klachtenregeling | ${site.naam}`,
  description: `Niet tevreden over de zorg van ${site.naam}? Zo dient u een klacht in, volgens de Wkkgz.`,
  alternates: { canonical: `${site.url}/klachtenregeling` },
};

export default function Klachtenregeling() {
  const stappen = [
    {
      kop: "Bespreek het met ons",
      tekst: "De meeste klachten lossen wij samen op. Bel of mail, dan plannen wij binnen vijf werkdagen een gesprek en leggen wij vast wat er verandert.",
    },
    {
      kop: "De klachtenfunctionaris",
      tekst: `Komt u er met ons niet uit, dan kunt u kosteloos naar een onafhankelijke klachtenfunctionaris${site.klachtenfunctionaris ? ` (${site.klachtenfunctionaris})` : ""}. Die bemiddelt en kiest geen partij.`,
    },
    {
      kop: "De geschilleninstantie",
      tekst: `Leidt bemiddeling niet tot een oplossing, dan legt u de klacht voor aan de geschilleninstantie waarbij wij zijn aangesloten${site.geschilleninstantie ? `: ${site.geschilleninstantie}` : ""}, zoals de Wkkgz voorschrijft. De uitspraak is bindend.`,
    },
  ];
  return (
    <JuriPagina
      naam="Klachtenregeling"
      pad="/klachtenregeling"
      titel={<>Niet tevreden? <span className="it">Zeg het ons.</span></>}
      lead="Daar worden wij beter van, en u wordt er sneller mee geholpen. Zolang een klacht loopt, verandert er niets aan de zorg die u krijgt."
      zijKop="Klacht indienen"
      zijTekst={<p className="sm">Vermeld uw naam, de datum en wat er is gebeurd.</p>}
    >
      {stappen.map((s, i) => (
        <div key={s.kop} className="rv juri-stap">
          <span className="juri-nr">{i + 1}</span>
          <div className="col" style={{ gap: 8 }}>
            <h2 className="h3">{s.kop}</h2>
            <p>{s.tekst}</p>
          </div>
        </div>
      ))}
      <div className="card rv" style={{ marginTop: 16, padding: 32, borderRadius: 28, display: "flex", flexDirection: "column", gap: 14 }}>
        <h2 className="h3">Wat u van ons mag verwachten</h2>
        {[
          "Een ontvangstbevestiging binnen vijf werkdagen",
          "Een inhoudelijke reactie binnen zes weken",
          "Vastlegging van de klacht en van wat wij ermee doen",
        ].map((t) => (
          <div key={t} className="li"><Vink /><span>{t}</span></div>
        ))}
      </div>
    </JuriPagina>
  );
}
