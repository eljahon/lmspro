import server from '../../service/axios_init.js'
import login from "@/store/Login/login";
import LoginPage from "@/views/LoginPage";

export default {
    state: {
        subjectslist:[]
    },
    getters: {
        subjectlistname: state => state.subjectslist,

    },
    mutations: {

        QUESTION(state, payload) {
            state.subjectslist = payload;
        },

    },
    actions: {
        getSubjectList({commit}) {
            return new Promise((resolve, reject) => {
                let learningCentreIds = localStorage.getItem("learningCentresid")
                server.get("/v1/admin/questions/listing?" + learningCentreIds)
                    .then(res => {
                        commit("QUESTION", res.body)
                        console.log(res.body)
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
        // updateSubject({dispatch},id){
        //     return new Promise((resolve, reject) => {
        //         server.put("")
        //               .then(res=>{
        //                   console.log(res)
        //                   resolve();
        //                   dispatch("getSubjectList")
        //               })
        //               .catch(err=>{
        //                   console.log(err)
        //                   reject();
        //               })
        //     })
        // },
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
