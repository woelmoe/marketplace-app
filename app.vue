<template>
  <v-app>
    <component :is="layout">
      <router-view />
    </component>
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

import { ref } from "vue";
// Состояние боковой панели
const drawer = ref(false);
</script>
