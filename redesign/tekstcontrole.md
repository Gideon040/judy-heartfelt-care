# Tekstcontrole

Meetmethode (zie `redesign/tools/meet.mjs`): de server-HTML van elke pagina
(dus zonder JavaScript), alleen de inhoud van `<main>`, zonder `script`,
`style`, `svg` en elementen met `aria-hidden="true"`. Per pagina:
woorden, koppen (h1 t/m h4), tekstfragmenten per element, FAQ-vragen en
-antwoorden, links, alt-teksten, meta (title, description, canonical,
robots) en JSON-LD. `redesign/tools/vergelijk.mjs` controleert of elk
fragment van vóór letterlijk terugkomt (em dashes en apostrofvorm genegeerd).

Nulmeting: productiebuild van `main` (commit ec6f2b6), lokaal gemeten.
Ruwe data: `redesign/tekstcontrole-voor.json`.

## Nulmeting (voor)

| Pagina | Woorden voor | Woorden na | Verschil | Koppen voor | Koppen na | Status |
|---|---:|---:|---:|---:|---:|---|
| `/` | 581 | | | 16 | | |
| `/over` | 318 | | | 11 | | |
| `/tarieven-en-vergoeding` | 568 | | | 6 | | |
| `/werkgebied` | 181 | | | 6 | | |
| `/veelgestelde-vragen` | 328 | | | 7 | | |
| `/contact` | 110 | | | 4 | | |
| `/zorgvraag` | 52 | | | 1 | | |
| `/privacy` | 239 | | | 9 | | |
| `/klachtenregeling` | 167 | | | 6 | | |
| `/algemene-voorwaarden` | 184 | | | 9 | | |
| `/kennisbank` | 23 | | | 1 | | |
| `/bedankt` | 20 | | | 1 | | |
| `/zorg/persoonlijke-verzorging` | 490 | | | 19 | | |
| `/zorg/begeleiding` | 452 | | | 19 | | |
| `/zorg/nachtzorg` | 587 | | | 18 | | |
| `/zorg/dagbesteding` | 481 | | | 19 | | |
| `/zorg/huishoudelijke-hulp` | 441 | | | 19 | | |
| `/zorg/palliatieve-zorg` | 495 | | | 19 | | |
| `/zorg/persoonlijke-verzorging/maastricht` | 493 | | | 17 | | |
| `/zorg/persoonlijke-verzorging/meerssen` | 494 | | | 17 | | |
| `/zorg/persoonlijke-verzorging/valkenburg-aan-de-geul` | 546 | | | 17 | | |
| `/zorg/persoonlijke-verzorging/sittard-geleen` | 495 | | | 17 | | |
| `/zorg/persoonlijke-verzorging/heerlen` | 490 | | | 17 | | |
| `/zorg/persoonlijke-verzorging/beek` | 488 | | | 17 | | |
| `/zorg/begeleiding/maastricht` | 459 | | | 17 | | |
| `/zorg/begeleiding/meerssen` | 460 | | | 17 | | |
| `/zorg/begeleiding/valkenburg-aan-de-geul` | 512 | | | 17 | | |
| `/zorg/begeleiding/sittard-geleen` | 461 | | | 17 | | |
| `/zorg/begeleiding/heerlen` | 456 | | | 17 | | |
| `/zorg/begeleiding/beek` | 454 | | | 17 | | |
| `/zorg/nachtzorg/maastricht` | 546 | | | 15 | | |
| `/zorg/nachtzorg/meerssen` | 547 | | | 15 | | |
| `/zorg/nachtzorg/valkenburg-aan-de-geul` | 599 | | | 15 | | |
| `/zorg/nachtzorg/sittard-geleen` | 548 | | | 15 | | |
| `/zorg/nachtzorg/heerlen` | 543 | | | 15 | | |
| `/zorg/nachtzorg/beek` | 541 | | | 15 | | |
| `/zorg/dagbesteding/maastricht` | 474 | | | 17 | | |
| `/zorg/dagbesteding/meerssen` | 475 | | | 17 | | |
| `/zorg/dagbesteding/valkenburg-aan-de-geul` | 527 | | | 17 | | |
| `/zorg/dagbesteding/sittard-geleen` | 476 | | | 17 | | |
| `/zorg/dagbesteding/heerlen` | 471 | | | 17 | | |
| `/zorg/dagbesteding/beek` | 469 | | | 17 | | |
| `/zorg/huishoudelijke-hulp/maastricht` | 460 | | | 17 | | |
| `/zorg/huishoudelijke-hulp/meerssen` | 461 | | | 17 | | |
| `/zorg/huishoudelijke-hulp/valkenburg-aan-de-geul` | 513 | | | 17 | | |
| `/zorg/huishoudelijke-hulp/sittard-geleen` | 462 | | | 17 | | |
| `/zorg/huishoudelijke-hulp/heerlen` | 457 | | | 17 | | |
| `/zorg/huishoudelijke-hulp/beek` | 455 | | | 17 | | |
| `/zorg/palliatieve-zorg/maastricht` | 489 | | | 17 | | |
| `/zorg/palliatieve-zorg/meerssen` | 490 | | | 17 | | |
| `/zorg/palliatieve-zorg/valkenburg-aan-de-geul` | 542 | | | 17 | | |
| `/zorg/palliatieve-zorg/sittard-geleen` | 491 | | | 17 | | |
| `/zorg/palliatieve-zorg/heerlen` | 486 | | | 17 | | |
| `/zorg/palliatieve-zorg/beek` | 484 | | | 17 | | |

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

### `/tarieven-en-vergoeding`

**Voor** (568 woorden)

- h1: Wat kost thuiszorg bij Judy Heartfelt Care?
- h2: Per zorgvorm, zonder verrassingen.
- h2: Vier routes, eerlijk uitgelegd.
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

### `/veelgestelde-vragen`

**Voor** (328 woorden)

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

### `/zorgvraag`

**Voor** (52 woorden)

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

### `/klachtenregeling`

**Voor** (167 woorden)

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

### `/kennisbank`

**Voor** (23 woorden)

- h1: Kennisbank

### `/bedankt`

**Voor** (20 woorden)

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
