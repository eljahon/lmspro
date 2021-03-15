import  server from '../../service/axios_init'
export  default {
    state:{
        teachers:[]
    },
    getters:{
        teacherinfo:state => state.teachers
    },
    mutations:{
        TEACHERINFO (state,payload) {

            state.teachers = payload;
        }
    },
    actions:{
        getListTeacher( {commit} ){
            return new Promise((resolve, reject) => {
                let marketplaceId=localStorage.getItem("marketplaceId");
                server.get("/v1/admin/learning-centre/teacher?"+marketplaceId)
                    .then(res => {
                        console.log(res)
                        console.log(res.body.list)
                        commit("TEACHERINFO", res.body.list);
                        resolve();
                       })
                    .catch(err=>{
                        console.log(err)
                        reject()
                    })
            })
        },
        removeTeacher({dispatch},payload ){
            return new Promise((resolve, reject) => {
                server.remove("/v1/admin/learning-centre/teacher/"+payload)
                    .then(res=>{
                        console.log(res)
                        resolve()
                        dispatch("getListTeacher");
                    })
                    .catch(err=>{
                        console.log(err)
                        reject()
                    })
            })

        },
        createTeacher({dispatch} ,payload){
            return new Promise((resolve, reject) => {
                server.post("/v1/admin/learning-centre/teacher",payload)
                    .then(res=>{
                        console.log(res)
                        resolve()
                        dispatch("getListTeacher")
                       })
                    .catch(err=>{
                        console.log(err)
                        reject()
                    })
            })
        }
    }
}