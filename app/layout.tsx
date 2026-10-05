import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import Kop from "@/components/Kop";
import Voet from "@/components/Voet";
import Meten from "@/components/Meten";
import { localBusiness } from "@/lib/schema";
import { site } from "@/site.config";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
// Alleen cursief: Fraunces is in het ontwerp het accentlettertype.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: "italic",
  axes: ["opsz"],
});

const BESCHRIJVING =
  "Particuliere thuiszorg in Zuid-Limburg: persoonlijke verzorging, begeleiding, nachtzorg, dagbesteding, huishoudelijke hulp en palliatieve zorg bij u thuis. Een vast gezicht, zeven dagen per week, zonder wachtlijst.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  // Geen title.template: de pagina's uit het startpakket zetten de merknaam
  // zelf al in de titel, dat zou dubbel gaan.
  title: `${site.naam} | Thuiszorg met een vast gezicht in Maastricht en omstreken`,
  description: BESCHRIJVING,
  openGraph: { siteName: site.naam, locale: "nl_NL", type: "website" },
};

// De helper uit het startpakket levert de basis; de extra velden komen uit de
// intake van deze klant.
const organisatieSchema = {
  ...localBusiness(BESCHRIJVING),
  founder: { "@type": "Person", name: site.gezicht.naam, jobTitle: site.gezicht.functie },
  address: {
    "@type": "PostalAddress",
    addressLocality: site.plaats,
    addressRegion: "Limburg",
    addressCountry: "NL",
  },
  areaServed: site.werkgebied.map((p) => ({ "@type": "City", name: p.naam })),
  knowsLanguage: ["nl", "en", "pap", "es"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "17:00",
    },
  ],
  identifier: [
    { "@type": "PropertyValue", name: "AGB-code", value: site.agb },
    { "@type": "PropertyValue", name: "KvK-nummer", value: site.kvk },
  ],
};

const ga4Actief = /^G-[A-Z0-9]{6,}$/.test(site.ga4Id) && site.ga4Id !== "G-XXXXXXX";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className={`${jakarta.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisatieSchema) }}
        />
      </head>
      <body>
        <Kop />
        {children}
        <Voet />
        <Meten />
        {ga4Actief && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${site.ga4Id}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
gtag('js',new Date());gtag('config','${site.ga4Id}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
