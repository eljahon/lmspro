import server from '../../service/axios_init.js'


export default {
    state: {
        subjectslist:[]
    },
    getters: {
        subjectlistname: state => state.subjectslist,

    },
    mutations: {

        SUBJECTLIST(state, payload) {
            state.subjectslist = payload;
        },

    },
    actions: {
        getSubjectList({commit}) {
            return new Promise((resolve, reject) => {
                let learningCentreIds = localStorage.getItem("learningCentresid")
                server.get("/v1/admin/learning-centre/subject?" + learningCentreIds)
                    .then(res => {
                        commit("SUBJECTLIST", res.body)


                        resolve();
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    })
            })
        },
        removeSubject(state ,id){
            return new Promise((resolve, reject) => {
                server.remove("/v1/admin/learning-centre/subject/"+id)
                    .then(res=>{
                        console.log(res)
                        resolve();
                    })
                    .catch(err=>{
                        console.log(err)
                        reject();
                    })
            })
        },
        updateSubject({dispatch},payload){
            return new Promise((resolve, reject) => {
                server.put("/v1/admin/learning-centre/subject/"+payload.id,payload.subjectCreateDTO)
                      .then(res=>{
                          console.log(res)
                          resolve();
                          dispatch("getSubjectList")
                      })
                      .catch(err=>{
                          console.log(err)
                          reject();
                      })
            })
        },
        createSubjectAdd(state,payload){
            return new Promise((resolve, reject) => {
                server.post("/v1/admin/learning-centre/subject",payload)
                        .then(res=>{
                            console.log(res)
                            resolve()
                        })
                       .catch(err=>{
                           console.log(err)
                           reject()
                       })
            })
        },


    }
}
