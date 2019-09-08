<template>
  <div>
  <ul>
    <li v-for="(message,index) in messages" :key="index">
      <a href="???">{{message.title}}</a>
    </li>
  </ul>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        messages:[]
      }
    },
    mounted(){
      //模拟从后台获取数据
      setTimeout(() =>{
       const messages = [
         {
           id:1,
           title:'message01'
         },
         {
           id:2,
           title:'message02'
         },
         {
           id:3,
           title:'message03'
         }
       ]
        this.messages = messages;//必须写这段代码，否则页面获取不了数据。
  },1000)
    }
  }
</script>
<style>

</style>