<template>
  <v-app>
    <!-- <AppHeader @toggle-drawer="drawer = !drawer" /> -->

    <!-- <NavigationDrawer v-model="drawer" /> -->

    <v-main>
      <v-container>
      </v-container>
    </v-main>

    <v-footer
      style="background: linear-gradient(90deg, #8e96db 0%, #5e60ce 100%)"
      class="d-flex flex-column"
      rounded="lg"
      app
    >
      UX-makmet &copy; {{ new Date().getFullYear() }}
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const route = useRoute();

const layouts = {
  default: DefaultLayout,
};
type LayoutKey = keyof typeof layouts;

const layout = computed(() => {
  const layoutName = (route.meta.layout as LayoutKey) || "default";
  return layouts[layoutName] || DefaultLayout;
});

import { ref } from 'vue'
// Состояние боковой панели
const drawer = ref(false)
</script>
