import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/views/home/Home'
// import Cart from '@/views/cart/Cart'
// import Category from '@/views/category/Category'
// import Profile from '@/views/profile/Profile'

//懒加载
const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const Cart = () => import('@/views/cart/Cart')
const Profile = () => import('@/views/profile/Profile')
// const Detail = () => import('views/detail/Detail')

Vue.use(Router)



export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: Home
    }, {
      path: '/cart',
      component: Cart
    }, {
      path: '/category',
      component: Category
    }, {
      path: '/profile',
      component: Profile
    }
  ]
})
