import React from 'react';
import { ArrowRight, Check, MapPin, MessageCircle } from 'lucide-react';
import { EmbeddedCalculator } from '../components/EmbeddedCalculator';
import { PageId } from '../types';

interface PrijzenBestellenPageProps {
  onNavigate: (page: PageId) => void;
}

export const PrijzenBestellenPage: React.FC<PrijzenBestellenPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FAFAFA] pb-16 sm:pb-20">
      <section className="bg-[#244A30] py-12 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block rounded-full bg-[#A9C89E] px-3.5 py-1.5 font-heading text-xs font-semibold uppercase tracking-wider text-[#162E1C]">
              Prijs berekenen en bestellen
            </span>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Plan je slijpbeurt
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-[#E8EFE8] sm:text-lg">
              Kies je messen, controleer de bezorgkosten en maak je aanvraag klaar voor WhatsApp. Je verstuurt het bericht altijd zelf.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-7 sm:px-6 sm:py-9 lg:px-8">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-2xl border border-[#d9e1d7] bg-white p-4">
            <Check className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
            <span className="text-sm font-semibold text-[#3B7F4B]">Alleen gladde messen</span>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-[#d9e1d7] bg-white p-4">
            <MapPin className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
            <span className="text-sm font-semibold text-[#3B7F4B]">Bezorgprijs op basis van postcode</span>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-[#d9e1d7] bg-white p-4">
            <MessageCircle className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
            <span className="text-sm font-semibold text-[#3B7F4B]">Aanvraag afronden via WhatsApp</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-2 sm:px-4 lg:px-6">
        <div className="overflow-hidden rounded-3xl border border-[#d9e1d7] bg-white p-2 shadow-sm sm:p-4">
          <EmbeddedCalculator />
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-5 rounded-3xl bg-[#E8EFE8] p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h2 className="font-heading text-xl font-bold text-[#3B7F4B]">Eerst weten hoe we slijpen?</h2>
            <p className="mt-1 text-sm text-[#657068]">Lees meer over onze stenen, slijphoeken en afwerking.</p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('werkwijze')}
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#3B7F4B] transition-colors hover:bg-[#F7F4EC]"
          >
            Bekijk de werkwijze
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </section>
    </div>
  );
};
