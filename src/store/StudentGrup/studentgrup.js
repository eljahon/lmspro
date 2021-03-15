import  server from '../../service/axios_init'
export  default {
    state:{studentgrup:[]},
    getters:{
        studentgrupinfo:state=>state.studentgrup
    },
    mutations:{
        STUDENTGRUP(state,payload){

            state.studentgrup=payload;
        }
    },
    actions:{
        getStudentGrupList({commit}){

            return new Promise((resolve, reject) => {
                let objid={
                    marketplaceIds:localStorage.getItem("marketplaceId"),
                    learningCentreIds:localStorage.getItem("learningCentresid")
                }
                server.get("/v1/admin/learning-centre/student-group?"+objid.marketplaceIds+objid.learningCentreIds)
                    .then(res=>{
                        console.log(res);
                        commit("STUDENTGRUP",res.body)
                        resolve();
                      })
                    .catch(err=>{
                        console.log(err);
                        reject();
                    })
            })
        }
    }
}