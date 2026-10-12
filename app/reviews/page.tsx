import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/site.config";
import { CtaBlok, HeroSub } from "@/components/Blokken";
import { Pijl } from "@/components/Iconen";
import Accent from "@/components/Accent";

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
        titel={<>Wat cliënten en families <Accent>over ons zeggen.</Accent></>}
        lead="Alleen echte ervaringen, met voornaam en datum."
        foto={{ src: "/afbeeldingen/judy-00-hero-keukentafel.webp", alt: "Zorgverlener en oudere vrouw lachen samen aan de keukentafel" }}
      />
      <section className="sec">
        <div className="wrap col" style={{ gap: 40 }}>
          <div className="raster r3">
            {site.reviews.map((r) => (
              <figure key={r.tekst} className="review rv">
                <blockquote>&ldquo;{r.tekst}&rdquo;</blockquote>
                <figcaption className="sm" style={{ fontSize: 14.5 }}>{r.voornaam} &middot; {r.plaats} &middot; {r.datum}</figcaption>
              </figure>
            ))}
          </div>
          <div className="blok-wit rv" style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between" }}>
            <div className="col" style={{ gap: 6, maxWidth: "60ch" }}>
              <h2 className="h3">Ontvangt u zorg van ons?</h2>
              <p className="sm">Vertel hoe u het ervaart. Ook wat beter kan horen wij graag.</p>
            </div>
            <Link className="btn" href="/contact">Ervaring delen <Pijl /></Link>
          </div>
        </div>
      </section>
      <CtaBlok label="Zelf ervaren?" titel={<>Begin met een <Accent>kennismaking.</Accent></>} />
    </main>
  );
}
