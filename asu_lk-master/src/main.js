// =========================================================
// * Vuetify Material Dashboard - v2.1.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vuetify-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import vuetify from './plugins/vuetify'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

import i18n from './i18n'
Vue.config.productionTip = false

Vue.use(VueToast, {
  position: 'top-right'
})

const app = new Vue({
  router,
  store,
  vuetify,
  i18n,
  mounted(){
    //store.dispatch('authorization/start')
  },
  render: h => h(App),
})
store.$app = app
store.$router = router
    app.$mount('#app')
