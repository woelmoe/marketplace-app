<template>
  <v-alert class="mt-4" color="info" variant="tonal" density="compact">
    <div class="d-flex align-center">
      <v-icon icon="mdi-truck" class="mr-2" />
      <span>{{ deliveryDate }}, грузовая доставка склад продавца</span>
    </div>
    <div class="d-flex align-center mt-1">
      <v-icon icon="mdi-store" class="mr-2" size="small" />
      <span class="text-body-2">{{ seller }}. ✨ {{ ratingText }} ✨</span>
    </div>
  </v-alert>
</template>

<script setup lang="ts">
defineProps<{
  deliveryDate: string;
  seller: string;
  rating?: number;
}>();

const ratingText = computed(() => {
  const rating = props.rating || 0;
  if (rating === 0) return "Мало оценок";
  if (rating < 3) return "Средние оценки";
  return "Отличные оценки";
});
</script>
