<template>
  <div class="gallery-wrapper">
    <!-- 1. Левая колонка: Галерея миниатюр -->
    <div class="thumbnails-column">
      <div class="thumbnails-container" ref="thumbnailsContainer">
        <div
          v-for="(img, index) in product?.imgs"
          :key="index"
          class="thumbnail-item-wrapper"
          @click="selectedIndex = index"
        >
          <v-img
            :src="img"
            cover
            class="thumbnail-item"
            :class="{ active: index === selectedIndex }"
          />
        </div>
      </div>

      <!-- Стрелки навигации -->
      <v-btn
        icon="mdi-chevron-up"
        size="small"
        variant="flat"
        color="white"
        class="thumb-nav-btn top"
        @click="scrollThumbnails(-1)"
      />
      <v-btn
        icon="mdi-chevron-down"
        size="small"
        variant="flat"
        color="white"
        class="thumb-nav-btn bottom"
        @click="scrollThumbnails(1)"
      />
    </div>

    <div class="main-image-column">
      <ProductImage :product :selected-index="selectedIndex" />
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
const thumbnailsContainer = ref<HTMLElement | null>(null)

// Количество видимых миниатюр
const ITEMS_PER_VIEW = 6

// Прокрутка галереи миниатюр
function scrollThumbnails(direction: number) {
  const container = thumbnailsContainer.value
  if (!container) return

  const itemHeight = container.scrollHeight / (product?.imgs?.length || 1)
  const scrollAmount = itemHeight * ITEMS_PER_VIEW

  container.scrollBy({
    top: direction * scrollAmount,
    behavior: 'smooth'
  })
}

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
  height: 600px;
  display: flex;
  gap: 8px;
}

/* Колонка миниатюр */
.thumbnails-column {
  width: 80px;
  position: relative;
  flex-shrink: 0;
  height: 100%;
}

/* Контейнер с прокруткой для миниатюр */
.thumbnails-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE и Edge */
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 4px 0;
  border-radius: 8px;
}

/* Скрываем скроллбар для Chrome/Safari */
.thumbnails-container::-webkit-scrollbar {
  display: none;
}

.thumbnail-item-wrapper {
  flex-shrink: 0;
  height: calc((100% - 20px) / 6); /* 6 элементов с учетом отступов */
  min-height: 60px;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.thumbnail-item {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transition: all 0.2s ease;
  border: 2px solid transparent;
}

/* Активная миниатюра */
.thumbnail-item.active {
  border-color: #7b1fa2;
  box-shadow: 0 0 0 2px rgba(123, 31, 162, 0.3);
}

/* Кастомные стрелки */
.thumb-nav-btn {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  opacity: 0.9;
  transition: opacity 0.2s;
}

.thumb-nav-btn:hover {
  opacity: 1;
}

.thumb-nav-btn.top {
  top: 4px;
}

.thumb-nav-btn.bottom {
  bottom: 4px;
}

/* Колонка главного изображения */
.main-image-column {
  flex-grow: 1;
  position: relative;
}

/* Адаптивность */
@media (max-width: 600px) {
  .gallery-wrapper {
    height: 400px;
  }
  .thumbnails-column {
    width: 50px;
  }
  .thumbnail-item-wrapper {
    height: calc((100% - 16px) / 6);
    min-height: 40px;
  }
}
</style>
