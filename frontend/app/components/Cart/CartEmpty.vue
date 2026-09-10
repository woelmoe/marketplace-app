<template>
  <v-empty-state
    icon="mdi-cart-outline"
    title="Корзина пуста"
    text="Добавьте товары, чтобы оформить заказ"
  >
    <template #actions>
      <v-btn color="primary" to="/" variant="flat"> Перейти в каталог </v-btn>
    </template>
  </v-empty-state>
</template>

<script setup lang="ts"></script>
