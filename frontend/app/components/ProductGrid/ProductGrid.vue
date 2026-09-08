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
        <NuxtLink
          :to="`/products/${product.id}`"
          class="product-link"
          @click="setCurrentProduct(product)"
        >
          <ProductCard :product="product" />
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProductCard from './ProductCard.vue'
import type { Product } from '~/assets/types/types.ts'
import { useProductsStore } from '~/stores/product.ts'

interface IProps {
  products: Product[]
}

const props = defineProps<IProps>()

const { setCurrentProduct } = useProductsStore()
</script>
