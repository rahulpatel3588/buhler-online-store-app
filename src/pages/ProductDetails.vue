<template>
  <router-link to="/products" class="back-btn">← Back</router-link>
  <div v-if="product" class="product-details-container">
    <div class="product-details-image">
      <img :src="product.imageUrl" />
    </div>
    <div class="product-details-info">
      <h2>{{ product.name }}</h2>
      <h3>{{ sectionTitle }}</h3>
      <p>{{ product.price.toFixed(2) }}</p>
      <a @click="add" class="product-details-cart">
        <img src="/src/assets/add-to-cart.svg" alt="add to cart" width="25px" height="auto"></img>Add to Cart
      </a>
    </div>
  </div>
</template>

<script>
import data from "../data/products.json";
import { computed } from "vue";
import { useCartStore } from "../stores/cart";

export default {
  props: ["id"],
  setup(props) {
    const sectionTitle = computed(() => {
      for (const s of data.sections) {
        if (s.products.some((p) => p.id === props.id)) {
          return s.title;
        }
      }
      return null;
    });

    const product = computed(() => {
      for (const s of data.sections) {
        const f = s.products.find((p) => p.id === props.id);
        if (f) return f;
      }
      return null;
    });

    const cart = useCartStore();
    const add = () => cart.add(product.value);
    return { product, add, data, sectionTitle };
  },
};
</script>
