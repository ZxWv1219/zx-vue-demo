import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast/index'


Vue.config.productionTip = false
//新建一个VUE实例做事件总线
Vue.prototype.$bus = new Vue()
//安装自定义插件
Vue.use(toast)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
