// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import ToDoList from '@/components/ToDoList'
import ToDoItem from '@/components/ToDoItem'
import ToDoInput from '@/components/ToDoInput'
Vue.component('todoinput',ToDoInput)
Vue.component('todoitem',ToDoItem)
Vue.component('todolist',ToDoList)
Vue.use(Vuex);
Vue.config.productionTip = false
//创建数据仓库
const myStore=new Vuex.Store({
  state:{   //初始化状态
    list:[]  
  },
  getters:{ //读取状态
    list(state){
      return state.list;
    }
  },
  mutations:{ //修改状态
    add(state,value){  //添加事项
      console.log(value);
      state.list.push(value);
    },
    delete(state,index){ //删除事项
      state.list.splice(index,1);
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store:myStore
})
