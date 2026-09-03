<template>
  <v-app>
    <AppHeader @toggle-drawer="drawer = !drawer" />

    <NavigationDrawer
      v-model="drawer"
      @project-selected="handleProjectSelected"
      @logout="handleLogout"
    />

    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
import AppFooter from '@/components/AppFooter/AppFooter.vue'
import AppHeader from '@/components/AppHeader/AppHeader.vue'
import NavigationDrawer from '@/components/NavigationDrawer/NavigationDrawer.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const drawer = ref(false)

const handleProjectSelected = (project: string) => {
  console.log('Selected project:', project)
  // Логика выбора проекта
  drawer.value = false
}

const handleLogout = () => {
  // Логика выхода
  router.push('/login')
}
</script>
