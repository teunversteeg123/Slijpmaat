import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SLIJPMAAT_INFO } from '../data/siteData';

const appointmentWhatsAppUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik wil graag een afspraak maken om mijn messen in Utrecht te brengen en later op te halen.')}`;

export const AppointmentDropoffWidget: React.FC = () => (
  <div className="relative overflow-hidden rounded-[2.5rem] border border-[#d9e1d7] bg-white shadow-sm">
    <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-[44%_56%_63%_37%/52%_40%_60%_48%] bg-[#E8EFE8]" />

    <div className="relative grid gap-8 p-7 sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-14 lg:p-14">
      <div className="max-w-3xl">
        <p className="inline-flex rounded-full bg-[#F9E4DE] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#244A30]">
          Alleen op afspraak
        </p>
        <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-[#3B7F4B] sm:text-4xl lg:text-5xl">
          Kom langs op afspraak
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#657068] sm:text-lg">
          Klanten van buiten Utrecht en door heel Nederland zijn van harte welkom. Wij werken vanuit huis, dus er is geen open inloopbalie. We plannen daarom vooraf een rustig breng- en ophaalmoment via WhatsApp.
        </p>
        <p className="mt-5 border-l-2 border-[#A9C89E] pl-4 text-sm leading-6 text-[#657068]">
          Zo zorgen Teun of Mike dat we persoonlijk klaarstaan om je messen veilig en met volle aandacht in ontvangst te nemen.
        </p>
      </div>

      <a
        href={appointmentWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-full bg-[#3B7F4B] px-7 py-4 font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#315F3B] hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#E87B5B]/50 focus-visible:ring-offset-2 active:scale-[0.98] sm:w-auto sm:min-w-56 sm:text-lg"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        <span>Plan een afspraak</span>
      </a>
    </div>
  </div>
);
