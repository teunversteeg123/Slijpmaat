import React, { useState } from 'react';
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
  Phone,
  Bike
} from 'lucide-react';

interface ServicegebiedPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicegebiedPage: React.FC<ServicegebiedPageProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik heb een vraag over het servicegebied in Utrecht!')}`;

  const [zipInput, setZipInput] = useState('');
  const [searchResult, setSearchResult] = useState<string | null>(null);

  const handleCheckZip = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = zipInput.trim().toUpperCase().slice(0, 4);
    const num = parseInt(clean, 10);

    if (num >= 3511 && num <= 3585) {
      setSearchResult('Binnen het gratis servicegebied in Utrecht! Vanaf 3 messen gratis ophalen & bezorgen.');
    } else if ((num >= 3450 && num <= 3500) || (num >= 3586 && num <= 3600)) {
      setSearchResult('Utrechtse rand / Leidsche Rijn / Maarssen: ophalen in overleg of breng ze langs op afspraak.');
    } else if (clean.length === 4) {
      setSearchResult('Buiten het Utrechtse ophaalgebied. Je bent van harte welkom om je messen op afspraak bij ons in Utrecht langs te brengen!');
    } else {
      setSearchResult('Vul a.u.b. een geldige 4-cijferige postcode in.');
    }
  };

  return (
    <div className="overflow-hidden bg-[#FAFAF8]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#FAFAF8] pb-8 pt-4 sm:pb-12 sm:pt-6 lg:pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-16 h-[340px] w-[340px] rounded-full bg-[#E3EFE5] opacity-80 blur-2xl sm:h-[480px] sm:w-[480px] sm:blur-3xl lg:-right-10 lg:top-2 lg:h-[560px] lg:w-[560px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#3B7F4B] sm:text-sm">
              Logistiek &amp; Bereikbaarheid
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-6xl">
              Ophalen, bezorgen &amp; langsbrengen.
            </h1>
            <p className="mt-5 text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Slijpmaat is gevestigd in Utrecht. Vanaf 3 messen halen we ze gratis op aan huis of in je horecakeuken. Kom je van buiten Utrecht? Dan ben je van harte welkom op afspraak!
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href="#postcodecheck"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] active:scale-[0.98] sm:text-base cursor-pointer"
              >
                <span>Check je postcode</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => onNavigate('buiten-utrecht')}
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#E87B5B]/20 bg-[#FCEEE8] px-7 py-3.5 text-sm font-bold text-[#C95E3E] transition-all duration-200 hover:bg-[#F8DFD6] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] sm:text-base cursor-pointer"
              >
                <span>Buiten Utrecht, wat nu?</span>
                <ArrowRight className="h-4 w-4" />
              </button>
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
              <Bike className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
              <span className="text-sm font-bold text-[#3B7F4B]">Gratis ophalen vanaf 3 messen</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BELANGRIJKE MEDEDELING: GEEN INLOOPWINKEL */}
      <section className="relative px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-[#d9e1d7] bg-[#F7F4EC] p-6 sm:p-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#E87B5B] shadow-2xs">
              <AlertTriangle className="h-6 w-6" />
            </span>
            <div className="space-y-1">
              <h2 className="font-heading text-lg font-bold text-[#3B7F4B]">
                Belangrijk: Slijpmaat heeft géén inloopbalie
              </h2>
              <p className="text-sm leading-relaxed text-[#657068]">
                Langsbrengen en ophalen kan uitsluitend na voorafgaande afspraak via WhatsApp. Zo zorgen we dat Teun of Mike persoonlijk aanwezig is om jouw messen met aandacht aan te pakken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. POSTCODECHECK & WIJKEN IN UTRECHT */}
      <section id="postcodecheck" className="scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12 lg:items-start">
          {/* Postcode Checker */}
          <div className="rounded-[2.5rem] border border-[#d9e1d7] bg-white p-7 sm:p-9 shadow-xs space-y-6 lg:col-span-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Direct controleren</p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-[#3B7F4B]">Postcodecheck Utrecht</h2>
              <p className="mt-2 text-sm text-[#657068]">
                Vul jouw 4-cijferige postcode in om te zien of jouw adres binnen onze gratis ophaalzone valt.
              </p>
            </div>

            <form onSubmit={handleCheckZip} className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  maxLength={7}
                  placeholder="Bijv. 3511"
                  value={zipInput}
                  onChange={(e) => setZipInput(e.target.value)}
                  className="flex-1 rounded-xl border border-[#d9e1d7] bg-[#FAFAF8] px-4 py-3 font-mono text-sm uppercase text-[#244A30] placeholder-[#657068]/60 focus:border-[#3B7F4B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3B7F4B]/20"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center gap-1.5 rounded-xl bg-[#3B7F4B] px-5 py-3 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#315F3B] cursor-pointer"
                >
                  <Search className="h-4 w-4" />
                  <span>Check</span>
                </button>
              </div>

              {searchResult && (
                <div className="rounded-xl border border-[#3B7F4B]/30 bg-[#E8EFE8] p-4 text-xs font-semibold text-[#3B7F4B] leading-relaxed">
                  {searchResult}
                </div>
              )}
            </form>

            <div className="space-y-2.5 border-t border-[#d9e1d7]/70 pt-4 text-xs text-[#657068]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#3B7F4B] shrink-0" />
                <span>Gratis ophalen &amp; bezorgen vanaf 3 messen</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#3B7F4B] shrink-0" />
                <span>€4,50 bezorgtarief bij 1 of 2 messen</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#3B7F4B] shrink-0" />
                <span>Binnen 24–48 uur weer vlijmscherp terug</span>
              </div>
            </div>
          </div>

          {/* Utrecht Districts */}
          <div className="rounded-[2.5rem] border border-[#d9e1d7] bg-white p-7 sm:p-9 shadow-xs space-y-5 lg:col-span-7">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Dekking in Utrecht</p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-[#3B7F4B]">Wijken in ons servicegebied</h2>
              <p className="mt-2 text-sm text-[#657068]">
                Binnen deze wijken in Utrecht halen we messen op de fiets of bakwagen bij je op:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {SERVICE_AREAS.map((area, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-2xl border border-[#d9e1d7]/60 bg-[#FAFAF8] p-3.5 text-xs transition-colors hover:border-[#3B7F4B]/40 hover:bg-white"
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
      </section>

      {/* 5. KLANTEN BUITEN UTRECHT (Green section with wave dividers) */}
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
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E8EFE8]">Klanten buiten Utrecht</p>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Woon je buiten Utrecht? Je bent van harte welkom.
            </h2>
            <p className="text-base leading-relaxed text-[#E8EFE8]/90">
              We krijgen regelmatig messen van enthousiaste koks uit Zeist, Nieuwegein, Houten, Amersfoort, Hilversum en zelfs verder. Slijpmaat heeft geen landelijke ophaaldienst, maar je kunt jouw messen op afspraak bij ons in Utrecht langsbrengen en na het slijpen weer ophalen.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                type="button"
                onClick={() => onNavigate('buiten-utrecht')}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-md cursor-pointer"
              >
                <span>Buiten Utrecht, wat nu?</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <a
                href={`https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik kom van buiten Utrecht en wil graag een afspraak maken om mijn messen langs te brengen!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#3B7F4B] transition-colors hover:bg-[#F7F4EC]"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Afspraak maken via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CONTACT BANNER with top and bottom wave dividers */}
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
