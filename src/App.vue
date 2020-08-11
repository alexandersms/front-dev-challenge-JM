<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">

          <PosterTitle />
      
          <PosterImage />
        
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
  background-color: red;
  height: auto;
  color: #2c3e50;
}
/*
.containers {
  display: grid;

  grid-template-rows: repeat(2, 50vh);
  grid-template-columns: repeat(2, 50%);
}
*/
</style>
