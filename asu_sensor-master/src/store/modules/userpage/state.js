const state = {
    modalUserPage: false,
    /**
     Опишем состояние модального окна личного кабинета:
     sleep - окно скрыто и нет данных пользователя
     active - пришли данные пользователя и он смотрит свой кабинет))
     changePassword - открыта страница смены пароля(выход запрещен)

     Суть для входа надо приложить карту и для выхода тоже надо приложить карту
     но для смены пароля надо будет подтвержать картой процедуру изменения пароля,
     и чтобы не выкинуть пользователя во время смены пароля введем состояние личного кабинета
     */
    stateUserPage: 'sleep',
    typeUser: '',
    //будут храниться состояние загрузки компонентов для страницы
    loadData: {
        userPage: false //общий загрузчик для страницы
    },
    // номер карты скуда (он уникален для СКУД), не надо путать с peopleId, studentId и идентификаторработника
    numberCard: '0006002835', //0006002835 Костенко В.В. для тестирования
    renewNumberCard: '',
    progressEducation: '',
    password: '',
    confirmPassword: '',
    infoCard:{
        peopleId:``
    },
    infoPeople: {
        lastName: ``,
        firstName: ``,
        patronymic: ``,
        id: '', //peopleId
        gender: ``,
        birthday: ``
    },
    infoStudents:[],
    activeStudent:{
        peopleId: 0,
        studentId: 0,
        statusId: 0,
        status: ``,
        startYear: 0,
        groupId: 0,
        group: ``,
        lastName: ``,
        firstName: ``,
        patronymic: ``,
        setId: 0,
        set: ``,
        profileId: 0,
        profile: ``,
        specialityId: 0,
        speciality: ``,
        educationId: 0,
        education: ``,
        educationLevelId: 0,
        educationLevel: ``,
        duration: ``
    },
    photo:``, //уточнение фото может приходить как url  так и base64
    disabledAccount: '',
    modalAccountList: false,
    accountList: [],
    accountActive:{},
    infoPersonnel: {}
};
export default state
