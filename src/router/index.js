import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Nav from '@/components/Nav'
import Market from '@/components/Market'
import Cserver from '@/components/Cserver'
import Brand from '@/components/Brand'
import Product from '@/components/Product'
import Profit from '@/components/Profit'
import Advantage from '@/components/Advantage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Nav',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/Market',
      name: 'Market',
      component: Market
    },
    {
      path: '/Cserver',
      name: 'Cserver',
      component: Cserver
    },
    {
      path: '/Brand',
      name: 'Brand',
      component: Brand
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    },
    {
      path: '/Profit',
      name: 'Profit',
      component: Profit
    },
    {
      path: '/Advantage',
      name: 'Advantage',
      component: Advantage
    }
  ],
  
scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
}
})
