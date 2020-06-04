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
      meta: {
        title: '主页'
      },
      component: () => import('@/components/Home'), //路由懒加载
      children: [
        {
          path: '/',
          redirect: 'message'
        }, {
          path: 'news',//子组件不需要加 '/'
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
      meta: {
        title: 'user界面'
      },
      component: user
    }, {
      path: '/profile',
      meta: {
        title: 'profile界面'
      },
      component: () => import('@/components/Profile')
    }
  ]
}
)
