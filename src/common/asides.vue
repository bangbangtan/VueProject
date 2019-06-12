<template>
  <div class="asidesBox" :style="{ 'background':themeColorAl}">
    <!--  collapse-transition="true"  开启折叠动画 default-active="1" 默认高亮-->
    <div style="height:60px"></div>
    <el-menu class="el-menu-demo" :collapse="isCollapse" collapse-transition router
      :style="{ 'backgroundColor':themeColorAl}" default-active="VueSplitpane" @select="handleSelect">
      <el-menu-item index="VueSplitpane">
        <i class="el-icon-hot-water" :style="{ 'color':handlesFontColor}"></i>
        <span :style="{ 'color':handlesFontColor}">VueSplitpane</span>
      </el-menu-item>
      <el-menu-item index="tables">
        <i class="el-icon-goblet-square-full" :style="{ 'color':handlesFontColor}"></i>
        <span slot="title" :style="{ 'color':handlesFontColor}">tables</span>
      </el-menu-item>
      <el-menu-item index="draggable">
        <i class="el-icon-milk-tea" :style="{ 'color':handlesFontColor}"></i>
        <span slot="title" :style="{ 'color':handlesFontColor}">draggable</span>
      </el-menu-item>
      <el-menu-item index="vueVirtualScroller">
        <i class="el-icon-lollipop" :style="{ 'color':handlesFontColor}"></i>
        <span slot="title" :style="{ 'color':handlesFontColor}">vueVirtualScroller</span>
      </el-menu-item>
      <!-- seamlessScroll -->
      <el-menu-item index="seamlessScroll">
        <i class="el-icon-ice-cream-round" :style="{ 'color':handlesFontColor}"></i>
        <span slot="title" :style="{ 'color':handlesFontColor}">seamlessScroll</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  import vuex from "vuex"
  export default {
    data() {
      return {
        // handlesFontColor: '#AFBAC6',

      }
    },
    methods: {
      handleSelect(key, keyPath) {
        this.$bus.emit('swichColorDD', keyPath)
        // console.log(this.handlesFontColor)
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath)
      }
    },
    // 这边得带vuex.mapState  否则报错
    computed: {
      // 获取初始化值
      ...vuex.mapState(["isCollapse", 'handlesFontColor']),
      ...vuex.mapGetters(["themeColorAl", "handlesFontColor"])
    }

  }

</script>
<style>
  .asidesBox {
    width: auto;
    height: 100%;
  }

  .asidled {
    height: 100%;
  }

  .el-menu {
    border-right: solid 0px #fff !important;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

</style>
