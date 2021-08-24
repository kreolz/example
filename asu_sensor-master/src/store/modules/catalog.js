import APICatalog from "@/services/API/APICatalog";
import APIExtractionDataServices from "@/services/API/APIExtractionDataServices";
import NotificationServices from "@/services/NotificationServices";

const state = {
    teachersTimeTable: [],
    rooms: [],
    groups: [],
    chairs: [],
}

const getters = {

}

const actions = {
    async get_teachers_for_timetable({commit}){
        let teachers = await APICatalog.getTeacherForTimeTable()
        commit('SAVE_TEACHERS_FOR_TIMETABLE', APIExtractionDataServices.extract(teachers))
        NotificationServices.info('Список преподавателей обновлен')
    },
    async get_rooms({commit}){
        let rooms = await APICatalog.getRooms()
        commit('SAVE_ROOMS', APIExtractionDataServices.extract(rooms))
        NotificationServices.info('Список аудиторий обновлен')
    },
    async get_groups({commit}){
        let groups = await APICatalog.getGroups()
        commit('SAVE_GROUPS', APIExtractionDataServices.extract(groups))
        NotificationServices.info('Список групп обновлен')
    },
    async get_chairs({commit}){
        let chairs = await APICatalog.getChairs()
        commit('SAVE_CHAIRS', APIExtractionDataServices.extract(chairs))
        NotificationServices.info('Список кафедр обновлен')
    }
}

const mutations = {
    SAVE_TEACHERS_FOR_TIMETABLE(state, payload){
        state.teachersTimeTable = payload
    },
    SAVE_ROOMS(state, payload){
        state.rooms = payload
    },
    SAVE_GROUPS(state, payload){
        state.groups = payload
    },
    SAVE_CHAIRS(state, payload){
        state.chairs = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
