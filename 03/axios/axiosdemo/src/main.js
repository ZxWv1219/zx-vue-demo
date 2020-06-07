import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
import { request } from './network/request'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

request({
  url: '/home/multidata'
})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   params: {
//     data: 1
//   },
//   method: 'get'
// }).then(res => {
//   console.log(res)
// })

// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.method = 'get'

// axios.all([
//   axios({
//     url: '/home/multidata',
//     params: {
//       data: 1
//     }
//   }),
//   axios({
//     url: '/home/multidata',
//     params: {
//       data: 1
//     }
//   })])
//   .then(res => {
//     console.log('这里是all')
//     const [res1, res2] = res
//     console.log(res1)
//     console.log(res2)
//   })
  // .then(([res1, res2]) => {
  //   console.log('这里是all')
  //   console.log(res1)
  //   console.log(res2)
  // })
  // .then(axios.spread((res1, res2) => {
  //   console.log(res1)
  //   console.log(res2)
  // }))

  //开发中使用 const axios1= axios.create({config})