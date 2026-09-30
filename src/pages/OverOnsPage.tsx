import React from 'react';
import { PageId } from '../types';
import { SLIJPMAAT_INFO } from '../data/siteData';
import { GoogleIcon, GOOGLE_REVIEW_COUNT } from '../components/GoogleReviewsSection';
import {
  ArrowRight,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  Check,
  Heart,
  ShieldCheck,
  Sparkles,
  Utensils,
  Award
} from 'lucide-react';

interface OverOnsPageProps {
  onNavigate: (page: PageId) => void;
}

export const OverOnsPage: React.FC<OverOnsPageProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik wil graag contact met jullie opnemen!')}`;

  const values = [
    {
      title: 'Ambachtelijk met de hand',
      text: 'Geen agressieve bandslijpmachines die je mes verhitten. We slijpen elk mes zorgvuldig op Japanse Shapton Pro waterstenen met minimale staalafname.',
      icon: Sparkles,
    },
    {
      title: 'Persoonlijk contact',
      text: 'Als je ons belt of appt, spreek je altijd direct met Teun of Mike. Geen anoniem callcenter of ingewikkeld ticketsysteem.',
      icon: Heart,
    },
    {
      title: 'Lokaal en betrouwbaar',
      text: 'Gevestigd in Utrecht. Vanaf 3 messen halen we ze gratis op aan huis of in jouw restaurant en leveren we ze binnen 24–48 uur weer vlijmscherp af.',
      icon: MapPin,
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
              De gezichten achter Slijpmaat
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-6xl">
              Over Teun &amp; Mike.
            </h1>
            <p className="mt-5 text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Twee vrienden uit Utrecht met een gedeelde passie voor koken, goed gereedschap en het traditionele vakmanschap van Japans watersteenslijpen.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => onNavigate('particulieren')}
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] active:scale-[0.98] sm:text-base cursor-pointer"
              >
                <span>Plan een slijpbeurt</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('werkwijze')}
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#E87B5B]/20 bg-[#FCEEE8] px-7 py-3.5 text-sm font-bold text-[#C95E3E] transition-all duration-200 hover:bg-[#F8DFD6] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] sm:text-base cursor-pointer"
              >
                <span>Bekijk onze werkwijze</span>
                <ArrowRight className="h-4 w-4" />
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
              <span className="text-sm font-bold text-[#3B7F4B]">Binnen 24–48 uur klaar</span>
            </div>
            <div className="flex items-center gap-3 sm:justify-center sm:px-5">
              <MapPin className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
              <span className="text-sm font-bold text-[#3B7F4B]">Lokaal in Utrecht</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN STORY WITH REAL PHOTO & ORGANIC BLOB */}
      <section className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Photo with sage blob */}
          <div className="relative isolate">
            <div
              className="pointer-events-none absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 h-44 w-44 sm:h-56 sm:w-56 rounded-[42%_58%_62%_38%/55%_42%_58%_45%] bg-[#A9C89E] opacity-95 transition-transform duration-500 hover:scale-105 z-0"
              aria-hidden="true"
            />
            <img
              src="/assets/team/teun-en-mike-samen.jpg"
              alt="Teun en Mike van Slijpmaat samen in Utrecht"
              className="relative z-10 aspect-[4/3] w-full rounded-[2rem] object-cover shadow-sm transition-transform duration-500 hover:scale-[1.01]"
              loading="lazy"
            />
          </div>

          {/* Story text */}
          <div className="space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Ons verhaal</p>
            <h2 className="font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">
              Jouw vertrouwde Maat voor vlijmscherpe messen
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-[#657068]">
              <p>
                Messenslijpen is een eeuwenoud ambacht, maar de service eromheen mag best van nu zijn. We zagen te vaak dat goede, dierbare messen achterin een la belandden of zelfs werden vervangen, puur omdat ze bot waren.
              </p>
              <p>
                Zonde, vonden wij. Daarom begonnen we Slijpmaat: hoogwaardig handmatig slijpwerk op Japanse whetstones, gecombineerd met snelle en vriendelijke service via WhatsApp en een handige ophaalservice in Utrecht.
              </p>
              <p>
                Of je nu een thuiskok bent met twee favoriete schilmessen of een chef-kok met een volle messenrol in een drukke brigade: elk lemmet krijgt van ons dezelfde toewijding en precisie.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
              <div className="flex items-start gap-2.5 rounded-2xl bg-[#E8EFE8]/60 p-4">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#3B7F4B]" />
                <span className="text-xs font-bold text-[#3B7F4B]">Geen agressieve machines, 100% watergekoeld</span>
              </div>
              <div className="flex items-start gap-2.5 rounded-2xl bg-[#E8EFE8]/60 p-4">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#3B7F4B]" />
                <span className="text-xs font-bold text-[#3B7F4B]">Persoonlijk contact direct met Teun of Mike</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ONZE KERNWAARDEN (Cream background with wave divider) */}
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
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Waar wij voor staan</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">De Slijpmaat belofte</h2>
            <p className="mt-3 text-base leading-7 text-[#657068]">
              Geen loze praatjes, maar drie duidelijke principes waar we elke dag naar werken.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-[2rem] border border-[#d9e1d7] bg-white p-7 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3B7F4B]/50 hover:shadow-md"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8EFE8] text-[#3B7F4B]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-bold text-[#3B7F4B]">{v.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#657068]">{v.text}</p>
                </div>
              );
            })}
          </div>

          {/* Quote Banner */}
          <div className="mt-10 overflow-hidden rounded-[2.5rem] border border-[#E87B5B]/20 bg-[#FFF7F3] p-8 sm:p-12 shadow-sm">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#C95E3E]">De filosofie</span>
              <blockquote className="mt-4 font-heading text-xl font-bold italic leading-relaxed text-[#3B7F4B] sm:text-2xl">
                &ldquo;Een goed koksmes is het verlengstuk van je hand. Zodra je moet duwen of zagen, verdwijnt het kookplezier. Wij zorgen dat jouw messen weer fluweelzacht door elke tomaat glijden.&rdquo;
              </blockquote>
              <p className="mt-4 text-sm font-bold text-[#C95E3E]">— Teun &amp; Mike, Oprichters Slijpmaat</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ATELIER & LOCATIE IN UTRECHT */}
      <section className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Atelier Utrecht</p>
            <h2 className="font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">
              Onze werkplaats aan de Gerard Noodtstraat
            </h2>
            <p className="text-base leading-relaxed text-[#657068]">
              In onze slijpstudio in Utrecht slijpen we alle messen met de hand. We hebben geen openbare winkel of inloopbalie, zodat we onze volledige aandacht aan het slijpwerk en de kwaliteit kunnen besteden.
            </p>
            <div className="space-y-3 rounded-2xl border border-[#d9e1d7] bg-[#FAFAF8] p-6 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#3B7F4B] shrink-0" />
                <span className="font-bold text-[#3B7F4B]">{SLIJPMAAT_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock3 className="h-5 w-5 text-[#3B7F4B] shrink-0" />
                <span className="text-[#657068]">Maandag t/m Zaterdag 10:00 – 21:00 (op afspraak)</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-[#3B7F4B] shrink-0" />
                <span className="text-[#657068]">Altijd vooraf even appen via WhatsApp</span>
              </div>
            </div>
          </div>

          <div className="relative isolate">
            <div
              className="pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-[#E8EFE8] opacity-80 blur-2xl"
              aria-hidden="true"
            />
            <img
              src="/assets/team/teun-en-mike-met-visitekaartje.jpg"
              alt="Teun en Mike van Slijpmaat met visitekaartje"
              className="relative z-10 aspect-[4/3] w-full rounded-[2rem] object-cover shadow-sm transition-transform duration-500 hover:scale-[1.01]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CONTACT BANNER with top and bottom wave dividers */}
      <section id="overons-contact" className="relative scroll-mt-20 overflow-hidden bg-[#E87B5B] px-4 pb-24 pt-20 text-white sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
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
            Maak kennis met je Maat
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/95 sm:text-xl">
            Heb je een vraag over je messen, ons slijpproces of wil je gewoon even overleggen? Stuur Teun of Mike direct een appje.
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
