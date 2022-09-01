import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store'

// Bootstrap
import '@/assets/scss/_main.scss'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue } from 'bootstrap-vue'

// Title
import titleMixin from './plugins/titleMixin'
Vue.mixin(titleMixin)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
