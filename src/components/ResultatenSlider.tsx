import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * ResultatenSlider
 * Eenvoudige slider container voor resultaatfoto's.
 * Voeg hieronder in de array 'photos' later eenvoudig je eigen foto's toe:
 * bv. [{ url: '/assets/jouw-foto.jpg', title: 'Koksmes geslepen' }]
 */
interface SlideItem {
  url: string;
  title: string;
}

const photos: SlideItem[] = [
  {
    url: '/assets/resultaten/06-snede-bijl.jpeg',
    title: 'De scherpe snede van een bijl',
  },
  {
    url: '/assets/resultaten/07-mes-met-slijpmaat-sticker.jpeg',
    title: 'Mes met Slijpmaat-sticker',
  },
];

export const ResultatenSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    if (photos.length <= 1) return;
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    if (photos.length <= 1) return;
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[#d9e1d7] bg-white shadow-sm" aria-label="Resultaatfoto's">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#203728] sm:aspect-[16/9]">
        <img
          src={photos[currentIndex].url}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-45 blur-xl"
        />
        <img
          src={photos[currentIndex].url}
          alt={photos[currentIndex].title}
          loading="lazy"
          decoding="async"
          className="relative h-full w-full object-contain"
        />
        <div className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-xl bg-black/60 px-4 py-2 text-xs font-bold text-white backdrop-blur-xs">
          {photos[currentIndex].title}
        </div>
      </div>

      {photos.length > 1 && (
        <div className="flex items-center justify-between p-4 bg-white border-t border-[#d9e1d7]/60">
          <div className="flex items-center gap-1.5">
            {photos.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Toon foto ${i + 1}: ${photos[i].title}`}
                aria-current={i === currentIndex ? 'true' : undefined}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex ? 'w-6 bg-[#E87B5B]' : 'w-2 bg-[#d9e1d7]'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Vorige resultaatfoto"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9e1d7] bg-white text-[#203728] hover:bg-[#E8EFE8] cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Volgende resultaatfoto"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E87B5B] text-white hover:bg-[#C95E3E] cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
