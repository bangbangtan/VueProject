// 这个页面相当于仓库  集中式存储   全局大变量的套路
import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
import axios from "axios";
// state 单一状态树
const state = {
  isCollapse: true,
  themeColor: '#2D3B4C',
  keyPath: "",
  FontColor: 'AFBAC6',
}
// getter 我只管取，我不改的   computed 里面，这说明虽然 getter我们写的是函数 计算属性来用。
//   return this.$store.getters.getAge
const getters = {
  isShow(state) { //方法名随意,主要是来承载变化的isCollapse的值
    return state.isCollapse
  },
  themeColorAl: state => state.themeColor,
  handlesFontColor: state => state.FontColor
}
// Mutation 事件类型 允许更新状态，但永远是同步的。Mutations 是 store 中改变状态数据的唯一方式
const mutations = {
  show(state) { //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
    state.isCollapse = true;
  },
  hide(state) { //同上
    state.isCollapse = false;
  },
  // state  开始参数，res要修改的参数
  themeColorAl(state, res) {
    // console.log(state,res)
    state.themeColor = res
  },
  handlesFontColor(state, res) {
    state.FontColor = res
  }
}
const actions = {
  hideFooter(context) { //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
    context.commit('hide');
  },
  showFooter(context) { //同上注释
    context.commit('show');
  },
  themter(context, data) { //同上注释
    // console.log(data)
    context.commit('themeColorAl', data);
    context.commit('handlesFontColor', data);
  },
  // 封装一个ajax方法
  
  

}
// 爆入出去
export default new vuex.Store({
  state,
  mutations,
  getters,
  actions
})
