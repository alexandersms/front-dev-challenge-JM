<template>
  <div class="container formSearch">
    <form>
    
      <input class="searchProduct" type="search" v-model="searchProduct" size="60" autofocus />
      <button>Search</button>
      
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: "",
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
