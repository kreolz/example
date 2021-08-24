import Vue from 'vue'
import Vuex from 'vuex'
import enrollee from '@/store/modules/enrollee'
import app from '@/store/modules/app'
import registration from "./modules/registration"
import education from "./modules/education"
import authorization from "./modules/authorization";
import notification from "./modules/notification";
import catalog from "./modules/catalog";
import error from './modules/error'
import admin from "./modules/admin";
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        enrollee,
        app,
        registration,
        education,
        authorization,
        notification,
        catalog,
        error,
        admin
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
