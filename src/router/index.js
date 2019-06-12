import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: resolve => require(['../views/login.vue'], resolve)
  },
  {
    path: '/home',
    component: resolve => require(['../common/home.vue'], resolve),
    children: [{
      path: '/VueSplitpane',
      component: resolve => require(['../views/VueSplitpane.vue'], resolve)
    },{
      path: '/tables',
      component: resolve => require(['../views/tables.vue'], resolve)
    },{
      path: '/draggable',
      component: resolve => require(['../views/draggable.vue'], resolve)
    },{
      path: '/vueVirtualScroller',
      component: resolve => require(['../views/vueVirtualScroller.vue'], resolve)
    },{
      // seamlessScroll
      path: '/seamlessScroll',
      component: resolve => require(['../views/seamlessScroll.vue'], resolve)
    }]
  }
  ]
})
