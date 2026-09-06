// plugins/vuetify.client.ts
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const lightTheme = {
  dark: false,
  colors: {
    background: '#e5e5ec',
    icons: '#ffffff',
    'header-icons': '#ffffff',
    'header-icons-active': '#e9e4e4',
    primary: '#57589c',
    secondary: '#F57C00',
    error: '#D32F2F',
    info: '#0288D1',
    success: '#388E3C',
    warning: '#D81B60'
  }
}

const darkTheme = {
  dark: true,
  colors: {
    background: '#221f30',
    icons: '#b3b2b2',
    'header-icons': '#ffffff',
    'header-icons-active': '#e9e4e4',
    primary: '#4D8BFF',
    secondary: '#FF4D80',
    error: '#EF5350',
    info: '#29B6F6',
    success: '#388E3C',
    warning: '#D81B60'
  }
}

// ✅ ВАЖНО: Оборачиваем в defineNuxtPlugin
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: lightTheme,
        dark: darkTheme
      }
    },
    display: {
      mobileBreakpoint: 'sm',
      thresholds: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920
      }
    },
    defaults: {
      VContainer: {
        color: 'background'
      },
      VBtn: {
        variant: 'text',
        style: 'cursor: pointer !important;'
      },
      VIcon: {
        color: 'icons'
      },
      VCard: {
        color: 'background',
        style: 'cursor: pointer !important;'
      },
      VTextField: {
        variant: 'outlined',
        density: 'comfortable',
        style: 'cursor: pointer !important;'
      },
      VSelect: {
        variant: 'outlined',
        density: 'comfortable'
      },
      VSheet: {
        color: 'background'
      }
    }
  })

  // ✅ Регистрируем Vuetify в приложении
  nuxtApp.vueApp.use(vuetify)
})
