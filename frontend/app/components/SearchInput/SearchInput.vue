<template>
  <v-text-field
    v-model="searchQuery"
    hide-details
    placeholder="Поиск..."
    :class="{ 'field-hover': isHover }"
    rounded="lg"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <template #prepend-inner>
      <v-icon class="search-icon">mdi-magnify</v-icon>
    </template>
  </v-text-field>
</template>

<script setup lang="ts">
const searchQuery = defineModel<string>({ default: '' })

const isHover = ref(false)
</script>

<style scoped>
.search-icon {
  color: rgb(var(--v-theme-header-icons)) !important;
  transition: all 0.2s ease;
}

.field-hover :deep(.search-icon) {
  color: rgb(var(--v-theme-header-icons-active)) !important;
}
</style>
