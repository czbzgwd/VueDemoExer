<template>
  <div>
    <ul>
      <li v-for="(news,index) in newsArr" :key="index">
      <a href="??">{{news}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        newsArr:['新闻','体育','军事']
      }
    }
  }
</script>
<style>

</style>