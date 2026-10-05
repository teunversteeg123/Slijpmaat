import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

/**
 * ResultatenSlider
 * Eenvoudige slider container voor resultaatfoto's.
 * Voeg hieronder in de array 'photos' later eenvoudig je eigen foto's toe:
 * bv. [{ url: '/assets/jouw-foto.jpg', title: 'Koksmes geslepen' }]
 */
interface SlideItem {
  url?: string;
  title?: string;
}

export const ResultatenSlider: React.FC = () => {
  // Voeg hier later zelf je foto-objecten aan toe:
  const [photos] = useState<SlideItem[]>([
    // Voorbeeld:
    // { url: '/assets/resultaat-1.jpg', title: 'Spiegelglad gepolijste snede' },
    // { url: '/assets/resultaat-2.jpg', title: 'Flinterdun snijden' },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    if (photos.length <= 1) return;
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    if (photos.length <= 1) return;
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  // Als er nog geen foto's zijn: toon een rustige, eenvoudige lege container
  if (photos.length === 0) {
    return (
      <div className="relative overflow-hidden rounded-[2rem] border-2 border-dashed border-[#d9e1d7] bg-white p-8 sm:p-12 text-center transition-colors hover:border-[#3B7F4B]/40">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8EFE8] text-[#3B7F4B] mb-3">
          <ImageIcon className="h-7 w-7" />
        </div>
        <p className="font-heading text-lg font-bold text-[#203728]">
          Foto slider (Resultaten)
        </p>
        <p className="mx-auto mt-1 max-w-sm text-xs sm:text-sm text-[#657068]">
          Gereserveerde lege container. Voeg hier later eenvoudig je eigen voor-en-na of resultaatfoto’s aan toe.
        </p>
        
        {/* Subtiele mock bediening zodat de slider-vorm direct herkenbaar is */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#3B7F4B]/40" />
          <span className="h-2 w-2 rounded-full bg-[#d9e1d7]" />
          <span className="h-2 w-2 rounded-full bg-[#d9e1d7]" />
        </div>
      </div>
    );
  }

  // Zodra er foto's in de array staan: eenvoudige actieve slider
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[#d9e1d7] bg-white shadow-sm">
      <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#203728]">
        {photos[currentIndex]?.url && (
          <img
            src={photos[currentIndex].url}
            alt={photos[currentIndex].title || 'Resultaat'}
            className="h-full w-full object-cover"
          />
        )}
        {photos[currentIndex]?.title && (
          <div className="absolute bottom-4 left-4 rounded-xl bg-black/60 px-4 py-2 text-xs font-bold text-white backdrop-blur-xs">
            {photos[currentIndex].title}
          </div>
        )}
      </div>

      {photos.length > 1 && (
        <div className="flex items-center justify-between p-4 bg-white border-t border-[#d9e1d7]/60">
          <div className="flex items-center gap-1.5">
            {photos.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
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
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9e1d7] bg-white text-[#203728] hover:bg-[#E8EFE8] cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
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
