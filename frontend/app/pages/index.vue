<template>
  <v-main>
    <HeaderSearch v-if="mobile" />
    <ProductGrid :products />
    <v-empty-state
      v-if="!products || products.length === 0"
      icon="mdi-file-search-outline"
      title="Товары не найдены"
      text="Попробуйте изменить параметры поиска или фильтра"
    />
  </v-main>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
import HeaderSearch from '~/components/AppHeader/HeaderSearch.vue'

const productStore = useProductsStore()
const { products } = storeToRefs(productStore)

const { mobile } = useDisplay()

onMounted(() => {
  productStore.getAllProducts()
})
</script>

<style scoped></style>
