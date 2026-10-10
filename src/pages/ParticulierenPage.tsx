import React from 'react';
import { PageId } from '../types';
import { SLIJPMAAT_INFO } from '../data/siteData';
import { ParticulierenCalculator } from '../components/ParticulierenCalculator';
import { ResultatenSlider } from '../components/ResultatenSlider';
import { GoogleIcon, GOOGLE_REVIEW_COUNT } from '../components/GoogleReviewsSection';
import { OrganicSectionDivider } from '../components/OrganicSectionDivider';
import {
  ArrowDown,
  ArrowRight,
  ChevronLeft,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Plus,
  Package,
  CreditCard
} from 'lucide-react';

interface ParticulierenPageProps {
  onNavigate?: (page: PageId) => void;
}

export const ParticulierenPage: React.FC<ParticulierenPageProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik wil graag mijn messen laten slijpen!')}`;

  const stepsBefore = [
    {
      num: '1',
      title: 'Kies je messen',
      text: 'Selecteer hieronder het aantal messen per formaat. De prijs wordt direct berekend.',
    },
    {
      num: '2',
      title: 'Ophalen of langskomen',
      text: 'Vanaf €35 bestelwaarde gratis opgehaald en thuisbezorgd in Utrecht. Of breng ze langs op afspraak.',
    },
    {
      num: '3',
      title: 'Snel weer vlijmscherp',
      text: 'We proberen jouw messen binnen 24–48 uur weer vlijmscherp terug te leveren.',
    },
  ];

  const postOrderSteps = [
    {
      step: '01',
      title: 'Persoonlijke afstemming via WhatsApp',
      desc: 'Zodra je jouw bestelling verstuurt, reageert Teun of Mike vlot om het ophaaltijdvak of afgiftemoment met je af te stemmen.',
      icon: MessageCircle,
    },
    {
      step: '02',
      title: 'Messen veilig meegeven',
      desc: 'Rol je messen simpelweg in een schone theedoek of krant. Onze koerier heeft zelf ook veilige transporttassen bij zich.',
      icon: Package,
    },
    {
      step: '03',
      title: 'Met de hand geslepen op waterstenen',
      desc: 'Wij werken vanuit huis in Utrecht. Hier beoordelen we de snede zorgvuldig, slijpen we watergekoeld op Japanse whetstones en stroppen we af op leder.',
      icon: Sparkles,
    },
    {
      step: '04',
      title: 'Vlijmscherp terug & achteraf betalen',
      desc: 'Binnen 24–48 uur staan we weer op de stoep met scherpe messen. Betalen doe je pas achteraf via een eenvoudig Tikkie.',
      icon: CreditCard,
    },
  ];

  const faqs = [
    {
      question: 'Hoe geef ik mijn messen veilig mee?',
      answer: 'Rol je messen eenvoudig in een schone theedoek, handdoek of krant, eventueel met een elastiek eromheen. Wij vervoeren je messen daarna in onze eigen gevoerde ophaal- en bezorgtas. Zo blijven je messen én onze vingers heel.',
    },
    {
      question: 'Welke soorten messen slijpen jullie wel en niet?',
      answer: 'Wij slijpen alle gladde keukenmessen: koksmessen, schilmessen, santoku’s, groentemessen en vleesmessen. Ook Japanse messen slijpen we zonder meerprijs. Kartelmessen (zoals broodmessen) en tuingereedschap slijpen we op dit moment niet.',
    },
    {
      question: 'Hoe snel heb ik mijn messen weer scherp terug?',
      answer: 'We proberen jouw messen binnen 24–48 uur weer terug te leveren. We spreken vooraf een duidelijk ophaal- en bezorgmoment met je af, zodat je precies weet wanneer je weer vlijmscherp kunt koken.',
    },
    {
      question: 'Moet ik vooraf betalen?',
      answer: 'Nee, bij Slijpmaat betaal je pas achteraf. Nadat je messen geslepen zijn en we ze weer bij je thuis afleveren, sturen we een eenvoudig Tikkie of betaalverzoek. Pas als jij tevreden bent met de scherpte!',
    },
    {
      question: 'Wat als mijn mes een chip of hapje heeft?',
      answer: 'Kleine chips (≤2 mm) of beschadigde punten kunnen we vakkundig herstellen. Wij kiezen de juiste herstelsteen om het profiel weer strak te krijgen. Vermeld dit gerust bij je aanvraag of stuur vooraf een foto via WhatsApp, dan bekijken we direct wat er nodig is.',
    },
  ];

  return (
    <div className="overflow-hidden bg-[#FAFAF8]">
      {/* 1. HERO SECTION (Zonder wazige gloed, met herkenbare organische blobs) */}
      <section className="relative overflow-hidden bg-[#FAFAF8] pb-4 pt-2 sm:pb-8 sm:pt-4 lg:min-h-[580px] lg:pb-12">
        {/* Crisp organic SVG blob in top-right background (geen wazige gloed, maar duidelijke blob-vorm) */}
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
              Voor particulieren in Utrecht
            </p>
            <h1 className="mt-3 max-w-3xl font-heading text-4xl font-bold leading-[1.02] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-5xl xl:text-6xl">
              Keukenmessen laten slijpen in Utrecht
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Wij halen je keukenmessen thuis op in Utrecht, slijpen ze zorgvuldig met de hand op Japanse waterstenen en brengen ze weer vlijmscherp terug.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <button
                type="button"
                onClick={() => onNavigate ? onNavigate('home') : (window.location.hash = '#home')}
                className="group inline-flex min-h-13 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] active:scale-[0.98] sm:text-base cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" aria-hidden="true" />
                <span>Terug</span>
              </button>

              <button
                type="button"
                onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#E87B5B]/20 bg-[#FCEEE8] px-7 py-3.5 text-sm font-bold text-[#C95E3E] transition-all duration-200 hover:bg-[#F8DFD6] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] sm:text-base"
              >
                <span>Ik heb een vraag</span>
                <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right: Tomatenvideo met herkenbare organische blob erachter */}
          <div className="order-2 w-full lg:order-2 px-4 sm:px-6 lg:px-0 relative">
            {/* Karakteristieke saliegroene organische blob (zoals op Homepage en Over Ons) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-5 -left-5 sm:-bottom-7 sm:-left-7 h-40 w-40 sm:h-52 sm:w-52 rounded-[42%_58%_62%_38%/55%_42%_58%_45%] bg-[#A9C89E] opacity-90 z-0 transition-transform duration-500 hover:scale-105"
            />
            <div className="relative z-10 mx-auto aspect-[4/3] w-[92%] overflow-hidden rounded-[2rem] bg-[#203728] shadow-xs sm:aspect-[16/11] sm:w-[70%] sm:rounded-[2.5rem] lg:aspect-square">
              <video
                className="h-full w-full object-cover"
                src="/assets/tomaat-website-video.mp4"
                poster="/assets/tomaat-video-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Een scherp keukenmes snijdt soepel door een tomaat"
              />
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
              <span className="text-sm font-bold text-[#3B7F4B]">{GOOGLE_REVIEW_COUNT} reviews</span>
            </div>
            <div className="flex items-center gap-3 sm:justify-center sm:border-r sm:border-[#d9e1d7]/70 sm:px-5">
              <Clock3 className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
              <span className="text-sm font-bold text-[#3B7F4B]">Geslepen binnen 24–48 uur</span>
            </div>
            <div className="flex items-center gap-3 sm:justify-center sm:px-5">
              <MapPin className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
              <span className="text-sm font-bold text-[#3B7F4B]">Gratis ophalen &amp; bezorgen vanaf €35</span>
            </div>
          </div>
        </div>
      </section>

      <OrganicSectionDivider fromColor="#FAFAF8" middleColor="#E8EFE8" toColor="#F7F4EC" variant="calm" />

      {/* 3. VOORAF: KORTE BEZOEKERSFLOW (Warm cream #F7F4EC) */}
      <section className="relative overflow-hidden bg-[#F7F4EC] px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-[55%_45%_60%_40%/50%_55%_45%_50%] bg-[#E8EFE8]/70"
        />

        <div className="relative mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Zo werkt het voor particulieren</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Eenvoudig van bot naar vlijmscherp</h2>
            <p className="mt-3 text-base leading-7 text-[#657068]">
              Drie simpele stappen. Geen pakketjes of winkelbezoek nodig: wij regelen het bij jou aan huis.
            </p>
          </div>

          {/* 3 Korte Stappen */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {stepsBefore.map((item) => (
              <div
                key={item.num}
                className="group relative rounded-[2rem] border border-[#d9e1d7] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3B7F4B]/50 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F9E4DE] font-heading text-sm font-bold text-[#C95E3E]">
                  {item.num}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold text-[#3B7F4B]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#657068]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OrganicSectionDivider fromColor="#F7F4EC" middleColor="#F9E4DE" toColor="#FAFAF8" variant="scalloped" mirror />

      {/* 4. HET BESTELFORMULIER (CALCULATOR) - Volledig geintegreerd, zonder zakelijk knip */}
      <section id="calculator" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C95E3E]">Bestelformulier</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Bereken direct je prijs &amp; bestel</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-[#657068]">
              Kies het aantal messen, vul je postcode in en verstuur je bestelling via WhatsApp. Je ziet meteen vooraf de exacte prijs inclusief bezorging.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-[#d9e1d7] bg-white p-5 shadow-sm sm:p-8 lg:p-10">
            <ParticulierenCalculator />
          </div>
        </div>
      </section>

      {/* 5. RESULTATEN SLIDER (Eenvoudige lege container, klaar voor latere foto's) */}
      <section className="relative overflow-hidden bg-[#FAFAF8] px-4 pb-14 pt-2 sm:px-6 sm:pb-20 sm:pt-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <ResultatenSlider />
        </div>
      </section>

      <OrganicSectionDivider fromColor="#FAFAF8" middleColor="#E8EFE8" toColor="#3B7F4B" variant="rolling" />

      {/* 6. EXTRA INFO OVER HET PROCES NÁ DE BESTELLING (Green section with wave dividers) */}
      <section className="relative overflow-hidden bg-[#3B7F4B] px-4 pb-28 pt-20 sm:px-6 sm:pb-36 sm:pt-24 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E8EFE8]">Wat gebeurt er daarna?</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">Wat gebeurt er na je bestelling?</h2>
            <p className="mt-4 text-base leading-7 text-[#E8EFE8]">
              Geen onduidelijkheid of stilte. Zo verloopt het proces vanaf het moment dat je op de WhatsApp-knop drukt.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {postOrderSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="group relative rounded-[1.75rem] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F9E4DE] font-heading text-sm font-bold text-[#C95E3E]">
                        {step.step}
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E8EFE8] text-[#3B7F4B]">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <h3 className="mt-5 font-heading text-lg font-bold text-[#3B7F4B]">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#657068]">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <OrganicSectionDivider fromColor="#3B7F4B" middleColor="#A9C89E" toColor="#FFFFFF" variant="calm" mirror />

      {/* 6. DE 5 BIJBEHORENDE FAQS (Exacte homepage stijl met draaiend plusje) */}
      <section id="faq" className="relative scroll-mt-24 overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-[#F4F7F4] opacity-80"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="max-w-md">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Veelgestelde vragen</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Vragen over het slijpen?</h2>
            <p className="mt-4 text-base leading-7 text-[#657068]">
              Hier vind je direct antwoord op de meest gestelde vragen van thuiskoks over ophalen, veilig inpakken en betaling.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#3B7F4B] transition-colors hover:text-[#315F3B]"
            >
              <span>Stel een persoonlijke vraag via WhatsApp</span>
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

      <OrganicSectionDivider fromColor="#FFFFFF" middleColor="#F9E4DE" toColor="#E87B5B" variant="scalloped" />

      {/* 7. BOTTOM CONTACT BANNER with top and bottom wave dividers */}
      <section id="particulieren-contact" className="relative scroll-mt-20 overflow-hidden bg-[#E87B5B] px-4 pb-24 pt-20 text-white sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.36em] text-white sm:text-sm">Contact</p>
          <h2 className="mt-6 max-w-5xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Neem contact op met je Maat
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/95 sm:text-xl">
            Heb je een vraag over je messen of twijfel je over een beschadiging? Stuur Teun of Mike direct een appje.
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

      <OrganicSectionDivider fromColor="#E87B5B" middleColor="#F9E4DE" toColor="#FFFFFF" variant="rolling" mirror />
    </div>
  );
};
