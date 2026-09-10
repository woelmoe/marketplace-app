<template>
  <v-card variant="tonal" rounded="lg" class="pa-4 sticky-summary">
    <h2 class="text-h6 mb-4">Итого</h2>

    <div class="d-flex justify-space-between mb-2">
      <span class="text-body-2 text-medium-emphasis">
        Товары ({{ count }})
      </span>
      <span class="text-body-2">{{ formatPrice(totalPrice) }}</span>
    </div>

    <div class="d-flex justify-space-between mb-2">
      <span class="text-body-2 text-medium-emphasis">Доставка</span>
      <span class="text-body-2">Бесплатно</span>
    </div>

    <v-divider class="my-4" />

    <div class="d-flex justify-space-between mb-6">
      <span class="text-subtitle-1 font-weight-medium">К оплате</span>
      <span class="text-subtitle-1 font-weight-bold">
        {{ formatPrice(totalPrice) }}
      </span>
    </div>

    <v-btn
      color="primary"
      size="large"
      block
      :loading="loading"
      @click="emit('checkout')"
    >
      Оформить заказ
    </v-btn>
  </v-card>
</template>

<script setup lang="ts">
import { usePriceFormat } from './composables/usePriceFormat'

interface IProps {
  count: number
  totalPrice: number
  loading?: boolean
}

interface IEmit {
  (e: 'checkout'): void
}

withDefaults(defineProps<IProps>(), {
  loading: false
})

const emit = defineEmits<IEmit>()

const { formatPrice } = usePriceFormat()
</script>

<style scoped>
.sticky-summary {
  position: sticky;
  top: 80px; /* высота v-app-bar + отступ */
}
</style>
