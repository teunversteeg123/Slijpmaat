import React, { useState, useRef, useEffect } from 'react';
import { PageId, Article } from '../types';
import { ARTICLES, SLIJPMAAT_INFO } from '../data/siteData';
import { GoogleIcon, GOOGLE_REVIEW_COUNT } from '../components/GoogleReviewsSection';
import {
  Search,
  BookOpen,
  ArrowRight,
  Clock3,
  Sparkles,
  MapPin,
  MessageCircle,
  Phone,
  Plus,
  X,
  FileText,
  Lightbulb,
  CheckCircle2,
  Leaf
} from 'lucide-react';

interface KennisbankPageProps {
  onNavigate: (page: PageId) => void;
  onSelectArticle: (article: Article) => void;
}

// Sample empty draft tiles as requested by the user
const EMPTY_BLOG_PLACEHOLDERS = [
  {
    id: 'placeholder-1',
    category: 'Messoorten & staal',
    title: 'Binnenkort: Het verschil tussen VG10, Shirogami en Aogami staal',
    readTime: '3 min leestijd',
    summary: 'Een duidelijke gids over koolstofstaal versus roestvast staal, en hoe je beide typen het beste onderhoudt.',
    badge: 'Binnenkort beschikbaar'
  },
  {
    id: 'placeholder-2',
    category: 'Onderhoud van messen',
    title: 'Binnenkort: Houten versus kunststof snijplank: wat is beter voor je snede?',
    readTime: '4 min leestijd',
    summary: 'Waarom de keuze van je snijplank net zo belangrijk is als de scherpte van je mes. Tips over kops hout en zachte materialen.',
    badge: 'Concept voorbeeld'
  },
  {
    id: 'placeholder-3',
    category: 'Slijpen & scherpte',
    title: 'Binnenkort: Hoe herken je een bot mes vóórdat je uitschiet?',
    readTime: '3 min leestijd',
    summary: 'Drie eenvoudige thuistesten (zoals de tomatentest en nageltest) om te controleren of je mes aan een slijpbeurt toe is.',
    badge: 'In voorbereiding'
  }
];

const knowledgeHighlights = [
  {
    number: '01',
    title: 'Geen wrijvingshitte',
    text: 'Slijpmachines kunnen het staal oververhitten waardoor de harding verloren gaat. Waterstenen koelen het lemmet continu.'
  },
  {
    number: '02',
    title: 'Minimale materiaalafname',
    text: 'We nemen alleen staal weg waar nodig. Zo behoudt je mes zijn originele vorm en gaat het tientallen jaren mee.'
  },
  {
    number: '03',
    title: 'Juiste snijhoek & geometrie',
    text: 'Voor elk type mes en merk bepalen we met de hand de juiste hoek (bijv. 15° voor Japans en 20° voor Westers staal).'
  },
  {
    number: '04',
    title: 'Spiegelgladde afwerking',
    text: 'Door af te stroppen op plantaardig gelooid leer verdwijnt zelfs de fijnste microbraam voor een scheermesscherpe snede.'
  },
];

export const KennisbankPage: React.FC<KennisbankPageProps> = ({
  onNavigate,
  onSelectArticle,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPlanExpanded, setIsPlanExpanded] = useState(false);
  const planRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik heb een vraag over een artikel uit jullie blogs!')}`;

  useEffect(() => {
    if (!isPlanExpanded) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (planRef.current && !planRef.current.contains(e.target as Node)) {
        setIsPlanExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isPlanExpanded]);

  const openCalculator = () => {
    onNavigate('particulieren');
    window.setTimeout(() => {
      document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  const categories = [
    'Alle',
    'Slijpen & scherpte',
    'Onderhoud van messen',
    'Messoorten & staal',
    'Veilig gebruik',
    'Werkwijze van Slijpmaat',
  ];

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCategory = selectedCategory === 'Alle' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredPlaceholders = EMPTY_BLOG_PLACEHOLDERS.filter((item) => {
    const matchesCategory = selectedCategory === 'Alle' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleArticleClick = (art: Article) => {
    onSelectArticle(art);
    onNavigate('artikel');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="overflow-hidden bg-[#FAFAF8]">
      {/* 1. HERO SECTION (Over ons stijl: links tekst & CTAs, rechts foto met organische mint blob & dark pill) */}
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
              Kennis &amp; Onderhoud · Slijpmaat Utrecht
            </p>
            <h1 className="mt-3 max-w-3xl font-heading text-4xl font-bold leading-[1.02] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-5xl xl:text-6xl">
              Slijpmaat Blogs.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Alles over het scherp houden van je messen, staalsoorten, snijplanken, het herstellen van beschadigingen en waarom traditioneel watersteenslijpen het beste is voor je lemmet.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <div ref={planRef} className="relative">
                {!isPlanExpanded ? (
                  <button
                    type="button"
                    onClick={() => setIsPlanExpanded(true)}
                    className="group inline-flex min-h-13 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] active:scale-[0.98] sm:text-base cursor-pointer"
                  >
                    <span>Plan je slijpbeurt</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </button>
                ) : (
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2 rounded-2xl sm:rounded-full bg-[#E87B5B] p-2.5 sm:p-1.5 shadow-md transition-all duration-300 ease-out animate-in fade-in zoom-in-95">
                    <button
                      type="button"
                      onClick={() => {
                        setIsPlanExpanded(false);
                        openCalculator();
                      }}
                      className="w-full sm:w-auto text-center rounded-xl sm:rounded-full bg-white px-5 sm:px-6 py-3 sm:py-2.5 text-sm sm:text-base font-bold text-[#E87B5B] shadow-2xs hover:bg-[#FFF4EF] active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                    >
                      Particulier
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsPlanExpanded(false);
                        onNavigate('horeca');
                      }}
                      className="w-full sm:w-auto text-center rounded-xl sm:rounded-full bg-[#C95E3E] px-5 sm:px-6 py-3 sm:py-2.5 text-sm sm:text-base font-bold text-white hover:bg-white hover:text-[#E87B5B] active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                    >
                      Zakelijk
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsPlanExpanded(false)}
                      className="flex items-center justify-center gap-1.5 py-1 sm:p-2 text-xs sm:text-sm font-semibold text-white/80 hover:text-white rounded-full hover:bg-white/20 transition-all cursor-pointer"
                      aria-label="Sluiten"
                    >
                      <X className="h-4 w-4" />
                      <span className="sm:hidden">Sluiten</span>
                    </button>
                  </div>
                )}
              </div>

              <a
                href="#artikelen-overzicht"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#E87B5B]/20 bg-[#FCEEE8] px-7 py-3.5 text-sm font-bold text-[#C95E3E] transition-all duration-200 hover:bg-[#F8DFD6] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] sm:text-base"
              >
                <span>Bekijk artikelen &amp; blogs</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right: Foto met organische mint blob & dark pill tag (Over ons stijl) */}
          <div className="order-2 w-full lg:order-2 px-4 sm:px-6 lg:px-0 relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-5 -left-5 sm:-bottom-7 sm:-left-7 h-40 w-40 sm:h-52 sm:w-52 rounded-[42%_58%_62%_38%/55%_42%_58%_45%] bg-[#A9C89E] opacity-90 z-0 transition-transform duration-500 hover:scale-105"
            />
            <div className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-[#d9e1d7] bg-white shadow-lg sm:aspect-[16/11] lg:aspect-square">
              <img
                src="/assets/kennisbank-slijpmaat-kaartje-planten.jpeg"
                alt="Groene planten met een Slijpmaat-kaartje"
                className="h-full w-full object-cover object-center"
                fetchPriority="high"
              />
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 rounded-full bg-[#203728]/85 px-4 py-2 backdrop-blur-xs text-xs font-bold text-white shadow-md border border-white/10">
                <Leaf className="h-4 w-4 text-[#A9C89E]" aria-hidden="true" />
                <span>Blogs · Tips &amp; onderhoud</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR (Zekerheden floating pill) */}
      <section aria-label="Zekerheden" className="relative z-20 px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-2xl border border-[#d9e1d7]/70 bg-white/95 px-6 py-4 shadow-[0_4px_24px_rgba(36,74,48,0.04)] backdrop-blur-xs">
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-0">
            <div className="flex flex-wrap items-center gap-2 sm:justify-center sm:border-r sm:border-[#d9e1d7]/70 sm:px-5">
              <GoogleIcon />
              <span className="text-sm leading-none tracking-[0.06em] text-[#FABB05]" aria-label="5 van de 5 sterren">★★★★★</span>
              <span className="text-sm font-bold text-[#3B7F4B]">{GOOGLE_REVIEW_COUNT} reviews</span>
            </div>
            <div className="flex items-center gap-3 sm:justify-center sm:border-r sm:border-[#d9e1d7]/70 sm:px-5">
              <Sparkles className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
              <span className="text-sm font-bold text-[#3B7F4B]">100% handmatig geslepen</span>
            </div>
            <div className="flex items-center gap-3 sm:justify-center sm:px-5">
              <Clock3 className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
              <span className="text-sm font-bold text-[#3B7F4B]">Binnen 24–48 uur retour</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FILTER & SEARCH BAR SECTION */}
      <section id="artikelen-overzicht" className="scroll-mt-24 px-4 pt-12 pb-6 sm:px-6 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-[#d9e1d7]">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F7F4EC] rounded-2xl border border-[#d9e1d7]/70">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-white text-[#3B7F4B] shadow-2xs'
                      : 'text-[#657068] hover:text-[#3B7F4B]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#657068] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Zoek in blogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-[#d9e1d7] bg-white text-xs sm:text-sm text-[#244A30] placeholder-[#657068]/60 focus:border-[#3B7F4B] focus:outline-none focus:ring-2 focus:ring-[#3B7F4B]/20"
              />
            </div>
          </div>

          {/* 4. ARTICLES & BLOGS GRID (Met gepubliceerde artikelen + lege tegels als voorbeeld) */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gepubliceerde Artikelen */}
            {filteredArticles.map((art) => (
              <article
                key={art.id}
                onClick={() => handleArticleClick(art)}
                className="group cursor-pointer rounded-[2rem] border border-[#d9e1d7] bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3B7F4B]/50 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#657068] mb-3.5">
                    <span className="font-bold text-[#3B7F4B] uppercase tracking-wider text-[11px] bg-[#E8EFE8] px-3 py-1 rounded-full">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <Clock3 className="w-3.5 h-3.5 text-[#3B7F4B]" />
                      {art.readTime}
                    </span>
                  </div>

                  <h2 className="font-heading text-xl font-bold text-[#3B7F4B] group-hover:text-[#315F3B] transition-colors line-clamp-2 leading-snug">
                    {art.title}
                  </h2>
                  <p className="mt-3 text-xs sm:text-sm text-[#657068] leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between pt-4 border-t border-[#d9e1d7]/60 text-xs font-bold text-[#3B7F4B]">
                  <span className="group-hover:translate-x-0.5 transition-transform">Lees artikel</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </article>
            ))}

            {/* LEGE TEGELS ALS VOORBEELD (Zoals gevraagd: blogs mogen nog leeg zijn / lege tegel als voorbeeld) */}
            {filteredPlaceholders.map((placeholder) => (
              <div
                key={placeholder.id}
                className="relative rounded-[2rem] border-2 border-dashed border-[#A9C89E] bg-[#FAFAF8] p-6 sm:p-7 shadow-2xs flex flex-col justify-between transition-all hover:bg-white hover:border-[#3B7F4B]/60"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3.5">
                    <span className="font-bold text-[#C95E3E] uppercase tracking-wider text-[10px] bg-[#FFF4EF] border border-[#E87B5B]/30 px-2.5 py-0.5 rounded-full">
                      {placeholder.badge}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-[#657068]">
                      <Clock3 className="w-3.5 h-3.5 text-[#657068]" />
                      {placeholder.readTime}
                    </span>
                  </div>

                  <span className="block text-[11px] font-bold text-[#3B7F4B] uppercase tracking-wider mb-1">
                    {placeholder.category}
                  </span>

                  <h3 className="font-heading text-lg font-bold text-[#244A30]/85 leading-snug">
                    {placeholder.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#657068] leading-relaxed italic">
                    {placeholder.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#d9e1d7]/70 flex items-center justify-between text-xs text-[#657068]">
                  <span className="flex items-center gap-1.5 font-medium text-[#3B7F4B]">
                    <FileText className="w-3.5 h-3.5" />
                    Lege blog tegel (voorbeeld)
                  </span>
                  <span className="text-[11px] text-[#C95E3E] font-bold">Volgt spoedig</span>
                </div>
              </div>
            ))}

            {/* Extra lege concept-kaart om te demonstreren hoe een nieuwe blog eruitziet */}
            <div className="rounded-[2rem] border-2 border-dashed border-[#d9e1d7] bg-[#F7F4EC]/50 p-6 sm:p-7 flex flex-col items-center justify-center text-center min-h-[220px]">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#3B7F4B] shadow-2xs mb-3">
                <Plus className="h-6 w-6" />
              </span>
              <span className="font-heading text-base font-bold text-[#3B7F4B]">
                Nieuwe blog toevoegen
              </span>
              <p className="mt-1.5 text-xs text-[#657068] max-w-xs">
                Hier kan eenvoudig een nieuw artikel of blogbericht worden geplaatst. De tegel past automatisch in het raster.
              </p>
            </div>
          </div>

          {filteredArticles.length === 0 && filteredPlaceholders.length === 0 && (
            <div className="text-center py-16 text-[#657068] bg-white rounded-3xl border border-[#d9e1d7] mt-6">
              Geen artikelen of onderwerpen gevonden voor deze zoekopdracht.
            </div>
          )}
        </div>
      </section>

      {/* 5. WAAROM WATERSTEENSLIJPEN (Green section with organic wave dividers matching HomePage) */}
      <section className="relative overflow-hidden bg-[#3B7F4B] px-4 pb-28 pt-20 sm:px-6 sm:pb-36 sm:pt-24 lg:px-8 mt-12">
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
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E8EFE8]">De essentie van het vak</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">Waarom waterstenen in plaats van machines?</h2>
            <p className="mt-4 text-base leading-7 text-[#E8EFE8]">
              Vier belangrijke redenen waarom handmatig slijpen op waterstenen superieur is voor de levensduur en scherpte van jouw messen.
            </p>
          </div>

          <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {knowledgeHighlights.map((item, index) => (
              <li
                key={item.title}
                className="group relative rounded-[1.75rem] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F9E4DE] font-heading text-sm font-bold text-[#C95E3E]">
                    {item.number}
                  </span>
                  {index < knowledgeHighlights.length - 1 ? (
                    <ArrowRight className="hidden h-5 w-5 text-[#A9C89E] transition-transform duration-200 group-hover:translate-x-1 xl:block" aria-hidden="true" />
                  ) : (
                    <CheckCircle2 className="h-5 w-5 text-[#3B7F4B]" aria-hidden="true" />
                  )}
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-[#3B7F4B]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#657068]">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. BOTTOM CONTACT BANNER with top and bottom wave dividers (Matching HomePage) */}
      <section id="blogs-contact" className="relative scroll-mt-20 overflow-hidden bg-[#E87B5B] px-4 pb-24 pt-20 text-white sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
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
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.36em] text-white sm:text-sm">Vraag over jouw mes?</p>
          <h2 className="mt-6 max-w-5xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Vraag het direct aan je Maat
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/95 sm:text-xl">
            Twijfel je welk staal jouw mes heeft, of een chip te herstellen is, of hoe je het beste voor jouw snijplank zorgt? Stuur Teun of Mike een appje met een foto van je mes!
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
