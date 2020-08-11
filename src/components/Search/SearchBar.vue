<template>
  <div class="container formSearch">
    <form @submit.prevent>
      <input 
        class="searchProduct" 
        type="search" 
        v-model="searchProduct" 
        @keydown.enter.prevent="fetchProduct" 
        size="60" 
        autofocus 
        />
      <button @click="fetchProduct">Search</button>
      
    </form>

    <!-- PRODUCT LIST COMPONENT -->
    <ul v-if="isVisible">
      <li v-for="product in filteredProducts" :key="product.id">
        <strong>{{ product.brand }}</strong> - {{ product.name }}
      </li>
    </ul>
    <!---->

  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
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
        //this.$store.getters.allProducts;
        //console.log(a);
        return a;
      } catch (error) {
        return error.message;
        //console.log(error);
      }
    },
  },
  methods: {
    fetchProduct() {
      this.searchProduct;
      this.isVisible = true;
    },
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
