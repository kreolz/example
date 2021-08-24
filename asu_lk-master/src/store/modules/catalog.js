import CatalogServices from "../../services/API/CatalogServices";
import ErrorServices from "@/services/ErrorServices";

const state = {
    officePassport: [],
    addresses:[],
    typePassport: [],
    levelEducation: [],
    genders: [],
    typeDocumentEduction: [],
    relationship: [],
    streets: [],
    privileges: [],
    disciplines: [],
    achievements: [],
    educationForms: [],
    educationLevels: [],
    educationSpecialityAll: [],
    educationStudySet: [],
    specialityExam: [],

}
const getters = {
    GET_RELATION(state, id){
        return state.relationship.find(n=>n.id===id).value
    },
    GET_SPECIALITYS(state, filters){
        return state.educationSpecialityAll.filter(
            item => item.idStudySet==filters.idStudySet && item.idEducationLevel==filters.idLevel && item.idEducation==filters.idForm
        )
    }
}

const actions = {
    async get_type_passport({commit}){
      try {
          let tP = await CatalogServices.getPassportTypes()
          commit('SAVE_TYPE_PASSPORT', tP.data.value)
      }catch (e) {
            ErrorServices.apiError(e)
      }
    },
    async get_office_passport({commit}, search){
        try {
            let officePassport = await CatalogServices.getOfficePassport(search)
            commit('SAVE_OFFICE_PASSPORT', officePassport.data.value)
        }catch (e) {

        }
    },
    async get_addresses({commit}, search){
        try {
            let addresses = await CatalogServices.getAddresses(search)
            commit('SAVE_ADDRESSES', addresses.data.value)
        }catch (e) {

        }
    },
    async get_level_education({commit}){
        try {
            let level = await CatalogServices.getEducationTypes()
            commit('SAVE_LEVEL_EDUCATION', level.data.value)
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async get_genders({commit}){
        try {
            let gender = await CatalogServices.getGenders()
            commit('SAVE_GENDERS', gender.data.value)
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async get_education_document_type({commit}){
        try{
            let docType = await CatalogServices.getEducationDocumentType()
            commit('SAVE_TYPE_DOCUMENT_EDUCATION', docType.data.value)
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async get_relationships_list({commit}){
        try {
            let rel = await CatalogServices.getRelationship()
            commit('SAVE_RELATIONSHIP', rel.data.value)
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async get_streets({commit}, search){
        try {
            let streets = await CatalogServices.getStreets(search)
            commit('SAVE_STREETS', streets.data.value)
        }catch (e) {

        }
    },
    async get_privileges({commit}){
        try {
            let privileges = await CatalogServices.getPrivileges()
            commit('SAVE_PRIVILEGES', privileges.data.value)
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async get_disciplines({commit}){
        try {
            let disciplines = await CatalogServices.getDisciplines()
            commit('SAVE_DISCIPLINES', disciplines.data.value)
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async get_achievements({commit}){
        try {
            let achievements = await CatalogServices.getAchievements()
            commit('SAVE_ACHIEVEMENTS', achievements.data.value)
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async get_education_forms({commit}){
        try {
            let eduForms = await CatalogServices.getEducationForms()
            commit('SAVE_EDUCATION_FORMS', eduForms.data.value)
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async get_education_levels({commit}){
        try {
            let eduLevels = await CatalogServices.getEducationLevels()
            commit('SAVE_EDUCATION_LEVELS', eduLevels.data.value)
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async get_education_speciality_all({commit}){
       try {
           let eduSpecialityAll = await CatalogServices.getEducationSpecialityAll()
           commit('SAVE_EDUCATION_SPECIALITY_ALL', eduSpecialityAll.data.value)
       }catch (e) {
           ErrorServices.apiError(e)
       }
    },
    async get_education_study_set({commit}){
        try {
            let eduStudySet = await CatalogServices.getEducationStudySet()
            commit('SAVE_EDUCATION_STUDY_SET', eduStudySet.data.value)
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async get_speciality_exam({commit}){
        try {
            let specialityExam = await CatalogServices.getSpecialityExam()
            commit('SAVE_SPECIALITY_EXAM', specialityExam.data.value)
        }catch (e) {
            ErrorServices.apiError(e)
        }
    }
}

const mutations = {
    SAVE_OFFICE_PASSPORT(state, payload){
        state.officePassport = payload
    },
    SAVE_ADDRESSES(state, payload){
        state.addresses = payload
    },
    SAVE_TYPE_PASSPORT(state, payload){
        state.typePassport = payload
    },
    SAVE_LEVEL_EDUCATION(state, payload){
        state.levelEducation = payload
    },
    SAVE_GENDERS(state, payload){
        state.genders = payload
    },
    SAVE_TYPE_DOCUMENT_EDUCATION(state, payload){
        state.typeDocumentEduction = payload
    },
    SAVE_RELATIONSHIP(state, payload){
        state.relationship = payload
    },
    SAVE_STREETS(state, payload){
        state.streets = payload
    },
    SAVE_PRIVILEGES(state, payload){
        state.privileges = payload
    },
    SAVE_DISCIPLINES(state, payload){
        state.disciplines = payload
    },
    SAVE_ACHIEVEMENTS(state, payload){
        state.achievements = payload
    },
    SAVE_EDUCATION_FORMS(state, payload){
        state.educationForms = payload
    },
    SAVE_EDUCATION_LEVELS(state, payload){
        state.educationLevels = payload
    },
    SAVE_EDUCATION_SPECIALITY_ALL(state, payload){
        state.educationSpecialityAll = payload
    },
    SAVE_EDUCATION_STUDY_SET(state, payload){
        state.educationStudySet = payload
    },
    SAVE_SPECIALITY_EXAM(state, payload){
        state.specialityExam = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
