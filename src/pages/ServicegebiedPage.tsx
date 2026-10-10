import React, { useState, useRef, useEffect } from 'react';
import { PageId } from '../types';
import { SLIJPMAAT_INFO, SERVICE_AREAS } from '../data/siteData';
import {
  getDeliveryFeeCents,
  getDeliveryZone,
} from '../data/delivery';
import { GoogleIcon, GOOGLE_REVIEW_COUNT } from '../components/GoogleReviewsSection';
import { OrganicSectionDivider } from '../components/OrganicSectionDivider';
import {
  MapPin,
  Clock3,
  CheckCircle2,
  AlertTriangle,
  Search,
  MessageCircle,
  ArrowRight,
  ArrowDown,
  Bike,
  Utensils,
  Building2,
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
    text: 'Bereken je prijs en plan een haal- en brengmoment binnen Utrecht dat bij je past.'
  },
  {
    number: '02',
    title: 'Wij halen ze op',
    text: 'Binnen Utrecht komen we op de fiets langs aan je voordeur of horecakeuken.'
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
    q: 'Vanaf welke bestelwaarde is ophalen en bezorgen gratis?',
    a: 'Vanaf €35 bestelwaarde halen we jouw messen gratis op én brengen we ze gratis terug binnen Utrecht. Onder €35 hangt het tarief af van je postcode; controleer dit eenvoudig met de postcodecheck op deze pagina.'
  },
  {
    q: 'Hoe geef ik mijn messen veilig mee aan de deur?',
    a: 'We vervoeren je messen binnen Utrecht in stevige Slijpmaat-vervoerstassen en mesbeschermers. Wikkel je messen thuis bij voorkeur in een theedoek of handdoek met een elastiek eromheen. Zo blijven je messen en onze vingers heel!'
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
    q: 'Kan ik vanuit heel Nederland mijn messen komen brengen?',
    a: 'Ja. Vanuit heel Nederland kun je op afspraak je gladde keukenmessen in Utrecht brengen en later weer ophalen. Buiten het ondersteunde Utrechtse bezorggebied halen en bezorgen we niet standaard. Stem daarom vooraf via WhatsApp een geschikt breng- en ophaalmoment af.'
  },
  {
    q: 'Kunnen horecaklanten van buiten Utrecht ook een afspraak maken?',
    a: 'Ja. Restaurants, chefs en andere zakelijke klanten uit heel Nederland kunnen op afspraak messen of een messenrol in Utrecht afleveren en ophalen. Geef vooraf het aantal, de soorten messen, eventuele schade en de gewenste planning door, dan maken we een passend voorstel.'
  }
];

const serviceFaqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: serviceFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

const formatEuro = (cents: number) => `€${(cents / 100).toFixed(2).replace('.', ',')}`;

export const ServicegebiedPage: React.FC<ServicegebiedPageProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik wil graag een afspraak maken om mijn messen in Utrecht te brengen en later op te halen.')}`;
  const privateAppointmentWhatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik wil graag als particulier een afspraak maken om mijn messen in Utrecht te brengen en later op te halen.')}`;
  const businessAppointmentWhatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik wil graag een zakelijke afspraak maken om messen in Utrecht te brengen en later op te halen. Kunnen we het aantal messen, de timing en de afspraak afstemmen?')}`;

  const [zipInput, setZipInput] = useState('');
  const [searchResult, setSearchResult] = useState<{
    status: 'success' | 'warning' | 'info';
    text: string;
    outsideArea?: boolean;
  } | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMapOpen, setIsMapOpen] = useState(false);

  const [isPlanExpanded, setIsPlanExpanded] = useState(false);
  const planRef = useRef<HTMLDivElement>(null);
  const mapTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const structuredData = document.createElement('script');
    structuredData.id = 'servicegebied-faq-jsonld';
    structuredData.type = 'application/ld+json';
    structuredData.text = JSON.stringify(serviceFaqStructuredData);
    document.head.appendChild(structuredData);
    return () => structuredData.remove();
  }, []);

  useEffect(() => {
    if (window.location.hash !== '#langskomen-van-buiten-utrecht') return;
    window.requestAnimationFrame(() => {
      document.getElementById('langskomen-van-buiten-utrecht')?.scrollIntoView({ block: 'start' });
    });
  }, []);

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
    const clean = zipInput.trim().toUpperCase().slice(0, 4);
    if (!/^[1-9][0-9]{3}$/.test(clean)) {
      setSearchResult({
        status: 'warning',
        text: 'Vul een geldige 4-cijferige postcode in, bijvoorbeeld 3511 of 3572.'
      });
      return;
    }

    const deliveryZone = getDeliveryZone(clean);
    if (deliveryZone === 'outside') {
      setSearchResult({
        status: 'info',
        text: 'Deze postcode ligt buiten ons ondersteunde Utrechtse bezorggebied. Daarom tonen we geen bezorgprijs. Je kunt vanuit heel Nederland op afspraak je messen in Utrecht brengen en later ophalen.',
        outsideArea: true,
      });
      return;
    }

    const deliveryFeeCents = getDeliveryFeeCents(clean, 0, false);

    if (deliveryFeeCents === 0) {
      setSearchResult({
        status: 'success',
        text: `Voor postcode ${clean} is ophalen en bezorgen ook onder €35 gratis. Vanaf €35 bestelwaarde is dit in heel ons Utrechtse servicegebied gratis.`
      });
    } else if (deliveryFeeCents !== null) {
      setSearchResult({
        status: 'success',
        text: `Voor postcode ${clean} kost ophalen en bezorgen onder €35 precies ${formatEuro(deliveryFeeCents)}. Vanaf €35 bestelwaarde is dit gratis.`
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
              Bezorgen in Utrecht · Langskomen vanuit heel Nederland
            </p>
            <h1 className="mt-3 max-w-3xl font-heading text-4xl font-bold leading-[1.02] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-5xl xl:text-6xl">
              Messen slijpen in Utrecht: laten ophalen of zelf langskomen
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Binnen Utrecht halen en bezorgen we volgens onze vaste postcode- en tariefregels. Liever zelf langskomen? Iedereen kan op afspraak keukenmessen of horecamessen in Utrecht brengen en later ophalen.
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
                href="#langskomen-van-buiten-utrecht"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#E87B5B]/20 bg-[#FCEEE8] px-7 py-3.5 text-sm font-bold text-[#C95E3E] transition-all duration-200 hover:bg-[#F8DFD6] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] sm:text-base"
              >
                <span>Kom op afspraak langs</span>
                <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right: Utrechtse wijkkaart met indicatieve markering van het vaste servicegebied */}
          <div className="order-2 w-full lg:order-2 px-4 sm:px-6 lg:px-0 relative">
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
                src="/assets/kaart-utrecht-bezorggebied-statisch-hd.png"
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
                src="/assets/kaart-utrecht-bezorggebied-statisch-hd.png"
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

      <OrganicSectionDivider fromColor="#FAFAF8" middleColor="#E8EFE8" toColor="#FFFFFF" variant="calm" />

      {/* 2. POSTCODECHECK & WIJKEN IN UTRECHT */}
      <section id="postcodecheck" className="scroll-mt-24 overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Dekking in Utrecht</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Postcodecheck &amp; wijken</h2>
            <p className="mt-3 text-base text-[#657068]">
              Vul je Utrechtse postcode in. Je ziet direct welk bevestigd tarief onder €35 geldt; vanaf €35 bestelwaarde is ophalen en bezorgen gratis.
            </p>
          </div>

          <div className="grid min-w-0 gap-5 sm:gap-8 lg:grid-cols-12 lg:items-start">
            <div className="min-w-0 space-y-5 rounded-[2rem] border border-[#d9e1d7] bg-[#FAFAF8] p-5 shadow-xs sm:space-y-6 sm:rounded-[2.5rem] sm:p-9 lg:col-span-5">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8EFE8] px-3 py-1 text-xs font-bold text-[#3B7F4B]">
                  <Search className="h-3.5 w-3.5" />
                  Direct controleren
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold leading-tight text-[#3B7F4B] sm:text-2xl">Check jouw postcode</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#657068]">
                  Vanaf €35 bestelwaarde komen we binnen Utrecht gratis langs. Daaronder rekent de checker met je postcodezone.
                </p>
              </div>

              <form onSubmit={handleCheckZip} className="space-y-3">
                <div className="grid min-w-0 gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
                  <div className="min-w-0">
                    <label htmlFor="service-postcode" className="mb-1.5 block text-xs font-bold text-[#244A30]">Postcode</label>
                    <input
                      id="service-postcode"
                      type="text"
                      inputMode="numeric"
                      maxLength={7}
                      placeholder="Bijv. 3511"
                      value={zipInput}
                      onChange={(e) => setZipInput(e.target.value)}
                      className="min-h-12 w-full min-w-0 rounded-2xl border border-[#d9e1d7] bg-white px-4 py-3.5 font-mono text-sm uppercase text-[#244A30] placeholder-[#657068]/60 focus:border-[#3B7F4B] focus:outline-none focus:ring-2 focus:ring-[#3B7F4B]/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#3B7F4B] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#315F3B] sm:w-auto cursor-pointer"
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
                    {searchResult.outsideArea && (
                      <a
                        href="#langskomen-van-buiten-utrecht"
                        className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#E87B5B] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-[#C95E3E]"
                      >
                        Kom op afspraak langs
                        <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                )}
              </form>

              <div className="space-y-3 border-t border-[#d9e1d7]/70 pt-5 text-xs leading-5 text-[#657068]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#3B7F4B] shrink-0" />
                  <span className="min-w-0 font-medium">Gratis ophalen &amp; bezorgen vanaf €35 bestelwaarde</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#3B7F4B] shrink-0" />
                  <span className="min-w-0 font-medium">Tarief onder €35 hangt af van je postcode</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#3B7F4B] shrink-0" />
                  <span className="min-w-0 font-medium">Binnen 24–48 uur weer vlijmscherp terug</span>
                </div>
              </div>
            </div>

            <div className="min-w-0 space-y-5 rounded-[2rem] border border-[#d9e1d7] bg-white p-5 shadow-xs sm:rounded-[2.5rem] sm:p-9 lg:col-span-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Wijken &amp; Buurten</p>
                <h3 className="mt-2 font-heading text-xl font-bold leading-tight text-[#3B7F4B] sm:text-2xl">Binnen ons vaste servicegebied</h3>
                <p className="mt-2 text-sm leading-6 text-[#657068]">
                  Onder andere in deze bekende Utrechtse wijken fietsen we wekelijks rond:
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {SERVICE_AREAS.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex min-w-0 items-start gap-3 rounded-2xl border border-[#d9e1d7]/70 bg-[#FAFAF8] p-4 text-xs transition-all duration-200 hover:border-[#3B7F4B]/50 hover:bg-white hover:shadow-xs"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#E8EFE8] text-[#3B7F4B]">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <span className="block break-words font-heading text-sm font-bold leading-5 text-[#3B7F4B]">{area.district}</span>
                      <span className="mt-0.5 block break-words font-mono text-[11px] leading-4 text-[#657068]">{area.zip}</span>
                      <span className="mt-1 block break-words text-[11px] font-semibold leading-4 text-[#C95E3E]">{area.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <OrganicSectionDivider fromColor="#FFFFFF" middleColor="#F9E4DE" toColor="#F7F4EC" variant="scalloped" mirror />

      {/* 3. LANGSKOMEN OP AFSPRAAK */}
      <section id="langskomen-van-buiten-utrecht" className="relative scroll-mt-24 overflow-hidden bg-[#F7F4EC] px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 max-w-4xl sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Langskomen op afspraak</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Breng je messen langs en maak er een rondje Utrecht van</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-[#657068] sm:text-lg">
              Of je nu uit Utrecht komt of van verder weg: je bent welkom om je messen op afspraak bij ons af te geven. Plan vooraf via WhatsApp, dan stemmen we het brengmoment én het moment waarop je messen gereed zijn duidelijk met je af.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] border border-[#d9e1d7] bg-white shadow-sm">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-[#3B7F4B] p-7 text-white sm:p-10 lg:p-12">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white">
                  <MapPin className="h-8 w-8" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-heading text-2xl font-bold sm:text-3xl">Jouw afspraak, helder afgestemd</h3>
                <p className="mt-3 text-base leading-7 text-white/90">
                  Geef je messen af, ga tussendoor de stad in en kom terug op het vooraf afgesproken moment. De gereedtijd stemmen we vooraf via WhatsApp met je af.
                </p>
                <p className="mt-6 rounded-2xl bg-white/10 p-4 text-sm font-semibold leading-6 text-white/90">
                  Particulier én zakelijk welkom. Kies hieronder de route die bij je past; beide openen WhatsApp met een passend conceptbericht.
                </p>
                <p className="mt-4 text-xs leading-5 text-white/75">Geen vrije inloop: we spreken je breng- en gereedmoment altijd vooraf af.</p>
              </div>

              <div className="p-7 sm:p-10 lg:p-12">
                <ol className="space-y-6">
                  {[
                    ['1', 'Stuur vooraf een bericht', 'Vertel hoeveel messen je wilt laten slijpen en wanneer je wilt langskomen.'],
                    ['2', 'Geef je messen af in Utrecht', 'Na de persoonlijke overdracht kun je rustig koffie drinken, winkelen of de stad in.'],
                    ['3', 'Kom op het afgesproken moment terug', 'Je haalt je messen weer op zodra ze volgens de vooraf afgestemde planning gereed zijn.'],
                  ].map(([number, title, text]) => (
                    <li key={number} className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F9E4DE] font-heading text-sm font-bold text-[#C95E3E]">{number}</span>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-[#3B7F4B]">{title}</h3>
                        <p className="mt-1 text-sm leading-6 text-[#657068] sm:text-base">{text}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 rounded-2xl border border-[#E87B5B]/25 bg-[#FCEEE8] p-5">
                  <p className="font-heading text-base font-bold text-[#C95E3E]">Kom je met een grotere horeca-opdracht?</p>
                  <p className="mt-1 text-sm leading-6 text-[#657068]">
                    Stuur eerst een bericht. Dan stemmen we het aantal messen, eventuele schade, de timing en de afspraak goed met elkaar af.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#d9e1d7] bg-[#FAFAF8] p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Kies jouw afspraakroute</p>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <a
                  href={privateAppointmentWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid items-center gap-5 rounded-[2rem] border border-[#d9e1d7] bg-white p-6 text-left shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3B7F4B]/50 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] sm:grid-cols-[auto_1fr] sm:p-8"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8EFE8] text-[#3B7F4B] transition-transform duration-300 group-hover:scale-105">
                    <Utensils className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-heading text-2xl font-bold text-[#3B7F4B]">Particulier</span>
                    <span className="mt-2 block text-sm leading-relaxed text-[#657068] sm:text-base">Plan via WhatsApp wanneer je jouw keukenmessen in Utrecht komt brengen en ophalen.</span>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#3B7F4B]">
                      Plan particuliere afspraak <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" aria-hidden="true" />
                    </span>
                  </span>
                </a>

                <a
                  href={businessAppointmentWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid items-center gap-5 rounded-[2rem] border border-[#E87B5B]/35 bg-white p-6 text-left shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#E87B5B] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#C95E3E] sm:grid-cols-[auto_1fr] sm:p-8"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F9E4DE] text-[#C95E3E] transition-transform duration-300 group-hover:scale-105">
                    <Building2 className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-heading text-2xl font-bold text-[#C95E3E]">Zakelijk</span>
                    <span className="mt-2 block text-sm leading-relaxed text-[#657068] sm:text-base">Stem eerst het aantal messen, de timing en jouw afspraak in Utrecht met ons af.</span>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#C95E3E]">
                      Plan zakelijke afspraak <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" aria-hidden="true" />
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OrganicSectionDivider fromColor="#F7F4EC" middleColor="#E8EFE8" toColor="#FAFAF8" variant="rolling" />

      {/* 4. TRUST BAR (Zekerheden floating pill) */}
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
              <span className="text-sm font-bold text-[#3B7F4B]">Gratis ophalen &amp; bezorgen vanaf €35</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BELANGRIJKE MEDEDELING: GEEN INLOOPWINKEL */}
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

      <OrganicSectionDivider fromColor="#FAFAF8" middleColor="#A9C89E" toColor="#3B7F4B" variant="calm" mirror />

      {/* 6. HOE WERKT DE OPHAALSERVICE (Green section with organic wave dividers matching HomePage) */}
      <section className="relative overflow-hidden bg-[#3B7F4B] px-4 pb-28 pt-20 sm:px-6 sm:pb-36 sm:pt-24 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E8EFE8]">Van voordeur tot vlijmscherp</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">Hoe werkt ophalen en bezorgen binnen Utrecht?</h2>
            <p className="mt-4 text-base leading-7 text-[#E8EFE8]">
              Geen gedoe met inpakdozen of postkantoren. Binnen het ondersteunde Utrechtse servicegebied halen we je messen op met de fiets en brengen we ze na het slijpen terug.
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

      <OrganicSectionDivider fromColor="#3B7F4B" middleColor="#A9C89E" toColor="#FFFFFF" variant="scalloped" />

      {/* 7. FAQ ACCORDION SECTION (Matching HomePage) */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Veelgestelde vragen</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Vragen over bezorgen en langskomen</h2>
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

      <OrganicSectionDivider fromColor="#FFFFFF" middleColor="#F9E4DE" toColor="#E87B5B" variant="rolling" mirror />

      {/* 8. BOTTOM CONTACT BANNER with top and bottom wave dividers (Matching HomePage) */}
      <section id="service-contact" className="relative scroll-mt-20 overflow-hidden bg-[#E87B5B] px-4 pb-24 pt-20 text-white sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.36em] text-white sm:text-sm">Langskomen op afspraak</p>
          <h2 className="mt-6 max-w-5xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Plan je breng- en ophaalmoment
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/95 sm:text-xl">
            Vanuit heel Nederland kun je op afspraak naar Utrecht komen. Voor horeca stemmen we aantallen, planning en eventuele reparaties vooraf duidelijk af.
          </p>

          <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[72px] items-center justify-between gap-4 rounded-full bg-white px-7 py-4 font-heading text-lg font-bold text-[#3B7F4B] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFF7F3] hover:shadow-lg sm:px-10 sm:text-xl"
            >
              <span>Plan via WhatsApp</span>
              <MessageCircle className="h-8 w-8 shrink-0 text-[#3B7F4B] transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => onNavigate('horeca')}
              className="group inline-flex min-h-[72px] items-center justify-between gap-4 rounded-full bg-white px-7 py-4 font-heading text-lg font-bold text-[#3B7F4B] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFF7F3] hover:shadow-lg sm:px-10 sm:text-xl"
            >
              <span>Naar zakelijke aanvraag</span>
              <ArrowRight className="h-8 w-8 shrink-0 text-[#3B7F4B] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      <OrganicSectionDivider fromColor="#E87B5B" middleColor="#F9E4DE" toColor="#FFFFFF" variant="calm" />
    </div>
  );
};
