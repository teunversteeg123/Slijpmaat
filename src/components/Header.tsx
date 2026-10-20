import React, { useState, useEffect, useRef } from 'react';
import { SlijpmaatLogo } from './SlijpmaatLogo';
import { PageId } from '../types';
import { UIcon } from './ui/UIcon';
import { PAGE_PATHS } from '../seo';
import { createWhatsAppUrl } from '../utils/contact';

interface HeaderProps {
  currentPage: PageId | null;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePrijzenOpen, setMobilePrijzenOpen] = useState(false);
  const [mobilePlanOpen, setMobilePlanOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuScrollYRef = useRef(0);
  const mobileMenuScrollCapturedRef = useRef(false);
  const restoreScrollOnMenuCloseRef = useRef(true);

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

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousDocumentOverflow = document.documentElement.style.overflow;
    const previousOverscrollBehavior = document.body.style.overscrollBehavior;
    const lockedScrollY = mobileMenuScrollYRef.current;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setMobileMenuOpen(false);
      setMobilePrijzenOpen(false);
      setMobilePlanOpen(false);
      window.requestAnimationFrame(() => mobileMenuButtonRef.current?.focus({ preventScroll: true }));
    };

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overscrollBehavior = 'none';
    document.addEventListener('keydown', handleKeyDown);
    window.scrollTo({ top: lockedScrollY, left: 0, behavior: 'auto' });

    return () => {
      document.documentElement.style.overflow = previousDocumentOverflow;
      document.body.style.overscrollBehavior = previousOverscrollBehavior;
      document.removeEventListener('keydown', handleKeyDown);
      if (restoreScrollOnMenuCloseRef.current) {
        window.scrollTo({ top: lockedScrollY, left: 0, behavior: 'auto' });
      }
    };
  }, [mobileMenuOpen]);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'over-ons', label: 'Over ons' },
    { id: 'werkwijze', label: 'Werkwijze' },
    { id: 'ophalen-bezorgen', label: 'Servicegebied' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'faq', label: 'FAQ' },
  ];

  const closeHeaderMenus = () => {
    setMobileMenuOpen(false);
    setMobilePrijzenOpen(false);
    setMobilePlanOpen(false);
    setIsVisible(true);
    document.querySelectorAll<HTMLDetailsElement>('[data-header-menu]').forEach((menu) => menu.removeAttribute('open'));
  };

  const handleLinkClick = (pageId: PageId) => {
    if (mobileMenuOpen) {
      restoreScrollOnMenuCloseRef.current = false;
    }
    onNavigate(pageId);
    closeHeaderMenus();
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  const handleInternalClick = (event: React.MouseEvent<HTMLAnchorElement>, pageId: PageId) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    handleLinkClick(pageId);
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
          <a
            href={PAGE_PATHS['ophalen-bezorgen']}
            onClick={(event) => handleInternalClick(event, 'ophalen-bezorgen')}
            className="text-center sm:text-left text-white hover:text-[#E8EFE8] transition-colors cursor-pointer"
          >
            <span className="font-semibold">Gratis ophalen &amp; bezorgen in Utrecht vanaf €35</span>
          </a>

          <div className="hidden sm:flex items-center gap-3 sm:gap-4 text-xs font-semibold">
            <a
              href={PAGE_PATHS['ophalen-bezorgen']}
              onClick={(event) => handleInternalClick(event, 'ophalen-bezorgen')}
              className="text-white hover:text-[#E8EFE8] transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <UIcon name="marker" className="text-xs sm:text-sm text-white shrink-0" />
              <span>Servicegebied</span>
            </a>
            <a
              href={createWhatsAppUrl('Hoi Teun en Mike, ik wil graag mijn messen laten slijpen!')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#E8EFE8] transition-colors flex items-center gap-1.5 shrink-0"
            >
              <UIcon name="comment-alt" className="text-xs sm:text-sm text-white shrink-0" />
              <span className="hidden sm:inline">WhatsApp je Maat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`bg-[#F7F4EC] border-b border-[#3B7F4B]/20 transition-shadow ${isScrolled ? 'shadow-md' : 'shadow-xs'}`}>
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between gap-3 px-4 sm:h-20 sm:gap-4 sm:px-6 lg:px-8">
          {/* Zone 1: Wordmark Brand Lockup */}
          <a
            href={PAGE_PATHS.home}
            onClick={(event) => handleInternalClick(event, 'home')}
            className="flex items-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B7F4B] rounded-lg p-1"
            aria-label="Slijpmaat home"
          >
            <SlijpmaatLogo variant="dark" size="lg" />
          </a>

          {/* Zone 2: Clean Text Navigation (color: #244A30, hover: #3B7F4B) */}
          <nav className="hidden lg:flex items-center gap-5 text-sm font-semibold text-[#3B7F4B] xl:gap-7">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <a
                  key={link.id}
                  href={PAGE_PATHS[link.id]}
                  onClick={(event) => handleInternalClick(event, link.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap cursor-pointer hover:text-[#3B7F4B] ${
                    isActive ? 'text-[#3B7F4B] font-bold' : 'text-[#3B7F4B]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3B7F4B] rounded-full" />
                  )}
                </a>
              );
            })}
            <details name="header-menu" data-header-menu className="group relative">
              <summary className={`relative flex cursor-pointer list-none items-center gap-1.5 py-1 transition-colors marker:hidden hover:text-[#3B7F4B] ${currentPage === 'particulieren' || currentPage === 'horeca' ? 'font-bold text-[#3B7F4B]' : 'text-[#3B7F4B]'}`}>
                <span>Prijzen</span>
                <UIcon name="angle-small-down" className="text-sm transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                {(currentPage === 'particulieren' || currentPage === 'horeca') ? <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#3B7F4B]" /> : null}
              </summary>
              <div className="absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3">
                <div className="overflow-hidden rounded-2xl border border-[#d9e1d7] bg-white p-2 shadow-xl">
                  <a href={PAGE_PATHS.particulieren} onClick={(event) => handleInternalClick(event, 'particulieren')} className="block w-full rounded-xl px-4 py-3 text-left transition-colors hover:bg-[#E8EFE8]">
                    <span className="block font-heading text-sm font-bold text-[#3B7F4B]">Particulier</span>
                    <span className="mt-0.5 block text-xs text-[#657068]">Naar de prijs- en bestelform</span>
                  </a>
                  <a href={PAGE_PATHS.horeca} onClick={(event) => handleInternalClick(event, 'horeca')} className="block w-full rounded-xl px-4 py-3 text-left transition-colors hover:bg-[#FFF4EF]">
                    <span className="block font-heading text-sm font-bold text-[#C95E3E]">Zakelijk</span>
                    <span className="mt-0.5 block text-xs text-[#657068]">Naar de zakelijke aanvraag</span>
                  </a>
                </div>
              </div>
            </details>
          </nav>

          {/* Zone 3: Primary action */}
          <div className="flex items-center gap-2 sm:gap-3">
            <details name="header-menu" data-header-menu className="group relative hidden sm:block">
              <summary
                className={`flex cursor-pointer list-none items-center gap-2 rounded-full bg-[#E87B5B] px-5 py-2.5 text-sm font-bold text-white shadow-xs transition-all marker:hidden hover:bg-[#C95E3E] active:scale-[0.98] ${currentPage === 'particulieren' || currentPage === 'horeca' ? 'ring-2 ring-[#C95E3E] ring-offset-2' : ''}`}
              >
                <span>Plan je slijpbeurt</span>
                <UIcon name="angle-small-down" className="text-sm transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
              </summary>

              <div className="absolute right-0 top-full z-50 w-60 pt-3">
                <div className="overflow-hidden rounded-2xl border border-[#d9e1d7] bg-white p-2 shadow-xl">
                  <a href={PAGE_PATHS.particulieren} onClick={(event) => handleInternalClick(event, 'particulieren')} className="block w-full rounded-xl px-4 py-3 text-left transition-colors hover:bg-[#E8EFE8]">
                    <span className="block font-heading text-sm font-bold text-[#3B7F4B]">Particulier</span>
                    <span className="mt-0.5 block text-xs text-[#657068]">Naar de prijs- en bestelform</span>
                  </a>
                  <a href={PAGE_PATHS.horeca} onClick={(event) => handleInternalClick(event, 'horeca')} className="block w-full rounded-xl px-4 py-3 text-left transition-colors hover:bg-[#FFF4EF]">
                    <span className="block font-heading text-sm font-bold text-[#C95E3E]">Zakelijk</span>
                    <span className="mt-0.5 block text-xs text-[#657068]">Naar de zakelijke aanvraag</span>
                  </a>
                </div>
              </div>
            </details>

            {/* Mobile Hamburger Button */}
            <button
              ref={mobileMenuButtonRef}
              onPointerDown={() => {
                if (mobileMenuOpen) return;
                mobileMenuScrollYRef.current = window.scrollY;
                mobileMenuScrollCapturedRef.current = true;
              }}
              onKeyDown={(event) => {
                if (mobileMenuOpen || (event.key !== 'Enter' && event.key !== ' ')) return;
                mobileMenuScrollYRef.current = window.scrollY;
                mobileMenuScrollCapturedRef.current = true;
              }}
              onClick={() => {
                if (mobileMenuOpen) {
                  closeHeaderMenus();
                } else {
                  if (!mobileMenuScrollCapturedRef.current) {
                    mobileMenuScrollYRef.current = window.scrollY;
                  }
                  mobileMenuScrollCapturedRef.current = false;
                  restoreScrollOnMenuCloseRef.current = true;
                  setMobileMenuOpen(true);
                }
              }}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#3B7F4B] bg-[#F7F4EC] text-[#3B7F4B] transition-colors hover:bg-[#E8EFE8] lg:hidden"
              aria-label={mobileMenuOpen ? 'Menu sluiten' : 'Menu openen'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileMenuOpen ? <UIcon name="cross-small" className="text-2xl" /> : <UIcon name="menu-burger" className="text-lg" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            className="mobile-menu-drawer absolute inset-x-0 top-full flex min-h-0 flex-col border-b border-[#3B7F4B]/20 bg-[#F7F4EC] shadow-xl lg:hidden"
          >
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-2">
              <nav aria-label="Mobiele hoofdnavigatie" className="flex flex-col gap-0.5">
              {/* Home */}
              <a
                href={PAGE_PATHS.home}
                onClick={(event) => handleInternalClick(event, 'home')}
                className={`min-h-11 rounded-lg px-3 py-2 text-left text-[15px] font-semibold transition-colors ${
                  currentPage === 'home'
                    ? 'text-[#3B7F4B] font-bold bg-[#E8EFE8]/70'
                    : 'text-[#3B7F4B] hover:text-[#3B7F4B] hover:bg-black/5'
                }`}
              >
                Home
              </a>

              {/* Prijzen with collapsible sub-options */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobilePrijzenOpen(!mobilePrijzenOpen)}
                  className={`flex min-h-11 w-full items-center justify-between rounded-lg px-3 py-2 text-[15px] font-semibold transition-colors ${
                    currentPage === 'particulieren' || currentPage === 'horeca'
                      ? 'text-[#3B7F4B] font-bold'
                      : 'text-[#3B7F4B] hover:text-[#3B7F4B] hover:bg-black/5'
                  }`}
                  aria-expanded={mobilePrijzenOpen}
                >
                  <span>Prijzen</span>
                  <UIcon
                    name="angle-small-down"
                    className={`text-lg text-[#3B7F4B]/60 transition-transform duration-200 ${
                      mobilePrijzenOpen ? 'rotate-180 text-[#3B7F4B]' : ''
                    }`}
                  />
                </button>
                {mobilePrijzenOpen && (
                  <div className="ml-4 border-l-2 border-[#3B7F4B]/30 py-0.5 pl-3">
                    <a
                      href={PAGE_PATHS.particulieren}
                      onClick={(event) => handleInternalClick(event, 'particulieren')}
                      className="block min-h-11 w-full rounded-lg px-2 py-2 text-left text-sm font-medium text-[#3B7F4B]/75 transition-colors hover:bg-black/5 hover:text-[#3B7F4B]"
                    >
                      Particulier
                    </a>
                    <a
                      href={PAGE_PATHS.horeca}
                      onClick={(event) => handleInternalClick(event, 'horeca')}
                      className="block min-h-11 w-full rounded-lg px-2 py-2 text-left text-sm font-medium text-[#3B7F4B]/75 transition-colors hover:bg-black/5 hover:text-[#3B7F4B]"
                    >
                      Zakelijk
                    </a>
                  </div>
                )}
              </div>

              {/* Over ons */}
              <a
                href={PAGE_PATHS['over-ons']}
                onClick={(event) => handleInternalClick(event, 'over-ons')}
                className={`min-h-11 rounded-lg px-3 py-2 text-left text-[15px] font-semibold transition-colors ${
                  currentPage === 'over-ons'
                    ? 'text-[#3B7F4B] font-bold bg-[#E8EFE8]/70'
                    : 'text-[#3B7F4B] hover:text-[#3B7F4B] hover:bg-black/5'
                }`}
              >
                Over ons
              </a>

              {/* Werkwijze */}
              <a
                href={PAGE_PATHS.werkwijze}
                onClick={(event) => handleInternalClick(event, 'werkwijze')}
                className={`min-h-11 rounded-lg px-3 py-2 text-left text-[15px] font-semibold transition-colors ${
                  currentPage === 'werkwijze'
                    ? 'text-[#3B7F4B] font-bold bg-[#E8EFE8]/70'
                    : 'text-[#3B7F4B] hover:text-[#3B7F4B] hover:bg-black/5'
                }`}
              >
                Werkwijze
              </a>

              {/* Servicegebied */}
              <a
                href={PAGE_PATHS['ophalen-bezorgen']}
                onClick={(event) => handleInternalClick(event, 'ophalen-bezorgen')}
                className={`min-h-11 rounded-lg px-3 py-2 text-left text-[15px] font-semibold transition-colors ${
                  currentPage === 'ophalen-bezorgen'
                    ? 'text-[#3B7F4B] font-bold bg-[#E8EFE8]/70'
                    : 'text-[#3B7F4B] hover:text-[#3B7F4B] hover:bg-black/5'
                }`}
              >
                Servicegebied
              </a>

              {/* Blogs */}
              <a
                href={PAGE_PATHS.blogs}
                onClick={(event) => handleInternalClick(event, 'blogs')}
                className={`min-h-11 rounded-lg px-3 py-2 text-left text-[15px] font-semibold transition-colors ${
                  currentPage === 'blogs'
                    ? 'text-[#3B7F4B] font-bold bg-[#E8EFE8]/70'
                    : 'text-[#3B7F4B] hover:text-[#3B7F4B] hover:bg-black/5'
                }`}
              >
                Blogs
              </a>

              {/* Veelgestelde vragen */}
              <a
                href={PAGE_PATHS.faq}
                onClick={(event) => handleInternalClick(event, 'faq')}
                className={`min-h-11 rounded-lg px-3 py-2 text-left text-[15px] font-semibold transition-colors ${
                  currentPage === 'faq'
                    ? 'text-[#3B7F4B] font-bold bg-[#E8EFE8]/70'
                    : 'text-[#3B7F4B] hover:text-[#3B7F4B] hover:bg-black/5'
                }`}
              >
                FAQ
              </a>

              </nav>
            </div>

            {/* CTA stays visible; only the navigation region above may scroll. */}
            <div className="shrink-0 border-t border-[#3B7F4B]/15 bg-[#F7F4EC] px-4 pt-2.5">
                <button
                  type="button"
                  onClick={() => setMobilePlanOpen(!mobilePlanOpen)}
                  className="flex min-h-11 w-full items-center justify-between rounded-xl bg-[#E8EFE8]/70 px-3 py-2 text-left transition-colors hover:bg-[#E8EFE8]"
                  aria-expanded={mobilePlanOpen}
                  aria-controls="mobile-plan-options"
                >
                  <span className="font-heading text-base font-bold text-[#3B7F4B]">
                    Plan je slijpbeurt
                  </span>
                  <UIcon
                    name="angle-small-down"
                    className={`text-lg text-[#3B7F4B] transition-transform duration-200 ${
                      mobilePlanOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {mobilePlanOpen && (
                  <div id="mobile-plan-options" className="mt-2 space-y-1 overflow-hidden rounded-2xl border border-[#d9e1d7] bg-white p-1.5 shadow-sm animate-in fade-in slide-in-from-top-1 duration-200">
                    <a
                      href={PAGE_PATHS.particulieren}
                      onClick={(event) => handleInternalClick(event, 'particulieren')}
                      className="block min-h-11 w-full rounded-xl px-4 py-2 text-left transition-colors hover:bg-[#E8EFE8]"
                    >
                      <span className="block font-heading text-sm font-bold text-[#3B7F4B]">Particulier</span>
                      <span className="mt-0.5 block text-xs text-[#657068]">Naar de prijs- en bestelform</span>
                    </a>
                    <a
                      href={PAGE_PATHS.horeca}
                      onClick={(event) => handleInternalClick(event, 'horeca')}
                      className="block min-h-11 w-full rounded-xl px-4 py-2 text-left transition-colors hover:bg-[#FFF4EF]"
                    >
                      <span className="block font-heading text-sm font-bold text-[#C95E3E]">Zakelijk</span>
                      <span className="mt-0.5 block text-xs text-[#657068]">Naar de zakelijke aanvraag</span>
                    </a>
                  </div>
                )}
            </div>
          </div>
        )}
      </header>
    </div>
  );
};
