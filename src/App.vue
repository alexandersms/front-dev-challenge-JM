<template>
  <div id="app">
    <div class="container">
      <PosterTitle />
      <PosterImage />
      <Products/>
    </div>
  </div>
</template>

<script>
import PosterTitle from "./components/Poster/PosterTitle.vue";
import PosterImage from "./components/Poster/PosterImage.vue";
import ProductList from "./components/Products/ProductList.vue";
import Products from './views/Products.vue';

export default {
  name: "app",
  components: {
    PosterTitle,
    PosterImage,
    ProductList,
    Products
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*background-color: aquamarine;*/
  height: 100vh;
  color: #2c3e50;
}

.container {
  display: grid;

  grid-template-rows: repeat(2, 50vh);
  grid-template-columns: repeat(2, 50%);
  
}

</style>
