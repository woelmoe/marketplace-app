<template>
  <v-navigation-drawer v-model="localDrawer" app temporary>
    <v-list dense>
      <v-list dense>
        <v-list-item v-for="item in menuItems" :key="item.route" @click="navigateTo(item.route)">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider class="my-2" />

      <v-list dense>
        <v-list-item @click="$emit('logout')">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Выйти</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'project-selected', project: string): void
  (e: 'logout'): void
}>()

const router = useRouter()

const menuItems = ref([
  { title: 'Главная', route: '/', icon: 'mdi-home' },
  { title: 'Проекты', route: '/projects', icon: 'mdi-folder' },
  { title: 'Контакты', route: '/contacts', icon: 'mdi-email' },
])

const localDrawer = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

const navigateTo = (route: string) => {
  router.push(route)
  localDrawer.value = false
}
</script>
