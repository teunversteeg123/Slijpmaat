import React, { useState } from 'react';
import { PageId } from '../types';
import { SLIJPMAAT_INFO } from '../data/siteData';
import { GoogleIcon, GOOGLE_REVIEW_COUNT } from '../components/GoogleReviewsSection';
import {
  ArrowRight,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik wil graag contact met jullie opnemen!')}`;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Vraag over messen slijpen',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="overflow-hidden bg-[#FAFAF8]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#FAFAF8] pb-8 pt-4 sm:pb-12 sm:pt-6 lg:pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-16 h-[340px] w-[340px] rounded-full bg-[#E3EFE5] opacity-80 blur-2xl sm:h-[480px] sm:w-[480px] sm:blur-3xl lg:-right-10 lg:top-2 lg:h-[560px] lg:w-[560px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#3B7F4B] sm:text-sm">
              Persoonlijk &amp; Snel
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-6xl">
              Contact met je Maat.
            </h1>
            <p className="mt-5 text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Heb je een vraag, wil je een afspraak maken of advies over een beschadigd mes? Je spreekt altijd direct met Teun of Mike.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] active:scale-[0.98] sm:text-base cursor-pointer"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Stuur je Maat een appje</span>
              </a>
              <a
                href="tel:+31682074967"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#E87B5B]/20 bg-[#FCEEE8] px-7 py-3.5 text-sm font-bold text-[#C95E3E] transition-all duration-200 hover:bg-[#F8DFD6] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] sm:text-base"
              >
                <Phone className="h-4 w-4" />
                <span>Bel direct met Teun &amp; Mike</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section aria-label="Zekerheden" className="relative z-20 px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-2xl border border-[#d9e1d7]/70 bg-white/95 px-6 py-4 shadow-[0_4px_24px_rgba(36,74,48,0.04)] backdrop-blur-xs">
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-0">
            <div className="flex flex-wrap items-center gap-2 sm:justify-center sm:border-r sm:border-[#d9e1d7]/70 sm:px-5">
              <GoogleIcon />
              <span className="text-sm leading-none tracking-[0.06em] text-[#FABB05]" aria-label="5 van de 5 sterren">★★★★★</span>
              <span className="text-sm font-bold text-[#3B7F4B]">{GOOGLE_REVIEW_COUNT} reviews</span>
            </div>
            <div className="flex items-center gap-3 sm:justify-center sm:border-r sm:border-[#d9e1d7]/70 sm:px-5">
              <Clock3 className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
              <span className="text-sm font-bold text-[#3B7F4B]">Gemiddeld binnen 1 uur reactie</span>
            </div>
            <div className="flex items-center gap-3 sm:justify-center sm:px-5">
              <MapPin className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
              <span className="text-sm font-bold text-[#3B7F4B]">Uitsluitend op afspraak</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONTACT CHANNELS & FORM */}
      <section className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
          {/* Left Column: Direct channels */}
          <div className="space-y-6 lg:col-span-5">
            {/* WhatsApp Hero Card */}
            <div className="rounded-[2.5rem] border border-[#A9C89E]/70 bg-[#E8EFE8] p-7 sm:p-9 shadow-xs space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3B7F4B] text-white">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-[#3B7F4B]">
                Het snelst: stuur een appje
              </h2>
              <p className="text-sm leading-relaxed text-[#657068]">
                Stuur een foto van je messen via WhatsApp. We kunnen direct meekijken naar de snede en vlot een ophaal- of brengmoment afspreken.
              </p>
              <div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#3B7F4B] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#315F3B] hover:shadow"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>App met Teun &amp; Mike ({SLIJPMAAT_INFO.whatsappDisplay})</span>
                </a>
              </div>
            </div>

            {/* Address & Home Notice */}
            <div className="rounded-[2rem] border border-[#d9e1d7] bg-[#F7F4EC] p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-5 w-5 text-[#E87B5B]" />
                <h3 className="font-heading text-lg font-bold text-[#3B7F4B]">Utrecht &middot; Wij werken vanuit huis</h3>
              </div>
              <p className="text-sm leading-relaxed text-[#657068]">
                <strong className="text-[#3B7F4B]">Let op: wij werken vanuit huis en hebben géén inloopwinkel.</strong> Langsbrengen en ophalen kan uitsluitend na voorafgaande afspraak via WhatsApp. Zo garanderen we dat er iemand klaarstaat om je messen met zorg in ontvangst te nemen.
              </p>
              <div className="border-t border-[#d9e1d7]/70 pt-3 text-xs font-semibold text-[#3B7F4B]">
                Adres: {SLIJPMAAT_INFO.fullAddress}
              </div>
            </div>

            {/* Email contact */}
            <div className="rounded-[2rem] border border-[#d9e1d7] bg-white p-6 sm:p-8 space-y-2">
              <div className="flex items-center gap-2.5">
                <Mail className="h-5 w-5 text-[#3B7F4B]" />
                <h3 className="font-heading text-lg font-bold text-[#3B7F4B]">E-mail</h3>
              </div>
              <p className="text-sm text-[#657068]">
                Liever per e-mail? Stuur je bericht naar{' '}
                <a href={`mailto:${SLIJPMAAT_INFO.email}`} className="font-bold text-[#3B7F4B] underline decoration-[#A9C89E] underline-offset-4 hover:text-[#315F3B]">
                  {SLIJPMAAT_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* Right Column: Web Contact Form */}
          <div className="rounded-[2.5rem] border border-[#d9e1d7] bg-white p-7 shadow-xs sm:p-10 lg:col-span-7">
            <h2 className="font-heading text-2xl font-bold text-[#3B7F4B] sm:text-3xl">
              Stuur een online bericht
            </h2>
            <p className="mt-2 text-sm text-[#657068]">
              Vul jouw vraag of verzoek in en we nemen doorgaans binnen enkele uren contact met je op.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-[#3B7F4B]/30 bg-[#E8EFE8] p-8 text-center space-y-3">
                <CheckCircle2 className="mx-auto h-12 w-12 text-[#3B7F4B]" />
                <h3 className="font-heading text-2xl font-bold text-[#3B7F4B]">
                  Bericht succesvol verzonden!
                </h3>
                <p className="text-sm text-[#657068]">
                  Bedankt voor je bericht, {formData.name}. Teun of Mike reageert zo spoedig mogelijk.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3B7F4B]">
                      Jouw naam *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Bijv. Sarah de Wit"
                      value={formData.name}
                      onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                      className="mt-1.5 w-full rounded-xl border border-[#d9e1d7] bg-[#FAFAF8] px-4 py-3 text-sm text-[#244A30] placeholder-[#657068]/60 focus:border-[#3B7F4B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3B7F4B]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3B7F4B]">
                      Telefoonnummer *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="06 12 34 56 78"
                      value={formData.phone}
                      onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                      className="mt-1.5 w-full rounded-xl border border-[#d9e1d7] bg-[#FAFAF8] px-4 py-3 text-sm text-[#244A30] placeholder-[#657068]/60 focus:border-[#3B7F4B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3B7F4B]/20"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3B7F4B]">
                      E-mailadres *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@voorbeeld.nl"
                      value={formData.email}
                      onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                      className="mt-1.5 w-full rounded-xl border border-[#d9e1d7] bg-[#FAFAF8] px-4 py-3 text-sm text-[#244A30] placeholder-[#657068]/60 focus:border-[#3B7F4B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3B7F4B]/20"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3B7F4B]">
                      Onderwerp
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData((p) => ({ ...p, subject: e.target.value }))}
                      className="mt-1.5 w-full rounded-xl border border-[#d9e1d7] bg-[#FAFAF8] px-4 py-3 text-sm text-[#244A30] focus:border-[#3B7F4B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3B7F4B]/20"
                    >
                      <option value="Slijpbeurt particulier">Slijpbeurt particulier plannen</option>
                      <option value="Horeca & Restaurant afstemming">Horeca &amp; Zakelijke slijpbeurt</option>
                      <option value="Beschadigd mes / chip beoordeling">Beschadigd mes / chip beoordeling</option>
                      <option value="Langsbrengen buiten Utrecht">Langsbrengen op afspraak (buiten Utrecht)</option>
                      <option value="Overige vraag">Overige vraag</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3B7F4B]">
                      Jouw bericht *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Vertel ons over je messen of stel je vraag..."
                      value={formData.message}
                      onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                      className="mt-1.5 w-full rounded-xl border border-[#d9e1d7] bg-[#FAFAF8] px-4 py-3 text-sm text-[#244A30] placeholder-[#657068]/60 focus:border-[#3B7F4B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3B7F4B]/20"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-8 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-md cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>Verstuur bericht</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CONTACT BANNER with top and bottom wave dividers */}
      <section id="contact-footer-banner" className="relative scroll-mt-20 overflow-hidden bg-[#E87B5B] px-4 pb-24 pt-20 text-white sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="pointer-events-none absolute left-0 top-0 h-10 w-full text-white sm:h-14 lg:h-16"
        >
          <path
            fill="currentColor"
            d="M0,0 L1440,0 L1440,15 C1120,50 840,10 560,40 C320,65 140,20 0,35 Z"
          />
        </svg>

        <svg
          aria-hidden="true"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="pointer-events-none absolute bottom-0 left-0 h-10 w-full text-white sm:h-14 lg:h-16"
        >
          <path
            fill="currentColor"
            d="M0,60 L1440,60 L1440,20 C1180,55 900,15 620,45 C380,70 180,25 0,40 Z"
          />
        </svg>

        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.36em] text-white sm:text-sm">Altijd bereikbaar</p>
          <h2 className="mt-6 max-w-5xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Snel antwoord van je Maat
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/95 sm:text-xl">
            Stuur een appje of bel direct. We reageren ook in het weekend vlot op je berichten.
          </p>

          <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[72px] items-center justify-between gap-4 rounded-full bg-white px-7 py-4 font-heading text-lg font-bold text-[#3B7F4B] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFF7F3] hover:shadow-lg sm:px-10 sm:text-xl"
            >
              <span>Stuur je Maat een appje</span>
              <MessageCircle className="h-8 w-8 shrink-0 text-[#3B7F4B] transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
            </a>
            <a
              href="tel:+31682074967"
              className="group inline-flex min-h-[72px] items-center justify-between gap-4 rounded-full bg-white px-7 py-4 font-heading text-lg font-bold text-[#3B7F4B] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFF7F3] hover:shadow-lg sm:px-10 sm:text-xl"
            >
              <span>Bel je Maat</span>
              <Phone className="h-8 w-8 shrink-0 text-[#3B7F4B] transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
