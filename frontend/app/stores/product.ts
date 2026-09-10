import { defineStore } from 'pinia'
import { LocalStorageKeys, type Product } from '~/assets/types/types'

export const useProductsStore = defineStore('products', () => {
  const CACHED_LIMIT = 18
  const products = ref<Product[]>([])
  const currentProduct = ref<Product>()
  const isLoading = ref(true)

  const cachedProducts = ref<Product[]>([])

  const abortController = ref<AbortController | null>(null)

  function cancelLoading() {
    abortController.value?.abort()
    abortController.value = null
    isLoading.value = false
  }

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
    cancelLoading() // отменяем прошлую загрузку, если была
    abortController.value = new AbortController()
    const signal = abortController.value.signal

    products.value = cachedProducts.value
    isLoading.value = true

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
        // AbortError — это не ошибка, а наша отмена, не логируем
        if (signal.aborted) return
        hasMore = false
        console.error(error)
      }
    }

    if (signal.aborted) return

    isLoading.value = false
  }

  return {
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
