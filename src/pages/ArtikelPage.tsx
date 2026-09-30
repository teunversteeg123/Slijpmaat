import React from 'react';
import { PageId, Article } from '../types';
import { ARTICLES, SLIJPMAAT_INFO } from '../data/siteData';
import {
  ChevronLeft,
  Clock,
  Calendar,
  Share2,
  CheckCircle2,
  Lightbulb,
  ArrowRight,
  MessageCircle,
  BookOpen
} from 'lucide-react';

interface ArtikelPageProps {
  article?: Article;
  onNavigate: (page: PageId) => void;
  onSelectArticle: (article: Article) => void;
}

export const ArtikelPage: React.FC<ArtikelPageProps> = ({
  article = ARTICLES[0], // fallback to default article
  onNavigate,
  onSelectArticle
}) => {
  const currentArticle = article || ARTICLES[0];
  const relatedArticles = ARTICLES.filter((a) => a.id !== currentArticle.id).slice(0, 2);

  return (
    <div className="space-y-12 pb-20">
      {/* Breadcrumb & Navigation */}
      <div className="bg-[#244A30] text-white py-10 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('kennisbank')}
            className="text-xs text-[#A9C89E] hover:text-white flex items-center gap-1 mb-4 cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Terug naar Kennisbank</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-[#A9C89E] mb-2 font-medium">
            <span>{currentArticle.category}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{currentArticle.date}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{currentArticle.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            {currentArticle.title}
          </h1>
        </div>
      </div>

      {/* Main Article Content Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-xs space-y-10">
          {/* Lead Paragraph */}
          <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed border-l-4 border-[#3B7F4B] pl-4 italic bg-[#FAFAFA] py-3 rounded-r-xl">
            {currentArticle.content.lead}
          </p>

          {/* Table of Contents */}
          {currentArticle.content.toc.length > 0 && (
            <div className="p-6 rounded-2xl bg-[#E8EFE8]/50 border border-[#A9C89E]/40 space-y-3">
              <span className="text-xs uppercase tracking-wider font-bold text-[#244A30] font-heading flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#3B7F4B]" />
                Inhoudsopgave
              </span>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                {currentArticle.content.toc.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-[#3B7F4B] font-bold">{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Sections */}
          <div className="space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
            {currentArticle.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 pt-4">
                  {section.heading}
                </h2>
                <p>{section.body}</p>

                {section.tips && section.tips.length > 0 && (
                  <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 text-xs sm:text-sm text-amber-900 flex items-start gap-2.5 mt-3">
                    <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Handige Slijpmaat Tip:</strong> {section.tips[0]}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Key Takeaways */}
          {currentArticle.content.takeaways.length > 0 && (
            <div className="p-6 rounded-2xl bg-[#F7F4EC] border border-[#dcd7cb] space-y-3">
              <h3 className="font-bold font-heading text-slate-900 text-base">
                Samenvatting &amp; Belangrijkste Punten
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {currentArticle.content.takeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3B7F4B] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* In-Article CTA */}
          <div className="p-6 rounded-2xl bg-[#244A30] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-bold font-heading text-lg">Zelf ervaren hoe scherp je mes kan zijn?</h4>
              <p className="text-xs text-[#E8EFE8]/80">Vanaf 3 messen gratis opgehaald en binnen 48 uur terug in Utrecht.</p>
            </div>
            <button
              onClick={() => onNavigate('particulieren')}
              className="px-6 py-3 rounded-full bg-white hover:bg-[#E8EFE8] text-[#244A30] font-bold text-xs whitespace-nowrap transition-colors shadow cursor-pointer"
            >
              Plan je slijpbeurt
            </button>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-bold font-heading text-slate-900 mb-6">
          Gerelateerde artikelen
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {relatedArticles.map((rel) => (
            <div
              key={rel.id}
              onClick={() => {
                onSelectArticle(rel);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#3B7F4B] transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-semibold text-[#3B7F4B]">{rel.category}</span>
                <h4 className="font-bold text-base font-heading text-slate-900 group-hover:text-[#3B7F4B] transition-colors">
                  {rel.title}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-2">{rel.summary}</p>
              </div>
              <div className="pt-4 text-xs font-semibold text-[#3B7F4B] flex items-center gap-1">
                <span>Lees artikel</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
