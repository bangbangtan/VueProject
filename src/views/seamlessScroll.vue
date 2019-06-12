<template>
  <div style=" height: calc(100% - 120px);">
    <seamlessScrollC></seamlessScrollC>
  </div>
</template>
<script>
   import seamlessScrollC from '../components/seamlessScrollC'
  export default {
    name: 'Layout',
    components: {
      seamlessScrollC
    },
    data() {
      return {
        value4: false,
      }
    },
    mounted() {
    },
    methods: {
    }
  }
</script>
<style>
</style>