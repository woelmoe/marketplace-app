<template>
  <v-list-item>
    <template #prepend>
      <v-avatar rounded size="64" class="mr-4">
        <v-img :src="item.image || '/placeholder.png'" :alt="item.name" cover />
      </v-avatar>
    </template>

    <v-list-item-title class="text-body-1 font-weight-medium">
      {{ item.name }}
    </v-list-item-title>

    <v-list-item-subtitle>
      {{ formatPrice(item.price) }} за шт.
    </v-list-item-subtitle>

    <template #append>
      <div class="d-flex align-center ga-2">
        <v-btn
          icon
          size="small"
          variant="text"
          :disabled="item.quantity <= 1"
          @click="emit('decrement', item.id)"
        >
          <v-icon color="icon" size="20">mdi-minus</v-icon>
        </v-btn>

        <span class="quantity">{{ item.quantity }}</span>

        <v-btn
          icon
          size="small"
          variant="text"
          @click="emit('increment', item.id)"
        >
          <v-icon color="icon" size="20">mdi-plus</v-icon>
        </v-btn>

        <v-btn
          icon
          size="small"
          variant="text"
          class="ml-2"
          @click="emit('remove', item.id)"
        >
          <v-icon color="error" size="20">mdi-delete-outline</v-icon>
        </v-btn>
      </div>
    </template>
  </v-list-item>
</template>

<script setup lang="ts">
import { usePriceFormat } from './composables/usePriceFormat'
import type { ICartItem } from './types'

interface IProps {
  item: ICartItem
}

interface IEmit {
  (e: 'increment', id: ICartItem['id']): void
  (e: 'decrement', id: ICartItem['id']): void
  (e: 'remove', id: ICartItem['id']): void
}

defineProps<IProps>()
const emit = defineEmits<IEmit>()

const { formatPrice } = usePriceFormat()
</script>

<style scoped>
.quantity {
  min-width: 24px;
  text-align: center;
  font-variant-numeric: tabular-nums;
}
</style>
