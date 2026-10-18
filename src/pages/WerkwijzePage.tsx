import React from 'react';
import { PageId } from '../types';
import { OrganicSectionDivider } from '../components/OrganicSectionDivider';
import { UIcon, UIconBadge } from '../components/ui/UIcon';
import { TrustBar } from '../components/TrustBar';
import { createWhatsAppUrl } from '../utils/contact';

interface WerkwijzePageProps {
  onNavigate: (page: PageId) => void;
}

export const WerkwijzePage: React.FC<WerkwijzePageProps> = ({ onNavigate }) => {
  const whatsappUrl = createWhatsAppUrl('Hoi Teun en Mike, ik heb een vraag over jullie werkwijze en het slijpen van mijn messen!');

  // De 4 kernstappen van hoe we omgaan met elk mes (foto + toelichting in 1 geïntegreerde aanpak)
  const processPhases = [
    {
      num: '01',
      title: 'Snede & profiel zorgvuldig beoordelen',
      desc: 'We bekijken eerst het staal, de bestaande snijhoek en de kromming van het lemmet. Elk mes is uniek: we volgen de bestaande snede nauwkeurig en respecteren het originele lemmetprofiel.',
      badge: 'Inspectie & Analyse',
      highlight: 'Origineel profiel behouden',
      image: '/assets/werkwijze/01-beoordelen.jpg',
      alt: 'Slijpmaat beoordeelt de snede en het profiel van een keukenmes',
    },
    {
      num: '02',
      title: 'Wij kiezen de juiste steen',
      desc: 'Elk mes en elke staalsoort vraagt om een eigen aanpak. Wij kiezen nauwkeurig de juiste watersteen voor jouw lemmet. We werken zeer beheerst: we halen alleen weg wat strikt nodig is voor een vlijmscherp resultaat, voor een maximale levensduur van je mes.',
      badge: 'De juiste watersteen',
      highlight: 'Minimale staalafname',
      image: '/assets/werkwijze/02-stenen-kiezen.jpg',
      alt: 'Japanse whetstones waterstenen die Slijpmaat gebruikt',
    },
    {
      num: '03',
      title: 'Volledig met de hand op waterstenen',
      desc: 'We slijpen met de hand op natte waterstenen. Daardoor houden we controle over de slijphoek, de materiaalafname en de afwerking van ieder mes.',
      badge: '100% Handwerk',
      highlight: 'Controle over hoek en afname',
      image: '/assets/werkwijze/03-slijpen.jpg',
      alt: 'Een keukenmes wordt met de hand geslepen op een Japanse watersteen',
    },
    {
      num: '04',
      title: 'Afwerken en ontbramen op leer',
      desc: 'Tot slot verwijderen we de braam zorgvuldig en stroppen we de snede af op een soepele leren strop met polijstpasta. Daarna controleren we of het mes over de volledige snede soepel snijdt.',
      badge: 'Leren strop',
      highlight: 'Vlijmscherp & braamvrij',
      image: '/assets/werkwijze/04-afwerken.jpg',
      alt: 'Een keukenmes wordt gepolijst en afgestropt op een leren strop',
    },
  ];

  // 4 Fotopanelen van het ambacht
  const craftPhotos = [
    {
      number: 'STAP 01',
      title: 'Beoordelen & inspectie',
      image: '/assets/werkwijze/01-beoordelen.jpg',
      alt: 'Slijpmaat beoordeelt de snede en het profiel van een keukenmes',
    },
    {
      number: 'STAP 02',
      title: 'De juiste watersteen kiezen',
      image: '/assets/werkwijze/02-stenen-kiezen.jpg',
      alt: 'Japanse waterstenen die Slijpmaat gebruikt',
    },
    {
      number: 'STAP 03',
      title: 'Handmatig slijpen met water',
      image: '/assets/werkwijze/03-slijpen.jpg',
      alt: 'Een keukenmes wordt met de hand geslepen op een Japanse watersteen',
    },
    {
      number: 'STAP 04',
      title: 'Afwerken en ontbramen op leer',
      image: '/assets/werkwijze/04-afwerken.jpg',
      alt: 'Een keukenmes wordt gepolijst en afgestropt op een leren strop',
    },
  ];

  // Verschillende typen messen
  const knifeTypes = [
    {
      title: 'Westerse Keukenmessen',
      examples: 'Wüsthof, Zwilling, Sabatier, Diamant Sabatier, Victorinox, etc.',
      angle: 'Slijphoek ca. 15° - 20°',
      desc: 'Westerse messen hebben taaier staal en een rondere snijboog (voor de wiegende snijtechniek). We slijpen een stevige, duurzame snijrand die tegen een stootje kan.',
      iconName: 'knife-kitchen',
    },
    {
      title: 'Japanse Keukenmessen',
      examples: 'Santoku, Gyuto, Nakiri, VG10, AUS-10, Shirogami & Aogami koolstofstaal',
      angle: 'Slijphoek ca. 12° - 15°',
      desc: 'Veel Japanse messen combineren relatief hard staal met een dunne geometrie. We beoordelen de bestaande snijvouw en kiezen een passende steen en slijphoek voor het specifieke mes.',
      iconName: 'knife',
    },
    {
      title: 'Chips & Beschadigde Punten',
      examples: 'Happen in de snede, verbogen of afgebroken punten',
      angle: 'Altijd in goed overleg',
      desc: 'Heeft je mes een flinke chip? We herstellen het mes gelijkmatig over de hele lengte zodat het profiel klopt. Vóór we beginnen stemmen we dit altijd even telefonisch of via WhatsApp met je af.',
      iconName: 'tools',
    },
  ];

  // Veelgestelde vragen over werkwijze
  const faqs = [
    {
      q: 'Gaat er veel staal van mijn mes af tijdens het slijpen?',
      a: 'Handmatig slijpen op waterstenen geeft ons veel controle over de slijphoek, druk en materiaalafname. We verwijderen wat nodig is om de snede opnieuw op te bouwen en proberen daarbij het profiel en de levensduur van het mes zo goed mogelijk te behouden.',
    },
    {
      q: 'Slijpen jullie ook Japanse messen?',
      a: 'Ja. Japanse koksmessen kunnen sterk verschillen in staal, geometrie en slijpvorm. Stuur bij een bijzonder, kostbaar of enkelzijdig geslepen mes vooraf een foto en het merk of type; dan beoordelen we welke behandeling passend is.',
    },
    {
      q: 'Er zit een flinke chip of hap in mijn lemmet. Kunnen jullie dat maken?',
      a: 'Kleine chips en beschadigde punten kunnen we vaak herstellen. We beoordelen eerst hoeveel materiaal daarvoor moet worden verwijderd en wat dit voor het profiel betekent. Bij grotere schade bespreken we de mogelijkheden en prijs altijd vooraf via WhatsApp of telefonisch.',
    },
    {
      q: 'Waarom gebruiken jullie géén elektrische machines?',
      a: 'Bij machinaal slijpen hangen warmteontwikkeling en materiaalafname af van de machine, snelheid, korrel en uitvoering. Wij kiezen voor handmatig slijpen op waterstenen omdat we daarmee de hoek, druk en materiaalafname per mes nauwkeurig kunnen sturen.',
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
            <div className="mb-2">
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#244A30] sm:text-sm">
                HET SLIJPMAAT AMBACHT
              </span>
            </div>
            <h1 className="mt-2 max-w-3xl font-heading text-4xl font-bold leading-[1.02] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-5xl xl:text-6xl">
              Ieder mes met de hand geslepen.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Bij Slijpmaat kiezen we bewust voor handmatig slijpen. We behandelen ieder mes met de hand op Japanse waterstenen en werken de snede zorgvuldig af op leer. Zo zorgen we voor minimale materiaalafname, behoud van het originele lemmetprofiel en een lange levensduur van je mes.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <button
                type="button"
                onClick={() => onNavigate('particulieren')}
                className="group inline-flex min-h-13 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] active:scale-[0.98] sm:text-base cursor-pointer"
              >
                <span>Plan mijn slijpbeurt</span>
                <UIcon name="arrow-right" className="text-sm transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-13 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#E87B5B]/20 bg-[#FCEEE8] px-7 py-3.5 text-sm font-bold text-[#C95E3E] transition-all duration-200 hover:bg-[#F8DFD6] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] sm:text-base"
              >
                <UIcon name="comment-alt" className="text-base" aria-hidden="true" />
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

      <TrustBar
        showRating
        items={[
          { icon: <UIcon name="clock-three" className="text-lg text-[#3B7F4B] shrink-0" aria-hidden="true" />, text: 'Doorgaans binnen 24-48 uur retour' },
          { icon: <UIcon name="knife-kitchen" className="text-lg text-[#3B7F4B] shrink-0" aria-hidden="true" />, text: '100% handmatig geslepen' },
        ]}
      />

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

      <OrganicSectionDivider
        fromColor="#FAFAF8"
        middleColor="#E8EFE8"
        toColor="#FFFFFF"
        variant="calm"
      />

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
                  <UIcon name="check" className="text-xs shrink-0 text-[#3B7F4B]" aria-hidden="true" />
                  <span>{phase.highlight}</span>
                </div>
              </div>
            ))}
          </div>

          <figure className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2rem] border border-[#d9e1d7] bg-[#FAFAF8] shadow-sm sm:mt-16">
            <div className="border-b border-[#d9e1d7]/80 px-5 py-5 sm:px-8 sm:py-6">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">
                Van bot naar scherp
              </p>
              <h3 className="mt-2 font-heading text-xl font-bold text-[#203728] sm:text-2xl">
                Wat er tijdens het slijpen met de snede gebeurt
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#657068] sm:text-base">
                De snede wordt opnieuw gevormd, krijgt tijdens het slijpen een fijne braam en wordt daarna zorgvuldig ontbraamd en afgewerkt.
              </p>
            </div>
            <div className="bg-[#eeeeee] p-3 sm:p-6">
              <img
                src="/assets/werkwijze/slijpproces-snede.png"
                alt="Diagram van een botte messnede, het slijpproces, de gevormde braam en de uiteindelijke scherpe snede"
                className="h-auto w-full object-contain"
                loading="lazy"
              />
            </div>
          </figure>
        </div>
      </section>

      <OrganicSectionDivider
        fromColor="#FFFFFF"
        middleColor="#F9E4DE"
        toColor="#F7F4EC"
        variant="scalloped"
        mirror
      />

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
            {knifeTypes.map((type, idx) => (
              <div
                key={idx}
                className="rounded-[2.25rem] border border-[#d9e1d7] bg-white p-7 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <UIconBadge
                      name={type.iconName}
                      variant="soft"
                      size="lg"
                      rounded="2xl"
                      aria-label={`Icoon voor ${type.title}`}
                    />
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
                      {idx === 2 ? '✓ Altijd vooraf telefonisch of via WhatsApp overleg' : '✓ Behoud van fabrieksgeometrie'}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <OrganicSectionDivider
        fromColor="#F7F4EC"
        middleColor="#E8EFE8"
        toColor="#FAFAF8"
        variant="rolling"
      />

      {/* 6. VAKMANSCHAP VS MASSA (Waarom handmatig slijpen superieur is aan machines) */}
      <section className="relative overflow-hidden bg-[#FAFAF8] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
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
              Vakmanschap vs Massa
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-[#3B7F4B] sm:text-4xl lg:text-5xl">
              Waarom wij bewust met de hand slijpen
            </h2>
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
                      <UIcon name="flame" className="text-xl sm:text-2xl" aria-hidden="true" />
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
                    Minder controle zonder goede afstelling
                  </span>
                </div>

                <p className="mt-4 text-sm font-semibold text-[#C95E3E]/90 sm:text-base">
                  Resultaat hangt sterk af van machine en uitvoering
                </p>

                {/* Hitte Waarschuwingsblok */}
                <div className="mt-5 rounded-2xl border border-[#F0C0B2]/60 bg-white/80 p-3.5 sm:p-4">
                  <div className="flex items-center gap-3">
                    <UIcon name="thermometer-half" className="text-lg text-[#C95E3E] shrink-0" aria-hidden="true" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C95E3E]">
                        Warmte bij hoge snelheid
                      </span>
                      <p className="text-xs text-[#657068]">
                        Hoge snelheid kan bij onzorgvuldig gebruik extra warmte aan de dunne snijkant veroorzaken.
                      </p>
                    </div>
                  </div>
                </div>

                {/* De 3 Punten */}
                <div className="mt-6 space-y-3.5 sm:space-y-4">
                  <div className="rounded-2xl border border-[#F0C0B2]/40 bg-white/70 p-3.5 sm:p-4 transition-colors hover:bg-white">
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FCD8CF] text-[#C95E3E] mt-0.5">
                        <UIcon name="cross-small" className="text-xs font-bold" aria-hidden="true" />
                      </span>
                      <div>
                        <h4 className="font-heading text-sm font-bold text-[#203728]">
                          Warmteontwikkeling
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-[#657068] sm:text-sm">
                          Zonder goede koeling en techniek kan plaatselijke warmte ontstaan. De werkelijke temperatuur verschilt per methode en uitvoering.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#F0C0B2]/40 bg-white/70 p-3.5 sm:p-4 transition-colors hover:bg-white">
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FCD8CF] text-[#C95E3E] mt-0.5">
                        <UIcon name="cross-small" className="text-xs font-bold" aria-hidden="true" />
                      </span>
                      <div>
                        <h4 className="font-heading text-sm font-bold text-[#203728]">
                          Agressieve staalafname
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-[#657068] sm:text-sm">
                          Een grove of verkeerd ingestelde machine kan sneller materiaal verwijderen dan voor de snede nodig is.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#F0C0B2]/40 bg-white/70 p-3.5 sm:p-4 transition-colors hover:bg-white">
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FCD8CF] text-[#C95E3E] mt-0.5">
                        <UIcon name="cross-small" className="text-xs font-bold" aria-hidden="true" />
                      </span>
                      <div>
                        <h4 className="font-heading text-sm font-bold text-[#203728]">
                          Profielverlies
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-[#657068] sm:text-sm">
                          Zonder aandacht voor het volledige profiel kan de snijlijn ongelijk worden en minder goed op de snijplank aansluiten.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusie */}
              <div className="mt-7 sm:mt-8 rounded-2xl border border-[#F0C0B2] bg-[#FCEEE8]/80 p-3.5 sm:p-4 text-xs font-semibold text-[#C95E3E] flex items-center gap-2.5">
                <UIcon name="exclamation" className="text-sm shrink-0" aria-hidden="true" />
                <span>Aandachtspunt: snelheid, koeling, druk en profielcontrole bepalen samen het resultaat.</span>
              </div>
            </div>

            {/* Kaart 2: Slijpmaat: 100% met de hand op waterstenen (Hero Card) */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border-2 border-[#3B7F4B] bg-white p-5 sm:p-8 lg:p-10 shadow-[0_16px_40px_rgba(59,127,75,0.08)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(59,127,75,0.13)]">
              <div>
                {/* Header Rij */}
                <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center justify-between gap-3 border-b border-[#d9e1d7]/70 pb-5">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E8EFE8] text-[#3B7F4B]">
                      <UIcon name="raindrops" className="text-xl sm:text-2xl" aria-hidden="true" />
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
                  Controle over hoek, profiel en materiaalafname
                </p>

                {/* Waterkoeling Garantieblok */}
                <div className="mt-5 rounded-2xl border border-[#A9C89E]/60 bg-[#E8EFE8]/50 p-3.5 sm:p-4">
                  <div className="flex items-center gap-3">
                    <UIcon name="raindrops" className="text-xl text-[#3B7F4B] shrink-0" aria-hidden="true" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#3B7F4B]">
                        Constant gekoeld met water
                      </span>
                      <p className="text-xs text-[#203728]">
                        De steen wordt nat gebruikt en we werken zonder sneldraaiende machine aan de snijkant.
                      </p>
                    </div>
                  </div>
                </div>

                {/* De 3 Meesterpunten */}
                <div className="mt-6 space-y-3.5 sm:space-y-4">
                  <div className="rounded-2xl border border-[#d9e1d7]/80 bg-[#FAFAF8] p-3.5 sm:p-4 transition-colors hover:bg-[#E8EFE8]/30 hover:border-[#3B7F4B]/40">
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8EFE8] text-[#3B7F4B] mt-0.5 font-bold">
                        <UIcon name="check" className="text-xs font-bold" aria-hidden="true" />
                      </span>
                      <div>
                        <h4 className="font-heading text-sm font-bold text-[#203728]">
                          Constant gekoeld met water
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-[#657068] sm:text-sm">
                          Door rustig met de hand te werken houden we controle over druk, slijphoek en warmteontwikkeling aan de snede.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#d9e1d7]/80 bg-[#FAFAF8] p-3.5 sm:p-4 transition-colors hover:bg-[#E8EFE8]/30 hover:border-[#3B7F4B]/40">
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8EFE8] text-[#3B7F4B] mt-0.5 font-bold">
                        <UIcon name="check" className="text-xs font-bold" aria-hidden="true" />
                      </span>
                      <div>
                        <h4 className="font-heading text-sm font-bold text-[#203728]">
                          Minimale staalafname
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-[#657068] sm:text-sm">
                          We verwijderen gericht wat nodig is om de snede te herstellen en beperken onnodige materiaalafname.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#d9e1d7]/80 bg-[#FAFAF8] p-3.5 sm:p-4 transition-colors hover:bg-[#E8EFE8]/30 hover:border-[#3B7F4B]/40">
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8EFE8] text-[#3B7F4B] mt-0.5 font-bold">
                        <UIcon name="check" className="text-xs font-bold" aria-hidden="true" />
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
                <UIcon name="check" className="text-sm shrink-0" aria-hidden="true" />
                <span>Doel: een scherpe, bruikbare snede met aandacht voor geometrie en duurzaam behoud.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OrganicSectionDivider
        fromColor="#FAFAF8"
        middleColor="#E8EFE8"
        toColor="#FFFFFF"
        variant="calm"
        mirror
      />

      {/* 7. VEELGESTELDE VRAGEN OVER ONZE WERKWIJZE (Rustige witte achtergrond met cards) */}
      <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
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
                <UIcon name="arrow-right" className="text-sm transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
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
                      <UIcon name="angle-small-down" className="text-sm" aria-hidden="true" />
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

      <OrganicSectionDivider
        fromColor="#FFFFFF"
        middleColor="#F9E4DE"
        toColor="#E87B5B"
        variant="calm"
      />

      {/* 8. BOTTOM CONTACT BANNER with top and bottom wave dividers */}
      <section id="werkwijze-contact" className="relative scroll-mt-20 overflow-hidden bg-[#E87B5B] px-4 pb-24 pt-20 text-white sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
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
              <UIcon name="comment-alt" className="text-2xl shrink-0 text-[#3B7F4B] transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
            </a>
            <a
              href="tel:+31682074967"
              className="group inline-flex min-h-[72px] items-center justify-between gap-4 rounded-full bg-white px-7 py-4 font-heading text-lg font-bold text-[#3B7F4B] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFF7F3] hover:shadow-lg sm:px-10 sm:text-xl"
            >
              <span>Bel je Maat</span>
              <UIcon name="phone-call" className="text-2xl shrink-0 text-[#3B7F4B] transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
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
