<template>
  <AppHeader @toggle-drawer="drawer = !drawer" />

  <!-- <NavigationDrawer v-model="drawer" /> -->

  <slot />

  <v-footer height="30" class="d-flex app-linear-gradient" app>
    UX-makmet &copy; {{ new Date().getFullYear() }}
    <span class="text-body-small pl-4" >Портфолио-сайт разработан: Холодняк Никита</span>
  </v-footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Состояние боковой панели
const drawer = ref(false);
</script>
