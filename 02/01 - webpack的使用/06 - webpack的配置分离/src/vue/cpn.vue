<template id='template'>
  <div>
    <h2 class="cpntitle">我是CPN{{tMsg}}</h2>
  </div>
</template>

<script>
export default {
  template: "#template",
  data() {
    return {
      tMsg: "我是CPN 的template11"
    }
  }
}
</script>

<style>
.cpntitle {
  color: blueviolet;
}
</style>
