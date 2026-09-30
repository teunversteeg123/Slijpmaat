import React from 'react';
import { PageId } from '../types';
import { ChevronLeft } from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (page: PageId) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
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
            Privacy &amp; AVG
          </p>
          <h1 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#3B7F4B]">
            Privacyverklaring Slijpmaat
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-[#657068]">
            Laatst bijgewerkt: maart 2026 &middot; Slijpmaat V.O.F. te Utrecht
          </p>
        </div>
      </section>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-[#d9e1d7] bg-white p-7 sm:p-12 shadow-xs space-y-8 text-xs sm:text-sm text-[#657068] leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-[#3B7F4B]">1. Wie zijn wij?</h2>
            <p>
              Slijpmaat (Slijpmaat V.O.F.), gevestigd te Utrecht aan de Gerard Noodtstraat 57, is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring. Contact via info@slijpmaat.nl of WhatsApp via 06 82 07 49 67.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-[#3B7F4B]">2. Persoonsgegevens die wij verwerken</h2>
            <p>
              Slijpmaat verwerkt jouw persoonsgegevens doordat je gebruikmaakt van onze diensten en/of omdat je deze zelf aan ons verstrekt (bijvoorbeeld via de bestelcalculator, WhatsApp of contactformulieren):
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Voor- en achternaam / bedrijfsnaam</li>
              <li>Telefoonnummer (voor WhatsApp-afstemming en betaling)</li>
              <li>Adresgegevens en postcode (indien ophalen/bezorgen gewenst is)</li>
              <li>E-mailadres (voor offerte of facturatie)</li>
              <li>Informatie en foto’s van jouw messen</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-[#3B7F4B]">3. Doeleinden van de verwerking</h2>
            <p>
              Wij gebruiken jouw gegevens uitsluitend voor de uitvoering van onze slijpdienst: het plannen van ophaal- en bezorgmomenten, het versturen van statusupdates over jouw messen, het afhandelen van betalingen en het leveren van zakelijke facturen. We verkopen jouw gegevens nooit aan derden.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-[#3B7F4B]">4. Bewaartermijn</h2>
            <p>
              Slijpmaat bewaart persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor je gegevens worden verzameld, met uitzondering van de wettelijke fiscale bewaarplicht voor facturen (7 jaar).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-bold text-[#3B7F4B]">5. Jouw rechten</h2>
            <p>
              Je hebt te allen tijde het recht om jouw persoonsgegevens in te zien, te corrigeren of te laten verwijderen. Stuur hiervoor eenvoudig een verzoek naar info@slijpmaat.nl of via WhatsApp.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
