<template>
  <div>
    <h2>this is a Home page</h2>
    <router-link to='/home/news'>news</router-link>
    <router-link to='/home/message'>message</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:"Home"
};
</script>

<style>
</style>