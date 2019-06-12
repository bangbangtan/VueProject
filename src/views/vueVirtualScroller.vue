<template>
  <div style=" height: calc(100% - 120px);">
      <Button @click="value4 = true" type="primary">可以拖拽的瀑布流</Button>
      <Drawer :closable="false" width="1000" v-model="value4">
        <gridLayout></gridLayout>
      </Drawer>
   <waterfallEasy ></waterfallEasy>
  </div>
</template>
<script>
  import gridLayout from '../components/gridLayout'
  import waterfallEasy from '../components/waterfallEasy'
  import { data } from "../service/data"
  export default {
    name: 'Layout',
    components: {
      gridLayout,
      waterfallEasy
    },
    data() {
      return {
        value4: false,
      }
    },
    mounted() {
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
<style scoped>
</style>
