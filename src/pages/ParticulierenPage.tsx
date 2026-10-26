import React from 'react';
import { PageId } from '../types';
import { ParticulierenCalculator } from '../components/ParticulierenCalculator';
import { ResultatenSlider } from '../components/ResultatenSlider';
import { UIcon, UIconBadge } from '../components/ui/UIcon';
import { OrganicSectionDivider } from '../components/OrganicSectionDivider';
import { TrustBar } from '../components/TrustBar';
import { createWhatsAppUrl } from '../utils/contact';
import { HeroVideo } from '../components/HeroVideo';

interface ParticulierenPageProps {
  onNavigate?: (page: PageId) => void;
}

export const ParticulierenPage: React.FC<ParticulierenPageProps> = ({ onNavigate }) => {
  const whatsappUrl = createWhatsAppUrl('Hoi Teun en Mike, ik wil graag mijn messen laten slijpen!');

  const stepsBefore = [
    {
      num: '1',
      title: 'Kies je messen',
      text: 'Selecteer hieronder het aantal messen per formaat. De prijs wordt direct berekend.',
    },
    {
      num: '2',
      title: 'Ophalen of langskomen',
      text: 'Vanaf €35 halen en bezorgen we gratis binnen Utrecht. Of breng je messen langs op afspraak.',
    },
    {
      num: '3',
      title: 'Snel weer vlijmscherp',
      text: 'We proberen jouw messen binnen 24-48 uur weer vlijmscherp terug te leveren.',
    },
  ];

  const postOrderSteps = [
    {
      step: '01',
      title: 'Persoonlijke afstemming via WhatsApp',
      desc: 'Zodra je jouw bestelling verstuurt, reageert Teun of Mike vlot om het ophaaltijdvak of afgiftemoment met je af te stemmen.',
      icon: 'comment-alt',
    },
    {
      step: '02',
      title: 'Messen veilig meegeven',
      desc: 'Rol je messen simpelweg in een schone theedoek of krant. Onze koerier heeft zelf ook veilige transporttassen bij zich.',
      icon: 'box-alt',
    },
    {
      step: '03',
      title: 'Met de hand geslepen op waterstenen',
      desc: 'Wij werken vanuit huis in Utrecht. Hier beoordelen we de snede zorgvuldig, slijpen we nat op Japanse waterstenen en stroppen we af op leer.',
      icon: 'knife-kitchen',
    },
    {
      step: '04',
      title: 'Vlijmscherp terug & achteraf betalen',
      desc: 'Doorgaans staan we binnen 24-48 uur weer op de stoep met scherpe messen. Betalen kan met contant, Tikkie of een betaalverzoek.',
      icon: 'credit-card',
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
      answer: 'We proberen jouw messen binnen 24-48 uur weer terug te leveren. We spreken vooraf een duidelijk ophaal- en bezorgmoment met je af, zodat je precies weet wanneer je weer vlijmscherp kunt koken.',
    },
    {
      question: 'Moet ik vooraf betalen?',
      answer: 'Nee, bij Slijpmaat betaal je pas achteraf. Nadat je messen geslepen zijn en we ze weer bij je thuis afleveren, betaal je eenvoudig met contant, Tikkie of een betaalverzoek.',
    },
    {
      question: 'Wat als mijn mes een chip of hapje heeft?',
      answer: 'Kleine chips of beschadigde punten kunnen we vaak herstellen. Wij beoordelen de schade en kiezen een passende herstelsteen om het profiel weer strak te krijgen. Vermeld dit bij je aanvraag of stuur vooraf een foto via WhatsApp, dan bekijken we wat er nodig is.',
    },
  ];

  return (
    <div className="overflow-hidden bg-[#FAFAF8]">
      {/* 1. HERO SECTION (Zonder wazige gloed, met herkenbare organische blobs) */}
      <section className="site-hero relative overflow-hidden bg-[#FAFAF8] pb-4 pt-2 sm:pb-8 sm:pt-4 lg:min-h-[580px] lg:pb-12">
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

        <div className="site-hero-grid relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-7 py-6 sm:py-10 lg:min-h-[540px] lg:grid-cols-2 lg:gap-14 lg:py-8 xl:gap-20">
          {/* Left: Copy & CTAs */}
          <div className="site-hero-copy order-1 px-4 sm:px-6 lg:order-1 lg:max-w-2xl lg:px-0">
            <p className="site-hero-eyebrow text-xs font-bold uppercase tracking-[0.28em] text-[#3B7F4B] sm:text-sm">
              Voor particulieren in Utrecht
            </p>
            <h1 className="site-hero-title mt-3 max-w-3xl font-heading text-4xl font-bold leading-[1.02] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-5xl xl:text-6xl">
              Je messen weer scherp. Zonder gedoe.
            </h1>
            <p className="site-hero-description mt-5 max-w-2xl text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Wij halen je keukenmessen thuis op in Utrecht, slijpen ze zorgvuldig met de hand op Japanse waterstenen en brengen ze weer vlijmscherp terug.
            </p>

            <div className="site-hero-actions mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <button
                type="button"
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="group inline-flex min-h-13 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] active:scale-[0.98] sm:text-base cursor-pointer"
              >
                <span>Bereken prijs &amp; bestel</span>
                <UIcon name="arrow-small-down" className="text-lg" aria-hidden="true" />
              </button>

              <a
                href="#faq"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#E87B5B]/20 bg-[#FCEEE8] px-7 py-3.5 text-sm font-bold text-[#C95E3E] transition-all duration-200 hover:bg-[#F8DFD6] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] sm:text-base"
              >
                <span>Ik heb een vraag</span>
                <UIcon name="arrow-small-down" className="text-lg transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
              </a>
              <button type="button" onClick={() => onNavigate ? onNavigate('home') : (window.location.href = '/')} className="min-h-11 w-fit self-center px-3 py-2 text-sm font-semibold text-[#657068] underline-offset-4 hover:underline sm:self-auto">Terug naar home</button>
            </div>
          </div>

          {/* Right: Tomatenvideo met herkenbare organische blob erachter */}
          <div className="site-hero-media relative order-2 mx-auto w-full max-w-xl px-4 sm:px-6 lg:order-2 lg:px-0">
            {/* Karakteristieke saliegroene organische blob (zoals op Homepage en Over Ons) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-5 -left-5 sm:-bottom-7 sm:-left-7 h-40 w-40 sm:h-52 sm:w-52 rounded-[42%_58%_62%_38%/55%_42%_58%_45%] bg-[#A9C89E] opacity-90 z-0 transition-transform duration-500 hover:scale-105"
            />
            <div className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-[#d9e1d7] bg-[#203728] shadow-lg lg:aspect-square">
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
          { icon: <UIcon name="clock-three" className="text-lg text-[#3B7F4B] shrink-0" aria-hidden="true" />, text: 'Doorgaans binnen 24-48 uur retour' },
          { icon: <UIcon name="marker" className="text-lg text-[#3B7F4B] shrink-0" aria-hidden="true" />, text: 'Gratis ophalen & bezorgen vanaf €35' },
        ]}
      />

      {/* 3. VOORAF: KORTE BEZOEKERSFLOW (Warm cream #F7F4EC) - Compact & horizontaal */}
      <section className="relative overflow-hidden bg-[#F7F4EC] px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-[55%_45%_60%_40%/50%_55%_45%_50%] bg-[#E8EFE8]/70"
        />

        <div className="relative mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-6 max-w-2xl sm:mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Zo werkt het voor particulieren</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Eenvoudig van bot naar vlijmscherp</h2>
          </div>

          {/* 3 Korte Stappen - Horizontale layout & minder hoog */}
          <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5">
            {stepsBefore.map((item) => (
              <div
                key={item.num}
                className="group relative flex items-start gap-3.5 rounded-2xl border border-[#d9e1d7] bg-white p-4 sm:p-5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3B7F4B]/50 hover:shadow-md"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9E4DE] font-heading text-xs font-bold text-[#C95E3E] mt-0.5">
                  {item.num}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-base font-bold text-[#3B7F4B]">{item.title}</h3>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#657068]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HET BESTELFORMULIER (CALCULATOR) - Volledig geintegreerd, zonder zakelijk knip */}
      <section id="calculator" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-left sm:mb-12 sm:text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C95E3E]">Bestelformulier</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Bereken direct je prijs &amp; bestel</h2>
          </div>

          <div className="sm:rounded-[2.5rem] sm:border sm:border-[#d9e1d7] sm:bg-white sm:p-8 sm:shadow-sm lg:p-10">
            <ParticulierenCalculator />
          </div>
        </div>
      </section>

      {/* 5. RESULTATEN SLIDER (Volledige breedte over de pagina) */}
      <section className="relative w-full overflow-hidden bg-[#FAFAF8] pb-8 pt-4 sm:pb-14 sm:pt-6">
        <ResultatenSlider />
      </section>

      <OrganicSectionDivider fromColor="#FAFAF8" middleColor="#E8EFE8" toColor="#3B7F4B" variant="scalloped" />

      {/* 6. EXTRA INFO OVER HET PROCES NÁ DE BESTELLING (Green section with wave dividers) - Compact & horizontaal */}
      <section className="relative overflow-hidden bg-[#3B7F4B] px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E8EFE8]">Wat gebeurt er daarna?</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">Wat gebeurt er na je bestelling?</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-5">
            {postOrderSteps.map((step) => (
              <div
                key={step.step}
                className="group relative flex items-start gap-3.5 rounded-2xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9E4DE] font-heading text-xs font-bold text-[#C95E3E]">
                  {step.step}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-heading text-base font-bold text-[#3B7F4B]">{step.title}</h3>
                    <UIconBadge
                      name={step.icon}
                      variant="soft"
                      size="xs"
                      rounded="lg"
                      className="shrink-0"
                    />
                  </div>
                  <p className="mt-1 text-xs leading-5 text-[#657068] sm:text-sm sm:leading-6">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OrganicSectionDivider fromColor="#3B7F4B" middleColor="#A9C89E" toColor="#FFFFFF" variant="rolling" mirror />

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
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#3B7F4B] transition-colors hover:text-[#315F3B]"
            >
              <span>Stel een persoonlijke vraag via WhatsApp</span>
              <UIcon name="arrow-small-right" className="text-lg transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
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
                    <UIcon name="plus" className="text-sm" aria-hidden="true" />
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#657068]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <OrganicSectionDivider fromColor="#FFFFFF" middleColor="#F9E4DE" toColor="#E87B5B" variant="calm" />

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
              <UIcon name="whatsapp" brand className="text-2xl sm:text-3xl text-[#3B7F4B] transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
            </a>
            <a
              href="tel:+31682074967"
              className="group inline-flex min-h-[72px] items-center justify-between gap-4 rounded-full bg-white px-7 py-4 font-heading text-lg font-bold text-[#3B7F4B] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFF7F3] hover:shadow-lg sm:px-10 sm:text-xl"
            >
              <span>Bel je Maat</span>
              <UIcon name="phone-call" className="text-2xl sm:text-3xl text-[#3B7F4B] transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <OrganicSectionDivider fromColor="#E87B5B" middleColor="#F9E4DE" toColor="#FFFFFF" variant="scalloped" mirror />
    </div>
  );
};
