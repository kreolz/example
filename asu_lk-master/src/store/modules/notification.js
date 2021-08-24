const state = {
    idPlan: '',
    show: false,
    color: "info",
    left: false,
    multiLine: true,
    right: true,
    timeout: 5000,
    top: true,
    vertical: true,
    text: '',
    icon: '',
}
const getters = {}

const actions = {
    show_error({commit, dispatch, state}, message){
        clearTimeout(state.idPlan)
        commit('SAVE_NOTIFICATION', {
            show: true,
            color: "error",
            left: false,
            multiLine: true,
            right: true,
            timeout: 5000,
            top: true,
            vertical: true,
            text: message,
            icon: 'mdi-error',
        })
        let id = setTimeout(()=>{
            dispatch('reset')
        }, state.timeout)
        commit('SAVE_ID_PLAN', id)
    },
    show_success({commit, dispatch, state}, message){
        clearTimeout(state.idPlan)
        commit('SAVE_NOTIFICATION', {
            show: true,
            color: "success",
            left: false,
            multiLine: true,
            right: true,
            timeout: 5000,
            top: true,
            vertical: true,
            text: message,
            icon: 'mdi-ok',
        })
        let id = setTimeout(()=>{
            dispatch('reset')
        }, state.timeout)
        commit('SAVE_ID_PLAN', id)
    },
    show_info({commit, dispatch, state}, message){
        clearTimeout(state.idPlan)
        commit('SAVE_NOTIFICATION', {
            show: true,
            color: "info",
            left: false,
            multiLine: true,
            right: true,
            timeout: 5000,
            top: true,
            vertical: true,
            text: message,
            icon: 'mdi-info',
        })
        let id = setTimeout(()=>{
            dispatch('reset')
        }, state.timeout)
        commit('SAVE_ID_PLAN', id)
    },
    reset({commit}){
        commit('SAVE_NOTIFICATION', {
            show: false,
            color: "info",
            left: false,
            multiLine: true,
            right: true,
            timeout: 5000,
            top: true,
            vertical: true,
            text: '',
            icon: '',
        })
    }
}

const mutations = {
    SAVE_NOTIFICATION(state, newState){
        state.show = newState.show
        state.color = newState.color
        state.left = newState.left
        state.multiLine = newState.multiLine
        state.right = newState.right
        state.timeout = newState.timeout
        state.top = newState.top
        state.vertical = newState.vertical
        state.text = newState.text
        state.icon = newState.icon
    },
    SAVE_ID_PLAN(state, val){
        state.idPlan = val
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
