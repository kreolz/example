/**
 *      Модуль авторизации Клиента и пользователя приложения
 *      TODO доделать авторизацию для пользователя
 *      @author Kostenko V.
 */
import oauth from 'client-oauth2'
import ErrorServices from "@/services/ErrorServices";
const state = {
    status: '',
    accessTokenClient: '',
    typeAccessTokenClient: '',
    otherOauthDataClient: '',
    scopesClient: ''
};

const getters = {
    GET_STATUS_OAUTH: state =>{
        return state.status
    },
    GET_ACCESS_TOKEN_CLIENT: state =>{
        return state.accessTokenClient
    },
    GET_TYPE_ACCESS_TOKEN: state =>{
        return state.typeAccessTokenClient
    },
    GET_SCOPES_CLIENT: state =>{
        return state.scopesClient
    },
    GET_OTHER_OAUTH_DATA_CLIENT: state =>{
        return state.otherOauthDataClient
    }
};

const actions = {
    async loginClient({commit}){
        await commit('OAUTH_REQUEST');
        const localOauth = new oauth({
            clientId: 'sensorclient',
            clientSecret: '511536EF-F270-4058-80CA-1C89C192F69A',
            accessTokenUri: 'https://auth.rb.asu.ru/connect/token',
            authorizationUri: 'https://auth.rb.asu.ru/connect/authorize'
        });
        try{
            let dataOauth = await localOauth.credentials.getToken();
            localStorage.setItem('accessToken', dataOauth.accessToken);
            commit('SAVE_ACCESS_TOKEN_CLIENT', dataOauth.accessToken);
            commit('SAVE_OTHER_OAUTH_DATA_CLIENT', dataOauth.data);
            commit('SAVE_TYPE_ACCESS_TOKEN_CLIENT', dataOauth.tokenType);
            commit('OAUTH_SUCCESS');
        }catch (e) {
            commit('OAUTH_ERROR');
            throw e
        }
    },
    logoutClient({commit}){
        commit('LOGOUT')
    }
};

const mutations = {
    SAVE_ACCESS_TOKEN_CLIENT(state, token) {
        state.accessTokenClient = token
    },
    SAVE_OTHER_OAUTH_DATA_CLIENT(state, data){
        state.otherOauthDataClient = data
    },
    SAVE_TYPE_ACCESS_TOKEN_CLIENT(state, type){
        state.typeAccessTokenClient = type
    },
    SAVE_SCOPES_CLIENT(state, scopes){
        state.scopesClient = scopes
    },
    OAUTH_REQUEST(state){
        state.status = 'loading'
    },
    OAUTH_SUCCESS(state){
        state.status = 'success'
    },
    OAUTH_ERROR(state){
        ErrorServices.errorHandler("Ошибка авторизации клиента")
            state.status = 'error'
    },
    LOGOUT(state){
        state.status = '';
        state.accessTokenClient = ''
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
