<template>
  <div class="demo-split">
    <Split v-model="split3">
      <div slot="left" class="demo-split-pane no-padding">
        <Split v-model="split4" mode="vertical">
          <div slot="top" class="demo-split-pane">
            <!-- Top Pane -->
          </div>
          <div slot="bottom" class="demo-split-pane">
            <!-- Bottom Pane -->
          </div>
        </Split>
      </div>
      <div slot="right" class="demo-split-pane" >
        <!-- <div style="background:tomato;height:300px">  
        </div> -->
      </div>
    </Split>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        split3: 0.5,
        split4: 0.5
      }
    },
  }

</script>
<style>
  .demo-split {
    height: 630px;
    border: 1px solid #dcdee2;
  }

  .demo-split-pane {
    /* padding: 10px; */
    background: tomato;
  }

  .demo-split-pane.no-padding {
    height: 300px;
    padding: 0;
    /* background: pink; */
  }

</style>
