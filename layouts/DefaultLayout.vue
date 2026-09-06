<template>
  <AppHeader @toggle-drawer="drawer = !drawer" />

  <slot />

  <v-footer height="30" class="d-flex app-linear-gradient" app>
    {{ APP_NAME }} &copy; {{ new Date().getFullYear() }}
    <span class="text-body-small pl-4">
      Портфолио-сайт разработан: {{ AUTHOR }} tg:
      <span class="tg-link" :class="{ clicked: isCopied }" @click="onClickTg">
        {{ AUTHOR_TG }}
      </span>
    </span>
  </v-footer>

  <v-snackbar
    v-model="isCopied"
    timeout="1500"
    color="success"
    location="bottom"
    style="opacity: 0.9"
  >
    Никнейм скопирован!
    <template v-slot:actions>
      <v-btn color="white" variant="text" @click="isCopied = false">OK</v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { APP_NAME, AUTHOR, AUTHOR_TG } from '~/assets/types/CommonDefinitions'
import { copyToClipboard } from '~/utils/copyToClipboard'

const drawer = ref(false)
const isCopied = ref(false)

function onClickTg() {
  copyToClipboard()
  isCopied.value = true
}
</script>

<style scoped>
.tg-link {
  cursor: pointer;
  text-decoration: underline dotted;
  color: inherit;
  transition: color 0.2s ease;
}

.tg-link:hover {
  color: #fff;
}

.tg-link.clicked {
  color: #00e676;
}
</style>
