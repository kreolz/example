import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import router from '@/router/index'
import CardServices from "@/services/CardServices";

Vue.config.productionTip = false

const app = new Vue({
  store,
  vuetify,
  router,
  render: h => h(App),
  created() {
    store.dispatch('authentication/loginClient');
    store.dispatch('catalog/get_groups')
    store.dispatch('catalog/get_rooms')
    store.dispatch('catalog/get_teachers_for_timetable')
    store.dispatch('catalog/get_chairs')
    store.dispatch('timetable/get_consultations')
    store.dispatch('timetable/get_retakes')
    store.dispatch('timetable/get_subject_commissions')
    // eslint-disable-next-line no-unused-vars
    let intervalLoadCatalogData = setInterval(function (){
      store.dispatch('authentication/loginClient');
      store.dispatch('catalog/get_groups')
      store.dispatch('catalog/get_rooms')
      store.dispatch('catalog/get_teachers_for_timetable')
      store.dispatch('timetable/get_consultations')
      store.dispatch('timetable/get_retakes')
      store.dispatch('timetable/get_subject_commissions')
    }, 300000)


    try{
      // eslint-disable-next-line no-undef
      cardService.executeCard(CardServices.setNumberCard)
    } catch (e) {
      console.log('Доступ к голосовому помошнику в Web клиенте появится в следуещей версии!');
    }
  }
})
store.$app = app
store.$router = router
    app.$mount('#app')
