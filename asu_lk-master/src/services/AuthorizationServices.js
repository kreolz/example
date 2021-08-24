/**
 *      Сервис авторизации.
 *      @author Kostenko V.V.
 *
 */
import axios from '../plugins/axios'


async function login(user) {
    try{
        return await axios.post('api/v1/enrollee/account/login',{
            email: user.login,
            password: user.password
        })
    }catch (e) {
        throw e
    }
}
async function logout(){
    try{
        return await axios.post('api/v1/enrollee/account/logout')
    }catch (e) {
        throw e
    }
}
async function refresh(){
    try {
        return await axios.get('/api/v1/enrollee/account/refresh')
    }catch (e) {
        throw e
    }
}
async function getInfoUserAndRole() {
    try {
        return await axios.get('api/v1/enrollee/account/info')
    }catch (e) {
        throw e
    }
}

async function forgotPassword(email) {
    try{
        return await axios.post('api/v1/enrollee/account/forgotpassword',{
            email: email
        })
    }catch (e) {
        throw e
    }
}

async function resetPassword(id, code) {
    try{
        return await axios.get('api/v1/enrollee/account/resetpassword?'+'id='+id+'&code='+code)
    }catch (e) {
        throw e
    }
}

export default {
    login,
    logout,
    getInfoUserAndRole,
    forgotPassword,
    resetPassword,
    refresh,
}

