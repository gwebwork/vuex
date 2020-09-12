<template>
 <div>
   <h1>待做事项</h1>
   <input type="text" v-model="myValue" placeholder="请输入事项...">
   <button @click="addList">添加</button>
 </div>
</template>

<script>
export default {

  data () {
    return {
      myValue:'',
    }
  },
  methods:{
    addList(){
      this.$store.commit('add',this.myValue); //通知数据仓库触发add添加操作
      this.myValue="";
    }
  }
}
</script>

