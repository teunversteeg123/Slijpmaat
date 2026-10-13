import React from 'react';
import PolaroidLineCarousel, { Slide } from './ui/polaroid-line-carousel';

export interface ResultatenSliderProps {
  slides?: Slide[];
  className?: string;
  height?: number | string;
}

const DEFAULT_RESULT_SLIDES: Slide[] = [
  {
    image: '/assets/werkwijze/03-slijpen.jpg',
    title: 'Handmatig op waterstenen',
    caption: 'Traditioneel Japans slijpambacht op Shapton waterstenen.',
  },
  {
    image: '/assets/resultaten/06-snede-bijl.jpeg',
    title: 'Vlijmscherpe snede',
    caption: 'Microscopische braam zorgvuldig verwijderd en afgewerkt op soepel leer.',
  },
  {
    image: '/assets/resultaten/07-mes-met-slijpmaat-sticker.jpeg',
    title: 'Klaar voor de keuken',
    caption: 'Veilig verpakt en vlijmscherp retour naar jouw snijplank.',
  },
  {
    image: '/assets/werkwijze/01-beoordelen.jpg',
    title: 'Inspectie en profiel',
    caption: 'Origineel profiel en fabrieksgeometrie van het lemmet gerespecteerd.',
  },
  {
    image: '/assets/werkwijze/02-stenen-kiezen.jpg',
    title: 'De juiste watersteen',
    caption: 'Afgestemd op het type staal, Europese of Japanse keukenmessen.',
  },
  {
    image: '/assets/werkwijze/04-afwerken.jpg',
    title: 'Afwerken op leren strop',
    caption: 'Gepolijste apex voor langdurig scherptebehoud zonder wrijvingshitte.',
  },
];

export const ResultatenSlider: React.FC<ResultatenSliderProps> = ({
  slides = DEFAULT_RESULT_SLIDES,
  className = '',
  height = 480,
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-[2.5rem] border border-[#d9e1d7] bg-[#FAFAF8] p-4 sm:p-6 lg:p-8 shadow-xs ${className}`}
      aria-label="Resultaatfoto's van Slijpmaat"
    >
      <div className="mb-2 text-center sm:mb-4">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C95E3E]">
          Sfeer &amp; Resultaten
        </p>
        <h3 className="mt-1.5 font-heading text-2xl font-bold text-[#3B7F4B] sm:text-3xl">
          Vers van de slijpsteen
        </h3>
        <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-[#657068]">
          Sleep aan het touwtje of blader door onze ambachtsfoto&apos;s en resultaten.
        </p>
      </div>

      <PolaroidLineCarousel
        slides={slides}
        height={height}
        cardWidth={280}
        sag={38}
        swing={1}
        autoplay={4500}
        string="#3B7F4B"
        background="transparent"
        ink="#203728"
      />
    </div>
  );
};
