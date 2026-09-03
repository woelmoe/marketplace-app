<template>
  <v-btn size="large" class="font-weight-bold text-white" @click="goMain"> UX-makmet </v-btn>
</template>

<script setup lang="ts">
import router from '@/router/index.ts'

function goMain() {
  router.push('/')
}
</script>
