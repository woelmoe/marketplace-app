<template>
  <SearchInput v-if="mobile" v-model="searchQuery" class="header-search" />

  <div class="grid">
    <ProductGrid :products />

    <v-empty-state
      v-if="!isLoading && products.length === 0"
      icon="mdi-file-search-outline"
      title="Товары не найдены"
      text="Попробуйте изменить параметры поиска или фильтра"
    />
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
import { useProductSearch } from '~/components/SearchInput/useProductSearch'

const productStore = useProductsStore()
const { products, isLoading } = storeToRefs(productStore)

const { mobile } = useDisplay()

const { searchQuery } = useProductSearch()
</script>

<style scoped lang="scss">
$offset-top: 0px;

.header-search {
  position: fixed;
  left: 0;
  right: 0;
  margin: $offset-top auto;
  width: 100%;
  z-index: 1;

  backdrop-filter: blur(15px);
  background: rgb(var(--v-theme-background) / 0.6);
}

.grid {
  margin-top: 40px;
}
</style>
