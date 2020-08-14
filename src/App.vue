<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
          <!-- POSTERTITLE COMPONENT -->
          <PosterTitle />
          
          <!-- POSTERIMAGE COMPONENT -->
          <PosterImage />
          
          <!--
            PRODUCT COMPONENT
            This component displays two components, the SearchBar and the list of products
          -->
          <Products/>
        
      </div>
    </div>
  </div>
</template>

<script>
import PosterTitle from "./views/Poster/PosterTitle.vue";
import PosterImage from "./views/Poster/PosterImage.vue";
import Products from "./views/Products/Products.vue";

export default {
  name: "app",
  components: {
    PosterTitle,
    PosterImage,
    Products,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: auto;
  color: #2c3e50;
}

</style>
