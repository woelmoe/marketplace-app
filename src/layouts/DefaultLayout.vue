<template>
  <v-app>
    <!-- Заголовок приложения -->
    <AppHeader @toggle-drawer="drawer = !drawer" />

    <!-- Боковая панель -->
    <SideBarNavigation v-model="drawer" />

    <!-- Основной контент -->
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>

    <!-- Подвал -->
    <v-footer app color="grey lighten-3" padless>
      <v-row justify="center" class="py-2">
        <span class="caption grey--text text--darken-1">
          UX-makmet &copy; {{ new Date().getFullYear() }}
        </span>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import SideBarNavigation from '@/components/SideBarNavigation.vue';

// Состояние боковой панели
const drawer = ref(false);
</script>
