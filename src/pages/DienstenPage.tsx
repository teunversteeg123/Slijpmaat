import React from 'react';
import { PageId } from '../types';
import { SLIJPMAAT_INFO } from '../data/siteData';
import { GoogleIcon, GOOGLE_REVIEW_COUNT } from '../components/GoogleReviewsSection';
import {
  ArrowRight,
  Utensils,
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  Phone
} from 'lucide-react';

interface DienstenPageProps {
  onNavigate: (page: PageId) => void;
}

export const DienstenPage: React.FC<DienstenPageProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik heb een vraag over jullie slijpdiensten!')}`;

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
              Vakmanschap op Japanse whetstones
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-6xl">
              Onze slijpdiensten in Utrecht.
            </h1>
            <p className="mt-5 text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Van dagelijkse Europese koksmessen tot exclusieve Japanse carbonstaal lemmeten en beschadigde snedes: wij herstellen de ultieme scherpte met de hand.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => onNavigate('particulieren')}
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] active:scale-[0.98] sm:text-base cursor-pointer"
              >
                <span>Bereken je prijs</span>
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
              <span className="text-sm font-bold text-[#3B7F4B]">Binnen 24–48 uur retour</span>
            </div>
            <div className="flex items-center gap-3 sm:justify-center sm:px-5">
              <MapPin className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
              <span className="text-sm font-bold text-[#3B7F4B]">Gratis ophalen vanaf 3 messen</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
            {/* Service 1: Keukenmessen */}
            <div className="rounded-[2.5rem] border border-[#d9e1d7] bg-white p-7 sm:p-9 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3B7F4B]/50 hover:shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8EFE8] text-[#3B7F4B]">
                  <Utensils className="h-7 w-7" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#3B7F4B]">
                    Europese &amp; allround messen
                  </p>
                  <h3 className="mt-1 font-heading text-2xl font-bold text-[#3B7F4B]">
                    Keukenmessen slijpen
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[#657068]">
                  Geschikt voor alle gladde messen: koksmessen, Sabatier, Wüsthof, Zwilling, schilmessen en fileermessen. Geslepen op een robuuste en vlijmscherpe hoek van 15 tot 20 graden per zijde.
                </p>
                <div className="rounded-xl bg-[#FAFAF8] p-3 text-xs font-bold text-[#3B7F4B] border border-[#d9e1d7]/60">
                  Vaste tarieven: €6,50 (&lt;15 cm) &middot; €8,50 (15–20 cm) &middot; €10,50 (20–25 cm)
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => onNavigate('dienst-keukenmessen')}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E8EFE8] py-3 text-xs font-bold text-[#3B7F4B] transition-all hover:bg-[#3B7F4B] hover:text-white cursor-pointer"
                >
                  <span>Bekijk details keukenmessen</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Service 2: Japanse Messen */}
            <div className="rounded-[2.5rem] border border-[#d9e1d7] bg-white p-7 sm:p-9 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3B7F4B]/50 hover:shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8EFE8] text-[#3B7F4B]">
                  <Sparkles className="h-7 w-7" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#3B7F4B]">
                    Harde kernstaalsoorten (VG-10, Aogami, Shirogami)
                  </p>
                  <h3 className="mt-1 font-heading text-2xl font-bold text-[#3B7F4B]">
                    Japanse messen slijpen
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[#657068]">
                  Voor Santoku, Gyuto, Nakiri, Petty en Deba messen. Speciale aandacht voor dunne geometrieën onder 12 tot 15 graden. Wij kiezen de juiste watersteen en sluiten af met een leren strop polish.
                </p>
                <div className="rounded-xl bg-[#FAFAF8] p-3 text-xs font-bold text-[#3B7F4B] border border-[#d9e1d7]/60">
                  Zelfde tarieven als keukenmessen: geen Japanse meerprijs!
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => onNavigate('dienst-japanse-messen')}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E8EFE8] py-3 text-xs font-bold text-[#3B7F4B] transition-all hover:bg-[#3B7F4B] hover:text-white cursor-pointer"
                >
                  <span>Bekijk details Japanse messen</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Service 3: Chips herstellen */}
            <div className="rounded-[2.5rem] border border-[#E87B5B]/30 bg-[#FFF7F3] p-7 sm:p-9 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#E87B5B] hover:shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F9E4DE] text-[#C95E3E]">
                  <Zap className="h-7 w-7" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#C95E3E]">
                    Herstel bij beschadiging
                  </p>
                  <h3 className="mt-1 font-heading text-2xl font-bold text-[#3B7F4B]">
                    Chips &amp; uitbraak herstellen
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[#657068]">
                  Een hapje uit de snijkant of een afgebroken punt? Gooi je mes niet weg! Wij kiezen de juiste herstelsteen en herstellen de snijlijn zonder dat het lemmet onnodig dun wordt.
                </p>
                <div className="rounded-xl bg-white p-3 text-xs font-bold text-[#C95E3E] border border-[#E87B5B]/20">
                  Kleine chip: +€2,50 &middot; Nieuw profiel/grote reparatie: +€8,50
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => onNavigate('dienst-chips-herstellen')}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E87B5B] py-3 text-xs font-bold text-white transition-all hover:bg-[#C95E3E] cursor-pointer"
                >
                  <span>Bekijk reparatieservice</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Service 4: Wat wel en niet */}
            <div className="rounded-[2.5rem] border border-[#d9e1d7] bg-[#F7F4EC] p-7 sm:p-9 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3B7F4B] hover:shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8EFE8] text-[#3B7F4B]">
                  <ShieldCheck className="h-7 w-7" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#3B7F4B]">
                    Duidelijkheid vooraf
                  </p>
                  <h3 className="mt-1 font-heading text-2xl font-bold text-[#3B7F4B]">
                    Wat slijpen we wel &amp; niet?
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[#657068]">
                  Wij zijn 100% gespecialiseerd in gladde keukenmessen. We slijpen géén tuingereedschap, kartelmessen, scharen of beitels. Zo blijven onze waterstenen zuiver en voedselveilig.
                </p>
                <div className="rounded-xl bg-white p-3 text-xs font-bold text-[#3B7F4B] border border-[#d9e1d7]">
                  Bekijk het overzicht van geschikte messen
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => onNavigate('dienst-wel-niet')}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#3B7F4B]/30 bg-white py-3 text-xs font-bold text-[#3B7F4B] transition-all hover:bg-[#3B7F4B] hover:text-white cursor-pointer"
                >
                  <span>Bekijk wat we wel &amp; niet slijpen</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CONTACT BANNER with top and bottom wave dividers */}
      <section id="diensten-contact" className="relative scroll-mt-20 overflow-hidden bg-[#E87B5B] px-4 pb-24 pt-20 text-white sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
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
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.36em] text-white sm:text-sm">Vraag over jouw mes?</p>
          <h2 className="mt-6 max-w-5xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Stuur een foto naar je Maat
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/95 sm:text-xl">
            Twijfel je of jouw mes geslepen of hersteld kan worden? Stuur een duidelijke foto via WhatsApp en Teun of Mike beoordeelt het direct.
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
