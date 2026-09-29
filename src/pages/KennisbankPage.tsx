import React, { useState } from 'react';
import { PageId, Article } from '../types';
import { ARTICLES } from '../data/siteData';
import {
  Search,
  BookOpen,
  ArrowRight,
  Clock,
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface KennisbankPageProps {
  onNavigate: (page: PageId) => void;
  onSelectArticle: (article: Article) => void;
}

export const KennisbankPage: React.FC<KennisbankPageProps> = ({
  onNavigate,
  onSelectArticle
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'Alle',
    'Slijpen & scherpte',
    'Onderhoud van messen',
    'Messoorten & staal',
    'Veilig gebruik',
    'Werkwijze van Slijpmaat'
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
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-[#244A30] text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-[#A9C89E] tracking-wider uppercase font-heading bg-[#315F3B] px-3.5 py-1.5 rounded-full inline-block">
              Kennis &amp; Onderhoud
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Slijpmaat Kennisbank.
            </h1>
            <p className="text-base sm:text-lg text-[#E8EFE8]/90 leading-relaxed">
              Alles over het scherp houden van je messen, staalsoorten, snijplanken, het herstellen van beschadigingen en waarom ambachtelijk whetstone slijpen het beste is voor je lemmet.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          {/* Categories Segmented Bar */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-2xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-white text-[#244A30] shadow-sm font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Zoek in artikelen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#3B7F4B] bg-white"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              onClick={() => handleArticleClick(art)}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-[#3B7F4B] transition-all hover:shadow-md cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-semibold text-[#3B7F4B]">{art.category}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{art.readTime}</span>
                </div>

                <h2 className="text-xl font-bold font-heading text-slate-900 group-hover:text-[#3B7F4B] transition-colors leading-snug">
                  {art.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {art.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold text-[#3B7F4B]">
                <span>Lees volledig artikel</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            <p>Geen artikelen gevonden voor &ldquo;{searchQuery}&rdquo; in deze categorie.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Alle');
              }}
              className="mt-3 text-xs font-semibold text-[#3B7F4B] hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#244A30] rounded-3xl p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-2xl font-bold font-heading">
              Zijn jouw messen toe aan een professionele slijpbeurt?
            </h3>
            <p className="text-xs sm:text-sm text-[#E8EFE8]/80">
              Vanaf 3 messen gratis opgehaald en vlijmscherp terugbezorgd in Utrecht.
            </p>
          </div>
          <button
            onClick={() => onNavigate('prijzen-bestellen')}
            className="px-6 py-3.5 rounded-full bg-white hover:bg-[#E8EFE8] text-[#244A30] font-bold text-xs sm:text-sm transition-colors whitespace-nowrap cursor-pointer shadow"
          >
            Plan je slijpbeurt
          </button>
        </div>
      </section>
    </div>
  );
};
