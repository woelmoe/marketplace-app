<template>
  <v-text-field
    v-model="searchQuery"
    hide-details
    placeholder="Поиск..."
    :class="{ 'field-hover': isHover }"
    rounded="lg"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <template #prepend-inner>
      <v-icon class="search-icon">mdi-magnify</v-icon>
    </template>
  </v-text-field>
</template>

<script setup lang="ts">
import { debounce } from '~/utils/debounce'
const router = useRouter()

const productStore = useProductsStore()

const isHover = ref(false)

const searchQuery = ref('')

const performSearch = (query: string) => {
  const trimmedQuery = query.trim()

  productApi
    .search(trimmedQuery)
    .then((response) => {
      console.log(response.data)
      const ids: number[] = response.data
        .map((item) => item.id)
        .filter((id): id is number => id !== undefined && id !== null)

      productStore.getProductsByIds(ids)
    })
    .catch((error) => {
      console.error('Ошибка поиска:', error)
    })
}

const debouncedSearch = debounce((query: string) => {
  performSearch(query)
}, 500)

watch(searchQuery, async (newQuery, oldQuery) => {
  if (oldQuery && !newQuery) await productStore.getAllProducts()
  else {
    router.push('/')
    debouncedSearch(newQuery)
  }
})

onUnmounted(() => {
  debouncedSearch.cancel()
})
</script>

<style scoped>
.search-icon {
  color: rgb(var(--v-theme-header-icons)) !important;
  transition: all 0.2s ease;
}

.field-hover :deep(.search-icon) {
  color: rgb(var(--v-theme-header-icons-active)) !important;
}
</style>
