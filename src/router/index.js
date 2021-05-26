import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultPage from '../views/DefaultPage.vue'
import indexPage from '@/Page/index.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'DefaultPage',
    component: DefaultPage,
    redirect:'/index',
    children:[{
      path:'/index',
      name:'indexPage',
      component:indexPage,
    },
    { 
      path:'/city',
      name:'city',
      component:()=>import('@/components/changeCity/city.vue')
    
  }
 ]
  },
  {
    path: '/blank',
    name: 'BlankPage',
    component: () => import( '../views/BlankPage.vue')
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
