<template>
  <v-container class="cart-page" max-width="1200">
    <h1 class="text-h4 mb-6">Корзина</h1>

    <!-- Пустая корзина -->
    <v-empty-state
      v-if="cart.isEmpty"
      icon="mdi-cart-outline"
      title="Корзина пуста"
      text="Добавьте товары, чтобы оформить заказ"
    >
      <template #actions>
        <v-btn color="primary" to="/" variant="flat"> Перейти в каталог </v-btn>
      </template>
    </v-empty-state>

    <!-- Содержимое корзины -->
    <v-row v-else>
      <!-- Список товаров -->
      <v-col cols="12" md="8">
        <v-card variant="flat" rounded="lg">
          <v-list lines="two">
            <template v-for="(item, i) in cart.items" :key="item.id">
              <v-list-item>
                <template #prepend>
                  <v-avatar rounded size="64" class="mr-4">
                    <v-img
                      :src="item.image || '/placeholder.png'"
                      :alt="item.name"
                      cover
                    />
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
                      icon="mdi-minus"
                      size="small"
                      variant="text"
                      :disabled="item.quantity <= 1"
                      @click="cart.decrement(item.id)"
                    />

                    <span class="quantity">{{ item.quantity }}</span>

                    <v-btn
                      icon="mdi-plus"
                      size="small"
                      variant="text"
                      @click="cart.increment(item.id)"
                    />

                    <v-btn
                      icon="mdi-delete-outline"
                      size="small"
                      variant="text"
                      color="error"
                      class="ml-2"
                      @click="cart.remove(item.id)"
                    />
                  </div>
                </template>
              </v-list-item>

              <v-divider v-if="i < cart.items.length - 1" />
            </template>
          </v-list>
        </v-card>

        <div class="d-flex justify-space-between mt-4">
          <v-btn variant="text" prepend-icon="mdi-arrow-left" to="/">
            Продолжить покупки
          </v-btn>

          <v-btn
            variant="text"
            color="error"
            prepend-icon="mdi-trash-can-outline"
            @click="onClear"
          >
            Очистить корзину
          </v-btn>
        </div>
      </v-col>

      <!-- Итог -->
      <v-col cols="12" md="4">
        <v-card variant="tonal" rounded="lg" class="pa-4 sticky-summary">
          <h2 class="text-h6 mb-4">Итого</h2>

          <div class="d-flex justify-space-between mb-2">
            <span class="text-body-2 text-medium-emphasis">
              Товары ({{ cart.count }})
            </span>
            <span class="text-body-2">{{ formatPrice(cart.totalPrice) }}</span>
          </div>

          <div class="d-flex justify-space-between mb-2">
            <span class="text-body-2 text-medium-emphasis">Доставка</span>
            <span class="text-body-2">Бесплатно</span>
          </div>

          <v-divider class="my-4" />

          <div class="d-flex justify-space-between mb-6">
            <span class="text-subtitle-1 font-weight-medium">К оплате</span>
            <span class="text-subtitle-1 font-weight-bold">
              {{ formatPrice(cart.totalPrice) }}
            </span>
          </div>

          <v-btn
            color="primary"
            size="large"
            block
            :loading="isSubmitting"
            @click="onCheckout"
          >
            Оформить заказ
          </v-btn>
        </v-card>
      </v-col>
    </v-row>

    <!-- Снекбар -->
    <v-snackbar v-model="snackbar.show" :color="snackbar.color" timeout="2500">
      {{ snackbar.text }}
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '~/stores/cart'

const cart = useCartStore()
const router = useRouter()

const isSubmitting = ref(false)

const snackbar = reactive({
  show: false,
  text: '',
  color: 'success'
})

const formatPrice = (value: number) =>
  new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0
  }).format(value)

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
    // TODO: заменить на реальный вызов API
    // await orderApi.create({ items: cart.items, total: cart.totalPrice })
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

<style scoped lang="scss">
.cart-page {
  padding-top: 24px;
  padding-bottom: 48px;
}

.quantity {
  min-width: 24px;
  text-align: center;
  font-variant-numeric: tabular-nums;
}

.sticky-summary {
  position: sticky;
  top: 80px; /* высота v-app-bar + отступ */
}
</style>
