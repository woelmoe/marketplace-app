// src/composables/useTheme.ts
import { computed } from 'vue'
import { useTheme as useVuetifyTheme } from 'vuetify'

export function useTheme() {
  const theme = useVuetifyTheme()

  // Вычисляемое свойство для проверки текущей темы
  const isDark = computed(() => theme.global.name.value === 'dark')

  // Переключение темы
  const toggleTheme = () => {
    const newTheme = isDark.value ? 'light' : 'dark'
    theme.global.name.value = newTheme
    localStorage.setItem('theme', newTheme)
  }

  // Восстановление темы из localStorage
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
    theme.global.name.value = savedTheme
  }

  return {
    isDark,
    toggleTheme,
    currentTheme: theme.global.name,
  }
}
