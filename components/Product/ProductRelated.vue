<template>
  <v-row class="mt-8">
    <v-col cols="12">
      <div class="d-flex align-center justify-space-between mb-4">
        <h2 class="text-h5 font-weight-bold">{{ categoryTitle }}</h2>
        <v-btn variant="text" color="primary" @click="viewAll">
          Все товары категории
          <v-icon icon="mdi-arrow-right" end />
        </v-btn>
      </div>

      <!-- Слот для товаров -->
      <slot />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
defineProps<{
  categoryTitle: string;
}>();

const emit = defineEmits<{
  viewAll: [];
}>();

const viewAll = () => {
  emit("viewAll");
};
</script>
