<template>
  <div style=" height: calc(100% - 120px);">
    <vue-waterfall-easy :imgsArr="imgsArr" @scrollLoadImg="getData" @scrollReachBottom="scrollReachBottom"
      @click="clickFn">
    </vue-waterfall-easy>
  </div>
</template>
<script>
  import vuex from "vuex"
  import axios from 'axios'
  import vueWaterfallEasy from 'vue-waterfall-easy'
  export default {
    components: {
      vueWaterfallEasy
    },
    data() {
      return {
        imgsArr: [], //存放所有已加载图片的数组（即当前页面会加载的所有图片）
        group: 0, // 当前加载的加载图片的次数
        fetchImgsArr: [], //存放每次滚动时下一批要加载的图片的数组
      }
    },
    computed: {
      optionHover() {
        return {
          hoverStop: false
        }
      }
    },
    created() {
      this.getData()
      this.imgsArr = this.initImgsArr(0, 10) //初始化第一次（即页面加载完毕时）要加载的图片数据
      this.fetchImgsArr = this.initImgsArr(10, 20) // 模拟每次请求的下一批新的图片的数据数据
    },
    methods: {
      initImgsArr(n, m) {
        var arr = []
        for (var i = n; i < m; i++) {
          arr.push({
            src: `static/img/${i + 1}.jpg`,
            link: '',
            info: '一些图片描述文字'
          }) //src为加载的图片的地址、link为超链接的链接地址、

          //info为自定义的图片展示信息，请根据自己的情况自行填写
        }
        return arr
      },
      getData() {
        axios.get('../../static/mock/data.json?group=' + this.group).then(res => {
          this.group++
          if (this.group === 10) { // 模拟已经无新数据，显示 slot="waterfall-over"
          // 如果超过10页，就不能滚动了
            this.$refs.waterfall.waterfallOver()
            return
          }
          this.imgsArr = this.imgsArr.concat(res.data)
          console.log(this.group)
        })
      },
      scrollReachBottom() {
        this.getData()
      },
      // 点击哪个图片就出现详细信息
      clickFn(event, {index,value}) {
        // 阻止a标签跳转
        event.preventDefault()
        // 只有当点击到图片时才进行操作
        if (event.target.tagName.toLowerCase() == 'img') {
          console.log('img clicked', index, value)
        }
      }
    },
    computed: {}
  }

</script>
<style></style>
