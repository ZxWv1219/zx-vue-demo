<template>
  <div>
    <h1>用户界面</h1>
    <h2>param {{param}}</h2>
    <h2>computed {{userid}}</h2>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      param: this.$route.params.userid
    };
  },
  computed: {
    userid() {
      //$route 是获取current 路由
      return this.$route.params.userid;
    }
  },
  created() {
    // document.title = "用户";
    // console.log("created");
  }
};
</script>

<style>
</style>