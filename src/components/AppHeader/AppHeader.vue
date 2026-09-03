<template>
  <v-app-bar color="primary" dark dense>
    <v-app-bar-nav-icon @click="$emit('toggle-drawer')" />
    <v-toolbar-title class="text-h6 font-weight-medium"> UX-makmet </v-toolbar-title>
    <v-spacer />
    <v-chip small outlined class="mr-2">МХ Навіця організації Ольга</v-chip>
  </v-app-bar>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'toggle-drawer'): void
}>()
</script>
