<template>
  <v-main>
    <ProductGrid :products />
  </v-main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Product } from '~/assets/types/types'

const products = ref<Product[]>([])
const isLoading = ref(false)

async function getAllProducts() {
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

  console.log(`Загружено ${products.value.length} товаров`)
  isLoading.value = false
}

onMounted(() => {
  getAllProducts()
})
</script>

<style scoped></style>
