import type { Metadata } from "next";
import { Suspense } from "react";
import { site } from "@/site.config";
import { Kruimelpad } from "@/components/Blokken";
import { Vink } from "@/components/Iconen";
import ZorgvraagWizard from "@/components/ZorgvraagWizard";

export const metadata: Metadata = {
  title: `Zorgvraag stellen | ${site.naam}`,
  description: `Stel uw zorgvraag in vijf korte stappen. ${site.naam} belt u dezelfde werkdag terug. Kosteloos en vrijblijvend.`,
  alternates: { canonical: `${site.url}/zorgvraag` },
};

export default function Zorgvraag() {
  return (
    <main>
      <section style={{ padding: "56px 0 104px" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(360px,100%),1fr))", gap: 56, alignItems: "start" }}>
          <div className="col" style={{ gap: 22 }}>
            <Kruimelpad items={[{ naam: "Zorgvraag stellen", pad: "/zorgvraag" }]} licht />
            <div className="eb rise">Zorgvraag stellen</div>
            <h1 className="h1 rise e2" style={{ fontSize: "clamp(38px,4.4vw,60px)" }}>Vertel ons wat <span className="it">er nodig is.</span></h1>
            <p className="lead rise e3">Vijf korte stappen. U hoeft geen medische gegevens in te vullen. Wij bellen u dezelfde werkdag, {site.bereikbaarKort}.</p>
            <div className="col rise e4" style={{ gap: 12 }}>
              {["Kennismaking meestal binnen 48 uur", "Kosteloos en vrijblijvend", `Uw gegevens gaan alleen naar ${site.gezicht.voornaam}`].map((t) => (
                <div key={t} className="li"><Vink /><span>{t}</span></div>
              ))}
            </div>
            <div className="card hs" style={{ padding: "22px 24px", display: "flex", alignItems: "center", gap: 16, maxWidth: 420 }}>
              <div>
                <div style={{ fontWeight: 700 }}>Liever bellen?</div>
                <a href={`tel:${site.telefoon}`} style={{ fontWeight: 800, letterSpacing: "-.02em", fontSize: 26, textDecoration: "none" }}>{site.telefoonWeergave}</a>
              </div>
            </div>
          </div>
          <Suspense>
            <ZorgvraagWizard />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
