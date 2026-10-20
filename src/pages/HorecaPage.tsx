import React from 'react';
import { PageId } from '../types';
import { SLIJPMAAT_INFO } from '../data/siteData';
import { OrganicSectionDivider } from '../components/OrganicSectionDivider';
import { HeroVideo } from '../components/HeroVideo';
import { ResultatenSlider } from '../components/ResultatenSlider';
import { ZakelijkFormulier } from '../components/ZakelijkFormulier';
import { TrustBar } from '../components/TrustBar';
import { createWhatsAppUrl } from '../utils/contact';
import {
  ArrowRight,
  ChevronLeft,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  FileText,
  Plus,
} from 'lucide-react';

interface HorecaPageProps {
  onNavigate?: (page: PageId) => void;
}

export const HorecaPage: React.FC<HorecaPageProps> = ({ onNavigate }) => {
  const whatsappUrl = createWhatsAppUrl('Hoi Slijpmaat, ik zou graag in contact willen komen voor een zakelijke aanvraag.');

  const businessBasePrices = [
    SLIJPMAAT_INFO.prices.small,
    SLIJPMAAT_INFO.prices.normal,
    SLIJPMAAT_INFO.prices.large,
    SLIJPMAAT_INFO.prices.extraLarge,
  ];

  // 3 Korte stappen vooraf (Warm cream #F7F4EC)
  const stepsBefore = [
    {
      num: '1',
      title: 'Aanmelden & afstemmen',
      text: 'Geef via het formulier of WhatsApp door hoeveel messen jullie hebben en welk haal- of brengmoment jullie voorkeur heeft.',
    },
    {
      num: '2',
      title: 'Brengen of lokale service',
      text: 'Zakelijke klanten uit heel Nederland kunnen op afspraak in Utrecht langskomen. Binnen Utrecht stemmen we desgewenst een haal- en brengmoment af.',
    },
    {
      num: '3',
      title: 'Scherp volgens afspraak',
      text: 'Doorgaans leveren we de messen binnen 24 tot 48 uur weer vlijmscherp af, volgens de vooraf afgestemde planning en prijs.',
    },
  ];

  // 4 Stappen in de groene sectie (Na je aanvraag)
  const postOrderSteps = [
    {
      step: '1',
      title: 'Snel voorstel & planning',
      desc: 'Je ontvangt van Teun of Mike een helder voorstel en samen stemmen we de planning en de passende haal- of brengroute af.',
      icon: Clock3,
    },
    {
      step: '2',
      title: 'Brengen, ophalen of lokale service',
      desc: 'Zakelijke klanten kunnen hun messen op afspraak in Utrecht brengen en ophalen. Binnen Utrecht is ook lokale haal- en brengservice mogelijk.',
      icon: MapPin,
    },
    {
      step: '3',
      title: 'Handmatig geslepen',
      desc: 'Handmatig geslepen op Japanse Shapton-waterstenen, met controle over slijphoek, profiel en materiaalafname.',
      icon: ShieldCheck,
    },
    {
      step: '4',
      title: 'Retour & betaling',
      desc: 'Je messen weer op tijd op de snijplank. Betaalwijze en eventuele factuurgegevens stemmen we vooraf duidelijk af.',
      icon: FileText,
    },
  ];

  // 5 Veelgestelde vragen voor Horeca & Zakelijke klanten
  const faqs = [
    {
      question: 'Kunnen jullie het ophalen rond onze service plannen?',
      answer: 'Binnen Utrecht kunnen we een haal- en brengmoment afstemmen op jullie service. Kom je van buiten Utrecht, dan kun je de messen op afspraak in Utrecht brengen en ophalen. We spreken de planning altijd vooraf duidelijk af.',
    },
    {
      question: 'Hoe werken de zakelijke prijs en betaling?',
      answer: 'Zakelijk slijpen is maatwerk. Vooraf stemmen we aantallen, planning, prijs en betaalwijze duidelijk af. Eventuele factuurgegevens bevestigen we voordat we starten.',
    },
    {
      question: 'Waarom slijpen jullie op waterstenen i.p.v. een snelle bandslijper?',
      answer: 'Bij machinaal slijpen hangen warmteontwikkeling en materiaalafname sterk af van de machine, korrel, snelheid en vakkennis. Wij kiezen voor handmatig slijpen op waterstenen omdat we daarmee de slijphoek, het profiel en de materiaalafname per mes nauwkeurig kunnen sturen.',
    },
    {
      question: 'Slijpen jullie zowel restaurant-messen als persoonlijke messen van koks?',
      answer: 'Ja. We kunnen zowel algemene keukenmessen van het restaurant als persoonlijke messen van koks beoordelen. We bekijken ieder mes afzonderlijk en stemmen de behandeling af op het type mes, het staal, de staat en het gebruik.',
    },
    {
      question: 'Kunnen we een periodiek schema of vaste slijpronde afspreken?',
      answer: 'Ja. Terugkerend onderhoud en grotere aantallen zijn maatwerk. We stemmen vooraf af welke frequentie, aantallen en rondes bij jullie keuken passen en bevestigen planning en prijs voordat we starten.',
    },
  ];

  return (
    <div className="overflow-hidden bg-[#FAFAF8]">
      {/* 1. HERO SECTION (Zelfde lay-out als Particulieren: tekst links, videocontainer rechts) */}
      <section className="site-hero relative overflow-hidden bg-[#FAFAF8] pb-4 pt-2 sm:pb-8 sm:pt-4 lg:min-h-[580px] lg:pb-12">
        {/* Crisp organic SVG blob in top-right background (geen wazige gloed) */}
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

        <div className="site-hero-grid relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-7 py-6 sm:py-10 lg:min-h-[540px] lg:grid-cols-2 lg:gap-14 lg:py-8 xl:gap-20">
          {/* Left: Copy & CTAs */}
          <div className="site-hero-copy order-1 px-4 sm:px-6 lg:order-1 lg:max-w-2xl lg:px-0">
            <p className="site-hero-eyebrow text-xs font-bold uppercase tracking-[0.28em] text-[#3B7F4B] sm:text-sm">
              Voor restaurants, keukenteams &amp; koks uit heel Nederland
            </p>
            <h1 className="site-hero-title mt-3 max-w-3xl font-heading text-4xl font-bold leading-[1.02] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-5xl xl:text-6xl">
              Professioneel messen slijpen voor horeca
            </h1>
            <p className="site-hero-description mt-5 max-w-2xl text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Wij slijpen jullie messen met de hand op Japanse waterstenen. Zakelijke klanten uit heel Nederland kunnen hun messen op afspraak in Utrecht brengen en ophalen. Binnen Utrecht is ook lokale haal- en brengservice mogelijk.
            </p>

            <div className="site-hero-actions mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <button
                type="button"
                onClick={() => onNavigate ? onNavigate('home') : (window.location.hash = '#home')}
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#E87B5B]/20 bg-[#FCEEE8] px-7 py-3.5 text-sm font-bold text-[#C95E3E] transition-all duration-200 hover:bg-[#F8DFD6] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] sm:text-base"
              >
                <ChevronLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" aria-hidden="true" />
                <span>Terug</span>
              </button>

              <button
                type="button"
                onClick={() => document.getElementById('zakelijk-formulier')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="group inline-flex min-h-13 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] active:scale-[0.98] sm:text-base cursor-pointer"
              >
                <span>Vraag zakelijke offerte aan</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </button>

            </div>
          </div>

          {/* Right: Tomatenvideo met herkenbare organische blob erachter (identiek aan Particulieren) */}
          <div className="relative order-2 w-full px-0 sm:px-6 lg:order-2 lg:px-0">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-5 -left-5 sm:-bottom-7 sm:-left-7 h-40 w-40 sm:h-52 sm:w-52 rounded-[42%_58%_62%_38%/55%_42%_58%_45%] bg-[#A9C89E] opacity-90 z-0 transition-transform duration-500 hover:scale-105"
            />
            <div className="relative z-10 mx-auto aspect-[4/3] w-full overflow-hidden rounded-none bg-[#203728] shadow-xs sm:aspect-[16/11] sm:w-[70%] sm:rounded-[2.5rem] lg:aspect-square">
              <HeroVideo
                src="/assets/tomaat-website-video.mp4"
                ariaLabel="Een scherp keukenmes snijdt soepel door een tomaat"
              />
            </div>
          </div>
        </div>
      </section>

      <TrustBar
        items={[
          { icon: <Clock3 className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />, text: 'Afgestemd op jullie planning' },
          { icon: <FileText className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />, text: 'Duidelijke prijsafspraken' },
        ]}
      />

      <OrganicSectionDivider fromColor="#FAFAF8" middleColor="#E8EFE8" toColor="#F7F4EC" variant="scalloped" />

      {/* 3. VOORAF: KORTE BEZOEKERSFLOW (Warm cream #F7F4EC) - Compact & horizontaal */}
      <section className="relative overflow-hidden bg-[#F7F4EC] px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-[55%_45%_60%_40%/50%_55%_45%_50%] bg-[#E8EFE8]/70"
        />

        <div className="relative mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8 max-w-2xl sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Zo werkt het voor zakelijke keukens</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Eenvoudig geregeld voor jouw keuken</h2>
          </div>

          {/* 3 Korte Stappen */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {stepsBefore.map((item) => (
              <div
                key={item.num}
                className="group relative flex items-start gap-3.5 rounded-2xl border border-[#d9e1d7] bg-white p-4 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3B7F4B]/50 hover:shadow-md sm:p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9E4DE] font-heading text-xs font-bold text-[#C95E3E]">
                  {item.num}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-base font-bold text-[#3B7F4B] sm:text-lg">{item.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#657068] sm:text-sm sm:leading-6">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OrganicSectionDivider fromColor="#F7F4EC" middleColor="#F9E4DE" toColor="#FAFAF8" variant="rolling" mirror />

      {/* 4. HET BESTELFORMULIER (ZAKELIJK FORMULIER) */}
      <section id="zakelijk-formulier" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-left sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C95E3E]">Zakelijk Formulier</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Zakelijke aanvraag &amp; offerte</h2>
          </div>

          <div className="rounded-[2.5rem] border border-[#d9e1d7] bg-white p-5 shadow-sm sm:p-8 lg:p-10">
            <ZakelijkFormulier />
          </div>

          {/* Duidelijke zakelijke prijslijst op bijbehorende stijlvolle wijze onder het formulier */}
          <section aria-labelledby="zakelijke-prijslijst" className="mt-10 sm:mt-12 rounded-[2rem] border border-[#d9e1d7] bg-white p-6 shadow-xs sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-[#d9e1d7]/80 pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C95E3E]">Duidelijk vooraf</p>
                <h3 id="zakelijke-prijslijst" className="mt-1.5 font-heading text-2xl font-bold text-[#3B7F4B] sm:text-3xl">
                  Zakelijke prijslijst
                </h3>
              </div>
              <p className="text-xs font-semibold text-[#657068]">
                Basistarieven per mes · Alle prijzen incl. btw
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {businessBasePrices.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col justify-between rounded-xl border border-[#d9e1d7] bg-[#FAFAF8] p-4 transition-all duration-200 hover:border-[#3B7F4B]/40 hover:bg-white"
                >
                  <div>
                    <span className="font-heading text-base font-bold text-[#244A30]">{item.name}</span>
                    <p className="mt-0.5 text-xs text-[#657068]">{item.size}</p>
                    {'desc' in item && item.desc && (
                      <p className="mt-2 text-[11px] leading-4 text-[#657068]/80 line-clamp-2">{item.desc}</p>
                    )}
                  </div>
                  <div className="mt-4 pt-2 border-t border-[#d9e1d7]/60 flex items-baseline justify-between">
                    <span className="font-heading text-lg font-bold text-[#3B7F4B]">
                      {'custom' in item && item.custom ? 'Op aanvraag' : `€${item.price.toFixed(2).replace('.', ',')}`}
                    </span>
                    {!('custom' in item && item.custom) && (
                      <span className="text-[11px] font-semibold text-[#657068]">incl. btw</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-[#3B7F4B]/20 bg-[#E8EFE8]/60 p-4 text-xs leading-relaxed text-[#244A30] sm:text-sm">
              <p>
                <strong>Extra reparaties (incl. btw):</strong> Kleine chip herstellen: <strong className="text-[#3B7F4B]">+€2,50</strong> per mes (in combinatie met een slijpbeurt). Nieuw profiel aanbrengen: <strong className="text-[#3B7F4B]">+€8,50</strong> per mes (altijd vooraf besproken).
              </p>
              <p className="mt-1.5 text-[#657068]">
                Grote aantallen of terugkerend onderhoud? Vermeld het aantal messen en gewenste planning in het formulier. Je ontvangt eerst een duidelijke offerte; we starten pas na akkoord.
              </p>
            </div>
          </section>
        </div>
      </section>

      {/* 5. RESULTATEN SLIDER (Volledige breedte over de pagina) */}
      <section className="relative w-full overflow-hidden bg-[#FAFAF8] pb-8 pt-4 sm:pb-14 sm:pt-6">
        <ResultatenSlider />
      </section>

      <OrganicSectionDivider fromColor="#FAFAF8" middleColor="#A9C89E" toColor="#3B7F4B" variant="calm" />

      {/* 6. WAT GEBEURT ER NA JE AANVRAAG? (Green section with wave dividers) - Compact & horizontaal */}
      <section className="relative overflow-hidden bg-[#3B7F4B] px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E8EFE8]">Wat gebeurt er daarna?</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">Wat gebeurt er na je aanvraag?</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-5">
            {postOrderSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="group relative flex items-start gap-3.5 rounded-2xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9E4DE] font-heading text-xs font-bold text-[#C95E3E]">
                    {step.step}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-heading text-base font-bold text-[#3B7F4B]">
                        {step.title}
                      </h3>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#E8EFE8] text-[#3B7F4B]">
                        <Icon strokeWidth={1.75} className="h-4 w-4" />
                      </span>
                    </div>

                    <p className="mt-1 text-xs leading-5 text-[#657068] sm:text-sm sm:leading-6">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <OrganicSectionDivider fromColor="#3B7F4B" middleColor="#E8EFE8" toColor="#FFFFFF" variant="scalloped" mirror />

      {/* 7. VEELGESTELDE VRAGEN VOOR ZAKELIJKE KLANTEN (Exacte Particulieren-stijl met plusje) */}
      <section id="faq" className="relative scroll-mt-24 overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-[#F4F7F4] opacity-80"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="max-w-md">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Veelgestelde vragen</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Vragen over zakelijk slijpen?</h2>
            <p className="mt-4 text-base leading-7 text-[#657068]">
              Hier vind je direct antwoord op de meest gestelde vragen van chefs en ondernemers over planning, stenen, prijzen en betaling.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#3B7F4B] transition-colors hover:text-[#315F3B]"
            >
              <span>Bespreek direct via WhatsApp met Teun of Mike</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[#d9e1d7]/60 bg-[#FAFAF8] p-5 shadow-xs transition-all duration-200 hover:border-[#3B7F4B]/40 hover:bg-white open:border-[#3B7F4B]/50 open:bg-white open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-heading text-base font-bold text-[#3B7F4B] marker:hidden sm:text-lg">
                  <span>{faq.question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8EFE8] text-[#3B7F4B] transition-transform duration-200 group-open:rotate-45">
                    <Plus className="h-4 w-4" aria-hidden="true" />
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#657068]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <OrganicSectionDivider fromColor="#FFFFFF" middleColor="#F9E4DE" toColor="#E87B5B" variant="rolling" />

      {/* 8. BOTTOM CONTACT BANNER with top and bottom wave dividers */}
      <section id="horeca-contact" className="relative scroll-mt-20 overflow-hidden bg-[#E87B5B] px-4 pb-24 pt-20 text-white sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.36em] text-white sm:text-sm">Zakelijk Contact</p>
          <h2 className="mt-6 max-w-5xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Direct afstemmen met je Maat
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/95 sm:text-xl">
            Geen tussenpersonen of wachttijden. Bel of app direct met Teun of Mike over jullie keukenschema.
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

      <OrganicSectionDivider fromColor="#E87B5B" middleColor="#F9E4DE" toColor="#FFFFFF" variant="calm" mirror />
    </div>
  );
};
