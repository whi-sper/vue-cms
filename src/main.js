import Vue from 'vue'
//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由模块
Vue.use(VueRouter)


//导入MUI的样式
import './lib/MUI/css/mui.min.css'
import './lib/MUI/css/icons-extra.css'
//按需导入Mint-UI中的组件，这里暂时只需要header
import { Header } from 'mint-ui'
Vue.component(Header.name,Header)


//1.3导入自己的router.js路由模块
import router from './router.js'

//导入app根组件
import app from './App.vue'

var vm=new Vue({
  el:'#app',
  render:c=>c(app),
  router 
  //1.4 挂载路由对象到vm实例上
})