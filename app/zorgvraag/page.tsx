import type { Metadata } from "next";
import { Suspense } from "react";
import { site } from "@/site.config";
import { Kruimelpad } from "@/components/Blokken";
import Accent from "@/components/Accent";
import ZorgvraagWizard from "@/components/ZorgvraagWizard";

export const metadata: Metadata = {
  title: `Zorgvraag stellen | ${site.naam}`,
  description: `Stel uw zorgvraag in vijf korte stappen. ${site.naam} belt u dezelfde werkdag terug. Kosteloos en vrijblijvend.`,
  alternates: { canonical: `${site.url}/zorgvraag` },
};

export default function Zorgvraag() {
  return (
    <main>
      <section className="sec" style={{ paddingTop: "clamp(40px,5vw,64px)" }}>
        <div className="wrap split">
          <div className="col" style={{ gap: 22 }}>
            <Kruimelpad items={[{ naam: "Zorgvraag stellen", pad: "/zorgvraag" }]} licht />
            <div className="eb">Zorgvraag stellen</div>
            <h1 className="h1" style={{ fontSize: "clamp(36px,4.4vw,56px)" }}>Vertel ons wat <Accent>er nodig is.</Accent></h1>
            <p className="lead">Vijf korte stappen. U hoeft geen medische gegevens in te vullen. Wij bellen u dezelfde werkdag, {site.bereikbaarKort}.</p>
            <ul className="checks">
              {["Kennismaking meestal binnen 48 uur", "Kosteloos en vrijblijvend", `Uw gegevens gaan alleen naar ${site.gezicht.voornaam}`].map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="zij-bel">
              <div style={{ fontWeight: 700, color: "var(--ink)" }}>Liever bellen?</div>
              <a href={`tel:${site.telefoon}`}>{site.telefoonWeergave}</a>
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
