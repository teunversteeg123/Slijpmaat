import React, { useState, useId } from 'react';
import { SLIJPMAAT_INFO } from '../data/siteData';
import { KnifeOrderState } from '../types';
import { MessageCircle, Check, HelpCircle, MapPin, Sparkles, AlertCircle, Plus, Minus, ArrowRight } from 'lucide-react';

interface CalculatorProps {
  initialType?: 'particulier' | 'zakelijk';
  onOrderInitiated?: () => void;
}

export const Calculator: React.FC<CalculatorProps> = ({
  initialType = 'particulier',
  onOrderInitiated
}) => {
  const [state, setState] = useState<KnifeOrderState>({
    customerType: initialType,
    smallKnives: 1,
    normalKnives: 2,
    largeKnives: 0,
    extraLargeKnives: 0,
    isStudent: false,
    hasChipRepair: 0,
    hasProfileRepair: 0,
    deliveryOption: 'pickup',
    postcode: '',
    name: '',
    phone: '',
    email: '',
    address: '',
    notes: ''
  });

  const [copied, setCopied] = useState(false);
  const nameId = useId();
  const phoneId = useId();
  const addressId = useId();
  const postcodeId = useId();
  const notesId = useId();

  const totalKnives = state.smallKnives + state.normalKnives + state.largeKnives + state.extraLargeKnives;

  // Calculate sharpening cost
  let sharpeningCost = 0;
  if (state.isStudent) {
    const eligibleStudentKnives = state.smallKnives + state.normalKnives + state.largeKnives;
    sharpeningCost = eligibleStudentKnives * SLIJPMAAT_INFO.prices.student.price;
  } else {
    sharpeningCost =
      state.smallKnives * SLIJPMAAT_INFO.prices.small.price +
      state.normalKnives * SLIJPMAAT_INFO.prices.normal.price +
      state.largeKnives * SLIJPMAAT_INFO.prices.large.price;
  }

  // Extra repairs
  const repairsCost =
    state.hasChipRepair * SLIJPMAAT_INFO.prices.chipRepair.price +
    state.hasProfileRepair * SLIJPMAAT_INFO.prices.profileRepair.price;

  // Delivery cost: Utrecht gratis vanaf 3 messen, anders €4,50; Zelf langsbrengen = altijd gratis
  let deliveryCost = 0;
  if (state.deliveryOption === 'pickup') {
    deliveryCost = totalKnives >= SLIJPMAAT_INFO.pickupMinKnivesFree ? 0 : SLIJPMAAT_INFO.pickupStandardFee;
  }

  const grandTotal = sharpeningCost + repairsCost + deliveryCost;

  // Format the WhatsApp order message exactly for Teun & Mike
  const generateWhatsAppMessage = () => {
    let msg = `Hoi Teun en Mike (Slijpmaat),\n\nIk wil graag een slijpbeurt plannen via de website:\n`;
    msg += `• Klanttype: ${state.customerType === 'zakelijk' ? 'Zakelijk / Horeca' : 'Particulier'}\n`;
    if (state.isStudent) {
      msg += `• StudentenMaat korting (€5/mes)\n`;
    }
    msg += `\nMessen overzicht:\n`;
    if (state.smallKnives > 0) msg += `- ${state.smallKnives}x Klein mes (<15cm, €6,50)\n`;
    if (state.normalKnives > 0) msg += `- ${state.normalKnives}x Normaal mes (15-20cm, €8,50)\n`;
    if (state.largeKnives > 0) msg += `- ${state.largeKnives}x Groot mes (20-25cm, €10,50)\n`;
    if (state.extraLargeKnives > 0) msg += `- ${state.extraLargeKnives}x Extra groot mes (>25cm, op aanvraag)\n`;

    if (state.hasChipRepair > 0) msg += `- ${state.hasChipRepair}x Kleine chip herstellen (+€2,50)\n`;
    if (state.hasProfileRepair > 0) msg += `- ${state.hasProfileRepair}x Nieuw profiel / gebroken punt (+€8,50)\n`;

    msg += `\nAanlevering:\n`;
    if (state.deliveryOption === 'pickup') {
      msg += `• Ophalen & bezorgen in Utrecht (${totalKnives >= 3 ? 'Gratis bij 3+ messen' : '€4,50'})\n`;
      if (state.address) msg += `• Adres: ${state.address}\n`;
      if (state.postcode) msg += `• Postcode: ${state.postcode}\n`;
    } else {
      msg += `• Zelf langsbrengen & ophalen op afspraak in Utrecht\n`;
    }

    if (state.name) msg += `\nNaam: ${state.name}`;
    if (state.phone) msg += `\nTelefoon: ${state.phone}`;
    if (state.notes) msg += `\nOpmerkingen: ${state.notes}`;

    msg += `\n\nGeschat totaalbedrag: €${grandTotal.toFixed(2).replace('.', ',')}`;
    if (state.extraLargeKnives > 0) msg += ` (+ prijs XL mes op aanvraag)`;
    msg += `\n\nSchikt het om een afspraak te plannen?`;

    return msg;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = generateWhatsAppMessage();
    const url = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(text)}`;
    if (onOrderInitiated) onOrderInitiated();
    window.open(url, '_blank');
  };

  const handleCopyMessage = () => {
    const text = generateWhatsAppMessage();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-white rounded-3xl border border-[#d9e1d7] shadow-sm overflow-hidden" id="calculator">
      {/* Top Banner: Slijpmaat Groen met Witte tekst */}
      <div className="p-5 sm:p-7 bg-[#3B7F4B] text-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#A9C89E] font-heading block">
              Scherpe prijzen voor scherpe messen
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-0.5">
              Bestelcalculator
            </h3>
          </div>

          {/* Segmented Switch: Particulier vs Zakelijk */}
          <div className="inline-flex p-1 bg-[#244A30] rounded-xl border border-white/20 self-start sm:self-auto" role="tablist" aria-label="Klanttype">
            <button
              type="button"
              role="tab"
              aria-selected={state.customerType === 'particulier'}
              onClick={() => setState(prev => ({ ...prev, customerType: 'particulier' }))}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap min-h-[40px] flex items-center ${
                state.customerType === 'particulier'
                  ? 'bg-white text-[#3B7F4B] shadow-sm'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Particulier
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={state.customerType === 'zakelijk'}
              onClick={() => setState(prev => ({ ...prev, customerType: 'zakelijk', isStudent: false }))}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap min-h-[40px] flex items-center ${
                state.customerType === 'zakelijk'
                  ? 'bg-white text-[#3B7F4B] shadow-sm'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Horeca / Zakelijk
            </button>
          </div>
        </div>

        <p className="mt-2 text-xs sm:text-sm text-[#E8EFE8] max-w-xl leading-relaxed">
          Bereken direct jouw slijpkosten. Vanaf 3 messen halen we ze gratis op binnen ons vaste bezorggebied in Utrecht.
        </p>
      </div>

      <form onSubmit={handleSendWhatsApp} className="p-5 sm:p-7 space-y-6 sm:space-y-8">
        {/* Step 1: Mesformaten selecteren */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <h4 className="text-base font-bold text-[#3B7F4B] font-heading flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#E8EFE8] text-[#3B7F4B] text-xs flex items-center justify-center font-bold">1</span>
              <span>Kies je messen</span>
            </h4>
            {state.customerType === 'particulier' && (
              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-[#162E1C] bg-[#A9C89E] px-3.5 py-2 rounded-xl border border-[#3B7F4B]/30 hover:bg-[#9bbe90] transition-colors min-h-[40px]">
                <input
                  type="checkbox"
                  checked={state.isStudent}
                  onChange={(e) => setState(prev => ({ ...prev, isStudent: e.target.checked }))}
                  className="rounded text-[#3B7F4B] focus:ring-[#3B7F4B] w-4 h-4"
                />
                <span>StudentenMaat (€5,00/mes)</span>
              </label>
            )}
          </div>

          <div className="p-3 mb-4 rounded-2xl bg-[#E8EFE8] border border-[#3B7F4B]/20 text-xs text-[#162E1C] flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-[#3B7F4B] shrink-0" />
            <span><strong>Geen meerprijs voor Japanse messen!</strong> Zowel Europese koksmessen als Japanse messen (Santoku, Gyuto, Petty) vallen onder hetzelfde tarief per formaat.</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {/* Klein mes */}
            <div className="p-4 rounded-2xl border border-[#d9e1d7] bg-[#FAFAFA] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#657068] mb-1">
                  <span className="font-mono">&lt; 15 cm</span>
                  <span className="font-bold text-[#3B7F4B]">
                    {state.isStudent ? '€ 5,00' : '€ 6,50'}
                  </span>
                </div>
                <h5 className="font-bold text-[#3B7F4B] text-sm font-heading">Klein mes</h5>
                <p className="text-xs text-[#657068] mt-0.5">Schilmes, officemes, petty</p>
              </div>

              {/* Mobile-Friendly Plus/Minus Buttons (min 44px tap targets) */}
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#d9e1d7]">
                <button
                  type="button"
                  onClick={() => setState(p => ({ ...p, smallKnives: Math.max(0, p.smallKnives - 1) }))}
                  className="w-11 h-11 sm:w-9 sm:h-9 rounded-xl bg-white border border-[#d9e1d7] text-[#3B7F4B] flex items-center justify-center hover:bg-[#E8EFE8] disabled:opacity-30 cursor-pointer active:scale-95 transition-all shadow-2xs"
                  disabled={state.smallKnives <= 0}
                  aria-label="Klein mes verminderen"
                >
                  <Minus className="w-4 h-4 text-[#3B7F4B]" />
                </button>
                <span className="text-lg font-bold text-[#3B7F4B] font-heading tabular-nums px-2">
                  {state.smallKnives}
                </span>
                <button
                  type="button"
                  onClick={() => setState(p => ({ ...p, smallKnives: p.smallKnives + 1 }))}
                  className="w-11 h-11 sm:w-9 sm:h-9 rounded-xl bg-white border border-[#d9e1d7] text-[#3B7F4B] flex items-center justify-center hover:bg-[#E8EFE8] cursor-pointer active:scale-95 transition-all shadow-2xs"
                  aria-label="Klein mes vermeerderen"
                >
                  <Plus className="w-4 h-4 text-[#3B7F4B]" />
                </button>
              </div>
            </div>

            {/* Normaal mes */}
            <div className="p-4 rounded-2xl border-2 border-[#3B7F4B] bg-[#F7F4EC] flex flex-col justify-between relative shadow-2xs">
              <span className="absolute -top-2.5 right-3 bg-[#3B7F4B] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Populair
              </span>
              <div>
                <div className="flex items-center justify-between text-xs text-[#3B7F4B] mb-1">
                  <span className="font-mono">15 - 20 cm</span>
                  <span className="font-bold text-[#3B7F4B]">
                    {state.isStudent ? '€ 5,00' : '€ 8,50'}
                  </span>
                </div>
                <h5 className="font-bold text-[#3B7F4B] text-sm font-heading">Normaal mes</h5>
                <p className="text-xs text-[#3B7F4B] mt-0.5">Koksmes, Santoku, allround</p>
              </div>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#3B7F4B]/20">
                <button
                  type="button"
                  onClick={() => setState(p => ({ ...p, normalKnives: Math.max(0, p.normalKnives - 1) }))}
                  className="w-11 h-11 sm:w-9 sm:h-9 rounded-xl bg-white border border-[#d9e1d7] text-[#3B7F4B] flex items-center justify-center hover:bg-[#E8EFE8] disabled:opacity-30 cursor-pointer active:scale-95 transition-all shadow-2xs"
                  disabled={state.normalKnives <= 0}
                  aria-label="Normaal mes verminderen"
                >
                  <Minus className="w-4 h-4 text-[#3B7F4B]" />
                </button>
                <span className="text-lg font-bold text-[#3B7F4B] font-heading tabular-nums px-2">
                  {state.normalKnives}
                </span>
                <button
                  type="button"
                  onClick={() => setState(p => ({ ...p, normalKnives: p.normalKnives + 1 }))}
                  className="w-11 h-11 sm:w-9 sm:h-9 rounded-xl bg-white border border-[#d9e1d7] text-[#3B7F4B] flex items-center justify-center hover:bg-[#E8EFE8] cursor-pointer active:scale-95 transition-all shadow-2xs"
                  aria-label="Normaal mes vermeerderen"
                >
                  <Plus className="w-4 h-4 text-[#3B7F4B]" />
                </button>
              </div>
            </div>

            {/* Groot mes */}
            <div className="p-4 rounded-2xl border border-[#d9e1d7] bg-[#FAFAFA] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#657068] mb-1">
                  <span className="font-mono">20 - 25 cm</span>
                  <span className="font-bold text-[#3B7F4B]">
                    {state.isStudent ? '€ 5,00' : '€ 10,50'}
                  </span>
                </div>
                <h5 className="font-bold text-[#3B7F4B] text-sm font-heading">Groot mes</h5>
                <p className="text-xs text-[#657068] mt-0.5">Chefmes, Gyuto, trancheer</p>
              </div>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#d9e1d7]">
                <button
                  type="button"
                  onClick={() => setState(p => ({ ...p, largeKnives: Math.max(0, p.largeKnives - 1) }))}
                  className="w-11 h-11 sm:w-9 sm:h-9 rounded-xl bg-white border border-[#d9e1d7] text-[#3B7F4B] flex items-center justify-center hover:bg-[#E8EFE8] disabled:opacity-30 cursor-pointer active:scale-95 transition-all shadow-2xs"
                  disabled={state.largeKnives <= 0}
                  aria-label="Groot mes verminderen"
                >
                  <Minus className="w-4 h-4 text-[#3B7F4B]" />
                </button>
                <span className="text-lg font-bold text-[#3B7F4B] font-heading tabular-nums px-2">
                  {state.largeKnives}
                </span>
                <button
                  type="button"
                  onClick={() => setState(p => ({ ...p, largeKnives: p.largeKnives + 1 }))}
                  className="w-11 h-11 sm:w-9 sm:h-9 rounded-xl bg-white border border-[#d9e1d7] text-[#3B7F4B] flex items-center justify-center hover:bg-[#E8EFE8] cursor-pointer active:scale-95 transition-all shadow-2xs"
                  aria-label="Groot mes vermeerderen"
                >
                  <Plus className="w-4 h-4 text-[#3B7F4B]" />
                </button>
              </div>
            </div>

            {/* Extra groot mes */}
            <div className="p-4 rounded-2xl border border-[#d9e1d7] bg-[#FAFAFA] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#657068] mb-1">
                  <span className="font-mono">&gt; 25 cm</span>
                  <span className="font-bold text-[#E87B5B]">Op aanvraag</span>
                </div>
                <h5 className="font-bold text-[#3B7F4B] text-sm font-heading">Extra groot</h5>
                <p className="text-xs text-[#657068] mt-0.5">Zalmmes, slagersmes</p>
              </div>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#d9e1d7]">
                <button
                  type="button"
                  onClick={() => setState(p => ({ ...p, extraLargeKnives: Math.max(0, p.extraLargeKnives - 1) }))}
                  className="w-11 h-11 sm:w-9 sm:h-9 rounded-xl bg-white border border-[#d9e1d7] text-[#3B7F4B] flex items-center justify-center hover:bg-[#E8EFE8] disabled:opacity-30 cursor-pointer active:scale-95 transition-all shadow-2xs"
                  disabled={state.extraLargeKnives <= 0}
                  aria-label="Extra groot mes verminderen"
                >
                  <Minus className="w-4 h-4 text-[#3B7F4B]" />
                </button>
                <span className="text-lg font-bold text-[#3B7F4B] font-heading tabular-nums px-2">
                  {state.extraLargeKnives}
                </span>
                <button
                  type="button"
                  onClick={() => setState(p => ({ ...p, extraLargeKnives: p.extraLargeKnives + 1 }))}
                  className="w-11 h-11 sm:w-9 sm:h-9 rounded-xl bg-white border border-[#d9e1d7] text-[#3B7F4B] flex items-center justify-center hover:bg-[#E8EFE8] cursor-pointer active:scale-95 transition-all shadow-2xs"
                  aria-label="Extra groot mes vermeerderen"
                >
                  <Plus className="w-4 h-4 text-[#3B7F4B]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Eventuele reparaties */}
        <div className="pt-2 border-t border-[#d9e1d7]">
          <h4 className="text-base font-bold text-[#3B7F4B] font-heading mb-1 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#E8EFE8] text-[#3B7F4B] text-xs flex items-center justify-center font-bold">2</span>
            <span>Reparaties &amp; beschadigingen (optioneel)</span>
          </h4>
          <p className="text-xs text-[#657068] mb-3">
            Heeft een mes een hapje uit de snede of een gebroken punt? Geef het hieronder aan.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-2xl border border-[#d9e1d7] bg-[#FAFAFA] flex items-center justify-between gap-3">
              <div>
                <span className="font-bold text-sm text-[#3B7F4B] block">Kleine chip herstellen</span>
                <span className="text-xs text-[#657068]">Hapje tot 2 mm (+€ 2,50 per mes)</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setState(p => ({ ...p, hasChipRepair: Math.max(0, p.hasChipRepair - 1) }))}
                  className="w-10 h-10 rounded-xl bg-white border border-[#d9e1d7] text-[#3B7F4B] flex items-center justify-center hover:bg-[#E8EFE8] disabled:opacity-30 cursor-pointer"
                  disabled={state.hasChipRepair <= 0}
                  aria-label="Chip herstel verminderen"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="font-bold text-sm text-[#3B7F4B] font-heading tabular-nums px-1">
                  {state.hasChipRepair}
                </span>
                <button
                  type="button"
                  onClick={() => setState(p => ({ ...p, hasChipRepair: p.hasChipRepair + 1 }))}
                  className="w-10 h-10 rounded-xl bg-white border border-[#d9e1d7] text-[#3B7F4B] flex items-center justify-center hover:bg-[#E8EFE8] cursor-pointer"
                  aria-label="Chip herstel vermeerderen"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-[#d9e1d7] bg-[#FAFAFA] flex items-center justify-between gap-3">
              <div>
                <span className="font-bold text-sm text-[#3B7F4B] block">Nieuw profiel / gebroken punt</span>
                <span className="text-xs text-[#657068]">Zware schade / nieuwe apex (+€ 8,50)</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setState(p => ({ ...p, hasProfileRepair: Math.max(0, p.hasProfileRepair - 1) }))}
                  className="w-10 h-10 rounded-xl bg-white border border-[#d9e1d7] text-[#3B7F4B] flex items-center justify-center hover:bg-[#E8EFE8] disabled:opacity-30 cursor-pointer"
                  disabled={state.hasProfileRepair <= 0}
                  aria-label="Profiel herstel verminderen"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="font-bold text-sm text-[#3B7F4B] font-heading tabular-nums px-1">
                  {state.hasProfileRepair}
                </span>
                <button
                  type="button"
                  onClick={() => setState(p => ({ ...p, hasProfileRepair: p.hasProfileRepair + 1 }))}
                  className="w-10 h-10 rounded-xl bg-white border border-[#d9e1d7] text-[#3B7F4B] flex items-center justify-center hover:bg-[#E8EFE8] cursor-pointer"
                  aria-label="Profiel herstel vermeerderen"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Bezorging & Servicegebied */}
        <div className="pt-2 border-t border-[#d9e1d7]">
          <h4 className="text-base font-bold text-[#3B7F4B] font-heading mb-1 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#E8EFE8] text-[#3B7F4B] text-xs flex items-center justify-center font-bold">3</span>
            <span>Aanlevering &amp; Locatie</span>
          </h4>
          <p className="text-xs text-[#657068] mb-3">
            Binnen Utrecht halen we op en bezorgen we. Buiten Utrecht ben je van harte welkom om op afspraak langs te komen.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <label
              className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                state.deliveryOption === 'pickup'
                  ? 'border-[#3B7F4B] bg-[#E8EFE8]/40'
                  : 'border-[#d9e1d7] hover:border-[#3B7F4B]/50'
              }`}
            >
              <div className="flex items-start gap-3">
                <input
                  type="radio"
                  name="deliveryOption"
                  value="pickup"
                  checked={state.deliveryOption === 'pickup'}
                  onChange={() => setState(p => ({ ...p, deliveryOption: 'pickup' }))}
                  className="mt-1 text-[#3B7F4B] focus:ring-[#3B7F4B] w-4 h-4"
                />
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-[#3B7F4B] text-sm">Ophalen &amp; bezorgen in Utrecht</span>
                    {totalKnives >= 3 ? (
                      <span className="text-[10px] font-bold text-[#162E1C] bg-[#A9C89E] px-2 py-0.5 rounded-full">
                        GRATIS (3+ messen)
                      </span>
                    ) : (
                      <span className="text-[10px] font-semibold text-[#657068] bg-slate-200 px-2 py-0.5 rounded-full">
                        € 4,50 (bij 1-2 messen)
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#657068] mt-1 leading-relaxed">
                    We komen op de fiets of bakwagen bij je langs binnen ons Utrechtse servicegebied.
                  </p>
                </div>
              </div>
            </label>

            <label
              className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                state.deliveryOption === 'dropoff'
                  ? 'border-[#3B7F4B] bg-[#E8EFE8]/40'
                  : 'border-[#d9e1d7] hover:border-[#3B7F4B]/50'
              }`}
            >
              <div className="flex items-start gap-3">
                <input
                  type="radio"
                  name="deliveryOption"
                  value="dropoff"
                  checked={state.deliveryOption === 'dropoff'}
                  onChange={() => setState(p => ({ ...p, deliveryOption: 'dropoff' }))}
                  className="mt-1 text-[#3B7F4B] focus:ring-[#3B7F4B] w-4 h-4"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#3B7F4B] text-sm">Zelf langsbrengen op afspraak</span>
                    <span className="text-[10px] font-bold text-[#162E1C] bg-[#A9C89E] px-2 py-0.5 rounded-full">
                      GRATIS
                    </span>
                  </div>
                  <p className="text-xs text-[#657068] mt-1 leading-relaxed">
                    Ideaal voor klanten buiten Utrecht of wie in de buurt woont. (Geen inloopwinkel, tijdstip op afspraak).
                  </p>
                </div>
              </div>
            </label>
          </div>
        </div>

        {/* Step 4: Contactgegevens */}
        <div className="pt-2 border-t border-[#d9e1d7]">
          <h4 className="text-base font-bold text-[#3B7F4B] font-heading mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#E8EFE8] text-[#3B7F4B] text-xs flex items-center justify-center font-bold">4</span>
            <span>Jouw gegevens</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label htmlFor={nameId} className="block text-xs font-semibold text-[#3B7F4B] mb-1">
                Naam {state.customerType === 'zakelijk' ? '/ Zaak' : ''} *
              </label>
              <input
                id={nameId}
                type="text"
                required
                placeholder="Bijv. Teun Versteeg"
                value={state.name}
                onChange={(e) => setState(p => ({ ...p, name: e.target.value }))}
                className="w-full px-3.5 py-3 rounded-xl border border-[#d9e1d7] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#3B7F4B] bg-[#FAFAFA]"
              />
            </div>

            <div>
              <label htmlFor={phoneId} className="block text-xs font-semibold text-[#3B7F4B] mb-1">
                Telefoonnummer (voor WhatsApp) *
              </label>
              <input
                id={phoneId}
                type="tel"
                required
                placeholder="06 12 34 56 78"
                value={state.phone}
                onChange={(e) => setState(p => ({ ...p, phone: e.target.value }))}
                className="w-full px-3.5 py-3 rounded-xl border border-[#d9e1d7] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#3B7F4B] bg-[#FAFAFA]"
              />
            </div>

            {state.deliveryOption === 'pickup' && (
              <>
                <div>
                  <label htmlFor={addressId} className="block text-xs font-semibold text-[#3B7F4B] mb-1">
                    Straat en huisnummer (in Utrecht) *
                  </label>
                  <input
                    id={addressId}
                    type="text"
                    required
                    placeholder="Bijv. Oudegracht 120"
                    value={state.address}
                    onChange={(e) => setState(p => ({ ...p, address: e.target.value }))}
                    className="w-full px-3.5 py-3 rounded-xl border border-[#d9e1d7] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#3B7F4B] bg-[#FAFAFA]"
                  />
                </div>

                <div>
                  <label htmlFor={postcodeId} className="block text-xs font-semibold text-[#3B7F4B] mb-1">
                    Postcode in Utrecht *
                  </label>
                  <input
                    id={postcodeId}
                    type="text"
                    required
                    placeholder="Bijv. 3511 AA"
                    value={state.postcode}
                    onChange={(e) => setState(p => ({ ...p, postcode: e.target.value }))}
                    className="w-full px-3.5 py-3 rounded-xl border border-[#d9e1d7] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#3B7F4B] bg-[#FAFAFA]"
                  />
                </div>
              </>
            )}

            <div className="sm:col-span-2">
              <label htmlFor={notesId} className="block text-xs font-semibold text-[#3B7F4B] mb-1">
                Opmerkingen of types messen (optioneel)
              </label>
              <input
                id={notesId}
                type="text"
                placeholder="Bijv. 1x Santoku en 2x koksmes, graag voor het weekend klaar"
                value={state.notes}
                onChange={(e) => setState(p => ({ ...p, notes: e.target.value }))}
                className="w-full px-3.5 py-3 rounded-xl border border-[#d9e1d7] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#3B7F4B] bg-[#FAFAFA]"
              />
            </div>
          </div>
        </div>

        {/* Summary Card & Primary Action Button */}
        <div className="p-5 sm:p-7 rounded-2xl bg-[#F7F4EC] border-2 border-[#3B7F4B]/20 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#d9e1d7]">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#3B7F4B] font-heading">
                Totaaloverzicht
              </span>
              <div className="text-3xl sm:text-4xl font-black font-heading text-[#3B7F4B] mt-0.5">
                € {grandTotal.toFixed(2).replace('.', ',')}
                {state.extraLargeKnives > 0 && (
                  <span className="text-xs font-normal text-[#657068] ml-2">
                    (+ prijs voor XL mes op aanvraag)
                  </span>
                )}
              </div>
            </div>

            <div className="text-xs text-[#203728] sm:text-right space-y-1">
              <div>Slijpen: <strong>€ {sharpeningCost.toFixed(2).replace('.', ',')}</strong> ({totalKnives} {totalKnives === 1 ? 'mes' : 'messen'})</div>
              {repairsCost > 0 && <div>Reparaties: <strong>€ {repairsCost.toFixed(2).replace('.', ',')}</strong></div>}
              <div>
                Bezorging:{' '}
                {state.deliveryOption === 'dropoff' ? (
                  <strong className="text-[#3B7F4B]">Zelf brengen (gratis)</strong>
                ) : deliveryCost === 0 ? (
                  <strong className="text-[#3B7F4B]">Gratis ophalen (3+ messen)</strong>
                ) : (
                  <strong>€ {deliveryCost.toFixed(2).replace('.', ',')}</strong>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2.5 text-xs text-[#657068]">
            <AlertCircle className="w-4 h-4 text-[#3B7F4B] shrink-0 mt-0.5" />
            <span>
              <strong>Geen directe betaling vereist:</strong> Je stuurt dit overzicht eerst naar ons via WhatsApp. Wij bevestigen het tijdstip. Betaling geschiedt pas ná het slijpen via Tikkie of factuur.
            </span>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              disabled={totalKnives === 0}
              className="w-full sm:flex-1 py-4 px-6 rounded-full bg-[#E87B5B] hover:bg-[#C95E3E] text-white font-extrabold text-base transition-all shadow-sm flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed min-h-[52px]"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>Verstuur bestelling via WhatsApp</span>
              <ArrowRight className="w-5 h-5 text-white" />
            </button>

            <button
              type="button"
              onClick={handleCopyMessage}
              className="w-full sm:w-auto py-3.5 px-5 rounded-full border border-[#d9e1d7] bg-white text-[#3B7F4B] text-xs font-semibold hover:bg-[#E8EFE8] transition-colors flex items-center justify-center gap-1.5 cursor-pointer min-h-[48px]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#3B7F4B]" />
                  <span>Tekst gekopieerd!</span>
                </>
              ) : (
                <span>Kopieer tekst</span>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
