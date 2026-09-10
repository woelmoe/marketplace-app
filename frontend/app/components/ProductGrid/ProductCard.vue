<template>
  <v-card variant="flat">
    <NuxtLink
      :to="`/products/${product.id}`"
      class="product-link"
      @click="setCurrentProduct(product)"
    >
      <v-img height="285" cover class="rounded-lg" :src="product.imgs?.at(0)">
        <template #placeholder>
          <v-sheet
            class="d-flex align-center justify-center fill-height"
            color="background"
          >
          </v-sheet>
        </template>
      </v-img>

      <v-card-title>
        <span class="text-warning">{{ product.price }} ₽</span>
        <s class="text-title-small pl-2 text-primary"
          >{{ product.old_price }} ₽</s
        >
      </v-card-title>
      <v-card-subtitle>{{ product.title }}</v-card-subtitle>
    </NuxtLink>

    <v-btn
      class="mt-1"
      width="100%"
      color="primary"
      variant="flat"
      @click.stop="onAddToCart"
    >
      <v-icon icon="mdi-cart" class="mr-2"></v-icon>
      <span class="text-white">{{
        $dayjs(product.delivery_date).format('D MMMM')
      }}</span>
    </v-btn>
  </v-card>
</template>

<script setup lang="ts">
import type { Product } from '~/assets/types/types'

interface IProps {
  product: Product
}
const props = defineProps<IProps>()

const { setCurrentProduct } = useProductsStore()
const cart = useCartStore()

const onAddToCart = () => {
  cart.add({
    id: props.product.id,
    name: props.product.title,
    price: props.product.price,
    image: props.product.imgs?.at(0)
  })
}
</script>

<style scoped></style>
