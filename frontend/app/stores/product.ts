import { defineStore } from 'pinia'
import { LocalStorageKeys, type Product } from '~/assets/types/types'

export const useProductsStore = defineStore('products', () => {
  const CACHED_LIMIT = 18
  const products = ref<Product[]>([])
  const currentProduct = ref<Product>()
  const isLoading = ref(true)

  const cachedProducts = ref<Product[]>([])

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

  // todo: пока что метод собирает все продукты каскадно. в будущем необходимо сделать пагинацию
  async function getAllProducts() {
    products.value = cachedProducts.value

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

    cachedProducts.value = products.value.slice(0, CACHED_LIMIT)

    console.log(`Загружено ${products.value.length} товаров`)
    isLoading.value = false
  }

  return {
    isLoading,
    products,
    cachedProducts,
    currentProduct,
    setCurrentProduct,
    getAllProducts,
    getProductsByIds
  }
})
