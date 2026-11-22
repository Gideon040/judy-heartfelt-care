"use client";
import Script from "next/script";
import { useEffect, useState, useSyncExternalStore } from "react";
import { site } from "../site.config";

// GA4 met Google Consent Mode v2 + cookiebanner. Opnemen in de layout,
// onderaan in <body>: <Meetcode />. Geen eigen gtag-snippet meer in de site.
//
// - Standaard staat alles op "denied": GA4 zet geen cookies en stuurt alleen
//   anonieme signalen (o.a. generate_lead telt mee als gemodelleerde conversie).
// - "Accepteren" zet analytics_storage op granted; advertentie-opslag blijft uit.
// - Keuze in localStorage (zb_toestemming = "ja" | "nee").
// - Keuze later wijzigen: <CookieKnop /> in de footer (werkt ook vanuit een
//   servercomponent), of zelf een knop met onClick={openCookieKeuze}.
// Styling via de klasse-hooks zb-cookies en zb-cookies-knoppen in de eigen CSS
// van de site; de standaardopmaak hieronder heeft specificiteit 0 (:where).

const SLEUTEL = "zb_toestemming";
const OPEN_EVENT = "zb-cookies-open";

export function openCookieKeuze() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function CookieKnop({ className = "zb-cookie-knop" }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={openCookieKeuze}>
      Cookie-instellingen
    </button>
  );
}

const KEUZE_EVENT = "zb-cookies-keuze";

function leesKeuze(): string | null {
  try { return localStorage.getItem(SLEUTEL); } catch { return null; }
}

// Keuze als externe store: op de server (en tijdens hydratie) "ssr", zodat
// de banner pas in de browser verschijnt en er geen hydratieverschil is.
function volgKeuze(melding: () => void) {
  window.addEventListener(KEUZE_EVENT, melding);
  window.addEventListener("storage", melding);
  return () => {
    window.removeEventListener(KEUZE_EVENT, melding);
    window.removeEventListener("storage", melding);
  };
}

export default function Meetcode() {
  const id: string = site.ga4Id; // string: in site.config is het een letterlijk type
  const actief = /^G-[A-Z0-9]{6,}$/.test(id) && id !== "G-XXXXXXX";
  const keuze = useSyncExternalStore(volgKeuze, leesKeuze, () => "ssr");
  const [heropend, setHeropend] = useState(false);

  useEffect(() => {
    const open = () => setHeropend(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  if (!actief) return null;
  const toon = keuze === null || heropend;

  function kies(ja: boolean) {
    try { localStorage.setItem(SLEUTEL, ja ? "ja" : "nee"); } catch {}
    window.gtag?.("consent", "update", { analytics_storage: ja ? "granted" : "denied" });
    setHeropend(false);
    window.dispatchEvent(new Event(KEUZE_EVENT));
  }

  return (
    <>
      <Script id="zb-consent" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
try{if(localStorage.getItem('${SLEUTEL}')==='ja')gtag('consent','update',{analytics_storage:'granted'})}catch(e){}
gtag('js',new Date());gtag('config','${site.ga4Id}');`}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.ga4Id}`} strategy="afterInteractive" />
      {toon && (
        <div className="zb-cookies" role="dialog" aria-live="polite" aria-label="Cookies">
          <style>{`:where(.zb-cookies){position:fixed;left:16px;right:16px;bottom:16px;z-index:1000;max-width:560px;margin:0 auto;padding:16px 18px;background:#fff;color:#222;border-radius:12px;box-shadow:0 6px 24px rgba(0,0,0,.18);font-size:15px;line-height:1.5}
:where(.zb-cookies p){margin:0 0 12px}
:where(.zb-cookies-knoppen){display:flex;gap:8px;flex-wrap:wrap}
:where(.zb-cookies-knoppen button){min-height:44px;padding:8px 18px;border-radius:999px;border:1px solid currentColor;background:transparent;color:inherit;font:inherit;cursor:pointer}`}</style>
          <p>
            Wij gebruiken Google Analytics om te zien hoe de website wordt gebruikt. Mogen wij
            daarvoor cookies plaatsen? Meer in onze <a href="/privacy">privacyverklaring</a>.
          </p>
          <div className="zb-cookies-knoppen">
            <button type="button" onClick={() => kies(true)}>Accepteren</button>
            <button type="button" onClick={() => kies(false)}>Weigeren</button>
          </div>
        </div>
      )}
    </>
  );
}
