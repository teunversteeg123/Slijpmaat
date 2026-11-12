import type { PageId } from './types';
import { FAQS, SERVICEGEBIED_FAQS } from './data/siteData';

export const SITE_URL = 'https://slijpmaat.nl';
export const KNIFE_SHARPENING_ARTICLE_TITLE = 'Hoe slijp je een keukenmes op een slijpsteen?';
export const HORECA_SHARPENING_ARTICLE_TITLE = 'Hoe vaak moet je koksmessen slijpen in de horeca?';
const DEFAULT_SOCIAL_IMAGE = '/assets/slijpmaat-homepage-hero.jpg';
const DEFAULT_SOCIAL_IMAGE_ALT = 'Slijpmaat slijpt messen met de hand in Utrecht';

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
  articleHeadline?: string;
};

const ROUTES: RouteSeo[] = [
  {
    pageId: 'home',
    path: '/',
    label: 'Home',
    title: 'Messen slijpen Utrecht | Slijpmaat.nl',
    description: 'Messen laten slijpen in Utrecht? Slijpmaat slijpt met de hand voor particulieren en horeca. Wij halen je messen op en bezorgen ze vaak binnen 2 dagen terug.',
    index: true,
    image: '/assets/slijpmaat-homepage-hero.jpg',
    imageAlt: 'Koksmes bij Slijpmaat in Utrecht',
  },
  {
    pageId: 'particulieren',
    path: '/particulier/',
    label: 'Particulier',
    title: 'Prijzen voor messen slijpen in Utrecht | Slijpmaat',
    description: 'Bereken wat het kost om je keukenmessen te laten slijpen. Binnen ons Utrechtse servicegebied halen en bezorgen we gratis vanaf €35 bestelwaarde.',
    index: true,
    image: '/assets/tomaat-video-poster.webp',
    imageAlt: 'Scherp keukenmes snijdt een tomaat op een houten snijplank',
  },
  {
    pageId: 'horeca',
    path: '/zakelijk/',
    label: 'Zakelijk',
    title: 'Professioneel messen slijpen voor horeca | Slijpmaat',
    description: 'Laat je koksmessen met de hand slijpen door Slijpmaat. Horeca uit heel Nederland kan messen op afspraak in Utrecht brengen en ophalen.',
    index: true,
    image: '/assets/tomaat-video-poster.webp',
    imageAlt: 'Scherp keukenmes snijdt een tomaat voor een zakelijke slijpservice',
  },
  {
    pageId: 'werkwijze',
    path: '/werkwijze/',
    label: 'Werkwijze',
    title: 'Zo slijpen wij messen met de hand | Slijpmaat',
    description: 'Bekijk hoe we je mes controleren, met de hand slijpen op Japanse slijpstenen en de snede op leer afwerken. Van eerste inspectie tot eindcontrole.',
    index: true,
    image: '/assets/werkwijze/03-slijpen.webp',
    imageAlt: 'Handmatig slijpen op Japanse slijpstenen bij Slijpmaat',
  },
  {
    pageId: 'ophalen-bezorgen',
    path: '/servicegebied/',
    label: 'Servicegebied',
    title: 'Messen ophalen en bezorgen in Utrecht | Slijpmaat',
    description: 'Check je postcode en bekijk waar Slijpmaat messen ophaalt en terugbezorgt in Utrecht. Je kunt je messen ook zelf brengen en ophalen op afspraak.',
    index: true,
    image: '/assets/kaart-utrecht-bezorggebied-statisch-hd.webp',
    imageAlt: 'Kaart van het Utrechtse servicegebied van Slijpmaat',
  },
  {
    pageId: 'blogs',
    path: '/blogs/',
    label: 'Blogs',
    title: 'Blogs over messen slijpen en onderhoud | Slijpmaat',
    description: 'Leer zelf een keukenmes slijpen op een Japanse slijpsteen en ontdek hoe je slijpbeurten voor koksmessen plant in de horeca.',
    index: true,
    image: '/assets/kennisbank-slijpmaat-kaartje-planten.webp',
    imageAlt: 'Slijpmaat-kaartje tussen groene planten bij de blogs',
  },
  {
    pageId: 'blog-hoe-slijp-je-een-mes',
    path: '/blogs/hoe-slijp-je-een-mes/',
    label: KNIFE_SHARPENING_ARTICLE_TITLE,
    title: `${KNIFE_SHARPENING_ARTICLE_TITLE} | Slijpmaat`,
    description: 'Slijp je keukenmes stap voor stap op een Japanse slijpsteen. Leer welke korrel je kiest, hoe je de slijphoek vasthoudt en hoe je de braam verwijdert.',
    index: true,
    image: '/assets/werkwijze/03-slijpen.webp',
    imageAlt: 'Keukenmes wordt met de hand geslepen op een Japanse slijpsteen',
    articleHeadline: KNIFE_SHARPENING_ARTICLE_TITLE,
    datePublished: '2026-10-15',
    dateModified: '2026-10-17',
  },
  {
    pageId: 'blog-koksmessen-slijpen-horeca',
    path: '/blogs/hoe-vaak-koksmessen-slijpen-horeca/',
    label: 'Koksmessen slijpen in de horeca',
    title: `${HORECA_SHARPENING_ARTICLE_TITLE} | Slijpmaat`,
    description: 'Wanneer is een koksmes toe aan een slijpbeurt? Herken een bot mes en plan het slijpen in rond de service van je restaurant.',
    index: true,
    image: '/assets/tomaat-video-poster.webp',
    imageAlt: 'Een koksmes snijdt een tomaat op een houten snijplank',
    articleHeadline: HORECA_SHARPENING_ARTICLE_TITLE,
    datePublished: '2026-11-12',
  },
  {
    pageId: 'over-ons',
    path: '/over-ons/',
    label: 'Over ons',
    title: 'Teun en Mike, messenslijpers in Utrecht | Slijpmaat',
    description: 'Maak kennis met Teun en Mike. Lees hoe Slijpmaat aan de keukentafel in Utrecht begon en waarom we messen voor thuiskoks en chefs met de hand slijpen.',
    index: true,
    image: '/assets/team/teun-en-mike-samen.webp',
    imageAlt: 'Teun en Mike, de oprichters van Slijpmaat',
  },
  {
    pageId: 'faq',
    path: '/veelgestelde-vragen/',
    label: 'Veelgestelde vragen',
    title: 'Veelgestelde vragen over messen slijpen | Slijpmaat',
    description: 'Welke messen kunnen we slijpen? Lees hoe we Japanse messen beoordelen, hoe lang een slijpbeurt duurt en hoe ophalen en bezorgen werkt.',
    index: true,
    image: '/assets/faq-slijpmaat-kaartje-bessen.webp',
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
    const breadcrumbItems = route.articleHeadline
      ? [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Blogs', item: `${SITE_URL}/blogs/` },
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
  if (route?.articleHeadline) {
    graph.push({
      '@type': 'BlogPosting',
      '@id': `${canonicalUrl}#article`,
      headline: route.articleHeadline,
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
