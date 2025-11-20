<template>
  <header>
    <router-link to="/products">
      <img src="/src/assets/buhler-logo.svg" alt="logo" width="200px" height="50px"></img>
    </router-link>
    <div>{{ dateTime }}</div>
    <router-link to="/checkout" class="header-cart">
      <img src="/src/assets/add-to-cart.svg" alt="add to cart" width="25px" height="auto"></img>
     Cart ({{ cartCount }})</router-link>
  </header>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useCartStore } from "../stores/cart";

export default {
  setup() {
    const now = ref(new Date());
    onMounted(() => setInterval(() => (now.value = new Date()), 1000));
    const dateTime = computed(() => now.value.toLocaleString());
    const cart = useCartStore()
    const cartCount = computed(() => cart.count)

    return { dateTime, cartCount }
  },
};
</script>


