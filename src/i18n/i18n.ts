import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./locales/en.json";
import spanish from "./locales/es.json";

const LANGUAGE_STORAGE_KEY = "sabor-y-barra-language";
const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
const initialLanguage = savedLanguage === "es" ? "es" : "en";

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: english },
    es: { translation: spanish },
  },
  lng: initialLanguage,
  fallbackLng: "en",
  supportedLngs: ["en", "es"],
  interpolation: {
    escapeValue: false,
  },
});

document.documentElement.lang = initialLanguage;
document.title = i18n.t("meta.title");

i18n.on("languageChanged", (language) => {
  const supportedLanguage = language === "es" ? "es" : "en";
  localStorage.setItem(LANGUAGE_STORAGE_KEY, supportedLanguage);
  document.documentElement.lang = supportedLanguage;
  document.title = i18n.t("meta.title");
});

export default i18n;
