import React from 'react';
import { PageId, Article } from '../types';
import { ARTICLES, SLIJPMAAT_INFO } from '../data/siteData';
import {
  ChevronLeft,
  Clock3,
  Lightbulb,
  ArrowRight,
  MessageCircle,
  Phone,
  BookOpen,
  Share2
} from 'lucide-react';

interface ArtikelPageProps {
  article?: Article;
  onNavigate: (page: PageId) => void;
  onSelectArticle: (article: Article) => void;
}

export const ArtikelPage: React.FC<ArtikelPageProps> = ({
  article = ARTICLES[0],
  onNavigate,
  onSelectArticle,
}) => {
  const currentArticle = article || ARTICLES[0];
  const relatedArticles = ARTICLES.filter((a) => a.id !== currentArticle.id).slice(0, 2);
  const whatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(`Hoi Teun en Mike, ik las jullie artikel over "${currentArticle.title}" en heb hier een vraag over!`)}`;

  return (
    <div className="overflow-hidden bg-[#FAFAF8]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#FAFAF8] pb-8 pt-4 sm:pb-12 sm:pt-6 lg:pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-16 h-[340px] w-[340px] rounded-full bg-[#E3EFE5] opacity-80 blur-2xl sm:h-[480px] sm:w-[480px] sm:blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('blogs')}
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-[#3B7F4B] shadow-2xs hover:bg-[#E8EFE8] transition-colors mb-6 cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Terug naar Blogs</span>
          </button>

          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#3B7F4B] uppercase tracking-wider mb-3">
            <span className="bg-[#E8EFE8] px-3 py-1 rounded-full">{currentArticle.category}</span>
            <span className="text-[#657068]">&middot;</span>
            <span className="text-[#657068]">{currentArticle.date}</span>
            <span className="text-[#657068]">&middot;</span>
            <span className="text-[#657068] flex items-center gap-1">
              <Clock3 className="w-3.5 h-3.5" />
              {currentArticle.readTime}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#3B7F4B] leading-tight">
            {currentArticle.title}
          </h1>
        </div>
      </section>

      {/* 2. MAIN ARTICLE CONTAINER */}
      <article className="relative px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-[#d9e1d7] bg-white p-7 sm:p-12 shadow-xs space-y-10">
          {/* Lead Paragraph */}
          <div className="rounded-2xl border-l-4 border-[#3B7F4B] bg-[#FAFAF8] p-5 sm:p-6 text-base sm:text-lg font-medium italic text-[#244A30] leading-relaxed">
            {currentArticle.content.lead}
          </div>

          {/* Table of Contents */}
          {currentArticle.content.toc.length > 0 && (
            <div className="rounded-2xl border border-[#A9C89E]/50 bg-[#E8EFE8]/40 p-6 space-y-3">
              <span className="text-xs uppercase tracking-wider font-bold text-[#3B7F4B] font-heading flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#3B7F4B]" />
                Inhoudsopgave
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-[#657068]">
                {currentArticle.content.toc.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="font-bold text-[#3B7F4B]">{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Sections */}
          <div className="space-y-8 text-sm sm:text-base leading-relaxed text-[#657068]">
            {currentArticle.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h2 className="font-heading text-2xl font-bold text-[#3B7F4B] pt-4">
                  {section.heading}
                </h2>
                <p>{section.body}</p>

                {section.tips && section.tips.length > 0 && (
                  <div className="mt-4 flex items-start gap-3 rounded-2xl border border-[#F9E4DE] bg-[#FFF7F3] p-4 text-xs sm:text-sm text-[#C95E3E]">
                    <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-[#E87B5B]" />
                    <div>
                      <strong className="block font-heading text-sm text-[#C95E3E] mb-0.5">Slijpmaat Tip:</strong>
                      {section.tips[0]}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Author Byline */}
          <div className="border-t border-[#d9e1d7]/70 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#657068]">
            <div>
              Geschreven door <strong className="text-[#3B7F4B]">Teun &amp; Mike</strong> van Slijpmaat Utrecht.
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#3B7F4B] hover:text-[#315F3B]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Heb je hier een vraag over? App ons</span>
            </a>
          </div>
        </div>
      </article>

      {/* 3. RELATED ARTICLES */}
      {relatedArticles.length > 0 && (
        <section className="relative px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h3 className="font-heading text-2xl font-bold text-[#3B7F4B] mb-6">
              Meer artikelen uit onze blogs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => {
                    onSelectArticle(rel);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group cursor-pointer rounded-[2rem] border border-[#d9e1d7] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3B7F4B]/50 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#3B7F4B] bg-[#E8EFE8] px-2.5 py-1 rounded-full">
                      {rel.category}
                    </span>
                    <h4 className="mt-3 font-heading text-lg font-bold text-[#3B7F4B] group-hover:text-[#315F3B] transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                    <p className="mt-2 text-xs text-[#657068] line-clamp-2">{rel.summary}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#3B7F4B]">
                    <span>Lees artikel</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. BOTTOM CONTACT BANNER with top and bottom wave dividers */}
      <section id="artikel-contact" className="relative scroll-mt-20 overflow-hidden bg-[#E87B5B] px-4 pb-24 pt-20 text-white sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
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
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.36em] text-white sm:text-sm">Zijn jouw messen bot?</p>
          <h2 className="mt-6 max-w-5xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Laat je messen weer snijden zoals nieuw
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/95 sm:text-xl">
            Slijpmaat slijpt je messen vakkundig met de hand op waterstenen. Vanaf 3 messen gratis opgehaald in Utrecht.
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
