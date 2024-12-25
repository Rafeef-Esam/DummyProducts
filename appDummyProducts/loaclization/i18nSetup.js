import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import { AppState } from 'react-native';

// Import your translation files
import en from './locales/en.json';
import ar from './locales/ar.json';

const updateLanguage = () => {
  const locales = RNLocalize.getLocales(); // Returns an array of locales
  const fallback = { languageTag: 'en', isRTL: false };
  const { languageTag, isRTL } = locales[0] || fallback;

  i18n.changeLanguage(languageTag); // Update the language in i18n
  console.log(`Detected language: ${languageTag}, RTL: ${isRTL}`);
};

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    interpolation: {
      escapeValue: false,
    },
  });

// Initial language setup
updateLanguage();

// Track app state changes to detect locale updates
AppState.addEventListener('change', (nextAppState) => {
  if (nextAppState === 'active') {
    // When the app becomes active, re-check the language
    updateLanguage();
  }
});

export default i18n;
