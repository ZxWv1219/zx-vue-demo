import axios from 'axios'

const req = axios.create({
    baseURL: "http://123.207.32.32:8000",
    method: 'get',
    timeout: 5000
})
export function request(config) {
    // return new Promise((resolve, reject) => {
    //     req(config)
    //         .then(res => {
    //             resolve(res)
    //         })
    //         .catch(err => {
    //             reject(err)
    //         })
    // })

    //因特赛pe特斯:拦截器
    //请求拦截
    req.interceptors.request.use(
        config => {
            //1.可以修改配置,参数,头部信息
            //2.显示loading界面
            console.log(config)
            return config
        },
        err => {
            console.log(err)
            return err
        })
    //响应拦截
    req.interceptors.response.use(
        res => {
            console.log(res)
            //统一判断返回结果成功,失败,异常,或token失效等
            //隐藏loading界面
            console.log('*************拦截器response*************')
            return res
        },
        err => {
            console.log(err)
            return err
        }
    )
    //axios 返回本身就是一个Promise 所以直接返回
    return req(config)
}