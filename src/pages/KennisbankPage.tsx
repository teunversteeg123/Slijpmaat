import type { FC } from 'react';
import { ArrowRight, BookOpen, MessageCircle } from 'lucide-react';
import type { PageId } from '../types';
import { SLIJPMAAT_INFO } from '../data/siteData';
import { OrganicSectionDivider } from '../components/OrganicSectionDivider';

interface KennisbankPageProps {
  onNavigate: (page: PageId) => void;
}

export const KennisbankPage: FC<KennisbankPageProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Slijpmaat, ik heb een vraag over het onderhoud van mijn messen.')}`;

  return (
    <div className="overflow-hidden bg-[#FAFAF8]">
      <section className="relative overflow-hidden px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-16 lg:px-8 lg:pb-32 lg:pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#3B7F4B] sm:text-sm">
              Kennis &amp; onderhoud
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.02] tracking-tight text-[#3B7F4B] sm:text-5xl lg:text-6xl">
              Blogs over messen slijpen en onderhoud
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#657068] sm:text-lg">
              Hier delen we binnenkort praktische kennis over scherpe messen, onderhoud en veilig gebruik in de keuken.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => onNavigate('particulieren')}
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-7 py-3.5 font-bold text-white shadow-sm transition hover:bg-[#C95E3E]"
              >
                Plan je slijpbeurt
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-[#3B7F4B]/25 bg-white px-7 py-3.5 font-bold text-[#3B7F4B] transition hover:bg-[#E8EFE8]"
              >
                Stel een vraag
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div aria-hidden="true" className="absolute -bottom-6 -left-6 h-44 w-44 rounded-[42%_58%_62%_38%/55%_42%_58%_45%] bg-[#A9C89E] sm:h-56 sm:w-56" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-[#d9e1d7] bg-white shadow-lg sm:aspect-square">
              <img
                src="/assets/kennisbank-slijpmaat-kaartje-planten.jpeg"
                alt="Slijpmaat-kaartje tussen groene planten"
                className="h-full w-full object-cover object-center"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      <OrganicSectionDivider fromColor="#FAFAF8" middleColor="#A9C89E" toColor="#E8EFE8" variant="calm" />

      <section className="bg-[#E8EFE8] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-[#3B7F4B]/15 bg-white px-6 py-14 text-center shadow-sm sm:px-12 sm:py-16">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8EFE8] text-[#3B7F4B]">
            <BookOpen className="h-7 w-7" aria-hidden="true" />
          </span>
          <h2 className="mt-6 font-heading text-2xl font-bold text-[#3B7F4B] sm:text-3xl">
            Nog geen blogs gepubliceerd
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-[#657068]">
            De eerste artikelen worden later toegevoegd. Tot die tijd kun je met een vraag altijd direct contact opnemen met Slijpmaat.
          </p>
        </div>
      </section>

      <OrganicSectionDivider fromColor="#E8EFE8" middleColor="#F9E4DE" toColor="#FFFFFF" variant="rolling" mirror />
    </div>
  );
};
