<template>
  <div>
    <h1>Checkout</h1>

    <div v-if="cart.items.length === 0">
      <p>Your cart is empty.</p>
      <router-link to="/products" class="cart-browse">Browse Products</router-link>
    </div>

    <div v-else>
      <table class="checkout-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>ID</th>
            <th>Price (₹)</th>
            <th>Qty</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart.items" :key="item.product.id">
            <td style="display:flex; gap:10px; align-items:center">
              <img :src="item.product.imageUrl" alt=""
                style="width:72px; height:72px; object-fit:cover; border-radius:5px" />
              <div>
                <div style="font-weight:600">{{ item.product.name }}</div>
                <div class="small">{{ getSectionTitle(item.product.id) }}</div>
              </div>
            </td>
            <td>{{ item.product.id }}</td>
            <td>₹ {{ Number(item.product.price).toFixed(2) }}</td>
            <td>{{ item.qty }}</td>
            <td>
              <a @click="remove(item.product.id)" class="remove-cart">
                <img src="/src/assets/close_small.svg" alt="remove cart" width="30px" height="auto"></img>
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="total-row">Total: {{ cart.total.toFixed(2) }}</div>

      <button @click="handleClear" class="clear-cart">Clear Cart</button>

    </div>
  </div>
</template>

<script>
import { useCartStore } from "../stores/cart";
import data from "../data/products.json";


export default {
  setup() {
    const cart = useCartStore();

    function getSectionTitle(productId) {
      for (const section of data.sections) {
        if (section.products.some(p => p.id === productId)) {
          return section.title;
        }
      }
      return null;
    }

    function remove(id) {
      cart.remove(id);
    }
    function handleClear() {
      if (confirm('Clear cart?')) cart.clear();
    }

    return { cart, remove, handleClear, getSectionTitle };
  }
}
</script>
