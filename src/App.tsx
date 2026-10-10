import { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

// Pages
import { HomePage } from './pages/HomePage';
import { ParticulierenPage } from './pages/ParticulierenPage';
import { HorecaPage } from './pages/HorecaPage';
import { DienstDetailPage } from './pages/DienstDetailPage';
import { WerkwijzePage } from './pages/WerkwijzePage';
import { ServicegebiedPage } from './pages/ServicegebiedPage';
import { KennisbankPage } from './pages/KennisbankPage';
import { OverOnsPage } from './pages/OverOnsPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { VoorwaardenPage } from './pages/VoorwaardenPage';
import { PrivacyPage } from './pages/PrivacyPage';

const pagePaths: Record<PageId, string> = {
  home: '/',
  particulieren: '/particulier',
  horeca: '/zakelijk',
  'dienst-keukenmessen': '/diensten/keukenmessen-slijpen',
  'dienst-japanse-messen': '/diensten/japanse-messen-slijpen',
  'dienst-chips-herstellen': '/diensten/chips-herstellen',
  'dienst-wel-niet': '/diensten/wat-slijpen-we',
  werkwijze: '/werkwijze',
  'ophalen-bezorgen': '/servicegebied',
  blogs: '/blogs',
  'over-ons': '/over-ons',
  faq: '/veelgestelde-vragen',
  contact: '/contact',
  'algemene-voorwaarden': '/algemene-voorwaarden',
  privacy: '/privacyverklaring',
};

type SeoMetadata = {
  title: string;
  description: string;
  index: boolean;
};

const seoMetadata: Record<PageId, SeoMetadata> = {
  home: {
    title: 'Messen slijpen Utrecht · Ophalen & bezorgen · Slijpmaat',
    description:
      'Laat je keukenmessen slijpen in Utrecht. Slijpmaat haalt ze thuis of op de zaak op, slijpt ze met de hand op waterstenen en brengt ze scherp terug.',
    index: true,
  },
  particulieren: {
    title: 'Keukenmessen slijpen Utrecht · Prijzen · Slijpmaat',
    description:
      'Bereken direct de prijs voor het slijpen van je keukenmessen. Ophalen en bezorgen in Utrecht of zelf brengen op afspraak bij Slijpmaat.',
    index: true,
  },
  horeca: {
    title: 'Horeca messen slijpen · Zakelijk · Slijpmaat',
    description:
      'Professioneel messen slijpen voor horeca uit heel Nederland. Breng en haal je messen op afspraak in Utrecht; lokale service in Utrecht is mogelijk.',
    index: true,
  },
  'dienst-keukenmessen': {
    title: 'Keukenmessen slijpen op waterstenen · Slijpmaat',
    description:
      'Laat gladde keukenmessen en koksmessen zorgvuldig met de hand slijpen op Japanse waterstenen, met aandacht voor snede, staal en profiel.',
    index: true,
  },
  'dienst-japanse-messen': {
    title: 'Japanse messen laten slijpen · Slijpmaat',
    description:
      'Slijpmaat slijpt Japanse keukenmessen met de hand op waterstenen, afgestemd op het staal, het profiel en de conditie van de snede.',
    index: true,
  },
  'dienst-chips-herstellen': {
    title: 'Chip in keukenmes laten herstellen · Slijpmaat',
    description:
      'Kleine chips en beschadigde punten kunnen vaak worden hersteld. Stuur eerst een foto, dan beoordeelt Slijpmaat de schade en mogelijkheden.',
    index: true,
  },
  'dienst-wel-niet': {
    title: 'Welke messen slijpen wij? · Slijpmaat',
    description:
      'Bekijk welke gladde keukenmessen Slijpmaat aanneemt, welke beschadigingen mogelijk te herstellen zijn en waarom kartelmessen niet worden aangenomen.',
    index: true,
  },
  werkwijze: {
    title: 'Messen slijpen op waterstenen · Werkwijze · Slijpmaat',
    description:
      'Bekijk hoe Slijpmaat keukenmessen beoordeelt, met de hand slijpt op Japanse waterstenen en zorgvuldig afwerkt op leer.',
    index: true,
  },
  'ophalen-bezorgen': {
    title: 'Messen slijpen Utrecht & zelf langsbrengen · Slijpmaat',
    description:
      'Slijpmaat haalt en bezorgt messen binnen Utrecht. Kom vanuit heel Nederland op afspraak langs; ook voor horeca, chefs en complete messenrollen.',
    index: true,
  },
  blogs: {
    title: 'Blogs over messen slijpen en onderhoud · Slijpmaat',
    description:
      'Binnenkort lees je hier praktische artikelen van Slijpmaat over keukenmessen, onderhoud, veilig gebruik en professioneel slijpen.',
    index: false,
  },
  'over-ons': {
    title: 'Over Slijpmaat · Messenslijper uit Utrecht',
    description:
      'Lees hoe Teun en Mike Slijpmaat begonnen en waarom zij keukenmessen met de hand slijpen voor duurzaam behoud en langdurig snijplezier.',
    index: true,
  },
  faq: {
    title: 'Veelgestelde vragen over messen slijpen · Slijpmaat',
    description:
      'Antwoorden over prijzen, soorten messen, veilig verpakken, ophalen en bezorgen, langsbrengen, betalen en het handmatige slijpproces.',
    index: true,
  },
  contact: {
    title: 'Contact met Slijpmaat · Messenslijper Utrecht',
    description:
      'Neem contact op met Slijpmaat voor een afspraak, zakelijke aanvraag of advies over je keukenmessen. Je spreekt direct met Teun of Mike.',
    index: true,
  },
  'algemene-voorwaarden': {
    title: 'Algemene voorwaarden · Slijpmaat',
    description: 'Lees de algemene voorwaarden die gelden voor opdrachten, afspraken en dienstverlening van Slijpmaat.',
    index: false,
  },
  privacy: {
    title: 'Privacyverklaring · Slijpmaat',
    description:
      'Lees hoe Slijpmaat persoonsgegevens verwerkt, beveiligt en bewaart en welke privacyrechten je daarbij hebt.',
    index: false,
  },
};

const setMetaContent = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
};

const setCanonical = (url: string) => {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.rel = 'canonical';
    document.head.appendChild(element);
  }
  element.href = url;
};

export default function App() {
  const pageFromPath = (pathname: string): PageId | null => {
    const normalizedPath = pathname !== '/' ? pathname.replace(/\/$/, '') : pathname;
    const match = Object.entries(pagePaths).find(([, path]) => path === normalizedPath);
    return match ? (match[0] as PageId) : null;
  };

  const [currentPage, setCurrentPage] = useState<PageId>(() => pageFromPath(window.location.pathname) ?? 'home');

  useEffect(() => {
    const metadata = seoMetadata[currentPage];
    const canonicalUrl = `https://slijpmaat.nl${pagePaths[currentPage]}`;

    document.title = metadata.title;
    setMetaContent('meta[name="description"]', 'name', 'description', metadata.description);
    setMetaContent('meta[name="robots"]', 'name', 'robots', metadata.index ? 'index,follow' : 'noindex,follow');
    setMetaContent('meta[property="og:title"]', 'property', 'og:title', metadata.title);
    setMetaContent('meta[property="og:description"]', 'property', 'og:description', metadata.description);
    setMetaContent('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaContent('meta[name="twitter:title"]', 'name', 'twitter:title', metadata.title);
    setMetaContent('meta[name="twitter:description"]', 'name', 'twitter:description', metadata.description);
    setCanonical(canonicalUrl);
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    const nextPath = pagePaths[page];
    if (window.location.pathname !== nextPath || window.location.hash) {
      window.history.pushState(null, '', nextPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Ondersteun echte paden, browsernavigatie en oude hashlinks.
  useEffect(() => {
    const syncLocation = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'home-contact') {
        setCurrentPage('home');
        window.setTimeout(() => {
          document.getElementById('home-contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 60);
        return;
      }
      const legacyHashPages: Record<string, PageId> = {
        home: 'home',
        particulieren: 'particulieren',
        horeca: 'horeca',
        'dienst-keukenmessen': 'dienst-keukenmessen',
        'dienst-japanse-messen': 'dienst-japanse-messen',
        'dienst-chips-herstellen': 'dienst-chips-herstellen',
        'dienst-wel-niet': 'dienst-wel-niet',
        werkwijze: 'werkwijze',
        'ophalen-bezorgen': 'ophalen-bezorgen',
        'buiten-utrecht': 'ophalen-bezorgen',
        kennisbank: 'blogs',
        blogs: 'blogs',
        'over-ons': 'over-ons',
        faq: 'faq',
        contact: 'contact',
        'algemene-voorwaarden': 'algemene-voorwaarden',
        privacy: 'privacy',
      };
      if (hash === 'prijzen-bestellen') {
        setCurrentPage('particulieren');
        window.history.replaceState(null, '', pagePaths.particulieren);
        window.setTimeout(() => {
          document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 60);
        return;
      }
      if (hash === 'onze-maten' || hash === 'reviews') {
        setCurrentPage('over-ons');
        window.history.replaceState(null, '', pagePaths['over-ons']);
        window.setTimeout(() => {
          document.getElementById('utrechtse-quotes')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 60);
        return;
      }
      if (legacyHashPages[hash]) {
        const page = legacyHashPages[hash];
        setCurrentPage(page);
        window.history.replaceState(null, '', pagePaths[page]);
        return;
      }

      const page = pageFromPath(window.location.pathname);
      setCurrentPage(page ?? 'home');
      if (!page) window.history.replaceState(null, '', pagePaths.home);
    };

    window.addEventListener('popstate', syncLocation);
    window.addEventListener('hashchange', syncLocation);
    syncLocation();
    return () => {
      window.removeEventListener('popstate', syncLocation);
      window.removeEventListener('hashchange', syncLocation);
    };
  }, []);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'particulieren':
        return <ParticulierenPage onNavigate={handleNavigate} />;
      case 'horeca':
        return <HorecaPage />;
      case 'dienst-keukenmessen':
      case 'dienst-japanse-messen':
      case 'dienst-chips-herstellen':
      case 'dienst-wel-niet':
        return <DienstDetailPage pageId={currentPage} onNavigate={handleNavigate} />;
      case 'werkwijze':
        return <WerkwijzePage onNavigate={handleNavigate} />;
      case 'ophalen-bezorgen':
        return <ServicegebiedPage onNavigate={handleNavigate} />;
      case 'blogs':
        return <KennisbankPage onNavigate={handleNavigate} />;
      case 'over-ons':
        return <OverOnsPage onNavigate={handleNavigate} />;
      case 'faq':
        return <FaqPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'algemene-voorwaarden':
        return <VoorwaardenPage onNavigate={handleNavigate} />;
      case 'privacy':
        return <PrivacyPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#244A30] antialiased font-sans">
        {/* Top Header */}
        <Header currentPage={currentPage} onNavigate={handleNavigate} />

        {/* Main Page Area */}
        <main className="flex-1 focus:outline-none" tabIndex={-1}>
          {renderCurrentPage()}
        </main>

        {/* Footer */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </LanguageProvider>
  );
}
