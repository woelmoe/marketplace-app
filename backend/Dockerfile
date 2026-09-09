FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:22-alpine AS production

WORKDIR /app

# COPY --from=builder /app ./

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/node_modules ./node_modules

# ВНИМАНИЕ! Изображения исключительно демонстрации проекта! В реальном проекте необходимо держать изображения в отдельном облаке
COPY --from=builder /app/uploads ./uploads
#  ИСПОЛЬЗОВАНИЕ ДЛЯ ДЕМОНСТРАЦИИ! .env прямо в проекте - это плохая практика. В проде строку ниже необходимо удалить и вводить креды при запуске контейнеров
COPY env.example ./.env

EXPOSE 5000

CMD ["sh", "-c", "node dist/seed/seed.js && node dist/main.js"]