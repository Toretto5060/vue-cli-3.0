<template>
  <fragment>
    <template v-for="(menu,index) in this.menuData">
      <el-submenu :key="menu.id" :index="menu.id" v-if="menu.children">
        <template slot="title">
          <i :class="menu.icon"></i>
          <span slot="title">{{menu.title}}</span>
        </template>


        <menu-tree :menuData="menu.children"></menu-tree>

      </el-submenu>
      <el-menu-item :key="menu.id" :index="menu.id" v-else>
        <i :class="menu.icon"></i>
        <span slot="title">{{menu.title}}</span>
      </el-menu-item>
    </template>
  </fragment>
</template>

<script>
export default {
  name: 'MenuTree',
  props: ['menuData'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
<style>
    .el-menu-item{
      overflow:hidden
    }
</style>
