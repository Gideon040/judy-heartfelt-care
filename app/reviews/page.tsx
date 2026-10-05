import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/site.config";
import { CtaBlok, HeroSub } from "@/components/Blokken";
import { Pijl } from "@/components/Iconen";

// Verborgen tot er minimaal 3 echte reviews in site.config.ts staan
// (structuurspec regel 6.5). Tot dan geeft deze pagina een 404.
const LIVE = site.reviews.length >= 3;

export const metadata: Metadata = LIVE
  ? {
      title: `Ervaringen | ${site.naam}`,
      description: `Wat cliënten en families over ${site.naam} zeggen. Alleen echte ervaringen, met voornaam en datum.`,
      alternates: { canonical: `${site.url}/reviews` },
    }
  : { robots: { index: false } };

export default function Reviews() {
  if (!LIVE) notFound();
  return (
    <main>
      <HeroSub
        kruimels={[{ naam: "Ervaringen", pad: "/reviews" }]}
        eb="Ervaringen"
        titel={<>Wat cliënten en families <span className="it">over ons zeggen.</span></>}
        lead="Alleen echte ervaringen, met voornaam en datum."
        foto={{ src: "/afbeeldingen/tijdelijk-09-tuinbankje.jpg", alt: "Zorgverlener en cliënt lachen samen" }}
      />
      <section className="sec">
        <div className="wrap col" style={{ gap: 40 }}>
          <div className="g3">
            {site.reviews.map((r) => (
              <figure key={r.tekst} className="card rv" style={{ margin: 0, padding: 32, borderRadius: "999px 999px 28px 28px", background: "#FFF5EC", display: "flex", flexDirection: "column", gap: 16, alignItems: "center", textAlign: "center", minHeight: 420, justifyContent: "flex-end" }}>
                <blockquote style={{ margin: 0, fontFamily: "var(--font-fraunces),Georgia,serif", fontStyle: "italic", fontWeight: 600, fontSize: 24, lineHeight: 1.3, color: "#C9572F" }}>&ldquo;{r.tekst}&rdquo;</blockquote>
                <figcaption className="sm" style={{ fontSize: 14.5 }}>{r.voornaam} &middot; {r.plaats} &middot; {r.datum}</figcaption>
              </figure>
            ))}
          </div>
          <div className="card rv" style={{ padding: "32px 36px", borderRadius: 28, display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between" }}>
            <div className="col" style={{ gap: 6, maxWidth: "60ch" }}>
              <h2 className="h3">Ontvangt u zorg van ons?</h2>
              <p className="sm">Vertel hoe u het ervaart. Ook wat beter kan horen wij graag.</p>
            </div>
            <Link className="btn" href="/contact">Ervaring delen <Pijl /></Link>
          </div>
        </div>
      </section>
      <CtaBlok label="Zelf ervaren?" titel={<>Begin met een <span className="it">kennismaking.</span></>} />
    </main>
  );
}
