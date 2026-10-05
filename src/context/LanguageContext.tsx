import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Language, TRANSLATIONS } from '../translations/translations';
import { setDomLanguage } from '../utils/domTranslator';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, defaultText?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'slijpmaat_lang';

// Helper to update Google Translate cookies and element
const applyGoogleTranslate = (lang: Language) => {
  try {
    if (lang === 'nl') {
      const expired = '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = `googtrans${expired}`;
      if (window.location.hostname) {
        document.cookie = `googtrans${expired} domain=${window.location.hostname};`;
        const domainParts = window.location.hostname.split('.');
        if (domainParts.length > 1) {
          const rootDomain = '.' + domainParts.slice(-2).join('.');
          document.cookie = `googtrans${expired} domain=${rootDomain};`;
        }
      }
      document.documentElement.lang = 'nl';
      return;
    }

    const targetLang = 'en';
    const cookieValue = `/nl/${targetLang}`;

    // Set cookie across domains and paths
    document.cookie = `googtrans=${cookieValue}; path=/;`;
    if (window.location.hostname) {
      document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname};`;
      const domainParts = window.location.hostname.split('.');
      if (domainParts.length > 1) {
        const rootDomain = '.' + domainParts.slice(-2).join('.');
        document.cookie = `googtrans=${cookieValue}; path=/; domain=${rootDomain};`;
      }
    }

    document.documentElement.lang = targetLang;
  } catch (err) {
    console.debug('Language translation handler caught non-fatal issue:', err);
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'nl') {
        return saved;
      }
    } catch (_) {}
    return 'nl';
  });

  const setLanguage = useCallback((newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch (_) {}
    applyGoogleTranslate(newLang);
  }, []);

  const toggleLanguage = useCallback(() => {
    const nextLang = language === 'nl' ? 'en' : 'nl';
    setLanguage(nextLang);
  }, [language, setLanguage]);

  useEffect(() => {
    applyGoogleTranslate(language);
    setDomLanguage(language);
  }, [language]);

  const t = useCallback(
    (key: string, defaultText?: string): string => {
      const dict = TRANSLATIONS[language];
      if (dict && dict[key]) {
        return dict[key];
      }
      return defaultText ?? key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
