import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const lightTheme = {
  dark: false,
  colors: {
    // Основной фирменный цвет — фиолетовый
    primary: '#3538d8', // Pantone 675C [citation:3][citation:5]
    // Основной акцентный цвет — фуксия, часто используется в градиенте [citation:5][citation:7]
    secondary: '#F57C00', // Pantone 2395C
    // Светлые фоновые тона, которые используются в новом дизайне [citation:1][citation:4][citation:9]
    background: '#F8F9FA', // Светлый, нейтральный фон
    cards: '#5a5cbd',
    icons: '#ffffff', // Белый для карточек и поверхностей
    'header-icons': '#ffffff',
    // Остальные цвета можно оставить или адаптировать под палитру Ozon
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
    background: '#2c293b', // Темный фон
    cards: '#FFFFFF',
    icons: '#b3b2b2', // Белый для карточек и поверхностей
    'header-icons': '#ffffff',
    primary: '#4D8BFF', // Светлый вариант Digital Blue для темной темы
    secondary: '#FF4D80', // Светлый вариант малинового для темной темы
    // ... остальные цвета
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
