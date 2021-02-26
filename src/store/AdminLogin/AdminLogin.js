export default {
    state: {
        account: {},
        loader: false,
        drawer: false,

    },
    getters: {
        loader: state => state.loader,
        userdata: state => {
            return state.account.user;
        },
        navbar_appbar: state => state.drawer
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