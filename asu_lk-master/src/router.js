import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/moderation',
      name: 'Admin',
      component: () => import('@/views/AdminEnrollee/AdminEnrolleeIndex')
    },
    {
      path: '/enrollee',
      name: 'Enrollee',
      component: () => import('@/views/dashboard/Index'),
      meta:{
        isAuth: true,
        role: 'enrollee'
      },
      children: [
        // рейтинг среди поступающих
        {
          name: 'Рейтинг среди поступающих',
          path: 'progress',
          component: () => import('@/views/Enrollee/EnrolleeProgress'),
        },
        // Pages
        {
          name: 'Профиль пользователя',
          path: 'user',
          component: () => import('@/views/Enrollee/Enrollee.vue'),
        },
        {
          name: 'Анкета',
          path: 'profile',
          component: () => import('@/views/Enrollee/EnrolleeProfile'),
        },
        {
          name: 'Заявления',
          path: 'claim',
          component: () => import('@/views/Enrollee/EnrolleeClaim'),
        },
        {
          name: 'Оплата',
          path: 'payment',
          component: () => import('@/views/Enrollee/EnrolleePayment'),
        },
        {
          name: 'Тестирование',
          path: 'test',
          component: () => import('@/views/Enrollee/EnrolleeTest'),
        },
        {
          name: 'Typography',
          path: 'components/typography',
          component: () => import('@/views/dashboard/component/Typography'),
        },
        // Tables
        {
          name: 'Regular Tables',
          path: 'tables/regular-tables',
          component: () => import('@/views/dashboard/tables/RegularTables'),
        },
        // Maps
        {
          name: 'Google Maps',
          path: 'maps/google-maps',
          component: () => import('@/views/dashboard/maps/GoogleMaps'),
        },
        // Upgrade
        {
          name: 'Справка',
          path: 'help',
          component: () => import('@/views/dashboard/Help'),
        },
      ],
    },
    {
      path: '/',
      name: 'Login',
      component: () => import('@/views/Login'),
    },
    {
      path: '/logout',
      name: 'Logout',
      component: () => import('@/views/Logout'),
    },
    {
      path: '/enrollee/registration',
      name: 'EnrolleeRegistration',
      // meta: {
      //   isAuth: true,
      //   role: 'enrollee'
      // },
      component: () => import('@/views/Enrollee/EnrolleeRegistration')
    },
    {
      path: '/registration',
      name: 'Registration',
      component: () => import('@/views/RegistrationUser')
    },
    {
      path: '/reset',
      name: 'ResetPassword',
      component: () => import('@/views/ResetPassword')
    }
  ]
})
export default router
