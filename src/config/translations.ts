import en from '../locales/en.json';
import es from '../locales/es.json';

const translations = { en, es };

export function getTranslations(lang: string) {
    return translations[lang] || translations.en;
}
