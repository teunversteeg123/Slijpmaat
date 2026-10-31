import React, { useEffect, useRef, useState } from 'react';
import { Pause } from 'lucide-react';
import { PageId } from '../types';
import { OrganicSectionDivider } from '../components/OrganicSectionDivider';
import { UIcon, UIconBadge } from '../components/ui/UIcon';
import { TrustBar } from '../components/TrustBar';
import { createWhatsAppUrl } from '../utils/contact';

interface WerkwijzePageProps {
  onNavigate: (page: PageId) => void;
}

const SlijpenVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const loadRequestedRef = useRef(false);
  const [wantsPlayback, setWantsPlayback] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setWantsPlayback(!preference.matches);
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let inView = false;
    const update = () => {
      if (wantsPlayback && inView && !document.hidden) {
        if (!loadRequestedRef.current) {
          loadRequestedRef.current = true;
          video.preload = 'auto';
          video.load();
        }
        // Keep the poster visible until enough video is buffered for a calm start.
        const bufferedAhead = video.buffered.length > 0
          ? video.buffered.end(video.buffered.length - 1) - video.currentTime
          : 0;
        const startBuffer = Math.min(1.5, video.duration || 1.5);
        if (video.currentTime > 0 || video.readyState === 4 || bufferedAhead >= startBuffer) {
          void video.play().catch((error: unknown) => {
            if (!(error instanceof DOMException && error.name === 'AbortError')) {
              setWantsPlayback(false);
            }
          });
        }
      } else {
        video.pause();
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      update();
    }, { threshold: 0.1 });
    observer.observe(video);
    document.addEventListener('visibilitychange', update);
    video.addEventListener('progress', update);
    video.addEventListener('canplaythrough', update);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', update);
      video.removeEventListener('progress', update);
      video.removeEventListener('canplaythrough', update);
      video.pause();
    };
  }, [wantsPlayback]);

  return (
    <div className="relative">
      <div className="relative aspect-square w-full overflow-hidden bg-white md:aspect-[4/3] md:rounded-[2.5rem] md:border md:border-[#d9e1d7] md:shadow-lg lg:aspect-square">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/werkwijze/slijpen-video-poster.webp"
          aria-label="Een keukenmes wordt met de hand geslepen op een Japanse watersteen"
          className="h-full w-full object-cover"
          onTimeUpdate={hasStarted ? undefined : (event) => {
            if (event.currentTarget.currentTime > 0) setHasStarted(true);
          }}
        >
          <source src="/assets/werkwijze/slijpen-loop-mobile.mp4" media="(max-width: 767px)" type="video/mp4" />
          <source src="/assets/werkwijze/slijpen-loop.mp4" type="video/mp4" />
        </video>
        {!hasStarted && (
          <img
            src="/assets/werkwijze/slijpen-video-poster.webp"
            alt=""
            aria-hidden="true"
            width={1440}
            height={1440}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
        )}
        <button
          type="button"
          aria-label={wantsPlayback ? 'Video pauzeren' : 'Video afspelen'}
          onClick={() => setWantsPlayback((previous) => !previous)}
          className="absolute inset-0 z-20 flex h-full w-full cursor-pointer items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
        >
          {!wantsPlayback && (
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#203728]/85 text-white">
              <Pause className="h-8 w-8" aria-hidden="true" />
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

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
      image: '/assets/werkwijze/01-beoordelen.webp',
      alt: 'Slijpmaat beoordeelt de snede en het profiel van een keukenmes',
    },
    {
      num: '02',
      title: 'Wij kiezen de juiste steen',
      desc: 'Elk mes en elke staalsoort vraagt om een eigen aanpak. Wij kiezen nauwkeurig de juiste watersteen voor jouw lemmet. We werken zeer beheerst: we halen alleen weg wat strikt nodig is voor een vlijmscherp resultaat, voor een maximale levensduur van je mes.',
      badge: 'De juiste watersteen',
      highlight: 'Minimale staalafname',
      image: '/assets/werkwijze/02-stenen-kiezen.webp',
      alt: 'Japanse whetstones waterstenen die Slijpmaat gebruikt',
    },
    {
      num: '03',
      title: 'Volledig met de hand op waterstenen',
      desc: 'We slijpen met de hand op natte waterstenen. Daardoor houden we controle over de slijphoek, de materiaalafname en de afwerking van ieder mes.',
      badge: '100% Handwerk',
      highlight: 'Controle over hoek en afname',
      image: '/assets/werkwijze/03-slijpen.webp',
      alt: 'Een keukenmes wordt met de hand geslepen op een Japanse watersteen',
    },
    {
      num: '04',
      title: 'Afwerken en ontbramen op leer',
      desc: 'Tot slot verwijderen we de braam zorgvuldig en stroppen we de snede af op een soepele leren strop met polijstpasta. Daarna controleren we of het mes over de volledige snede soepel snijdt.',
      badge: 'Leren strop',
      highlight: 'Vlijmscherp & braamvrij',
      image: '/assets/werkwijze/04-afwerken.webp',
      alt: 'Een keukenmes wordt gepolijst en afgestropt op een leren strop',
    },
  ];

  // 4 Fotopanelen van het ambacht
  const craftPhotos = [
    {
      number: 'STAP 01',
      title: 'Beoordelen & inspectie',
      image: '/assets/werkwijze/01-beoordelen.webp',
      alt: 'Slijpmaat beoordeelt de snede en het profiel van een keukenmes',
    },
    {
      number: 'STAP 02',
      title: 'De juiste watersteen kiezen',
      image: '/assets/werkwijze/02-stenen-kiezen.webp',
      alt: 'Japanse waterstenen die Slijpmaat gebruikt',
    },
    {
      number: 'STAP 03',
      title: 'Handmatig slijpen met water',
      image: '/assets/werkwijze/03-slijpen.webp',
      alt: 'Een keukenmes wordt met de hand geslepen op een Japanse watersteen',
    },
    {
      number: 'STAP 04',
      title: 'Afwerken en ontbramen op leer',
      image: '/assets/werkwijze/04-afwerken.webp',
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
      <section className="site-hero relative overflow-hidden bg-[#FAFAF8] pb-4 pt-2 sm:pb-8 sm:pt-4 lg:min-h-[580px] lg:pb-12">
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

        <div className="site-hero-grid relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-7 py-6 sm:py-10 lg:min-h-[540px] lg:grid-cols-2 lg:gap-14 lg:py-8 xl:gap-20">
          {/* Left: Copy & CTAs */}
          <div className="site-hero-copy order-1 px-4 sm:px-6 lg:order-1 lg:max-w-2xl lg:px-0">
            <h1 className="site-hero-title max-w-3xl font-heading text-4xl font-bold leading-[1.02] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-5xl xl:text-6xl">
              Ieder mes met de hand geslepen.
            </h1>
            <p className="site-hero-description mt-5 max-w-2xl text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Bij Slijpmaat kiezen we bewust voor handmatig slijpen. We behandelen ieder mes met de hand op Japanse waterstenen en werken de snede zorgvuldig af op leer. Zo zorgen we voor minimale materiaalafname, behoud van het originele lemmetprofiel en een lange levensduur van je mes.
            </p>

            <div className="site-hero-actions mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
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

          {/* Right: Stille slijpvideo in de bestaande hero-opmaak */}
          <div className="site-hero-media site-hero-media-video relative order-2 mx-auto w-full md:max-w-xl md:px-6 lg:order-2 lg:px-0">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-7 -left-7 hidden h-52 w-52 rounded-[42%_58%_62%_38%/55%_42%_58%_45%] bg-[#A9C89E] opacity-90 z-0 transition-transform duration-500 hover:scale-105 md:block"
            />
            <div className="relative z-10">
              <SlijpenVideo />
              <div className="pointer-events-none absolute bottom-4 left-4 z-10 hidden items-center gap-2 rounded-full border border-white/10 bg-[#203728]/85 px-4 py-2 text-xs font-bold text-white shadow-md backdrop-blur-xs md:flex">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#4CAF50]" />
                <span>100% handmatig · Japanse waterstenen</span>
              </div>
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
            <h2 className="font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">
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
              <h3 className="font-heading text-xl font-bold text-[#203728] sm:text-2xl">
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
          <div className="mb-10 max-w-2xl sm:mb-12">
            <h2 className="font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">
              Elk mes vraagt om een eigen behandeling
            </h2>
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
        toColor="#FFFFFF"
        variant="calm"
        mirror
      />

      {/* 7. VEELGESTELDE VRAGEN OVER ONZE WERKWIJZE (Rustige witte achtergrond met cards) */}
      <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div className="max-w-md">
            <h2 className="font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">
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
          <h2 className="max-w-5xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
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
