<template>
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>
<script>
  import PubSub from 'pubsub-js'
  export default{
   // props:['todo']
    props:{
      todo:Object,
      index:Number,
    },
    data(){
      return{
        bgColor:'red',//指定删除按钮的背景颜色-默认的背景颜色
        isShow:false //删除按钮是否显示
      }
    },
    methods:{
      handleEnter(isEnter){
        if(isEnter){
          this.bgColor='#cccccc'
          this.isShow=true
        }else{
          this.bgColor='white'
          this.isShow=false
        }
      },
      deleteItem(){
      const {todo,index,deleteTodo} = this
        if(window.confirm('确认删除'+todo.title+'吗？')){
              // deleteTodo(index)
          /*32_尚硅谷_Vue_案例_消息订阅与发布5'45'*/
          PubSub.publish('deleteTodo',index)
        }
      }
    }
  }
</script>
<style>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

</style>