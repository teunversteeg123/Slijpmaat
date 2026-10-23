import React from 'react';
import PolaroidLineCarousel, { type Slide } from './ui/polaroid-line-carousel';

interface ResultatenSliderProps {
  slides?: Slide[];
  className?: string;
  height?: number | string;
}

const DEFAULT_RESULT_SLIDES: Slide[] = [
  {
    image: '/assets/resultaten/slider/dun-japans-mes-houten-handvat.webp',
    thumbnail: '/assets/resultaten/slider/dun-japans-mes-houten-handvat-thumb.webp',
    alt: 'Dun Japans mes met houten handvat op een houten snijplank',
    title: 'Dun Japans mes',
  },
  {
    image: '/assets/resultaten/slider/japans-koksmes-blauw-handvat.webp',
    thumbnail: '/assets/resultaten/slider/japans-koksmes-blauw-handvat-thumb.webp',
    alt: 'Japans koksmes met blauw houten handvat op een houten snijplank',
    title: 'Japans koksmes met blauw handvat',
  },
  {
    image: '/assets/resultaten/slider/japans-koksmes-rood-handvat.webp',
    thumbnail: '/assets/resultaten/slider/japans-koksmes-rood-handvat-thumb.webp',
    alt: 'Japans koksmes met rood houten handvat op een houten snijplank',
    title: 'Japans koksmes met rood handvat',
  },
  {
    image: '/assets/resultaten/slider/japans-hakmes-houten-handvat.webp',
    thumbnail: '/assets/resultaten/slider/japans-hakmes-houten-handvat-thumb.webp',
    alt: 'Japans hakmes met houten handvat op een houten snijplank',
    title: 'Japans hakmes',
  },
  {
    image: '/assets/resultaten/slider/japans-santokumes.webp',
    thumbnail: '/assets/resultaten/slider/japans-santokumes-thumb.webp',
    alt: 'Japans santokumes op een houten snijplank',
    title: 'Japans santokumes',
  },
  {
    image: '/assets/resultaten/slider/global-koksmes.webp',
    thumbnail: '/assets/resultaten/slider/global-koksmes-thumb.webp',
    alt: 'Global koksmes op een houten snijplank',
    title: 'Global koksmes',
  },
  {
    image: '/assets/resultaten/slider/global-mes-lang-lemmet.webp',
    thumbnail: '/assets/resultaten/slider/global-mes-lang-lemmet-thumb.webp',
    alt: 'Global keukenmes met lang lemmet op een houten snijplank',
    title: 'Global mes met lang lemmet',
  },
  {
    image: '/assets/resultaten/slider/herman-keukenmes.webp',
    thumbnail: '/assets/resultaten/slider/herman-keukenmes-thumb.webp',
    alt: 'Herman keukenmes met zwart handvat op een houten snijplank',
    title: 'Herman keukenmes',
  },
  {
    image: '/assets/resultaten/slider/global-breed-keukenmes.webp',
    thumbnail: '/assets/resultaten/slider/global-breed-keukenmes-thumb.webp',
    alt: 'Global keukenmes met breed lemmet op een houten snijplank',
    title: 'Global mes met breed lemmet',
  },
  {
    image: '/assets/resultaten/06-snede-bijl.webp',
    thumbnail: '/assets/resultaten/06-snede-bijl-thumb.webp',
    alt: 'Close-up van de geslepen snede van een bijl',
    title: 'Vlijmscherpe snede',
  },
  {
    image: '/assets/resultaten/07-mes-met-slijpmaat-sticker.webp',
    thumbnail: '/assets/resultaten/07-mes-met-slijpmaat-sticker-thumb.webp',
    alt: 'Hakmes met een Slijpmaat-sticker voor een groene achtergrond',
    title: 'Klaar voor de keuken',
  },
];

export const ResultatenSlider: React.FC<ResultatenSliderProps> = ({
  slides = DEFAULT_RESULT_SLIDES,
  className = '',
  height = 'clamp(430px, 48vw, 480px)',
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      aria-label="Resultaatfoto's van Slijpmaat"
    >
      <PolaroidLineCarousel
        slides={slides}
        height={height}
        cardWidth={260}
        sag={36}
        swing={0}
        autoplay={0}
        string="#3B7F4B"
        background="transparent"
        ink="#203728"
        expandable
      />
    </div>
  );
};
