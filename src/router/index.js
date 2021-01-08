import Vue from 'vue'
import VueRouter from 'vue-router'

// 安装插件
Vue.use(VueRouter)

// 定义 (路由) 组件
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: ()=> import('@/views/home/Home')
  },
]

// 创建VueRouter对象
const router = new VueRouter({
  routes
})

// 导出
export default router