// plugins/dayjs.ts
import dayjs from 'dayjs'
import 'dayjs/locale/ru' // Импортируем русскую локаль

export default defineNuxtPlugin((nuxtApp) => {
  dayjs.locale('ru')

  // Предоставляем dayjs всему приложению через nuxtApp
  return {
    provide: {
      dayjs
    }
  }
})
