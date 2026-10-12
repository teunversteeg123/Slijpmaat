import { useState } from 'react';

interface HeroVideoProps {
  ariaLabel: string;
  className?: string;
  src: string;
}

export const HeroVideo = ({ ariaLabel, className = '', src }: HeroVideoProps) => {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className={`relative h-full w-full bg-[#203728] ${className}`}>
      <video
        className={`h-full w-full object-cover ${isReady ? 'opacity-100' : 'opacity-0'}`}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label={ariaLabel}
        onCanPlay={() => setIsReady(true)}
      />
    </div>
  );
};
