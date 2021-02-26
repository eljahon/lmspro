import server from "@/service/axios_init";

export default {
    state: {
        roominfo: {}
    },
    getters: {
        roominfo: state => {
            return state.roominfo;
        }
    },
    mutations: {
        ROOMSINFO(state, payload) {
            state.roominfo = payload;

        }
    },
    actions: {
         getRoomList({commit}) {
            return new Promise(((resolve, reject) => {
                let learningCentreIds = localStorage.getItem('learningCentresid')
                server.get('/v1/admin/learning-centre/room', {learningCentreIds})
                    .then(res => {
                        commit("ROOMSINFO", res.body)
                        resolve(res.body)
                    })
                    .catch(reject)
            }))
        },

    }
}