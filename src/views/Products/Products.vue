<template>
  <div class="col-lg-12 col-md-12 col-sm-12 products">

    <div class="productsContent">

      <SearchBar />
      
    </div>

  </div>
</template>

<script>
import SearchBar from "../../components/Search/SearchBar.vue";

export default {
  components: {
    SearchBar,
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
  padding: 0 0 30% 0;
}

</style>
