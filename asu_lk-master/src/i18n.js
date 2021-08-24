import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from 'vuetify/lib/locale/en'
import ru from 'vuetify/lib/locale/ru'
import kz from 'vuetify/lib/locale/ru'

Vue.use(VueI18n)

const messages = {
  en: {
    ...require('@/locales/en.json'),
    $vuetify: en,
  },
  ru: {
    ...require('@/locales/ru.json'),
    $vuetify: ru,
  },
  kz: {
    ...require('@/locales/kz.json'),
    $vuetify: kz,
  },
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'ru',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'ru',
  messages,
})
