import React from 'react';
import { UIcon } from '../components/ui/UIcon';
import { PageId } from '../types';
import { SlijpmaatFaqSection } from '../components/SlijpmaatFaqSection';
import { OrganicSectionDivider } from '../components/OrganicSectionDivider';
import { TrustBar } from '../components/TrustBar';
import { createWhatsAppUrl } from '../utils/contact';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const whatsappUrl = createWhatsAppUrl('Hoi Teun en Mike, ik heb een vraag over het slijpen van mijn messen!');

  return (
    <div className="overflow-hidden bg-[#FAFAF8]">
      {/* 1. HERO SECTION */}
      <section className="site-hero relative overflow-hidden bg-[#FAFAF8] px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-12 lg:px-8 lg:pb-28 lg:pt-16">
        <svg
          aria-hidden="true"
          viewBox="0 0 520 520"
          className="pointer-events-none absolute -right-20 top-4 hidden h-[520px] w-[520px] text-[#E8EFE8] opacity-75 lg:block"
        >
          <path
            fill="currentColor"
            d="M416 72c58 48 88 135 78 213-11 78-62 147-132 181-69 34-157 34-221-4-64-39-104-116-100-193 4-76 53-151 120-194 67-42 197-51 255-3Z"
          />
        </svg>

        <div className="site-hero-grid relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div className="site-hero-copy max-w-2xl">
            <h1 className="site-hero-title font-heading text-4xl font-bold leading-[1.05] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-6xl">
              Alles wat je wilt weten over Slijpmaat.
            </h1>
            <p className="site-hero-description mt-5 text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Van veilig verpakken tot ophalen, soorten messen en het slijpproces zelf. Hieronder vind je alle antwoorden overzichtelijk bij elkaar.
            </p>

            <div className="site-hero-actions mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <button
                type="button"
                onClick={() => onNavigate('particulieren')}
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] active:scale-[0.98] sm:text-base cursor-pointer"
              >
                <span>Plan een slijpbeurt</span>
                <UIcon name="arrow-right" className="text-sm transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#E87B5B]/20 bg-[#FCEEE8] px-7 py-3.5 text-sm font-bold text-[#C95E3E] transition-all duration-200 hover:bg-[#F8DFD6] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] sm:text-base"
              >
                <UIcon name="comment-alt" className="text-sm" />
                <span>Stel je vraag via WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="site-hero-media relative mx-auto w-full max-w-xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 -left-5 h-44 w-44 rounded-[42%_58%_62%_38%/55%_42%_58%_45%] bg-[#A9C89E] sm:-bottom-8 sm:-left-8 sm:h-56 sm:w-56"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-[#d9e1d7] bg-white shadow-lg lg:aspect-square">
              <img
                src="/assets/faq-slijpmaat-kaartje-bessen.webp"
                alt="Slijpmaat-kaartje tussen oranje bessen en groene bladeren"
                className="h-full w-full object-cover object-center"
                fetchPriority="high"
              />
              <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-[#203728]/85 px-4 py-2 text-xs font-bold text-white shadow-md backdrop-blur-xs">
                FAQ · Vragen &amp; antwoorden
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar
        items={[
          { icon: <UIcon name="comment-alt" className="text-base shrink-0 text-[#3B7F4B]" aria-hidden="true" />, text: 'Direct contact via WhatsApp' },
          { icon: <UIcon name="shield-check" className="text-base shrink-0 text-[#3B7F4B]" aria-hidden="true" />, text: 'Duidelijk en eerlijk advies' },
        ]}
      />

      {/* 3. FAQ ACCORDION SECTION */}
      <section className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.42fr_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-32 lg:self-start space-y-4">
            <h2 className="font-heading text-3xl font-bold text-[#3B7F4B]">
              Snel naar het antwoord dat je zoekt
            </h2>
            <p className="text-base text-[#657068]">
              Open een vraag om het antwoord te lezen. Staat jouw vraag er niet tussen? Stuur Teun of Mike gerust direct een WhatsApp-bericht.
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#E8EFE8] px-5 py-3 text-xs font-bold text-[#3B7F4B] hover:bg-[#d8e8d8] transition-colors"
              >
                <UIcon name="comment-alt" className="text-sm" />
                <span>Stel een persoonlijke vraag</span>
              </a>
            </div>
          </aside>

          <div>
            <SlijpmaatFaqSection defaultOpenIndex={0} />
          </div>
        </div>
      </section>

      <OrganicSectionDivider fromColor="#FAFAF8" middleColor="#F9E4DE" toColor="#E87B5B" variant="rolling" />

      {/* 4. BOTTOM CONTACT BANNER with top and bottom wave dividers */}
      <section id="faq-contact" className="relative scroll-mt-20 overflow-hidden bg-[#E87B5B] px-4 pb-24 pt-20 text-white sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl">
          <h2 className="max-w-5xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Vraag het je Maat
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/95 sm:text-xl">
            We denken graag met je mee over afwijkende messen, chips, horeca-aanvragen of spoedopdrachten.
          </p>

          <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[72px] items-center justify-between gap-4 rounded-full bg-white px-7 py-4 font-heading text-lg font-bold text-[#3B7F4B] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFF7F3] hover:shadow-lg sm:px-10 sm:text-xl"
            >
              <span>Stuur je Maat een appje</span>
              <UIcon name="comment-alt" className="text-2xl shrink-0 text-[#3B7F4B] transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
            </a>
            <a
              href="tel:+31682074967"
              className="group inline-flex min-h-[72px] items-center justify-between gap-4 rounded-full bg-white px-7 py-4 font-heading text-lg font-bold text-[#3B7F4B] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFF7F3] hover:shadow-lg sm:px-10 sm:text-xl"
            >
              <span>Bel je Maat</span>
              <UIcon name="phone-call" className="text-2xl shrink-0 text-[#3B7F4B] transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <OrganicSectionDivider fromColor="#E87B5B" middleColor="#F9E4DE" toColor="#FFFFFF" variant="scalloped" mirror />
    </div>
  );
};
