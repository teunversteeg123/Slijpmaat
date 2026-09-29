import React from 'react';
import { PageId } from '../types';
import { SLIJPMAAT_INFO, REVIEWS, ARTICLES } from '../data/siteData';
import { Calculator } from '../components/Calculator';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { SlijpmaatLogo } from '../components/SlijpmaatLogo';
import { SlijpmaatFaqSection } from '../components/SlijpmaatFaqSection';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Clock,
  MapPin,
  CheckCircle,
  MessageCircle,
  Utensils,
  Store,
  ChevronRight,
  Star,
  Check,
  Bike,
  AlertCircle,
  HelpCircle,
  Zap
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.44 0-2.85-.38-4.09-1.11l-.29-.17-3.12.82.83-3.04-.19-.3a8.21 8.21 0 0 1-1.26-4.44c0-4.54 3.7-8.24 8.24-8.24m4.52 10.32c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.02 2.57c.13.17 1.75 2.68 4.25 3.75.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.17-.48-.29z" />
  </svg>
);

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const featuredReviews = REVIEWS.slice(0, 3);
  const recentArticles = ARTICLES.slice(0, 3);

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      onNavigate('prijzen-bestellen');
    }
  };

  const scrollToQuestionOrWhatsApp = () => {
    const el = document.getElementById('stappen');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 bg-[#FAFAFA]">
      {/* 1. HERO SECTION: Exactly matching Slijpmaat.nl (Image.png) */}
      <section className="relative overflow-hidden bg-white text-[#244A30] pt-8 sm:pt-14 pb-12 sm:pb-16 border-b border-[#F2F2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            {/* Top Kicker Text: S L I J P M A A T . N L */}
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#8DA785] uppercase font-body select-none">
              S L I J P M A A T . N L
            </p>

            {/* Main Heading: Jouw messenslijper in Utrecht */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-[#2C643B] tracking-tight leading-[1.08]">
              Jouw messenslijper <br className="hidden sm:inline" />
              in Utrecht
            </h1>

            {/* Sub-paragraph: Soft sage green text, spacious */}
            <p className="text-base sm:text-lg lg:text-xl text-[#8DA785] font-normal leading-relaxed max-w-2xl">
              Voor chefs, thuiskoks en horeca. Slijpmaat haalt je messen thuis of op de zaak op, slijpt ze zorgvuldig met de hand op whetstones en brengt ze vlijmscherp terug.
            </p>

            {/* CTAs: Klein en horizontaal (side-by-side, compact pill buttons) */}
            <div className="pt-2 flex flex-row items-center gap-2.5 sm:gap-3.5 flex-wrap">
              <button
                onClick={scrollToCalculator}
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium text-white bg-[#E07152] hover:bg-[#CA5F42] active:scale-[0.98] transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Plan je slijpbeurt / prijzen</span>
                <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
              </button>

              <button
                onClick={scrollToQuestionOrWhatsApp}
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium text-[#E07152] bg-[#FDECE5] hover:bg-[#F9DFD4] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <span>Ik heb een vraag</span>
                <span className="text-sm leading-none font-bold">↓</span>
              </button>
            </div>

            {/* Key Trust Signals Bar: Exact 4 points requested */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-[#d9e1d7] text-xs text-[#244A30] font-medium">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#3B7F4B] shrink-0" />
                <span>Handmatig op whetstones</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#3B7F4B] shrink-0" />
                <span>Gratis halen v.a. 3 messen</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#3B7F4B] shrink-0" />
                <span>Binnen 48 uur na ophalen</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#3B7F4B] shrink-0" />
                <span>Persoonlijk contact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPACTE WERKWIJZE MET FOTO EN KORTE INTRO (Veel kleiner & to the point) */}
      <section id="stappen" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F4EC] rounded-3xl p-5 sm:p-8 border-2 border-[#3B7F4B]/20 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Foto van het ambacht */}
            <div className="lg:col-span-5 overflow-hidden rounded-2xl border border-[#d9e1d7] shadow-xs relative aspect-[4/3] bg-white">
              <img
                src="/src/assets/images/slijpmaat_werkwijze_craft_1790676539937.jpg"
                alt="Ambachtelijk messen slijpen op whetstones bij Slijpmaat Utrecht"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 bg-[#244A30]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#A9C89E]" />
                <span>Handmatig op waterstenen</span>
              </div>
            </div>

            {/* Content & Metrics Card (Exact overeenkomstig met image.png) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="inline-flex items-center gap-2 bg-[#3B7F4B] px-3.5 py-1.5 rounded-xl text-white shadow-2xs">
                  <SlijpmaatLogo variant="light" size="sm" />
                </div>
                <span className="text-xs font-bold text-[#162E1C] bg-[#A9C89E] px-3 py-1 rounded-full">
                  Utrecht Ambacht
                </span>
              </div>

              <div className="space-y-1.5">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#244A30]">
                  Meer snijden, minder zagen!
                </h2>
                <p className="text-xs sm:text-sm text-[#203728] leading-relaxed">
                  Messenslijpen is een oud vak, maar de service eromheen mag best van nu zijn. Wij slijpen met water en getraind spiergeheugen, zonder het staal te verhitten.
                </p>
              </div>

              {/* 4 Tegels (Whetstones, Instaptarief, Doorlooptijd, Klantscore) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 text-xs">
                <div className="p-3 bg-white rounded-xl border border-[#d9e1d7]">
                  <span className="text-[#657068] block text-[11px]">Slijpmethode</span>
                  <strong className="text-[#244A30] font-heading text-sm block">Whetstones</strong>
                  <span className="text-[#3B7F4B] text-[10px] font-semibold">Minimaal staalverlies</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#d9e1d7]">
                  <span className="text-[#657068] block text-[11px]">Instaptarief</span>
                  <strong className="text-[#244A30] font-heading text-sm block">Vanaf € 6,50</strong>
                  <span className="text-[#3B7F4B] text-[10px] font-semibold">Geen toeslag Japans</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#d9e1d7]">
                  <span className="text-[#657068] block text-[11px]">Doorlooptijd</span>
                  <strong className="text-[#244A30] font-heading text-sm block">Binnen 48 uur</strong>
                  <span className="text-[#3B7F4B] text-[10px] font-semibold">Terug in je keuken</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#d9e1d7]">
                  <span className="text-[#657068] block text-[11px]">Klantscore</span>
                  <strong className="text-[#244A30] font-heading text-sm block">5.0 van 5.0</strong>
                  <span className="text-amber-500 text-[10px] font-bold">★★★★★ Google</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('werkwijze')}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-[#E8EFE8] text-[#244A30] font-bold text-xs sm:text-sm transition-colors border border-[#3B7F4B]/30 flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <span>Lees meer over onze werkwijze</span>
                  <ArrowRight className="w-4 h-4 text-[#3B7F4B]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DE BESTELCALCULATOR DIRECT OP DE HOMEPAGE (Mobile-first, direct resultaat!) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Calculator onOrderInitiated={() => {}} />
      </section>

      {/* 4. DOELGROEPEN: PARTICULIER & HORECA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Card: Particulieren */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#d9e1d7] shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-[#E8EFE8] text-[#3B7F4B] flex items-center justify-center font-bold">
                <Utensils className="w-5 h-5" />
              </div>

              <div>
                <span className="text-xs font-bold text-[#3B7F4B] uppercase tracking-wide">
                  Voor thuiskoks &amp; studenten
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#244A30] mt-0.5">
                  Particulieren
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#203728] leading-relaxed">
                Geen geplette tomaten en gefrustreerd duwen meer. Laat je favoriete koksmessen, santoku&apos;s en schilmessen weer moeiteloos snijden. Vanaf 3 messen gratis ophalen in Utrecht!
              </p>

              <div className="pt-1 flex flex-wrap gap-2 text-xs font-medium text-[#244A30]">
                <span className="bg-[#FAFAFA] px-2.5 py-1 rounded-lg border border-[#d9e1d7]">€6,50 / €8,50 / €10,50</span>
                <span className="bg-[#E8EFE8] px-2.5 py-1 rounded-lg border border-[#3B7F4B]/30 text-[#162E1C]">StudentenMaat: €5,00</span>
              </div>
            </div>

            <div className="pt-5">
              <button
                onClick={() => onNavigate('particulieren')}
                className="w-full py-3 px-5 rounded-full bg-[#E8EFE8] hover:bg-[#3B7F4B] hover:text-white text-[#244A30] font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#A9C89E]/40 min-h-[46px]"
              >
                <span>Bekijk particuliere service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card: Horeca */}
          <div className="bg-[#244A30] text-white rounded-3xl p-6 sm:p-7 border border-[#315F3B] shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-[#315F3B] text-[#A9C89E] flex items-center justify-center font-bold">
                <Store className="w-5 h-5" />
              </div>

              <div>
                <span className="text-xs font-bold text-[#A9C89E] uppercase tracking-wide">
                  Voor chefs &amp; restaurants
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mt-0.5">
                  Horeca &amp; Keukens
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#E8EFE8]/90 leading-relaxed">
                Minimale downtime voor je brigade. Wij stemmen ophalen en bezorgen strak af op jullie mise-en-place of sluitingsdagen. Geen droge machines die de harding verbranden.
              </p>

              <div className="pt-1 flex flex-wrap gap-2 text-xs font-medium text-[#E8EFE8]">
                <span className="bg-[#315F3B] px-2.5 py-1 rounded-lg">Strakke planning</span>
                <span className="bg-[#315F3B] px-2.5 py-1 rounded-lg">Btw-factuur achteraf</span>
              </div>
            </div>

            <div className="pt-5">
              <button
                onClick={() => onNavigate('horeca')}
                className="w-full py-3 px-5 rounded-full bg-white hover:bg-[#E8EFE8] text-[#244A30] font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[46px]"
              >
                <span>Bespreek horeca-slijpbeurt</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VOOR-EN-NA RESULTATEN: VECTOR DIAGRAM (ZERO PHOTOS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BeforeAfterSlider />
      </section>

      {/* 6. UTRECHT SERVICEGEBIED & BUITEN UTRECHT NOTICE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#3B7F4B] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-2.5">
            <span className="text-xs uppercase tracking-wider font-bold text-[#E8EFE8] font-heading">
              Servicegebied &middot; Geen inloopwinkel
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Ophalen in Utrecht &middot; Buiten Utrecht op afspraak
            </h2>
            <p className="text-xs sm:text-sm text-white/95 leading-relaxed">
              Binnen Utrecht halen we vanaf 3 messen gratis op. Woon je buiten Utrecht? Dan ben je van harte welkom om je messen op afspraak bij ons langs te brengen en later weer op te halen.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik kom van buiten Utrecht en wil graag messen op afspraak langsbrengen!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-white text-[#244A30] font-bold text-xs sm:text-sm hover:bg-[#F7F4EC] transition-colors flex items-center gap-2 shadow-xs min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 text-[#3B7F4B]" />
                <span>Afspraak via WhatsApp</span>
              </a>
              <button
                onClick={() => onNavigate('ophalen-bezorgen')}
                className="px-5 py-3 rounded-full bg-[#244A30] hover:bg-[#1a3523] text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer min-h-[44px]"
              >
                <span>Bekijk postcodegebied</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GOOGLE REVIEWS (Compact & Verified - Groen & Oranje op Wit) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#d9e1d7] shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 gap-3">
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-[#3B7F4B] ml-1">5.0 sterren op Google</span>
              </div>
              <h2 className="text-2xl font-extrabold font-heading text-[#244A30]">
                Wat onze klanten zeggen
              </h2>
            </div>
            <button
              onClick={() => onNavigate('reviews')}
              className="text-xs font-bold text-[#3B7F4B] hover:text-[#244A30] flex items-center gap-1 cursor-pointer"
            >
              <span>Alle reviews</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredReviews.map((rev) => (
              <div key={rev.id} className="bg-[#FAFAFA] rounded-2xl p-4 sm:p-5 border border-[#d9e1d7] flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#244A30]">{rev.author}</span>
                    <span className="text-amber-500 font-bold">★★★★★</span>
                  </div>
                  <p className="text-xs text-[#203728] leading-relaxed italic">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>
                <div className="pt-2.5 border-t border-[#F2F2EC] mt-2.5 text-[11px] text-[#657068]">
                  <span>{rev.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. VEELGESTELDE VRAGEN (FAQ) - Oranje op wit met witte tekst */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlijpmaatFaqSection defaultOpenIndex={0} />
      </section>

      {/* 9. KENNISBANK PREVIEW (Hier staan de inhoudelijke artikelen) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 gap-3">
          <div>
            <span className="text-xs uppercase tracking-wider font-bold text-[#3B7F4B] font-heading">
              Slijpmaat Kennisbank
            </span>
            <h2 className="text-2xl font-extrabold font-heading text-[#244A30] mt-0.5">
              Handige artikelen over messen
            </h2>
          </div>
          <button
            onClick={() => onNavigate('kennisbank')}
            className="text-xs font-bold text-[#3B7F4B] hover:text-[#244A30] flex items-center gap-1 cursor-pointer"
          >
            <span>Bekijk alle blogs</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recentArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => onNavigate('artikel')}
              className="bg-white rounded-2xl p-5 border border-[#d9e1d7] hover:border-[#3B7F4B] transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[11px] text-[#657068]">
                  <span className="font-semibold text-[#3B7F4B]">{art.category}</span>
                  <span>&middot;</span>
                  <span>{art.readTime}</span>
                </div>
                <h3 className="font-bold text-sm font-heading text-[#244A30] group-hover:text-[#3B7F4B] transition-colors leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs text-[#203728] leading-relaxed line-clamp-2">
                  {art.summary}
                </p>
              </div>
              <div className="pt-3 border-t border-[#F2F2EC] mt-3 flex items-center justify-between text-xs font-bold text-[#3B7F4B]">
                <span>Lees artikel</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. DIRECT CONTACT STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#E8EFE8] rounded-3xl p-6 sm:p-8 border border-[#3B7F4B]/30 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-[#244A30]">
              Vragen over jouw messen?
            </h3>
            <p className="text-xs sm:text-sm text-[#203728] max-w-xl">
              Stuur ons gerust een berichtje via WhatsApp. Foto van je mes meesturen mag altijd!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <a
              href={`https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik heb een vraag over het slijpen van mijn messen!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#3B7F4B] text-white font-bold text-xs sm:text-sm hover:bg-[#244A30] transition-all flex items-center justify-center gap-2 shadow-xs min-h-[46px]"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WhatsApp je Maat</span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#F7F4EC] text-[#244A30] border border-[#d9e1d7] font-bold text-xs sm:text-sm hover:bg-[#e6e2d8] transition-all cursor-pointer min-h-[46px]"
            >
              <span>Contactpagina</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
