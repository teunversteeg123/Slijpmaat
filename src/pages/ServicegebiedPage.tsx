import React, { useState } from 'react';
import { PageId } from '../types';
import { SLIJPMAAT_INFO, SERVICE_AREAS } from '../data/siteData';
import {
  MapPin,
  Bike,
  Clock,
  CheckCircle,
  AlertTriangle,
  Search,
  MessageCircle,
  ArrowRight
} from 'lucide-react';

interface ServicegebiedPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicegebiedPage: React.FC<ServicegebiedPageProps> = ({ onNavigate }) => {
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
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-[#244A30] text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-[#A9C89E] tracking-wider uppercase font-heading bg-[#315F3B] px-3.5 py-1.5 rounded-full inline-block">
              Logistiek &amp; Bereikbaarheid
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Ophalen, bezorgen &amp; langsbrengen.
            </h1>
            <p className="text-base sm:text-lg text-[#E8EFE8]/90 leading-relaxed">
              Slijpmaat is lokaal gevestigd in Utrecht. Vanaf 3 messen halen we ze gratis op binnen ons Utrechtse servicegebied. Kom je van buiten Utrecht? Dan ben je van harte welkom om op afspraak langs te komen.
            </p>
          </div>
        </div>
      </section>

      {/* Crucial Notice: Geen inloopwinkel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-[#F7F4EC] border border-[#dcd7cb] flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-white border border-[#d9e1d7] flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5 text-[#E87B5B]" />
          </div>
          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong className="text-slate-900 block font-heading text-base">
              Belangrijk: Slijpmaat heeft géén inloopwinkel.
            </strong>
            Langsbrengen en ophalen kan uitsluitend na voorafgaande afspraak via WhatsApp. Zo garanderen we dat Teun of Mike persoonlijk aanwezig is om je messen in ontvangst te nemen.
          </div>
        </div>
      </section>

      {/* Postcode checker & Servicegebied kaart */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Postcode Checker */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#3B7F4B] font-heading">
                Direct controleren
              </span>
              <h2 className="text-2xl font-bold font-heading text-slate-900 mt-1">
                Postcodecheck Utrecht
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Vul jouw 4-cijferige postcode in om te zien of jouw adres binnen ons ophaalgebied valt.
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
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B7F4B] font-mono uppercase"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#3B7F4B] hover:bg-[#244A30] text-white font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>Check</span>
                </button>
              </div>

              {searchResult && (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-relaxed">
                  {searchResult}
                </div>
              )}
            </form>

            <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#3B7F4B] shrink-0" />
                <span>Gratis ophalen &amp; bezorgen vanaf 3 messen</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#3B7F4B] shrink-0" />
                <span>€4,50 bezorgtarief bij 1 of 2 messen</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#3B7F4B] shrink-0" />
                <span>Binnen 48 uur na ophalen weer terug</span>
              </div>
            </div>
          </div>

          {/* Districts List */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xl font-bold font-heading text-slate-900">
              Wijken in het Utrechtse Servicegebied
            </h3>
            <p className="text-xs text-slate-600">
              Binnen deze wijken in Utrecht halen we messen op de fiets of bakwagen op:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {SERVICE_AREAS.map((area, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5 text-xs">
                  <MapPin className="w-4 h-4 text-[#3B7F4B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">{area.district}</span>
                    <span className="text-slate-500 font-mono text-[11px]">{area.zip}</span>
                    <span className="text-[#3B7F4B] block text-[10px] mt-0.5">{area.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Section: Klanten buiten Utrecht */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#244A30] rounded-3xl p-8 sm:p-12 text-white">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-wider font-bold text-[#A9C89E] font-heading">
              Klanten buiten Utrecht
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-white">
              Woon je buiten Utrecht? Je bent van harte welkom.
            </h2>
            <p className="text-sm sm:text-base text-[#E8EFE8]/90 leading-relaxed">
              We krijgen regelmatig messen van enthousiaste koks uit Zeist, Nieuwegein, Houten, Amersfoort, Hilversum en zelfs verder. Slijpmaat heeft geen landelijke ophaaldienst, maar je kunt jouw messen op afspraak bij ons in Utrecht langsbrengen en na het slijpen weer ophalen.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('buiten-utrecht')}
                className="px-6 py-3.5 rounded-full bg-[#E87B5B] hover:bg-[#C95E3E] text-white font-bold text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Buiten Utrecht, wat nu?</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik kom van buiten Utrecht en wil graag een afspraak maken om mijn messen langs te brengen!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-[#E8EFE8] text-[#3B7F4B] font-bold text-xs sm:text-sm transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#3B7F4B]" />
                <span>Maak een afspraak via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
