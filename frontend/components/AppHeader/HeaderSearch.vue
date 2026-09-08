<template>
  <v-text-field
    v-if="!isMobile"
    dense
    flat
    hide-details
    prepend-inner-icon="mdi-magnify"
    placeholder="Поиск..."
    width: 100%
    :class="{ 'field-hover': isHover }"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <template #prepend-inner>
      <v-icon class="search-icon">mdi-magnify</v-icon>
    </template>
  </v-text-field>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();
const isHover = ref(false);
const isMobile = computed(() => mobile.value);
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
