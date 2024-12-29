import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import { AppState } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import your translation files
import en from './locales/en.json';
import ar from './locales/ar.json';

const updateLanguage = async () => {
  // Try to fetch saved language from AsyncStorage
  const savedLanguage = await AsyncStorage.getItem('language');
  const locales = RNLocalize.getLocales(); 
  const fallback = { languageTag: 'en', isRTL: false };

  // If a saved language exists, use it. Otherwise, use the locale-based language.
  const { languageTag, isRTL } = savedLanguage
    ? { languageTag: savedLanguage, isRTL: languageTag === 'ar' }
    : locales[0] || fallback;

  // Change language in i18n
  i18n.changeLanguage(languageTag);

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

// Initial language setup based on saved language or locale detection
updateLanguage();

// Track app state changes to detect locale updates
AppState.addEventListener('change', (nextAppState) => {
  if (nextAppState === 'active') {
    // When the app becomes active, re-check the language
    updateLanguage();
  }
});

export default i18n;
