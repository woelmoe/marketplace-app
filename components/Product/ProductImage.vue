<template>
  <v-card class="product-image-card" elevation="0">
    <v-img :src="image" :alt="name" height="400" cover class="rounded" />
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  image: string;
  name: string;
}>();
</script>

<style scoped>
.product-image-card {
  border-radius: 12px;
  overflow: hidden;
}

@media (max-width: 600px) {
  .product-image-card {
    height: 300px;
  }
}
</style>
