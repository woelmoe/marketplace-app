import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const lightTheme = {
  dark: false,
  colors: {
    primary: '#3538d8',
    secondary: '#F57C00',
    background: '#F8F9FA',
    cards: '#7a7bbb',
    icons: '#ffffff',
    'header-icons': '#ffffff',
    accent: '#FF6F00',
    error: '#D32F2F',
    info: '#0288D1',
    success: '#388E3C',
    warning: '#D81B60',
  },
}

const darkTheme = {
  dark: true,
  colors: {
    background: '#2c293b',
    cards: '#9393a8',
    icons: '#b3b2b2',
    'header-icons': '#ffffff',
    primary: '#4D8BFF',
    secondary: '#FF4D80',
    accent: '#FFA726',
    error: '#EF5350',
    info: '#29B6F6',
    success: '#66BB6A',
    warning: '#FFA726',
  },
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
  },
  // 👇 ДОБАВЬТЕ ЭТО!
  display: {
    mobileBreakpoint: 'sm',
    thresholds: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  defaults: {
    VBtn: {
      variant: 'text',
      style: 'cursor: pointer !important;',
    },
    VIcon: {
      color: 'icons',
    },
    VCard: {
      color: 'cards',
    },
    VTextField: {
      variant: 'outlined',
      density: 'comfortable',
    },
    VSelect: {
      variant: 'outlined',
      density: 'comfortable',
    },
  },
})
