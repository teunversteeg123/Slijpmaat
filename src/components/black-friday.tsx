import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { X } from 'lucide-react';
import { useCookieConsent } from '../context/CookieConsentContext';
import { BLACK_FRIDAY_DATES, BLACK_FRIDAY_END, BLACK_FRIDAY_OFFER, BLACK_FRIDAY_PERCENT, BLACK_FRIDAY_START, getBlackFridayPriceCents } from '../data/black-friday';
import { formatEuroCents } from '../utils/format';

const BlackFridayContext = createContext(false);
const INTRO_KEY = 'slijpmaat:seen-black-friday-2026';
const WIDGET_DELAY_MS = 10_000;

export const useBlackFriday = () => useContext(BlackFridayContext);

export function BlackFridayProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let timer: number | undefined;
    const update = () => {
      window.clearTimeout(timer);
      const now = Date.now();
      setActive(now >= BLACK_FRIDAY_START && now < BLACK_FRIDAY_END);
      const next = now < BLACK_FRIDAY_START ? BLACK_FRIDAY_START : BLACK_FRIDAY_END;
      if (next > now) timer = window.setTimeout(update, Math.min(next - now, 2_147_483_647));
    };
    update();
    document.addEventListener('visibilitychange', update);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('visibilitychange', update);
    };
  }, []);

  return (
    <BlackFridayContext.Provider value={active}>
      {children}
      {active && <BlackFridayOverlay />}
    </BlackFridayContext.Provider>
  );
}

function BlackFridayOverlay() {
  const { cookiePromptVisible } = useCookieConsent();
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const [introOpen, setIntroOpen] = useState(false);
  const [reminderReady, setReminderReady] = useState(false);
  const [reminderDismissed, setReminderDismissed] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(INTRO_KEY) === '1';
    } catch {
      // Storage can be unavailable in restricted browsing contexts.
    }
    if (!seen) {
      dialog.current?.showModal();
      closeButton.current?.focus();
      setIntroOpen(true);
    }
    const timer = window.setTimeout(() => setReminderReady(true), WIDGET_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const finishIntro = () => {
    setIntroOpen(false);
    try {
      sessionStorage.setItem(INTRO_KEY, '1');
    } catch {
      // The dialog can still be dismissed when storage is unavailable.
    }
  };

  return (
    <>
      <dialog
        ref={dialog}
        aria-labelledby="black-friday-title"
        aria-describedby="black-friday-details"
        onClose={finishIntro}
        className="fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg overflow-auto rounded-3xl border border-red-500/70 bg-[#100d0e] text-white shadow-2xl backdrop:bg-black/80"
      >
        <div className="relative bg-linear-to-br from-red-950 via-[#140c0d] to-[#100d0e] px-6 py-10 text-center sm:px-10 sm:py-14">
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            aria-label="Sluit Black Friday-melding"
            className="absolute right-3 top-3 grid size-11 place-items-center rounded-full text-white hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white"
          >
            <X aria-hidden="true" className="size-5" />
          </button>
          <h2 id="black-friday-title" className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-red-300">Black Friday bij Slijpmaat</h2>
          <p className="my-4 font-heading text-5xl font-bold sm:text-6xl">10% korting</p>
          <p id="black-friday-details" className="text-sm leading-relaxed text-red-100">
            Op je hele bestelling.<br />{BLACK_FRIDAY_DATES}, automatisch verrekend.
          </p>
          <button
            ref={closeButton}
            type="button"
            onClick={() => dialog.current?.close()}
            className="mt-7 min-h-11 rounded-full bg-red-700 px-6 py-2.5 text-sm font-bold text-white hover:bg-red-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Verder naar de site
          </button>
        </div>
      </dialog>
      {reminderReady && !introOpen && !cookiePromptVisible && !reminderDismissed && (
        <aside aria-label="Black Friday-herinnering" className="fixed right-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-[90] flex max-w-[calc(100%-1.5rem)] items-center rounded-xl border border-red-500/70 border-l-4 bg-[#160e10] pl-3 text-white shadow-lg sm:right-5 sm:bottom-5">
          <div className="py-2">
            <p className="text-sm font-bold">Pak 10% Black Friday-korting</p>
            <p className="text-xs text-red-200">{BLACK_FRIDAY_DATES}</p>
          </div>
          <button type="button" aria-label="Sluit Black Friday-herinnering" onClick={() => setReminderDismissed(true)} className="grid size-11 shrink-0 place-items-center rounded-lg hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white">
            <X aria-hidden="true" className="size-4" />
          </button>
        </aside>
      )}
    </>
  );
}

export function BlackFridayFormNotice() {
  if (!useBlackFriday()) return null;

  return (
    <div className="mb-4 rounded-xl border border-red-500/70 border-l-4 bg-[#160e10] px-4 py-3 text-white sm:mb-6">
      <p className="text-sm font-bold">{BLACK_FRIDAY_OFFER}</p>
      <p className="mt-0.5 text-xs text-red-200">Black Friday · {BLACK_FRIDAY_DATES} · automatisch verrekend</p>
    </div>
  );
}

export function BlackFridayPrice({ cents }: { cents: number }) {
  const active = useBlackFriday();
  if (!active) return <>{formatEuroCents(cents)}</>;

  return (
    <>
      <del className="mr-1.5 font-medium text-[#657068]">{formatEuroCents(cents)}</del>
      <span className="inline-flex flex-wrap items-baseline gap-x-1.5 text-red-700">
        {formatEuroCents(getBlackFridayPriceCents(cents))}
        <span className="whitespace-nowrap rounded bg-red-100 px-1.5 py-0.5 text-[10px] font-bold">{BLACK_FRIDAY_PERCENT}% korting</span>
      </span>
    </>
  );
}
