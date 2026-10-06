import React, { useState, useEffect } from 'react';
import { PageId, Article } from './types';
import { ARTICLES } from './data/siteData';
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
import { ArtikelPage } from './pages/ArtikelPage';
import { OverOnsPage } from './pages/OverOnsPage';
import { OnzeMatenPage } from './pages/OnzeMatenPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { VoorwaardenPage } from './pages/VoorwaardenPage';
import { PrivacyPage } from './pages/PrivacyPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedArticle, setSelectedArticle] = useState<Article>(ARTICLES[0]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    if (window.location.hash !== `#${page}`) {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (art: Article) => {
    setSelectedArticle(art);
    setCurrentPage('artikel');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync window hash for easy browser bookmarking / back navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'home-contact') {
        setCurrentPage('home');
        window.setTimeout(() => {
          document.getElementById('home-contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 60);
        return;
      }
      if (hash === 'buiten-utrecht') {
        setCurrentPage('ophalen-bezorgen');
        window.history.replaceState(null, '', '#ophalen-bezorgen');
        return;
      }
      const validPages: PageId[] = [
        'home',
        'particulieren',
        'horeca',
        'onze-maten',
        'dienst-keukenmessen',
        'dienst-japanse-messen',
        'dienst-chips-herstellen',
        'dienst-wel-niet',
        'werkwijze',
        'prijzen-bestellen',
        'ophalen-bezorgen',
        'kennisbank',
        'artikel',
        'over-ons',
        'reviews',
        'faq',
        'contact',
        'algemene-voorwaarden',
        'privacy'
      ];
      if (validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
      } else if (hash) {
        setCurrentPage('home');
        window.history.replaceState(null, '', '#home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash) {
      handleHashChange();
    }
    return () => window.removeEventListener('hashchange', handleHashChange);
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
      case 'prijzen-bestellen':
        return <ParticulierenPage onNavigate={handleNavigate} />;
      case 'ophalen-bezorgen':
        return <ServicegebiedPage onNavigate={handleNavigate} />;
      case 'kennisbank':
        return <KennisbankPage onNavigate={handleNavigate} onSelectArticle={handleSelectArticle} />;
      case 'artikel':
        return (
          <ArtikelPage
            article={selectedArticle}
            onNavigate={handleNavigate}
            onSelectArticle={handleSelectArticle}
          />
        );
      case 'over-ons':
        return <OverOnsPage onNavigate={handleNavigate} />;
      case 'onze-maten':
      case 'reviews':
        return <OnzeMatenPage onNavigate={handleNavigate} />;
      case 'faq':
        return <FaqPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
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
