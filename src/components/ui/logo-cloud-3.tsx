import { useEffect, useRef, useState, type CSSProperties } from 'react';

const logos = [
  { name: 'Wüsthof', file: 'wusthof.svg', width: 210, height: 72 },
  { name: 'Zwilling', file: 'zwilling.png', width: 152, height: 52 },
  { name: 'Kai', file: 'kai.svg', width: 88, height: 48 },
  { name: 'Victorinox', file: 'victorinox.svg', width: 156, height: 64 },
  { name: 'Miyabi', file: 'miyabi.png', width: 134, height: 72 },
  { name: 'Sabatier K', file: 'sabatier.png', width: 150, height: 60 },
  { name: 'Tojiro', file: 'tojiro.webp', width: 150, height: 68 },
] as const;

/** The supplied logo-cloud layout, with measured CSS looping and local brand assets. */
export function LogoCloud() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLUListElement>(null);
  const [loop, setLoop] = useState({ distance: 0, copies: 2 });
  const [inView, setInView] = useState(false);
  const [manual, setManual] = useState(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    const group = groupRef.current;
    if (!viewport || !group) return;
    const measure = () => {
      const distance = group.getBoundingClientRect().width;
      if (!distance) return;
      const copies = Math.max(2, Math.ceil(viewport.clientWidth / distance) + 1);
      setLoop(previous => previous.distance === distance && previous.copies === copies ? previous : { distance, copies });
    };
    const resize = new ResizeObserver(measure);
    resize.observe(viewport);
    resize.observe(group);
    const visibility = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    visibility.observe(viewport);
    measure();
    return () => { resize.disconnect(); visibility.disconnect(); };
  }, []);

  const readManually = () => {
    if (manual) return;
    if (viewportRef.current) viewportRef.current.scrollLeft = 0;
    setManual(true);
  };

  return (
    <section id="merken" aria-labelledby="merken-titel" className="bg-[#F7F4EC] pb-12 pt-4 sm:pb-16 sm:pt-6">
      <h2 id="merken-titel" className="px-4 text-center font-heading text-2xl font-bold text-[#3B7F4B] sm:text-3xl">
        Merken die wij slijpen
      </h2>
      <div className="logo-cloud relative mt-6 sm:mt-8" data-paused={!inView} data-manual={manual}>
        <div
          ref={viewportRef}
          className="logo-cloud-viewport"
          role="region"
          aria-label="Westerse en Japanse messenmerken"
          aria-describedby="merken-uitleg"
          tabIndex={0}
          onFocus={readManually}
          onPointerDown={readManually}
        >
          <p id="merken-uitleg" className="sr-only">Scroll horizontaal om alle merken te bekijken. Bij aanraken of toetsenbordfocus stopt de beweging.</p>
          <div className="logo-cloud-track" style={{ '--logo-distance': `${loop.distance}px`, '--logo-duration': `${Math.max(50, loop.distance / 30)}s` } as CSSProperties}>
            {Array.from({ length: loop.copies }, (_, copy) => (
              <ul key={copy} ref={copy === 0 ? groupRef : undefined} className="logo-cloud-group" aria-hidden={copy > 0 || undefined} inert={copy > 0 || undefined}>
                {logos.map(logo => (
                  <li key={logo.file} className="logo-cloud-item">
                    <img src={`/assets/merken/${logo.file}`} alt={logo.name} width={logo.width} height={logo.height} decoding="async" className="select-none object-contain" style={{ width: logo.width, height: logo.height }} />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div aria-hidden="true" className="logo-cloud-fade pointer-events-none absolute inset-y-0 left-0 w-6 bg-linear-to-r from-[#F7F4EC] to-transparent sm:w-20" />
        <div aria-hidden="true" className="logo-cloud-fade pointer-events-none absolute inset-y-0 right-0 w-6 bg-linear-to-l from-[#F7F4EC] to-transparent sm:w-20" />
      </div>
    </section>
  );
}
