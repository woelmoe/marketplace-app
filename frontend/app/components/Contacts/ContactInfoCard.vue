<template>
  <v-card class="pa-4" rounded="lg">
    <h2 class="text-h6 mb-4">Связаться</h2>

    <div class="text-caption text-medium-emphasis">
      <CopyableContact title="+7 906 467-98-69" />
    </div>
    <div class="text-caption text-medium-emphasis">
      <CopyableContact title="nikskilfly@gmail.com" />
    </div>

    <v-divider class="my-4" />

    <div class="text-caption text-medium-emphasis">
      Отвечаю в течение рабочего дня. Для срочных вопросов — звонок.
    </div>
  </v-card>
</template>

<script setup lang="ts">
import CopyableContact from './CopyableContact.vue'
</script>
