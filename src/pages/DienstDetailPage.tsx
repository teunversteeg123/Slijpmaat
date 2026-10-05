import React from 'react';
import { PageId } from '../types';
import { SLIJPMAAT_INFO } from '../data/siteData';
import { GoogleIcon, GOOGLE_REVIEW_COUNT } from '../components/GoogleReviewsSection';
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  MessageCircle,
  Sparkles,
  Utensils,
  Zap,
  ShieldCheck,
  ChevronLeft,
  Clock3,
  MapPin,
  Phone
} from 'lucide-react';

interface DienstDetailProps {
  pageId: PageId;
  onNavigate: (page: PageId) => void;
}

export const DienstDetailPage: React.FC<DienstDetailProps> = ({ pageId, onNavigate }) => {
  const whatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik heb een vraag over een specifieke slijpdienst!')}`;

  // Shared Bottom Contact Banner
  const renderContactBanner = (title: string, desc: string) => (
    <section className="relative scroll-mt-20 overflow-hidden bg-[#E87B5B] px-4 pb-24 pt-20 text-white sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="pointer-events-none absolute left-0 top-0 h-10 w-full text-[#FAFAF8] sm:h-14 lg:h-16"
      >
        <path fill="currentColor" d="M0,0 L1440,0 L1440,15 C1120,50 840,10 560,40 C320,65 140,20 0,35 Z" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 left-0 h-10 w-full text-white sm:h-14 lg:h-16"
      >
        <path fill="currentColor" d="M0,60 L1440,60 L1440,20 C1180,55 900,15 620,45 C380,70 180,25 0,40 Z" />
      </svg>
      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="font-heading text-xs font-semibold uppercase tracking-[0.36em] text-white sm:text-sm">Direct contact</p>
        <h2 className="mt-6 max-w-5xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">{title}</h2>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/95 sm:text-xl">{desc}</p>
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
  );

  // 1. Keukenmessen slijpen
  if (pageId === 'dienst-keukenmessen') {
    return (
      <div className="overflow-hidden bg-[#FAFAF8]">
        <section className="relative overflow-hidden bg-[#FAFAF8] pb-8 pt-4 sm:pb-12 sm:pt-6 lg:pb-16">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-16 h-[340px] w-[340px] rounded-full bg-[#E3EFE5] opacity-80 blur-2xl sm:h-[480px] sm:w-[480px] sm:blur-3xl" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => onNavigate('diensten')}
              className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-[#3B7F4B] shadow-2xs hover:bg-[#E8EFE8] transition-colors mb-6 cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Terug naar alle diensten</span>
            </button>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#3B7F4B] sm:text-sm">Slijpdienst Utrecht</p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-6xl">
              Keukenmessen slijpen in Utrecht
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[#657068] sm:text-lg lg:text-xl">
              Vakkundig handmatig geslepen op professionele Shapton Pro waterstenen. Voor Europese koksmessen, Sabatiers, groentemessen en allround keukengereedschap.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="relative px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12 lg:items-start">
            <div className="space-y-6 lg:col-span-8">
              <div className="rounded-[2.5rem] border border-[#d9e1d7] bg-white p-7 sm:p-10 shadow-xs space-y-5">
                <h2 className="font-heading text-2xl font-bold text-[#3B7F4B]">Voor wie is deze dienst geschikt?</h2>
                <p className="text-sm leading-relaxed text-[#657068]">
                  Deze dienst is bedoeld voor iedereen met een Europees of allround keukenmes waarvan de snede bot aanvoelt of niet meer soepel door een tomaat snijdt. Merken zoals Wüsthof, Zwilling J.A. Henckels, Sabatier, Victorinox, Robert Herder en vergelijkbare koksmessen.
                </p>

                <h3 className="font-heading text-xl font-bold text-[#3B7F4B] pt-3">Onze werkwijze voor keukenmessen</h3>
                <ol className="space-y-3 text-sm text-[#657068]">
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8EFE8] font-bold text-xs text-[#3B7F4B]">1</span>
                    <span><strong>Inspectie:</strong> We controleren de snede op micro-chips, bramen en de rechtheid van het lemmet.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8EFE8] font-bold text-xs text-[#3B7F4B]">2</span>
                    <span><strong>Watersteen opbouw:</strong> We slijpen onder een gecontroleerde hoek van 15 tot 20 graden per kant. Wij kiezen de juiste steen om een zuivere apex te creëren.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8EFE8] font-bold text-xs text-[#3B7F4B]">3</span>
                    <span><strong>Polijsten &amp; ontbramen:</strong> Wij kiezen de juiste fijnere steen om de microsnede strak te trekken.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8EFE8] font-bold text-xs text-[#3B7F4B]">4</span>
                    <span><strong>Leren strop:</strong> We halen het mes over een met polijstpasta behandelde leren strop. De braam is 100% verdwenen en het mes glijdt moeiteloos door papier.</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Sidebar Pricing & CTA */}
            <div className="space-y-5 lg:col-span-4">
              <div className="rounded-[2.5rem] border border-[#d9e1d7] bg-white p-7 shadow-xs space-y-4">
                <h3 className="font-heading text-xl font-bold text-[#3B7F4B]">Prijzen keukenmessen</h3>
                <div className="divide-y divide-[#d9e1d7]/60 text-sm">
                  <div className="flex justify-between py-2.5">
                    <span className="text-[#657068]">Klein mes (&lt;15 cm)</span>
                    <span className="font-bold text-[#3B7F4B]">€6,50</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-[#657068]">Normaal mes (15–20 cm)</span>
                    <span className="font-bold text-[#3B7F4B]">€8,50</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-[#657068]">Groot mes (20–25 cm)</span>
                    <span className="font-bold text-[#3B7F4B]">€10,50</span>
                  </div>
                  <div className="flex justify-between py-2.5 text-[#3B7F4B] font-bold">
                    <span>StudentenMaat</span>
                    <span>€5,00</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate('particulieren')}
                  className="w-full rounded-full bg-[#E87B5B] py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-[#C95E3E] transition-all cursor-pointer"
                >
                  Bereken &amp; bestel
                </button>
              </div>

              <div className="rounded-2xl border border-[#d9e1d7] bg-[#F7F4EC] p-5 text-xs text-[#657068] leading-relaxed">
                <strong className="text-[#3B7F4B] block mb-1">Ophaalservice Utrecht:</strong>
                Vanaf 3 messen gratis aan huis opgehaald en binnen 24–48 uur vlijmscherp terugbezorgd.
              </div>
            </div>
          </div>
        </section>

        {renderContactBanner('Vraag over je keukenmes?', 'Stuur Teun of Mike een appje met foto. We laten je direct weten wat we kunnen doen.')}
      </div>
    );
  }

  // 2. Japanse messen slijpen
  if (pageId === 'dienst-japanse-messen') {
    return (
      <div className="overflow-hidden bg-[#FAFAF8]">
        <section className="relative overflow-hidden bg-[#FAFAF8] pb-8 pt-4 sm:pb-12 sm:pt-6 lg:pb-16">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-16 h-[340px] w-[340px] rounded-full bg-[#E3EFE5] opacity-80 blur-2xl sm:h-[480px] sm:w-[480px] sm:blur-3xl" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => onNavigate('diensten')}
              className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-[#3B7F4B] shadow-2xs hover:bg-[#E8EFE8] transition-colors mb-6 cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Terug naar alle diensten</span>
            </button>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#3B7F4B] sm:text-sm">Japanse Messenslijper Utrecht</p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-6xl">
              Japanse messen slijpen op whetstones
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[#657068] sm:text-lg lg:text-xl">
              Voor Santoku’s, Gyuto’s, Nakiri’s, Petty’s en Deba messen. Handmatig geslepen met respect voor de harde staalkern (VG-10, Shirogami, Aogami).
            </p>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12 lg:items-start">
            <div className="space-y-6 lg:col-span-8">
              <div className="rounded-[2.5rem] border border-[#d9e1d7] bg-white p-7 sm:p-10 shadow-xs space-y-5">
                <h2 className="font-heading text-2xl font-bold text-[#3B7F4B]">Waarom Japanse messen speciale zorg vragen</h2>
                <p className="text-sm leading-relaxed text-[#657068]">
                  Japanse messen zijn gemaakt van aanzienlijk harder staal (59 tot 64 HRC) dan traditionele Europese messen. Hierdoor kan het lemmet veel dunner worden uitgeslepen onder een spitse hoek van 12 tot 15 graden. Droge machinale slijpers zijn dodelijk voor dit staal: de hitte sloopt de harding en micro-chips breken direct uit.
                </p>

                <h3 className="font-heading text-xl font-bold text-[#3B7F4B] pt-3">De Japanse waterstenen van Slijpmaat</h3>
                <p className="text-sm leading-relaxed text-[#657068]">
                  Wij beoordelen elk Japans mes vooraf op de staalkern en symmetrie (50/50 of traditioneel asymmetrisch 70/30). Vervolgens kiezen wij de juiste stenen die passen bij de hardheid van het staal en sluiten we af op een leren strop met diamantpasta voor een zuivere spiegelpolijsting.
                </p>
              </div>
            </div>

            <div className="space-y-5 lg:col-span-4">
              <div className="rounded-[2.5rem] border border-[#d9e1d7] bg-white p-7 shadow-xs space-y-4">
                <h3 className="font-heading text-xl font-bold text-[#3B7F4B]">Tarieven Japanse messen</h3>
                <div className="rounded-xl bg-[#E8EFE8] p-3 text-xs font-semibold text-[#3B7F4B]">
                  <strong>Geen meerprijs!</strong> Exact dezelfde vaste lengtetarieven als normale keukenmessen.
                </div>
                <div className="divide-y divide-[#d9e1d7]/60 text-sm">
                  <div className="flex justify-between py-2.5">
                    <span className="text-[#657068]">Petty mes (&lt;15 cm)</span>
                    <span className="font-bold text-[#3B7F4B]">€6,50</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-[#657068]">Santoku / Nakiri (15–20 cm)</span>
                    <span className="font-bold text-[#3B7F4B]">€8,50</span>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <span className="text-[#657068]">Gyuto / Chef (20–25 cm)</span>
                    <span className="font-bold text-[#3B7F4B]">€10,50</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate('particulieren')}
                  className="w-full rounded-full bg-[#E87B5B] py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-[#C95E3E] transition-all cursor-pointer"
                >
                  Plan je slijpbeurt
                </button>
              </div>
            </div>
          </div>
        </section>

        {renderContactBanner('Advies over je Japanse mes?', 'Stuur een foto of het merk/type via WhatsApp. We denken direct met je mee.')}
      </div>
    );
  }

  // 3. Chips en beschadigingen herstellen
  if (pageId === 'dienst-chips-herstellen') {
    return (
      <div className="overflow-hidden bg-[#FAFAF8]">
        <section className="relative overflow-hidden bg-[#FAFAF8] pb-8 pt-4 sm:pb-12 sm:pt-6 lg:pb-16">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-16 h-[340px] w-[340px] rounded-full bg-[#F9E4DE] opacity-80 blur-2xl sm:h-[480px] sm:w-[480px] sm:blur-3xl" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => onNavigate('diensten')}
              className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-[#3B7F4B] shadow-2xs hover:bg-[#E8EFE8] transition-colors mb-6 cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Terug naar alle diensten</span>
            </button>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#C95E3E] sm:text-sm">Mesreparatie Utrecht</p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-6xl">
              Chips &amp; beschadigingen herstellen
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[#657068] sm:text-lg lg:text-xl">
              Een hapje uit de snede of een afgebroken punt? Gooi je mes niet weg. Met gedoseerde materiaalafname brengen we de harmonieuze snijlijn weer terug.
            </p>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12 lg:items-start">
            <div className="space-y-6 lg:col-span-8">
              <div className="rounded-[2.5rem] border border-[#d9e1d7] bg-white p-7 sm:p-10 shadow-xs space-y-5">
                <h2 className="font-heading text-2xl font-bold text-[#3B7F4B]">Hoe ontstaat een chip en hoe lossen we dit op?</h2>
                <p className="text-sm leading-relaxed text-[#657068]">
                  Als een hard koksmes per ongeluk een botje, avocado-pit of harde ondergrond raakt, kan een stukje staal van 0,5 mm tot 2 mm uitbreken. Als je alleen lokaal slijpt, ontstaat er een holle deuk in je snede waardoor het mes de snijplank niet meer raakt.
                </p>

                <h3 className="font-heading text-xl font-bold text-[#3B7F4B] pt-3">De aanpak van Slijpmaat</h3>
                <p className="text-sm leading-relaxed text-[#657068]">
                  Wij verlagen gecontroleerd het gehele lemmetprofiel op de juiste herstelsteen zodat er weer een zuivere, vloeiende snijboog ontstaat. Vervolgens dunnen we de schouders van het mes uit (&lsquo;thinning&rsquo;) zodat de geometrie slank blijft en het mes soepel snijdt.
                </p>
              </div>
            </div>

            <div className="space-y-5 lg:col-span-4">
              <div className="rounded-[2.5rem] border border-[#E87B5B]/30 bg-[#FFF7F3] p-7 shadow-xs space-y-4">
                <h3 className="font-heading text-xl font-bold text-[#C95E3E]">Reparatietoeslagen</h3>
                <div className="divide-y divide-[#E87B5B]/20 text-sm">
                  <div className="py-2.5">
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#244A30]">Kleine chip (&le;2 mm)</span>
                      <span className="font-bold text-[#C95E3E]">+€2,50</span>
                    </div>
                    <p className="text-xs text-[#657068] mt-0.5">Bovenop het basisslijptarief van het mes.</p>
                  </div>
                  <div className="py-2.5">
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#244A30]">Nieuw profiel / gebroken punt</span>
                      <span className="font-bold text-[#C95E3E]">+€8,50</span>
                    </div>
                    <p className="text-xs text-[#657068] mt-0.5">Bij ernstige buikvervorming of gebroken punt.</p>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik heb een mes met een chip. Hierbij een foto ter beoordeling!')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E87B5B] py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-[#C95E3E] transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Stuur foto ter beoordeling</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {renderContactBanner('Twijfel je over herstelbaarheid?', 'Stuur een scherpe foto van de chip via WhatsApp. We geven je direct een eerlijk advies.')}
      </div>
    );
  }

  // 4. Wat slijpen we wel & niet?
  return (
    <div className="overflow-hidden bg-[#FAFAF8]">
      <section className="relative overflow-hidden bg-[#FAFAF8] pb-8 pt-4 sm:pb-12 sm:pt-6 lg:pb-16">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-16 h-[340px] w-[340px] rounded-full bg-[#E3EFE5] opacity-80 blur-2xl sm:h-[480px] sm:w-[480px] sm:blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('diensten')}
            className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-[#3B7F4B] shadow-2xs hover:bg-[#E8EFE8] transition-colors mb-6 cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Terug naar alle diensten</span>
          </button>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#3B7F4B] sm:text-sm">Eerlijke Criteria</p>
          <h1 className="mt-3 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-6xl">
            Wat slijpen we wel &amp; niet?
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#657068] sm:text-lg lg:text-xl">
            Wij geloven in focus en ambacht. Hierdoor leveren we topkwaliteit op gladde keukenmessen. Bekijk hieronder exact wat je wel en niet kunt aanbieden.
          </p>
        </div>
      </section>

      <section className="relative px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          {/* WEL */}
          <div className="rounded-[2.5rem] border-2 border-[#3B7F4B] bg-white p-8 shadow-sm space-y-5">
            <div className="flex items-center gap-3 text-[#3B7F4B]">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8EFE8]">
                <CheckCircle2 className="h-6 w-6 text-[#3B7F4B]" />
              </span>
              <h2 className="font-heading text-2xl font-bold text-[#3B7F4B]">Wat we WEL slijpen</h2>
            </div>
            <ul className="space-y-3.5 text-sm text-[#657068]">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#3B7F4B] shrink-0 mt-0.5" />
                <span><strong>Europese gladde koksmessen:</strong> Wüsthof, Zwilling, Sabatier, Victorinox, Robert Herder.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#3B7F4B] shrink-0 mt-0.5" />
                <span><strong>Japanse keukenmessen:</strong> Santoku, Gyuto, Nakiri, Petty, Deba, Sujihiki.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#3B7F4B] shrink-0 mt-0.5" />
                <span><strong>Schilmessen &amp; officemessen:</strong> alle formaten met een gladde snijrand.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#3B7F4B] shrink-0 mt-0.5" />
                <span><strong>Fileer- &amp; uitbeenmessen:</strong> zowel flexibele als stijve lemmeten.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#3B7F4B] shrink-0 mt-0.5" />
                <span><strong>Messen met chips of botte punten:</strong> worden vakkundig hersteld.</span>
              </li>
            </ul>
          </div>

          {/* NIET */}
          <div className="rounded-[2.5rem] border border-[#d9e1d7] bg-[#F7F4EC] p-8 shadow-xs space-y-5">
            <div className="flex items-center gap-3 text-[#C95E3E]">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F9E4DE]">
                <XCircle className="h-6 w-6 text-[#C95E3E]" />
              </span>
              <h2 className="font-heading text-2xl font-bold text-[#C95E3E]">Wat we NIET slijpen</h2>
            </div>
            <ul className="space-y-3.5 text-sm text-[#657068]">
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-[#C95E3E] shrink-0 mt-0.5" />
                <span><strong>Kartelmessen:</strong> broodmessen en steakmessen met karteltanden.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-[#C95E3E] shrink-0 mt-0.5" />
                <span><strong>Scharen:</strong> keukenscharen, kappersscharen en stofschaar.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-[#C95E3E] shrink-0 mt-0.5" />
                <span><strong>Tuingereedschap:</strong> heggenscharen, snoeischaren, bijlen, grasmaaiers.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-[#C95E3E] shrink-0 mt-0.5" />
                <span><strong>Zaagbladen of industriële beitels.</strong></span>
              </li>
            </ul>
            <div className="pt-2 text-xs text-[#657068] italic border-t border-[#d9e1d7]/60">
              Door ons strikt te specialiseren in gladde keukenmessen, garanderen we dat jouw culinaire gereedschap met uiterste precisie en voedselveiligheid wordt behandeld.
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => onNavigate('particulieren')}
            className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-8 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#C95E3E] cursor-pointer"
          >
            <span>Plan je slijpbeurt met je gladde messen</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {renderContactBanner('Vraag over een bijzonder mes?', 'Stuur een foto via WhatsApp en Teun of Mike laat direct weten of we het kunnen slijpen.')}
    </div>
  );
};
