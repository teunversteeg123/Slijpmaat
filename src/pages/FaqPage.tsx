import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { PageId } from '../types';
import { SLIJPMAAT_INFO } from '../data/siteData';
import { SlijpmaatFaqSection } from '../components/SlijpmaatFaqSection';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  return (
    <div className="overflow-hidden bg-white">
      <section className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-[44%_56%_67%_33%/48%_43%_57%_52%] bg-[#E8EFE8]" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 bottom-2 h-52 w-52 rounded-[58%_42%_40%_60%/47%_52%_48%_53%] bg-[#F9E4DE]" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Vragen &amp; antwoorden</p>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-6xl">Alles wat je wilt weten over Slijpmaat</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#657068] sm:text-lg">Van veilig meegeven tot bezorgen, betalen en het slijpen zelf. Hieronder vind je alle antwoorden overzichtelijk bij elkaar.</p>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.48fr_1fr] lg:gap-20">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C95E3E]">Veelgestelde vragen</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#3B7F4B]">Snel naar het antwoord dat je zoekt</h2>
            <p className="mt-4 text-sm leading-7 text-[#657068]">Open een vraag om het antwoord te bekijken. Staat jouw vraag er niet tussen? Stuur je Maat dan direct een bericht.</p>
          </aside>
          <SlijpmaatFaqSection defaultOpenIndex={0} />
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 overflow-hidden rounded-[2.5rem] bg-[#3B7F4B] px-7 py-10 text-center sm:px-10 sm:py-12 lg:flex-row lg:px-14 lg:text-left">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-[42%_58%_62%_38%/55%_42%_58%_45%] bg-white/10" aria-hidden="true" />
          <div className="relative max-w-2xl">
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">Staat jouw vraag er niet tussen?</h2>
            <p className="mt-2 text-sm leading-6 text-[#E8EFE8]">Stuur Teun of Mike een WhatsApp-bericht. Dan kijken we meteen met je mee.</p>
          </div>
          <div className="relative flex flex-col gap-3 sm:flex-row">
            <a href={`https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik heb een vraag over het slijpen van mijn messen!')}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#3B7F4B] transition-colors hover:bg-[#F7F4EC]"><MessageCircle className="h-4 w-4" aria-hidden="true" /> Stel je vraag</a>
            <button onClick={() => onNavigate('particulieren')} className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10">Bekijk prijzen <ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
          </div>
        </div>
      </section>
    </div>
  );
};
