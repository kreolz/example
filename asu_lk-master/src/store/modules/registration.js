/***
 *  Костенко В.В. 2020
 */


import RegistrationServices from "../../services/RegistrationServices";
import ErrorServices from "../../services/ErrorServices";
import router from '../../router'
import { getField, updateField} from "vuex-map-fields";

const state = {
    user: {
        Email: '',
        FirstName: '',
        Patronymic: '',
        LastName: '',
        genderId: '1',
        BirthDay: new Date().toISOString().substr(0, 10),
    },
    passport: {
        type: 1,
        serial: '',
        number: '',
    },
    isOfferAccept: false,
    resultRegistration: false,
}

const getters = {
    getField
}

const actions = {
    async registration_new_user({state, commit}){
        try {
            let resultRegistration = await RegistrationServices.registrationUser(state.user, state.passport, state.isOfferAccept)
            commit('SAVE_REGISTRATION', resultRegistration)
            this.$app.$toast.success('Вы успешно прошли регистрацию. На ваш Email было отправленно письмо с дополнительной информацией.')
            this.$app.$toast.warning('Через 5 секунд вы будете переправлены на страницу авторизации')
            setTimeout(()=>{
                 router.push({path: '/'})
            }, 5000)
        }catch (e) {
            ErrorServices.apiError(e)
        }

    }
}

const mutations = {
    SAVE_REGISTRATION(state, resultRegistration){
        state.resultRegistration = resultRegistration
    },
    updateField,
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
