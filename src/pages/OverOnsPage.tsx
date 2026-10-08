import React from 'react';
import { PageId } from '../types';
import { SLIJPMAAT_INFO } from '../data/siteData';
import { GoogleIcon, GOOGLE_REVIEW_COUNT } from '../components/GoogleReviewsSection';
import { UtrechtQuotesSection } from '../components/UtrechtQuotesSection';
import { OrganicSectionDivider } from '../components/OrganicSectionDivider';
import {
  ArrowRight,
  Clock3,
  MapPin,
  MessageCircle,
  Sparkles,
  Heart,
  Plus,
  Compass,
  Target,
  CheckCircle2
} from 'lucide-react';

interface OverOnsPageProps {
  onNavigate?: (page: PageId) => void;
}

export const OverOnsPage: React.FC<OverOnsPageProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik las over jullie op de Over Ons pagina en wil graag kennismaken!')}`;

  // 1. Hoe zijn we begonnen? (3 Mijlpalen in warm cream #F7F4EC)
  const originSteps = [
    {
      num: '1',
      title: 'De frustratie van het botte mes',
      text: 'Het begon aan onze eigen keukentafel in Utrecht. We hielden van koken, maar ergerden ons mateloos aan messen die bot waren. Koken werd simpelweg minder leuk.',
    },
    {
      num: '2',
      title: 'Hoe slijp je nou goed een mes?',
      text: 'We verdiepten ons in de traditionele Japanse slijpfilosofie: wij kiezen de juiste steen voor elk type mes en staal, en stroppen daarna af op leer. Geen machines die het staal slopen, maar pure controle voor een perfect resultaat.',
    },
    {
      num: '3',
      title: 'Slijpmaat: Jouw lokale messenslijper',
      text: 'Vrienden, familie en al snel Utrechtse restaurants vroegen of we hun messen wilden slijpen. Slijpmaat was geboren: een betrouwbare, persoonlijke vriend aan huis die zorgt voor vlijmscherp gereedschap zonder gedoe.',
    },
  ];

  // 2. Onze Filosofie (3 Kernprincipes)
  const philosophyItems = [
    {
      title: '100% Handmatig geslepen',
      desc: 'Droge machines verhitten de apex boven 200°C waardoor staal zacht wordt en snel weer bot is. Onze waterstenen koelen constant. Hierdoor behoudt je mes zijn fabriekshardheid en blijft het wekenlang scherp.',
      icon: Sparkles,
    },
    {
      title: 'Persoonlijk als een goede maat',
      desc: 'Geen anoniem callcenter of logge logistieke ketens. Je appt direct met Teun of Mike, we halen de messen zelf bij je op in Utrecht en denken eerlijk met je mee over het behoud van je messen.',
      icon: Heart,
    },
    {
      title: 'Duurzaam behoud boven weggooien',
      desc: 'Een goed mes kan tientallen jaren meegaan. Ook messen met een afgebroken puntje of flinke hap in de snede herstellen we met liefde. Slijpen is beter voor je portemonnee én voor het milieu.',
      icon: Compass,
    },
  ];

  // 3. Groene sectie beloftes
  const promises = [
    {
      title: 'Altijd direct contact',
      desc: 'App of bel rechtstreeks met Teun en Mike voor advies of planning.',
      icon: MessageCircle,
    },
    {
      title: '24–48 Uur doorlooptijd',
      desc: 'Je hoeft je favoriete koksmes nooit lang te missen in de keuken.',
      icon: Clock3,
    },
    {
      title: 'Gratis ophalen & brengen',
      desc: 'Vanaf 3 messen halen we ze gratis op aan huis in heel Utrecht.',
      icon: MapPin,
    },
    {
      title: 'Betalen pas achteraf',
      desc: 'Eenvoudig via een Tikkie zodra je tevreden bent met het resultaat.',
      icon: CheckCircle2,
    },
  ];

  // 4. Veelgestelde vragen over Teun & Mike
  const faqs = [
    {
      question: 'Wie slijpt mijn messen daadwerkelijk?',
      answer: 'Elk mes dat bij Slijpmaat binnenkomt wordt hoogstpersoonlijk door Teun of Mike geslepen. We werken niet met wisselende stagiairs of externe partijen. Zo garanderen we constante kwaliteit en persoonlijke zorg voor elk lemmet.',
    },
    {
      question: 'Welke stenen gebruiken jullie?',
      answer: 'We werken met professionele Japanse waterstenen. Voor elk mes en elk staalsoort kiezen wij de juiste steen om de snede perfect op te bouwen. Daarna stroppen we elk mes af op leer met fijne diamantpasta voor een zuivere, braamvrije snijkant.',
    },
    {
      question: 'Waar in Utrecht zijn jullie gevestigd?',
      answer: 'Wij werken vanuit huis aan de Gerard Noodtstraat in Utrecht en hebben geen openbare inloopwinkel. Langsbrengen en ophalen kan daarom alleen op afspraak. Voor onze ophaal- en bezorgservice gebruiken we binnen Utrecht de fiets en voor afspraken verder weg de scooter.',
    },
    {
      question: 'Kan ik ook langskomen om Teun en Mike te ontmoeten?',
      answer: 'Zeker! Als je je messen liever zelf langsbrengt in plaats van gebruik te maken van onze ophaalservice, kun je via WhatsApp eenvoudig een afspraak maken. Wij werken vanuit huis, dus we stemmen vooraf even een handig moment af.',
    },
  ];

  return (
    <div className="overflow-hidden bg-[#FAFAF8]">
      {/* 1. HERO SECTION (Zelfde lay-out als Particulieren: links tekst, rechts foto van Teun & Mike samen) */}
      <section className="relative overflow-hidden bg-[#FAFAF8] pb-4 pt-2 sm:pb-8 sm:pt-4 lg:min-h-[580px] lg:pb-12">
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

        <div className="relative z-10 grid grid-cols-1 items-center gap-7 py-6 sm:py-10 lg:min-h-[540px] lg:grid-cols-2 lg:gap-12 lg:py-8 xl:gap-20">
          {/* Left: Copy & CTAs */}
          <div className="order-1 px-4 sm:px-6 lg:order-1 lg:max-w-2xl lg:px-0 lg:pl-4 xl:pl-8">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#3B7F4B] sm:text-sm">
              Over ons · Leer je Maat kennen
            </p>
            <h1 className="mt-3 max-w-3xl font-heading text-4xl font-bold leading-[1.02] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-5xl xl:text-6xl">
              Twee Utrechtse vrienden met passie voor scherpte.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Wij zijn Teun en Mike, de oprichters van Slijpmaat. Twee maten uit Utrecht die vonden dat messenslijpen weer ambachtelijk, betrouwbaar en zonder gedoe aan huis geregeld moet worden.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <button
                type="button"
                onClick={() => onNavigate ? onNavigate('particulieren') : (window.location.hash = '#particulieren')}
                className="group inline-flex min-h-13 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] active:scale-[0.98] sm:text-base cursor-pointer"
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
                <span>Stuur je Maat een appje</span>
              </a>
            </div>
          </div>

          {/* Right: Foto van Teun & Mike samen (met arm over de schouder) & organische blob */}
          <div className="order-2 w-full lg:order-2 px-4 sm:px-6 lg:px-0 relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-5 -left-5 sm:-bottom-7 sm:-left-7 h-40 w-40 sm:h-52 sm:w-52 rounded-[42%_58%_62%_38%/55%_42%_58%_45%] bg-[#A9C89E] opacity-90 z-0 transition-transform duration-500 hover:scale-105"
            />
            <div className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-[#d9e1d7] bg-white shadow-lg sm:aspect-[16/11] lg:aspect-square">
              <img
                src="/assets/team/teun-en-mike-samen.jpg"
                alt="Teun en Mike van Slijpmaat samen in Utrecht"
                className="h-full w-full object-cover object-[center_35%]"
              />
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 rounded-full bg-[#203728]/85 px-4 py-2 backdrop-blur-xs text-xs font-bold text-white shadow-md border border-white/10">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#4CAF50] animate-pulse" />
                <span>Teun &amp; Mike · Oprichters Slijpmaat</span>
              </div>
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
              <span className="text-sm font-bold text-[#3B7F4B]">Binnen 24–48 uur retour</span>
            </div>
            <div className="flex items-center gap-3 sm:justify-center sm:px-5">
              <MapPin className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
              <span className="text-sm font-bold text-[#3B7F4B]">Gratis ophalen in Utrecht</span>
            </div>
          </div>
        </div>
      </section>

      <OrganicSectionDivider
        fromColor="#FAFAF8"
        middleColor="#E8EFE8"
        toColor="#F7F4EC"
        variant="calm"
      />

      {/* 3. HOE ZIJN WE BEGONNEN? (Warm cream #F7F4EC) */}
      <section className="relative overflow-hidden bg-[#F7F4EC] px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-[55%_45%_60%_40%/50%_55%_45%_50%] bg-[#E8EFE8]/70"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Ons verhaal</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Hoe het begon aan de keukentafel</h2>
            <p className="mt-3 text-base leading-7 text-[#657068]">
              Van twee vrienden die gek werden van botte messen, tot de meest geliefde mobiele messenslijper van Utrecht.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {originSteps.map((item) => (
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

      <OrganicSectionDivider
        fromColor="#F7F4EC"
        middleColor="#F9E4DE"
        toColor="#FFFFFF"
        variant="scalloped"
        mirror
      />

      {/* 4. MISSIE & VISIE (Twee complementaire kaarten) */}
      <section className="relative bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center sm:mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Waar we voor gaan</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Onze Missie &amp; Visie</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-[#657068]">
              Wat ons drijft om elke dag met precisie achter de waterstenen te staan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Missie Kaart */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#3B7F4B] bg-[#3B7F4B] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-10">
              <div aria-hidden="true" className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/6" />
              <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12 text-white">
                <Target className="h-7 w-7" />
              </div>
              <span className="relative text-xs font-bold uppercase tracking-wider text-[#F4B19D]">
                Onze Missie
              </span>
              <h3 className="relative mt-2 font-heading text-2xl font-bold text-white sm:text-3xl">
                Elk mes in Utrecht weer het respect en de scherpte geven die het verdient.
              </h3>
              <p className="relative mt-4 text-base leading-relaxed text-[#E8EFE8]">
                Koken hoort leuk, ontspannen en veilig te zijn. Wij maken professioneel messenslijpen toegankelijk voor iedereen: van student en thuiskok tot chef-kok, direct aan de voordeur zonder gedoe.
              </p>
            </div>

            {/* Visie Kaart */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#E87B5B] bg-[#E87B5B] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-10">
              <div aria-hidden="true" className="absolute -bottom-16 -right-10 h-48 w-48 rounded-full bg-white/8" />
              <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/18 text-white">
                <Compass className="h-7 w-7" />
              </div>
              <span className="relative text-xs font-bold uppercase tracking-wider text-white/85">
                Onze Visie
              </span>
              <h3 className="relative mt-2 font-heading text-2xl font-bold text-white sm:text-3xl">
                Duurzaam behoud als de nieuwe standaard in de keuken.
              </h3>
              <p className="relative mt-4 text-base leading-relaxed text-[#FFF7F3]">
                In een maatschappij waar spullen snel worden weggegooid, laten wij zien dat goed gereedschap generaties lang meegaat. Met vakkundig onderhoud behoud je kwaliteit en voorkom je onnodig afval.
              </p>
            </div>
          </div>
        </div>
      </section>

      <OrganicSectionDivider
        fromColor="#FFFFFF"
        middleColor="#A9C89E"
        toColor="#3B7F4B"
        variant="rolling"
      />

      <UtrechtQuotesSection />

      <OrganicSectionDivider
        fromColor="#3B7F4B"
        middleColor="#A9C89E"
        toColor="#FAFAF8"
        variant="calm"
        mirror
      />

      {/* 5. ONZE FILOSOFIE (De 3 pijlers van ons ambacht) */}
      <section className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8 bg-[#FAFAF8] border-t border-[#d9e1d7]/60">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center sm:mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Vakmanschap</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">
              Onze Slijpfilosofie
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#657068]">
              Waarom we trouw blijven aan traditionele Japanse waterstenen en nooit snijden in kwaliteit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophyItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[2rem] border border-[#d9e1d7] bg-white p-7 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3B7F4B]/50 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8EFE8] text-[#3B7F4B]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-heading text-xl font-bold text-[#3B7F4B]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#657068]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <OrganicSectionDivider
        fromColor="#FAFAF8"
        middleColor="#E8EFE8"
        toColor="#3B7F4B"
        variant="scalloped"
      />

      {/* 6. GROENE GOLFSECTIE (#3B7F4B met wave dividers) */}
      <section className="relative overflow-hidden bg-[#3B7F4B] px-4 pb-28 pt-20 sm:px-6 sm:pb-36 sm:pt-24 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E8EFE8]">De Slijpmaat belofte</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
              Wat kun je van jouw Maat verwachten?
            </h2>
            <p className="mt-4 text-base leading-7 text-[#E8EFE8]">
              Vier duidelijke principes waarmee we dagelijks op pad gaan en messen slijpen.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {promises.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="rounded-[1.75rem] bg-white p-6 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8EFE8] text-[#3B7F4B]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-[#3B7F4B]">{p.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#657068]">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <OrganicSectionDivider
        fromColor="#3B7F4B"
        middleColor="#A9C89E"
        toColor="#FFFFFF"
        variant="rolling"
        mirror
      />

      {/* 8. VEELGESTELDE VRAGEN OVER ONS */}
      <section id="faq" className="relative scroll-mt-24 overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-[#F4F7F4] opacity-80"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="max-w-md">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Veelgestelde vragen</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Vragen over Slijpmaat?</h2>
            <p className="mt-4 text-base leading-7 text-[#657068]">
              Wil je meer weten over hoe we vanuit huis werken, onze stenen of de werkwijze in Utrecht? Hier vind je antwoord.
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

      <OrganicSectionDivider
        fromColor="#FFFFFF"
        middleColor="#F9E4DE"
        toColor="#E87B5B"
        variant="calm"
      />

      {/* 9. BOTTOM CONTACT BANNER with top and bottom wave dividers */}
      <section id="over-ons-contact" className="relative scroll-mt-20 overflow-hidden bg-[#E87B5B] px-4 pb-24 pt-20 text-white sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.36em] text-white sm:text-sm">Maak kennis</p>
          <h2 className="mt-6 max-w-5xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Laat je messen slijpen door je Maat.
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/95 sm:text-xl">
            Ervaar zelf het enorme verschil van echte handgeslepen messen in je eigen keuken.
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

      <OrganicSectionDivider
        fromColor="#E87B5B"
        middleColor="#F9E4DE"
        toColor="#FFFFFF"
        variant="scalloped"
        mirror
      />
    </div>
  );
};
