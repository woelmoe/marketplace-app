<template>
  <v-card class="d-flex flex-column h-100 rounded-lg border">
    <!-- Бейджи -->
    <div class="position-absolute top-2 left-2 d-flex flex-column ga-1" style="z-index: 10">
      <v-badge
        v-if="product.discount"
        :content="`-${product.discount}%`"
        color="purple"
        inline
        class="custom-badge"
      ></v-badge>
      <v-badge
        v-if="product.badgeText"
        :content="product.badgeText"
        :color="product.badgeColor || 'purple'"
        inline
        class="custom-badge"
      ></v-badge>
    </div>

    <!-- Кнопка избранного -->
    <v-btn
      icon="mdi-heart"
      variant="text"
      size="small"
      class="position-absolute top-2 right-2"
      style="z-index: 10"
      bordered
      :color="product.isFavorite ? 'red' : 'grey-lighten-1'"
      @click="$emit('toggle-favorite', product.id)"
    ></v-btn>

    <!-- Заглушка изображения -->
    <v-sheet
      color="grey-lighten-4"
      class="d-flex align-center justify-center w-100 flex-grow-1"
      min-height="180"
    >
      <v-icon icon="mdi-image-off-outline" size="64" color="grey-lighten-2"></v-icon>
    </v-sheet>

    <!-- Контент -->
    <v-card-item class="pa-2">
      <a href="#" class="text-body-2 text-grey-darken-4 text-decoration-none product-title">
        {{ product.title }}
      </a>

      <div class="d-flex align-center mt-1">
        <v-rating
          :model-value="product.rating"
          density="compact"
          size="x-small"
          color="amber"
          half-increments
          readonly
          class="me-1"
        ></v-rating>
        <span class="text-caption font-weight-bold">{{ product.rating }}</span>
        <span class="text-caption text-grey ml-1">{{ product.reviews }} оценок</span>
      </div>
    </v-card-item>

    <v-card-text class="pa-2 pt-0 mt-auto">
      <div v-if="product.oldPrice" class="text-decoration-line-through text-grey text-caption">
        {{ formatPrice(product.oldPrice) }}
      </div>
      <div class="text-h6 font-weight-bold text-grey-darken-4">
        {{ formatPrice(product.price) }}
      </div>
    </v-card-text>

    <v-divider></v-divider>
    <v-card-actions class="pa-2 d-flex justify-space-between">
      <span class="text-caption text-purple-darken-4">
        <v-icon icon="mdi-truck-fast-outline" size="small" class="mr-1"></v-icon>
        {{ product.deliveryDate }}
      </span>
      <v-btn
        color="purple"
        class="text-white text-capitalize"
        size="small"
        rounded="lg"
        @click="$emit('add-to-cart', product)"
      >
        В корзину
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import type { Product } from './types'

// Определяем пропсы
const props = defineProps<{
  product: Product
}>()

// Определяем эмиты (события), чтобы родитель мог обрабатывать нажатия
defineEmits<{
  (e: 'toggle-favorite', id: number): void
  (e: 'add-to-cart', product: Product): void
}>()

const formatPrice = (price: number) => {
  return price.toLocaleString('ru-RU') + ' ₽'
}
</script>

<style scoped>
.custom-badge :deep(.v-badge__badge) {
  font-size: 10px;
  font-weight: bold;
  padding: 4px 6px;
  border-radius: 6px;
  box-shadow: none;
  text-transform: uppercase;
}
.product-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.5em;
}
</style>
