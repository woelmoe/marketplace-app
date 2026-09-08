# Этап 1: Сборка
FROM node:20-alpine AS builder

WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Копируем исходники
COPY . .

# Собираем приложение
RUN yarn build

# Этап 2: Продакшн
FROM node:20-alpine AS production

WORKDIR /app

# Копируем собранные файлы
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./

# Устанавливаем только продакшн зависимости
RUN yarn install --frozen-lockfile --production

# Открываем порт
EXPOSE 3000

# Запускаем приложение
CMD ["node", ".output/server/index.mjs"]