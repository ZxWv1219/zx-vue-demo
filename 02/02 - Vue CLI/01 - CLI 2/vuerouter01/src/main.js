import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//自定义全局函数
Vue.prototype.myprint = () => console.log('Zx');
//导航守卫,前置->钩子 hook,应该是类似于AOP的一个东西
router.beforeEach((to, from, next) => {
  // document.title = to.meta.title
  document.title = to.matched[0].meta.title
  //可做权限空缺
  next()
  // next('/login')
  // to and from are both route objects. must call `next`.
})
router.afterEach((to, from) => {
  // to and from are both route objects.
  // console.log('******************');
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
