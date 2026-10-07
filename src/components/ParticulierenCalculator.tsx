import React, { useState, useId } from 'react';
import {
  Plus,
  Minus,
  MessageCircle,
  HelpCircle,
  Sparkles,
  MapPin,
  Check,
  AlertCircle,
  ChevronDown,
  Info
} from 'lucide-react';
import { SLIJPMAAT_INFO } from '../data/siteData';

interface KnifeCategory {
  id: number;
  name: string;
  sizeDesc: string;
  basePrice: number; // in cents
  priceLabel: string;
  examples: string;
  badge?: string;
}

const KNIFE_CATEGORIES: KnifeCategory[] = [
  {
    id: 0,
    name: 'Klein mes',
    sizeDesc: 'Korter dan 15 cm',
    basePrice: 650,
    priceLabel: '€6,50',
    examples: 'Schilmesjes, officemes, petty'
  },
  {
    id: 1,
    name: 'Normaal mes',
    sizeDesc: '15 tot 19,99 cm',
    basePrice: 850,
    priceLabel: '€8,50',
    examples: 'Standaard koksmes, Santoku, allrounder',
    badge: 'Meest gekozen'
  },
  {
    id: 2,
    name: 'Groot mes',
    sizeDesc: '20 tot en met 25 cm',
    basePrice: 1050,
    priceLabel: '€10,50',
    examples: 'Groot koksmes, vleesmes, Gyuto'
  },
  {
    id: 3,
    name: 'Extra groot',
    sizeDesc: 'Langer dan 25 cm',
    basePrice: 0,
    priceLabel: 'Op aanvraag',
    examples: 'Hakbijlen, grote slagersmessen'
  }
];

// Postcode zones matching Slijpmaat logistics
const ZONE_FREE = ['3513', '3514', '3515', '3552', '3561', '3571'];
const ZONE_STANDARD = [
  '3511', '3512', '3521', '3531', '3532', '3533', '3534',
  '3551', '3553', '3554', '3562', '3563', '3564', '3566',
  '3572', '3573', '3581', '3582', '3583'
];
const ZONE_OUTER = [
  '3522', '3523', '3524', '3525', '3526', '3527', '3528',
  '3541', '3542', '3543', '3544', '3545', '3555', '3565',
  '3584', '3585'
];

export const ParticulierenCalculator: React.FC = () => {
  const [counts, setCounts] = useState<number[]>([1, 2, 0, 0]); // start with 3 typical knives for instant preview
  const [isStudent, setIsStudent] = useState<boolean>(false);
  const [selfDropoff, setSelfDropoff] = useState<boolean>(false);
  const [postcode, setPostcode] = useState<string>('3513');
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const [showMeasureHelp, setShowMeasureHelp] = useState<boolean>(false);
  const [showDamageHelp, setShowDamageHelp] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const cleanPostcode = postcode.toUpperCase().replace(/\s/g, '');
  const prefix4 = cleanPostcode.slice(0, 4);
  const isValidDutchPostcode = /^[1-9][0-9]{3}([A-Z]{2})?$/.test(cleanPostcode);

  const totalKnives = counts.reduce((sum, c) => sum + c, 0);
  const hasExtraLarge = counts[3] > 0;

  // Sharpening calculation
  const standardSharpeningCents = KNIFE_CATEGORIES.reduce((total, cat, idx) => {
    return total + counts[idx] * cat.basePrice;
  }, 0);

  // Student discount (€5,00 for small, normal, large)
  const studentDiscountCents = isStudent
    ? KNIFE_CATEGORIES.slice(0, 3).reduce((total, cat, idx) => {
        const discountPerKnife = Math.max(0, cat.basePrice - 500);
        return total + counts[idx] * discountPerKnife;
      }, 0)
    : 0;

  const finalSharpeningCents = standardSharpeningCents - studentDiscountCents;

  // Delivery fee calculation
  let deliveryFeeCents: number | null = null;
  let isOutsideArea = false;

  if (selfDropoff) {
    deliveryFeeCents = 0;
  } else if (isValidDutchPostcode) {
    if (ZONE_FREE.includes(prefix4)) {
      deliveryFeeCents = 0;
    } else if (ZONE_STANDARD.includes(prefix4)) {
      deliveryFeeCents = totalKnives >= 3 ? 0 : 450;
    } else if (ZONE_OUTER.includes(prefix4)) {
      deliveryFeeCents = totalKnives >= 3 ? 0 : 525;
    } else {
      isOutsideArea = true;
      deliveryFeeCents = null;
    }
  }

  // Format currency
  const formatEuro = (cents: number) => {
    return '€' + (cents / 100).toFixed(2).replace('.', ',');
  };

  const updateCount = (idx: number, delta: number) => {
    setCounts((prev) => {
      const next = [...prev];
      next[idx] = Math.max(0, Math.min(99, next[idx] + delta));
      return next;
    });
    setErrorMsg('');
  };

  const handleOrderClick = (e: React.MouseEvent) => {
    if (totalKnives < 1) {
      e.preventDefault();
      setErrorMsg('Kies minimaal 1 mes om te laten slijpen.');
      return;
    }
    if (!name.trim()) {
      e.preventDefault();
      setErrorMsg('Vul je voor- en achternaam in.');
      document.getElementById('calc-name-input')?.focus();
      return;
    }
    if (!selfDropoff) {
      if (!cleanPostcode || cleanPostcode.length < 4) {
        e.preventDefault();
        setErrorMsg('Vul je postcode in (minimaal 4 cijfers).');
        document.getElementById('calc-postcode-input')?.focus();
        return;
      }
      if (!address.trim() || address.trim().length < 3) {
        e.preventDefault();
        setErrorMsg('Vul je straat en huisnummer in.');
        document.getElementById('calc-address-input')?.focus();
        return;
      }
    }

    // Build the WhatsApp message
    let deliveryText = 'Postcode nodig';
    if (selfDropoff) {
      deliveryText = '€0,00 (zelf brengen & ophalen)';
    } else if (deliveryFeeCents === 0) {
      deliveryText = 'Gratis';
    } else if (deliveryFeeCents !== null) {
      deliveryText = formatEuro(deliveryFeeCents);
    } else if (isOutsideArea) {
      deliveryText = 'Op aanvraag (buiten bezorggebied)';
    }

    let totalText = 'Op aanvraag';
    if (!hasExtraLarge && deliveryFeeCents !== null && !isOutsideArea) {
      totalText = formatEuro(finalSharpeningCents + deliveryFeeCents);
    }

    const lines = [
      'Hoi Slijpmaat!',
      '',
      'Ik wil graag een slijpbeurt plannen voor mijn keukenmessen:',
      '',
      `Naam: ${name.trim()}`,
      `Service: ${selfDropoff ? 'Ik kom zelf langs op afspraak' : 'Ophalen en bezorgen aan huis'}`
    ];

    if (!selfDropoff) {
      lines.push(`Adres: ${address.trim()}`, `Postcode: ${cleanPostcode}`);
    }

    lines.push('', `Aantal messen: ${totalKnives}`, `StudentenMaat: ${isStudent ? 'Ja' : 'Nee'}`);

    KNIFE_CATEGORIES.forEach((cat, idx) => {
      if (counts[idx] > 0) {
        const itemPrice = idx === 3
          ? 'Op aanvraag'
          : formatEuro(counts[idx] * (isStudent ? 500 : cat.basePrice));
        lines.push(`${counts[idx]} × ${cat.name} (${cat.sizeDesc}): ${itemPrice}`);
      }
    });

    lines.push(
      '',
      `Messen slijpen: ${hasExtraLarge ? 'Op aanvraag' : formatEuro(finalSharpeningCents)}`,
      `Ophalen & bezorgen: ${deliveryText}`,
      `Totaal geschat: ${totalText}`,
      '(Eventuele reparaties of chips niet inbegrepen)'
    );

    if (notes.trim()) {
      lines.push('', `Opmerking: ${notes.trim()}`);
    }

    lines.push(
      '',
      selfDropoff ? 'Wanneer kan ik mijn messen brengen?' : 'Wanneer kan mijn Maat langskomen?'
    );

    const waUrl = `https://wa.me/31682074967?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-start">
        {/* Left Column: Form & Stepper */}
        <div className="lg:col-span-7 space-y-8">
          {/* STEP 1: Kies je messen */}
          <div className="rounded-[2rem] border border-[#d9e1d7] bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8EFE8] font-heading text-sm font-bold text-[#3B7F4B]">
                1
              </span>
              <h3 className="font-heading text-xl font-bold text-[#3B7F4B] sm:text-2xl">
                Kies je messen
              </h3>
            </div>
            <p className="mt-2 text-sm text-[#657068]">
              Selecteer het aantal per formaat. De prijs is per mes, handmatig geslepen op waterstenen.
            </p>

            {/* Knife measurement guidance toggle */}
            <div className="mt-4 rounded-xl border border-[#d9e1d7]/70 bg-[#FAFAF8] p-3.5">
              <button
                type="button"
                onClick={() => setShowMeasureHelp(!showMeasureHelp)}
                className="flex w-full items-center justify-between text-left text-xs font-bold text-[#3B7F4B] hover:text-[#2d633a] cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Info className="h-4 w-4 text-[#3B7F4B]" />
                  <span>Hoe meet je jouw messen?</span>
                </span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    showMeasureHelp ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {showMeasureHelp && (
                <div className="mt-2.5 pt-2.5 border-t border-[#d9e1d7]/60 text-xs leading-relaxed text-[#657068]">
                  Meet uitsluitend het <strong>lemmet</strong> (het metalen snijgedeelte) recht vanaf de krop/het handvat tot aan de punt.
                  Het handvat telt niet mee. Vanaf 20 cm lemmet kies je <em>Groot mes</em>.
                </div>
              )}
            </div>

            {/* Knife list */}
            <div className="mt-5 divide-y divide-[#d9e1d7]/60">
              {KNIFE_CATEGORIES.map((cat, idx) => {
                const count = counts[idx];
                const currentPrice = idx === 3
                  ? 'Op aanvraag'
                  : formatEuro(isStudent ? 500 : cat.basePrice);

                return (
                  <div
                    key={cat.id}
                    className="py-4 first:pt-2 last:pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-heading text-base font-bold text-[#203728]">
                          {cat.name}
                        </span>
                        {cat.badge && (
                          <span className="rounded-full bg-[#E87B5B]/15 px-2.5 py-0.5 text-[10px] font-bold text-[#C95E3E] uppercase tracking-wider">
                            {cat.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#657068] mt-0.5">
                        {cat.sizeDesc} &bull; <span className="italic">{cat.examples}</span>
                      </p>
                      <div className="mt-1 font-heading text-base font-bold text-[#3B7F4B]">
                        {currentPrice}
                        {isStudent && idx < 3 && (
                          <span className="ml-1.5 text-xs font-normal text-[#C95E3E]">
                            (Studentenprijs)
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Stepper buttons */}
                    <div className="flex items-center gap-3 self-end sm:self-center">
                      <div className="flex items-center rounded-xl border border-[#d9e1d7] bg-[#FAFAF8] shadow-2xs">
                        <button
                          type="button"
                          onClick={() => updateCount(idx, -1)}
                          disabled={count === 0}
                          aria-label={`Minder ${cat.name}`}
                          className="flex h-11 w-11 items-center justify-center text-[#3B7F4B] transition-colors hover:bg-[#E8EFE8] disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer disabled:cursor-not-allowed rounded-l-xl"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-10 text-center font-heading text-base font-bold text-[#203728]">
                          {count}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateCount(idx, 1)}
                          aria-label={`Meer ${cat.name}`}
                          className="flex h-11 w-11 items-center justify-center text-[#3B7F4B] transition-colors hover:bg-[#E8EFE8] cursor-pointer rounded-r-xl"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Student toggle */}
            <div className="mt-6 rounded-2xl border border-[#d9e1d7]/70 bg-[#FAFBF8] p-4 transition-all duration-200 hover:border-[#3B7F4B]/40">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isStudent}
                  onChange={(e) => setIsStudent(e.target.checked)}
                  className="mt-0.5 h-5 w-5 rounded border-[#d9e1d7] text-[#3B7F4B] accent-[#3B7F4B] focus:ring-[#3B7F4B]"
                />
                <div>
                  <span className="font-heading text-sm font-bold text-[#203728]">
                    Ik ben een StudentenMaat (&euro;5,00 per mes)
                  </span>
                  <p className="text-xs text-[#657068] mt-0.5">
                    Geldig voor kleine, normale en grote messen op vertoon van je geldige collegekaart bij afgifte.
                  </p>
                </div>
              </label>
            </div>

            {/* Damage & chips collapsible */}
            <div className="mt-4 rounded-xl border border-[#d9e1d7]/70 bg-[#FAFAF8] p-3.5">
              <button
                type="button"
                onClick={() => setShowDamageHelp(!showDamageHelp)}
                aria-expanded={showDamageHelp}
                aria-controls="calculator-damage-details"
                className="flex w-full items-center justify-between text-left text-xs font-bold text-[#3B7F4B] hover:text-[#2d633a] cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#3B7F4B]" />
                  <span>Beschadigingen of extra wensen? (chips, reparaties)</span>
                </span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    showDamageHelp ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {showDamageHelp && (
                <div id="calculator-damage-details" className="mt-3 pt-3 border-t border-[#d9e1d7]/60 space-y-2 text-xs text-[#657068]">
                  <p>
                    Chips &amp; hapjes in de snede (+&euro;2,50) of een gebroken punt (+&euro;8,50) herstellen we vakkundig.
                    We bespreken eventuele reparaties altijd eerst even vooraf.
                  </p>
                  <div>
                    <label htmlFor="calculator-damage-notes" className="block text-xs font-semibold text-[#203728] mt-2 mb-1">
                      Eventuele opmerking over beschadigingen (optioneel):
                    </label>
                    <textarea
                      id="calculator-damage-notes"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      maxLength={500}
                      placeholder="Bijv. 1 koksmes heeft een klein hapje in de snede."
                      className="w-full rounded-xl border border-[#b6c1b6] bg-white p-3 text-xs text-[#203728] placeholder-[#9ca3af] focus:border-[#3B7F4B] focus:outline-none focus:ring-1 focus:ring-[#3B7F4B]"
                      rows={2}
                    />
                  </div>
                </div>
              )}
            </div>

            <p className="mt-4 text-xs font-bold text-[#3B7F4B]">
              &bull; Alleen gladde messen. We slijpen geen kartelmessen of kartelbroodmessen.
            </p>
          </div>

          {/* STEP 2: Ophalen of Langskomen? */}
          <div className="rounded-[2rem] border border-[#d9e1d7] bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8EFE8] font-heading text-sm font-bold text-[#3B7F4B]">
                2
              </span>
              <h3 className="font-heading text-xl font-bold text-[#3B7F4B] sm:text-2xl">
                Ophalen of langskomen?
              </h3>
            </div>
            <p className="mt-2 text-sm text-[#657068]">
              Vanaf 3 messen gratis ophalen én thuisbezorgen binnen ons bezorggebied in Utrecht.
            </p>

            {/* Service Choice */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSelfDropoff(false)}
                className={`flex flex-col text-left p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                  !selfDropoff
                    ? 'border-[#3B7F4B] bg-[#E8EFE8]/30 shadow-2xs'
                    : 'border-[#d9e1d7] bg-[#FAFAF8] hover:border-[#3B7F4B]/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading text-sm font-bold text-[#203728]">
                    Ophalen en bezorgen
                  </span>
                  {!selfDropoff && <Check className="h-4 w-4 text-[#3B7F4B]" />}
                </div>
                <span className="text-xs text-[#657068] mt-1">
                  Aan huis in Utrecht. Gratis vanaf 3 messen.
                </span>
              </button>

              <button
                type="button"
                onClick={() => setSelfDropoff(true)}
                className={`flex flex-col text-left p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                  selfDropoff
                    ? 'border-[#3B7F4B] bg-[#E8EFE8]/30 shadow-2xs'
                    : 'border-[#d9e1d7] bg-[#FAFAF8] hover:border-[#3B7F4B]/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading text-sm font-bold text-[#203728]">
                    Ik kom zelf langs
                  </span>
                  {selfDropoff && <Check className="h-4 w-4 text-[#3B7F4B]" />}
                </div>
                <span className="text-xs text-[#657068] mt-1">
                  Op afspraak in Utrecht. Geen bezorgkosten.
                </span>
              </button>
            </div>

            {/* Delivery address & Postcode if Ophalen is selected */}
            {!selfDropoff && (
              <div className="mt-6 space-y-4 pt-4 border-t border-[#d9e1d7]/60">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="calc-postcode-input"
                      className="block text-xs font-bold text-[#203728] uppercase tracking-wider mb-1"
                    >
                      Postcode
                    </label>
                    <input
                      id="calc-postcode-input"
                      type="text"
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value)}
                      maxLength={7}
                      placeholder="Bijv. 3513 AB"
                      className="w-full rounded-xl border border-[#b6c1b6] bg-white px-3.5 py-2.5 text-sm font-semibold text-[#203728] placeholder-[#9ca3af] focus:border-[#3B7F4B] focus:outline-none focus:ring-1 focus:ring-[#3B7F4B]"
                    />
                    <p className="mt-1 text-[11px] text-[#657068]">
                      4 cijfers zijn genoeg om de bezorgkosten te zien.
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="calc-address-input"
                      className="block text-xs font-bold text-[#203728] uppercase tracking-wider mb-1"
                    >
                      Straat en huisnummer
                    </label>
                    <input
                      id="calc-address-input"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      maxLength={100}
                      placeholder="Bijv. Oudegracht 120"
                      className="w-full rounded-xl border border-[#b6c1b6] bg-white px-3.5 py-2.5 text-sm text-[#203728] placeholder-[#9ca3af] focus:border-[#3B7F4B] focus:outline-none focus:ring-1 focus:ring-[#3B7F4B]"
                    />
                  </div>
                </div>

                {/* Helpful status alert for postcode */}
                <div className="rounded-xl border border-[#d9e1d7] bg-[#FAFAF8] p-3 text-xs leading-relaxed text-[#203728]">
                  {!cleanPostcode || cleanPostcode.length < 4 ? (
                    <span className="text-[#657068]">
                      Vul je postcode in om te zien of je in ons gratis bezorggebied valt.
                    </span>
                  ) : isOutsideArea ? (
                    <span className="text-[#C95E3E] font-medium">
                      Buiten ons standaard bezorggebied in Utrecht. Mogelijkheden &amp; prijs stemmen we graag met je af!
                    </span>
                  ) : deliveryFeeCents === 0 ? (
                    <span className="text-[#3B7F4B] font-bold flex items-center gap-1.5">
                      <Check className="h-4 w-4" />
                      Ophalen én terugbrengen is gratis voor jouw adres!
                    </span>
                  ) : (
                    <span className="text-[#203728]">
                      <strong>{formatEuro(deliveryFeeCents!)}</strong> voor ophalen én terugbrengen.{' '}
                      <span className="text-[#3B7F4B] font-semibold">
                        Voeg nog {3 - totalKnives} {3 - totalKnives === 1 ? 'mes' : 'messen'} toe voor GRATIS bezorging!
                      </span>
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Name Input */}
            <div className="mt-5 pt-4 border-t border-[#d9e1d7]/60">
              <label
                htmlFor="calc-name-input"
                className="block text-xs font-bold text-[#203728] uppercase tracking-wider mb-1"
              >
                Jouw naam (Voor- en achternaam)
              </label>
              <input
                id="calc-name-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={80}
                placeholder="Bijv. Sophie de Vries"
                className="w-full rounded-xl border border-[#b6c1b6] bg-white px-3.5 py-2.5 text-sm text-[#203728] placeholder-[#9ca3af] focus:border-[#3B7F4B] focus:outline-none focus:ring-1 focus:ring-[#3B7F4B]"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Summary & Direct WhatsApp Order */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="overflow-hidden rounded-[2.25rem] border border-[#d9e1d7] bg-[#FAFAF8] p-5 sm:p-7 lg:p-8 shadow-md">
            <div className="flex items-center justify-between border-b border-[#d9e1d7]/70 pb-4">
              <h3 className="font-heading text-xl font-bold text-[#3B7F4B]">
                Jouw slijpbeurt
              </h3>
              <span className="rounded-full bg-[#E8EFE8] px-3 py-1 text-xs font-bold text-[#3B7F4B]">
                {totalKnives} {totalKnives === 1 ? 'mes' : 'messen'}
              </span>
            </div>

            {/* Selected knives list */}
            <div className="my-5 space-y-2 border-b border-[#d9e1d7]/70 pb-5 text-sm text-[#657068]">
              {totalKnives === 0 ? (
                <p className="italic text-[#9ca3af]">Kies links minimaal 1 mes om te beginnen.</p>
              ) : (
                KNIFE_CATEGORIES.map((cat, idx) => {
                  if (counts[idx] === 0) return null;
                  const itemPrice = idx === 3
                    ? 'Op aanvraag'
                    : formatEuro(counts[idx] * (isStudent ? 500 : cat.basePrice));
                  return (
                    <div key={cat.id} className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-[#203728] font-medium">
                        {counts[idx]} &times; {cat.name}
                      </span>
                      <span className="font-heading font-semibold text-[#3B7F4B]">
                        {itemPrice}
                      </span>
                    </div>
                  );
                })
              )}
            </div>

            {/* Breakdown costs */}
            <div className="space-y-2.5 text-xs sm:text-sm text-[#203728]">
              <div className="flex justify-between items-center">
                <span className="text-[#657068]">Messen slijpen:</span>
                <span className="font-heading font-bold">
                  {hasExtraLarge ? 'Op aanvraag' : formatEuro(standardSharpeningCents)}
                </span>
              </div>

              {isStudent && studentDiscountCents > 0 && (
                <div className="flex justify-between items-center text-[#C95E3E]">
                  <span>StudentenMaat voordeel:</span>
                  <span className="font-heading font-bold">
                    &minus; {formatEuro(studentDiscountCents)}
                  </span>
                </div>
              )}

              <div className="flex justify-between items-center">
                <span className="text-[#657068]">
                  {selfDropoff ? 'Zelf langsbrengen:' : 'Ophalen & bezorgen:'}
                </span>
                <span className="font-heading font-bold">
                  {selfDropoff
                    ? 'Gratis'
                    : deliveryFeeCents === null
                    ? isOutsideArea
                      ? 'Op aanvraag'
                      : 'Postcode nodig'
                    : deliveryFeeCents === 0
                    ? 'Gratis'
                    : formatEuro(deliveryFeeCents)}
                </span>
              </div>
            </div>

            {/* Total box */}
            <div className="mt-6 rounded-2xl bg-white p-4 sm:p-5 border border-[#d9e1d7]/80 shadow-2xs">
              <div className="flex items-baseline justify-between">
                <div>
                  <small className="block text-xs font-semibold text-[#657068]">
                    {hasExtraLarge || isOutsideArea
                      ? 'Prijs op aanvraag'
                      : deliveryFeeCents === null
                      ? 'Totaal excl. bezorging'
                      : 'Totaal incl. bezorging'}
                  </small>
                  <strong className="font-heading text-3xl sm:text-4xl font-bold text-[#3B7F4B]">
                    {hasExtraLarge || isOutsideArea
                      ? 'Op aanvraag'
                      : formatEuro(finalSharpeningCents + (deliveryFeeCents || 0))}
                  </strong>
                </div>
              </div>
              <p className="mt-2 text-[11px] text-[#657068] leading-tight">
                {totalKnives > 0
                  ? 'Je ziet hier de berekende prijs. Eventuele reparaties bespreken we altijd vooraf.'
                  : 'Kies hiernaast je messen om direct de prijs te zien.'}
              </p>
            </div>

            {/* Error message */}
            {errorMsg && (
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-[#FFF3F1] p-3 text-xs font-semibold text-[#8B2921]">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* WhatsApp CTA Button - Geoptimaliseerd voor mobile: geen rare regelafbreking */}
            <button
              type="button"
              onClick={handleOrderClick}
              className="mt-6 group inline-flex w-full min-h-[52px] sm:min-h-[56px] items-center justify-center gap-2.5 rounded-full bg-[#E87B5B] px-4 py-3.5 sm:px-6 sm:py-4 font-heading text-sm sm:text-base font-bold text-white shadow-md transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-lg active:scale-[0.98] cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:scale-110" />
              <span>Bestellen via WhatsApp</span>
            </button>

            <p className="mt-3 text-center text-xs text-[#657068]">
              Je verstuurt het bericht zelf via WhatsApp. We reageren snel!
            </p>

            <p className="mt-3 text-center text-[11px] text-[#9ca3af]">
              Door te bestellen ga je akkoord met onze{' '}
              <a href="#algemene-voorwaarden" className="underline hover:text-[#3B7F4B]">
                algemene voorwaarden
              </a>{' '}
              en{' '}
              <a href="#privacy" className="underline hover:text-[#3B7F4B]">
                privacyverklaring
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
