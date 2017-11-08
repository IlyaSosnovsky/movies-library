import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Favourite from '@/pages/Favourite'
import Viewed from '@/pages/Viewed'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/favourite',
      name: 'favourite',
      component: Favourite
    },
    {
      path: '/viewed',
      name: 'viewed',
      component: Viewed
    }
  ]
})
