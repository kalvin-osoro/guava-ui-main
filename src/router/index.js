import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategory from '../views/category/AddCategory.vue'
import CategoryView from '../views/category/CategoryView.vue'
import AddProduct from '../views/product/AddProduct.vue'
import ProductView from '../views/product/ProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category',
    name: 'CategoryView',
    component: CategoryView
  },
  //product
  {
    path: '/admin/product/add',
    name: 'AddProduct',
    component: AddProduct
  },

  {
    path: '/admin/product',
    name: 'ProductView',
    component: ProductView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
