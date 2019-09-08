<template>
  <div class="todo-header">
    <input type="text"  placeholder="请输入你的任务名称，按回车键确认"
            v-model="title" />
    <button @click="addItem">添加</button>
  </div>
</template>
<script>

  export default{
    /*var isTitle = (rule,value,callback) =>{
      if(!value){
        return  callback(new Error("不能为空"));
      }else{
         callback();
      }
  },*/
    props:{
      addTodo:Function
    },
    data(){
     /* const isTitle = (rule,value,callback) => {
        if(!value){
          return  callback(new Error("不能为空"))
        }else{
          callback()
        }
      }*/
      return{
        title:''
      }
      /*rules:{
        title:[
          {required:true,message:'任务不能为空',trigger:'change'},

        ]
      }*/
    },
   /* computed:{
      rulesList:function(){
        if(this.title.length == 2){
          return this.rules
        }

      }

    },*/

    methods:{

      addItem(){
        const title = this.title.trim()
        if(!title){
          alert("不能为空")
          return
        }
        const todo = {
          title,complete:false
        }
        this.addTodo(todo)
        this.title=''
      }
    }
  }
</script>
<style>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>