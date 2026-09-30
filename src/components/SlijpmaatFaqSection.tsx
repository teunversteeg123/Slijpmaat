import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQS } from '../data/siteData';

interface SlijpmaatFaqSectionProps {
  className?: string;
  defaultOpenIndex?: number;
}

export const SlijpmaatFaqSection: React.FC<SlijpmaatFaqSectionProps> = ({
  className = '',
  defaultOpenIndex = 0,
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>([defaultOpenIndex]);

  const toggleItem = (index: number) => {
    setOpenIndices((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index]);
  };

  return (
    <section className={`border-y border-[#d9e1d7] ${className}`} aria-label="Veelgestelde vragen">
      {FAQS.map((faq, index) => {
        const isOpen = openIndices.includes(index);
        const hasList = Boolean(faq.items?.length);

        return (
          <article key={faq.q} className="border-b border-[#d9e1d7] last:border-b-0">
            <h2>
              <button
                type="button"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B7F4B] focus-visible:ring-offset-4 sm:py-7"
              >
                <span className="font-heading text-lg font-bold leading-snug text-[#3B7F4B] sm:text-xl">{faq.q}</span>
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen ? 'bg-[#3B7F4B] text-white' : 'bg-[#E8EFE8] text-[#3B7F4B] group-hover:bg-[#DCE8DC]'}`}>
                  <Plus className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-45' : ''}`} aria-hidden="true" />
                </span>
              </button>
            </h2>

            {isOpen && (
              <div id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`} className="max-w-3xl pb-7 pr-12 text-sm leading-7 text-[#657068] sm:text-base">
                {hasList ? (
                  <div className="space-y-4">
                    <p>{faq.a.split('\n•')[0]}</p>
                    <ul className="grid gap-2 pl-5 sm:grid-cols-2">
                      {faq.items?.map((item) => <li key={item} className="list-disc pl-1">{item}</li>)}
                    </ul>
                    {faq.a.includes('Vul in het bestelformulier') && <p>Vul in het bestelformulier je postcode in om de bezorgprijs te bekijken. Vanaf drie messen komen we gratis langs.</p>}
                    {faq.a.includes('Woon je in een van deze gebieden?') && <p>Woon je in een van deze gebieden? Stuur je Maat via WhatsApp je postcode en het aantal messen. Dan laten we je weten wanneer we kunnen langskomen en wat de bezorgkosten zijn.</p>}
                  </div>
                ) : <p>{faq.a}</p>}
              </div>
            )}
          </article>
        );
      })}
    </section>
  );
};
