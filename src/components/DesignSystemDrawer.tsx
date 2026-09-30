import React, { useState } from 'react';
import { PageId } from '../types';
import { Layers, Palette, Check, ExternalLink, X, ChevronUp, ChevronDown } from 'lucide-react';
import { SLIJPMAAT_INFO } from '../data/siteData';

interface DesignSystemDrawerProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const DesignSystemDrawer: React.FC<DesignSystemDrawerProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTokensModal, setShowTokensModal] = useState(false);

  const pages: { id: PageId; label: string; group: string }[] = [
    { id: 'home', label: '1. Home', group: 'Hoofdpagina’s' },
    { id: 'particulieren', label: '2. Particulieren', group: 'Doelgroep' },
    { id: 'horeca', label: '3. Horeca & Chefs', group: 'Doelgroep' },
    { id: 'diensten', label: '4. Diensten Hub', group: 'Diensten' },
    { id: 'dienst-keukenmessen', label: '5. Keukenmessen slijpen', group: 'Diensten' },
    { id: 'dienst-japanse-messen', label: '6. Japanse messen', group: 'Diensten' },
    { id: 'dienst-chips-herstellen', label: '7. Chips herstellen', group: 'Diensten' },
    { id: 'dienst-wel-niet', label: '8. Wat slijpen we wel/niet?', group: 'Diensten' },
    { id: 'werkwijze', label: '9. Werkwijze (8 stappen)', group: 'Ambacht' },
    { id: 'prijzen-bestellen', label: '10. Prijzen & Bestellen', group: 'Conversie' },
    { id: 'ophalen-bezorgen', label: '11. Ophalen & Servicegebied', group: 'Logistiek' },
    { id: 'kennisbank', label: '12. Kennisbank', group: 'Content & SEO' },
    { id: 'artikel', label: '13. Artikelpagina', group: 'Content & SEO' },
    { id: 'over-ons', label: '14. Over Slijpmaat', group: 'Merk' },
    { id: 'reviews', label: '15. Reviews & Resultaten', group: 'Sociaal bewijs' },
    { id: 'faq', label: '16. Veelgestelde vragen', group: 'Ondersteuning' },
    { id: 'contact', label: '17. Contact & Afspraak', group: 'Contact' },
    { id: 'algemene-voorwaarden', label: '18. Algemene voorwaarden', group: 'Juridisch' },
    { id: 'privacy', label: '19. Privacyverklaring', group: 'Juridisch' },
  ];

  return (
    <>
      {/* Floating Bottom Navigator Pill for Quick Multipage Switching */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-[#244A30] text-white rounded-full shadow-2xl border border-white/20 px-3 py-1.5 flex items-center gap-2 text-xs">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#3B7F4B] hover:bg-[#315F3B] transition-colors font-medium cursor-pointer"
          title="Open alle 19 pagina's van het prototype"
        >
          <Layers className="w-3.5 h-3.5 text-[#E87B5B]" />
          <span>Pagina: {currentPage}</span>
          {isOpen ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
        </button>

        <button
          onClick={() => setShowTokensModal(true)}
          className="flex items-center gap-1 px-2.5 py-1 rounded-full hover:bg-white/10 transition-colors text-white/90 hover:text-white cursor-pointer"
          title="Bekijk Design System & Brand tokens"
        >
          <Palette className="w-3.5 h-3.5 text-[#A9C89E]" />
          <span className="hidden sm:inline">Design System</span>
        </button>
      </div>

      {/* Pages Dropdown Modal / Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-end sm:items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl border border-slate-200">
            <div className="p-4 bg-[#244A30] text-white flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A9C89E] font-heading">
                  Slijpmaat.nl Multipage Prototype
                </span>
                <h3 className="text-lg font-bold font-heading">
                  Navigeer direct naar alle 19 pagina’s
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white cursor-pointer"
                aria-label="Sluiten"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 overflow-y-auto divide-y divide-slate-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-2">
                {pages.map((p) => {
                  const isActive = currentPage === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => {
                        onNavigate(p.id);
                        setIsOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                        isActive
                          ? 'bg-[#E8EFE8] text-[#3B7F4B] font-bold border border-[#3B7F4B]/30'
                          : 'hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span>{p.label}</span>
                        <span className="text-[10px] text-slate-400 font-normal">{p.group}</span>
                      </div>
                      {isActive && <Check className="w-4 h-4 text-[#3B7F4B]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Slijpmaat V.O.F. · Utrecht</span>
              <button
                onClick={() => {
                  setShowTokensModal(true);
                  setIsOpen(false);
                }}
                className="text-[#3B7F4B] font-semibold hover:underline flex items-center gap-1"
              >
                <Palette className="w-3.5 h-3.5" />
                <span>Bekijk Brand Tokens</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Design System Tokens Modal */}
      {showTokensModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#3B7F4B] font-heading">
                  Design System &amp; Brand Identiteit
                </span>
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  Slijpmaat.nl Design Tokens
                </h3>
              </div>
              <button
                onClick={() => setShowTokensModal(false)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 cursor-pointer"
                aria-label="Sluiten"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Colors */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-heading">
                Officiële Merkkleuren
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#3B7F4B] text-white">
                  <div className="font-bold">Primair Groen</div>
                  <div className="text-[11px] opacity-80">#3B7F4B</div>
                </div>
                <div className="p-3 rounded-xl bg-[#244A30] text-white">
                  <div className="font-bold">Donkergroen</div>
                  <div className="text-[11px] opacity-80">#244A30</div>
                </div>
                <div className="p-3 rounded-xl bg-[#E87B5B] text-white">
                  <div className="font-bold">Koraal Accent</div>
                  <div className="text-[11px] opacity-80">#E87B5B</div>
                </div>
                <div className="p-3 rounded-xl bg-[#C95E3E] text-white">
                  <div className="font-bold">Donker Koraal</div>
                  <div className="text-[11px] opacity-80">#C95E3E</div>
                </div>
                <div className="p-3 rounded-xl bg-[#E8EFE8] text-[#3B7F4B] border border-[#A9C89E]/40">
                  <div className="font-bold">Zachtgroen</div>
                  <div className="text-[11px] opacity-80">#E8EFE8</div>
                </div>
                <div className="p-3 rounded-xl bg-[#A9C89E] text-[#3B7F4B]">
                  <div className="font-bold">Saliegroen</div>
                  <div className="text-[11px] opacity-80">#A9C89E</div>
                </div>
                <div className="p-3 rounded-xl bg-[#F7F4EC] text-slate-800 border border-slate-300">
                  <div className="font-bold">Gebroken Wit</div>
                  <div className="text-[11px] opacity-80">#F7F4EC</div>
                </div>
                <div className="p-3 rounded-xl bg-[#FAFAFA] text-slate-800 border border-slate-200">
                  <div className="font-bold">Achtergrond</div>
                  <div className="text-[11px] opacity-80">#FAFAFA</div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-heading">
                Typografie &amp; Lettertypen
              </h4>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-sm">
                <div>
                  <span className="text-xs text-slate-500 block">Koppen &amp; Primaire knoppen:</span>
                  <p className="font-heading text-xl font-bold text-slate-900">
                    Instrument Sans · Vlijmscherp terug in Utrecht
                  </p>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Lopende tekst, formulieren &amp; navigatie:</span>
                  <p className="text-slate-700">
                    Inter · Duidelijk, praktisch en hoog leesbaar op alle mobiele schermen en desktop.
                  </p>
                </div>
              </div>
            </div>

            {/* Content & Principles */}
            <div className="space-y-2 text-xs text-slate-600">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-heading">
                Belangrijke Slijpmaat Richtlijnen
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Geen inloopwinkel: bezoek uitsluitend op afspraak in Utrecht.</li>
                <li>Vanaf 3 messen gratis ophalen &amp; bezorgen binnen Utrecht.</li>
                <li>Bezoekers van buiten Utrecht zijn van harte welkom om op afspraak langs te brengen.</li>
                <li>Handgeslepen op watergekoelde Japanse Shapton Pro whetstones (nooit droog of machinaal).</li>
                <li>Transparante vaste prijzen: €6,50 / €8,50 / €10,50 &amp; StudentenMaat €5,00.</li>
              </ul>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowTokensModal(false)}
                className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 cursor-pointer"
              >
                Sluiten
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
