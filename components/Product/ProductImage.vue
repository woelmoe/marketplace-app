<template>
  <v-card class="product-image-card">
    <v-img :src="product?.imgs?.at(0)" :alt="product?.title" class="rounded-xl">
      <template #placeholder>
        <v-sheet
          class="d-flex align-center justify-center fill-height"
          color="background"
        >
        </v-sheet>
      </template>
    </v-img>
  </v-card>
</template>
<script setup lang="ts">
import type { Product } from '~/assets/types/types'

interface IProps {
  product: Product | undefined
  selectedIndex: number
}
const props = defineProps<IProps>()
</script>

<style scoped></style>
