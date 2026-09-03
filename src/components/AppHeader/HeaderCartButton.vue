<template>
  <v-btn small to="/cart" class="mr-2 text-white">
    <v-badge inline location="top right" color="white" text-color="purple" :content="cartCount">
      <v-icon icon="mdi-cart"></v-icon>
    </v-badge>
  </v-btn>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Пример данных для корзины (в реальном проекте берется из Pinia/Vuex)
const cartCount = ref(3)
</script>
