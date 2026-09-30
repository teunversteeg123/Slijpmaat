import React from 'react';
import { PageId } from '../types';
import { ChevronLeft } from 'lucide-react';

interface VoorwaardenPageProps {
  onNavigate: (page: PageId) => void;
}

export const VoorwaardenPage: React.FC<VoorwaardenPageProps> = ({ onNavigate }) => {
  return (
    <div className="overflow-hidden bg-[#FAFAF8] pb-16">
      <section className="relative overflow-hidden bg-[#FAFAF8] pb-8 pt-4 sm:pb-12 sm:pt-6 lg:pb-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-16 h-[340px] w-[340px] rounded-full bg-[#E3EFE5] opacity-80 blur-2xl sm:h-[480px] sm:w-[480px] sm:blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-[#3B7F4B] shadow-2xs hover:bg-[#E8EFE8] transition-colors mb-6 cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Terug naar Home</span>
          </button>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#3B7F4B] sm:text-sm">
            Juridisch &amp; Duidelijkheid
          </p>
          <h1 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#3B7F4B]">
            Algemene Voorwaarden Slijpmaat
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-[#657068]">
            Laatst bijgewerkt: maart 2026 &middot; Slijpmaat V.O.F. te Utrecht
          </p>
        </div>
      </section>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-[#d9e1d7] bg-white p-7 sm:p-12 shadow-xs space-y-8 text-xs sm:text-sm text-[#657068] leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-[#3B7F4B]">1. Toepasselijkheid</h2>
            <p>
              Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, slijpdiensten, prijsopgaven en overeenkomsten tussen Slijpmaat (handelsnaam van Slijpmaat V.O.F., gevestigd te Utrecht) en haar particuliere en zakelijke opdrachtgevers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-[#3B7F4B]">2. Diensten en Beoordeling</h2>
            <p>
              Slijpmaat slijpt gladde keukenmessen met de hand op watergekoelde Japanse whetstones. Kartelmessen, tuingereedschap en scharen worden niet aangenomen. Slijpmaat behoudt zich het recht voor om messen te weigeren indien het lemmet dusdanig is verzwakt, gescheurd of vervormd dat veilig slijpen of veilig gebruik niet langer gegarandeerd kan worden.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-[#3B7F4B]">3. Ophalen, Bezorgen en Bezoek op Afspraak</h2>
            <p>
              Slijpmaat heeft géén openbare inloopbalie. Het langsbrengen of afhalen van messen geschiedt uitsluitend op voorafgaande afspraak via WhatsApp of schriftelijke bevestiging.
            </p>
            <p>
              Ophalen en bezorgen vindt plaats binnen het aangegeven servicegebied in Utrecht en directe omgeving. Vanaf drie messen is ophalen en bezorgen gratis binnen het vaste bezorggebied; bij minder dan drie messen geldt een bezorgtarief van €4,50. Klanten buiten Utrecht kunnen messen uitsluitend op afspraak in Utrecht langsbrengen en ophalen, of in overleg per post versturen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-[#3B7F4B]">4. Veilig Verpakken</h2>
            <p>
              De opdrachtgever is verantwoordelijk voor het veilig aanbieden en verpakken van de messen bij de overdracht (bijvoorbeeld in een stevige theedoek, messenmap of kartonnen foedraal), ter bescherming van zowel de koerier als het mes zelf.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-[#3B7F4B]">5. Betaling</h2>
            <p>
              Particuliere betaling geschiedt doorgaans via een digitaal Tikkie / iDEAL betaalverzoek bij oplevering of overdracht. Zakelijke klanten ontvangen een digitale factuur met gespecificeerde btw en een betalingstermijn van 14 dagen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-[#3B7F4B]">6. Tevredenheidsgarantie</h2>
            <p>
              Wij streven naar de hoogste standaard handmatig slijpwerk. Mocht een geslepen mes onverhoopt niet aan de redelijke verwachtingen voldoen, dan verzoeken wij je binnen 7 dagen na levering contact op te nemen via WhatsApp; we slijpen het mes dan kosteloos bij.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
