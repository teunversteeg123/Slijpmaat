import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageSliderProps {
  className?: string;
}

export const LanguageSlider: React.FC<LanguageSliderProps> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      translate="no"
      aria-label="Taal / Language: NL of EN"
      className={`notranslate relative inline-flex items-center rounded-full bg-[#E5ECE5] p-1 border border-[#cad5c8] shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)] select-none ${className}`}
    >
      {/* Sliding background pill indicator */}
      <span
        aria-hidden="true"
        className={`absolute top-1 bottom-1 w-[32px] sm:w-[34px] rounded-full bg-white shadow-sm transition-transform duration-200 ease-out ${
          language === 'en' ? 'translate-x-[32px] sm:translate-x-[34px]' : 'translate-x-0'
        }`}
      />

      {/* NL Button */}
      <button
        type="button"
        translate="no"
        onClick={() => setLanguage('nl')}
        className={`notranslate relative z-10 flex h-6 w-[32px] sm:w-[34px] items-center justify-center rounded-full text-xs font-bold transition-all cursor-pointer focus:outline-none ${
          language === 'nl' ? 'text-[#3B7F4B] font-extrabold scale-105' : 'text-[#657068] hover:text-[#203728]'
        }`}
        aria-pressed={language === 'nl'}
        title="Nederlands (NL)"
      >
        NL
      </button>

      {/* EN Button */}
      <button
        type="button"
        translate="no"
        onClick={() => setLanguage('en')}
        className={`notranslate relative z-10 flex h-6 w-[32px] sm:w-[34px] items-center justify-center rounded-full text-xs font-bold transition-all cursor-pointer focus:outline-none ${
          language === 'en' ? 'text-[#3B7F4B] font-extrabold scale-105' : 'text-[#657068] hover:text-[#203728]'
        }`}
        aria-pressed={language === 'en'}
        title="English (EN)"
      >
        EN
      </button>
    </div>
  );
};
