import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'green-badge';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

const logoHeight = {
  sm: 'h-7',
  md: 'h-9',
  lg: 'h-12',
};

export const SlijpmaatLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
}) => {
  const logo = (
    <img
      src="/assets/image08.png"
      alt="Slijpmaat"
      className={`${logoHeight[size]} w-auto object-contain ${variant === 'light' || variant === 'green-badge' ? 'brightness-0 invert' : ''}`}
    />
  );

  if (variant === 'green-badge') {
    return <span className={`inline-flex rounded-2xl bg-[#3B7F4B] px-4 py-3 shadow-sm ${className}`}>{logo}</span>;
  }

  return <span className={`inline-flex items-center select-none ${className}`}>{logo}</span>;
};
