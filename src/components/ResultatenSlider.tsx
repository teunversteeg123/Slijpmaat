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
    image: '/assets/werkwijze/03-slijpen.webp',
    thumbnail: '/assets/werkwijze/03-slijpen-thumb.webp',
    alt: 'Een keukenmes wordt met de hand geslepen op een watersteen',
    title: 'Handmatig op waterstenen',
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
    alt: 'Geslepen keukenmes met een Slijpmaat-sticker',
    title: 'Klaar voor de keuken',
  },
  {
    image: '/assets/werkwijze/01-beoordelen.webp',
    thumbnail: '/assets/werkwijze/01-beoordelen-thumb.webp',
    alt: 'Slijpmaat beoordeelt de snede van een keukenmes',
    title: 'Inspectie en profiel',
  },
  {
    image: '/assets/werkwijze/02-stenen-kiezen.webp',
    thumbnail: '/assets/werkwijze/02-stenen-kiezen-thumb.webp',
    alt: 'Japanse waterstenen voor het slijpen van keukenmessen',
    title: 'De juiste watersteen',
  },
  {
    image: '/assets/werkwijze/04-afwerken.webp',
    thumbnail: '/assets/werkwijze/04-afwerken-thumb.webp',
    alt: 'Een keukenmes wordt afgewerkt op een leren strop',
    title: 'Afwerken op leren strop',
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
