<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" v-model="name" placeholder="用户名">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" v-model="content" placeholder="评论内容"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="add">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
  export default{
   /* props:{
      addComment:{
       type: Function,
        required:true
      },
    },*/
    data(){
      return{
        name:'',
        content:''
      }
    },
    methods:{
      add(){
       // alert(1)
        const name = this.name;
        const content = this.content;
        const comment = {name,content}
        this.$emit('addComment',comment)//如果使用
       // this.addComment(comment);
      }
    }

  }
</script>
<style>

</style>