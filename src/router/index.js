import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginPage from "@/views/LoginPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashbord',
    component: Home,
    meta: {
      public: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: {
      public:true
    },

  },

  {
    path: '/ToolbarNavbar',
    name: 'ToolbarNavbar',
    meta: {
      public: false
    },
    component: () => import('../components/toolbar_and_navbar/toolbar_navbar')
  },
  {
    path: '/Students',
    name: 'Students',
    meta: {
      public: false
    },
    component: () => import('../views/Students/Students.vue')
  },

  {
    path: '/Teachers',
    name: 'Teachers',meta: {
      public: false
    },
    component: () => import('../views/Teachers/Teachers.vue')
  },
  {
    path: '/Rooms',
    name: 'Rooms',
    meta: {
      public: false
    },
    component: () => import('../views/Rooms/Rooms.vue')
  },
  {
    path: '/Subjects',
    name: 'Subjects',
    meta: {
      public: false
    },
    component: () => import('../views/Subjects/Subjects.vue')
  },
  {
    path: '/StudentGrups',
    name: 'StudentGrups',
    meta: {
      public: false
    },
    component: () => import('../views/StudentGrups/StudentGrups.vue')
  },
  {
    path: '/TimeTable',
    name: 'TimeTable',
    meta: {
      public: false
    },
    component: () => import('../views/Time Table/TimeTable.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


export default router
