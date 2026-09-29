import React from 'react';
import {
  ArrowDown,
  ArrowRight,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  Leaf,
  MapPin,
  MessageCircle,
  Phone,
  Plus,
  Quote,
  Sparkles,
  Utensils,
} from 'lucide-react';

const quickSteps = [
  { title: 'Stuur je Maat een WhatsApp', text: 'Laat weten hoeveel messen je wilt laten slijpen. Wij reageren snel en plannen direct een ophaalmoment in.' },
  { title: 'Wij halen je messen op', text: 'We halen je messen bij je thuis of op de zaak op in Utrecht. Lokaal, makkelijk geregeld en met persoonlijke service.' },
  { title: 'Wij slijpen met zorg', text: 'Je messen worden met de hand geslepen op whetstones. Zo werken we precies en halen we zo min mogelijk materiaal weg.' },
  { title: 'Vlijmscherp terug aan huis', text: 'We brengen je messen netjes terug. Tijdens het koken voel je direct het verschil vanaf de eerste snede.' },
];

const qualities = [
  { title: 'Lokaal in Utrecht', text: 'We halen je messen op in Utrecht en omgeving. Geen winkel zoeken of pakket opsturen: je Maat komt gewoon bij je langs.', icon: MapPin },
  { title: 'Makkelijk geregeld', text: 'Je plant je slijpbeurt eenvoudig via WhatsApp. Snel contact, duidelijke afspraken en geen ingewikkeld formulier.', icon: MessageCircle },
  { title: 'Scherpe prijzen', text: 'Je ziet vooraf wat het slijpen kost. De prijs hangt af van het formaat van je messen en eventuele reparaties.', icon: CircleDollarSign },
  { title: 'Duurzamer koken', text: 'Een bot mes hoef je niet te vervangen. Door je messen te slijpen verleng je de levensduur en snijd je weer soepel.', icon: Leaf },
];

const craftSteps = [
  { number: '01', title: 'We beoordelen de snede', image: '/assets/werkwijze/01-beoordelen.jpg', alt: 'Slijpmaat beoordeelt de snede van een keukenmes' },
  { number: '02', title: 'We kiezen de juiste steen', image: '/assets/werkwijze/02-stenen-kiezen.jpg', alt: 'Japanse whetstones die Slijpmaat gebruikt voor het slijpen' },
  { number: '03', title: 'We bouwen de scherpte op', image: '/assets/werkwijze/03-slijpen.jpg', alt: 'Een keukenmes wordt met de hand geslepen op een whetstone' },
  { number: '04', title: 'We werken de snede af', image: '/assets/werkwijze/04-afwerken.jpg', alt: 'Een keukenmes wordt afgewerkt op een leren strop' },
];

const reviews = [
  { name: 'Arda Brink', text: 'Altijd gedacht dat ik m’n messen zelf prima kon slijpen, maar nu ze door Slijpmaat écht geslepen zijn, merk ik een groot verschil: vlijmscherp! En bovendien een prima service: de geslepen messen werden keurig en veilig ingepakt weer afgeleverd. Fantastisch en bedankt Slijpmaat!' },
  { name: 'Matthijs', text: 'Leuk initiatief. Ook heel gemakkelijk. Ze komen de messen ophalen en de volgende dag had ik ze al weer terug. Ze waren mooi geslepen en eentje was ook hersteld omdat er een chip in zat. De prijzen zijn goed. Wij zijn alles bij elkaar zeer tevreden. Ik kan slijpmaat dan ook aanraden!' },
  { name: 'Calandra Culinaria', text: 'Snelle en echt goede service! Misschien nog belangrijker; mijn messen zijn weer echt goed scherp!🔥' },
];

const faqs = [
  { question: 'Hoe geef ik mijn messen veilig mee?', answer: 'We vervoeren je messen veilig in onze eigen ophaal- en bezorgtas. Verpak je messen bij voorkeur extra in een theedoek, krant of messenhoes. Zo blijven je messen én onze vingers heel.' },
  { question: 'Welke soorten messen slijpt mijn Maat?', answer: 'Wij slijpen gladde messen, zoals koksmessen en schilmessen. Speciale messen beoordelen we vooraf. Kartelmessen slijpen we op dit moment niet.' },
  { question: 'Slijpt mijn Maat ook Japanse messen?', answer: 'Ja, Japanse messen slijpen we, maar door het staal en de slijphoek vragen ze vaak om een andere aanpak. Stuur daarom vooraf via WhatsApp een foto en het merk of type van je mes. Je Maat beoordeelt dan of we het mes zorgvuldig kunnen slijpen. Kartelmessen slijpen we op dit moment niet.' },
  { question: 'Hoe lang duurt het voordat ik weer scherpe messen heb?', answer: 'We streven ernaar om je messen binnen 48 uur na het ophalen weer vlijmscherp terug te brengen. De exacte doorlooptijd kan variëren door drukte. We spreken daarom vooraf duidelijk af wanneer je messen worden opgehaald en teruggebracht.' },
];

export const HomePage: React.FC = () => {
  const whatsappUrl = `https://wa.me/31682074967?text=${encodeURIComponent('Hoi Teun en Mike, ik wil graag mijn messen laten slijpen!')}`;

  return (
    <div className="overflow-hidden bg-[#FAFAFA]">
      <section className="relative bg-[#FAFAFA]">
        <svg aria-hidden="true" viewBox="0 0 520 520" className="pointer-events-none absolute -right-48 top-12 hidden h-[520px] w-[520px] text-[#E8EFE8] lg:block">
          <path fill="currentColor" d="M416 72c58 48 88 135 78 213-11 78-62 147-132 181-69 34-157 34-221-4-64-39-104-116-100-193 4-76 53-151 120-194 67-42 197-51 255-3Z" />
        </svg>
        <div className="relative z-10 grid min-h-[calc(100svh-5rem)] grid-cols-1 items-center gap-4 py-9 sm:gap-6 sm:py-12 lg:grid-cols-2 lg:gap-14 lg:py-16 xl:gap-20">
          <div className="order-2 flex w-full items-center justify-start lg:order-1">
            <img src="/assets/slijpmaat-homepage-hero.jpg" alt="Koksmes dat het Slijpmaat-logo zichtbaar maakt" className="h-auto w-full object-contain" fetchPriority="high" />
          </div>
          <div className="order-1 space-y-5 px-4 sm:px-6 lg:order-2 lg:max-w-2xl lg:space-y-7 lg:px-0 lg:pr-10 xl:pr-16">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#769C70] sm:text-sm">Slijpmaat.nl</p>
            <h1 className="max-w-3xl font-heading text-4xl font-bold leading-[1.06] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-6xl xl:text-7xl">Jouw messenslijper in Utrecht</h1>
            <p className="max-w-2xl text-base leading-relaxed text-[#657068] sm:text-lg lg:text-xl lg:leading-[1.75]">Voor chefs, thuiskoks en horeca. Slijpmaat haalt je messen thuis of op de zaak op, slijpt ze zorgvuldig met de hand op whetstones en brengt ze vlijmscherp terug.</p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4">
              <a href="#prijzen-bestellen" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#C95E3E] active:scale-[0.98] sm:text-base">
                <span>Plan je slijpbeurt / prijzen</span><ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#contact" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#F9E4DE] px-7 py-3.5 text-sm font-bold text-[#C95E3E] transition-colors hover:bg-[#F4D5CC] sm:text-base">
                <span>Ik heb een vraag</span><ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#F7F4EC] px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8">
        <svg aria-hidden="true" viewBox="0 0 1440 110" preserveAspectRatio="none" className="pointer-events-none absolute left-0 top-0 h-14 w-full text-[#FAFAFA] sm:h-20">
          <path fill="currentColor" d="M0 0h1440v35c-128 40-239 50-345 29-142-29-251-18-389 13-156 34-284 24-399-3C210 51 109 54 0 87V0Z" />
        </svg>
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Voor elke keuken</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#244A30] sm:text-4xl">Een scherpe oplossing die bij je past</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7">
            <a href="#particulieren" className="group grid items-center gap-5 rounded-[2rem] border border-[#d9e1d7] bg-white p-6 text-left shadow-xs transition-all hover:-translate-y-1 hover:border-[#3B7F4B]/50 hover:shadow-md sm:grid-cols-[auto_1fr] sm:p-8">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8EFE8] text-[#3B7F4B]"><Utensils className="h-7 w-7" aria-hidden="true" /></span>
              <span><span className="block font-heading text-2xl font-bold text-[#244A30]">Voor particulieren</span><span className="mt-2 block text-sm leading-relaxed text-[#657068] sm:text-base">Laat je keukenmessen ophalen, zorgvuldig slijpen en weer scherp thuisbezorgen.</span><span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#3B7F4B]">Bekijk de service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></span>
            </a>
            <a href="#horeca" className="group grid items-center gap-5 rounded-[2rem] border border-[#E87B5B]/35 bg-white p-6 text-left shadow-xs transition-all hover:-translate-y-1 hover:border-[#E87B5B] hover:shadow-md sm:grid-cols-[auto_1fr] sm:p-8">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F9E4DE] text-[#C95E3E]"><Building2 className="h-7 w-7" aria-hidden="true" /></span>
              <span><span className="block font-heading text-2xl font-bold text-[#C95E3E]">Voor horeca</span><span className="mt-2 block text-sm leading-relaxed text-[#657068] sm:text-base">Plan het slijpwerk rond je keuken, aantallen en gewenste doorlooptijd.</span><span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#C95E3E]">Bekijk de zakelijke service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></span>
            </a>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="relative">
            <div className="absolute -bottom-5 -left-5 h-36 w-36 rounded-[42%_58%_62%_38%/55%_42%_58%_45%] bg-[#A9C89E] sm:-bottom-7 sm:-left-7" aria-hidden="true" />
            <img src="/assets/team/teun-en-mike-met-mes.jpg" alt="Teun en Mike van Slijpmaat met een keukenmes" className="relative aspect-[3/2] w-full rounded-[2rem] object-cover shadow-sm" loading="lazy" />
          </div>
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Jouw maten voor scherpe messen</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#244A30] sm:text-4xl">Wij zijn Teun en Mike</h2>
            <p className="mt-5 text-base leading-8 text-[#657068] sm:text-lg">Messenslijpen is een oud vak, maar de service eromheen mag best van nu zijn. We zagen hoeveel goede messen werden weggegooid terwijl ze vaak alleen bot waren. Zonde, vonden wij. Daarom begonnen we Slijpmaat: goed slijpwerk, persoonlijk contact en service waar je graag voor terugkomt.</p>
            <a href="#over-ons" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#3B7F4B] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#244A30]">Lees meer over ons <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="relative bg-[#3B7F4B] px-4 pb-24 pt-28 sm:px-6 sm:pb-32 sm:pt-36 lg:px-8">
        <svg aria-hidden="true" viewBox="0 0 1440 100" preserveAspectRatio="none" className="pointer-events-none absolute left-0 top-0 h-16 w-full text-[#FAFAFA] sm:h-20">
          <path fill="currentColor" d="M0 0h1440v30c-162 63-326 66-493 10C754-24 566 7 407 54 252 100 117 86 0 52V0Z" />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 1440 100" preserveAspectRatio="none" className="pointer-events-none absolute bottom-0 left-0 h-16 w-full text-white sm:h-20">
          <path fill="currentColor" d="M0 100V62c153-50 305-48 457 4 172 59 346 35 506-12 184-54 338-44 477 2v44H0Z" />
        </svg>
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#DCE8DC]">Zo eenvoudig werkt het</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">Van bot naar vlijmscherp in vier stappen</h2>
          </div>
          <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {quickSteps.map((step, index) => (
              <li key={step.title} className="relative rounded-[1.75rem] bg-white p-6 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F9E4DE] font-heading text-sm font-bold text-[#C95E3E]">{index + 1}</span>
                <h3 className="mt-5 font-heading text-lg font-bold text-[#244A30]">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#657068]">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#E87B5B] px-7 py-10 shadow-sm sm:px-10 sm:py-12 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-14 lg:px-14">
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-[58%_42%_40%_60%/47%_52%_48%_53%] bg-white/10" aria-hidden="true" />
          <div className="relative max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">Duidelijk vooraf</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">Scherpe prijzen voor scherpe messen</h2>
            <p className="mt-4 text-base leading-7 text-white/90">Kies je messen, bekijk de prijs en stuur je bestelling eenvoudig via WhatsApp.</p>
            <a href="#prijzen-bestellen" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#3B7F4B] transition-colors hover:bg-[#F7F4EC]">Bekijk de prijslijst <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
          </div>
          <div className="relative mt-9 grid grid-cols-3 divide-x divide-white/30 border-y border-white/30 py-6 text-center lg:mt-0">
            <div className="px-2"><span className="block font-heading text-2xl font-bold text-white sm:text-3xl">€6,50</span><span className="mt-1 block text-xs font-semibold text-white/80">Klein</span></div>
            <div className="px-2"><span className="block font-heading text-2xl font-bold text-white sm:text-3xl">€8,50</span><span className="mt-1 block text-xs font-semibold text-white/80">Normaal</span></div>
            <div className="px-2"><span className="block font-heading text-2xl font-bold text-white sm:text-3xl">€10,50</span><span className="mt-1 block text-xs font-semibold text-white/80">Groot</span></div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Waarom Slijpmaat</p><h2 className="mt-3 font-heading text-3xl font-bold text-[#244A30] sm:text-4xl">Goed slijpwerk, zonder gedoe</h2></div>
          <div className="grid border-y border-[#d9e1d7] md:grid-cols-2 xl:grid-cols-4">
            {qualities.map((quality, index) => {
              const Icon = quality.icon;
              return (
                <article key={quality.title} className={`py-8 md:p-8 ${index % 2 === 0 ? 'md:border-r md:border-[#d9e1d7]' : ''} ${index < 2 ? 'border-b border-[#d9e1d7] xl:border-b-0' : ''} ${index === 1 || index === 2 ? 'xl:border-r xl:border-[#d9e1d7]' : ''}`}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E8EFE8] text-[#3B7F4B]"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                  <h3 className="mt-5 font-heading text-xl font-bold text-[#244A30]">{quality.title}</h3><p className="mt-3 text-sm leading-6 text-[#657068]">{quality.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <div className="max-w-xl pb-2"><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Onze werkwijze</p><h2 className="mt-3 font-heading text-3xl font-bold text-[#244A30] sm:text-4xl">Handwerk in iedere stap</h2><p className="mt-5 text-base leading-8 text-[#657068]">We slijpen je messen met de hand op whetstones, met aandacht voor de juiste slijphoek en zo min mogelijk materiaalverlies. Geen snelle machinebeurt, maar gecontroleerd slijpwerk.</p><a href="#werkwijze" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#3B7F4B] transition-colors hover:text-[#244A30]">Lees meer over onze werkwijze <ArrowRight className="h-4 w-4" aria-hidden="true" /></a></div>
            <div className="relative mx-auto grid w-full max-w-lg grid-cols-2 gap-3 sm:gap-4">
              <div className="pointer-events-none absolute -right-10 -top-9 h-44 w-44 rounded-[46%_54%_63%_37%/42%_51%_49%_58%] bg-[#A9C89E]" aria-hidden="true" />
              {craftSteps.map((step, index) => (
                <figure key={step.title} style={{ aspectRatio: index === 0 || index === 3 ? '4 / 5' : '1 / 1' }} className={`group relative overflow-hidden rounded-[1.5rem] shadow-sm ${index === 1 ? 'self-end' : ''}`}>
                  <img src={step.image} alt={step.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#203728]/95 via-[#203728]/65 to-transparent px-4 pb-4 pt-14 text-white sm:px-5 sm:pb-5"><span className="text-xs font-bold text-[#A9C89E]">{step.number}</span><span className="mt-1 block font-heading text-sm font-bold leading-tight sm:text-base">{step.title}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Ervaringen</p><h2 className="mt-3 font-heading text-3xl font-bold text-[#244A30] sm:text-4xl">Wat klanten over Slijpmaat zeggen</h2></div><a href="#reviews" className="inline-flex items-center gap-2 text-sm font-bold text-[#3B7F4B]">Bekijk alle reviews <ArrowRight className="h-4 w-4" aria-hidden="true" /></a></div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <blockquote key={review.name} className={`relative rounded-[2rem] p-7 sm:p-8 ${index === 0 ? 'bg-[#244A30] text-white' : 'border border-[#d9e1d7] bg-white text-[#244A30]'}`}>
                <Quote className={`h-7 w-7 ${index === 0 ? 'text-[#A9C89E]' : 'text-[#E87B5B]'}`} aria-hidden="true" /><p className={`mt-5 text-sm leading-7 ${index === 0 ? 'text-[#E8EFE8]' : 'text-[#657068]'}`}>“{review.text}”</p><footer className="mt-6 font-heading text-sm font-bold">{review.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#A9C89E] px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
          <Sparkles className="absolute -right-8 -top-8 h-40 w-40 rotate-12 text-white/25" aria-hidden="true" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl text-[#162E1C]"><p className="text-xs font-bold uppercase tracking-[0.22em]">Direct contact</p><h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">Neem contact op met je Maat</h2><p className="mt-4 text-base leading-7">Vragen over je messen of bestelling? Stuur ons een WhatsApp-bericht of bel ons direct.</p></div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#244A30] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#203728]"><MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp ons</a><a href="tel:+31682074967" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#244A30] transition-colors hover:bg-[#F7F4EC]"><Phone className="h-4 w-4" aria-hidden="true" /> Bel ons</a></div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#d9e1d7] bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="max-w-md"><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">Veelgestelde vragen</p><h2 className="mt-3 font-heading text-3xl font-bold text-[#244A30] sm:text-4xl">Nog iets onduidelijk?</h2><p className="mt-4 text-base leading-7 text-[#657068]">Hier vind je snel antwoord op de meest gestelde vragen over het ophalen, slijpen en terugbrengen.</p><a href="#faq" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#3B7F4B]">Bekijk alle vragen <ArrowRight className="h-4 w-4" aria-hidden="true" /></a></div>
          <div className="divide-y divide-[#d9e1d7] border-y border-[#d9e1d7]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-1"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-heading text-base font-bold text-[#244A30] marker:hidden sm:text-lg"><span>{faq.question}</span><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8EFE8] text-[#3B7F4B]"><Plus className="h-4 w-4 transition-transform group-open:rotate-45" aria-hidden="true" /></span></summary><p className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-[#657068]">{faq.answer}</p></details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 overflow-hidden rounded-[2.5rem] bg-[#3B7F4B] px-7 py-10 text-center sm:px-10 sm:py-12 lg:flex-row lg:px-14 lg:text-left">
          <div className="pointer-events-none absolute -right-14 -top-16 h-56 w-56 rounded-[42%_58%_62%_38%/55%_42%_58%_45%] bg-white/10" aria-hidden="true" />
          <div className="relative flex max-w-2xl items-start gap-4"><CheckCircle2 className="mt-1 h-7 w-7 shrink-0 text-[#DCE8DC]" aria-hidden="true" /><div><p className="font-heading text-2xl font-bold text-white sm:text-3xl">Klaar voor messen die weer doen wat ze moeten doen?</p><p className="mt-2 text-sm leading-6 text-[#E8EFE8]">Bekijk je prijs en plan direct een ophaalmoment met je Maat.</p></div></div>
          <a href="#prijzen-bestellen" className="relative inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#3B7F4B] transition-colors hover:bg-[#F7F4EC]">Plan je slijpbeurt <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
        </div>
      </section>
    </div>
  );
};
