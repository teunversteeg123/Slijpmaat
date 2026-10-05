import React, { useState, useRef, useEffect } from 'react';
import { PageId } from '../types';
import { SLIJPMAAT_INFO } from '../data/siteData';
import { GoogleIcon, GOOGLE_REVIEW_COUNT } from '../components/GoogleReviewsSection';
import {
  MapPin,
  MessageCircle,
  Package,
  Calendar,
  Sparkles,
  ArrowRight,
  ArrowDown,
  ShieldCheck,
  CheckCircle2,
  Clock3,
  Car,
  AlertTriangle,
  Plus,
  X,
  Phone,
  Building2,
  Utensils
} from 'lucide-react';

interface BuitenUtrechtPageProps {
  onNavigate: (page: PageId) => void;
}

const stepsOutside = [
  {
    number: '01',
    title: 'Stuur een appje',
    text: 'Laat weten hoeveel en welke messen je wilt laten slijpen. We stemmen snel een handig moment af.'
  },
  {
    number: '02',
    title: 'Breng langs of stuur op',
    text: 'Kom langs aan de Gerard Noodtstraat in Utrecht op het afgesproken tijdstip, of stuur je pakketje op.'
  },
  {
    number: '03',
    title: 'Met de hand geslepen',
    text: 'We slijpen jouw messen zorgvuldig op Japanse waterstenen, kiezen de juiste steen en stroppen af op leer.'
  },
  {
    number: '04',
    title: 'Vlijmscherp ophalen',
    text: 'Binnen 24–48 uur liggen je messen klaar. Je test ze en betaalt pas achteraf via een eenvoudig Tikkie.'
  },
];

const faqs = [
  {
    q: 'Kan ik zomaar langskomen zonder afspraak?',
    a: 'Nee, Slijpmaat heeft bewust géén traditionele inloopbalie. We werken geconcentreerd aan de werkbank met vlijmscherp gereedschap. Door vooraf via WhatsApp even af te stemmen, weet je zeker dat Teun of Mike persoonlijk aanwezig is om je messen veilig aan te nemen.'
  },
  {
    q: 'Kan ik wachten terwijl jullie slijpen?',
    a: 'Met de hand slijpen op waterstenen en afstroppen kost tijd en precisie (gemiddeld 15 tot 25 minuten per mes). Wachten is meestal niet praktisch, maar bij spoed kunnen we in overleg kijken wat er dezelfde dag mogelijk is. Veel klanten combineren het langsbrengen met een lunch, koffie of boodschappen in de Utrechtse binnenstad!'
  },
  {
    q: 'Geldt hetzelfde tarief als in Utrecht?',
    a: 'Jazeker! Onze slijptarieven zijn voor iedereen gelijk: vanaf €6,50 voor een klein schilmes, €8,50 voor een normaal koksmes (15–20 cm) en €10,50 voor grote koksmessen. Breng je ze zelf langs, dan betaal je uiteraard €0,- bezorgkosten.'
  },
  {
    q: 'Hoe verpak ik mijn messen veilig voor de autorit of trein?',
    a: 'Rol elk mes strak in een theedoek of handdoek en doe er eventueel een elastiekje omheen. Ook kun je een stuk karton dubbelvouwen over de snede en vastplakken. Zo beschadig je de snede niet én reis je 100% veilig.'
  },
  {
    q: 'Kan ik mijn messen ook opsturen per post?',
    a: 'Ja, dat kan in overleg! Stuur ons eerst even een appje met foto\'s of het aantal messen. Vervolgens stuur je het pakket goed ingepakt naar ons adres in Utrecht (wij werken vanuit huis). Na het slijpen sturen we ze vlijmscherp en verzekerd via PostNL weer naar je terug.'
  },
  {
    q: 'Ik heb een horecakeuken buiten Utrecht. Komen jullie dan wel langs?',
    a: 'Voor horeca, restaurants en grotere batches (vanaf ca. 10–15 messen) in de regio (Zeist, Amersfoort, Houten, Nieuwegein, Maarssen, Hilversum) maken we graag een ophaalafspraak op maat. Neem even contact met ons op via WhatsApp!'
  }
];

export const BuitenUtrechtPage: React.FC<BuitenUtrechtPageProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik kom van buiten Utrecht en wil graag mijn messen laten slijpen op afspraak!')}`;

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isPlanExpanded, setIsPlanExpanded] = useState(false);
  const planRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPlanExpanded) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (planRef.current && !planRef.current.contains(e.target as Node)) {
        setIsPlanExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isPlanExpanded]);

  const openCalculator = () => {
    onNavigate('particulieren');
    window.setTimeout(() => {
      document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  return (
    <div className="overflow-hidden bg-[#FAFAF8]">
      {/* 1. HERO SECTION (Over ons stijl: links tekst & CTAs, rechts foto met organische mint blob & dark pill) */}
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
              Service Buiten Utrecht · Persoonlijk &amp; Vakkundig
            </p>
            <h1 className="mt-3 max-w-3xl font-heading text-4xl font-bold leading-[1.02] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-5xl xl:text-6xl">
              Ik kom buiten Utrecht, wat nu?
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Woon of kook je buiten onze Utrechtse bezorgzone? Geen enkel probleem! Wekelijks slijpen we messen voor thuiskoks en horeca uit Zeist, Houten, Amersfoort, Hilversum, Nieuwegein en ver daarbuiten.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <div ref={planRef} className="relative">
                {!isPlanExpanded ? (
                  <button
                    type="button"
                    onClick={() => setIsPlanExpanded(true)}
                    className="group inline-flex min-h-13 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] active:scale-[0.98] sm:text-base cursor-pointer"
                  >
                    <span>Plan je slijpbeurt</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </button>
                ) : (
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2 rounded-2xl sm:rounded-full bg-[#E87B5B] p-2.5 sm:p-1.5 shadow-md transition-all duration-300 ease-out animate-in fade-in zoom-in-95">
                    <button
                      type="button"
                      onClick={() => {
                        setIsPlanExpanded(false);
                        openCalculator();
                      }}
                      className="w-full sm:w-auto text-center rounded-xl sm:rounded-full bg-white px-5 sm:px-6 py-3 sm:py-2.5 text-sm sm:text-base font-bold text-[#E87B5B] shadow-2xs hover:bg-[#FFF4EF] active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                    >
                      Particulier
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsPlanExpanded(false);
                        onNavigate('horeca');
                      }}
                      className="w-full sm:w-auto text-center rounded-xl sm:rounded-full bg-[#C95E3E] px-5 sm:px-6 py-3 sm:py-2.5 text-sm sm:text-base font-bold text-white hover:bg-white hover:text-[#E87B5B] active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                    >
                      Zakelijk
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsPlanExpanded(false)}
                      className="flex items-center justify-center gap-1.5 py-1 sm:p-2 text-xs sm:text-sm font-semibold text-white/80 hover:text-white rounded-full hover:bg-white/20 transition-all cursor-pointer"
                      aria-label="Sluiten"
                    >
                      <X className="h-4 w-4" />
                      <span className="sm:hidden">Sluiten</span>
                    </button>
                  </div>
                )}
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#E87B5B]/20 bg-[#FCEEE8] px-7 py-3.5 text-sm font-bold text-[#C95E3E] transition-all duration-200 hover:bg-[#F8DFD6] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] sm:text-base"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp je Maat</span>
              </a>
            </div>
          </div>

          {/* Right: Foto met organische mint blob & dark pill tag (Over ons stijl) */}
          <div className="order-2 w-full lg:order-2 px-4 sm:px-6 lg:px-0 relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-5 -left-5 sm:-bottom-7 sm:-left-7 h-40 w-40 sm:h-52 sm:w-52 rounded-[42%_58%_62%_38%/55%_42%_58%_45%] bg-[#A9C89E] opacity-90 z-0 transition-transform duration-500 hover:scale-105"
            />
            <div className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-[#d9e1d7] bg-white shadow-lg sm:aspect-[16/11] lg:aspect-square">
              <img
                src="/assets/team/teun-en-mike-met-mes.jpg"
                alt="Teun en Mike van Slijpmaat met vlijmscherp koksmes"
                className="h-full w-full object-cover object-[center_35%]"
              />
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 rounded-full bg-[#203728]/85 px-4 py-2 backdrop-blur-xs text-xs font-bold text-white shadow-md border border-white/10">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#4CAF50] animate-pulse" />
                <span>Langsbrengen op afspraak · Utrecht</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR (Zekerheden floating pill) */}
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
              <span className="text-sm font-bold text-[#3B7F4B]">Binnen 24–48 uur gereed</span>
            </div>
            <div className="flex items-center gap-3 sm:justify-center sm:px-5">
              <Car className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
              <span className="text-sm font-bold text-[#3B7F4B]">€0,- bezorgkosten bij langsbrengen</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BELANGRIJKE MEDEDELING: ALTIJD EVEN EEN AFSPRAAK */}
      <section className="relative px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-[#d9e1d7] bg-[#F7F4EC] p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#E87B5B] shadow-2xs">
              <AlertTriangle className="h-7 w-7" />
            </span>
            <div className="space-y-1">
              <h2 className="font-heading text-lg sm:text-xl font-bold text-[#3B7F4B]">
                Belangrijk: altijd even een afspraak maken via WhatsApp
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#657068]">
                Slijpmaat heeft bewust géén traditionele inloopwinkel; wij werken vanuit huis aan de Gerard Noodtstraat in Utrecht. Door vooraf even een tijdstip af te stemmen, weet je 100% zeker dat Teun of Mike persoonlijk aanwezig is om je messen veilig aan te nemen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DRIE MOGELIJKHEDEN (Cards matching HomePage Voor particulieren / Voor horeca) */}
      <section className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Jouw mogelijkheden</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Drie manieren om je messen te laten slijpen</h2>
            <p className="mt-3 text-base text-[#657068]">
              Kies de optie die het beste past bij jouw planning en locatie.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Optie 1: Zelf langsbrengen */}
            <div className="group rounded-[2rem] border-2 border-[#3B7F4B] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8EFE8] text-[#3B7F4B] transition-transform duration-300 group-hover:scale-105">
                    <Car className="h-7 w-7" />
                  </span>
                  <span className="rounded-full bg-[#E8EFE8] px-3.5 py-1 text-xs font-bold text-[#3B7F4B]">
                    Meest gekozen
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-[#3B7F4B]">1. Zelf langsbrengen</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#657068]">
                  Breng je messen op afspraak bij ons langs aan de Gerard Noodtstraat in Utrecht. Geen bezorgkosten en binnen 24–48 uur weer ophalen.
                </p>
                <div className="mt-5 space-y-2 text-xs font-medium text-[#244A30]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#3B7F4B]" />
                    <span>€0,- bezorgkosten</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#3B7F4B]" />
                    <span>Combineer met lunch of koffie in de stad</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#d9e1d7]/60">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#3B7F4B] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[#315F3B]"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Afspraak maken</span>
                </a>
              </div>
            </div>

            {/* Optie 2: Opsturen per post */}
            <div className="group rounded-[2rem] border border-[#d9e1d7] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3B7F4B]/50 hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F7F4EC] text-[#3B7F4B] transition-transform duration-300 group-hover:scale-105">
                    <Package className="h-7 w-7" />
                  </span>
                  <span className="rounded-full bg-[#FAFAF8] border border-[#d9e1d7] px-3 py-1 text-xs font-semibold text-[#657068]">
                    Heel Nederland
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-[#3B7F4B]">2. Opsturen per post</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#657068]">
                  Woon je verder weg? Pak je messen veilig in in theedoeken en een stevige doos en stuur ze naar Utrecht. Wij sturen ze vlijmscherp retour via PostNL.
                </p>
                <div className="mt-5 space-y-2 text-xs font-medium text-[#244A30]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#3B7F4B]" />
                    <span>Altijd in overleg via WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#3B7F4B]" />
                    <span>Verzekerde retourverzending</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#d9e1d7]/60">
                <a
                  href={`https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik wil graag mijn messen per post naar jullie opsturen!')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#3B7F4B] bg-white px-5 py-3 text-sm font-bold text-[#3B7F4B] transition-all hover:bg-[#E8EFE8]"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Overleg via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Optie 3: Horeca & Grote batches */}
            <div className="group rounded-[2rem] border border-[#E87B5B]/35 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#E87B5B] hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F9E4DE] text-[#C95E3E] transition-transform duration-300 group-hover:scale-105">
                    <Building2 className="h-7 w-7" />
                  </span>
                  <span className="rounded-full bg-[#FFF4EF] px-3.5 py-1 text-xs font-bold text-[#C95E3E]">
                    Horeca &amp; Chefs
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-[#C95E3E]">3. Horeca &amp; Regio ophalen</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#657068]">
                  Heb je een restaurant of grotere batch messen (vanaf ca. 10–15 stuks) in Zeist, Amersfoort, Nieuwegein, Houten of Hilversum? We halen ze in overleg bij je op.
                </p>
                <div className="mt-5 space-y-2 text-xs font-medium text-[#244A30]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#C95E3E]" />
                    <span>Leenmessen beschikbaar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#C95E3E]" />
                    <span>Facturatie achteraf voor bedrijven</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E87B5B]/20">
                <button
                  type="button"
                  onClick={() => onNavigate('horeca')}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[#C95E3E] cursor-pointer"
                >
                  <span>Naar zakelijk &amp; horeca</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ZO WERKT HET BUITEN UTRECHT (Green section with organic wave dividers matching HomePage) */}
      <section className="relative overflow-hidden bg-[#3B7F4B] px-4 pb-28 pt-20 sm:px-6 sm:pb-36 sm:pt-24 lg:px-8">
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
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E8EFE8]">Eenvoudig geregeld</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">Hoe werkt het buiten Utrecht?</h2>
            <p className="mt-4 text-base leading-7 text-[#E8EFE8]">
              In vier heldere stappen naar vlijmscherpe messen, zonder verrassingen.
            </p>
          </div>

          <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stepsOutside.map((step, index) => (
              <li
                key={step.title}
                className="group relative rounded-[1.75rem] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F9E4DE] font-heading text-sm font-bold text-[#C95E3E]">
                    {step.number}
                  </span>
                  {index < stepsOutside.length - 1 ? (
                    <ArrowRight className="hidden h-5 w-5 text-[#A9C89E] transition-transform duration-200 group-hover:translate-x-1 xl:block" aria-hidden="true" />
                  ) : (
                    <CheckCircle2 className="h-5 w-5 text-[#3B7F4B]" aria-hidden="true" />
                  )}
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-[#3B7F4B]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#657068]">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. FAQ ACCORDION SECTION (Matching HomePage) */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Veelgestelde vragen</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Vragen over service buiten Utrecht</h2>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#d9e1d7] bg-[#FAFAF8] transition-colors hover:border-[#3B7F4B]/40"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-left font-heading text-base font-bold text-[#3B7F4B] sm:p-6 sm:text-lg cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#3B7F4B] shadow-2xs transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
                      <Plus className="h-5 w-5" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-[#d9e1d7]/60 px-5 pb-6 pt-3 sm:px-6">
                      <p className="text-sm leading-relaxed text-[#657068] sm:text-base">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CONTACT BANNER with dual organic waves (Matching HomePage) */}
      <section id="buiten-contact" className="relative scroll-mt-20 overflow-hidden bg-[#E87B5B] px-4 pb-24 pt-20 text-white sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
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
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.36em] text-white sm:text-sm">Vragen van buiten Utrecht?</p>
          <h2 className="mt-6 max-w-5xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Vraag het direct aan je Maat
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/95 sm:text-xl">
            Wil je weten hoe snel we jouw messen kunnen slijpen of wil je even overleggen over langsbrengen? Stuur Teun of Mike een appje.
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
