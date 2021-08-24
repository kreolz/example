/**
 *  Конфигурация axios
 */
import cookie from 'vue-cookies'
import router from '../router'
import store from '@/store/index'
import axios from 'axios'
const api = axios.create({ baseURL: 'https://api2.rb.asu.ru' })
api.interceptors.request.use(request => requestInterceptor(request))

api.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error),
)

const requestInterceptor = (request) => {
    let token = store.getters['authentication/GET_ACCESS_TOKEN_CLIENT'];
    //let token = localStorage.getItem('accessToken')
    console.log(token)
    if (token) {
        api.defaults.headers.common ={'Authorization' : `Bearer ${token}`};
    }
    request.withCredentials = true
    request.headers['x-xsrf-token'] = cookie.get('.AspNetCore.Xsrf')
    return request
}

const successHandler = (response) => {
    return new Promise((resolve) => {
        if (response.status === 200) {
            resolve(response)
        }
    })
}

const errorHandler = (error) => {
    return new Promise((resolve, reject) => {
        if (error.response.status === 400) {
            return reject(error.response)
        }
        if (error.response.status === 401 || error.response.status === 403) {
            if ([401, 403].indexOf(error.response.status) !== -1) {
                router.push({ path: '/' })
            }
            return reject(error.response)
        }
        return reject(error.response)
    })
}

export default api
