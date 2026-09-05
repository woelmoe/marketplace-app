<template>
  <div>
    <!-- Цена -->
    <div class="mb-4">
      <span class="text-h4 font-weight-bold text-primary"> {{ price }} ₽ </span>
      <span
        v-if="oldPrice"
        class="text-body-1 text-grey ml-2"
        style="text-decoration: line-through"
      >
        {{ oldPrice }} ₽
      </span>
    </div>

    <!-- Кнопки -->
    <v-row dense>
      <v-col cols="12" sm="6">
        <v-btn
          color="primary"
          size="large"
          block
          prepend-icon="mdi-cart"
          @click="addToCart"
        >
          Добавить в корзину
        </v-btn>
      </v-col>
      <v-col cols="12" sm="6">
        <v-btn
          color="success"
          size="large"
          block
          variant="tonal"
          prepend-icon="mdi-flash"
          @click="buyNow"
        >
          Купить сейчас
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  addToCart: [];
  buyNow: [];
}>();

defineProps<{
  price: number;
  oldPrice?: number;
}>();

const addToCart = () => {
  emit("addToCart");
};

const buyNow = () => {
  emit("buyNow");
};
</script>
