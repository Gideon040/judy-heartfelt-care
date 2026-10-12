# Tekstcontrole

Meetmethode (zie `redesign/tools/meet.mjs`): de server-HTML van elke pagina
(dus zonder JavaScript), alleen de inhoud van `<main>`, zonder `script`,
`style`, `svg` en elementen met `aria-hidden="true"`. Per pagina: woorden,
koppen (h1 t/m h4), tekstfragmenten per element, FAQ-vragen en -antwoorden,
links, alt-teksten, meta (title, description, canonical, robots) en JSON-LD.
`redesign/tools/vergelijk.mjs` controleert of elk fragment van vóór letterlijk
terugkomt (em dashes en apostrofvorm genegeerd).

- Voor: productiebuild van `main` (commit ec6f2b6). Ruwe data: `tekstcontrole-voor.json`.
- Na: productiebuild van branch `redesign` (laatste commit). Ruwe data: `tekstcontrole-na.json`.

## Samenvatting

- 54 pagina's gemeten (alle statische routes, alle dienst- en dienst×plaatspagina's).
- **Elke kop komt terug, op hetzelfde niveau.** Geen kop kwijt, geen kopniveau veranderd.
- **Elke FAQ-vraag en elk antwoord** staat letterlijk op dezelfde pagina, inclusief FAQPage-schema.
- **Meta (title, description, canonical, robots) en JSON-LD** zijn op alle 54 pagina's identiek aan vóór.
- **Alle interne links en alt-teksten** van vóór zijn er nog (er zijn alt-teksten bijgekomen bij nieuwe foto's in de panelen).
- Woorden: 51 pagina's gelijk of hoger; `/contact` daalt met 2 woorden (zie hieronder).

## Bewuste afwijkingen (3 pagina's)

| Pagina | Wat | Waarom |
|---|---|---|
| `/` | "AGB 41552677 / zorgaanbieder" niet zichtbaar | LEESMIJ: AGB-code niet tonen tot Gideon hem bevestigt (`agbTonen: false` in site.config.ts). In het JSON-LD staat hij nog, ongewijzigd. |
| `/` | Fragment "NL EN PAP ES Zorg in het Nederlands, Engels, Papiaments en Spaans" | Geen tekst weg: de taalbolletjes NL/EN/PAP/ES en de zin "Zorg in het Nederlands, Engels, Papiaments en Spaans" staan allebei letterlijk in de beloftebalk, alleen niet meer in hetzelfde element. |
| `/over` | "AGB-code 41552677" niet zichtbaar | Zelfde AGB-regel. |
| `/contact` | "AGB 41552677" niet zichtbaar, daardoor 110 → 108 woorden | Zelfde AGB-regel. Dit is de enige daling; zodra `agbTonen` op `true` staat is de telling weer 110. |

Overig verplaatst (tekst blijft letterlijk op dezelfde pagina):
- Home: de zwevende kaartjes op de herofoto ("9 jaar ervaring in de zorg", "48 uur tot kennismaking", "Vast gezicht en aanspreekpunt") staan nu als rij onder de knoppen; de vinkjesregels en "Direct plek voor nieuwe cliënten" staan in de beloftebalk; de trustbalk (KvK, VOG, klachtenregeling, geen wachtlijst) staat als registratieregel onder het Judy-blok.
- Subpagina's: de zwevende kaartjes "48 uur tot kennismaking" en "7 dagen per week, ook weekend" staan als rij onder de knoppen.
- De lopende tekstbanden op home waren `aria-hidden` en herhaalden bestaande termen; ze zijn vervangen door de regel "Ook: 24-uurszorg · Ambulante begeleiding · Culturele dagbesteding in Arnhem" uit het prototype.

## Woorden en koppen per pagina

| Pagina | Woorden voor | Woorden na | Verschil | Koppen voor | Koppen na | Status |
|---|---:|---:|---:|---:|---:|---|
| `/` | 581 | 603 | +22 | 16 | 22 | CONTROLEREN |
| `/over` | 318 | 334 | +16 | 11 | 14 | CONTROLEREN |
| `/tarieven-en-vergoeding` | 568 | 578 | +10 | 6 | 10 | ok |
| `/werkgebied` | 181 | 181 | +0 | 6 | 6 | ok |
| `/veelgestelde-vragen` | 328 | 328 | +0 | 7 | 7 | ok |
| `/contact` | 110 | 108 | -2 | 4 | 4 | CONTROLEREN |
| `/zorgvraag` | 52 | 52 | +0 | 1 | 1 | ok |
| `/privacy` | 239 | 239 | +0 | 9 | 9 | ok |
| `/klachtenregeling` | 167 | 167 | +0 | 6 | 6 | ok |
| `/algemene-voorwaarden` | 184 | 184 | +0 | 9 | 9 | ok |
| `/kennisbank` | 23 | 23 | +0 | 1 | 1 | ok |
| `/bedankt` | 20 | 20 | +0 | 1 | 1 | ok |
| `/zorg/persoonlijke-verzorging` | 490 | 505 | +15 | 19 | 19 | ok |
| `/zorg/begeleiding` | 452 | 467 | +15 | 19 | 19 | ok |
| `/zorg/nachtzorg` | 587 | 601 | +14 | 18 | 18 | ok |
| `/zorg/dagbesteding` | 481 | 495 | +14 | 19 | 19 | ok |
| `/zorg/huishoudelijke-hulp` | 441 | 460 | +19 | 19 | 19 | ok |
| `/zorg/palliatieve-zorg` | 495 | 517 | +22 | 19 | 19 | ok |
| `/zorg/persoonlijke-verzorging/maastricht` | 493 | 493 | +0 | 17 | 17 | ok |
| `/zorg/persoonlijke-verzorging/meerssen` | 494 | 494 | +0 | 17 | 17 | ok |
| `/zorg/persoonlijke-verzorging/valkenburg-aan-de-geul` | 546 | 546 | +0 | 17 | 17 | ok |
| `/zorg/persoonlijke-verzorging/sittard-geleen` | 495 | 495 | +0 | 17 | 17 | ok |
| `/zorg/persoonlijke-verzorging/heerlen` | 490 | 490 | +0 | 17 | 17 | ok |
| `/zorg/persoonlijke-verzorging/beek` | 488 | 488 | +0 | 17 | 17 | ok |
| `/zorg/begeleiding/maastricht` | 459 | 459 | +0 | 17 | 17 | ok |
| `/zorg/begeleiding/meerssen` | 460 | 460 | +0 | 17 | 17 | ok |
| `/zorg/begeleiding/valkenburg-aan-de-geul` | 512 | 512 | +0 | 17 | 17 | ok |
| `/zorg/begeleiding/sittard-geleen` | 461 | 461 | +0 | 17 | 17 | ok |
| `/zorg/begeleiding/heerlen` | 456 | 456 | +0 | 17 | 17 | ok |
| `/zorg/begeleiding/beek` | 454 | 454 | +0 | 17 | 17 | ok |
| `/zorg/nachtzorg/maastricht` | 546 | 546 | +0 | 15 | 15 | ok |
| `/zorg/nachtzorg/meerssen` | 547 | 547 | +0 | 15 | 15 | ok |
| `/zorg/nachtzorg/valkenburg-aan-de-geul` | 599 | 599 | +0 | 15 | 15 | ok |
| `/zorg/nachtzorg/sittard-geleen` | 548 | 548 | +0 | 15 | 15 | ok |
| `/zorg/nachtzorg/heerlen` | 543 | 543 | +0 | 15 | 15 | ok |
| `/zorg/nachtzorg/beek` | 541 | 541 | +0 | 15 | 15 | ok |
| `/zorg/dagbesteding/maastricht` | 474 | 474 | +0 | 17 | 17 | ok |
| `/zorg/dagbesteding/meerssen` | 475 | 475 | +0 | 17 | 17 | ok |
| `/zorg/dagbesteding/valkenburg-aan-de-geul` | 527 | 527 | +0 | 17 | 17 | ok |
| `/zorg/dagbesteding/sittard-geleen` | 476 | 476 | +0 | 17 | 17 | ok |
| `/zorg/dagbesteding/heerlen` | 471 | 471 | +0 | 17 | 17 | ok |
| `/zorg/dagbesteding/beek` | 469 | 469 | +0 | 17 | 17 | ok |
| `/zorg/huishoudelijke-hulp/maastricht` | 460 | 460 | +0 | 17 | 17 | ok |
| `/zorg/huishoudelijke-hulp/meerssen` | 461 | 461 | +0 | 17 | 17 | ok |
| `/zorg/huishoudelijke-hulp/valkenburg-aan-de-geul` | 513 | 513 | +0 | 17 | 17 | ok |
| `/zorg/huishoudelijke-hulp/sittard-geleen` | 462 | 462 | +0 | 17 | 17 | ok |
| `/zorg/huishoudelijke-hulp/heerlen` | 457 | 457 | +0 | 17 | 17 | ok |
| `/zorg/huishoudelijke-hulp/beek` | 455 | 455 | +0 | 17 | 17 | ok |
| `/zorg/palliatieve-zorg/maastricht` | 489 | 489 | +0 | 17 | 17 | ok |
| `/zorg/palliatieve-zorg/meerssen` | 490 | 490 | +0 | 17 | 17 | ok |
| `/zorg/palliatieve-zorg/valkenburg-aan-de-geul` | 542 | 542 | +0 | 17 | 17 | ok |
| `/zorg/palliatieve-zorg/sittard-geleen` | 491 | 491 | +0 | 17 | 17 | ok |
| `/zorg/palliatieve-zorg/heerlen` | 486 | 486 | +0 | 17 | 17 | ok |
| `/zorg/palliatieve-zorg/beek` | 484 | 484 | +0 | 17 | 17 | ok |


## Koppenlijsten

### `/`

**Voor** (581 woorden)

- h1: Thuiszorg met een vast gezicht in Maastricht en omstreken
- h2: Thuiszorg op maat, 7 dagen per week
- h3: Culturele dagbesteding in Arnhem
- h2: Vandaag een zorgvraag, morgen aan tafel
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste zorg start
- h2: Maak kennis met Judy
- h3: Judy Hernandez
- h2: Vier manieren om de zorg te betalen
- h3: Persoonsgebonden budget
- h3: Via uw gemeente
- h3: Wet langdurige zorg
- h3: Zelf betalen
- h2: Bij u in de buurt, in Zuid-Limburg
- h2: Vertel ons wat er nodig is, wij regelen de rest

**Na** (603 woorden)

- h1: Thuiszorg met een vast gezicht in Maastricht en omstreken
- h2: Thuiszorg op maat, 7 dagen per week
- h3: Persoonlijke verzorging
- h3: Begeleiding
- h3: Nachtzorg
- h3: Dagbesteding
- h3: Huishoudelijke hulp
- h3: Palliatieve zorg
- h3: Culturele dagbesteding in Arnhem
- h2: Vandaag een zorgvraag, morgen aan tafel
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste zorg start
- h2: Maak kennis met Judy
- h3: Judy Hernandez
- h2: Vier manieren om de zorg te betalen
- h3: Persoonsgebonden budget
- h3: Via uw gemeente
- h3: Wet langdurige zorg
- h3: Zelf betalen
- h2: Bij u in de buurt, in Zuid-Limburg
- h2: Vertel ons wat er nodig is, wij regelen de rest

### `/over`

**Voor** (318 woorden)

- h1: Zorg die om de mens heen wordt georganiseerd.
- h2: Gezien, gehoord en gerespecteerd.
- h2: Wie er bij u binnenkomt.
- h3: Judy Hernandez
- h2: Drie dingen waar u ons op mag aanspreken.
- h3: Een vast gezicht
- h3: Korte lijnen
- h3: Afspraken nakomen
- h2: Waar u ons kunt terugvinden
- h2: Waar wij komen.
- h2: Wij komen graag bij u langs.

**Na** (334 woorden)

- h1: Zorg die om de mens heen wordt georganiseerd.
- h2: Gezien, gehoord en gerespecteerd.
- h2: Wie er bij u binnenkomt.
- h3: Judy Hernandez
- h3: Ervaring met
- h3: Talen
- h3: Samenwerking
- h2: Drie dingen waar u ons op mag aanspreken.
- h3: Een vast gezicht
- h3: Korte lijnen
- h3: Afspraken nakomen
- h2: Waar u ons kunt terugvinden
- h2: Waar wij komen.
- h2: Wij komen graag bij u langs.

### `/tarieven-en-vergoeding`

**Voor** (568 woorden)

- h1: Wat kost thuiszorg bij Judy Heartfelt Care?
- h2: Per zorgvorm, zonder verrassingen.
- h2: Vier routes, eerlijk uitgelegd.
- h2: De aanvraag doet u niet alleen.
- h2: Vragen over kosten.
- h2: Vraag een prijsopgave aan, vrijblijvend.

**Na** (578 woorden)

- h1: Wat kost thuiszorg bij Judy Heartfelt Care?
- h2: Per zorgvorm, zonder verrassingen.
- h2: Vier routes, eerlijk uitgelegd.
- h3: Persoonsgebonden budget
- h3: Via uw gemeente
- h3: Wet langdurige zorg
- h3: Zelf betalen
- h2: De aanvraag doet u niet alleen.
- h2: Vragen over kosten.
- h2: Vraag een prijsopgave aan, vrijblijvend.

### `/werkgebied`

**Voor** (181 woorden)

- h1: Zorg aan huis in Zuid-Limburg.
- h2: Zes plaatsen, één vast gezicht.
- h3: Culturele dagbesteding in Arnhem
- h3: Staat uw plaats er niet bij?
- h3: Zorg mee op vakantie
- h2: Wij kijken of het te regelen is.

**Na** (181 woorden)

- h1: Zorg aan huis in Zuid-Limburg.
- h2: Zes plaatsen, één vast gezicht.
- h3: Culturele dagbesteding in Arnhem
- h3: Staat uw plaats er niet bij?
- h3: Zorg mee op vakantie
- h2: Wij kijken of het te regelen is.

### `/veelgestelde-vragen`

**Voor** (328 woorden)

- h1: Wat mensen ons het vaakst vragen.
- h2: Kosten
- h2: Werkwijze
- h2: Vergoeding
- h2: Praktisch
- h2: Geen vraag is te klein
- h2: Stel hem gerust aan Judy.

**Na** (328 woorden)

- h1: Wat mensen ons het vaakst vragen.
- h2: Kosten
- h2: Werkwijze
- h2: Vergoeding
- h2: Praktisch
- h2: Geen vraag is te klein
- h2: Stel hem gerust aan Judy.

### `/contact`

**Voor** (110 woorden)

- h1: Bel, mail of stel uw zorgvraag.
- h2: Direct een zorgvraag?
- h2: Of stuur een bericht
- h2: Waar wij komen.

**Na** (108 woorden)

- h1: Bel, mail of stel uw zorgvraag.
- h2: Direct een zorgvraag?
- h2: Of stuur een bericht
- h2: Waar wij komen.

### `/zorgvraag`

**Voor** (52 woorden)

- h1: Vertel ons wat er nodig is.

**Na** (52 woorden)

- h1: Vertel ons wat er nodig is.

### `/privacy`

**Voor** (239 woorden)

- h1: Hoe wij met uw gegevens omgaan
- h2: Wie verwerkt uw gegevens
- h2: Welke gegevens
- h2: Waarom
- h2: Hoe lang
- h2: Met wie wij delen
- h2: Websitebezoek
- h2: Uw rechten
- h2: Vragen hierover?

**Na** (239 woorden)

- h1: Hoe wij met uw gegevens omgaan
- h2: Wie verwerkt uw gegevens
- h2: Welke gegevens
- h2: Waarom
- h2: Hoe lang
- h2: Met wie wij delen
- h2: Websitebezoek
- h2: Uw rechten
- h2: Vragen hierover?

### `/klachtenregeling`

**Voor** (167 woorden)

- h1: Niet tevreden? Zeg het ons.
- h2: Bespreek het met ons
- h2: De klachtenfunctionaris
- h2: De geschilleninstantie
- h2: Wat u van ons mag verwachten
- h2: Klacht indienen

**Na** (167 woorden)

- h1: Niet tevreden? Zeg het ons.
- h2: Bespreek het met ons
- h2: De klachtenfunctionaris
- h2: De geschilleninstantie
- h2: Wat u van ons mag verwachten
- h2: Klacht indienen

### `/algemene-voorwaarden`

**Voor** (184 woorden)

- h1: De afspraken die bij onze zorg horen
- h2: Start van de zorg
- h2: Tarieven en factuur
- h2: Afzeggen
- h2: Wijzigen en stoppen
- h2: Wat u van ons mag verwachten
- h2: Wat wij van u vragen
- h2: Klachten
- h2: Vragen hierover?

**Na** (184 woorden)

- h1: De afspraken die bij onze zorg horen
- h2: Start van de zorg
- h2: Tarieven en factuur
- h2: Afzeggen
- h2: Wijzigen en stoppen
- h2: Wat u van ons mag verwachten
- h2: Wat wij van u vragen
- h2: Klachten
- h2: Vragen hierover?

### `/kennisbank`

**Voor** (23 woorden)

- h1: Kennisbank

**Na** (23 woorden)

- h1: Kennisbank

### `/bedankt`

**Voor** (20 woorden)

- h1: Bedankt voor uw aanvraag

**Na** (20 woorden)

- h1: Bedankt voor uw aanvraag

### `/zorg/persoonlijke-verzorging`

**Voor** (490 woorden)

- h1: Persoonlijke verzorging aan huis, in uw eigen tempo.
- h2: Zelf blijven doen wat kan, hulp bij wat niet meer lukt.
- h3: Wassen en douchen
- h3: Aankleden
- h3: Verzorging
- h3: Toilet en eten
- h2: Herkent u een van deze situaties?
- h3: Na een ziekenhuisopname
- h3: Dementie
- h3: Parkinson
- h3: Mantelzorger op
- h2: Van zorgvraag tot de eerste ochtend.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste ochtend
- h2: Per uur, vooraf afgesproken.
- h2: Waar wij komen.
- h2: Vragen over persoonlijke verzorging.
- h2: Bespreek wat er nodig is.

**Na** (505 woorden)

- h1: Persoonlijke verzorging aan huis, in uw eigen tempo.
- h2: Zelf blijven doen wat kan, hulp bij wat niet meer lukt.
- h3: Wassen en douchen
- h3: Aankleden
- h3: Verzorging
- h3: Toilet en eten
- h2: Herkent u een van deze situaties?
- h3: Na een ziekenhuisopname
- h3: Dementie
- h3: Parkinson
- h3: Mantelzorger op
- h2: Van zorgvraag tot de eerste ochtend.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste ochtend
- h2: Per uur, vooraf afgesproken.
- h2: Waar wij komen.
- h2: Vragen over persoonlijke verzorging.
- h2: Bespreek wat er nodig is.

### `/zorg/begeleiding`

**Voor** (452 woorden)

- h1: Begeleiding aan huis, zodat de dag weer klopt.
- h2: Grip op de dag, met iemand naast u.
- h3: Dagstructuur
- h3: Post en administratie
- h3: Afspraken
- h3: Samen op pad
- h2: Herkent u een van deze situaties?
- h3: Beginnende dementie
- h3: Psychische klachten
- h3: Alleen komen te staan
- h3: Familie op afstand
- h2: Van zorgvraag tot de eerste afspraak.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste begeleiding start
- h2: Per uur, vooraf afgesproken.
- h2: Waar wij komen.
- h2: Vragen over begeleiding.
- h2: Samen brengen wij weer lijn aan.

**Na** (467 woorden)

- h1: Begeleiding aan huis, zodat de dag weer klopt.
- h2: Grip op de dag, met iemand naast u.
- h3: Dagstructuur
- h3: Post en administratie
- h3: Afspraken
- h3: Samen op pad
- h2: Herkent u een van deze situaties?
- h3: Beginnende dementie
- h3: Psychische klachten
- h3: Alleen komen te staan
- h3: Familie op afstand
- h2: Van zorgvraag tot de eerste afspraak.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste begeleiding start
- h2: Per uur, vooraf afgesproken.
- h2: Waar wij komen.
- h2: Vragen over begeleiding.
- h2: Samen brengen wij weer lijn aan.

### `/zorg/nachtzorg`

**Voor** (587 woorden)

- h1: Nachtzorg aan huis, zodat iedereen weer slaapt.
- h2: De nacht is vaak het zwaarste deel van de dag.
- h2: De zorgverlener blijft de hele nacht wakker
- h2: De zorgverlener slaapt, en staat op als het nodig is
- h2: Iemand in huis, zodat u het licht uit kunt doen
- h2: Herkent u een van deze nachten?
- h3: Onrust bij dementie
- h3: Na een ziekenhuisopname
- h3: Mantelzorger op
- h3: Laatste levensfase
- h2: Van zorgvraag tot de eerste nacht.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste nacht
- h2: Per nacht, vooraf afgesproken.
- h2: Waar wij 's nachts komen.
- h2: Vragen over nachtzorg.
- h2: Bespreek of nachtzorg bij u past.

**Na** (601 woorden)

- h1: Nachtzorg aan huis, zodat iedereen weer slaapt.
- h2: De nacht is vaak het zwaarste deel van de dag.
- h2: De zorgverlener blijft de hele nacht wakker
- h2: De zorgverlener slaapt, en staat op als het nodig is
- h2: Iemand in huis, zodat u het licht uit kunt doen
- h2: Herkent u een van deze nachten?
- h3: Onrust bij dementie
- h3: Na een ziekenhuisopname
- h3: Mantelzorger op
- h3: Laatste levensfase
- h2: Van zorgvraag tot de eerste nacht.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste nacht
- h2: Per nacht, vooraf afgesproken.
- h2: Waar wij 's nachts komen.
- h2: Vragen over nachtzorg.
- h2: Bespreek of nachtzorg bij u past.

### `/zorg/dagbesteding`

**Voor** (481 woorden)

- h1: Dagbesteding op maat, dicht bij huis.
- h2: Een dag met iets om naar uit te kijken.
- h3: Erop uit
- h3: Samen koken
- h3: Spel en muziek
- h3: Bezig blijven
- h2: Herkent u een van deze situaties?
- h3: Overdag veel alleen
- h3: Dementie
- h3: Mantelzorger wil even weg
- h3: Geen groepsmens
- h2: Van zorgvraag tot de eerste dag.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste dag
- h2: Per uur, vooraf afgesproken.
- h2: Waar wij komen.
- h2: Vragen over dagbesteding.
- h2: Bespreek wat bij uw naaste past.

**Na** (495 woorden)

- h1: Dagbesteding op maat, dicht bij huis.
- h2: Een dag met iets om naar uit te kijken.
- h3: Erop uit
- h3: Samen koken
- h3: Spel en muziek
- h3: Bezig blijven
- h2: Herkent u een van deze situaties?
- h3: Overdag veel alleen
- h3: Dementie
- h3: Mantelzorger wil even weg
- h3: Geen groepsmens
- h2: Van zorgvraag tot de eerste dag.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste dag
- h2: Per uur, vooraf afgesproken.
- h2: Waar wij komen.
- h2: Vragen over dagbesteding.
- h2: Bespreek wat bij uw naaste past.

### `/zorg/huishoudelijke-hulp`

**Voor** (441 woorden)

- h1: Huishoudelijke hulp, zodat thuis thuis blijft.
- h2: Het huis op orde, zonder dat u zich zorgen maakt.
- h3: Schoonmaken
- h3: Was en strijk
- h3: Bed verschonen
- h3: Boodschappen
- h2: Herkent u een van deze situaties?
- h3: Na een operatie
- h3: Ouder worden
- h3: Mantelzorger ontlasten
- h3: Alles bij één gezicht
- h2: Van zorgvraag tot een opgeruimd huis.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste hulp start
- h2: Per uur, vooraf afgesproken.
- h2: Waar wij komen.
- h2: Vragen over huishoudelijke hulp.
- h2: Wij nemen het graag over.

**Na** (460 woorden)

- h1: Huishoudelijke hulp, zodat thuis thuis blijft.
- h2: Het huis op orde, zonder dat u zich zorgen maakt.
- h3: Schoonmaken
- h3: Was en strijk
- h3: Bed verschonen
- h3: Boodschappen
- h2: Herkent u een van deze situaties?
- h3: Na een operatie
- h3: Ouder worden
- h3: Mantelzorger ontlasten
- h3: Alles bij één gezicht
- h2: Van zorgvraag tot een opgeruimd huis.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste hulp start
- h2: Per uur, vooraf afgesproken.
- h2: Waar wij komen.
- h2: Vragen over huishoudelijke hulp.
- h2: Wij nemen het graag over.

### `/zorg/palliatieve-zorg`

**Voor** (495 woorden)

- h1: Palliatieve zorg thuis, met rust en nabijheid.
- h2: Thuis, tot het einde.
- h3: Comfortzorg
- h3: Aanwezigheid
- h3: Steun voor de familie
- h3: Afstemming
- h2: Wanneer families ons bellen.
- h3: Thuis willen sterven
- h3: Familie wil waken
- h3: De laatste weken
- h3: Na het stoppen met behandelen
- h2: Snel geregeld, met zorg.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Wij zijn er
- h2: Per uur of per nacht, vooraf afgesproken.
- h2: Waar wij komen.
- h2: Vragen over palliatieve zorg.
- h2: Bel ons, wij denken mee.

**Na** (517 woorden)

- h1: Palliatieve zorg thuis, met rust en nabijheid.
- h2: Thuis, tot het einde.
- h3: Comfortzorg
- h3: Aanwezigheid
- h3: Steun voor de familie
- h3: Afstemming
- h2: Wanneer families ons bellen.
- h3: Thuis willen sterven
- h3: Familie wil waken
- h3: De laatste weken
- h3: Na het stoppen met behandelen
- h2: Snel geregeld, met zorg.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Wij zijn er
- h2: Per uur of per nacht, vooraf afgesproken.
- h2: Waar wij komen.
- h2: Vragen over palliatieve zorg.
- h2: Bel ons, wij denken mee.

### `/zorg/persoonlijke-verzorging/maastricht`

**Voor** (493 woorden)

- h1: Persoonlijke verzorging in Maastricht, door een vast gezicht.
- h2: Hulp bij wat niet meer lukt.
- h3: Wassen en douchen
- h3: Aankleden
- h3: Verzorging
- h3: Toilet en eten
- h2: Kennismaking bij u thuis in Maastricht, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste ochtend
- h2: Wat wij van Maastricht weten.
- h2: Persoonlijke verzorging in Maastricht, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Persoonlijke verzorging in Maastricht, kort beantwoord.
- h2: Vertel wat er nodig is, wij kijken mee.
- h3: Ook in Maastricht
- h3: Persoonlijke verzorging ook in

**Na** (493 woorden)

- h1: Persoonlijke verzorging in Maastricht, door een vast gezicht.
- h2: Hulp bij wat niet meer lukt.
- h3: Wassen en douchen
- h3: Aankleden
- h3: Verzorging
- h3: Toilet en eten
- h2: Kennismaking bij u thuis in Maastricht, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste ochtend
- h2: Wat wij van Maastricht weten.
- h2: Persoonlijke verzorging in Maastricht, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Persoonlijke verzorging in Maastricht, kort beantwoord.
- h2: Vertel wat er nodig is, wij kijken mee.
- h3: Ook in Maastricht
- h3: Persoonlijke verzorging ook in

### `/zorg/persoonlijke-verzorging/meerssen`

**Voor** (494 woorden)

- h1: Persoonlijke verzorging in Meerssen, door een vast gezicht.
- h2: Hulp bij wat niet meer lukt.
- h3: Wassen en douchen
- h3: Aankleden
- h3: Verzorging
- h3: Toilet en eten
- h2: Kennismaking bij u thuis in Meerssen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste ochtend
- h2: Wat wij van Meerssen weten.
- h2: Persoonlijke verzorging in Meerssen, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Persoonlijke verzorging in Meerssen, kort beantwoord.
- h2: Vertel wat er nodig is, wij kijken mee.
- h3: Ook in Meerssen
- h3: Persoonlijke verzorging ook in

**Na** (494 woorden)

- h1: Persoonlijke verzorging in Meerssen, door een vast gezicht.
- h2: Hulp bij wat niet meer lukt.
- h3: Wassen en douchen
- h3: Aankleden
- h3: Verzorging
- h3: Toilet en eten
- h2: Kennismaking bij u thuis in Meerssen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste ochtend
- h2: Wat wij van Meerssen weten.
- h2: Persoonlijke verzorging in Meerssen, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Persoonlijke verzorging in Meerssen, kort beantwoord.
- h2: Vertel wat er nodig is, wij kijken mee.
- h3: Ook in Meerssen
- h3: Persoonlijke verzorging ook in

### `/zorg/persoonlijke-verzorging/valkenburg-aan-de-geul`

**Voor** (546 woorden)

- h1: Persoonlijke verzorging in Valkenburg aan de Geul, door een vast gezicht.
- h2: Hulp bij wat niet meer lukt.
- h3: Wassen en douchen
- h3: Aankleden
- h3: Verzorging
- h3: Toilet en eten
- h2: Kennismaking bij u thuis in Valkenburg aan de Geul, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste ochtend
- h2: Wat wij van Valkenburg aan de Geul weten.
- h2: Persoonlijke verzorging in Valkenburg aan de Geul, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Persoonlijke verzorging in Valkenburg aan de Geul, kort beantwoord.
- h2: Vertel wat er nodig is, wij kijken mee.
- h3: Ook in Valkenburg aan de Geul
- h3: Persoonlijke verzorging ook in

**Na** (546 woorden)

- h1: Persoonlijke verzorging in Valkenburg aan de Geul, door een vast gezicht.
- h2: Hulp bij wat niet meer lukt.
- h3: Wassen en douchen
- h3: Aankleden
- h3: Verzorging
- h3: Toilet en eten
- h2: Kennismaking bij u thuis in Valkenburg aan de Geul, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste ochtend
- h2: Wat wij van Valkenburg aan de Geul weten.
- h2: Persoonlijke verzorging in Valkenburg aan de Geul, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Persoonlijke verzorging in Valkenburg aan de Geul, kort beantwoord.
- h2: Vertel wat er nodig is, wij kijken mee.
- h3: Ook in Valkenburg aan de Geul
- h3: Persoonlijke verzorging ook in

### `/zorg/persoonlijke-verzorging/sittard-geleen`

**Voor** (495 woorden)

- h1: Persoonlijke verzorging in Sittard-Geleen, door een vast gezicht.
- h2: Hulp bij wat niet meer lukt.
- h3: Wassen en douchen
- h3: Aankleden
- h3: Verzorging
- h3: Toilet en eten
- h2: Kennismaking bij u thuis in Sittard-Geleen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste ochtend
- h2: Wat wij van Sittard-Geleen weten.
- h2: Persoonlijke verzorging in Sittard-Geleen, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Persoonlijke verzorging in Sittard-Geleen, kort beantwoord.
- h2: Vertel wat er nodig is, wij kijken mee.
- h3: Ook in Sittard-Geleen
- h3: Persoonlijke verzorging ook in

**Na** (495 woorden)

- h1: Persoonlijke verzorging in Sittard-Geleen, door een vast gezicht.
- h2: Hulp bij wat niet meer lukt.
- h3: Wassen en douchen
- h3: Aankleden
- h3: Verzorging
- h3: Toilet en eten
- h2: Kennismaking bij u thuis in Sittard-Geleen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste ochtend
- h2: Wat wij van Sittard-Geleen weten.
- h2: Persoonlijke verzorging in Sittard-Geleen, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Persoonlijke verzorging in Sittard-Geleen, kort beantwoord.
- h2: Vertel wat er nodig is, wij kijken mee.
- h3: Ook in Sittard-Geleen
- h3: Persoonlijke verzorging ook in

### `/zorg/persoonlijke-verzorging/heerlen`

**Voor** (490 woorden)

- h1: Persoonlijke verzorging in Heerlen, door een vast gezicht.
- h2: Hulp bij wat niet meer lukt.
- h3: Wassen en douchen
- h3: Aankleden
- h3: Verzorging
- h3: Toilet en eten
- h2: Kennismaking bij u thuis in Heerlen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste ochtend
- h2: Wat wij van Heerlen weten.
- h2: Persoonlijke verzorging in Heerlen, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Persoonlijke verzorging in Heerlen, kort beantwoord.
- h2: Vertel wat er nodig is, wij kijken mee.
- h3: Ook in Heerlen
- h3: Persoonlijke verzorging ook in

**Na** (490 woorden)

- h1: Persoonlijke verzorging in Heerlen, door een vast gezicht.
- h2: Hulp bij wat niet meer lukt.
- h3: Wassen en douchen
- h3: Aankleden
- h3: Verzorging
- h3: Toilet en eten
- h2: Kennismaking bij u thuis in Heerlen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste ochtend
- h2: Wat wij van Heerlen weten.
- h2: Persoonlijke verzorging in Heerlen, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Persoonlijke verzorging in Heerlen, kort beantwoord.
- h2: Vertel wat er nodig is, wij kijken mee.
- h3: Ook in Heerlen
- h3: Persoonlijke verzorging ook in

### `/zorg/persoonlijke-verzorging/beek`

**Voor** (488 woorden)

- h1: Persoonlijke verzorging in Beek, door een vast gezicht.
- h2: Hulp bij wat niet meer lukt.
- h3: Wassen en douchen
- h3: Aankleden
- h3: Verzorging
- h3: Toilet en eten
- h2: Kennismaking bij u thuis in Beek, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste ochtend
- h2: Wat wij van Beek weten.
- h2: Persoonlijke verzorging in Beek, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Persoonlijke verzorging in Beek, kort beantwoord.
- h2: Vertel wat er nodig is, wij kijken mee.
- h3: Ook in Beek
- h3: Persoonlijke verzorging ook in

**Na** (488 woorden)

- h1: Persoonlijke verzorging in Beek, door een vast gezicht.
- h2: Hulp bij wat niet meer lukt.
- h3: Wassen en douchen
- h3: Aankleden
- h3: Verzorging
- h3: Toilet en eten
- h2: Kennismaking bij u thuis in Beek, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste ochtend
- h2: Wat wij van Beek weten.
- h2: Persoonlijke verzorging in Beek, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Persoonlijke verzorging in Beek, kort beantwoord.
- h2: Vertel wat er nodig is, wij kijken mee.
- h3: Ook in Beek
- h3: Persoonlijke verzorging ook in

### `/zorg/begeleiding/maastricht`

**Voor** (459 woorden)

- h1: Begeleiding in Maastricht, door een vast gezicht.
- h2: Grip op de dag, met iemand naast u.
- h3: Dagstructuur
- h3: Post en administratie
- h3: Afspraken
- h3: Samen op pad
- h2: Kennismaking bij u thuis in Maastricht, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste begeleiding start
- h2: Wat wij van Maastricht weten.
- h2: Begeleiding in Maastricht, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Begeleiding in Maastricht, kort beantwoord.
- h2: Vertel waar het vastloopt, wij kijken mee.
- h3: Ook in Maastricht
- h3: Begeleiding ook in

**Na** (459 woorden)

- h1: Begeleiding in Maastricht, door een vast gezicht.
- h2: Grip op de dag, met iemand naast u.
- h3: Dagstructuur
- h3: Post en administratie
- h3: Afspraken
- h3: Samen op pad
- h2: Kennismaking bij u thuis in Maastricht, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste begeleiding start
- h2: Wat wij van Maastricht weten.
- h2: Begeleiding in Maastricht, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Begeleiding in Maastricht, kort beantwoord.
- h2: Vertel waar het vastloopt, wij kijken mee.
- h3: Ook in Maastricht
- h3: Begeleiding ook in

### `/zorg/begeleiding/meerssen`

**Voor** (460 woorden)

- h1: Begeleiding in Meerssen, door een vast gezicht.
- h2: Grip op de dag, met iemand naast u.
- h3: Dagstructuur
- h3: Post en administratie
- h3: Afspraken
- h3: Samen op pad
- h2: Kennismaking bij u thuis in Meerssen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste begeleiding start
- h2: Wat wij van Meerssen weten.
- h2: Begeleiding in Meerssen, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Begeleiding in Meerssen, kort beantwoord.
- h2: Vertel waar het vastloopt, wij kijken mee.
- h3: Ook in Meerssen
- h3: Begeleiding ook in

**Na** (460 woorden)

- h1: Begeleiding in Meerssen, door een vast gezicht.
- h2: Grip op de dag, met iemand naast u.
- h3: Dagstructuur
- h3: Post en administratie
- h3: Afspraken
- h3: Samen op pad
- h2: Kennismaking bij u thuis in Meerssen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste begeleiding start
- h2: Wat wij van Meerssen weten.
- h2: Begeleiding in Meerssen, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Begeleiding in Meerssen, kort beantwoord.
- h2: Vertel waar het vastloopt, wij kijken mee.
- h3: Ook in Meerssen
- h3: Begeleiding ook in

### `/zorg/begeleiding/valkenburg-aan-de-geul`

**Voor** (512 woorden)

- h1: Begeleiding in Valkenburg aan de Geul, door een vast gezicht.
- h2: Grip op de dag, met iemand naast u.
- h3: Dagstructuur
- h3: Post en administratie
- h3: Afspraken
- h3: Samen op pad
- h2: Kennismaking bij u thuis in Valkenburg aan de Geul, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste begeleiding start
- h2: Wat wij van Valkenburg aan de Geul weten.
- h2: Begeleiding in Valkenburg aan de Geul, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Begeleiding in Valkenburg aan de Geul, kort beantwoord.
- h2: Vertel waar het vastloopt, wij kijken mee.
- h3: Ook in Valkenburg aan de Geul
- h3: Begeleiding ook in

**Na** (512 woorden)

- h1: Begeleiding in Valkenburg aan de Geul, door een vast gezicht.
- h2: Grip op de dag, met iemand naast u.
- h3: Dagstructuur
- h3: Post en administratie
- h3: Afspraken
- h3: Samen op pad
- h2: Kennismaking bij u thuis in Valkenburg aan de Geul, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste begeleiding start
- h2: Wat wij van Valkenburg aan de Geul weten.
- h2: Begeleiding in Valkenburg aan de Geul, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Begeleiding in Valkenburg aan de Geul, kort beantwoord.
- h2: Vertel waar het vastloopt, wij kijken mee.
- h3: Ook in Valkenburg aan de Geul
- h3: Begeleiding ook in

### `/zorg/begeleiding/sittard-geleen`

**Voor** (461 woorden)

- h1: Begeleiding in Sittard-Geleen, door een vast gezicht.
- h2: Grip op de dag, met iemand naast u.
- h3: Dagstructuur
- h3: Post en administratie
- h3: Afspraken
- h3: Samen op pad
- h2: Kennismaking bij u thuis in Sittard-Geleen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste begeleiding start
- h2: Wat wij van Sittard-Geleen weten.
- h2: Begeleiding in Sittard-Geleen, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Begeleiding in Sittard-Geleen, kort beantwoord.
- h2: Vertel waar het vastloopt, wij kijken mee.
- h3: Ook in Sittard-Geleen
- h3: Begeleiding ook in

**Na** (461 woorden)

- h1: Begeleiding in Sittard-Geleen, door een vast gezicht.
- h2: Grip op de dag, met iemand naast u.
- h3: Dagstructuur
- h3: Post en administratie
- h3: Afspraken
- h3: Samen op pad
- h2: Kennismaking bij u thuis in Sittard-Geleen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste begeleiding start
- h2: Wat wij van Sittard-Geleen weten.
- h2: Begeleiding in Sittard-Geleen, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Begeleiding in Sittard-Geleen, kort beantwoord.
- h2: Vertel waar het vastloopt, wij kijken mee.
- h3: Ook in Sittard-Geleen
- h3: Begeleiding ook in

### `/zorg/begeleiding/heerlen`

**Voor** (456 woorden)

- h1: Begeleiding in Heerlen, door een vast gezicht.
- h2: Grip op de dag, met iemand naast u.
- h3: Dagstructuur
- h3: Post en administratie
- h3: Afspraken
- h3: Samen op pad
- h2: Kennismaking bij u thuis in Heerlen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste begeleiding start
- h2: Wat wij van Heerlen weten.
- h2: Begeleiding in Heerlen, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Begeleiding in Heerlen, kort beantwoord.
- h2: Vertel waar het vastloopt, wij kijken mee.
- h3: Ook in Heerlen
- h3: Begeleiding ook in

**Na** (456 woorden)

- h1: Begeleiding in Heerlen, door een vast gezicht.
- h2: Grip op de dag, met iemand naast u.
- h3: Dagstructuur
- h3: Post en administratie
- h3: Afspraken
- h3: Samen op pad
- h2: Kennismaking bij u thuis in Heerlen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste begeleiding start
- h2: Wat wij van Heerlen weten.
- h2: Begeleiding in Heerlen, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Begeleiding in Heerlen, kort beantwoord.
- h2: Vertel waar het vastloopt, wij kijken mee.
- h3: Ook in Heerlen
- h3: Begeleiding ook in

### `/zorg/begeleiding/beek`

**Voor** (454 woorden)

- h1: Begeleiding in Beek, door een vast gezicht.
- h2: Grip op de dag, met iemand naast u.
- h3: Dagstructuur
- h3: Post en administratie
- h3: Afspraken
- h3: Samen op pad
- h2: Kennismaking bij u thuis in Beek, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste begeleiding start
- h2: Wat wij van Beek weten.
- h2: Begeleiding in Beek, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Begeleiding in Beek, kort beantwoord.
- h2: Vertel waar het vastloopt, wij kijken mee.
- h3: Ook in Beek
- h3: Begeleiding ook in

**Na** (454 woorden)

- h1: Begeleiding in Beek, door een vast gezicht.
- h2: Grip op de dag, met iemand naast u.
- h3: Dagstructuur
- h3: Post en administratie
- h3: Afspraken
- h3: Samen op pad
- h2: Kennismaking bij u thuis in Beek, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste begeleiding start
- h2: Wat wij van Beek weten.
- h2: Begeleiding in Beek, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Begeleiding in Beek, kort beantwoord.
- h2: Vertel waar het vastloopt, wij kijken mee.
- h3: Ook in Beek
- h3: Begeleiding ook in

### `/zorg/nachtzorg/maastricht`

**Voor** (546 woorden)

- h1: Nachtzorg in Maastricht, door een vast gezicht.
- h2: Iemand in huis tussen 23:00 en 07:00.
- h3: De zorgverlener blijft de hele nacht wakker
- h3: De zorgverlener slaapt, en staat op als het nodig is
- h2: Kennismaking bij u thuis in Maastricht, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste nacht
- h2: Wat wij van Maastricht weten.
- h2: Nachtzorg in Maastricht, per nacht
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Nachtzorg in Maastricht, kort beantwoord.
- h2: Vertel wat er 's nachts speelt, wij kijken mee.
- h3: Ook in Maastricht
- h3: Nachtzorg ook in

**Na** (546 woorden)

- h1: Nachtzorg in Maastricht, door een vast gezicht.
- h2: Iemand in huis tussen 23:00 en 07:00.
- h3: De zorgverlener blijft de hele nacht wakker
- h3: De zorgverlener slaapt, en staat op als het nodig is
- h2: Kennismaking bij u thuis in Maastricht, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste nacht
- h2: Wat wij van Maastricht weten.
- h2: Nachtzorg in Maastricht, per nacht
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Nachtzorg in Maastricht, kort beantwoord.
- h2: Vertel wat er 's nachts speelt, wij kijken mee.
- h3: Ook in Maastricht
- h3: Nachtzorg ook in

### `/zorg/nachtzorg/meerssen`

**Voor** (547 woorden)

- h1: Nachtzorg in Meerssen, door een vast gezicht.
- h2: Iemand in huis tussen 23:00 en 07:00.
- h3: De zorgverlener blijft de hele nacht wakker
- h3: De zorgverlener slaapt, en staat op als het nodig is
- h2: Kennismaking bij u thuis in Meerssen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste nacht
- h2: Wat wij van Meerssen weten.
- h2: Nachtzorg in Meerssen, per nacht
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Nachtzorg in Meerssen, kort beantwoord.
- h2: Vertel wat er 's nachts speelt, wij kijken mee.
- h3: Ook in Meerssen
- h3: Nachtzorg ook in

**Na** (547 woorden)

- h1: Nachtzorg in Meerssen, door een vast gezicht.
- h2: Iemand in huis tussen 23:00 en 07:00.
- h3: De zorgverlener blijft de hele nacht wakker
- h3: De zorgverlener slaapt, en staat op als het nodig is
- h2: Kennismaking bij u thuis in Meerssen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste nacht
- h2: Wat wij van Meerssen weten.
- h2: Nachtzorg in Meerssen, per nacht
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Nachtzorg in Meerssen, kort beantwoord.
- h2: Vertel wat er 's nachts speelt, wij kijken mee.
- h3: Ook in Meerssen
- h3: Nachtzorg ook in

### `/zorg/nachtzorg/valkenburg-aan-de-geul`

**Voor** (599 woorden)

- h1: Nachtzorg in Valkenburg aan de Geul, door een vast gezicht.
- h2: Iemand in huis tussen 23:00 en 07:00.
- h3: De zorgverlener blijft de hele nacht wakker
- h3: De zorgverlener slaapt, en staat op als het nodig is
- h2: Kennismaking bij u thuis in Valkenburg aan de Geul, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste nacht
- h2: Wat wij van Valkenburg aan de Geul weten.
- h2: Nachtzorg in Valkenburg aan de Geul, per nacht
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Nachtzorg in Valkenburg aan de Geul, kort beantwoord.
- h2: Vertel wat er 's nachts speelt, wij kijken mee.
- h3: Ook in Valkenburg aan de Geul
- h3: Nachtzorg ook in

**Na** (599 woorden)

- h1: Nachtzorg in Valkenburg aan de Geul, door een vast gezicht.
- h2: Iemand in huis tussen 23:00 en 07:00.
- h3: De zorgverlener blijft de hele nacht wakker
- h3: De zorgverlener slaapt, en staat op als het nodig is
- h2: Kennismaking bij u thuis in Valkenburg aan de Geul, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste nacht
- h2: Wat wij van Valkenburg aan de Geul weten.
- h2: Nachtzorg in Valkenburg aan de Geul, per nacht
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Nachtzorg in Valkenburg aan de Geul, kort beantwoord.
- h2: Vertel wat er 's nachts speelt, wij kijken mee.
- h3: Ook in Valkenburg aan de Geul
- h3: Nachtzorg ook in

### `/zorg/nachtzorg/sittard-geleen`

**Voor** (548 woorden)

- h1: Nachtzorg in Sittard-Geleen, door een vast gezicht.
- h2: Iemand in huis tussen 23:00 en 07:00.
- h3: De zorgverlener blijft de hele nacht wakker
- h3: De zorgverlener slaapt, en staat op als het nodig is
- h2: Kennismaking bij u thuis in Sittard-Geleen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste nacht
- h2: Wat wij van Sittard-Geleen weten.
- h2: Nachtzorg in Sittard-Geleen, per nacht
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Nachtzorg in Sittard-Geleen, kort beantwoord.
- h2: Vertel wat er 's nachts speelt, wij kijken mee.
- h3: Ook in Sittard-Geleen
- h3: Nachtzorg ook in

**Na** (548 woorden)

- h1: Nachtzorg in Sittard-Geleen, door een vast gezicht.
- h2: Iemand in huis tussen 23:00 en 07:00.
- h3: De zorgverlener blijft de hele nacht wakker
- h3: De zorgverlener slaapt, en staat op als het nodig is
- h2: Kennismaking bij u thuis in Sittard-Geleen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste nacht
- h2: Wat wij van Sittard-Geleen weten.
- h2: Nachtzorg in Sittard-Geleen, per nacht
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Nachtzorg in Sittard-Geleen, kort beantwoord.
- h2: Vertel wat er 's nachts speelt, wij kijken mee.
- h3: Ook in Sittard-Geleen
- h3: Nachtzorg ook in

### `/zorg/nachtzorg/heerlen`

**Voor** (543 woorden)

- h1: Nachtzorg in Heerlen, door een vast gezicht.
- h2: Iemand in huis tussen 23:00 en 07:00.
- h3: De zorgverlener blijft de hele nacht wakker
- h3: De zorgverlener slaapt, en staat op als het nodig is
- h2: Kennismaking bij u thuis in Heerlen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste nacht
- h2: Wat wij van Heerlen weten.
- h2: Nachtzorg in Heerlen, per nacht
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Nachtzorg in Heerlen, kort beantwoord.
- h2: Vertel wat er 's nachts speelt, wij kijken mee.
- h3: Ook in Heerlen
- h3: Nachtzorg ook in

**Na** (543 woorden)

- h1: Nachtzorg in Heerlen, door een vast gezicht.
- h2: Iemand in huis tussen 23:00 en 07:00.
- h3: De zorgverlener blijft de hele nacht wakker
- h3: De zorgverlener slaapt, en staat op als het nodig is
- h2: Kennismaking bij u thuis in Heerlen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste nacht
- h2: Wat wij van Heerlen weten.
- h2: Nachtzorg in Heerlen, per nacht
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Nachtzorg in Heerlen, kort beantwoord.
- h2: Vertel wat er 's nachts speelt, wij kijken mee.
- h3: Ook in Heerlen
- h3: Nachtzorg ook in

### `/zorg/nachtzorg/beek`

**Voor** (541 woorden)

- h1: Nachtzorg in Beek, door een vast gezicht.
- h2: Iemand in huis tussen 23:00 en 07:00.
- h3: De zorgverlener blijft de hele nacht wakker
- h3: De zorgverlener slaapt, en staat op als het nodig is
- h2: Kennismaking bij u thuis in Beek, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste nacht
- h2: Wat wij van Beek weten.
- h2: Nachtzorg in Beek, per nacht
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Nachtzorg in Beek, kort beantwoord.
- h2: Vertel wat er 's nachts speelt, wij kijken mee.
- h3: Ook in Beek
- h3: Nachtzorg ook in

**Na** (541 woorden)

- h1: Nachtzorg in Beek, door een vast gezicht.
- h2: Iemand in huis tussen 23:00 en 07:00.
- h3: De zorgverlener blijft de hele nacht wakker
- h3: De zorgverlener slaapt, en staat op als het nodig is
- h2: Kennismaking bij u thuis in Beek, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste nacht
- h2: Wat wij van Beek weten.
- h2: Nachtzorg in Beek, per nacht
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Nachtzorg in Beek, kort beantwoord.
- h2: Vertel wat er 's nachts speelt, wij kijken mee.
- h3: Ook in Beek
- h3: Nachtzorg ook in

### `/zorg/dagbesteding/maastricht`

**Voor** (474 woorden)

- h1: Dagbesteding in Maastricht, door een vast gezicht.
- h2: Een dag met iets om naar uit te kijken.
- h3: Erop uit
- h3: Samen koken
- h3: Spel en muziek
- h3: Bezig blijven
- h2: Kennismaking bij u thuis in Maastricht, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste dag
- h2: Wat wij van Maastricht weten.
- h2: Dagbesteding in Maastricht, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Dagbesteding in Maastricht, kort beantwoord.
- h2: Vertel wat uw naaste graag doet, wij kijken mee.
- h3: Ook in Maastricht
- h3: Dagbesteding ook in

**Na** (474 woorden)

- h1: Dagbesteding in Maastricht, door een vast gezicht.
- h2: Een dag met iets om naar uit te kijken.
- h3: Erop uit
- h3: Samen koken
- h3: Spel en muziek
- h3: Bezig blijven
- h2: Kennismaking bij u thuis in Maastricht, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste dag
- h2: Wat wij van Maastricht weten.
- h2: Dagbesteding in Maastricht, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Dagbesteding in Maastricht, kort beantwoord.
- h2: Vertel wat uw naaste graag doet, wij kijken mee.
- h3: Ook in Maastricht
- h3: Dagbesteding ook in

### `/zorg/dagbesteding/meerssen`

**Voor** (475 woorden)

- h1: Dagbesteding in Meerssen, door een vast gezicht.
- h2: Een dag met iets om naar uit te kijken.
- h3: Erop uit
- h3: Samen koken
- h3: Spel en muziek
- h3: Bezig blijven
- h2: Kennismaking bij u thuis in Meerssen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste dag
- h2: Wat wij van Meerssen weten.
- h2: Dagbesteding in Meerssen, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Dagbesteding in Meerssen, kort beantwoord.
- h2: Vertel wat uw naaste graag doet, wij kijken mee.
- h3: Ook in Meerssen
- h3: Dagbesteding ook in

**Na** (475 woorden)

- h1: Dagbesteding in Meerssen, door een vast gezicht.
- h2: Een dag met iets om naar uit te kijken.
- h3: Erop uit
- h3: Samen koken
- h3: Spel en muziek
- h3: Bezig blijven
- h2: Kennismaking bij u thuis in Meerssen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste dag
- h2: Wat wij van Meerssen weten.
- h2: Dagbesteding in Meerssen, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Dagbesteding in Meerssen, kort beantwoord.
- h2: Vertel wat uw naaste graag doet, wij kijken mee.
- h3: Ook in Meerssen
- h3: Dagbesteding ook in

### `/zorg/dagbesteding/valkenburg-aan-de-geul`

**Voor** (527 woorden)

- h1: Dagbesteding in Valkenburg aan de Geul, door een vast gezicht.
- h2: Een dag met iets om naar uit te kijken.
- h3: Erop uit
- h3: Samen koken
- h3: Spel en muziek
- h3: Bezig blijven
- h2: Kennismaking bij u thuis in Valkenburg aan de Geul, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste dag
- h2: Wat wij van Valkenburg aan de Geul weten.
- h2: Dagbesteding in Valkenburg aan de Geul, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Dagbesteding in Valkenburg aan de Geul, kort beantwoord.
- h2: Vertel wat uw naaste graag doet, wij kijken mee.
- h3: Ook in Valkenburg aan de Geul
- h3: Dagbesteding ook in

**Na** (527 woorden)

- h1: Dagbesteding in Valkenburg aan de Geul, door een vast gezicht.
- h2: Een dag met iets om naar uit te kijken.
- h3: Erop uit
- h3: Samen koken
- h3: Spel en muziek
- h3: Bezig blijven
- h2: Kennismaking bij u thuis in Valkenburg aan de Geul, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste dag
- h2: Wat wij van Valkenburg aan de Geul weten.
- h2: Dagbesteding in Valkenburg aan de Geul, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Dagbesteding in Valkenburg aan de Geul, kort beantwoord.
- h2: Vertel wat uw naaste graag doet, wij kijken mee.
- h3: Ook in Valkenburg aan de Geul
- h3: Dagbesteding ook in

### `/zorg/dagbesteding/sittard-geleen`

**Voor** (476 woorden)

- h1: Dagbesteding in Sittard-Geleen, door een vast gezicht.
- h2: Een dag met iets om naar uit te kijken.
- h3: Erop uit
- h3: Samen koken
- h3: Spel en muziek
- h3: Bezig blijven
- h2: Kennismaking bij u thuis in Sittard-Geleen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste dag
- h2: Wat wij van Sittard-Geleen weten.
- h2: Dagbesteding in Sittard-Geleen, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Dagbesteding in Sittard-Geleen, kort beantwoord.
- h2: Vertel wat uw naaste graag doet, wij kijken mee.
- h3: Ook in Sittard-Geleen
- h3: Dagbesteding ook in

**Na** (476 woorden)

- h1: Dagbesteding in Sittard-Geleen, door een vast gezicht.
- h2: Een dag met iets om naar uit te kijken.
- h3: Erop uit
- h3: Samen koken
- h3: Spel en muziek
- h3: Bezig blijven
- h2: Kennismaking bij u thuis in Sittard-Geleen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste dag
- h2: Wat wij van Sittard-Geleen weten.
- h2: Dagbesteding in Sittard-Geleen, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Dagbesteding in Sittard-Geleen, kort beantwoord.
- h2: Vertel wat uw naaste graag doet, wij kijken mee.
- h3: Ook in Sittard-Geleen
- h3: Dagbesteding ook in

### `/zorg/dagbesteding/heerlen`

**Voor** (471 woorden)

- h1: Dagbesteding in Heerlen, door een vast gezicht.
- h2: Een dag met iets om naar uit te kijken.
- h3: Erop uit
- h3: Samen koken
- h3: Spel en muziek
- h3: Bezig blijven
- h2: Kennismaking bij u thuis in Heerlen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste dag
- h2: Wat wij van Heerlen weten.
- h2: Dagbesteding in Heerlen, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Dagbesteding in Heerlen, kort beantwoord.
- h2: Vertel wat uw naaste graag doet, wij kijken mee.
- h3: Ook in Heerlen
- h3: Dagbesteding ook in

**Na** (471 woorden)

- h1: Dagbesteding in Heerlen, door een vast gezicht.
- h2: Een dag met iets om naar uit te kijken.
- h3: Erop uit
- h3: Samen koken
- h3: Spel en muziek
- h3: Bezig blijven
- h2: Kennismaking bij u thuis in Heerlen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste dag
- h2: Wat wij van Heerlen weten.
- h2: Dagbesteding in Heerlen, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Dagbesteding in Heerlen, kort beantwoord.
- h2: Vertel wat uw naaste graag doet, wij kijken mee.
- h3: Ook in Heerlen
- h3: Dagbesteding ook in

### `/zorg/dagbesteding/beek`

**Voor** (469 woorden)

- h1: Dagbesteding in Beek, door een vast gezicht.
- h2: Een dag met iets om naar uit te kijken.
- h3: Erop uit
- h3: Samen koken
- h3: Spel en muziek
- h3: Bezig blijven
- h2: Kennismaking bij u thuis in Beek, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste dag
- h2: Wat wij van Beek weten.
- h2: Dagbesteding in Beek, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Dagbesteding in Beek, kort beantwoord.
- h2: Vertel wat uw naaste graag doet, wij kijken mee.
- h3: Ook in Beek
- h3: Dagbesteding ook in

**Na** (469 woorden)

- h1: Dagbesteding in Beek, door een vast gezicht.
- h2: Een dag met iets om naar uit te kijken.
- h3: Erop uit
- h3: Samen koken
- h3: Spel en muziek
- h3: Bezig blijven
- h2: Kennismaking bij u thuis in Beek, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: De eerste dag
- h2: Wat wij van Beek weten.
- h2: Dagbesteding in Beek, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Dagbesteding in Beek, kort beantwoord.
- h2: Vertel wat uw naaste graag doet, wij kijken mee.
- h3: Ook in Beek
- h3: Dagbesteding ook in

### `/zorg/huishoudelijke-hulp/maastricht`

**Voor** (460 woorden)

- h1: Huishoudelijke hulp in Maastricht, door een vast gezicht.
- h2: Het huis op orde, zoals u het gewend bent.
- h3: Schoonmaken
- h3: Was en strijk
- h3: Bed verschonen
- h3: Boodschappen
- h2: Kennismaking bij u thuis in Maastricht, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste hulp start
- h2: Wat wij van Maastricht weten.
- h2: Huishoudelijke hulp in Maastricht, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Huishoudelijke hulp in Maastricht, kort beantwoord.
- h2: Vertel wat er moet gebeuren, wij kijken mee.
- h3: Ook in Maastricht
- h3: Huishoudelijke hulp ook in

**Na** (460 woorden)

- h1: Huishoudelijke hulp in Maastricht, door een vast gezicht.
- h2: Het huis op orde, zoals u het gewend bent.
- h3: Schoonmaken
- h3: Was en strijk
- h3: Bed verschonen
- h3: Boodschappen
- h2: Kennismaking bij u thuis in Maastricht, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste hulp start
- h2: Wat wij van Maastricht weten.
- h2: Huishoudelijke hulp in Maastricht, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Huishoudelijke hulp in Maastricht, kort beantwoord.
- h2: Vertel wat er moet gebeuren, wij kijken mee.
- h3: Ook in Maastricht
- h3: Huishoudelijke hulp ook in

### `/zorg/huishoudelijke-hulp/meerssen`

**Voor** (461 woorden)

- h1: Huishoudelijke hulp in Meerssen, door een vast gezicht.
- h2: Het huis op orde, zoals u het gewend bent.
- h3: Schoonmaken
- h3: Was en strijk
- h3: Bed verschonen
- h3: Boodschappen
- h2: Kennismaking bij u thuis in Meerssen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste hulp start
- h2: Wat wij van Meerssen weten.
- h2: Huishoudelijke hulp in Meerssen, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Huishoudelijke hulp in Meerssen, kort beantwoord.
- h2: Vertel wat er moet gebeuren, wij kijken mee.
- h3: Ook in Meerssen
- h3: Huishoudelijke hulp ook in

**Na** (461 woorden)

- h1: Huishoudelijke hulp in Meerssen, door een vast gezicht.
- h2: Het huis op orde, zoals u het gewend bent.
- h3: Schoonmaken
- h3: Was en strijk
- h3: Bed verschonen
- h3: Boodschappen
- h2: Kennismaking bij u thuis in Meerssen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste hulp start
- h2: Wat wij van Meerssen weten.
- h2: Huishoudelijke hulp in Meerssen, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Huishoudelijke hulp in Meerssen, kort beantwoord.
- h2: Vertel wat er moet gebeuren, wij kijken mee.
- h3: Ook in Meerssen
- h3: Huishoudelijke hulp ook in

### `/zorg/huishoudelijke-hulp/valkenburg-aan-de-geul`

**Voor** (513 woorden)

- h1: Huishoudelijke hulp in Valkenburg aan de Geul, door een vast gezicht.
- h2: Het huis op orde, zoals u het gewend bent.
- h3: Schoonmaken
- h3: Was en strijk
- h3: Bed verschonen
- h3: Boodschappen
- h2: Kennismaking bij u thuis in Valkenburg aan de Geul, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste hulp start
- h2: Wat wij van Valkenburg aan de Geul weten.
- h2: Huishoudelijke hulp in Valkenburg aan de Geul, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Huishoudelijke hulp in Valkenburg aan de Geul, kort beantwoord.
- h2: Vertel wat er moet gebeuren, wij kijken mee.
- h3: Ook in Valkenburg aan de Geul
- h3: Huishoudelijke hulp ook in

**Na** (513 woorden)

- h1: Huishoudelijke hulp in Valkenburg aan de Geul, door een vast gezicht.
- h2: Het huis op orde, zoals u het gewend bent.
- h3: Schoonmaken
- h3: Was en strijk
- h3: Bed verschonen
- h3: Boodschappen
- h2: Kennismaking bij u thuis in Valkenburg aan de Geul, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste hulp start
- h2: Wat wij van Valkenburg aan de Geul weten.
- h2: Huishoudelijke hulp in Valkenburg aan de Geul, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Huishoudelijke hulp in Valkenburg aan de Geul, kort beantwoord.
- h2: Vertel wat er moet gebeuren, wij kijken mee.
- h3: Ook in Valkenburg aan de Geul
- h3: Huishoudelijke hulp ook in

### `/zorg/huishoudelijke-hulp/sittard-geleen`

**Voor** (462 woorden)

- h1: Huishoudelijke hulp in Sittard-Geleen, door een vast gezicht.
- h2: Het huis op orde, zoals u het gewend bent.
- h3: Schoonmaken
- h3: Was en strijk
- h3: Bed verschonen
- h3: Boodschappen
- h2: Kennismaking bij u thuis in Sittard-Geleen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste hulp start
- h2: Wat wij van Sittard-Geleen weten.
- h2: Huishoudelijke hulp in Sittard-Geleen, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Huishoudelijke hulp in Sittard-Geleen, kort beantwoord.
- h2: Vertel wat er moet gebeuren, wij kijken mee.
- h3: Ook in Sittard-Geleen
- h3: Huishoudelijke hulp ook in

**Na** (462 woorden)

- h1: Huishoudelijke hulp in Sittard-Geleen, door een vast gezicht.
- h2: Het huis op orde, zoals u het gewend bent.
- h3: Schoonmaken
- h3: Was en strijk
- h3: Bed verschonen
- h3: Boodschappen
- h2: Kennismaking bij u thuis in Sittard-Geleen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste hulp start
- h2: Wat wij van Sittard-Geleen weten.
- h2: Huishoudelijke hulp in Sittard-Geleen, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Huishoudelijke hulp in Sittard-Geleen, kort beantwoord.
- h2: Vertel wat er moet gebeuren, wij kijken mee.
- h3: Ook in Sittard-Geleen
- h3: Huishoudelijke hulp ook in

### `/zorg/huishoudelijke-hulp/heerlen`

**Voor** (457 woorden)

- h1: Huishoudelijke hulp in Heerlen, door een vast gezicht.
- h2: Het huis op orde, zoals u het gewend bent.
- h3: Schoonmaken
- h3: Was en strijk
- h3: Bed verschonen
- h3: Boodschappen
- h2: Kennismaking bij u thuis in Heerlen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste hulp start
- h2: Wat wij van Heerlen weten.
- h2: Huishoudelijke hulp in Heerlen, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Huishoudelijke hulp in Heerlen, kort beantwoord.
- h2: Vertel wat er moet gebeuren, wij kijken mee.
- h3: Ook in Heerlen
- h3: Huishoudelijke hulp ook in

**Na** (457 woorden)

- h1: Huishoudelijke hulp in Heerlen, door een vast gezicht.
- h2: Het huis op orde, zoals u het gewend bent.
- h3: Schoonmaken
- h3: Was en strijk
- h3: Bed verschonen
- h3: Boodschappen
- h2: Kennismaking bij u thuis in Heerlen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste hulp start
- h2: Wat wij van Heerlen weten.
- h2: Huishoudelijke hulp in Heerlen, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Huishoudelijke hulp in Heerlen, kort beantwoord.
- h2: Vertel wat er moet gebeuren, wij kijken mee.
- h3: Ook in Heerlen
- h3: Huishoudelijke hulp ook in

### `/zorg/huishoudelijke-hulp/beek`

**Voor** (455 woorden)

- h1: Huishoudelijke hulp in Beek, door een vast gezicht.
- h2: Het huis op orde, zoals u het gewend bent.
- h3: Schoonmaken
- h3: Was en strijk
- h3: Bed verschonen
- h3: Boodschappen
- h2: Kennismaking bij u thuis in Beek, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste hulp start
- h2: Wat wij van Beek weten.
- h2: Huishoudelijke hulp in Beek, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Huishoudelijke hulp in Beek, kort beantwoord.
- h2: Vertel wat er moet gebeuren, wij kijken mee.
- h3: Ook in Beek
- h3: Huishoudelijke hulp ook in

**Na** (455 woorden)

- h1: Huishoudelijke hulp in Beek, door een vast gezicht.
- h2: Het huis op orde, zoals u het gewend bent.
- h3: Schoonmaken
- h3: Was en strijk
- h3: Bed verschonen
- h3: Boodschappen
- h2: Kennismaking bij u thuis in Beek, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Vaste hulp start
- h2: Wat wij van Beek weten.
- h2: Huishoudelijke hulp in Beek, per uur
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Huishoudelijke hulp in Beek, kort beantwoord.
- h2: Vertel wat er moet gebeuren, wij kijken mee.
- h3: Ook in Beek
- h3: Huishoudelijke hulp ook in

### `/zorg/palliatieve-zorg/maastricht`

**Voor** (489 woorden)

- h1: Palliatieve zorg in Maastricht, door een vast gezicht.
- h2: Thuis, met rust en nabijheid.
- h3: Comfortzorg
- h3: Aanwezigheid
- h3: Steun voor de familie
- h3: Afstemming
- h2: Kennismaking bij u thuis in Maastricht, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Wij zijn er
- h2: Wat wij van Maastricht weten.
- h2: Palliatieve zorg in Maastricht, per uur of per nacht
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Palliatieve zorg in Maastricht, kort beantwoord.
- h2: Bel ons, wij denken mee.
- h3: Ook in Maastricht
- h3: Palliatieve zorg ook in

**Na** (489 woorden)

- h1: Palliatieve zorg in Maastricht, door een vast gezicht.
- h2: Thuis, met rust en nabijheid.
- h3: Comfortzorg
- h3: Aanwezigheid
- h3: Steun voor de familie
- h3: Afstemming
- h2: Kennismaking bij u thuis in Maastricht, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Wij zijn er
- h2: Wat wij van Maastricht weten.
- h2: Palliatieve zorg in Maastricht, per uur of per nacht
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Palliatieve zorg in Maastricht, kort beantwoord.
- h2: Bel ons, wij denken mee.
- h3: Ook in Maastricht
- h3: Palliatieve zorg ook in

### `/zorg/palliatieve-zorg/meerssen`

**Voor** (490 woorden)

- h1: Palliatieve zorg in Meerssen, door een vast gezicht.
- h2: Thuis, met rust en nabijheid.
- h3: Comfortzorg
- h3: Aanwezigheid
- h3: Steun voor de familie
- h3: Afstemming
- h2: Kennismaking bij u thuis in Meerssen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Wij zijn er
- h2: Wat wij van Meerssen weten.
- h2: Palliatieve zorg in Meerssen, per uur of per nacht
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Palliatieve zorg in Meerssen, kort beantwoord.
- h2: Bel ons, wij denken mee.
- h3: Ook in Meerssen
- h3: Palliatieve zorg ook in

**Na** (490 woorden)

- h1: Palliatieve zorg in Meerssen, door een vast gezicht.
- h2: Thuis, met rust en nabijheid.
- h3: Comfortzorg
- h3: Aanwezigheid
- h3: Steun voor de familie
- h3: Afstemming
- h2: Kennismaking bij u thuis in Meerssen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Wij zijn er
- h2: Wat wij van Meerssen weten.
- h2: Palliatieve zorg in Meerssen, per uur of per nacht
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Palliatieve zorg in Meerssen, kort beantwoord.
- h2: Bel ons, wij denken mee.
- h3: Ook in Meerssen
- h3: Palliatieve zorg ook in

### `/zorg/palliatieve-zorg/valkenburg-aan-de-geul`

**Voor** (542 woorden)

- h1: Palliatieve zorg in Valkenburg aan de Geul, door een vast gezicht.
- h2: Thuis, met rust en nabijheid.
- h3: Comfortzorg
- h3: Aanwezigheid
- h3: Steun voor de familie
- h3: Afstemming
- h2: Kennismaking bij u thuis in Valkenburg aan de Geul, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Wij zijn er
- h2: Wat wij van Valkenburg aan de Geul weten.
- h2: Palliatieve zorg in Valkenburg aan de Geul, per uur of per nacht
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Palliatieve zorg in Valkenburg aan de Geul, kort beantwoord.
- h2: Bel ons, wij denken mee.
- h3: Ook in Valkenburg aan de Geul
- h3: Palliatieve zorg ook in

**Na** (542 woorden)

- h1: Palliatieve zorg in Valkenburg aan de Geul, door een vast gezicht.
- h2: Thuis, met rust en nabijheid.
- h3: Comfortzorg
- h3: Aanwezigheid
- h3: Steun voor de familie
- h3: Afstemming
- h2: Kennismaking bij u thuis in Valkenburg aan de Geul, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Wij zijn er
- h2: Wat wij van Valkenburg aan de Geul weten.
- h2: Palliatieve zorg in Valkenburg aan de Geul, per uur of per nacht
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Palliatieve zorg in Valkenburg aan de Geul, kort beantwoord.
- h2: Bel ons, wij denken mee.
- h3: Ook in Valkenburg aan de Geul
- h3: Palliatieve zorg ook in

### `/zorg/palliatieve-zorg/sittard-geleen`

**Voor** (491 woorden)

- h1: Palliatieve zorg in Sittard-Geleen, door een vast gezicht.
- h2: Thuis, met rust en nabijheid.
- h3: Comfortzorg
- h3: Aanwezigheid
- h3: Steun voor de familie
- h3: Afstemming
- h2: Kennismaking bij u thuis in Sittard-Geleen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Wij zijn er
- h2: Wat wij van Sittard-Geleen weten.
- h2: Palliatieve zorg in Sittard-Geleen, per uur of per nacht
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Palliatieve zorg in Sittard-Geleen, kort beantwoord.
- h2: Bel ons, wij denken mee.
- h3: Ook in Sittard-Geleen
- h3: Palliatieve zorg ook in

**Na** (491 woorden)

- h1: Palliatieve zorg in Sittard-Geleen, door een vast gezicht.
- h2: Thuis, met rust en nabijheid.
- h3: Comfortzorg
- h3: Aanwezigheid
- h3: Steun voor de familie
- h3: Afstemming
- h2: Kennismaking bij u thuis in Sittard-Geleen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Wij zijn er
- h2: Wat wij van Sittard-Geleen weten.
- h2: Palliatieve zorg in Sittard-Geleen, per uur of per nacht
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Palliatieve zorg in Sittard-Geleen, kort beantwoord.
- h2: Bel ons, wij denken mee.
- h3: Ook in Sittard-Geleen
- h3: Palliatieve zorg ook in

### `/zorg/palliatieve-zorg/heerlen`

**Voor** (486 woorden)

- h1: Palliatieve zorg in Heerlen, door een vast gezicht.
- h2: Thuis, met rust en nabijheid.
- h3: Comfortzorg
- h3: Aanwezigheid
- h3: Steun voor de familie
- h3: Afstemming
- h2: Kennismaking bij u thuis in Heerlen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Wij zijn er
- h2: Wat wij van Heerlen weten.
- h2: Palliatieve zorg in Heerlen, per uur of per nacht
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Palliatieve zorg in Heerlen, kort beantwoord.
- h2: Bel ons, wij denken mee.
- h3: Ook in Heerlen
- h3: Palliatieve zorg ook in

**Na** (486 woorden)

- h1: Palliatieve zorg in Heerlen, door een vast gezicht.
- h2: Thuis, met rust en nabijheid.
- h3: Comfortzorg
- h3: Aanwezigheid
- h3: Steun voor de familie
- h3: Afstemming
- h2: Kennismaking bij u thuis in Heerlen, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Wij zijn er
- h2: Wat wij van Heerlen weten.
- h2: Palliatieve zorg in Heerlen, per uur of per nacht
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Palliatieve zorg in Heerlen, kort beantwoord.
- h2: Bel ons, wij denken mee.
- h3: Ook in Heerlen
- h3: Palliatieve zorg ook in

### `/zorg/palliatieve-zorg/beek`

**Voor** (484 woorden)

- h1: Palliatieve zorg in Beek, door een vast gezicht.
- h2: Thuis, met rust en nabijheid.
- h3: Comfortzorg
- h3: Aanwezigheid
- h3: Steun voor de familie
- h3: Afstemming
- h2: Kennismaking bij u thuis in Beek, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Wij zijn er
- h2: Wat wij van Beek weten.
- h2: Palliatieve zorg in Beek, per uur of per nacht
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Palliatieve zorg in Beek, kort beantwoord.
- h2: Bel ons, wij denken mee.
- h3: Ook in Beek
- h3: Palliatieve zorg ook in

**Na** (484 woorden)

- h1: Palliatieve zorg in Beek, door een vast gezicht.
- h2: Thuis, met rust en nabijheid.
- h3: Comfortzorg
- h3: Aanwezigheid
- h3: Steun voor de familie
- h3: Afstemming
- h2: Kennismaking bij u thuis in Beek, meestal binnen 48 uur.
- h3: Zorgvraag stellen
- h3: Kennismaking binnen 48 uur
- h3: Wij zijn er
- h2: Wat wij van Beek weten.
- h2: Palliatieve zorg in Beek, per uur of per nacht
- h2: Via pgb, Wmo, Wlz of particulier
- h2: Palliatieve zorg in Beek, kort beantwoord.
- h2: Bel ons, wij denken mee.
- h3: Ook in Beek
- h3: Palliatieve zorg ook in
