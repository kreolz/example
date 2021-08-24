/**
 *  Костенко В.В. 2020
 */

import axios from '../../plugins/axios'

async function getGenders() {
    try {
        return  await axios.get('api/v1/enrollee/catalog/genders')
    }catch (e) {
        throw e
    }
}

async function getPassportTypes() {
    try {
        return await axios.get('api/v1/enrollee/catalog/passporttypes')
    }catch (e) {
        throw e
    }
}

/**
 *      Получить список пунктов выдающих документы
 * @param searchPart        часть названия для пункта выдачи документа
 * @returns {Promise<AxiosResponse<any>|*>}
 */
async function getOfficePassport(searchPart) {
    try {
        return await axios.get('api/v1/enrollee/catalog/offices/', {
            params:{
                searchPart: searchPart
            }
        })
    }catch (e) {
        throw e
    }
}

async function getAddresses(searchPart) {
    try {
        return await axios.get('api/v1/enrollee/catalog/addresses/', {
            params: {
                searchPart: searchPart
            }
        })
    }catch (e) {
        throw e
    }
}
async function getLevelEducation() {
    try {
        return await axios.get('api/v1/enrollee/catalog/educationtypes')
    }catch (e) {
        throw e
    }
}

async function getEducationDocumentType() {
    try{
        return await axios.get('api/v1/enrollee/catalog/educationdocumenttypes')
    }catch (e) {
        throw e
    }
}

async function getRelationship() {
    try {
        return await axios.get('api/v1/enrollee/catalog/relationships')
    }catch (e) {
        throw e
    }
}

async function getStreets(searchPart) {
    try {
        return axios.get('api/v1/enrollee/catalog/streets', {
            params:{
                searchPart: searchPart
            }
        })
    }catch (e) {
        throw e
    }
}
async function getPrivileges() {
    try {
        return axios.get('api/v1/enrollee/catalog/lgotas')
    }catch (e) {
        throw e
    }
}

async function getDisciplines() {
    try {
        return axios.get('api/v1/enrollee/catalog/chitdisciplines')
    }catch (e) {
        throw e
    }
}

async function getAchievements() {
    try {
        return axios.get('api/v1/enrollee/catalog/achievments')
    }catch (e) {
        throw e
    }
}

async function getEducationLevels() {
    try {
        return axios.get('api/v1/enrollee/catalog/educationlevels')
    }catch (e) {
        throw e
    }
}

async function getEducationForms() {
    try {
        return axios.get('api/v1/enrollee/catalog/educationforms')
    }catch (e) {
        throw e
    }
}

async function getEducationSpecialityAll() {
    try {
        return axios.get('api/v1/enrollee/catalog/allspecialities')
    }catch (e) {
        throw e
    }
}

async function getEducationStudySet() {
    try {
        return axios.get('api/v1/enrollee/catalog/studysets')
    }catch (e) {
        throw e
    }
}

async function getSpecialityExam() {
    try {
        return axios.get('api/v1/enrollee/catalog/egedisciplines')
    }catch (e) {
        throw e
    }
}

export default {
    getGenders,
    getOfficePassport,
    getPassportTypes,
    getAddresses,
    getEducationTypes: getLevelEducation,
    getEducationDocumentType,
    getRelationship,
    getStreets,
    getPrivileges,
    getDisciplines,
    getAchievements,
    getEducationLevels,
    getEducationForms,
    getEducationSpecialityAll,
    getEducationStudySet,
    getSpecialityExam
}
