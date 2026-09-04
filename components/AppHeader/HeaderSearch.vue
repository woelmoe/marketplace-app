<template>
  <v-text-field
    v-if="!isMobile"
    dense
    flat
    hide-details
    prepend-inner-icon="mdi-magnify"
    placeholder="Поиск..."
    class="mr-4"
    style="max-width: 300px"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)
</script>
