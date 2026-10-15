import React from 'react';
import PolaroidLineCarousel, { Slide } from './ui/polaroid-line-carousel';

export interface ResultatenSliderProps {
  slides?: Slide[];
  className?: string;
  height?: number | string;
}

const DEFAULT_RESULT_SLIDES: Slide[] = [
  {
    image: '/assets/resultaten/slider/dun-japans-mes-houten-handvat.jpeg',
    alt: 'Dun Japans mes met houten handvat op een houten snijplank',
    title: 'Dun Japans mes',
  },
  {
    image: '/assets/resultaten/slider/japans-koksmes-blauw-handvat.jpeg',
    alt: 'Japans koksmes met blauw houten handvat op een houten snijplank',
    title: 'Japans koksmes met blauw handvat',
  },
  {
    image: '/assets/resultaten/slider/japans-koksmes-rood-handvat.jpeg',
    alt: 'Japans koksmes met rood houten handvat op een houten snijplank',
    title: 'Japans koksmes met rood handvat',
  },
  {
    image: '/assets/resultaten/slider/japans-hakmes-houten-handvat.jpeg',
    alt: 'Japans hakmes met houten handvat op een houten snijplank',
    title: 'Japans hakmes',
  },
  {
    image: '/assets/resultaten/slider/japans-santokumes.jpeg',
    alt: 'Japans santokumes op een houten snijplank',
    title: 'Japans santokumes',
  },
  {
    image: '/assets/resultaten/slider/global-koksmes.jpeg',
    alt: 'Global koksmes op een houten snijplank',
    title: 'Global koksmes',
  },
  {
    image: '/assets/werkwijze/03-slijpen.jpg',
    alt: 'Een keukenmes wordt met de hand geslepen op een watersteen',
    title: 'Handmatig op waterstenen',
  },
  {
    image: '/assets/resultaten/06-snede-bijl.jpeg',
    alt: 'Close-up van de geslepen snede van een bijl',
    title: 'Vlijmscherpe snede',
  },
  {
    image: '/assets/resultaten/07-mes-met-slijpmaat-sticker.jpeg',
    alt: 'Geslepen keukenmes met een Slijpmaat-sticker',
    title: 'Klaar voor de keuken',
  },
  {
    image: '/assets/werkwijze/01-beoordelen.jpg',
    alt: 'Slijpmaat beoordeelt de snede van een keukenmes',
    title: 'Inspectie en profiel',
  },
  {
    image: '/assets/werkwijze/02-stenen-kiezen.jpg',
    alt: 'Japanse waterstenen voor het slijpen van keukenmessen',
    title: 'De juiste watersteen',
  },
  {
    image: '/assets/werkwijze/04-afwerken.jpg',
    alt: 'Een keukenmes wordt afgewerkt op een leren strop',
    title: 'Afwerken op leren strop',
  },
];

export const ResultatenSlider: React.FC<ResultatenSliderProps> = ({
  slides = DEFAULT_RESULT_SLIDES,
  className = '',
  height = 430,
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
        swing={1}
        autoplay={4500}
        string="#3B7F4B"
        background="transparent"
        ink="#203728"
        expandable
      />
    </div>
  );
};
