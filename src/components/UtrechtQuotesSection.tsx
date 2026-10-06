import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { GoogleIcon, GOOGLE_REVIEWS } from './GoogleReviewsSection';

const FEATURED_REVIEW_NAMES = [
  'Jodocus van Lodensteinstraat',
  'Pieke Van Der Nol',
  'Suus',
  'Calandra Culinaria',
  'Huib Botman',
  'Melle van Sprew',
];

const FEATURED_QUOTES = FEATURED_REVIEW_NAMES
  .map((name) => GOOGLE_REVIEWS.find((review) => review.name === name))
  .filter((review): review is (typeof GOOGLE_REVIEWS)[number] => Boolean(review?.text));

export const UtrechtQuotesSection: React.FC = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const moveQuotesTo = useCallback((requestedIndex: number) => {
    const index = (requestedIndex + FEATURED_QUOTES.length) % FEATURED_QUOTES.length;
    const track = trackRef.current;
    const card = track?.children.item(index) as HTMLElement | null;

    if (track && card) {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: reduceMotion ? 'auto' : 'smooth' });
      setQuoteIndex(index);
    }
  }, []);

  const handleQuoteScroll = useCallback(() => {
    const track = trackRef.current;
    const firstCard = track?.firstElementChild as HTMLElement | null;
    if (!track || !firstCard) return;

    const cardStep = firstCard.offsetWidth + 20;
    setQuoteIndex(Math.min(FEATURED_QUOTES.length - 1, Math.max(0, Math.round(track.scrollLeft / cardStep))));
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let animationFrame = 0;
    let currentPosition = track.scrollLeft;

    const animateTo = (targetPosition: number) => {
      window.cancelAnimationFrame(animationFrame);

      const animate = () => {
        currentPosition += (targetPosition - currentPosition) * 0.045;
        track.scrollLeft = currentPosition;

        if (Math.abs(targetPosition - currentPosition) > 0.5) {
          animationFrame = window.requestAnimationFrame(animate);
        }
      };

      animationFrame = window.requestAnimationFrame(animate);
    };

    const updateFromPageScroll = () => {
      const sectionRect = section.getBoundingClientRect();
      const travelDistance = window.innerHeight + sectionRect.height;
      const progress = Math.min(1, Math.max(0, (window.innerHeight - sectionRect.top) / travelDistance));
      const maximumScroll = Math.max(0, track.scrollWidth - track.clientWidth);
      currentPosition = track.scrollLeft;
      animateTo(progress * maximumScroll);
    };

    updateFromPageScroll();
    window.addEventListener('scroll', updateFromPageScroll, { passive: true });
    window.addEventListener('resize', updateFromPageScroll);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', updateFromPageScroll);
      window.removeEventListener('resize', updateFromPageScroll);
    };
  }, []);

  return (
    <section
      id="utrechtse-quotes"
      ref={sectionRef}
      className="relative scroll-mt-24 overflow-hidden bg-[#F7F4EC] px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-[55%_45%_60%_40%/50%_55%_45%_50%] bg-[#E8EFE8]/70"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 text-center sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C95E3E]">Wat mensen roepen</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">
            Quotes uit de Utrechtse keukens
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-[#657068]">
            Korte reacties van thuiskoks en koks zodra ze hun geslepen messen weer vastpakken.
          </p>
        </div>

        <div
          ref={trackRef}
          onScroll={handleQuoteScroll}
          role="region"
          aria-label="Korte citaten uit Google-reviews"
          className="flex gap-5 overflow-x-auto overscroll-x-contain px-1 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {FEATURED_QUOTES.map((item) => (
            <article
              key={item.name}
              className="relative min-h-[240px] min-w-[calc(100%-0.25rem)] rounded-[2rem] border border-[#d9e1d7] bg-white p-6 shadow-xs transition-all duration-300 odd:-rotate-[0.35deg] even:rotate-[0.35deg] hover:-translate-y-1 hover:rotate-0 hover:shadow-md sm:min-w-[calc((100%-1.25rem)/2)] lg:min-w-[calc((100%-2.5rem)/3)]"
            >
              <Quote className="mb-2 h-6 w-6 text-[#E87B5B]/30" />
              <p className="font-heading text-lg font-bold leading-snug text-[#203728]">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="absolute inset-x-6 bottom-6 flex items-center justify-between gap-3 border-t border-[#d9e1d7]/50 pt-4 text-xs">
                <span className="font-bold text-[#3B7F4B]">{item.name}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FCEEE8] px-2.5 py-1 font-bold text-[#C95E3E]" aria-label="5 van de 5 sterren op Google">
                  <GoogleIcon />
                  <span aria-hidden="true">★★★★★</span>
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex justify-center gap-2.5 sm:justify-end">
          <button type="button" onClick={() => moveQuotesTo(quoteIndex - 1)} className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3B7F4B] text-white shadow-[0_8px_20px_rgba(59,127,75,0.20)] transition-colors hover:bg-[#315F3B] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B]" aria-label="Vorige quote">
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => moveQuotesTo(quoteIndex + 1)} className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3B7F4B] text-white shadow-[0_8px_20px_rgba(59,127,75,0.20)] transition-colors hover:bg-[#315F3B] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B]" aria-label="Volgende quote">
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};
