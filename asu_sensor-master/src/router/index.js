import Vue from 'vue'
import Router from 'vue-router'
import TimeTable from "@/views/TimeTable"
import Home from "@/views/Home"
import UserPage from "@/views/UserPage"
import Login from "@/views/Login"
import UserPageMain from "@/components/UserPage/UserPageMain"
import SubjectComissions from "@/views/SubjectCommissions"
import Retakes from "@/views/Retakes"
import Consultations from "@/views/Consultations"
import TimeTableType from "@/components/TimeTable/TimeTableType"
import TimeTableRoomWrapper from "@/components/TimeTable/TimeTableRoom/TimeTableRoomWrapper"
import TimeTableGroup from "@/components/TimeTable/TImeTableGroup/TimeTableGroupWrapper"
import TimeTableTeacher from "@/components/TimeTable/TimeTableTeacher/TimeTableTeacherWrapper"
import TimeTableFreePCRoom from "@/components/TimeTable/TimeTableFreePCRoom/TimeTableFreePCRoom"

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            name: 'Home',
            title: 'Главная',
            component: Home
        },
        {
          path: '/userpage',
          name: 'UserPage',
          title: 'Страница пользователя',
            component: UserPage,
            children: [
                {
                    path:'login',
                    name: 'UserPageLogin',
                    components: {
                        default: UserPage,
                        userPage: Login
                    }
                },
                {
                    path: 'main',
                    name: 'UserPageMain',
                    components: {
                        default: UserPage,
                        userPage: UserPageMain
                    }
                }
            ]
        },
        {
            path: '/timetable',
            name: 'TimeTable',
            component: TimeTable,
            children:[
                {
                  path: '',
                  name: 'TimeTableType',
                  meta:{
                      title: 'Тип расписания'
                  },
                  components:{
                      default: TimeTable,
                      timetable: TimeTableType
                  }
                },
                {
                    path: 'groups/:course?',
                    name: 'TimeTableGroup',
                    meta: {
                        title: 'Расписание групп'
                    },
                    components:{
                        default: TimeTable,
                        timetable: TimeTableGroup
                    }
                },
                {
                    path: 'rooms',
                    name: 'TimeTableRoom',
                    components:{
                        default: TimeTable,
                        timetable: TimeTableRoomWrapper
                    }
                },
                {
                    path: 'teachers',
                    name: 'TimeTableTeacher',
                    components:{
                        default: TimeTable,
                        timetable: TimeTableTeacher
                    }
                },
                {
                    path: 'pcroom',
                    name: 'FreePCRoom',
                    components:{
                        default: TimeTable,
                        timetable: TimeTableFreePCRoom
                    }
                }
            ]
        },
        {
            path: '/subjectcommissions',
            name: 'SubjectCommissions',
            title: 'Предметные комиссии',
            component: SubjectComissions
        },
        {
            path: '/retakes',
            name: 'Retakes',
            title: 'Пересдачи',
            component: Retakes
        },
        {
            path: '/consultations',
            name: 'Consultations',
            title: 'Консультации',
            component: Consultations
        },
        // {
        //     path: '/sked',
        //     name: 'Sked',
        //     component: Sked,
        //     children:[
        //         {
        //             path: 'consultations',
        //             name: 'Consultation',
        //             components:{
        //                 default: Sked,
        //                 typeSked: Consultation
        //             }
        //         },
        //         {
        //             path: 'retakes',
        //             name: 'Retakes',
        //             components:{
        //                 default: Sked,
        //                 typeSked: Retake
        //             }
        //         },
        //         {
        //             path: 'subjectcomissions',
        //             name: 'Subjectcomissions',
        //             components: {
        //                 default: Sked,
        //                 typeSked: Subjectcomission
        //             }
        //         }
        //     ]
        // },
        // {
        //     path: '/settings',
        //     name: 'Settings',
        //     component: Settings
        // },
        // {
        //     path: '/userpage',
        //     name:'UserPage',
        //     children:[
        //         {
        //             path: 'info',
        //             name: 'UserInfo',
        //             components:{
        //                 userPage: Info
        //             }
        //         }
        //     ]
        // }
    ]
})
