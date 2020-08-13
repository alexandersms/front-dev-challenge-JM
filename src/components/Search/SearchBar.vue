<template>
  <div class="container formSearch">
    <form @submit.prevent>
      <input 
        class="searchProduct" 
        type="search" 
        v-model="searchProduct" 
        @keydown.enter.prevent="fetchProduct" 
        @keydown.delete.prevent="resetProduct"
        size="60" 
        autofocus 
        />
      <button @click="fetchProduct">Search</button>
      
    </form>

    <!-- PRODUCT LIST COMPONENT -->
    <div v-if="isVisible" class="mt-4">

        <ProductList v-for="product in filteredProducts" :key="product.id" :product="product"/>
        
    </div>
    
    <div v-if="isNoSearch" class="alert alert-danger mt-1" role="alert">Enter the name of a product please</div>
    <div v-if="isNoMatch" class="alert alert-danger mt-1" role="alert">Product not found</div>
    <!---->

  </div>
</template>

<script>
import ProductList from "../Products/ProductList.vue";

export default {
  name: "SearchBar",
  components: {
    ProductList,
  },
  data() {
    return {
      isVisible: false,
      isNoMatch: false,
      isNoSearch: false,
    };
  },
  computed: {
    searchProduct: {
      get() {
        return this.$store.state.searchProduct;
      },
      set(value) {
        this.$store.dispatch("filteredProducts", value);
      },
    },
    filteredProducts() {
      try {
        let a = this.$store.getters.getFilteredProducts;
        return a;
      } catch (error) {
        return error.message;
      }
    },
  },
  methods: {
    fetchProduct() {
      if (!this.searchProduct) {
        this.isNoSearch = true;
      } else if (this.searchProduct === "") {
        this.isNoMatch = true;
      } else {
        this.searchProduct;
        this.isVisible = true;
        this.isNoSearch = false;
        this.isNoMatch = false;
      }
    },
    resetProduct(){
      this.searchProduct = ""
    }
  },
};
</script>

<style scoped>
.formSearch {
  padding-top: 20px;
  display: grid;
  justify-content: center;
}

input {
  padding: 7px;
  margin-right: 15px;
  border: none;
  border-radius: 5px;
}

button {
  padding: 7px 15px;
  background-color: #55d7ff;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #42a9c9;
}

@media (max-width: 768px) {
  input {
    width: 80%;
  }
}

@media (max-width: 416px) {
  input {
    width: 60%;
  }
}
</style>
