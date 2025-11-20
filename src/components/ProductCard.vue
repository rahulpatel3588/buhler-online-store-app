<template>
  <div class="product-wrapper">
    <router-link :to="`/products/${product.id}`" class="product-container">
      <div class="product-item-image">
        <img class="product-image" :src="product.imageUrl" />
      </div>
      <div class="product-item-details">
        <div class="product-name">{{ product.name }}</div>
        <div class="product-price-box">
          <div class="product-price">{{ product.price.toFixed(2) }}</div>
          <div @click.prevent="addToCart">
            <img src="/src/assets/add-to-cart.svg" alt="add to cart" width="25px" height="auto"></img>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { useCartStore } from "../stores/cart";
export default {
  props: ["product"],
  setup(props) {
    const cart = useCartStore();
    const addToCart = () => cart.add(props.product);
    return { addToCart };
  },
};
</script>
