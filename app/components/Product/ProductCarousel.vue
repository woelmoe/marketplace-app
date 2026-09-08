<template>
  <v-carousel
    v-if="product?.imgs?.length"
    v-model="currentSlide"
    class="product-carousel"
    hide-delimiters
    height="100%"
    cycle
    interval="5000"
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="(image, index) in product.imgs"
      :key="index"
      :src="image"
      cover
    >
    </v-carousel-item>

    <!-- <template #prev="{ props }">
      <v-btn
        class="custom-carousel-btn"
        v-bind="props"
        color="white"
        size="large"
        variant="elevated"
        icon="mdi-chevron-up"
      ></v-btn>
    </template>

    <template #next="{ props }">
      <v-btn
        class="custom-carousel-btn"
        v-bind="props"
        color="white"
        size="large"
        variant="elevated"
        icon="mdi-chevron-down"
      ></v-btn>
    </template> -->
  </v-carousel>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Product } from '~/assets/types/types'

interface IProps {
  product: Product | undefined
}
const props = defineProps<IProps>()
const currentSlide = ref(0)
</script>

<style scoped>
.product-carousel {
  border-radius: 12px;
  overflow: hidden;
  flex-direction: column;
}

/* Стили для кастомных круглых стрелок */
.custom-carousel-btn {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Позиционируем верхнюю стрелку */
.custom-carousel-btn {
  top: 20px;
}

/* Позиционируем нижнюю стрелку */
.custom-carousel-btn {
  bottom: 20px;
}
</style>
