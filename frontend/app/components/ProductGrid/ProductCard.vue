<template>
  <v-card variant="flat">
    <v-img height="285" cover class="rounded-lg" :src="product.imgs?.at(0)">
      <template #placeholder>
        <v-sheet
          class="d-flex align-center justify-center fill-height"
          color="background"
        >
        </v-sheet>
      </template>
    </v-img>

    <v-card-title>
      <span class="text-warning">{{ product.price }} ₽</span>
      <s class="text-title-small pl-2 text-primary">{{ product.old_price }} ₽</s>
    </v-card-title>
    <v-card-subtitle>{{ product.title }}</v-card-subtitle>

    <v-btn class="mt-1" width="100%" color="primary" variant="flat">
      <v-icon icon="mdi-cart" class="mr-2"></v-icon>
      <span class="text-white">{{ product.delivery_date }}</span>
    </v-btn>
  </v-card>
</template>

<script setup lang="ts">
import type { Product } from '~/assets/types/types'

const props = defineProps<{
  product: Product
}>()

defineEmits<{
  (e: 'toggle-favorite', id: number): void
  (e: 'add-to-cart', product: Product): void
}>()
</script>

<style scoped></style>
