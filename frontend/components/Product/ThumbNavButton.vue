<template>
  <v-btn
    variant="flat"
    color="primary"
    class="thumb-nav-btn rounded-circle"
    :class="position"
    @click="$emit('click')"
  >
    <v-icon color="icons">{{ icon }}</v-icon>
  </v-btn>
</template>

<script setup lang="ts">
interface IProps {
  icon: string
  position: 'top' | 'bottom'
}

defineProps<IProps>()
defineEmits(['click'])
</script>

<style scoped>
.thumb-nav-btn {
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(25%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  opacity: 0.7;
  transition: opacity 0.2s;
  min-width: 0;
  width: 32px;
  height: 32px;
  padding: 0;
}

.thumb-nav-btn:hover {
  opacity: 1;
}

.thumb-nav-btn.top {
  top: 4px;
}

.thumb-nav-btn.bottom {
  bottom: 4px;
}
</style>
