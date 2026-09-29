import React from 'react';
import { PageId } from '../types';
import { SLIJPMAAT_INFO } from '../data/siteData';
import { Calculator } from '../components/Calculator';
import {
  ShieldCheck,
  CheckCircle,
  Clock,
  MessageCircle,
  HelpCircle,
  AlertCircle,
  Sparkles,
  Check
} from 'lucide-react';

interface PrijzenBestellenPageProps {
  onNavigate: (page: PageId) => void;
}

export const PrijzenBestellenPage: React.FC<PrijzenBestellenPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-20 bg-[#FAFAFA]">
      {/* Header Banner */}
      <section className="bg-[#244A30] text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold text-[#162E1C] tracking-wider uppercase font-heading bg-[#A9C89E] px-3.5 py-1.5 rounded-full inline-block">
              Scherpe prijzen voor scherpe messen
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Prijzen &amp; direct bestellen.
            </h1>
            <p className="text-base sm:text-lg text-[#E8EFE8]/90 leading-relaxed">
              Geen verborgen kosten. Bereken met de interactieve calculator jouw slijpkosten en verstuur direct een aanvraag via WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Prominent Highlight Banner: Geen verschil tussen Japanse en normale messen */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:p-5 rounded-2xl bg-[#E8EFE8] border-2 border-[#3B7F4B]/40 flex items-start sm:items-center gap-3.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-[#3B7F4B] text-white flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="text-xs sm:text-sm text-[#162E1C] leading-relaxed">
            <strong className="block font-heading text-base text-[#244A30]">
              ✨ Eerlijk &amp; transparant: Geen meerprijs voor Japanse messen!
            </strong>
            Of het nu een Duits Wüsthof koksmes of een Japanse Santoku/Gyuto is: wij hanteren exact dezelfde scherpe prijs per formaat. Elk mes wordt met dezelfde uiterste zorg met de hand geslepen op waterstenen.
          </div>
        </div>
      </section>

      {/* Main Interactive Calculator Area */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Calculator onOrderInitiated={() => {}} />
      </section>

      {/* Price Table Overview */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#d9e1d7] shadow-xs">
          <h2 className="text-2xl font-bold font-heading text-[#244A30] mb-5">
            Officieel Slijpmaat Tarievenoverzicht
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm divide-y divide-[#d9e1d7]">
              <thead>
                <tr className="text-[#657068] font-heading">
                  <th className="py-3 font-semibold">Dienst / Formaat</th>
                  <th className="py-3 font-semibold">Lemmetlengte</th>
                  <th className="py-3 font-semibold text-right">Tarief (incl. btw)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F2F2EC] text-[#203728]">
                <tr>
                  <td className="py-3.5 font-medium text-[#244A30]">
                    Klein mes <span className="text-[#657068] text-xs font-normal block sm:inline">(schilmes, officemes, petty)</span>
                  </td>
                  <td className="py-3.5 text-[#657068]">Korter dan 15 cm</td>
                  <td className="py-3.5 text-right font-bold text-[#244A30]">€ 6,50</td>
                </tr>
                <tr className="bg-[#F7F4EC]/50">
                  <td className="py-3.5 font-medium text-[#244A30]">
                    Normaal mes <span className="text-[#3B7F4B] text-xs font-bold block sm:inline">[Populair] (santoku, koksmes, universeel)</span>
                  </td>
                  <td className="py-3.5 text-[#657068]">15 tot 20 cm</td>
                  <td className="py-3.5 text-right font-bold text-[#3B7F4B]">€ 8,50</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-medium text-[#244A30]">
                    Groot mes <span className="text-[#657068] text-xs font-normal block sm:inline">(chefmes, gyuto, trancheermes)</span>
                  </td>
                  <td className="py-3.5 text-[#657068]">20 tot en met 25 cm</td>
                  <td className="py-3.5 text-right font-bold text-[#244A30]">€ 10,50</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-medium text-[#244A30]">
                    Extra groot mes <span className="text-[#657068] text-xs font-normal block sm:inline">(zalmmes, slagersmes)</span>
                  </td>
                  <td className="py-3.5 text-[#657068]">Langer dan 25 cm</td>
                  <td className="py-3.5 text-right font-bold text-[#E87B5B]">Op aanvraag</td>
                </tr>
                <tr className="bg-[#E8EFE8]/70">
                  <td className="py-3.5 font-medium text-[#244A30]">
                    StudentenMaat <span className="text-[#162E1C] text-xs block sm:inline">(op vertoon geldige collegekaart)</span>
                  </td>
                  <td className="py-3.5 text-[#244A30]/80">Alle formaten tot 25 cm</td>
                  <td className="py-3.5 text-right font-bold text-[#162E1C]">€ 5,00 per mes</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-medium text-[#244A30]">
                    Kleine chip herstellen <span className="text-[#657068] text-xs font-normal block sm:inline">(&le; 2 mm hap uit snede)</span>
                  </td>
                  <td className="py-3.5 text-[#657068]">Toeslag per beschadigd mes</td>
                  <td className="py-3.5 text-right font-bold text-[#E87B5B]">+€ 2,50</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-medium text-[#244A30]">
                    Nieuw profiel / gebroken punt
                  </td>
                  <td className="py-3.5 text-[#657068]">Herprofileren bij zware schade</td>
                  <td className="py-3.5 text-right font-bold text-[#E87B5B]">+€ 8,50</td>
                </tr>
                <tr className="bg-[#FAFAFA]">
                  <td className="py-3.5 font-medium text-[#244A30]">
                    Ophalen en bezorgen in Utrecht
                  </td>
                  <td className="py-3.5 text-[#657068]">Vast servicegebied</td>
                  <td className="py-3.5 text-right font-bold text-[#3B7F4B]">
                    Gratis vanaf 3 messen (€4,50 bij 1-2)
                  </td>
                </tr>
                <tr className="bg-[#FAFAFA]">
                  <td className="py-3.5 font-medium text-[#244A30]">
                    Langsbrengen &amp; ophalen op afspraak
                  </td>
                  <td className="py-3.5 text-[#657068]">Utrecht (ook voor klanten buiten Utrecht)</td>
                  <td className="py-3.5 text-right font-bold text-[#244A30]">Altijd gratis</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3 Quick Assurance Blocks */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs sm:text-sm">
          <div className="bg-white p-5 rounded-2xl border border-[#d9e1d7] space-y-1.5">
            <h3 className="font-bold text-[#244A30] text-sm">Betaling achteraf</h3>
            <p className="text-[#657068] leading-relaxed">
              Je betaalt pas wanneer de messen geslepen zijn en bij jou afgeleverd worden via Tikkie of zakelijke factuur.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#d9e1d7] space-y-1.5">
            <h3 className="font-bold text-[#244A30] text-sm">Altijd vooraf overleg</h3>
            <p className="text-[#657068] leading-relaxed">
              Zien we tijdens de inspectie onverwachte beschadigingen? We appen altijd eerst voordat we extra werkzaamheden uitvoeren.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#d9e1d7] space-y-1.5">
            <h3 className="font-bold text-[#244A30] text-sm">Binnen 48 uur terug</h3>
            <p className="text-[#657068] leading-relaxed">
              Snel weer aan de slag. Binnen 48 uur na het ophalen heb je jouw vertrouwde messen vlijmscherp terug in de keuken.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
