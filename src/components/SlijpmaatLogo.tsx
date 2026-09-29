import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'green-badge';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const SlijpmaatLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showTagline = false
}) => {
  // Color configuration:
  // variant='dark' -> for light backgrounds (#FAFAFA, #F7F4EC, #FFFFFF): green knives & dark green text
  // variant='light' -> for dark backgrounds (#244A30, #3B7F4B, #E87B5B): crisp white knives & white text
  // variant='green-badge' -> green square badge with white knives & text, exactly matching 'logo slijpmaat GOED.png'!

  const isLight = variant === 'light';
  const isBadge = variant === 'green-badge';

  const strokeColor = isLight || isBadge ? '#FFFFFF' : '#3B7F4B';
  const handleColor = isLight || isBadge ? '#FFFFFF' : '#3B7F4B';
  const textColor = isLight ? 'text-white' : isBadge ? 'text-white' : 'text-[#244A30]';
  const subtextColor = isLight || isBadge ? 'text-[#A9C89E]' : 'text-[#657068]';

  const scale = size === 'sm' ? 'h-7' : size === 'lg' ? 'h-12' : 'h-9';
  const iconSize = size === 'sm' ? 28 : size === 'lg' ? 44 : 34;

  if (isBadge) {
    return (
      <div className={`inline-flex items-center gap-3.5 bg-[#3B7F4B] p-4 rounded-2xl select-none shadow-sm ${className}`}>
        {/* The Two Knives Icon */}
        <svg
          width={iconSize + 8}
          height={iconSize + 8}
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="shrink-0"
        >
          {/* Left Knife (tilted ~10 deg) */}
          <g transform="translate(6, 4) rotate(-4 15 25)">
            {/* Outline blade */}
            <path
              d="M10 28 C9.5 22 9.5 14 11 8 C11.5 6 12.5 5 13.5 5 C14.5 5 15.5 8 16.5 13 C17.8 19 18.2 24 18 28 Z"
              stroke="#FFFFFF"
              strokeWidth="2.8"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
            />
            {/* Solid handle */}
            <path
              d="M11 28.5 C11 28.5 11 37 11.5 40 C11.8 42.5 13 44 14.5 44 C16 44 17.2 42.5 17.5 40 C18 37 18 28.5 18 28.5 Z"
              fill="#FFFFFF"
            />
          </g>

          {/* Right Knife (tilted ~10 deg) */}
          <g transform="translate(24, 4) rotate(-4 15 25)">
            {/* Outline blade */}
            <path
              d="M10 28 C9.5 22 9.5 14 11 8 C11.5 6 12.5 5 13.5 5 C14.5 5 15.5 8 16.5 13 C17.8 19 18.2 24 18 28 Z"
              stroke="#FFFFFF"
              strokeWidth="2.8"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
            />
            {/* Solid handle */}
            <path
              d="M11 28.5 C11 28.5 11 37 11.5 40 C11.8 42.5 13 44 14.5 44 C16 44 17.2 42.5 17.5 40 C18 37 18 28.5 18 28.5 Z"
              fill="#FFFFFF"
            />
          </g>
        </svg>

        <span className="text-3xl font-extrabold tracking-tight font-heading text-white">
          Slijpmaat
        </span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* The Two Knives Icon from logo slijpmaat GOED.png */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0 transition-transform duration-200 group-hover:scale-105"
      >
        {/* Left Knife */}
        <g transform="translate(4, 3) rotate(-4 12 24)">
          {/* Blade Outline */}
          <path
            d="M8.5 25 C8 19 8 12 9.5 6.5 C10 4.5 11 3.5 12 3.5 C13 3.5 14 6 15 11 C16.2 16.5 16.6 21.5 16.5 25 Z"
            stroke={strokeColor}
            strokeWidth="2.4"
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
          />
          {/* Solid Handle */}
          <path
            d="M9.5 25.5 C9.5 25.5 9.5 33 10 36 C10.3 38 11.2 39.5 12.5 39.5 C13.8 39.5 14.7 38 15 36 C15.5 33 15.5 25.5 15.5 25.5 Z"
            fill={handleColor}
          />
        </g>

        {/* Right Knife */}
        <g transform="translate(20, 3) rotate(-4 12 24)">
          {/* Blade Outline */}
          <path
            d="M8.5 25 C8 19 8 12 9.5 6.5 C10 4.5 11 3.5 12 3.5 C13 3.5 14 6 15 11 C16.2 16.5 16.6 21.5 16.5 25 Z"
            stroke={strokeColor}
            strokeWidth="2.4"
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
          />
          {/* Solid Handle */}
          <path
            d="M9.5 25.5 C9.5 25.5 9.5 33 10 36 C10.3 38 11.2 39.5 12.5 39.5 C13.8 39.5 14.7 38 15 36 C15.5 33 15.5 25.5 15.5 25.5 Z"
            fill={handleColor}
          />
        </g>
      </svg>

      <div className="flex flex-col leading-none">
        <span className={`text-xl sm:text-2xl font-bold tracking-tight font-heading ${textColor}`}>
          Slijpmaat<span className="text-[#3B7F4B]">.nl</span>
        </span>
        {showTagline && (
          <span className={`text-[10px] font-semibold tracking-wider uppercase mt-0.5 ${subtextColor}`}>
            Jouw messenslijper in Utrecht
          </span>
        )}
      </div>
    </div>
  );
};
