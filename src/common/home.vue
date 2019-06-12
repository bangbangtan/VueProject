<template>
  <div class="home">
    <el-container>
      <!-- 必须设置width:auto   否会出现300 默认样式 -->
      <el-aside style="width:auto">
        <asides></asides>
      </el-aside>
      <el-container>
        <el-header style="height:105px">
          <Header></Header>
        </el-header>
        <router-view/>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import asides from './asides.vue'
import Header from './header.vue'
export default {
  components: {
    asides,
    Header
  }
}
</script>
<style>
  .home {
    width: 100%;
    height: 100%;
  }
</style>
