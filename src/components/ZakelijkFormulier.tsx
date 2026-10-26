import React, { useEffect, useRef, useState } from 'react';
import { AlertCircle, Check, ChevronDown, Mail, MapPin, MessageCircle, ReceiptText } from 'lucide-react';
import { getDeliveryZone, isValidDutchPostcode, normalizeDutchPostcode } from '../data/delivery';
import { SLIJPMAAT_INFO } from '../data/siteData';
import { createWhatsAppUrl } from '../utils/contact';
import { isValidContactPhone } from '../utils/validation';
import { useOrderFunnel } from '../hooks/useOrderFunnel';

type ServiceType = 'bezorging' | 'langskomen';

const ESTIMATE_OPTIONS = [
  { value: '0 tot 10 messen', recommended: false },
  { value: '10 tot 20 messen', recommended: true },
  { value: '20 tot 40 messen', recommended: false },
  { value: '40+ messen', recommended: false },
];
const SELF_DROPOFF_ADDRESS = SLIJPMAAT_INFO.fullAddress;

export const ZakelijkFormulier: React.FC = () => {
  const estimateMenuRef = useRef<HTMLDivElement>(null);
  const estimateButtonRef = useRef<HTMLButtonElement>(null);
  const [estimateOpen, setEstimateOpen] = useState(false);
  const [activeEstimate, setActiveEstimate] = useState(0);
  const funnel = useOrderFunnel('business');
  const [restaurantName, setRestaurantName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedEstimate, setSelectedEstimate] = useState('');
  const [notes, setNotes] = useState('');
  const [serviceType, setServiceType] = useState<ServiceType>('bezorging');
  const [postcode, setPostcode] = useState('');
  const [address, setAddress] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const cleanPostcode = normalizeDutchPostcode(postcode);
  const hasValidPostcode = isValidDutchPostcode(postcode);
  const deliveryZone = hasValidPostcode ? getDeliveryZone(postcode) : 'outside';
  const isOutsideArea = hasValidPostcode && deliveryZone === 'outside';

  useEffect(() => {
    if (!estimateOpen) return;
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !estimateMenuRef.current?.contains(event.target)) setEstimateOpen(false);
    };
    document.addEventListener('pointerdown', closeOutside);
    return () => document.removeEventListener('pointerdown', closeOutside);
  }, [estimateOpen]);

  const chooseEstimate = (index: number) => {
    setSelectedEstimate(ESTIMATE_OPTIONS[index].value);
    setActiveEstimate(index);
    setErrorMsg('');
    setEstimateOpen(false);
    estimateButtonRef.current?.focus();
    funnel.select('estimate_band');
  };

  const handleEstimateKey = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Escape' || event.key === 'Tab') {
      setEstimateOpen(false);
      if (event.key === 'Escape') event.preventDefault();
      return;
    }
    if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      const selectedIndex = Math.max(0, ESTIMATE_OPTIONS.findIndex((option) => option.value === selectedEstimate));
      const currentIndex = estimateOpen ? activeEstimate : selectedIndex;
      let nextIndex = selectedIndex;
      if (event.key === 'Home') nextIndex = 0;
      else if (event.key === 'End') nextIndex = ESTIMATE_OPTIONS.length - 1;
      else if (estimateOpen) nextIndex = Math.max(0, Math.min(ESTIMATE_OPTIONS.length - 1, currentIndex + (event.key === 'ArrowDown' ? 1 : -1)));
      setActiveEstimate(nextIndex);
      setEstimateOpen(true);
    } else if ((event.key === 'Enter' || event.key === ' ') && estimateOpen) {
      event.preventDefault();
      chooseEstimate(activeEstimate);
    } else if (/^[124]$/.test(event.key)) {
      event.preventDefault();
      setActiveEstimate(event.key === '1' ? 1 : event.key === '2' ? 2 : 3);
      setEstimateOpen(true);
    } else if (event.key === '0') {
      event.preventDefault();
      setActiveEstimate(0);
      setEstimateOpen(true);
    }
  };

  const focusWithError = (message: string, id: string) => {
    setErrorMsg(message);
    const field = { 'zakelijk-restaurant': 'company', 'zakelijk-contact': 'contact', 'zakelijk-phone': 'phone', 'zakelijk-estimate': 'estimate', 'zakelijk-postcode': 'postcode', 'zakelijk-address': 'address' } as const;
    funnel.invalid(field[id as keyof typeof field]);
    document.getElementById(id)?.focus();
    return null;
  };

  const buildMessageLines = (): string[] | null => {
    if (!restaurantName.trim()) return focusWithError('Vul de naam van jullie restaurant of zaak in.', 'zakelijk-restaurant');
    if (!contactPerson.trim()) return focusWithError('Vul de naam van de contactpersoon in.', 'zakelijk-contact');
    if (!isValidContactPhone(phone)) return focusWithError('Vul een geldig telefoonnummer in, bijvoorbeeld 06 12 34 56 78 of +31 6 12 34 56 78.', 'zakelijk-phone');
    if (!selectedEstimate) return focusWithError('Selecteer een schatting van het aantal messen.', 'zakelijk-estimate');
    if (serviceType === 'bezorging' && !hasValidPostcode) return focusWithError('Vul een geldige postcode in, bijvoorbeeld 3513 AB.', 'zakelijk-postcode');
    if (serviceType === 'bezorging' && !address.trim()) return focusWithError('Vul de straat en het huisnummer van jullie zaak in.', 'zakelijk-address');

    const messageLines = [
      'Hoi Teun en Mike (Slijpmaat),',
      '',
      'Wij willen graag een zakelijke aanvraag en offerte voor onze messen:',
      '',
      `• Restaurant / zaak: ${restaurantName.trim()}`,
      `• Contactpersoon: ${contactPerson.trim()}`,
      `• Telefoonnummer: ${phone.trim()}`,
      `• Aantal messen (schatting): ${selectedEstimate}`,
      `• Gewenste service: ${serviceType === 'bezorging' ? 'Ophalen en bezorgen in Utrecht' : 'Zelf langsbrengen op afspraak'}`,
    ];

    if (serviceType === 'bezorging') messageLines.push(`• Adres: ${address.trim()}, ${cleanPostcode}`);
    else messageLines.push(`• Afspraaklocatie: ${SELF_DROPOFF_ADDRESS}`);
    if (notes.trim()) messageLines.push('', `Opmerkingen / planning: ${notes.trim()}`);
    messageLines.push('', 'Kunnen jullie ons een voorstel inclusief btw en een planning sturen?', 'Alvast bedankt!');
    return messageLines;
  };

  const openRequest = (contactMethod: 'whatsapp' | 'email') => {
    const messageLines = buildMessageLines();
    if (!messageLines) return;
    setErrorMsg('');
    funnel.open(contactMethod);

    if (contactMethod === 'whatsapp') {
      window.open(createWhatsAppUrl(messageLines.join('\n')), '_blank', 'noopener,noreferrer');
      return;
    }
    const subject = encodeURIComponent(`Zakelijke aanvraag Slijpmaat - ${restaurantName.trim()}`);
    const body = encodeURIComponent(messageLines.join('\n'));
    window.location.href = `mailto:${SLIJPMAAT_INFO.email}?subject=${subject}&body=${body}`;
  };

  const inputClass = 'w-full rounded-xl border border-[#b6c1b6] bg-white px-3.5 py-2.5 text-sm text-[#203728] placeholder-[#9ca3af] focus:border-[#3B7F4B] focus:outline-none focus:ring-1 focus:ring-[#3B7F4B]';

  return (
    <div className="w-full" onFocusCapture={funnel.start} onClickCapture={funnel.start}>
      <div className="grid grid-cols-1 items-start gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="rounded-[1.75rem] border border-[#d9e1d7] bg-white p-4 shadow-xs sm:p-7 lg:col-span-7">
          <section aria-labelledby="business-contact-heading">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E8EFE8] font-heading text-xs font-bold text-[#3B7F4B]">1</span>
              <h3 id="business-contact-heading" className="font-heading text-xl font-bold text-[#3B7F4B] sm:text-2xl">Jouw zaak &amp; contact</h3>
            </div>
            <div className="mt-4 space-y-3">
              <div>
                <label htmlFor="zakelijk-restaurant" className="mb-1 block text-xs font-bold text-[#203728]">Restaurant / zaak</label>
                <input id="zakelijk-restaurant" type="text" required autoComplete="organization" value={restaurantName} onChange={(event) => { setRestaurantName(event.target.value); setErrorMsg(''); }} placeholder="Bistro De Gracht" className={inputClass} />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="zakelijk-contact" className="mb-1 block text-xs font-bold text-[#203728]">Contactpersoon</label>
                  <input id="zakelijk-contact" type="text" required autoComplete="name" value={contactPerson} onChange={(event) => { setContactPerson(event.target.value); setErrorMsg(''); }} placeholder="Dennis de Vries" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="zakelijk-phone" className="mb-1 block text-xs font-bold text-[#203728]">Telefoonnummer</label>
                  <input id="zakelijk-phone" type="tel" required autoComplete="tel" value={phone} onChange={(event) => { setPhone(event.target.value); setErrorMsg(''); }} placeholder="06 12 34 56 78" className={inputClass} />
                </div>
              </div>
            </div>
          </section>

          <section aria-labelledby="business-estimate-heading" className="mt-5 border-t border-[#d9e1d7] pt-5 sm:mt-7 sm:pt-7">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E8EFE8] font-heading text-xs font-bold text-[#3B7F4B]">2</span>
              <h3 id="business-estimate-heading" className="font-heading text-xl font-bold text-[#3B7F4B] sm:text-2xl">Aantal messen &amp; planning</h3>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div>
                <label id="zakelijk-estimate-label" htmlFor="zakelijk-estimate" className="mb-1 block text-xs font-bold text-[#203728]">Geschat aantal messen</label>
                <div ref={estimateMenuRef} className="relative" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setEstimateOpen(false); }}>
                  <button
                    ref={estimateButtonRef}
                    type="button"
                    role="combobox"
                    id="zakelijk-estimate"
                    aria-labelledby="zakelijk-estimate-label zakelijk-estimate-value"
                    aria-haspopup="listbox"
                    aria-expanded={estimateOpen}
                    aria-controls={estimateOpen ? 'zakelijk-estimate-options' : undefined}
                    aria-activedescendant={estimateOpen ? `zakelijk-option-${activeEstimate}` : undefined}
                    onKeyDown={handleEstimateKey}
                    onClick={() => { setActiveEstimate(Math.max(0, ESTIMATE_OPTIONS.findIndex((option) => option.value === selectedEstimate))); setEstimateOpen(!estimateOpen); }}
                    className={`${inputClass} flex min-h-11 cursor-pointer items-center justify-between gap-3 text-left font-semibold`}
                  >
                    <span id="zakelijk-estimate-value">{selectedEstimate || 'Selecteer aantal messen'}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 text-[#3B7F4B] transition-transform ${estimateOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                  {estimateOpen ? <div id="zakelijk-estimate-options" role="listbox" aria-labelledby="zakelijk-estimate-label" className="absolute z-20 mt-1 w-full overflow-hidden rounded-xl border border-[#b6c1b6] bg-white p-1 shadow-lg">
                    {ESTIMATE_OPTIONS.map((option, index) => (
                      <div
                        key={option.value}
                        id={`zakelijk-option-${index}`}
                        role="option"
                        aria-selected={selectedEstimate === option.value}
                        onPointerMove={() => setActiveEstimate(index)}
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => chooseEstimate(index)}
                        className={`flex min-h-11 w-full cursor-pointer items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm transition ${activeEstimate === index ? 'bg-[#E8EFE8]' : ''} ${selectedEstimate === option.value ? 'font-bold text-[#3B7F4B]' : 'font-medium text-[#203728]'}`}
                      >
                        <span>{option.value}</span>
                        <span className="flex shrink-0 items-center gap-1.5">
                          {option.recommended ? <span className="rounded-full bg-[#E87B5B] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">Meest gekozen</span> : null}
                          {selectedEstimate === option.value ? <Check className="h-4 w-4 text-[#3B7F4B]" aria-hidden="true" /> : null}
                        </span>
                      </div>
                    ))}
                  </div> : null}
                </div>
              </div>
              <div>
                <label htmlFor="zakelijk-notes" className="mb-1 block text-xs font-bold text-[#203728]">Opmerking voor planning</label>
                <textarea id="zakelijk-notes" rows={2} value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="Gewenste dag of bijzonderheden" className={`${inputClass} min-h-11 resize-y`} />
              </div>
            </div>
          </section>

          <section aria-labelledby="business-delivery-heading" className="mt-5 border-t border-[#d9e1d7] pt-5 sm:mt-7 sm:pt-7">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E8EFE8] font-heading text-xs font-bold text-[#3B7F4B]">3</span>
              <h3 id="business-delivery-heading" className="font-heading text-xl font-bold text-[#3B7F4B] sm:text-2xl">Ophalen of langskomen?</h3>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2.5">
              <button type="button" aria-pressed={serviceType === 'bezorging'} onClick={() => { setServiceType('bezorging'); setErrorMsg(''); funnel.select('service'); }} className={`min-h-[68px] rounded-2xl border-2 p-3 text-left ${serviceType === 'bezorging' ? 'border-[#3B7F4B] bg-[#E8EFE8]/60' : 'border-[#d9e1d7] bg-white'}`}>
                <span className="flex items-start justify-between gap-1 font-heading text-sm font-bold text-[#203728]">Ophalen &amp; bezorgen{serviceType === 'bezorging' ? <Check className="h-4 w-4 shrink-0 text-[#3B7F4B]" aria-hidden="true" /> : null}</span>
                <span className="mt-1 block text-[10px] leading-snug text-[#657068] sm:text-xs">Bezorgservice Utrecht</span>
              </button>
              <button type="button" aria-pressed={serviceType === 'langskomen'} onClick={() => { setServiceType('langskomen'); setErrorMsg(''); funnel.select('service'); }} className={`min-h-[68px] rounded-2xl border-2 p-3 text-left ${serviceType === 'langskomen' ? 'border-[#3B7F4B] bg-[#E8EFE8]/60' : 'border-[#d9e1d7] bg-white'}`}>
                <span className="flex items-start justify-between gap-1 font-heading text-sm font-bold text-[#203728]">Zelf langskomen{serviceType === 'langskomen' ? <Check className="h-4 w-4 shrink-0 text-[#3B7F4B]" aria-hidden="true" /> : null}</span>
                <span className="mt-1 block text-[10px] leading-snug text-[#657068] sm:text-xs">Op afspraak · gratis</span>
              </button>
            </div>

            {serviceType === 'bezorging' ? (
              <div className="mt-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label htmlFor="zakelijk-postcode" className="mb-1 block text-xs font-bold text-[#203728]">Postcode</label>
                    <input id="zakelijk-postcode" type="text" required maxLength={7} autoComplete="postal-code" value={postcode} onChange={(event) => { setPostcode(event.target.value); setErrorMsg(''); }} placeholder="3513 AB" className={`${inputClass} font-semibold`} />
                  </div>
                  <div>
                    <label htmlFor="zakelijk-address" className="mb-1 block text-xs font-bold text-[#203728]">Straat en huisnummer</label>
                    <input id="zakelijk-address" type="text" required maxLength={100} autoComplete="street-address" value={address} onChange={(event) => { setAddress(event.target.value); setErrorMsg(''); }} placeholder="Oudegracht 120" className={inputClass} />
                  </div>
                </div>
                <div aria-live="polite" className="mt-2.5 rounded-xl bg-[#FAFAF8] px-3 py-2.5 text-xs leading-relaxed text-[#203728]">
                  {!cleanPostcode || cleanPostcode.length < 4 ? <span className="text-[#657068]">Vul de postcode van jullie zaak in voor de bezorgmogelijkheid.</span> : !hasValidPostcode ? <span className="font-medium text-[#C95E3E]">Vul een geldige postcode in, bijvoorbeeld 3513 AB.</span> : isOutsideArea ? <span className="font-medium text-[#C95E3E]">Buiten het vaste bezorggebied: mogelijkheid en prijs op aanvraag.</span> : <span className="flex items-center gap-1.5 font-bold text-[#3B7F4B]"><Check className="h-4 w-4" aria-hidden="true" />Ophalen en bezorgen is mogelijk in jullie gebied.</span>}
                </div>
              </div>
            ) : (
              <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-[#E8EFE8]/60 px-3.5 py-3 text-sm text-[#203728]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
                <span><strong>Afspraaklocatie:</strong><br />{SELF_DROPOFF_ADDRESS}</span>
              </div>
            )}
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 lg:col-span-5" aria-labelledby="business-summary-heading">
          <div className="overflow-hidden rounded-[1.75rem] border border-[#d9e1d7] bg-[#FAFAF8] p-4 shadow-sm sm:p-6 lg:p-7">
            <div className="flex items-center justify-between gap-3 border-b border-[#d9e1d7] pb-3">
              <h3 id="business-summary-heading" className="font-heading text-xl font-bold text-[#3B7F4B]">Jouw zakelijke aanvraag</h3>
              <span className="shrink-0 rounded-full bg-[#E8EFE8] px-2.5 py-1 text-xs font-bold text-[#3B7F4B]">{selectedEstimate || 'Aantal kiezen'}</span>
            </div>
            <div className="space-y-2 border-b border-[#d9e1d7] py-4 text-xs sm:text-sm">
              <SummaryRow label="Zaak" value={restaurantName.trim() || 'Nog in te vullen'} />
              <SummaryRow label="Contactpersoon" value={contactPerson.trim() || 'Nog in te vullen'} />
              <SummaryRow label="Telefoon" value={phone.trim() || 'Nog in te vullen'} />
              <SummaryRow label="Aantal" value={selectedEstimate || 'Nog te kiezen'} />
              <SummaryRow label="Service" value={serviceType === 'bezorging' ? 'Ophalen & bezorgen' : 'Zelf langskomen'} accent />
            </div>
            <div className="mt-4 rounded-2xl border border-[#d9e1d7] bg-white p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold text-[#657068]">Zakelijke offerte</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#E8EFE8] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#3B7F4B]"><ReceiptText className="h-3.5 w-3.5" aria-hidden="true" />incl. btw</span>
              </div>
              <strong className="mt-1 block font-heading text-3xl font-bold text-[#3B7F4B]">Prijs op maat</strong>
              <p className="mt-1 text-xs text-[#657068]">We starten pas nadat jullie akkoord zijn met het voorstel.</p>
            </div>
            {errorMsg ? <div role="alert" className="mt-3 flex items-center gap-2 rounded-xl bg-[#FFF3F1] p-3 text-xs font-semibold text-[#8B2921]"><AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" /><span>{errorMsg}</span></div> : null}
            <button type="button" onClick={() => openRequest('whatsapp')} className="group mt-4 inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-full bg-[#E87B5B] px-4 py-3.5 font-heading text-sm font-bold text-white shadow-md transition hover:bg-[#C95E3E] hover:shadow-lg active:scale-[0.98] sm:text-base"><MessageCircle className="h-5 w-5 shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" /><span>Open aanvraag in WhatsApp</span></button>
            <button type="button" onClick={() => openRequest('email')} className="group mt-2.5 inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full border border-[#3B7F4B] bg-white px-4 py-3 font-heading text-sm font-bold text-[#3B7F4B] transition hover:bg-[#E8EFE8] active:scale-[0.98] sm:text-base"><Mail className="h-5 w-5 shrink-0" aria-hidden="true" /><span>Open aanvraag in e-mail</span></button>
            <p className="mt-2.5 text-center text-xs text-[#657068]">Je controleert en verstuurt het bericht zelf. We reageren binnen twee uur.</p>
            <p className="mt-2.5 text-center text-[11px] leading-relaxed text-[#9ca3af]">Door een aanvraag te doen ga je akkoord met onze <a href="/algemene-voorwaarden/" className="underline hover:text-[#3B7F4B]">algemene voorwaarden</a> en <a href="/privacyverklaring/" className="underline hover:text-[#3B7F4B]">privacyverklaring</a>.</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

const SummaryRow: React.FC<{ label: string; value: string; accent?: boolean }> = ({ label, value, accent = false }) => (
  <div className="flex items-start justify-between gap-3">
    <span className="text-[#657068]">{label}</span>
    <span className={`max-w-[60%] text-right font-semibold ${accent ? 'text-[#3B7F4B]' : 'text-[#203728]'}`}>{value}</span>
  </div>
);
