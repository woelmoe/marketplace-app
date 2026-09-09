FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:22-alpine AS production

WORKDIR /app

COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
RUN yarn install --frozen-lockfile --production

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]