import type { Metadata } from "next";
import { site } from "@/site.config";
import ZorgvraagFormulier from "@/components/ZorgvraagFormulier";
import { HeroSub, Werkgebiedblok, ZorgvraagKnop } from "@/components/Blokken";

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
        titel={<>Bel, mail of stel uw <span className="it">zorgvraag.</span></>}
        lead={`U krijgt ${site.gezicht.voornaam} zelf aan de lijn. Buiten de bereikbaarheidstijden bellen wij u de volgende werkdag terug.`}
        foto={{ src: "/afbeeldingen/judy-07-voordeur.webp", alt: "Zorgverlener aan de voordeur", positie: "50% 36%" }}
      />

      <section className="sec">
        <div className="wrap g2" style={{ gap: 32, alignItems: "start" }}>
          <div className="dk rv" style={{ borderRadius: 32, padding: "clamp(28px,4vw,48px)", display: "flex", flexDirection: "column", gap: 28 }}>
            <div className="col" style={{ gap: 6 }}>
              <div className="sm">Telefoon</div>
              <a href={`tel:${site.telefoon}`} style={{ fontWeight: 800, letterSpacing: "-.02em", fontSize: "clamp(40px,5vw,64px)", lineHeight: 1, color: "#fff", textDecoration: "none" }}>{site.telefoonWeergave}</a>
            </div>
            <div className="col" style={{ gap: 6 }}>
              <div className="sm">E-mail</div>
              <a href={`mailto:${site.email}`} style={{ fontSize: 20, fontWeight: 600, overflowWrap: "anywhere", color: "#fff", textDecoration: "none" }}>{site.email}</a>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(180px,100%),1fr))", gap: 24, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,.14)" }}>
              <div><div className="sm">Bereikbaar</div><div style={{ fontWeight: 700 }}>{site.bereikbaarheid}</div></div>
              <div><div className="sm">Werkgebied</div><div style={{ fontWeight: 700 }}>{site.regio}</div></div>
              <div><div className="sm">KvK</div><div style={{ fontWeight: 700 }}>{site.kvk}</div></div>
              <div><div className="sm">AGB</div><div style={{ fontWeight: 700 }}>{site.agb}</div></div>
            </div>
          </div>
          <div className="col" style={{ gap: 24 }}>
            <div className="card rv" style={{ padding: 32, borderRadius: 28, display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between" }}>
              <div className="col" style={{ gap: 6, maxWidth: "34ch" }}>
                <h2 className="h3">Direct een zorgvraag?</h2>
                <p className="sm">Vijf korte stappen. U hoort dezelfde werkdag van ons.</p>
              </div>
              <ZorgvraagKnop />
            </div>
            <div className="card rv" style={{ padding: 32, borderRadius: 28, display: "flex", flexDirection: "column", gap: 16 }}>
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
