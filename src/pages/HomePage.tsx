import React from 'react';
import {
  ArrowDown,
  ArrowRight,
  Building2,
  Check,
  CircleDollarSign,
  Clock3,
  Leaf,
  MapPin,
  MessageCircle,
  Phone,
  Plus,
  Utensils,
} from 'lucide-react';
import { GoogleIcon, GOOGLE_REVIEW_COUNT, GoogleReviewsSection } from '../components/GoogleReviewsSection';
import { PageId } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

const quickSteps = [
  { title: 'Plan je slijpbeurt', text: 'Kies je messen en stuur je aanvraag eenvoudig via WhatsApp.' },
  { title: 'Wij halen ze op', text: 'We spreken een duidelijk ophaalmoment in Utrecht met je af.' },
  { title: 'Met de hand geslepen', text: 'We slijpen zorgvuldig op whetstones en stroppen de snede af.' },
  { title: 'Scherp terug', text: 'Doorgaans heb je jouw messen binnen 24–48 uur weer terug.' },
];

const qualities = [
  { title: 'Lokaal in Utrecht', text: 'Ophalen en terugbrengen in Utrecht en omgeving, zonder pakket of winkelbezoek.', icon: MapPin },
  { title: 'Makkelijk geregeld', text: 'Snel contact via WhatsApp, duidelijke afspraken en geen ingewikkeld proces.', icon: MessageCircle },
  { title: 'Duidelijke prijzen', text: 'Je ziet vooraf wat het slijpen kost. Reparaties bespreken we altijd eerst.', icon: CircleDollarSign },
  { title: 'Langer plezier van je mes', text: 'Goed onderhoud verlengt de levensduur van je messen en voorkomt onnodig vervangen.', icon: Leaf },
];

const craftSteps = [
  { number: '01', title: 'Snede beoordelen', image: '/assets/werkwijze/01-beoordelen.jpg', alt: 'Slijpmaat beoordeelt de snede van een keukenmes' },
  { number: '02', title: 'Steen kiezen', image: '/assets/werkwijze/02-stenen-kiezen.jpg', alt: 'Japanse whetstones die Slijpmaat gebruikt voor het slijpen' },
  { number: '03', title: 'Scherpte opbouwen', image: '/assets/werkwijze/03-slijpen.jpg', alt: 'Een keukenmes wordt met de hand geslepen op een whetstone' },
  { number: '04', title: 'Snede afwerken', image: '/assets/werkwijze/04-afwerken.jpg', alt: 'Een keukenmes wordt afgewerkt op een leren strop' },
];

const faqs = [
  { question: 'Hoe geef ik mijn messen veilig mee?', answer: 'We vervoeren je messen veilig in onze eigen ophaal- en bezorgtas. Verpak je messen bij voorkeur extra in een theedoek, krant of messenhoes. Zo blijven je messen én onze vingers heel.' },
  { question: 'Welke soorten messen slijpt mijn Maat?', answer: 'Wij slijpen gladde messen, zoals koksmessen en schilmessen. Speciale messen beoordelen we vooraf. Kartelmessen slijpen we op dit moment niet.' },
  { question: 'Slijpt mijn Maat ook Japanse messen?', answer: 'Ja, Japanse messen slijpen we, maar door het staal en de slijphoek vragen ze vaak om een andere aanpak. Stuur daarom vooraf via WhatsApp een foto en het merk of type van je mes. Je Maat beoordeelt dan of we het mes zorgvuldig kunnen slijpen.' },
  { question: 'Hoe lang duurt het voordat ik weer scherpe messen heb?', answer: 'We streven ernaar om je messen binnen 48 uur na het ophalen weer vlijmscherp terug te brengen. De exacte doorlooptijd kan variëren door drukte. We spreken vooraf duidelijk af wanneer je messen worden opgehaald en teruggebracht.' },
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/31682074967?text=${encodeURIComponent('Hoi Teun en Mike, ik wil graag mijn messen laten slijpen!')}`;

  const openCalculator = () => {
    onNavigate('particulieren');
    window.setTimeout(() => {
      document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  return (
    <div className="overflow-hidden bg-[#FAFAFA]">
      <section className="relative bg-[#FAFAFA]">
        <svg aria-hidden="true" viewBox="0 0 520 520" className="pointer-events-none absolute -right-48 top-12 hidden h-[520px] w-[520px] text-[#E8EFE8] lg:block">
          <path fill="currentColor" d="M416 72c58 48 88 135 78 213-11 78-62 147-132 181-69 34-157 34-221-4-64-39-104-116-100-193 4-76 53-151 120-194 67-42 197-51 255-3Z" />
        </svg>

        <div className="relative z-10 grid grid-cols-1 items-center gap-7 py-8 sm:py-12 lg:min-h-[540px] lg:grid-cols-2 lg:gap-12 lg:py-8 xl:gap-20">
          <div className="order-2 w-full lg:order-1">
            <img
              src="/assets/slijpmaat-homepage-hero.jpg"
              alt="Koksmes dat het Slijpmaat-logo zichtbaar maakt"
              className="aspect-[4/3] w-full object-cover object-[38%_53%] sm:aspect-[16/11] lg:aspect-square lg:object-[40%_53%]"
              fetchPriority="high"
            />
          </div>

          <div className="order-1 px-4 sm:px-6 lg:order-2 lg:max-w-2xl lg:px-0 lg:pr-10 xl:pr-16">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#3B7F4B] sm:text-sm">Jouw messenslijper in Utrecht</p>
            <h1 className="mt-3 max-w-3xl font-heading text-4xl font-bold leading-[1.02] tracking-tight text-[#244A30] sm:text-5xl lg:text-5xl xl:text-6xl">
              Je messen weer scherp. Zonder gedoe.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Wij halen je keukenmessen thuis of op de zaak op, slijpen ze zorgvuldig met de hand en brengen ze weer scherp terug.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <button type="button" onClick={openCalculator} className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#C95E3E] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#244A30] active:scale-[0.98] sm:text-base">
                <span>Plan mijn slijpbeurt</span><ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <a href="#home-contact" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#E87B5B]/25 bg-[#F9E4DE] px-7 py-3.5 text-sm font-bold text-[#C95E3E] transition-colors hover:bg-[#F4D5CC] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#244A30] sm:text-base">
                <span>Ik heb een vraag</span><ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#3B7F4B]"><Check className="h-4 w-4" aria-hidden="true" /> Vooraf een duidelijke prijs en afspraak</p>
          </div>
        </div>
      </section>

      <section aria-label="Zekerheden" className="border-y border-[#d9e1d7] bg-white px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-3 sm:gap-0">
          <div className="flex flex-wrap items-center gap-2 sm:justify-center sm:border-r sm:border-[#d9e1d7] sm:px-5">
            <GoogleIcon />
            <span className="text-sm leading-none tracking-[0.06em] text-[#FABB05]" aria-label="5 van de 5 sterren">★★★★★</span>
            <span className="text-sm font-bold text-[#244A30]">5,0 op Google · {GOOGLE_REVIEW_COUNT} reviews</span>
          </div>
          <div className="flex items-center gap-3 sm:justify-center sm:border-r sm:border-[#d9e1d7] sm:px-5">
            <Clock3 className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
            <span className="text-sm font-bold text-[#244A30]">Doorgaans binnen 24–48 uur</span>
          </div>
          <div className="flex items-center gap-3 sm:justify-center sm:px-5">
            <MapPin className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
            <span className="text-sm font-bold text-[#244A30]">Gratis ophalen vanaf 3 messen</span>
          </div>
        </div>
      </section>

      <section className="relative bg-[#F7F4EC] px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Kies wat bij je past</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#244A30] sm:text-4xl">Thuiskeuken of professionele keuken?</h2>
            <p className="mt-3 text-base leading-7 text-[#657068]">Je krijgt meteen de informatie, prijzen en manier van plannen die voor jou relevant zijn.</p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7">
            <button type="button" onClick={() => onNavigate('particulieren')} className="group grid items-center gap-5 rounded-[2rem] border border-[#d9e1d7] bg-white p-6 text-left shadow-xs transition-all hover:-translate-y-1 hover:border-[#3B7F4B]/50 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] sm:grid-cols-[auto_1fr] sm:p-8">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8EFE8] text-[#3B7F4B]"><Utensils className="h-7 w-7" aria-hidden="true" /></span>
              <span>
                <span className="block font-heading text-2xl font-bold text-[#244A30]">Voor particulieren</span>
                <span className="mt-2 block text-sm leading-relaxed text-[#657068] sm:text-base">Bekijk de prijzen, bereken je slijpbeurt en plan eenvoudig via WhatsApp.</span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#3B7F4B]">Naar particulier <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
              </span>
            </button>

            <button type="button" onClick={() => onNavigate('horeca')} className="group grid items-center gap-5 rounded-[2rem] border border-[#E87B5B]/35 bg-white p-6 text-left shadow-xs transition-all hover:-translate-y-1 hover:border-[#E87B5B] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#C95E3E] sm:grid-cols-[auto_1fr] sm:p-8">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F9E4DE] text-[#C95E3E]"><Building2 className="h-7 w-7" aria-hidden="true" /></span>
              <span>
                <span className="block font-heading text-2xl font-bold text-[#C95E3E]">Voor horeca</span>
                <span className="mt-2 block text-sm leading-relaxed text-[#657068] sm:text-base">Stem aantallen, planning en slijprondes af rond jouw professionele keuken.</span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#C95E3E]">Naar zakelijk <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="relative bg-[#3B7F4B] px-4 pb-24 pt-24 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8">
        <svg aria-hidden="true" viewBox="0 0 1440 100" preserveAspectRatio="none" className="pointer-events-none absolute bottom-0 left-0 h-14 w-full text-white sm:h-20">
          <path fill="currentColor" d="M0 100V62c153-50 305-48 457 4 172 59 346 35 506-12 184-54 338-44 477 2v44H0Z" />
        </svg>
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E8EFE8]">Van aanvraag tot scherpe messen</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">Zo eenvoudig werkt het</h2>
            <p className="mt-4 text-base leading-7 text-[#E8EFE8]">Vier duidelijke stappen. Je weet vooraf wanneer we komen, wat het kost en wanneer je messen terug zijn.</p>
          </div>

          <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {quickSteps.map((step, index) => (
              <li key={step.title} className="relative rounded-[1.75rem] bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F9E4DE] font-heading text-sm font-bold text-[#C95E3E]">{index + 1}</span>
                  {index < quickSteps.length - 1 ? <ArrowRight className="hidden h-5 w-5 text-[#A9C89E] xl:block" aria-hidden="true" /> : <Check className="h-5 w-5 text-[#3B7F4B]" aria-hidden="true" />}
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-[#244A30]">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#657068]">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] border border-[#E87B5B]/20 bg-[#FFF7F3] shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-[58%_42%_40%_60%/47%_52%_48%_53%] bg-[#F9E4DE]" aria-hidden="true" />
            <div className="relative max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C95E3E]">Duidelijk vooraf</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-[#244A30] sm:text-4xl">Bekijk direct wat jouw slijpbeurt kost</h2>
              <p className="mt-4 text-base leading-7 text-[#657068]">Vul je messen in, zie meteen de prijs en stuur je bestelling daarna eenvoudig via WhatsApp.</p>
              <button type="button" onClick={openCalculator} className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#C95E3E] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#244A30]">
                Bereken mijn prijs <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <button type="button" onClick={() => onNavigate('horeca')} className="mt-4 block text-sm font-bold text-[#3B7F4B] underline decoration-[#A9C89E] decoration-2 underline-offset-4 hover:text-[#244A30]">Zakelijke aanvraag of grotere aantallen?</button>
            </div>
          </div>

          <div className="grid grid-cols-3 divide-x divide-white/25 bg-[#E87B5B] px-4 py-9 text-center sm:px-8 lg:items-center lg:py-12">
            <div className="px-2"><span className="block font-heading text-2xl font-bold text-white sm:text-3xl">€6,50</span><span className="mt-1 block text-xs font-semibold text-white/85">Klein</span><span className="mt-1 block text-[11px] text-white/70">tot 15 cm</span></div>
            <div className="px-2"><span className="block font-heading text-2xl font-bold text-white sm:text-3xl">€8,50</span><span className="mt-1 block text-xs font-semibold text-white/85">Normaal</span><span className="mt-1 block text-[11px] text-white/70">15–19,99 cm</span></div>
            <div className="px-2"><span className="block font-heading text-2xl font-bold text-white sm:text-3xl">€10,50</span><span className="mt-1 block text-xs font-semibold text-white/85">Groot</span><span className="mt-1 block text-[11px] text-white/70">20–25 cm</span></div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="relative">
            <div className="absolute -bottom-5 -left-5 h-36 w-36 rounded-[42%_58%_62%_38%/55%_42%_58%_45%] bg-[#A9C89E] sm:-bottom-7 sm:-left-7" aria-hidden="true" />
            <img src="/assets/team/teun-en-mike-met-mes.jpg" alt="Teun en Mike van Slijpmaat met een keukenmes" className="relative aspect-[3/2] w-full rounded-[2rem] object-cover shadow-sm" loading="lazy" />
          </div>
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Persoonlijk en lokaal</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#244A30] sm:text-4xl">Wij zijn Teun en Mike</h2>
            <p className="mt-5 text-base leading-8 text-[#657068] sm:text-lg">We begonnen Slijpmaat omdat veel goede messen worden vervangen terwijl ze vaak alleen bot zijn. Daarom combineren we zorgvuldig handwerk met persoonlijke service in Utrecht.</p>
            <button type="button" onClick={() => onNavigate('over-ons')} className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#3B7F4B] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#244A30] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#244A30]">Leer ons kennen <ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F4EC] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Waarom Slijpmaat</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-[#244A30] sm:text-4xl">Goed slijpwerk, makkelijk geregeld</h2>
            </div>
            <button type="button" onClick={() => onNavigate('werkwijze')} className="inline-flex w-fit items-center gap-2 text-sm font-bold text-[#3B7F4B] hover:text-[#244A30]">Bekijk onze volledige werkwijze <ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {qualities.map((quality) => {
              const Icon = quality.icon;
              return (
                <article key={quality.title} className="rounded-[1.75rem] bg-white p-6 shadow-xs">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E8EFE8] text-[#3B7F4B]"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                  <h3 className="mt-5 font-heading text-xl font-bold text-[#244A30]">{quality.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#657068]">{quality.text}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
            {craftSteps.map((step) => (
              <figure key={step.title} className="group relative aspect-[4/3] overflow-hidden rounded-[1.5rem] shadow-sm">
                <img src={step.image} alt={step.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#203728]/95 via-[#203728]/65 to-transparent px-4 pb-4 pt-14 text-white sm:px-5 sm:pb-5">
                  <span className="text-xs font-bold text-[#A9C89E]">{step.number}</span>
                  <span className="mt-1 block font-heading text-sm font-bold leading-tight sm:text-base">{step.title}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviewsSection />

      <section className="border-t border-[#d9e1d7] bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="max-w-md">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Veelgestelde vragen</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#244A30] sm:text-4xl">Eerst nog iets weten?</h2>
            <p className="mt-4 text-base leading-7 text-[#657068]">Bekijk de antwoorden over ophalen, soorten messen en de doorlooptijd.</p>
            <button type="button" onClick={() => onNavigate('faq')} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#3B7F4B]">Bekijk alle vragen <ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
          </div>
          <div className="divide-y divide-[#d9e1d7] border-y border-[#d9e1d7]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-heading text-base font-bold text-[#244A30] marker:hidden sm:text-lg">
                  <span>{faq.question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8EFE8] text-[#3B7F4B]"><Plus className="h-4 w-4 transition-transform group-open:rotate-45" aria-hidden="true" /></span>
                </summary>
                <p className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-[#657068]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="home-contact" className="scroll-mt-20 bg-[#E87B5B] px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.36em] text-white sm:text-sm">Contact</p>
          <h2 className="mt-6 max-w-5xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">Neem contact op met je Maat</h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/90 sm:text-xl">Stuur ons een WhatsApp-bericht of bel direct. Je krijgt persoonlijk contact met Teun of Mike.</p>
          <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[72px] items-center justify-between gap-4 rounded-full bg-white px-7 py-4 font-heading text-lg font-medium text-[#3B7F4B] transition-colors hover:bg-[#FFF7F3] sm:px-10 sm:text-xl">
              <span>Stuur je Maat een appje</span><MessageCircle className="h-8 w-8 shrink-0" aria-hidden="true" />
            </a>
            <a href="tel:+31682074967" className="inline-flex min-h-[72px] items-center justify-between gap-4 rounded-full bg-white px-7 py-4 font-heading text-lg font-medium text-[#3B7F4B] transition-colors hover:bg-[#FFF7F3] sm:px-10 sm:text-xl">
              <span>Bel je Maat</span><Phone className="h-8 w-8 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
