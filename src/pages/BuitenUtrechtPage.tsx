import React from 'react';
import { PageId } from '../types';
import { SLIJPMAAT_INFO } from '../data/siteData';
import { GoogleIcon, GOOGLE_REVIEW_COUNT } from '../components/GoogleReviewsSection';
import {
  MapPin,
  MessageCircle,
  Package,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock3,
  Car,
  AlertTriangle,
  Plus,
  Phone
} from 'lucide-react';

interface BuitenUtrechtPageProps {
  onNavigate: (page: PageId) => void;
}

export const BuitenUtrechtPage: React.FC<BuitenUtrechtPageProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik kom van buiten Utrecht en wil graag mijn messen laten slijpen op afspraak!')}`;

  const faqs = [
    {
      q: 'Kan ik zomaar langskomen zonder afspraak?',
      a: 'Nee, Slijpmaat heeft bewust géén traditionele inloopbalie. We werken geconcentreerd aan de werkbank met vlijmscherp gereedschap. Door vooraf via WhatsApp even af te stemmen, weet je zeker dat Teun of Mike persoonlijk aanwezig is om je messen veilig aan te nemen.',
    },
    {
      q: 'Kan ik wachten terwijl jullie slijpen?',
      a: 'Met de hand slijpen op waterstenen en afstroppen kost tijd en precisie (gemiddeld 15 tot 25 minuten per mes). Wachten is meestal niet praktisch, maar bij spoed kunnen we in overleg kijken wat er dezelfde dag mogelijk is. Veel klanten combineren het met een lunch of koffie in de Utrechtse binnenstad!',
    },
    {
      q: 'Geldt hetzelfde tarief als in Utrecht?',
      a: 'Jazeker! Onze slijptarieven zijn voor iedereen gelijk: vanaf €6,50 voor een klein schilmes, €8,50 voor een normaal koksmes (15–20 cm) en €10,50 voor grote koksmessen. Breng je ze zelf langs, dan betaal je vanzelfsprekend €0,- bezorgkosten.',
    },
    {
      q: 'Hoe verpak ik mijn messen veilig voor de autorit of trein?',
      a: 'Rol elk mes strak in een dikke theedoek of handdoek en doe er eventueel een elastiek omheen. Ook kun je een stuk karton dubbelvouwen over de snede en vastplakken. Zo beschadig je de snede niet én reis je 100% veilig.',
    },
    {
      q: 'Kan ik mijn messen ook opsturen per post?',
      a: 'Ja, dat kan in overleg! Stuur ons eerst even een appje met foto\'s of het aantal messen. Vervolgens stuur je het pakket goed ingepakt naar ons adres in Utrecht (wij werken vanuit huis). Na het slijpen sturen we ze vlijmscherp en verzekerd via PostNL weer naar je terug.',
    },
    {
      q: 'Ik heb een horecakeuken buiten Utrecht. Komen jullie dan wel langs?',
      a: 'Voor horeca, restaurants en grotere batches (vanaf ca. 10–15 messen) in de regio (Zeist, Amersfoort, Houten, Nieuwegein, Maarssen, Hilversum) maken we graag een ophaalafspraak op maat. Neem even contact met ons op via WhatsApp!',
    },
  ];

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
              Service buiten Utrecht
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-6xl">
              Ik kom buiten Utrecht, wat nu?
            </h1>
            <p className="mt-5 text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Woon of kook je buiten onze Utrechtse bezorgzone? Geen enkel probleem! Wekelijks slijpen we messen voor koks en liefhebbers uit Zeist, Houten, Amersfoort, Hilversum, Nieuwegein en ver daarbuiten.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] active:scale-[0.98] sm:text-base cursor-pointer"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Plan afspraak via WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => onNavigate('ophalen-bezorgen')}
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#E87B5B]/20 bg-[#FCEEE8] px-7 py-3.5 text-sm font-bold text-[#C95E3E] transition-all duration-200 hover:bg-[#F8DFD6] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] sm:text-base cursor-pointer"
              >
                <MapPin className="h-4 w-4 text-[#C95E3E]" />
                <span>Bekijk Utrecht servicegebied</span>
              </button>
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
              <span className="text-sm font-bold text-[#3B7F4B]">Binnen 24–48 uur gereed</span>
            </div>
            <div className="flex items-center gap-3 sm:justify-center sm:px-5">
              <MapPin className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
              <span className="text-sm font-bold text-[#3B7F4B]">€0,- bezorgkosten bij langsbrengen</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BELANGRIJKE MEDEDELING: AFSPRAAK VEREIST */}
      <section className="relative px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-[#d9e1d7] bg-[#F7F4EC] p-6 sm:p-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#E87B5B] shadow-2xs">
              <AlertTriangle className="h-6 w-6" />
            </span>
            <div className="space-y-1">
              <h2 className="font-heading text-lg font-bold text-[#3B7F4B]">
                Belangrijk: altijd even een afspraak maken via WhatsApp
              </h2>
              <p className="text-sm leading-relaxed text-[#657068]">
                Slijpmaat heeft géén doorlopende inloopbalie; wij werken vanuit huis aan de Gerard Noodtstraat in Utrecht. Door vooraf een dag en tijdstip af te stemmen via WhatsApp, weet je zeker dat Teun of Mike persoonlijk klaarstaat om je messen veilig aan te pakken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DRIE MOGELIJKHEDEN (Cards matching HomePage) */}
      <section className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Jouw opties</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Drie manieren om je messen te laten slijpen</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Optie 1 */}
            <div className="rounded-[2.5rem] border-2 border-[#3B7F4B] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8EFE8] text-[#3B7F4B]">
                    <Car className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-[#E8EFE8] px-3 py-1 text-[11px] font-bold text-[#3B7F4B]">
                    Meest gekozen
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-[#3B7F4B]">
                  1. Zelf langsbrengen op afspraak
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#657068]">
                  Breng je messen op afspraak langs bij ons aan de Gerard Noodtstraat 57 in Utrecht. Wij werken vanuit huis, goed bereikbaar vanaf de A27/A28 en gratis parkeren voor de deur.
                </p>
                <ul className="mt-4 space-y-2 text-xs font-semibold text-[#3B7F4B]">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#3B7F4B]" /> €0,- bezorgkosten</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#3B7F4B]" /> Binnen 24–48 uur weer ophalen</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#3B7F4B]" /> Ma t/m za 10:00–21:00 op afspraak</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#d9e1d7]/60">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#3B7F4B] py-3 text-xs font-bold text-white hover:bg-[#315F3B] transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Maak brengafspraak</span>
                </a>
              </div>
            </div>

            {/* Optie 2 */}
            <div className="rounded-[2.5rem] border border-[#d9e1d7] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3B7F4B]/50 hover:shadow-md flex flex-col justify-between">
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F9E4DE] text-[#C95E3E]">
                  <Package className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold text-[#3B7F4B]">
                  2. Veilig opsturen per post
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#657068]">
                  Woon je verder weg? Je kunt je messen in overleg per PostNL naar ons opsturen. Wij slijpen ze met de hand en sturen ze veilig verpakt en verzekerd retour.
                </p>
                <ul className="mt-4 space-y-2 text-xs font-semibold text-[#3B7F4B]">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#3B7F4B]" /> Vooraf overleg via WhatsApp</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#3B7F4B]" /> Duidelijke inpakinstructies</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#3B7F4B]" /> Verzekerd retour via PostNL</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#d9e1d7]/60">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#3B7F4B]/30 py-3 text-xs font-bold text-[#3B7F4B] hover:bg-[#E8EFE8] transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Stem opsturen af</span>
                </a>
              </div>
            </div>

            {/* Optie 3 */}
            <div className="rounded-[2.5rem] border border-[#d9e1d7] bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3B7F4B]/50 hover:shadow-md flex flex-col justify-between">
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8EFE8] text-[#3B7F4B]">
                  <Sparkles className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold text-[#3B7F4B]">
                  3. Horeca &amp; grote batches (10+)
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#657068]">
                  Voor restaurants, cateraars en kookstudio's in de regio (Zeist, Amersfoort, Nieuwegein, Houten, Hilversum) maken we graag een ophaal- en bezorgafspraak op maat.
                </p>
                <ul className="mt-4 space-y-2 text-xs font-semibold text-[#3B7F4B]">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#3B7F4B]" /> Ophalen op afgesproken tijd</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#3B7F4B]" /> Afgestemd op je mise-en-place</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#3B7F4B]" /> Nette digitale btw-factuur</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#d9e1d7]/60">
                <button
                  type="button"
                  onClick={() => onNavigate('horeca')}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E87B5B] py-3 text-xs font-bold text-white hover:bg-[#C95E3E] transition-colors cursor-pointer"
                >
                  <span>Zakelijke horecapagina</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOCATIE & BEREIKBAARHEID (Cream background with wave divider) */}
      <section className="relative overflow-hidden bg-[#F7F4EC] px-4 pb-20 pt-20 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
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

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-5">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Locatie &amp; Route</p>
              <h2 className="font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">
                Goed bereikbaar in Utrecht
              </h2>
              <p className="text-base leading-relaxed text-[#657068]">
                Wij werken vanuit huis aan de oostkant van Utrecht. Vanaf de snelweg (A27 afslag Rijnsweerd of A28) ben je er in een paar minuten. Er is altijd plek om even voor de deur te parkeren om je messen af te geven.
              </p>

              <div className="space-y-3 rounded-2xl border border-[#d9e1d7] bg-white p-6 text-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#3B7F4B] shrink-0" />
                  <span className="font-bold text-[#3B7F4B]">{SLIJPMAAT_INFO.fullAddress}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock3 className="h-5 w-5 text-[#3B7F4B] shrink-0" />
                  <span className="text-[#657068]">Maandag t/m Zaterdag: 10:00 – 21:00 (op afspraak)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Car className="h-5 w-5 text-[#3B7F4B] shrink-0" />
                  <span className="text-[#657068]">Gratis kort parkeren voor de deur bij afgeven</span>
                </div>
              </div>

              <div>
                <a
                  href="https://www.google.com/maps/place/Slijpmaat.nl/@52.1032142,5.1191271,17z/data=!3m1!4b1!4m6!3m5!1s0x2db61c15d9f3a351:0x81e0896d1578558b!8m2!3d52.1032142!4d5.1191271!16s%2Fg%2F11njwnblms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#3B7F4B] underline decoration-[#A9C89E] decoration-2 underline-offset-4 hover:text-[#315F3B]"
                >
                  <MapPin className="h-4 w-4" />
                  <span>Open routebeschrijving in Google Maps ↗</span>
                </a>
              </div>
            </div>

            {/* Inpakadvies Card */}
            <div className="rounded-[2.5rem] border border-[#d9e1d7] bg-white p-8 shadow-xs space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#C95E3E]">Veilig vervoer</span>
              <h3 className="font-heading text-2xl font-bold text-[#3B7F4B]">Hoe verpak je jouw messen?</h3>
              <p className="text-sm leading-relaxed text-[#657068]">
                Voorkom beschadiging van de snede én zorg voor veilig transport tijdens je reis naar Utrecht:
              </p>
              <div className="space-y-3 pt-2 text-xs leading-relaxed text-[#657068]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#3B7F4B] shrink-0 mt-0.5" />
                  <span><strong>Theedoek-methode:</strong> Rol elk mes strak in een schone theedoek en zet vast met een elastiek.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#3B7F4B] shrink-0 mt-0.5" />
                  <span><strong>Kartonnen schede:</strong> Vouw een stuk stevig karton dubbel over het lemmet en plak af met tape.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#3B7F4B] shrink-0 mt-0.5" />
                  <span><strong>Messenmap of foedraal:</strong> Heb je een officiële koksmap? Dan is dat uiteraard de ideale bescherming.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SPECIFIEK VOOR BUITEN UTRECHT */}
      <section className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Veelgestelde vragen</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">
              Vragen van klanten buiten Utrecht
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-[#d9e1d7]/60 bg-white p-5 shadow-xs transition-all duration-200 hover:border-[#3B7F4B]/40 open:border-[#3B7F4B]/50 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-heading text-base font-bold text-[#3B7F4B] marker:hidden sm:text-lg">
                  <span>{faq.q}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8EFE8] text-[#3B7F4B] transition-transform duration-200 group-open:rotate-45">
                    <Plus className="h-4 w-4" aria-hidden="true" />
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-[#657068]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CONTACT BANNER with top and bottom wave dividers */}
      <section id="buiten-contact" className="relative scroll-mt-20 overflow-hidden bg-[#E87B5B] px-4 pb-24 pt-20 text-white sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="pointer-events-none absolute left-0 top-0 h-10 w-full text-[#FAFAF8] sm:h-14 lg:h-16"
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
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.36em] text-white sm:text-sm">Afspraak maken</p>
          <h2 className="mt-6 max-w-5xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Kom gerust langs in Utrecht
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/95 sm:text-xl">
            Stuur ons een appje met het aantal messen en de dag waarop je in Utrecht bent. We plannen het moment direct in!
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
