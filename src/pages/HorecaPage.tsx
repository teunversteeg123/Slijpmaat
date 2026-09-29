import React, { useState } from 'react';
import { PageId } from '../types';
import { SLIJPMAAT_INFO } from '../data/siteData';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Clock,
  Sparkles,
  Store,
  FileText,
  MessageCircle,
  HelpCircle,
  Calendar,
  Send,
  Check
} from 'lucide-react';

interface HorecaPageProps {
  onNavigate: (page: PageId) => void;
}

export const HorecaPage: React.FC<HorecaPageProps> = ({ onNavigate }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    restaurantName: '',
    contactPerson: '',
    phone: '',
    email: '',
    knifeCount: '10-20 messen',
    address: '',
    preferredDay: 'Maandag ophalen, dinsdag terug',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-14 pb-20 bg-[#FAFAFA]">
      {/* Header Banner */}
      <section className="bg-[#244A30] text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold text-[#162E1C] tracking-wider uppercase font-heading bg-[#A9C89E] px-3.5 py-1.5 rounded-full inline-block">
              Zakelijke slijpservice voor restaurants &amp; chefs in Utrecht
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Professionele messenslijper voor de horeca.
            </h1>
            <p className="text-base sm:text-lg text-[#E8EFE8]/90 leading-relaxed">
              Geen sneldraaiende machines die het staal ontlaten. Wij slijpen jouw messenbrigade met de hand op waterstenen. 
              Strakke afstemming, ophalen in Utrecht en heldere btw-facturatie.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik neem contact op namens een restaurant/horecakeuken in Utrecht voor het slijpen van onze messen.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-[#E8EFE8] text-[#244A30] font-bold text-sm transition-all shadow flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#3B7F4B]" />
                <span>Bespreek je slijpbeurt met je Maat</span>
              </a>
              <a
                href="#zakelijk-formulier"
                className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all flex items-center gap-2"
              >
                <span>Vraag zakelijke offerte aan</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Redenen waarom chefs voor waterstenen kiezen */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#d9e1d7] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8EFE8] text-[#3B7F4B] flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading text-[#244A30]">
              Behoud van staalhardheid &amp; snede
            </h3>
            <p className="text-xs sm:text-sm text-[#203728] leading-relaxed">
              Droge machines verhitten de apex tot boven 200°C waardoor het staal zacht wordt. Onze waterstenen koelen constant. De snede houdt wekenlang stand op de snijplank.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#d9e1d7] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8EFE8] text-[#3B7F4B] flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading text-[#244A30]">
              Afgestemd op mise-en-place
            </h3>
            <p className="text-xs sm:text-sm text-[#203728] leading-relaxed">
              We halen de messen op na de zondag- of maandagservice en bezorgen ze voor de dinsdag- of woensdagmise-en-place weer vlijmscherp terug in jullie keuken.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#d9e1d7] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#A9C89E] text-[#162E1C] flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading text-[#244A30]">
              Eenvoudige btw-facturatie
            </h3>
            <p className="text-xs sm:text-sm text-[#203728] leading-relaxed">
              Geen gedoe met losse bonnetjes. Nette digitale factuur op bedrijfsnaam met gespecificeerde btw na oplevering.
            </p>
          </div>
        </div>
      </section>

      {/* Zakelijk Formulier & WhatsApp Direct */}
      <section id="zakelijk-formulier" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#d9e1d7] shadow-xs space-y-6">
          <div className="border-b border-[#F2F2EC] pb-4">
            <span className="text-xs uppercase tracking-wider font-bold text-[#3B7F4B] font-heading">
              Snel schakelen
            </span>
            <h2 className="text-2xl font-bold font-heading text-[#244A30] mt-1">
              Zakelijke aanvraag voor horeca in Utrecht
            </h2>
          </div>

          {formSubmitted ? (
            <div className="p-6 bg-[#E8EFE8] rounded-2xl border border-[#3B7F4B]/30 text-center space-y-2">
              <CheckCircle className="w-8 h-8 text-[#3B7F4B] mx-auto" />
              <h3 className="font-bold text-[#244A30] text-lg">Bedankt voor je aanvraag!</h3>
              <p className="text-xs sm:text-sm text-[#203728]">
                Teun of Mike neemt binnen enkele uren contact met je op voor het ophaalmoment en een passende offerte.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#244A30] mb-1">Restaurant / Zaak *</label>
                  <input
                    type="text"
                    required
                    placeholder="Bijv. Bistro De Gracht"
                    value={formData.restaurantName}
                    onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#d9e1d7] text-sm focus:outline-none focus:ring-2 focus:ring-[#3B7F4B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#244A30] mb-1">Contactpersoon *</label>
                  <input
                    type="text"
                    required
                    placeholder="Bijv. Chef Dennis"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#d9e1d7] text-sm focus:outline-none focus:ring-2 focus:ring-[#3B7F4B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#244A30] mb-1">Telefoonnummer *</label>
                  <input
                    type="tel"
                    required
                    placeholder="06 12 34 56 78"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#d9e1d7] text-sm focus:outline-none focus:ring-2 focus:ring-[#3B7F4B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#244A30] mb-1">Aantal messen (schatting)</label>
                  <select
                    value={formData.knifeCount}
                    onChange={(e) => setFormData({ ...formData, knifeCount: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#d9e1d7] text-sm focus:outline-none focus:ring-2 focus:ring-[#3B7F4B]"
                  >
                    <option value="5-10 messen">5 - 10 messen</option>
                    <option value="10-20 messen">10 - 20 messen</option>
                    <option value="20-40 messen">20 - 40 messen</option>
                    <option value="40+ messen">40+ messen (volledige brigade)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#244A30] mb-1">Opmerkingen of wensen</label>
                <textarea
                  rows={2}
                  placeholder="Bijv. Maandag na de lunch ophalen, voorkeur voor 15 graden snijkant"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#d9e1d7] text-sm focus:outline-none focus:ring-2 focus:ring-[#3B7F4B]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#3B7F4B] hover:bg-[#244A30] text-white font-bold text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Verstuur zakelijke aanvraag</span>
                </button>

                <a
                  href={`https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik wil graag direct zakelijk afstemmen over een horeca slijpbeurt in Utrecht.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#3B7F4B] hover:text-[#244A30] flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Of stuur direct een WhatsApp</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
