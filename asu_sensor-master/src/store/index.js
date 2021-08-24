import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import news from "@/store/modules/news"
import catalog from "@/store/modules/catalog"
import  userPage from '@/store/modules/userpage'
import authentication from "@/store/modules/authentication"
import timetable from '@/store/modules/timetable'

import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    app,
    news,
    catalog,
    userPage,
    authentication,
    timetable,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})
