import type { MetadataRoute } from "next";
import { haalArtikelen } from "../lib/kennisbank";
import { site } from "../site.config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const artikelen = await haalArtikelen();

  return [
    { url: site.url, priority: 1 },
    ...site.extraPaginas.map((pad) => ({ url: `${site.url}${pad}`, priority: 0.8 })),
    { url: `${site.url}/kennisbank`, priority: 0.6 },
    ...artikelen.map((a) => ({
      url: `${site.url}/kennisbank/${a.slug}`,
      lastModified: a.gepubliceerd_op,
      priority: 0.5,
    })),
  ];
}
