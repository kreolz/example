const state = {
    navigationDrawerMenuItems: [
        {
            id: 1,
            to: '/',
            icon: 'mdi-home-outline',
            image: '',
            title: 'Главная',
            children: []
        },
        {
            id: 2,
            to: '/timetable',
            icon: 'mdi-timetable',
            image: '',
            title: 'Расписание',
            children: []
        },
        {
            id: 2,
            to: '/subjectcommissions',
            icon: 'mdi-account-group-outline',
            image: '',
            title: 'Предметные комиссии',
            children: []
        },
        {
            id: 3,
            to: '/retakes',
            icon: 'mdi-refresh',
            image: '',
            title: 'Пересдачи',
            children: []
        },
        {
            id: 4,
            to: '/consultations',
            icon: 'mdi-bullhorn-outline',
            image: '',
            title: 'Консультации',
            children: []
        },
        {
            id: 5,
            to: '/userpage/main',
            icon: 'mdi-login-variant',
            image: '',
            title: 'Личный кабинет',
            children: []
        }
    ]
}
const actions = {

}

const mutations = {

}

export  default {
    namespaced: true,
    state,
    actions,
    mutations
}
