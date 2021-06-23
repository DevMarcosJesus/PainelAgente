import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('./components/partials/Template.vue')
  },
  {
    path: '/pabx',
    name: 'pabx',
    component: () => import('../views/Pabx.vue')
  },
  {
    path: '/callcenter',
    name: 'callcenter',
    component: () => import('../views/Callcenter.vue')
  },
  {
    path: '/crm',
    name: 'crm',
    component: () => import('../views/CRM.vue')
  },
  {
    path: '/discador',
    name: 'discador',
    component: () => import('../views/Discador.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('../views/Chat.vue')
  },
  {
    path: '/whatsapp',
    name: 'whatsapp',
    component: () => import('../views/Whatsapp.vue')
  },
  {
    path: '/relatorios',
    name: 'relatorios',
    component: () => import('../views/Relatorios.vue')
  },
  {
    path: '/config',
    name: 'configuracoes',
    component: () => import('../views/Configuracoes.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
