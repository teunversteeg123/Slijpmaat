import type { ReactNode } from 'react';
import { Minus, Plus } from 'lucide-react';

const variants = {
  tip: {
    label: 'Tip van je Maat',
    illustration: '/assets/blog/slijpmaat-mascotte-tip-van-je-maat.webp',
  },
  'fun-fact': {
    label: 'Fun fact van je Maat',
    illustration: '/assets/blog/slijpmaat-mascotte-fun-fact.webp',
  },
};

type BlogMaatNoteProps = {
  variant: keyof typeof variants;
  title: string;
  children: ReactNode;
};

export function BlogMaatNote({ variant, title, children }: BlogMaatNoteProps) {
  const { label, illustration } = variants[variant];

  return (
    <details className="group rounded-[1.5rem] border border-[#D9E1D7] bg-[#F7F4EC]">
      <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-[1.5rem] px-3 py-3.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#244A30] sm:gap-3 sm:px-5 sm:py-4 [&::-webkit-details-marker]:hidden">
        <img
          src={illustration}
          alt=""
          width={144}
          height={144}
          loading="lazy"
          className="size-16 shrink-0 bg-[radial-gradient(ellipse_at_center,#E8EFE8_35%,transparent_72%)] object-contain sm:size-36"
        />
        <span className="min-w-0 flex-1">
          <span className="block text-xs font-semibold text-[#3B6448] sm:text-sm">{label}</span>
          <span className="block font-heading text-base font-bold leading-snug sm:text-lg">{title}</span>
        </span>
        <span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full bg-white text-[#244A30] sm:size-8">
          <Plus size={16} className="group-open:hidden" />
          <Minus size={16} className="hidden group-open:block" />
        </span>
      </summary>
      <p className="px-4 pb-5 sm:pl-44 sm:pr-5">{children}</p>
    </details>
  );
}
