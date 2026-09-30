import React, { useState } from 'react';
import { PageId, Article } from '../types';
import { ARTICLES, SLIJPMAAT_INFO } from '../data/siteData';
import { GoogleIcon, GOOGLE_REVIEW_COUNT } from '../components/GoogleReviewsSection';
import {
  Search,
  BookOpen,
  ArrowRight,
  Clock3,
  Sparkles,
  ChevronRight,
  MapPin,
  MessageCircle,
  Phone
} from 'lucide-react';

interface KennisbankPageProps {
  onNavigate: (page: PageId) => void;
  onSelectArticle: (article: Article) => void;
}

export const KennisbankPage: React.FC<KennisbankPageProps> = ({
  onNavigate,
  onSelectArticle,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [searchQuery, setSearchQuery] = useState('');
  const whatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik heb een vraag over een artikel uit de kennisbank!')}`;

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

  const handleArticleClick = (art: Article) => {
    onSelectArticle(art);
    onNavigate('artikel');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              Kennis &amp; Onderhoud
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-6xl">
              Slijpmaat Kennisbank.
            </h1>
            <p className="mt-5 text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Alles over het scherp houden van je messen, staalsoorten, snijplanken, het herstellen van beschadigingen en waarom traditioneel watersteenslijpen het beste is voor je lemmet.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH BAR */}
      <section className="relative px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-[#d9e1d7]/70">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F7F4EC] rounded-2xl">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-white text-[#3B7F4B] shadow-xs'
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
                placeholder="Zoek in artikelen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#d9e1d7] bg-white text-xs sm:text-sm text-[#244A30] placeholder-[#657068]/60 focus:border-[#3B7F4B] focus:outline-none focus:ring-2 focus:ring-[#3B7F4B]/20"
              />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((art) => (
              <article
                key={art.id}
                onClick={() => handleArticleClick(art)}
                className="group cursor-pointer rounded-[2rem] border border-[#d9e1d7] bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3B7F4B]/50 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#657068] mb-3">
                    <span className="font-bold text-[#3B7F4B] uppercase tracking-wider text-[11px] bg-[#E8EFE8] px-2.5 py-1 rounded-full">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock3 className="w-3 h-3 text-[#3B7F4B]" />
                      {art.readTime}
                    </span>
                  </div>

                  <h2 className="font-heading text-xl font-bold text-[#3B7F4B] group-hover:text-[#315F3B] transition-colors line-clamp-2">
                    {art.title}
                  </h2>
                  <p className="mt-3 text-xs sm:text-sm text-[#657068] leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#3B7F4B] pt-4 border-t border-[#d9e1d7]/60">
                  <span>Lees artikel</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16 text-[#657068] bg-white rounded-3xl border border-[#d9e1d7] mt-6">
              Geen artikelen gevonden voor deze zoekopdracht.
            </div>
          )}
        </div>
      </section>

      {/* 3. BOTTOM CONTACT BANNER with top and bottom wave dividers */}
      <section id="kennisbank-contact" className="relative scroll-mt-20 overflow-hidden bg-[#E87B5B] px-4 pb-24 pt-20 text-white sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
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
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.36em] text-white sm:text-sm">Vraag over onderhoud?</p>
          <h2 className="mt-6 max-w-5xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Vraag advies aan je Maat
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/95 sm:text-xl">
            Twijfel je over de juiste snijplank, hoe je een mes schoonmaakt of wanneer het tijd is voor een slijpbeurt? Stuur ons gerust een bericht.
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
