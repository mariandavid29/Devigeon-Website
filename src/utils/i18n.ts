const translations = {
  en: {
    'nav.home': 'home',
    'lang.ro': 'RO',
    'lang.en': 'EN',
  },
  ro: {
    'nav.home': 'acasă',
    'lang.ro': 'RO',
    'lang.en': 'EN',
  },
} as const;

const defaultLang = 'ro';

export function useTranslation(lang: keyof typeof translations) {
  return function t(key: keyof (typeof translations)[typeof defaultLang]) {
    return translations[lang][key] ?? translations[defaultLang][key];
  };
}
