<template>
  <div>
    <v-card variant="flat" rounded="lg">
      <v-list lines="two">
        <template v-for="(item, i) in items" :key="item.id">
          <CartItemRow
            :item="item"
            @increment="emit('increment', $event)"
            @decrement="emit('decrement', $event)"
            @remove="emit('remove', $event)"
          />

          <v-divider v-if="i < items.length - 1" />
        </template>
      </v-list>
    </v-card>

    <div class="d-flex justify-space-between mt-4">
      <v-btn variant="text" to="/">
        <v-icon color="icon" class="mr-2" size="20">mdi-arrow-left</v-icon>
        Продолжить покупки
      </v-btn>

      <v-btn variant="text" color="error" @click="emit('clear')">
        <v-icon color="error" class="mr-2" size="20">mdi-trash-can-outline</v-icon>
        Очистить корзину
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import CartItemRow from './CartItemRow.vue'
import type { ICartItem } from './types'

interface IProps {
  items: ICartItem[]
}

interface IEmit {
  (e: 'increment', id: ICartItem['id']): void
  (e: 'decrement', id: ICartItem['id']): void
  (e: 'remove', id: ICartItem['id']): void
  (e: 'clear'): void
}

defineProps<IProps>()
const emit = defineEmits<IEmit>()
</script>
