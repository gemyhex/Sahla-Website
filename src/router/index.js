import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    // beforeEnter: (to, from, next) => {
    //   const token = localStorage.getItem('access_token') || ''
    //   if (token) {
    //     next()
    //   } else {
    //     next({
    //       name: 'Auth',
    //     })
    //   }
    // },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
    // beforeEnter: (to, from, next) => {
    //   const token = localStorage.getItem('access_token') || ''
    //   if (token) {
    //     next()
    //   } else {
    //     next({
    //       name: 'Auth',
    //     })
    //   }
    // },
  },
  {
    path: '/offers',
    name: 'Offers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Offers.vue'),
    // beforeEnter: (to, from, next) => {
    //   const token = localStorage.getItem('access_token') || ''
    //   if (token) {
    //     next()
    //   } else {
    //     next({
    //       name: 'Auth',
    //     })
    //   }
    // },
  },
  {
    path: '/network',
    name: 'Network',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Network.vue'),
    // beforeEnter: (to, from, next) => {
    //   const token = localStorage.getItem('access_token') || ''
    //   if (token) {
    //     next()
    //   } else {
    //     next({
    //       name: 'Auth',
    //     })
    //   }
    // },
  },
  {
    path: '/contactus',
    name: 'Contact Us',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Contact.vue'),
    // beforeEnter: (to, from, next) => {
    //   const token = localStorage.getItem('access_token') || ''
    //   if (token) {
    //     next()
    //   } else {
    //     next({
    //       name: 'Auth',
    //     })
    //   }
    // },
  },
  {
    path: '/merchant',
    name: 'Merchant',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Merchant.vue'),
    // beforeEnter: (to, from, next) => {
    //   const token = localStorage.getItem('access_token') || ''
    //   if (token) {
    //     next()
    //   } else {
    //     next({
    //       name: 'Auth',
    //     })
    //   }
    // },
  },
  {
    path: '/payment-link/:code',
    name: 'PaymentLink',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/PaymentLink.vue'),
    // beforeEnter: (to, from, next) => {
    //   const token = localStorage.getItem('access_token') || ''
    //   if (token) {
    //     next()
    //   } else {
    //     next({
    //       name: 'Auth',
    //     })
    //   }
    // },
  },
  {
    path: '/checkout',
    name: 'Checkout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Checkout.vue'),
    // beforeEnter: (to, from, next) => {
    //   const token = localStorage.getItem('access_token') || ''
    //   if (token) {
    //     next()
    //   } else {
    //     next({
    //       name: 'Auth',
    //     })
    //   }
    // },
  },
  {
    path: '/auth',
    name: 'Auth',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Auth.vue'),
    // beforeEnter: (to, from, next) => {
    //   const token = localStorage.getItem('access_token') || ''
    //   if (!token) {
    //     next()
    //   } else {
    //     next({
    //       name: 'Home',
    //     })
    //   }
    // },
    meta: {
      hideNavbar: true,
    }
  },
  {
    path: '*',
    redirect: '/',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router