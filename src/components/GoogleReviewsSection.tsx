import React, { useCallback, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GOOGLE_REVIEW_URL = 'https://g.page/r/CYtVeBVtieCBEAE/review';
export const GOOGLE_REVIEW_COUNT = 20;

const GOOGLE_REVIEWS = [
  { name: 'Arda Brink', text: 'Altijd gedacht dat ik m’n messen zelf prima kon slijpen, maar nu ze door Slijpmaat écht geslepen zijn, merk ik een groot verschil: vlijmscherp! En bovendien een prima service: de geslepen messen werden keurig en veilig ingepakt weer afgeleverd. Fantastisch en bedankt Slijpmaat!' },
  { name: 'Jodocus van Lodensteinstraat', text: '5 messen laten slijpen, allemaal perfect scherp teruggekomen en heel makkelijk geregeld!' },
  { name: 'K B', text: 'Volle service en vlijmscherpe messen! Aanrader!' },
  { name: 'Matthijs', text: 'Leuk initiatief. Ook heel gemakkelijk. Ze komen de messen ophalen en de volgende dag had ik ze al weer terug. Ze waren mooi geslepen en eentje was ook hersteld omdat er een chip in zat. De prijzen zijn goed. Wij zijn alles bij elkaar zeer tevreden. Ik kan slijpmaat dan ook aanraden!' },
  { name: 'Cyril', text: 'Fijn dat we nu vlijmscherpe messen hebben en ze werden perfect geleverd.' },
  { name: 'Pieke Van Der Nol', text: 'Super goed geslepen, aardige meneer' },
  { name: 'Olivier van Heiningen', text: 'Hele goede service!' },
  { name: 'Suus', text: 'Alles was snel en goed geregeld. Messen waren weer vlijmscherp echt top' },
  { name: 'Calandra Culinaria', text: 'Snelle en echt goede service! Misschien nog belangrijker; mijn messen zijn weer echt goed scherp!🔥' },
  { name: 'Tom Snijders', text: '' },
  { name: 'Huib Botman', text: "Quick Response times, both pickup and drop-off services and quality work. What's not to love?" },
  { name: 'Melle van Sprew', text: 'Strakke prijs voor goede service!' },
];

export const GoogleIcon: React.FC = () => (
  <svg viewBox="0 0 48 48" className="h-[22px] w-[22px] shrink-0" aria-hidden="true">
    <path fill="#FFC107" d="M43.6 20H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C33.9 6 29.2 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.7-.4-4z" />
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C33.9 6 29.2 4 24 4c-7.7 0-14.4 4.4-17.7 10.7z" />
    <path fill="#4CAF50" d="M24 44c5.1 0 9.8-2 13.3-5.2l-6.1-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.4-7.9L6 33.2C9.3 39.6 16.1 44 24 44z" />
    <path fill="#1976D2" d="M43.6 20H42V20H24v8h11.3c-1.1 3.1-3.3 5-4.1 5.6l6.1 5.2C36.9 39.2 44 34 44 24c0-1.3-.1-2.7-.4-4z" />
  </svg>
);

export const GoogleReviewsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const moveTo = useCallback((requestedIndex: number) => {
    const index = (requestedIndex + GOOGLE_REVIEWS.length) % GOOGLE_REVIEWS.length;
    const track = trackRef.current;
    const card = track?.children.item(index) as HTMLElement | null;

    if (track && card) {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: reduceMotion ? 'auto' : 'smooth' });
      setActiveIndex(index);
    }
  }, []);

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    const firstCard = track?.firstElementChild as HTMLElement | null;
    if (!track || !firstCard) return;

    const cardStep = firstCard.offsetWidth + 16;
    const nextIndex = Math.min(GOOGLE_REVIEWS.length - 1, Math.max(0, Math.round(track.scrollLeft / cardStep)));
    setActiveIndex(nextIndex);
  }, []);

  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-[1100px] overflow-hidden rounded-[2.625rem] bg-[#FFF7F3] px-4 py-10 text-[#3B7F4B] sm:px-8 sm:py-16 lg:px-[46px] lg:py-[78px]">
        <p className="mb-3 inline-flex items-center gap-2 font-heading text-[13px] font-extrabold uppercase tracking-[0.08em] before:h-0.5 before:w-[34px] before:rounded-full before:bg-[#3B7F4B]">
          Google reviews
        </p>
        <h2 className="mb-7 max-w-4xl font-heading text-4xl font-black leading-[0.95] tracking-[-0.035em] sm:text-5xl lg:text-[64px]">
          Scherpe woorden van blije klanten
        </h2>

        <div className="mb-[18px] flex flex-col items-start justify-between gap-4 rounded-[18px] border border-[#3B7F4B]/20 bg-white px-5 py-[18px] shadow-[0_16px_38px_rgba(59,127,75,0.08)] sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-2.5 font-black">
            <span>Slijpmaat op Google</span>
            <span className="text-[22px] leading-none tracking-[1px] text-[#FFCD00]" aria-label="5 van de 5 sterren">★★★★★</span>
            <span className="text-[14px] font-bold text-[#315F3B]">{GOOGLE_REVIEW_COUNT} reviews · 5,0 op Google</span>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={handleScroll}
          role="region"
          aria-label="Klantreviews"
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pt-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {GOOGLE_REVIEWS.map((review) => (
            <article key={review.name} className="min-h-[270px] min-w-full snap-start rounded-[20px] border border-[#3B7F4B]/20 bg-white p-6 shadow-[0_18px_44px_rgba(59,127,75,0.10)] sm:p-[34px] md:min-w-[calc((100%-1rem)/2)]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#3B7F4B]/15 pb-4">
                <h3 className="font-heading text-[22px] font-black leading-[1.18] text-[#3B7F4B] sm:text-[26px]">{review.name}</h3>
                <div className="inline-flex items-center gap-2 whitespace-nowrap text-[18px] font-black tracking-[1px] text-[#FFCD00]" aria-label="5 van de 5 sterren op Google">
                  <span>★★★★★</span>
                  <GoogleIcon />
                </div>
              </div>
              {review.text ? <p className="mt-5 text-[15px] leading-[1.65] text-[#315F3B] sm:text-[17px]">{review.text}</p> : null}
            </article>
          ))}
        </div>

        <div className="mt-[18px] flex gap-2.5">
          <button type="button" onClick={() => moveTo(activeIndex - 1)} className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#3B7F4B] text-white shadow-[0_12px_28px_rgba(59,127,75,0.20)] transition-colors hover:bg-[#315F3B] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#141414]" aria-label="Vorige review">
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => moveTo(activeIndex + 1)} className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#3B7F4B] text-white shadow-[0_12px_28px_rgba(59,127,75,0.20)] transition-colors hover:bg-[#315F3B] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#141414]" aria-label="Volgende review">
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-7 grid items-center gap-[18px] rounded-[20px] bg-[#3B7F4B] p-[22px] text-white shadow-[0_18px_44px_rgba(59,127,75,0.18)] sm:grid-cols-[1fr_auto]">
          <p className="text-base font-extrabold leading-[1.45] text-white sm:text-[19px]">
            Heb je jouw messen laten slijpen? Deel je ervaring met je Maat en help anderen ook scherp kiezen.
          </p>
          <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[42px] items-center justify-center rounded-full bg-white px-4 py-[11px] text-[14px] font-black text-[#3B7F4B] transition-colors hover:bg-[#FFF4EF] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#141414]">
            Schrijf een review
          </a>
        </div>
      </div>
    </section>
  );
};
