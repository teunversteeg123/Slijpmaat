import React, { useState, useEffect, useRef } from 'react';
import { SlijpmaatLogo } from './SlijpmaatLogo';
import { PageId } from '../types';
import { Menu, X, ChevronDown, MessageCircle, MapPin } from 'lucide-react';
import { SLIJPMAAT_INFO } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSlider } from './LanguageSlider';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePrijzenOpen, setMobilePrijzenOpen] = useState(false);
  const [mobilePlanOpen, setMobilePlanOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      // Always show at or near the very top (including iOS bounce)
      if (currentScrollY <= 20) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      const delta = currentScrollY - lastScrollY.current;
      // Filter out small jitter
      if (Math.abs(delta) < 8) {
        return;
      }

      if (delta > 0 && currentScrollY > 70) {
        // Scrolling down -> hide header
        setIsVisible(false);
      } else if (delta < 0) {
        // Scrolling up -> show header
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; labelKey: string; defaultLabel: string }[] = [
    { id: 'home', labelKey: 'nav.home', defaultLabel: 'Home' },
    { id: 'over-ons', labelKey: 'nav.over_ons', defaultLabel: 'Over ons' },
    { id: 'werkwijze', labelKey: 'nav.werkwijze', defaultLabel: 'Werkwijze' },
    { id: 'blogs', labelKey: 'nav.blogs', defaultLabel: 'Blogs' },
  ];

  const closeHeaderMenus = () => {
    setMobileMenuOpen(false);
    setMobilePrijzenOpen(false);
    setMobilePlanOpen(false);
    setIsVisible(true);
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

  const isHeaderVisible = isVisible || mobileMenuOpen;

  return (
    <div
      className={`sticky top-0 z-50 w-full transition-transform duration-300 ease-in-out ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Top Announcement Bar: #3B7F4B (Slijpmaat Groen) with White text */}
      <div className="bg-[#3B7F4B] text-white text-[11px] sm:text-xs py-2 px-3 sm:px-4 select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-between gap-3">
          <button
            type="button"
            onClick={() => handleLinkClick('ophalen-bezorgen')}
            className="flex items-center justify-center gap-1.5 sm:gap-2 text-center sm:text-left text-white hover:text-[#E8EFE8] transition-colors cursor-pointer"
          >
            <span className="flex h-2 w-2 shrink-0 rounded-full bg-white animate-pulse" />
            <span className="font-semibold">{t('topbar.free_pickup', 'Gratis ophalen & bezorgen in Utrecht')}</span>
            <span className="text-[#E8EFE8] hidden md:inline">&middot; {t('topbar.min_knives', 'vanaf 3 messen')}</span>
          </button>

          <div className="hidden sm:flex items-center gap-3 sm:gap-4 text-xs font-semibold">
            <button
              type="button"
              onClick={() => handleLinkClick('ophalen-bezorgen')}
              className="text-white hover:text-[#E8EFE8] transition-colors flex items-center gap-1 cursor-pointer shrink-0"
            >
              <MapPin className="w-3.5 h-3.5 text-white shrink-0" />
              <span>{t('topbar.service_area', 'Servicegebied')}</span>
            </button>
            <a
              href={`https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik wil graag mijn messen laten slijpen!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#E8EFE8] transition-colors flex items-center gap-1 shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 text-white shrink-0" />
              <span className="hidden sm:inline">{t('topbar.whatsapp', 'WhatsApp je Maat')}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`bg-[#F7F4EC] border-b border-[#3B7F4B]/20 transition-shadow ${isScrolled ? 'shadow-md' : 'shadow-xs'}`}>
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
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#3B7F4B]">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap cursor-pointer hover:text-[#3B7F4B] ${
                    isActive ? 'text-[#3B7F4B] font-bold' : 'text-[#3B7F4B]'
                  }`}
                >
                  {t(link.labelKey, link.defaultLabel)}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3B7F4B] rounded-full" />
                  )}
                </button>
              );
            })}
            <details name="header-menu" data-header-menu className="group relative">
              <summary className={`relative flex cursor-pointer list-none items-center gap-1.5 py-1 transition-colors marker:hidden hover:text-[#3B7F4B] ${currentPage === 'particulieren' || currentPage === 'horeca' ? 'font-bold text-[#3B7F4B]' : 'text-[#3B7F4B]'}`}>
                <span>{t('nav.prijzen', 'Prijzen')}</span>
                <ChevronDown className="h-3.5 w-3.5 transition-transform group-open:rotate-180" aria-hidden="true" />
                {(currentPage === 'particulieren' || currentPage === 'horeca') ? <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#3B7F4B]" /> : null}
              </summary>
              <div className="absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3">
                <div className="overflow-hidden rounded-2xl border border-[#d9e1d7] bg-white p-2 shadow-xl">
                  <button type="button" onClick={() => handlePriceClick('particulieren', 'calculator')} className="block w-full rounded-xl px-4 py-3 text-left transition-colors hover:bg-[#E8EFE8]">
                    <span translate="no" className="notranslate block font-heading text-sm font-bold text-[#3B7F4B]">Particulier</span>
                    <span className="mt-0.5 block text-xs text-[#657068]">{t('nav.particulier_sub', 'Naar de prijs- en bestelform')}</span>
                  </button>
                  <button type="button" onClick={() => handlePriceClick('horeca', 'zakelijk-formulier')} className="block w-full rounded-xl px-4 py-3 text-left transition-colors hover:bg-[#FFF4EF]">
                    <span translate="no" className="notranslate block font-heading text-sm font-bold text-[#C95E3E]">Zakelijk</span>
                    <span className="mt-0.5 block text-xs text-[#657068]">{t('nav.zakelijk_sub', 'Naar de zakelijke aanvraag')}</span>
                  </button>
                </div>
              </div>
            </details>
          </nav>

          {/* Zone 3: Primary Action buttons & Language Switcher */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* The small language slider switch */}
            <LanguageSlider />

            <details name="header-menu" data-header-menu className="group relative hidden sm:block">
              <summary
                className={`flex cursor-pointer list-none items-center gap-2 rounded-full bg-[#E87B5B] px-5 py-2.5 text-sm font-bold text-white shadow-xs transition-all marker:hidden hover:bg-[#C95E3E] active:scale-[0.98] ${currentPage === 'particulieren' || currentPage === 'horeca' ? 'ring-2 ring-[#C95E3E] ring-offset-2' : ''}`}
              >
                <span>{t('nav.plan_button', 'Plan je slijpbeurt')}</span>
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>

              <div className="absolute right-0 top-full z-50 w-60 pt-3">
                <div className="overflow-hidden rounded-2xl border border-[#d9e1d7] bg-white p-2 shadow-xl">
                  <button type="button" onClick={() => handleLinkClick('particulieren')} className="block w-full rounded-xl px-4 py-3 text-left transition-colors hover:bg-[#E8EFE8]">
                    <span translate="no" className="notranslate block font-heading text-sm font-bold text-[#3B7F4B]">Particulier</span>
                    <span className="mt-0.5 block text-xs text-[#657068]">{t('nav.particulier_sub', 'Naar de prijs- en bestelform')}</span>
                  </button>
                  <button type="button" onClick={() => handleLinkClick('horeca')} className="block w-full rounded-xl px-4 py-3 text-left transition-colors hover:bg-[#FFF4EF]">
                    <span translate="no" className="notranslate block font-heading text-sm font-bold text-[#C95E3E]">Zakelijk</span>
                    <span className="mt-0.5 block text-xs text-[#657068]">{t('nav.zakelijk_sub', 'Naar de zakelijke aanvraag')}</span>
                  </button>
                </div>
              </div>
            </details>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full border-2 border-[#3B7F4B] text-[#3B7F4B] bg-[#F7F4EC] hover:bg-[#E8EFE8] transition-colors"
              aria-label={mobileMenuOpen ? 'Menu sluiten' : 'Menu openen'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-[#3B7F4B]/20 bg-[#F7F4EC] px-4 pt-3 pb-6 space-y-2 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto">
            <nav className="flex flex-col space-y-1">
              {/* Home */}
              <button
                type="button"
                onClick={() => handleLinkClick('home')}
                className={`text-left px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                  currentPage === 'home'
                    ? 'text-[#3B7F4B] font-bold bg-[#E8EFE8]/70'
                    : 'text-[#3B7F4B] hover:text-[#3B7F4B] hover:bg-black/5'
                }`}
              >
                Home
              </button>

              {/* Prijzen with collapsible sub-options */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobilePrijzenOpen(!mobilePrijzenOpen)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                    currentPage === 'particulieren' || currentPage === 'horeca'
                      ? 'text-[#3B7F4B] font-bold'
                      : 'text-[#3B7F4B] hover:text-[#3B7F4B] hover:bg-black/5'
                  }`}
                  aria-expanded={mobilePrijzenOpen}
                >
                  <span>Prijzen</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#3B7F4B]/60 transition-transform duration-200 ${
                      mobilePrijzenOpen ? 'rotate-180 text-[#3B7F4B]' : ''
                    }`}
                  />
                </button>
                {mobilePrijzenOpen && (
                  <div className="ml-4 pl-4 py-1.5 space-y-2 border-l-2 border-[#3B7F4B]/30">
                    <button
                      type="button"
                      translate="no"
                      onClick={() => handlePriceClick('particulieren', 'calculator')}
                      className="notranslate block w-full text-left text-sm font-medium text-[#3B7F4B]/75 hover:text-[#3B7F4B] transition-colors py-1"
                    >
                      Particulier
                    </button>
                    <button
                      type="button"
                      translate="no"
                      onClick={() => handlePriceClick('horeca', 'zakelijk-formulier')}
                      className="notranslate block w-full text-left text-sm font-medium text-[#3B7F4B]/75 hover:text-[#3B7F4B] transition-colors py-1"
                    >
                      Zakelijk
                    </button>
                  </div>
                )}
              </div>

              {/* Over ons */}
              <button
                type="button"
                onClick={() => handleLinkClick('over-ons')}
                className={`text-left px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                  currentPage === 'over-ons'
                    ? 'text-[#3B7F4B] font-bold bg-[#E8EFE8]/70'
                    : 'text-[#3B7F4B] hover:text-[#3B7F4B] hover:bg-black/5'
                }`}
              >
                Over ons
              </button>

              {/* Werkwijze */}
              <button
                type="button"
                onClick={() => handleLinkClick('werkwijze')}
                className={`text-left px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                  currentPage === 'werkwijze'
                    ? 'text-[#3B7F4B] font-bold bg-[#E8EFE8]/70'
                    : 'text-[#3B7F4B] hover:text-[#3B7F4B] hover:bg-black/5'
                }`}
              >
                Werkwijze
              </button>

              {/* Blogs */}
              <button
                type="button"
                onClick={() => handleLinkClick('blogs')}
                className={`text-left px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                  currentPage === 'blogs'
                    ? 'text-[#3B7F4B] font-bold bg-[#E8EFE8]/70'
                    : 'text-[#3B7F4B] hover:text-[#3B7F4B] hover:bg-black/5'
                }`}
              >
                Blogs
              </button>

              {/* Ophalen, bezorgen & servicegebied */}
              <button
                type="button"
                onClick={() => handleLinkClick('ophalen-bezorgen')}
                className={`text-left px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                  currentPage === 'ophalen-bezorgen'
                    ? 'text-[#3B7F4B] font-bold bg-[#E8EFE8]/70'
                    : 'text-[#3B7F4B] hover:text-[#3B7F4B] hover:bg-black/5'
                }`}
              >
                Ophalen, bezorgen &amp; servicegebied
              </button>

              {/* Subtiele CTA onderaan het mobiele menu: dik gedrukte groene tekst met dropdown */}
              <div className="pt-3 mt-2 border-t border-[#3B7F4B]/15">
                <button
                  type="button"
                  onClick={() => setMobilePlanOpen(!mobilePlanOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl bg-[#E8EFE8]/70 hover:bg-[#E8EFE8] transition-colors text-left"
                  aria-expanded={mobilePlanOpen}
                >
                  <span className="font-heading text-base font-bold text-[#3B7F4B]">
                    Plan je slijpbeurt
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#3B7F4B] transition-transform duration-200 ${
                      mobilePlanOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {mobilePlanOpen && (
                  <div className="mt-2 space-y-1.5 overflow-hidden rounded-2xl border border-[#d9e1d7] bg-white p-2 shadow-sm animate-in fade-in slide-in-from-top-1 duration-200">
                    <button
                      type="button"
                      onClick={() => handlePriceClick('particulieren', 'calculator')}
                      className="block w-full rounded-xl px-4 py-3 text-left transition-colors hover:bg-[#E8EFE8]"
                    >
                      <span translate="no" className="notranslate block font-heading text-sm font-bold text-[#3B7F4B]">Particulier</span>
                      <span className="mt-0.5 block text-xs text-[#657068]">Naar de prijs- en bestelform</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handlePriceClick('horeca', 'zakelijk-formulier')}
                      className="block w-full rounded-xl px-4 py-3 text-left transition-colors hover:bg-[#FFF4EF]"
                    >
                      <span translate="no" className="notranslate block font-heading text-sm font-bold text-[#C95E3E]">Zakelijk</span>
                      <span className="mt-0.5 block text-xs text-[#657068]">Naar de zakelijke aanvraag</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Language Switcher Slider */}
              <div className="pt-3 mt-3 border-t border-[#3B7F4B]/15 flex items-center justify-between px-3 py-1">
                <span className="text-xs font-bold text-[#3B7F4B] uppercase tracking-wider">
                  Taal / Language
                </span>
                <LanguageSlider />
              </div>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};
