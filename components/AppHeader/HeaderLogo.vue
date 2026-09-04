<template>
  <v-btn
    color="header-icons"
    size="large"
    class="font-weight-bold text-white"
    @click="goMain"
  >
    UX-makmet
  </v-btn>
</template>

<script setup lang="ts">
const router = useRouter();
function goMain() {
  router.push("/");
}
</script>
