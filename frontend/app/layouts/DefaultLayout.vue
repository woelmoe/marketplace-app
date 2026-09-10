<template>
  <NavigationDrawer v-model="drawer" />
  <AppHeader @toggle-drawer="drawer = !drawer" />
  <slot />
  <AppFooter />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)
</script>
