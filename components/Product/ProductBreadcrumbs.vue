<template>
  <v-breadcrumbs :items="items" class="px-0">
    <template #divider>
      <v-icon icon="mdi-chevron-right" size="small" />
    </template>
  </v-breadcrumbs>
</template>

<script setup lang="ts">
defineProps<{
  items: Array<{ title: string; to: string }>;
}>();
</script>
