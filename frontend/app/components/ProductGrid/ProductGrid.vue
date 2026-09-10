<template>
  <v-container class="pa-4">
    <v-row dense>
      <v-col
        v-for="product in products"
        :key="product.id"
        cols="6"
        sm="4"
        md="3"
        lg="2"
        xl="2"
      >
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import type { Product } from '~/assets/types/types.ts'

interface IProps {
  products: Product[]
}

const props = defineProps<IProps>()
</script>
