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

// In de <head> van de site opnemen:
// <script async src={`https://www.googletagmanager.com/gtag/js?id=${site.ga4Id}`} />
// <script dangerouslySetInnerHTML={{ __html:
//   `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
//    gtag('js',new Date());gtag('config','${site.ga4Id}');` }} />
