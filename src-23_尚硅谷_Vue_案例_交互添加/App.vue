<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <!-- :addComment="addComment"传递给子组件Add-->
     <Add :addComment="addComment"/>,
      <List :comments="comments"/>
    </div>
  </div>
</template>
<script>
  import Add from './components/Add.vue'
  import List from './components/List.vue'
  export default{
    data(){
      return {
        comments: [//数据在哪个组件，更新数据的行为就应该定义在哪个组件
          {
            name: '张三',
            content:'zs'
          },
          {
            name: '李四',
            content:'ls'
          },
          {
            name: '王五',
            content:'ww'
          }
        ]
      }
    },
    methods:{
      //23_尚硅谷_Vue_案例_交互添加 7'32"
      addComment(comment){
        this.comments.unshift(comment)
      }

    },
    components:{
      Add,List
    }
  }

</script>
<style>

</style>