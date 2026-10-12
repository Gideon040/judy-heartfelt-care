import type { Metadata } from "next";
import { site } from "@/site.config";
import ZorgvraagFormulier from "@/components/ZorgvraagFormulier";
import { HeroSub, Werkgebiedblok, ZorgvraagKnop } from "@/components/Blokken";
import Accent from "@/components/Accent";
import { IllBel } from "@/components/Illustraties";

export const metadata: Metadata = {
  title: `Contact | ${site.naam}`,
  description: `Bel ${site.telefoonWeergave}, mail ${site.email} of stel uw zorgvraag online. Bereikbaar ${site.bereikbaarheid}.`,
  alternates: { canonical: `${site.url}/contact` },
};

export default function Contact() {
  return (
    <main>
      <HeroSub
        kruimels={[{ naam: "Contact", pad: "/contact" }]}
        eb="Contact"
        titel={<>Bel, mail of stel uw <Accent>zorgvraag.</Accent></>}
        lead={`U krijgt ${site.gezicht.voornaam} zelf aan de lijn. Buiten de bereikbaarheidstijden bellen wij u de volgende werkdag terug.`}
        foto={{ src: "/afbeeldingen/judy-07-voordeur.webp", alt: "Zorgverlener aan de voordeur", positie: "50% 36%" }}
      />

      <section className="sec">
        <div className="wrap split">
          <div className="dk contact-kaart rv">
            <div className="col" style={{ gap: 6 }}>
              <div className="sm">Telefoon</div>
              <a className="groot-tel" href={`tel:${site.telefoon}`}>{site.telefoonWeergave}</a>
            </div>
            <div className="col" style={{ gap: 6 }}>
              <div className="sm">E-mail</div>
              <a className="mail" href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div className="contact-feiten">
              <div><div className="sm">Bereikbaar</div><b>{site.bereikbaarheid}</b></div>
              <div><div className="sm">Werkgebied</div><b>{site.regio}</b></div>
              <div><div className="sm">KvK</div><b>{site.kvk}</b></div>
              {site.agbTonen && <div><div className="sm">AGB</div><b>{site.agb}</b></div>}
            </div>
          </div>
          <div className="col" style={{ gap: 20 }}>
            <div className="blok-wit rv" style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", gap: 16, alignItems: "center", maxWidth: "40ch" }}>
                <span className="tegel" style={{ width: 64, height: 56, flex: "none" }}><span style={{ width: 52, display: "block" }}><IllBel /></span></span>
                <div className="col" style={{ gap: 4 }}>
                  <h2 className="h3">Direct een zorgvraag?</h2>
                  <p className="sm">Vijf korte stappen. U hoort dezelfde werkdag van ons.</p>
                </div>
              </div>
              <ZorgvraagKnop />
            </div>
            <div className="blok-wit rv col" style={{ gap: 16 }}>
              <h2 className="h3">Of stuur een bericht</h2>
              <ZorgvraagFormulier />
            </div>
          </div>
        </div>
      </section>

      <Werkgebiedblok />
    </main>
  );
}
