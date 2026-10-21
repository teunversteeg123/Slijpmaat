import React, { useState, useRef, useEffect } from 'react';
import { PageId } from '../types';
import { SERVICEGEBIED_FAQS } from '../data/siteData';
import { getDeliveryFeeCents, getDeliveryZone, isValidDutchPostcode } from '../data/delivery';
import { OrganicSectionDivider } from '../components/OrganicSectionDivider';
import { TrustBar } from '../components/TrustBar';
import { createWhatsAppUrl } from '../utils/contact';
import { formatEuroCents } from '../utils/format';
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
  Maximize2
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
    text: 'Binnen Utrecht komen we op de fiets langs aan je voordeur of horecakeuken. Voor afspraken verder weg gebruiken we de scooter.'
  },
  {
    number: '03',
    title: 'Met de hand geslepen',
    text: 'We slijpen elk mes zorgvuldig op Japanse waterstenen, stemmen de juiste steen af en stroppen af op leer.'
  },
  {
    number: '04',
    title: 'Vlijmscherp retour',
    text: 'Doorgaans brengen we je messen binnen 24-48 uur veilig verpakt terug. Betalen kan met contant, Tikkie of een betaalverzoek.'
  },
];

export const ServicegebiedPage: React.FC<ServicegebiedPageProps> = ({ onNavigate }) => {
  const whatsappUrl = createWhatsAppUrl('Hoi Teun en Mike, ik heb een vraag over het servicegebied!');

  const [zipInput, setZipInput] = useState('');
  const [searchResult, setSearchResult] = useState<{ status: 'success' | 'warning' | 'info'; text: string } | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMapOpen, setIsMapOpen] = useState(false);

  const [isPlanExpanded, setIsPlanExpanded] = useState(false);
  const planRef = useRef<HTMLDivElement>(null);
  const mapTriggerRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    if (!isMapOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMapOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      mapTriggerRef.current?.focus();
    };
  }, [isMapOpen]);

  const openCalculator = () => {
    onNavigate('particulieren');
    window.setTimeout(() => {
      document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  const handleCheckZip = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = zipInput.trim().toUpperCase();

    if (!isValidDutchPostcode(clean)) {
      setSearchResult({
        status: 'warning',
        text: 'Vul een geldige Nederlandse postcode in, bijvoorbeeld 3511 of 3511 AB.'
      });
      return;
    }

    const zone = getDeliveryZone(clean);
    const fee = getDeliveryFeeCents(clean, 0, false);

    if (zone === 'always-free') {
      setSearchResult({
        status: 'success',
        text: 'Tarief onder €35: gratis ophalen en bezorgen.'
      });
    } else if (zone === 'standard') {
      setSearchResult({
        status: 'success',
        text: `Tarief onder €35: ${formatEuroCents(fee ?? 0)} voor ophalen en bezorgen.`
      });
    } else if (zone === 'outer') {
      setSearchResult({
        status: 'success',
        text: `Tarief onder €35: ${formatEuroCents(fee ?? 0)} voor ophalen en bezorgen.`
      });
    } else {
      setSearchResult({
        status: 'info',
        text: 'Deze postcode valt buiten ons vaste bezorggebied. Vraag vervoer apart aan of breng je messen op afspraak langs in Utrecht.'
      });
    }
  };

  return (
    <div className="overflow-hidden bg-[#FAFAF8]">
      {/* 1. HERO SECTION (Over ons stijl: links tekst & CTAs, rechts foto met organische mint blob & dark pill) */}
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
            <p className="site-hero-eyebrow text-xs font-bold uppercase tracking-[0.28em] text-[#3B7F4B] sm:text-sm">
              Ons servicegebied
            </p>
            <h1 className="site-hero-title mt-3 max-w-3xl font-heading text-4xl font-bold leading-[1.02] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-5xl xl:text-6xl">
              Ophalen, bezorgen &amp; langsbrengen.
            </h1>
            <p className="site-hero-description mt-5 max-w-2xl text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Binnen Utrecht halen en bezorgen we met de fiets. Woon je verder weg? Dan kijken we of een afspraak met de scooter mogelijk is. Langsbrengen in Utrecht kan altijd op afspraak.
            </p>

            <div className="site-hero-actions mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
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

              <button
                type="button"
                onClick={() => document.getElementById('postcodecheck')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#E87B5B]/20 bg-[#FCEEE8] px-7 py-3.5 text-sm font-bold text-[#C95E3E] transition-all duration-200 hover:bg-[#F8DFD6] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] sm:text-base"
              >
                <span>Check je postcode</span>
                <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right: Utrechtse wijkkaart met indicatieve markering van het vaste servicegebied */}
          <div className="site-hero-media relative order-2 mx-auto w-full max-w-xl px-4 sm:px-6 lg:order-2 lg:px-0">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-5 -left-5 sm:-bottom-7 sm:-left-7 h-40 w-40 sm:h-52 sm:w-52 rounded-[42%_58%_62%_38%/55%_42%_58%_45%] bg-[#A9C89E] opacity-90 z-0 transition-transform duration-500 hover:scale-105"
            />
            <button
              ref={mapTriggerRef}
              type="button"
              onClick={() => setIsMapOpen(true)}
              aria-label="Vergroot de kaart van het Slijpmaat-bezorggebied"
              className="group relative z-10 block aspect-[3/2] w-full cursor-zoom-in overflow-hidden rounded-[2.5rem] border border-[#d9e1d7] bg-white text-left shadow-lg transition-shadow hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3B7F4B]"
            >
              <img
                src="/assets/kaart-utrecht-bezorggebied-statisch-hd.webp"
                alt="Statische straatkaart van Utrecht met het vaste Slijpmaat-bezorggebied en de gebieden op aanvraag"
                className="h-full w-full origin-top-left scale-110 object-cover transition-transform duration-300 group-hover:scale-[1.13]"
                fetchPriority="high"
              />
              <span className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-xs font-bold text-[#3B7F4B] shadow-md backdrop-blur-sm sm:right-4 sm:top-4">
                <Maximize2 className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">Klik om te vergroten</span>
              </span>
              <span className="absolute bottom-0 right-0 rounded-tl-xl bg-white px-3 py-2 text-[8px] font-semibold text-[#657068] shadow-sm sm:text-[9px]">
                Kaart: © OpenStreetMap · grenzen: CBS/PDOK
              </span>
            </button>
          </div>
        </div>
      </section>

      {isMapOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Vergrote kaart van het Slijpmaat-bezorggebied"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsMapOpen(false);
          }}
          className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-[#203728]/90 p-3 backdrop-blur-sm sm:p-6"
        >
          <div className="relative w-full max-w-6xl cursor-default">
            <button
              type="button"
              onClick={() => setIsMapOpen(false)}
              autoFocus
              aria-label="Sluit de vergrote kaart"
              className="absolute -top-2 right-0 z-10 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#244A30] shadow-lg transition-colors hover:bg-[#E8EFE8] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white sm:-top-4 sm:right-2"
            >
              <X className="h-5 w-5" aria-hidden="true" />
              Sluiten
            </button>

            <div className="mt-10 overflow-hidden rounded-2xl border border-white/30 bg-white shadow-2xl sm:mt-8 sm:rounded-[2rem]">
              <img
                src="/assets/kaart-utrecht-bezorggebied-statisch-hd.webp"
                alt="Vergrote straatkaart van Utrecht met het vaste Slijpmaat-bezorggebied en de gebieden op aanvraag"
                className="max-h-[82vh] w-full object-contain"
              />
            </div>
            <p className="mt-3 text-center text-xs font-medium text-white/90 sm:text-sm">
              Klik naast de kaart of druk op Escape om te sluiten.
            </p>
          </div>
        </div>
      )}

      <TrustBar
        items={[
          { icon: <Clock3 className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />, text: 'Doorgaans binnen 24-48 uur retour' },
          { icon: <Bike className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />, text: 'Ophalen & bezorgen binnen Utrecht' },
        ]}
      />

      {/* 3. BELANGRIJKE MEDEDELING: GEEN INLOOPWINKEL */}
      <section className="relative px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-[#d9e1d7] bg-[#F7F4EC] p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#E87B5B] shadow-2xs">
              <AlertTriangle className="h-7 w-7" />
            </span>
            <div className="space-y-1">
              <h2 className="font-heading text-lg sm:text-xl font-bold text-[#3B7F4B]">
                Belangrijk: Wij werken vanuit huis: langskomen kan alleen op afspraak
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#657068]">
                Slijpmaat heeft géén openbare inloopbalie of winkel. Omdat wij vanuit huis werken, kan het langsbrengen en ophalen van messen uitsluitend na voorafgaande afspraak via WhatsApp. Zo zorgen we dat Teun of Mike persoonlijk aanwezig is om jouw messen veilig en met volle aandacht aan te nemen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. POSTCODECHECK IN UTRECHT */}
      <section id="postcodecheck" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Dekking in Utrecht</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Postcodecheck &amp; bezorgtarieven</h2>
          </div>

          <div className="min-w-0 space-y-6">
            <div className="min-w-0 rounded-[2.25rem] border border-[#d9e1d7] bg-[#FAFAF8] p-5 shadow-xs sm:p-7">
              <div className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8EFE8] px-3 py-1 text-xs font-bold text-[#3B7F4B]">
                    <Search className="h-3.5 w-3.5" />
                    Postcodechecker
                  </span>
                  <h3 className="mt-3 font-heading text-2xl font-bold text-[#3B7F4B]">Wat betaal je onder €35?</h3>
                </div>

                <form onSubmit={handleCheckZip} className="min-w-0 space-y-3">
                  <div className="flex min-w-0 flex-col gap-2 sm:flex-row">
                    <label htmlFor="service-postcode" className="sr-only">Postcode</label>
                    <input
                      id="service-postcode"
                      type="text"
                      inputMode="text"
                      autoComplete="postal-code"
                      maxLength={7}
                      placeholder="Bijv. 3511 of 3511 AB"
                      value={zipInput}
                      onChange={(e) => setZipInput(e.target.value)}
                      className="min-w-0 w-full flex-1 rounded-2xl border border-[#d9e1d7] bg-white px-4 py-3.5 font-mono text-base uppercase text-[#244A30] placeholder-[#657068]/60 focus:border-[#3B7F4B] focus:outline-none focus:ring-2 focus:ring-[#3B7F4B]/20"
                    />
                    <button
                      type="submit"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#3B7F4B] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#315F3B] cursor-pointer sm:w-auto"
                    >
                      <span>Controleer tarief</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>

                  {searchResult && (
                    <div
                      aria-live="polite"
                      className={`rounded-2xl border p-4 text-sm font-semibold leading-relaxed transition-all ${
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
              </div>
            </div>

            <div className="flex flex-col items-start justify-between gap-4 rounded-[2rem] bg-[#E8EFE8] px-5 py-5 sm:flex-row sm:items-center sm:px-7">
              <p className="max-w-2xl text-sm font-medium leading-6 text-[#3B7F4B]">
                Weet je jouw tarief? Bereken daarna je volledige bestelling met messen, eventuele reparaties en bezorgkosten.
              </p>
              <button
                type="button"
                onClick={openCalculator}
                className="group inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#3B7F4B] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#315F3B] sm:w-auto"
              >
                <span>Bereken je prijs &amp; bestel</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. KIES WAT BIJ JE PAST: UTRECHT OF BUITEN UTRECHT */}
      <section className="relative overflow-hidden bg-[#F7F4EC] px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Locatie &amp; Afspraak</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Woon je in Utrecht of daarbuiten?</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7">
            <div className="group rounded-[2rem] border border-[#d9e1d7] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3B7F4B]/50 hover:shadow-md sm:p-8 flex flex-col justify-between">
              <div>
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8EFE8] text-[#3B7F4B] transition-transform duration-300 group-hover:scale-105">
                  <Bike className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-heading text-2xl font-bold text-[#3B7F4B]">Binnen Utrecht</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#657068] sm:text-base">
                  Controleer hierboven je postcode en tarief. Daarna kun je direct je volledige bestelling berekenen en plannen.
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

            <div className="group rounded-[2rem] border border-[#E87B5B]/35 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#E87B5B] hover:shadow-md sm:p-8 flex flex-col justify-between">
              <div>
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F9E4DE] text-[#C95E3E] transition-transform duration-300 group-hover:scale-105">
                  <MapPin className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-heading text-2xl font-bold text-[#C95E3E]">Buiten Utrecht</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#657068] sm:text-base">
                  We bekijken per aanvraag of ophalen en bezorgen met de scooter mogelijk is. Je kunt je messen ook op afspraak bij ons langsbrengen in Utrecht.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E87B5B]/20">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#E87B5B] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#C95E3E] cursor-pointer"
                >
                  <span>Bespreek je locatie</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OrganicSectionDivider fromColor="#FAFAF8" middleColor="#E8EFE8" toColor="#3B7F4B" variant="scalloped" />

      {/* 6. HOE WERKT DE OPHAALSERVICE (Green section with organic wave dividers matching HomePage) */}
      <section className="relative overflow-hidden bg-[#3B7F4B] px-4 pb-28 pt-20 sm:px-6 sm:pb-36 sm:pt-24 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E8EFE8]">Van voordeur tot vlijmscherp</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">Hoe werkt de ophaalservice?</h2>
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

      <OrganicSectionDivider fromColor="#3B7F4B" middleColor="#A9C89E" toColor="#FFFFFF" variant="rolling" mirror />

      {/* 7. FAQ ACCORDION SECTION (Matching HomePage) */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Veelgestelde vragen</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Vragen over ophalen &amp; bezorgen</h2>
          </div>

          <div className="space-y-3.5">
            {SERVICEGEBIED_FAQS.map((faq, index) => {
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
                    aria-controls={`servicegebied-faq-${index}`}
                  >
                    <span>{faq.q}</span>
                    <span className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#3B7F4B] shadow-2xs transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
                      <Plus className="h-5 w-5" />
                    </span>
                  </button>
                    <div
                      id={`servicegebied-faq-${index}`}
                      hidden={!isOpen}
                      className="border-t border-[#d9e1d7]/60 px-5 pb-6 pt-3 sm:px-6"
                    >
                      <p className="text-sm leading-relaxed text-[#657068] sm:text-base">
                        {faq.a}
                      </p>
                    </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <OrganicSectionDivider fromColor="#FFFFFF" middleColor="#F9E4DE" toColor="#E87B5B" variant="calm" />

      {/* 8. BOTTOM CONTACT BANNER with top and bottom wave dividers (Matching HomePage) */}
      <section id="service-contact" className="relative scroll-mt-20 overflow-hidden bg-[#E87B5B] px-4 pb-24 pt-20 text-white sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
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

      <OrganicSectionDivider fromColor="#E87B5B" middleColor="#F9E4DE" toColor="#FFFFFF" variant="scalloped" mirror />
    </div>
  );
};
