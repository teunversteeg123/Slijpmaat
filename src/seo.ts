import type { PageId } from './types';
import { FAQS, SERVICEGEBIED_FAQS } from './data/siteData';

export const SITE_URL = 'https://slijpmaat.nl';
const DEFAULT_SOCIAL_IMAGE = '/assets/slijpmaat-homepage-hero.jpg';
const DEFAULT_SOCIAL_IMAGE_ALT = 'Slijpmaat slijpt keukenmessen met de hand in Utrecht';

type RouteSeo = {
  pageId: PageId;
  path: string;
  label: string;
  title: string;
  description: string;
  index: boolean;
  image?: string;
  imageAlt?: string;
  datePublished?: string;
  dateModified?: string;
};

const ROUTES: RouteSeo[] = [
  {
    pageId: 'home',
    path: '/',
    label: 'Home',
    title: 'Messen slijpen Utrecht · Ophalen & bezorgen · Slijpmaat',
    description: 'Laat je keukenmessen slijpen in Utrecht. Gratis ophalen en bezorgen vanaf €35 bestelwaarde; daaronder gelden de postcodegebonden tarieven.',
    index: true,
    image: '/assets/slijpmaat-homepage-hero.jpg',
    imageAlt: 'Koksmes bij Slijpmaat in Utrecht',
  },
  {
    pageId: 'particulieren',
    path: '/particulier/',
    label: 'Particulier',
    title: 'Keukenmessen slijpen Utrecht · Prijzen · Slijpmaat',
    description: 'Bereken direct je slijpprijs. In Utrecht is ophalen en bezorgen gratis vanaf €35 bestelwaarde; daaronder geldt het tarief voor je postcode.',
    index: true,
    image: '/assets/tomaat-video-poster.jpg',
    imageAlt: 'Scherp keukenmes snijdt een tomaat op een houten snijplank',
  },
  {
    pageId: 'horeca',
    path: '/zakelijk/',
    label: 'Zakelijk',
    title: 'Professioneel horeca messen slijpen · Slijpmaat',
    description: 'Professioneel messen slijpen voor horeca uit heel Nederland. Breng en haal je messen op afspraak in Utrecht; lokale service in Utrecht is mogelijk.',
    index: true,
    image: '/assets/tomaat-video-poster.jpg',
    imageAlt: 'Scherp keukenmes snijdt een tomaat voor een zakelijke slijpservice',
  },
  {
    pageId: 'dienst-keukenmessen',
    path: '/diensten/keukenmessen-slijpen/',
    label: 'Keukenmessen slijpen',
    title: 'Keukenmessen laten slijpen in Utrecht · Slijpmaat',
    description: 'Laat gladde keukenmessen en koksmessen in Utrecht zorgvuldig met de hand slijpen op Japanse waterstenen, met aandacht voor snede, staal en profiel.',
    index: true,
    image: '/assets/werkwijze/03-slijpen.jpg',
    imageAlt: 'Keukenmes wordt met de hand geslepen op een Japanse watersteen',
  },
  {
    pageId: 'dienst-japanse-messen',
    path: '/diensten/japanse-messen-slijpen/',
    label: 'Japanse messen slijpen',
    title: 'Japanse messen slijpen in Utrecht · Slijpmaat',
    description: 'Laat Japanse keukenmessen in Utrecht met de hand slijpen op waterstenen, afgestemd op het staal, het profiel en de conditie van de snede.',
    index: true,
    image: '/assets/werkwijze/03-slijpen.jpg',
    imageAlt: 'Japans keukenmes wordt zorgvuldig op een watersteen geslepen',
  },
  {
    pageId: 'dienst-chips-herstellen',
    path: '/diensten/chips-herstellen/',
    label: 'Chips herstellen',
    title: 'Chip in keukenmes laten herstellen · Slijpmaat',
    description: 'Kleine chips en beschadigde punten kunnen vaak worden hersteld. Stuur eerst een foto, dan beoordeelt Slijpmaat de schade en mogelijkheden.',
    index: true,
    image: '/assets/werkwijze/01-beoordelen.jpg',
    imageAlt: 'Slijpmaat beoordeelt de beschadigde snede van een keukenmes',
  },
  {
    pageId: 'dienst-wel-niet',
    path: '/diensten/wat-slijpen-we/',
    label: 'Wat slijpen we?',
    title: 'Welke messen slijpen wij? · Slijpmaat',
    description: 'Bekijk welke gladde keukenmessen Slijpmaat aanneemt, welke beschadigingen mogelijk te herstellen zijn en waarom kartelmessen niet worden aangenomen.',
    index: true,
    image: '/assets/werkwijze/01-beoordelen.jpg',
    imageAlt: 'Controle van de snede en het profiel van een keukenmes',
  },
  {
    pageId: 'werkwijze',
    path: '/werkwijze/',
    label: 'Werkwijze',
    title: 'Messen slijpen op waterstenen · Werkwijze · Slijpmaat',
    description: 'Bekijk hoe Slijpmaat keukenmessen beoordeelt, met de hand slijpt op Japanse waterstenen en zorgvuldig afwerkt op leer.',
    index: true,
    image: '/assets/werkwijze/03-slijpen.jpg',
    imageAlt: 'Handmatig slijpen op Japanse waterstenen bij Slijpmaat',
  },
  {
    pageId: 'ophalen-bezorgen',
    path: '/servicegebied/',
    label: 'Servicegebied',
    title: 'Messen slijpen Utrecht & zelf langsbrengen · Slijpmaat',
    description: 'Bekijk het Utrechtse servicegebied: gratis ophalen en bezorgen vanaf €35 bestelwaarde, daaronder €0, €4,50 of €7,25 volgens je postcode.',
    index: true,
    image: '/assets/kaart-utrecht-bezorggebied-statisch-hd.png',
    imageAlt: 'Kaart van het Utrechtse servicegebied van Slijpmaat',
  },
  {
    pageId: 'blogs',
    path: '/blogs/',
    label: 'Blogs',
    title: 'Blogs over messen slijpen en onderhoud · Slijpmaat',
    description: 'Lees praktische artikelen van Slijpmaat over keukenmessen, onderhoud, veilig gebruik en professioneel slijpen.',
    index: true,
    image: '/assets/kennisbank-slijpmaat-kaartje-planten.jpeg',
    imageAlt: 'Slijpmaat-kaartje tussen groene planten bij de blogs',
  },
  {
    pageId: 'blog-hoe-slijp-je-een-mes',
    path: '/blogs/hoe-slijp-je-een-mes/',
    label: 'Hoe slijp je een mes?',
    title: 'Hoe slijp je een mes? Stappenplan met wetsteen | Slijpmaat',
    description: 'Leer hoe je een keukenmes slijpt op een wetsteen. Ontdek welke slijphoek en korrel je nodig hebt en hoe je een braam goed verwijdert.',
    index: true,
    image: '/assets/werkwijze/03-slijpen.jpg',
    imageAlt: 'Keukenmes wordt met de hand geslepen op een wetsteen',
    datePublished: '2026-10-15',
    dateModified: '2026-10-17',
  },
  {
    pageId: 'over-ons',
    path: '/over-ons/',
    label: 'Over ons',
    title: 'Over Slijpmaat · Messenslijper uit Utrecht',
    description: 'Lees hoe Teun en Mike Slijpmaat begonnen en waarom zij keukenmessen met de hand slijpen voor duurzaam behoud en langdurig snijplezier.',
    index: true,
    image: '/assets/team/teun-en-mike-samen.jpg',
    imageAlt: 'Teun en Mike, de oprichters van Slijpmaat',
  },
  {
    pageId: 'faq',
    path: '/veelgestelde-vragen/',
    label: 'Veelgestelde vragen',
    title: 'Veelgestelde vragen over messen slijpen · Slijpmaat',
    description: 'Antwoorden over messen slijpen, prijzen en vervoer. Gratis ophalen en bezorgen in Utrecht vanaf €35; daaronder geldt het postcodetarief.',
    index: true,
    image: '/assets/faq-slijpmaat-kaartje-bessen.jpeg',
    imageAlt: 'Slijpmaat-kaartje tussen oranje bessen',
  },
  {
    pageId: 'algemene-voorwaarden',
    path: '/algemene-voorwaarden/',
    label: 'Algemene voorwaarden',
    title: 'Algemene voorwaarden · Slijpmaat',
    description: 'Lees de algemene voorwaarden die gelden voor opdrachten, afspraken en dienstverlening van Slijpmaat.',
    index: false,
  },
  {
    pageId: 'privacy',
    path: '/privacyverklaring/',
    label: 'Privacyverklaring',
    title: 'Privacyverklaring · Slijpmaat',
    description: 'Lees hoe Slijpmaat persoonsgegevens verwerkt, beveiligt en bewaart en welke privacyrechten je daarbij hebt.',
    index: false,
  },
];

export const NOT_FOUND_SEO = {
  path: '/404/',
  label: 'Pagina niet gevonden',
  title: 'Pagina niet gevonden · Slijpmaat',
  description: 'Deze pagina bestaat niet of is verplaatst. Ga terug naar Slijpmaat of kies een van de beschikbare pagina’s.',
  index: false,
  image: DEFAULT_SOCIAL_IMAGE,
  imageAlt: DEFAULT_SOCIAL_IMAGE_ALT,
};

export const PAGE_PATHS = Object.fromEntries(ROUTES.map((route) => [route.pageId, route.path])) as Record<PageId, string>;
export const INDEXABLE_ROUTES = ROUTES.filter((route) => route.index);
export const PRERENDER_PATHS = [...ROUTES.map((route) => route.path), NOT_FOUND_SEO.path];
export const getSocialImageUrl = (metadata: Pick<RouteSeo, 'image'>) => `${SITE_URL}${metadata.image ?? DEFAULT_SOCIAL_IMAGE}`;
export const getSocialImageAlt = (metadata: Pick<RouteSeo, 'imageAlt'>) => metadata.imageAlt ?? DEFAULT_SOCIAL_IMAGE_ALT;

const normalizePath = (pathname: string) => {
  const path = pathname.split(/[?#]/, 1)[0] || '/';
  if (path === '/') return path;
  return `${path.replace(/\/+$/, '')}/`;
};

export const getRouteByPath = (pathname: string) => {
  const normalizedPath = normalizePath(pathname);
  return ROUTES.find((route) => route.path === normalizedPath) ?? null;
};

export const getRouteByPage = (pageId: PageId) => ROUTES.find((route) => route.pageId === pageId)!;

const faqSchema = (faqs: Array<{ q: string; a: string }>) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
});

const getStructuredData = (pathname: string) => {
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
      image: getSocialImageUrl(metadata),
      inLanguage: 'nl-NL',
      isPartOf: { '@id': `${SITE_URL}/#website` },
    },
  ];

  if (route && route.path !== '/') {
    const breadcrumbItems = route.pageId === 'blog-hoe-slijp-je-een-mes'
      ? [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Blogs', item: `${SITE_URL}/blogs/` },
          { '@type': 'ListItem', position: 3, name: route.label, item: canonicalUrl },
        ]
      : route.pageId.startsWith('dienst-')
        ? [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Particulier', item: `${SITE_URL}/particulier/` },
            { '@type': 'ListItem', position: 3, name: route.label, item: canonicalUrl },
          ]
        : [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: route.label, item: canonicalUrl },
          ];

    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: breadcrumbItems,
    });
  }

  if (route?.pageId === 'faq') graph.push(faqSchema(FAQS));
  if (route?.pageId === 'ophalen-bezorgen') graph.push(faqSchema(SERVICEGEBIED_FAQS));
  if (route?.pageId === 'blog-hoe-slijp-je-een-mes') {
    graph.push({
      '@type': 'BlogPosting',
      '@id': `${canonicalUrl}#article`,
      headline: 'Hoe slijp je een mes? Zo krijgt je keukenmes zijn scherpte terug',
      description: route.description,
      image: [getSocialImageUrl(route)],
      datePublished: route.datePublished,
      dateModified: route.dateModified,
      inLanguage: 'nl-NL',
      mainEntityOfPage: { '@id': `${canonicalUrl}#webpage` },
      author: [
        { '@type': 'Person', name: 'Teun Versteeg' },
        { '@type': 'Person', name: 'Mike' },
      ],
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
};

export const jsonLdString = (pathname: string) => JSON.stringify(getStructuredData(pathname)).replace(/</g, '\\u003c');
