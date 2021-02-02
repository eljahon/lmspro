import axios from 'axios'

const SEVER_HOST = "https://lmspro-uz.herokuapp.com/api"
const TOKEN = "Bearer eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJtYXJrZXRwbGFjZUlkIjoxLCJsY2lkcyI6WzFdLCJ1c2VySWQiOjEsImF1dGhvcml0aWVzIjpbIlNVUEVSX0FETUlOIiwiQURNSU4iLCJNQVJLRVRQTEFDRV9PV05FUiJdLCJzdWIiOiJhZG1pbiIsImlhdCI6MTYxMjAzMTAzOSwiZXhwIjoxNjEyMTE3NDM5fQ.OS_N9EHgD6R2TfvZV0yosupeYDKe-v3s_u1lr5w1mQE";


const requests = {

    get(api, params = {}, headers = {}) {
        return axios.get(
            `${SEVER_HOST}${api}`,
            {
                params,
                headers: {
                    Authorization: TOKEN,
                    ...headers
                }
            }
        )
    }
}

export default requests;