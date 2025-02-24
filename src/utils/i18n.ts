const translations = {
  en: {
    'nav.services.web': 'Website Development',
    'nav.services.web.link': '/en/website-development',
    'nav.services.mobile': '/en/Mobile Development',
    'nav.services.mobile.link': '/en/mopbile-development',
    'nav.services.mentoring': 'Mentoring',
    'nav.services.mentoring.link': '/en/mentoring',
    'nav.services': 'Services',
    'nav.blog.link': '/en/blog',
    'nav.blog': 'Blog',
    'nav.contact.link': '/en/contact',
    'nav.contact': 'Contact',
    'nav.community.link': '/en/community',
    'nav.community': 'Community',
    'lang.ro': 'RO',
    'lang.en': 'EN',
  },
  ro: {
    'nav.services.web': 'Dezvoltare Website',
    'nav.services.web.link': 'dezvoltare-website',
    'nav.services.mobile': 'Aplicatii Telefon',
    'nav.services.mobile.link': '/aplicatii-telefon',
    'nav.services.mentoring': 'Mentorat',
    'nav.services.mentoring.link': '/mentorat',
    'nav.services': 'Servicii',
    'nav.blog.link': '/blog',
    'nav.blog': 'Blog',
    'nav.contact.link': '/contact',
    'nav.contact': 'Contact',
    'nav.community.link': '/comunitate',
    'nav.community': 'Comunitate',
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
