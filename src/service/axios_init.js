import axios from "axios";
// import basic from "./requests"
const SEVER_HOST = "https://lmspro-uz.herokuapp.com/api"


const token = false



function ErrorHandler (error) {
    console.log(error)
    if (error.message.startsWith('timeout')) {
        console.log('TimeOut')
    }
    if (error.response) {
        let _error = error.response
        switch (_error.status) {
            case 400: alert('Bad request')
                break
            case 401: alert('Unauthorized')
                break
            case 403: alert('Forbidden')
                break
            case 404: alert('Not Found')
                break
            case 500: alert('Internal Server Error')
                break
            default: break
        }

    }
}

const init = {
    request (method, url, params, data) {
        let config  = {
            baseURL:SEVER_HOST,
            timeout: 10000,
            url: url,
            method: method
        }
        if (token) {
            config.headers = {
                Authorization: token
            }
        }
        if (data) config.data = data

        if (params) config.params = params

        let result = axios(config)

        return new Promise((resolve, reject) => {
            result.then(res => {
                resolve(res.data)
            }).catch(error => {
                ErrorHandler(error)
                reject(error)
            })
        })
        // axios(config).then(res => {
        //     return Promise.resolve(res.data)
        // })
        // .catch(error => {
        //     ErrorHandler(error)
        // })
        // return axios(config)
    },
    get (url, params) {
        return this.request('GET', url, params, undefined)
    },
    post (url, data, params) {
        return Promise.resolve(this.request('POST', url, params, data))
    },
    put (url, data, params) {
        this.request('PUT', url, params, data)
    },
    remove (url, data, params) {
        this.request('DELETE', url, params, undefined)
    },
}

export default init;