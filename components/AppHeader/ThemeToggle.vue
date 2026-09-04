<template>
  <!-- Оборачиваем кнопку в компонент v-tooltip -->
  <v-tooltip location="bottom" color="background" opacity="0">
    <!-- Слот activator содержит элемент, на который наводится мышь -->
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        icon
        small
        @click="toggleTheme"
        :aria-label="tooltipText"
      >
        <v-icon color="header-icons">{{ icon }}</v-icon>
      </v-btn>
    </template>

    <!-- Текст тултипа -->
    <span>{{ tooltipText }}</span>
  </v-tooltip>
</template>

// todo:сделать прозрачный тултип
<script setup lang="ts">
import { computed } from "vue";
import { useTheme } from "@/composables/useTheme";

const { isDark, toggleTheme } = useTheme();

const icon = computed(() =>
  isDark.value ? "mdi-weather-sunny" : "mdi-weather-night",
);

const tooltipText = computed(() =>
  isDark.value ? "Переключить на светлую тему" : "Переключить на тёмную тему",
);
</script>
