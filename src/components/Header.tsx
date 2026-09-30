import React, { useState } from 'react';
import { SlijpmaatLogo } from './SlijpmaatLogo';
import { PageId } from '../types';
import { Menu, X, ChevronDown, MessageCircle, MapPin } from 'lucide-react';
import { SLIJPMAAT_INFO } from '../data/siteData';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'over-ons', label: 'Over ons' },
    { id: 'werkwijze', label: 'Werkwijze' },
    { id: 'kennisbank', label: 'Kennisbank' },
  ];

  const closeHeaderMenus = () => {
    setMobileMenuOpen(false);
    document.querySelectorAll<HTMLDetailsElement>('[data-header-menu]').forEach((menu) => menu.removeAttribute('open'));
  };

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    closeHeaderMenus();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePriceClick = (pageId: 'particulieren' | 'horeca', targetId: 'calculator' | 'zakelijk-formulier') => {
    onNavigate(pageId);
    closeHeaderMenus();
    window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
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
              const isActive = currentPage === link.id;
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
            <details name="header-menu" data-header-menu className="group relative">
              <summary className={`relative flex cursor-pointer list-none items-center gap-1.5 py-1 transition-colors marker:hidden hover:text-[#3B7F4B] ${currentPage === 'particulieren' || currentPage === 'horeca' ? 'font-bold text-[#3B7F4B]' : 'text-[#244A30]'}`}>
                <span>Prijzen</span>
                <ChevronDown className="h-3.5 w-3.5 transition-transform group-open:rotate-180" aria-hidden="true" />
                {(currentPage === 'particulieren' || currentPage === 'horeca') ? <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#3B7F4B]" /> : null}
              </summary>
              <div className="absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3">
                <div className="overflow-hidden rounded-2xl border border-[#d9e1d7] bg-white p-2 shadow-xl">
                  <button type="button" onClick={() => handlePriceClick('particulieren', 'calculator')} className="block w-full rounded-xl px-4 py-3 text-left transition-colors hover:bg-[#E8EFE8]">
                    <span className="block font-heading text-sm font-bold text-[#244A30]">Particulier</span>
                    <span className="mt-0.5 block text-xs text-[#657068]">Naar de prijs- en bestelcalculator</span>
                  </button>
                  <button type="button" onClick={() => handlePriceClick('horeca', 'zakelijk-formulier')} className="block w-full rounded-xl px-4 py-3 text-left transition-colors hover:bg-[#FFF4EF]">
                    <span className="block font-heading text-sm font-bold text-[#C95E3E]">Zakelijk</span>
                    <span className="mt-0.5 block text-xs text-[#657068]">Naar de zakelijke aanvraag</span>
                  </button>
                </div>
              </div>
            </details>
          </nav>

          {/* Zone 3: Primary Action buttons */}
          <div className="flex items-center gap-3">
            <details name="header-menu" data-header-menu className="group relative hidden sm:block">
              <summary
                className={`flex cursor-pointer list-none items-center gap-2 rounded-full bg-[#E87B5B] px-5 py-2.5 text-sm font-bold text-white shadow-xs transition-all marker:hidden hover:bg-[#C95E3E] active:scale-[0.98] ${currentPage === 'particulieren' || currentPage === 'horeca' ? 'ring-2 ring-[#C95E3E] ring-offset-2' : ''}`}
              >
                <span>Plan je slijpbeurt</span>
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>

              <div className="absolute right-0 top-full z-50 w-64 pt-3">
                <div className="overflow-hidden rounded-2xl border border-[#d9e1d7] bg-white p-2 shadow-xl">
                  <button type="button" onClick={() => handleLinkClick('particulieren')} className="block w-full rounded-xl px-4 py-3 text-left transition-colors hover:bg-[#E8EFE8]">
                    <span className="block font-heading text-sm font-bold text-[#244A30]">Particulier</span>
                    <span className="mt-0.5 block text-xs text-[#657068]">Bereken je prijs en plan via WhatsApp</span>
                  </button>
                  <button type="button" onClick={() => handleLinkClick('horeca')} className="block w-full rounded-xl px-4 py-3 text-left transition-colors hover:bg-[#FFF4EF]">
                    <span className="block font-heading text-sm font-bold text-[#C95E3E]">Zakelijk</span>
                    <span className="mt-0.5 block text-xs text-[#657068]">Bespreek aantallen en planning</span>
                  </button>
                </div>
              </div>
            </details>

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
              <div className="mb-2 rounded-2xl border border-[#E87B5B]/30 bg-white p-2">
                <p className="px-3 pb-1.5 pt-1 font-heading text-xs font-bold uppercase tracking-[0.14em] text-[#C95E3E]">Plan je slijpbeurt</p>
                <button type="button" onClick={() => handleLinkClick('particulieren')} className={`w-full rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition-colors ${currentPage === 'particulieren' ? 'bg-[#E8EFE8] text-[#3B7F4B]' : 'text-[#244A30] hover:bg-[#E8EFE8]'}`}>Particulier</button>
                <button type="button" onClick={() => handleLinkClick('horeca')} className={`w-full rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition-colors ${currentPage === 'horeca' ? 'bg-[#FFF4EF] text-[#C95E3E]' : 'text-[#244A30] hover:bg-[#FFF4EF]'}`}>Zakelijk</button>
              </div>
              <div className="mb-2 rounded-2xl border border-[#3B7F4B]/25 bg-white p-2">
                <p className="px-3 pb-1.5 pt-1 font-heading text-xs font-bold uppercase tracking-[0.14em] text-[#3B7F4B]">Prijzen</p>
                <button type="button" onClick={() => handlePriceClick('particulieren', 'calculator')} className="w-full rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-[#244A30] transition-colors hover:bg-[#E8EFE8]">Particulier</button>
                <button type="button" onClick={() => handlePriceClick('horeca', 'zakelijk-formulier')} className="w-full rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-[#244A30] transition-colors hover:bg-[#FFF4EF]">Zakelijk</button>
              </div>
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
