<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import MainTabBar from '@/components/content/tabbar/MainTabBar'

  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import url('./assets/css/base.css');
</style>