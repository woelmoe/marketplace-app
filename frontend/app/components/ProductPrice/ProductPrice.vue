<template>
  <div class="d-flex align-baseline ga-2">
    <span :class="priceClass">
      {{ formatPrice(price) }}
    </span>

    <s v-if="oldPrice" :class="oldPriceClass">
      {{ formatPrice(oldPrice) }}
    </s>
  </div>
</template>

<script setup lang="ts">
import { usePriceFormat } from '../Cart/composables/usePriceFormat'

interface IProps {
  price: number
  oldPrice?: number
  priceClass?: string
  oldPriceClass?: string
}

withDefaults(defineProps<IProps>(), {
  priceClass: 'text-warning',
  oldPriceClass: 'text-title-small text-primary'
})

const { formatPrice } = usePriceFormat()
</script>
