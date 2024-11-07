import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend) // i18next-http-backend'i kullanın
    .use(LanguageDetector) // Kullanıcının tarayıcı dil ayarlarını algılamak için i18next-browser-languagedetector kullanın
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true, // Geliştirme modunda hata ayıklama için kullanılır
        interpolation: {
            escapeValue: false // HTML kodlarını çevirmek için kullanılır
        }
    });

export default i18n;
