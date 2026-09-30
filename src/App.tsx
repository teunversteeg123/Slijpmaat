import React, { useState, useEffect } from 'react';
import { PageId, Article } from './types';
import { ARTICLES } from './data/siteData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { SLIJPMAAT_INFO } from './data/siteData';
import { MessageCircle, ArrowRight } from 'lucide-react';

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
      const validPages: PageId[] = [
        'home',
        'particulieren',
        'horeca',
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
        return <ParticulierenPage />;
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
        return <ParticulierenPage />;
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
      case 'reviews':
        return <ReviewsPage />;
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
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-800 antialiased font-sans">
      {/* Top Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Area */}
      <main className="flex-1 focus:outline-none pb-20 md:pb-0" tabIndex={-1}>
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Sticky Action Bar for maximum mobile conversion */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#d9e1d7] p-2.5 px-4 flex items-center justify-between gap-3 shadow-lg">
        <a
          href={`https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik wil graag mijn messen laten slijpen!')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-3 rounded-full bg-[#3B7F4B] active:bg-[#244A30] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs active:scale-[0.98] transition-all min-h-[46px]"
        >
          <MessageCircle className="w-4 h-4 text-white shrink-0" />
          <span className="truncate">WhatsApp je Maat</span>
        </a>

        <button
          onClick={() => handleNavigate('particulieren')}
          className="flex-1 py-3 px-3 rounded-full bg-[#E87B5B] active:bg-[#C95E3E] text-white font-bold text-xs flex items-center justify-center gap-1 shadow-2xs active:scale-[0.98] transition-all min-h-[46px]"
        >
          <span className="truncate">Plan slijpbeurt</span>
          <ArrowRight className="w-3.5 h-3.5 text-white shrink-0" />
        </button>
      </div>

    </div>
  );
}
