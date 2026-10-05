// Teksten per dienst. Nachtzorg komt letterlijk uit het ontwerp; de andere
// diensten volgen hetzelfde sjabloon (structuurspec 4.2 en 4.3).
// Alleen wat uit de intake vaststaat: geen verzonnen cijfers of beloftes.

export type Kop = { voor: string; it: string; na?: string };
const k = (voor: string, it: string, na = ""): Kop => ({ voor, it, na });

export interface DienstInhoud {
  kaart: string; // korte zin op de home-kaart
  afbeelding: string;
  positie: string;
  alt: string;
  heroKop: Kop;
  heroLead: string;
  ctaKnop: string;
  watKop: Kop;
  watTekst: string;
  // Wat er concreet gebeurt; bij nachtzorg vervangen door waak/slaap-blok.
  taken: { titel: string; tekst: string }[];
  band?: { afbeelding: string; alt: string; eb: string; kop: Kop; lead: string };
  voorWieKop: Kop;
  voorWie: { titel: string; tekst: string }[];
  stappenKop: Kop;
  stappen: [string, string, string];
  stap3: string;
  tariefKop: Kop;
  tariefTekst: string;
  plaatsenKop: Kop;
  faq: { vraag: string; antwoord: string }[];
  cta: { label: string; kop: Kop };
  // Dienst×plaats: één eigen zin per dienst in de intro, en de korte uitleg.
  plaatsZin: string;
  plaatsWatKop: Kop;
  plaatsWatTekst: string;
  plaatsCta: Kop;
}

export const inhoud: Record<string, DienstInhoud> = {
  "persoonlijke-verzorging": {
    kaart: "Hulp bij wassen, aankleden en de dagelijkse verzorging, in uw eigen tempo.",
    afbeelding: "/afbeeldingen/judy-01-persoonlijke-verzorging.webp",
    positie: "45% 32%",
    alt: "Zorgverlener helpt een oudere vrouw bij de ochtendverzorging",
    heroKop: k("Persoonlijke verzorging aan huis, ", "in uw eigen tempo", "."),
    heroLead:
      "Hulp bij wassen, aankleden en de dagelijkse verzorging, door een vaste zorgverlener. Van één uur per week tot elke ochtend, ook in het weekend.",
    ctaKnop: "Verzorging aanvragen",
    watKop: k("Zelf blijven doen wat kan, ", "hulp bij wat niet meer lukt", "."),
    watTekst:
      "Persoonlijke verzorging is de hulp bij alles wat met het eigen lichaam te maken heeft. Wij nemen het niet over, wij doen het samen. Wat u zelf nog kunt, blijft u zelf doen. Zo blijft de dag van u.",
    taken: [
      { titel: "Wassen en douchen", tekst: "Aan de wastafel, onder de douche of op bed, zoals het voor u het prettigst is." },
      { titel: "Aankleden", tekst: "Kleding kiezen, aantrekken en hulp met steunkousen." },
      { titel: "Verzorging", tekst: "Haren, scheren, mondverzorging en huidverzorging." },
      { titel: "Toilet en eten", tekst: "Hulp bij toiletgang, en bij eten en drinken waar dat nodig is." },
    ],
    voorWieKop: k("Herkent u een van deze ", "situaties?"),
    voorWie: [
      { titel: "Na een ziekenhuisopname", tekst: "Thuis herstellen lukt, maar douchen en aankleden nog niet alleen." },
      { titel: "Dementie", tekst: "Een vast ochtendritueel met een bekend gezicht geeft rust." },
      { titel: "Parkinson", tekst: "Stijfheid in de ochtend maakt aankleden een opgave. Wij nemen er de tijd voor." },
      { titel: "Mantelzorger op", tekst: "Verzorgen is zwaar werk. Een deel uit handen geven houdt het vol te houden." },
    ],
    stappenKop: k("Van zorgvraag tot de ", "eerste ochtend."),
    stappen: [
      "Vertel kort wat er nodig is en op welke momenten van de dag.",
      "Wij kijken thuis mee en leggen vast wat u zelf doet en waar wij helpen.",
      "Dezelfde zorgverlener, op vaste tijden. Wij blijven uw aanspreekpunt.",
    ],
    stap3: "De eerste ochtend",
    tariefKop: k("Per uur, ", "vooraf afgesproken."),
    tariefTekst: "Het tarief hangt af van de zorgzwaarte en de duur. U krijgt het op papier voordat de zorg start.",
    plaatsenKop: k("Waar wij ", "komen."),
    faq: [
      { vraag: "Kan ik ook voor één uur per week verzorging krijgen?", antwoord: "Ja. Wij leveren zorg vanaf één uur. Wat u nodig heeft, bespreken wij tijdens de kosteloze kennismaking." },
      { vraag: "Komt er elke keer dezelfde zorgverlener?", antwoord: "Ja, dat is het uitgangspunt. Komt er toch een nieuw gezicht, dan stellen wij die altijd eerst aan u voor." },
      { vraag: "Doen jullie ook wondzorg of injecties?", antwoord: "Voor verpleegtechnische en voorbehouden handelingen werken wij samen met verzorgenden IG en verpleegkundigen, of wij stemmen af met de wijkverpleging." },
      { vraag: "Is verzorging ook in het weekend mogelijk?", antwoord: "Ja. Alle zorg is zeven dagen per week beschikbaar." },
    ],
    cta: { label: "Hulp in de ochtend nodig?", kop: k("Bespreek wat er ", "nodig is.") },
    plaatsZin: "Hulp bij wassen, aankleden en de dagelijkse verzorging, door een vaste zorgverlener.",
    plaatsWatKop: k("Hulp bij wat ", "niet meer lukt."),
    plaatsWatTekst:
      "Wassen, aankleden, verzorging en hulp bij toilet of eten. Wij doen het samen met u, zodat u zelf blijft doen wat nog kan.",
    plaatsCta: k("Vertel wat er nodig is, ", "wij kijken mee."),
  },

  begeleiding: {
    kaart: "Structuur, een luisterend oor en samen op pad, thuis of onderweg.",
    afbeelding: "/afbeeldingen/tijdelijk-02-begeleiding.jpg",
    positie: "50% 50%",
    alt: "Begeleider en cliënt in gesprek aan tafel",
    heroKop: k("Begeleiding aan huis, ", "zodat de dag weer klopt", "."),
    heroLead:
      "Ondersteuning bij structuur, afspraken en contact met anderen. Thuis of onderweg, door een vaste begeleider, ook in het weekend.",
    ctaKnop: "Begeleiding aanvragen",
    watKop: k("Grip op de dag, ", "met iemand naast u", "."),
    watTekst:
      "Begeleiding is er voor wie thuis woont maar het overzicht kwijtraakt. Post die blijft liggen, afspraken die vergeten worden, dagen zonder ritme. Wij brengen weer lijn aan, en doen dat samen met u, niet over u heen.",
    taken: [
      { titel: "Dagstructuur", tekst: "Samen een weekritme maken dat te volgen is." },
      { titel: "Post en administratie", tekst: "Meekijken met brieven, rekeningen en formulieren." },
      { titel: "Afspraken", tekst: "Mee naar de huisarts, het ziekenhuis of de gemeente." },
      { titel: "Samen op pad", tekst: "Boodschappen, een wandeling of een bezoek, zodat u er weer uit komt." },
    ],
    voorWieKop: k("Herkent u een van deze ", "situaties?"),
    voorWie: [
      { titel: "Beginnende dementie", tekst: "Afspraken en dagen lopen door elkaar. Een vast ritme helpt." },
      { titel: "Psychische klachten", tekst: "Met ervaring in de GGZ bieden wij rust, structuur en een luisterend oor." },
      { titel: "Alleen komen te staan", tekst: "Na het verlies van een partner valt veel weg, ook de dagelijkse gesprekken." },
      { titel: "Familie op afstand", tekst: "De kinderen wonen ver weg en kunnen niet elke week langskomen." },
    ],
    stappenKop: k("Van zorgvraag tot de ", "eerste afspraak."),
    stappen: [
      "Vertel kort waar het nu vastloopt en wat u graag anders zou zien.",
      "Wij leren u thuis kennen en maken samen een plan met haalbare doelen.",
      "Een vaste begeleider op vaste momenten. Wij blijven uw aanspreekpunt.",
    ],
    stap3: "Vaste begeleiding start",
    tariefKop: k("Per uur, ", "vooraf afgesproken."),
    tariefTekst: "Het tarief hangt af van de duur en de vorm van de begeleiding. U krijgt het op papier voordat wij starten.",
    plaatsenKop: k("Waar wij ", "komen."),
    faq: [
      { vraag: "Heb ik een indicatie nodig voor begeleiding?", antwoord: "Niet als u de begeleiding particulier afneemt. Via de Wmo of een pgb wel. Wij denken mee over de aanvraag." },
      { vraag: "Gaat de begeleider ook mee naar afspraken?", antwoord: "Ja. Begeleiding kan thuis zijn, maar ook onderweg, bijvoorbeeld naar de huisarts of de gemeente." },
      { vraag: "Hoe vaak komt de begeleider?", antwoord: "Dat spreken wij samen af. Het kan vanaf één uur per week." },
      { vraag: "In welke taal kan de begeleiding?", antwoord: "In het Nederlands, Engels, Papiaments of Spaans." },
    ],
    cta: { label: "Loopt het thuis vast?", kop: k("Samen brengen wij ", "weer lijn aan.") },
    plaatsZin: "Ondersteuning bij structuur, afspraken en contact met anderen, thuis of onderweg.",
    plaatsWatKop: k("Grip op de dag, ", "met iemand naast u."),
    plaatsWatTekst:
      "Dagstructuur, post en administratie, mee naar afspraken en samen op pad. Wij doen het met u, niet over u heen.",
    plaatsCta: k("Vertel waar het vastloopt, ", "wij kijken mee."),
  },

  nachtzorg: {
    kaart: "Waakdienst of slaapdienst. Een veilige nacht, en rust voor de mantelzorger.",
    afbeelding: "/afbeeldingen/judy-03-nachtzorg.webp",
    positie: "62% 58%",
    alt: "Nachtzorg aan huis",
    heroKop: k("Nachtzorg aan huis, zodat ", "iedereen", " weer slaapt."),
    heroLead:
      "Een vaste zorgverlener die 's nachts bij uw naaste is. Wakend of slapend, een enkele nacht of elke week, ook in het weekend.",
    ctaKnop: "Nachtzorg aanvragen",
    watKop: k("De nacht is vaak het ", "zwaarste deel", " van de dag."),
    watTekst:
      "Overdag lukt het thuis meestal wel. Maar 's nachts wordt uw naaste verward wakker, staat op of heeft hulp nodig bij het toilet. Voor de partner of de kinderen betekent dat weken niet doorslapen. Dat stuk nemen wij over.",
    taken: [],
    band: {
      afbeelding: "/afbeeldingen/judy-11-band-nachtzorg.webp",
      alt: "Zorgverlener bij een cliënt in de avond",
      eb: "Rust in huis",
      kop: k("Iemand in huis, zodat u ", "het licht uit", " kunt doen"),
      lead: "Uw naaste is niet alleen, en u hoeft niet met een half oor te slapen.",
    },
    voorWieKop: k("Herkent u een van deze ", "nachten?"),
    voorWie: [
      { titel: "Onrust bij dementie", tekst: "Dag en nacht lopen door elkaar. Uw naaste staat op, zoekt of gaat dwalen." },
      { titel: "Na een ziekenhuisopname", tekst: "Thuis herstellen lukt, maar de eerste nachten alleen voelen niet veilig." },
      { titel: "Mantelzorger op", tekst: "Weken niet doorgeslapen. Eén of twee nachten per week geeft al lucht." },
      { titel: "Laatste levensfase", tekst: "Rust en nabijheid in de nacht, voor uw naaste en voor de familie." },
    ],
    stappenKop: k("Van zorgvraag tot de ", "eerste nacht."),
    stappen: [
      "Vertel kort om welke nachten het gaat en wat er 's nachts speelt.",
      "Wij kijken thuis mee en bepalen samen: waakdienst of slaapdienst.",
      "Overdracht bij aankomst, en 's ochtends hoort u hoe de nacht is gegaan.",
    ],
    stap3: "De eerste nacht",
    tariefKop: k("Per nacht, ", "vooraf afgesproken."),
    tariefTekst: "Het tarief hangt af van de vorm en de zorgzwaarte. U krijgt het op papier voordat de zorg start.",
    plaatsenKop: k("Waar wij ", "'s nachts", " komen."),
    faq: [
      { vraag: "Hoe snel kan de nachtzorg starten?", antwoord: "Wij hebben geen wachtlijst. Na de kennismaking plannen wij de eerste nacht meestal binnen enkele dagen in." },
      { vraag: "Wat is het verschil tussen waakdienst en slaapdienst?", antwoord: "Bij een waakdienst blijft de zorgverlener de hele nacht wakker. Bij een slaapdienst slaapt de zorgverlener bij u thuis en staat op wanneer er iets nodig is. Welke vorm past, bepalen wij samen tijdens de kennismaking." },
      { vraag: "Komt er elke nacht dezelfde zorgverlener?", antwoord: "Ja, dat is het uitgangspunt. Komt er toch een nieuw gezicht, dan stellen wij die altijd eerst aan u voor." },
      { vraag: "Kan nachtzorg ook tijdelijk, bijvoorbeeld een week?", antwoord: "Ja. Nachtzorg wordt vaak tijdelijk ingezet, bijvoorbeeld als de mantelzorger een week weg is of tijdens herstel na een opname." },
    ],
    cta: { label: "Vannacht al rust in huis?", kop: k("Bespreek of nachtzorg ", "bij u past.") },
    plaatsZin: "Een vaste zorgverlener die 's nachts bij uw naaste is, ook voor een losse nacht.",
    plaatsWatKop: k("Iemand in huis tussen ", "23:00 en 07:00."),
    plaatsWatTekst:
      "Afhankelijk van de nacht blijft de zorgverlener wakker, of slaapt die bij u thuis en staat op wanneer dat nodig is.",
    plaatsCta: k("Vertel wat er 's nachts speelt, ", "wij kijken mee."),
  },

  dagbesteding: {
    kaart: "Samen iets doen dat energie geeft: wandelen, koken, een spel.",
    afbeelding: "/afbeeldingen/judy-04-dagbesteding.webp",
    positie: "65% 32%",
    alt: "Zorgverlener en oudere man samen bezig aan tafel",
    heroKop: k("Dagbesteding op maat, ", "dicht bij huis", "."),
    heroLead:
      "Samen iets doen dat energie geeft, thuis of in de buurt. Geen groep waar u in moet passen, maar een dag die bij u past. Ook in het weekend.",
    ctaKnop: "Dagbesteding aanvragen",
    watKop: k("Een dag met ", "iets om naar uit te kijken", "."),
    watTekst:
      "Niet iedereen voelt zich thuis in een groep. Onze dagbesteding is persoonlijk: één vast gezicht en activiteiten die passen bij wie u bent en wat u graag doet. Dat geeft ritme aan de week, en lucht voor de mantelzorger.",
    taken: [
      { titel: "Erop uit", tekst: "Een wandeling, een terras, de markt of een bezoek aan vroeger." },
      { titel: "Samen koken", tekst: "Boodschappen doen en samen een maaltijd klaarmaken." },
      { titel: "Spel en muziek", tekst: "Een spel, muziek of een goed gesprek aan de keukentafel." },
      { titel: "Bezig blijven", tekst: "Tuinieren, handwerken of wat u vroeger graag deed." },
    ],
    voorWieKop: k("Herkent u een van deze ", "situaties?"),
    voorWie: [
      { titel: "Overdag veel alleen", tekst: "De dagen zijn lang en stil. Een vast moment in de week maakt verschil." },
      { titel: "Dementie", tekst: "Bezig zijn met iets vertrouwds geeft houvast en een beter dagritme." },
      { titel: "Mantelzorger wil even weg", tekst: "Een dag voor uzelf, met de zekerheid dat uw naaste het goed heeft." },
      { titel: "Geen groepsmens", tekst: "Liever één op één dan in een zaal met twintig anderen." },
    ],
    stappenKop: k("Van zorgvraag tot de ", "eerste dag."),
    stappen: [
      "Vertel kort wie uw naaste is en wat hij of zij graag doet.",
      "Wij maken kennis en stellen samen een eerste programma op.",
      "Een vaste begeleider en een vaste dag. Wij blijven uw aanspreekpunt.",
    ],
    stap3: "De eerste dag",
    tariefKop: k("Per uur, ", "vooraf afgesproken."),
    tariefTekst: "Het tarief hangt af van de duur en de activiteit. Vervoer spreken wij in overleg af. U krijgt alles vooraf op papier.",
    plaatsenKop: k("Waar wij ", "komen."),
    faq: [
      { vraag: "Is dagbesteding bij jullie in een groep?", antwoord: "Nee. Onze dagbesteding is individueel, met een vaste begeleider, thuis of in de buurt." },
      { vraag: "Regelen jullie ook vervoer?", antwoord: "Dat kan in overleg. Wij spreken het vooraf met u af." },
      { vraag: "Kan dagbesteding via de Wmo of een pgb?", antwoord: "Ja, met een indicatie via de Wmo of uit een pgb. Particulier kan ook, dan is geen indicatie nodig." },
      { vraag: "Starten jullie ook met dagbesteding in Arnhem?", antwoord: "Ja, binnenkort starten wij met culturele dagbesteding in Arnhem. Meld uw interesse via de zorgvraag, dan houden wij u op de hoogte." },
    ],
    cta: { label: "Weer iets om naar uit te kijken?", kop: k("Bespreek wat ", "bij uw naaste past.") },
    plaatsZin: "Persoonlijke dagbesteding met een vast gezicht, thuis of in de buurt.",
    plaatsWatKop: k("Een dag met ", "iets om naar uit te kijken."),
    plaatsWatTekst:
      "Wandelen, samen koken, een spel of muziek. Eén op één, met activiteiten die passen bij wie uw naaste is.",
    plaatsCta: k("Vertel wat uw naaste graag doet, ", "wij kijken mee."),
  },

  "huishoudelijke-hulp": {
    kaart: "Een schoon en opgeruimd huis, zodat thuis ook thuis blijft voelen.",
    afbeelding: "/afbeeldingen/tijdelijk-05-huishoudelijke-hulp.jpg",
    positie: "50% 50%",
    alt: "Huishoudelijke hulp aan het werk in de keuken",
    heroKop: k("Huishoudelijke hulp, zodat thuis ", "thuis blijft", "."),
    heroLead:
      "Een schoon en opgeruimd huis, door een vast gezicht dat u kent. Vanaf één uur per week, ook in combinatie met verzorging of begeleiding.",
    ctaKnop: "Hulp aanvragen",
    watKop: k("Het huis op orde, ", "zonder dat u zich zorgen maakt", "."),
    watTekst:
      "Als stofzuigen, de was of het bed verschonen niet meer lukt, voelt het huis al snel niet meer als thuis. Wij nemen dat werk over, op vaste momenten en zoals u het gewend bent.",
    taken: [
      { titel: "Schoonmaken", tekst: "Stofzuigen, dweilen, keuken en sanitair." },
      { titel: "Was en strijk", tekst: "Wassen, opvouwen en strijken." },
      { titel: "Bed verschonen", tekst: "Schone lakens, op uw vaste dag." },
      { titel: "Boodschappen", tekst: "Samen of voor u, met een lijstje dat u zelf maakt." },
    ],
    voorWieKop: k("Herkent u een van deze ", "situaties?"),
    voorWie: [
      { titel: "Na een operatie", tekst: "Bukken en tillen mag even niet. Het huishouden moet wel door." },
      { titel: "Ouder worden", tekst: "Het lukt nog, maar het kost steeds meer energie." },
      { titel: "Mantelzorger ontlasten", tekst: "De zorg zelf doet u graag, het huishouden erbij wordt te veel." },
      { titel: "Alles bij één gezicht", tekst: "Verzorging en huishouden door dezelfde vertrouwde persoon." },
    ],
    stappenKop: k("Van zorgvraag tot een ", "opgeruimd huis."),
    stappen: [
      "Vertel kort wat er moet gebeuren en hoe vaak.",
      "Wij lopen samen door het huis en spreken af wat u belangrijk vindt.",
      "Een vast gezicht op een vaste dag. Wij blijven uw aanspreekpunt.",
    ],
    stap3: "Vaste hulp start",
    tariefKop: k("Per uur, ", "vooraf afgesproken."),
    tariefTekst: "U betaalt alleen de geleverde uren. Het tarief staat op papier voordat wij starten.",
    plaatsenKop: k("Waar wij ", "komen."),
    faq: [
      { vraag: "Moet ik zelf schoonmaakmiddelen hebben?", antwoord: "Ja, wij werken met de middelen en het materiaal dat u in huis heeft. Wij zeggen het als er iets ontbreekt." },
      { vraag: "Kan huishoudelijke hulp samen met verzorging?", antwoord: "Ja. Dan komt dezelfde zorgverlener voor allebei, zodat u maar één gezicht hoeft te kennen." },
      { vraag: "Kan het via de Wmo?", antwoord: "Met een Wmo-indicatie of een pgb kan het. Particulier kan ook, dan is geen indicatie nodig." },
      { vraag: "Werken jullie ook in het weekend?", antwoord: "Ja, alle zorg is zeven dagen per week beschikbaar." },
    ],
    cta: { label: "Het huishouden te veel?", kop: k("Wij nemen het ", "graag over.") },
    plaatsZin: "Schoonmaken, de was en boodschappen, door een vast gezicht dat u kent.",
    plaatsWatKop: k("Het huis op orde, ", "zoals u het gewend bent."),
    plaatsWatTekst:
      "Schoonmaken, was en strijk, bed verschonen en boodschappen. Op vaste momenten, en ook samen met verzorging of begeleiding.",
    plaatsCta: k("Vertel wat er moet gebeuren, ", "wij kijken mee."),
  },

  "palliatieve-zorg": {
    kaart: "Rust, nabijheid en comfort in de laatste levensfase, ook voor de naasten.",
    afbeelding: "/afbeeldingen/judy-06-palliatieve-zorg.webp",
    positie: "50% 55%",
    alt: "Zorgverlener houdt de hand vast van een oudere vrouw in bed",
    heroKop: k("Palliatieve zorg thuis, ", "met rust en nabijheid", "."),
    heroLead:
      "Comfort en aandacht in de laatste levensfase, in het eigen huis. Voor uw naaste, en voor u als familie. Overdag en 's nachts, ook in het weekend.",
    ctaKnop: "Neem contact op",
    watKop: k("Thuis, tot het ", "einde", "."),
    watTekst:
      "Veel mensen willen hun laatste tijd thuis doorbrengen, tussen de eigen spullen en de mensen van wie ze houden. Wij helpen dat mogelijk te maken. Met verzorging, met aanwezigheid, en met tijd voor wat er gezegd moet worden.",
    taken: [
      { titel: "Comfortzorg", tekst: "Verzorging gericht op rust en een zo prettig mogelijke dag." },
      { titel: "Aanwezigheid", tekst: "Er zijn, ook 's nachts, zodat niemand alleen hoeft te waken." },
      { titel: "Steun voor de familie", tekst: "Ruimte om afscheid te nemen, en even te rusten." },
      { titel: "Afstemming", tekst: "Samen met de huisarts en de wijkverpleging, zodat alles op elkaar aansluit." },
    ],
    voorWieKop: k("Wanneer families ons ", "bellen."),
    voorWie: [
      { titel: "Thuis willen sterven", tekst: "De wens is duidelijk. Nu moet het thuis ook haalbaar zijn." },
      { titel: "Familie wil waken", tekst: "U wilt erbij zijn, maar kunt niet dag en nacht wakker blijven." },
      { titel: "De laatste weken", tekst: "De zorg wordt zwaarder en het gaat snel. Er is meer hulp nodig." },
      { titel: "Na het stoppen met behandelen", tekst: "Het accent verschuift van beter worden naar goed leven." },
    ],
    stappenKop: k("Snel geregeld, ", "met zorg."),
    stappen: [
      "Bel ons of stel uw zorgvraag. Wij begrijpen dat het vaak snel moet.",
      "Wij komen langs, luisteren en stemmen af met de huisarts en de wijkverpleging.",
      "Een vast gezicht aan het bed, overdag of 's nachts.",
    ],
    stap3: "Wij zijn er",
    tariefKop: k("Per uur of per nacht, ", "vooraf afgesproken."),
    tariefTekst: "Het tarief hangt af van de momenten en de duur. U krijgt het op papier, ook als het snel moet.",
    plaatsenKop: k("Waar wij ", "komen."),
    faq: [
      { vraag: "Hoe snel kunnen jullie er zijn?", antwoord: "Wij hebben geen wachtlijst. Bel ons gerust direct, dan kijken wij wat er nog dezelfde week mogelijk is." },
      { vraag: "Doen jullie ook medische handelingen?", antwoord: "Voor voorbehouden en verpleegtechnische handelingen werken wij samen met verzorgenden IG en verpleegkundigen, en stemmen wij af met de wijkverpleging." },
      { vraag: "Kunnen jullie ook 's nachts waken?", antwoord: "Ja. Met een waakdienst blijft de zorgverlener de hele nacht wakker en bij uw naaste." },
      { vraag: "Wat kost palliatieve zorg?", antwoord: "Dat hangt af van de momenten en de duur. Wij bespreken het eerlijk en vooraf. Betalen kan via pgb, Wlz of particulier." },
    ],
    cta: { label: "Het moet nu goed geregeld zijn.", kop: k("Bel ons, ", "wij denken mee.") },
    plaatsZin: "Comfort, aanwezigheid en steun voor de familie in de laatste levensfase.",
    plaatsWatKop: k("Thuis, ", "met rust en nabijheid."),
    plaatsWatTekst:
      "Comfortzorg, aanwezigheid overdag en 's nachts, en steun voor de familie. Altijd in afstemming met de huisarts en de wijkverpleging.",
    plaatsCta: k("Bel ons, ", "wij denken mee."),
  },
};
