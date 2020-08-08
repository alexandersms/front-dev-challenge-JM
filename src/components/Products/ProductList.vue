<template>
  <div class="productList">
    <ul>
      <li v-for="product in filteredProducts" :key="product.id">
        <strong>{{ product.brand }}</strong> - {{ product.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    filteredProducts() {
      try {
        let a =
          this.$store.getters.getFilteredProducts ||
          this.$store.getters.allProducts;
        //console.log(a);
        return a;
      } catch (error) {
        return error.message
        //console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.productList {
  display: grid;
  justify-content: start;
  margin-top: 25px;
}
</style>
