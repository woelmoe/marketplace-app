<template>
  <v-card variant="flat">
    <v-img
      height="285"
      cover
      class="rounded-lg"
      :lazy-src="product.imgs?.at(0)"
      :src="product.imgs?.at(0)"
    ></v-img>

    <v-card-title>
      <span>{{ product.price }} Р</span>
      <s class="text-title-small pl-2">{{ product.oldPrice }} Р</s>
    </v-card-title>
    <v-card-subtitle>{{ product.title }}</v-card-subtitle>

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
