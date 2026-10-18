import React from 'react';

interface OrganicSectionDividerProps {
  fromColor: string;
  middleColor: string;
  toColor: string;
  mirror?: boolean;
  variant?: 'rolling' | 'calm' | 'scalloped';
}

const dividerPaths = {
  rolling: {
    middle: 'M0 0H1440V60C1288 31 1206 91 1044 66C884 41 786 28 630 67C476 106 358 48 211 70C123 83 58 76 0 62V0Z',
    front: 'M0 0H1440V41C1292 19 1201 71 1048 50C891 29 790 18 637 51C484 84 365 35 216 54C127 65 62 59 0 49V0Z',
  },
  calm: {
    middle: 'M0 0H1440V65C1248 91 1113 38 927 58C739 79 614 103 432 72C265 44 137 86 0 66V0Z',
    front: 'M0 0H1440V45C1251 66 1110 24 928 42C744 60 613 80 434 56C263 33 135 66 0 50V0Z',
  },
  scalloped: {
    middle: 'M0 0H1440V58C1262 31 1143 91 961 61C781 31 658 94 474 60C298 28 169 91 0 59V0Z',
    front: 'M0 0H1440V39C1265 19 1140 70 963 46C783 22 657 72 476 46C300 20 166 69 0 45V0Z',
  },
} as const;

export const OrganicSectionDivider: React.FC<OrganicSectionDividerProps> = ({
  fromColor,
  middleColor,
  toColor,
  mirror = false,
  variant = 'rolling',
}) => (
  <div
    aria-hidden="true"
    className="relative h-14 w-full overflow-hidden sm:h-20 lg:h-24"
    style={{ backgroundColor: toColor }}
  >
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={`absolute inset-0 h-full w-full ${mirror ? '-scale-x-100' : ''}`}
    >
      <path
        fill={middleColor}
        d={dividerPaths[variant].middle}
      />
      <path
        fill={fromColor}
        d={dividerPaths[variant].front}
      />
    </svg>
  </div>
);
