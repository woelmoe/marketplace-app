<div align="center">

# 🛒 UX-Market — интернет-магазин на Nuxt + Vuetify + NestJS

**Современный e-commerce проект с адаптивным дизайном, быстрой производительностью и чистым кодом.**

[![Nuxt](https://img.shields.io/badge/Nuxt-00DC82?style=for-the-badge&logo=nuxt&logoColor=white)](https://nuxt.com)
[![Vue](https://img.shields.io/badge/Vue-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)](https://vuejs.org)
[![Vuetify](https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=white)](https://vuetifyjs.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Pinia](https://img.shields.io/badge/Pinia-FFD859?style=for-the-badge&logo=pinia&logoColor=black)](https://pinia.vuejs.org)
[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com)

**Автор:** Холодняк Никита · **Telegram:** [@Whiomie](https://t.me/Whiomie)

[![Написать в Telegram](https://img.shields.io/badge/Написать_в_Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/Whiomie)

> ⚠️ **Внимание!** Это проект-портфолио, поэтому фронтенд и бэкенд находятся в одном репозитории. В боевых проектах их обычно разделяют.

</div>

---

## 📋 О проекте

**UX-Market** — полнофункциональный интернет-магазин, разработанный для демонстрации навыков fullstack-разработки.

- 🛒 Каталог товаров с фильтрацией и поиском
- 📦 Страница товара с галереей изображений
- 🧺 Корзина с сохранением состояния между сессиями
- 📇 Страница контактов
- 🎨 Кастомная тема (светлая / тёмная)
- 📱 Полная адаптивность (mobile-first)
- ⚡ Оптимизированная производительность (SSR)
- 🔐 JWT-аутентификация _(в разработке)_
- 🗄️ REST API на NestJS

Находится в активной разработке в качестве портфолио.

---

## 📸 Скриншоты

### 🖥️ Десктоп

| Раздел          | Светлая тема                                                                     | Тёмная тема                                                                    |
| --------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Главная         | <img src="docs/home-desktop-light.png" width="380" alt="Главная — светлая тема"> | <img src="docs/home-desktop-dark.png" width="380" alt="Главная — тёмная тема"> |
| Карточка товара | <img src="docs/card-light.png" width="380" alt="Карточка товара — светлая тема"> | <img src="docs/card-dark.png" width="380" alt="Карточка товара — тёмная тема"> |
| Корзина         | <img src="docs/cart-light.png" width="380" alt="Корзина — светлая тема">         | <img src="docs/cart-dark.png" width="380" alt="Корзина — тёмная тема">         |
| Контакты        | <img src="docs/contacts-light.png" width="380" alt="Контакты — светлая тема">    | <img src="docs/contacts-dark.png" width="380" alt="Контакты — тёмная тема">    |

### 📱 Мобильная версия

| Раздел          | Светлая тема                                                                                        | Тёмная тема                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Главная         | <img src="docs/home-mobile-light.png" width="180" alt="Главная (мобильная) — светлая тема">         | <img src="docs/home-mobile-dark.png" width="180" alt="Главная (мобильная) — тёмная тема">         |
| Карточка товара | <img src="docs/card-mobile-light.png" width="180" alt="Карточка товара (мобильная) — светлая тема"> | <img src="docs/card-mobile-dark.png" width="180" alt="Карточка товара (мобильная) — тёмная тема"> |
| Корзина         | <img src="docs/cart-mobile-light.png" width="180" alt="Корзина (мобильная) — светлая тема">         | <img src="docs/cart-mobile-dark.png" width="180" alt="Корзина (мобильная) — тёмная тема">         |
| Контакты        | <img src="docs/contacts-mobile-light.png" width="180" alt="Контакты (мобильная) — светлая тема">    | <img src="docs/contacts-mobile-dark.png" width="180" alt="Контакты (мобильная) — тёмная тема">    |

---

## 🛠️ Технологии

| Технология                  | Назначение                          |
| --------------------------- | ----------------------------------- |
| **Nuxt 3**                  | SSR-фреймворк, роутинг, оптимизация |
| **Vue 3 (Composition API)** | Реактивность, компонентный подход   |
| **Vuetify 3**               | UI-компоненты, темизация            |
| **TypeScript**              | Строгая типизация                   |
| **Pinia**                   | Управление состоянием               |
| **SCSS**                    | Стилизация, переменные              |
| **Vite**                    | Сборка, dev-сервер                  |
| **NestJS**                  | Backend-фреймворк                   |
| **PostgreSQL**              | База данных                         |
| **Docker**                  | Контейнеризация                     |

---

## ✨ Фичи

- ✅ **Кастомная тема** — светлая / тёмная, настраиваемые цвета
- ✅ **Поиск по товарам** с debounce
- ✅ **Страница товара** — адаптивная галерея, миниатюры, главное изображение
- ✅ **Корзина** — добавление, изменение количества, удаление, сохранение в `localStorage`
- ✅ **Страница контактов** — контактные данные и информация о разработчике
- ✅ **Обработка загрузки** — скелетоны, лоадеры, плейсхолдеры
- ✅ **Чистая архитектура** — компоненты, composables, stores

---

## 🚧 Планы по развитию

- [x] Поиск по товарам
- [x] Страница корзины
- [x] Страница контактов
- [ ] Умный переход по каталогу и странице текущей карточки
- [х] Боковая панель (навигация)

---

## 🖥️ Установка и запуск

### Требования

- Node.js ≥ 18
- Yarn ≥ 1.22
- Docker Desktop (для БД)

### Команды

```bash
# 1. Клонировать репозиторий
git clone https://github.com/your-username/ux-market.git
cd ux-market

# 2. Установить зависимости (frontend + backend)
yarn install

# 3. Запустить всё
yarn start      # поднять PostgreSQL в Docker
yarn front      # запустить фронтенд
yarn back       # запустить бэкенд
```

После запуска:

- Frontend — http://localhost:3000
- Backend — http://localhost:5000
- PostgreSQL — http://localhost:5432

---

## 📄 Лицензия

Проект создан в учебных и портфолио-целях.
