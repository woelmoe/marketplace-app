<template>
  <v-card class="product-image-card">
    <v-img :src="currentImage" :alt="product?.title" class="rounded-xl">
      <template #placeholder>
        <v-sheet
          class="d-flex align-center justify-center fill-height"
          color="background"
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
import { computed } from 'vue'
import type { Product } from '~/assets/types/types'

interface IProps {
  product: Product | undefined
  selectedIndex: number
}

const props = defineProps<IProps>()

const currentImage = computed(() => {
  if (!props.product?.imgs?.length) {
    return undefined
  }

  return props.product.imgs[props.selectedIndex] ?? props.product.imgs[0]
})
</script>

<style scoped></style>
