<template>
  <div class="products">
    <div class="productsContent">
      <SearchBar />
      <ProductList />
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/Search/SearchBar.vue";
import ProductList from "../components/Products/ProductList.vue";

export default {
  components: {
    SearchBar,
    ProductList,
  },

  mounted () {
    this.$store.dispatch('getProducts');
  },
};
</script>

<style scoped>
.products {
  background-color: #db0992;
  color: #fff;
  grid-column: 1/-1;

  justify-content: center;
}

.productsContent{
    /*background-color: red;*/
    margin: auto 450px;
}
</style>
