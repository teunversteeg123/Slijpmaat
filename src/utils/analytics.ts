const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() ?? '';

type GtagArguments = [command: string, ...parameters: unknown[]];
type AnalyticsEventParameters = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: GtagArguments[];
    gtag?: (...args: GtagArguments) => void;
  }
}

const GOOGLE_TAG_SCRIPT_ID = 'slijpmaat-google-analytics';
const GA_COOKIE_LIFETIME_SECONDS = 60 * 60 * 24 * 90;

let consentDefaultsSet = false;
let analyticsInitialized = false;
let lastTrackedPath = '';
let pendingPageView: { path: string; title: string } | null = null;

export const isAnalyticsConfigured = /^G-[A-Z0-9]+$/i.test(measurementId);

const ensureGtag = () => {
  if (typeof window === 'undefined') return null;

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = window.gtag ?? ((...args: GtagArguments) => {
    window.dataLayer?.push(args);
  });

  return window.gtag;
};

export const setDefaultGoogleConsent = () => {
  if (consentDefaultsSet || typeof window === 'undefined') return;

  const gtag = ensureGtag();
  gtag?.('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    ads_data_redaction: true,
  });
  consentDefaultsSet = true;
};

const sendPageView = ({ path, title }: { path: string; title: string }) => {
  if (!analyticsInitialized || path === lastTrackedPath) return;

  ensureGtag()?.('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: title,
  });
  lastTrackedPath = path;
};

export const trackPageView = (path: string, title: string) => {
  if (typeof window === 'undefined') return;

  const pageView = { path, title };
  pendingPageView = pageView;
  sendPageView(pageView);
};

export const trackAnalyticsEvent = (eventName: string, parameters: AnalyticsEventParameters = {}) => {
  if (!analyticsInitialized || typeof window === 'undefined') return;

  ensureGtag()?.('event', eventName, parameters);
};

export const initializeGoogleAnalytics = () => {
  if (!isAnalyticsConfigured || typeof window === 'undefined') return;

  setDefaultGoogleConsent();
  const gtag = ensureGtag();

  if (!analyticsInitialized) {
    const script = document.createElement('script');
    script.id = GOOGLE_TAG_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);

    gtag?.('js', new Date());
    gtag?.('config', measurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_expires: GA_COOKIE_LIFETIME_SECONDS,
      send_page_view: false,
    });
    analyticsInitialized = true;
  }

  sendPageView(pendingPageView ?? { path: window.location.pathname, title: document.title });
};

export const enableGoogleAnalytics = () => {
  if (!isAnalyticsConfigured || typeof window === 'undefined') return;

  setDefaultGoogleConsent();
  ensureGtag()?.('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  initializeGoogleAnalytics();
};

const expireCookie = (name: string, domain?: string) => {
  const domainPart = domain ? `; domain=${domain}` : '';
  document.cookie = `${name}=; Max-Age=0; path=/${domainPart}; SameSite=Lax`;
};

const clearGoogleAnalyticsCookies = () => {
  if (typeof document === 'undefined') return;

  const hostname = window.location.hostname;
  const rootDomain = hostname.split('.').length > 1
    ? `.${hostname.split('.').slice(-2).join('.')}`
    : undefined;

  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0]?.trim();
    if (!name?.startsWith('_ga')) return;

    expireCookie(name);
    if (hostname) expireCookie(name, hostname);
    if (rootDomain) expireCookie(name, rootDomain);
  });
};

export const disableGoogleAnalytics = () => {
  if (typeof window === 'undefined') return;

  setDefaultGoogleConsent();
  ensureGtag()?.('consent', 'update', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  clearGoogleAnalyticsCookies();
};

