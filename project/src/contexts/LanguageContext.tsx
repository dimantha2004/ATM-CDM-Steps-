import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translate: (
    translations: {
      english: string;
      sinhala: string;
      tamil: string;
    }
  ) => string;
}

const defaultValue: LanguageContextType = {
  language: 'english',
  setLanguage: () => {},
  translate: () => '',
};

const LanguageContext = createContext<LanguageContextType>(defaultValue);

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('english');

  const translate = (translations: {
    english: string;
    sinhala: string;
    tamil: string;
  }): string => {
    return translations[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;