import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../../../tabbar/src/views/home/Home";
import Category from "../../../tabbar/src/views/category/Category";
import Cart from "../../../tabbar/src/views/cart/Cart";
import Profile from "../../../tabbar/src/views/profile/Profile";

Vue.use(VueRouter)

const routes = [
  {
    path:"",
    redirect:"/home"
  },
  {
    path: '/home',
    name: 'home',
    component:Home
  },
  {
    path: '/category',
    name: 'category',
    component:Category
  },
  {
    path: '/cart',
    name: 'cart',
    component:Cart
  },
  {
    path: '/profile',
    name: 'profile',
    component:Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
