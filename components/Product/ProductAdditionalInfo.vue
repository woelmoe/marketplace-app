<template>
  <v-row dense class="mb-4">
    <v-col v-for="(item, key) in items" :key="key" :cols="item.cols || 6">
      <span class="text-body-2 text-grey">{{ item.label }}</span>
      <div class="font-weight-medium">{{ item.value }}</div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
interface AdditionalItem {
  label: string;
  value: string;
  cols?: number;
}

defineProps<{
  items: Record<string, AdditionalItem>;
}>();
</script>
