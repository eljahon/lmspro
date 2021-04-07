import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/dashbord.vue'
import LoginPage from "@/views/LoginPage";
import routerGuard from "@/service/routerGuard";
import routerGouardTokennot from "@/service/routerGouardTokennot";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Home,
        meta: {
            public: false
        },
        beforeEnter: routerGuard
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage,
        meta: {public: true},
        beforeEnter: routerGouardTokennot
    },
    {
        path: '/loader',
        name: 'loader',
        component: () => import('../views/Popup/loader.vue'),
        meta: {public: false},
        beforeEnter: routerGuard
    },
  
    {
        path: '/question/main',
        name: 'question',
        component: () => import('../views/Questions/question.vue'),
        meta: {
            public: false
        },
       

        beforeEnter: routerGuard

    },

    {
        path: '/ToolbarNavbar',
        name: 'ToolbarNavbar',
        meta: {
            public: false
        },
        beforeEnter: routerGuard,
        component: () => import('../components/toolbar_and_navbar/Navgeshndrawerr')
    },
    {
        path: '/Students',
        name: 'Students',
        meta: {
            public: false
        },
        beforeEnter: routerGuard,
        component: () => import('../views/Students/Students.vue')
    },

    {
        path: '/Teachers',
        name: 'Teachers',
        meta: {public: false},
        beforeEnter: routerGuard,
        component: () => import('../views/Teachers/Teachers.vue')
    },
    {
        path: '/Rooms',
        name: 'Rooms',
        meta: {
            public: false
        },
        beforeEnter: routerGuard,
        component: () => import('../views/Rooms/Rooms.vue')
    },
    {
        path: '/Subjects',
        name: 'Subjects',
        meta: {public: false},
        beforeEnter: routerGuard,
        component: () => import('../views/Subjects/Subjects.vue')
    },
    {
        path: '/StudentGrups',
        name: 'StudentGrups',
        meta: {
            public: false
        },
        beforeEnter: routerGuard,
        component: () => import('../views/StudentGrups/StudentGrups.vue')
    },
    {
        path: '/TimeTable',
        name: 'TimeTable',
        meta: {
            public: false
        },
        beforeEnter: routerGuard,
        component: () => import('../views/Time Table/TimeTable.vue')
    },
    {
        path: '/roomsinfo',
        name: 'Roomsinfo',
        meta: {
            public: false
        },
        beforeEnter: routerGuard,
        component: () => import('../components/Popoproomsinfo/DialogRoomsinfo')
    },
    {
        path: '/home',
        name: 'home',
        meta: {
            public: false
        },
        beforeEnter: routerGuard,
        component: () => import('../components/Home/home')
    },
    {
        path: '/loadeng',
        name: 'loadeng',
        meta: {
            public: false
        },
        beforeEnter: routerGuard,
        component: () => import('../components/loadeng/loadeng')
    },

    {
        path: '/appbar',
        name: 'appbar',
        meta: {
            public: false
        },
        beforeEnter: routerGuard,
        component: () => import('../components/toolbar_and_navbar/appbar.vue')
    },
    {
        path: '*',
        name: '404',
        meta: {
            public: false
        },
        beforeEnter: routerGuard,
        component: () => import('../views/404')
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});


export default router
