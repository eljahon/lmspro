import server from "@/service/axios_init";

export default {
    state: {
        roominfo:{}

    },
    getters: {

        roominfo: state => {
            console.log(state.roominfo)
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
        createRoom({dispatch}, payload) {
            return new Promise((resolve, reject) => {
                server.post("/v1/admin/learning-centre/room", payload)
                    .then(res => {
                        dispatch("getRoomList")
                        console.log(res)

                        resolve()

                    })
                    .catch(err => {
                        console.log(err)
                        reject()
                    }).finally(() => {
                })
            })
        },
        updateRoom({dispatch}, payload) {
            return new Promise((resolve, reject) => {
                server.put(`/v1/admin/learning-centre/room/${payload.id}`, payload.room)
                    .then(res => {
                        console.log(res)
                        dispatch("getRoomList");
                        resolve();
                    })
                    .catch(err => {
                        console.log(err)
                        reject();
                    })
            })
        },
        deletRoom({dispatch}, payload) {
            return new Promise(((resolve, reject) => {
                server.remove("/v1/admin/learning-centre/room/" + payload)
                    .then((res) => {
                            dispatch("getRoomList")
                            console.log(res, "ok")

                            resolve()

                        }
                    )
                    .catch(err => {
                            console.log(err)
                            reject()
                        }
                    )
            }))
        }

    }
}