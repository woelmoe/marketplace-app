import { defineStore } from 'pinia'
import { LocalStorageKeys, type Product } from '~/assets/types/types'

export const useProductsStore = defineStore('products', () => {
  const setCurrentProduct = (value: Product) => {
    currentProduct.value = value
    const lsValue = JSON.stringify(value)
    localStorage.setItem(LocalStorageKeys.currentProduct, lsValue)
  }
  const currentProduct = ref<Product>()

  return {
    currentProduct,
    setCurrentProduct
  }
})
