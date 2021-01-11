import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/home/Home";
import Category from "@/views/category/Category";
import Cart from "@/views/cart/Cart";
import Profile from "@/views/profile/Profile";


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


const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
