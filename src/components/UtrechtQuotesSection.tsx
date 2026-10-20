import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { UIcon } from './ui/UIcon';
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

const QUOTE_COUNT = FEATURED_QUOTES.length;
const LOOPED_QUOTES = [...FEATURED_QUOTES, ...FEATURED_QUOTES, ...FEATURED_QUOTES];

export const UtrechtQuotesSection: React.FC = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const physicalIndexRef = useRef(QUOTE_COUNT);
  const scrollEndTimerRef = useRef<number | null>(null);

  const [isPaused, setIsPaused] = useState(false);

  const scrollToPhysicalIndex = useCallback((index: number, behavior: ScrollBehavior) => {
    const track = trackRef.current;
    const card = track?.children.item(index) as HTMLElement | null;

    if (track && card) {
      const scrollTarget = card.offsetLeft - track.offsetLeft - (track.clientWidth - card.clientWidth) / 2;
      track.scrollTo({ left: Math.max(0, scrollTarget), behavior });
    }
  }, []);

  const moveQuotesBy = useCallback((direction: -1 | 1) => {
    const requestedIndex = physicalIndexRef.current + direction;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    physicalIndexRef.current = requestedIndex;
    setQuoteIndex(((requestedIndex % QUOTE_COUNT) + QUOTE_COUNT) % QUOTE_COUNT);
    scrollToPhysicalIndex(requestedIndex, reduceMotion ? 'auto' : 'smooth');
  }, [scrollToPhysicalIndex]);

  const handleQuoteScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    if (scrollEndTimerRef.current !== null) window.clearTimeout(scrollEndTimerRef.current);
    scrollEndTimerRef.current = window.setTimeout(() => {
      const cards = Array.from(track.children) as HTMLElement[];
      if (cards.length === 0) return;
      const trackCenter = track.scrollLeft + track.clientWidth / 2;
      const closestIndex = cards.reduce((closest, card, index) => {
        const cardCenter = card.offsetLeft - track.offsetLeft + card.clientWidth / 2;
        const currentDistance = Math.abs(cardCenter - trackCenter);
        const closestCard = cards[closest];
        const closestCenter = closestCard.offsetLeft - track.offsetLeft + closestCard.clientWidth / 2;
        const closestDistance = Math.abs(closestCenter - trackCenter);
        return currentDistance < closestDistance ? index : closest;
      }, 0);

      physicalIndexRef.current = closestIndex;
      setQuoteIndex(((closestIndex % QUOTE_COUNT) + QUOTE_COUNT) % QUOTE_COUNT);

      if (closestIndex < QUOTE_COUNT) {
        physicalIndexRef.current = closestIndex + QUOTE_COUNT;
        scrollToPhysicalIndex(closestIndex + QUOTE_COUNT, 'auto');
      } else if (closestIndex >= QUOTE_COUNT * 2) {
        physicalIndexRef.current = closestIndex - QUOTE_COUNT;
        scrollToPhysicalIndex(closestIndex - QUOTE_COUNT, 'auto');
      }
    }, 180);
  }, [scrollToPhysicalIndex]);

  useLayoutEffect(() => {
    physicalIndexRef.current = QUOTE_COUNT;
    scrollToPhysicalIndex(QUOTE_COUNT, 'auto');
  }, [scrollToPhysicalIndex]);

  useEffect(() => {
    if (isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const autoAdvance = window.setTimeout(() => {
      moveQuotesBy(1);
    }, 6000);

    return () => window.clearTimeout(autoAdvance);
  }, [moveQuotesBy, quoteIndex, isPaused]);

  useEffect(() => () => {
    if (scrollEndTimerRef.current !== null) window.clearTimeout(scrollEndTimerRef.current);
  }, []);

  return (
    <section
      id="utrechtse-quotes"
      className="relative scroll-mt-24 overflow-hidden bg-[#3B7F4B] px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => {
        // Resume after 4 seconds of idle
        setTimeout(() => setIsPaused(false), 4000);
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-[55%_45%_60%_40%/50%_55%_45%_50%] bg-white/6"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-8 text-center sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4B19D]">Wat mensen roepen</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
            Quotes uit de Utrechtse keukens
          </h2>
        </div>

        <div className="relative mx-auto w-full overflow-hidden">
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-10 bg-linear-to-r from-[#3B7F4B] to-transparent sm:block lg:w-16" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-10 bg-linear-to-l from-[#3B7F4B] to-transparent sm:block lg:w-16" />
          <div
            ref={trackRef}
            onScroll={handleQuoteScroll}
            role="region"
            aria-label="Korte citaten uit Google-reviews"
            className="flex gap-4 sm:gap-6 overflow-x-auto overscroll-x-contain py-4 px-3 sm:px-8 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {LOOPED_QUOTES.map((item, loopIndex) => (
              <article
                key={`${Math.floor(loopIndex / QUOTE_COUNT)}-${item.name}`}
                aria-hidden={loopIndex < QUOTE_COUNT || loopIndex >= QUOTE_COUNT * 2 ? true : undefined}
                className="relative flex flex-col justify-between min-h-[250px] sm:min-h-[240px] w-[85vw] max-w-[340px] min-w-[85vw] sm:w-[380px] sm:min-w-[380px] lg:w-[360px] lg:min-w-[360px] snap-center shrink-0 rounded-[2rem] border border-[#d9e1d7] bg-white p-5 sm:p-7 shadow-xs transition-all duration-300 hover:shadow-md"
              >
                <div>
                  <UIcon name="quote-right" className="mb-2 text-xl sm:text-2xl text-[#E87B5B]/30" aria-hidden="true" />
                  <p className="font-heading text-[15px] sm:text-base lg:text-lg font-bold leading-relaxed sm:leading-snug text-[#203728]">
                    &ldquo;{item.text}&rdquo;
                  </p>
                </div>
                <div className="mt-4 sm:mt-5 flex items-center justify-between gap-3 border-t border-[#d9e1d7]/60 pt-3.5 text-xs">
                  <span className="font-bold text-[#3B7F4B] truncate">{item.name}</span>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#FCEEE8] px-2.5 py-1 font-bold text-[#C95E3E]">
                    <GoogleIcon />
                    <span>5,0 op Google</span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-3 sm:justify-end">
          <button type="button" onClick={() => moveQuotesBy(-1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white text-[#3B7F4B] shadow-[0_8px_20px_rgba(0,0,0,0.16)] transition-colors hover:bg-[#F7F4EC] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white cursor-pointer" aria-label="Vorige quote">
            <UIcon name="angle-small-left" className="text-xl" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => moveQuotesBy(1)} className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E87B5B] text-white shadow-[0_8px_20px_rgba(0,0,0,0.16)] transition-colors hover:bg-[#C95E3E] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white cursor-pointer" aria-label="Volgende quote">
            <UIcon name="angle-small-right" className="text-xl" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};
