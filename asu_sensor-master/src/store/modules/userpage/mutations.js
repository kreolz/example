const  mutations = {
    SWAP_LOAD_DATA_USER_PAGE(state){
      state.loadData.userPage = !state.loadData.userPage
    },
    SAVE_INFO_STUDENT(state, infoStudent){
        state.activeStudent = infoStudent
    },
    SAVE_NUMBER_CARD (state, numberCard) {
        state.numberCard = numberCard
    },
    SAVE_RENEW_NUMBER_CARD(state, numberCard){
        state.renewNumberCard =  numberCard
    },
    SAVE_INFO_CARD(state, infoCard){
        state.infoCard = infoCard
    },
    SAVE_PEOPLE_INFO(state, infoPeople){
        state.infoPeople = infoPeople
    },
    SAVE_PHOTO_PEOPLE(state, photo){
        state.photo = photo
    },
    SAVE_INFO_PEOPLE_ABOUT_STUDENTS(state, infoStudents){
        state.infoStudents = infoStudents
    },
    SWAP_MODAL_USER_PAGE (state) {
        state.modalUserPage = !state.modalUserPage
    },
    SAVE_STATE_USER_PAGE_ACTIVE (state) {
        state.stateUserPage = 'active'
    },
    SAVE_STATE_USER_PAGE_SLEEP(state) {
        state.stateUserPage = 'sleep'
    },
    SAVE_STATE_USER_PAGE_CHANGE_PASSWORD (state) {
        state.stateUserPage = 'changePassword'
    },
    SAVE_ACCOUNT_LIST(state, accountList){
        state.accountList = accountList
    },
    SAVE_ACCOUNT_ACTIVE(state, account){
        state.accountActive= account
    },
    SAVE_ROLE_ACCOUNT(state, role){
        state.role = role
    },
    // SAVE_DISABLED(state, infoDisabled){
    //
    // },
    SAVE_INFO_PERSONNEL(state, infoPersonnel){
        state.infoPersonnel = infoPersonnel
    },
    // SAVE_MODAL_ACCOUNT_LIST(state, stateModal){
    //     state.modalAccountList = stateModal
    // }
    SAVE_ID_PHYSICAL(state, id){
        state.idPhysical = id
    }
};

export default mutations
