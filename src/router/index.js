import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'


const routes = [

  {
    path: '/',
    name: 'login',
    component: LoginView
    
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/DashboardView.vue')
      },

      {
        path: '/appointment',
        name: 'appointment',
        component: () => import('../views/AppointmentView.vue')
      },

      {
        path: '/treatment',
        name: 'treatment',
        component: () => import('../views/TreatmentView.vue')
      },

      {
        path: '/reports',
        name: 'reports',
        component: () => import('../views/ReportView.vue')
      },

      {
        path: '/settings',
        name: 'settings',
        component: () => import('../views/SettingsView.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
