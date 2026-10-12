# Redesign Judy Heartfelt Care: designspecificatie

`prototype.html` is het goedgekeurde ontwerp (één bestand, open het in de browser). Linksonder zit een balk om te wisselen tussen Home, Begeleiding, Over ons en Tarieven.

Uitgangspunt: **de warmte van de huidige site blijft**. Het gaat om dezelfde kleuren, de schuine serif-accenten en de boogfoto's. Het redesign voegt één signatuur toe (de hartlijn), maakt de site rustiger en laat haar meer als organisatie ogen. Het is geen nieuwe huisstijl.

## REGEL 1: ALLE SEO-TEKSTEN BLIJVEN BEHOUDEN

**Dit is het belangrijkste punt van de opdracht.** Het design is alleen de verpakking.

- Alles komt **letterlijk** terug in het nieuwe design, er gaat niets verloren:
  - elke bestaande alinea en elke H1, H2 en H3;
  - elke FAQ-vraag en elk FAQ-antwoord;
  - elke interne link en elke alt-tekst;
  - elke meta-title, meta-description en elk JSON-LD-schema.
- Het prototype bevat de zichtbare teksten uit screenshots. Waar het prototype en de code verschillen, is **de code leidend** voor de tekst en het prototype voor de vormgeving.
- Op plekken met `[bestaand antwoord overnemen]` of `[korte omschrijving uit de code]` haal je de tekst letterlijk uit de huidige code.
- Niet toegestaan:
  - tekst inkorten, samenvatten of herschrijven;
  - tekst naar een andere pagina verplaatsen;
  - tekst achter een klik verstoppen waardoor hij niet in de HTML staat.
- **Controle verplicht:** maak per pagina voor en na het redesign een woordtelling en een koppenlijst, in `redesign/tekstcontrole.md`. Het aantal woorden mag niet dalen en elke kop moet terugkomen. Klopt dat niet, dan eerst herstellen.

## REGEL 2: Niets verzinnen

Ontbreekt een feit, zet dan `[JUDY: ...]` in de code. Toon dat in productie niet, en zet het op de lijst in de overdracht. Deze punten staan nu open:

- **Plaatsen in regio Weert:**
  - het prototype noemt Weert, Nederweert, Stramproy, Budel en Leudal;
  - dit is nog niet bevestigd, dus maak alleen locatiepagina's voor plaatsen die al in de code bestaan;
  - nieuwe plaatsen komen op de lijst.
- **AGB-code 41552677:** staat op de huidige site, maar volgens eerdere informatie heeft Judy geen AGB-code. Laat het nummer niet zien totdat Gideon het bevestigt.
- **Talen:** de site noemt Nederlands, Engels, Papiaments en Spaans. Laat staan wat in de code staat en noteer het als controlepunt.
- **Korte omschrijvingen** voor 24-uurszorg en ambulante begeleiding: haal ze uit de bestaande dienstpagina's.

## Tokens

| Token | Waarde | Gebruik |
|---|---|---|
| night | `#2A1C2C` | hero, donkere secties, topbar |
| night-2 | `#3A2840` | kaarten op donker |
| cream | `#FFF9F3` | basisachtergrond |
| peach | `#FCEBDD` | afwisselende sectie, tegels, chips |
| peach-2 | `#F7D9C2` | randen, vlakken in illustraties |
| ink | `#24172A` | koppen |
| text | `#4A3E4F` | lopende tekst |
| muted | `#7A6E7E` | bijschriften |
| line | `#EFE2D6` | lijnen |
| acc | `#D0602E` (hover `#B24C1E`) | knoppen, accentwoorden |
| acc-l | `#F39A6B` | accent op donker, hartlijn |
| ok | `#5FD08D` | "geen wachtlijst"-bolletje |

**Fonts** (via `next/font/google`, of de bestaande font-aanpak van de repo):
- **Plus Jakarta Sans** (400 tot 800) voor alles.
- **Fraunces italic** (500 tot 700) alleen voor de accentwoorden in koppen.

**Vormen en knoppen:**
- Ronde vormen: kaarten 22 tot 26px, knoppen en pills volledig rond, foto's als boog met een rond bovenblad en hoeken van 28px onder.
- Knoppen: oranje gevuld met een zachte schaduw, of met een omlijning. De pijl schuift 4px op bij hover.

## Signatuur-elementen (moeten erin)

1. **Hartlijn onder accentwoorden:** een handgetekende golflijn (SVG-pad) die zich onder het schuine accentwoord "schrijft" wanneer de kop in beeld komt. Elke H1 en H2 heeft één accentwoord, net als nu.
2. **Hero:**
   - donker aubergine met een zacht ademende oranje gloed rechtsboven;
   - koptekst die regel voor regel omhoog schuift;
   - de foto komt als boog van onder naar boven op en zoomt licht uit;
   - daarna tekent de hartlijn rond de boog, eindigend in een klein hartje;
   - onder de knoppen het blokje met Judy's foto, naam en functie.
   - **Geen pill boven de H1 en geen zwevende kaartjes op de foto.**
3. **Zachte golfovergangen** tussen secties (SVG), altijd in de kleur van de volgende sectie, zodat er nooit een witte rand of kleurnaad zichtbaar is.
4. **Beloftebalk** direct onder de hero: een witte kaart die half over de golf valt, met vier punten en kleine bewegende illustraties.
5. **Uitklappende fotopanelen (één ontwerp, geen iconen):**
   - **Op de homepage** voor de zes zorgvormen; Nachtzorg staat standaard open.
   - **Op dienstpagina's** voor "Herkent u een van deze situaties?".
   - **Desktop:** hover klapt het paneel open (flex-grow-transitie). Een dicht paneel toont de naam verticaal. Een open paneel toont titel, tekst en een oranje label.
   - **Mobiel:** horizontaal swipen met scroll-snap, alle panelen open.
   - Onder de zorgpanelen staat een regel met tekstlinks: 24-uurszorg, Ambulante begeleiding en Culturele dagbesteding in Arnhem (label "binnenkort").
6. **Zo werkt het** (donker):
   - eerst de deurfoto in een perzikkleurig kader, met links en rechts de vier punten van de huidige site: Vaste zorgverlener, Ook in het weekend, Samen met IG en verpleegkundigen, Geen wachtlijst;
   - daaronder drie stapkaarten met illustraties: telefoon met hart, tafel met kopjes en 48u, huis met hart en vinkje;
   - op desktop verbindt een gestippelde hartlijn de stappen; die tekent mee met scrollen en er reist een hartje over.
7. **Bewegende illustraties** in perzikkleurige tegels, in dezelfde lijnstijl als de huidige site: een kloppend hart, stoom, telefoongolven, een kaarsvlam, een zwaaiende bezem en vinkjes. Gebruik ze alleen in de beloftebalk, de stappen en de kleine kaarten, nooit in de zorgpanelen.
8. **Judy-blok:**
   - portret als boog, zonder lijn eromheen;
   - quote in Fraunces italic;
   - drie feitenkaartjes (9 jaar, 4 talen, Hbo-V in opleiding) en specialismen als chips.
9. **Vergoeding:** vier kaarten (pgb, Wmo, Wlz, particulier). Particulier is donker, met het label "Snelst te starten".
10. **Regio's:**
    - een schakelaar met Regio Weert en Regio Maastricht, met plaats-chips;
    - een kaart van Limburg met een kloppend hartje als pin;
    - de niet-gekozen regio vervaagt.
11. **CTA-kaart:** een perzikkleurig verloop met een boogfoto en een illustratietegel. De tekst wisselt per pagina, zoals nu.
12. **FAQ** als `<details>`; het plusje draait naar een kruisje en het open item krijgt een oranje rand.

## Templates

| Template | Geldt voor | Voorbeeld in prototype |
|---|---|---|
| Homepage | `/` | Home |
| Dienstpagina | alle `/zorg/*` | Begeleiding |
| Over ons | `/over-ons` | Over ons (portret zonder lijn, werkwijze met drie kaarten, registraties onderaan) |
| Tarieven | `/tarieven` (of de bestaande URL) | Tarieven |
| Locatiepagina's, kennisbank, contact, juridische pagina's | bestaande URL's | Geen eigen voorbeeld. Bouw ze uit dezelfde bouwstenen: hero, split-tekst, kleine kaarten, panelen, FAQ en CTA. |

## Techniek

- Animaties met CSS en één kleine reveal-hook (IntersectionObserver). Geen animatielibraries.
- Alles is zichtbaar zonder JavaScript. De reveal-klasse komt pas met JS, en alleen voor elementen onder de vouw.
- Bij `prefers-reduced-motion: reduce` gaan alle animaties uit. Lijnen staan dan direct getekend en panelen gewoon open.
- **Geen** `overflow-x:hidden` op `body`, want dat breekt `position:sticky`. Gebruik `overflow-x:clip` op `html`.
- Foto's: de originelen uit de repo (AVIF/WebP via `next/image`). De foto's in het prototype zijn uitsneden van lage resolutie en alleen een voorbeeld.
- Mobiel testen op 375px: geen horizontale scroll, en een vaste actiebalk onderin (Bellen en Zorgvraag stellen).
- Lighthouse mag niet omlaag ten opzichte van de huidige productie.
