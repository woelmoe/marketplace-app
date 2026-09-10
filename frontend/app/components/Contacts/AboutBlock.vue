<template>
  <v-row
    class="about-block pb-4 mb-5 border-b"
    :class="{ 'border-b-0 pb-0': isLast }"
    no-gutters
  >
    <v-col cols="12">
      <h3 v-if="block.title" class="text-subtitle-1 mb-1">
        <span class="block-emoji">{{ block.emoji }}</span>
        {{ block.title }}
      </h3>

      <p class="text-body-2 mb-2">{{ block.text }}</p>

      <v-row v-if="block.tags?.length" dense class="ga-1 ma-0">
        <v-chip
          v-for="tag in block.tags"
          :key="tag"
          size="small"
          variant="tonal"
        >
          {{ tag }}
        </v-chip>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import type { IAboutBlock } from './types'

interface IProps {
  block: IAboutBlock
  isLast?: boolean
}

withDefaults(defineProps<IProps>(), { isLast: false })
</script>

<style scoped lang="scss">
.about-block {
  &:last-child {
    border-bottom: none !important;
    padding-bottom: 0 !important;
  }
}

.block-emoji {
  font-size: 24px;
  line-height: 1.2;
}
</style>
