<template>
  <v-app-bar
    app
    dense
    class="app-header background app-linear-gradient"
    height="64"
  >
    <!-- Кнопка бургер-меню -->
    <v-app-bar-nav-icon class="text-white" @click="$emit('toggle-drawer')" />

    <HeaderLogo />

    <HeaderSearch />

    <ThemeToggle class="mr-2" />

    <HeaderCartButton />
    <HeaderProfileButton />
  </v-app-bar>
</template>

<script setup lang="ts">
import HeaderLogo from "./HeaderLogo.vue";
import HeaderSearch from "./HeaderSearch.vue";
import HeaderCartButton from "./HeaderCartButton.vue";
import HeaderProfileButton from "./HeaderProfileButton.vue";
import ThemeToggle from "./ThemeToggle.vue";

// Пропсы и эмиты для родителя
defineEmits<{
  (e: "toggle-drawer"): void;
}>();
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
