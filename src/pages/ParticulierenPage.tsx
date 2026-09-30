import React from 'react';
import { SLIJPMAAT_INFO, FAQS } from '../data/siteData';
import { EmbeddedCalculator } from '../components/EmbeddedCalculator';
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Utensils,
  MessageCircle,
} from 'lucide-react';

export const ParticulierenPage: React.FC = () => {
  const particulierFaqs = FAQS.slice(0, 4);
  const scrollToCalculator = () => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="space-y-14 pb-20 bg-[#FAFAFA]">
      {/* Header Banner */}
      <section className="bg-[#244A30] text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold text-[#162E1C] tracking-wider uppercase font-heading bg-[#A9C89E] px-3.5 py-1.5 rounded-full inline-block">
              Voor thuiskoks, hobbychefs &amp; studenten in Utrecht
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Messen slijpen voor particulieren.
            </h1>
            <p className="text-base sm:text-lg text-[#E8EFE8]/90 leading-relaxed">
              Weer met plezier en precisie koken zonder kracht te zetten. Handmatig geslepen op waterstenen. 
              Vanaf 3 messen gratis opgehaald en thuisbezorgd in Utrecht!
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={scrollToCalculator}
                className="px-6 py-3.5 rounded-full bg-white hover:bg-[#E8EFE8] text-[#3B7F4B] font-bold text-sm transition-all shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <span>Plan je slijpbeurt</span>
                <ArrowRight className="w-4 h-4 text-[#3B7F4B]" />
              </button>
              <a
                href={`https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Slijpmaat, ik ben particulier in Utrecht en wil graag mijn keukenmessen laten slijpen!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Stuur je Maat een appje</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="calculator" className="scroll-mt-28 px-2 sm:px-4 lg:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 px-2 text-center sm:mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Plan mijn slijpbeurt</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Bereken direct je prijs</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#657068] sm:text-base">Kies je messen, controleer de bezorgkosten en maak je aanvraag klaar voor WhatsApp. Je verstuurt het bericht altijd zelf.</p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-[#d9e1d7] bg-white p-2 shadow-sm sm:p-4">
            <EmbeddedCalculator />
          </div>
        </div>
      </section>

      {/* 3 Core Benefits: Scannable Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#d9e1d7] shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8EFE8] text-[#3B7F4B] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#3B7F4B]">
                Veiliger snijden
              </h3>
              <p className="text-xs sm:text-sm text-[#203728] leading-relaxed">
                Een bot mes glijdt plotseling weg over tomatenvellen of uien. Een vlijmscherp mes snijdt zonder enige neerwaartse druk.
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-[#3B7F4B]">
              Geen ongelukken door uitglijden
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#d9e1d7] shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8EFE8] text-[#3B7F4B] flex items-center justify-center font-bold">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#3B7F4B]">
                Minder tranen bij uien
              </h3>
              <p className="text-xs sm:text-sm text-[#203728] leading-relaxed">
                Een vlijmscherpe apex snijdt plantcellen door in plaats van ze te pletten. Zo blijven prikkelende sappen in de ui en smaak in je vlees.
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-[#3B7F4B]">
              Behoud van versheid &amp; textuur
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#d9e1d7] shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#A9C89E] text-[#162E1C] flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#3B7F4B]">
                Behoud van je mes
              </h3>
              <p className="text-xs sm:text-sm text-[#203728] leading-relaxed">
                Geen machinale bandschuurders die een halve centimeter staal weghalen. Wij slijpen handmatig met minimaal materiaalverlies.
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-[#3B7F4B]">
              Je favoriete koksmes gaat jaren langer mee
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Student Deal Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#d9e1d7] shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#F2F2EC]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#3B7F4B] font-heading">
                Transparante tarieven
              </span>
              <h2 className="text-2xl font-bold font-heading text-[#3B7F4B] mt-0.5">
                Vaste prijzen voor particulieren
              </h2>
            </div>
            <div className="text-xs font-bold text-[#162E1C] bg-[#A9C89E] px-3.5 py-1.5 rounded-full inline-block">
              Geen meerprijs voor Japanse messen!
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-[#d9e1d7]">
              <span className="text-xs text-[#657068] block">&lt; 15 cm</span>
              <h4 className="font-bold text-[#3B7F4B] text-base mt-0.5">Klein mes</h4>
              <div className="text-2xl font-black font-heading text-[#3B7F4B] my-1.5">€ 6,50</div>
              <p className="text-xs text-[#657068]">Schilmes, officemes, petty</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7F4EC] border-2 border-[#3B7F4B]">
              <span className="text-xs text-[#3B7F4B] block font-semibold">15–19,99 cm (Populair)</span>
              <h4 className="font-bold text-[#3B7F4B] text-base mt-0.5">Normaal mes</h4>
              <div className="text-2xl font-black font-heading text-[#3B7F4B] my-1.5">€ 8,50</div>
              <p className="text-xs text-[#3B7F4B]">Koksmes, Santoku, allround</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-[#d9e1d7]">
              <span className="text-xs text-[#657068] block">20 - 25 cm</span>
              <h4 className="font-bold text-[#3B7F4B] text-base mt-0.5">Groot mes</h4>
              <div className="text-2xl font-black font-heading text-[#3B7F4B] my-1.5">€ 10,50</div>
              <p className="text-xs text-[#657068]">Chefmes, Gyuto, trancheer</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#E8EFE8] border border-[#3B7F4B]/30">
              <span className="text-xs text-[#162E1C] block font-bold">Studentenactie</span>
              <h4 className="font-bold text-[#3B7F4B] text-base mt-0.5">StudentenMaat</h4>
              <div className="text-2xl font-black font-heading text-[#3B7F4B] my-1.5">€ 5,00</div>
              <p className="text-xs text-[#162E1C]">Op vertoon van collegekaart</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <span className="text-xs text-[#657068]">
              Gratis ophalen &amp; bezorgen in Utrecht vanaf 3 messen. Buiten Utrecht welkom op afspraak!
            </span>
            <button
              type="button"
              onClick={scrollToCalculator}
              className="px-6 py-3 rounded-full bg-[#E87B5B] hover:bg-[#C95E3E] text-white font-bold text-xs sm:text-sm transition-all shadow-xs flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>Bereken &amp; bestel</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Snippet for Particulieren */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F4EC] rounded-3xl p-6 sm:p-8 border border-[#d9e1d7] space-y-4">
          <h3 className="text-xl font-bold font-heading text-[#3B7F4B]">
            Veelgestelde vragen door particulieren
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {particulierFaqs.map((faq, idx) => (
              <div key={idx} className="p-4 bg-white rounded-2xl border border-[#d9e1d7] space-y-1.5">
                <h4 className="font-bold text-sm text-[#3B7F4B] font-heading">{faq.q}</h4>
                <p className="text-xs text-[#657068] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
