<template>
  <!-- vertical-compact 是 垂直紧凑布局 就是拖动留空了 若下方有块会自动往上补
    
 -->
  <grid-layout :layout="layout" :auto-size="false" :col-num="10"  :row-height="200" :row-width="300" :max-rows="1000" :is-draggable="true"
    :is-resizable="false" :vertical-compact="true" :margin="[10, 10]" :use-css-transforms="true" >
    <grid-item v-for="item in layout" :key="item.i" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i"
      @resize="resizeEvent" @move="moveEvent" @resized="resizedEvent" @moved="movedEvent">
      {{item.y}}
      <!-- <img :src="item.i" alt="" style="height:300px;width:300px"> -->
    </grid-item>
  </grid-layout>
</template>

<script>
  import Vue from 'vue'
  import VueGridLayout from 'vue-grid-layout'
  Vue.use(VueGridLayout)
  import axios from 'axios'
  var testLayout = [{
      "x": 0,
      "y": 0,
      "w": 1,
      "h": 1,
      "i": "/static/img/1.jpg"
    },
    {
      "x": 0,
      "y": 1,
      "w": 1,
      "h": 1,
      "i": "/static/img/2.jpg"
    },
    {
      "x": 0,
      "y": 2,
      "w": 1,
      "h": 1,
      "i": "/static/img/3.jpg"
    },
    {
      "x": 0,
      "y": 3,
      "w": 1,
      "h": 1,
      "i": "/static/img/5.jpg"
    },
    {
      "x": 1,
      "y": 0,
      "w": 1,
      "h": 1,
      "i": "/static/img/6.jpg"
    },
    {
      "x": 1,
      "y": 1,
      "w": 1,
      "h": 1,
      "i": "/static/img/7.jpg"
    },
    {
      "x": 1,
      "y": 2,
      "w": 1,
      "h": 1,
      "i": "/static/img/8.jpg"
    },
    {
      "x": 1,
      "y": 3,
      "w": 1,
      "h": 1,
      "i": "/static/img/9.jpg"
    },
    {
      "x": 2,
      "y": 0,
      "w": 1,
      "h": 1,
      "i": "/static/img/10.jpg"
    },
    {
      "x": 2,
      "y": 1,
      "w": 1,
      "h": 1,
      "i": "/static/img/11.jpg"
    },
    {
      "x": 2,
      "y": 2,
      "w": 1,
      "h": 1,
      "i": "/static/img/12.jpg"
    },
    {
      "x": 2,
      "y": 3,
      "w": 1,
      "h": 1,
      "i": "/static/img/14.jpg"
    },
    {
      "x": 3,
      "y": 0,
      "w": 1,
      "h": 1,
      "i": "/static/img/15.jpg"
    },
    {
      "x": 3,
      "y": 1,
      "w": 1,
      "h": 1,
      "i": "/static/img/16.jpg"
    },
    {
      "x": 3,
      "y": 2,
      "w": 1,
      "h": 1,
      "i": "/static/img/17.jpg"
    },
    {
      "x": 3,
      "y": 3,
      "w": 1,
      "h": 1,
      "i": "/static/img/18.jpg"
    },
    {
      "x": 4,
      "y": 0,
      "w": 1,
      "h": 1,
      "i": "/static/img/19.jpg"
    },
    {
      "x": 4,
      "y": 1,
      "w": 1,
      "h": 1,
      "i": "/static/img/20.jpg"
    },
    {
      "x": 4,
      "y": 2,
      "w": 1,
      "h": 1,
      "i": "/static/img/13.jpg"
    },
    {
      "x": 4,
      "y": 3,
      "w": 1,
      "h": 1,
      "i": "/static/img/4.jpg"
    }
  ];

  var GridLayout = VueGridLayout.GridLayout;
  var GridItem = VueGridLayout.GridItem;

  export default {
    name: 'Layout',
    components: {
      GridLayout,
      GridItem,
    },
    data() {
      return {
        layout: testLayout,
        newX: 0,
        newY: 0
      }
    },
    mounted() {
     this.getData()
    },
    methods: {
      // 移动时就触发
      moveEvent: function (i, newX, newY, e) {
        //console.log(e)
        console.log("MOVE i=" + i + ", X=" + newX + ", Y=" + newY);
      },
      resizeEvent: function (i, newH, newW) {
        console.log("RESIZE i=" + i + ", H=" + newH + ", W=" + newW);
      },
      // 松开鼠标的时候触发
      movedEvent: function (i, newX, newY, e) {
        //console.log(e)
        console.log("MOVED i=" + i + ", X=" + newX + ", Y=" + newY);
      },
      resizedEvent: function (i, newH, newW, newHPx, newWPx) {
        console.log("RESIZED i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
      },
      getData() {
        axios.get('../../static/mock/data.json?group=' + this.group).then(res => {
         console.log(res)
        })
      },
    }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vue-grid-layout {
    position: relative;
    width: 1200px;
    height: 700px;
    overflow: hidden;
    /* background: url('../../assets/desktop_background.png') no-repeat; */
  }

  .vue-grid-layout>div {
    position: absolute;
    background: indianred;
  }

</style>
