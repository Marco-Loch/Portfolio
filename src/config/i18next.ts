import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((lang: string) => import(`../locales/${lang}/${lang}.json`)))
  .init({
    fallbackLng: 'en',
    supportedLngs: ['de', 'en'],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
