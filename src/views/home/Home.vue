<template>
  <div>
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <ProductList/>
    <hr>
    <ShoppingCart/>
  </div>
</template>

<script>
import ProductList from '@/views/product/ProductList'
import ShoppingCart from '@/views/cart/ShoppingCart'

export default {
  components: {
    ProductList,
    ShoppingCart
  }
}
</script>
