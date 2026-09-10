<template>
  <v-card variant="flat" class="pa-4" rounded="lg">
    <h2 class="text-h6 mb-4">О разработчике</h2>

    <AboutBlock v-for="(block, i) in blocks" :key="i" :block="block" />
  </v-card>
</template>

<script setup lang="ts">
import AboutBlock from './AboutBlock.vue'
import type { IAboutBlock } from './types.ts'

defineProps<{ blocks: IAboutBlock[] }>()
</script>
