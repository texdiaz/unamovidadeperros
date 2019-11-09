import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import home from './components/Home.vue'
import razas from './components/Razas.vue'
import contacto from './components/Contacto.vue'

const routes = [
  {path:'/home', component:home},
  {path:'/razas',component:razas},
  {path:'/contacto', component:contacto}
]

const router = new VueRouter({
  routes 
})

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
