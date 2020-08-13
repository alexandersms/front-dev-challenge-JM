<template>
  <div class="productList">
      <strong>. {{ product.brand }}</strong> - {{ product.name }}       
  </div>
</template>

<script>

export default {
  name: "ProductList",
  props: ['product']
};
</script>
