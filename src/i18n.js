import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Traducciones en diferentes idiomas
const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      about: "About Us",
      contact: "Contact",
    },
  },
  es: {
    translation: {
      welcome: "Bienvenido",
      about: "Sobre Nosotros",
      contact: "Contacto",
    },
  },
  ca: {
    translation: {
      welcome: "Benvingut",
      about: "Sobre Nosaltres",
      contact: "Contacte",
    },
  },
};

i18n
  .use(LanguageDetector) // Detectar idioma del navegador
  .use(initReactI18next) // Inicializar i18next con React
  .init({
    resources,
    fallbackLng: "en", // Idioma por defecto
    interpolation: {
      escapeValue: false, // No escapar valores (para usar HTML en las traducciones)
    },
  });

export default i18n;