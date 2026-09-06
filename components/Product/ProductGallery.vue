<template>
  <div class="gallery-wrapper">
    <!-- 1. Левая колонка: Вертикальная карусель миниатюр -->
    <div class="thumbnails-column">
      <v-carousel
        v-model="selectedIndex"
        direction="vertical"
        height="100%"
        hide-delimiters
        show-arrows="false"
        class="thumbnails-carousel"
      >
        <v-carousel-item
          v-for="(img, index) in product?.imgs"
          :key="index"
          :src="img"
          cover
          class="thumbnail-item"
          @click="selectedIndex = index"
        >
          <!-- Класс для выбранной миниатюры (фиолетовая рамка) -->
          <div
            class="thumbnail-overlay"
            :class="{ active: index === selectedIndex }"
          ></div>
        </v-carousel-item>
      </v-carousel>

      <!-- Кастомные стрелки для миниатюр (сверху и снизу) -->
      <v-btn
        icon="mdi-chevron-up"
        size="small"
        variant="flat"
        color="white"
        class="thumb-nav-btn top"
        @click="selectedIndex = Math.max(0, selectedIndex - 1)"
      />
      <v-btn
        icon="mdi-chevron-down"
        size="small"
        variant="flat"
        color="white"
        class="thumb-nav-btn bottom"
        @click="
          selectedIndex = Math.min(product?.imgs?.length - 1, selectedIndex + 1)
        "
      />
    </div>

    <div class="main-image-column">
      <ProductImage :product />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Product } from '~/assets/types/types'

interface IProps {
  product: Product | undefined
}

interface Hotspot {
  id: number
  label: string
  x: number // Процент от левого края (например, 20)
  y: number // Процент от верхнего края (например, 60)
}
const props = defineProps<IProps>()

const selectedIndex = ref(0)

// Пример хотспотов (координаты в процентах)
const hotspots: Hotspot[] = [
  { id: 1, label: '50x70', x: 25, y: 60 },
  { id: 2, label: '70x70', x: 75, y: 75 }
]

function handleHotspotClick(spot: Hotspot) {
  console.log('Клик по хотспоту:', spot.label)
  // Здесь можно перейти по ссылке на другой товар
}
</script>

<style scoped>
/* Общая обертка */
.gallery-wrapper {
  width: 100%;
  height: 600px; /* Или задайте высоту через проп */
  display: flex;
  gap: 8px;
}

/* Колонка миниатюр */
.thumbnails-column {
  width: 80px;
  position: relative;
  flex-shrink: 0;
}

.thumbnails-carousel {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
}

.thumbnail-item {
  cursor: pointer;
}

/* Рамка для выбранной миниатюры */
.thumbnail-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  border-radius: 8px;
  transition: border-color 0.2s;
}
.thumbnail-overlay.active {
  border-color: #7b1fa2; /* Фиолетовый цвет */
}

/* Кастомные стрелки на миниатюрах */
.thumb-nav-btn {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.thumb-nav-btn.top {
  top: 8px;
}
.thumb-nav-btn.bottom {
  bottom: 8px;
}

/* Колонка главного изображения */
.main-image-column {
  flex-grow: 1;
  position: relative;
}

.main-image {
  border-radius: 12px;
}

/* Хотспоты */
.hotspot-btn {
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 2;
  border-radius: 50%;
  border: 2px solid white;
}

.hotspot-label {
  position: absolute;
  transform: translate(-20%, -50%);
  z-index: 2;
  color: white;
  background-color: #4d8bff;
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  white-space: nowrap;
  pointer-events: none; /* Чтобы текст не мешал кликать по кнопке */
}

/* Адаптивность (например, для телефона) */
@media (max-width: 600px) {
  .gallery-wrapper {
    height: 400px;
  }
  .thumbnails-column {
    width: 50px;
  }
}
</style>
