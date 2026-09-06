<template>
  <v-card class="product-image-card" elevation="0">
    <v-img
      :src="product?.imgs?.at(0)"
      :lazy-src="product?.imgs?.at(0)"
      :alt="product?.title"
      height="400"
      cover
      class="rounded"
    >
      <template #placeholder>
        <v-sheet
          class="d-flex align-center justify-center fill-height"
          color="grey-lighten-4"
        >
          <v-progress-circular
            indeterminate
            color="primary"
            size="48"
          ></v-progress-circular>
        </v-sheet>
      </template>
    </v-img>
  </v-card>
</template>

<script setup lang="ts">
import type { Product } from '~/assets/types/types'

interface IProps {
  product: Product | undefined
}
const props = defineProps<IProps>()
</script>

<style scoped>
.product-image-card {
  border-radius: 12px;
  overflow: hidden;
}

@media (max-width: 600px) {
  .product-image-card {
    height: 300px;
  }
}
</style>
