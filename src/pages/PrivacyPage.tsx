import React from 'react';
import { PageId } from '../types';
import { ChevronLeft } from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (page: PageId) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
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
            Privacy &amp; AVG
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mt-2">
            Privacyverklaring Slijpmaat
          </h1>
          <p className="text-xs sm:text-sm text-[#E8EFE8]/80 mt-1">
            Laatst bijgewerkt: maart 2026 &middot; Slijpmaat V.O.F. te Utrecht
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-slate-900">1. Wie zijn wij?</h2>
            <p>
              Slijpmaat (Slijpmaat V.O.F.), gevestigd te Utrecht, is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring. Contact via info@slijpmaat.nl of WhatsApp.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-slate-900">2. Persoonsgegevens die wij verwerken</h2>
            <p>
              Slijpmaat verwerkt jouw persoonsgegevens doordat je gebruikmaakt van onze diensten en/of omdat je deze zelf aan ons verstrekt (bijvoorbeeld via de calculator, WhatsApp of contactformulieren):
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Voor- en achternaam / bedrijfsnaam</li>
              <li>Telefoonnummer (voor WhatsApp-afstemming en Tikkie betaalverzoek)</li>
              <li>Adresgegevens en postcode (indien ophalen/bezorgen gewenst is)</li>
              <li>E-mailadres (voor offerte of facturatie)</li>
              <li>Informatie en foto’s van jouw messen</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-slate-900">3. Doeleinden van de verwerking</h2>
            <p>
              Wij gebruiken jouw gegevens uitsluitend voor:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Het plannen, ophalen, slijpen en bezorgen van jouw messen;</li>
              <li>Het versturen van de specificatie en het betaalverzoek of de factuur;</li>
              <li>Vragen of afstemming over eventuele chips of reparaties.</li>
            </ul>
            <p>
              Wij verkopen of delen jouw gegevens nóóit met derden voor marketingdoeleinden.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-slate-900">4. Bewaartermijn &amp; Rechten</h2>
            <p>
              Gegevens worden bewaard zolang noodzakelijk voor de uitvoering van de opdracht en wettelijke administratieve verplichtingen (bijv. Belastingdienst voor facturen). Je hebt te allen tijde het recht om inzage, correctie of verwijdering van jouw persoonsgegevens te verzoeken via info@slijpmaat.nl.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
