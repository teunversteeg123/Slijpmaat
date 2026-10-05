import React, { useState, useRef, useEffect } from 'react';
import { PageId } from '../types';
import { SLIJPMAAT_INFO, SERVICE_AREAS } from '../data/siteData';
import { GoogleIcon, GOOGLE_REVIEW_COUNT } from '../components/GoogleReviewsSection';
import {
  MapPin,
  Clock3,
  CheckCircle2,
  AlertTriangle,
  Search,
  MessageCircle,
  ArrowRight,
  ArrowDown,
  Phone,
  Bike,
  Plus,
  X,
  Utensils,
  Building2,
  Calendar,
  Sparkles
} from 'lucide-react';

interface ServicegebiedPageProps {
  onNavigate: (page: PageId) => void;
}

const serviceSteps = [
  {
    number: '01',
    title: 'Aanvraag & afspraak',
    text: 'Stuur een berichtje via WhatsApp of bereken je prijs. We stemmen direct een ophaalmoment af dat jou uitkomt.'
  },
  {
    number: '02',
    title: 'Wij halen ze op',
    text: 'Op de fiets of met de bakwagen komen we langs aan je voordeur of horecakeuken in Utrecht.'
  },
  {
    number: '03',
    title: 'Met de hand geslepen',
    text: 'We slijpen elk mes zorgvuldig op Japanse waterstenen, stemmen de juiste steen af en stroppen af op leer.'
  },
  {
    number: '04',
    title: 'Vlijmscherp retour',
    text: 'Binnen 24–48 uur brengen we je messen veilig verpakt terug. Je betaalt pas achteraf via een Tikkie.'
  },
];

const serviceFaqs = [
  {
    q: 'Vanaf hoeveel messen is het ophalen en bezorgen gratis?',
    a: 'Vanaf 3 messen halen we jouw messen gratis op én brengen we ze gratis terug binnen ons Utrechtse servicegebied. Laat je 1 of 2 messen slijpen? Dan rekenen we slechts €4,50 bezorgkosten voor de hele retourrit.'
  },
  {
    q: 'Hoe geef ik mijn messen veilig mee aan de deur?',
    a: 'We vervoeren je messen in onze eigen stevige Slijpmaat fietstassen en mesbeschermers. Wikkel je messen thuis bij voorkeur in een theedoek of handdoek met een elastiek eromheen. Zo blijven je messen en onze vingers heel!'
  },
  {
    q: 'Hoe snel heb ik mijn messen weer terug?',
    a: 'Meestal al binnen 24 tot uiterlijk 48 uur na ophalen. Heb je een specifieke deadline of kookavond? Laat het ons weten bij het inplannen, dan houden we daar rekening mee.'
  },
  {
    q: 'Kan ik mijn messen ook zelf langsbrengen in Utrecht?',
    a: 'Jazeker! Je bent op afspraak van harte welkom aan de Gerard Noodtstraat in Utrecht. Omdat we vanuit huis werken en geconcentreerd aan de werkbank staan, vragen we je altijd even vooraf een tijdstip af te stemmen via WhatsApp.'
  },
  {
    q: 'Wat als mijn postcode net buiten Utrecht valt?',
    a: 'Woon je in Maarssen, Leidsche Rijn rand, De Meern, Zeist of Nieuwegein? Neem gerust even contact op via WhatsApp. Vaak kunnen we in overleg langskomen, of je brengt ze gezellig bij ons langs.'
  }
];

export const ServicegebiedPage: React.FC<ServicegebiedPageProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik heb een vraag over het servicegebied in Utrecht!')}`;

  const [zipInput, setZipInput] = useState('');
  const [searchResult, setSearchResult] = useState<{ status: 'success' | 'warning' | 'info'; text: string } | null>(null);
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

  const handleCheckZip = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = zipInput.trim().toUpperCase().slice(0, 4);
    const num = parseInt(clean, 10);

    if (num >= 3511 && num <= 3585) {
      setSearchResult({
        status: 'success',
        text: 'Goed nieuws! Jouw postcode valt binnen onze gratis ophaalzone in Utrecht (gratis vanaf 3 messen).'
      });
    } else if ((num >= 3450 && num <= 3500) || (num >= 3586 && num <= 3600)) {
      setSearchResult({
        status: 'warning',
        text: 'Utrechtse rand / Leidsche Rijn / Maarssen: ophalen is mogelijk in overleg, of breng ze langs op afspraak!'
      });
    } else if (clean.length === 4) {
      setSearchResult({
        status: 'info',
        text: 'Buiten ons standaard Utrechtse fietsgebied. Je bent van harte welkom om je messen op afspraak bij ons langs te brengen!'
      });
    } else {
      setSearchResult({
        status: 'warning',
        text: 'Vul a.u.b. een geldige 4-cijferige postcode in (bijv. 3511 of 3572).'
      });
    }
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
              Servicegebied Utrecht · Logistiek &amp; Bereikbaarheid
            </p>
            <h1 className="mt-3 max-w-3xl font-heading text-4xl font-bold leading-[1.02] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-5xl xl:text-6xl">
              Ophalen, bezorgen &amp; langsbrengen.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Slijpmaat is gevestigd in Utrecht. Vanaf 3 messen halen we ze gratis op aan huis of in je horecakeuken. Kom je van buiten Utrecht? Dan ben je op afspraak van harte welkom!
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
                href="#postcodecheck"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#E87B5B]/20 bg-[#FCEEE8] px-7 py-3.5 text-sm font-bold text-[#C95E3E] transition-all duration-200 hover:bg-[#F8DFD6] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] sm:text-base"
              >
                <span>Check je postcode</span>
                <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
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
                src="/assets/team/teun-en-mike-met-visitekaartje.jpg"
                alt="Teun en Mike van Slijpmaat in Utrecht"
                className="h-full w-full object-cover object-[center_35%]"
              />
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 rounded-full bg-[#203728]/85 px-4 py-2 backdrop-blur-xs text-xs font-bold text-white shadow-md border border-white/10">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#4CAF50] animate-pulse" />
                <span>Gratis ophaalservice · Heel Utrecht</span>
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
              <span className="text-sm font-bold text-[#3B7F4B]">Binnen 24–48 uur retour</span>
            </div>
            <div className="flex items-center gap-3 sm:justify-center sm:px-5">
              <Bike className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
              <span className="text-sm font-bold text-[#3B7F4B]">Gratis ophalen vanaf 3 messen</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BELANGRIJKE MEDEDELING: GEEN INLOOPWINKEL */}
      <section className="relative px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-[#d9e1d7] bg-[#F7F4EC] p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#E87B5B] shadow-2xs">
              <AlertTriangle className="h-7 w-7" />
            </span>
            <div className="space-y-1">
              <h2 className="font-heading text-lg sm:text-xl font-bold text-[#3B7F4B]">
                Belangrijk: Slijpmaat heeft géén doorlopende inloopbalie
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#657068]">
                Langsbrengen en ophalen kan uitsluitend na voorafgaande afspraak via WhatsApp. Zo zorgen we dat Teun of Mike persoonlijk aanwezig is om jouw messen veilig en met volle aandacht aan te nemen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOE WERKT DE OPHAALSERVICE (Green section with organic wave dividers matching HomePage) */}
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
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E8EFE8]">Van voordeur tot vlijmscherp</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">Hoe werkt de ophaalservice?</h2>
            <p className="mt-4 text-base leading-7 text-[#E8EFE8]">
              Geen gedoe met inpakdozen of postkantoren. We halen je messen gewoon op de fiets of met de bakwagen bij je op.
            </p>
          </div>

          <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {serviceSteps.map((step, index) => (
              <li
                key={step.title}
                className="group relative rounded-[1.75rem] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F9E4DE] font-heading text-sm font-bold text-[#C95E3E]">
                    {step.number}
                  </span>
                  {index < serviceSteps.length - 1 ? (
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

      {/* 5. POSTCODECHECK & WIJKEN IN UTRECHT */}
      <section id="postcodecheck" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Dekking in Utrecht</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Postcodecheck &amp; wijken</h2>
            <p className="mt-3 text-base text-[#657068]">
              Controleer direct of jouw adres in ons gratis ophaalgebied valt.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            {/* Postcode Checker Card */}
            <div className="rounded-[2.5rem] border border-[#d9e1d7] bg-[#FAFAF8] p-7 sm:p-9 shadow-xs space-y-6 lg:col-span-5">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8EFE8] px-3 py-1 text-xs font-bold text-[#3B7F4B]">
                  <Search className="h-3.5 w-3.5" />
                  Direct controleren
                </span>
                <h3 className="mt-3 font-heading text-2xl font-bold text-[#3B7F4B]">Check jouw postcode</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#657068]">
                  Vul je 4-cijferige postcode in om te zien of we gratis bij je aan de deur komen.
                </p>
              </div>

              <form onSubmit={handleCheckZip} className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    maxLength={7}
                    placeholder="Bijv. 3511 of 3572"
                    value={zipInput}
                    onChange={(e) => setZipInput(e.target.value)}
                    className="flex-1 rounded-2xl border border-[#d9e1d7] bg-white px-4 py-3.5 font-mono text-sm uppercase text-[#244A30] placeholder-[#657068]/60 focus:border-[#3B7F4B] focus:outline-none focus:ring-2 focus:ring-[#3B7F4B]/20"
                  />
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-2xl bg-[#3B7F4B] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#315F3B] cursor-pointer"
                  >
                    <span>Check</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>

                {searchResult && (
                  <div
                    className={`rounded-2xl border p-4 text-xs font-semibold leading-relaxed transition-all ${
                      searchResult.status === 'success'
                        ? 'border-[#3B7F4B]/30 bg-[#E8EFE8] text-[#3B7F4B]'
                        : searchResult.status === 'warning'
                        ? 'border-[#E87B5B]/30 bg-[#FFF4EF] text-[#C95E3E]'
                        : 'border-[#d9e1d7] bg-white text-[#244A30]'
                    }`}
                  >
                    {searchResult.text}
                  </div>
                )}
              </form>

              <div className="space-y-3 border-t border-[#d9e1d7]/70 pt-5 text-xs text-[#657068]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#3B7F4B] shrink-0" />
                  <span className="font-medium">Gratis ophalen &amp; bezorgen vanaf 3 messen</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#3B7F4B] shrink-0" />
                  <span className="font-medium">Slechts €4,50 bezorgtarief bij 1 of 2 messen</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#3B7F4B] shrink-0" />
                  <span className="font-medium">Binnen 24–48 uur weer vlijmscherp terug</span>
                </div>
              </div>
            </div>

            {/* Utrecht Districts Grid */}
            <div className="rounded-[2.5rem] border border-[#d9e1d7] bg-white p-7 sm:p-9 shadow-xs space-y-5 lg:col-span-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Wijken &amp; Buurten</p>
                <h3 className="mt-2 font-heading text-2xl font-bold text-[#3B7F4B]">Binnen ons vaste servicegebied</h3>
                <p className="mt-2 text-sm text-[#657068]">
                  Onder andere in deze bekende Utrechtse wijken fietsen we wekelijks rond:
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {SERVICE_AREAS.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-2xl border border-[#d9e1d7]/70 bg-[#FAFAF8] p-3.5 text-xs transition-all duration-200 hover:border-[#3B7F4B]/50 hover:bg-white hover:shadow-xs"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#3B7F4B]" />
                    <div>
                      <span className="block font-heading text-sm font-bold text-[#3B7F4B]">{area.district}</span>
                      <span className="font-mono text-[11px] text-[#657068]">{area.zip}</span>
                      <span className="mt-0.5 block text-[11px] font-semibold text-[#C95E3E]">{area.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. KIES WAT BIJ JE PAST: UTRECHT OF BUITEN UTRECHT */}
      <section className="relative overflow-hidden bg-[#F7F4EC] px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Locatie &amp; Afspraak</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Woon je in Utrecht of daarbuiten?</h2>
            <p className="mt-3 text-base leading-7 text-[#657068]">Voor beide situaties hebben we een snelle, prettige oplossing.</p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7">
            {/* Binnen Utrecht Card */}
            <div className="group rounded-[2rem] border border-[#d9e1d7] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3B7F4B]/50 hover:shadow-md sm:p-8 flex flex-col justify-between">
              <div>
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8EFE8] text-[#3B7F4B] transition-transform duration-300 group-hover:scale-105">
                  <Bike className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-heading text-2xl font-bold text-[#3B7F4B]">Binnen Utrecht</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#657068] sm:text-base">
                  Vanaf 3 messen halen we ze gratis op aan huis of zaak. Binnen 24–48 uur weer vlijmscherp terugbezorgd.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#d9e1d7]/60">
                <button
                  type="button"
                  onClick={openCalculator}
                  className="inline-flex items-center gap-2 rounded-full bg-[#3B7F4B] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#315F3B] cursor-pointer"
                >
                  <span>Bereken je prijs &amp; bestel</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Buiten Utrecht Card */}
            <div className="group rounded-[2rem] border border-[#E87B5B]/35 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#E87B5B] hover:shadow-md sm:p-8 flex flex-col justify-between">
              <div>
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F9E4DE] text-[#C95E3E] transition-transform duration-300 group-hover:scale-105">
                  <MapPin className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-heading text-2xl font-bold text-[#C95E3E]">Buiten Utrecht</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#657068] sm:text-base">
                  Breng je messen op afspraak bij ons langs aan de Gerard Noodtstraat in Utrecht, of stuur ze verzekerd op per post.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E87B5B]/20">
                <button
                  type="button"
                  onClick={() => onNavigate('buiten-utrecht')}
                  className="inline-flex items-center gap-2 rounded-full bg-[#E87B5B] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#C95E3E] cursor-pointer"
                >
                  <span>Lees over service buiten Utrecht</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION SECTION (Matching HomePage) */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Veelgestelde vragen</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Vragen over ophalen &amp; bezorgen</h2>
          </div>

          <div className="space-y-3.5">
            {serviceFaqs.map((faq, index) => {
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

      {/* 8. BOTTOM CONTACT BANNER with top and bottom wave dividers (Matching HomePage) */}
      <section id="service-contact" className="relative scroll-mt-20 overflow-hidden bg-[#E87B5B] px-4 pb-24 pt-20 text-white sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
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
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.36em] text-white sm:text-sm">Vragen over ophalen?</p>
          <h2 className="mt-6 max-w-5xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Vraag het direct aan je Maat
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/95 sm:text-xl">
            Twijfel je of jouw adres binnen onze route valt? Stuur ons je postcode of straatnaam via WhatsApp en we laten het je direct weten.
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
