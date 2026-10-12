# Overdracht redesign Judy Heartfelt Care

Branch: `redesign` (gepusht, niet gemerged, niet naar productie gedeployd).
Ontwerp: `redesign/prototype.html` en `redesign/LEESMIJ.md`.

## Preview

- Vercel heeft automatisch een preview gebouwd van de laatste commit:
  https://judy-heartfelt-care-git-redesign-gideons-projects-bab43448.vercel.app
  (vaste branch-URL; de URL van de losse build staat in GitHub onder Deployments).
- **Let op:** de preview staat achter Vercel Deployment Protection (inloggen
  met het Vercel-account). Daarom is Lighthouse niet op de preview gemeten maar
  lokaal (zie hieronder).

## Wat er per commit is gedaan

| Commit | Inhoud |
|---|---|
| `91aff50` | Opdracht en prototype in de repo (`REDESIGN-PROMPT.md`, `redesign/`), regel bovenaan `CLAUDE.md`, meetscripts in `redesign/tools/`, nulmeting tekstcontrole en Lighthouse van productie. |
| `bf96a60` | Gedeelde basis: tokens uit de LEESMIJ als CSS-variabelen, Plus Jakarta Sans + Fraunces italic via `next/font`, knoppen (pijl schuift 4px), topbar + sticky kop met mobiel menu (`<details>`, werkt zonder JS), voet, vaste mobiele actiebalk (Bellen / Zorgvraag stellen), `Golf` (golfovergang in de kleur van de volgende sectie), `Accent` (Fraunces-accentwoord met hartlijn), `Reveal` (één IntersectionObserver-hook), illustratieset als losse SVG-componenten, foto-register met alt-teksten, `JudyNoot` voor open punten. |
| `9c88384` | Homepage: hero zonder pill en zwevende kaartjes, koptekst regel voor regel, boogfoto die opkomt en uitzoomt, hartlijn rond de boog met hartje; beloftebalk half over de golf; zes zorgpanelen (Nachtzorg open) met de regel "Ook: …"; Zo werkt het met deurfoto, vier punten en drie stappen met meelopende hartlijn en reizend hartje; Judy-blok; vergoeding (Particulier donker, "Snelst te starten"); regio's met kaart van Limburg; CTA-kaart. |
| `6e5d6d8` | Dienstpagina-template voor alle zes zorgvormen: hero met boogfoto, "Wat is" als split met taken als kleine kaarten met illustratie (nachtzorg: tijdlijn + waak/slaap), situaties als uitklappende fotopanelen, stappen, tarief + plaatsen, FAQ, CTA. |
| `a5c5319` | Over ons: verhaal met portret als boog zonder lijn, het gezicht met drie kaarten, werkwijze als bento (foto, licht, donker), registraties onderaan. |
| `24ef974` | Tarieven en vergoeding: tarieftabel, vier routekaarten, hulp bij de aanvraag met boogfoto en illustratietegel, FAQ. |
| `9c08b0b` | Dienst×plaatspagina's (36), werkgebied, veelgestelde vragen, contact, zorgvraag-wizard, privacy, klachtenregeling, algemene voorwaarden en reviews uit dezelfde bouwstenen. Kennisbank en bedankpagina (startpakket) alleen via de CSS-hooks. |
| `e40f9c1` | Fixes na controle: reveal-klasse heette `in` en botste met de invoerveldklasse `.in` (kaarten werden wit); geen `scale(Infinity)` meer als de stappenlijn op mobiel verborgen is (consolefout); hero-animaties zonder opacity zodat de LCP niet wacht. |
| `18a9cad` | Tekstcontrole na, definitieve screenshots (JPG, desktop 1440 en 375px) in `redesign/screenshots/`, regioschakelaar op inhoudsbreedte. |
| (laatste) | Op verzoek van Gideon: alle `tijdelijk-`-foto's verwijderd en vervangen door Judy's eigen foto's; prestatie-aanpassingen (zie Lighthouse); Lighthouse na en deze overdracht. |

## Tekstcontrole

Volledig in `redesign/tekstcontrole.md` (woorden en koppenlijst per pagina, voor en na).

- 54 pagina's gemeten. Alle koppen terug op hetzelfde niveau, alle FAQ's
  letterlijk, meta (title, description, canonical) en JSON-LD op alle pagina's
  identiek, alle interne links en alt-teksten nog aanwezig.
- 53 pagina's gelijk of meer woorden. `/contact` gaat van 110 naar 108 woorden
  omdat de AGB-code daar niet meer zichtbaar is (opdracht uit de LEESMIJ).
  Zet `agbTonen: true` in `site.config.ts` en het is weer 110.

| Pagina | Voor | Na |
|---|---:|---:|
| `/` | 581 | 603 |
| `/over` | 318 | 334 |
| `/tarieven-en-vergoeding` | 568 | 578 |
| `/werkgebied` | 181 | 181 |
| `/veelgestelde-vragen` | 328 | 328 |
| `/contact` | 110 | 108 |
| `/zorgvraag` | 52 | 52 |
| `/privacy` | 239 | 239 |
| `/klachtenregeling` | 167 | 167 |
| `/algemene-voorwaarden` | 184 | 184 |
| `/kennisbank` | 23 | 23 |
| `/bedankt` | 20 | 20 |
| `/zorg/persoonlijke-verzorging` | 490 | 505 |
| `/zorg/begeleiding` | 452 | 467 |
| `/zorg/nachtzorg` | 587 | 601 |
| `/zorg/dagbesteding` | 481 | 495 |
| `/zorg/huishoudelijke-hulp` | 441 | 460 |
| `/zorg/palliatieve-zorg` | 495 | 517 |
| 36 dienst×plaatspagina's | 454 t/m 599 | gelijk aan voor |

## Lighthouse

Gemeten met Lighthouse 12 (Chrome, standaard mobiele en desktopinstellingen),
mediaan van 3 runs per pagina. Ruwe data in `redesign/lighthouse-*.json`,
script `redesign/tools/lh.mjs`.

**Voor, productie** (judy-heartfelt-care.vercel.app, gemeten bij de start):

| Pagina | Mobiel P / A / BP / SEO | Desktop P / A / BP / SEO |
|---|---|---|
| `/` | 89 / 95 / 100 / 100 | 100 / 95 / 100 / 100 |
| `/zorg/begeleiding` | 98 / 95 / 100 / 100 | 100 / 95 / 100 / 100 |
| `/over` | 95 / 95 / 100 / 100 | 100 / 95 / 100 / 100 |
| `/tarieven-en-vergoeding` | 95 / 95 / 100 / 100 | 100 / 95 / 100 / 100 |
| `/zorg/nachtzorg/maastricht` | 97 / 95 / 100 / 100 | 100 / 95 / 100 / 100 |

**Voor en na, eerlijk naast elkaar.** De Vercel-preview zit achter inlog, dus
`main` en `redesign` zijn allebei als productiebuild lokaal gedraaid en direct
na elkaar gemeten (zelfde machine, zelfde moment):

| Pagina | Mobiel prestaties | Mobiel toegankelijkheid | Desktop prestaties | Desktop toegankelijkheid | BP / SEO |
|---|---|---|---|---|---|
| `/` | 95 → 94 | 95 → 100 | 100 → 100 | 95 → 100 | 100 / 100 |
| `/zorg/begeleiding` | 97 → 97 | 95 → 100 | 100 → 100 | 95 → 100 | 100 / 100 |
| `/over` | 96 → 96 | 95 → 100 | 100 → 100 | 95 → 100 | 100 / 100 |
| `/tarieven-en-vergoeding` | 97 → 97 | 95 → 100 | 100 → 100 | 95 → 100 | 100 / 100 |
| `/zorg/nachtzorg/maastricht` | 95 → 96 | 95 → 100 | 100 → 100 | 95 → 100 | 100 / 100 |

CLS is overal 0. Toegankelijkheid gaat overal van 95 naar 100.

Eerlijk over home mobiel: in deze laatste meting 95 → 94 (LCP 2,93 → 3,08 s).
De home-score van `main` zelf schommelde in mijn metingen tussen 92 en 95, en
die van het redesign tussen 92 en 95; in een eerdere ronde stond het redesign
juist hoger (95 tegen 93). Het verschil is één gesimuleerde netwerkronde: de
home-HTML is 16,8 kB gzip tegen 16,1 kB bij main. Ik was bezig de HTML verder
te verkleinen toen de foto's vervangen moesten worden; **dit punt staat nog
open**, het meten moet na livegang op productie herhaald worden (daar is de
preview-inlog geen probleem).

Wat ik voor prestaties heb gedaan:
- Herofoto's zonder preload/hoge prioriteit (de LCP is de lead-tekst, niet de foto).
- `content-visibility: auto` op inhoud onder de vouw (niet op donkere secties
  en niet op de beloftebalk), zodat lazy foto's niet vóór de eerste paint starten.
- SVG-illustratieanimaties pauzeren buiten beeld (`.pauze`, via de reveal-hook).
- Pulsbolletje in de topbar met transform/opacity in plaats van box-shadow.
- Minder breedtes in `images.deviceSizes`/`imageSizes` (kortere srcset, kleinere HTML).
- Geen backdrop-blur op de sticky kop en de mobiele balk.

## Open punten voor Judy (en Gideon)

In de code staan open punten als `JudyNoot` / `[JUDY: …]`. Die zijn alleen in
`npm run dev` zichtbaar, nooit in een productiebuild of Vercel-preview.

1. **Regio Weert.** Het prototype noemt regio Weert met Weert, Nederweert,
   Stramproy, Budel en Leudal. Niet bevestigd, dus geen locatiepagina's gemaakt.
   In productie toont de site alleen regio Maastricht (geen schakelaar). In dev
   staat Weert erbij met een [JUDY]-notitie. Bevestigd? Zet in
   `site.config.ts` bij `regios` Weert op `bevestigd: true` en voeg de plaatsen
   toe aan `werkgebied` (met eigen ligging/context-teksten, anti-doorway).
2. **AGB-code 41552677.** Verborgen op home, over ons, contact en in de voet
   (`agbTonen: false`). **Staat nog wel in het JSON-LD-schema** (schema mocht
   niet wijzigen). Heeft Judy geen AGB-code, haal hem dan ook uit
   `app/layout.tsx` (identifier) en uit `site.agb`.
3. **Talen.** De site noemt Nederlands, Engels, Papiaments en Spaans (en
   `knowsLanguage` in het schema). Ongewijzigd gelaten; laten bevestigen.
4. **24-uurszorg en Ambulante begeleiding.** In de code bestaan hier geen
   dienstpagina's en dus ook geen korte omschrijvingen. In de regel "Ook: …"
   onder de zorgpanelen staat 24-uurszorg daarom als tekst zonder link en
   linkt Ambulante begeleiding naar `/zorg/begeleiding`. Als er eigen pagina's
   moeten komen: teksten van Judy nodig.
5. Bestaande punten uit `LEESMIJ.md` (root) blijven staan: vestigingsplaats,
   eigen zin per plaats, Wtza, geschilleninstantie, klachtenfunctionaris,
   aansprakelijkheidsverzekering.
7. **Foto's.** Er zijn nu alleen negen eigen foto's (plus het portret), dus
   sommige komen op meerdere pagina's terug. Meer foto's van Judy (bijv. voor
   begeleiding en huishoudelijke hulp) maken de dienstpagina's sterker.
6. **Startpakket:** de kennisbankpagina (`app/kennisbank/page.tsx`) bevat een em
   dash ("vergoeding — geschreven door"). Dat bestand mag volgens `CLAUDE.md`
   niet lokaal worden aangepast; graag in `_zorgbaar-basis` oplossen en
   doorkopiëren. Hetzelfde geldt voor de twee bestaande lint-fouten
   (`<a>` i.p.v. `<Link>`) in `app/kennisbank/[slug]/page.tsx`.

## Eigen beslissingen

- **Mappen.** De opdracht stond in `judy-redesign/`; ik heb `REDESIGN-PROMPT.md`
  en `redesign/` naar de root verplaatst, zoals de opdracht ze noemt.
- **Code leidend voor tekst.** Waar prototype en code verschillen (bijv. de H1
  "Thuiszorg met een vast gezicht in Maastricht en omstreken" i.p.v. "…, dag en
  nacht.", de kop "Maak kennis met Judy" i.p.v. "Eén aanspreekpunt, een vast
  team.", het volledige citaat, "Zuid-Limburg" i.p.v. "regio's Weert en
  Maastricht") staat de tekst uit de code erin.
- **Geen URL's gewijzigd.** Over ons blijft `/over` (prototype: `/over-ons`).
  In het menu is "Werkgebied" bijgekomen (prototype: "Regio's") naar de
  bestaande pagina `/werkgebied`.
- **Zwevende kaartjes en trustbalk.** De teksten van de oude zwevende kaartjes
  staan nu als rustige feitenrij onder de knoppen (home en subpagina's); de
  trustbalk staat als registratieregel onder het Judy-blok; de vinkjesregels en
  "Direct plek voor nieuwe cliënten" zitten in de beloftebalk. Niets weg.
- **Eyebrows op subpagina's.** Het prototype heeft daar geen pill boven de H1,
  maar het bestaande eyebrow-label is tekst; om geen woorden te verliezen staat
  het als kleine pill tussen kruimelpad en H1. Op home is er geen pill.
- **Lopende tekstbanden** (marquee, `aria-hidden`) zijn weg, zoals in het
  prototype; de termen staan elders op de pagina of in de regel "Ook: …".
- **Labels in de situatiepanelen.** Het prototype gebruikt verzonnen labels
  ("vergeetachtig", "na een verlies"); ik gebruik de naam van de dienst om
  niets te verzinnen. Op home blijft het bestaande label "ook in het weekend".
- **Nieuwe kleine labels uit het prototype** zijn overgenomen waar ze geen feit
  toevoegen: "Snelst te starten", "Elke keer dezelfde", "Eén nummer", "Op
  papier", "Samenwerking", "uw vaste aanspreekpunt", knop "Kennismaken".
- **Tijdelijke foto's eruit (verzoek Gideon).** Alle `tijdelijk-`-bestanden
  zijn verwijderd. Vervangen door: begeleiding → `judy-14-formulier-pgb`,
  huishoudelijke hulp → `judy-10-bij-het-raam`, hero over ons →
  `judy-01-persoonlijke-verzorging`, hero tarieven en reviews →
  `judy-00-hero-keukentafel`, hero werkgebied en het plaatsblok op de
  locatiepagina's → `judy-07-voordeur`, CTA home → `judy-11-band-nachtzorg`.
  De alt-teksten van de verwijderde foto's ("Begeleider en cliënt in gesprek
  aan tafel", "Huishoudelijke hulp aan het werk in de keuken", "Familie neemt
  samen de kosten door", "Zorgverlener en cliënt lachen samen", "Kennismaking
  aan de voordeur", "Zorgverlener loopt met een oudere man met rollator door
  de straat") zijn daardoor weg: een alt-tekst moet de echte foto beschrijven,
  dus de nieuwe foto's hebben hun eigen, bestaande alt-tekst. Dit is de enige
  bewuste wijziging in alt-teksten.
- **Foto's.** Alleen de originelen uit `public/afbeeldingen` via `next/image`
  (AVIF/WebP aangezet in `next.config.ts`). Alt-teksten komen uit de bestaande
  code (`components/fotos.ts`); `judy-10-bij-het-raam.webp` werd nog niet
  gebruikt en kreeg een nieuwe beschrijvende alt-tekst.
- **Kleuren voor contrast.** De tokens uit de LEESMIJ staan erin. Voor kleine
  tekst en knoppen gebruik ik `--acc-d` (#B24C1E) en een iets donkerder muted
  (#6F6373), omdat #D0602E met witte tekst niet aan WCAG AA voldoet. Accentwoorden
  en grote koppen gebruiken een donkere tint van acc (#B8501F); op donker blijft
  het `acc-l`.
- **Zonder JavaScript.** Alle tekst staat in de server-HTML. Panelen werken met
  CSS (hover/focus), het mobiele menu met `<details>`, de regioschakelaar met
  radio-knoppen en `:has()`. De reveal-klasse komt alleen met JS en alleen op
  elementen onder de vouw; de hartlijn in de hero schrijft met CSS.
- **Reduced motion.** Alle animaties uit, lijnen direct getekend, panelen open
  op mobiel, reveal-blokken direct zichtbaar.
- **`overflow-x: clip` op `html`**, niet `overflow-x: hidden` op `body` (sticky kop).
- **Startpakketbestanden** (formulier, utm, analytics, schema, kennisbank,
  bedankt, sitemap, robots) niet aangepast; alleen gestyled via de hooks.
  Wel aangepast: `CLAUDE.md` (regel bovenaan, op verzoek) en `eslint.config.mjs`
  (map `redesign/` genegeerd).
- **Screenshots** in `redesign/screenshots/`: `proto-*` (prototype), `voor-*`
  (huidige site), `na-*` (redesign), elk desktop en mobiel (375px). Op geen
  enkele gemeten pagina horizontale scroll op 375px.
