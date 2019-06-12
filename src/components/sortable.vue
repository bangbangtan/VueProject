<template>
  <div style="width:800px">
      <el-input placeholder="请输入内容" v-model="input">
          <el-button slot="append" icon="el-icon-search" @click="Search"></el-button>
        </el-input>
    <el-table :data="tableData"
      row-key="id"
      align="left">
     <el-table-column v-for="(item, index) in col"
        :key="`col_${index}`"
        :prop="dropCol[index].prop"
        :label="item.label"> 
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import Sortable from 'sortablejs'
export default {
  data() {
    return {
      input: '',
      col: [
        {
          label: '日期',
          prop: 'date'
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '地址',
          prop: 'address'
        }
      ],
      dropCol: [
        {
          label: '日期',
          prop: 'date'
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '地址',
          prop: 'address'
        }
      ],
      tableData: [
        {
          id: '1',
          date: '2016-05-02',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 100 弄'
        },
        {
          id: '2',
          date: '2016-05-04',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 200 弄'
        },
        {
          id: '3',
          date: '2016-05-01',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 300 弄'
        },
        {
          id: '4',
          date: '2016-05-03',
          name: '王小虎4',
          address: '上海市普陀区金沙江路 400 弄'
        }
      ]
    }
  },
  mounted() {
    this.rowDrop()
    this.columnDrop()
  },
  computed:{
    // list(){
     
    // }
  },
  methods: {
    //行拖拽
    rowDrop() {
      // console.log(document)
      const tbody = document.querySelector('.el-table__body-wrapper tbody')
      // console.log(tbody)
      const _this = this
      Sortable.create(tbody, {
        onEnd({ newIndex, oldIndex }) {
          const currRow = _this.tableData.splice(oldIndex, 1)[0]
          _this.tableData.splice(newIndex, 0, currRow)
        }
      })
    },
    //列拖拽
    columnDrop() {
      // console.log(document)
      const wrapperTr = document.querySelector('.el-table__header-wrapper tr')
      // console.log(wrapperTr)
      this.sortable = Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: evt => {
          const oldItem = this.dropCol[evt.oldIndex]
          this.dropCol.splice(evt.oldIndex, 1)
          this.dropCol.splice(evt.newIndex, 0, oldItem)
        }
      })
    },
    // 前端自己写的搜索   search()如果没有匹配的== -1  区分大小写
     Search(){
      let Arrs = []
      for(let i=0;i<this.tableData.length;i++){
        if(this.tableData[i].name.search(this.input) != -1){
          Arrs.push(this.tableData[i])
        }
      }
      console.log(Arrs)
      this.tableData = Arrs
    }
  }
}
</script>
<style scoped>
</style>