'use client';

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Language, LanguageOption, Translations } from './types';
import { TRANSLATIONS, LANGUAGE_OPTIONS } from './translations';

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
  currentOption: LanguageOption;
  options: LanguageOption[];
  isHydrated: boolean;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = 'karsasoft_preferred_lang';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('id');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (stored === 'id' || stored === 'en') {
        setLangState(stored);
        document.documentElement.lang = stored;
      } else {
        // Optional: detect browser language
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith('en')) {
          setLangState('en');
          document.documentElement.lang = 'en';
        }
      }
    } catch {
      // localStorage may fail in private mode or SSR
    }
    setIsHydrated(true);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
      document.documentElement.lang = newLang;
    } catch {
      // ignore
    }
  };

  const t = useMemo(() => TRANSLATIONS[lang] || TRANSLATIONS.id, [lang]);
  const currentOption = useMemo(
    () => LANGUAGE_OPTIONS.find((opt) => opt.code === lang) || LANGUAGE_OPTIONS[0],
    [lang]
  );

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t,
      currentOption,
      options: LANGUAGE_OPTIONS,
      isHydrated,
    }),
    [lang, t, currentOption, isHydrated]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    // Graceful fallback for components rendered outside provider
    return {
      lang: 'id',
      setLang: () => {},
      t: TRANSLATIONS.id,
      currentOption: LANGUAGE_OPTIONS[0],
      options: LANGUAGE_OPTIONS,
      isHydrated: false,
    };
  }
  return context;
}
