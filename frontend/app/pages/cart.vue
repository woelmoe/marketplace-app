<template>
  <v-container class="cart-page" max-width="1200">
    <h1 class="text-h4 mb-6">Корзина</h1>

    <CartEmpty v-if="cart.isEmpty" />

    <v-row v-else>
      <v-col cols="12" md="8">
        <CartItemsList
          :items="cart.items"
          @increment="cart.increment"
          @decrement="cart.decrement"
          @remove="cart.remove"
          @clear="onClear"
        />
      </v-col>

      <v-col cols="12" md="4">
        <CartSummary
          :count="cart.count"
          :total-price="cart.totalPrice"
          :loading="isSubmitting"
          @checkout="onCheckout"
        />
      </v-col>
    </v-row>

    <v-snackbar v-model="snackbar.show" :color="snackbar.color" timeout="2500">
      {{ snackbar.text }}
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '~/stores/cart'
import CartEmpty from '~/components/Carts/CartEmpty.vue'
import CartItemsList from '~/components/Carts/CartItemsList.vue'
import CartSummary from '~/components/Carts/CartSummary.vue'

const cart = useCartStore()
const router = useRouter()

const isSubmitting = ref(false)

const snackbar = reactive({
  show: false,
  text: '',
  color: 'success'
})

const notify = (text: string, color: 'success' | 'error' = 'success') => {
  snackbar.text = text
  snackbar.color = color
  snackbar.show = true
}

const onClear = () => {
  cart.clear()
  notify('Корзина очищена')
}

const onCheckout = async () => {
  if (cart.isEmpty) return

  isSubmitting.value = true

  try {
    // НЕ БУДЕТ РЕАЛИЗОВАНО: заменить на реальный вызов API
    await new Promise((r) => setTimeout(r, 700))

    cart.clear()
    notify('Заказ оформлен!')
    router.push('/')
  } catch (e) {
    console.error('Ошибка оформления заказа:', e)
    notify('Не удалось оформить заказ', 'error')
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  cart.hydrate()
})
</script>

<style scoped>
.cart-page {
  padding-top: 24px;
  padding-bottom: 48px;
}
</style>
