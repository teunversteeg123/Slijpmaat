import React, { useRef } from 'react';
import { Building2, ChevronLeft, ChevronRight, ExternalLink, Handshake } from 'lucide-react';
import { SLIJPMAAT_INFO } from '../data/siteData';

export interface PartnerItem {
  name: string;
  category: string;
  url?: string;
  logoUrl?: string; // Optioneel logo bestand
}

const PARTNERS: PartnerItem[] = [
  {
    name: 'Utrechtse Kookwinkel',
    category: 'Kookgerei & Accessoires',
    url: 'https://example.com',
  },
  {
    name: 'Bistro & Restaurant',
    category: 'Horeca Partner Utrecht',
    url: 'https://example.com',
  },
  {
    name: 'Ambachtelijke Slagerij',
    category: 'Lokale Verspartner',
    url: 'https://example.com',
  },
  {
    name: 'Café & Lunchbar',
    category: 'Horeca Partner',
    url: 'https://example.com',
  },
  {
    name: 'Culinaire Speciaalzaak',
    category: 'Partner Winkel',
    url: 'https://example.com',
  },
  {
    name: 'Foodtruck & Catering',
    category: 'Evenementen Partner',
    url: 'https://example.com',
  },
];

export const PartnerLogoSlider: React.FC = () => {
  const whatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik wil graag samenwerken met Slijpmaat als partner!')}`;
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const scrollAmount = 260;
      trackRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-[#d9e1d7] bg-white p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3B7F4B]">
            Lokale Samenwerkingen
          </p>
          <h3 className="mt-1 font-heading text-2xl sm:text-3xl font-bold text-[#203728]">
            Onze Utrechtse Partners &amp; Winkels
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-[#657068] max-w-xl">
            Samenwerkingen met lokale horeca, kookwinkels en versmarkten in Utrecht.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#3B7F4B]/30 bg-[#E8EFE8] px-4 py-2 text-xs font-bold text-[#3B7F4B] hover:bg-[#3B7F4B] hover:text-white transition-all shrink-0 cursor-pointer"
          >
            <Handshake className="h-3.5 w-3.5" />
            <span>Partner worden?</span>
          </a>

          {/* Eenvoudige knoppen voor horizontaal scrollen */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d9e1d7] bg-white text-[#203728] hover:bg-[#E8EFE8] cursor-pointer transition-colors"
              aria-label="Vorige partners"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3B7F4B] text-white hover:bg-[#315F3B] cursor-pointer transition-colors"
              aria-label="Volgende partners"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Eenvoudige Horizontale Slider */}
      <div
        ref={trackRef}
        className="flex items-stretch gap-4 overflow-x-auto pb-3 pt-1 snap-x scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {PARTNERS.map((partner, idx) => (
          <div
            key={idx}
            className="group relative flex w-48 sm:w-56 shrink-0 snap-start flex-col items-center justify-between rounded-2xl border-2 border-dashed border-[#d9e1d7] bg-[#FAFAF8] p-5 text-center transition-all duration-200 hover:border-[#3B7F4B]/60 hover:bg-white hover:shadow-xs"
          >
            <div className="flex flex-col items-center">
              {partner.logoUrl ? (
                <img
                  src={partner.logoUrl}
                  alt={partner.name}
                  className="h-10 w-auto object-contain mb-3 grayscale group-hover:grayscale-0 transition-all"
                />
              ) : (
                /* Leeg logo-kader voor toekomstige partners */
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8EFE8] text-[#3B7F4B] mb-3 group-hover:scale-105 transition-transform">
                  <Building2 className="h-6 w-6 opacity-70" />
                </div>
              )}

              <h4 className="font-heading text-sm font-bold text-[#203728] leading-tight">
                {partner.name}
              </h4>
              <span className="mt-1 text-[11px] text-[#657068]">
                {partner.category}
              </span>
            </div>

            {partner.url && (
              <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold text-[#3B7F4B] opacity-70 group-hover:opacity-100 transition-opacity">
                <span>Bekijk website</span>
                <ExternalLink className="h-2.5 w-2.5" />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
