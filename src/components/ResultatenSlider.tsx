import React from 'react';
import PolaroidLineCarousel, { type Slide } from './ui/polaroid-line-carousel';

export type ResultSlide = Slide;

export interface ResultatenSliderProps {
  slides?: ResultSlide[];
  className?: string;
}

const DEFAULT_RESULT_SLIDES: ResultSlide[] = [
  {
    image: '/assets/resultaten/slider/dun-japans-mes-houten-handvat.jpeg',
    alt: 'Dun Japans mes met houten handvat op een houten snijplank',
  },
  {
    image: '/assets/resultaten/slider/japans-koksmes-blauw-handvat.jpeg',
    alt: 'Japans koksmes met blauw houten handvat op een houten snijplank',
  },
  {
    image: '/assets/resultaten/slider/japans-koksmes-rood-handvat.jpeg',
    alt: 'Japans koksmes met rood houten handvat op een houten snijplank',
  },
  {
    image: '/assets/resultaten/slider/japans-hakmes-houten-handvat.jpeg',
    alt: 'Japans hakmes met houten handvat op een houten snijplank',
  },
  {
    image: '/assets/resultaten/slider/japans-santokumes.jpeg',
    alt: 'Japans santokumes op een houten snijplank',
  },
  {
    image: '/assets/resultaten/slider/global-koksmes.jpeg',
    alt: 'Global koksmes op een houten snijplank',
  },
  {
    image: '/assets/werkwijze/03-slijpen.jpg',
    alt: 'Een keukenmes wordt met de hand geslepen op een watersteen',
  },
  {
    image: '/assets/resultaten/06-snede-bijl.jpeg',
    alt: 'Close-up van de geslepen snede van een bijl',
  },
  {
    image: '/assets/resultaten/07-mes-met-slijpmaat-sticker.jpeg',
    alt: 'Geslepen keukenmes met een Slijpmaat-sticker',
  },
  {
    image: '/assets/werkwijze/01-beoordelen.jpg',
    alt: 'Slijpmaat beoordeelt de snede van een keukenmes',
  },
  {
    image: '/assets/werkwijze/02-stenen-kiezen.jpg',
    alt: 'Japanse waterstenen voor het slijpen van keukenmessen',
  },
  {
    image: '/assets/werkwijze/04-afwerken.jpg',
    alt: 'Een keukenmes wordt afgewerkt op een leren strop',
  },
];

export const ResultatenSlider: React.FC<ResultatenSliderProps> = ({
  slides = DEFAULT_RESULT_SLIDES,
  className = '',
}) =>
  slides.length > 0 ? (
    <PolaroidLineCarousel
      slides={slides}
      className={className}
      height="clamp(500px, 56vw, 650px)"
      cardWidth={310}
      sag={48}
      swing={1}
      autoplay={4500}
      string="#3B7F4B"
      background="#FFFFFF"
      ink="#203728"
      infinite
      showDetails={false}
      showLogo
      imageFit="contain"
      expandable
      ariaLabel="Messenfotocarrousel"
    />
  ) : null;
