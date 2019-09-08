<template>
  <div>
  <ul>
    <li v-for="(message,index) in messages" :key="index">
      <!--注意区分es5语法和es6语法 43_尚硅谷_Vue_向路由组件传递数据 6'-->
      <router-link :to ="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
    </li>
  </ul>
    <router-view></router-view>
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