<template>
  <div class="formSearch">
    <form>
      <input v-model="products" type="text" size="60" autofocus />
      <button>Search</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: ''
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
  padding: 5px 0;
  margin-right: 15px;
  border: none;
  border-radius: 5px;
  
}

button {
  padding: 5px 15px;
  background-color: #55d7ff;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #42a9c9;
}
</style>
