import Vue from 'vue'
import Vuex from 'vuex'
import AdminLogin from './AdminLogin/AdminLogin.js'
import Roomsinfo from './Roomsinfojs/Roomsinfo.js'
import Login from './Login/login'
import Subjects from './Subjects/subjects'
import  Students from './Student_table/studentable'

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
        Roomsinfo,
        Login,
        Subjects,
        Students

    },
})
