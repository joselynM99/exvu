import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/buscarVuelos',
    name: 'buscarVuelos',
    component: () => import(/* webpackChunkName: "BuscarVuelos"*/ '@/pages/BuscarVuelos.vue')
  },
  {
    path: '/reservarVuelos',
    name: 'reservarVuelos',
    component: () => import(/* webpackChunkName: "ReservaPag"*/ '@/pages/ReservaPag.vue')
  },
  {
    path: '/checkIn',
    name: 'checkIn',
    component: () => import(/* webpackChunkName: "CheckIn"*/ '@/pages/CheckIn.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
