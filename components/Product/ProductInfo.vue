<template>
  <div>
    <div v-if="!product">
      <v-skeleton-loader
        type="chip, heading, text"
        class="mb-4"
      ></v-skeleton-loader>
    </div>

    <template v-else>
      <h1 class="text-h4 font-weight-bold mb-2">
        {{ product.title }}
      </h1>

      <div class="d-flex align-center mb-4">
        <v-rating
          :model-value="product.rating"
          readonly
          dense
          size="20"
          color="warning"
        />
        <!-- Используем вычисляемое свойство -->
        <span class="text-body-2 text-grey ml-2">
          {{ ratingText }}
        </span>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Product } from '~/assets/types/types'

interface IProps {
  product: Product | undefined
}

const props = defineProps<IProps>()

const ratingText = computed(() => {
  if (props.product && props.product.rating > 0) {
    return `${props.product.rating} оценок`
  }
  return 'Нет оценок'
})
</script>
