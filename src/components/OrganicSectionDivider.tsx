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
    middle: 'M0 0H1440V58C1322 37 1250 88 1128 66C1006 44 940 30 822 68C688 111 603 53 482 66C344 81 255 112 148 72C91 51 47 74 0 64V0Z',
    front: 'M0 0H1440V38C1329 20 1252 67 1136 48C1022 29 943 18 827 51C704 86 612 36 491 51C361 67 275 91 158 58C96 41 51 59 0 51V0Z',
  },
  calm: {
    middle: 'M0 0H1440V67C1260 92 1152 31 978 56C802 82 704 104 530 72C354 40 205 98 0 64V0Z',
    front: 'M0 0H1440V45C1258 65 1138 20 971 42C803 64 704 80 531 55C349 28 196 72 0 49V0Z',
  },
  scalloped: {
    middle: 'M0 0H1440V54C1358 38 1322 96 1242 68C1161 40 1119 91 1037 63C955 35 913 89 832 61C750 34 708 88 626 61C544 34 502 90 420 63C338 36 294 94 211 67C132 42 79 86 0 62V0Z',
    front: 'M0 0H1440V36C1358 24 1320 72 1240 51C1160 29 1117 69 1036 48C955 27 912 68 831 47C749 26 706 67 624 48C542 28 499 70 417 50C335 30 291 74 208 53C128 33 77 66 0 47V0Z',
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
