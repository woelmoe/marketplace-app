<template>
  <v-btn to="/cart" class="mr-2 text-white">
    <v-badge inline :content="cartCount" height="16" color="warning">
      <v-icon color="header-icons" icon="mdi-cart" size="x-large"></v-icon>
    </v-badge>
  </v-btn>
</template>

<script setup lang="ts">
import { ref } from "vue";

const cartCount = ref("99+");
</script>
