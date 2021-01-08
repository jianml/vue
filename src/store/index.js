import Vue from 'vue'
import Vuex from 'vuex'
import cart from '@/store/modules/cart/cart'
import products from '@/store/modules/product/products'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cart,
    products
  },
})

export default store