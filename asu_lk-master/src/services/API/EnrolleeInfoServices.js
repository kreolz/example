/**
 *  Костенко В.В. 2020
 */
import axios from '../../plugins/axios'
import {breaking} from "vuetify/lib/util/console";


async function getOtherInfo(){
    try {
        return axios.get('api/v1/enrollee/other')
    }catch (e) {
        throw e
    }
}

async function setOtherInfo(otherInfo){
    try {
        return axios.post('api/v1/enrollee/other', {
            snils: otherInfo.snils,
            inn: otherInfo.inn
        })
    }catch (e) {
        throw e
    }
}
async function getStepByStepRegistration(){
    try {
        return await axios.get('api/v1/enrollee/stepbystepstatus')
    }catch (e) {
        return e
    }
}

async function getEducation(){
    try{
        return await axios.get('api/v1/enrollee/education')
    }catch (e) {
        throw e
    }
}

async function setEducation(education){
    try{
        return await axios.post('api/v1/enrollee/education', {
            diplomaSeries: education.diplomaSeries,
            diplomaNumber: education.diplomaNumber,
            linerSeries: education.linerSeries,
            linerNumber: education.linerNumber,
            issueDate: education.issueDate,
            endingYear: Number(education.endingYear),
            educationDocumentTypeId: education.educationDocumentTypeId,
            educationInstituteName: education.educationInstituteName,
            educationLevelId: education.educationLevelId
        })
    }catch (e) {
        throw e
    }
}

async function getMainInfo() {
    try {
        return await axios.get('api/v1/enrollee/baseinfo')
    }catch (e) {
        throw e
    }
}

async function setMainInfo(mainInfo) {
    try {
        return await axios.post('api/v1/enrollee/baseinfo',{
            lastName: mainInfo.lastName,
            firstName: mainInfo.firstName,
            patronymic: mainInfo.patronymic,
            genderId: mainInfo.genderId,
            email: mainInfo.email,
            birthday: mainInfo.birthday
        })
    }catch (e) {
        throw e
    }
}

async function getParent(){
    try{

    }catch (e) {
        throw e
    }
}

async function setParent(parent){
    try{

    }catch (e) {
        throw e
    }
}

async function getPassport() {
    try {
        return await axios.get('api/v1/enrollee/passport')
    }catch (e) {
        throw e
    }
}
async function getPhones() {
    try{
        return await axios.get('api/v1/enrollee/phone')
    }catch (e) {
        throw e
    }
}

async function setPhone(phone){
    try {
        return await axios.post('api/v1/enrollee/phone', {
            phoneValue: phone.value,
            note: phone.note,
            priority: phone.priority
        })
    }catch (e) {
        throw e
    }
}

async function deletePhone(id){
    try {
        return await axios.delete('api/v1/enrollee/phone/'+id)
    }catch (e) {
        throw e
    }
}
async function setPassport(passport) {
    try {
        return await axios.post('api/v1/enrollee/passport', {
            series: passport.serial,
            number: passport.number,
            documentTypeId: passport.typeId,
            issuer: passport.office,
            from: passport.date,
            birthAddress: passport.placeBorn
        })
    }catch (e) {
        throw e
    }
}

async function getRegistrationPermanent() {
    try{
        return await axios.get('api/v1/enrollee/address/permanent')
    }catch (e) {
        throw e
    }
}
async function setRegistrationPermanent(registration) {
    try {
        return await axios.post('api/v1/enrollee/address/permanent', {
            point: registration.point,
            street: registration.street,
            house: registration.house,
            flat: registration.flat,
            index: registration.index
        })
    }catch (e) {
        throw e
    }
}
async function getRegistrationResidence() {
    try{
        return await axios.get('api/v1/enrollee/address/residence')
    }catch (e) {
        throw e
    }
}
async function setRegistrationResidence(registration) {
    try {
        return await axios.post('api/v1/enrollee/address/residence', {
            point: registration.point,
            street: registration.street,
            house: registration.house,
            flat: registration.flat,
            index: registration.index
        })
    }catch (e) {
        throw e
    }
}

async function getRegistrationFull() {
    try {
        return await axios.get('api/v1/enrollee/address')
    }catch (e) {
        throw e
    }
}

async function getSocials() {
    try {
        return axios.get('api/v1/enrollee/social')
    }catch (e) {
        throw e
    }
}

async function deleteSocial(id){
    try {
        return axios.delete('api/v1/enrollee/social',{
            socialId: id
        })
    }catch (e) {
        throw e
    }
}

async function setSocial(social) {
    try{
        return axios.post('api/v1/enrollee/social', {
            url: social.url,
            note: social.note
        })
    }catch (e) {
        throw e
    }
}

async function getRelationships() {
    try {
        return axios.get('api/v1/enrollee/relationship')
    }catch (e) {
        throw e
    }
}

async  function setRelationship(relationship) {
    try {
        return await axios.post('api/v1/enrollee/relationship', {
            phone: relationship.phone,
            relationshipId: relationship.idRelation,
            name: relationship.name
        })
    }catch (e) {
        throw e
    }
}

async function deleteRelationship(id) {
    try {
        return axios.delete('api/v1/enrollee/relationship/'+id)
    }catch (e) {
        throw e
    }
}

async function getPassportFiles() {
    try {
        return axios.get('api/v1/enrollee/passport/files')
    }catch (e) {
        throw e
    }
}

async function setPassportFiles(formDataWithFiles) {
    try {
        return await axios.post(
            'api/v1/enrollee/passport/files',
             formDataWithFiles,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
    }catch (e) {
        throw e
    }
}

async function deletePassportFile(fileName){
    try {
        return await axios.delete('api/v1/enrollee/passport/files/'+fileName)
    }catch (e) {
        throw e
    }
}

async function getEducationFiles() {
    try{
        return await axios.get('api/v1/enrollee/education/files')
    }catch (e) {
        throw e
    }
}

async function setEducationFiles(formData) {
    try{
        return await axios.post('api/v1/enrollee/education/files',
            formData,
            {
                headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }catch (e) {
        throw e
    }
}

async function deleteEducationFile(fileName) {
    try {
        return await axios.delete('api/v1/enrollee/education/files/'+fileName)
    }catch (e) {
        throw e
    }
}

async function getPoints() {
    try {
        return await axios.get('api/v1/enrollee/chit')
    }catch (e) {
        throw e
    }
}

async function setPoint(point) {
    try {
        return await axios.post('api/v1/enrollee/chit', {
            disciplineName: point.name,
            mark: point.mark
        })
    }catch (e) {
        throw e
    }
}

async function deletePoint(id) {
    try {
        return await axios.delete('api/v1/enrollee/chit/'+id)
    }catch (e) {
        throw e
    }
}

async function getPrivilege() {
    try {
        return axios.get('api/v1/enrollee/lgota')
    }catch (e) {
        throw e
    }
}

async function setPrivilege(idPrivilage) {
    try {
        return axios.post('api/v1/enrollee/lgota', {
            lgotaId: idPrivilage
        })
    }catch (e) {
        throw e
    }
}

async function deletePrivilege() {
    try {
        return axios.delete('api/v1/enrollee/lgota')
    }catch (e) {
        throw e
    }
}

async function getPrivilegeFiles() {
    try {
        return axios.get('api/v1/enrollee/lgota/files')
    }catch (e) {
        throw e
    }
}

async function setPrivilegeFiles(formData) {
    try {
        return axios.post(
            'api/v1/enrollee/lgota/files',
            formData,
            {headers: {
                'Content-Type': 'multipart/form-data'
            }}
            )
    }catch (e) {
        throw e
    }
}

async function deletePrivilegeFile(fileName) {
    try {
        return axios.delete('api/v1/enrollee/lgota/files/'+fileName)
    }catch (e) {
        throw e
    }
}

async function getWork() {
    try {
        return axios.get('api/v1/enrollee/work')
    }catch (e) {
        throw e
    }
}

async function setWork(work) {
    try {
        return axios.post('api/v1/enrollee/work', {
            workPlace: work.workPlace,
            workPosition: work.workPosition
        })
    }catch (e) {
        throw e
    }
}

async function getClaims() {
    try {
        return axios.get('api/v1/enrollee/speciality')
    }catch (e) {
        throw e
    }
}

async function setClaim(claim) {
    try {
        return axios.post('api/v1/enrollee/speciality',
            {
            specialityId: claim.id,
            priority: claim.priority
        })
    }catch (e) {
        throw e
    }
}
async function updateClaim(claim) {
    try {
        return axios.put('api/v1/enrollee/speciality/'+claim.id,
            {
                id: claim.id,
            specialityId: claim.specialityId,
            priority: claim.priority
        })
    }catch (e) {
        throw e
    }
}
async function deleteClaim(id){
    try {
        return axios.delete('api/v1/enrollee/speciality/'+id)
    }catch (e) {
        throw e
    }
}

async function getAchievement() {
    try {
        return axios.get('api/v1/enrollee/achievement')
    }catch (e) {
        throw e
    }
}

async function setAchievement(id) {
    try {
        return axios.post('api/v1/enrollee/achievement', {
            achievementId: id
        })
    }catch (e) {
        throw e
    }
}

async function deleteAchievement() {
    try {
        return axios.delete('api/v1/enrollee/achievement')
    }catch (e) {
        throw e
    }
}

async function getExam() {
    try {
        return axios.get('api/v1/enrollee/ege')
    }catch (e) {
        throw e
    }
}

async function setExam(exam) {
    try {
        return axios.post('api/v1/enrollee/ege', {
            disciplineId: exam.disciplineId,
            mark: Number(exam.mark)
        })
    }catch (e) {
        throw e
    }
}
async function deleteExam(idMark) {
    try {
        return axios.delete('api/v1/enrollee/ege/'+idMark)
    }catch (e) {
        throw e
    }
}

export default {
    deletePhone,
    getEducation,
    setEducation,
    getMainInfo,
    setMainInfo,
    getParent,
    setParent,
    getPassport,
    setPassport,
    getPhones,
    setPhone,
    getRegistrationPermanent,
    setRegistrationPermanent,
    getRegistrationResidence,
    setRegistrationResidence,
    getRegistrationFull,
    getSocials,
    deleteSocial,
    setSocial,
    getStepByStepRegistration,
    getRelationships,
    setRelationship,
    deleteRelationship,
    getOtherInfo,
    setOtherInfo,
    getPassportFiles,
    setPassportFiles,
    deletePassportFile,
    getEducationFiles,
    setEducationFiles,
    deleteEducationFile,
    getPoints,
    setPoint,
    deletePoint,
    getPrivilege,
    setPrivilege,
    deletePrivilege,
    getPrivilegeFiles,
    setPrivilegeFiles,
    deletePrivilegeFile,
    getWork,
    setWork,
    getClaims,
    setClaim,
    updateClaim,
    deleteClaim,
    getAchievement,
    setAchievement,
    deleteAchievement,
    getExam,
    setExam,
    deleteExam
}
