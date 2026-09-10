import { debounce } from '~/utils/debounce'

export const useProductSearch = () => {
  const productStore = useProductsStore()
  const { searchQuery, products, isLoading } = storeToRefs(productStore)

  const isSearching = ref(false)

  const performSearch = async (query: string) => {
    const trimmedQuery = query.trim()

    if (!trimmedQuery) {
      await productStore.getAllProducts()
      return
    }

    isSearching.value = true

    try {
      const response = await productApi.search(trimmedQuery)

      const ids: number[] = response.data
        .map((item) => item.id)
        .filter((id): id is number => id !== undefined && id !== null)

      await productStore.getProductsByIds(ids)
    } catch (error) {
      console.error('Ошибка поиска:', error)
    } finally {
      isSearching.value = false
    }
  }

  const debouncedSearch = debounce((query: string) => {
    performSearch(query)
  }, 500)

  watch(searchQuery, (newQuery, oldQuery) => {
    if (oldQuery && !newQuery) {
      productStore.getAllProducts()
      return
    }

    if (newQuery) {
      debouncedSearch(newQuery)
    }
  })

  onMounted(() => {
    if (productStore.isFirstFetch) {
      productStore.getAllProducts()
      productStore.isFirstFetch = false
    }
  })

  onUnmounted(() => {
    debouncedSearch.cancel()
    productStore.cancelLoading()
  })

  return {
    searchQuery,
    isSearching,
    performSearch,
    cancelSearch: debouncedSearch.cancel
  }
}
