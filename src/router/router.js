import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about/AboutView.vue')
  }, {
    path: '/services',
    name: 'services',
    component: () => import('@/views/services/ServicesView.vue')
  }, {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/contact/ContactView.vue')
  }
]

const router = new VueRouter({
  routes
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  setTimeout(() => {
    if (appLoading) {
      appLoading.style.display = "none";
    }
  }, 1000);
})

export default router
