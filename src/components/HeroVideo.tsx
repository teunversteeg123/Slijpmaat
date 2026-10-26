import { useEffect, useRef, useState } from 'react';

interface HeroVideoProps {
  ariaLabel: string;
  className?: string;
  src: string;
}

export const HeroVideo = ({ ariaLabel, className = '', src }: HeroVideoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const allowAutoplay = () => !motion.matches && !connection?.saveData;
    const stopForPreference = () => { if (!allowAutoplay()) setPaused(true); };
    motion.addEventListener('change', stopForPreference);
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
      if (entry.isIntersecting && allowAutoplay()) setShouldLoad(true);
    });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => { observer.disconnect(); motion.removeEventListener('change', stopForPreference); };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (visible && shouldLoad && !paused) void video.play().catch(() => setPlaying(false));
    else video.pause();
  }, [visible, shouldLoad, paused]);

  return (
    <div ref={containerRef} className={`relative h-full w-full bg-[#203728] ${className}`}>
      <img src="/assets/tomaat-video-poster.webp" alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
      <video
        ref={videoRef}
        className={`relative h-full w-full object-cover ${isReady ? 'opacity-100' : 'opacity-0'}`}
        src={shouldLoad ? src : undefined}
        muted
        loop
        playsInline
        preload="none"
        aria-label={ariaLabel}
        onCanPlay={() => setIsReady(true)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button type="button" aria-label={playing ? 'Pauzeer video' : 'Speel video af'} onClick={() => { setShouldLoad(true); setPaused(playing); if (!playing && shouldLoad) void videoRef.current?.play().catch(() => setPlaying(false)); }} className="absolute bottom-3 right-3 min-h-11 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#203728] shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
        {playing ? 'Pauzeer' : 'Speel video'}
      </button>
    </div>
  );
};
