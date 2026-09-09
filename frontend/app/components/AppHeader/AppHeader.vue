<template>
  <v-app-bar
    app
    dense
    class="app-header background app-linear-gradient"
    height="64"
  >
    <v-app-bar-nav-icon @click="$emit('toggle-drawer')">
      <v-icon color="header-icons">mdi-menu</v-icon>
    </v-app-bar-nav-icon>

    <HeaderLogo />

    <HeaderSearch v-if="!mobile" />

    <v-spacer> </v-spacer>
    <ThemeToggle class="mr-2" />

    <HeaderCartButton />
  </v-app-bar>
</template>

<script setup lang="ts">
import HeaderLogo from './HeaderLogo.vue'
import HeaderSearch from './HeaderSearch.vue'
import HeaderCartButton from './HeaderCartButton.vue'
import ThemeToggle from './ThemeToggle.vue'
import { useDisplay } from 'vuetify'

// Пропсы и эмиты для родителя
defineEmits<{
  (e: 'toggle-drawer'): void
}>()

const { mobile } = useDisplay()
</script>

<style scoped>
.app-header {
  z-index: 1000;
}

.background {
  box-shadow: none !important;
  color: #fff; /* Белый цвет для всех иконок и текста по умолчанию */
}

/* Если внутри шапки есть ссылки */
.app-header a {
  color: inherit;
  text-decoration: none;
}
</style>
