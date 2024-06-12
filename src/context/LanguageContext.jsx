import { createContext, useContext, useState, useEffect } from "react";
import enTranslations from "../assets/lang/en_EN.json";
import idTranslations from "../assets/lang/id_ID.json";
import jpTranslations from "../assets/lang/jp_JP.json";

const LanguageContext = createContext();

const translations = {
  en: enTranslations,
  id: idTranslations,
  jp: jpTranslations,
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: changeLanguage, translations }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
