<template>
  <v-tooltip bottom>
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        icon
        small
        @click="toggleTheme"
        :aria-label="tooltipText"
      >
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </template>
    <span>{{ tooltipText }}</span>
  </v-tooltip>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from '@/composables/useTheme';

const { isDark, toggleTheme } = useTheme();

// Вычисляем иконку в зависимости от текущей темы
const icon = computed(() =>
  isDark.value ? 'mdi-weather-sunny' : 'mdi-weather-night'
);

// Текст для подсказки
const tooltipText = computed(() =>
  isDark.value ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'
);
</script>
