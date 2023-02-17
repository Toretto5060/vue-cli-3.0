<template>
  <div id="home">
    <div class="drawer">
      <MENU></MENU>
    </div>
    <div class="body">
      <button @click="setMenu">开启&关闭</button>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MENU from '@/components/Menu'
export default {
  name: "home",
  components: {
    MENU
  },
  data(){
    return{

    }
  },
  computed:{

  },
  mounted(){
  },
  methods:{
    setMenu() {
      this.$store.dispatch('app/setMenuState',!this.$store.getters.MenuState.state)
    },

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #home {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: auto;
    display: flex;
    flex-direction: row;
    font-size: 0.2rem;
    .drawer {
      height: 100%;
      float: left;
    }
    .body {
      width: calc(100% - 2.2rem);
      height: 100%;
      float: left;
      //transition: all 0.3s;
    }
  }

</style>
<style lang="less">


</style>
