<template>
  <div>
    <!-- Распродажа -->
    <v-chip v-if="sale" color="error" size="small" class="mb-2" label>
      РАСПРОДАЖА
    </v-chip>

    <!-- Название -->
    <h1 class="text-h4 font-weight-bold mb-2">
      {{ name }}
    </h1>

    <!-- Рейтинг - исправлено -->
    <div class="d-flex align-center mb-4">
      <v-rating
        :model-value="rating"
        readonly
        dense
        size="20"
        color="warning"
      />
      <span class="text-body-2 text-grey ml-2">
        {{ rating > 0 ? `${rating} оценок` : "Нет оценок" }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  rating: number;
  sale?: boolean;
}>();
</script>
