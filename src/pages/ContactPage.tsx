import React, { useState } from 'react';
import { PageId } from '../types';
import { SLIJPMAAT_INFO } from '../data/siteData';
import {
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Vraag over messen slijpen',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-[#244A30] text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-[#A9C89E] tracking-wider uppercase font-heading bg-[#315F3B] px-3.5 py-1.5 rounded-full inline-block">
              Persoonlijk &amp; Snel
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Contact met je Maat.
            </h1>
            <p className="text-base sm:text-lg text-[#E8EFE8]/90 leading-relaxed">
              Heb je een vraag, wil je een afspraak maken of advies over een beschadigd mes? Neem direct contact op met Teun en Mike.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct channels & Address Notice */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Hero Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#E8EFE8] border border-[#A9C89E]/60 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center">
                <MessageCircle className="w-6 h-6 fill-white" />
              </div>
              <h2 className="text-xl font-bold font-heading text-[#244A30]">
                Het snelst: stuur een WhatsApp
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Via WhatsApp kunnen we direct meekijken naar foto’s van jouw messen en vlot een ophaal- of brengmoment inplannen.
              </p>
              <div>
                <a
                  href={`https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik wil graag contact met jullie opnemen!')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-bold text-xs sm:text-sm transition-colors shadow"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>App met Teun &amp; Mike ({SLIJPMAAT_INFO.whatsappDisplay})</span>
                </a>
              </div>
            </div>

            {/* Crucial Address Notice */}
            <div className="p-6 rounded-3xl bg-[#F7F4EC] border border-[#dcd7cb] space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-900 font-bold font-heading text-base">
                <MapPin className="w-5 h-5 text-[#E87B5B]" />
                <h3>Vestiging Utrecht &middot; Uitsluitend op afspraak</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                <strong>Let op: Slijpmaat heeft géén inloopwinkel.</strong> Langsbrengen en ophalen kan uitsluitend na voorafgaande afspraak via WhatsApp of ons contactformulier. Zo garanderen we dat we rustig de tijd hebben voor jouw messen.
              </p>
              <div className="pt-2 text-xs text-slate-500">
                Doorlooptijd: Binnen 48 uur na ophalen of afgifte weer klaar.
              </div>
            </div>

            {/* Email contact */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-900 font-bold font-heading">
                <Mail className="w-4 h-4 text-[#3B7F4B]" />
                <h3>E-mail</h3>
              </div>
              <p className="text-slate-600">
                Liever per e-mail? Stuur je bericht naar{' '}
                <a href={`mailto:${SLIJPMAAT_INFO.email}`} className="text-[#3B7F4B] font-semibold hover:underline">
                  {SLIJPMAAT_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* Right Column: Web Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xs">
            <h2 className="text-2xl font-bold font-heading text-slate-900 mb-2">
              Stuur een bericht
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Vul jouw vraag of verzoek in en we nemen binnen 24 uur contact met je op.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#E8EFE8] border border-[#A9C89E] text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-[#3B7F4B] mx-auto" />
                <h3 className="text-xl font-bold font-heading text-[#244A30]">
                  Bericht verzonden!
                </h3>
                <p className="text-xs sm:text-sm text-slate-700">
                  Bedankt voor je bericht, {formData.name}. Teun of Mike reageert zo snel mogelijk.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Jouw naam *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Bijv. Sarah de Wit"
                      value={formData.name}
                      onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B7F4B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Telefoonnummer *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="06 12 34 56 78"
                      value={formData.phone}
                      onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B7F4B]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      E-mailadres *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@voorbeeld.nl"
                      value={formData.email}
                      onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B7F4B]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Onderwerp
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData(p => ({ ...p, subject: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B7F4B] bg-white"
                    >
                      <option value="Slijpbeurt particulier">Slijpbeurt particulier plannen</option>
                      <option value="Horeca & Restaurant afstemming">Horeca &amp; Zakelijke slijpbeurt</option>
                      <option value="Beschadigd mes / chip beoordeling">Beschadigd mes / chip beoordeling</option>
                      <option value="Langsbrengen buiten Utrecht">Langsbrengen op afspraak (buiten Utrecht)</option>
                      <option value="Overige vraag">Overige vraag</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Jouw bericht *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Vertel ons over je messen of stel je vraag..."
                      value={formData.message}
                      onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B7F4B]"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#E87B5B] hover:bg-[#C95E3E] text-white font-bold text-sm transition-all shadow flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Verstuur bericht</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
