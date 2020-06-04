<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace active-class="active">home</router-link>
    <router-link to="/about" replace active-class="active">about</router-link>-->

    <!-- <router-link to="/home" tag="button" replace>home</router-link>
    <router-link to="/about" replace>about</router-link>-->

    <!-- <button @click='btnHome'>home</button>
    <button @click='btnAbout'>about</button>-->
    <!-- <router-link :to="'/user/'+ userid">user</router-link>
    <router-link to="/home">home</router-link>
    <router-link :to="params">profile</router-link> -->
    <button @click='btnHome'>home</button>
    <button @click='btnUser'>User</button>
    <button @click='btnProflie'>Profile</button>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        userid: "23",
        params: {
          path: "/profile",
          query: {
            name: "张三丰",
            age: "18",
            sex: "1.88"
          }
        }
      };
    },
    methods: {
      btnUser() {
        this.$router.push("/user/" + this.userid);
      },
      btnProflie() {
        this.myprint()
        //query 方式
        this.$router.push(this.params);
      },
      btnHome() {
        //pushState 方式
        this.$router.push('/home')
        //replace 方式
        // this.$router.replace("/home");
        console.log("btnHome");
      },
      btnAbout() {
        // this.$router.push('/about')
        this.$router.replace("/about");
        console.log("btnAbout");
      }
    },
    created() {
      // document.title = '主页'
      // console.log('created');
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