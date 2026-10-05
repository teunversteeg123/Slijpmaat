import React from 'react';
import { PageId } from '../types';
import { SLIJPMAAT_INFO } from '../data/siteData';
import { GoogleIcon, GOOGLE_REVIEW_COUNT, GoogleReviewsSection } from '../components/GoogleReviewsSection';
import { PartnerLogoSlider } from '../components/PartnerLogoSlider';
import {
  ArrowDown,
  ArrowRight,
  Clock3,
  MapPin,
  MessageCircle,
  Sparkles,
  Quote,
  Heart,
  Users
} from 'lucide-react';

interface OnzeMatenPageProps {
  onNavigate?: (page: PageId) => void;
}

export const OnzeMatenPage: React.FC<OnzeMatenPageProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik las de ervaringen op Onze Maten en wil graag mijn messen laten slijpen!')}`;

  // Losse quotes die speels rondvliegen
  const floatingQuotes = [
    {
      quote: 'M’n mes glijdt weer als boter door een rijpe tomaat! 🍅',
      author: 'Suus',
      badge: 'Binnen 24u retour',
      tilt: '-rotate-1',
    },
    {
      quote: 'Super goed geslepen, erg aardige gasten aan de deur.',
      author: 'Pieke',
      badge: 'Utrecht',
      tilt: 'rotate-2',
    },
    {
      quote: 'Quick response times, pickup and drop-off and quality work. What’s not to love?',
      author: 'Huib Botman',
      badge: '5 sterren',
      tilt: '-rotate-2',
    },
    {
      quote: 'Eindelijk geen tranende ogen meer bij het snipperen van uien!',
      author: 'Dennis',
      badge: 'Thuiskok',
      tilt: 'rotate-1',
    },
    {
      quote: 'Strakke prijs voor hele goede ambachtelijke service.',
      author: 'Melle van Sprew',
      badge: 'Aanrader',
      tilt: '-rotate-1',
    },
    {
      quote: 'Mijn Japanse Global snijdt weer veel beter dan toen hij nieuw uit de doos kwam.',
      author: 'K B',
      badge: 'Japanse stenen',
      tilt: 'rotate-2',
    },
  ];

  return (
    <div className="overflow-hidden bg-[#FAFAF8]">
      {/* 1. HERO SECTION (Exacte homepage / particulieren stijl) */}
      <section className="relative overflow-hidden bg-[#FAFAF8] pb-4 pt-2 sm:pb-8 sm:pt-4 lg:min-h-[580px] lg:pb-12">
        {/* Crisp organic SVG blob in top-right background */}
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

        <div className="relative z-10 grid grid-cols-1 items-center gap-7 py-6 sm:py-10 lg:min-h-[540px] lg:grid-cols-2 lg:gap-12 lg:py-8 xl:gap-20">
          {/* Left: Copy & CTAs */}
          <div className="order-1 px-4 sm:px-6 lg:order-1 lg:max-w-2xl lg:px-0 lg:pl-4 xl:pl-8">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#3B7F4B] sm:text-sm">
              Onze Maten in Utrecht
            </p>
            <h1 className="mt-3 max-w-3xl font-heading text-4xl font-bold leading-[1.02] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-5xl xl:text-6xl">
              Onze Maten aan het woord.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Van gepassioneerde thuiskoks en studenten tot Utrechtse restaurantbrigades: dit is waarom onze Maten hun favoriete messen met een gerust hart toevertrouwen aan Teun en Mike.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <button
                type="button"
                onClick={() => onNavigate ? onNavigate('particulieren') : (window.location.hash = '#particulieren')}
                className="group inline-flex min-h-13 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] active:scale-[0.98] sm:text-base cursor-pointer"
              >
                <span>Plan mijn slijpbeurt</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </button>

              <a
                href="#reviews"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#E87B5B]/20 bg-[#FCEEE8] px-7 py-3.5 text-sm font-bold text-[#C95E3E] transition-all duration-200 hover:bg-[#F8DFD6] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] sm:text-base"
              >
                <span>Bekijk reviews</span>
                <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right: Lege container voor klantfoto of video met organische blob erachter */}
          <div className="order-2 w-full lg:order-2 px-4 sm:px-6 lg:px-0 relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-5 -left-5 sm:-bottom-7 sm:-left-7 h-40 w-40 sm:h-52 sm:w-52 rounded-[42%_58%_62%_38%/55%_42%_58%_45%] bg-[#A9C89E] opacity-90 z-0 transition-transform duration-500 hover:scale-105"
            />
            <div className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border-2 border-dashed border-[#d9e1d7] bg-white shadow-xs sm:aspect-[16/11] lg:aspect-square flex flex-col items-center justify-center p-6 text-center transition-all duration-200 hover:border-[#3B7F4B]/50">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8EFE8] text-[#3B7F4B] mb-3">
                <Users className="h-7 w-7" />
              </div>
              <p className="font-heading text-base font-bold text-[#3B7F4B]">
                Foto met onze Maten
              </p>
              <p className="mt-1 max-w-xs text-xs text-[#657068]">
                Gereserveerde container voor een foto of video met blije klanten aan de deur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR (Zekerheden) */}
      <section aria-label="Zekerheden" className="relative z-20 px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-2xl border border-[#d9e1d7]/70 bg-white/95 px-6 py-4 shadow-[0_4px_24px_rgba(36,74,48,0.04)] backdrop-blur-xs">
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-0">
            <div className="flex flex-wrap items-center gap-2 sm:justify-center sm:border-r sm:border-[#d9e1d7]/70 sm:px-5">
              <GoogleIcon />
              <span className="text-sm leading-none tracking-[0.06em] text-[#FABB05]" aria-label="5 van de 5 sterren">★★★★★</span>
              <span className="text-sm font-bold text-[#3B7F4B]">{GOOGLE_REVIEW_COUNT} reviews · 5,0</span>
            </div>
            <div className="flex items-center gap-3 sm:justify-center sm:border-r sm:border-[#d9e1d7]/70 sm:px-5">
              <Clock3 className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
              <span className="text-sm font-bold text-[#3B7F4B]">Geslepen binnen 24–48 uur</span>
            </div>
            <div className="flex items-center gap-3 sm:justify-center sm:px-5">
              <Sparkles className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
              <span className="text-sm font-bold text-[#3B7F4B]">100% Tevredenheidsgarantie</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LOKALE SAMENWERKINGEN & LOGO SLIDER (Horizontale slider) */}
      <section className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <PartnerLogoSlider />
        </div>
      </section>

      {/* 4. LOSSE QUOTES DIE RONDVLIEGEN (Warm cream #F7F4EC) */}
      <section className="relative overflow-hidden bg-[#F7F4EC] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-[55%_45%_60%_40%/50%_55%_45%_50%] bg-[#E8EFE8]/70"
        />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-10 text-center sm:mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C95E3E]">Wat mensen roepen</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">
              Quotes uit de Utrechtse keukens
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-[#657068]">
              Korte reacties van thuiskoks en koks zodra ze hun geslepen messen weer vastpakken.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {floatingQuotes.map((item, idx) => (
              <div
                key={idx}
                className={`relative rounded-[2rem] border border-[#d9e1d7] bg-white p-6 shadow-xs transition-all duration-300 hover:scale-105 hover:shadow-md ${item.tilt}`}
              >
                <Quote className="h-6 w-6 text-[#E87B5B]/30 mb-2" />
                <p className="font-heading text-base font-bold text-[#203728] leading-snug">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-4 flex items-center justify-between text-xs pt-3 border-t border-[#d9e1d7]/50">
                  <span className="font-bold text-[#3B7F4B]">{item.author}</span>
                  <span className="rounded-full bg-[#FCEEE8] px-2.5 py-0.5 font-bold text-[#C95E3E]">
                    {item.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GOOGLE REVIEWS SECTION (De widget met reviews) */}
      <div id="reviews">
        <GoogleReviewsSection />
      </div>

      {/* 6. ONZE BELOFTE (Witte achtergrond met stijlvol getinte widgets, geen vlag-overgang) */}
      <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Onze belofte</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">
              Waarom onze Maten altijd terugkomen
            </h2>
            <p className="mt-4 text-base leading-7 text-[#657068]">
              Geen fabriekswerk of snelle doordraaierij, maar eerlijk vakmanschap met persoonlijke aandacht.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[1.75rem] border border-[#d9e1d7] bg-[#FAFAF8] p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3B7F4B]/50 hover:bg-white hover:shadow-md">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8EFE8] text-[#3B7F4B]">
                <Sparkles className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-[#3B7F4B]">Handmatig geslepen</h3>
              <p className="mt-2 text-sm leading-6 text-[#657068]">
                Geen hitteontlating. We slijpen met de hand op keramische Shapton waterstenen.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[#d9e1d7] bg-[#FAFAF8] p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3B7F4B]/50 hover:bg-white hover:shadow-md">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8EFE8] text-[#3B7F4B]">
                <Clock3 className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-[#3B7F4B]">Binnen 24–48 uur retour</h3>
              <p className="mt-2 text-sm leading-6 text-[#657068]">
                Je hoeft je favoriete messen nooit wekenlang te missen in de keuken.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[#d9e1d7] bg-[#FAFAF8] p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3B7F4B]/50 hover:bg-white hover:shadow-md">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8EFE8] text-[#3B7F4B]">
                <MapPin className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-[#3B7F4B]">Gratis ophalen</h3>
              <p className="mt-2 text-sm leading-6 text-[#657068]">
                Vanaf 3 messen gratis ophalen en thuisbezorgen in heel Utrecht.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[#d9e1d7] bg-[#FAFAF8] p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3B7F4B]/50 hover:bg-white hover:shadow-md">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8EFE8] text-[#3B7F4B]">
                <Heart className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-[#3B7F4B]">Achteraf betalen</h3>
              <p className="mt-2 text-sm leading-6 text-[#657068]">
                Pas betalen via een simpel Tikkie wanneer je messen weer vlijmscherp op je aanrecht liggen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CONTACT BANNER with top and bottom wave dividers */}
      <section id="maten-contact" className="relative scroll-mt-20 overflow-hidden bg-[#E87B5B] px-4 pb-24 pt-20 text-white sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="pointer-events-none absolute left-0 top-0 h-10 w-full text-white sm:h-14 lg:h-16"
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
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.36em] text-white sm:text-sm">Sluit je aan</p>
          <h2 className="mt-6 max-w-5xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Word ook een tevreden Maat.
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/95 sm:text-xl">
            Laat je messen vandaag nog opmeten en inplannen. Geen gedoe, gewoon vlijmscherp.
          </p>

          <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => onNavigate ? onNavigate('particulieren') : (window.location.hash = '#particulieren')}
              className="group inline-flex min-h-[72px] items-center justify-between gap-4 rounded-full bg-white px-7 py-4 font-heading text-lg font-bold text-[#3B7F4B] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFF7F3] hover:shadow-lg sm:px-10 sm:text-xl cursor-pointer"
            >
              <span>Plan mijn slijpbeurt</span>
              <ArrowRight className="h-7 w-7 shrink-0 text-[#3B7F4B] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[72px] items-center justify-between gap-4 rounded-full bg-white px-7 py-4 font-heading text-lg font-bold text-[#3B7F4B] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFF7F3] hover:shadow-lg sm:px-10 sm:text-xl"
            >
              <span>Stuur een appje</span>
              <MessageCircle className="h-8 w-8 shrink-0 text-[#3B7F4B] transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
