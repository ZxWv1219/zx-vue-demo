import axios from 'axios'


export function request(config) {
    const req = axios.create({
        // baseURL: "http://123.207.32.32:8000",
        baseURL: "http://152.136.185.210:8000/api/n3",
        method: 'get',
        timeout: 5000
    })
    //因特赛pe特斯:拦截器
    //请求拦截
    req.interceptors.request.use(
        config => {
            //1.可以修改配置,参数,头部信息
            //2.显示loading界面
            return config
        },
        err => {
            console.log(err)
            return err
        })
    //响应拦截
    req.interceptors.response.use(
        res => {
            //统一判断返回结果成功,失败,异常,或token失效等
            //隐藏loading界面
            // console.log('*************拦截器response返回res.data*************')
            return res.data
        },
        err => {
            console.log(err)
            return err
        }
    )
    //axios 返回本身就是一个Promise,所以直接返回
    return req(config)
}