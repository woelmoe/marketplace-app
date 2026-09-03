<template>
  <!-- Main Content -->
  <v-main>
    <ProductGrid />
  </v-main>
</template>

<script setup lang="ts">
import ProductGrid from '@/components/ProductGrid/ProductGrid.vue'
import { ref } from 'vue'

const supportItems = ref(['FAQ', 'Контакты', 'Помощь'])

const tags = ref(['Новинка', 'Популярное', 'Акция'])

// Определение имени компонента (опционально)
defineOptions({
  name: 'MainPage',
})
</script>

<style scoped></style>
