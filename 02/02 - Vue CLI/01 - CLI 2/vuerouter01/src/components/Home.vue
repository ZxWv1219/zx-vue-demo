<template>
  <div>
    <h2>this is a Home page</h2>
    <router-link to="/home/news">news</router-link>
    <router-link to="/home/message">message</router-link>
    <!-- 排除keep-alive exclude="name1,name2" -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: "Home",
    created() {
      console.log("created");
    },
    destroyed() {
      console.log('destroyed');
    },
    beforeRouteLeave(to, from, next) {
      // ...
      console.log(this.$route.path);
      next()
    },
    activated() {
      //keep-live 才会执行
    },
    deactivated() {
      //keep-live 才会执行
    },
  };
</script>

<style>
</style>