import { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import { CookieConsentProvider } from './context/CookieConsentContext';
import { trackPageView } from './utils/analytics';

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
import { NotFoundPage } from './pages/NotFoundPage';
import { getRouteByPage, getRouteByPath, jsonLdString, NOT_FOUND_SEO, PAGE_PATHS, SITE_URL } from './seo';

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

const setStructuredData = (pathname: string) => {
  let element = document.head.querySelector<HTMLScriptElement>('#route-jsonld');
  if (!element) {
    element = document.createElement('script');
    element.id = 'route-jsonld';
    element.type = 'application/ld+json';
    document.head.appendChild(element);
  }
  element.text = jsonLdString(pathname);
};

type AppProps = {
  initialPath?: string;
};

export default function App({ initialPath }: AppProps) {
  const browserPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  const [currentPage, setCurrentPage] = useState<PageId | null>(() => getRouteByPath(initialPath ?? browserPath)?.pageId ?? null);

  useEffect(() => {
    const metadata = currentPage ? getRouteByPage(currentPage) : NOT_FOUND_SEO;
    const canonicalUrl = `${SITE_URL}${metadata.path}`;

    document.title = metadata.title;
    setMetaContent('meta[name="description"]', 'name', 'description', metadata.description);
    setMetaContent('meta[name="robots"]', 'name', 'robots', metadata.index ? 'index,follow' : 'noindex,follow');
    setMetaContent('meta[property="og:title"]', 'property', 'og:title', metadata.title);
    setMetaContent('meta[property="og:description"]', 'property', 'og:description', metadata.description);
    setMetaContent('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaContent('meta[name="twitter:title"]', 'name', 'twitter:title', metadata.title);
    setMetaContent('meta[name="twitter:description"]', 'name', 'twitter:description', metadata.description);
    setCanonical(canonicalUrl);
    setStructuredData(metadata.path);
    trackPageView(metadata.path, metadata.title);
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    const nextPath = PAGE_PATHS[page];
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
        window.history.replaceState(null, '', PAGE_PATHS.particulieren);
        window.setTimeout(() => {
          document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 60);
        return;
      }
      if (hash === 'onze-maten' || hash === 'reviews') {
        setCurrentPage('over-ons');
        window.history.replaceState(null, '', PAGE_PATHS['over-ons']);
        window.setTimeout(() => {
          document.getElementById('utrechtse-quotes')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 60);
        return;
      }
      if (legacyHashPages[hash]) {
        const page = legacyHashPages[hash];
        setCurrentPage(page);
        window.history.replaceState(null, '', PAGE_PATHS[page]);
        return;
      }

      const route = getRouteByPath(window.location.pathname);
      setCurrentPage(route?.pageId ?? null);
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
        return <HorecaPage onNavigate={handleNavigate} />;
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
        return <NotFoundPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <LanguageProvider>
      <CookieConsentProvider>
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
      </CookieConsentProvider>
    </LanguageProvider>
  );
}
