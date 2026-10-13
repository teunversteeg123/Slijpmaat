import React from 'react';
import { UtensilsCrossed } from 'lucide-react';

export const ZakelijkLeenmessenWidget: React.FC = () => {
  return (
    <aside
      aria-label="Tijdelijke leenmessen service in voorbereiding"
      className="mt-8 rounded-2xl border border-[#d9e1d7] bg-[#F7F4EC]/80 p-5 sm:p-6"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8EFE8] text-[#3B7F4B]">
          <UtensilsCrossed strokeWidth={1.75} className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#657068]">
            <span className="uppercase tracking-wider text-[#C95E3E]">Keukenservice</span>
            <span aria-hidden="true" className="text-[#9ca3af]">·</span>
            <span className="text-[#3B7F4B]">In voorbereiding</span>
          </div>
          <h3 className="mt-1 font-heading text-base font-bold text-[#244A30] sm:text-lg">
            Tijdelijke leenmessen voor de mise-en-place
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#657068]">
            Een professionele brigade kan niet zonder scherp gereedschap. We richten momenteel een betrouwbare set professionele leenmessen in, zodat de keuken tijdens het slijpen gewoon op tempo blijft draaien. Hebben jullie hier al interesse in? Geef het gerust aan in het opmerkingenveld bij je aanvraag.
          </p>
        </div>
      </div>
    </aside>
  );
};
