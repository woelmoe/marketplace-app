<template>
  <v-card class="mx-auto">
    <v-img
      height="285"
      cover
      :lazy-src="product.imgs?.at(0)"
      :src="product.imgs?.at(0)"
    ></v-img>

    <v-card-title> Top western road trips </v-card-title>

    <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange-lighten-2" text="Explore"></v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he
          could deliver. You won't have time for sleeping, soldier, not with all
          the bed making you'll be doing. Then we'll go with that data file!
          Hey, you add a one and two zeros to that or we walk! You're going to
          do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup lang="ts">
import type { Product } from "./types";

// Определяем пропсы
const props = defineProps<{
  product: Product;
}>();

// Определяем эмиты (события), чтобы родитель мог обрабатывать нажатия
defineEmits<{
  (e: "toggle-favorite", id: number): void;
  (e: "add-to-cart", product: Product): void;
}>();

import { ref } from "vue";

const show = ref(false);
</script>

<style scoped>
.custom-badge :deep(.v-badge__badge) {
  font-size: 10px;
  font-weight: bold;
  padding: 4px 6px;
  border-radius: 6px;
  box-shadow: none;
  text-transform: uppercase;
}
.product-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.5em;
}
</style>
