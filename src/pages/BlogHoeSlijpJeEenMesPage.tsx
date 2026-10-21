import { useState, useEffect, useMemo, type FC } from 'react';
import type { PageId } from '../types';
import { ResultatenSlider } from '../components/ResultatenSlider';
import { TrustBar } from '../components/TrustBar';
import { UIcon } from '../components/ui/UIcon';
import { PAGE_PATHS } from '../seo';

interface BlogHoeSlijpJeEenMesPageProps {
  onNavigate: (page: PageId) => void;
}

interface NavSection {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  keywords: string[];
}

const SECTIONS: NavSection[] = [
  {
    id: 'inleiding',
    title: 'Inleiding & het korte antwoord',
    shortTitle: 'Korte antwoord',
    category: 'Basis',
    keywords: ['inleiding', 'basis', 'snede', 'braam', 'korte antwoord'],
  },
  {
    id: 'diagnose',
    title: 'Wanneer is je mes toe aan een slijpbeurt?',
    shortTitle: 'Diagnose & tests',
    category: 'Diagnose',
    keywords: ['tomatentest', 'papiertest', 'bot mes', 'scherpte testen', 'diagnose', 'wanneer slijpen'],
  },
  {
    id: 'benodigdheden',
    title: 'Wat heb je nodig om zelf te slijpen?',
    shortTitle: 'Benodigdheden',
    category: 'Voorbereiding',
    keywords: ['watersteen', 'korrel 1000', 'wetsteen', 'slijpsteen', 'theedoek', 'materiaal', 'spullen'],
  },
  {
    id: 'wetsteen-weken',
    title: 'Moet een wetsteen altijd weken in water?',
    shortTitle: 'Feit of fabel: weken',
    category: 'Kennis',
    keywords: ['weken', 'splash and go', 'water', 'feit fabel', 'poreus', 'holle steen'],
  },
  {
    id: 'slijphoek',
    title: 'Welke slijphoek moet je gebruiken?',
    shortTitle: 'Slijphoek & stifttruc',
    category: 'Techniek',
    keywords: ['slijphoek', 'graden', '15 graden', '20 graden', 'stifttruc', 'geometrie'],
  },
  {
    id: 'stappenplan',
    title: 'Het 7-stappenplan: van hiel tot punt',
    shortTitle: 'Het 7-stappenplan',
    category: 'Stappen',
    keywords: ['stappenplan', 'stap voor stap', 'stap 1', 'stap 2', 'stap 3', 'stap 4', 'stap 5', 'stap 6', 'stap 7', 'braam', 'ontbramen'],
  },
  {
    id: 'fouten',
    title: 'De 5 meest gemaakte fouten',
    shortTitle: '5 veelgemaakte fouten',
    category: 'Valkuilen',
    keywords: ['fouten', 'valkuilen', 'druk zetten', 'hoek veranderen', 'braam missen'],
  },
  {
    id: 'aanzetten-vs-slijpen',
    title: 'Aanzetten vs. slijpen: het verschil',
    shortTitle: 'Aanzetstaal vs slijpen',
    category: 'Onderscheid',
    keywords: ['aanzetstaal', 'staal richten', 'microbraam', 'verschil', 'slijpen'],
  },
  {
    id: 'wanneer-uitbesteden',
    title: 'Wanneer kun je beter professioneel laten slijpen?',
    shortTitle: 'Professioneel laten doen',
    category: 'Advies',
    keywords: ['uitbesteden', 'chips', 'happen', 'punt gebroken', 'kostbaar mes', 'vakman'],
  },
  {
    id: 'onderhoud',
    title: '4 gouden regels voor scherptebehoud',
    shortTitle: 'Onderhoud & tips',
    category: 'Nazorg',
    keywords: ['snijplank', 'vaatwasser', 'onderhoud', 'bewaren', 'scherp houden'],
  },
];

export const BlogHoeSlijpJeEenMesPage: FC<BlogHoeSlijpJeEenMesPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSectionId, setActiveSectionId] = useState<string>('inleiding');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filter sections based on search query
  const filteredSections = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return SECTIONS;
    return SECTIONS.filter(
      (sec) =>
        sec.title.toLowerCase().includes(q) ||
        sec.category.toLowerCase().includes(q) ||
        sec.keywords.some((k) => k.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  // Scrollspy: update active section as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 180;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSectionId(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
      setActiveSectionId(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <article className="min-h-screen bg-white text-[#244A30] font-sans">
      {/* 1. KRUIMELPAD */}
      <nav aria-label="Kruimelpad" className="border-b border-[#E8EFE8] bg-white px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center gap-2 text-xs font-semibold text-[#3B7F4B] sm:text-sm">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="transition hover:text-[#203728] cursor-pointer"
          >
            Home
          </button>
          <span aria-hidden="true" className="text-[#A9C89E]">/</span>
          <button
            type="button"
            onClick={() => onNavigate('blogs')}
            className="transition hover:text-[#203728] cursor-pointer"
          >
            Blogs
          </button>
          <span aria-hidden="true" className="text-[#A9C89E]">/</span>
          <span className="truncate text-[#244A30] font-bold" aria-current="page">
            Hoe slijp je een mes?
          </span>
        </div>
      </nav>

      {/* 2. ARTIKEL INTRODUCTIE & HEADER (WITTE ACHTERGROND, GROENE TYPOGRAFIE, GEEN FOTO) */}
      <header className="border-b border-[#E8EFE8] bg-white px-4 pb-10 pt-8 sm:px-6 sm:pb-12 sm:pt-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <button
            type="button"
            onClick={() => onNavigate('blogs')}
            className="group mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3B7F4B] transition hover:text-[#203728] cursor-pointer sm:text-sm"
          >
            <UIcon name="arrow-left" className="text-sm transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            Terug naar alle blogs
          </button>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-[#E8EFE8] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#3B7F4B]">
              Stappenplan &amp; Ambacht
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#3B7F4B] sm:text-sm">
              <UIcon name="calendar" className="text-xs text-[#3B7F4B]" aria-hidden="true" />
              15 oktober 2026
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#3B7F4B] sm:text-sm">
              <UIcon name="clock-three" className="text-xs text-[#3B7F4B]" aria-hidden="true" />
              7 min leestijd
            </span>
          </div>

          <h1 className="mt-4 max-w-4xl font-heading text-3xl font-black leading-[1.08] tracking-tight text-[#244A30] sm:text-4xl lg:text-5xl">
            Hoe slijp je een mes? Zo krijgt je keukenmes zijn scherpte terug
          </h1>

          {/* Auteursblok Teun & Mike */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#E8EFE8] pt-5">
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8EFE8] text-base font-bold text-[#3B7F4B]">
                S
              </div>
              <div>
                <p className="text-sm font-bold text-[#244A30] sm:text-base">
                  Door Teun en Mike van Slijpmaat
                </p>
                <p className="text-xs text-[#3B7F4B]/80 font-medium">
                  Ambachtelijke messenslijpers uit Utrecht · Laatst gecontroleerd: 15 oktober 2026
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E8EFE8] px-3 py-1 text-xs font-bold text-[#3B7F4B]">
              <UIcon name="check" className="text-xs text-[#3B7F4B]" aria-hidden="true" />
              <span>Geverifieerd vakkennis</span>
            </div>
          </div>
        </div>
      </header>

      {/* SNEL BALK TRUSTBAR VOOR EXTRA VERTROUWEN */}
      <div className="border-b border-[#E8EFE8] bg-white">
        <div className="mx-auto max-w-7xl">
          <TrustBar
            compact
            showRating
            items={[
              { icon: <UIcon name="clock-three" className="text-lg text-[#3B7F4B] shrink-0" aria-hidden="true" />, text: 'Binnen 24-48 uur retour' },
              { icon: <UIcon name="marker" className="text-lg text-[#3B7F4B] shrink-0" aria-hidden="true" />, text: 'Gratis ophalen & bezorgen in Utrecht vanaf €35' },
            ]}
          />
        </div>
      </div>

      {/* 3. MOBIELE ZOEK- EN SNELNAVIGATIE BALK (VOOR SMARTPHONES EN TABLETS) */}
      <div className="sticky top-0 z-30 border-b border-[#d9e1d7] bg-white/95 px-4 py-3 shadow-xs backdrop-blur-md lg:hidden">
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-1 items-center justify-between rounded-xl border border-[#d9e1d7] bg-[#F7F4EC] px-3.5 py-2 text-xs font-bold text-[#244A30]"
            aria-expanded={mobileMenuOpen}
          >
            <div className="flex items-center gap-2 truncate">
              <UIcon name="list" className="text-sm text-[#3B7F4B] shrink-0" aria-hidden="true" />
              <span className="truncate">
                {SECTIONS.find((s) => s.id === activeSectionId)?.shortTitle || 'Inhoud & snel naar onderwerp'}
              </span>
            </div>
            <UIcon
              name={mobileMenuOpen ? 'angle-small-up' : 'angle-small-down'}
              className="text-base text-[#3B7F4B] shrink-0"
              aria-hidden="true"
            />
          </button>

          <button
            type="button"
            onClick={() => onNavigate('particulieren')}
            className="shrink-0 rounded-xl bg-[#3B7F4B] px-3 py-2 text-xs font-bold text-white shadow-xs"
          >
            Laten slijpen
          </button>
        </div>

        {/* UITKLAPBARE MOBIELE ZOEK- EN KEUZE-INDEX */}
        {mobileMenuOpen && (
          <div className="mt-2 max-h-[65vh] overflow-y-auto rounded-2xl border border-[#d9e1d7] bg-white p-3 shadow-xl">
            <div className="relative mb-2.5">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Zoek in dit artikel..."
                className="w-full rounded-xl border border-[#d9e1d7] bg-[#FAFAF8] py-2 pl-9 pr-8 text-xs text-[#244A30] placeholder:text-[#3B7F4B]/60 focus:border-[#3B7F4B] focus:outline-none"
              />
              <UIcon name="search" className="absolute left-3 top-2.5 text-xs text-[#3B7F4B]" aria-hidden="true" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2 text-xs font-bold text-[#3B7F4B] hover:text-[#203728]"
                  aria-label="Zoekopdracht wissen"
                >
                  <UIcon name="cross-small" className="text-base" aria-hidden="true" />
                </button>
              )}
            </div>

            <div className="space-y-1">
              {filteredSections.map((sec, idx) => (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => scrollToSection(sec.id)}
                  className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-xs transition ${
                    activeSectionId === sec.id
                      ? 'bg-[#E8EFE8] font-bold text-[#244A30]'
                      : 'text-[#244A30] hover:bg-[#FAFAF8]'
                  }`}
                >
                  <span className="truncate">
                    <span className="mr-1.5 font-mono text-[#3B7F4B] font-bold">{idx + 1}.</span>
                    {sec.title}
                  </span>
                  <UIcon name="angle-small-right" className="text-xs text-[#3B7F4B] shrink-0" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 4. HOOFDCONTAINER: RECHTSTREEKS AAN HET BEGIN DE ZOEKBANK & INHOUDSOPGAVE (NIET-STICKY OP DESKTOP) */}
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        
        {/* DESKTOP ZOEKBANK & INHOUDSOPGAVE AAN HET BEGIN (SCROLLT GEWOON MEE, BLIJFT NIET STAAN) */}
        <section aria-label="Inhoudsopgave en zoekbank" className="hidden lg:block mb-12 rounded-3xl border border-[#d9e1d7] bg-[#FAFAF8] p-7 shadow-xs">
          <div className="flex items-center justify-between gap-6 border-b border-[#d9e1d7]/70 pb-5">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3B7F4B]">
                Snelgids &amp; Zoekbank
              </span>
              <h2 className="mt-1 font-heading text-xl font-black text-[#244A30]">
                Inhoudsopgave: spring direct naar een onderdeel
              </h2>
              <p className="mt-0.5 text-xs text-[#3B7F4B]/80 font-medium">
                Typ een zoekterm of klik op een hoofdstuk om er direct naartoe te scrollen.
              </p>
            </div>

            {/* ZOEKVELD OP DESKTOP */}
            <div className="relative w-80 shrink-0">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Zoek onderwerp of trefwoord..."
                className="w-full rounded-xl border border-[#d9e1d7] bg-white py-2.5 pl-9 pr-8 text-xs text-[#244A30] placeholder:text-[#3B7F4B]/60 transition focus:border-[#3B7F4B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#3B7F4B]"
              />
              <UIcon name="search" className="absolute left-3 top-3 text-xs text-[#3B7F4B]" aria-hidden="true" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2.5 text-xs text-[#3B7F4B] hover:text-[#203728] cursor-pointer"
                  aria-label="Wissen"
                >
                  <UIcon name="cross-small" className="text-base" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          {/* 2-KOLOMS RASTER MET KLIKBARE HOOFDSTUKKEN */}
          <nav aria-label="Hoofdstukken in dit artikel" className="mt-5 grid grid-cols-2 gap-2.5">
            {filteredSections.length === 0 ? (
              <p className="col-span-2 py-4 text-center text-xs text-[#3B7F4B]/70 italic">
                Geen onderdelen gevonden voor &ldquo;{searchQuery}&rdquo;.
              </p>
            ) : (
              filteredSections.map((sec, idx) => (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => scrollToSection(sec.id)}
                  className="group flex items-center justify-between rounded-xl border border-[#d9e1d7]/60 bg-white px-4 py-3 text-left text-xs transition hover:border-[#3B7F4B] hover:bg-[#E8EFE8]/50 shadow-2xs cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E8EFE8] font-mono text-[10px] font-bold text-[#3B7F4B] group-hover:bg-[#3B7F4B] group-hover:text-white transition-colors">
                      {idx + 1}
                    </span>
                    <span className="truncate font-semibold text-[#244A30] group-hover:text-[#203728]">
                      {sec.title}
                    </span>
                  </div>
                  <UIcon name="angle-small-right" className="text-xs text-[#3B7F4B] shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </button>
              ))
            )}
          </nav>
        </section>

        {/* VOLLEDIGE ARTIKELTEKST (WITTE ACHTERGROND, GROENE TYPOGRAFIE) */}
        <main className="min-w-0">

            {/* SECTIE 1: INLEIDING & KORTE ANTWOORD */}
            <section id="inleiding" className="scroll-mt-24 pb-12 border-b border-[#E8EFE8]">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3B7F4B]">
                Inleiding &amp; Snel Samengevat
              </span>
              <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-black text-[#244A30]">
                Het korte antwoord: hoe slijp je een keukenmes?
              </h2>

              <p className="mt-4 text-base sm:text-lg font-medium leading-relaxed text-[#244A30]">
                Een keukenmes slijp je door met een slijpsteen gecontroleerd een klein beetje staal van beide kanten van de snede te verwijderen. Houd de bestaande slijphoek zo constant mogelijk, werk van de hiel naar de punt en slijp door tot je over de hele snede een kleine braam voelt. Daarna verfijn je de snede met lichte halen en ontbraam je het lemmet.
              </p>

              <p className="mt-4 text-base leading-relaxed text-[#244A30]">
                Dat is de kern van het ambacht. Klinkt overzichtelijk, toch? Dat is het ook, zolang je rustig werkt en begrijpt wat er op microscopisch niveau met de staalstructuur gebeurt. In deze uitgebreide gids leggen we je stap voor stap uit hoe je veilig en gecontroleerd te werk gaat.
              </p>

              <figure className="mt-7 overflow-hidden rounded-3xl border border-[#d9e1d7] bg-[#FAFAF8] shadow-sm">
                <img
                  src="/assets/blog/mes-slijpen-detail-pexels-airam-dato-on.jpg"
                  alt="Een kok slijpt een keukenmes met de hand op een wetsteen"
                  className="h-64 w-full object-cover object-[center_72%] sm:h-96"
                  loading="eager"
                />
                <figcaption className="px-4 py-3 text-xs leading-relaxed text-[#244A30]/75 sm:px-5 sm:text-sm">
                  Handmatig slijpen geeft controle over de hoek, druk en materiaalafname langs de volledige snede.{' '}
                  <a href="https://www.pexels.com/photo/person-sharpening-a-knife-9424944/" target="_blank" rel="noopener noreferrer" className="underline decoration-[#3B7F4B]/35 underline-offset-2 hover:text-[#3B7F4B]">
                    Foto: Airam Dato-on via Pexels
                  </a>
                </figcaption>
              </figure>

              {/* AFBAKENING KADER / BULLET WIDGET */}
              <div className="mt-6 rounded-2xl border border-[#3B7F4B]/25 bg-[#F7F4EC] p-5 text-sm leading-relaxed text-[#244A30]">
                <div className="flex items-center gap-2 font-bold text-[#3B7F4B]">
                  <UIcon name="exclamation" className="text-base text-[#3B7F4B]" aria-hidden="true" />
                  <span>Belangrijke afbakening vooraf</span>
                </div>
                <p className="mt-1.5 text-xs sm:text-sm text-[#244A30]/90">
                  Deze uitleg is specifiek geschreven voor gewone stalen keukenmessen met een gladde, aan twee kanten geslepen snede (zowel Europese koksmessen als tweezijdig geslepen Japanse Santoku&apos;s en Gyuto&apos;s). Kartelmessen, keramische messen en traditionele enkelzijdige Japanse messen (zoals Deba of Yanagiba) vereisen een geheel andere techniek.
                </p>
              </div>
            </section>

            {/* SECTIE 2: DIAGNOSE - WANNEER IS JE MES TOE AAN EEN SLIJPBEURT */}
            <section id="diagnose" className="scroll-mt-24 py-12 border-b border-[#E8EFE8]">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3B7F4B]">
                Diagnose &amp; Signalen
              </span>
              <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-black text-[#244A30]">
                Wanneer is je mes toe aan een slijpbeurt?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-[#244A30]">
                Een bot mes herken je meestal vanzelf tijdens het koken. De tomaat wordt eerder geplet dan doorgesneden, een uitje glijdt onder de snede vandaan of je merkt dat je ineens flink kracht moet zetten. Dat is niet alleen zonde van je ingrediënten: door harder te drukken verlies je controle over het lemmet, waardoor de kans op uitschieten fors toeneemt. Een scherp mes is daarom vele malen veiliger in de keuken dan een bot mes.
              </p>

              <p className="mt-4 text-base font-bold text-[#244A30]">
                Twijfel je over de huidige scherpte? Doe een van deze twee betrouwbare praktijktests:
              </p>

              {/* BULLET WIDGET: DE TWEE TESTS */}
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#d9e1d7] bg-[#FAFAF8] p-5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E8EFE8] text-[#3B7F4B]">
                      <UIcon name="check" className="text-sm font-bold" aria-hidden="true" />
                    </span>
                    <h3 className="font-heading text-base font-bold text-[#244A30]">
                      1. De tomatentest
                    </h3>
                  </div>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#244A30]/85">
                    Leg het mes zonder neerwaartse druk op de gladde schil van een rijpe tomaat en trek het rustig naar je toe. Een scherp mes bijt direct in de schil zonder het vruchtvlees in te drukken.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#d9e1d7] bg-[#FAFAF8] p-5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E8EFE8] text-[#3B7F4B]">
                      <UIcon name="check" className="text-sm font-bold" aria-hidden="true" />
                    </span>
                    <h3 className="font-heading text-base font-bold text-[#244A30]">
                      2. De papiertest
                    </h3>
                  </div>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#244A30]/85">
                    Houd een vel los printpapier verticaal vast en snijd er van boven naar beneden doorheen. Blijft het mes haken of scheurt het papier? Dan zitten er bramen of botte plekken in de snede.
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm italic text-[#3B7F4B]/80">
                Tip van Teun &amp; Mike: Kijk naar hoe het mes in de praktijk snijdt, niet puur naar de kalender. De staalhardheid, je snijplank en je gebruik bepalen het slijpritme.
              </p>
            </section>

            {/* SECTIE 3: WAT HEB JE NODIG */}
            <section id="benodigdheden" className="scroll-mt-24 py-12 border-b border-[#E8EFE8]">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3B7F4B]">
                Gereedschap &amp; Voorbereiding
              </span>
              <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-black text-[#244A30]">
                Wat heb je nodig om zelf een mes te slijpen?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-[#244A30]">
                Voor een bot maar onbeschadigd keukenmes heb je geen kostbare machines of ingewikkelde opstelling nodig. Met een degelijke ambachtelijke basis kun je thuis uitstekend aan de slag:
              </p>

              {/* BULLET WIDGET VOOR BENODIGDHEDEN */}
              <div className="mt-6 rounded-2xl border border-[#d9e1d7] bg-[#FAFAF8] p-6">
                <h3 className="font-heading text-base font-bold text-[#244A30] mb-4">
                  De basisuitrusting op een rij:
                </h3>
                <ul className="space-y-3">
                  {[
                    { title: 'Vlakke watersteen korrel 1000', desc: 'Het ideale startpunt voor normaal periodiek onderhoud en het herstellen van de basischerpte.' },
                    { title: 'Water', desc: 'Koelt de snede continu en voert losgekomen metaal- en steendeeltjes direct af.' },
                    { title: 'Steenhouder of vochtige theedoek', desc: 'Cruciaal voor de veiligheid: de steen mag tijdens het slijpen absoluut niet wegglijden.' },
                    { title: 'Schone zachte droogdoek', desc: 'Om het lemmet tussendoor droog te vegen en de controle op braamvorming te vergemakkelijken.' },
                    { title: 'Optioneel: fijnere steen (korrel 3000-5000)', desc: 'Voor koks die de snede spiegelglad willen polijsten voor een zijdezachte snede.' },
                    { title: 'Optioneel: watervaste stift (marker)', desc: 'Onmisbaar om visueel te controleren of je de juiste hoek raakt over het hele lemmet.' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3B7F4B] text-white">
                        <UIcon name="check" className="text-[10px]" aria-hidden="true" />
                      </span>
                      <div className="text-xs sm:text-sm">
                        <strong className="font-bold text-[#244A30]">{item.title}: </strong>
                        <span className="text-[#244A30]/85">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WAARSCHUWING BIJ SCHADE */}
              <div className="mt-5 rounded-2xl border border-[#E87B5B]/30 bg-[#FCEEE8] p-5 text-xs sm:text-sm text-[#244A30]">
                <strong className="block font-bold text-[#C95E3E] mb-1">
                  Let op bij zichtbare happen of chips in de snede:
                </strong>
                Heeft het mes deuken, chips of een afgebroken punt? Dan red je het met alleen een 1000-steen niet en heb je een grove steen (korrel 240-400) nodig. Omdat grof slijpen snel veel staal weghaalt, vereist dit extra ervaring om de geometrie niet te verpesten.
              </div>
            </section>

            {/* SECTIE 4: MOET EEN WETSTEEN ALTIJD WEKEN */}
            <section id="wetsteen-weken" className="scroll-mt-24 py-12 border-b border-[#E8EFE8]">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3B7F4B]">
                Feit of Fabel
              </span>
              <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-black text-[#244A30]">
                Moet een wetsteen altijd weken in het water?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-[#244A30]">
                Kort en krachtig: <strong>nee, lang niet altijd.</strong> Dit is een van de tips die op internet vaak zonder nuance wordt gekopieerd.
              </p>

              <p className="mt-3 text-base leading-relaxed text-[#244A30]">
                Sommige traditionele waterstenen (zoals poreuze klei- of magnesiumstenen) moeten inderdaad 5 tot 15 minuten in een bak water liggen totdat er geen luchtbelletjes meer opstijgen. Maar veel moderne professionele slijpstenen zijn zogeheten <em>splash-and-go</em> stenen (zoals de Shapton Pro en Glass stenen die wij in onze Utrechtse werkplaats gebruiken). Deze hebben alleen een scheutje water op het oppervlak nodig en zijn direct startklaar.
              </p>

              <p className="mt-3 text-base leading-relaxed text-[#244A30]">
                Te lang weken kan bepaalde splash-and-go stenen juist zacht, poreus of bros maken. Raadpleeg dus altijd de fabrikantinstructies van jouw slijpsteen.
              </p>

              <figure className="mt-7 overflow-hidden rounded-3xl border border-[#d9e1d7] bg-[#FAFAF8] shadow-sm">
                <img
                  src="/assets/blog/mes-slijpen-water-wetsteen-pexels-airam-dato-on.jpg"
                  alt="Water wordt op een wetsteen gegoten tijdens het handmatig slijpen van een keukenmes"
                  className="h-56 w-full object-cover object-center sm:h-80"
                  loading="lazy"
                />
                <figcaption className="px-4 py-3 text-xs leading-relaxed text-[#244A30]/75 sm:px-5 sm:text-sm">
                  Water voert slijpsel af en houdt het contact met de wetsteen gelijkmatig. Controleer altijd of jouw steen geweekt moet worden of direct met water gebruikt kan worden.{' '}
                  <a href="https://www.pexels.com/photo/person-holding-stainless-steel-knife-9424942/" target="_blank" rel="noopener noreferrer" className="underline decoration-[#3B7F4B]/35 underline-offset-2 hover:text-[#3B7F4B]">
                    Foto: Airam Dato-on via Pexels
                  </a>
                </figcaption>
              </figure>

              {/* BULLET WIDGET: VLAKHOUDEN VAN DE STEEN */}
              <div className="mt-5 rounded-2xl border border-[#d9e1d7] bg-[#FAFAF8] p-5">
                <div className="flex items-center gap-2 font-bold text-[#244A30]">
                  <UIcon name="interrogation" className="text-sm text-[#3B7F4B]" aria-hidden="true" />
                  <span>Cruciaal voor succes: houd je slijpsteen altijd vlak</span>
                </div>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#244A30]/85">
                  Tijdens het slijpen slijt een steen in het midden sneller dan aan de randen. Op een holle steen is het mathematisch onmogelijk om een constante slijphoek over de volledige lengte van het lemmet aan te houden. Vlak de steen daarom regelmatig af met een speciale diamantafvlakplaat.
                </p>
              </div>
            </section>

            {/* SECTIE 5: WELKE SLIJPHOEK GEBRUIKEN */}
            <section id="slijphoek" className="scroll-mt-24 py-12 border-b border-[#E8EFE8]">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3B7F4B]">
                Geometrie &amp; Slijphoek
              </span>
              <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-black text-[#244A30]">
                Welke slijphoek moet je aanhouden?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-[#244A30]">
                De bestaande fabriekshoek van het mes is altijd het beste vertrekpunt. Als algemene richtlijn geldt:
              </p>

              {/* BULLET WIDGET RICHTLIJNEN */}
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-[#d9e1d7] bg-[#FAFAF8] p-4 text-xs sm:text-sm">
                  <span className="font-bold text-[#3B7F4B]">Japanse keukenmessen:</span>
                  <p className="mt-1 text-[#244A30]/85">
                    Meestal circa <strong>15 graden per kant</strong> (totaal 30° inclusief). Dunner lemmet, hard staal, extreem scherp maar iets gevoeliger voor zijwaartse druk.
                  </p>
                </div>
                <div className="rounded-xl border border-[#d9e1d7] bg-[#FAFAF8] p-4 text-xs sm:text-sm">
                  <span className="font-bold text-[#3B7F4B]">Europese &amp; Duitse messen:</span>
                  <p className="mt-1 text-[#244A30]/85">
                    Meestal circa <strong>18 tot 20 graden per kant</strong> (totaal 36°-40°). Taai staal, robuustere snede die beter bestand is tegen stoten en zwaardere taken.
                  </p>
                </div>
              </div>

              <p className="mt-4 text-base leading-relaxed text-[#244A30]">
                Onthoud: een <em>constante</em> hoek vasthouden is tien keer belangrijker dan precies 15 of 17 graden bereiken. Als je hoek tijdens de haal zwabbert, rond je de snede juist af in plaats van hem scherp te maken.
              </p>

              {/* DE STIFTTRUC WIDGET */}
              <div className="mt-6 rounded-2xl border-2 border-[#3B7F4B]/30 bg-[#F7F4EC] p-6">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#3B7F4B] text-white">
                    <UIcon name="document" className="text-sm font-bold" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-bold text-[#244A30]">
                      De Stifttruc: controleer direct je hoek
                    </h3>
                    <p className="text-xs text-[#3B7F4B]">De beproefde methode uit onze eigen werkplaats</p>
                  </div>
                </div>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#244A30]">
                  Kleur het smalle geslepen facetje direct boven de snede in met een zwarte watervaste stift. Maak vervolgens één rustige haal over de steen en bekijk waar de inkt is verdwenen:
                </p>

                <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
                  <div className="rounded-xl bg-white p-3 text-xs text-[#244A30] border border-[#d9e1d7]">
                    <strong className="block text-[#C95E3E] font-bold">Inkt bovenaan weg?</strong>
                    Je houdt het mes te vlak. Til de rug een fractie op.
                  </div>
                  <div className="rounded-xl bg-white p-3 text-xs text-[#244A30] border border-[#d9e1d7]">
                    <strong className="block text-[#C95E3E] font-bold">Alleen uiterste rand weg?</strong>
                    Je houdt het mes te steil. Laat de rug iets zakken.
                  </div>
                  <div className="rounded-xl bg-[#E8EFE8] p-3 text-xs text-[#244A30] border border-[#3B7F4B]/30">
                    <strong className="block text-[#3B7F4B] font-bold">Overal gelijk weg?</strong>
                    Perfecte hoek! Je volgt de exacte snede.
                  </div>
                </div>
              </div>
            </section>

            {/* SECTIE 6: HET 7-STAPPENPLAN */}
            <section id="stappenplan" className="scroll-mt-24 py-12 border-b border-[#E8EFE8]">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3B7F4B]">
                Stap voor Stap
              </span>
              <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-black text-[#244A30]">
                Het stappenplan: een mes slijpen in 7 stappen
              </h2>

              <p className="mt-4 text-base leading-relaxed text-[#244A30]">
                Neem rustig de tijd. Handmatig slijpen is een beheerst ambacht; haastige bewegingen zorgen voor uitschieters en een onregelmatige snede.
              </p>

              <div className="mt-8 space-y-8">
                {[
                  {
                    step: '01',
                    title: 'Slijpsteen klaarzetten en stabiliseren',
                    prose:
                      'Bevochtig of bewater de steen volgens de voorschriften van de fabrikant. Plaats de steen op een stroeve houder of op een klamme theedoek op je werkblad. Zorg dat de steen op een comfortabele werkhoogte ligt en tijdens het slijpen met geen millimeter verschuift.',
                    bullet: 'Stabiele ondergrond, constante waterfilm op het oppervlak.',
                  },
                  {
                    step: '02',
                    title: 'De slijphoek opzoeken en fixeren',
                    prose:
                      'Zet de hiel van het mes op de steen. Kantel het blad voorzichtig tot het bestaande slijpvlak vlak aansluit op het steenoppervlak (of gebruik de stifttruc om dit te verifiëren). Vergrendel je pols: de beweging moet soepel vanuit je armen en schouders komen, niet vanuit een zwabberende pols.',
                    bullet: 'Pols vergrendelen, beweging vanuit de elleboog en schouders.',
                  },
                  {
                    step: '03',
                    title: 'Beheerst slijpen van hiel naar punt',
                    prose:
                      'Beweeg het lemmet gecontroleerd over de steen. Zorg dat de hiel, het rechte middenstuk en de gebogen punt allemaal gelijkmatig behandeld worden. Bij de punt van het mes til je je handvat een fractie mee op, zodat ook de kromming van het lemmet dezelfde slijphoek behoudt.',
                    bullet: 'Lichte gelijkmatige druk, handvat licht optillen bij de ronding van de punt.',
                  },
                  {
                    step: '04',
                    title: 'Braamvorming controleren over de hele lengte',
                    prose:
                      'Blijf deze zijde slijpen totdat je aan de tegenoverliggende kant over de volledige lengte van de snede een microscopisch opstaand randje metaal voelt: de braam. Voel altijd voorzichtig dwars van de snede af met je vingertop, nooit in de lengterichting van het mes! Pas wanneer de braam overal voelbaar is, heeft het staal de apex bereikt.',
                    bullet: 'Controleer hiel, midden én punt; dwars op de snede voelen.',
                  },
                  {
                    step: '05',
                    title: 'Draai het mes om en herhaal aan de andere zijde',
                    prose:
                      'Draai het mes om en slijp de andere kant onder exact dezelfde slijphoek. Werk door totdat de braam zich nu naar de eerste zijde heeft verplaatst. Zorg voor een gelijk aantal effectieve halen zodat het mes symmetrisch gecentreerd blijft.',
                    bullet: 'Symmetrische materiaalafname aan beide kanten van de snede.',
                  },
                  {
                    step: '06',
                    title: 'Verfijnen en de braam verwijderen (ontbramen)',
                    prose:
                      'Zodra beide kanten geslepen zijn, verlaag je de druk drastisch. Maak om en om enkele heel lichte halen over de steen om de braam af te breken. Heb je een fijnere steen (korrel 3000+) of een leren strop met polijstpasta? Gebruik deze nu om de snede te ontbramen en spiegelglad af te werken.',
                    bullet: 'Vederlichte afwerkhalingen, eventueel afwerken op leer.',
                  },
                  {
                    step: '07',
                    title: 'Mes grondig reinigen en scherpte testen',
                    prose:
                      'Spoel alle resten slijpslurry en metaaldeeltjes grondig af onder de kraan en droog het lemmet direct af met een schone theedoek. Voer vervolgens de tomaat- of papiertest uit. Het mes glijdt nu zonder enige weerstand door het materiaal.',
                    bullet: 'Grondig drogen, direct testen, vlijmscherp resultaat.',
                  },
                ].map((s) => (
                  <div key={s.step} className="border-l-2 border-[#3B7F4B]/30 pl-5 sm:pl-7">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3B7F4B]">
                      <span>Stap {s.step}</span>
                    </div>
                    <h3 className="mt-1 font-heading text-lg sm:text-xl font-bold text-[#244A30]">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-[#244A30]">
                      {s.prose}
                    </p>

                    {/* BULLET WIDGET PER STAP */}
                    <div className="mt-3 inline-flex items-center gap-2 rounded-xl bg-[#F7F4EC] px-3.5 py-1.5 text-xs font-semibold text-[#244A30] border border-[#d9e1d7]">
                      <UIcon name="check" className="text-xs text-[#3B7F4B] shrink-0" aria-hidden="true" />
                      <span>{s.bullet}</span>
                    </div>
                  </div>
                ))}
              </div>

              <figure className="mt-9 overflow-hidden rounded-3xl border border-[#d9e1d7] bg-[#FAFAF8] shadow-sm">
                <img
                  src="/assets/blog/scherp-mes-tomatentest-pexels-rdne.webp"
                  alt="Een scherp keukenmes snijdt door een rode tomaat op een houten snijplank"
                  className="h-56 w-full object-cover object-center sm:h-80"
                  loading="lazy"
                />
                <figcaption className="px-4 py-3 text-xs leading-relaxed text-[#244A30]/75 sm:px-5 sm:text-sm">
                  Een gelijkmatig geslepen mes snijdt zonder veel druk door de schil van een rijpe tomaat.{' '}
                  <a href="https://www.pexels.com/photo/chef-cutting-tomato-on-cutting-board-10432691/" target="_blank" rel="noopener noreferrer" className="underline decoration-[#3B7F4B]/35 underline-offset-2 hover:text-[#3B7F4B]">
                    Foto: RDNE Stock project via Pexels
                  </a>
                </figcaption>
              </figure>
            </section>

            {/* SECTIE 7: DE 5 MEEST GEMAAKTE FOUTEN */}
            <section id="fouten" className="scroll-mt-24 py-12 border-b border-[#E8EFE8]">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3B7F4B]">
                Valkuilen Voorkomen
              </span>
              <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-black text-[#244A30]">
                De vijf fouten die we het vaakst tegenkomen
              </h2>

              <p className="mt-4 text-base leading-relaxed text-[#244A30]">
                Wanneer klanten ons vragen waarom hun eigen slijppoging niet het gewenste scheermesresultaat opleverde, ligt de oorzaak vrijwel altijd bij een van deze vijf veelgemaakte vergissingen:
              </p>

              {/* BULLET WIDGET: 5 FOUTEN MET UITLEG */}
              <div className="mt-6 space-y-3.5">
                {[
                  {
                    num: '1',
                    fout: 'Steeds van slijphoek veranderen tijdens de beweging',
                    uitleg: 'Als je handvat tijdens de haal omhoog en omlaag beweegt, ontstaat een bolle (convexe) stompe snede in plaats van een vlijmscherpe facetlijn. Beweeg rustiger en fixeer je pols.',
                  },
                  {
                    num: '2',
                    fout: 'Veel te veel spierkracht zetten op het lemmet',
                    uitleg: 'Drukken zorgt niet voor snellere scherpte, maar buigt de fijne snede om en beschadigt je slijpsteen. Laat de korrels van de watersteen het werk doen met beheersing.',
                  },
                  {
                    num: '3',
                    fout: 'Alleen maar halen tellen in plaats van de braam controleren',
                    uitleg: 'Zeggen "ik doe twintig halen per kant" werkt niet. Het ene mes heeft harder staal dan het andere. Stop pas als je daadwerkelijk een braam voelt over de volledige snede.',
                  },
                  {
                    num: '4',
                    fout: 'Te snel overstappen naar een te fijne polijststeen',
                    uitleg: 'Een fijne steen (korrel 3000 of 6000) kan een snede glanzend polijsten, maar kan geen botte vouw opnieuw scherp maken. De basischerpte móét op korrel 1000 al 100% aanwezig zijn.',
                  },
                  {
                    num: '5',
                    fout: 'De slijpsteen tussentijds niet afvlakken',
                    uitleg: 'Een hol gesleten steen raakt alleen de zijkanten en mist het midden van je mes. Houd je slijpstenen altijd strak waterpas met een diamantafvlakker.',
                  },
                ].map((item) => (
                  <div key={item.num} className="rounded-2xl border border-[#d9e1d7] bg-[#FAFAF8] p-4 sm:p-5 flex items-start gap-3.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#E8EFE8] font-mono text-xs font-bold text-[#3B7F4B]">
                      {item.num}
                    </span>
                    <div className="text-xs sm:text-sm">
                      <strong className="block font-bold text-[#244A30] text-sm sm:text-base mb-0.5">
                        {item.fout}
                      </strong>
                      <span className="text-[#244A30]/85 leading-relaxed">{item.uitleg}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTIE 8: AANZETTEN VS SLIJPEN */}
            <section id="aanzetten-vs-slijpen" className="scroll-mt-24 py-12 border-b border-[#E8EFE8]">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3B7F4B]">
                Belangrijk Verschil
              </span>
              <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-black text-[#244A30]">
                Aanzetstaal vs. Slijpen: wat is het verschil?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-[#244A30]">
                Veel mensen halen aanzetten en slijpen door elkaar. Toch doen ze iets wezenlijk anders met het metaal van je mes:
              </p>

              {/* BULLET WIDGET VERGELIJKING */}
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#d9e1d7] bg-[#FAFAF8] p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#3B7F4B]">
                    Aanzetten (staal richten)
                  </span>
                  <h3 className="mt-1 font-heading text-base font-bold text-[#244A30]">
                    Met een klassiek aanzetstaal
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#244A30]/85">
                    Een regulier stalen aanzetstaal haalt <strong>geen</strong> staal weg. Het duwt alleen microscopisch omgekrulde braampjes weer tijdelijk recht. Zodra een mes écht bot is afgesleten, heeft aanzetten geen enkel effect meer.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#3B7F4B]/30 bg-[#E8EFE8]/50 p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#3B7F4B]">
                    Slijpen (nieuwe snede)
                  </span>
                  <h3 className="mt-1 font-heading text-base font-bold text-[#244A30]">
                    Met waterstenen op de werkbank
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#244A30]">
                    Bij slijpen neemt de slijpsteen gecontroleerd een microscopisch laagje metaal af aan weerszijden van de snede. Hierdoor ontmoeten de facetten elkaar weer in een vlijmscherpe punt (apex).
                  </p>
                </div>
              </div>
            </section>

            {/* SECTIE 9: WANNEER PROFESSIONEEL LATEN SLIJPEN */}
            <section id="wanneer-uitbesteden" className="scroll-mt-24 py-12 border-b border-[#E8EFE8]">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3B7F4B]">
                Professioneel Uitbesteden
              </span>
              <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-black text-[#244A30]">
                Wanneer kun je een mes beter laten slijpen?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-[#244A30]">
                Zelf je messen slijpen op Japanse waterstenen is een prachtige, rustgevende hobby. Toch zijn er situaties waarin professionele hulp van Slijpmaat verstandiger en veiliger is:
              </p>

              <p className="mt-3 text-base leading-relaxed text-[#244A30]">
                Lees hoe Slijpmaat <a href={PAGE_PATHS['dienst-keukenmessen']} className="font-bold text-[#3B7F4B] underline decoration-[#3B7F4B]/35 underline-offset-4 hover:text-[#203728]">keukenmessen met de hand slijpt</a>, bekijk onze aanpak voor <a href={PAGE_PATHS['dienst-japanse-messen']} className="font-bold text-[#3B7F4B] underline decoration-[#3B7F4B]/35 underline-offset-4 hover:text-[#203728]">Japanse messen</a> of ga direct naar de <a href={PAGE_PATHS.particulieren} className="font-bold text-[#3B7F4B] underline decoration-[#3B7F4B]/35 underline-offset-4 hover:text-[#203728]">prijzen en afspraak</a>.
              </p>

              {/* BULLET WIDGET REDENEN */}
              <div className="mt-5 rounded-2xl border border-[#d9e1d7] bg-[#FAFAF8] p-5">
                <ul className="grid gap-2.5 sm:grid-cols-2 text-xs sm:text-sm">
                  {[
                    'Er zitten chips, deuken of happen in de snede',
                    'De punt van het koksmes is verbogen of afgebroken',
                    'Het lemmet is te dik geworden en moet worden uitgedund',
                    'Je hebt een dierbaar Japans koksmes (VG-10, Aogami, SG2)',
                    'Je vindt het lastig om een constante hoek vast te houden',
                    'Je hebt geen tijd of zin om waterstenen te onderhouden',
                  ].map((reason, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <UIcon name="check" className="text-xs text-[#3B7F4B] shrink-0" aria-hidden="true" />
                      <span className="text-[#244A30] font-medium">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA KADER MET ACTIEKNOPPEN */}
              <div className="mt-6 rounded-2xl bg-[#E8EFE8] p-6 text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:gap-6">
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#244A30]">
                    Geen zin om zelf te klooien met waterstenen?
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-[#3B7F4B]">
                    Wij halen je messen in Utrecht aan huis op, slijpen ze met de hand op waterstenen en brengen ze binnen 24-48 uur vlijmscherp terug.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('particulieren')}
                  className="mt-4 sm:mt-0 inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#3B7F4B] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xs transition hover:bg-[#203728] cursor-pointer"
                >
                  <span>Bekijk tarieven</span>
                  <UIcon name="arrow-right" className="text-xs" aria-hidden="true" />
                </button>
              </div>
            </section>

            {/* SECTIE 10: ONDERHOUD & 4 GOUDEN REGELS */}
            <section id="onderhoud" className="scroll-mt-24 py-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3B7F4B]">
                Scherptebehoud
              </span>
              <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-black text-[#244A30]">
                Vier gouden regels: zo blijft je mes veel langer scherp
              </h2>

              <p className="mt-4 text-base leading-relaxed text-[#244A30]">
                Hoe je tussen twee slijpbeurten met je mes omgaat, bepaalt voor 90% hoe lang die fabrieksscherpte blijft:
              </p>

              {/* BULLET WIDGET 4 GOUDEN REGELS */}
              <div className="mt-5 grid gap-3.5 sm:grid-cols-2">
                {[
                  {
                    rule: '1. Snijd alleen op hout of zacht kunststof',
                    desc: 'Vermijd glas, marmer, graniet, leisteen of borden. Harde oppervlakken rollen een vlijmscherpe vouw binnen één snijbeweging om.',
                  },
                  {
                    rule: '2. Was een goed mes altijd met de hand af',
                    desc: 'Nooit in de vaatwasser. De agressieve vaatwaszouten, het schudden tegen ander bestek en de hoge hitte tasten de snede onherstelbaar aan.',
                  },
                  {
                    rule: '3. Berg het mes veilig en beschermd op',
                    desc: 'Niet los in de keukenla waar het tegen ander metaal botst. Gebruik een houten messenblok, een magneetstrip of een stevige lemmetbeschermer.',
                  },
                  {
                    rule: '4. Schuif gesneden voedsel met de rug',
                    desc: 'Schuif gesneden kruiden of uien van je plank met de botte bovenkant van het lemmet, nooit met de vlijmscherpe snede.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-[#d9e1d7] bg-[#FAFAF8] p-4 sm:p-5">
                    <h3 className="font-heading text-sm sm:text-base font-bold text-[#3B7F4B]">
                      {item.rule}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#244A30]/85">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </main>
        </div>

      {/* 5. SLIDER MET RESULTATEN (WASLIJN MET ECHTE GESLEPEN MESSEN) */}
      <section className="border-t border-[#E8EFE8] bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3B7F4B]">
              Sfeer &amp; Resultaten
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-black text-[#244A30]">
              Vers van de slijpsteen in Utrecht
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-xs sm:text-sm text-[#3B7F4B]/80">
              Bekijk hoe keukenmessen er na het handmatig watersteenslijpen en ontbramen uitzien.
            </p>
          </div>

          <ResultatenSlider />
        </div>
      </section>

      {/* 6. BOTTOM NAVIGATIE BALK */}
      <footer className="border-t border-[#E8EFE8] bg-[#FAFAF8] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => onNavigate('blogs')}
            className="inline-flex items-center gap-2 rounded-xl border border-[#d9e1d7] bg-white px-5 py-2.5 text-xs font-bold text-[#244A30] shadow-xs transition hover:bg-[#E8EFE8] cursor-pointer"
          >
            <UIcon name="arrow-left" className="text-xs" aria-hidden="true" />
            Terug naar alle blogs
          </button>

          <button
            type="button"
            onClick={() => onNavigate('particulieren')}
            className="inline-flex items-center gap-2 rounded-xl bg-[#3B7F4B] px-6 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-[#203728] cursor-pointer"
          >
            <span>Tarieven bekijken &amp; afspraak maken</span>
            <UIcon name="arrow-right" className="text-xs" aria-hidden="true" />
          </button>
        </div>
      </footer>
    </article>
  );
};
