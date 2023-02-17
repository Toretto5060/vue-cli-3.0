<template>
  <div class="menuTable">
    <el-menu
        :background-color="this.$store.getters.MenuState.background"
        :text-color="this.$store.getters.MenuState.textColor"
        class="new-el-menu--sidebar"
        @open="handleOpen"
        @close="handleClose"
        :collapse="!this.$store.getters.MenuState.state"
        :unique-opened="true"
    >
<!--      :collapse-transition="false"-->


      <menu-tree :menuData="this.$store.getters.MenuList"></menu-tree>
    </el-menu>
  </div>
</template>

<script>
import MenuTree from '@/components/MenuTree'

export default {
  components: {
    MenuTree
  },
  data(){
    return{
      menu:''

    }
  },
  mounted(){
    // this.$store.getters.MenuList
  },
  methods:{


    handleOpen(key, keyPath) {

      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
<style lang="less">
  .menuTable {
    height: 100%;
    //overflow: auto;
    .el-menu {
      height: 100%;
      box-sizing: border-box;
    }
    .new-el-menu--sidebar:not(.el-menu--collapse) {
      width:2.2rem
      //height: 100%;
    }
  }
</style>
