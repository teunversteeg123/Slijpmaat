import React, { useState } from 'react';
import { PageId } from '../types';
import { REVIEWS } from '../data/siteData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { Star, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';

interface ReviewsPageProps {
  onNavigate: (page: PageId) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<'all' | 'particulier' | 'horeca'>('all');

  const filteredReviews = REVIEWS.filter((rev) => {
    if (filter === 'all') return true;
    return rev.type === filter;
  });

  return (
    <div className="space-y-16 pb-20 bg-[#FAFAFA]">
      {/* Header */}
      <section className="bg-[#244A30] text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-[#A9C89E] tracking-wider uppercase font-heading bg-[#315F3B] px-3.5 py-1.5 rounded-full inline-block">
              Ervaringen &amp; Vakwerk
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Reviews &amp; resultaten.
            </h1>
            <p className="text-base sm:text-lg text-[#E8EFE8]/90 leading-relaxed">
              Lees de ervaringen van thuiskoks, studenten en Utrechtse restaurantchefs die hun messen aan Slijpmaat toevertrouwen.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Resultaten Showcase (Vector diagram - ZERO PHOTOS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BeforeAfterSlider />
      </section>

      {/* Reviews Grid & Filter on clean white background */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#d9e1d7] shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#d9e1d7]">
            <div className="flex items-center gap-3">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div>
                <span className="font-bold text-[#3B7F4B] text-base font-heading">5.0 van 5 sterren</span>
                <span className="text-xs text-[#657068] block">Op basis van geverifieerde klantervaringen op Google</span>
              </div>
            </div>

            {/* Segmented Filter */}
            <div className="flex items-center gap-1 p-1 bg-white rounded-xl border border-[#d9e1d7]">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  filter === 'all' ? 'bg-[#3B7F4B] text-white shadow-xs' : 'text-[#244A30] hover:text-[#3B7F4B]'
                }`}
              >
                Alle reviews ({REVIEWS.length})
              </button>
              <button
                onClick={() => setFilter('particulier')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  filter === 'particulier' ? 'bg-[#3B7F4B] text-white shadow-xs' : 'text-[#244A30] hover:text-[#3B7F4B]'
                }`}
              >
                Particulieren
              </button>
              <button
                onClick={() => setFilter('horeca')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  filter === 'horeca' ? 'bg-[#3B7F4B] text-white shadow-xs' : 'text-[#244A30] hover:text-[#3B7F4B]'
                }`}
              >
                Horeca
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((rev) => (
              <div key={rev.id} className="bg-white rounded-2xl p-6 border border-[#d9e1d7] shadow-xs flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#657068]">{rev.location}</span>
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#203728] leading-relaxed italic">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F2F2EC] mt-4">
                  <h3 className="font-bold text-sm text-[#244A30]">{rev.author}</h3>
                  <p className="text-xs text-[#657068]">{rev.role}</p>
                  {rev.knivesSharpened && (
                    <p className="text-xs text-[#3B7F4B] font-medium mt-1">
                      {rev.knivesSharpened}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#3B7F4B] rounded-3xl p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
              Zelf een review achterlaten na je slijpbeurt?
            </h3>
            <p className="text-sm text-white/90">
              Plan direct jouw slijpbeurt in Utrecht en ontdek wat echte vlijmscherpte is.
            </p>
          </div>
          <button
            onClick={() => onNavigate('prijzen-bestellen')}
            className="px-8 py-4 rounded-full bg-white text-[#244A30] font-bold text-sm hover:bg-[#F7F4EC] transition-colors shadow-xs cursor-pointer whitespace-nowrap"
          >
            Plan je slijpbeurt
          </button>
        </div>
      </section>
    </div>
  );
};
