import EnrolleeInfoServices from "../../services/API/EnrolleeInfoServices";
import {getField, updateField} from "vuex-map-fields";
import ErrorServices from "@/services/ErrorServices";
import EnrolleeInfoConfirmed from "../../services/API/EnrolleeInfoConfirmed";
import router from "../../router";

const state = {
    stepByStep: '',
    main: {
        lastName: '',
        firstName: '',
        patronymic: '',
        genderId: '',
        birthday: new Date().toISOString().substr(0, 10),
        email: '',
    },
    passport: {
        typeId: '',
        serial: '',
        number: '',
        office: '',
        placeBorn: '',
        date: '',
        pathCopyDocFile: '',
    },
    registration: {
        pathCopyDocFile: '',
        permanent: {
            point: '',
            street: '',
            house: '',
            flat: '',
            index: '',
        },
        coincides: false,
        live: {
            point: '',
            street: '',
            house: '',
            flat: '',
            index: '',
        },
    },
    education: {
        diplomaSeries: '',
        diplomaNumber: '',
        linerSeries: '',   //серия вкладыша
        linerNumber: '',   //номер вкладыша
        educationLevelId: '',
        educationDocumentTypeId: '',
        educationInstituteName: '',
        issueDate: '',
        endingYear: '',
        subjectExamSchool: [],  //какие сдавал экзамены
        pointSubjectSchool: [], // оценки в атестате по школьным предметам
        pathCopyDocFile: '',    // путь до файла
        typeCopyDoc: '',        //тип предоставленного документам (оригинал или копия)

    },
    parent: [
        {
            type: '',    //мама папа бабашка дедушка опекун и тд..
            name: '',
            numberPhone: '',
        }
    ],
    phones:[
        {
            id: '',
            phoneValue: '',
            note: '',
            priority: '',
        }
    ],
    socials: [
        {
            id: '',
            url: '',
            note: '',
        },
    ],
    relationships: [],
    other:{
        snils: '',
        inn: '',
    },
    filesPassport: [],
    filesEducation: [],
    points: [],
    privilege: {
        lgotaId: '',
    },
    privilegeFiles: [],
    work: {
        workPlace: '',
        workPosition: '',
    },
    claims: [],
    achievement: {
        achievementId: '',
    },
    exams: []
}

const getters = {
    getField,
    GET_SHORT_NAME(state){
        return state.main.lastName+' '+state.main.firstName
    }
}

const actions = {
    async send_all_to_confirmation(){
        let step =''
        try {
            step = await EnrolleeInfoServices.getStepByStepRegistration()
            if (step.data.value.filter( n => n.isFinished==false).length == 0){
                await EnrolleeInfoConfirmed.sendAllToConfirmation()
                this.$app.$toast.success('Данные успешно отправлены. Через несколько секунд вы будете перенаправлены в личный кабинет.')
                setInterval(()=>{
                    this.$router.push({path: '/enrollee/profile'})
                }, 5000)
            }else{
                this.$app.$toast.warning('Перед отправкой заполните данные во все разделах')
            }

        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async send_check_data(){

    },
    async get_exams({commit}){
        try {
            let exam = await EnrolleeInfoServices.getExam()
            commit('SAVE_EXAM', exam.data.value)
        }catch (e) {
            if (e.status=='404'){
                commit('SAVE_EXAM', [])
            }
            ErrorServices.apiError(e)
        }
    },
    async set_exam({dispatch}, exam){
        try {
            await EnrolleeInfoServices.setExam(exam)
            this.$app.$toast.success('Экзамен добавлен')
            dispatch('get_exams')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async delete_exam({dispatch}, markId){
        try {
            await EnrolleeInfoServices.deleteExam(markId)
            this.$app.$toast.success('Экзамен удален')
            dispatch('get_exams')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async get_claims({commit}){
        try {
            let claims = await EnrolleeInfoServices.getClaims()
            commit('SAVE_CLAIMS', claims.data.value)
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async set_claim({state}, claim){
        try {
            let p = state.claims.find(n=>n.specialityId==claim.id)
            if (p){
                claim.specialityId = claim.id
                claim.id=p.id
                let cl = await EnrolleeInfoServices.updateClaim(claim)
            }else{
                let cl = await EnrolleeInfoServices.setClaim(claim)
            }
             this.$app.$toast.success('Заявление сохранено')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async delete_claim({commit}, claim){
        try {
            let p = state.claims.find(n=>n.specialityId==claim.id)
            let deleteClaim = await EnrolleeInfoServices.deleteClaim(p.id)
            this.$app.$toast.success('Заявление удалено')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async get_step_by_step({commit}) {
        try {
            let step = await EnrolleeInfoServices.getStepByStepRegistration()
            commit('SAVE_STEP_BY_STEP', step.data.value)
        } catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async get_main_info({commit}){
      try {
          let mainInfo = await EnrolleeInfoServices.getMainInfo()
          commit('SAVE_MAIN_INFO', mainInfo.data.value)
      }catch (e) {
          ErrorServices.apiError(e)
      }
    },
    async set_main_info({ state}) {
        try {
            await EnrolleeInfoServices.setMainInfo(state.main)
            this.$app.$toast.success('Основная информация сохранена')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async get_passport_info({commit}){
      try {
          let getPass = await EnrolleeInfoServices.getPassport()
          commit('SAVE_PASSPORT', getPass.data.value)
      }catch(e){
          ErrorServices.apiError(e)
      }
    },
    async set_passport_info({state, commit, dispatch, rootState}){
        try {
            let setPass = await EnrolleeInfoServices.setPassport(state.passport)
            this.$app.$toast.success('Паспортные данные сохранены')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async get_registration_info({commit}){
        try {
            let reg = await EnrolleeInfoServices.getRegistrationFull()
            commit('SAVE_REGISTRATION', reg.data.value)

        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async set_registration_info({state, commit, dispatch, rootState}){
        try {
            let regInfoPerm = await EnrolleeInfoServices.setRegistrationPermanent(state.registration.permanent)
            if (state.registration.coincides){
                commit('SAVE_REGISTRATION_LIVE', state.registration.permanent)
            }
            let regInfoResi = await EnrolleeInfoServices.setRegistrationResidence(state.registration.live)
            this.$app.$toast.success('Данные о месте жительства сохранены')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async get_education_info({commit}){
        try {
            let educInfo = await EnrolleeInfoServices.getEducation()
            commit('SAVE_EDUCATION_INFO', educInfo.data.value)
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async set_education_info({commit, state}){
        try {
            let educInfo = await EnrolleeInfoServices.setEducation(state.education)
            this.$app.$toast.success('Данные об образовании сохранены')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async get_phones({commit}){
        try {
            let phones = await EnrolleeInfoServices.getPhones()
            commit('SAVE_PHONES', phones.data.value)
        }catch (e) {
            if (e.status=='404'){
                commit('SAVE_PHONES', [])
            }
            ErrorServices.apiError(e)
        }
    },
    async set_phone({commit}, phone){
        try {
            let newPhone = await EnrolleeInfoServices.setPhone(phone)
            commit('ADD_PHONE', newPhone.data.value)
            this.$app.$toast.success('Номер сохранен')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async delete_phone({dispatch}, id){
        try {
            let deletePhone = await EnrolleeInfoServices.deletePhone(id)
            dispatch('get_phones')
            this.$app.$toast.success('Номер телефона удален')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async get_socials({commit}){
        try{
            let socials = await EnrolleeInfoServices.getSocials()
            commit('SAVE_SOCIALS', socials.data.value)
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async set_social({commit}, social){
        try {
            let soc = await EnrolleeInfoServices.setSocial(social)
            commit('ADD_SOCIAL', soc.data.value)
            this.$app.$toast.success('Социальная сеть сохранена')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async delete_social({dispatch}, id){
        try {
            let deleteSocial = await EnrolleeInfoServices.deleteSocial(id)
            dispatch('get_socials')
            this.$app.$toast.success('Социальная сеть удалена')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async get_relationships({commit}){
        try {
            let relation = await EnrolleeInfoServices.getRelationships();
            commit('SAVE_RELATIONSHIPS', relation.data.value)
        }catch (e) {
            if(e.status=='404'){
                commit('SAVE_RELATIONSHIPS', [])
            }
            ErrorServices.apiError(e)
        }
    },
    async set_relationship({commit}, relation){
        try {
            let rel = await EnrolleeInfoServices.setRelationship(relation);
            commit('ADD_RELATIONSHIP', rel.data.value);
            this.$app.$toast.success('Запись о родных сохранена')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async delete_relationship({dispatch}, id){
        try {
            let relationship = await EnrolleeInfoServices.deleteRelationship(id);
            dispatch('get_relationships');
            this.$app.$toast.success('Запись о родных удалена')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async get_other_info({commit}){
        try {
            let otherInfo = await EnrolleeInfoServices.getOtherInfo()
            commit('SAVE_OTHER_INFO', otherInfo.data.value)
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async set_other_info({commit, state}){
        try {
            let newOtherInfo = await EnrolleeInfoServices.setOtherInfo(state.other)
            this.$app.$toast.success('Дополнительные данные сохранены')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },

    async get_points({commit}){
        try {
            let points = await EnrolleeInfoServices.getPoints()
            commit('SAVE_POINTS', points.data.value)
        }catch (e) {
            if (e.status=='404'){
                commit('SAVE_POINTS', [])
            }
            ErrorServices.apiError(e)
        }
    },
    async set_point({dispatch},point){
        try {
            let newPoint = await EnrolleeInfoServices.setPoint(point)
            await dispatch('get_points')
            this.$app.$toast.success('Оценка добавлена')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async delete_point({dispatch}, id){
        try{
            let deletePoint = await EnrolleeInfoServices.deletePoint(id)
            await dispatch('get_points')
            this.$app.$toast.success('Оценка удалена')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async get_privilege({commit}){
      try {
          let privileges = await EnrolleeInfoServices.getPrivilege()
          commit('SAVE_PRIVILEGE', privileges.data.value)
      }catch (e) {
          ErrorServices.apiError(e)
      }
    },
    async set_privilege({state}){
        try {
            let privilege = await EnrolleeInfoServices.setPrivilege(state.privilege.lgotaId)
            this.$app.$toast.success('Льгота сохранена')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async delete_privilege({commit}){
        try {
            let privilege = await EnrolleeInfoServices.deletePrivilege()
            this.$app.$toast.success('Льгота удалена')
            commit('SAVE_PRIVILEGE', {lgotaId:''})
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async get_work({commit}){
        try {
            let work = await EnrolleeInfoServices.getWork()
            commit('SAVE_WORK', work.data.value)
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async set_work({state}){
        try {
            let work = await EnrolleeInfoServices.setWork(state.work)
            this.$app.$toast.success('Данные о трудоустройстве сохранены')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },

    async get_achievement({commit}){
        try {
            let achievement = await EnrolleeInfoServices.getAchievement()
            commit('SAVE_ACHIEVEMENT', achievement.data.value)
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async set_achievement({state}){
        try {
            let achievement = await EnrolleeInfoServices.setAchievement(state.achievement.achievementId)
            this.$app.$toast.success('Данные о достижении сохранены')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async delete_achievement({commit}){
        try {
            let deleteAchievement = await EnrolleeInfoServices.deleteAchievement()
            this.$app.$toast.success('Достижение удалено')
            commit('SAVE_ACHIEVEMENT', {achievementId:''})
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },

    //actions for work with copy documents

    async get_files_passport({commit}){
        try {
            let filesPass = await EnrolleeInfoServices.getPassportFiles()
            commit('SAVE_FILES_PASSPORT', filesPass.data.value)
        }catch (e) {
            if (e.status=='404'){
                commit('SAVE_FILES_PASSPORT', [])
            }
            ErrorServices.apiError(e)
        }
    },
    async set_files_passport({commit, dispatch}, formData){
        try {
            let filePass = await EnrolleeInfoServices.setPassportFiles(formData)
            dispatch('get_files_passport')
            this.$app.$toast.success('Файлы копии паспорта и прописки сохранены')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async delete_file_passport({commit, dispatch}, fileName){
        try {
            let deleteFile = await EnrolleeInfoServices.deletePassportFile(fileName)
            this.$app.$toast.success('Файл удален')
            await dispatch('get_files_passport')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async get_files_education({commit}){
        try {
            let filesEducation = await EnrolleeInfoServices.getEducationFiles()
            commit('SAVE_FILES_EDUCATION', filesEducation.data.value)
        }catch (e) {
            if (e.status=='404'){
                commit('SAVE_FILES_EDUCATION', [])
            }
            ErrorServices.apiError(e)
        }
    },
    async set_files_education({commit, dispatch}, formData){
        try {
            let filesEducation = await EnrolleeInfoServices.setEducationFiles(formData)
            dispatch('get_files_education')
            this.$app.$toast.success('Файлы копий документов об образовании сохранены')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async delete_file_education({commit, dispatch}, fileName){
        try {
            let filesEducation = await EnrolleeInfoServices.deleteEducationFile(fileName)
            dispatch('get_files_education')
            this.$app.$toast.success('Файл удален')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async get_privilege_files({commit}){
        try {
            let privilegeFiles = await EnrolleeInfoServices.getPrivilegeFiles()
            commit('SAVE_PRIVILEGE_FILES', privilegeFiles.data.value)
        }catch (e) {
            if(e.status=='404'){
                commit('SAVE_PRIVILEGE_FILES', [])
            }
            ErrorServices.apiError(e)
        }
    },
    async set_privilege_files({dispatch}, formData){
        try {
            let pr = await EnrolleeInfoServices.setPrivilegeFiles(formData)
            this.$app.$toast.success('Файлы загружены')
            await dispatch('get_privilege_files')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    },
    async delete_privilege_file({dispatch}, fileName){
        try {
            let pr = await EnrolleeInfoServices.deletePrivilegeFile(fileName)
            this.$app.$toast.success('Файл удален')
            await dispatch('get_privilege_files')
        }catch (e) {
            ErrorServices.apiError(e)
        }
    }

}

const mutations = {
    updateField,
    SAVE_ACHIEVEMENT(state, payload){
      state.achievement = payload
    },
    SAVE_CLAIMS(state, payload){
      state.claims = payload
    },
    SAVE_PRIVILEGE(state, payload){
      state.privilege = payload
    },
    SAVE_PRIVILEGE_FILES(state, payload){
        state.privilegeFiles = payload
    },
    SAVE_MAIN_INFO(state, payload){
        state.main = payload
    },
    SAVE_STEP_BY_STEP(state, val) {
        state.stepByStep = val
    },
    SAVE_PASSPORT(state, payload){
        state.passport.typeId = payload.documentTypeId
        state.passport.serial= payload.series
        state.passport.number = payload.number
        state.passport.office = payload.issuer
        state.passport.placeBorn = payload.birthAddress
        state.passport.date = payload.from
    },
    SAVE_REGISTRATION_LIVE(state, payload){
        state.registration.live = payload
    },
    SAVE_REGISTRATION(state, payload) {
        state.registration.permanent = payload.permanentAddress
        state.registration.live = payload.residenceAddress
        // TODO доделать совпадение
    },
    SAVE_EDUCATION_INFO(state, payload){
        state.education = payload
    },
    SAVE_PHONES(state, payload){
        state.phones = payload
    },
    ADD_PHONE(state, phone){
        state.phones.push(phone)
    },
    SAVE_SOCIALS(state, payload){
        state.socials = payload
    },
    ADD_SOCIAL(state, social){
        state.socials.push(social)
    },
    SAVE_RELATIONSHIPS(state, payload) {
        state.relationships = payload
    },
    ADD_RELATIONSHIP(state, relation){
        state.relationships.push(relation)
    },
    SAVE_OTHER_INFO(state, payload){
        state.other = payload
    },
    SAVE_FILES_PASSPORT(state, payload){
        state.filesPassport = payload
    },
    SAVE_FILES_EDUCATION(state, payload){
        state.filesEducation  = payload
    },
    SAVE_POINTS(state, payload){
        state.points = payload
    },
    SAVE_WORK(state, payload){
        state.work = payload
    },
    SAVE_EXAM(state, payload){
        state.exams = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
