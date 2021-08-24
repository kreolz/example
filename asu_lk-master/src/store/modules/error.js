/**
 *           Хранит информацию об ошибках выполнения приложения, а так же для привязки компонентов информирования
 *       пользователей о их возникновении
 *      @author Костенко В.В.
 *
 */

const state = {
    errorActive: false,
    errorCode: '',
    errorText: '',
    errorHelp: ''

};

const getters = {

};

const actions = {
    async set_error({commit, state, dispatch, rootState}, error){
        commit('SAVE_ERROR', error);
        commit('SAVE_STATE_ERROR', true)
        this.$app.$toast.error(state.errorText)
        //dispatch('notification/show_error', state.errorText, {root: true})
    },
    async delete_error({commit}){
        commit('SAVE_ERROR', '', '', '');
        commit('SAVE_STATE_ERROR', false)
    },
};

const mutations ={
    SAVE_STATE_ERROR(state, val){
        state.errorActive = val
    },
    SAVE_ERROR(state, error){
        state.errorCode = error.code;
        state.errorText = error.text;
        state.errorHelp = error.help;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
