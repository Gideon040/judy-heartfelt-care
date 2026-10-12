Je werkt autonoom aan het redesign van de website van Judy Heartfelt Care (live op judy-heartfelt-care.vercel.app). Stel geen vragen. Neem zelf de meest redelijke beslissing en noteer die.

LEES EERST
1. redesign/LEESMIJ.md (volledig)
2. redesign/prototype.html. Open het in Playwright en bekijk elke pagina via de balk linksonder, op desktop en op 375px.
3. De repo zelf: framework, routes, componenten, waar de teksten staan (pagina's, data-bestanden of CMS), metadata en schema.

HET ALLERBELANGRIJKSTE
Alle SEO-teksten blijven behouden. Dat zijn:
- elke bestaande alinea en kop;
- elke FAQ-vraag en elk FAQ-antwoord;
- elke interne link en alt-tekst;
- alle meta en schema.

Ze komen letterlijk terug. Niets inkorten, samenvatten of herschrijven.

Maak VOOR je begint per pagina een woordtelling en een koppenlijst, en DAARNA opnieuw, in redesign/tekstcontrole.md. Daalt een pagina in woorden of mist er een kop, herstel dat dan eerst voordat je verder gaat.

Zet deze regel ook bovenaan CLAUDE.md in de repo (maak het bestand aan als het niet bestaat):
"ALLE BESTAANDE SEO-TEKSTEN BLIJVEN LETTERLIJK BEHOUDEN. Design en code mogen veranderen, tekst, koppen, FAQ's, links, meta en schema niet (behalve em dashes vervangen)."

BRANCH
Werk op een nieuwe branch `redesign`. Niet naar main pushen.

VOLGORDE
1. Gedeelde basis:
   - tokens en fonts;
   - knoppen, header met topbar, footer en de mobiele actiebalk;
   - golfovergang-component en accentwoord-component met de hartlijn;
   - reveal-hook;
   - illustratieset als losse SVG-componenten.
2. Homepage:
   - hero zonder pill en zonder zwevende kaartjes;
   - beloftebalk;
   - zorgpanelen;
   - Zo werkt het, met de deurfoto en vier punten;
   - Judy-blok, vergoeding, regio's, CTA.
3. Dienstpagina-template (alle zorgvormen), met de situaties als uitklappende panelen.
4. Over ons, met het portret zonder lijn.
5. Tarieven en vergoeding.
6. Locatiepagina's, kennisbank, contact en de overige pagina's met dezelfde bouwstenen.

PER STAP
- Kleine commits in het Nederlands.
- Build draaien en screenshots maken op desktop en 375px, in redesign/screenshots/. Vergelijk ze met het prototype.
- Werk de tekstcontrole voor die pagina bij.

HARDE REGELS
- Geen URL's wijzigen. Geen tekst verwijderen.
- Niets verzinnen. Ontbrekende feiten worden [JUDY: ...] en worden in productie niet getoond. Zie de open punten in LEESMIJ.md: plaatsen in regio Weert, AGB-code, talen.
- Geen em dashes in nieuwe tekst.
- Animaties uit bij prefers-reduced-motion. Alles leesbaar zonder JavaScript.
- Lighthouse vóór en na meten; de score mag niet omlaag.
- Push de branch als je klaar bent, zodat Vercel een preview maakt. Niet naar productie deployen.

AFRONDEN
Schrijf redesign/overdracht.md met:
- wat er per commit is gedaan;
- de tekstcontrole (woorden voor en na per pagina);
- Lighthouse voor en na;
- de preview-URL;
- de open punten voor Judy;
- je eigen beslissingen.
