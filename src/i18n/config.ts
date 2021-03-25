import i18n from 'i18next';
import translationEN from './en/translation.json';
import translationZH from './zh-CN/translation.json';
import { initReactI18next } from 'react-i18next';

export const resources = {
  en: {
    translation: translationEN,
  },
  'zh-CN': {
    translation: translationZH,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'zh-cn',
  resources,
});