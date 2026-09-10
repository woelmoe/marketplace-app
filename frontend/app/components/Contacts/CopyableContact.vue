<template>
  <span class="copy-link" :class="{ clicked: isCopied }" @click="onClick">
    {{ title }}
  </span>

  <v-snackbar
    v-model="isCopied"
    timeout="1500"
    color="success"
    location="bottom"
    style="opacity: 0.9"
  >
    Скопировано в буфер!
    <template v-slot:actions>
      <v-btn color="white" variant="text" @click="isCopied = false">OK</v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface IProps {
  title: string
}

const props = defineProps<IProps>()

const isCopied = ref(false)

function onClick() {
  copyToClipboard(props.title)
  isCopied.value = true
}
</script>

<style scoped>
.copy-link {
  cursor: pointer;
  text-decoration: underline dotted;
  color: inherit;
  transition: color 0.2s ease;
}

.copy-link:hover {
  color: #fff;
}

.copy-link.clicked {
  color: #00e676;
}
</style>
