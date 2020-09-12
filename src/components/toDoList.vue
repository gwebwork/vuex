<template>
 <ul>
   <todoitem :content='items' :myIndex='i' v-for="(items,i) in myList" :key="i"></todoitem>
 </ul>
</template>

<script>
export default {

  data () {
    return {
    
    }
  },
  computed:{
    myList(){
      return this.$store.getters.list
    }
  }
}
</script>

