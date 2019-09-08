<template>

  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader :addTodo="addTodo"/>
        <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
        <TodoFooter/>
      </div>
    </div>
  </div>
</template>
<script>
 import TodoHeader from  './components/TodoHeader.vue'
  import TodoList from  './components/TodoList.vue'
  import TodoFooter from  './components/TodoFooter.vue'
 export default{
   data(){
      return{
        todos:[
          {title:'学习Vue',complete:false},
          {title:'学习springboot',complete:true},
          {title:'打篮球',complete:false}
        ]
      }
   },
   methods:{
     addTodo(todo){
      this.todos.unshift(todo)
     },
     deleteTodo(index){
      this.todos.splice(index,1)
     }
   },
   components:{
     TodoHeader,TodoList,TodoFooter
   }
 }
 /*export default{
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
      //添加评论
      //23_尚硅谷_Vue_案例_交互添加 7'32"
      addComment(comment){
        //unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
        this.comments.unshift(comment)
      },

      //删除指定下标的评论
      deleteComment(index){
        this.comments.splice(index,1)
      }
    },
    components:{
      Add,List
    }
  }*/

</script>
<style>

  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }







</style>