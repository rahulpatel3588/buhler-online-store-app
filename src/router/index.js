import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../pages/ProductList.vue'
import ProductDetails from '../pages/ProductDetails.vue'
import Checkout from '../pages/Checkout.vue'

const routes = [
  { path: '/', redirect: '/products' },
  { path: '/products', component: ProductList },
  { path: '/products/:id', component: ProductDetails, props: true },
  { path: '/checkout', component: Checkout }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
