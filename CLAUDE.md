ALLE BESTAANDE SEO-TEKSTEN BLIJVEN LETTERLIJK BEHOUDEN. Design en code mogen veranderen, tekst, koppen, FAQ's, links, meta en schema niet (behalve em dashes vervangen).

# Zorgbaar startpakket — afspraken voor klantsites

## Wat dit is
Gedeelde onderdelen die in ELKE klantsite identiek moeten werken:
formulier, utm-capture, bedankpagina, GA4-events, schema.org.
Branding is overal Zorgbaar ("Website door Zorgbaar" in de footer).

## De structuurspec
`zorgbaarportaal-structuur-wireframes.md` in deze map is DE spec voor
wat er op elke klantsite staat: paginaset (home, dienst-hoofdpagina's,
dienst-x-plaatspagina's, tarieven, over, wizard, kennisbank, FAQ,
juridisch), wireframes per paginatype, interne linkstructuur en de
niet-onderhandelbare regels (anti-doorway, geen nepdata, nachtzorg als
één pagina). Bouw een klantsite altijd volgens dat document; het design
(template Vita/Mira/Vero of custom) is alleen de schil eroverheen.

## Harde regels
- Deze bestanden NOOIT lokaal aanpassen in een klantproject.
  Verbetering nodig? Eerst in het startpakket (_zorgbaar-basis),
  daarna doorkopiëren naar alle lopende klantsites.
- site.config.ts is het ENIGE bestand dat per klant wordt ingevuld.
  slug moet exact gelijk zijn aan organisaties.slug in het portaal.
- De site praat ALLEEN met app.zorgbaar.nl (lokaal: localhost:3001).
  Nooit Supabase-keys of andere secrets in een klantsite.
- Eventnamen (generate_lead, click_to_call, click_email) komen uit
  lib/analytics.ts en zijn identiek aan lib/types.ts in het portaal.
  Nooit hernoemen.
- Elke site heeft een /bedankt-pagina; de submit redirect daarheen.
  Daar vuurt het generate_lead-event, eenmalig via de
  sessionStorage-vlag `zb_lead_klaar` (dubbeltelling-beveiliging).
- Styling van formulier/bedankt via de klasse-hooks (zb-formulier,
  zb-fout, zb-bedankt) in de eigen CSS van de klantsite — de
  componentstructuur zelf niet wijzigen.

## API-contract met het portaal
POST /api/leads (JSON):
- verplicht: organisatie_slug, naam_aanvrager
- zorgvraag: huishoudelijk | begeleiding | persoonlijke_verzorging |
  verpleging | waakzorg | gezelschap | nachtzorg | respijtzorg |
  palliatieve_zorg | dagbesteding | overig
- optioneel: telefoon, email, plaats, reden, toelichting
- optionele wizardvelden: voor_wie (zelf|naaste),
  urgentie (zsm|binnenkort|orienterend), uren_indicatie (vrije tekst)
- herkomst (uit components/utm.ts): utm_source, utm_medium,
  utm_campaign, gclid, landingspagina, referrer
Wizard met meerdere diensten: hoofddienst als zorgvraag, de rest
benoemen in toelichting.

GET /api/kennisbank?organisatie=<slug> → gepubliceerde artikelen
(titel, slug, samenvatting, gepubliceerd_op); met &artikel=<slug>
één artikel inclusief inhoud (markdown-achtig: ## koppen, alinea's).
De /kennisbank-pagina's van de site lezen hieruit; blok verbergen als
er nog geen artikelen zijn (zie structuurspec).

## SEO en meten
- app/sitemap.ts en app/robots.ts zitten in het startpakket en lezen
  site.url; extra pagina's van de site (diensten, dienst-x-plaats,
  tarieven, over, faq) toevoegen aan extraPaginas in site.config.ts.
- Metadata + canonical per pagina (alternates.canonical met site.url).
- Schema via lib/schema.ts: localBusiness(beschrijving) in de layout,
  dienstSchema op dienst(-x-plaats)pagina's, faqSchema op de FAQ,
  breadcrumbSchema op alles onder de home. Artikel + breadcrumb op
  kennisbankartikelen zit al in het startpakket.
- GA4: per site een datastream in property "Zorgbaar Netwerk";
  Measurement ID in site.config.ts, gtag-snippet in de <head>
  (voorbeeld onderin lib/analytics.ts).
- GSC-koppeling bij oplevering van elke site.

## Checklist nieuwe klantsite
1. Organisatie aanmaken in het portaal (+ inlogaccount via het blok
   "Inloggegevens" op de organisatiepagina).
2. `npx create-next-app` in een eigen map (D:\<klantnaam>).
3. Map _zorgbaar-basis kopiëren: components\, lib\, app\bedankt\,
   app\kennisbank\, app\sitemap.ts, app\robots.ts, site.config.ts
   en deze CLAUDE.md + de structuurspec.
4. site.config.ts invullen (slug, naam, plaats, telefoon, url,
   GA4-id, extraPaginas).
5. Site bouwen volgens de structuurspec; formulier/wizard +
   bedankpagina opnemen; JSON-LD in de layout.
6. Testaanvraag → rij in portaal + notificatiemail + generate_lead
   in GA4 realtime.
7. Deploy, domein koppelen, GSC verifiëren; domein + webmail-URL
   invullen bij de organisatie in het portaal.

@AGENTS.md
