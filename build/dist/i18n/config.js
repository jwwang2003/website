import i18n from "../../_snowpack/pkg/i18next.js";
import translationEN from "./en/translation.json.proxy.js";
import translationZH from "./zh-CN/translation.json.proxy.js";
import {initReactI18next} from "../../_snowpack/pkg/react-i18next.js";
export const resources = {
  en: {
    translation: translationEN
  },
  "zh-CN": {
    translation: translationZH
  }
};
i18n.use(initReactI18next).init({
  lng: "zh-cn",
  resources
});
