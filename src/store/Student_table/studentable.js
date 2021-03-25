import  server from '../../service/axios_init.js'
export  default {
    state:{
        studentable:{},
        userbool:null,
    },
    getters:{
        studentinfo: state=>{
            return state.studentable
        },
        studenterr:state=>{
            return state.userbool
        }
    },
    mutations:{
        STUDENTDATE(state ,payload){
            state.studentable=payload;
        },
        USERHAVEORNO(state,payload){

            state.userbool=payload;

        }
    },
    actions:{
        getStudentList( {commit} ){
            return new Promise((resolve, reject) => {
               let localstoreginside={
                    learningCentreIds:localStorage.getItem("learningCentresid"),
                    marketplaceIds:localStorage.getItem("marketplaceId")
                                  }
                server.get("/v1/admin/learning-centre/student?",
                    {marketplaceIds:localstoreginside.marketplaceIds,
                    learningCentreIds:localstoreginside.learningCentreIds})
                    .then(res=>{
                        console.log(res)
                        resolve();
                        commit("STUDENTDATE",res.body.list);
                        })
                    .catch(err=>{
                        console.log(err)
                        reject();
                      })
            })
        },
        createStudent({dispatch},payload){
            return new Promise((resolve, reject) => {
                server.post("/v1/admin/learning-centre/student",payload)
                    .then(res=>{
                        console.log(res);
                        resolve();
                        dispatch("getStudentList")
                    })
                    .catch(err=>{
                        console.log(err)
                        reject();
                    })
            })
        },
        removeStudent({dispatch},payload){
            return new Promise((resolve, reject) => {
                server.remove("/v1/admin/learning-centre/student/"+payload)
                    .then(res=>{
                        console.log(res)
                        resolve();
                        dispatch("getStudentList");
                       })
                    .catch(err=>{
                        console.log(err);
                        reject();
                    })
            })
        },
        // updateStudent({dispatch},payload){
        //     return new Promise((resolve, reject) => {
        //         server.put("")
        //             .then(res=>{
        //                   console.log(res);
        //                   resolve();
        //                })
        //             .catch(err=>{
        //                 console.log(err);
        //                 reject();
        //             })
        //     })
        // }
        getLoginaAuht({commit },val){
            return new Promise((resolve, reject) => {
                server.get("/v1/username_check?",val)
                    .then(res=>{
                        console.log(res);
                            resolve();
                            commit("USERHAVEORNO",res.body)
                        })
                    .catch(err=>{
                        console.log(err)
                        reject();
                    })
            })
        }
    }
}
