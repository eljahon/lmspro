import request from "@/service/axios_init";

export default {
    state:{},
    getters:{},
    mutations:{},
    actions:{
        authenticate(state, login ,sendtoken){
            return new Promise((resolve, reject) => {
                request.post('/authenticate',login ,sendtoken)
                    .then(res => {
                        if (res.status === 200 && res.body.token) {
                            resolve();
                            const {token, learningCentres,marketplaceId} = res.body;
                            console.log(token)
                            console.log(res)
                            localStorage.setItem('learningCentresid', learningCentres[0].id)
                            localStorage.setItem("marketplaceId",marketplaceId)
                            localStorage.setItem('token', token);
                            let usertoken = {surname: res.body.user.lastName, name: res.body.user.firstName}
                            localStorage.setItem('usertoken', JSON.stringify(usertoken));

                        }
                    })
                    .catch(err=>{
                    console.log(err)
                        reject()
                })
            })

}
    }

}