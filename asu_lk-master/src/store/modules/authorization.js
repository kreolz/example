import AuthorizationServices from '../../services/AuthorizationServices'
import EnrolleeInfoServices from "../../services/API/EnrolleeInfoServices"
import router from '../../router'
import ErrorServices from "@/services/ErrorServices";
const state = {
    isAuth: false,
    token: JSON.parse(localStorage.getItem('token')) || '',
    role: '',
    auth: '',
    errorAuth: '',
    idRefresh: '',
    timeoutRefresh: 300000,
}

const getters = {
    GET_IS_AUTH(state){
        return state.isAuth
    }
}

const actions = {
    // eslint-disable-next-line no-unused-vars
    async login({commit, dispatch, rootActions}, user){
        try{
            let auth =  await AuthorizationServices.login(user)
            if(auth.data.value==='ok'){
                this.$app.$toast.success('Вы успешно прошли авторизацию! Загружаем ваш профиль.')
                await dispatch('get_info_user')
                commit('SAVE_IS_AUTH', true)
                setInterval(()=>{
                    AuthorizationServices.refresh()
                }, 300000)
                dispatch('redirect_user')
            }else{
                state.errorAuth = auth.data
            }
        }catch (e) {
            ErrorServices.apiError(e)
            // dispatch('notification/show_error', e, {root: true})
        }
    },
    async get_info_user({commit, dispatch, rootActions}){
      try {
          let infoUser = await AuthorizationServices.getInfoUserAndRole()
          commit('SAVE_AUTH', infoUser.data.value)
      }catch (e) {
          ErrorServices.apiError(e)
          // dispatch('notification/show_error', e, {root: true})
      }
    },
    async redirect_user({state}){
        let step = ''
        switch(state.auth.role){
            case 'поступающий' :
                step = await EnrolleeInfoServices.getStepByStepRegistration()
                if (step.data.value.filter( n => n.isFinished===false).length == 0){
                    localStorage.setItem('stepRegistrationIsFinished', 'true')
                    await router.push({path:'/enrollee/profile'})
                }else{
                    localStorage.setItem('stepRegistration', step.data.value)
                    await router.push({path:'/enrollee/registration'})
                }
                break;
            case 'администратор' : router.push({path:'/admin'})
                break;
            case 'модератор': router.push({path:'/moderation'})
                break;
            default: router.push({path: '/403'})
                break;
        }
    },
    set_token({commit}, token){
        localStorage.setItem()
        commit('SAVE_TOKEN', token)
    },
    async start({state, commit, dispatch, rootState}){
        try {
            //console.log(this.$router.currentRoute)
            if (this.$router.currentRoute.name=='ResetPassword'){ return }
            let infoUser = await AuthorizationServices.getInfoUserAndRole()
            commit('SAVE_AUTH', infoUser.data.value)
            AuthorizationServices.refresh()
            let id = setInterval(()=>{
                AuthorizationServices.refresh()
            }, state.timeoutRefresh)
            commit('SAVE_ID_REFRESH', id)
            //dispatch('redirect_user')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async logout(){
        try {
            await AuthorizationServices.logout()
            setTimeout(()=>{
                router.push({path: '/'})
            }, 5000)
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async forgot_password( { },email){
        try {
            await AuthorizationServices.forgotPassword(email)
            this.$app.$toast.success('Письмо с инструкциями отправлено на указанный Email')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async reset_password( { }, paramsReset){
        try {
            await AuthorizationServices.resetPassword(paramsReset.id, paramsReset.code)
            this.$app.$toast.success('Письмо с паролем было отправлено на ваш Email')
            setTimeout(()=>{
                router.push({path: '/'})
            }, 10000)
        }catch (e) {
            ErrorServices.apiError(e)
        }
    }
}

const mutations = {
    SAVE_ID_REFRESH(state, val){
        state.idRefresh = val
    },
    SAVE_IS_AUTH(state, val){
        state.isAuth = val
    },
    SAVE_AUTH(state, val){
        state.auth = val
    },
    SAVE_TOKEN(state, val){
        state.token = val
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
