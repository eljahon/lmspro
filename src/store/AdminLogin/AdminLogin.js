export default {
    state: {
        account: {},
        loader: false,
        drawer: false,
        items: [
            {title: 'Dashboard', icon: 'mdi-view-dashboard', router: '/'},
            {title: 'Student', icon: 'mdi-account-tie', router: '/Students',},
            {title: 'Teachers', icon: 'mdi-account-tie-voice', router: '/Teachers'},
            {title: 'Rooms', icon: 'mdi-cellphone-link', router: '/Rooms'},
            {title: 'Subjects', icon: 'mdi-book-open-variant', router: '/Subjects'},
            {title: 'Student Gurup', icon: 'mdi-account-multiple', router: '/StudentGrups'},
            {title: 'Time Table', icon: 'mdi-clock-time-eight-outline', router: '/TimeTable'},
            {title:'Admins',icon:'mdi-account',router:'/admins'},
            {title: 'Question', icon: 'mdi-head-question-outline', router: '/question'},


        ]

    },
    getters: {
        loader: state => state.loader,
        userdata: state => {
            return state.account.user;
        },
        navbar_appbar: state => state.drawer,
        dashbordtext: state=>state.items
    },
    mutations: {
        SET_ACCOUNT(state, account) {
            state.account = account
        },
        TOGGLE_NAVBAR(state) {
            state.drawer = !state.drawer;
        },

    },
    actions: {
        setAccountData({commit}, account) {
            commit("SET_ACCOUNT", account)
        },
        toggleNavbar({commit}) {
            commit('TOGGLE_NAVBAR');
        },


    }
}
