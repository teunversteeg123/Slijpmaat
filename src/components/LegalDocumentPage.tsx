import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { PageId } from '../types';

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

interface LegalDocumentPageProps {
  title: string;
  subtitle?: string;
  sections: LegalSection[];
  onNavigate: (page: PageId) => void;
}

const renderSectionContent = (paragraphs: string[]) => {
  const content: React.ReactNode[] = [];
  let bullets: string[] = [];

  const flushBullets = () => {
    if (!bullets.length) return;
    content.push(
      <ul key={`list-${content.length}`} className="list-disc space-y-2 pl-5">
        {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
      </ul>,
    );
    bullets = [];
  };

  paragraphs.forEach((paragraph) => {
    paragraph.split(/\n+/).map((part) => part.trim()).filter(Boolean).forEach((part) => {
      if (part.startsWith('- ')) {
        bullets.push(part.slice(2));
        return;
      }
      flushBullets();
      content.push(<p key={`paragraph-${content.length}`}>{part}</p>);
    });
  });
  flushBullets();
  return content;
};

export const LegalDocumentPage: React.FC<LegalDocumentPageProps> = ({
  title,
  subtitle,
  sections,
  onNavigate,
}) => (
  <main className="min-h-screen bg-white text-[#203728]">
    <article className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
      <button
        type="button"
        onClick={() => onNavigate('home')}
        className="mb-9 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#3B7F4B] transition-colors hover:text-[#244A30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3B7F4B]"
      >
        <ChevronLeft aria-hidden="true" className="h-4 w-4" />
        Terug naar home
      </button>

      <header className="border-b border-[#dfe7df] pb-8">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-[#244A30] sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-3 text-sm text-[#657068] sm:text-base">{subtitle}</p>}
      </header>

      <div className="space-y-10 pt-9 text-[15px] leading-7 text-[#35443a] sm:text-base sm:leading-8">
        {sections.map((section) => (
          <section key={section.heading} className="space-y-4">
            <h2 className="font-heading text-xl font-bold leading-snug text-[#244A30] sm:text-2xl">
              {section.heading}
            </h2>
            <div className="space-y-4">{renderSectionContent(section.paragraphs)}</div>
          </section>
        ))}
      </div>
    </article>
  </main>
);
