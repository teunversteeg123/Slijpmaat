import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

type ReviewMarqueeProps = {
  rows: readonly (readonly ReactNode[])[];
};

const ReviewRow = ({ cards, index, onRead }: { cards: readonly ReactNode[]; index: number; onRead: () => void }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const [loop, setLoop] = useState({ distance: 0, copies: 2 });

  useEffect(() => {
    const row = rowRef.current;
    const group = groupRef.current;
    if (!row || !group) return;
    const measure = () => {
      const distance = group.getBoundingClientRect().width;
      if (!distance) return;
      // One group moves out; the remaining copies must still fill the viewport.
      const copies = Math.max(2, Math.ceil(row.clientWidth / distance) + 1);
      setLoop((previous) => previous.distance === distance && previous.copies === copies ? previous : { distance, copies });
    };
    const observer = new ResizeObserver(measure);
    observer.observe(row);
    observer.observe(group);
    measure();
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <div
        ref={rowRef}
        className="review-marquee-row py-2 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#3B7F4B] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="region"
        aria-label={`Klantreviews, rij ${index + 1}`}
        aria-describedby="review-marquee-help"
        tabIndex={0}
        onFocus={onRead}
        onPointerDown={onRead}
      >
        <div
          className={`review-marquee-track ${index % 2 ? 'review-marquee-track-reverse' : ''}`}
          style={{ '--review-loop-distance': `${loop.distance}px`, '--review-loop-duration': `${Math.max(72, loop.distance / 32)}s` } as CSSProperties}
        >
          {Array.from({ length: loop.copies }, (_, copy) => (
            <div key={copy} ref={copy === 0 ? groupRef : undefined} className="review-marquee-group" aria-hidden={copy > 0 || undefined} inert={copy > 0 || undefined}>
              {cards}
            </div>
          ))}
        </div>
      </div>
      <div aria-hidden="true" className="review-marquee-fade pointer-events-none absolute inset-y-0 left-0 w-6 bg-linear-to-r from-white to-transparent sm:w-14" />
      <div aria-hidden="true" className="review-marquee-fade pointer-events-none absolute inset-y-0 right-0 w-6 bg-linear-to-l from-white to-transparent sm:w-14" />
    </div>
  );
};

export const ReviewMarquee = ({ rows }: ReviewMarqueeProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [manual, setManual] = useState(false);
  const [inView, setInView] = useState(false);

  const resetRows = () => {
    rootRef.current?.querySelectorAll('.review-marquee-row').forEach((row) => { row.scrollLeft = 0; });
  };

  const readManually = () => {
    if (manual) return;
    resetRows();
    setManual(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    if (rootRef.current) observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="review-marquee" data-paused={!inView} data-manual={manual}>
      <p id="review-marquee-help" className="sr-only">
        Scroll horizontaal om alle reviews te lezen. De beweging pauzeert wanneer je met de muis of het toetsenbord een rij gebruikt.
      </p>
      <div className="space-y-1 sm:space-y-1.5">
        {rows.map((cards, rowIndex) => (
          <ReviewRow key={rowIndex} cards={cards} index={rowIndex} onRead={readManually} />
        ))}
      </div>
    </div>
  );
};
