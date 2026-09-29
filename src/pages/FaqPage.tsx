import React from 'react';
import { PageId } from '../types';
import { SLIJPMAAT_INFO } from '../data/siteData';
import { SlijpmaatFaqSection } from '../components/SlijpmaatFaqSection';
import { MessageCircle, HelpCircle, ArrowRight } from 'lucide-react';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-20 bg-[#FAFAFA]">
      {/* Header Banner - Groen op wit */}
      <section className="bg-white border-b border-[#d9e1d7] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold text-[#244A30] tracking-wider uppercase font-heading bg-[#E8EFE8] px-3.5 py-1.5 rounded-full inline-block border border-[#A9C89E]/40">
              Vragen &amp; Antwoorden
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#244A30] tracking-tight">
              Alles wat je wilt weten over Slijpmaat.
            </h1>
            <p className="text-base sm:text-lg text-[#203728] leading-relaxed">
              Vind snel antwoord op al je vragen over onze whetstone slijpmethode, ophaalservice in Utrecht, afspraken buiten Utrecht en tarieven.
            </p>
          </div>
        </div>
      </section>

      {/* Official Slijpmaat FAQ component */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlijpmaatFaqSection defaultOpenIndex={0} />

        {/* WhatsApp Question Card - Groen op wit / cream */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-white border border-[#d9e1d7] text-center space-y-4 shadow-xs">
          <HelpCircle className="w-10 h-10 text-[#3B7F4B] mx-auto" />
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#244A30]">
            Staat jouw vraag er niet tussen?
          </h2>
          <p className="text-xs sm:text-sm text-[#203728] max-w-lg mx-auto">
            Stuur je Maat direct een berichtje via WhatsApp. Teun of Mike beantwoordt al je vragen binnen no-time!
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik heb een vraag over het slijpen van mijn messen!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#3B7F4B] hover:bg-[#244A30] text-white font-bold text-xs sm:text-sm transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Stel je vraag via WhatsApp</span>
            </a>
            <button
              onClick={() => onNavigate('prijzen-bestellen')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#E87B5B] hover:bg-[#C95E3E] text-white font-bold text-xs sm:text-sm transition-colors shadow-xs cursor-pointer"
            >
              <span>Direct messen berekenen</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
