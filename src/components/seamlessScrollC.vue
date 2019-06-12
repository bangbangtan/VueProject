<template>
  <vue-seamless-scroll :data="listData" :class-option="optionHover" class="seamless-warp">
    <ul class="item" style=" display: flex; flex-wrap:wrap;">
      <li v-for="item in listData">
        <!-- <span> -->
          <img :src="item.src" alt="">
        <!-- </span> -->
      </li>
    </ul>
  </vue-seamless-scroll>
</template>
<style lang="scss" scoped>
  .seamless-warp {
    height: 600px;
    overflow: hidden;
    background:slategray;
  }

</style>
<script>
  import {
    data
  } from "../service/data"
  export default {
    data() {
      return {
        listData: []
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
      this.seamless()
    },
    methods: {
      async seamless() {
        let response = await data()
        this.listData = response
        console.log(this.listData)
      }
    }
  }

</script>
