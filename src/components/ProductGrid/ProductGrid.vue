<template>
  <v-container fluid class="pa-4 bg-grey-lighten-5">
    <v-row dense>
      <v-col v-for="product in products" :key="product.id" cols="6" sm="4" md="3" lg="2" xl="2">
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Product } from '../ProductCard/types.ts'
import ProductCard from '../ProductCard/ProductCard.vue'

// Мок-данные на основе вашего скриншота
const products = ref<Product[]>([
  {
    id: 1,
    title: 'Nike Air Force 1 / Кроссовки кедры air f...',
    price: 2281,
    oldPrice: 7603,
    discount: 70,
    rating: 4.7,
    reviews: 193,
    isFavorite: false,
    badgeText: 'ХОРОШАЯ ЦЕНА',
    badgeColor: 'purple',
    deliveryDate: '8 сентября',
  },
  {
    id: 2,
    title: 'DOLPHINSPORT / Бутсы сороконож...',
    price: 1278,
    oldPrice: 6000,
    discount: 79,
    rating: 4.9,
    reviews: 198,
    isFavorite: true,
    isFastView: true,
    deliveryDate: '9 сентября',
  },
  {
    id: 3,
    title: 'AM / Матрас 160x200 на кроват...',
    price: 14019,
    oldPrice: 16000,
    discount: 12,
    rating: 4.9,
    reviews: 1487,
    isFavorite: false,
    badgeText: 'ХОРОШАЯ ЦЕНА',
    badgeColor: 'purple',
    deliveryDate: '11 сентября',
  },
  {
    id: 4,
    title: 'Просвещение / Комплект рабочих ...',
    price: 1914,
    oldPrice: 4000,
    discount: 53,
    rating: 5,
    reviews: 271,
    isFavorite: false,
    badgeText: 'ХОРОШАЯ ЦЕНА',
    badgeColor: 'purple',
    deliveryDate: '10 сентября',
  },
  {
    id: 5,
    title: 'QiO / Инозитол 1500 мг с витамином...',
    price: 1928,
    oldPrice: 3000,
    discount: 43,
    rating: 4.9,
    reviews: 1226,
    isFavorite: false,
    deliveryDate: '10 сентября',
  },
  {
    id: 6,
    title: 'Скидки место и клавиатура с подсв...',
    price: 264,
    oldPrice: 1000,
    discount: 74,
    rating: 4.8,
    reviews: 231,
    isFavorite: false,
    badgeText: 'ХОРОШАЯ ЦЕНА',
    badgeColor: 'purple',
    deliveryDate: '9 сентября',
  },
  // Добавьте остальные товары из скриншота по аналогии...
])
</script>
