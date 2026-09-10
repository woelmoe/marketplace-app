import { defineStore } from 'pinia'
import { LocalStorageKeys, type Product } from '~/assets/types/types'

export const useProductsStore = defineStore('products', () => {
  let isFirstFetch = true

  const searchQuery = ref('')
  const CACHED_LIMIT = 18
  const products = ref<Product[]>([])
  const currentProduct = ref<Product>()
  const isLoading = ref(true)

  const cachedProducts = ref<Product[]>([])

  const abortController = ref<AbortController | null>(null)

  function cancelLoading() {
    abortController.value?.abort()
    abortController.value = null
  }

  function setCurrentProduct(value: Product) {
    currentProduct.value = value
    const lsValue = JSON.stringify(value)
    localStorage.setItem(LocalStorageKeys.currentProduct, lsValue)
  }
  async function getProductsByIds(ids?: number[]) {
    cancelLoading()

    if (!ids?.length) {
      products.value = []
      isLoading.value = false
      return
    }

    abortController.value = new AbortController()
    const signal = abortController.value.signal

    isLoading.value = true
    products.value = []

    try {
      const results = await Promise.all(
        ids.map((id) =>
          productApi.getById(id, signal).catch((error) => {
            if (!signal.aborted) console.error(error)
            return null
          })
        )
      )

      if (signal.aborted) return

      products.value = results.filter((p): p is Product => p !== null)
    } finally {
      if (!signal.aborted) {
        isLoading.value = false
      }
    }
  }

  // todo: пока что метод собирает все продукты каскадно. в будущем необходимо сделать пагинацию
  async function getAllProducts() {
    isLoading.value = true
    cancelLoading()

    abortController.value = new AbortController()
    const signal = abortController.value.signal

    // products.value = cachedProducts.value

    let currentId = 1
    const limit = 50
    let hasMore = true

    while (hasMore && !signal.aborted) {
      try {
        const product = await productApi.getById(currentId, signal)
        currentId++
        products.value = [...products.value, product]
        hasMore = products.value.length < limit
        if (products.value.length < CACHED_LIMIT) {
          cachedProducts.value = products.value.slice(
            0,
            products.value.length - 1
          )
        }
      } catch (error) {
        if (signal.aborted) return
        hasMore = false
        console.error(error)
      }
    }

    if (signal.aborted) return

    isLoading.value = false
  }

  return {
    isFirstFetch,
    searchQuery,
    isLoading,
    products,
    cachedProducts,
    currentProduct,
    setCurrentProduct,
    getAllProducts,
    getProductsByIds,
    cancelLoading
  }
})
