<template>
  <div>
    <!--43_尚硅谷_Vue_向路由组件传递数据 12'-->
    <p>ID:{{$route.params.id}}</p>
    <ul>
      <li>id:{{messageDetail.id}}</li>
      <li>title:{{messageDetail.title}}</li>
      <li>content:{{messageDetail.content}}</li>
    </ul>

  </div>
</template>
<script>

  export default{
    data(){
      return{
        messageDetail:{}
      }
    },
    mounted(){
      setTimeout(() =>{
        const allMessageDetails = [
          {id:1,title:'消息1',content:'内容1'},
          {id:2,title:'消息2',content:'内容2'},
          {id:3,title:'消息3',content:'内容3'}
        ]
        this.allMessageDetails = allMessageDetails;
        const id = this.$route.params.id*1;
        this.messageDetail = allMessageDetails.find(detail => detail.id === id);
      },1000)
    },
    //<!--43_尚硅谷_Vue_向路由组件传递数据 24'-->
    watch:{
       $route:function(value){
         const id = value.params.id*1;
         this.messageDetail = this.allMessageDetails.find(detail => detail.id === id);
       }
    }
  }
</script>
<style>

</style>