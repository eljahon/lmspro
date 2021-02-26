import Vue from 'vue'
import Vuex from 'vuex'
import AdminLogin from './AdminLogin/AdminLogin.js'
import Roomsinfo from './Roomsinfojs/Roomsinfo.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loaderbool:true
    },

    mutations: {},
    actions: {

    },
    modules: {
        AdminLogin,
        Roomsinfo
    },
})
