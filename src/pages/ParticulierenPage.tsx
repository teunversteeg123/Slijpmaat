import React from 'react';
import { SLIJPMAAT_INFO, FAQS } from '../data/siteData';
import { EmbeddedCalculator } from '../components/EmbeddedCalculator';
import { GoogleIcon, GOOGLE_REVIEW_COUNT } from '../components/GoogleReviewsSection';
import {
  ArrowRight,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Utensils,
  Plus,
  Check
} from 'lucide-react';

export const ParticulierenPage: React.FC = () => {
  const whatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik wil graag als particulier mijn messen laten slijpen!')}`;
  const particulierFaqs = FAQS.slice(0, 4);

  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const benefits = [
    {
      title: 'Veiliger en prettiger snijden',
      text: 'Een bot mes glijdt gevaarlijk weg over gladde groenten of tomatenvellen. Een vlijmscherp mes snijdt zonder enige kracht of duwwerk.',
      tag: 'Geen ongelukken door uitschieten',
      icon: ShieldCheck,
    },
    {
      title: 'Minder tranen bij uien snijden',
      text: 'Een scherpe apex snijdt plantencellen zuiver door in plaats van ze te pletten. Zo blijven prikkelende sappen in de ui en smaak in je ingrediënten.',
      tag: 'Behoud van versheid en textuur',
      icon: Utensils,
    },
    {
      title: 'Langere levensduur van je mes',
      text: 'Geen agressieve bandschuurmachines die millimeters staal verpulveren. Wij slijpen handmatig op waterstenen met minimale staalafname.',
      tag: 'Je dierbare messen gaan levenslang mee',
      icon: Sparkles,
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
              Voor particulieren &amp; hobbykoks in Utrecht
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-6xl">
              Messen slijpen zonder gedoe.
            </h1>
            <p className="mt-5 text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Weer met plezier en precisie koken in je eigen keuken. Handmatig geslepen op traditionele waterstenen. Vanaf 3 messen gratis aan huis opgehaald en bezorgd in Utrecht!
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={scrollToCalculator}
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] active:scale-[0.98] sm:text-base cursor-pointer"
              >
                <span>Bereken je prijs</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#E87B5B]/20 bg-[#FCEEE8] px-7 py-3.5 text-sm font-bold text-[#C95E3E] transition-all duration-200 hover:bg-[#F8DFD6] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] sm:text-base"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Stuur je Maat een appje</span>
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
              <span className="text-sm font-bold text-[#3B7F4B]">Binnen 24–48 uur retour</span>
            </div>
            <div className="flex items-center gap-3 sm:justify-center sm:px-5">
              <MapPin className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
              <span className="text-sm font-bold text-[#3B7F4B]">Gratis bezorging vanaf 3 messen</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE CALCULATOR SECTION */}
      <section id="calculator" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C95E3E]">Plan mijn slijpbeurt</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Bereken direct je prijs</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-[#657068]">
              Selecteer je messen, vul je postcode in en stuur je bestelling daarna eenvoudig via WhatsApp. Je hebt altijd vooraf volledige duidelijkheid.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] border border-[#d9e1d7] bg-white p-3 shadow-sm sm:p-6 lg:p-8">
            <EmbeddedCalculator />
          </div>
        </div>
      </section>

      {/* 4. TRANSPARANTE PRIJZEN (Warm cream background with wave divider) */}
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
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Heldere tarieven</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Vaste prijzen per mes</h2>
            <p className="mt-3 text-base leading-7 text-[#657068]">
              Geen verborgen toeslagen of verrassingen achteraf. Ook Japanse messen slijpen we zonder meerprijs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[2rem] border border-[#d9e1d7] bg-white p-6 shadow-xs transition-all hover:-translate-y-1 hover:shadow-md">
              <span className="text-xs font-semibold text-[#657068]">tot 15 cm</span>
              <h3 className="mt-1 font-heading text-lg font-bold text-[#3B7F4B]">Klein mes</h3>
              <div className="my-3 font-heading text-3xl font-bold text-[#3B7F4B]">€6,50</div>
              <p className="text-xs leading-relaxed text-[#657068]">Schilmesjes, officemessen, utility knives</p>
            </div>

            <div className="rounded-[2rem] border-2 border-[#E87B5B] bg-[#FFF7F3] p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#C95E3E]">15–19,99 cm</span>
                <span className="rounded-full bg-[#E87B5B] px-2 py-0.5 text-[10px] font-bold text-white uppercase">Meest gekozen</span>
              </div>
              <h3 className="mt-1 font-heading text-lg font-bold text-[#C95E3E]">Normaal mes</h3>
              <div className="my-3 font-heading text-3xl font-bold text-[#C95E3E]">€8,50</div>
              <p className="text-xs leading-relaxed text-[#657068]">Standaard koksmes, Santoku, allrounder</p>
            </div>

            <div className="rounded-[2rem] border border-[#d9e1d7] bg-white p-6 shadow-xs transition-all hover:-translate-y-1 hover:shadow-md">
              <span className="text-xs font-semibold text-[#657068]">20–25 cm</span>
              <h3 className="mt-1 font-heading text-lg font-bold text-[#3B7F4B]">Groot mes</h3>
              <div className="my-3 font-heading text-3xl font-bold text-[#3B7F4B]">€10,50</div>
              <p className="text-xs leading-relaxed text-[#657068]">Groot koksmes, trancheermes, Gyuto</p>
            </div>

            <div className="rounded-[2rem] border border-[#A9C89E] bg-[#E8EFE8]/70 p-6 shadow-xs transition-all hover:-translate-y-1 hover:shadow-md">
              <span className="text-xs font-bold text-[#3B7F4B]">Studentenactie</span>
              <h3 className="mt-1 font-heading text-lg font-bold text-[#3B7F4B]">StudentenMaat</h3>
              <div className="my-3 font-heading text-3xl font-bold text-[#3B7F4B]">€5,00</div>
              <p className="text-xs leading-relaxed text-[#3B7F4B]/90">Op vertoon van je geldige collegekaart</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DRIE KERNVOORDELEN VOOR DE THUISKOK */}
      <section className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Waarom laten slijpen</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">Het verschil in je keuken</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="rounded-[2rem] border border-[#d9e1d7] bg-white p-7 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3B7F4B]/50 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8EFE8] text-[#3B7F4B]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-heading text-xl font-bold text-[#3B7F4B]">{b.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#657068]">{b.text}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 border-t border-[#d9e1d7]/60 pt-4 text-xs font-bold text-[#3B7F4B]">
                    <Check className="h-4 w-4 text-[#3B7F4B]" />
                    <span>{b.tag}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. FAQ SNIPPET */}
      <section className="relative overflow-hidden bg-[#FAFAF8] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Veelgestelde vragen</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B]">Handig om te weten</h2>
          </div>

          <div className="space-y-3">
            {particulierFaqs.map((faq) => (
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
      <section id="particulieren-contact" className="relative scroll-mt-20 overflow-hidden bg-[#E87B5B] px-4 pb-24 pt-20 text-white sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
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
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.36em] text-white sm:text-sm">Contact</p>
          <h2 className="mt-6 max-w-5xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Heb je een vraag over je messen?
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/95 sm:text-xl">
            Stuur een foto van je mes via WhatsApp. We laten direct weten wat er mogelijk is en plannen desgewenst meteen een afspraak in.
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
