import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import CarsApp from './pages/CarsApp.vue'
import AddCar from './pages/AddCar.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/cars' },
  { path: '/cars', component: CarsApp, },
  { path: '/add', component: AddCar },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
