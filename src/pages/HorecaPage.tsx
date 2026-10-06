import React, { useState } from 'react';
import { PageId } from '../types';
import { SLIJPMAAT_INFO } from '../data/siteData';
import { GoogleIcon, GOOGLE_REVIEW_COUNT } from '../components/GoogleReviewsSection';
import { ResultatenSlider } from '../components/ResultatenSlider';
import {
  ArrowDown,
  ArrowRight,
  ChevronLeft,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Plus,
  Send,
  CheckCircle2,
  FileText,
  ShieldCheck
} from 'lucide-react';

interface HorecaPageProps {
  onNavigate?: (page: PageId) => void;
}

export const HorecaPage: React.FC<HorecaPageProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik neem contact op namens een restaurant/horecakeuken in Utrecht voor het slijpen van onze messen.')}`;

  // Formulier state (ongewijzigd gehouden voor zakelijke aanvragen)
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

  // 3 Korte stappen vooraf (Warm cream #F7F4EC)
  const stepsBefore = [
    {
      num: '1',
      title: 'Aanmelden & afstemmen',
      text: 'Geef via het formulier of WhatsApp door hoeveel messen jullie hebben en wanneer de keuken dicht is of wisselt.',
    },
    {
      num: '2',
      title: 'Ophalen na de service',
      text: 'Wij halen de messenrol of messenblokken direct op bij jullie keukendeur op een rustig moment (bijv. na de zondagservice).',
    },
    {
      num: '3',
      title: 'Scherp voor mise-en-place',
      text: 'Binnen 24–48 uur leveren we de brigade weer vlijmscherp af vóór de volgende service, inclusief overzichtelijke digitale btw-factuur.',
    },
  ];

  // 4 Stappen in de groene sectie (Na je aanvraag)
  const postOrderSteps = [
    {
      step: '1',
      title: 'Snel voorstel & planning',
      desc: 'Binnen enkele uren ontvang je van Teun of Mike een helder voorstel en stemmen we het perfecte ophaalmoment af.',
      icon: Clock3,
    },
    {
      step: '2',
      title: 'Ophalen aan de keukendeur',
      desc: 'Geen gedoe met verzending. We halen de messen persoonlijk op in Utrecht, afgestemd op jullie shifts.',
      icon: MapPin,
    },
    {
      step: '3',
      title: 'Handmatig geslepen',
      desc: 'Handmatig geslepen op Japanse Shapton waterstenen. Geen oververhitting of ontlating; het staal blijft bikkelhard.',
      icon: Sparkles,
    },
    {
      step: '4',
      title: 'Retour & btw-factuur',
      desc: 'Je messen weer op tijd op de snijplank. Nette digitale factuur op bedrijfsnaam met 14 dagen betaaltermijn.',
      icon: FileText,
    },
  ];

  // 5 Veelgestelde vragen voor Horeca & Zakelijke klanten
  const faqs = [
    {
      question: 'Kunnen jullie ophalen na de zondag- of maandagservice?',
      answer: 'Jazeker! Dit is de meest gekozen optie door restaurants in Utrecht. We halen de messen op na de zondagservice of op maandagochtend, en leveren ze dinsdag of woensdag ruim voor de middagmise-en-place weer vlijmscherp af. Je brigade zit geen minuut zonder messen.',
    },
    {
      question: 'Hoe werkt de zakelijke facturatie en btw?',
      answer: 'Je ontvangt van ons een overzichtelijke digitale btw-factuur (21% btw gespecificeerd) op bedrijfsnaam per e-mail. Je hebt een standaard betaaltermijn van 14 dagen via bankoverschrijving. Geen gedoe met losse bonnetjes of contant geld in de keuken.',
    },
    {
      question: 'Waarom slijpen jullie op waterstenen i.p.v. een snelle bandslijper?',
      answer: 'Sneldraaiende slijpmachines en bandslijpers genereren wrijvingshitte die de dunne snijkant binnen seconden boven de 200°C verhit. Hierdoor ontlaat het geharde staal, wordt het zacht en is het mes snel weer bot. Bovendien slijpen machines onnodig veel staal weg. Onze waterstenen koelen constant, waardoor messen jarenlang meegaan en hun vlijmscherpe standtijd behouden.',
    },
    {
      question: 'Slijpen jullie zowel restaurant-messen als persoonlijke messen van koks?',
      answer: 'Absoluut. Veel chefs en koks geven hun eigen Japanse messen (zoals Global, MAC, Kai Shun of handgesmede koolstofstalen messen) mee in dezelfde messenrol met de algemene keukensnijders van het restaurant. We beoordelen elk mes individueel en passen de slijphoek aan op het type staal en gebruik.',
    },
    {
      question: 'Kunnen we een periodiek schema of vaste slijpronde afspreken?',
      answer: 'Ja, dat kan heel laagdrempelig. Veel keukens kiezen voor een vaste ronde per 4, 6 of 8 weken. We sturen dan een paar dagen van tevoren even een appje ter herinnering. Je zit nooit vast aan een wurgcontract of langdurige verplichting; we slijpen alleen wanneer jullie messen eraan toe zijn.',
    },
  ];

  return (
    <div className="overflow-hidden bg-[#FAFAF8]">
      {/* 1. HERO SECTION (Zelfde lay-out als Particulieren: tekst links, videocontainer rechts) */}
      <section className="relative overflow-hidden bg-[#FAFAF8] pb-4 pt-2 sm:pb-8 sm:pt-4 lg:min-h-[580px] lg:pb-12">
        {/* Crisp organic SVG blob in top-right background (geen wazige gloed) */}
        <svg
          aria-hidden="true"
          viewBox="0 0 520 520"
          className="pointer-events-none absolute -right-20 top-4 hidden h-[520px] w-[520px] text-[#E8EFE8] opacity-75 lg:block"
        >
          <path
            fill="currentColor"
            d="M416 72c58 48 88 135 78 213-11 78-62 147-132 181-69 34-157 34-221-4-64-39-104-116-100-193 4-76 53-151 120-194 67-42 197-51 255-3Z"
          />
        </svg>

        <div className="relative z-10 grid grid-cols-1 items-center gap-7 py-6 sm:py-10 lg:min-h-[540px] lg:grid-cols-2 lg:gap-12 lg:py-8 xl:gap-20">
          {/* Left: Copy & CTAs */}
          <div className="order-1 px-4 sm:px-6 lg:order-1 lg:max-w-2xl lg:px-0 lg:pl-4 xl:pl-8">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#3B7F4B] sm:text-sm">
              Voor restaurants, brigades &amp; chefs in Utrecht
            </p>
            <h1 className="mt-3 max-w-3xl font-heading text-4xl font-bold leading-[1.02] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-5xl xl:text-6xl">
              Jouw messenbrigade weer scherp. Zonder gedoe.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Geen sneldraaiende machines die het staal ontlaten. Wij slijpen jullie messen met de hand op Japanse waterstenen. Strak afgestemd op de mise-en-place, gratis opgehaald in Utrecht en heldere btw-facturatie.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href="#zakelijk-formulier"
                className="group inline-flex min-h-13 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] active:scale-[0.98] sm:text-base cursor-pointer"
              >
                <span>Vraag zakelijke offerte aan</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </a>

              <a
                href="#faq"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#E87B5B]/20 bg-[#FCEEE8] px-7 py-3.5 text-sm font-bold text-[#C95E3E] transition-all duration-200 hover:bg-[#F8DFD6] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] sm:text-base"
              >
                <span>Ik heb een vraag</span>
                <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right: Tomatenvideo met herkenbare organische blob erachter (identiek aan Particulieren) */}
          <div className="order-2 w-full lg:order-2 px-4 sm:px-6 lg:px-0 relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-5 -left-5 sm:-bottom-7 sm:-left-7 h-40 w-40 sm:h-52 sm:w-52 rounded-[42%_58%_62%_38%/55%_42%_58%_45%] bg-[#A9C89E] opacity-90 z-0 transition-transform duration-500 hover:scale-105"
            />
            <div className="relative z-10 mx-auto aspect-[4/3] w-[92%] overflow-hidden rounded-[2rem] bg-[#203728] shadow-xs sm:aspect-[16/11] sm:w-[70%] sm:rounded-[2.5rem] lg:aspect-square">
              <video
                className="h-full w-full object-cover"
                src="/assets/tomaat-website-video.mp4"
                poster="/assets/tomaat-video-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Een scherp keukenmes snijdt soepel door een tomaat"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR (Zekerheden voor de horeca) */}
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

      {/* 3. VOORAF: KORTE BEZOEKERSFLOW (Warm cream #F7F4EC) */}
      <section className="relative overflow-hidden bg-[#F7F4EC] px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-[55%_45%_60%_40%/50%_55%_45%_50%] bg-[#E8EFE8]/70"
        />

        <div className="relative mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Zo werkt het voor zakelijke keukens</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Eenvoudig geregeld voor jouw brigade</h2>
            <p className="mt-3 text-base leading-7 text-[#657068]">
              Drie duidelijke stappen. We sluiten naadloos aan op jullie keukenschema zodat de service nooit stilvalt.
            </p>
          </div>

          {/* 3 Korte Stappen */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {stepsBefore.map((item) => (
              <div
                key={item.num}
                className="group relative rounded-[2rem] border border-[#d9e1d7] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3B7F4B]/50 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F9E4DE] font-heading text-sm font-bold text-[#C95E3E]">
                  {item.num}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold text-[#3B7F4B]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#657068]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HET BESTELFORMULIER (ZAKELIJK FORMULIER) - Bewaard zoals afgesproken */}
      <section id="zakelijk-formulier" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C95E3E]">Zakelijk Formulier</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Zakelijke aanvraag &amp; offerte</h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-[#657068]">
              Vul je gegevens in of neem direct contact op via WhatsApp. We reageren snel met een helder voorstel en ophaalvoorstel.
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3B7F4B]">Opmerkingen of gewenste planning</label>
                  <textarea
                    rows={3}
                    placeholder="Bijv. Zondagavond ophalen na de service, dinsdag voor 13:00 retour voor mise-en-place"
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

      {/* 5. RESULTATEN SLIDER (Eenvoudige lege container, klaar voor latere horeca-foto's) */}
      <section className="relative overflow-hidden bg-[#FAFAF8] px-4 pb-14 pt-2 sm:px-6 sm:pb-20 sm:pt-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <ResultatenSlider />
        </div>
      </section>

      {/* 6. WAT GEBEURT ER NA JE AANVRAAG? (Green section with wave dividers) */}
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
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E8EFE8]">Wat gebeurt er daarna?</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">Wat gebeurt er na je aanvraag?</h2>
            <p className="mt-4 text-base leading-7 text-[#E8EFE8]">
              Geen ingewikkelde contracten of wachttijden. Zo verloopt de afstemming en het slijpproces voor jullie keuken.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {postOrderSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="group relative rounded-[1.75rem] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F9E4DE] font-heading text-sm font-bold text-[#C95E3E]">
                        {step.step}
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8EFE8] text-[#3B7F4B]">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>

                    <h3 className="mt-5 font-heading text-lg font-bold text-[#3B7F4B]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#657068]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. VEELGESTELDE VRAGEN VOOR ZAKELIJKE KLANTEN (Exacte Particulieren-stijl met plusje) */}
      <section id="faq" className="relative scroll-mt-24 overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-[#F4F7F4] opacity-80"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="max-w-md">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Veelgestelde vragen</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Vragen over zakelijk slijpen?</h2>
            <p className="mt-4 text-base leading-7 text-[#657068]">
              Hier vind je direct antwoord op de meest gestelde vragen van chefs en ondernemers over planning, stenen en facturatie.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#3B7F4B] transition-colors hover:text-[#315F3B]"
            >
              <span>Bespreek direct via WhatsApp met Teun of Mike</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[#d9e1d7]/60 bg-[#FAFAF8] p-5 shadow-xs transition-all duration-200 hover:border-[#3B7F4B]/40 hover:bg-white open:border-[#3B7F4B]/50 open:bg-white open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-heading text-base font-bold text-[#3B7F4B] marker:hidden sm:text-lg">
                  <span>{faq.question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8EFE8] text-[#3B7F4B] transition-transform duration-200 group-open:rotate-45">
                    <Plus className="h-4 w-4" aria-hidden="true" />
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#657068]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CONTACT BANNER with top and bottom wave dividers */}
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
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.36em] text-white sm:text-sm">Zakelijk Contact</p>
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
