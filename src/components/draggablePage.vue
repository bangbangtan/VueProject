<template>
  <div class="dragDemo" style="padding:0 10px 0px 10px">
    <el-card shadow="always" style="width:100%;">
      <el-row type="flex" class="row-bg">
        <el-col :span="1">
          <!-- <p >列表2  </p>  @start="handelTwoStart" @update="handleDatadragEnd" @end="handleTwoEnt"  :move="handleOnMove" :options="dragOptions2" -->
          <draggable style="width:50px;height:55px;overflow:hidden;" element="div" v-model="listRight"
            :options="dragOptions2">
            <p>
              <Icon type="ios-folder" style="font-size:40px;overflow:hidden;" @click="hanldleDran" />
            </p>
            <p style="overflow:hidden;">文件夹{{listRight.length}}</p>
            <div style="display: flex; justify-content: flex-start;" v-if="ListGroup">
              <div v-for="item in listRight">
                <p>
                  <Icon :type="item.type" style="font-size:40px" />
                </p>
                <p v-text="item.name">文件</p>
              </div>
            </div>
          </draggable>
        </el-col>
        <el-col :span="6">
          <!-- @start="handelSrart"  @update="datadragEnd" -->
          <draggable style="width:60px;display: flex; justify-content: flex-start;" element="div" v-model="listLeft"
            :options="dragOptions1" :move="onMove" @end="handelEen" @remove="handelRemove">
            <div v-for="item in listLeft">
              <p>
                <Icon :type="item.type" style="font-size:40px" />
              </p>
              <p v-text="item.name">文件</p>
            </div>
          </draggable>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
  import draggable from "vuedraggable";
  export default {
    components: {
      draggable
    },
    data() {
      return {
        isDragging: false,
        ListGroup: false,
        listLeft: [{
          name: '数据一',
          value: '1',
          type: 'ios-albums-outline'
        }, {
          name: '数据二',
          value: '2',
          type: 'ios-albums-outline'
        }, {
          name: '数据三',
          value: '3',
          type: 'ios-albums-outline'
        }, {
          name: '数据四',
          value: '4',
          type: 'ios-albums-outline'
        }, {
          name: '数据五',
          value: '5',
          type: 'ios-albums-outline'
        }],
        listRight: []
      }
    },
    computed: {
      dragOptions1() {
        return {
          animation: 2,
          group: { // group: string or array分组用的，同一组的不同list可以相互拖动 sort: boolean 定义是否可以拖拽
            name: "description",
            pull: 'clone', //当pull:'clone时的拖拽的回调函数’
            put: false,
            sort: true //定义是否可以拖拽
          },
          ghostClass: "ghost",
        };
      },
      dragOptions2() {
        return {
          animation: 4,
          group: "description",

        };
      }
    },
    methods: {
      onMove({
        relatedContext,
        draggedContext
      }) {
        // console.log(relatedContext,draggedContext)
        const relatedElement = relatedContext.element;
        const draggedElement = draggedContext.element;
        return (
          (
            !relatedElement || !relatedElement.fixed) && !draggedElement.fixed
        );
      },
      handleOnMove(evt) {
        console.log(evt)
        console.log(evt.draggedContext.element.name)
      },
      handelSrart(evt) {
        // this.isDragging = true
        console.log(evt)
      },
      handelEen(evt) {
        this.isDragging = true
        console.log(evt)
      },
      handelTwoStart(evt) {
        // this.isDragging = true
        console.log(evt)
      },
      handleTwoEnt(evt) {
        // this.isDragging = false
        console.log(evt)
      },
      handelRemove(evt) {
        console.log(evt.oldIndex)
        this.listLeft.splice(evt.oldIndex, 1)
      },
      datadragEnd(evt) {
        evt.preventDefault();
        console.log(evt)
      },
      handleDatadragEnd(evt) {
        console.log(evt)
      },
      hanldleDran() {
        this.ListGroup = true

      }
    }
  }

</script>
<style scoped lang="scss">
</style>
