import  server from '../../service/axios_init.js'
export  default {
    state:{
        studentable:{}
    },
    getters:{
        studentinfo: state=>{
            return state.studentable
        }
    },
    mutations:{
        STUDENTDATE(state ,payload){
            state.studentable=payload;
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
        }
    }
}