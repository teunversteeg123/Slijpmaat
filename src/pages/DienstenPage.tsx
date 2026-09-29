import React from 'react';
import { PageId } from '../types';
import { SLIJPMAAT_INFO } from '../data/siteData';
import {
  ArrowRight,
  Utensils,
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

interface DienstenPageProps {
  onNavigate: (page: PageId) => void;
}

export const DienstenPage: React.FC<DienstenPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-14 pb-20 bg-[#FAFAFA]">
      {/* Header */}
      <section className="bg-[#244A30] text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold text-[#162E1C] tracking-wider uppercase font-heading bg-[#A9C89E] px-3.5 py-1.5 rounded-full inline-block">
              Vakmanschap op Japanse whetstones
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Onze Slijpdiensten in Utrecht.
            </h1>
            <p className="text-base sm:text-lg text-[#E8EFE8]/90 leading-relaxed">
              Van dagelijkse Europese koksmessen tot traditionele Japanse carbon staallemmeten en beschadigde snedes: wij herstellen de ultieme scherpte met de hand.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid (Zero photos, pure graphic cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Service 1: Keukenmessen */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#d9e1d7] shadow-xs hover:border-[#3B7F4B] transition-colors flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#E8EFE8] text-[#3B7F4B] flex items-center justify-center font-bold">
                <Utensils className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#3B7F4B] uppercase tracking-wide">
                  Europese &amp; allround messen
                </span>
                <h3 className="text-2xl font-bold font-heading text-[#244A30] mt-0.5">
                  Keukenmessen slijpen
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#203728] leading-relaxed">
                Geschikt voor alle gladde keukenmessen: koksmessen, Sabatiers, Wüsthof, Zwilling, schilmessen en fileermessen. Geslepen op een robuuste en vlijmscherpe hoek van 15 tot 20 graden per zijde.
              </p>
              <div className="pt-2 text-xs font-bold text-[#244A30]">
                Tarieven: €6,50 (&lt;15cm) &middot; €8,50 (15-20cm) &middot; €10,50 (20-25cm)
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onNavigate('dienst-keukenmessen')}
                className="w-full py-3 px-5 rounded-full bg-[#E8EFE8] hover:bg-[#3B7F4B] hover:text-white text-[#244A30] font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#A9C89E]/40"
              >
                <span>Bekijk details keukenmessen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Service 2: Japanse Messen (Explicitly same rates!) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#d9e1d7] shadow-xs hover:border-[#3B7F4B] transition-colors flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#E8EFE8] text-[#3B7F4B] flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#3B7F4B] uppercase tracking-wide">
                  Harde kern (VG-10, Aogami, Shirogami)
                </span>
                <h3 className="text-2xl font-bold font-heading text-[#244A30] mt-0.5">
                  Japanse messen slijpen
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#203728] leading-relaxed">
                Voor Santoku’s, Gyuto’s, Nakiri’s, Petty’s en Deba messen. Speciale aandacht voor dunne geometrieën onder 12 tot 15 graden en afwerking tot 8000 grit met lederen strop polish.
              </p>
              <div className="pt-2 text-xs font-bold text-[#3B7F4B]">
                Zelfde tarieven als keukenmessen: €6,50 &middot; €8,50 &middot; €10,50!
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onNavigate('dienst-japanse-messen')}
                className="w-full py-3 px-5 rounded-full bg-[#E8EFE8] hover:bg-[#3B7F4B] hover:text-white text-[#244A30] font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#A9C89E]/40"
              >
                <span>Bekijk details Japanse messen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Service 3: Chips herstellen */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#d9e1d7] shadow-xs hover:border-[#3B7F4B] transition-colors flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#E87B5B] text-white flex items-center justify-center font-bold shadow-xs">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#E87B5B] uppercase tracking-wide">
                  Herstel bij beschadiging
                </span>
                <h3 className="text-2xl font-bold font-heading text-[#244A30] mt-0.5">
                  Chips en beschadigingen herstellen
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#203728] leading-relaxed">
                Een hapje uit de snijkant of een afgebroken punt? Gooi je mes niet weg! Op onze grove Shapton Pro 320 steen herstellen we het snijprofiel zonder dat het lemmet onnodig dun wordt.
              </p>
              <div className="pt-2 text-xs font-bold text-[#E87B5B]">
                Toeslag kleine chip: +€2,50 &middot; Nieuw profiel: +€8,50
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onNavigate('dienst-chips-herstellen')}
                className="w-full py-3 px-5 rounded-full bg-[#E8EFE8] hover:bg-[#3B7F4B] hover:text-white text-[#244A30] font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#A9C89E]/40"
              >
                <span>Bekijk reparatieservice</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Service 4: Wat wel en niet */}
          <div className="bg-[#F7F4EC] rounded-3xl p-6 sm:p-8 border border-[#d9e1d7] shadow-xs hover:border-[#3B7F4B] transition-colors flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#3B7F4B] text-white flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#3B7F4B] uppercase tracking-wide">
                  Transparantie vooraf
                </span>
                <h3 className="text-2xl font-bold font-heading text-[#244A30] mt-0.5">
                  Wat slijpen we wel en niet?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#203728] leading-relaxed">
                Wij zijn gespecialiseerd in gladde keukenmessen. We slijpen géén tuinscharen, bijlen, beitels of zware industriële zaagbladen. Zo houden we onze whetstones 100% voedselveilig en zuiver.
              </p>
              <div className="pt-2 text-xs font-bold text-[#244A30]">
                Lees de complete acceptatielijst
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onNavigate('dienst-wel-niet')}
                className="w-full py-3 px-5 rounded-full bg-white hover:bg-[#3B7F4B] hover:text-white text-[#244A30] font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#d9e1d7]"
              >
                <span>Bekijk wat we wel &amp; niet slijpen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
