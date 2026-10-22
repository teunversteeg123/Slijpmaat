import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { UIcon } from '../components/ui/UIcon';
import {
  disableGoogleAnalytics,
  enableGoogleAnalytics,
  initializeGoogleAnalytics,
  setDefaultGoogleConsent,
  trackAnalyticsEvent,
} from '../utils/analytics';

type ConsentChoice = 'accepted' | 'rejected' | null;

type StoredConsent = {
  version: 1;
  analytics: boolean;
  expiresAt: string;
};

type CookieConsentContextValue = {
  openCookieSettings: () => void;
};

const CONSENT_STORAGE_KEY = 'slijpmaat_cookie_consent_v1';
const CONSENT_LIFETIME_MS = 180 * 24 * 60 * 60 * 1000;

const CookieConsentContext = createContext<CookieConsentContextValue | undefined>(undefined);

const readStoredConsent = (): StoredConsent | null => {
  try {
    const rawValue = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!rawValue) return null;

    const parsed = JSON.parse(rawValue) as Partial<StoredConsent>;
    if (
      parsed.version !== 1
      || typeof parsed.analytics !== 'boolean'
      || typeof parsed.expiresAt !== 'string'
      || !Number.isFinite(Date.parse(parsed.expiresAt))
      || Date.parse(parsed.expiresAt) <= Date.now()
    ) {
      window.localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }

    return parsed as StoredConsent;
  } catch {
    return null;
  }
};

const storeConsent = (analytics: boolean) => {
  const consent: StoredConsent = {
    version: 1,
    analytics,
    expiresAt: new Date(Date.now() + CONSENT_LIFETIME_MS).toISOString(),
  };

  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // De keuze geldt nog steeds voor deze paginaweergave als opslag is geblokkeerd.
  }
};

export const CookieConsentProvider = ({ children }: { children: React.ReactNode }) => {
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const [isReady, setIsReady] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analyticsPreference, setAnalyticsPreference] = useState(false);
  const settingsDialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = settingsDialogRef.current;
    if (settingsOpen && dialog && !dialog.open) dialog.showModal();
    else if (!settingsOpen && dialog?.open) dialog.close();
    if (!settingsOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [settingsOpen]);

  useEffect(() => {
    setDefaultGoogleConsent();
    const storedConsent = readStoredConsent();

    if (storedConsent?.analytics) {
      setChoice('accepted');
      enableGoogleAnalytics();
    } else {
      if (storedConsent) {
        setChoice('rejected');
        disableGoogleAnalytics();
      }
      initializeGoogleAnalytics();
    }

    setIsReady(true);

    const trackContactClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest<HTMLAnchorElement>('a[href]');
      if (!link) return;

      const href = link.href;
      const linkText = link.textContent?.replace(/\s+/g, ' ').trim().slice(0, 100) || 'Onbekende link';

      if (href.startsWith('https://wa.me/')) {
        trackAnalyticsEvent('contact_click', {
          contact_method: 'whatsapp',
          link_text: linkText,
          page_path: window.location.pathname,
        });
      } else if (href.startsWith('tel:')) {
        trackAnalyticsEvent('contact_click', {
          contact_method: 'phone',
          link_text: linkText,
          page_path: window.location.pathname,
        });
      } else if (href.startsWith('mailto:')) {
        trackAnalyticsEvent('contact_click', {
          contact_method: 'email',
          link_text: linkText,
          page_path: window.location.pathname,
        });
      } else if (href.startsWith('https://g.page/')) {
        trackAnalyticsEvent('review_click', {
          link_text: linkText,
          page_path: window.location.pathname,
        });
      }
    };

    document.addEventListener('click', trackContactClick);
    return () => document.removeEventListener('click', trackContactClick);
  }, []);

  const acceptAnalytics = useCallback(() => {
    storeConsent(true);
    setChoice('accepted');
    setSettingsOpen(false);
    enableGoogleAnalytics();
  }, []);

  const rejectAnalytics = useCallback(() => {
    const shouldReloadWithoutAnalytics = choice === 'accepted';
    storeConsent(false);
    setChoice('rejected');
    setSettingsOpen(false);
    disableGoogleAnalytics();

    if (shouldReloadWithoutAnalytics) {
      window.location.reload();
    }
  }, [choice]);

  const openCookieSettings = useCallback(() => {
    setAnalyticsPreference(choice === 'accepted');
    setSettingsOpen(true);
  }, [choice]);

  const showBanner = isReady && choice === null && !settingsOpen;
  const choiceButtonClass = 'min-h-11 rounded-full border border-[#3B7F4B] px-3 py-2.5 text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B] sm:px-5 sm:text-sm';

  return (
    <CookieConsentContext.Provider value={{ openCookieSettings }}>
      {children}

      {showBanner ? (
        <aside
          aria-label="Cookiekeuze"
          className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-7xl rounded-2xl border border-[#3B7F4B]/25 border-t-[3px] border-t-[#3B7F4B] bg-white p-4 shadow-[0_8px_40px_rgba(32,55,40,0.18)] sm:inset-x-5 sm:bottom-5 sm:p-5"
        >
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
            <p className="flex-1 text-xs leading-relaxed text-[#657068] sm:text-sm">
              <strong className="font-semibold text-[#203728]">Jouw cookies, jouw keuze.</strong>{' '}
              Met jouw toestemming gebruiken we statistiekcookies om de website te verbeteren.{' '}
              <a href="/privacyverklaring/" className="font-semibold text-[#3B7F4B] underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B7F4B]">Meer informatie</a>
            </p>
            <div className="grid grid-cols-2 gap-2 lg:flex lg:shrink-0 lg:items-center lg:gap-3">
              <button type="button" onClick={openCookieSettings} className="col-span-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-[#3B7F4B] transition-colors hover:bg-[#E8EFE8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B7F4B] lg:col-span-1">
                Instellingen <UIcon name="settings" className="text-base" aria-hidden="true" />
              </button>
              <button type="button" onClick={rejectAnalytics} className={`${choiceButtonClass} bg-white text-[#3B7F4B] hover:bg-[#E8EFE8]`}>Alles weigeren</button>
              <button type="button" onClick={acceptAnalytics} className={`${choiceButtonClass} bg-[#3B7F4B] text-white hover:bg-[#203728]`}>Alles accepteren</button>
            </div>
          </div>
        </aside>
      ) : null}

      <dialog
        ref={settingsDialogRef}
        aria-labelledby="cookie-settings-title"
        aria-describedby="cookie-settings-description"
        onCancel={(event) => { event.preventDefault(); setSettingsOpen(false); }}
        onClose={() => setSettingsOpen(false)}
        className="fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-3xl border border-[#D9E1D7] bg-white p-5 text-[#203728] shadow-xl backdrop:bg-[#203728]/45 sm:p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C95E3E]">Jouw privacykeuze</p>
            <h2 id="cookie-settings-title" className="mt-2 font-heading text-2xl font-bold text-[#3B7F4B]">Cookie-instellingen</h2>
          </div>
          <button type="button" autoFocus onClick={() => setSettingsOpen(false)} aria-label="Cookie-instellingen sluiten" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#3B7F4B] hover:bg-[#E8EFE8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B7F4B]">
            <UIcon name="cross-small" className="text-xl" aria-hidden="true" />
          </button>
        </div>
        <p id="cookie-settings-description" className="mt-4 text-sm leading-relaxed text-[#657068]">Je bepaalt zelf of we statistiekcookies mogen gebruiken. Je kunt je keuze later aanpassen via Cookievoorkeuren onderaan de website.</p>
        <div className="mt-5 divide-y divide-[#D9E1D7] rounded-2xl border border-[#D9E1D7] px-4">
          <div className="py-4">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-bold">Noodzakelijke opslag</h3>
              <span className="shrink-0 rounded-full bg-[#E8EFE8] px-2 py-1 text-xs font-semibold text-[#3B7F4B]">Altijd actief</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[#657068]">Onthoudt je cookiekeuze maximaal zes maanden.</p>
          </div>
          <label className="flex cursor-pointer items-start justify-between gap-4 py-4">
            <span><span className="block text-sm font-bold">Statistiekcookies</span><span className="mt-2 block text-xs leading-relaxed text-[#657068]">Helpen ons met Google Analytics te begrijpen hoe bezoekers de website gebruiken.</span></span>
            <input type="checkbox" checked={analyticsPreference} onChange={(event) => setAnalyticsPreference(event.target.checked)} className="mt-1 h-5 w-5 shrink-0 accent-[#3B7F4B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3B7F4B]" />
          </label>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-[#657068]">Zonder toestemming blijven beperkte cookieloze metingen mogelijk. We gebruiken geen advertentiecookies. <a href="/privacyverklaring/" className="font-semibold text-[#3B7F4B] underline underline-offset-2">Lees onze privacyverklaring</a>.</p>
        <button type="button" onClick={analyticsPreference ? acceptAnalytics : rejectAnalytics} className={`${choiceButtonClass} mt-5 w-full bg-[#3B7F4B] text-white hover:bg-[#203728]`}>Voorkeuren opslaan</button>
      </dialog>
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
};

