import React from 'react';
import { ArrowRight, MessageCircle, Phone, Clock3, ShieldCheck } from 'lucide-react';
import { PageId } from '../types';
import { SLIJPMAAT_INFO } from '../data/siteData';
import { GoogleIcon, GOOGLE_REVIEW_COUNT } from '../components/GoogleReviewsSection';
import { SlijpmaatFaqSection } from '../components/SlijpmaatFaqSection';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik heb een vraag over het slijpen van mijn messen!')}`;

  return (
    <div className="overflow-hidden bg-[#FAFAF8]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#FAFAF8] pb-8 pt-4 sm:pb-12 sm:pt-6 lg:pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-16 h-[340px] w-[340px] rounded-full bg-[#E3EFE5] opacity-80 blur-2xl sm:h-[480px] sm:w-[480px] sm:blur-3xl lg:-right-10 lg:top-2 lg:h-[560px] lg:w-[560px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#3B7F4B] sm:text-sm">
              Vragen &amp; antwoorden
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-6xl">
              Alles wat je wilt weten over Slijpmaat.
            </h1>
            <p className="mt-5 text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Van veilig verpakken tot ophalen, soorten messen en het slijpproces zelf. Hieronder vind je alle antwoorden overzichtelijk bij elkaar.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => onNavigate('particulieren')}
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] active:scale-[0.98] sm:text-base cursor-pointer"
              >
                <span>Plan een slijpbeurt</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#E87B5B]/20 bg-[#FCEEE8] px-7 py-3.5 text-sm font-bold text-[#C95E3E] transition-all duration-200 hover:bg-[#F8DFD6] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] sm:text-base"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Stel je vraag via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section aria-label="Zekerheden" className="relative z-20 px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-2xl border border-[#d9e1d7]/70 bg-white/95 px-6 py-4 shadow-[0_4px_24px_rgba(36,74,48,0.04)] backdrop-blur-xs">
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-0">
            <div className="flex flex-wrap items-center gap-2 sm:justify-center sm:border-r sm:border-[#d9e1d7]/70 sm:px-5">
              <GoogleIcon />
              <span className="text-sm leading-none tracking-[0.06em] text-[#FABB05]" aria-label="5 van de 5 sterren">★★★★★</span>
              <span className="text-sm font-bold text-[#3B7F4B]">{GOOGLE_REVIEW_COUNT} reviews</span>
            </div>
            <div className="flex items-center gap-3 sm:justify-center sm:border-r sm:border-[#d9e1d7]/70 sm:px-5">
              <Clock3 className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
              <span className="text-sm font-bold text-[#3B7F4B]">Direct contact via WhatsApp</span>
            </div>
            <div className="flex items-center gap-3 sm:justify-center sm:px-5">
              <ShieldCheck className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
              <span className="text-sm font-bold text-[#3B7F4B]">Duidelijk en eerlijk advies</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ ACCORDION SECTION */}
      <section className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.42fr_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-32 lg:self-start space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C95E3E]">Veelgestelde vragen</p>
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
                <MessageCircle className="h-4 w-4" />
                <span>Stel een persoonlijke vraag</span>
              </a>
            </div>
          </aside>

          <div>
            <SlijpmaatFaqSection defaultOpenIndex={0} />
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CONTACT BANNER with top and bottom wave dividers */}
      <section id="faq-contact" className="relative scroll-mt-20 overflow-hidden bg-[#E87B5B] px-4 pb-24 pt-20 text-white sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="pointer-events-none absolute left-0 top-0 h-10 w-full text-[#FAFAF8] sm:h-14 lg:h-16"
        >
          <path
            fill="currentColor"
            d="M0,0 L1440,0 L1440,15 C1120,50 840,10 560,40 C320,65 140,20 0,35 Z"
          />
        </svg>

        <svg
          aria-hidden="true"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="pointer-events-none absolute bottom-0 left-0 h-10 w-full text-white sm:h-14 lg:h-16"
        >
          <path
            fill="currentColor"
            d="M0,60 L1440,60 L1440,20 C1180,55 900,15 620,45 C380,70 180,25 0,40 Z"
          />
        </svg>

        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.36em] text-white sm:text-sm">Staat je vraag er niet bij?</p>
          <h2 className="mt-6 max-w-5xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
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
              <MessageCircle className="h-8 w-8 shrink-0 text-[#3B7F4B] transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
            </a>
            <a
              href="tel:+31682074967"
              className="group inline-flex min-h-[72px] items-center justify-between gap-4 rounded-full bg-white px-7 py-4 font-heading text-lg font-bold text-[#3B7F4B] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFF7F3] hover:shadow-lg sm:px-10 sm:text-xl"
            >
              <span>Bel je Maat</span>
              <Phone className="h-8 w-8 shrink-0 text-[#3B7F4B] transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
