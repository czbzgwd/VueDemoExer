<template>
  <div>
    <li class="list-group-item">
      <div class="handle">
        <a href="javascript:;" @click="delete1">删除</a>
      </div>
      <p class="user"><span >{{comment.name}}</span><span>说:</span></p>
      <p class="centence">{{comment.content}}</p>
    </li>
  </div>
</template>
<script>
  export default{
    props:{//指定属性名和属性值
      comment:Object,
      deleteComment:Function,
      index:Number
    },
    methods:{
      delete1(){
        alert(this.index)
        const iiii = this.index;
        this.deleteComment(iiii);
      }
    }

  }
</script>
<style>
  /*.reply {
    margin-top: 0px;
  }

  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }*/
</style>