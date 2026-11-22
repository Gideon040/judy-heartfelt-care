import { site } from "../site.config";

// Eventnamen — identiek aan lib/types.ts in het portaal. Niet wijzigen.
export const EVENTS = {
  lead: "generate_lead",
  bel: "click_to_call",
  mail: "click_email",
} as const;

declare global { interface Window { gtag?: (...args: unknown[]) => void } }

export function event(naam: string, params: Record<string, string> = {}) {
  window.gtag?.("event", naam, { organisatie_slug: site.slug, ...params });
}

// GA4-snippet + cookiebanner (Consent Mode v2): components/Meetcode.tsx,
// in de layout opnemen als <Meetcode />. Geen eigen gtag-snippet in de site.
