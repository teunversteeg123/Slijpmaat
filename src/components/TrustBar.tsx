import type { ReactNode } from 'react';
import { GoogleIcon, GOOGLE_REVIEW_COUNT } from './GoogleReviewsSection';

type TrustBarItem = {
  icon: ReactNode;
  text: ReactNode;
};

type TrustBarProps = {
  items: readonly [TrustBarItem, TrustBarItem];
  showRating?: boolean;
  compact?: boolean;
};

export const TrustBar = ({ items, showRating: _showRating = false, compact = false }: TrustBarProps) => {
  const sectionSpacing = compact ? 'py-2' : 'py-3';
  const maxWidth = compact ? 'max-w-4xl' : 'max-w-5xl';
  const itemPadding = compact ? 'sm:px-4' : 'sm:px-5';

  return (
    <section aria-label="Zekerheden" className={`relative z-20 px-4 ${sectionSpacing} sm:px-6 lg:px-8`}>
      <div className={`mx-auto ${maxWidth} rounded-2xl border border-[#d9e1d7]/70 bg-white/95 px-6 py-4 shadow-[0_4px_24px_rgba(36,74,48,0.04)] backdrop-blur-xs`}>
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-0">
          <div className={`flex flex-wrap items-center gap-2 sm:justify-center sm:border-r sm:border-[#d9e1d7]/70 ${itemPadding}`}>
            <GoogleIcon />
            <span className="text-sm font-bold text-[#3B7F4B]">
              5,0 · {GOOGLE_REVIEW_COUNT} reviews
            </span>
          </div>
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 sm:justify-center ${index === 0 ? 'sm:border-r sm:border-[#d9e1d7]/70' : ''} ${itemPadding}`}
            >
              {item.icon}
              <span className="text-sm font-bold text-[#3B7F4B]">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
