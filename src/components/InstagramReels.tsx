import { useEffect, useRef, useState } from 'react';
import { UIcon } from './ui/UIcon';

const reels = ['04', '01', '02', '03'];
const reelDirectory = '/assets/resultaten/reels';
const storyButtonClass = 'pointer-events-auto inline-grid size-11 shrink-0 place-items-center rounded-full text-white focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white';
const storyNavClass = 'pointer-events-auto flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-xl text-white disabled:pointer-events-none disabled:opacity-0 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white lg:w-1/2';

function reelIndex(track: HTMLDivElement) {
  return Math.max(0, Math.min(reels.length - 1, Math.round(track.scrollTop / track.clientHeight)));
}

function scrollToReel(track: HTMLDivElement, index: number) {
  const slide = track.children.item(index);
  if (slide instanceof HTMLElement) track.scrollTo({ top: slide.offsetTop });
}

export function InstagramReels() {
  const trackRef = useRef<HTMLDivElement>(null);
  const touchingTrack = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.intersectionRatio >= 0.5);
    }, { threshold: 0.5 });
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let swipe: { x: number; y: number; index: number; step?: number } | null = null;

    function cancelSwipe() {
      swipe = null;
      touchingTrack.current = false;
    }

    function startSwipe(event: TouchEvent) {
      cancelSwipe();
      if (event.touches.length !== 1 || !track) return;
      const touch = event.touches[0];
      swipe = { x: touch.clientX, y: touch.clientY, index: reelIndex(track) };
      touchingTrack.current = true;
    }

    function moveSwipe(event: TouchEvent) {
      if (!swipe || event.touches.length !== 1) return;
      const touch = event.touches[0];
      const dx = touch.clientX - swipe.x;
      const dy = swipe.y - touch.clientY;

      if (swipe.step === undefined && Math.max(Math.abs(dx), Math.abs(dy)) >= 6) {
        const step = Math.sign(dy);
        const next = swipe.index + step;
        swipe.step = Math.abs(dy) > Math.abs(dx) && next >= 0 && next < reels.length ? step : 0;
      }
      if (swipe.step && event.cancelable) event.preventDefault();
    }

    function finishSwipe(event: TouchEvent) {
      const gesture = swipe;
      cancelSwipe();
      if (!track || !gesture?.step) return;

      const distance = (gesture.y - event.changedTouches[0].clientY) * gesture.step;
      if (distance >= 36) scrollToReel(track, gesture.index + gesture.step);
    }

    track.addEventListener('touchstart', startSwipe, { passive: true });
    track.addEventListener('touchmove', moveSwipe, { passive: false });
    track.addEventListener('touchend', finishSwipe, { passive: true });
    track.addEventListener('touchcancel', cancelSwipe);
    return () => {
      track.removeEventListener('touchstart', startSwipe);
      track.removeEventListener('touchmove', moveSwipe);
      track.removeEventListener('touchend', finishSwipe);
      track.removeEventListener('touchcancel', cancelSwipe);
      cancelSwipe();
    };
  }, []);

  useEffect(() => {
    const videos = trackRef.current?.querySelectorAll('video');
    if (!videos) return;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const activeVideo = videos[activeIndex];
    videos.forEach((video, index) => {
      if (index !== activeIndex || !inView) video.pause();
    });
    if (activeVideo && inView && !motion.matches && !connection?.saveData) {
      void activeVideo.play().catch(() => {});
    }

    const respectMotionPreference = (event: MediaQueryListEvent) => {
      if (event.matches) activeVideo?.pause();
    };
    motion.addEventListener('change', respectMotionPreference);
    return () => motion.removeEventListener('change', respectMotionPreference);
  }, [activeIndex, inView]);

  function updateActiveReel(track: HTMLDivElement) {
    const index = reelIndex(track);
    if (index === activeIndex) return;

    const video = track.querySelectorAll('video')[index];
    setProgress(Number.isFinite(video.duration) ? video.currentTime / video.duration : 0);
    setPlaying(!video.paused);
    setActiveIndex(index);
  }

  function goToReel(index: number) {
    const track = trackRef.current;
    if (track) scrollToReel(track, index);
  }

  function togglePlayback() {
    const video = trackRef.current?.querySelectorAll('video')[activeIndex];
    if (!video) return;

    if (video.paused) void video.play().catch(() => {});
    else video.pause();
  }

  return (
    <section aria-labelledby="instagram-reels-title" className="bg-[#FAFAF8] px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-7 text-center lg:grid lg:grid-cols-2 lg:grid-rows-[1fr_auto_1fr] lg:gap-x-16 lg:gap-y-5 lg:text-left">
        <h2 id="instagram-reels-title" className="font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl lg:col-start-1 lg:row-start-1 lg:self-end">
          Check je Maat op instagram
        </h2>

        <p className="hidden max-w-lg text-lg leading-relaxed text-[#657068] lg:col-start-1 lg:row-start-2 lg:block">
          Kijk mee over de schouder van je Maat terwijl we je favoriete mes met de hand slijpen. Je ziet de eerste halen over de Japanse slijpsteen en de scherpteproef aan het eind. Volg je Maat voor meer scherpe resultaten uit Utrecht.
        </p>

        <div className="mx-auto w-full max-w-[min(25rem,43.875svh)] lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:mr-8 lg:max-w-[min(25rem,46svh)] lg:-translate-x-9 xl:mr-16">
          <div className="relative lg:rounded-[2.5rem] lg:bg-[#292b2e] lg:p-2 lg:shadow-xl lg:ring-1 lg:ring-[#55595e]">
            <span aria-hidden="true" className="pointer-events-none absolute top-5 left-1/2 z-20 hidden h-[18px] w-[65px] -translate-x-1/2 rounded-full bg-[#0b0b0b] lg:block" />
            <span aria-hidden="true" className="absolute top-[22%] -left-[3px] hidden h-11 w-[3px] rounded-l bg-[#55595e] lg:block" />
            <span aria-hidden="true" className="absolute top-[29%] -right-[3px] hidden h-14 w-[3px] rounded-r bg-[#55595e] lg:block" />
            <div className="relative isolate overflow-hidden rounded-2xl text-white lg:rounded-[2rem]">
              <div
                ref={trackRef}
                role="region"
                aria-label="Slijpmaat-resultaten"
                tabIndex={0}
                className="relative flex aspect-[9/16] max-h-[78svh] snap-y snap-mandatory flex-col overflow-hidden bg-[#151515] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white lg:aspect-[9/17] lg:max-h-none"
                onScroll={(event) => updateActiveReel(event.currentTarget)}
                onKeyDown={(event) => {
                  if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;
                  event.preventDefault();
                  goToReel(activeIndex + (event.key === 'ArrowDown' ? 1 : -1));
                }}
              >
                {reels.map((reel, index) => {
                  const src = `${reelDirectory}/slijpresultaat-${reel}`;
                  return (
                    <div key={reel} className="h-full w-full shrink-0 snap-start snap-always" aria-hidden={index !== activeIndex}>
                      <video
                        aria-label={`Slijpresultaat ${index + 1} van ${reels.length}`}
                      className="pointer-events-none block h-full w-full object-cover object-center"
                        muted
                        playsInline
                        preload="none"
                        poster={`${src}.webp`}
                        src={`${src}-stil.mp4`}
                        onTimeUpdate={(event) => {
                          const video = event.currentTarget;
                          if (index === activeIndex && Number.isFinite(video.duration) && video.duration > 0) {
                            setProgress(video.currentTime / video.duration);
                          }
                        }}
                        onPlay={() => { if (index === activeIndex) setPlaying(true); }}
                        onPause={() => { if (index === activeIndex) setPlaying(false); }}
                        onEnded={() => {
                          if (index === activeIndex) {
                            setPlaying(false);
                            if (!touchingTrack.current) goToReel(index + 1);
                          }
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 bg-linear-to-b from-black/75 to-transparent px-3 pt-3 pb-6 lg:pt-9">
                <div aria-hidden="true" className="flex gap-1">
                  {reels.map((reel, index) => (
                    <span key={reel} className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/45">
                      <span className="block h-full origin-left rounded-full bg-white" style={{ transform: `scaleX(${index < activeIndex ? 1 : index === activeIndex ? progress : 0})` }} />
                    </span>
                  ))}
                </div>
                <div className="mt-1 flex items-center gap-2 text-left">
                  <img src="/favicon.png" alt="" width="32" height="32" className="size-8 rounded-full bg-[#3B7F4B]" />
                  <span className="mr-auto text-sm font-bold">Resultaten ✨</span>
                  <button type="button" aria-label={playing ? 'Pauzeer video' : 'Speel video af'} onClick={togglePlayback} className={storyButtonClass}>
                    <UIcon name={playing ? 'pause' : 'play'} />
                  </button>
                  <a href="#home-prijzen" aria-label="Verder naar de prijzen" className={storyButtonClass}>
                    <UIcon name="cross-small" className="text-2xl" />
                  </a>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-linear-to-t from-black/65 to-transparent p-2 lg:inset-y-24 lg:items-stretch lg:bg-none">
                <button type="button" aria-label="Vorige video" disabled={activeIndex === 0} onClick={() => goToReel(activeIndex - 1)} className={`${storyNavClass} lg:justify-start`}>
                  <span className="grid size-9 place-items-center rounded-full bg-black/55"><UIcon name="angle-left" /></span>
                </button>
                <span aria-hidden="true" className="text-xs font-semibold lg:hidden">Veeg omhoog voor meer</span>
                <button type="button" aria-label="Volgende video" disabled={activeIndex === reels.length - 1} onClick={() => goToReel(activeIndex + 1)} className={`${storyNavClass} lg:justify-end`}>
                  <span className="grid size-9 place-items-center rounded-full bg-black/55"><UIcon name="angle-right" /></span>
                </button>
              </div>
              <p className="sr-only" aria-live="polite">Video {activeIndex + 1} van {reels.length}</p>
            </div>
          </div>
        </div>

        <a
          href="https://www.instagram.com/slijpmaat.nl/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex flex-col items-center gap-2 rounded-xl font-heading text-base font-semibold text-[#244A30] no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3B7F4B] lg:col-start-1 lg:row-start-3 lg:flex-row lg:gap-4 lg:self-start lg:justify-self-start"
        >
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[linear-gradient(35deg,#feda75_0%,#fa7e1e_24%,#d62976_50%,#962fbf_76%,#4f5bd5_100%)] text-white group-hover:shadow-md motion-safe:transition motion-safe:duration-200 motion-safe:group-hover:scale-105 motion-safe:group-focus-visible:scale-105 lg:size-20 lg:rounded-[1.4rem]">
            <UIcon name="instagram" brand className="text-2xl lg:text-4xl" aria-hidden="true" />
          </span>
          <span className="lg:hidden">@slijpmaat.nl</span>
          <span className="hidden items-center gap-2 lg:inline-flex">
            Meer op Instagram
            <UIcon name="arrow-small-right" className="text-lg motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
          </span>
        </a>
      </div>
    </section>
  );
}
