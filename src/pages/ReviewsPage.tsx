import React from 'react';
import { PageId } from '../types';
import { SLIJPMAAT_INFO } from '../data/siteData';
import { GoogleIcon, GOOGLE_REVIEW_COUNT, GoogleReviewsSection } from '../components/GoogleReviewsSection';
import {
  ArrowRight,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  ShieldCheck,
  Star,
  ThumbsUp,
  Heart
} from 'lucide-react';

interface ReviewsPageProps {
  onNavigate?: (page: PageId) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik las jullie reviews en wil graag mijn messen laten slijpen!')}`;
  const mapsReviewUrl = 'https://www.google.com/maps/place/Slijpmaat.nl/@52.1032142,5.1191271,17z/data=!3m1!4b1!4m6!3m5!1s0x2db61c15d9f3a351:0x81e0896d1578558b!8m2!3d52.1032142!4d5.1191271!16s%2Fg%2F11njwnblms';

  const reviewHighlights = [
    {
      title: 'Vlijmscherp resultaat',
      text: 'Klanten verbazen zich keer op keer over het verschil: een mes dat moeiteloos door rijpe tomaten, zacht brood en taaie groenten glijdt.',
      icon: Sparkles,
    },
    {
      title: 'Binnen 24–48 uur terug',
      text: 'Geen weken wachten tot je koksmes terug is. We halen ze op en bezorgen ze doorgaans binnen één tot twee dagen weer aan huis.',
      icon: Clock3,
    },
    {
      title: 'Vriendelijk & persoonlijk',
      text: 'Direct contact via WhatsApp met Teun of Mike. Duidelijke afspraken, eerlijk advies en geen onverwachte kosten.',
      icon: Heart,
    },
  ];

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
              100% Echte ervaringen op Google
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-6xl">
              Wat onze klanten over Slijpmaat zeggen.
            </h1>
            <p className="mt-5 text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Van gepassioneerde thuiskoks tot professionele chefs in Utrecht: lees de eerlijke reviews en ervaringen over ons traditionele whetstone slijpwerk.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {onNavigate && (
                <button
                  type="button"
                  onClick={() => onNavigate('particulieren')}
                  className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] active:scale-[0.98] sm:text-base cursor-pointer"
                >
                  <span>Plan mijn slijpbeurt</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </button>
              )}
              <a
                href={mapsReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#E87B5B]/20 bg-[#FCEEE8] px-7 py-3.5 text-sm font-bold text-[#C95E3E] transition-all duration-200 hover:bg-[#F8DFD6] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] sm:text-base"
              >
                <GoogleIcon />
                <span>Bekijk alle reviews op Google ↗</span>
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
              <span className="text-sm font-bold text-[#3B7F4B]">Gemiddeld een 5.0 score</span>
            </div>
            <div className="flex items-center gap-3 sm:justify-center sm:px-5">
              <ShieldCheck className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
              <span className="text-sm font-bold text-[#3B7F4B]">100% tevredenheidsbelofte</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GOOGLE REVIEWS COMPONENT */}
      <GoogleReviewsSection />

      {/* 4. WAAROM ZOVEEL 5-STERREN REVIEWS (Cream background with wave divider) */}
      <section className="relative overflow-hidden bg-[#F7F4EC] px-4 pb-20 pt-20 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="pointer-events-none absolute left-0 top-0 h-10 w-full text-white sm:h-14 lg:h-16"
        >
          <path
            fill="currentColor"
            d="M0,0 L1440,0 L1440,20 C1180,55 900,10 620,40 C380,68 180,18 0,35 Z"
          />
        </svg>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Wat klanten waarderen</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Waarom mensen voor Slijpmaat kiezen</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {reviewHighlights.map((h) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.title}
                  className="rounded-[2rem] border border-[#d9e1d7] bg-white p-7 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3B7F4B]/50 hover:shadow-md"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8EFE8] text-[#3B7F4B]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-bold text-[#3B7F4B]">{h.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#657068]">{h.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CONTACT BANNER with top and bottom wave dividers */}
      <section id="reviews-contact" className="relative scroll-mt-20 overflow-hidden bg-[#E87B5B] px-4 pb-24 pt-20 text-white sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="pointer-events-none absolute left-0 top-0 h-10 w-full text-[#F7F4EC] sm:h-14 lg:h-16"
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
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.36em] text-white sm:text-sm">Ervaar het zelf</p>
          <h2 className="mt-6 max-w-5xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Laat je messen weer snijden zoals nieuw
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/95 sm:text-xl">
            Plan eenvoudig je slijpbeurt of stuur ons een appje. We halen je messen graag in Utrecht op.
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
