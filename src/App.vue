<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// Импортируем лейауты
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const route = useRoute()

// Определяем какой layout использовать на основе мета-данных маршрута
const layout = computed(() => {
  const layoutName = route.meta.layout || 'default'

  const layouts = {
    default: DefaultLayout,
  }

  return layouts[layoutName] || DefaultLayout
})
</script>
