import React, { useState } from 'react';
import { SlijpmaatLogo } from './SlijpmaatLogo';
import { PageId } from '../types';
import { Menu, X, ArrowRight, MessageCircle, MapPin } from 'lucide-react';
import { SLIJPMAAT_INFO } from '../data/siteData';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'particulieren', label: 'Particulieren' },
    { id: 'horeca', label: 'Horeca' },
    { id: 'diensten', label: 'Diensten' },
    { id: 'werkwijze', label: 'Werkwijze' },
    { id: 'kennisbank', label: 'Kennisbank' },
    { id: 'over-ons', label: 'Over ons' },
  ];

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Announcement Bar: #3B7F4B (Slijpmaat Groen) with White text */}
      <div className="bg-[#3B7F4B] text-white text-xs py-2 px-4 border-b border-[#315F3B]/30 select-none">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs">
            <span className="flex h-2 w-2 rounded-full bg-white animate-pulse" />
            <span className="font-semibold text-white">Gratis ophalen &amp; bezorgen in Utrecht</span>
            <span className="text-[#E8EFE8] hidden sm:inline">&middot; vanaf 3 messen</span>
            <span className="text-white/40 hidden md:inline">&middot;</span>
            <span className="text-[#E8EFE8] hidden md:inline">Buiten Utrecht? Breng ze langs op afspraak</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <button
              onClick={() => handleLinkClick('ophalen-bezorgen')}
              className="text-white hover:text-[#E8EFE8] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-[#fff]" />
              <span>Servicegebied Utrecht</span>
            </button>
            <a
              href={`https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik wil graag mijn messen laten slijpen!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#E8EFE8] transition-colors flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5 text-white" />
              <span className="hidden sm:inline">WhatsApp je Maat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky header */}
      <header className="sticky top-0 z-40 bg-[#F7F4EC] border-b border-[#3B7F4B]/20 shadow-xs transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Zone 1: Wordmark Brand Lockup */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B7F4B] rounded-lg p-1"
            aria-label="Slijpmaat home"
          >
            <SlijpmaatLogo variant="dark" size="lg" />
          </button>

          {/* Zone 2: Clean Text Navigation (color: #244A30, hover: #3B7F4B) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#244A30]">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id || (link.id === 'diensten' && currentPage.startsWith('dienst-'));
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap cursor-pointer hover:text-[#3B7F4B] ${
                    isActive ? 'text-[#3B7F4B] font-bold' : 'text-[#244A30]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3B7F4B] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('prijzen-bestellen')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-[#E87B5B] hover:bg-[#C95E3E] active:scale-[0.98] transition-all shadow-xs whitespace-nowrap cursor-pointer"
            >
              <span>Prijzen &amp; bestellen</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full border-2 border-[#3B7F4B] text-[#244A30] bg-[#F7F4EC] hover:bg-[#E8EFE8] transition-colors"
              aria-label={mobileMenuOpen ? 'Menu sluiten' : 'Menu openen'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-[#3B7F4B]/20 bg-[#F7F4EC] px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-[#E8EFE8] text-[#3B7F4B] font-bold'
                        : 'text-[#244A30] hover:bg-white/60'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#3B7F4B]/15 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik wil graag een afspraak maken om mijn messen te laten slijpen!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full text-center text-sm font-bold text-white bg-[#3B7F4B] hover:bg-[#244A30] transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>WhatsApp je Maat ({SLIJPMAAT_INFO.whatsappDisplay})</span>
              </a>

              <button
                onClick={() => handleLinkClick('prijzen-bestellen')}
                className="w-full py-3 rounded-full text-center text-sm font-bold text-white bg-[#E87B5B] hover:bg-[#C95E3E] transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Plan je slijpbeurt / Prijzen</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleLinkClick('ophalen-bezorgen')}
                className="w-full py-2.5 rounded-full text-center text-sm font-semibold text-[#244A30] bg-white border border-[#3B7F4B]/30 hover:bg-[#E8EFE8] transition-colors flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#3B7F4B]" />
                <span>Ophalen, bezorgen &amp; langsbrengen</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
