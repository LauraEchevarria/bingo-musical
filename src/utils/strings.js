import es from '../constants/strings/es.json';
import en from '../constants/strings/en.json';

const translations = { es, en };

export const t = (key) => {
  let currentLanguage = 'es'; // @todo

  const value = translations[currentLanguage][key];
  if (!value) {
    console.warn(`String '${key}' not found in '${currentLanguage}'.`);
    return '';
  }
  return value;
};
