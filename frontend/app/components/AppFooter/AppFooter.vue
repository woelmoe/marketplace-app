<template>
  <v-footer height="35" class="d-flex app-linear-gradient" app>
    <span class="text-body-small">
      {{ APP_NAME }} &copy; {{ new Date().getFullYear() }}
    </span>
    <span class="text-label-small pl-4">
      Портфолио-сайт разработан: {{ AUTHOR }} tg:
      <CopyableContact :title="AUTHOR_TG" />
    </span>
  </v-footer>
</template>

<script setup lang="ts">
import { APP_NAME, AUTHOR, AUTHOR_TG } from '~/assets/types/CommonDefinitions'
import CopyableContact from '../Contacts/CopyableContact.vue'
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
