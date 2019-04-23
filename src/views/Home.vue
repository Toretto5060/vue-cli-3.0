<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { get, post } from "../api/index";
export default {
  name: "home",
  components: {
    HelloWorld
  },
  mounted() {
    this.getPostData();
    this.getGetData();
  },
  methods: {
    getGetData() {
      get().then(res => {
        console.log(res);
      });
    },
    getPostData() {
      let data = {
        prod: "传输数据"
      };
      post(data).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
