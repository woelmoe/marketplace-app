<template>
  <v-card>
    <v-img
      height="285"
      cover
      :lazy-src="product.imgs?.at(0)"
      :src="product.imgs?.at(0)"
    ></v-img>

    <v-card-title> Top western road trips </v-card-title>

    <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

    <v-btn class="mt-1" width="100%" color="primary" variant="flat">
      <v-icon icon="mdi-cart" class="mr-2"></v-icon>
      <span class="text-white">{{ product.deliveryDate }}</span>
    </v-btn>
  </v-card>
</template>

<script setup lang="ts">
import type { Product } from "~/assets/types/types";

const props = defineProps<{
  product: Product;
}>();

defineEmits<{
  (e: "toggle-favorite", id: number): void;
  (e: "add-to-cart", product: Product): void;
}>();
</script>

<style scoped></style>
