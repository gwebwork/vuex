<template>
 <div>
   <span>{{content}}</span>
   <button @click="deletes">删除</button>
 </div>
</template>

<script>
export default {
  data () {
    return {
   
    }
  },
  props:['content','myIndex'],
  methods:{
    deletes(){
      this.$store.commit('delete',this.myIndex)
    }
  }
}
</script>

