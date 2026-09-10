<template>
  <SearchInput v-if="mobile" v-model="searchQuery" class="header-search" />

  <div class="grid">
    <ProductGrid :products />

    <v-progress-circular
      v-if="isLoading"
      indeterminate
      color="primary"
      size="64"
      class="loader"
    />

    <v-empty-state
      v-else-if="!products.length"
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

.loader {
  display: block;
  margin: 80px auto;
}
</style>
