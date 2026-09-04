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
import type { Product } from './types.ts'
import ProductCard from './ProductCard.vue'

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
    imgs: [
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
    ],
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
    imgs: [
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADLSURBVCiRjZK9SgNBFIVnZicQLCxsREh+wEaFYGFpk9bGR7BURGxUCDaFhYWFP4KtjfgJFBQrRLCJO5ndmTm+gojZncs9nHO+75u5DPwHVOK5T/7c8yTnxX5A74HuXaCH4MhPld9hSa6D3aZt22PgwpHMcB4eZIgNcBK8BQ4BKxt1suAkeAE+Gw6PAJMAtIBxEAfHM9u+x3LKmLX3cMvf3XfO9vtpX7R2zLZfIP7fgzq4gQwCsvLmGevIFYH/iYydD2+9eugPkv8vY/2JA1QAAAAASUVORK5CYII=',
    ],
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
    imgs: [
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADKSURBVCiRjZK9SgNBFIVnZifGwsLGRoTkB2xUCBaWNmltfARLRcROhWATaWFhIRZBEysRP4GCYpUINu5kdmfm+AoiZncu93LO9907l4H/gEo8TxSe8rwoeLEf0HugexfoITgKOPQ7w1JcB7tN27bHwJknieA8PKqQmOAkeAscAVY26mTBSXACfDYcHgFWBNAKJoA4N57Z9j2uVhmz9gru+bv/uDkCzvtpe7O0475A4t8CdXADGQRk5S0w1pErCQD1ImP7w1uve/oDExkvYx2JA1QAAAAASUVORK5CYII=',
    ],
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
    imgs: [
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADKSURBVCiRjZK9SgNBFIVnZid/UbGwtREh+QEbFYKFpU1aGx/BUhGxU0Gw8w0stE1jYxG0tRGfQEGxSgQbdzK7M3N8BRGzO5d7Oef77p3LwH9AJZ4nCk95XhS82A/oPdC9C/QQHAUc+l3MFNfBbtO27TFw5klOeA6PKsQmOAneAkeAlY06WXASnACfjYdHgBUBtIAJIM6NZ7Z9j6tVxqy9gnv+7p9zR8B5P21vlnbcF0j8W6AObiCDgKy8BcY6YkUCsPUi0/7+1quE/gA3aS9j7YgD1MUAAAAASUVORK5CYII=',
    ],
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
    imgs: [
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mNk+M9Qz0AEYBxVSF+FABJADveW2H7oAAAAAElFTkSuQmCC',
    ],
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
    imgs: [
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
    ],
  },
  // Добавьте остальные товары из скриншота по аналогии...
])
</script>
