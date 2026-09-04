// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // ✅ Только CSS (без плагина)
  css: [
    "vuetify/styles",
    "@mdi/font/css/materialdesignicons.css",
    "~/assets/styles.scss",
  ],

  // ✅ Отключаем SSR для Vuetify (он не поддерживает SSR)
  ssr: false,

  // ✅ Транспиляция только для Vuetify
  build: {
    transpile: ["vuetify"],
  },

  // ✅ Оптимизация Vite
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    optimizeDeps: {
      include: [
        "vuetify",
        "vuetify/components",
        "vuetify/directives",
        "vuetify/iconsets/mdi",
        "@mdi/font/css/materialdesignicons.css",
      ],
    },
    ssr: {
      noExternal: ["vuetify"],
    },
  },
});
