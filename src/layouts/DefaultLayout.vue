<template>
  <v-app>
    <AppHeader @toggle-drawer="drawer = !drawer" />

    <NavigationDrawer v-model="drawer" />

    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>

    <v-footer class="d-flex flex-column" color="teal" rounded="lg" app>
      <div class="d-flex w-100 align-center px-4 py-2">
        <strong>UX-makmet &copy; {{ new Date().getFullYear() }}</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavigationDrawer from '@/components/NavigationDrawer/NavigationDrawer.vue'
import AppHeader from '@/components/AppHeader/AppHeader.vue'

// Состояние боковой панели
const drawer = ref(false)
</script>
