import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const moduleA = {
    state: {
        name: '张无忌'
    },
    mutations: {
        updateName(state, payload) {
            state.name = payload
        }
    },
    actions: {},
    getters: {}
}
const moduleB = {
    state: {
        name: '张三丰'
    },
    mutations: {},
    actions: {},
    getters: {}
}

export default new Vuex.Store({
    state: {
        counter: 10
    },
    //缪忒寻
    //默认参数 state,自定义参数(state,payload)
    //回调函数
    mutations: {
        add(state) {
            state.counter++
        },
        substract(state) {
            state.counter--
        }
    },
    //默认参数 state,getters
    //和computed 类似
    getters: {
        sum(state) {
            return state.counter + state.counter
        }
    },
    //异步操作
    actions: {
        //参数context 上下文 ,也就是store对象,也可以添加payload参数
        setValue(context, payload) {
            setTimeout(() => {
                //使用commit去调用mutations里面的函数
                context.commit('add')
                console.log(payload.param)
                payload.callback()
            }, 1000)
        },
        setValue01(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    //使用commit去调用mutations里面的函数
                    context.commit('add')
                    console.log('加1')
                    resolve(payload)
                }, 1000)

            })
        }
    },
    modules: {
        moduleA,
        moduleB
    }
})