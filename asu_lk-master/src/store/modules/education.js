import {getField, updateField} from "vuex-map-fields"

const state = {
    levelEducation: '',
    documentAboutEducation: {
        Type: '',
        Series: '',
        Number: '',
        Date: '',
    },
    educationInstitute: '',
    /***
     * вид предоставленного документа оригинал или нет
     */
    typeDocument: '',
}

const getters = {
    getField,
}

const actions = {

}

const mutations = {
    updateField,
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
