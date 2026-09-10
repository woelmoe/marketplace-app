<template>
  <div class="gallery-root">
    <v-row class="gallery-wrapper" no-gutters>
      <v-col cols="auto" class="thumbnails-column">
        <div class="thumbnails-container" ref="thumbnailsContainer">
          <div
            v-for="(img, index) in product?.imgs"
            :key="index"
            class="thumbnail-item-wrapper cursor-pointer"
            @mouseenter="selectedIndex = index"
          >
            <v-img
              :src="img"
              class="thumbnails-img rounded-xl border-sm"
              :class="{ 'thumbnails-img--active': index === selectedIndex }"
            />
          </div>
        </div>

        <ThumbNavButton
          icon="mdi-chevron-up"
          position="top"
          @click="scrollThumbnails(-1)"
        />

        <ThumbNavButton
          icon="mdi-chevron-down"
          position="bottom"
          @click="scrollThumbnails(1)"
        />
      </v-col>

      <v-col>
        <ProductImage :product :selected-index="selectedIndex" />
      </v-col>
    </v-row>

    <div v-if="product" class="d-flex align-center justify-end mt-10">
      <v-btn
        v-if="!inCart"
        color="primary"
        size="large"
        style="width: 100%"
        variant="flat"
        @click="onAddToCart"
      >
        <v-icon color="icon" size="20" class="mr-2">mdi-cart-plus</v-icon>
        В корзину
      </v-btn>

      <div v-else class="d-flex align-center ga-2">
        <v-btn
          icon
          size="small"
          variant="tonal"
          @click="cart.decrement(product.id)"
        >
          <v-icon size="20">mdi-minus</v-icon>
        </v-btn>

        <span class="quantity">{{ cart.itemById(product.id)?.quantity }}</span>

        <v-btn
          icon
          size="small"
          variant="tonal"
          @click="cart.increment(product.id)"
        >
          <v-icon size="20">mdi-plus</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Product } from '~/assets/types/types'
import ThumbNavButton from './ThumbNavButton.vue'
import { usePriceFormat } from '../Cart/composables/usePriceFormat.ts'

interface IProps {
  product: Product | undefined
}

const props = defineProps<IProps>()

const cart = useCartStore()
const { formatPrice } = usePriceFormat()

const selectedIndex = ref(0)
const thumbnailsContainer = ref<HTMLElement | null>(null)

const ITEMS_PER_VIEW = 6

const inCart = computed(() =>
  props.product ? !!cart.itemById(props.product.id) : false
)

const onAddToCart = () => {
  if (!props.product) return

  cart.add({
    id: props.product.id,
    name: props.product.title,
    price: props.product.price,
    image: props.product.imgs?.at(0)
  })
}

function scrollThumbnails(direction: number) {
  const container = thumbnailsContainer.value
  if (!container) return

  const itemHeight = container.scrollHeight / (props.product?.imgs?.length || 1)
  const scrollAmount = itemHeight * ITEMS_PER_VIEW

  container.scrollBy({
    top: direction * scrollAmount,
    behavior: 'smooth'
  })
}
</script>

<style scoped lang="scss">
.gallery-root {
  width: 100%;
}

.gallery-wrapper {
  height: 600px;
  display: flex;
  gap: 8px;
}

.thumbnails-column {
  width: 80px;
  position: relative;
  flex-shrink: 0;
  height: 100%;
}

.thumbnails-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 4px 0;
  border-radius: 8px;
}

.thumbnails-img {
  &--active {
    outline: 2px solid rgb(var(--v-theme-info));
    outline-offset: -2px;
  }
}

/* Скрываем скроллбар для Chrome/Safari */
.thumbnails-container::-webkit-scrollbar {
  display: none;
}

.thumbnail-item-wrapper {
  flex-shrink: 0;
  height: calc((100% - 20px) / 6);
  min-height: 60px;
}

.main-image-column {
  flex-grow: 1;
  position: relative;
}

.quantity {
  min-width: 32px;
  text-align: center;
  font-variant-numeric: tabular-nums;
  font-weight: 500;
}
</style>
