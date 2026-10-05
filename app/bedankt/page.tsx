"use client";
import { useEffect } from "react";
import { site } from "../../site.config";
import { event, EVENTS } from "../../lib/analytics";

export default function Bedankt() {
  useEffect(() => {
    // Vuur alleen als het formulier net succesvol is verstuurd; de vlag wordt
    // direct geconsumeerd zodat refresh of terugknop niet dubbel telt.
    if (!sessionStorage.getItem("zb_lead_klaar")) return;
    sessionStorage.removeItem("zb_lead_klaar");
    event(EVENTS.lead);
  }, []);
  return (
    <main className="zb-bedankt">
      <h1>Bedankt voor uw aanvraag</h1>
      <p>{site.naam} neemt binnen 24 uur contact met u op.</p>
      <p>Liever direct iemand spreken?{" "}
        <a href={`tel:${site.telefoon}`}
           onClick={() => event(EVENTS.bel)}>{site.telefoon}</a></p>
    </main>
  );
}
