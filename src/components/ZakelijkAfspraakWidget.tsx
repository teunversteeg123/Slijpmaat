import React from 'react';
import { MessageCircle, Home, UtensilsCrossed, Calendar, Sparkles } from 'lucide-react';
import { SLIJPMAAT_INFO } from '../data/siteData';

const zakelijkAppointmentUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(
  'Hoi Teun en Mike, ik wil graag een afspraak maken om onze zakelijke horecamessen in Utrecht te brengen en weer op te halen.'
)}`;

export const ZakelijkAfspraakWidget: React.FC = () => {
  return (
    <div className="mt-10 overflow-hidden rounded-[2rem] border border-[#d9e1d7] bg-[#F7F4EC]/80 p-5 sm:mt-12 sm:p-7 lg:p-8">
      {/* Intro Header */}
      <div className="mb-6 max-w-2xl text-left">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">
          Extra service &amp; flexibiliteit
        </p>
        <h3 className="mt-1.5 font-heading text-2xl font-bold text-[#3B7F4B] sm:text-3xl">
          Goed om te weten voor jouw keuken
        </h3>
        <p className="mt-2 text-sm leading-6 text-[#657068] sm:text-base">
          Of je nu uit Utrecht komt of van verder weg: we zorgen dat het slijpproces naadloos aansluit op jullie keukenplanning.
        </p>
      </div>

      {/* 2-Column Responsive Card Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {/* Card 1: Langskomen vanuit heel Nederland op afspraak */}
        <div className="flex flex-col justify-between rounded-2xl border border-[#d9e1d7] bg-white p-6 shadow-xs transition-all duration-200 hover:border-[#3B7F4B]/50 hover:shadow-sm">
          <div>
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8EFE8] px-3 py-1 text-xs font-bold text-[#3B7F4B]">
                <Home className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Alleen op afspraak</span>
              </span>
              <span className="text-[11px] font-semibold tracking-wide text-[#657068]">
                Heel Nederland welkom
              </span>
            </div>

            <h4 className="mt-4 font-heading text-xl font-bold text-[#3B7F4B] sm:text-2xl">
              Kom langs op afspraak
            </h4>

            <p className="mt-2 text-sm leading-relaxed text-[#657068]">
              Zit jouw restaurant, catering of keuken buiten Utrecht? Klanten uit heel Nederland zijn van harte welkom om messen persoonlijk bij ons langs te brengen.
            </p>

            <div className="mt-4 rounded-xl border border-[#3B7F4B]/20 bg-[#F4F7F4] p-3.5 text-xs leading-relaxed text-[#244A30] sm:text-sm">
              <p className="font-semibold text-[#3B7F4B]">
                Wij werken vanuit huis aan de werkbank
              </p>
              <p className="mt-1 text-[#657068]">
                Er is géén doorlopende inloopbalie. We stemmen jouw komst vooraf via WhatsApp af, zodat Teun of Mike persoonlijk aanwezig is om de messen veilig in ontvangst te nemen.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-2">
            <a
              href={zakelijkAppointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#3B7F4B] px-5 py-2.5 text-sm font-bold text-white shadow-xs transition-all duration-200 hover:bg-[#315F3B] hover:shadow-md focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#3B7F4B]/30 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>Stem brengafspraak af</span>
            </a>
          </div>
        </div>

        {/* Card 2: Leenmessen in voorbereiding */}
        <div className="flex flex-col justify-between rounded-2xl border border-[#d9e1d7] bg-white p-6 shadow-xs transition-all duration-200 hover:border-[#E87B5B]/50 hover:shadow-sm">
          <div>
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F9E4DE] px-3 py-1 text-xs font-bold text-[#C95E3E]">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                <span>In voorbereiding</span>
              </span>
              <span className="text-[11px] font-semibold tracking-wide text-[#657068]">
                Keukenservice
              </span>
            </div>

            <h4 className="mt-4 font-heading text-xl font-bold text-[#244A30] sm:text-2xl">
              Tijdelijke leenmessen
            </h4>

            <p className="mt-2 text-sm leading-relaxed text-[#657068]">
              Een professionele keukenbrigade kan niet zonder scherp gereedschap. We zijn momenteel bezig met het regelen van betrouwbare leenmessen voor zakelijke klanten.
            </p>

            <div className="mt-4 rounded-xl border border-[#E87B5B]/20 bg-[#FCEEE8]/60 p-3.5 text-xs leading-relaxed text-[#244A30] sm:text-sm">
              <div className="flex items-center gap-2 font-semibold text-[#C95E3E]">
                <UtensilsCrossed className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Geen stilstand in de mise-en-place</span>
              </div>
              <p className="mt-1 text-[#657068]">
                Zodra deze service operationeel is, kan jouw keuken tijdens het slijpen van jullie messenset gewoon ongehinderd op topniveau blijven doordraaien.
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#657068] pt-2">
            <Calendar className="h-4 w-4 text-[#C95E3E] shrink-0" aria-hidden="true" />
            <span>Geef bij je aanvraag gerust aan of je interesse hebt in leenmessen.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
