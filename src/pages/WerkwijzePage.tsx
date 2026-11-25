import React, { useEffect, useRef, useState } from 'react';
import { Pause } from 'lucide-react';
import { PageId } from '../types';
import { OrganicSectionDivider } from '../components/OrganicSectionDivider';
import { UIcon } from '../components/ui/UIcon';
import { TrustBar } from '../components/TrustBar';
import { LogoCloud } from '../components/ui/logo-cloud-3';
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
      <div className="mobile-media-frame relative aspect-square w-full overflow-hidden bg-white md:aspect-[4/3] md:rounded-[2.5rem] md:border md:border-[#d9e1d7] md:shadow-lg lg:aspect-square">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/werkwijze/slijpen-video-poster.webp"
          aria-label="Een keukenmes wordt met de hand geslepen op een Japanse slijpsteen"
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
  const repairWhatsappUrl = createWhatsAppUrl('Hoi Teun en Mike, ik heb een beschadigd mes. Kunnen jullie beoordelen welk herstel mogelijk is?');

  // De vier stappen van inspectie tot eindcontrole.
  const processPhases = [
    {
      title: 'Snede en profiel beoordelen',
      desc: 'We bekijken het staal, de bestaande slijphoek en de kromming van het lemmet. Zo weten we hoe we het originele profiel kunnen behouden.',
    },
    {
      title: 'De juiste slijpsteen kiezen',
      desc: 'We kiezen een Japanse slijpsteen die past bij het staal en de staat van de snede, zodat we alleen wegnemen wat nodig is.',
    },
    {
      title: 'Met de hand slijpen',
      desc: 'We slijpen met de hand op Japanse slijpstenen. Daardoor houden we controle over de slijphoek, de materiaalafname en de afwerking van ieder mes.',
    },
    {
      title: 'Afwerken op leer en testen',
      desc: 'We verwijderen de braam, werken de snede af op een leren strop met polijstpasta en controleren of het mes van hiel tot punt soepel snijdt.',
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
      title: 'De juiste Japanse slijpsteen kiezen',
      image: '/assets/werkwijze/02-stenen-kiezen.webp',
      alt: 'Japanse slijpstenen die Slijpmaat gebruikt',
    },
    {
      number: 'STAP 03',
      title: 'Handmatig slijpen met water',
      image: '/assets/werkwijze/03-slijpen.webp',
      alt: 'Een keukenmes wordt met de hand geslepen op een Japanse slijpsteen',
    },
    {
      number: 'STAP 04',
      title: 'Afwerken en ontbramen op leer',
      image: '/assets/werkwijze/04-afwerken.webp',
      alt: 'Een keukenmes wordt gepolijst en afgestropt op een leren strop',
    },
  ];

  const knifeTypes = [
    {
      title: 'Westerse messen',
      examples: 'Wüsthof, Zwilling, Sabatier, Diamant Sabatier, Victorinox, etc.',
      angle: 'Slijphoek ca. 15° - 20°',
      desc: 'Westerse messen hebben taaier staal en een rondere snijboog (voor de wiegende snijtechniek). We slijpen een stevige, duurzame snijrand die tegen een stootje kan.',
      image: '/assets/resultaten/slider/wusthof-classic-koksmes-thumb.webp',
      alt: 'Westers koksmes op een houten snijplank',
    },
    {
      title: 'Japanse messen',
      examples: 'Santoku, Gyuto, Nakiri, VG10, AUS-10, Shirogami & Aogami koolstofstaal',
      angle: 'Slijphoek ca. 12° - 15°',
      desc: 'Veel Japanse messen combineren relatief hard staal met een dunne geometrie. We beoordelen de bestaande snijvouw en kiezen een passende Japanse slijpsteen en slijphoek voor het specifieke mes.',
      image: '/assets/resultaten/slider/japans-santokumes-thumb.webp',
      alt: 'Japans santokumes op een houten snijplank',
    },
  ];

  // Veelgestelde vragen over werkwijze
  const faqs = [
    {
      q: 'Gaat er veel staal van mijn mes af tijdens het slijpen?',
      a: 'Handmatig slijpen op Japanse slijpstenen geeft ons veel controle over de slijphoek, druk en materiaalafname. We verwijderen wat nodig is om de snede opnieuw op te bouwen en proberen daarbij het profiel en de levensduur van het mes zo goed mogelijk te behouden.',
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
      a: 'Bij machinaal slijpen hangen warmteontwikkeling en materiaalafname af van de machine, snelheid, korrel en uitvoering. Wij kiezen voor handmatig slijpen op Japanse slijpstenen omdat we daarmee de hoek, druk en materiaalafname per mes nauwkeurig kunnen sturen.',
    },
    {
      q: 'Wat doen jullie met de originele hoek van mijn mes?',
      a: 'We kijken altijd naar de bestaande snijvouw en volgen de oorspronkelijke fabriekshoek van het mes. We forceren geen vreemde hoek op je mes, tenzij je in overleg expliciet vraagt om een dunnere of juist robuustere snede.',
    },
  ];

  return (
    <div className="overflow-hidden bg-[#FAFAF8]">
      {/* 1. HERO SECTION (Strakke lay-out: tekst links, foto rechts met saliegroene blob) */}
      <section className="site-hero site-hero-inset relative overflow-hidden bg-[#FAFAF8] pb-4 pt-2 sm:pb-8 sm:pt-4 lg:min-h-[580px] lg:pb-12">
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
              Bij Slijpmaat kiezen we bewust voor handmatig slijpen. We behandelen ieder mes met de hand op Japanse slijpstenen en werken de snede zorgvuldig af op leer. Zo zorgen we voor minimale materiaalafname, behoud van het originele lemmetprofiel en een lange levensduur van je mes.
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
                <span>100% handmatig · Japanse slijpstenen</span>
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
                className="mobile-media-frame group relative max-sm:-mx-4 aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
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

      <section aria-labelledby="werkwijze-slijpstappen" className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 id="werkwijze-slijpstappen" className="max-w-2xl scroll-mt-28 text-balance font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">
            Van botte snede naar scherp mes
          </h2>

          <div className="mt-8 grid items-start gap-8 sm:mt-10 lg:grid-cols-[1fr_0.94fr] lg:items-center lg:gap-12 xl:gap-16">
            <ol role="list" className="list-none divide-y divide-[#d9e1d7] border-y border-[#d9e1d7]">
              {processPhases.map((phase, index) => (
                <li key={phase.title} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 py-4 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-4 sm:py-5">
                  <span aria-hidden="true" className="grid size-8 place-items-center rounded-full bg-[#E8EFE8] font-heading text-sm font-bold text-[#244A30] sm:size-10">
                    {index + 1}
                  </span>
                  <div className="pt-0.5">
                    <h3 className="font-heading text-lg font-bold leading-snug text-[#203728] sm:text-xl">{phase.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#657068] sm:text-base">{phase.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <figure className="overflow-hidden rounded-[2rem] bg-[#F7F4EC] p-4 sm:p-6">
              <img
                src="/assets/werkwijze/slijpproces-snede.png"
                alt="Diagram van een botte messnede, het slijpproces, de gevormde braam en de uiteindelijke scherpe snede"
                width={622}
                height={360}
                className="h-auto w-full rounded-[1.25rem]"
                loading="lazy"
              />
              <figcaption className="px-1 pb-1 pt-4 sm:px-2 sm:pt-5">
                <h3 className="font-heading text-lg font-bold text-[#203728] sm:text-xl">Wat er met de snede gebeurt</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#657068] sm:text-base">
                  Tijdens het slijpen vormen we de snede opnieuw. Daarbij ontstaat een fijne braam, die we vóór de eindcontrole verwijderen.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <OrganicSectionDivider
        fromColor="#FFFFFF"
        middleColor="#F9E4DE"
        toColor="#F7F4EC"
        variant="scalloped"
        mirror
      />

      <section aria-labelledby="werkwijze-mestypes" className="bg-[#F7F4EC] px-4 pb-8 pt-12 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 id="werkwijze-mestypes" className="max-w-2xl scroll-mt-28 text-balance font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">
            Elk mes vraagt om een eigen behandeling
          </h2>

          <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-2 lg:gap-6">
            {knifeTypes.map((type) => (
              <article key={type.title} className="grid grid-cols-[5.75rem_minmax(0,1fr)] gap-x-4 gap-y-3 rounded-[2rem] bg-white p-4 ring-1 ring-[#D9E1D7] sm:grid-cols-[9rem_minmax(0,1fr)] sm:grid-rows-[auto_1fr] sm:gap-x-5 sm:gap-y-3 sm:p-5 xl:grid-cols-[11rem_minmax(0,1fr)]">
                <img
                  src={type.image}
                  alt={type.alt}
                  width={480}
                  height={640}
                  loading="lazy"
                  className="row-start-1 aspect-[3/4] h-auto w-full self-start rounded-2xl object-cover sm:row-span-2"
                />
                <header className="min-w-0 self-center sm:self-start">
                  <h3 className="font-heading text-xl font-bold leading-tight text-[#203728] sm:text-2xl">{type.title}</h3>
                  <p className="mt-2 text-sm leading-snug font-medium text-[#244A30]">{type.angle}</p>
                </header>
                <div className="col-span-2 min-w-0 sm:col-span-1">
                  <p className="text-sm leading-relaxed text-[#657068] sm:text-base">{type.desc}</p>
                  <p className="mt-3 border-t border-[#D9E1D7] pt-3 text-sm leading-relaxed text-[#657068]">{type.examples}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-4 rounded-[2rem] bg-[#E8EFE8] p-5 sm:mt-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="max-w-3xl">
              <h3 className="font-heading text-xl font-bold text-[#203728] sm:text-2xl">Een chip of beschadigde punt?</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#244A30] sm:text-base">
                Bij een hap in de snede of een verbogen of afgebroken punt bekijken we welk herstel mogelijk is en wat het betekent voor het profiel. Vóór we beginnen stemmen we de behandeling telefonisch of via WhatsApp met je af.
              </p>
            </div>
            <a
              href={repairWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-fit shrink-0 items-center gap-2 rounded-full bg-[#244A30] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#203728] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#244A30]"
            >
              <UIcon name="whatsapp" brand className="shrink-0 text-base" aria-hidden="true" />
              Bespreek de schade
            </a>
          </div>
        </div>
      </section>
      <LogoCloud />

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
