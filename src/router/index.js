import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Landing from '@/components/Landing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/landing'
    },
    {
      path: '/landing',
      name: 'Assessment Landing',
      component: Landing
    }
  ]
})
