import { site } from "../site.config";

// Zelfde portaal als het leads-endpoint: /api/leads -> /api/kennisbank.
const BASIS = site.apiUrl.replace(/\/leads$/, "/kennisbank");

export interface ArtikelSamenvatting {
  titel: string;
  slug: string;
  samenvatting: string | null;
  gepubliceerd_op: string;
}

export interface ArtikelVolledig extends ArtikelSamenvatting {
  inhoud: string;
  bijgewerkt_op: string;
}

// Nieuwe of gewijzigde artikelen verschijnen binnen een half uur op de site.
const CACHE = { next: { revalidate: 1800 } };

export async function haalArtikelen(): Promise<ArtikelSamenvatting[]> {
  try {
    const res = await fetch(`${BASIS}?organisatie=${site.slug}`, CACHE);
    if (!res.ok) return [];
    return (await res.json()).artikelen ?? [];
  } catch {
    return [];
  }
}

export async function haalArtikel(slug: string): Promise<ArtikelVolledig | null> {
  try {
    const res = await fetch(
      `${BASIS}?organisatie=${site.slug}&artikel=${encodeURIComponent(slug)}`,
      CACHE
    );
    if (!res.ok) return null;
    return (await res.json()).artikel ?? null;
  } catch {
    return null;
  }
}

export function artikelDatum(iso: string) {
  return new Date(iso).toLocaleDateString("nl-NL", {
    day: "numeric", month: "long", year: "numeric",
  });
}
