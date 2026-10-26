import React, { useState } from 'react';
import {
  Plus,
  Minus,
  MessageCircle,
  Wrench,
  Check,
  AlertCircle,
  ChevronDown,
  Info,
  MapPin
} from 'lucide-react';
import {
  FREE_DELIVERY_THRESHOLD_CENTS,
  getDeliveryFeeCents,
  getDeliveryZone,
  isValidDutchPostcode,
  normalizeDutchPostcode,
} from '../data/delivery';
import { createWhatsAppUrl } from '../utils/contact';
import { formatEuroCents } from '../utils/format';
import { useOrderFunnel } from '../hooks/useOrderFunnel';
import { SLIJPMAAT_INFO } from '../data/siteData';

interface KnifeCategory {
  id: number;
  name: string;
  sizeDesc: string;
  basePrice: number; // in cents
  priceLabel: string;
  badge?: string;
}

const KNIFE_CATEGORIES: KnifeCategory[] = [
  {
    id: 0,
    name: 'Klein mes',
    sizeDesc: 'Korter dan 15 cm',
    basePrice: 650,
    priceLabel: '€6,50'
  },
  {
    id: 1,
    name: 'Normaal mes',
    sizeDesc: '15 tot 19,99 cm',
    basePrice: 850,
    priceLabel: '€8,50',
    badge: 'Meest gekozen'
  },
  {
    id: 2,
    name: 'Groot mes',
    sizeDesc: '20 tot en met 25 cm',
    basePrice: 1050,
    priceLabel: '€10,50'
  },
  {
    id: 3,
    name: 'Extra groot',
    sizeDesc: 'Langer dan 25 cm',
    basePrice: 0,
    priceLabel: 'Op aanvraag'
  }
];

const SELF_DROPOFF_ADDRESS = SLIJPMAAT_INFO.fullAddress;

export const ParticulierenCalculator: React.FC = () => {
  const funnel = useOrderFunnel('consumer');
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [isStudent, setIsStudent] = useState<boolean>(false);
  const [selfDropoff, setSelfDropoff] = useState<boolean>(false);
  const [postcode, setPostcode] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [specialRequest, setSpecialRequest] = useState<string>('');

  const [showMeasureHelp, setShowMeasureHelp] = useState<boolean>(false);
  const [showDamageHelp, setShowDamageHelp] = useState<boolean>(false);
  const [showSpecialRequest, setShowSpecialRequest] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const cleanPostcode = normalizeDutchPostcode(postcode);
  const hasValidPostcode = isValidDutchPostcode(postcode);

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
  const deliveryZone = hasValidPostcode ? getDeliveryZone(postcode) : 'outside';
  const isOutsideArea = !selfDropoff && hasValidPostcode && deliveryZone === 'outside';
  const deliveryFeeCents = selfDropoff
    ? 0
    : hasValidPostcode
      ? getDeliveryFeeCents(postcode, finalSharpeningCents, false)
      : null;
  const amountUntilFreeDeliveryCents = Math.max(0, FREE_DELIVERY_THRESHOLD_CENTS - finalSharpeningCents);

  // Format currency
  const updateCount = (idx: number, delta: number) => {
    funnel.select('knife_quantity');
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
      funnel.invalid('knives');
      document.getElementById('calculator-knives-heading')?.focus();
      return;
    }
    if (!selfDropoff) {
      if (!hasValidPostcode) {
        e.preventDefault();
        setErrorMsg('Vul een geldige postcode in, bijvoorbeeld 3513 AB.');
        funnel.invalid('postcode');
        document.getElementById('calc-postcode-input')?.focus();
        return;
      }
      if (!address.trim() || address.trim().length < 3) {
        e.preventDefault();
        setErrorMsg('Vul je straat en huisnummer in.');
        funnel.invalid('address');
        document.getElementById('calc-address-input')?.focus();
        return;
      }
    }
    if (!name.trim()) {
      e.preventDefault();
      setErrorMsg('Vul je voor- en achternaam in.');
      funnel.invalid('name');
      document.getElementById('calc-name-input')?.focus();
      return;
    }

    // Build the WhatsApp message
    let deliveryText = 'Postcode nodig';
    if (selfDropoff) {
      deliveryText = '€0,00 (zelf brengen & ophalen)';
    } else if (deliveryFeeCents === 0) {
      deliveryText = 'Gratis';
    } else if (deliveryFeeCents !== null) {
      deliveryText = formatEuroCents(deliveryFeeCents);
    } else if (isOutsideArea) {
      deliveryText = 'Haal-/brengmogelijkheid en prijs op aanvraag (buiten vast bezorggebied)';
    }

    let totalText = 'Op aanvraag';
    if (!hasExtraLarge && deliveryFeeCents !== null && !isOutsideArea) {
      totalText = formatEuroCents(finalSharpeningCents + deliveryFeeCents);
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
    } else {
      lines.push(`Afspraaklocatie: ${SELF_DROPOFF_ADDRESS}`);
    }

    lines.push('', `Aantal messen: ${totalKnives}`, `StudentenMaat: ${isStudent ? 'Ja' : 'Nee'}`);

    KNIFE_CATEGORIES.forEach((cat, idx) => {
      if (counts[idx] > 0) {
        const itemPrice = idx === 3
          ? 'Op aanvraag'
          : formatEuroCents(counts[idx] * cat.basePrice);
        lines.push(`${counts[idx]} × ${cat.name} (${cat.sizeDesc}): ${itemPrice}`);
      }
    });

    lines.push('', `${hasExtraLarge && standardSharpeningCents > 0 ? 'Bekend slijpwerk' : 'Messen slijpen'}: ${hasExtraLarge && standardSharpeningCents === 0 ? 'Op aanvraag' : formatEuroCents(standardSharpeningCents)}`);
    if (studentDiscountCents > 0) lines.push(`StudentenMaat voordeel: − ${formatEuroCents(studentDiscountCents)}`);
    if (hasExtraLarge) lines.push('Extra groot / ander slijpwerk: prijs op aanvraag, niet inbegrepen in bekend slijpwerk.');
    lines.push(
      `${selfDropoff ? 'Zelf brengen & ophalen' : 'Ophalen & bezorgen'}: ${deliveryText}`,
      `Totaal geschat: ${totalText}`,
      '(Eventuele reparaties of chips niet inbegrepen)'
    );

    if (notes.trim()) {
      lines.push('', `Opmerking: ${notes.trim()}`);
    }

    if (hasExtraLarge && specialRequest.trim()) {
      lines.push('', `Extra groot / ander slijpwerk: ${specialRequest.trim()}`);
    }

    lines.push(
      '',
      selfDropoff ? 'Wanneer kan ik mijn messen brengen?' : 'Wanneer kan mijn Maat langskomen?'
    );

    funnel.open('whatsapp');
    window.open(createWhatsAppUrl(lines.join('\n')), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full" onFocusCapture={funnel.start} onClickCapture={funnel.start}>
      <div className="grid grid-cols-1 items-start gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="rounded-[1.75rem] border border-[#d9e1d7] bg-white p-4 shadow-xs sm:p-7 lg:col-span-7">
          <section aria-labelledby="calculator-knives-heading">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E8EFE8] font-heading text-xs font-bold text-[#3B7F4B]">1</span>
                <h3 id="calculator-knives-heading" tabIndex={-1} className="font-heading text-xl font-bold text-[#3B7F4B] sm:text-2xl">Kies je messen</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowMeasureHelp(!showMeasureHelp)}
                aria-expanded={showMeasureHelp}
                aria-controls="calculator-measure-help"
                className="inline-flex min-h-10 items-center gap-1.5 rounded-full px-2 text-xs font-bold text-[#3B7F4B] hover:bg-[#E8EFE8]"
              >
                <Info className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">Hoe meet je?</span>
                <span className="sm:hidden">Meten</span>
              </button>
            </div>

            {showMeasureHelp && (
              <p id="calculator-measure-help" className="mt-3 rounded-xl bg-[#E8EFE8]/60 px-3 py-2.5 text-xs leading-relaxed text-[#203728]">
                Meet alleen het lemmet, recht vanaf het handvat tot de punt. Het handvat telt niet mee.
              </p>
            )}

            <div className="mt-3 divide-y divide-[#d9e1d7] border-y border-[#d9e1d7]">
              {KNIFE_CATEGORIES.slice(0, 3).map((cat, idx) => {
                const count = counts[idx];
                const currentPrice = formatEuroCents(isStudent ? 500 : cat.basePrice);
                return (
                  <div key={cat.id} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2.5 py-3 sm:gap-4 sm:py-4">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
                        <span className="whitespace-nowrap font-heading text-[13px] font-bold text-[#203728] sm:text-base">{cat.name}</span>
                        {cat.badge && (
                          <span className="whitespace-nowrap rounded-full bg-[#F9E4DE] px-1.5 py-0.5 text-[8px] font-bold tracking-normal text-[#C95E3E]">{cat.badge}</span>
                        )}
                      </div>
                      <p className="mt-0.5 text-[11px] text-[#657068] sm:text-xs">{cat.sizeDesc}</p>
                      <p className="mt-0.5 font-heading text-sm font-bold text-[#3B7F4B]">
                        {currentPrice}
                        {isStudent && <span className="ml-1 text-[10px] font-medium text-[#657068]">StudentenMaat</span>}
                      </p>
                    </div>

                    <div className="flex items-center overflow-hidden rounded-xl border border-[#d9e1d7] bg-[#FAFAF8]">
                      <button
                        type="button"
                        onClick={() => updateCount(idx, -1)}
                        disabled={count === 0}
                        aria-label={`Minder ${cat.name}`}
                        className="flex h-10 w-10 items-center justify-center text-[#3B7F4B] hover:bg-[#E8EFE8] disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <output aria-live="polite" className="w-7 text-center font-heading text-sm font-bold text-[#203728]">{count}</output>
                      <button
                        type="button"
                        onClick={() => updateCount(idx, 1)}
                        aria-label={`Meer ${cat.name}`}
                        className="flex h-10 w-10 items-center justify-center text-[#3B7F4B] hover:bg-[#E8EFE8]"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-3 rounded-xl border border-[#d9e1d7] bg-[#FAFAF8]">
              <button
                type="button"
                onClick={() => {
                  const willOpen = !showSpecialRequest;
                  setShowSpecialRequest(willOpen);
                }}
                aria-expanded={showSpecialRequest}
                aria-controls="calculator-special-request"
                className="flex min-h-12 w-full items-center justify-between gap-3 px-3.5 py-2.5 text-left"
              >
                <span>
                  <span className="block font-heading text-sm font-bold text-[#203728]">Langer dan 25 cm of iets anders?</span>
                  <span className="block text-[11px] text-[#657068]">Bijv. een bijl of extra groot mes</span>
                </span>
                <ChevronDown className={`h-4 w-4 shrink-0 text-[#3B7F4B] transition-transform ${showSpecialRequest ? 'rotate-180' : ''}`} />
              </button>
              {showSpecialRequest && (
                <div id="calculator-special-request" className="border-t border-[#d9e1d7] p-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold text-[#203728]">Aantal</span>
                    <div className="flex items-center overflow-hidden rounded-xl border border-[#d9e1d7] bg-white">
                      <button type="button" onClick={() => updateCount(3, -1)} disabled={counts[3] === 0} aria-label="Minder extra groot of ander slijpwerk" className="flex h-10 w-10 items-center justify-center text-[#3B7F4B] disabled:opacity-30"><Minus className="h-4 w-4" /></button>
                      <output aria-live="polite" className="w-7 text-center font-heading text-sm font-bold text-[#203728]">{counts[3]}</output>
                      <button type="button" onClick={() => updateCount(3, 1)} aria-label="Meer extra groot of ander slijpwerk" className="flex h-10 w-10 items-center justify-center text-[#3B7F4B]"><Plus className="h-4 w-4" /></button>
                    </div>
                  </div>
                  <label htmlFor="calculator-special-notes" className="mt-3 block text-xs font-semibold text-[#203728]">Wat wil je laten slijpen?</label>
                  <textarea id="calculator-special-notes" value={specialRequest} onChange={(e) => setSpecialRequest(e.target.value)} maxLength={500} rows={2} placeholder="Beschrijf wat je wilt laten slijpen." className="mt-1.5 w-full rounded-xl border border-[#b6c1b6] bg-white p-3 text-sm text-[#203728] placeholder-[#9ca3af] focus:border-[#3B7F4B] focus:outline-none focus:ring-1 focus:ring-[#3B7F4B]" />
                </div>
              )}
            </div>

            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <label className="flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-[#d9e1d7] bg-[#FAFAF8] px-3.5 py-2.5 hover:border-[#3B7F4B]/40">
                <input type="checkbox" checked={isStudent} onChange={(e) => { setIsStudent(e.target.checked); funnel.select('student_rate'); }} className="h-5 w-5 shrink-0 rounded accent-[#3B7F4B]" />
                <span className="font-heading text-sm font-bold text-[#203728]">Ik ben een StudentenMaat</span>
              </label>

              <div className="rounded-xl border border-[#d9e1d7] bg-[#FAFAF8]">
                <button type="button" onClick={() => setShowDamageHelp(!showDamageHelp)} aria-expanded={showDamageHelp} aria-controls="calculator-damage-details" className="flex min-h-12 w-full items-center justify-between gap-2 px-3.5 py-2.5 text-left text-sm font-bold text-[#203728]">
                  <span className="flex items-center gap-2"><Wrench aria-hidden="true" className="h-4 w-4 shrink-0 text-[#3B7F4B]" /><span>Schade of extra wensen?</span></span>
                  <ChevronDown className={`h-4 w-4 shrink-0 text-[#3B7F4B] transition-transform ${showDamageHelp ? 'rotate-180' : ''}`} />
                </button>
                {showDamageHelp && (
                  <div id="calculator-damage-details" className="border-t border-[#d9e1d7] p-3">
                    <p className="text-xs leading-relaxed text-[#657068]">Kleine chip +€2,50 · nieuw profiel +€8,50. Reparaties bespreken we vooraf.</p>
                    <label htmlFor="calculator-damage-notes" className="mt-2.5 block text-xs font-semibold text-[#203728]">Toelichting (optioneel)</label>
                    <textarea id="calculator-damage-notes" value={notes} onChange={(e) => setNotes(e.target.value)} maxLength={500} rows={2} placeholder="Bijv. 1 koksmes heeft een chip." className="mt-1.5 w-full rounded-xl border border-[#b6c1b6] bg-white p-3 text-sm text-[#203728] placeholder-[#9ca3af] focus:border-[#3B7F4B] focus:outline-none focus:ring-1 focus:ring-[#3B7F4B]" />
                  </div>
                )}
              </div>
            </div>

            <p className="mt-3 text-xs font-semibold text-[#657068]">We slijpen alleen gladde messen, dus geen kartelmessen.</p>
          </section>

          <section aria-labelledby="calculator-delivery-heading" className="mt-5 border-t border-[#d9e1d7] pt-5 sm:mt-7 sm:pt-7">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E8EFE8] font-heading text-xs font-bold text-[#3B7F4B]">2</span>
              <h3 id="calculator-delivery-heading" className="font-heading text-xl font-bold text-[#3B7F4B] sm:text-2xl">Ophalen of langskomen?</h3>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2.5">
              <button type="button" aria-pressed={!selfDropoff} onClick={() => { setSelfDropoff(false); setErrorMsg(''); funnel.select('service'); }} className={`min-h-[68px] rounded-2xl border-2 p-3 text-left ${!selfDropoff ? 'border-[#3B7F4B] bg-[#E8EFE8]/60' : 'border-[#d9e1d7] bg-white'}`}>
                <span className="flex items-start justify-between gap-1 font-heading text-sm font-bold text-[#203728]">Ophalen &amp; bezorgen{!selfDropoff && <Check className="h-4 w-4 shrink-0 text-[#3B7F4B]" />}</span>
                <span className="mt-1 block text-[10px] leading-snug text-[#657068] sm:text-xs">Gratis vanaf €35</span>
              </button>
              <button type="button" aria-pressed={selfDropoff} onClick={() => { setSelfDropoff(true); setErrorMsg(''); funnel.select('service'); }} className={`min-h-[68px] rounded-2xl border-2 p-3 text-left ${selfDropoff ? 'border-[#3B7F4B] bg-[#E8EFE8]/60' : 'border-[#d9e1d7] bg-white'}`}>
                <span className="flex items-start justify-between gap-1 font-heading text-sm font-bold text-[#203728]">Zelf langskomen{selfDropoff && <Check className="h-4 w-4 shrink-0 text-[#3B7F4B]" />}</span>
                <span className="mt-1 block text-[10px] leading-snug text-[#657068] sm:text-xs">Op afspraak · gratis</span>
              </button>
            </div>

            {!selfDropoff ? (
              <div className="mt-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label htmlFor="calc-postcode-input" className="mb-1 block text-xs font-bold text-[#203728]">Postcode</label>
                    <input id="calc-postcode-input" type="text" value={postcode} onChange={(e) => { setPostcode(e.target.value); setErrorMsg(''); }} maxLength={7} autoComplete="postal-code" placeholder="3513 AB" className="w-full rounded-xl border border-[#b6c1b6] bg-white px-3.5 py-2.5 text-sm font-semibold text-[#203728] placeholder-[#9ca3af] focus:border-[#3B7F4B] focus:outline-none focus:ring-1 focus:ring-[#3B7F4B]" />
                  </div>
                  <div>
                    <label htmlFor="calc-address-input" className="mb-1 block text-xs font-bold text-[#203728]">Straat en huisnummer</label>
                    <input id="calc-address-input" type="text" value={address} onChange={(e) => setAddress(e.target.value)} maxLength={100} autoComplete="street-address" placeholder="Oudegracht 120" className="w-full rounded-xl border border-[#b6c1b6] bg-white px-3.5 py-2.5 text-sm text-[#203728] placeholder-[#9ca3af] focus:border-[#3B7F4B] focus:outline-none focus:ring-1 focus:ring-[#3B7F4B]" />
                  </div>
                </div>

                <div aria-live="polite" className="mt-2.5 rounded-xl bg-[#FAFAF8] px-3 py-2.5 text-xs leading-relaxed text-[#203728]">
                  {!cleanPostcode || cleanPostcode.length < 4 ? (
                    <span className="text-[#657068]">Vul je postcode in voor het bezorgtarief.</span>
                  ) : !hasValidPostcode ? (
                    <span className="font-medium text-[#C95E3E]">Vul een geldige postcode in, bijvoorbeeld 3513 AB.</span>
                  ) : isOutsideArea ? (
                    <span className="font-medium text-[#C95E3E]">Buiten het vaste bezorggebied: mogelijkheid en prijs op aanvraag.</span>
                  ) : deliveryFeeCents === 0 ? (
                    <span className="flex items-center gap-1.5 font-bold text-[#3B7F4B]"><Check className="h-4 w-4" />Ophalen en terugbrengen is gratis.</span>
                  ) : (
                    <span><strong>{formatEuroCents(deliveryFeeCents!)}</strong> voor ophalen en terugbrengen. <span className="font-semibold text-[#3B7F4B]">Nog {formatEuroCents(amountUntilFreeDeliveryCents)} tot gratis bezorging.</span></span>
                  )}
                </div>
              </div>
            ) : (
              <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-[#E8EFE8]/60 px-3.5 py-3 text-sm text-[#203728]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
                <span><strong>Afspraaklocatie:</strong><br />{SELF_DROPOFF_ADDRESS}</span>
              </div>
            )}

            <div className="mt-3">
              <label htmlFor="calc-name-input" className="mb-1 block text-xs font-bold text-[#203728]">Voor- en achternaam</label>
              <input id="calc-name-input" type="text" value={name} onChange={(e) => setName(e.target.value)} maxLength={80} autoComplete="name" placeholder="Sophie de Vries" className="w-full rounded-xl border border-[#b6c1b6] bg-white px-3.5 py-2.5 text-sm text-[#203728] placeholder-[#9ca3af] focus:border-[#3B7F4B] focus:outline-none focus:ring-1 focus:ring-[#3B7F4B]" />
            </div>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 lg:col-span-5" aria-labelledby="calculator-summary-heading">
          <div className="overflow-hidden rounded-[1.75rem] border border-[#d9e1d7] bg-[#FAFAF8] p-4 shadow-sm sm:p-6 lg:p-7">
            <div className="flex items-center justify-between border-b border-[#d9e1d7] pb-3">
              <h3 id="calculator-summary-heading" className="font-heading text-xl font-bold text-[#3B7F4B]">Jouw slijpbeurt</h3>
              <span className="rounded-full bg-[#E8EFE8] px-2.5 py-1 text-xs font-bold text-[#3B7F4B]">{totalKnives} {totalKnives === 1 ? 'mes' : 'messen'}</span>
            </div>

            <div className="space-y-2 border-b border-[#d9e1d7] py-4 text-sm">
              {totalKnives === 0 ? (
                <p className="text-xs italic text-[#9ca3af]">Kies minimaal één mes om je prijs te zien.</p>
              ) : KNIFE_CATEGORIES.map((cat, idx) => {
                if (counts[idx] === 0) return null;
                const itemPrice = idx === 3 ? 'Op aanvraag' : formatEuroCents(counts[idx] * cat.basePrice);
                return (
                  <div key={cat.id} className="flex items-center justify-between gap-3 text-xs sm:text-sm">
                    <span className="font-medium text-[#203728]">{counts[idx]} × {cat.name}</span>
                    <span className="font-heading font-semibold text-[#3B7F4B]">{itemPrice}</span>
                  </div>
                );
              })}
            </div>

            <div className="space-y-2.5 py-4 text-xs sm:text-sm">
              <div className="flex items-center justify-between gap-3"><span className="text-[#657068]">{hasExtraLarge && standardSharpeningCents > 0 ? 'Bekend slijpwerk' : 'Messen slijpen'}</span><span className="font-heading font-bold text-[#203728]">{hasExtraLarge && standardSharpeningCents === 0 ? 'Op aanvraag' : formatEuroCents(standardSharpeningCents)}</span></div>
              {isStudent && studentDiscountCents > 0 && (
                <div className="flex items-center justify-between gap-3 text-[#C95E3E]"><span>StudentenMaat voordeel</span><span className="font-heading font-bold">− {formatEuroCents(studentDiscountCents)}</span></div>
              )}
              <div className="flex items-center justify-between gap-3"><span className="text-[#657068]">{selfDropoff ? 'Zelf langskomen' : 'Ophalen & bezorgen'}</span><span className="font-heading font-bold text-[#203728]">{selfDropoff ? 'Gratis' : deliveryFeeCents === null ? (isOutsideArea ? 'Op aanvraag' : 'Postcode nodig') : deliveryFeeCents === 0 ? 'Gratis' : formatEuroCents(deliveryFeeCents)}</span></div>
            </div>

            <div className="rounded-2xl border border-[#d9e1d7] bg-white p-4">
              <span className="block text-xs font-semibold text-[#657068]">{hasExtraLarge || isOutsideArea ? 'Prijs op aanvraag' : selfDropoff ? 'Totaal slijpbeurt' : deliveryFeeCents === null ? 'Totaal excl. bezorging' : 'Totaal incl. bezorging'}</span>
              <strong className="font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">{hasExtraLarge || isOutsideArea ? 'Op aanvraag' : formatEuroCents(finalSharpeningCents + (deliveryFeeCents || 0))}</strong>
              {hasExtraLarge ? <p className="mt-2 text-xs leading-relaxed text-[#657068]">Afwijkend slijpwerk wordt apart geprijsd. Bekende regelprijzen blijven hierboven zichtbaar.</p> : null}
              <p className="mt-2 text-xs leading-relaxed text-[#657068]">Eventuele reparaties of chips niet inbegrepen. We bespreken de kosten vooraf.</p>
            </div>

            {errorMsg && (
              <div role="alert" className="mt-3 flex items-center gap-2 rounded-xl bg-[#FFF3F1] p-3 text-xs font-semibold text-[#8B2921]"><AlertCircle className="h-4 w-4 shrink-0" /><span>{errorMsg}</span></div>
            )}

            <button type="button" onClick={handleOrderClick} className="group mt-4 inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-full bg-[#E87B5B] px-4 py-3.5 font-heading text-sm font-bold text-white shadow-md transition hover:bg-[#C95E3E] hover:shadow-lg active:scale-[0.98] sm:text-base">
              <MessageCircle className="h-5 w-5 shrink-0 transition-transform group-hover:scale-110" />
              <span>Bestellen via WhatsApp</span>
            </button>
            <p className="mt-2.5 text-center text-xs text-[#657068]">Je verstuurt het bericht zelf via WhatsApp. We reageren binnen twee uur.</p>
            <p className="mt-2.5 text-center text-[11px] leading-relaxed text-[#9ca3af]">Door te bestellen ga je akkoord met onze <a href="/algemene-voorwaarden/" className="underline hover:text-[#3B7F4B]">algemene voorwaarden</a> en <a href="/privacyverklaring/" className="underline hover:text-[#3B7F4B]">privacyverklaring</a>.</p>
          </div>
        </aside>
      </div>
    </div>
  );
};
