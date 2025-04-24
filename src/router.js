import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from './views/LandingPage.vue'
import AccessGranted from './views/AccessGranted.vue'
import AccessDenied from './views/AccessDenied.vue'

const validateToken = (to, from, next) => {
    const token = to.query.token
    const validToken = 'abc123'
    const grantedAt = localStorage.getItem('access_granted')
  
    const now = Date.now()
    const twentyFourHours = 24 * 60 * 60 * 1000
  
    if (token === validToken) {
      localStorage.setItem('access_granted', now)
      next()
    } else if (grantedAt && now - grantedAt < twentyFourHours) {
      next()
    } else {
      localStorage.removeItem('access_granted') // limpa acesso expirado
      next('/access-denied')
    }
}

const routes = [
  { path: '/', component: LandingPage },
  { path: '/access-granted', component: AccessGranted, beforeEnter: validateToken },
  { path: '/access-denied', component: AccessDenied }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
