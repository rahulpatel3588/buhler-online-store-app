<template>
  <div class="products-list">
    <div v-for="section in data.sections" :key="section.id" class="product-category">
      <h2>{{ section.title }}</h2>
      <div class="products">
        <ProductCard v-for="product in section.products" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import data from "../data/products.json";
import ProductCard from "../components/ProductCard.vue";
export default {
  components: { ProductCard },
  data() {
    return { data };
  },
};
</script>
