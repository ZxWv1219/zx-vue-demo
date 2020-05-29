<template id='template'>
  <div class="title">
    <h2>我是一个.VUE文件{{tMsg}}</h2>
    <cpn></cpn>
  </div>
</template>

<script>
import cpn from "./cpn.vue";
export default {
  template: "#template",
  data() {
    return {
      tMsg: "我是template"
    };
  },
  components: {
    cpn
  }
};
</script>

<style>
.title {
  color: greenyellow;
}
</style>
