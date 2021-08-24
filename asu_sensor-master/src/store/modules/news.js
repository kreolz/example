import APINewsServices from "@/services/API/APINewsServices";
import APIExtractionDataServices from "@/services/API/APIExtractionDataServices";

const state = {
    news: [],
    loadNews: false,
}

const actions = {
    async get_news({commit}){
        commit('SAVE_LOAD_NEWS', true)
        let news = await APINewsServices.getNews(1)
        commit('SAVE_NEWS', APIExtractionDataServices.extract(news))
        commit('SAVE_LOAD_NEWS', false)
    }
}

const mutations = {
    SAVE_LOAD_NEWS(state, value){
        state.loadNews = value
    },
    SAVE_NEWS(state, payload){
        state.news = payload
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
}
