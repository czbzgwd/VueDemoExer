<template>
  <div>
  <ul>
    <li v-for="(message,index) in messages" :key="index">
      <!--注意区分es5语法和es6语法 43_尚硅谷_Vue_向路由组件传递数据 6'-->
      <router-link :to ="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
      <button @click="pushShow(message.id)">push查看</button>
      <button @click="replaceShow(message.id)">replace查看</button>
    </li>
    <hr>
    <button @click="$router.back()">返回</button>
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
    },
    methods:{
      /*编程式路由 44_尚硅谷_Vue_编程式路由导航*/
      pushShow(id){
        this.$router.push(`/home/message/detail/${id}`)
      },

      replaceShow(id){
        this.$router.replace(`/home/message/detail/${id}`)
      }
    }
  }

</script>
<style>

</style>