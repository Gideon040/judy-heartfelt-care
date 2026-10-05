"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { site } from "@/site.config";
import { bewaarHerkomst, herkomst } from "./utm";
import { Pijl } from "./Iconen";

// Zorgvraag-wizard (structuurspec 4.6). Post naar hetzelfde endpoint als
// het startpakketformulier, met de optionele wizardvelden uit het API-contract.
// Meerdere diensten: de eerste (in site-volgorde) gaat als zorgvraag, de
// rest staat in de toelichting.

const ONDERTITEL: Record<string, string> = {
  "persoonlijke-verzorging": "Wassen en aankleden",
  begeleiding: "Structuur en ondersteuning",
  nachtzorg: "Waakdienst of slaapdienst",
  dagbesteding: "Activiteit en gezelschap",
  "huishoudelijke-hulp": "Schoonmaak en was",
  "palliatieve-zorg": "Laatste levensfase",
};

const WANNEER = [
  { key: "zsm", label: "Zo snel mogelijk", sub: "Binnen enkele dagen", urgentie: "zsm" },
  { key: "binnenkort", label: "Binnenkort", sub: "Binnen enkele weken", urgentie: "binnenkort" },
  { key: "tijdelijk", label: "Tijdelijk", sub: "Vakantie of herstelperiode", urgentie: undefined },
  { key: "orienterend", label: "Ik oriënteer mij", sub: "Eerst informatie", urgentie: "orienterend" },
] as const;

const UREN = ["Weet ik nog niet", "Een paar uur per week", "Enkele dagdelen per week", "1 tot 3 nachten per week", "Elke dag", "24-uurszorg"];

const ANDERS = "Andere plaats";

function Optie({ aan, onClick, titel, sub }: { aan: boolean; onClick: () => void; titel: string; sub: string }) {
  return (
    <button type="button" className={aan ? "opt on" : "opt"} aria-pressed={aan} onClick={onClick}>
      <i />
      <span><b>{titel}</b><span>{sub}</span></span>
    </button>
  );
}

export default function ZorgvraagWizard() {
  const zoek = useSearchParams();
  const [stap, setStap] = useState(1);
  const [voor, setVoor] = useState<"zelf" | "naaste" | "">("");
  const [zorg, setZorg] = useState<string[]>(() => {
    const z = zoek.get("zorg");
    return z && site.diensten.some((d) => d.slug === z) ? [z] : [];
  });
  const [plaats, setPlaats] = useState(() => {
    const p = site.werkgebied.find((w) => w.slug === zoek.get("plaats"));
    return p ? p.naam : "";
  });
  const [anderePlaats, setAnderePlaats] = useState("");
  const [postcode, setPostcode] = useState("");
  const [wanneer, setWanneer] = useState("");
  const [uren, setUren] = useState(UREN[0]);
  const [naam, setNaam] = useState("");
  const [telefoon, setTelefoon] = useState("");
  const [email, setEmail] = useState("");
  const [toelichting, setToelichting] = useState("");
  const [melding, setMelding] = useState<string | null>(null);
  const [bezig, setBezig] = useState(false);

  useEffect(() => bewaarHerkomst(), []);

  const wisselZorg = (slug: string) =>
    setZorg((z) => (z.includes(slug) ? z.filter((x) => x !== slug) : [...z, slug]));

  function ontbreekt(): string | null {
    if (stap === 1 && !voor) return "Kies voor wie de zorg is.";
    if (stap === 2 && zorg.length === 0) return "Kies minimaal één vorm van zorg.";
    if (stap === 3 && (!plaats || (plaats === ANDERS && !anderePlaats.trim()))) return "Kies of vul de plaats in.";
    if (stap === 4 && !wanneer) return "Kies wanneer de zorg moet starten.";
    if (stap === 5 && (!naam.trim() || !telefoon.trim())) return "Vul uw naam en telefoonnummer in.";
    return null;
  }

  async function verstuur() {
    setBezig(true);
    const gekozen = site.diensten.filter((d) => zorg.includes(d.slug));
    const w = WANNEER.find((x) => x.key === wanneer);
    const plaatsNaam = plaats === ANDERS ? anderePlaats.trim() : plaats;
    const regels = [
      gekozen.length > 1 ? `Gekozen zorg: ${gekozen.map((d) => d.naam).join(", ")}.` : "",
      w && !w.urgentie ? `Start: ${w.label.toLowerCase()} (${w.sub.toLowerCase()}).` : "",
      plaats === ANDERS ? "Plaats valt buiten het vaste werkgebied." : "",
      toelichting.trim(),
    ].filter(Boolean);
    try {
      const res = await fetch(site.apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          organisatie_slug: site.slug,
          naam_aanvrager: naam.trim(),
          telefoon: telefoon.trim(),
          email: email.trim() || undefined,
          plaats: postcode.trim() ? `${plaatsNaam} (${postcode.trim()})` : plaatsNaam,
          zorgvraag: gekozen[0]?.zorgvraag ?? "overig",
          toelichting: regels.join("\n") || undefined,
          voor_wie: voor || undefined,
          urgentie: w?.urgentie,
          uren_indicatie: uren,
          ...herkomst(),
        }),
      });
      if (res.ok) {
        sessionStorage.setItem("zb_lead_klaar", "1");
        window.location.href = "/bedankt";
        return;
      }
    } catch {
      /* valt door naar de foutmelding */
    }
    setBezig(false);
    setMelding(`Versturen is niet gelukt. Bel ons gerust direct: ${site.telefoonWeergave}`);
  }

  function volgende() {
    const fout = ontbreekt();
    setMelding(fout);
    if (fout) return;
    if (stap < 5) setStap(stap + 1);
    else verstuur();
  }

  function terug() {
    setMelding(null);
    setStap(Math.max(1, stap - 1));
  }

  return (
    <div className="card wizard">
      <div className="col" style={{ gap: 10 }}>
        <div className="wizard-voortgang"><div style={{ width: `${stap * 20}%` }} /></div>
        <div className="wizard-stap"><span>Stap {stap} van 5</span><span>{stap * 20}%</span></div>
      </div>

      {stap === 1 && (
        <div className="col rise" style={{ gap: 18 }}>
          <div className="col" style={{ gap: 6 }}><h2 className="h3">Voor wie is de zorg?</h2><p className="sm">Zo weten wij met wie wij het gesprek voeren.</p></div>
          <div className="col" style={{ gap: 12 }}>
            <Optie aan={voor === "zelf"} onClick={() => setVoor("zelf")} titel="Voor mijzelf" sub="Ik zoek zelf ondersteuning" />
            <Optie aan={voor === "naaste"} onClick={() => setVoor("naaste")} titel="Voor een naaste" sub="Ouder, partner of familielid" />
          </div>
        </div>
      )}

      {stap === 2 && (
        <div className="col rise" style={{ gap: 18 }}>
          <div className="col" style={{ gap: 6 }}><h2 className="h3">Welke zorg is er nodig?</h2><p className="sm">Meerdere antwoorden mogen. Kies wat het dichtst in de buurt komt.</p></div>
          <div className="wizard-opties">
            {site.diensten.map((d) => (
              <Optie key={d.slug} aan={zorg.includes(d.slug)} onClick={() => wisselZorg(d.slug)} titel={d.naam} sub={ONDERTITEL[d.slug] ?? ""} />
            ))}
          </div>
        </div>
      )}

      {stap === 3 && (
        <div className="col rise" style={{ gap: 18 }}>
          <div className="col" style={{ gap: 6 }}><h2 className="h3">Waar is de zorg nodig?</h2><p className="sm">Wij kijken direct of de plaats in ons werkgebied ligt.</p></div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[...site.werkgebied.map((p) => p.naam), ANDERS].map((n) => (
              <button key={n} type="button" className={plaats === n ? "chip on" : "chip"} aria-pressed={plaats === n} onClick={() => setPlaats(n)}>{n}</button>
            ))}
          </div>
          {plaats && plaats !== ANDERS && (
            <div className="melding-ok"><span className="dot" /><span>{plaats} ligt in ons werkgebied. Kennismaking meestal binnen 48 uur.</span></div>
          )}
          {plaats === ANDERS && (
            <>
              <div className="melding-let">Buiten ons vaste werkgebied. Wij bellen u om te kijken wat er mogelijk is.</div>
              <div><label className="lbl" htmlFor="wplaats">Welke plaats?</label><input className="in" id="wplaats" value={anderePlaats} onChange={(e) => setAnderePlaats(e.target.value)} autoComplete="address-level2" /></div>
            </>
          )}
          <div><label className="lbl" htmlFor="wpc">Postcode (mag leeg blijven)</label><input className="in" id="wpc" placeholder="Bijv. 6211 AB" value={postcode} onChange={(e) => setPostcode(e.target.value)} autoComplete="postal-code" /></div>
        </div>
      )}

      {stap === 4 && (
        <div className="col rise" style={{ gap: 18 }}>
          <div className="col" style={{ gap: 6 }}><h2 className="h3">Wanneer moet de zorg starten?</h2><p className="sm">Een indicatie is genoeg. De rest bespreken wij aan tafel.</p></div>
          <div className="wizard-opties">
            {WANNEER.map((w) => (
              <Optie key={w.key} aan={wanneer === w.key} onClick={() => setWanneer(w.key)} titel={w.label} sub={w.sub} />
            ))}
          </div>
          <div>
            <label className="lbl" htmlFor="wuren">Hoeveel zorg ongeveer?</label>
            <select className="in" id="wuren" value={uren} onChange={(e) => setUren(e.target.value)}>
              {UREN.map((u) => <option key={u}>{u}</option>)}
            </select>
          </div>
        </div>
      )}

      {stap === 5 && (
        <div className="col rise" style={{ gap: 18 }}>
          <div className="col" style={{ gap: 6 }}><h2 className="h3">Hoe bereiken wij u?</h2><p className="sm">Wij bellen u dezelfde werkdag, {site.bereikbaarKort}.</p></div>
          <div><label className="lbl" htmlFor="wnaam">Naam</label><input className="in" id="wnaam" placeholder="Uw naam" autoComplete="name" value={naam} onChange={(e) => setNaam(e.target.value)} /></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(200px,100%),1fr))", gap: 16 }}>
            <div><label className="lbl" htmlFor="wtel">Telefoon</label><input className="in" id="wtel" type="tel" placeholder="06 12 34 56 78" autoComplete="tel" inputMode="tel" value={telefoon} onChange={(e) => setTelefoon(e.target.value)} /></div>
            <div><label className="lbl" htmlFor="wmail">E-mail (mag leeg blijven)</label><input className="in" id="wmail" type="email" placeholder="naam@voorbeeld.nl" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
          </div>
          <div><label className="lbl" htmlFor="wtoe">Toelichting (mag leeg blijven)</label><textarea className="in" id="wtoe" rows={3} placeholder="Vertel kort wat er speelt" value={toelichting} onChange={(e) => setToelichting(e.target.value)} /></div>
        </div>
      )}

      {melding && <p className="zb-fout" role="alert">{melding}</p>}

      <div className="wizard-nav">
        <button type="button" className="btn2 s46" onClick={terug} style={{ visibility: stap === 1 ? "hidden" : "visible" }}>Terug</button>
        <button type="button" className="btn" onClick={volgende} disabled={bezig}>
          {stap === 5 ? (bezig ? "Versturen…" : "Zorgvraag versturen") : "Volgende"} <Pijl />
        </button>
      </div>
    </div>
  );
}
