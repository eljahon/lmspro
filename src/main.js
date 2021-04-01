import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import PortalVue from 'portal-vue'
import VueGeolocation from 'vue-browser-geolocation';
import YmapPlugin from 'vue-yandex-maps'

Vue.use(YmapPlugin, {
  apiKey: '1d47efd1-f633-41db-a353-234f595d9c1a',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
})

Vue.use(VueGeolocation);

Vue.use(PortalVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
