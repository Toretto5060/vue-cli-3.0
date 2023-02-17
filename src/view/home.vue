<template>
  <div id="home">
    <div class="drawer">
      <MENU></MENU>
    </div>
    <div class="body">
      <div class="menu_header">
        <button @click="setMenu">开启&关闭</button>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
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
      overflow: hidden;
      .menu_header {
        width: 100%;
        height: 0.7rem;
        padding-left: 0.2rem;
        padding-right: 0.2rem;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
        display: flex;
        align-items: center;
        //border: 1px solid #ebeef5;
      }
      .content {
        width: 100%;
        margin-top: 0.1rem;
        height: calc(100% - 0.8rem);
        padding-left: 0.2rem;
        padding-right: 0.2rem;
      }
    }
  }

</style>
<style lang="less">


</style>
