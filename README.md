<div align="center">

# 🛒 UX-Market — Интернет-магазин на Nuxt + Vuetify + Nest

**Современный e-commerce проект с адаптивным дизайном, быстрой производительностью и чистым кодом.**

[![Nuxt](https://img.shields.io/badge/Nuxt-00DC82?style=for-the-badge&logo=nuxt&logoColor=white)](https://nuxt.com)
[![Vue](https://img.shields.io/badge/Vue-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)](https://vuejs.org)
[![Vuetify](https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=white)](https://vuetifyjs.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Pinia](https://img.shields.io/badge/Pinia-FFD859?style=for-the-badge&logo=pinia&logoColor=black)](https://pinia.vuejs.org)
[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com)

**Автор:** Холодняк Никита

**Telegram:** [@Whiomie](https://t.me/Whiomie)

[![Telegram](https://img.shields.io/badge/Написать_в_Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/Whiomie)

> ⚠️ **Внимание!** Это проект-портфолио, поэтому фронтенд и бэкенд находятся в одном репозитории. В боевых проектах их обычно разделяют.

</div>

---

## 📸 Скриншоты

<div align="center">

### 🖥️ Десктопная версия

#### Светлая тема

<img src="docs/home-desktop-light.png" width="600" alt="Главный экран (светлая тема)">

#### Тёмная тема

<img src="docs/home-desktop-dark.png" width="600" alt="Главный экран (тёмная тема)">

### 🛍️ Страница товара

#### Светлая тема

<img src="docs/card-light.png" width="600" alt="Карточка товара (светлая тема)">

<img src="docs/card-light-1.png" width="600" alt="Карточка товара (светлая тема, вторая)">

#### Тёмная тема

<img src="docs/card-dark.png" width="600" alt="Карточка товара (тёмная тема)">

<img src="docs/card-dark-1.png" width="600" alt="Карточка товара (тёмная тема, вторая)">

### 📱 Мобильная версия

#### Светлая тема

<img src="docs/home-mobile-light.png" width="300" alt="Мобильный главный экран (светлая тема)">

#### Тёмная тема

<img src="docs/home-mobile-dark.png" width="300" alt="Мобильный главный экран (тёмная тема)">

### 🛍️ Страница товара (мобильная)

#### Светлая тема

<img src="docs/card-mobile-light.png" width="300" alt="Мобильная карточка товара (светлая тема)">

#### Тёмная тема

<img src="docs/card-mobile-dark.png" width="300" alt="Мобильная карточка товара (тёмная тема)">

</div>

---

## 📋 О проекте

**UX-Market** — это полнофункциональный интернет-магазин, разработанный для демонстрации навыков fullstack-разработки. Проект включает в себя:

- 🛒 Каталог товаров с фильтрацией и поиском
- 📦 Страница товара с галереей изображений
- 🎨 Кастомная тема (светлая/тёмная)
- 📱 Полная адаптивность (mobile-first)
- ⚡ Оптимизированная производительность (SSR)
- 🔐 JWT-аутентификация (в разработке)
- 🗄️ REST API на NestJS

Находится в активной разработке в качестве портфолио.

---

## 🛠️ Технологии

| Технология | Назначение |
|------------|------------|
| **Nuxt** | SSR-фреймворк, роутинг, оптимизация |
| **Vue 3 (Composition API)** | Реактивность, компонентный подход |
| **Vuetify** | UI-компоненты, темизация |
| **TypeScript** | Строгая типизация |
| **Pinia** | Управление состоянием |
| **SCSS** | Стилизация, переменные |
| **Vite** | Сборка, dev-сервер |
| **NestJS** | Backend-фреймворк |

---

## ✨ Основные фичи

- ✅ **Кастомная тема** — светлая/тёмная, настраиваемые цвета
- ✅ **Адаптивная галерея** — миниатюры + главное изображение
- ✅ **Обработка загрузки** — скелетоны, лоадеры, плейсхолдеры
- ✅ **Локальное хранилище** — сохранение состояния между сессиями
- ✅ **Чистая архитектура** — компоненты, composables, stores

---

## 🚧 Планы по развитию

- [✅] Поиск по товарам
- [ ] Умный переход по каталогу и странице текущей карточки
- [ ] Боковая панель
- [ ] Страница корзины

---

## 🖥️ Установка и запуск

```bash
# 1. Клонировать репозиторий
git clone https://github.com/your-username/ux-market.git

# 2. Перейти в папку проекта
cd ux-market

# 3. Установить зависимости
npm install

# 4. Запустить dev-сервер
npm run dev

# 5. Открыть в браузере
# http://localhost:3000