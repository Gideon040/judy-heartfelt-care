# Zorgbaar: structuur en wireframes klantsites

Werkdocument. Dit beschrijft WAT er op elke klantsite staat, los van het design.
De drie templates (Vita, Mira, Vero) zijn alleen een schil over exact deze structuur.
Eén datamodel, één paginaset, drie skins.

---

## 1. Uitgangspunten

- De site presenteert zich als ORGANISATIE (handelsnaam + logo, wij-vorm), niet als persoonsprofiel. De persoon of het kleine team komt terug als blok "Het gezicht achter [naam]" of "Ons team".
- Positionering: één vast gezicht, of een klein vast team van max 3 bekende gezichten (kies per klant in de intake welke variant).
- Alles wordt gegenereerd uit de intake. Er staat niets op de site dat de klant niet echt aanbiedt of waarmaakt.
- Elke pagina heeft één taak en één primaire CTA: zorgvraag stellen (wizard) of bellen.

---

## 2. Paginalijst (sitemap)

Vaste kern (altijd aanwezig):

| # | Pagina | URL | Doel |
|---|--------|-----|------|
| 1 | Home | / | Overzicht + vertrouwen + doorverwijzen |
| 2 | Dienst-hoofdpagina (per dienst) | /zorg/[dienst] | Uitleg dienst + doorlink naar plaatsen |
| 3 | Dienst x plaats | /zorg/[dienst]/[plaats] | SEO-landingspagina, de cliëntenmachine |
| 4 | Tarieven & vergoeding | /tarieven-en-vergoeding | Kosten, pgb/Wmo/Wlz/Zvw-uitleg |
| 5 | Over [naam] | /over | Verhaal + gezicht/team + registraties |
| 6 | Zorgvraag stellen (wizard) | /zorgvraag | Conversie: aanvraag in 2 min |
| 7 | Contact | /contact | Telefoon, mail, werkgebied, route |
| 8 | Kennisbank-overzicht | /kennisbank | Artikelen, intern linkweefsel |
| 9 | Kennisbank-artikel | /kennisbank/[slug] | Longtail-SEO + vertrouwen |
| 10 | Veelgestelde vragen | /veelgestelde-vragen | Bezwaren wegnemen + FAQ-schema |
| 11 | Reviews | /reviews | Sociaal bewijs (VERBORGEN tot gevuld) |
| 12 | Werkgebied | /werkgebied | Alle plaatsen op een rij + kaartje |
| 13 | Privacy | /privacy | Verplicht |
| 14 | Klachtenregeling | /klachtenregeling | Verplicht (Wkkgz), ook vertrouwenssignaal |
| 15 | Algemene voorwaarden | /algemene-voorwaarden | Verplicht |

Aantallen bij een gemiddelde klant (6 diensten, 6 plaatsen):
- 6 dienst-hoofdpagina's
- ~36 dienst-x-plaatspagina's (alleen combinaties die de klant ECHT aanbiedt)
- ~10 vaste pagina's + 4-8 startartikelen kennisbank
- Totaal: ~55-60 pagina's per site

Dienstenlijst (kiesbaar in intake, max ~8):
1. Persoonlijke verzorging (ADL)
2. Verpleging / wijkverpleging (alleen bij BIG + niveau, ontgrendelt indicatie-verhaal)
3. Begeleiding (individueel)
4. Nachtzorg (bundelt waakdienst + slaapdienst, zie regel 6.2)
5. Huishoudelijke hulp
6. Respijtzorg / mantelzorgondersteuning
7. Palliatieve / terminale zorg (optioneel, aparte tone of voice)
8. Dagbesteding / activering (optioneel)

---

## 3. Datamodel uit de intake (wat voedt wat)

| Intake-veld | Gebruikt op |
|---|---|
| Handelsnaam, logo, kleurkeuze/template | Overal |
| Persoon of team (namen, functies, BIG/niveau, jaren ervaring, foto's) | Home, Over, dienst-pagina's |
| Verhaal in eigen woorden (1 alinea: waarom deze zorg) | Home founder-blok, Over |
| Diensten (aanvinken) + per dienst: wel/niet weekend, bijzonderheden | Dienstpagina's, Home |
| Tarief per dienst (per uur / per nacht / op aanvraag) | Tarieven, dienstpagina's |
| Financiering (pgb / Wmo / Wlz / Zvw / particulier, wat is van toepassing) | Tarieven, alle pagina's vergoedingsblok |
| Vestigingsplaats + werkgebied (plaatsen, of postcodeprefix + straal) | Plaatspagina's, Werkgebied, footer, schema |
| Per plaats 1 eigen zin ("wat weet jij over zorg in deze plaats?") | Uniek plaatsblok (anti-doorway) |
| Beschikbaarheid ("direct plek" ja/nee) | Hero-badge, strip |
| Registraties: KvK, AGB, Wtza, BIG, VOG | Footer, trustbalk, Over |
| Telefoon, e-mail, bereikbaarheidstijden | Overal (CTA's) |
| Reviews (later) | Reviews-pagina, Home-blok |

---

## 4. Wireframes per paginatype

### 4.1 HOME

Blokvolgorde (alle drie de templates volgen deze, alleen de vorm verschilt):

```
[1] NAV          logo | diensten | tarieven | over | kennisbank | TEL + CTA
[2] HERO         badge "Direct plek" (indien aan)
                 H1: [kernbelofte] + plaats  (bv. "Thuiszorg met een vast
                 gezicht in Best")
                 lead: diensten + regio + belofte in 2 zinnen
                 CTA: Zorgvraag stellen | secundair: Bekijk onze zorg
                 3 checkmarks: 48u kennismaking / pgb-Wmo-particulier /
                 geen wachtlijst
                 visual: foto (+ evt. zorgvraag-kaartje als signatuur)
[3] TRUSTBALK    Wtza | BIG | KvK & AGB | VOG | (review-score zodra echt)
[4] DIENSTEN     kaart per dienst (alleen aangevinkte), elk -> /zorg/[dienst]
[5] ZO WERKT HET 3 stappen: zorgvraag -> kennismaking 48u -> vaste zorg start
[6] GEZICHT/TEAM verhaal-alinea + foto + naam/functie/ervaring
                 (teamvariant: 3 teamkaarten + "nieuwe gezichten altijd
                 eerst voorgesteld")
[7] VERGOEDING   kort: wat wordt vergoed + "wij helpen met de aanvraag"
                 -> /tarieven-en-vergoeding
[8] WERKGEBIED   plaats-pills -> elk naar /zorg/[hoofddienst]/[plaats]
[9] KENNISBANK   3-4 nieuwste artikelen (pas tonen bij >= 3 artikelen)
[10] CTA-BLOK    "Vandaag een zorgvraag? Morgen aan tafel." + wizard + tel
[11] FOOTER      diensten | werkgebied | contact | juridisch
                 KvK/AGB-regel + "Website door Zorgbaar"
```

Regels:
- Blok 9 en reviews verbergen tot er echte inhoud is. Nooit nepdata.
- Review-score in blok 3 pas tonen bij echte reviews.

### 4.2 DIENST-HOOFDPAGINA (/zorg/[dienst])

```
[1] BREADCRUMB   Home > [Dienst]
[2] HERO-KLEIN   H1 "[Dienst] aan huis" + 2 zinnen + CTA
[3] WAT IS HET   uitleg dienst (1x goed geschreven per dienst, hergebruikt)
                 bij nachtzorg: H2 Waakdienst + H2 Slaapdienst
                 bij verpleging: H2 Indicatie, zo werkt het
[4] VOOR WIE     3-4 herkenbare situaties ("na ziekenhuisopname", "mantel-
                 zorger overbelast", ...)
[5] ZO WERKT HET 3 stappen (zelfde als home, dienst-specifiek ingekleurd)
[6] TARIEF       tarief deze dienst + vergoedingsroutes + link tarieven
[7] PLAATSEN     "[Dienst] in uw plaats:" pill-links naar alle
                 /zorg/[dienst]/[plaats] combinaties
[8] FAQ          3-4 vragen over deze dienst (FAQ-schema)
[9] CTA-BLOK     zorgvraag + tel
[10] FOOTER
```

### 4.3 DIENST x PLAATS (/zorg/[dienst]/[plaats]) - de belangrijkste

```
[1] BREADCRUMB   Home > [Dienst] > [Plaats]
[2] H1 + INTRO   "[Dienst] in [Plaats]" + 2-3 GEGENEREERD unieke zinnen:
                 dienst + plaats + reisafstand vanaf vestigingsplaats +
                 "ook in [buurkern]"
[3] WAT IS HET   vast dienstblok (hergebruik van 4.2 blok 3, ingekort)
[4] ZO WERKT HET "kennismaking bij u thuis in [Plaats], meestal binnen 48u"
[5] PLAATSBLOK   HET anti-doorway-blok, per plaats uniek:
                 - buurkernen die ook bediend worden
                 - de 1 eigen zin van de klant over deze plaats
                 - optioneel: lokale zorgcontext (huisartsen, wijkteam)
[6] TARIEF       kort + doorklik (bij nachtzorg: per nacht)
[7] FAQ          3-4 vragen over deze dienst (FAQ-schema, hergebruik 4.2)
[8] CTA-BLOK     "Zorgvraag in [Plaats]?" + wizard + tel
[9] INTERNE LINKS
                 a) "Ook in [Plaats]:" andere diensten zelfde plaats
                 b) "[Dienst] ook in:" zelfde dienst in buurplaatsen
[10] FOOTER
```

Technisch: title "[Dienst] in [Plaats] | [Naam]", LocalBusiness + Service-
schema met areaServed, breadcrumb-schema.

### 4.4 TARIEVEN & VERGOEDING

```
[1] H1 + intro   "Wat kost thuiszorg bij [naam]?" eerlijk en direct
[2] TARIEVEN     per dienst een rij/kaart: tarief + eenheid + wat inbegrepen
[3] VERGOEDING   4 routes als blokken: pgb / Wmo / Wlz / Zvw (alleen tonen
                 wat van toepassing is) + particulier
                 per route: wat het is, voor wie, hoe aanvragen
[4] WIJ HELPEN   "kosteloos hulp bij aanvraag, SVB, gemeente"
[5] FAQ          kosten-vragen (grootste zoekcluster!)
[6] CTA
```

### 4.5 OVER [NAAM]

```
[1] H1 + verhaal (eigen woorden klant, geredigeerd)
[2] GEZICHT/TEAM uitgebreid: foto('s), functie, BIG/niveau, ervaring
[3] WERKWIJZE    waarden: vast gezicht, korte lijnen, afspraken nakomen
[4] REGISTRATIES KvK, AGB, Wtza, VOG, klachtenregeling (met nummers)
[5] WERKGEBIED   kort + link
[6] CTA
```

### 4.6 ZORGVRAAG-WIZARD (/zorgvraag)

```
Stap 1: voor wie is de zorg? (uzelf / naaste)
Stap 2: welke zorg? (dienstenlijst van deze klant, meerkeuze)
Stap 3: waar? (plaats/postcode) -> check tegen werkgebied
Stap 4: wanneer + omvang (z.s.m. / binnenkort / oriënterend; uren indicatie)
Stap 5: contactgegevens + toelichting (vrij veld)
Bevestiging: "We bellen u vandaag nog" (binnen bereikbaarheidstijden)
-> aanvraag naar mail klant + opslag (voor maandrapport-telling)
```

Kort, max 5 stappen, geen medische details verplicht.

### 4.7 KENNISBANK

Overzicht: H1, categorie-filters (kosten/pgb/nachtzorg/mantelzorg), kaarten.
Artikel: H1, datum, inhoud, gerelateerde dienst-CTA in de tekst, auteursblok
(het gezicht = E-E-A-T), gerelateerde artikelen.
Startset per klant (meegeleverd, 4 stuks):
1. Wat kost [hoofddienst] en wat wordt vergoed?
2. Pgb aanvragen: stap voor stap
3. Waakdienst of slaapdienst: wat past bij uw situatie?
4. Mantelzorg ontlasten: signalen dat het tijd is voor hulp

### 4.8 FAQ, REVIEWS, WERKGEBIED, CONTACT, JURIDISCH

- FAQ: gegroepeerd per thema (kosten, werkwijze, vergoeding, praktisch),
  alles met FAQ-schema. Bron voor AI-zoekmachines.
- Reviews: pas live bij >= 3 echte reviews. Met datum en voornaam.
- Werkgebied: alle plaatsen als kaartjes/pills + uitleg straal + "staat uw
  plaats er niet bij? bel gerust".
- Contact: tel (groot), mail, bereikbaarheidstijden, werkgebied, KvK/AGB.
- Privacy / klachten / voorwaarden: standaardteksten Zorgbaar, ingevuld
  met klantgegevens. Klachtenregeling: aansluiting geschilleninstantie
  vermelden (Wkkgz).

---

## 5. Interne linkstructuur (het weefsel)

- Home -> alle dienst-hoofdpagina's + hoofddienst-x-plaats via werkgebied
- Dienst-hoofdpagina -> al zijn plaatspagina's
- Plaatspagina -> andere diensten zelfde plaats + zelfde dienst buurplaatsen
- Kennisbank-artikel -> relevante dienstpagina (contextueel in de tekst)
- Elke pagina -> wizard + tarieven
- Footer: diensten-kolom + werkgebied-kolom (= sitewide linkjuice)

---

## 6. Vaste regels (niet onderhandelbaar in de generator)

1. Alleen dienst-x-plaatscombinaties genereren die de klant echt aanbiedt.
2. Waakzorg/slaapzorg/nachtzorg = ÉÉN pagina "Nachtzorg in [plaats]" met
   H2-secties waakdienst/slaapdienst. Nooit drie losse pagina's.
3. Elk plaatspagina heeft het unieke plaatsblok (4.3 blok 5). Zonder eigen
   zin van de klant: dan buurkernen + gegenereerde variatie, maar nooit
   100% identieke pagina's op plaatsnaam na.
4. Geen verzonnen cijfers: geen reviewscores, ledenaantallen of "12 jaar
   ervaring" die niet uit de intake komen.
5. Reviews- en kennisbankblokken verborgen tot gevuld.
6. Verpleging/indicatie-verhaal alleen bij BIG-registratie + juiste niveau.
7. Sitemap.xml + GSC-koppeling bij oplevering; schema (LocalBusiness,
   Service areaServed, FAQ, Breadcrumb) op elke relevante pagina.
8. Tarieven altijd tonen zoals de klant ze opgeeft ("op aanvraag" mag).

---

## 7. Template-mapping (zelfde blokken, drie schillen)

| Blok | Vita (premium/rustig) | Mira (warm/persoonlijk) | Vero (fris/zakelijk) |
|---|---|---|---|
| Signatuur | cream + diepgroen, foto-split hero met zorgvraag-kaart | bordeaux + blush, serif, boogvormen | indigo + lichtgrijs, bento-grid |
| Hero | gecentreerd + grote foto | tekst links + boogfoto rechts | gecentreerd + hero-bento (foto + statkaart) |
| Diensten (home blok 4) | mz-kaarten met foto's | boogkaarten met icoon + tarief onderaan | bento span-7/span-5 mix |
| Gezicht/team | donker founder-blok + metrics | teamkaarten met avatars | fotokaart + tekstkaart in bento |
| Zo werkt het | 3 witte stapkaarten | donker bordeaux blok | 3 bento-kaarten |
| CTA-blok | donkergroen closing-blok | bordeaux brede kaart | indigo-donker gecentreerd |

Doelgroep-suggestie bij verkoop: Vita = premium particulier, Mira = warm
gezins-/begeleidingsprofiel, Vero = wijkverpleging/indicatie-profiel.
(Vrij te kiezen, dit is alleen het verkoopverhaal.)

---

## 8. Bouwvolgorde

1. Dit document definitief maken (jij strepen/aanvullen)
2. Datamodel -> intake-wizard velden
3. Wireframe dienst-x-plaats als HTML-template in 1 skin (Vita)
4. Generator: 1 proefsite volledig (bv. fictief Best, 4 diensten x 4 plaatsen)
5. Overige 2 skins over dezelfde data
6. Wizard + maandrapport-koppeling
