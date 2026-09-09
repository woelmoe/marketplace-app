<template>
  <v-main>
    <HeaderSearch v-if="mobile" />
    <ProductGrid :products />
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
