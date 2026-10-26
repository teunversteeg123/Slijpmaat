import { lazy, Suspense, useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieConsentProvider } from './context/CookieConsentContext';
import { PageLoadBoundary } from './components/PageLoadBoundary';
import { trackAnalyticsEvent, trackPageView } from './utils/analytics';

// Pages
const HomePage = lazy(() => import('./pages/HomePage').then((module) => ({ default: module.HomePage })));
const ParticulierenPage = lazy(() => import('./pages/ParticulierenPage').then((module) => ({ default: module.ParticulierenPage })));
const HorecaPage = lazy(() => import('./pages/HorecaPage').then((module) => ({ default: module.HorecaPage })));
const WerkwijzePage = lazy(() => import('./pages/WerkwijzePage').then((module) => ({ default: module.WerkwijzePage })));
const ServicegebiedPage = lazy(() => import('./pages/ServicegebiedPage').then((module) => ({ default: module.ServicegebiedPage })));
const KennisbankPage = lazy(() => import('./pages/KennisbankPage').then((module) => ({ default: module.KennisbankPage })));
const BlogHoeSlijpJeEenMesPage = lazy(() => import('./pages/BlogHoeSlijpJeEenMesPage').then((module) => ({ default: module.BlogHoeSlijpJeEenMesPage })));
const OverOnsPage = lazy(() => import('./pages/OverOnsPage').then((module) => ({ default: module.OverOnsPage })));
const FaqPage = lazy(() => import('./pages/FaqPage').then((module) => ({ default: module.FaqPage })));
const VoorwaardenPage = lazy(() => import('./pages/VoorwaardenPage').then((module) => ({ default: module.VoorwaardenPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then((module) => ({ default: module.PrivacyPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage })));
import { getRouteByPage, getRouteByPath, getSocialImageAlt, getSocialImageUrl, jsonLdString, NOT_FOUND_SEO, PAGE_PATHS, SITE_URL } from './seo';

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

const scrollToSectionWhenReady = (id: string) => {
  const requestedUrl = window.location.href;
  const scroll = () => {
    const target = document.getElementById(id);
    if (!target) return false;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return true;
  };
  if (scroll()) return;
  // Lazy routes can arrive after the legacy-hash timer; wait for their content.
  const observer = new MutationObserver(() => {
    if (window.location.href !== requestedUrl || scroll()) {
      observer.disconnect();
      window.clearTimeout(timeout);
    }
  });
  const timeout = window.setTimeout(() => observer.disconnect(), 5000);
  observer.observe(document.getElementById('root') ?? document.body, { childList: true, subtree: true });
};

type AppProps = {
  initialPath?: string;
};

const LEGACY_HASH_PAGES: Readonly<Record<string, PageId>> = {
  home: 'home',
  particulieren: 'particulieren',
  horeca: 'horeca',
  'dienst-keukenmessen': 'particulieren',
  'dienst-japanse-messen': 'particulieren',
  'dienst-chips-herstellen': 'particulieren',
  'dienst-wel-niet': 'particulieren',
  werkwijze: 'werkwijze',
  'ophalen-bezorgen': 'ophalen-bezorgen',
  'buiten-utrecht': 'ophalen-bezorgen',
  kennisbank: 'blogs',
  blogs: 'blogs',
  'hoe-slijp-je-een-mes': 'blog-hoe-slijp-je-een-mes',
  'blog-hoe-slijp-je-een-mes': 'blog-hoe-slijp-je-een-mes',
  'over-ons': 'over-ons',
  faq: 'faq',
  'algemene-voorwaarden': 'algemene-voorwaarden',
  privacy: 'privacy',
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
    setMetaContent('meta[property="og:type"]', 'property', 'og:type', 'datePublished' in metadata && metadata.datePublished ? 'article' : 'website');
    setMetaContent('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaContent('meta[property="og:locale"]', 'property', 'og:locale', 'nl_NL');
    setMetaContent('meta[property="og:image"]', 'property', 'og:image', getSocialImageUrl(metadata));
    setMetaContent('meta[property="og:image:alt"]', 'property', 'og:image:alt', getSocialImageAlt(metadata));
    setMetaContent('meta[name="twitter:title"]', 'name', 'twitter:title', metadata.title);
    setMetaContent('meta[name="twitter:description"]', 'name', 'twitter:description', metadata.description);
    setMetaContent('meta[name="twitter:image"]', 'name', 'twitter:image', getSocialImageUrl(metadata));
    setMetaContent('meta[name="twitter:image:alt"]', 'name', 'twitter:image:alt', getSocialImageAlt(metadata));
    setCanonical(canonicalUrl);
    setStructuredData(metadata.path);
    trackPageView(metadata.path, metadata.title);
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    const nextPath = PAGE_PATHS[page];
    const fromPath = currentPage ? PAGE_PATHS[currentPage] : window.location.pathname;

    if (fromPath !== nextPath) {
      trackAnalyticsEvent('navigation_click', {
        from_path: fromPath,
        to_path: nextPath,
      });
    }

    setCurrentPage(page);
    if (window.location.pathname !== nextPath || window.location.hash) {
      window.history.pushState(null, '', nextPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Ondersteun echte paden, browsernavigatie en oude hashlinks.
  useEffect(() => {
    const syncLocation = () => {
      const hash = window.location.hash.replace('#', '');
      if (/^\/diensten\/(keukenmessen-slijpen|japanse-messen-slijpen|chips-herstellen|wat-slijpen-we)\/?$/.test(window.location.pathname)) {
        setCurrentPage('particulieren');
        window.history.replaceState(null, '', PAGE_PATHS.particulieren);
        return;
      }
      if (window.location.pathname === '/contact' || window.location.pathname === '/contact/' || hash === 'contact') {
        setCurrentPage('home');
        window.history.replaceState(null, '', '/#home-contact');
        window.setTimeout(() => {
          scrollToSectionWhenReady('home-contact');
        }, 60);
        return;
      }
      if (hash === 'home-contact') {
        setCurrentPage('home');
        window.setTimeout(() => {
          scrollToSectionWhenReady('home-contact');
        }, 60);
        return;
      }
      if (hash === 'prijzen-bestellen') {
        setCurrentPage('particulieren');
        window.history.replaceState(null, '', PAGE_PATHS.particulieren);
        window.setTimeout(() => {
          scrollToSectionWhenReady('calculator');
        }, 60);
        return;
      }
      if (hash === 'onze-maten' || hash === 'reviews') {
        setCurrentPage('over-ons');
        window.history.replaceState(null, '', PAGE_PATHS['over-ons']);
        window.setTimeout(() => {
          scrollToSectionWhenReady('utrechtse-quotes');
        }, 60);
        return;
      }
      if (LEGACY_HASH_PAGES[hash]) {
        const page = LEGACY_HASH_PAGES[hash];
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
      case 'werkwijze':
        return <WerkwijzePage onNavigate={handleNavigate} />;
      case 'ophalen-bezorgen':
        return <ServicegebiedPage onNavigate={handleNavigate} />;
      case 'blogs':
        return <KennisbankPage onNavigate={handleNavigate} />;
      case 'blog-hoe-slijp-je-een-mes':
        return <BlogHoeSlijpJeEenMesPage onNavigate={handleNavigate} />;
      case 'over-ons':
        return <OverOnsPage onNavigate={handleNavigate} />;
      case 'faq':
        return <FaqPage onNavigate={handleNavigate} />;
      case 'algemene-voorwaarden':
        return <VoorwaardenPage onNavigate={handleNavigate} />;
      case 'privacy':
        return <PrivacyPage onNavigate={handleNavigate} />;
      default:
        return <NotFoundPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <CookieConsentProvider>
      <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#244A30] antialiased font-sans">
        {/* Top Header */}
        <Header currentPage={currentPage} onNavigate={handleNavigate} />

        {/* Main Page Area */}
        <main className="flex-1 focus:outline-none" tabIndex={-1}>
          <PageLoadBoundary key={currentPage}>
            <Suspense fallback={<div role="status" className="min-h-[70svh] px-6 py-20 text-center text-[#3B7F4B]">Pagina laden…</div>}>
              {renderCurrentPage()}
            </Suspense>
          </PageLoadBoundary>
        </main>

        {/* Footer */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </CookieConsentProvider>
  );
}
