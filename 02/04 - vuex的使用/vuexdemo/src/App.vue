<template>
  <div id="app">
    <h2>{{$store.state.moduleA.name}}</h2>
    <button @click='updateName'>修改moduleA里的Name</button>
    <h2>{{$store.state.moduleB}}</h2>
    <h2>{{msg}}</h2>
    <h2>{{msg}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.sum}}</h2>
    <!-- 不建议这样直接修改store.state里面的值,直接修改时无法保存修改记录 -->
    <button @click='add()'>+</button>
    <button @click='substract()'>-</button>

    <button @click='testActions()'>测试actions</button>
    <button @click='testActions01()'>测试actions01</button>

    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  import HelloVuex from '@/components/HelloVuex'

  export default {
    name: 'App',
    data() {
      return {
        msg: '我是APP组件',
        counter: 0
      }
    },
    components: {
      HelloVuex
    },
    methods: {
      add() {
        this.$store.commit('add')
      },
      substract() {
        this.$store.commit('substract')

      },
      testActions() {
        this.$store.dispatch('setValue',
          {
            param: '我是参数',
            callback: () => {
              console.log('回调函数');
            }
          })
      },
      //优雅的异步,链式编程
      testActions01() {
        this.$store.dispatch('setValue01', "参数")
          .then(res => {
            console.log(res);
          })
      },
      updateName() {
        this.$store.commit('updateName', 'zhangwuji')
      }
    }
  }
</script>

<style>


</style>