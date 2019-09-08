<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add v-on:addComment="addComment1"/>
   <!--   //组件间通信,将comments中的数据传到List中-->
      <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>
<script>
  //1、引入组件
  import Add from './components/Add.vue'
  import List from './components/List.vue'
  //2、映射组件标签
  export default{
    data(){
      return{
        comments:[
          {
            name:'王丹',
            content:'Vue的创始人'
          },
          {
            name:'张三',
            content:'123'
          },
          {
            name:'李四',
            content:'456'
          }
        ]
      }
    },
    components:{
      Add,List
    },
    methods:{
      /*unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
       注意： 该方法将改变数组的数目。
       提示: 将新项添加到数组末尾，请使用 push() 方法。*/
      addComment1(comment){
        this.comments.unshift(comment);
      },
      deleteComment(index){
        this.comments.splice(index,1);
      }

    }
  }
</script>
<style>

</style>