import React, { createContext, useContext, useState, useEffect } from 'react';
import { id } from '../translations/id';
import { en } from '../translations/en';

type Language = 'id' | 'en';
type Translations = typeof id;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('id');

  useEffect(() => {
    // 1. Check localStorage
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'id' || savedLang === 'en')) {
      setLanguageState(savedLang);
      return;
    }

    // 2. Auto-detect logic
    const detectLanguage = async () => {
      try {
        // Try browser language first
        const browserLang = navigator.language.split('-')[0];
        if (browserLang === 'id') {
          setLanguageState('id');
          return;
        }

        // Optional: IP-based detection for more accuracy (using ipapi.co as it's free for small volume)
        // But for better performance, we prioritize browser locale first.
        // We only fallback to EN if not ID.
        setLanguageState('en');
      } catch (error) {
        setLanguageState('id'); // Default to ID if detection fails
      }
    };

    detectLanguage();
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  const t = language === 'id' ? id : en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
