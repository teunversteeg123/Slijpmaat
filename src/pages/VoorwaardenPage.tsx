import React from 'react';
import { PageId } from '../types';
import { ChevronLeft } from 'lucide-react';

interface VoorwaardenPageProps {
  onNavigate: (page: PageId) => void;
}

export const VoorwaardenPage: React.FC<VoorwaardenPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-20">
      <section className="bg-[#244A30] text-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('home')}
            className="text-xs text-[#A9C89E] hover:text-white flex items-center gap-1 mb-4 cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Terug naar Home</span>
          </button>
          <span className="text-xs font-semibold text-[#A9C89E] tracking-wider uppercase font-heading bg-[#315F3B] px-3.5 py-1.5 rounded-full inline-block">
            Juridisch &amp; Duidelijkheid
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mt-2">
            Algemene Voorwaarden Slijpmaat
          </h1>
          <p className="text-xs sm:text-sm text-[#E8EFE8]/80 mt-1">
            Laatst bijgewerkt: maart 2026 &middot; Slijpmaat V.O.F. te Utrecht
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-slate-900">1. Toepasselijkheid</h2>
            <p>
              Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, slijpdiensten, prijsopgaven en overeenkomsten tussen Slijpmaat (handelsnaam van Slijpmaat V.O.F., gevestigd te Utrecht) en haar particuliere en zakelijke opdrachtgevers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-slate-900">2. Diensten en Beoordeling</h2>
            <p>
              Slijpmaat slijpt gladde keukenmessen met de hand op watergekoelde Japanse whetstones. Kartelmessen, tuingereedschap en scharen worden momenteel niet aangenomen. Slijpmaat behoudt zich het recht voor om messen te weigeren indien het lemmet dusdanig is verzwakt, gescheurd of vervormd dat veilig slijpen of veilig gebruik niet langer gegarandeerd kan worden.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-slate-900">3. Ophalen, Bezorgen en Bezoek op Afspraak</h2>
            <p>
              Slijpmaat heeft géén openbare inloopwinkel. Het langsbrengen of afhalen van messen geschiedt uitsluitend op voorafgaande afspraak via WhatsApp of schriftelijke bevestiging.
            </p>
            <p>
              Ophalen en bezorgen vindt plaats binnen het aangegeven servicegebied in Utrecht en omgeving. Vanaf drie messen is ophalen en bezorgen gratis binnen het vaste bezorggebied; bij minder dan drie messen geldt een toeslag van €4,50. Klanten buiten Utrecht kunnen messen uitsluitend op afspraak in Utrecht langsbrengen en ophalen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-slate-900">4. Veilig Verpakken</h2>
            <p>
              De opdrachtgever is verantwoordelijk voor het veilig en deugdelijk verpakken van de messen voorafgaand aan de overdracht (bijvoorbeeld gerold in een keukendoek met tape/elastiek en in een stevige tas of doos).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-slate-900">5. Tarieven en Betaling</h2>
            <p>
              De tarieven worden berekend conform de gepubliceerde prijslijst op Slijpmaat.nl: Klein mes (&lt;15cm): €6,50; Normaal mes (15-20cm): €8,50; Groot mes (20-25cm): €10,50; StudentenMaat: €5,00 per mes op vertoon van collegekaart; Kleine chip herstellen: €2,50; Nieuw profiel/punt: €8,50. Prijzen voor messen &gt;25cm op aanvraag.
            </p>
            <p>
              Betaling geschiedt na afronding van het slijpwerk via betaalverzoek/Tikkie, contant bij overdracht, of voor zakelijke horecaklanten via factuur binnen de overeengekomen betalingstermijn van 14 dagen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-slate-900">6. Aansprakelijkheid</h2>
            <p>
              Slijpmaat voert alle werkzaamheden met uiterste zorg en ambachtelijke vakkennis uit. Staal dat reeds interne haarscheurtjes, diepe roest of eerdere thermische verbranding vertoont kan onvoorziene reacties vertonen. Slijpmaat overlegt bij twijfel altijd vooraf met de klant.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
