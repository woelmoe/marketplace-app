<template>
  <v-expansion-panels variant="popout" class="mb-4">
    <v-expansion-panel>
      <v-expansion-panel-title>
        Характеристики и описание
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <p>{{ product. }}</p>
        <v-divider class="my-2" />
        <div class="d-flex align-center">
          <v-icon
            icon="mdi-calendar-check"
            size="small"
            class="mr-2"
            color="success"
          />
          <span class="text-body-2">14 дней на возврат</span>
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup lang="ts">
import type { Product } from '~/assets/types/types'

defineProps<{
  product: Product
}>()
</script>

<style scoped>
:deep(.v-expansion-panel) {
  border-radius: 8px !important;
}

:deep(.v-expansion-panel-title) {
  font-weight: 500;
}
</style>
