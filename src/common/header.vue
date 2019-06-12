<template>
  <div class="themeClass" style="height:105px">
    <div class="headerTow" :style="{ 'background': themeColor}">
      <el-row type="flex" class="row-bg" justify="space-around">
        <!--  这边要用 + 'px' -->
        <el-col :span="1" :style="{'color':FontColor,'fontSize':24 +'px'}">
          <i class="el-icon-s-unfold" @click="handleStretch" v-if="isShow" ></i>
          <i class="el-icon-s-fold" @click="handleNarrow" v-if="!isShow"></i>
        </el-col>
        <el-col :span="20">
        </el-col>
        <el-col :span="1">
          <el-button type="primary" icon="el-icon-edit" circle @click="handleCircle"></el-button>
        </el-col>
      </el-row>
    </div>
    <div>
      <Tag @on-close="handleClose(tag)" closable type="dot" checkable size="mini" v-for="(tag,index) in tags"
        :key="index" @click.native="handleTag(tag,index)" color="error" ref="TagType"
        :class="{active:index === isActive}">
        <!-- handlesFontColor  'backgroundColor':themeColorAl -->
        {{tag}}
      </Tag>
    </div>
    <Drawer :closable="false" v-model="valueDrawer" trigger>
      <div>
        <h2> 主题颜色</h2>
        <el-color-picker v-model="themeColor" style="margin-top:13px" @change="activeChange" size="small">
        </el-color-picker>
      </div>
      <div style="margin-top:20px">
        <h2>字体颜色</h2>
        <el-color-picker v-model="FontColor" size="mini" @change="handleFontPicker"></el-color-picker>
      </div>
    </Drawer>
  </div>
</template>
<script>
  import vuex from "vuex"
  export default {
    data() {
      return {
        isShow: true,
        themeColor: '#2D3B4C',
        tags: ['VueSplitpane'],
        isActive: -1,
        valueDrawer: false,
        FontColor: '#AFBAC6'
      }
    },
    methods: {
      activeChange() {
        // 第一个参数是store里面的。第二参数你要传送的
        this.$store.commit('themeColorAl', this.themeColor)
        // console.log( this.$store)
      },
      handleStretch() {
        // 因为dispatch必须要用 hideFooter   使用dispatch 和 commit的区别在于，前者是异步操作，后者是同步操作，        
        this.isShow = false
        // return this.$store.dispatch('hideFooter')
        return this.$store.commit('hide')
      },
      handleNarrow() {
        this.isShow = !this.isShow
        // return this.$store.dispatch('showFooter')
        return this.$store.commit('show')
      },
      handleClose(val) {
        this.tags.splice(this.tags.indexOf(val), 1)
      },
      // 这个一定要写tag,否则不会出现
      handleTag(tag, index) {
        console.log(this.themeColor)
        this.$router.push(tag)
        // 很重要  一定要index===this.isActive
        this.isActive = index
        
      },
      handleCircle() {
        this.valueDrawer = true
        // this.$bus.emit('swichColorDD', keyPath)
      },
      handleFontPicker(){
        //就写这一个就可以传过来 

         this.$store.commit('handlesFontColor',this.FontColor)
      }
    },
    computed: {
      // // vuex 初始化值
      // ...vuex.mapGetters(["themeColorAl","handlesFontColor"])
    },
    created() {
      this.$bus.on('swichColorDD', (val) => {
        val.map((item) => {
          this.tags.push(item)
        })
        this.tags = Array.from(new Set(this.tags))
      })

    },
    watch: {
      tags(val) {
        // console.log(val)
      },
      deep: true
    }

  }

</script>
<style>
  .el-header {
    padding: 0 0px !important;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }

  .headerTow {
    height: 60px;
    line-height: 60px;
  }
  .active {
    background: pink !important;
  }

</style>
