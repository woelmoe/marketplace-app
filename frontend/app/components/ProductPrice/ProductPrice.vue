<template>
  <div class="d-flex align-baseline ga-2">
    <span :class="priceClass">
      {{ formatPrice(product.price) }}
    </span>

    <s v-if="product.old_price" :class="oldPriceClass">
      {{ formatPrice(product.old_price) }}
    </s>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/assets/types/types'
import { usePriceFormat } from '../Cart/composables/usePriceFormat'

interface IProps {
  product: Product
  priceClass?: string
  oldPriceClass?: string
}

withDefaults(defineProps<IProps>(), {
  priceClass: 'text-warning',
  oldPriceClass: 'text-title-small text-primary'
})

const { formatPrice } = usePriceFormat()
</script>
