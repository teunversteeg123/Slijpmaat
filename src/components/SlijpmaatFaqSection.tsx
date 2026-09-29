import React, { useState } from 'react';
import { FAQS } from '../data/siteData';

interface SlijpmaatFaqSectionProps {
  className?: string;
  defaultOpenIndex?: number;
}

export const SlijpmaatFaqSection: React.FC<SlijpmaatFaqSectionProps> = ({
  className = '',
  defaultOpenIndex = 0
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>([defaultOpenIndex]);

  const toggleItem = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      className={`smf-container bg-[#E87B5B] text-white py-10 sm:py-16 px-4 sm:px-6 rounded-3xl relative overflow-hidden shadow-md ${className}`}
      aria-label="Veelgestelde vragen"
    >
      <div className="max-w-[900px] mx-auto">
        {/* Header Tag */}
        <div className="inline-flex items-center gap-2 mb-3 text-white/90 text-xs sm:text-sm font-extrabold uppercase tracking-widest font-heading">
          <span className="w-8 h-0.5 rounded-full bg-white/75" />
          <span>FAQ</span>
        </div>

        {/* H2 Title */}
        <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight mb-3">
          Veelgestelde vragen
        </h2>

        {/* Intro */}
        <p className="max-w-[750px] text-white/95 text-sm sm:text-lg leading-relaxed mb-7 font-normal">
          Nog niet helemaal scherp hoe Slijpmaat werkt? Hieronder beantwoorden we de belangrijkste vragen over ophalen, slijpen, betalen en veilig verpakken.
        </p>

        {/* Accordion List with max-height & touch scroll */}
        <div
          className="grid gap-3 max-h-[560px] overflow-y-auto pr-1 sm:pr-2 overscroll-contain"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(255,255,255,0.75) rgba(255,255,255,0.15)'
          }}
        >
          {FAQS.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            const hasList = Boolean(faq.items && faq.items.length > 0);

            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'border-white/50 bg-white/[0.18] shadow-md'
                    : 'border-white/25 bg-white/[0.12] hover:bg-white/[0.16] hover:border-white/40'
                }`}
              >
                <h3 className="m-0">
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer text-white select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-2xl"
                  >
                    <span className="font-heading font-bold text-base sm:text-lg leading-snug text-white">
                      {faq.q}
                    </span>

                    {/* Circular toggle icon (+) / (-) */}
                    <span
                      aria-hidden="true"
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? 'bg-white text-[#d86649] rotate-45'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      <svg
                        className="w-4 h-4 transition-transform duration-200"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>
                </h3>

                {/* Collapsible Answer */}
                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="px-4 pb-5 sm:px-5 sm:pb-6 text-white/95 text-sm sm:text-base leading-relaxed animate-in fade-in duration-200"
                  >
                    {hasList ? (
                      <div className="space-y-3">
                        <p>{faq.a.split('\n•')[0]}</p>
                        <ul className="list-disc pl-5 space-y-1 my-2">
                          {faq.items?.map((item, idx) => (
                            <li key={idx} className="leading-snug">
                              {item}
                            </li>
                          ))}
                        </ul>
                        {faq.a.includes('Vul in het bestelformulier') && (
                          <p>
                            Vul in het bestelformulier je postcode in om de bezorgprijs te bekijken. Vanaf drie messen komen we gratis langs.
                          </p>
                        )}
                        {faq.a.includes('Woon je in een van deze gebieden?') && (
                          <p>
                            Woon je in een van deze gebieden? Stuur je Maat via WhatsApp je postcode en het aantal messen. Dan laten we je weten wanneer we kunnen langskomen en wat de bezorgkosten zijn.
                          </p>
                        )}
                      </div>
                    ) : (
                      <p>{faq.a}</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
