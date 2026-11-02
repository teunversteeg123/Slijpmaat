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
    text: 'We slijpen elk mes zorgvuldig op Japanse slijpstenen, stemmen de juiste Japanse slijpsteen af en stroppen af op leer.'
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
  const [scooterReady, setScooterReady] = useState(false);
  const [mapImage, setMapImage] = useState('/assets/servicegebied-utrecht-overzicht.svg');
  const [mapZoomed, setMapZoomed] = useState(false);
  const mapDialogRef = useRef<HTMLDialogElement>(null);

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
    mapDialogRef.current?.showModal();
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      mapDialogRef.current?.close();
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
      <section className="site-hero site-hero-servicegebied relative overflow-hidden bg-[#FAFAF8] pb-4 pt-2 sm:pb-8 sm:pt-4 lg:min-h-[580px] lg:pb-12">
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
            <h1 className="site-hero-title max-w-3xl font-heading text-4xl font-bold leading-[1.02] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-5xl xl:text-6xl">
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

          {/* Aangeleverde scooterillustratie, volledig en zonder uitsnede. */}
          <div className="site-hero-media relative order-2 mx-auto w-full max-w-xl px-4 sm:px-6 lg:order-2 lg:px-0">
            <img src="/assets/slijpmaat-scooter.png" alt="Slijpmaat-bezorger op een groene scooter met een Slijpmaat-bezorgbox" width="1254" height="1254" fetchPriority="high" onLoad={() => setScooterReady(true)} data-loaded={scooterReady} className="service-scooter-enter relative mx-auto block h-auto w-full max-w-[22rem] object-contain sm:max-w-[26rem] lg:max-w-full" />
          </div>
        </div>
      </section>

      {isMapOpen && (
        <dialog
          ref={mapDialogRef}
          aria-modal="true"
          aria-label="Vergrote kaart van het Slijpmaat-bezorggebied"
          onCancel={() => setIsMapOpen(false)}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsMapOpen(false);
          }}
          className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-[#203728] p-0 text-white backdrop:bg-[#203728]"
        >
          <div className="absolute right-3 top-3 z-10 flex gap-2 sm:right-6 sm:top-6">
            <button type="button" onClick={() => setMapZoomed(value => !value)} aria-pressed={mapZoomed} className="min-h-11 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#244A30] shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              {mapZoomed ? 'Hele kaart' : 'Inzoomen'}
            </button>
            <button
              type="button"
              onClick={() => setIsMapOpen(false)}
              autoFocus
              aria-label="Sluit de vergrote kaart"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#244A30] shadow-lg transition-colors hover:bg-[#E8EFE8] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
              Sluiten
            </button>
          </div>
            <div className="h-full w-full overflow-auto pt-16 pb-8" tabIndex={0} aria-label="Kaartweergave, scroll bij ingezoomde kaart">
              <img
                src={mapImage}
                alt="Vergrote straatkaart van Utrecht met het vaste Slijpmaat-bezorggebied en de gebieden op aanvraag"
                className={mapZoomed ? 'block w-[max(150vw,1100px)] max-w-none' : 'h-full w-full object-contain'}
              />
            </div>
        </dialog>
      )}

      <TrustBar
        items={[
          { icon: <Clock3 className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />, text: 'Doorgaans binnen 24-48 uur retour' },
          { icon: <Bike className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />, text: 'Ophalen & bezorgen binnen Utrecht' },
        ]}
      />

      {/* Persoonlijk langskomen, met een vooraf afgesproken moment. */}
      <section className="relative px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-[#d9e1d7] bg-[#E8EFE8] p-6 sm:p-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#3B7F4B]">
              <MapPin className="h-7 w-7" aria-hidden="true" />
            </span>
            <div className="space-y-1">
              <h2 className="font-heading text-lg sm:text-xl font-bold text-[#3B7F4B]">
                Langskomen kan alleen op afspraak
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#657068]">
                We werken vanuit huis. Bel of WhatsApp ons daarom even voordat je je messen komt brengen of ophalen. Samen spreken we een moment af, zodat Teun of Mike voor je klaarstaat.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#3B7F4B] px-5 py-3 text-sm font-bold text-white hover:bg-[#315F3B]"><MessageCircle className="h-4 w-4" aria-hidden="true" />Spreek een moment af</a>
                <a href="tel:+31682074967" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#3B7F4B] bg-white px-5 py-3 text-sm font-bold text-[#3B7F4B]"><Phone className="h-4 w-4" aria-hidden="true" />Bel je Maat</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="servicekaart-titel" className="bg-white py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 id="servicekaart-titel" className="font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Ons servicegebied, in één oogopslag</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#657068]">Groen is ons vaste bezorggebied. In de lichtgroene gebieden kijken we samen wat mogelijk is. Controleer hieronder je postcode voor jouw bezorgtarief.</p>
        </div>
        <figure className="mx-auto mt-7 max-w-7xl sm:px-6 lg:px-8">
          <button type="button" onClick={(event) => { mapTriggerRef.current = event.currentTarget; setMapImage('/assets/servicegebied-utrecht-overzicht.svg'); setMapZoomed(false); setIsMapOpen(true); }} aria-label="Open de grote servicegebiedkaart op volledig scherm" className="group relative block w-full cursor-zoom-in overflow-hidden bg-[#E8EFE8] sm:rounded-[2rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3B7F4B]">
            <img src="/assets/servicegebied-utrecht-overzicht.svg" alt="Servicegebied rond Utrecht: vaste postcodes in groen; Vleuten, De Meern, Maarssen, De Bilt, Nieuwegein en Houten lichtgroen op aanvraag. Overige gebieden behouden hun kaartkleur." width="1800" height="1100" loading="lazy" className="block h-auto w-full" />
            <span className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-bold text-[#3B7F4B] shadow-sm sm:right-5 sm:top-5"><Maximize2 className="h-4 w-4" aria-hidden="true" />Vergroot de kaart</span>
          </button>
          <figcaption className="px-5 pt-3 text-sm leading-relaxed text-[#657068] sm:px-0">De kaart is een overzicht; de postcodecheck is leidend. Kaart: <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="underline">© OpenStreetMap-bijdragers</a> · grenzen: CBS/PDOK 2024.</figcaption>
        </figure>
      </section>

      {/* 4. POSTCODECHECK IN UTRECHT */}
      <section id="postcodecheck" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl sm:mb-10">
            <h2 className="font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Postcodecheck &amp; bezorgtarieven</h2>
          </div>

          <div className="min-w-0 space-y-6">
            <div className="min-w-0 rounded-[2.25rem] border border-[#d9e1d7] bg-[#FAFAF8] p-5 shadow-xs sm:p-7">
              <form onSubmit={handleCheckZip} className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8EFE8] px-3 py-1 text-xs font-bold text-[#3B7F4B]">
                    <Search className="h-3.5 w-3.5" />
                    Postcodechecker
                  </span>
                  <h3 className="mt-3 font-heading text-2xl font-bold text-[#3B7F4B]">Wat betaal je onder €35?</h3>
                </div>

                <div className="min-w-0">
                  <label htmlFor="service-postcode" className="mb-2 block text-sm font-semibold text-[#244A30]">Jouw postcode</label>
                  <div className="flex min-w-0 flex-col gap-3 sm:flex-row">
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
                      className="group inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#3B7F4B] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#315F3B] cursor-pointer sm:w-auto"
                    >
                      <span>Controleer tarief</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
                  {searchResult && (
                    <div
                      aria-live="polite"
                      className={`rounded-2xl border p-4 text-sm font-semibold leading-relaxed lg:col-span-2 ${
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
        </div>
      </section>

      <OrganicSectionDivider fromColor="#FFFFFF" middleColor="#E8EFE8" toColor="#3B7F4B" variant="scalloped" />

      {/* 6. HOE WERKT DE OPHAALSERVICE (Green section with organic wave dividers matching HomePage) */}
      <section className="relative overflow-hidden bg-[#3B7F4B] px-4 pb-28 pt-20 sm:px-6 sm:pb-36 sm:pt-24 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">Hoe werkt de ophaalservice?</h2>
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
            <h2 className="font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Vragen over ophalen &amp; bezorgen</h2>
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
          <h2 className="max-w-5xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
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
