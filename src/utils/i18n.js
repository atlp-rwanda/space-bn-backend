import i18n from 'i18n';

i18n.configure({
  locales: ['en', 'fr', 'ki', 'sw'],
  directory: `${__dirname}/../../locales/`,
  defaultLocale: 'en',
  register: global,
  headers: 'Accept-Language'
});

function translate (p, l) {
  return __({ phrase: p, locale: l})
}

translate(('User registered'), 'en');
export default i18n;
