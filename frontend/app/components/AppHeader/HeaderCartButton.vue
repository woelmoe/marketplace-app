<template>
  <v-btn to="/cart" class="mr-2 text-white">
    <v-badge inline :content="count" height="16" color="warning">
      <v-icon color="header-icons" icon="mdi-cart" size="x-large"></v-icon>
    </v-badge>
  </v-btn>
</template>

<script setup lang="ts">
const cartStore = useCartStore()
const { count } = storeToRefs(cartStore)
</script>
