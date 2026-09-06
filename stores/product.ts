import { defineStore } from 'pinia'
import type { Product } from '~/assets/types/types'

export const useProductsStore = defineStore('products', () => {
  const setCurrentProduct = (value: Product) => {
    currentProduct.value = value
  }
  const currentProduct = ref<Product>()

  return {
    currentProduct,
    setCurrentProduct
  }
})
