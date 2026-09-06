// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@pinia/nuxt'],
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css',
    '~/assets/styles.scss'
  ],

  ssr: false,

  build: {
    transpile: ['vuetify']
  },

  vite: {
    define: {
      'process.env.DEBUG': false
    },
    optimizeDeps: {
      include: [
        'vuetify',
        'vuetify/components',
        'vuetify/directives',
        'vuetify/iconsets/mdi',
        '@mdi/font/css/materialdesignicons.css'
      ]
    },
    ssr: {
      noExternal: ['vuetify']
    }
  }
})
