<template>
  <v-container>
    <v-btn @click="router.back()" prepend-icon="mdi-arrow-left" class="mb-4">
      Назад
    </v-btn>

    <v-row v-if="product">
      <v-col cols="12" md="6">
        <v-img :src="product.image" height="400" cover class="rounded" />
      </v-col>
      <v-col cols="12" md="6">
        <h1 class="text-h3">{{ product.name }}</h1>
        <p class="text-h4 text-primary mt-4">{{ product.price }} ₽</p>
        <p class="text-body-1 mt-4">
          {{ product.description || "Описание товара" }}
        </p>
        <v-btn color="primary" size="x-large" class="mt-4">
          Добавить в корзину
        </v-btn>
      </v-col>
    </v-row>

    <v-row v-else-if="!loading">
      <v-col cols="12" class="text-center">
        <h1 class="text-h2">Товар не найден</h1>
        <v-btn to="/" class="mt-4">Вернуться на главную</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const loading = ref(true);

// Ваши продукты
const products = [
  {
    id: 1,
    name: "Товар 1",
    price: 1000,
    image: "/images/product1.jpg",
    description: "Описание товара 1",
  },
  {
    id: 2,
    name: "Товар 2",
    price: 2000,
    image: "/images/product2.jpg",
    description: "Описание товара 2",
  },
  {
    id: 3,
    name: "Товар 3",
    price: 1500,
    image: "/images/product3.jpg",
    description: "Описание товара 3",
  },
];

// Находим товар по ID
const product = computed(() => {
  const id = Number(route.params.id);
  return products.find((p) => p.id === id);
});

// Проверяем загрузку
onMounted(() => {
  loading.value = false;

  // Если товар не найден, показываем 404
  if (!product.value) {
    throw createError({
      statusCode: 404,
      statusMessage: "Товар не найден",
    });
  }
});
</script>
