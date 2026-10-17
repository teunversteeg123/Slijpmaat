import type { FC } from 'react';
import { UIcon } from '../components/ui/UIcon';
import type { PageId } from '../types';
import { SLIJPMAAT_INFO } from '../data/siteData';
import { GoogleIcon, GOOGLE_REVIEW_COUNT } from '../components/GoogleReviewsSection';
import { OrganicSectionDivider } from '../components/OrganicSectionDivider';
import { ResultatenSlider } from '../components/ResultatenSlider';

interface KennisbankPageProps {
  onNavigate: (page: PageId) => void;
}

export const KennisbankPage: FC<KennisbankPageProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik las jullie blogs en heb een vraag over het onderhoud van mijn messen!')}`;

  return (
    <div className="overflow-hidden bg-[#FAFAF8]">
      {/* 1. HERO SECTIE */}
      <section className="site-hero relative overflow-hidden px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="site-hero-grid mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="site-hero-copy">
            <p className="site-hero-eyebrow text-xs font-bold uppercase tracking-[0.24em] text-[#3B7F4B] sm:text-sm">
              Kennis &amp; Ambacht · Slijpmaat Utrecht
            </p>
            <h1 className="site-hero-title mt-3 font-heading text-4xl font-bold leading-[1.04] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-6xl">
              Blogs over messen slijpen en onderhoud
            </h1>
            <p className="site-hero-description mt-5 max-w-xl text-base leading-7 text-[#657068] sm:text-lg lg:text-xl lg:leading-8">
              Praktische gidsen, stappenplannen en vakkennis van jouw Utrechtse messenslijpers. Leer hoe je je messen in topconditie houdt en waarom handmatig watersteenslijpen het verschil maakt.
            </p>

            <div className="site-hero-actions mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => onNavigate('particulieren')}
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-md active:scale-[0.98] sm:text-base cursor-pointer"
              >
                <span>Plan een slijpbeurt</span>
                <UIcon name="arrow-right" className="text-sm transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#E87B5B]/20 bg-[#FCEEE8] px-7 py-3.5 text-sm font-bold text-[#C95E3E] transition-all duration-200 hover:bg-[#F8DFD6] sm:text-base"
              >
                <UIcon name="comment-alt" className="text-base" aria-hidden="true" />
                <span>Stel een vraag via WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="site-hero-media relative mx-auto w-full max-w-xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 -left-6 h-44 w-44 rounded-[42%_58%_62%_38%/55%_42%_58%_45%] bg-[#A9C89E] opacity-90 transition-transform duration-500 hover:scale-105 sm:h-56 sm:w-56"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-[#d9e1d7] bg-white shadow-lg sm:aspect-square">
              <img
                src="/assets/kennisbank-slijpmaat-kaartje-planten.jpeg"
                alt="Slijpmaat-kaartje tussen groene planten in de werkplaats"
                className="h-full w-full object-cover object-center"
                fetchPriority="high"
              />
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 rounded-full bg-[#203728]/85 px-4 py-2 text-xs font-bold text-white shadow-md backdrop-blur-xs border border-white/10">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#4CAF50] animate-pulse" />
                <span>Teun &amp; Mike · Kennisbank &amp; Tips</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR (Zekerheden) */}
      <section aria-label="Zekerheden" className="relative z-20 px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-2xl border border-[#d9e1d7]/70 bg-white/95 px-6 py-4 shadow-[0_4px_24px_rgba(36,74,48,0.04)] backdrop-blur-xs">
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-0">
            <div className="flex flex-wrap items-center gap-2 sm:justify-center sm:border-r sm:border-[#d9e1d7]/70 sm:px-5">
              <GoogleIcon />
              <span className="text-sm leading-none tracking-[0.06em] text-[#FABB05]" aria-label="5 van de 5 sterren">★★★★★</span>
              <span className="text-sm font-bold text-[#3B7F4B]">{GOOGLE_REVIEW_COUNT} reviews · 5,0</span>
            </div>
            <div className="flex items-center gap-3 sm:justify-center sm:border-r sm:border-[#d9e1d7]/70 sm:px-5">
              <UIcon name="clock-three" className="text-lg text-[#3B7F4B] shrink-0" aria-hidden="true" />
              <span className="text-sm font-bold text-[#3B7F4B]">Doorgaans binnen 24-48 uur retour</span>
            </div>
            <div className="flex items-center gap-3 sm:justify-center sm:px-5">
              <UIcon name="marker" className="text-lg text-[#3B7F4B] shrink-0" aria-hidden="true" />
              <span className="text-sm font-bold text-[#3B7F4B]">Gratis ophalen &amp; bezorgen vanaf €35</span>
            </div>
          </div>
        </div>
      </section>

      <OrganicSectionDivider
        fromColor="#FAFAF8"
        middleColor="#E8EFE8"
        toColor="#F7F4EC"
        variant="calm"
      />

      {/* 3. ARTIKELEN GRID IN WARM CREAM #F7F4EC */}
      <section className="relative overflow-hidden bg-[#F7F4EC] px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-[55%_45%_60%_40%/50%_55%_45%_50%] bg-[#E8EFE8]/70"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl sm:mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C95E3E]">
              Gidsen &amp; Artikelen
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">
              Uitgelichte kennis uit onze werkplaats
            </h2>
            <p className="mt-3 text-base text-[#657068]">
              Geen vage marketingpraatjes, maar heldere instructies gebaseerd op duizenden uren ervaring met stalen en Japanse waterstenen.
            </p>
          </div>

          {/* ONDERWERPEN PILLS */}
          <div className="mb-8 flex flex-wrap items-center gap-2.5">
            <span className="rounded-full bg-[#3B7F4B] px-4 py-1.5 text-xs font-bold text-white shadow-xs">
              Alle publicaties (1)
            </span>
            <span className="rounded-full border border-[#d9e1d7] bg-white px-4 py-1.5 text-xs font-semibold text-[#505d54]">
              Stappenplannen
            </span>
            <span className="rounded-full border border-[#d9e1d7] bg-white px-4 py-1.5 text-xs font-semibold text-[#505d54]">
              Onderhoud &amp; Schoonmaken
            </span>
            <span className="rounded-full border border-[#d9e1d7] bg-white px-4 py-1.5 text-xs font-semibold text-[#505d54]">
              Japanse vs. Westerse messen
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* HOOFDTEGEL: HOE SLIJP JE EEN MES */}
            <article className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-[#d9e1d7] bg-white p-6 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#3B7F4B]/50 hover:shadow-xl lg:col-span-2">
              <button
                type="button"
                onClick={() => onNavigate('blog-hoe-slijp-je-een-mes')}
                className="absolute inset-0 z-20 h-full w-full cursor-pointer rounded-[2.5rem] focus:outline-none focus:ring-2 focus:ring-[#3B7F4B] focus:ring-offset-2"
                aria-label="Lees artikel: Hoe slijp je een mes? Zo krijgt je keukenmes zijn scherpte terug"
              />

              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] bg-[#203728] sm:aspect-[2/1]">
                  <img
                    src="/assets/werkwijze/03-slijpen.jpg"
                    alt="Handmatig messen slijpen op Japanse waterstenen bij Slijpmaat"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#203728]/85 via-black/20 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2 sm:bottom-5 sm:left-5">
                    <span className="rounded-full bg-[#E87B5B] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-xs">
                      Stappenplan &amp; Ambacht
                    </span>
                    <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#203728] backdrop-blur-xs">
                      15 oktober 2026
                    </span>
                    <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#203728] backdrop-blur-xs">
                      7 min leestijd
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3B7F4B]">
                    <UIcon name="book-alt" className="text-xs text-[#3B7F4B]" aria-hidden="true" />
                    <span>Uitgelicht hoofdartikel</span>
                  </div>

                  <h3 className="mt-2 font-heading text-2xl font-bold leading-tight text-[#203728] transition-colors duration-200 group-hover:text-[#3B7F4B] sm:text-3xl">
                    Hoe slijp je een mes? Zo krijgt je keukenmes zijn scherpte terug
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-[#657068]">
                    Een compleet en nuchter stappenplan voor het slijpen van keukenmessen op een wetsteen. Inclusief slijphoeken, de stifttruc, braamcontrole en de vijf meest gemaakte fouten.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-[#d9e1d7]/70 pt-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#E8EFE8] font-heading text-sm font-bold text-[#3B7F4B]">
                    S
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#203728] sm:text-sm">
                      Teun &amp; Mike van Slijpmaat
                    </span>
                    <span className="text-[11px] text-[#657068]">
                      Messenslijpers uit Utrecht
                    </span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-2 rounded-full bg-[#E8EFE8] px-4 py-2 text-xs font-bold text-[#3B7F4B] transition-colors group-hover:bg-[#3B7F4B] group-hover:text-white sm:text-sm">
                  <span>Lees artikel</span>
                  <UIcon name="arrow-right" className="text-sm transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </article>

            {/* ZIJ-KOLOM: BINNENKORT & DIRECT ADVIES */}
            <div className="flex flex-col justify-between gap-6">
              {/* TEASER 1: JAPANSE VS EUROPESE MESSEN */}
              <div className="flex flex-col justify-between rounded-[2.25rem] border border-[#d9e1d7] bg-white p-6 sm:p-7 shadow-xs">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#FCEEE8] px-3 py-1 text-xs font-bold text-[#C95E3E]">
                      In voorbereiding
                    </span>
                    <UIcon name="compass" className="text-lg text-[#3B7F4B]" aria-hidden="true" />
                  </div>

                  <h3 className="mt-4 font-heading text-lg font-bold text-[#203728]">
                    Japans staal vs. Europees staal
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#657068] sm:text-sm">
                    Waarom een harde VG10 of Shirogami-kern een andere slijphoek en snijtechniek vraagt dan een taai Duits koksmes.
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#A9C89E]">
                  <UIcon name="clock-three" className="text-xs" aria-hidden="true" />
                  <span>Publicatie binnenkort</span>
                </div>
              </div>

              {/* TEASER 2: AANZETSTAAL VS WETSTEEN */}
              <div className="flex flex-col justify-between rounded-[2.25rem] border border-[#d9e1d7] bg-white p-6 sm:p-7 shadow-xs">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#E8EFE8] px-3 py-1 text-xs font-bold text-[#3B7F4B]">
                      In voorbereiding
                    </span>
                    <UIcon name="book-alt" className="text-lg text-[#3B7F4B]" aria-hidden="true" />
                  </div>

                  <h3 className="mt-4 font-heading text-lg font-bold text-[#203728]">
                    Aanzetstaal vs. Wetsteen: wat doet wat?
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#657068] sm:text-sm">
                    Het verschil tussen het richten van een microscopische vouw en het daadwerkelijk afnemen van staal.
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#A9C89E]">
                  <UIcon name="clock-three" className="text-xs" aria-hidden="true" />
                  <span>Publicatie binnenkort</span>
                </div>
              </div>

              {/* DIRECT ADVIES KAART */}
              <div className="rounded-[2.25rem] border border-[#3B7F4B]/20 bg-[#E8EFE8]/70 p-6 sm:p-7 shadow-xs">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#3B7F4B] text-white">
                    <UIcon name="interrogation" className="text-base text-white" aria-hidden="true" />
                  </span>
                  <h4 className="font-heading text-base font-bold text-[#203728]">
                    Vraag over jouw mes?
                  </h4>
                </div>
                <p className="mt-2.5 text-xs leading-relaxed text-[#505d54] sm:text-sm">
                  Stuur ons een foto van de snede via WhatsApp. We laten direct weten wat we adviseren.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#3B7F4B] hover:underline sm:text-sm"
                >
                  <UIcon name="comment-alt" className="text-sm" aria-hidden="true" />
                  <span>Stuur foto via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OrganicSectionDivider
        fromColor="#F7F4EC"
        middleColor="#E8EFE8"
        toColor="#FFFFFF"
        variant="calm"
      />

      {/* 4. RESULTATEN SLIDER (De authentieke waslijn met echte geslepen messen) */}
      <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16">
        <div className="mb-6 px-4 text-center sm:mb-8 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C95E3E]">
            Sfeer &amp; Resultaten
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">
            Vers van de slijpsteen
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-[#657068]">
            Bekijk hoe keukenmessen er na het watersteenslijpen en stroppen op leer uitzien.
          </p>
        </div>

        <ResultatenSlider />
      </section>
    </div>
  );
};
