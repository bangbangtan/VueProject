<template>
  <div class="splitpane">
    <div class="drag-drawer-inner-box">
      <Button @click="value5 = true" type="primary">Open Drawer</Button>
      <Drawer title="可拖拽的table 可拖拽行和列" placement="left" :scrollable="true" width="300" :closable="true" :inner="true"
        :transfer="false" v-model="value5" :mask-closable="true" draggable>
        <sortable></sortable>
      </Drawer>
      <div style="margin-top: 20px">
      </div>
    </div>
  </div>
</template>
<script>
  import sortable from "../components/sortable"
  export default {
    components: {
      sortable
    },
    data() {
      return {
        value5: false
      }
    },
    mounted() {},
    methods: {
     
    }
  }

</script>
<style>
  .splitpane {
    width: 100%;
    height: 100%;
    height: calc(100% - 105px);
    /* background: wheat; */
    padding-left: 20px;
  }

  .drag-drawer-inner-box {
    position: relative;
    width: 100%;
    height: calc(100% - 1px);
    padding-top: 4px
  }

</style>
