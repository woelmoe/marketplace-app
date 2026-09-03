import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const lightTheme = {
  dark: false,
  colors: {
    background: '#F5F5F5',
    surface: '#FFFFFF',
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#FF6F00',
    error: '#D32F2F',
    info: '#0288D1',
    success: '#388E3C',
    warning: '#F57C00',
    'primary-light': '#BBDEFB',
    'primary-dark': '#0D47A1',
  },
}

const darkTheme = {
  dark: true,
  colors: {
    background: '#121212',
    surface: '#1E1E1E',
    primary: '#90CAF9',
    secondary: '#B0BEC5',
    accent: '#FFA726',
    error: '#EF5350',
    info: '#29B6F6',
    success: '#66BB6A',
    warning: '#FFA726',
    'primary-light': '#1565C0',
    'primary-dark': '#0D47A1',
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
    options: {
      cspNonce: undefined,
      customProperties: true, // Включает CSS-переменные для плавных переходов
    },
  },
  defaults: {
    VBtn: {
      variant: 'elevated',
      rounded: 'lg',
      height: 44,
    },
    VCard: {
      rounded: 'lg',
      elevation: 2,
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
