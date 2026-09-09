import { defineStore } from 'pinia'
import { LocalStorageKeys, type Product } from '~/assets/types/types'

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([])
  const currentProduct = ref<Product>()
  const isLoading = ref(false)

  function setCurrentProduct(value: Product) {
    currentProduct.value = value
    const lsValue = JSON.stringify(value)
    localStorage.setItem(LocalStorageKeys.currentProduct, lsValue)
  }

  async function getProductsByIds(ids?: number[]) {
    products.value = []

    ids?.forEach(async (id) => {
      let product
      try {
        product = await productApi.getById(id)
        products.value = [...products.value, product]
      } catch (error) {
        console.log(error)
      }
    })
  }

  async function getAllProducts() {
    products.value = []
    isLoading.value = true
    let currentLoading = 1
    const limit = 50

    let hasMore = true

    while (hasMore) {
      let product
      try {
        product = await productApi.getById(currentLoading)
        currentLoading++
        products.value = [...products.value, product]
        hasMore = products.value.length < limit
      } catch (error) {
        hasMore = false
        console.log(error)
      }
    }

    console.log(`Загружено ${products.value.length} товаров`)
    isLoading.value = false
  }

  return {
    isLoading,
    products,
    currentProduct,
    setCurrentProduct,
    getAllProducts,
    getProductsByIds
  }
})
