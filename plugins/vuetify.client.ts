// plugins/vuetify.client.ts
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const lightTheme = {
  dark: false,
  colors: {
    background: "#d0d0e2",
    icons: "#ffffff",
    "header-icons": "#ffffff",
    primary: "#57589c",
    secondary: "#F57C00",
    accent: "#FF6F00",
    error: "#D32F2F",
    info: "#0288D1",
    success: "#388E3C",
    warning: "#D81B60",
  },
};

const darkTheme = {
  dark: true,
  colors: {
    background: "#2c293b",
    icons: "#b3b2b2",
    "header-icons": "#ffffff",
    primary: "#4D8BFF",
    secondary: "#FF4D80",
    accent: "#FFA726",
    error: "#EF5350",
    info: "#29B6F6",
    success: "#66BB6A",
    warning: "#D81B60",
  },
};

// ✅ ВАЖНО: Оборачиваем в defineNuxtPlugin
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "light",
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
    },
    display: {
      mobileBreakpoint: "sm",
      thresholds: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    defaults: {
      VContainer: {
        color: "background",
      },
      VBtn: {
        variant: "text",
        style: "cursor: pointer !important;",
      },
      VIcon: {
        color: "icons",
      },
      VCard: {
        color: "background",
        style: "cursor: pointer !important;",
      },
      VTextField: {
        variant: "outlined",
        density: "comfortable",
      },
      VSelect: {
        variant: "outlined",
        density: "comfortable",
      },
    },
  });

  // ✅ Регистрируем Vuetify в приложении
  nuxtApp.vueApp.use(vuetify);
});
