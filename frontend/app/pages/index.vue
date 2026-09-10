<template>
  <HeaderSearch v-if="mobile" />
  <ProductGrid :products />
  <v-empty-state
    v-if="!isLoading && (!products || products.length === 0)"
    icon="mdi-file-search-outline"
    title="Товары не найдены"
    text="Попробуйте изменить параметры поиска или фильтра"
  />
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
import HeaderSearch from '~/components/AppHeader/HeaderSearch.vue'

const productStore = useProductsStore()
const { products, isLoading } = storeToRefs(productStore)

const { mobile } = useDisplay()

function waitTimeoutLoading() {
  setTimeout(() => {
    if (!products.value.length) isLoading.value = false
  }, 1500)
}

onMounted(() => {
  productStore.getAllProducts()
  waitTimeoutLoading()
})

onUnmounted(() => {
  productStore.cancelLoading()
})
</script>

<style scoped></style>
