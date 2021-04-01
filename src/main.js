import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import PortalVue from 'portal-vue'
import VueGeolocation from 'vue-browser-geolocation';
Vue.use(VueGeolocation);

Vue.use(PortalVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
