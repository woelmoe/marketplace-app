<template>
  <v-sheet class="pa-4 rounded mb-4" color="grey-lighten-4">
    <v-row dense>
      <v-col v-for="(item, key) in characteristics" :key="key" cols="6">
        <span class="text-body-2 text-grey">{{ item.label }}</span>
        <div class="font-weight-medium">{{ item.value }}</div>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup lang="ts">
interface Characteristic {
  label: string;
  value: string;
}

defineProps<{
  characteristics: Record<string, Characteristic>;
}>();
</script>
