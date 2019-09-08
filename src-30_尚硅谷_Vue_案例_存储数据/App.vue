<template>

  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader :addTodo="addTodo"/>
        <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
        <TodoFooter :todos="todos" :selectAllTodos="selectAllTodos" :deleteCompleteTodos="deleteCompleteTodos"/>
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
        /*todos:[
          {title:'学习Vue',complete:false},
          {title:'学习springboot',complete:true},
          {title:'打篮球',complete:false}
        ]*/
        //从localStorage读取数据todos
        /*src-30_尚硅谷_Vue_案例_存储数据*//*从浏览器中获取数据*/
        todos:JSON.parse(window.localStorage.getItem('todos_key') || '[]')
      }
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
       //watch虽可以监听，但只是浅监听，只监听数据第一层或者第二层。比如对于整个对象的监听，需要用到深度监听
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