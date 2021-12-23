import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import login from '@/components/pages/login'
import Products from '@/components/pages/Products'
import Coupons from '@/components/pages/Coupons'
import Orders from '@/components/pages/Orders'
import CustomerOrder from '@/components/pages/CustomerOrders'
import CustomerCheckout from '@/components/pages/CustomerCheckout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*' , 
      redirect: '/login',
    },

    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld , 
    //   meta: { requiresAuth: true },
    // },

    {
      path: '/login' , 
      name: 'login' ,
      component: login,
    },

    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard , 

      children: [
        {
          path: 'products' , 
          name: 'Products' ,
          component: Products,
          meta: { requiresAuth: true },
        },
        {
          path: 'orders' , 
          name: 'Orders' ,
          component: Orders,
          meta: { requiresAuth: true },
        },
        {
          path: 'coupons' , 
          name: 'Coupons' ,
          component: Coupons,
          meta: { requiresAuth: true },
        },
      ],
    },

    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard , 

      children: [
        {
          path: 'customer_order' , 
          name: 'CustomerOrder' ,
          component: CustomerOrder,
        },

        {
          path: 'customer_checkout/:orderId' , 
          name: 'CustomerCheckout' ,
          component: CustomerCheckout,
        },
      ],
    },

  ]
})
