<template>
  <v-btn
    color="header-icons"
    size="large"
    class="font-weight-bold text-white"
    @click="goMain"
  >
    {{ APP_NAME }}
  </v-btn>
</template>

<script setup lang="ts">
import { APP_NAME } from '~/assets/types/CommonDefinitions'

const router = useRouter()
function goMain() {
  router.push('/')
}
</script>
