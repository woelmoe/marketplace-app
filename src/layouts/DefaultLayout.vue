<template>
  <v-app>
    <v-app-bar color="primary" dark dense>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title class="text-h6 font-weight-medium"> UX-makmet </v-toolbar-title>
      <v-spacer />
      <v-chip small outlined class="mr-2">МХ Навіця організації Ольга</v-chip>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense>
        <v-subheader>Projects</v-subheader>
        <v-list-item-group>
          <v-list-item v-for="item in projects" :key="item">
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>

        <v-list dense> </v-list>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <slot />
        <!-- Сюда будут вставляться страницы -->
      </v-container>
    </v-main>

    <!-- Footer (optional) -->
    <v-footer app color="grey lighten-3" padless>
      <v-row justify="center" class="py-2">
        <span class="caption grey--text text--darken-1">UX‑makmet &copy; 2026</span>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const drawer = ref(false)

const projects = ref(['Games', 'Sand', 'Cinema', 'Homepage'])

const menuItems = ref([
  { title: 'Главная', route: '/', icon: 'mdi-home' },
  { title: 'Проекты', route: '/projects', icon: 'mdi-folder' },
  { title: 'Контакты', route: '/contacts', icon: 'mdi-email' },
])

const logout = () => {
  // Логика выхода
  router.push('/login')
}
</script>
