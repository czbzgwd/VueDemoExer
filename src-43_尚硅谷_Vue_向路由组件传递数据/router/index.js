/**
 * Created by Administrator on 2019/7/13.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Message from '../views/Message.vue'
import MessageDetail from '../views/MessageDetail.vue'
Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    {
      path:"/about",
      component:About
    },
    {
      path:"/home",
      component:Home,
      children:[
        {
          path:"/home/news",//path最左侧的/永远代表根路径
          component:News
        },
        {
          path:'message',//简化写法
          component:Message,
          children:[
            {
            path:"/home/message/detail/:id",
            component:MessageDetail
            }
          ]
        },
        {
          path:'/',
          redirect:'message'
        }
      ]
    },
    {
      path:'/',
      redirect:"/about"
    }
  ]
})
