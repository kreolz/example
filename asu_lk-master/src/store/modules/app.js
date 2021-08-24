const state = {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: '../../../../assets/register.jpg',
    drawer: null,
}
const getters = {

}

const actions = {

}

const mutations = {
    SET_BAR_IMAGE (state, payload) {
        state.barImage = payload
    },
    SET_DRAWER (state, payload) {
        state.drawer = payload
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
