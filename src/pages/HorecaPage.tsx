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
  Sparkles,
  Store,
  FileText,
  Calendar,
  Send,
  CheckCircle2,
  Check,
  ShieldCheck,
  Building2
} from 'lucide-react';

interface HorecaPageProps {
  onNavigate: (page: PageId) => void;
}

export const HorecaPage: React.FC<HorecaPageProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik neem contact op namens een restaurant/horecakeuken in Utrecht voor het slijpen van onze messen.')}`;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    restaurantName: '',
    contactPerson: '',
    phone: '',
    email: '',
    knifeCount: '10-20 messen',
    address: '',
    preferredDay: 'Maandag ophalen, dinsdag terug',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const horecaSteps = [
    { number: '1', title: 'Afstemmen', text: 'Stuur een berichtje via WhatsApp of het formulier met het aantal messen en gewenste ophaalmoment.' },
    { number: '2', title: 'Ophalen na service', text: 'We halen de messenrol of messenblokken op bij jouw keuken op een rustig moment (bijv. na de zondagservice).' },
    { number: '3', title: 'Watergekoeld slijpen', text: 'Elk mes wordt handmatig geslepen op keramische Shapton waterstenen met behoud van fabrieksgeometrie.' },
    { number: '4', title: 'Scherp voor mise-en-place', text: 'Binnen 24–48 uur leveren we je brigade weer vlijmscherp af inclusief nette btw-factuur.' },
  ];

  const reasons = [
    {
      title: 'Behoud van staalhardheid & snede',
      text: 'Droge machines verhitten de apex tot boven 200°C waardoor het staal ontlaat en zacht wordt. Onze waterstenen koelen constant. De snede houdt wekenlang stand op de snijplank.',
      icon: Sparkles,
    },
    {
      title: 'Strak afgestemd op mise-en-place',
      text: 'We halen de messen op na de zondag- of maandagservice en bezorgen ze voor de dinsdag- of woensdagmise-en-place weer vlijmscherp terug in jullie keuken.',
      icon: Clock3,
    },
    {
      title: 'Eenvoudige digitale btw-factuur',
      text: 'Geen gedoe met losse bonnetjes. Nette digitale factuur op bedrijfsnaam met gespecificeerde btw en betalingstermijn van 14 dagen.',
      icon: FileText,
    },
  ];

  return (
    <div className="overflow-hidden bg-[#FAFAF8]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#FAFAF8] pb-8 pt-4 sm:pb-12 sm:pt-6 lg:pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-16 h-[340px] w-[340px] rounded-full bg-[#F9E4DE] opacity-80 blur-2xl sm:h-[480px] sm:w-[480px] sm:blur-3xl lg:-right-10 lg:top-2 lg:h-[560px] lg:w-[560px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#C95E3E] sm:text-sm">
              Voor restaurants, brigades &amp; chefs in Utrecht
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-6xl">
              Professioneel messenslijpen voor de horeca.
            </h1>
            <p className="mt-5 text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Geen sneldraaiende machines die het staal ontlaten. Wij slijpen jouw messenbrigade met de hand op Japanse waterstenen. Strakke afstemming, gratis ophalen in Utrecht en heldere btw-facturatie.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href="#zakelijk-formulier"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] active:scale-[0.98] sm:text-base cursor-pointer"
              >
                <span>Vraag zakelijke offerte aan</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#E87B5B]/20 bg-[#FCEEE8] px-7 py-3.5 text-sm font-bold text-[#C95E3E] transition-all duration-200 hover:bg-[#F8DFD6] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] sm:text-base"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Bespreek direct via WhatsApp</span>
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
              <span className="text-sm font-bold text-[#3B7F4B]">Afgestemd op mise-en-place</span>
            </div>
            <div className="flex items-center gap-3 sm:justify-center sm:px-5">
              <FileText className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
              <span className="text-sm font-bold text-[#3B7F4B]">Heldere btw-facturatie</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DRIE REDENEN WAAROM CHEFS VOOR WATERSTENEN KIEZEN */}
      <section className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Waarom chefs kiezen voor Slijpmaat</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Gemaakt voor de professionele keuken</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="rounded-[2rem] border border-[#d9e1d7] bg-white p-7 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3B7F4B]/50 hover:shadow-md"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8EFE8] text-[#3B7F4B]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-bold text-[#3B7F4B]">{r.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#657068]">{r.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. HORECA STAPPENPLAN (Green background with wave dividers) */}
      <section className="relative overflow-hidden bg-[#3B7F4B] px-4 pb-28 pt-20 sm:px-6 sm:pb-36 sm:pt-24 lg:px-8">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="pointer-events-none absolute left-0 top-0 h-10 w-full text-[#FAFAF8] sm:h-14 lg:h-16"
        >
          <path
            fill="currentColor"
            d="M0,0 L1440,0 L1440,20 C1180,55 900,10 620,40 C380,68 180,18 0,35 Z"
          />
        </svg>

        <svg
          aria-hidden="true"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute bottom-0 left-0 h-14 w-full text-white sm:h-20 lg:h-24"
        >
          <path
            fill="currentColor"
            d="M0,100 L1440,100 L1440,30 C1200,75 920,15 620,55 C380,85 180,25 0,65 Z"
          />
        </svg>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E8EFE8]">Heldere afstemming</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">Zo regelen we het voor je keuken</h2>
            <p className="mt-4 text-base leading-7 text-[#E8EFE8]">
              Geen ingewikkelde abonnementen of contracten. Plan een slijpronde wanneer jullie messen eraan toe zijn.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {horecaSteps.map((step) => (
              <div
                key={step.number}
                className="group relative rounded-[1.75rem] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F9E4DE] font-heading text-sm font-bold text-[#C95E3E]">
                    {step.number}
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-[#3B7F4B]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#657068]">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ZAKELIJK FORMULIER & WHATSAPP DIRECT */}
      <section id="zakelijk-formulier" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C95E3E]">Snel schakelen</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Zakelijke aanvraag &amp; offerte</h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-[#657068]">
              Vul je gegevens in of neem direct contact op via WhatsApp. We reageren snel met een helder voorstel.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] border border-[#d9e1d7] bg-white p-6 shadow-sm sm:p-10 lg:p-12">
            {formSubmitted ? (
              <div className="rounded-2xl border border-[#3B7F4B]/30 bg-[#E8EFE8] p-8 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-[#3B7F4B]" />
                <h3 className="mt-4 font-heading text-2xl font-bold text-[#3B7F4B]">Bedankt voor je aanvraag!</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#657068]">
                  Teun of Mike neemt binnen enkele uren contact met je op voor het ophaalmoment en een passende offerte.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3B7F4B]">Restaurant / Zaak *</label>
                    <input
                      type="text"
                      required
                      placeholder="Bijv. Bistro De Gracht"
                      value={formData.restaurantName}
                      onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-[#d9e1d7] bg-[#FAFAF8] px-4 py-3 text-sm text-[#244A30] placeholder-[#657068]/60 focus:border-[#3B7F4B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3B7F4B]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3B7F4B]">Contactpersoon *</label>
                    <input
                      type="text"
                      required
                      placeholder="Bijv. Chef Dennis"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-[#d9e1d7] bg-[#FAFAF8] px-4 py-3 text-sm text-[#244A30] placeholder-[#657068]/60 focus:border-[#3B7F4B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3B7F4B]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3B7F4B]">Telefoonnummer *</label>
                    <input
                      type="tel"
                      required
                      placeholder="06 12 34 56 78"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-[#d9e1d7] bg-[#FAFAF8] px-4 py-3 text-sm text-[#244A30] placeholder-[#657068]/60 focus:border-[#3B7F4B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3B7F4B]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3B7F4B]">Aantal messen (schatting)</label>
                    <select
                      value={formData.knifeCount}
                      onChange={(e) => setFormData({ ...formData, knifeCount: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-[#d9e1d7] bg-[#FAFAF8] px-4 py-3 text-sm text-[#244A30] focus:border-[#3B7F4B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3B7F4B]/20"
                    >
                      <option value="5-10 messen">5 – 10 messen</option>
                      <option value="10-20 messen">10 – 20 messen</option>
                      <option value="20-40 messen">20 – 40 messen</option>
                      <option value="40+ messen">40+ messen (volledige brigade)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3B7F4B]">Opmerkingen of wensen</label>
                  <textarea
                    rows={3}
                    placeholder="Bijv. Maandagochtend ophalen na de service, dinsdag voor 14:00 retour"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-[#d9e1d7] bg-[#FAFAF8] px-4 py-3 text-sm text-[#244A30] placeholder-[#657068]/60 focus:border-[#3B7F4B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3B7F4B]/20"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="group inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-8 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-md cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>Verstuur zakelijke aanvraag</span>
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#3B7F4B] hover:text-[#315F3B]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Of app direct met Teun &amp; Mike</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CONTACT BANNER with top and bottom wave dividers */}
      <section id="horeca-contact" className="relative scroll-mt-20 overflow-hidden bg-[#E87B5B] px-4 pb-24 pt-20 text-white sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
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
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.36em] text-white sm:text-sm">Horeca Contact</p>
          <h2 className="mt-6 max-w-5xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Direct afstemmen met je Maat
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/95 sm:text-xl">
            Geen tussenpersonen of wachttijden. Bel of app direct met Teun of Mike over jullie keukenschema.
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
