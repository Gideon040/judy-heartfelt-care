"use client";
import { useEffect, useState } from "react";
import { site } from "../site.config";
import { bewaarHerkomst, herkomst } from "./utm";

const ZORGVRAGEN = [
  ["huishoudelijk", "Huishoudelijke hulp"],
  ["begeleiding", "Begeleiding"],
  ["persoonlijke_verzorging", "Persoonlijke verzorging"],
  ["verpleging", "Verpleging"],
  ["waakzorg", "Waakzorg"],
  ["gezelschap", "Gezelschap"],
  ["overig", "Anders / weet ik niet"],
] as const;

export default function ZorgvraagFormulier() {
  const [bezig, setBezig] = useState(false);
  const [fout, setFout] = useState<string | null>(null);
  useEffect(() => bewaarHerkomst(), []);

  async function verstuur(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBezig(true); setFout(null);
    const f = new FormData(e.currentTarget);
    const res = await fetch(site.apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        organisatie_slug: site.slug,
        naam_aanvrager: f.get("naam"),
        telefoon: f.get("telefoon"),
        email: f.get("email"),
        plaats: f.get("plaats"),
        zorgvraag: f.get("zorgvraag"),
        reden: f.get("reden"),
        ...herkomst(),
      }),
    });
    if (res.ok) {
      sessionStorage.setItem("zb_lead_klaar", "1");
      window.location.href = "/bedankt";
      return;
    }
    setBezig(false);
    setFout("Versturen is niet gelukt. Bel ons gerust direct: " + site.telefoon);
  }

  return (
    <form onSubmit={verstuur} className="zb-formulier">
      <input name="naam" placeholder="Uw naam" required />
      <input name="telefoon" placeholder="Telefoonnummer" required />
      <input name="email" type="email" placeholder="E-mailadres (optioneel)" />
      <input name="plaats" placeholder="Woonplaats van degene die zorg nodig heeft" />
      <select name="zorgvraag" required defaultValue="">
        <option value="" disabled>Waar heeft u hulp bij nodig?</option>
        {ZORGVRAGEN.map(([w, l]) => <option key={w} value={w}>{l}</option>)}
      </select>
      <textarea name="reden" rows={3}
        placeholder="Vertel kort iets over de situatie" />
      {fout && <p className="zb-fout">{fout}</p>}
      <button disabled={bezig}>{bezig ? "Versturen…" : "Verstuur aanvraag"}</button>
    </form>
  );
}
