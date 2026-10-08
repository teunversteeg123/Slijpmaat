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

export default function App() {
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

  const pageFromPath = (pathname: string): PageId | null => {
    const normalizedPath = pathname !== '/' ? pathname.replace(/\/$/, '') : pathname;
    const match = Object.entries(pagePaths).find(([, path]) => path === normalizedPath);
    return match ? (match[0] as PageId) : null;
  };

  const [currentPage, setCurrentPage] = useState<PageId>(() => pageFromPath(window.location.pathname) ?? 'home');

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
