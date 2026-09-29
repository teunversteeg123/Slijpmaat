import { Article, Review } from '../types';

export const SLIJPMAAT_INFO = {
  name: 'Slijpmaat',
  legalName: 'Slijpmaat V.O.F.',
  tagline: 'Jouw messenslijper in Utrecht',
  founders: 'Teun & Mike',
  city: 'Utrecht',
  address: 'Gerard Noodtstraat 57',
  postalCode: '3515 VW',
  fullAddress: 'Gerard Noodtstraat 57, 3515 VW Utrecht',
  whatsappNumber: '+31682074967',
  whatsappDisplay: '06 82 07 49 67',
  email: 'slijpmaat@outlook.com',
  turnaroundTime: 'Binnen 48 uur na ophalen terug',
  hours: 'Maandag–zaterdag 10:00–21:00 (Zondag gesloten)',
  pickupMinKnivesFree: 3,
  pickupStandardFee: 4.50,
  addressNote: 'Slijpmaat heeft geen inloopwinkel. Bezoek en afgifte uitsluitend op afspraak in Utrecht.',
  prices: {
    small: { name: 'Klein mes', size: 'Korter dan 15 cm', price: 6.50, desc: 'Schilmessen, officemessen, kleine tourneermessen' },
    normal: { name: 'Normaal mes', size: '15 tot 20 cm', price: 8.50, desc: 'Kleine koksmessen, santoku’s, universele messen' },
    large: { name: 'Groot mes', size: '20 tot en met 25 cm', price: 10.50, desc: 'Chefsmessen, vleesmessen, grote santoku’s' },
    extraLarge: { name: 'Extra groot mes', size: 'Langer dan 25 cm', price: 0, custom: true, desc: 'Zalmmessen, grote trancheermessen (prijs op aanvraag)' },
    student: { name: 'StudentenMaat', price: 5.00, desc: 'Speciaal studententarief per mes (op vertoon geldige collegekaart, extra groot uitgesloten)' },
    chipRepair: { name: 'Kleine chip herstellen', price: 2.50, desc: 'Verwijderen van een kleine hap uit de snede op grove korrelsteen' },
    profileRepair: { name: 'Nieuw profiel aanbrengen', price: 8.50, desc: 'Herstellen van een ernstig vervormde snede, doorgebogen buik of afgebroken punt' }
  }
};

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Jasper van Leeuwen',
    role: 'Thuiskok & culinair liefhebber',
    location: 'Wittevrouwen, Utrecht',
    rating: 5,
    date: '12 maart 2026',
    knivesSharpened: '3 Japanse messen (Santoku, Nakiri, Petty)',
    type: 'particulier',
    text: 'Mijn Japanse messen waren na jaren intensief gebruik echt bot geworden. Teun heeft ze met zoveel zorg behandeld! Binnen twee dagen netjes terugbezorgd in Utrecht, scheert weer moeiteloos door rijpe tomaten heen zonder enige druk. Vakmanschap zoals je het zelden meer ziet.'
  },
  {
    id: 'rev-2',
    author: 'Chef Dennis de Boer',
    role: 'Head Chef, Bistro De Gracht',
    location: 'Binnenstad, Utrecht',
    rating: 5,
    date: '28 februari 2026',
    knivesSharpened: '14 Keukenmessen keukenbrigade',
    type: 'horeca',
    text: 'Voor onze keuken is betrouwbaarheid alles. Mike en Teun halen de messen op maandagochtend op en dinsdagavond stonden ze weer vlijmscherp in onze messenrol. Geen agressieve machinale slijpmachines die je mes opvreten, maar echte whetstones. Onze messen gaan hier jaren langer door mee.'
  },
  {
    id: 'rev-3',
    author: 'Lotte Meijer',
    role: 'Geneeskundestudent & hobbybakker',
    location: 'Uithof / Science Park, Utrecht',
    rating: 5,
    date: '18 januari 2026',
    knivesSharpened: '2 Koksmessen (Wüsthof & Global)',
    type: 'particulier',
    text: 'De StudentenMaat actie (€5 per mes) is geweldig. Geen gedoe, gewoon even een appje gestuurd met foto’s. Ze dachten super fijn mee en het mes voelt letterlijk scherper dan toen ik hem nieuw kocht.'
  },
  {
    id: 'rev-4',
    author: 'Rogier & Sophie',
    role: 'Woonachtig in Hilversum',
    location: 'Hilversum (buiten Utrecht)',
    rating: 5,
    date: '5 februari 2026',
    knivesSharpened: '5 Keukenmessen incl. chip reparatie',
    type: 'particulier',
    text: 'Wij wonen buiten Utrecht maar combineerden het met een dagje stad. Op afspraak de messen langsgebracht en twee dagen later weer opgehaald. Een lelijke chip van 2mm in mijn favoriete santoku is compleet verdwenen zonder dat het lemmet vreemd dun werd.'
  },
  {
    id: 'rev-5',
    author: 'Bram Verheijen',
    role: 'Sous-chef, Restaurant Oudegracht',
    location: 'Utrecht Centrum',
    rating: 5,
    date: '14 februari 2026',
    knivesSharpened: '8 Japanse Gyuto & Deba messen',
    type: 'horeca',
    text: 'Eindelijk een messenslijper in Utrecht die echt begrijpt wat een Japanse harde staalkern (VG-10 en Aogami) nodig heeft. De hoek is spot-on en de lederen strop finish zorgt voor een vlijmscherpe, zijdezachte snede.'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    slug: 'hoe-weet-je-of-een-keukenmes-bot-is',
    title: 'Hoe weet je of een keukenmes bot is?',
    category: 'Slijpen & scherpte',
    readTime: '4 min leestijd',
    date: '20 februari 2026',
    summary: 'Veel mensen merken pas dat hun mes bot is als ze kracht moeten zetten op een tomaat of uitglijden over een uienvel. Drie simpele zelftests om de scherpte te controleren.',
    content: {
      lead: 'Een bot mes is niet alleen frustrerend in de keuken, het is ook aantoonbaar gevaarlijker dan een vlijmscherp mes. Waarom? Omdat je bij een bot mes onwillekeurig druk gaat uitoefenen.',
      toc: [
        'Waarom een bot mes gevaarlijk is',
        'De Tomatentest: de ultieme lakmoesproef',
        'De Papiertest: voel elke oneffenheid',
        'De Nagellak- of Vingernageltest',
        'Wanneer is het tijd voor de whetstone?'
      ],
      sections: [
        {
          heading: 'Waarom een bot mes gevaarlijk is',
          body: 'Als een lemmet zijn micro-zaagtandjes en scherpe top verloopt, glijdt het mes weg over gladde schillen zoals van tomaten, paprika’s of uien. Zodra je mes wegschiet terwijl je naar beneden drukt, heb je geen controle meer over de snijrichting. Een vlijmscherp mes grijpt direct vast in de materie en heeft nauwelijks neerwaartse druk nodig.',
          tips: ['Druk je harder dan het gewicht van je eigen hand? Dan is je mes aan een slijpbeurt toe.']
        },
        {
          heading: 'De Tomatentest: de ultieme lakmoesproef',
          body: 'Pak een rijpe tomaat. Plaats de hiel van je mes op de schil en trek het mes rustig naar achteren zónder enige druk naar beneden uit te oefenen. Glijdt het mes direct soepel door de schil heen? Dan is het nog vlijmscherp. Moet je zagen of deukt de tomaat in? Dan is de snede rond en bot.',
          tips: ['Gebruik een rijpe trostomaat voor de meest eerlijke uitslag.']
        },
        {
          heading: 'De Papiertest: voel elke oneffenheid',
          body: 'Houd een standaard velletje A4 printpapier losjes in één hand. Snijd met je mes vanaf de hiel schuin naar beneden door het papier. Een goed geslepen mes glijdt geruisloos en zonder haperen door het papier. Scheurt het papier of hapert het halverwege? Dan zit er vaak een braam of kleine chip in de snede.',
          tips: ['Luister naar het geluid: een zacht fluisterend zzzz-geluid wijst op een fijne polijsting; geratel wijst op oneffenheden.']
        },
        {
          heading: 'Wanneer is het tijd voor de whetstone?',
          body: 'Met een aanzetstaal kun je een lichte buiging in de snede (de microscopische braam) tijdelijk rechttrekken. Maar als het staal eenmaal versleten of afgerond is, haalt een aanzetstaal niets meer uit. Dan moet er handmatig een nieuwe, strakke vouw geslepen worden op een whetstone.',
          tips: ['Regelmatig thuiskoken? Laat je favoriete mes 1 tot 2 keer per jaar professioneel slijpen.']
        }
      ],
      takeaways: [
        'Test je mes op een tomaat zonder naar beneden te duwen.',
        'Een bot mes veroorzaakt meer keukenongelukken dan een scherp mes.',
        'Een aanzetstaal slijpt geen staal weg; het zet alleen recht.',
        'Whetstones zorgen voor een langdurig scherpe vouw met minimaal materiaalverlies.'
      ]
    }
  },
  {
    id: 'art-2',
    slug: 'waarom-slijpt-slijpmaat-met-whetstones',
    title: 'Waarom slijpt Slijpmaat met de hand op whetstones?',
    category: 'Werkwijze van Slijpmaat',
    readTime: '5 min leestijd',
    date: '15 februari 2026',
    summary: 'Veel snelslijpers gebruiken droge sneldraaiende slijpbanden die messen verhitten en onnodig veel staal afnemen. Wij kiezen bewust voor ambachtelijke Japanse waterstenen.',
    content: {
      lead: 'Je favoriete koksmes is een precisie-instrument. De harding van het staal is cruciaal voor hoelang het mes scherp blijft. Toch zien we maar al te vaak messen die na een machinale beurt hun hardheid verloren zijn.',
      toc: [
        'Het gevaar van machinaal droogslijpen',
        'Wat zijn Japanse whetstones precies?',
        'Waarom wij kiezen voor Shapton Pro stenen',
        'Controle over de slijphoek per mesmodel',
        'Minimaal materiaalverlies: je mes gaat decennia mee'
      ],
      sections: [
        {
          heading: 'Het gevaar van machinaal droogslijpen',
          body: 'Elektrische slijpmachines of droge schuurbanden draaien op hoge toerentallen. Zelfs binnen enkele seconden kan de uiterste millimetersnede van het lemmet oplopen tot meer dan 200°C. Hierdoor treedt "ontlating" (temperverlies) op: het staal verliest zijn hardheid en wordt zacht. Zo’n mes is na twee weken alweer bot, hoe scherp het ook leek bij aflevering.',
          tips: ['Zie je een blauwachtige gloed op een snede? Dan is het staal verbrand door machinaal slijpen.']
        },
        {
          heading: 'Wat zijn Japanse whetstones (waterstenen)?',
          body: 'Whetstones zijn keramische stenen gebonden met abrasieve korrels (zoals siliciumcarbide of aluminiumoxide). Ze worden tijdens het slijpen constant met water gekoeld en gesmeerd. De wrijving zorgt voor een fijne slurry waarin nieuwe, scherpe mineraaldeeltjes vrijkomen. Hierdoor blijft de temperatuur van het mes gelijk aan kamertemperatuur.',
          tips: ['Water koelt het lemmet en voert metaaldeeltjes direct af.']
        },
        {
          heading: 'Waarom wij kiezen voor Shapton Pro stenen',
          body: 'Bij Slijpmaat werken we met professionele Shapton Pro stenen uit Japan. Deze stenen staan bekend om hun extreem consistente korrelgrootte en dichte structuur. We bouwen de snede trapsgewijs op: van korrel 320 voor reparaties naar 1000 voor de basisvouw, tot 2000, 5000 en 8000 voor een zijdezachte hoogglans polijsting.',
          tips: ['Elke korrelstap verfijnt de kraspatronen tot een spiegelgladde snede.']
        },
        {
          heading: 'Minimaal materiaalverlies: je mes gaat decennia mee',
          body: 'Omdat we met de hand slijpen en elke beweging met gevoel doseren, nemen we alleen de absolute fractie staal af die nodig is om weer een scheermes-scherpe apex te creëren. Een koksmes dat je bij Slijpmaat laat slijpen behoudt zijn originele profiel en kan letterlijk tientallen jaren meegaan.',
          tips: ['Geen uithollingen of vervormde holle buiken in je lemmet.']
        }
      ],
      takeaways: [
        'Waterkoeling voorkomt dat het staal ontlaat of zacht wordt.',
        'Whetstones garanderen een vlakke, symmetrische snijkant.',
        'Minimaal materiaalverlies garandeert een lange levensduur van je mes.',
        'Afstroppen op leder zorgt voor een braamvrije, comfortabele snijervaring.'
      ]
    }
  },
  {
    id: 'art-3',
    slug: 'hoe-vaak-moet-je-een-keukenmes-laten-slijpen',
    title: 'Hoe vaak moet je een keukenmes laten slijpen?',
    category: 'Onderhoud van messen',
    readTime: '3 min leestijd',
    date: '28 januari 2026',
    summary: 'Van thuiskok die drie keer per week kookt tot een drukke horecabrigade: ontdek het ideale slijpritme voor jouw situatie en messen.',
    content: {
      lead: 'Een veelgestelde vraag aan onze werkbank: "Hoe vaak moet ik mijn mes nou eigenlijk laten slijpen?" Het antwoord hangt af van drie factoren: intensiteit, snijplank en staalsoort.',
      toc: [
        'Richtlijnen per type gebruiker',
        'Welke factoren versnellen botheid?',
        'Onderhoud tussen de slijpbeurten door'
      ],
      sections: [
        {
          heading: 'Richtlijnen per type gebruiker',
          body: 'Voor de gemiddelde thuiskok (3-5 kooksessies per week) is 1 tot 2 keer per jaar professioneel laten slijpen ideaal. Kook je dagelijks met veel verse ingrediënten, dan raden we elke 4 tot 6 maanden aan. In een professionele horecakeuken waar chefs 8 uur per dag hakken en snijden, is een cyclus van 4 tot 8 weken gebruikelijk.',
          tips: ['Wacht niet tot je mes zo bot is dat je hard moet duwen; preventief slijpen bespaart staal!']
        },
        {
          heading: 'Welke factoren versnellen botheid?',
          body: 'Het type snijplank is de grootste boosdoener: glas, marmer en bamboe zijn funest voor je snede. Gebruik uitsluitend kopshout, zacht hout (zoals beuken of walnoot) of hoogwaardig rubber/kunststof. Ook de vaatwasser is een doodzonde: agressief zout en botsingen maken elke snede binnen no-time bot.',
          tips: ['Was je koksmes altijd direct met de hand af met lauw water en droog meteen af.']
        }
      ],
      takeaways: [
        'Thuiskok: 1-2 keer per jaar.',
        'Intensieve hobbykok: elke 4-6 maanden.',
        'Horecakeuken: elke 4-8 weken.',
        'Vermijd glazen snijplanken en de vaatwasser.'
      ]
    }
  },
  {
    id: 'art-4',
    slug: 'kun-je-een-chip-uit-een-keukenmes-herstellen',
    title: 'Kun je een chip uit een keukenmes herstellen?',
    category: 'Slijpen & scherpte',
    readTime: '4 min leestijd',
    date: '10 januari 2026',
    summary: 'Per ongeluk een botje geraakt of het mes laten vallen en zit er nu een hapje uit de snede? Gooi je mes niet weg: een chip is vrijwel altijd te repareren.',
    content: {
      lead: 'Niets breekt het hart van een kookliefhebber sneller dan een zichtbare chip (een kleine hap of deuk) in de vlijmscherpe snede van een favoriet koksmes. Gelukkig is dit bij Slijpmaat dagelijks werk.',
      toc: [
        'Wat is een chip en hoe ontstaat het?',
        'Hoe herstellen we een chip bij Slijpmaat?',
        'Waarom je zelf niet met een grof gereedschap moet gaan schuren',
        'Wat kost een chipreparatie?'
      ],
      sections: [
        {
          heading: 'Wat is een chip en hoe ontstaat het?',
          body: 'Japanse messen en hoogwaardige Europese messen zijn gehard staal (vaak 58 tot 64 HRC). Hoe harder het staal, hoe langer het scherp blijft, maar ook hoe brozer de microscopisch dunne snijkant is. Raak je een avocado-pit, een botje, bevroren voedsel of stoot je tegen een bord in de gootsteen? Dan kan er een microchip of zelfs een hapje van 1 tot 3 mm uitbreken.',
          tips: ['Gebruik een koksmes nooit om botten door te hakken of blikken te openen.']
        },
        {
          heading: 'Hoe herstellen we een chip bij Slijpmaat?',
          body: 'We plaatsen het mes eerst op een extra grove Japanse steen (Shapton Pro 320). We verlagen gecontroleerd het gehele lemmetprofiel zodat de snede weer één vloeiende boog vormt en de chip verdwijnt. Vervolgens dunnen we de schouders uit ("thinning") zodat het mes niet dik aanvoelt, en bouwen we een gloednieuwe snijvouw op tot korrel 5000+.',
          tips: ['Een hersteld mes snijdt vaak weer net zo fantastisch als een gloednieuw exemplaar.']
        },
        {
          heading: 'Wat kost een chipreparatie?',
          body: 'Bij Slijpmaat rekenen we voor het herstellen van een kleine chip slechts €2,50 bovenop het standaardslijptarief. Mocht het profiel zeer ernstig vervormd zijn of de punt afgebroken, dan overleggen we vooraf over een profielherstel (€8,50). Je weet altijd precies waar je aan toe bent.',
          tips: ['Stuur ons gerust even een foto via WhatsApp van de beschadiging voor gratis advies!']
        }
      ],
      takeaways: [
        'Gooi een mes met een chip nooit weg; herstel is vrijwel altijd mogelijk.',
        'Herstel vraagt om het harmonieus herprofileren van de gehele snede.',
        'Vooraf beoordelen via WhatsApp voorkomt verrassingen.',
        'Kleine chip herstellen kost bij ons slechts €2,50 extra.'
      ]
    }
  },
  {
    id: 'art-5',
    slug: 'hoe-onderhoud-je-een-japans-keukenmes',
    title: 'Hoe onderhoud je een Japans keukenmes?',
    category: 'Messoorten & staal',
    readTime: '5 min leestijd',
    date: '3 januari 2026',
    summary: 'Japanse messen zoals Santoku’s, Gyuto’s en Nakiri’s vragen om een andere behandeling dan stevige Duitse messen. Handige tips voor staal, hoek en verzorging.',
    content: {
      lead: 'De combinatie van extreem dun uitgeslepen lemmeten en hard koolstof- of poederstaal maakt een Japans mes een droom om mee te snijden. Maar die finesse vraagt wel om respectvol onderhoud.',
      toc: [
        'Verschil tussen roestvrij en koolstofstaal (carbon)',
        'Slijphoek: 12 tot 15 graden per kant',
        'Waarom een klassiek aanzetstaal verboden is',
        'Schoonmaken, drogen en camellia-olie'
      ],
      sections: [
        {
          heading: 'Verschil tussen roestvrij en koolstofstaal (carbon)',
          body: 'Veel traditionele Japanse messen (Aogami / Shirogami) zijn gemaakt van zuiver koolstofstaal. Dit staal wordt bizar scherp, maar oxideert als het in contact komt met zuren (zoals citroen, ui of tomaat). Er vormt zich een natuurlijke grijze beschermlaag (patina). Dit is normaal en goed; roest (oranje/rood) moet je direct voorkomen door het mes na elk gebruik af te spoelen en kurkdroog te vegen.',
          tips: ['Laat een Japans mes nooit nat op het aanrecht liggen.']
        },
        {
          heading: 'Waarom een klassiek geribbeld aanzetstaal verboden is',
          body: 'Een typisch Europees geribbeld staal kan micro-chips slaan in de harde, brosse snede van een Japans mes. Gebruik liever een keramische slijpstaaf met ultrafijne korrel (minimaal 2000 grit) of een leren strop, of laat het mes op waterstenen bijslijpen zodra de scherpte afneemt.',
          tips: ['Twijfel je over jouw staalsoort? Stuur je Maat een foto!']
        }
      ],
      takeaways: [
        'Geen botten of harde pitten snijden met een Japans mes.',
        'Nooit een grof aanzetstaal gebruiken.',
        'Direct na gebruik met de hand afwassen en afdrogen.',
        'Bij koolstofstaal af en toe een druppeltje camellia-olie aanbrengen.'
      ]
    }
  },
  {
    id: 'art-6',
    slug: 'welke-snijplank-is-het-beste-voor-je-messen',
    title: 'Welke snijplank is het beste voor je messen?',
    category: 'Veilig gebruik',
    readTime: '3 min leestijd',
    date: '19 december 2025',
    summary: 'De beste messenslijper kan niet op tegen een verkeerde snijplank. Ontdek waarom hout en zacht kunststof je snede beschermen en waarom glas uit den boze is.',
    content: {
      lead: 'Wist je dat elke keer dat je snijdt, de snede van je mes honderden keren tegen het oppervlak van je snijplank botst? Het materiaal van je plank bepaalt voor de helft hoelang je mes scherp blijft.',
      toc: ['Waarom glas, steen en marmer messen vernielen', 'Kopshout versus langshout', 'Kunststof en rubber planken'],
      sections: [
        {
          heading: 'Waarom glas, steen en marmer messen vernielen',
          body: 'Glas en marmer zijn harder dan staal. Eén enkele haal over een glazen snijplank kan de ragfijne vouw van je mes direct ombuigen of micro-breuken veroorzaken. Glazen planken horen thuis in de glasbak, niet onder een koksmes.',
          tips: ['Gebruik een glazen plank hooguit als serveerplateau voor kaas.']
        },
        {
          heading: 'Kopshout: het vriendelijkste oppervlak voor je lemmet',
          body: 'Bij een kopshouten plank (end-grain) staan de houtvezels verticaal. Wanneer je mes neerkomt, wijken de houtvezels tijdelijk mee en sluiten ze zich daarna weer. Hierdoor stoot het mes niet op een harde weerstand en blijft de snede aanzienlijk langer scherp.',
          tips: ['Hout zoals walnoot, esdoorn, beuken of kersenhout is fantastisch.']
        }
      ],
      takeaways: [
        'Glas, graniet en marmer maken elk mes in enkele sneden bot.',
        'Kopshout veert mee met de snijkant en spaart het staal.',
        'Onderhoud houten planken regelmatig met minerale olie of bijenwas.'
      ]
    }
  }
];

export const SERVICE_AREAS = [
  { district: 'Binnenstad', zip: '3511, 3512', note: 'Gratis ophalen/bezorgen vanaf 3 messen' },
  { district: 'Oost / Wilhelminapark', zip: '3581, 3582, 3583', note: 'Gratis ophalen/bezorgen vanaf 3 messen' },
  { district: 'Wittevrouwen / Buiten Wittevrouwen', zip: '3572', note: 'Gratis ophalen/bezorgen vanaf 3 messen' },
  { district: 'Noordoost / Tuindorp / Tuinwijk', zip: '3571, 3573', note: 'Gratis ophalen/bezorgen vanaf 3 messen' },
  { district: 'Lombok / Nieuw Engeland', zip: '3531, 3532', note: 'Gratis ophalen/bezorgen vanaf 3 messen' },
  { district: 'Zuid / Tolsteeg / Hoograven', zip: '3523, 3524, 3525', note: 'Gratis ophalen/bezorgen vanaf 3 messen' },
  { district: 'West / Oog in Al', zip: '3533', note: 'Gratis ophalen/bezorgen vanaf 3 messen' },
  { district: 'Noordwest / Ondiep / Pijlsweerd', zip: '3513, 3551, 3552', note: 'Gratis ophalen/bezorgen vanaf 3 messen' },
  { district: 'Overvecht', zip: '3561 - 3564', note: 'Gratis ophalen/bezorgen vanaf 3 messen' },
  { district: 'Leidsche Rijn / Vleuten / De Meern', zip: '3451 - 3545', note: 'In overleg / vaste ophaaldagen' },
  { district: 'Buiten Utrecht (bijv. Zeist, Hilversum, Amersfoort)', zip: 'Overig NL', note: 'Op afspraak langsbrengen en ophalen in Utrecht' }
];

export const FAQS = [
  {
    q: 'Hoe geef ik mijn messen veilig mee?',
    a: 'We vervoeren je messen veilig in onze eigen ophaal- en bezorgtas. Verpak je messen bij voorkeur extra in een theedoek, krant of messenhoes. Zo blijven je messen én onze vingers heel.'
  },
  {
    q: 'Welke typen / soorten messen slijpt mijn Maat?',
    a: 'Wij slijpen alle gladde messen, zoals koksmessen, schilmessen en andere gladde messen. Speciale messen beoordelen we vooraf. Kartelmessen slijpen we op dit moment niet.'
  },
  {
    q: 'Slijpt mijn Maat ook Japanse messen?',
    a: 'Ja, Japanse messen slijpen we, maar door het staal en de slijphoek vragen ze vaak om een andere aanpak. Stuur daarom vooraf via WhatsApp een foto en het merk of type van je mes. Je Maat beoordeelt dan of we het mes zorgvuldig kunnen slijpen. Kartelmessen slijpen we op dit moment niet.'
  },
  {
    q: 'Hoe lang duurt het voordat ik weer scherpe messen heb?',
    a: 'We streven ernaar om je messen binnen 48 uur na het ophalen weer vlijmscherp terug te brengen. De exacte doorlooptijd kan variëren door drukte. We spreken daarom vooraf duidelijk af wanneer je messen worden opgehaald en teruggebracht.'
  },
  {
    q: 'Hoe gaat mijn Maat te werk met het slijpen van mijn messen?',
    a: 'We controleren eerst de staat van je mes. Daarna slijpen we met professionele Shapton Pro-slijpstenen in meerdere stappen. Vervolgens werken we het mes af op leer voor een strak en scherp resultaat.'
  },
  {
    q: 'Hoe kom ik in contact met mijn Maat?',
    a: 'Heel makkelijk via WhatsApp. Stuur een berichtje met hoeveel messen je wilt laten slijpen en waar je woont. Dan plant je Maat de rest met je in. Heb je nog vragen? Stel ze gerust.'
  },
  {
    q: 'Hoe kan ik mijn Maat betalen?',
    a: 'Betalen kan makkelijk via Tikkie, betaalverzoek, factuur of contant bij het terugbrengen van de messen.'
  },
  {
    q: 'Heeft Slijpmaat een winkel of komt mijn Maat aan huis?',
    a: 'Slijpmaat heeft geen inloopwinkel. Je kunt wel op afspraak bij ons langskomen om je messen af te geven en weer op te halen. Daarnaast halen we je messen bij je thuis op en brengen we ze na het slijpen netjes terug.'
  },
  {
    q: 'In welke Utrechtse wijken en postcodes haalt mijn Maat messen op?',
    a: 'Je Maat haalt keukenmessen op in de volgende Utrechtse wijken en postcodegebieden:\n• Binnenstad en centrum: 3511 en 3512\n• Noordwest – Pijlsweerd, Ondiep en Zuilen: 3513 en 3551 t/m 3555\n• Noordoost – Tuinwijk, Tuindorp, Wittevrouwen en Voordorp: 3514, 3515 en 3571 t/m 3573\n• Overvecht: 3561 t/m 3566\n• Oost – Oudwijk, Abstede, Wilhelminapark en Rijnsweerd: 3581 t/m 3585\n• Zuid – Tolsteeg, Hoograven en Lunetten: 3523 t/m 3525\n• Zuidwest – Dichterswijk, Rivierenwijk, Transwijk en Kanaleneiland: 3521, 3522, 3526 en 3527\n• West – Lombok, Oog in Al en Nieuw Engeland: 3531 t/m 3534 en 3542\n• Leidsche Rijn – Terwijde, Het Zand, Parkwijk en Langerak: 3528, 3541 en 3543 t/m 3545\n\nVul in het bestelformulier je postcode in om de bezorgprijs te bekijken. Vanaf drie messen komen we gratis langs.',
    items: [
      'Binnenstad en centrum: 3511 en 3512',
      'Noordwest – Pijlsweerd, Ondiep en Zuilen: 3513 en 3551 t/m 3555',
      'Noordoost – Tuinwijk, Tuindorp, Wittevrouwen en Voordorp: 3514, 3515 en 3571 t/m 3573',
      'Overvecht: 3561 t/m 3566',
      'Oost – Oudwijk, Abstede, Wilhelminapark en Rijnsweerd: 3581 t/m 3585',
      'Zuid – Tolsteeg, Hoograven en Lunetten: 3523 t/m 3525',
      'Zuidwest – Dichterswijk, Rivierenwijk, Transwijk en Kanaleneiland: 3521, 3522, 3526 en 3527',
      'West – Lombok, Oog in Al en Nieuw Engeland: 3531 t/m 3534 en 3542',
      'Leidsche Rijn – Terwijde, Het Zand, Parkwijk en Langerak: 3528, 3541 en 3543 t/m 3545'
    ]
  },
  {
    q: 'Kan mijn Maat ook buiten het vaste bezorggebied langskomen?',
    a: 'Ja, op aanvraag halen we ook keukenmessen op in Vleuten-De Meern en verschillende plaatsen rondom Utrecht:\n• Vleuten en Vleuterweide: 3451 en 3452\n• De Meern en Veldhuizen: 3453 en 3454\n• Haarzuilens: 3455\n• Rijnenburg: 3546\n• Nieuwegein: 3431 t/m 3439\n• Houten: 3991 t/m 3995\n• Maarssen: 3601 t/m 3608\n• De Bilt: 3731 en 3732\n\nWoon je in een van deze gebieden? Stuur je Maat via WhatsApp je postcode en het aantal messen. Dan laten we je weten wanneer we kunnen langskomen en wat de bezorgkosten zijn.',
    items: [
      'Vleuten en Vleuterweide: 3451 en 3452',
      'De Meern en Veldhuizen: 3453 en 3454',
      'Haarzuilens: 3455',
      'Rijnenburg: 3546',
      'Nieuwegein: 3431 t/m 3439',
      'Houten: 3991 t/m 3995',
      'Maarssen: 3601 t/m 3608',
      'De Bilt: 3731 en 3732'
    ]
  },
  {
    q: 'Wat kost het om mijn keukenmessen te laten slijpen?',
    a: 'Een klein keukenmes korter dan 15 centimeter kost €6,50. Voor een normaal keukenmes van 15 tot 20 centimeter betaal je €8,50. Een groot keukenmes van 20 tot en met 25 centimeter kost €10,50. Messen langer dan 25 centimeter beoordelen we vooraf en slijpen we op aanvraag. In het bestelformulier zie je vooraf de totale prijs van jouw slijpbeurt, inclusief eventuele reparaties en bezorgkosten.'
  },
  {
    q: 'Kan mijn Maat chips en beschadigingen in een mes herstellen?',
    a: 'Ja, kleine chips en beschadigingen kunnen we vaak tijdens de slijpbeurt herstellen. Een kleine chip herstellen kost €2,50 extra. Is het profiel van het mes beschadigd? Dan kunnen we voor €8,50 extra een nieuw profiel aanbrengen. Reparaties voeren we alleen uit in combinatie met een slijpbeurt.'
  },
  {
    q: 'Waarom slijpt mijn Maat keukenmessen met de hand?',
    a: 'We slijpen jouw keukenmessen met de hand op professionele Shapton Pro-slijpstenen. Zo houden we controle over de slijphoek en halen we zo min mogelijk materiaal van het mes weg. Daarna verwijderen we de braam en werken we de snede af op leer voor een strak en scherp resultaat.'
  },
  {
    q: 'Krijg ik als student korting op mijn slijpbeurt?',
    a: 'Ja. Als StudentenMaat betaal je €5 per keukenmes. Selecteer in het bestelformulier de optie ‘Ik ben een StudentenMaat’. De studentenkorting wordt dan automatisch in de totaalprijs verwerkt.'
  }
];
