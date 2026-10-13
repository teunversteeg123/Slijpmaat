import React from 'react';
import { PageId } from '../types';
import { SLIJPMAAT_INFO } from '../data/siteData';
import { GoogleIcon, GOOGLE_REVIEW_COUNT } from '../components/GoogleReviewsSection';
import {
  ArrowRight,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  CheckCircle2,
  Sparkles,
  Shield,
  Flame,
  Check,
  X,
  HelpCircle,
  ChevronDown,
  Layers,
  HeartHandshake,
  Compass,
  AlertCircle,
  Droplets,
  Thermometer
} from 'lucide-react';

interface WerkwijzePageProps {
  onNavigate: (page: PageId) => void;
}

export const WerkwijzePage: React.FC<WerkwijzePageProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik heb een vraag over jullie werkwijze en het slijpen van mijn messen!')}`;

  // De 4 foto's van het ambacht
  const craftPhotos = [
    {
      number: '01',
      title: 'Snede & profiel beoordelen',
      image: '/assets/werkwijze/01-beoordelen.jpg',
      alt: 'Slijpmaat beoordeelt de snede en het profiel van een keukenmes'
    },
    {
      number: '02',
      title: 'Wij kiezen de juiste steen',
      image: '/assets/werkwijze/02-stenen-kiezen.jpg',
      alt: 'Japanse whetstones waterstenen die Slijpmaat gebruikt'
    },
    {
      number: '03',
      title: 'Volledig handmatig slijpen',
      image: '/assets/werkwijze/03-slijpen.jpg',
      alt: 'Een keukenmes wordt met de hand geslepen op een Japanse watersteen'
    },
    {
      number: '04',
      title: 'Snede afwerken op leer',
      image: '/assets/werkwijze/04-afwerken.jpg',
      alt: 'Een keukenmes wordt gepolijst en afgestropt op een leren strop'
    },
  ];

  // De 4 kernstappen van hoe we omgaan met elk mes
  const processPhases = [
    {
      num: '01',
      title: 'Snede & profiel zorgvuldig beoordelen',
      desc: 'We bekijken eerst het staal, de bestaande snijhoek en de kromming van het lemmet. Elk mes is uniek: we volgen de bestaande snede nauwkeurig en respecteren het originele lemmetprofiel.',
      badge: 'Inspectie & Analyse',
      highlight: 'Origineel profiel behouden',
    },
    {
      num: '02',
      title: 'Wij kiezen de juiste steen',
      desc: 'Elk mes en elke staalsoort vraagt om een eigen aanpak. Wij kiezen nauwkeurig de juiste watersteen voor jouw lemmet. We werken zeer beheerst: we halen alleen weg wat strikt nodig is voor een vlijmscherp resultaat, zodat je mes decennialang meegaat.',
      badge: 'De juiste watersteen',
      highlight: 'Minimale staalafname',
    },
    {
      num: '03',
      title: 'Volledig met de hand op waterstenen',
      desc: 'Geen elektrische slijptollen of hete bandslijpers. Onze stenen worden continu met water gespoeld. Zo ontstaat er nul wrijvingshitte en behoudt het staal 100% van zijn fabriekshardheid.',
      badge: '100% Handwerk',
      highlight: 'Geen machines of hitte',
    },
    {
      num: '04',
      title: 'Afwerken en ontbramen op leer',
      desc: 'Tot slot verwijderen we de microscopische braam vederlicht en stroppen we de snede af op een soepele leren strop met fijne diamantpasta. Het resultaat is een spiegelgladde snede die moeiteloos snijdt.',
      badge: 'Leren strop',
      highlight: 'Vlijmscherp & braamvrij',
    },
  ];

  // Verschillende typen messen
  const knifeTypes = [
    {
      title: 'Westerse Keukenmessen',
      examples: 'Wüsthof, Zwilling, Sabatier, Diamant Sabatier, Victorinox, etc.',
      angle: 'Slijphoek ca. 15° – 20°',
      desc: 'Westerse messen hebben taaier staal en een rondere snijboog (voor de wiegende snijtechniek). We slijpen een stevige, duurzame snijrand die tegen een stootje kan.',
      icon: Compass,
    },
    {
      title: 'Japanse Keukenmessen',
      examples: 'Santoku, Gyuto, Nakiri, VG10, AUS-10, Shirogami & Aogami koolstofstaal',
      angle: 'Slijphoek ca. 12° – 15°',
      desc: 'Japanse messen zijn gemaakt van aanzienlijk harder staal en hebben een dunnere geometrie. We slijpen deze met uiterste precisie op de waterstenen zonder het delicate lemmet te belasten.',
      icon: Sparkles,
    },
    {
      title: 'Chips & Beschadigde Punten',
      examples: 'Happen in de snede, verbogen of afgebroken punten',
      angle: 'Altijd in goed overleg',
      desc: 'Heeft je mes een flinke chip? We herstellen het mes gelijkmatig over de hele lengte zodat het profiel klopt. Vóór we beginnen stemmen we dit altijd even met je af via WhatsApp.',
      icon: HeartHandshake,
    },
  ];

  // Veelgestelde vragen over werkwijze
  const faqs = [
    {
      q: 'Gaat er veel staal van mijn mes af tijdens het slijpen?',
      a: 'Nee, juist niet! Dat is precies de reden dat we met de hand op waterstenen slijpen. Fabrieksmachines en doortrekslijpers vreten onnodig veel staal weg. Wij nemen alleen de beschadigde micro-laag weg en bouwen de snede met minimale materiaalafname opnieuw op. Zo gaat je favoriete mes een leven lang mee.',
    },
    {
      q: 'Slijpen jullie ook Japanse messen?',
      a: 'Jazeker! We hebben veel ervaring met Japanse koksmessen van zowel roestvrij staal (zoals VG10 en SG2/R2) als traditioneel Japans koolstofstaal (zoals wit en blauw papierstaal). Omdat we watergekoeld met de hand slijpen, is dit de veiligste methode voor hard Japans staal.',
    },
    {
      q: 'Er zit een flinke chip of hap in mijn lemmet. Kunnen jullie dat maken?',
      a: 'In 99% van de gevallen wel! We kiezen de juiste steen om de chip geleidelijk en gecontroleerd weg te werken. We trekken de snijlijn dan over de hele lengte subtiel bij, zodat het mes zijn oorspronkelijke profiel en snijgemak behoudt. Bij grote beschadigingen overleggen we altijd eerst even via WhatsApp.',
    },
    {
      q: 'Waarom gebruiken jullie géén elektrische machines?',
      a: 'Elektrische slijpers en bandslijpers draaien duizenden toeren per minuut. Binnen enkele seconden loopt de temperatuur op de snede op tot boven de 200°C. Daardoor ontlaat het staal en verliest het zijn fabriekshardheid. Het mes lijkt heel even scherp, maar is na twee uien alweer bot. Handmatig op waterstenen blijft het mes koel en vlijmscherp.',
    },
    {
      q: 'Wat doen jullie met de originele hoek van mijn mes?',
      a: 'We kijken altijd naar de bestaande snijvouw en volgen de oorspronkelijke fabriekshoek van het mes. We forceren geen vreemde hoek op je mes, tenzij je in overleg expliciet vraagt om een dunnere of juist robuustere snede.',
    },
  ];

  return (
    <div className="overflow-hidden bg-[#FAFAF8]">
      {/* 1. HERO SECTION (Strakke lay-out: tekst links, foto rechts met saliegroene blob) */}
      <section className="relative overflow-hidden bg-[#FAFAF8] pb-4 pt-2 sm:pb-8 sm:pt-4 lg:min-h-[560px] lg:pb-12">
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

        <div className="relative z-10 grid grid-cols-1 items-center gap-7 py-6 sm:py-10 lg:min-h-[520px] lg:grid-cols-2 lg:gap-12 lg:py-8 xl:gap-20">
          {/* Left: Copy & CTAs */}
          <div className="order-1 px-4 sm:px-6 lg:order-1 lg:max-w-2xl lg:px-0 lg:pl-4 xl:pl-8">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#3B7F4B] sm:text-sm">
              Het Slijpmaat Ambacht
            </p>
            <h1 className="mt-3 max-w-3xl font-heading text-4xl font-bold leading-[1.02] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-5xl xl:text-6xl">
              100% met de hand geslepen.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Waarom wij weigeren machines te gebruiken: we slijpen volledig met de hand op Japanse waterstenen en leer. Met minimale materiaalafname, maximaal behoud van het profiel en persoonlijke aandacht voor elk mes.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <button
                type="button"
                onClick={() => onNavigate('particulieren')}
                className="group inline-flex min-h-13 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] active:scale-[0.98] sm:text-base cursor-pointer"
              >
                <span>Plan mijn slijpbeurt</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-13 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#E87B5B]/20 bg-[#FCEEE8] px-7 py-3.5 text-sm font-bold text-[#C95E3E] transition-all duration-200 hover:bg-[#F8DFD6] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] sm:text-base"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Stel een vraag via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right: Mooie foto met saliegroene blob erachter */}
          <div className="order-2 w-full lg:order-2 px-4 sm:px-6 lg:px-0 relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-4 -left-4 sm:-bottom-7 sm:-left-7 h-36 w-36 sm:h-52 sm:w-52 rounded-[42%_58%_62%_38%/55%_42%_58%_45%] bg-[#A9C89E] opacity-90 z-0 transition-transform duration-500 hover:scale-105"
            />
            <div className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-white shadow-md sm:aspect-[16/11] sm:rounded-[2.5rem] lg:aspect-square">
              <img
                src="/assets/werkwijze/03-slijpen.jpg"
                alt="Teun of Mike slijpt met de hand op Japanse waterstenen"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="eager"
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
              <span className="text-sm font-bold text-[#3B7F4B]">{GOOGLE_REVIEW_COUNT} reviews · 5,0</span>
            </div>
            <div className="flex items-center gap-3 sm:justify-center sm:border-r sm:border-[#d9e1d7]/70 sm:px-5">
              <Clock3 className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
              <span className="text-sm font-bold text-[#3B7F4B]">Binnen 24–48 uur retour</span>
            </div>
            <div className="flex items-center gap-3 sm:justify-center sm:px-5">
              <Sparkles className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
              <span className="text-sm font-bold text-[#3B7F4B]">100% handmatig geslepen</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CRAFT PHOTO STRIP (De 4 beelden van het ambacht) */}
      <section className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {craftPhotos.map((item) => (
              <figure
                key={item.title}
                className="group relative aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#203728]/95 via-[#203728]/60 to-transparent px-5 pb-5 pt-14 text-white">
                  <span className="text-xs font-bold text-[#A9C89E]">{item.number}</span>
                  <span className="mt-1 block font-heading text-base font-bold leading-tight">{item.title}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOE WIJ MET JE MES OMGAAN (De 4 fasen: minimale staalafname & profielbehoud) */}
      <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl sm:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Onze Aanpak</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">
              Hoe wij te werk gaan: minimale afname, maximale scherpte
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processPhases.map((phase) => (
              <div
                key={phase.num}
                className="group relative flex flex-col justify-between rounded-[2rem] border border-[#d9e1d7] bg-[#FAFAF8] p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3B7F4B]/50 hover:bg-white hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8EFE8] font-heading text-sm font-bold text-[#3B7F4B] transition-colors group-hover:bg-[#3B7F4B] group-hover:text-white">
                      {phase.num}
                    </span>
                    <span className="rounded-full bg-[#FCEEE8] px-3 py-1 text-[11px] font-bold text-[#C95E3E]">
                      {phase.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-lg font-bold text-[#203728]">
                    {phase.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#657068]">
                    {phase.desc}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-[#d9e1d7]/60 pt-4 text-xs font-bold text-[#3B7F4B]">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#3B7F4B]" />
                  <span>{phase.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VOOR ELK MES EEN ANDERE AANPAK (Westers vs. Japans vs. Chips herstel) in warm cream #F7F4EC */}
      <section className="relative overflow-hidden bg-[#F7F4EC] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-1/4 h-72 w-72 rounded-[45%_55%_50%_50%/50%_45%_55%_50%] bg-[#E8EFE8]/70"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl sm:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C95E3E]">
              Maatwerk per lemmet
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">
              Elk mes vraagt om een eigen behandeling
            </h2>
            <p className="mt-4 text-base leading-7 text-[#657068]">
              Geen enkel mes is hetzelfde. Een robuust Duits koksmes vraagt om een andere geometrie dan een flinterdunne Japanse Santoku. We stemmen hoek, stenen en druk exact af op het staal.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {knifeTypes.map((type, idx) => {
              const Icon = type.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[2.25rem] border border-[#d9e1d7] bg-white p-7 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8EFE8] text-[#3B7F4B]">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="rounded-full bg-[#E8EFE8] px-3 py-1 text-xs font-bold text-[#3B7F4B]">
                        {type.angle}
                      </span>
                    </div>

                    <h3 className="mt-5 font-heading text-xl font-bold text-[#203728]">
                      {type.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-[#C95E3E]">
                      {type.examples}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-[#657068]">
                      {type.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#d9e1d7]/60">
                    <p className="text-xs font-semibold text-[#3B7F4B]">
                      {idx === 2 ? '✓ Altijd vooraf overleg via WhatsApp' : '✓ Behoud van fabrieksgeometrie'}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. VAKMANSCHAP VS. MASSA (Waarom handmatig slijpen superieur is aan machines) */}
      <section className="relative overflow-hidden bg-[#FAFAF8] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 border-t border-[#d9e1d7]/60">
        {/* Subtiele organische achtergrondvormen */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-[#E8EFE8]/60 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-[#FCEEE8]/50 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#3B7F4B] sm:text-sm">
              Vakmanschap vs. Massa
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-[#3B7F4B] sm:text-4xl lg:text-5xl">
              Waarom handmatig slijpen superieur is aan machines
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#657068] sm:text-lg">
              Snelslijpers in winkelstraten en elektrische bandslijpers draaien om snelheid, niet om behoud. Dit is het verschil:
            </p>
          </div>

          {/* Dual Comparative Cards */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 lg:mt-16 lg:grid-cols-2 lg:items-stretch">
            {/* Kaart 1: Elektrische machines & slijpwielen */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-[#F0C0B2] bg-[#FFFBF8] p-5 sm:p-8 lg:p-10 shadow-xs transition-all duration-300 hover:border-[#E87B5B]/60 hover:shadow-md">
              <div>
                {/* Header Rij */}
                <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center justify-between gap-3 border-b border-[#F0C0B2]/50 pb-5">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FCEEE8] text-[#C95E3E]">
                      <Flame className="h-5 w-5 sm:h-6 sm:w-6" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#C95E3E]">
                        Industriële snelslijpers
                      </p>
                      <h3 className="font-heading text-lg font-bold leading-snug text-[#C95E3E] sm:text-2xl">
                        Elektrische machines &amp; slijpwielen
                      </h3>
                    </div>
                  </div>
                  <span className="shrink-0 self-start sm:self-auto rounded-full bg-[#FDE7E1] px-3 py-1 text-xs font-bold text-[#C95E3E]">
                    Niet aanbevolen
                  </span>
                </div>

                <p className="mt-4 text-sm font-semibold text-[#C95E3E]/90 sm:text-base">
                  Snel klaar, maar desastreus voor je mes
                </p>

                {/* Hitte Waarschuwingsblok */}
                <div className="mt-5 rounded-2xl border border-[#F0C0B2]/60 bg-white/80 p-3.5 sm:p-4">
                  <div className="flex items-center gap-3">
                    <Thermometer className="h-5 w-5 text-[#C95E3E] shrink-0" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C95E3E]">
                        Gevaarlijke wrijvingshitte
                      </span>
                      <p className="text-xs text-[#657068]">
                        Binnen 3 seconden loopt de temperatuur op tot boven de 200°C.
                      </p>
                    </div>
                  </div>
                </div>

                {/* De 3 Punten */}
                <div className="mt-6 space-y-3.5 sm:space-y-4">
                  <div className="rounded-2xl border border-[#F0C0B2]/40 bg-white/70 p-3.5 sm:p-4 transition-colors hover:bg-white">
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FCD8CF] text-[#C95E3E] mt-0.5">
                        <X className="h-3.5 w-3.5 stroke-[2.5]" />
                      </span>
                      <div>
                        <h4 className="font-heading text-sm font-bold text-[#203728]">
                          Hitteontlating
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-[#657068] sm:text-sm">
                          Binnen enkele seconden loopt de temperatuur op tot boven de 200°C. Het staal wordt zacht en blijft nooit meer lang scherp.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#F0C0B2]/40 bg-white/70 p-3.5 sm:p-4 transition-colors hover:bg-white">
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FCD8CF] text-[#C95E3E] mt-0.5">
                        <X className="h-3.5 w-3.5 stroke-[2.5]" />
                      </span>
                      <div>
                        <h4 className="font-heading text-sm font-bold text-[#203728]">
                          Agressieve staalafname
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-[#657068] sm:text-sm">
                          Een schuurband vreet onnodig veel millimeters staal weg, waardoor je mes snel dun en waardeloos wordt.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#F0C0B2]/40 bg-white/70 p-3.5 sm:p-4 transition-colors hover:bg-white">
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FCD8CF] text-[#C95E3E] mt-0.5">
                        <X className="h-3.5 w-3.5 stroke-[2.5]" />
                      </span>
                      <div>
                        <h4 className="font-heading text-sm font-bold text-[#203728]">
                          Profielverlies
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-[#657068] sm:text-sm">
                          De natuurlijke buiging van de snede verdwijnt vaak, waardoor het mes niet meer vlak aansluit op je snijplank.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusie */}
              <div className="mt-7 sm:mt-8 rounded-2xl border border-[#F0C0B2] bg-[#FCEEE8]/80 p-3.5 sm:p-4 text-xs font-semibold text-[#C95E3E] flex items-center gap-2.5">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>Gevolg: Verlies van hardheid, holgeslepen sneden en een verkorte levensduur.</span>
              </div>
            </div>

            {/* Kaart 2: Slijpmaat: 100% met de hand op waterstenen (Hero Card) */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border-2 border-[#3B7F4B] bg-white p-5 sm:p-8 lg:p-10 shadow-[0_16px_40px_rgba(59,127,75,0.08)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(59,127,75,0.13)]">
              <div>
                {/* Header Rij */}
                <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center justify-between gap-3 border-b border-[#d9e1d7]/70 pb-5">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E8EFE8] text-[#3B7F4B]">
                      <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#3B7F4B]">
                        Traditioneel Japans ambacht
                      </p>
                      <h3 className="font-heading text-lg font-bold leading-snug text-[#3B7F4B] sm:text-2xl">
                        Slijpmaat: 100% met de hand op waterstenen
                      </h3>
                    </div>
                  </div>
                  <span className="shrink-0 self-start sm:self-auto rounded-full bg-[#E8EFE8] px-3 py-1 text-xs font-bold text-[#3B7F4B]">
                    100% Ambachtelijk
                  </span>
                </div>

                <p className="mt-4 text-sm font-semibold text-[#3B7F4B] sm:text-base">
                  Duurzaam behoud en spiegelgladde scherpte
                </p>

                {/* Waterkoeling Garantieblok */}
                <div className="mt-5 rounded-2xl border border-[#A9C89E]/60 bg-[#E8EFE8]/50 p-3.5 sm:p-4">
                  <div className="flex items-center gap-3">
                    <Droplets className="h-5 w-5 text-[#3B7F4B] shrink-0" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#3B7F4B]">
                        Constant gekoeld met water
                      </span>
                      <p className="text-xs text-[#203728]">
                        Nul wrijvingshitte (0°C). De fabriekshardheid van het staal blijft 100% intact.
                      </p>
                    </div>
                  </div>
                </div>

                {/* De 3 Meesterpunten */}
                <div className="mt-6 space-y-3.5 sm:space-y-4">
                  <div className="rounded-2xl border border-[#d9e1d7]/80 bg-[#FAFAF8] p-3.5 sm:p-4 transition-colors hover:bg-[#E8EFE8]/30 hover:border-[#3B7F4B]/40">
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8EFE8] text-[#3B7F4B] mt-0.5 font-bold">
                        <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                      </span>
                      <div>
                        <h4 className="font-heading text-sm font-bold text-[#203728]">
                          Constant gekoeld met water
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-[#657068] sm:text-sm">
                          Geen wrijvingshitte. De fabriekshardheid van het staal blijft 100% intact voor langdurig scherptebehoud.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#d9e1d7]/80 bg-[#FAFAF8] p-3.5 sm:p-4 transition-colors hover:bg-[#E8EFE8]/30 hover:border-[#3B7F4B]/40">
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8EFE8] text-[#3B7F4B] mt-0.5 font-bold">
                        <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                      </span>
                      <div>
                        <h4 className="font-heading text-sm font-bold text-[#203728]">
                          Minimale staalafname
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-[#657068] sm:text-sm">
                          We halen enkel de botte micro-laag weg. Je lievelingsmes gaat daardoor tientallen jaren mee.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#d9e1d7]/80 bg-[#FAFAF8] p-3.5 sm:p-4 transition-colors hover:bg-[#E8EFE8]/30 hover:border-[#3B7F4B]/40">
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8EFE8] text-[#3B7F4B] mt-0.5 font-bold">
                        <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                      </span>
                      <div>
                        <h4 className="font-heading text-sm font-bold text-[#203728]">
                          Profielbehoud &amp; overleg
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-[#657068] sm:text-sm">
                          We respecteren de natuurlijke curve van het mes en stemmen herstelwerk altijd persoonlijk met je af.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusie */}
              <div className="mt-7 sm:mt-8 rounded-2xl border border-[#A9C89E] bg-[#E8EFE8] p-3.5 sm:p-4 text-xs font-bold text-[#3B7F4B] flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>Resultaat: Vlijmscherpe apex, behoud van geometrie en decennialang plezier van je mes.</span>
              </div>
            </div>
          </div>

          {/* Direct 3-Punts Matrix Overzicht */}
          <div className="mt-12 rounded-[2rem] border border-[#d9e1d7] bg-white p-6 sm:p-8 shadow-xs">
            <h4 className="font-heading text-lg font-bold text-[#3B7F4B] sm:text-xl text-center mb-6">
              Het verschil in één oogopslag
            </h4>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-[#d9e1d7]/60 bg-[#FAFAF8] p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#657068]">1. Temperatuur &amp; Hardheid</p>
                <div className="mt-3 space-y-2 text-xs">
                  <div className="flex items-start gap-2 text-[#C95E3E]">
                    <X className="h-3.5 w-3.5 shrink-0 mt-0.5 stroke-[2.5]" />
                    <span><strong>Machines:</strong> &gt;200°C verhitting; staal ontlaat en verliest hardheid</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#3B7F4B]">
                    <Check className="h-3.5 w-3.5 shrink-0 mt-0.5 stroke-[2.5]" />
                    <span><strong>Slijpmaat:</strong> Continu watergekoeld; fabriekshardheid 100% intact</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#d9e1d7]/60 bg-[#FAFAF8] p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#657068]">2. Staalafname &amp; Dikte</p>
                <div className="mt-3 space-y-2 text-xs">
                  <div className="flex items-start gap-2 text-[#C95E3E]">
                    <X className="h-3.5 w-3.5 shrink-0 mt-0.5 stroke-[2.5]" />
                    <span><strong>Machines:</strong> Schuurband vreet millimeters weg; mes snel versleten</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#3B7F4B]">
                    <Check className="h-3.5 w-3.5 shrink-0 mt-0.5 stroke-[2.5]" />
                    <span><strong>Slijpmaat:</strong> Slechts de botte micro-laag; mes gaat decennia mee</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#d9e1d7]/60 bg-[#FAFAF8] p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#657068]">3. Lemmetprofiel &amp; Curve</p>
                <div className="mt-3 space-y-2 text-xs">
                  <div className="flex items-start gap-2 text-[#C95E3E]">
                    <X className="h-3.5 w-3.5 shrink-0 mt-0.5 stroke-[2.5]" />
                    <span><strong>Machines:</strong> Vaak holgeslepen; sluit niet meer aan op de snijplank</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#3B7F4B]">
                    <Check className="h-3.5 w-3.5 shrink-0 mt-0.5 stroke-[2.5]" />
                    <span><strong>Slijpmaat:</strong> Volledig curvebehoud &amp; persoonlijk overleg via app</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ambachtsbelofte Banner met foto */}
          <div className="mt-10 overflow-hidden rounded-[2.5rem] bg-[#244A30] text-white shadow-md">
            <div className="grid items-center gap-6 p-6 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A9C89E]">
                  Onze Belofte aan Jouw Mes
                </span>
                <h3 className="mt-3 font-heading text-2xl font-bold leading-snug sm:text-3xl text-white">
                  Een goed koksmes slijp je met water en geduld — nooit met haast en geweld.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#d9e1d7] sm:text-base">
                  Zowel voor professionele chefsmessen als voor je trouwe keukenmes thuis: bij ons krijgt ieder lemmet de persoonlijke toewijding die het verdient.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={() => onNavigate('particulieren')}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-[#C95E3E] cursor-pointer"
                  >
                    <span>Plan je slijpbeurt</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-white/20"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Stel een vraag via WhatsApp</span>
                  </a>
                </div>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl sm:aspect-[4/3] lg:aspect-square">
                <img
                  src="/assets/werkwijze/03-slijpen.jpg"
                  alt="Met de hand slijpen op waterstenen door Slijpmaat"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#244A30]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-black/40 px-3 py-2 text-xs font-semibold text-white backdrop-blur-xs">
                  <span>100% watergekoeld Japans watersteenslijpen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. VEELGESTELDE VRAGEN OVER ONZE WERKWIJZE (Rustige witte achtergrond met cards) */}
      <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8 border-t border-[#d9e1d7]/60">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div className="max-w-md">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Vragen over de werkwijze</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">
                Veelgestelde vragen
              </h2>
              <p className="mt-4 text-base leading-7 text-[#657068]">
                Wil je meer weten over hoe we omgaan met jouw messen, staalafname of herstel van een chip?
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

            <div className="space-y-3.5">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-[#d9e1d7]/70 bg-[#FAFAF8] p-5 shadow-xs transition-all duration-200 hover:border-[#3B7F4B]/50 hover:bg-white open:border-[#3B7F4B]/60 open:bg-white open:shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-bold text-[#203728] marker:hidden">
                    <span>{faq.q}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E8EFE8] text-[#3B7F4B] transition-transform duration-200 group-open:rotate-180">
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[#657068]">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CONTACT BANNER with top and bottom wave dividers (Vloeit direct over vanaf wit) */}
      <section id="werkwijze-contact" className="relative scroll-mt-20 overflow-hidden bg-[#E87B5B] px-4 pb-24 pt-20 text-white sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
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
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.36em] text-white sm:text-sm">Contact &amp; Advies</p>
          <h2 className="mt-6 max-w-5xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Vraag advies aan je Maat
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/95 sm:text-xl">
            Twijfel je over de staat van je mes, een chip of een beschadigde punt? Stuur ons gerust een foto via WhatsApp. Teun of Mike kijkt direct met je mee.
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
