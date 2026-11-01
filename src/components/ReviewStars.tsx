/** The existing five-star review score, rendered locally without external assets. */
export const ReviewStars = ({ compact = false }: { compact?: boolean }) => (
  <span role="img" aria-label="5 van 5 sterren" className="inline-flex shrink-0 items-center gap-0.5 text-[#B7791F]">
    {[0, 1, 2, 3, 4].map((star) => (
      <svg key={star} viewBox="0 0 24 24" className={compact ? 'h-3 w-3' : 'h-3.5 w-3.5'} fill="currentColor" aria-hidden="true">
        <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8l-6.2 3.3L7 14.2 2 9.3l6.9-1L12 2Z" />
      </svg>
    ))}
  </span>
);
