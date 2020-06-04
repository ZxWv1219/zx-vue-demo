<template>
  <div>
    <h2>我是Profile组件</h2>
    <h3>{{$route.query}}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  created() {
    // document.title = "Profile";
    // console.log("created");
  }
};
</script>
<style>
</style>