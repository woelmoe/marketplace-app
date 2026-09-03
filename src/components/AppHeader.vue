<template>
  <v-app-bar
    app
    color="primary"
    dark
    dense
    class="app-header"
  >
    <!-- Кнопка открытия боковой панели -->
    <v-app-bar-nav-icon @click="$emit('toggle-drawer')" />

    <!-- Лого и название -->
    <v-toolbar-title class="text-h6 font-weight-medium">
      <router-link to="/" class="text-decoration-none text-white">
        UX-makmet
      </router-link>
    </v-toolbar-title>

    <v-spacer />

    <!-- Поиск (опционально, только на десктопе) -->
    <v-text-field
      v-if="!isMobile"
      dense
      flat
      hide-details
      prepend-inner-icon="mdi-magnify"
      placeholder="Поиск..."
      class="mr-4"
      style="max-width: 300px;"
    />

    <!-- Переключатель темы -->
    <ThemeToggle class="mr-2" />

    <!-- Кнопка корзины -->
    <v-btn icon small to="/cart" class="mr-2">
      <v-icon>mdi-cart-outline</v-icon>
      <v-badge
        v-if="cartCount > 0"
        color="red"
        :content="cartCount"
        overlap
      />
    </v-btn>

    <!-- Кнопка профиля -->
    <v-btn icon small to="/profile">
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useDisplay } from 'vuetify';
import ThemeToggle from '@/components/ThemeToggle.vue';

// Проверка мобильного устройства
const { mobile } = useDisplay();
const isMobile = computed(() => mobile.value);

// Пример данных для корзины
const cartCount = ref(3);
</script>

<style scoped>
.app-header {
  z-index: 1000;
}

.app-header a {
  color: inherit;
  text-decoration: none;
}
</style>
