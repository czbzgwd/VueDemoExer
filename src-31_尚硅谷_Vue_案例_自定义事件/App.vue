<template>

  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!--<TodoHeader @addTodo="addTodo"/>--><!--给TodoHeader绑定事件监听addTodo-->
        <TodoHeader ref="header"/>
        <TodoList :todos="todos" />
        <TodoFooter :todos="todos" :selectAllTodos="selectAllTodos" :deleteCompleteTodos="deleteCompleteTodos"/>
      </div>
    </div>
  </div>
</template>
<script>
  import Pubsub from 'pubsub-js'
 import TodoHeader from  './components/TodoHeader.vue'
  import TodoList from  './components/TodoList.vue'
  import TodoFooter from  './components/TodoFooter.vue'
 export default{
   data(){
      return{
        /*todos:[
          {title:'学习Vue',complete:false},
          {title:'学习springboot',complete:true},
          {title:'打篮球',complete:false}
        ]*/
        //从localStorage读取数据todos
        todos:JSON.parse(window.localStorage.getItem('todos_key') || '[]')
      }
   },
   /*31_尚硅谷_Vue_案例_自定义事件 10'26" */
   mounted(){//执行异步代码
     //给<TodoHeader/>绑定addTodo事件监听
     // this.$on('addTodo',this.addTodo)给app绑定事件监听
    this.$refs.header.$on('addTodo',this.addTodo)
     //订阅消息
     Pubsub.subscribe('deleteTodo',(msg,index) =>{
       this.deleteTodo(index)
     })

   },
   methods:{
     addTodo(todo){
      this.todos.unshift(todo)
     },
     //每个爱好后面的删除
     deleteTodo(index){
      this.todos.splice(index,1)
     },
     //全选/全不选
     selectAllTodos(check){
      this.todos.forEach(todo => todo.complete = check)
     },
     //通过多选框，删除选中的按钮，所以不需要形参
     deleteCompleteTodos(){
       //29_尚硅谷_Vue_案例_交互footer组件功能 8'
       //=>箭头函数
       this.todos = this.todos.filter(todo => !todo.complete)
     }
   },
   //存数据todos-深度监视
   watch:{
     todos: {
       deep: true,
       handler: function (value) {
         //将todos最新的值json数据，保存到localStorage中
         window.localStorage.setItem('todos_key', JSON.stringify(value))
       }
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