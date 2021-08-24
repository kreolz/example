import AdminEnrolleeServices from "../../services/API/AdminEnrolleeServices";
import ErrorServices from "../../services/ErrorServices";

const state = {
    enrolleeList: [],
    activeEnrollee: '',
    userId: ''
}

const getters = {

}

const actions = {
    async get_enrollee_list({commit}){
        try {
            let enrolleeList = await AdminEnrolleeServices.getEnrolleeList()
            commit('SAVE_ENROLLEE_LIST', enrolleeList.data.value)
        }catch (e) {
           ErrorServices.apiError(e)
        }
    },
    async set_active_enrollee({commit}, id){
        commit('SAVE_ACTIVE_ENROLLEE', id)
    },
    async transfer({dispatch},userId){
        try {
            await AdminEnrolleeServices.transferEnrollee(userId)
            this.$app.$toast.success('Пользователь перенесен в базу данных')
            dispatch('get_enrollee_list')
        }catch(e){
            ErrorServices.apiError(e)
        }
    },
    async unlock( { }, userId){
        try {
            await AdminEnrolleeServices.unlock(userId)
            this.$app.$toast.success('Пользователь разблокирован')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async confirmediting({ }, userId){
        try {
            await AdminEnrolleeServices.confirmediting(userId)
            this.$app.$toast.success('Пользователь Заблокирован')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async delete_enrollee( {}, userId){
        try {
            await AdminEnrolleeServices.deleteEnrollee(userId)
            this.$app.$toast.success('Пользователь удален')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    }
}

const mutations = {
    SAVE_ENROLLEE_LIST(state, payload){
        state.enrolleeList = payload
    },
    SAVE_ACTIVE_ENROLLEE(state, id){
        state.activeEnrollee = id
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
