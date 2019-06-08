import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name:'0' ,
      component: Home,
      children:[
        {
          path:'phonelist',
          name:'phonelist',
          component:()=> import('./components/PhoneList')
        },
        {
          path:'Contact',
          name:'Contact',
          component:()=> import('./views/Contact')
        },
        {
          path:'Search',
          name:'1',
          component:()=> import('./views/Search')
        },
        {
          path:'Feed',
          name:'2',
          component:()=> import('./views/Feed')
        },
      ],
      redirect:{name:'phonelist'}
    },
   {
      path:'/',
      name:'hello',
      component:() => import("./views/Hello")
    }
  ]
})
