import React from 'react';
import { PageId } from '../types';
import { UtrechtQuotesSection } from '../components/UtrechtQuotesSection';
import { OrganicSectionDivider } from '../components/OrganicSectionDivider';
import { UIcon, UIconBadge } from '../components/ui/UIcon';
import { TrustBar } from '../components/TrustBar';
import { createWhatsAppUrl } from '../utils/contact';

interface OverOnsPageProps {
  onNavigate?: (page: PageId) => void;
}

export const OverOnsPage: React.FC<OverOnsPageProps> = ({ onNavigate }) => {
  const whatsappUrl = createWhatsAppUrl('Hoi Teun en Mike, ik las over jullie op de Over Ons pagina en wil graag kennismaken!');

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
      text: 'We verdiepten ons in de traditionele Japanse slijpfilosofie: de staat van ieder mes beoordelen, een passende steen kiezen en de snede daarna zorgvuldig afwerken op leer. Handmatig werken geeft ons controle over slijphoek, profiel en materiaalafname.',
    },
    {
      num: '3',
      title: 'Slijpmaat: Jouw lokale messenslijper',
      text: 'Buren, wijkgenoten, thuiskoks en al snel ook Utrechtse horeca vroegen of we hun messen wilden slijpen. Slijpmaat was geboren: een betrouwbare vriend aan huis die zorgt voor vlijmscherp gereedschap voor particulieren én horeca, zonder gedoe.',
    },
  ];

  // 2. Onze Filosofie (3 Kernprincipes)
  const philosophyItems = [
    {
      title: 'Met de hand en met aandacht',
      desc: 'Geen snelle slijpbeurt op een droge machine. Wij slijpen ieder mes met de hand op Japanse waterstenen. Zo houden we controle over de slijphoek en behandelen we ieder mes met de aandacht die het verdient.',
      icon: 'hand-holding-heart',
    },
    {
      title: 'Persoonlijk geregeld',
      desc: 'Bij Slijpmaat heb je direct contact met Teun of Mike. We halen je messen zelf op in Utrecht, slijpen ze zorgvuldig en brengen ze scherp terug. We kijken eerlijk naar wat je mes nodig heeft en denken met je mee.',
      icon: 'heart',
    },
    {
      title: 'Liever herstellen dan vervangen',
      desc: 'Een goed mes kan jarenlang meegaan. Daarom herstellen we waar mogelijk ook beschadigingen, zoals kleine happen in de snede of een afgebroken punt. Dat is beter voor je portemonnee, je mes én het milieu.',
      icon: 'recycle',
    },
  ];

  // 3. Groene sectie beloftes
  const promises = [
    {
      title: 'Direct persoonlijk contact',
      desc: 'App of bel rechtstreeks met Teun en Mike voor advies of planning.',
      icon: 'comment-alt',
    },
    {
      title: 'Doorgaans 24-48 uur',
      desc: 'De exacte doorlooptijd en planning stemmen we vooraf met je af.',
      icon: 'clock-three',
    },
    {
      title: 'Gratis ophalen & bezorgen',
      desc: 'Vanaf €35 bestelwaarde halen en bezorgen we gratis binnen Utrecht.',
      icon: 'marker',
    },
    {
      title: 'Betalen pas achteraf',
      desc: 'Eenvoudig met contant, Tikkie of een betaalverzoek.',
      icon: 'check',
    },
  ];

  // 4. Uitgelichte foto van Teun & Mike in actie
  const featuredPhoto = {
    image: '/assets/team/teun-en-mike-met-mes.webp',
    alt: 'Teun en Mike van Slijpmaat bekijken het vlijmscherpe lemmet van een keukenmes',
    title: 'Teun & Mike met het resultaat',
    subtitle: 'Trots op elk vlijmscherp geslepen lemmet',
  };

  // 5. Veelgestelde vragen over Teun & Mike
  const faqs = [
    {
      question: 'Wie slijpt mijn messen daadwerkelijk?',
      answer: 'Elk mes dat bij Slijpmaat binnenkomt wordt persoonlijk door Teun of Mike geslepen. We werken niet met wisselende stagiairs of externe partijen. Zo krijgt elk lemmet dezelfde zorgvuldige, persoonlijke behandeling.',
    },
    {
      question: 'Welke stenen gebruiken jullie?',
      answer: 'We werken met professionele Japanse waterstenen. Per mes kijken we naar de staalsoort, het profiel en de conditie van de snede. Daarna werken we het mes af op leer met polijstpasta en controleren we het resultaat.',
    },
    {
      question: 'Waar in Utrecht zijn jullie gevestigd?',
      answer: 'Wij werken vanuit huis aan de Gerard Noodtstraat in Utrecht en hebben geen openbare inloopwinkel. Langsbrengen en ophalen kan daarom alleen op afspraak. Binnen Utrecht gebruiken we voor onze ophaal- en bezorgservice de fiets; vervoer verder weg bevestigen we alleen na een afzonderlijke afspraak.',
    },
    {
      question: 'Kan ik ook langskomen om Teun en Mike te ontmoeten?',
      answer: 'Zeker! Als je je messen liever zelf langsbrengt in plaats van gebruik te maken van onze ophaalservice, kun je telefonisch of via WhatsApp eenvoudig een afspraak maken. Wij werken vanuit huis, dus we stemmen vooraf even een handig moment af.',
    },
  ];

  return (
    <div className="overflow-hidden bg-[#FAFAF8]">
      {/* 1. HERO SECTION (Zelfde lay-out als Particulieren: links tekst, rechts foto van Teun & Mike samen) */}
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
            <div className="mb-2.5">
              <span className="site-hero-eyebrow text-xs font-bold uppercase tracking-[0.24em] text-[#C95E3E] sm:text-sm">
                OVER ONS · LEER JE MATEN KENNEN
              </span>
            </div>
            <h1 className="site-hero-title mt-2 max-w-3xl font-heading text-4xl font-bold leading-[1.02] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-6xl">
              Twee Utrechtse vrienden met passie voor scherpte.
            </h1>
            <p className="site-hero-description mt-5 max-w-2xl text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Wij zijn Teun en Mike, twee maten uit Utrecht. Met Slijpmaat doen we waar we plezier in hebben: messen weer scherp maken en mensen daar blij mee maken. Elk mes gaat bij ons met de hand over de slijpstenen. Woon je in Utrecht? Dan komen we bij je langs met de fiets of scooter. Ook buiten de stad weten thuiskoks en horecazaken ons te vinden en zijn ze op afspraak welkom.
            </p>

            <div className="site-hero-actions mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <button
                type="button"
                onClick={() => onNavigate ? onNavigate('particulieren') : (window.location.hash = '#particulieren')}
                className="group inline-flex min-h-13 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] active:scale-[0.98] sm:text-base cursor-pointer"
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
                <span>Stuur je Maat een appje</span>
              </a>
            </div>
          </div>

          {/* Right: Foto van Teun & Mike samen (met arm over de schouder) & organische blob */}
          <div className="site-hero-media relative order-2 mx-auto w-full max-w-xl px-4 sm:px-6 lg:order-2 lg:px-0">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-5 -left-5 sm:-bottom-7 sm:-left-7 h-40 w-40 sm:h-52 sm:w-52 rounded-[42%_58%_62%_38%/55%_42%_58%_45%] bg-[#A9C89E] opacity-90 z-0 transition-transform duration-500 hover:scale-105"
            />
            <div className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-[#d9e1d7] bg-white shadow-lg lg:aspect-square">
              <img
                src="/assets/team/teun-en-mike-samen.webp"
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

      <TrustBar
        showRating
        items={[
          { icon: <UIcon name="clock-three" className="text-base text-[#3B7F4B] shrink-0" aria-hidden="true" />, text: 'Doorgaans binnen 24-48 uur retour' },
          { icon: <UIcon name="marker" className="text-base text-[#3B7F4B] shrink-0" aria-hidden="true" />, text: 'Gratis ophalen & bezorgen vanaf €35' },
        ]}
      />

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
            <h2 className="font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Onze Missie &amp; Visie</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Missie Kaart (Diep donkergroen #244A30 per gebruikerswens) */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#244A30] bg-[#244A30] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-10 text-white">
              <div aria-hidden="true" className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/6" />
              <div className="relative mb-6">
                <UIconBadge name="target" variant="sage" size="lg" rounded="2xl" />
              </div>
              <span className="relative text-xs font-bold uppercase tracking-wider text-[#A9C89E]">
                Onze Missie
              </span>
              <h3 className="relative mt-2 font-heading text-2xl font-bold text-white sm:text-3xl">
                Elk mes in Utrecht weer het respect en de scherpte geven die het verdient.
              </h3>
              <p className="relative mt-4 text-base leading-relaxed text-[#E8EFE8]">
                Koken hoort leuk, ontspannen en veilig te zijn. Wij maken professioneel messenslijpen toegankelijk voor iedereen: voor particulieren, wijkgenoten, gezinnen en thuiskoks tot professionele chefs in de Utrechtse horeca. Direct aan de voordeur geregeld zonder gedoe.
              </p>
            </div>

            {/* Visie Kaart (In het warme oranje #E87B5B behouden per gebruikerswens) */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#E87B5B] bg-[#E87B5B] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-10 text-white">
              <div aria-hidden="true" className="absolute -bottom-16 -right-10 h-48 w-48 rounded-full bg-white/8" />
              <div className="relative mb-6">
                <UIconBadge name="compass-alt" variant="coral" size="lg" rounded="2xl" className="bg-white/20 text-white border-white/20" />
              </div>
              <span className="relative text-xs font-bold uppercase tracking-wider text-white/85">
                Onze Visie
              </span>
              <h3 className="relative mt-2 font-heading text-2xl font-bold text-white sm:text-3xl">
                Duurzaam behoud als de nieuwe standaard in de keuken.
              </h3>
              <p className="relative mt-4 text-base leading-relaxed text-[#FFF7F3]">
                In een maatschappij waar spullen snel worden weggegooid, laten wij zien dat goed gereedschap een lange levensduur verdient. Met vakkundig handmatig onderhoud behoud je de kwaliteit en voorkom je onnodig afval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TEUN EN MIKE IN ACTIE (Fotogalerij van het ambacht aan de Gerard Noodtstraat) */}
      <section className="relative overflow-hidden bg-[#FAFAF8] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 border-t border-[#d9e1d7]/60">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-10 text-center sm:mb-14">
            <div className="mb-2">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#C95E3E] sm:text-sm">
                AAN HET WERK IN UTRECHT
              </span>
            </div>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">
              Teun en Mike in actie
            </h2>
          </div>

          <div className="mx-auto max-w-3xl lg:max-w-4xl">
            <figure className="group relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-[#d9e1d7] bg-white shadow-xs transition-all duration-300 hover:shadow-md flex flex-col">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] w-full overflow-hidden bg-[#E8EFE8]">
                <img
                  src={featuredPhoto.image}
                  alt={featuredPhoto.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <figcaption className="p-5 sm:p-7 text-left">
                <h3 className="font-heading text-lg sm:text-2xl font-bold text-[#203728]">
                  {featuredPhoto.title}
                </h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-base text-[#657068] leading-relaxed">
                  {featuredPhoto.subtitle}
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <OrganicSectionDivider
        fromColor="#FAFAF8"
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

      {/* 6. ONZE FILOSOFIE (De 3 pijlers van ons ambacht) */}
      <section className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8 bg-[#FAFAF8] border-t border-[#d9e1d7]/60">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center sm:mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Vakmanschap</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">
              Onze slijpfilosofie
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophyItems.map((item, idx) => (
              <div
                key={idx}
                className="rounded-[2rem] border border-[#d9e1d7] bg-white p-7 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3B7F4B]/50 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <UIconBadge name={item.icon} variant="soft" size="md" rounded="2xl" />
                  <h3 className="mt-5 font-heading text-xl font-bold text-[#3B7F4B]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#657068]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OrganicSectionDivider
        fromColor="#FAFAF8"
        middleColor="#E8EFE8"
        toColor="#3B7F4B"
        variant="scalloped"
      />

      {/* 7. GROENE GOLFSECTIE (#3B7F4B met wave dividers) */}
      <section className="relative overflow-hidden bg-[#3B7F4B] px-4 pb-28 pt-20 sm:px-6 sm:pb-36 sm:pt-24 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E8EFE8]">De Slijpmaat belofte</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
              Wat kun je van jouw Maat verwachten?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
            {promises.map((p, idx) => (
              <div
                key={idx}
                className="group relative flex items-start gap-3.5 rounded-2xl bg-white p-4.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F9E4DE] font-heading text-sm font-bold text-[#C95E3E] mt-0.5">
                  {idx + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-heading text-base font-bold text-[#3B7F4B]">{p.title}</h3>
                    <UIconBadge
                      name={p.icon}
                      variant="soft"
                      size="xs"
                      rounded="lg"
                      className="shrink-0"
                    />
                  </div>
                  <p className="mt-1 text-xs leading-5 text-[#657068] sm:text-sm sm:leading-6">{p.desc}</p>
                </div>
              </div>
            ))}
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
              <UIcon name="arrow-right" className="text-sm transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
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
                    <UIcon name="plus" className="text-xs" aria-hidden="true" />
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
              <UIcon name="arrow-right" className="text-xl shrink-0 text-[#3B7F4B] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[72px] items-center justify-between gap-4 rounded-full bg-white px-7 py-4 font-heading text-lg font-bold text-[#3B7F4B] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFF7F3] hover:shadow-lg sm:px-10 sm:text-xl"
            >
              <span>Stuur een appje</span>
              <UIcon name="comment-alt" className="text-2xl shrink-0 text-[#3B7F4B] transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
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
