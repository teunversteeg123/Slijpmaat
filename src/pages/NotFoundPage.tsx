import type { PageId } from '../types';

type NotFoundPageProps = {
  onNavigate: (page: PageId) => void;
};

export const NotFoundPage = ({ onNavigate }: NotFoundPageProps) => (
  <section className="flex min-h-[62vh] items-center bg-[#FAFAF8] px-4 py-24 sm:px-6 lg:px-8">
    <div className="mx-auto w-full max-w-3xl text-center">
      <p className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-[#E87B5B]">Fout 404</p>
      <h1 className="mt-4 font-heading text-4xl font-bold text-[#244A30] sm:text-6xl">Pagina niet gevonden</h1>
      <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#526259] sm:text-lg">
        Deze pagina bestaat niet of is verplaatst. Via de homepage of de bestaande contactsectie vind je snel de juiste route.
      </p>
      <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
        <button type="button" onClick={() => onNavigate('home')} className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#E87B5B] px-7 py-3 font-bold text-white transition-colors hover:bg-[#C95E3E] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B]">
          Naar home
        </button>
        <a href="/#home-contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#3B7F4B] bg-white px-7 py-3 font-bold text-[#3B7F4B] transition-colors hover:bg-[#EFF5EC] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B]">
          Naar contact
        </a>
      </div>
    </div>
  </section>
);
