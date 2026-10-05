import { site } from "../site.config";
import type { ArtikelVolledig } from "./kennisbank";

// Helpers voor schema.org JSON-LD. In een pagina opnemen als:
// <script type="application/ld+json"
//   dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

export function localBusiness(beschrijving: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#organisatie`,
    name: site.naam,
    description: beschrijving,
    url: site.url,
    telephone: site.telefoon,
    email: site.email,
    address: { "@type": "PostalAddress", addressLocality: site.plaats, addressCountry: "NL" },
    areaServed: site.plaats,
  };
}

// items: van hoog naar laag, pad begint met "/" ("" = homepage).
export function breadcrumbSchema(items: readonly { naam: string; pad: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.naam,
      item: `${site.url}${item.pad}`,
    })),
  };
}

export function artikelSchema(artikel: ArtikelVolledig) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: artikel.titel,
    description: artikel.samenvatting ?? undefined,
    datePublished: artikel.gepubliceerd_op,
    url: `${site.url}/kennisbank/${artikel.slug}`,
    author: { "@type": "Organization", name: site.naam, url: site.url },
    publisher: { "@type": "Organization", name: site.naam, url: site.url },
  };
}

export function faqSchema(vragen: readonly { vraag: string; antwoord: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: vragen.map((v) => ({
      "@type": "Question",
      name: v.vraag,
      acceptedAnswer: { "@type": "Answer", text: v.antwoord },
    })),
  };
}

// Voor dienst- en dienst×plaats-pagina's uit de structuurspec.
export function dienstSchema(dienst: { naam: string; beschrijving: string; pad: string; plaats?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: dienst.naam,
    description: dienst.beschrijving,
    url: `${site.url}${dienst.pad}`,
    provider: { "@id": `${site.url}/#organisatie` },
    areaServed: { "@type": "City", name: dienst.plaats ?? site.plaats },
  };
}
