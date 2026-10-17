import React, { useState } from 'react';
import {
  Building2,
  ChefHat,
  Phone,
  Truck,
  Calendar,
  Check,
  MessageCircle,
  AlertCircle,
  UtensilsCrossed,
  ChevronDown,
  Plus,
  Minus,
  MapPin,
  ReceiptText,
  Mail
} from 'lucide-react';
import {
  getDeliveryFeeCents,
  getDeliveryZone,
  isValidDutchPostcode,
  normalizeDutchPostcode,
} from '../data/delivery';
import { SLIJPMAAT_INFO } from '../data/siteData';

type ServiceType = 'bezorging' | 'langskomen';

const ESTIMATE_OPTIONS = [
  { id: '0-10', label: '0 tot 10 messen', desc: 'Kleine brigade of proefset' },
  { id: '10-20', label: '10 tot 20 messen', desc: 'Meest gekozen voor restaurants', badge: 'Meest gekozen' },
  { id: '20-40', label: '20 tot 40 messen', desc: 'Volledige keukenset of team' },
  { id: '40+', label: '40+ messen', desc: 'Grote zakelijke aanvraag of catering' },
];

interface KnifeRow {
  name: string;
  sizeDesc: string;
  priceCents: number;
  priceLabel: string;
}

const KNIFE_ROWS: KnifeRow[] = [
  { name: 'Klein mes', sizeDesc: 'Korter dan 15 cm', priceCents: 650, priceLabel: '€6,50 (incl. btw)' },
  { name: 'Normaal mes', sizeDesc: '15 tot 19,99 cm', priceCents: 850, priceLabel: '€8,50 (incl. btw)' },
  { name: 'Groot mes', sizeDesc: '20 tot en met 25 cm', priceCents: 1050, priceLabel: '€10,50 (incl. btw)' },
  { name: 'Extra groot mes', sizeDesc: 'Langer dan 25 cm', priceCents: 0, priceLabel: 'Op aanvraag' },
];

export const ZakelijkFormulier: React.FC = () => {
  const [restaurantName, setRestaurantName] = useState<string>('');
  const [contactPerson, setContactPerson] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [selectedEstimate, setSelectedEstimate] = useState<string>('10 tot 20 messen');
  const [serviceType, setServiceType] = useState<ServiceType>('bezorging');
  const [postcode, setPostcode] = useState<string>('3513');
  const [address, setAddress] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [showGranularKnives, setShowGranularKnives] = useState<boolean>(false);
  const [knifeCounts, setKnifeCounts] = useState<number[]>([0, 0, 0, 0]);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const cleanPostcode = normalizeDutchPostcode(postcode);
  const hasValidPostcode = isValidDutchPostcode(postcode);
  const deliveryZone = hasValidPostcode ? getDeliveryZone(postcode) : 'outside';
  const isOutsideArea = hasValidPostcode && deliveryZone === 'outside';

  const granularTotalKnives = knifeCounts.reduce((sum, n) => sum + n, 0);
  const isGranularActive = granularTotalKnives > 0;

  // Calculate estimated total if granular counts are filled
  const granularSharpeningCents = KNIFE_ROWS.reduce((total, row, idx) => {
    return total + knifeCounts[idx] * row.priceCents;
  }, 0);

  // Delivery fee estimation
  const deliveryFeeCents = serviceType === 'langskomen'
    ? 0
    : hasValidPostcode
      ? getDeliveryFeeCents(postcode, granularSharpeningCents || 5000, false)
      : null;

  const updateKnifeCount = (index: number, delta: number) => {
    setKnifeCounts((prev) => {
      const next = [...prev];
      next[index] = Math.max(0, Math.min(99, next[index] + delta));
      return next;
    });
    setErrorMsg('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!restaurantName.trim()) {
      setErrorMsg('Vul de naam van jouw restaurant of zaak in.');
      document.getElementById('zakelijk-restaurant')?.focus();
      return;
    }
    if (!contactPerson.trim()) {
      setErrorMsg('Vul de naam van de contactpersoon in.');
      document.getElementById('zakelijk-contact')?.focus();
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('Vul een telefoonnummer in waarop we jullie kunnen bereiken.');
      document.getElementById('zakelijk-phone')?.focus();
      return;
    }

    if (serviceType === 'bezorging') {
      if (!hasValidPostcode) {
        setErrorMsg('Vul een geldige Utrechtse postcode in (bijv. 3513 AB).');
        document.getElementById('zakelijk-postcode')?.focus();
        return;
      }
    }

    // Build the WhatsApp message
    const messageLines = [
      'Hoi Teun en Mike (Slijpmaat),',
      '',
      'Wij willen graag een zakelijke aanvraag & offerte voor onze messen:',
      '',
      `• Restaurant / Zaak: ${restaurantName.trim()}`,
      `• Contactpersoon: ${contactPerson.trim()}`,
      `• Telefoonnummer: ${phone.trim()}`,
      `• Gewenste service: ${serviceType === 'bezorging' ? 'Bezorgservice aan de keukendeur in Utrecht' : 'Langsbrengen op afspraak aan de werkbank'}`,
    ];

    if (serviceType === 'bezorging') {
      messageLines.push(`• Postcode: ${cleanPostcode}`);
      if (address.trim()) {
        messageLines.push(`• Adres: ${address.trim()}`);
      }
    }

    if (isGranularActive) {
      messageLines.push('', `Aantal messen (${granularTotalKnives} gespecificeerd):`);
      KNIFE_ROWS.forEach((row, idx) => {
        if (knifeCounts[idx] > 0) {
          messageLines.push(`  - ${knifeCounts[idx]}x ${row.name} (${row.sizeDesc})`);
        }
      });
    } else {
      messageLines.push(`• Aantal messen (schatting): ${selectedEstimate}`);
    }

    if (notes.trim()) {
      messageLines.push('', `Opmerkingen / planning: ${notes.trim()}`);
    }

    messageLines.push(
      '',
      'Kunnen jullie ons een voorstel en planning sturen?',
      'Alvast bedankt!'
    );

    const waUrl = `https://wa.me/31682074967?text=${encodeURIComponent(messageLines.join('\n'))}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-start">
        {/* Linkerkolom: Formulier stappen */}
        <div className="lg:col-span-7 space-y-8">

          {/* STAP 1: Restaurant & Contactpersoon */}
          <div className="rounded-[2rem] border border-[#d9e1d7] bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-[#E8EFE8] font-heading text-sm sm:text-base font-bold text-[#3B7F4B]">
                1
              </span>
              <h3 className="font-heading text-xl font-bold text-[#3B7F4B] sm:text-2xl">
                Jouw keuken &amp; contact
              </h3>
            </div>
            <p className="mt-2 text-sm text-[#657068]">
              Vul jullie bedrijfsgegevens in. We stemmen alle communicatie direct en persoonlijk af via WhatsApp.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="zakelijk-restaurant"
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#203728] mb-1.5"
                >
                  <Building2 strokeWidth={2} className="h-5 w-5 shrink-0 text-[#3B7F4B]" />
                  <span>Restaurant / Zaak *</span>
                </label>
                <input
                  id="zakelijk-restaurant"
                  type="text"
                  required
                  placeholder="Bijv. Bistro De Gracht"
                  value={restaurantName}
                  onChange={(e) => {
                    setRestaurantName(e.target.value);
                    setErrorMsg('');
                  }}
                  className="w-full rounded-xl border border-[#b6c1b6] bg-white px-3.5 py-2.5 text-sm font-semibold text-[#203728] placeholder-[#9ca3af] focus:border-[#3B7F4B] focus:outline-none focus:ring-1 focus:ring-[#3B7F4B]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="zakelijk-contact"
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#203728] mb-1.5"
                  >
                    <ChefHat strokeWidth={2} className="h-5 w-5 shrink-0 text-[#3B7F4B]" />
                    <span>Contactpersoon *</span>
                  </label>
                  <input
                    id="zakelijk-contact"
                    type="text"
                    required
                    placeholder="Bijv. Chef Dennis"
                    value={contactPerson}
                    onChange={(e) => {
                      setContactPerson(e.target.value);
                      setErrorMsg('');
                    }}
                    className="w-full rounded-xl border border-[#b6c1b6] bg-white px-3.5 py-2.5 text-sm text-[#203728] placeholder-[#9ca3af] focus:border-[#3B7F4B] focus:outline-none focus:ring-1 focus:ring-[#3B7F4B]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="zakelijk-phone"
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#203728] mb-1.5"
                  >
                    <Phone strokeWidth={2} className="h-5 w-5 shrink-0 text-[#3B7F4B]" />
                    <span>Telefoonnummer *</span>
                  </label>
                  <input
                    id="zakelijk-phone"
                    type="tel"
                    required
                    placeholder="06 12 34 56 78"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      setErrorMsg('');
                    }}
                    className="w-full rounded-xl border border-[#b6c1b6] bg-white px-3.5 py-2.5 text-sm text-[#203728] placeholder-[#9ca3af] focus:border-[#3B7F4B] focus:outline-none focus:ring-1 focus:ring-[#3B7F4B]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* STAP 2: Aantal messen & Wensen */}
          <div className="rounded-[2rem] border border-[#d9e1d7] bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-[#E8EFE8] font-heading text-sm sm:text-base font-bold text-[#3B7F4B]">
                2
              </span>
              <h3 className="font-heading text-xl font-bold text-[#3B7F4B] sm:text-2xl">
                Aantal messen &amp; planning
              </h3>
            </div>
            <p className="mt-2 text-sm text-[#657068]">
              Kies het geschatte volume of specificeer optioneel jullie exacte messenset.
            </p>

            {/* Range Selectie Kaarten */}
            <div className="mt-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#203728] mb-2.5">
                Aantal messen (schatting) *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ESTIMATE_OPTIONS.map((opt) => {
                  const isSelected = selectedEstimate === opt.label && !isGranularActive;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setSelectedEstimate(opt.label);
                        setErrorMsg('');
                      }}
                      className={`flex flex-col text-left p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#3B7F4B] bg-[#E8EFE8]/30 shadow-2xs'
                          : 'border-[#d9e1d7] bg-[#FAFAF8] hover:border-[#3B7F4B]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-heading text-sm font-bold text-[#203728]">
                          {opt.label}
                        </span>
                        {isSelected && (
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3B7F4B] text-white">
                            <Check strokeWidth={2.5} className="h-3.5 w-3.5" />
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-[#657068] mt-1">
                        {opt.desc}
                      </span>
                      {opt.badge && (
                        <span className="mt-2 inline-flex w-fit rounded-full bg-[#E87B5B]/15 px-2 py-0.5 text-[10px] font-bold text-[#C95E3E] uppercase tracking-wider">
                          {opt.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Accordion voor optioneel specificeren per mesformaat (zoals Particulieren Calculator) */}
            <div className="mt-5 rounded-2xl border border-[#d9e1d7]/80 bg-[#FAFAF8] p-3.5 sm:p-4">
              <button
                type="button"
                onClick={() => setShowGranularKnives(!showGranularKnives)}
                className="flex w-full items-center justify-between text-left text-xs sm:text-sm font-bold text-[#3B7F4B] hover:text-[#2d633a] cursor-pointer"
              >
                <span className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-lg bg-[#E8EFE8] text-[#3B7F4B]">
                    <UtensilsCrossed strokeWidth={2} className="h-4 w-4" />
                  </span>
                  <span>Optioneel: exacte aantallen per formaat opgeven ({granularTotalKnives} geselecteerd)</span>
                </span>
                <ChevronDown
                  strokeWidth={2.5}
                  className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                    showGranularKnives ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {showGranularKnives && (
                <div className="mt-3 pt-3 border-t border-[#d9e1d7]/60 divide-y divide-[#d9e1d7]/60">
                  {KNIFE_ROWS.map((row, idx) => (
                    <div
                      key={row.name}
                      className="py-3 first:pt-1 last:pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5"
                    >
                      <div>
                        <span className="font-heading text-sm font-bold text-[#203728]">{row.name}</span>
                        <p className="text-xs text-[#657068]">{row.sizeDesc} &bull; <strong className="text-[#3B7F4B]">{row.priceLabel}</strong></p>
                      </div>
                      <div className="flex items-center rounded-xl border border-[#d9e1d7] bg-white shadow-2xs self-end sm:self-auto">
                        <button
                          type="button"
                          onClick={() => updateKnifeCount(idx, -1)}
                          disabled={knifeCounts[idx] === 0}
                          aria-label={`Minder ${row.name}`}
                          className="flex h-11 w-11 sm:h-10 sm:w-10 items-center justify-center text-[#3B7F4B] transition-colors hover:bg-[#E8EFE8] disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer disabled:cursor-not-allowed rounded-l-xl"
                        >
                          <Minus aria-hidden="true" strokeWidth={2.25} className="h-5 w-5 sm:h-4 sm:w-4 shrink-0" />
                        </button>
                        <span className="w-10 sm:w-8 text-center font-heading text-base sm:text-sm font-bold text-[#203728]">
                          {knifeCounts[idx]}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateKnifeCount(idx, 1)}
                          aria-label={`Meer ${row.name}`}
                          className="flex h-11 w-11 sm:h-10 sm:w-10 items-center justify-center text-[#3B7F4B] transition-colors hover:bg-[#E8EFE8] cursor-pointer rounded-r-xl"
                        >
                          <Plus aria-hidden="true" strokeWidth={2.25} className="h-5 w-5 sm:h-4 sm:w-4 shrink-0" />
                        </button>
                      </div>
                    </div>
                  ))}
                  {isGranularActive && (
                    <div className="pt-2 text-right">
                      <button
                        type="button"
                        onClick={() => setKnifeCounts([0, 0, 0, 0])}
                        className="text-xs text-[#C95E3E] underline hover:text-[#a84729] cursor-pointer"
                      >
                        Herstel naar schatting ({selectedEstimate})
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Opmerkingen of gewenste planning */}
            <div className="mt-5">
              <label
                htmlFor="zakelijk-notes"
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#203728] mb-1.5"
              >
                <MessageCircle strokeWidth={2} className="h-5 w-5 shrink-0 text-[#3B7F4B]" />
                <span>Opmerkingen of gewenste planning</span>
              </label>
              <textarea
                id="zakelijk-notes"
                rows={3}
                placeholder="Bijv. gewenste dag, aantal rondes of bijzonderheden"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full rounded-xl border border-[#b6c1b6] bg-white p-3.5 text-sm text-[#203728] placeholder-[#9ca3af] focus:border-[#3B7F4B] focus:outline-none focus:ring-1 focus:ring-[#3B7F4B]"
              />
            </div>
          </div>

          {/* STAP 3: Ophalen of Langskomen? */}
          <div className="rounded-[2rem] border border-[#d9e1d7] bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-[#E8EFE8] font-heading text-sm sm:text-base font-bold text-[#3B7F4B]">
                3
              </span>
              <h3 className="font-heading text-xl font-bold text-[#3B7F4B] sm:text-2xl">
                Ophalen of langskomen?
              </h3>
            </div>
            <p className="mt-2 text-sm text-[#657068]">
              Binnen Utrecht is ophalen en bezorgen gratis vanaf €35 bestelwaarde (incl. btw). Of breng de messen langs op afspraak.
            </p>

            {/* Service Toggle Kaarten */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <button
                type="button"
                onClick={() => {
                  setServiceType('bezorging');
                  setErrorMsg('');
                }}
                className={`flex flex-col text-left p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer ${
                  serviceType === 'bezorging'
                    ? 'border-[#3B7F4B] bg-[#E8EFE8]/30 shadow-2xs'
                    : 'border-[#d9e1d7] bg-[#FAFAF8] hover:border-[#3B7F4B]/40'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className={`flex h-11 w-11 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-2xl transition-colors ${
                      serviceType === 'bezorging' ? 'bg-[#3B7F4B] text-white' : 'bg-[#E8EFE8] text-[#3B7F4B]'
                    }`}>
                      <Truck aria-hidden="true" strokeWidth={2} className="h-6 w-6 shrink-0 sm:h-5 sm:w-5" />
                    </span>
                    <span className="font-heading text-sm sm:text-base font-bold text-[#203728]">
                      Bezorgservice Utrecht
                    </span>
                  </div>
                  {serviceType === 'bezorging' && (
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3B7F4B] text-white">
                      <Check strokeWidth={2.5} className="h-3.5 w-3.5" />
                    </span>
                  )}
                </div>
                <span className="text-xs sm:text-sm text-[#657068] mt-2.5">
                  Ophalen &amp; weer bezorgen bij jullie keukendeur binnen Utrecht. Gratis vanaf €35 (incl. btw).
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setServiceType('langskomen');
                  setErrorMsg('');
                }}
                className={`flex flex-col text-left p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer ${
                  serviceType === 'langskomen'
                    ? 'border-[#3B7F4B] bg-[#E8EFE8]/30 shadow-2xs'
                    : 'border-[#d9e1d7] bg-[#FAFAF8] hover:border-[#3B7F4B]/40'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className={`flex h-11 w-11 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-2xl transition-colors ${
                      serviceType === 'langskomen' ? 'bg-[#3B7F4B] text-white' : 'bg-[#E8EFE8] text-[#3B7F4B]'
                    }`}>
                      <Calendar aria-hidden="true" strokeWidth={2} className="h-6 w-6 shrink-0 sm:h-5 sm:w-5" />
                    </span>
                    <span className="font-heading text-sm sm:text-base font-bold text-[#203728]">
                      Langsbrengen op afspraak
                    </span>
                  </div>
                  {serviceType === 'langskomen' && (
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3B7F4B] text-white">
                      <Check strokeWidth={2.5} className="h-3.5 w-3.5" />
                    </span>
                  )}
                </div>
                <span className="text-xs sm:text-sm text-[#657068] mt-2.5">
                  Aan de werkbank in Utrecht. Geen inloopbalie, afspraak vooraf via WhatsApp.
                </span>
              </button>
            </div>

            {/* Bezorgadres & Postcode als bezorging gekozen is */}
            {serviceType === 'bezorging' ? (
              <div className="mt-6 space-y-4 pt-4 border-t border-[#d9e1d7]/60">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="zakelijk-postcode"
                      className="flex items-center gap-2 text-xs font-bold text-[#203728] uppercase tracking-wider mb-1"
                    >
                      <MapPin strokeWidth={2} className="h-5 w-5 shrink-0 text-[#3B7F4B]" />
                      <span>Postcode (Utrecht) *</span>
                    </label>
                    <input
                      id="zakelijk-postcode"
                      type="text"
                      value={postcode}
                      onChange={(e) => {
                        setPostcode(e.target.value);
                        setErrorMsg('');
                      }}
                      maxLength={7}
                      placeholder="Bijv. 3513 AB"
                      className="w-full rounded-xl border border-[#b6c1b6] bg-white px-3.5 py-2.5 text-sm font-semibold text-[#203728] placeholder-[#9ca3af] focus:border-[#3B7F4B] focus:outline-none focus:ring-1 focus:ring-[#3B7F4B]"
                    />
                    <p className="mt-1 text-[11px] text-[#657068]">
                      4 cijfers zijn genoeg om het bezorgtarief te verifiëren.
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="zakelijk-address"
                      className="flex items-center gap-2 text-xs font-bold text-[#203728] uppercase tracking-wider mb-1"
                    >
                      <Building2 strokeWidth={2} className="h-5 w-5 shrink-0 text-[#3B7F4B]" />
                      <span>Straat en huisnummer (optioneel)</span>
                    </label>
                    <input
                      id="zakelijk-address"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      maxLength={100}
                      placeholder="Bijv. Oudegracht 120"
                      className="w-full rounded-xl border border-[#b6c1b6] bg-white px-3.5 py-2.5 text-sm text-[#203728] placeholder-[#9ca3af] focus:border-[#3B7F4B] focus:outline-none focus:ring-1 focus:ring-[#3B7F4B]"
                    />
                  </div>
                </div>

                <div className="rounded-xl border border-[#d9e1d7] bg-[#FAFAF8] p-3 text-xs leading-relaxed text-[#203728]">
                  {!cleanPostcode || cleanPostcode.length < 4 ? (
                    <span className="text-[#657068]">
                      Vul een postcode in om de bezorgmogelijkheid te controleren. Binnen Utrecht gratis vanaf €35 bestelwaarde (incl. btw).
                    </span>
                  ) : !hasValidPostcode ? (
                    <span className="text-[#C95E3E] font-medium">
                      Vul een geldige postcode in, bijvoorbeeld 3513 AB.
                    </span>
                  ) : isOutsideArea ? (
                    <span className="text-[#C95E3E] font-medium">
                      Buiten ons vaste bezorggebied Utrecht. Haal- en brengservice op aanvraag, of kies &apos;Ik kom langs op afspraak&apos; zonder bezorgkosten.
                    </span>
                  ) : deliveryFeeCents === 0 ? (
                    <span className="text-[#3B7F4B] font-bold flex items-center gap-2">
                      <Check strokeWidth={2.5} className="h-5 w-5 shrink-0 text-[#3B7F4B]" />
                      <span>Ophalen en bezorgen aan de keukendeur is gratis voor jullie bestelling (vanaf €35 incl. btw)!</span>
                    </span>
                  ) : (
                    <span>
                      <strong className="text-[#3B7F4B]">Bezorgservice Utrecht:</strong> Binnen Utrecht gratis vanaf €35 bestelwaarde (incl. btw). Onder €35 geldt het bezorgtarief van €{((deliveryFeeCents || 725) / 100).toFixed(2).replace('.', ',')} incl. btw.
                    </span>
                  )}
                </div>
              </div>
            ) : (
              <div className="mt-6 pt-4 border-t border-[#d9e1d7]/60">
                <div className="rounded-xl border border-[#d9e1d7] bg-[#FAFAF8] p-3 text-xs leading-relaxed text-[#203728]">
                  <p>
                    <strong className="text-[#3B7F4B]">Kom langs op afspraak:</strong> Wij werken vanuit huis aan de werkbank (Gerard Noodtstraat 57, Utrecht). Er is géén doorlopende inloopbalie. We stemmen het breng- en ophaalmoment via WhatsApp vooraf persoonlijk af. Klanten uit heel Nederland zijn welkom.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Rechterkolom: Sticky Overzicht & Direct WhatsApp Order (stijl van Particulieren) */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="overflow-hidden rounded-[2.25rem] border border-[#d9e1d7] bg-[#FAFAF8] p-5 sm:p-7 lg:p-8 shadow-md">
            <div className="flex items-center justify-between border-b border-[#d9e1d7]/70 pb-4">
              <h3 className="font-heading text-xl font-bold text-[#3B7F4B]">
                Jouw zakelijke aanvraag
              </h3>
              <span className="rounded-full bg-[#E8EFE8] px-3 py-1 text-xs font-bold text-[#3B7F4B]">
                {isGranularActive ? `${granularTotalKnives} messen` : selectedEstimate}
              </span>
            </div>

            {/* Overzicht van ingevulde velden */}
            <div className="my-5 space-y-2.5 border-b border-[#d9e1d7]/70 pb-5 text-xs sm:text-sm text-[#203728]">
              <div className="flex justify-between items-start gap-2">
                <span className="text-[#657068]">Zaak:</span>
                <span className="font-semibold text-right">
                  {restaurantName.trim() || <span className="text-[#9ca3af] italic">Nog in te vullen</span>}
                </span>
              </div>

              <div className="flex justify-between items-start gap-2">
                <span className="text-[#657068]">Contactpersoon:</span>
                <span className="font-semibold text-right">
                  {contactPerson.trim() || <span className="text-[#9ca3af] italic">Nog in te vullen</span>}
                </span>
              </div>

              <div className="flex justify-between items-start gap-2">
                <span className="text-[#657068]">Telefoon:</span>
                <span className="font-semibold text-right">
                  {phone.trim() || <span className="text-[#9ca3af] italic">06 ...</span>}
                </span>
              </div>

              <div className="flex justify-between items-start gap-2">
                <span className="text-[#657068]">Service:</span>
                <span className="font-semibold text-right text-[#3B7F4B]">
                  {serviceType === 'bezorging' ? 'Bezorgservice Utrecht' : 'Langsbrengen op afspraak'}
                </span>
              </div>

              <div className="flex justify-between items-start gap-2">
                <span className="text-[#657068]">Doorlooptijd:</span>
                <span className="font-semibold text-right">
                  Binnen 24 tot 48 uur in overleg
                </span>
              </div>
            </div>

            {/* Offerte & Prijsindicatie Box */}
            <div className="rounded-2xl bg-white p-4 sm:p-5 border border-[#d9e1d7]/80 shadow-2xs">
              <div className="flex items-center justify-between">
                <small className="block text-xs font-semibold text-[#657068]">
                  Snel een helder voorstel
                </small>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#E8EFE8] px-2.5 py-0.5 text-[10px] font-bold text-[#3B7F4B] uppercase tracking-wider">
                  <ReceiptText aria-hidden="true" strokeWidth={2} className="h-3.5 w-3.5 shrink-0" />
                  <span>incl. btw</span>
                </span>
              </div>
              <strong className="mt-1 block font-heading text-2xl sm:text-3xl font-bold text-[#3B7F4B]">
                Offerte via WhatsApp
              </strong>
              <p className="mt-2 text-[11px] text-[#657068] leading-relaxed">
                Basistarieven vanaf €6,50 per mes (alle prijzen zijn incl. btw). Binnen Utrecht gratis haal- en brengservice vanaf €35 (incl. btw). We starten pas na jullie akkoord.
              </p>
            </div>

            {/* Error banner */}
            {errorMsg && (
              <div className="mt-4 flex items-center gap-2.5 rounded-xl bg-[#FFF3F1] p-3 text-xs font-semibold text-[#8B2921]">
                <AlertCircle strokeWidth={2} className="h-5 w-5 shrink-0 text-[#C95E3E]" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Hoofdknop: Open aanvraag in WhatsApp */}
            <button
              type="button"
              onClick={handleFormSubmit}
              className="mt-6 group inline-flex w-full min-h-[52px] sm:min-h-[56px] items-center justify-center gap-3 rounded-full bg-[#E87B5B] px-4 py-3.5 sm:px-6 sm:py-4 font-heading text-sm sm:text-base font-bold text-white shadow-md transition-all duration-200 hover:bg-[#C95E3E] hover:shadow-lg active:scale-[0.98] cursor-pointer whitespace-nowrap"
            >
              <MessageCircle strokeWidth={2} className="h-6 w-6 shrink-0 transition-transform duration-200 group-hover:scale-110" />
              <span>Open aanvraag in WhatsApp</span>
            </button>

            {/* Alternatieve contactroute per e-mail */}
            <div className="mt-3.5 text-center">
              <a
                href={`mailto:${SLIJPMAAT_INFO.email}?subject=${encodeURIComponent('Zakelijke aanvraag Slijpmaat')}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#3B7F4B] hover:text-[#2d633a] transition-colors"
              >
                <Mail aria-hidden="true" strokeWidth={2} className="h-5 w-5 shrink-0 text-[#3B7F4B] sm:h-4 sm:w-4" />
                <span>Of stuur een e-mail naar {SLIJPMAAT_INFO.email}</span>
              </a>
            </div>

            <p className="mt-3 text-center text-xs text-[#657068]">
              Er wordt niets automatisch verzonden. Je controleert en verstuurt je bericht zelf via WhatsApp of e-mail.
            </p>

            <p className="mt-3 text-center text-[11px] text-[#9ca3af]">
              Door een aanvraag te doen ga je akkoord met onze{' '}
              <a href="/algemene-voorwaarden" className="underline hover:text-[#3B7F4B]">
                algemene voorwaarden
              </a>{' '}
              en{' '}
              <a href="/privacyverklaring" className="underline hover:text-[#3B7F4B]">
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
