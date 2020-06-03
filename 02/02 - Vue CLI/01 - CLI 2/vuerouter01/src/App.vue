<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace active-class="active">home</router-link>
    <router-link to="/about" replace active-class="active">about</router-link> -->

    <!-- <router-link to="/home" tag="button" replace>home</router-link>
    <router-link to="/about" replace>about</router-link> -->

    <button @click='btnHome'>home</button>
    <button @click='btnAbout'>about</button>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "App",
    methods: {
      btnHome() {
        //pushState 方式
        // this.$router.push('/home')
        //replace 方式
        this.$router.replace('/home')
        console.log('btnHome');
      },
      btnAbout() {
        // this.$router.push('/about')
        this.$router.replace('/about')
        console.log('btnAbout');
      }
    }
  };
</script>

<style>
  .router-link-active {
    color: aquamarine;
  }

  .active {
    color: yellowgreen;
  }
</style>