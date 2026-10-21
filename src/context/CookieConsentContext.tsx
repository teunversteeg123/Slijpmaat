import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { UIcon } from '../components/ui/UIcon';
import {
  disableGoogleAnalytics,
  enableGoogleAnalytics,
  initializeGoogleAnalytics,
  isAnalyticsConfigured,
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
  analyticsAvailable: boolean;
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

  useEffect(() => {
    setDefaultGoogleConsent();
    const storedConsent = readStoredConsent();

    if (storedConsent?.analytics && isAnalyticsConfigured) {
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
    setSettingsOpen(true);
  }, []);

  const showPanel = isReady && isAnalyticsConfigured && (choice === null || settingsOpen);

  return (
    <CookieConsentContext.Provider value={{ analyticsAvailable: isAnalyticsConfigured, openCookieSettings }}>
      {children}

      {showPanel ? (
        <aside
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-description"
          className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-[22px] border border-[#3B7F4B]/25 bg-white p-5 shadow-[0_24px_70px_rgba(32,55,40,0.22)] sm:p-6"
        >
          {choice !== null ? (
            <button
              type="button"
              onClick={() => setSettingsOpen(false)}
              aria-label="Cookie-instellingen sluiten"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-[#244A30] transition-colors hover:bg-[#E8EFE8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B7F4B] cursor-pointer"
            >
              <UIcon name="cross-small" className="text-xl" aria-hidden="true" />
            </button>
          ) : null}

          <div className={choice !== null ? 'pr-10' : ''}>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C95E3E]">Jouw privacykeuze</p>
            <h2 id="cookie-consent-title" className="mt-2 font-heading text-2xl font-bold text-[#244A30]">
              Help je ons de website verbeteren?
            </h2>
            <p id="cookie-consent-description" className="mt-3 max-w-2xl text-sm leading-6 text-[#4F5F54]">
              Noodzakelijke opslag onthoudt je keuze. Zonder toestemming gebruikt Google Analytics beperkte metingen zonder Analytics-cookies. Met jouw toestemming krijgen we completere gebruiksstatistieken en mag Analytics cookies plaatsen.
            </p>
            <a
              href="/privacyverklaring/"
              className="mt-3 inline-block text-sm font-semibold text-[#3B7F4B] underline decoration-[#3B7F4B]/40 underline-offset-4 hover:decoration-[#3B7F4B] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B]"
            >
              Lees hoe we cookies gebruiken
            </a>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={rejectAnalytics}
              className="min-h-12 rounded-full border-2 border-[#3B7F4B] bg-white px-5 py-3 text-sm font-bold text-[#244A30] transition-colors hover:bg-[#E8EFE8] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B]"
            >
              Alleen noodzakelijke cookies
            </button>
            <button
              type="button"
              onClick={acceptAnalytics}
              className="min-h-12 rounded-full border-2 border-[#3B7F4B] bg-white px-5 py-3 text-sm font-bold text-[#244A30] transition-colors hover:bg-[#E8EFE8] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B]"
            >
              Alles toestaan
            </button>
          </div>
        </aside>
      ) : null}
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

