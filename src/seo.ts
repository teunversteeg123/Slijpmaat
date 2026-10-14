import type { PageId } from './types';
import { FAQS } from './data/siteData';

export const SITE_URL = 'https://slijpmaat.nl';

export type RouteSeo = {
  pageId: PageId;
  path: string;
  label: string;
  title: string;
  description: string;
  index: boolean;
};

export const ROUTES: RouteSeo[] = [
  {
    pageId: 'home',
    path: '/',
    label: 'Home',
    title: 'Messen slijpen Utrecht · Ophalen & bezorgen · Slijpmaat',
    description: 'Laat je keukenmessen slijpen in Utrecht. Slijpmaat haalt ze thuis of op de zaak op, slijpt ze met de hand op waterstenen en brengt ze scherp terug.',
    index: true,
  },
  {
    pageId: 'particulieren',
    path: '/particulier',
    label: 'Particulier',
    title: 'Keukenmessen slijpen Utrecht · Prijzen · Slijpmaat',
    description: 'Bereken direct de prijs voor het slijpen van je keukenmessen. Ophalen en bezorgen in Utrecht of zelf brengen op afspraak bij Slijpmaat.',
    index: true,
  },
  {
    pageId: 'horeca',
    path: '/zakelijk',
    label: 'Zakelijk',
    title: 'Horeca messen slijpen · Zakelijk · Slijpmaat',
    description: 'Professioneel messen slijpen voor horeca uit heel Nederland. Breng en haal je messen op afspraak in Utrecht; lokale service in Utrecht is mogelijk.',
    index: true,
  },
  {
    pageId: 'dienst-keukenmessen',
    path: '/diensten/keukenmessen-slijpen',
    label: 'Keukenmessen slijpen',
    title: 'Keukenmessen slijpen op waterstenen · Slijpmaat',
    description: 'Laat gladde keukenmessen en koksmessen zorgvuldig met de hand slijpen op Japanse waterstenen, met aandacht voor snede, staal en profiel.',
    index: true,
  },
  {
    pageId: 'dienst-japanse-messen',
    path: '/diensten/japanse-messen-slijpen',
    label: 'Japanse messen slijpen',
    title: 'Japanse messen laten slijpen · Slijpmaat',
    description: 'Slijpmaat slijpt Japanse keukenmessen met de hand op waterstenen, afgestemd op het staal, het profiel en de conditie van de snede.',
    index: true,
  },
  {
    pageId: 'dienst-chips-herstellen',
    path: '/diensten/chips-herstellen',
    label: 'Chips herstellen',
    title: 'Chip in keukenmes laten herstellen · Slijpmaat',
    description: 'Kleine chips en beschadigde punten kunnen vaak worden hersteld. Stuur eerst een foto, dan beoordeelt Slijpmaat de schade en mogelijkheden.',
    index: true,
  },
  {
    pageId: 'dienst-wel-niet',
    path: '/diensten/wat-slijpen-we',
    label: 'Wat slijpen we?',
    title: 'Welke messen slijpen wij? · Slijpmaat',
    description: 'Bekijk welke gladde keukenmessen Slijpmaat aanneemt, welke beschadigingen mogelijk te herstellen zijn en waarom kartelmessen niet worden aangenomen.',
    index: true,
  },
  {
    pageId: 'werkwijze',
    path: '/werkwijze',
    label: 'Werkwijze',
    title: 'Messen slijpen op waterstenen · Werkwijze · Slijpmaat',
    description: 'Bekijk hoe Slijpmaat keukenmessen beoordeelt, met de hand slijpt op Japanse waterstenen en zorgvuldig afwerkt op leer.',
    index: true,
  },
  {
    pageId: 'ophalen-bezorgen',
    path: '/servicegebied',
    label: 'Servicegebied',
    title: 'Messen slijpen Utrecht & zelf langsbrengen · Slijpmaat',
    description: 'Slijpmaat haalt en bezorgt messen binnen Utrecht. Kom vanuit heel Nederland op afspraak langs; ook voor horeca, chefs en complete messenrollen.',
    index: true,
  },
  {
    pageId: 'blogs',
    path: '/blogs',
    label: 'Blogs',
    title: 'Blogs over messen slijpen en onderhoud · Slijpmaat',
    description: 'Binnenkort lees je hier praktische artikelen van Slijpmaat over keukenmessen, onderhoud, veilig gebruik en professioneel slijpen.',
    index: false,
  },
  {
    pageId: 'over-ons',
    path: '/over-ons',
    label: 'Over ons',
    title: 'Over Slijpmaat · Messenslijper uit Utrecht',
    description: 'Lees hoe Teun en Mike Slijpmaat begonnen en waarom zij keukenmessen met de hand slijpen voor duurzaam behoud en langdurig snijplezier.',
    index: true,
  },
  {
    pageId: 'faq',
    path: '/veelgestelde-vragen',
    label: 'Veelgestelde vragen',
    title: 'Veelgestelde vragen over messen slijpen · Slijpmaat',
    description: 'Antwoorden over prijzen, soorten messen, veilig verpakken, ophalen en bezorgen, langsbrengen, betalen en het handmatige slijpproces.',
    index: true,
  },
  {
    pageId: 'contact',
    path: '/contact',
    label: 'Contact',
    title: 'Contact met Slijpmaat · Messenslijper Utrecht',
    description: 'Neem contact op met Slijpmaat voor een afspraak, zakelijke aanvraag of advies over je keukenmessen. Je spreekt direct met Teun of Mike.',
    index: true,
  },
  {
    pageId: 'algemene-voorwaarden',
    path: '/algemene-voorwaarden',
    label: 'Algemene voorwaarden',
    title: 'Algemene voorwaarden · Slijpmaat',
    description: 'Lees de algemene voorwaarden die gelden voor opdrachten, afspraken en dienstverlening van Slijpmaat.',
    index: false,
  },
  {
    pageId: 'privacy',
    path: '/privacyverklaring',
    label: 'Privacyverklaring',
    title: 'Privacyverklaring · Slijpmaat',
    description: 'Lees hoe Slijpmaat persoonsgegevens verwerkt, beveiligt en bewaart en welke privacyrechten je daarbij hebt.',
    index: false,
  },
];

export const NOT_FOUND_SEO = {
  path: '/404',
  label: 'Pagina niet gevonden',
  title: 'Pagina niet gevonden · Slijpmaat',
  description: 'Deze pagina bestaat niet of is verplaatst. Ga terug naar Slijpmaat of kies een van de beschikbare pagina’s.',
  index: false,
};

export const PAGE_PATHS = Object.fromEntries(ROUTES.map((route) => [route.pageId, route.path])) as Record<PageId, string>;
export const INDEXABLE_ROUTES = ROUTES.filter((route) => route.index);
export const PRERENDER_PATHS = [...ROUTES.map((route) => route.path), NOT_FOUND_SEO.path];

export const normalizePath = (pathname: string) => {
  const path = pathname.split(/[?#]/, 1)[0] || '/';
  return path !== '/' ? path.replace(/\/+$/, '') : path;
};

export const getRouteByPath = (pathname: string) => {
  const normalizedPath = normalizePath(pathname);
  return ROUTES.find((route) => route.path === normalizedPath) ?? null;
};

export const getRouteByPage = (pageId: PageId) => ROUTES.find((route) => route.pageId === pageId)!;

const servicegebiedFaqs = [
  {
    q: 'Vanaf welke bestelwaarde is ophalen en bezorgen gratis?',
    a: 'Vanaf €35 bestelwaarde halen we jouw messen gratis op én brengen we ze gratis terug binnen Utrecht. Onder €35 hangt het tarief af van je postcode; controleer dit eenvoudig met de postcodecheck op deze pagina.',
  },
  {
    q: 'Hoe geef ik mijn messen veilig mee aan de deur?',
    a: 'We vervoeren je messen binnen Utrecht in stevige Slijpmaat-vervoerstassen en mesbeschermers. Wikkel je messen thuis bij voorkeur in een theedoek of handdoek met een elastiek eromheen. Zo blijven je messen en onze vingers heel!',
  },
  {
    q: 'Hoe snel heb ik mijn messen weer terug?',
    a: 'Meestal al binnen 24 tot uiterlijk 48 uur na ophalen. Heb je een specifieke deadline of kookavond? Laat het ons weten bij het inplannen, dan houden we daar rekening mee.',
  },
  {
    q: 'Kan ik mijn messen ook zelf langsbrengen in Utrecht?',
    a: 'Jazeker! Je bent op afspraak van harte welkom aan de Gerard Noodtstraat in Utrecht. Omdat we vanuit huis werken vragen we je altijd even vooraf een tijdstip af te stemmen via WhatsApp.',
  },
  {
    q: 'Kan ik vanuit heel Nederland mijn messen komen brengen?',
    a: 'Ja. Vanuit heel Nederland kun je op afspraak je gladde keukenmessen in Utrecht brengen en later weer ophalen. Buiten het ondersteunde Utrechtse bezorggebied halen en bezorgen we niet standaard. Stem daarom vooraf via WhatsApp een geschikt breng- en ophaalmoment af.',
  },
  {
    q: 'Kunnen horecaklanten van buiten Utrecht ook een afspraak maken?',
    a: 'Ja. Restaurants, chefs en andere zakelijke klanten uit heel Nederland kunnen op afspraak messen of een messenrol in Utrecht afleveren en ophalen. Geef vooraf het aantal, de soorten messen, eventuele schade en de gewenste planning door, dan maken we een passend voorstel.',
  },
];

export const SERVICEGEBIED_FAQS = servicegebiedFaqs;

const faqSchema = (faqs: Array<{ q: string; a: string }>) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
});

export const getStructuredData = (pathname: string) => {
  const route = getRouteByPath(pathname);
  const metadata = route ?? NOT_FOUND_SEO;
  const canonicalUrl = `${SITE_URL}${metadata.path}`;
  const graph: Array<Record<string, unknown>> = [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Slijpmaat',
      inLanguage: 'nl-NL',
    },
    {
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: metadata.title,
      description: metadata.description,
      inLanguage: 'nl-NL',
      isPartOf: { '@id': `${SITE_URL}/#website` },
    },
  ];

  if (route && route.path !== '/') {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: route.label, item: canonicalUrl },
      ],
    });
  }

  if (route?.pageId === 'faq') graph.push(faqSchema(FAQS));
  if (route?.pageId === 'ophalen-bezorgen') graph.push(faqSchema(SERVICEGEBIED_FAQS));

  return { '@context': 'https://schema.org', '@graph': graph };
};

export const jsonLdString = (pathname: string) => JSON.stringify(getStructuredData(pathname)).replace(/</g, '\\u003c');
