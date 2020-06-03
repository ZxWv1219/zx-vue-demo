import Vue from 'vue'
import Router from 'vue-router'

import About from '@/components/About'
import user from '@/components/user'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      component: () => import('@/components/Home'), //路由懒加载
      children: [
        {
          path: '/',
          redirect: 'message'
        }, {
          path: 'news',//子组件不需要加
          component: () => import('@/components/HomeNews')
        }, {
          path: 'message',
          component: () => import('@/components/HomeMessage')
        }
      ]
    }, {
      path: '/about',
      component: About
    }, {
      path: '/user/:userid',
      component: user
    }
  ]
})
