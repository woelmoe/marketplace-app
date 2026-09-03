// В отдельном файле или перед созданием роутера
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    layout?: string
  }
}
