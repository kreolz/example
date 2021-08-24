import APIInfoPeople from "@/services/API/APIInfoPeople";
import APIInfoCardACS from "@/services/API/APIInfoCardACS";
import APIInfoStudent from "@/services/API/APIInfoStudent";
import APIAccount from "@/services/API/APIAccount";
import APIPersonnel from "@/services/API/APIPersonnel";
import ErrorServices from "@/services/ErrorServices";
import APIExtractionDataServices from "@/services/API/APIExtractionDataServices";

const actions = {
    /**
     *
     * @param commit
     * @param state
     * @param numberCard
     * @returns {Promise<void>}
     */
    async set_number_card({ commit, dispatch, state}, numberCard) {
        switch (state.stateUserPage) {
            case "sleep":
                commit('SAVE_NUMBER_CARD', numberCard);
                await dispatch('change_state_modal_user_page');
                break;
            case "active":
                await dispatch('change_state_modal_user_page', numberCard);
                break;
            case "changePassword":
                commit('SAVE_RENEW_NUMBER_CARD', numberCard);
                break;
            case "orderingCertificates":
                commit('SAVE_RENEW_NUMBER_CARD', numberCard);
                break;
            default:
                ErrorServices.errorHandler(new Error('Error State UserPage')) //TODO create Error set_number_card for undefined state
        }
    },
    async change_state_modal_user_page({dispatch,commit,state}, numberCard) {
        switch (state.stateUserPage) {
            case 'sleep':
                 commit('SAVE_STATE_USER_PAGE_ACTIVE');
                this.$router.push({path: '/userpage/main'})
                try{
                    await dispatch('get_info_card');
                    await dispatch('get_people_info');
                    await dispatch('get_list_account');
                    await dispatch('set_account_active');
                    await dispatch('get_photo_people');
                    await dispatch('get_people_info_extended');
                    await dispatch('get_timetable_for_user_page');
                }catch (e) {
                    ErrorServices.errorHandler(e)
                }
                break;
            case 'active':
                if (state.numberCard==numberCard){
                    commit('SWAP_MODAL_USER_PAGE');
                    commit('SAVE_STATE_USER_PAGE_SLEEP');
                    this.$router.push({path: '/'})
                }else{
                    ErrorServices.errorHandler('Ошибка введенной карты')
                }
                break;
            default:
                ErrorServices.errorHandler('Ошибка модуля состояния UserPage')
        }
    },
    set_state_user_page_in_change_password({commit}) {
        commit('SAVE_STATE_USER_PAGE', 'changePassword')
    },
    async get_info_card({commit, state}){
        try{
            let infoCard = await APIInfoCardACS.getInfoCard(state.numberCard);
            commit('SAVE_INFO_CARD', APIExtractionDataServices.extract(infoCard))
        }catch (e) {
            ErrorServices.errorHandler(e)
        }
    },
    /**
     *      Загрузит базовый набор информации о пользователе карты
     * @param commit
     * @param state
     * @returns {Promise<void>}
     */
    async get_people_info({commit, state}){
        try{
            let infoPeople = APIExtractionDataServices.extract(await APIInfoPeople.getInfoPeople(state.infoCard.peopleId));
            commit('SAVE_PEOPLE_INFO', infoPeople)
        }catch (e) {
            ErrorServices.errorHandler(e)
        }

    },
    /**
     *      Загрузит расширенный набор данных уже с учетом роли пользователя
     * @param commit
     * @param state
     * @returns {Promise<void>}
     */
    async get_people_info_extended({dispatch, state}){
        if (state.accountActive.role === 'student') {
            await dispatch('get_people_info_about_students');
        } else {
            await  dispatch('get_personnel_info')
        }
    },
    /**
     *      Получит фото пользователя по его peopleId
     * @param commit
     * @param state
     * @returns {Promise<void>}
     */
    async get_photo_people({commit, state}){
        try{
            let photoPeople = APIExtractionDataServices.extract(await APIInfoPeople.getPhotoPeople(state.infoPeople.id));
            commit('SAVE_PHOTO_PEOPLE', 'data:image/jpeg;base64,'+photoPeople)
        }catch (e) {
            ErrorServices.errorHandler(e)
        }

    },
    /**
     *      TODO доделать обработку нескольких студенческих сущностей
     * @param commit
     * @param state
     * @returns {Promise<void>}
     */
    async get_people_info_about_students({commit, state}){
        try {
            let students = await APIInfoStudent.getInfoStudyOnPeopleId(state.peopleId);
            commit('SAVE_INFO_PEOPLE_ABOUT_STUDENTS', students)
        }catch (e) {
            ErrorServices.errorHandler(e)
        }

    },
    /**
     *      Информация о студенте по уже известному studentId
     * @param commit
     * @param studentId
     * @returns {Promise<void>}
     */
    async get_info_student({commit}, studentId){
        try {
            let infoStudent = await APIInfoStudent.getInfoStudyOnStudentId(studentId);
            commit('SAVE_INFO_STUDENT', infoStudent)
        }catch (e) {
            ErrorServices.errorHandler(e)
        }
    },
    async get_list_account({commit, state,}){
        try{
            let listAccount = APIExtractionDataServices.extract( await APIAccount.getListAccount(state.infoPeople.id));
            commit('SAVE_ACCOUNT_LIST', listAccount)
        }catch (e) {
            ErrorServices.errorHandler(e);
        }
    },
    /**
     *
     * @param commit
     * @param state
     */
    set_account_active({commit, state}){
        commit('SAVE_ACCOUNT_ACTIVE', state.accountList[0])
    },
    async get_role_account({commit, state}){
        try{
            let role = await APIAccount.getRoleAccount(state.activeAccount.username);
            commit('SAVE_ROLE_ACCOUNT', role)
        }catch (e) {
            ErrorServices.errorHandler(e)
        }
    },
    async get_personnel_info({commit, state}){
        try{
            let infoPersonnel = await APIPersonnel.getInfoPersonnel(state.infoPeople.id);
            commit('SAVE_INFO_PERSONNEL', APIExtractionDataServices.extract(infoPersonnel));

        }catch (e) {
            ErrorServices.errorHandler(e)
        }
    },
    /**
     *      Установит параметры расписания взависимости от данных пользователя карточки
     *
     * @param commit
     * @param state
     * @returns {Promise<void>}
     */
    async get_timetable_for_user_page(){
        // eslint-disable-next-line no-empty
        try{

        }catch (e) {
            ErrorServices.errorHandler(e)
        }
    }

};
export default actions
