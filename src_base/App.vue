<template>
  <div id="app">
    <img class="logol" src="./assets/logo.png">
    123
    <HelloWorld/>
  </div>
</template>
<script>
  //1、引入组件
import HelloWorld from './components/HelloWorld'
  //2、映射组件标签
  export default{
    //el:'App',
    components:{
      HelloWorld
    }
  }
</script>
<style>
.logol{
  width: 200px;
  height: 180px;
}
</style>
