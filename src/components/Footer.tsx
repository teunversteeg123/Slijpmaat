import React from 'react';
import { UIcon } from './ui/UIcon';
import { SlijpmaatLogo } from './SlijpmaatLogo';
import { PageId } from '../types';
import { SLIJPMAAT_INFO } from '../data/siteData';
import { useCookieConsent } from '../context/CookieConsentContext';
import { PAGE_PATHS } from '../seo';
import { createWhatsAppUrl } from '../utils/contact';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

const MAPS_URL = 'https://www.google.com/maps/place/Slijpmaat.nl/@52.1032142,5.1191271,17z/data=!3m1!4b1!4m6!3m5!1s0x2db61c15d9f3a351:0x81e0896d1578558b!8m2!3d52.1032142!4d5.1191271!16s%2Fg%2F11njwnblms';

const QUICK_LINKS: Array<{ label: string; page: PageId }> = [
  { label: 'Over ons', page: 'over-ons' },
  { label: 'Werkwijze', page: 'werkwijze' },
  { label: 'Plan mijn slijpbeurt', page: 'particulieren' },
  { label: 'Servicegebied & langskomen', page: 'ophalen-bezorgen' },
  { label: 'Veelgestelde vragen', page: 'faq' },
  { label: 'Contact', page: 'contact' },
  { label: 'Keukenmessen slijpen', page: 'dienst-keukenmessen' },
  { label: 'Japanse messen slijpen', page: 'dienst-japanse-messen' },
  { label: 'Chips herstellen', page: 'dienst-chips-herstellen' },
  { label: 'Welke messen slijpen we?', page: 'dienst-wel-niet' },
];

const columnClass = 'border-b border-[#3B7F4B]/20 pb-7 sm:border-0 sm:pb-0';
const columnHeadClass = 'mb-3 flex min-h-[54px] items-center sm:mb-0 sm:h-[68px]';
const footerLinkClass = 'inline-flex min-h-8 items-center text-[14px] leading-[1.55] text-[#3B7F4B] transition-transform duration-200 hover:translate-x-[3px] hover:opacity-70 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3B7F4B] sm:min-h-0';

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { analyticsAvailable, openCookieSettings } = useCookieConsent();

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInternalClick = (event: React.MouseEvent<HTMLAnchorElement>, page: PageId) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    handleNav(page);
  };

  return (
    <footer className="bg-white font-sans text-[15px] leading-[1.6] text-[#3B7F4B]">
      <div className="mx-auto w-full max-w-[1180px] px-[22px] pb-[22px] pt-[46px] sm:px-7 sm:pb-6 sm:pt-16">
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-x-[50px] sm:gap-y-11 lg:grid-cols-4 lg:gap-12">
          <section className={columnClass} aria-label="Slijpmaat en Google">
            <div className={columnHeadClass}>
              <a
                href={PAGE_PATHS.home}
                onClick={(event) => handleInternalClick(event, 'home')}
                className="cursor-pointer rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3B7F4B] p-0 flex items-center text-left"
                aria-label="Slijpmaat home"
              >
                <SlijpmaatLogo variant="dark" className="[&_img]:h-10 sm:[&_img]:h-11 [&_img]:w-auto block" />
              </a>
            </div>

            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={footerLinkClass}>
              Bekijk ons op Google <span aria-hidden="true">↗</span>
            </a>
          </section>

          <nav className={columnClass} aria-label="Footer navigatie">
            <div className={columnHeadClass}>
              <h2 className="font-heading text-[19px] font-semibold leading-tight tracking-[-0.02em]">Snel naar</h2>
            </div>

            <ul className="m-0 grid list-none gap-2 p-0">
              {QUICK_LINKS.map((link) => (
                <li key={link.page}>
                  <a href={PAGE_PATHS[link.page]} onClick={(event) => handleInternalClick(event, link.page)} className={`${footerLinkClass} cursor-pointer text-left`}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section className={columnClass}>
            <div className={columnHeadClass}>
              <h2 className="font-heading text-[19px] font-semibold leading-tight tracking-[-0.02em]">Contact</h2>
            </div>

            <address className="grid gap-2 not-italic">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={footerLinkClass}>
                Gerard Noodtstraat 57<br />
                3515 VW Utrecht
              </a>
              <a href={`tel:${SLIJPMAAT_INFO.whatsappNumber}`} className={footerLinkClass}>06 82074967</a>
              <a href={`mailto:${SLIJPMAAT_INFO.email}`} className={footerLinkClass}>{SLIJPMAAT_INFO.email}</a>
              <a
                href={createWhatsAppUrl('Hoi Slijpmaat, ik heb een vraag.')}
                target="_blank"
                rel="noopener noreferrer"
                className={`${footerLinkClass} font-semibold`}
              >
                Stuur je Maat een appje
              </a>
            </address>
          </section>

          <section>
            <div className={columnHeadClass}>
              <h2 className="font-heading text-[19px] font-semibold leading-tight tracking-[-0.02em]">Openingstijden</h2>
            </div>

            <dl className="mb-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-[14px] leading-relaxed text-[#3B7F4B]">
              <dt className="font-semibold">Ma-za</dt>
              <dd>10:00-21:00</dd>
              <dt className="font-semibold">Zo</dt>
              <dd>Gesloten</dd>
            </dl>

            <p className="mb-5 text-[14px] leading-relaxed text-[#3B7F4B]/80">
              Slijpmaat heeft géén fysieke winkel. Messen langsbrengen en ophalen kan uitsluitend na voorafgaande afspraak via WhatsApp.
            </p>

            <div className="flex items-center gap-2.5">
              <a
                href="https://www.instagram.com/slijpmaat.nl/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Slijpmaat op Instagram"
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#3B7F4B] bg-[#3B7F4B] text-white transition-all duration-200 hover:-translate-y-[3px] hover:bg-white hover:text-[#3B7F4B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3B7F4B]"
              >
                <UIcon name="instagram" brand className="text-lg" aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61589739536849"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Slijpmaat op Facebook"
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#3B7F4B] bg-[#3B7F4B] text-white transition-all duration-200 hover:-translate-y-[3px] hover:bg-white hover:text-[#3B7F4B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3B7F4B]"
              >
                <UIcon name="facebook" brand className="text-lg" aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>

        <div className="mt-[38px] flex flex-col-reverse items-start gap-6 border-t border-[#3B7F4B]/25 pt-[22px] text-left text-[13px] sm:mt-[52px] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Slijpmaat.nl. Alle rechten voorbehouden.</p>
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:gap-x-[22px]">
            <a href={PAGE_PATHS['algemene-voorwaarden']} onClick={(event) => handleInternalClick(event, 'algemene-voorwaarden')} className="inline-flex min-h-8 cursor-pointer items-center transition-opacity hover:opacity-65 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3B7F4B] sm:min-h-0">
              Algemene voorwaarden
            </a>
            <a href={PAGE_PATHS.privacy} onClick={(event) => handleInternalClick(event, 'privacy')} className="inline-flex min-h-8 cursor-pointer items-center transition-opacity hover:opacity-65 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3B7F4B] sm:min-h-0">
              Privacyverklaring
            </a>
            {analyticsAvailable ? (
              <button type="button" onClick={openCookieSettings} className="inline-flex min-h-8 cursor-pointer items-center transition-opacity hover:opacity-65 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3B7F4B] sm:min-h-0">
                Cookievoorkeuren
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
};
