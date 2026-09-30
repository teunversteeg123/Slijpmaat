import React from 'react';
import { PageId } from '../types';
import { SLIJPMAAT_INFO } from '../data/siteData';
import {
  ArrowRight,
  CheckCircle,
  XCircle,
  HelpCircle,
  MessageCircle,
  Sparkles,
  Utensils,
  Wrench,
  ShieldCheck,
  ChevronLeft,
  BookOpen
} from 'lucide-react';

interface DienstDetailProps {
  pageId: PageId;
  onNavigate: (page: PageId) => void;
}

export const DienstDetailPage: React.FC<DienstDetailProps> = ({ pageId, onNavigate }) => {
  // 1. Keukenmessen slijpen
  if (pageId === 'dienst-keukenmessen') {
    return (
      <div className="space-y-14 pb-20">
        <section className="bg-[#244A30] text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => onNavigate('diensten')}
              className="text-xs text-[#A9C89E] hover:text-white flex items-center gap-1 mb-4 cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Terug naar alle diensten</span>
            </button>
            <span className="text-xs font-semibold text-[#A9C89E] tracking-wider uppercase font-heading bg-[#315F3B] px-3.5 py-1.5 rounded-full inline-block">
              Slijpdienst Utrecht
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white mt-2">
              Keukenmessen slijpen in Utrecht
            </h1>
            <p className="text-base text-[#E8EFE8]/90 max-w-2xl mt-3">
              Vakkundig handmatig geslepen op professionele Shapton Pro waterstenen. Voor Europese koksmessen, Sabatiers, groentemessen en allround keukengereedschap.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4">
                <h2 className="text-xl font-bold font-heading text-slate-900">
                  Voor wie is deze dienst geschikt?
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Deze dienst is bedoeld voor iedereen met een Europees of allround keukenmes waarvan de snede bot aanvoelt of niet meer soepel door een tomaat snijdt. Merken zoals Wüsthof, Zwilling J.A. Henckels, Sabatier, Victorinox, Robert Herder en vergelijkbare koksmessen.
                </p>

                <h3 className="text-lg font-bold font-heading text-slate-900 pt-2">
                  Onze werkwijze voor keukenmessen
                </h3>
                <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-600">
                  <li><strong>Inspectie:</strong> We controleren de snede op micro-chips, bramen en de rechtheid van het lemmet.</li>
                  <li><strong>Whetstone opbouw:</strong> We slijpen onder een gecontroleerde hoek van 15 tot 20 graden per kant. Beginnend bij korrel 1000 om een zuivere apex te creëren.</li>
                  <li><strong>Polijsten &amp; ontbramen:</strong> We verfijnen op een korrel 2000 / 5000 steen om de microsnede strak te trekken.</li>
                  <li><strong>Lederen strop:</strong> We halen het mes over een met polijstpasta behandelde lederen riem. De braam is 100% verdwenen en het mes glijdt moeiteloos door papier.</li>
                </ol>
              </div>

              {/* Related Article link */}
              <div className="bg-[#E8EFE8] rounded-2xl p-6 border border-[#A9C89E]/50 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#3B7F4B] uppercase tracking-wide">Kennisbank</span>
                  <h4 className="font-bold text-sm text-[#3B7F4B]">
                    Hoe weet je of een keukenmes bot is?
                  </h4>
                  <p className="text-xs text-slate-600">
                    Drie eenvoudige zelftests om de scherpte van je lemmet thuis te controleren.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('artikel')}
                  className="px-4 py-2 rounded-xl bg-[#244A30] text-white text-xs font-semibold hover:bg-[#315F3B] transition-colors whitespace-nowrap cursor-pointer shrink-0"
                >
                  Lees artikel
                </button>
              </div>
            </div>

            {/* Sidebar Pricing & CTA */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4">
                <h3 className="font-bold font-heading text-slate-900 text-lg">Prijzen keukenmessen</h3>
                <div className="space-y-3 text-xs sm:text-sm divide-y divide-slate-100">
                  <div className="flex justify-between pt-2">
                    <span className="text-slate-600">Klein mes (&lt;15cm)</span>
                    <span className="font-bold text-slate-900">€6,50</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-slate-600">Normaal mes (15-20cm)</span>
                    <span className="font-bold text-[#3B7F4B]">€8,50</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-slate-600">Groot mes (20-25cm)</span>
                    <span className="font-bold text-slate-900">€10,50</span>
                  </div>
                  <div className="flex justify-between pt-2 text-[#3B7F4B]">
                    <span>StudentenMaat</span>
                    <span className="font-bold">€5,00 per mes</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('particulieren')}
                    className="w-full py-3 rounded-full bg-[#E87B5B] hover:bg-[#C95E3E] text-white font-bold text-xs transition-colors shadow cursor-pointer text-center"
                  >
                    Bereken &amp; bestel
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500">
                <strong>Ophaalservice Utrecht:</strong> Vanaf 3 messen gratis opgehaald en binnen 48 uur teruggebracht.
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // 2. Japanse messen slijpen
  if (pageId === 'dienst-japanse-messen') {
    return (
      <div className="space-y-14 pb-20">
        <section className="bg-[#244A30] text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => onNavigate('diensten')}
              className="text-xs text-[#A9C89E] hover:text-white flex items-center gap-1 mb-4 cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Terug naar alle diensten</span>
            </button>
            <span className="text-xs font-semibold text-[#A9C89E] tracking-wider uppercase font-heading bg-[#315F3B] px-3.5 py-1.5 rounded-full inline-block">
              Japanse Messenslijper Utrecht
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white mt-2">
              Japanse messen slijpen op whetstones
            </h1>
            <p className="text-base text-[#E8EFE8]/90 max-w-2xl mt-3">
              Voor Santoku’s, Gyuto’s, Nakiri’s, Petty’s en Deba messen. Handmatig geslepen met respect voor de harde staalkern (VG-10, Shirogami, Aogami).
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4">
                <h2 className="text-xl font-bold font-heading text-slate-900">
                  Waarom Japanse messen speciale zorg nodig hebben
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Japanse messen zijn gemaakt van aanzienlijk harder staal (59 tot 64 HRC) dan traditionele Europese messen. Hierdoor kan het lemmet veel dunner worden uitgeslepen onder een spitse hoek van 12 tot 15 graden. Droge machinale slijpers zijn dodelijk voor dit staal: de hitte sloopt de harding en micro-chips breken direct uit.
                </p>

                <h3 className="text-lg font-bold font-heading text-slate-900 pt-2">
                  De Japanse slijpsteenreeks van Slijpmaat
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Wij beoordelen elk Japans mes vooraf op de staalkern en symmetrie (50/50 of traditioneel asymmetrisch 70/30). Vervolgens slijpen we in stappen over Shapton Pro 1000, 2000, 5000 en sluiten we af op korrel 8000 met een lederen strop met diamant/chromium pasta voor een zuivere spiegelpolijsting.
                </p>
              </div>

              {/* Related article */}
              <div className="bg-[#E8EFE8] rounded-2xl p-6 border border-[#A9C89E]/50 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#3B7F4B] uppercase tracking-wide">Kennisbank</span>
                  <h4 className="font-bold text-sm text-[#3B7F4B]">
                    Hoe onderhoud je een Japans keukenmes?
                  </h4>
                  <p className="text-xs text-slate-600">
                    Tips voor koolstofstaal, patina, reinigen en waarom aanzetstaal uit den boze is.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('artikel')}
                  className="px-4 py-2 rounded-xl bg-[#244A30] text-white text-xs font-semibold hover:bg-[#315F3B] transition-colors whitespace-nowrap cursor-pointer shrink-0"
                >
                  Lees artikel
                </button>
              </div>
            </div>

            {/* Sidebar Pricing & CTA */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4">
                <h3 className="font-bold font-heading text-slate-900 text-lg">Tarieven Japanse messen</h3>
                <div className="p-2.5 bg-[#E8EFE8] rounded-xl text-xs text-[#162E1C] font-medium">
                  <strong>Geen meerprijs!</strong> Exact dezelfde transparante lengtetarieven als gewone keukenmessen:
                </div>
                <div className="space-y-2 text-xs sm:text-sm divide-y divide-slate-100">
                  <div className="flex justify-between pt-1">
                    <span className="text-slate-600">Petty mes (&lt;15cm)</span>
                    <span className="font-bold">€6,50</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-slate-600">Santoku / Nakiri (15-20cm)</span>
                    <span className="font-bold text-[#3B7F4B]">€8,50</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-slate-600">Gyuto / Chef (20-25cm)</span>
                    <span className="font-bold">€10,50</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('particulieren')}
                    className="w-full py-3 rounded-full bg-[#E87B5B] hover:bg-[#C95E3E] text-white font-bold text-xs transition-colors shadow cursor-pointer text-center"
                  >
                    Plan je slijpbeurt
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // 3. Chips en beschadigingen herstellen
  if (pageId === 'dienst-chips-herstellen') {
    return (
      <div className="space-y-14 pb-20">
        <section className="bg-[#244A30] text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => onNavigate('diensten')}
              className="text-xs text-[#A9C89E] hover:text-white flex items-center gap-1 mb-4 cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Terug naar alle diensten</span>
            </button>
            <span className="text-xs font-semibold text-[#A9C89E] tracking-wider uppercase font-heading bg-[#315F3B] px-3.5 py-1.5 rounded-full inline-block">
              Mesreparatie Utrecht
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white mt-2">
              Chips &amp; beschadigingen herstellen
            </h1>
            <p className="text-base text-[#E8EFE8]/90 max-w-2xl mt-3">
              Een hapje uit de snede of een afgebroken punt? Gooi je mes niet weg. Met gedoseerde materiaalafname brengen we de snede harmonieus terug.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4">
                <h2 className="text-xl font-bold font-heading text-slate-900">
                  Hoe ontstaat een chip en hoe lossen we dit op?
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Als een hard koksmes per ongeluk een botje, avocado-pit of de gootsteen raakt, kan een stukje staal van 0,5 mm tot 2 mm uitbreken. Als je alleen lokaal slijpt, ontstaat er een holle deuk in je snede waardoor het mes de snijplank niet meer raakt.
                </p>

                <h3 className="text-lg font-bold font-heading text-slate-900 pt-2">
                  De aanpak van Slijpmaat
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Wij verlagen gecontroleerd het gehele lemmetprofiel op een grove steen (Shapton Pro 320) zodat er weer een zuivere, vloeiende snijboog ontstaat. Vervolgens dunnen we de schouders van het mes uit (&lsquo;thinning&rsquo;) zodat de geometrie slank blijft en het mes niet als een wig aanvoelt.
                </p>
              </div>
            </div>

            {/* Sidebar Pricing & CTA */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4">
                <h3 className="font-bold font-heading text-slate-900 text-lg">Toeslagen reparatie</h3>
                <div className="space-y-3 text-xs sm:text-sm divide-y divide-slate-100">
                  <div className="pt-2">
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-900">Kleine chip (&le;2mm)</span>
                      <span className="font-bold text-[#E87B5B]">+€2,50</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">Bovenop het basisslijptarief van het mes.</p>
                  </div>

                  <div className="pt-2">
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-900">Nieuw profiel / gebroken punt</span>
                      <span className="font-bold text-[#E87B5B]">+€8,50</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">Bij ernstige buikvervorming of gebroken punt.</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik heb een mes met een chip. Hierbij een foto ter beoordeling!')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-bold text-xs transition-colors shadow flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                    <span>Stuur foto ter beoordeling</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // 4. Wat slijpen we wel & niet?
  return (
    <div className="space-y-14 pb-20">
      <section className="bg-[#244A30] text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('diensten')}
            className="text-xs text-[#A9C89E] hover:text-white flex items-center gap-1 mb-4 cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Terug naar alle diensten</span>
          </button>
          <span className="text-xs font-semibold text-[#A9C89E] tracking-wider uppercase font-heading bg-[#315F3B] px-3.5 py-1.5 rounded-full inline-block">
            Eerlijke Criteria
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white mt-2">
            Wat slijpen we wel en niet?
          </h1>
          <p className="text-base text-[#E8EFE8]/90 max-w-2xl mt-3">
            Wij geloven in focus en ambacht. Hierdoor leveren we topkwaliteit op gladde keukenmessen. Bekijk hieronder exact wat je wel en niet kunt aanbieden.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* WEL */}
          <div className="bg-white rounded-3xl p-8 border-2 border-[#3B7F4B] shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-[#3B7F4B]">
              <CheckCircle className="w-6 h-6" />
              <h2 className="text-2xl font-bold font-heading text-slate-900">
                Wat we WEL slijpen
              </h2>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#3B7F4B] shrink-0 mt-0.5" />
                <span><strong>Europese gladde koksmessen</strong> (Wüsthof, Zwilling, Sabatier, Victorinox, etc.)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#3B7F4B] shrink-0 mt-0.5" />
                <span><strong>Japanse keukenmessen</strong> (Santoku, Gyuto, Nakiri, Petty, Deba, Sujihiki)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#3B7F4B] shrink-0 mt-0.5" />
                <span><strong>Schilmessen &amp; officemessen</strong> met gladde snede</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#3B7F4B] shrink-0 mt-0.5" />
                <span><strong>Fileer- en uitbeenmessen</strong> met gladde flexibele of stijve snede</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#3B7F4B] shrink-0 mt-0.5" />
                <span><strong>Messen met chips of botte punten</strong> (worden vakkundig hersteld)</span>
              </li>
            </ul>
          </div>

          {/* NIET */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-300 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-rose-600">
              <XCircle className="w-6 h-6" />
              <h2 className="text-2xl font-bold font-heading text-slate-900">
                Wat we NIET slijpen
              </h2>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span><strong>Kartelmessen</strong> (zoals broodmessen met gekartelde tanden)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span><strong>Scharen</strong> (keukenscharen, kappersscharen, stofschaar)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span><strong>Tuingereedschap</strong> (heggenscharen, snoeischaren, bijlen, grasmaaierbladen)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span><strong>Zakmessen met zaag/kartel</strong> of tactische zwaarden</span>
              </li>
            </ul>

            <div className="pt-2 text-xs text-slate-500 italic">
              Door ons strikt te specialiseren in gladde keukenmessen, garanderen we dat jouw culinaire gereedschap met uiterste precisie wordt behandeld.
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('particulieren')}
            className="px-8 py-3.5 rounded-full bg-[#E87B5B] hover:bg-[#C95E3E] text-white font-bold text-sm transition-all shadow cursor-pointer inline-flex items-center gap-2"
          >
            <span>Plan je slijpbeurt met je gladde messen</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
