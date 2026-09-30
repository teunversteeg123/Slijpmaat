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
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  Shield,
  Layers,
  Flame,
  Check
} from 'lucide-react';

interface WerkwijzePageProps {
  onNavigate: (page: PageId) => void;
}

export const WerkwijzePage: React.FC<WerkwijzePageProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik wil graag meer weten over jullie werkwijze!')}`;

  const craftPhotos = [
    { number: '01', title: 'Snede beoordelen', image: '/assets/werkwijze/01-beoordelen.jpg', alt: 'Slijpmaat beoordeelt de snede van een keukenmes' },
    { number: '02', title: 'Stenen kiezen', image: '/assets/werkwijze/02-stenen-kiezen.jpg', alt: 'Japanse whetstones die Slijpmaat gebruikt' },
    { number: '03', title: 'Scherpte opbouwen', image: '/assets/werkwijze/03-slijpen.jpg', alt: 'Een keukenmes wordt met de hand geslepen op een whetstone' },
    { number: '04', title: 'Snede afwerken', image: '/assets/werkwijze/04-afwerken.jpg', alt: 'Een keukenmes wordt afgewerkt op een leren strop' },
  ];

  const steps = [
    {
      num: '01',
      title: 'Beoordeling van de snede',
      desc: 'We inspecteren het lemmet met strijklicht en microscopisch gevoel op micro-chips, bramen en scheve facetten om de staalsoort en geometrie te bepalen.',
    },
    {
      num: '02',
      title: 'Keuze van whetstone en korrel',
      desc: 'We selecteren de juiste combinatie professionele Shapton Pro keramische waterstenen: van korrel 320 voor herstel tot 2000 en 5000+ voor verfijning.',
    },
    {
      num: '03',
      title: 'Watergekoeld handslijpen',
      desc: 'Geen elektrische machines. Het lemmet wordt continu met water gekoeld en onder een vaste hoek (12–15° Japans, 15–20° Europees) geleid.',
    },
    {
      num: '04',
      title: 'Opbouw van hiel tot punt',
      desc: 'We bouwen de nieuwe snijvouw gelijkmatig op over de volle lengte van het mes, zodat de snijcurve zijn natuurlijke dynamiek behoudt.',
    },
    {
      num: '05',
      title: 'Braamvorming & ontbramen',
      desc: 'We controleren de micro-braam langs de snede en verwijderen deze vederlicht met fijnere stenen voor een zuivere, vlijmscherpe apex.',
    },
    {
      num: '06',
      title: 'Afstroppen op leder',
      desc: 'Het mes wordt gepolijst op een plantaardig gelooide leren strop met diamant- en chroomoxidepasta voor een gladde, spiegelende afwerking.',
    },
    {
      num: '07',
      title: 'Strenge scherptetests',
      desc: 'We testen de snede op staand papier en controleren of het mes zonder enige neerwaartse druk door een rijpe tomaat glijdt.',
    },
    {
      num: '08',
      title: 'Veilig inpakken & bezorgen',
      desc: 'We verpakken je messen in veilige beschermhoezen en leveren ze doorgaans binnen 24–48 uur weer vlijmscherp bij je thuis of in de keuken af.',
    },
  ];

  const gritStages = [
    { grit: '#320', name: 'Shapton Pro Rough', purpose: 'Chips, profielcorrectie en uitdunnen' },
    { grit: '#1000', name: 'Shapton Pro Medium', purpose: 'Basis apex en nieuwe strakke snijvouw' },
    { grit: '#2000', name: 'Shapton Pro Fine', purpose: 'Verfijnen van kraspatronen en scherpte' },
    { grit: '#5000', name: 'Shapton Pro Super Fine', purpose: 'Zijdezachte snede en ontbramen' },
    { grit: '#8000', name: 'Shapton Pro Polish', purpose: 'Hoogglans spiegelafwerking voor Japans staal' },
    { grit: 'Strop', name: 'Plantaardig Leder', purpose: 'Polijsten met pasta voor ultieme soepelheid' },
  ];

  return (
    <div className="overflow-hidden bg-[#FAFAF8]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#FAFAF8] pb-8 pt-4 sm:pb-12 sm:pt-6 lg:pb-16">
        {/* Soft organic circular sage blob in the top-right background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-16 h-[340px] w-[340px] rounded-full bg-[#E3EFE5] opacity-80 blur-2xl sm:h-[480px] sm:w-[480px] sm:blur-3xl lg:-right-10 lg:top-2 lg:h-[560px] lg:w-[560px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#3B7F4B] sm:text-sm">
              Het Slijpmaat Ambacht
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-6xl">
              Traditioneel whetstone slijpwerk. Zonder hitte, met gevoel.
            </h1>
            <p className="mt-5 text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Waarom wij weigeren droge slijpmachines te gebruiken: handmatig watergekoeld slijpen garandeert maximale scherpte zonder dat het staal zijn harding verliest.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => onNavigate('particulieren')}
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] active:scale-[0.98] sm:text-base cursor-pointer"
              >
                <span>Plan mijn slijpbeurt</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#E87B5B]/20 bg-[#FCEEE8] px-7 py-3.5 text-sm font-bold text-[#C95E3E] transition-all duration-200 hover:bg-[#F8DFD6] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] sm:text-base"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Stel een vraag via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
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
              <span className="text-sm font-bold text-[#3B7F4B]">Binnen 24–48 uur retour</span>
            </div>
            <div className="flex items-center gap-3 sm:justify-center sm:px-5">
              <MapPin className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
              <span className="text-sm font-bold text-[#3B7F4B]">100% watergekoeld handwerk</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CRAFT PHOTO STRIP */}
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

      {/* 4. DE WETENSCHAP VAN SCHERPTE (Whetstones vs Droge Machines) with organic wave dividers */}
      <section className="relative overflow-hidden bg-[#F7F4EC] px-4 pb-20 pt-20 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
        {/* Organic wave divider at TOP flowing from #FAFAF8 into #F7F4EC */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="pointer-events-none absolute left-0 top-0 h-10 w-full text-[#FAFAF8] sm:h-14 lg:h-16"
        >
          <path
            fill="currentColor"
            d="M0,0 L1440,0 L1440,20 C1180,55 900,10 620,40 C380,68 180,18 0,35 Z"
          />
        </svg>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">De wetenschap van scherpte</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Waarom Japanse waterstenen?</h2>
            <p className="mt-3 text-base leading-7 text-[#657068]">
              Een modern kwaliteitsmes bestaat uit gehard staal (56 tot 64 HRC). Slijpen met machines brengt ernstige hitte met zich mee.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            {/* Left: Comparison Cards */}
            <div className="space-y-5 lg:col-span-6">
              <div className="rounded-[2rem] border border-[#E87B5B]/30 bg-[#FFF7F3] p-7 sm:p-8 shadow-xs">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F9E4DE] text-[#C95E3E]">
                    <Flame className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#C95E3E]">Het gevaar van droge machines</h3>
                    <p className="text-xs font-semibold text-[#C95E3E]/80">Elektrische bandslijpers &amp; slijpwielen</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#657068]">
                  Een ronddraaiende schuurband creëert binnen 2 seconden een temperatuur van &gt;200°C op de uiterste snede. Hierdoor ontlaat het staal en verdwijnt de hardheid. Het mes lijkt direct scherp, maar is na twee snijdbeurten weer bot.
                </p>
              </div>

              <div className="rounded-[2rem] border border-[#d9e1d7] bg-white p-7 sm:p-8 shadow-xs">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8EFE8] text-[#3B7F4B]">
                    <Shield className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#3B7F4B]">Het Slijpmaat waterkoelsysteem</h3>
                    <p className="text-xs font-semibold text-[#3B7F4B]/80">100% met de hand op Japanse waterstenen</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#657068]">
                  Onze whetstones worden continu met water gespoeld. Geen wrijvingshitte, 100% behoud van de fabrieksharding, minimale staalafname en een snede die wekenlang zijdezacht door vlees en groenten glijdt.
                </p>
              </div>
            </div>

            {/* Right: Shapton Pro Waterstenenreeks Diagram */}
            <div className="rounded-[2rem] border border-[#d9e1d7] bg-white p-7 sm:p-8 shadow-xs lg:col-span-6">
              <div className="flex items-center justify-between border-b border-[#d9e1d7]/70 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3B7F4B]">Grit progressie</p>
                  <h3 className="font-heading text-xl font-bold text-[#3B7F4B]">Onze Shapton Pro Waterstenen</h3>
                </div>
                <span className="rounded-full bg-[#E8EFE8] px-3 py-1 text-xs font-bold text-[#3B7F4B]">
                  Handmatig
                </span>
              </div>

              <div className="mt-5 space-y-2.5">
                {gritStages.map((stage) => (
                  <div
                    key={stage.grit}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-[#d9e1d7]/60 bg-[#FAFAF8] p-3 text-xs transition-colors hover:border-[#3B7F4B]/40 hover:bg-white"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-16 rounded-xl bg-[#E8EFE8] px-2 py-1.5 text-center font-mono text-xs font-bold text-[#3B7F4B]">
                        {stage.grit}
                      </span>
                      <div>
                        <span className="block font-heading text-sm font-bold text-[#3B7F4B]">{stage.name}</span>
                        <span className="text-[12px] text-[#657068]">{stage.purpose}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HET 8-STAPS SLIJPPROCES - Vibrant Slijpmaat Green #3B7F4B with wave divider */}
      <section className="relative overflow-hidden bg-[#3B7F4B] px-4 pb-28 pt-20 sm:px-6 sm:pb-36 sm:pt-24 lg:px-8">
        {/* Organic wave divider at TOP flowing smoothly from #F7F4EC cream into green */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="pointer-events-none absolute left-0 top-0 h-10 w-full text-[#F7F4EC] sm:h-14 lg:h-16"
        >
          <path
            fill="currentColor"
            d="M0,0 L1440,0 L1440,20 C1180,55 900,10 620,40 C380,68 180,18 0,35 Z"
          />
        </svg>

        {/* Organic wave divider at BOTTOM flowing into white section below */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute bottom-0 left-0 h-14 w-full text-white sm:h-20 lg:h-24"
        >
          <path
            fill="currentColor"
            d="M0,100 L1440,100 L1440,30 C1200,75 920,15 620,55 C380,85 180,25 0,65 Z"
          />
        </svg>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E8EFE8]">Stap voor stap vakwerk</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">Ons complete 8-staps slijpproces</h2>
            <p className="mt-4 text-base leading-7 text-[#E8EFE8]">
              Elk mes doorloopt dit gecontroleerde traject in onze Utrechtse werkplaats. Geen haastwerk, maar precisie.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="group relative rounded-[1.75rem] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F9E4DE] font-heading text-sm font-bold text-[#C95E3E]">
                      {step.num}
                    </span>
                    <CheckCircle2 className="h-5 w-5 text-[#3B7F4B]/40 group-hover:text-[#3B7F4B] transition-colors" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold text-[#3B7F4B]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#657068]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CONTACT BANNER with top and bottom wave dividers */}
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
