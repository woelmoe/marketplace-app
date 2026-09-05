<template>
  <v-container class="product-page">
    <!-- Хлебные крошки -->
    <ProductBreadcrumbs :items="breadcrumbs" />

    <v-row>
      <v-col cols="12" md="6">
        <!-- Изображение -->
        <ProductImage :image="product.image" :name="product.name" />
      </v-col>

      <v-col cols="12" md="6">
        <!-- Информация о товаре -->
        <ProductInfo
          :name="product.name"
          :rating="product.rating"
          :sale="!!product.oldPrice"
        />

        <!-- Характеристики -->
        <ProductCharacteristics :characteristics="characteristics" />

        <!-- Дополнительная информация -->
        <ProductAdditionalInfo :items="additionalInfo" />

        <!-- Описание -->
        <ProductDescription :description="product.description" />

        <!-- Действия -->
        <ProductActions
          :price="product.price"
          :old-price="product.oldPrice"
          @add-to-cart="handleAddToCart"
          @buy-now="handleBuyNow"
        />

        <!-- Доставка -->
        <ProductDelivery
          :delivery-date="product.deliveryDate"
          :seller="product.seller"
          :rating="product.sellerRating"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import ProductActions from "~/components/Product/ProductActions.vue";
import ProductAdditionalInfo from "~/components/Product/ProductAdditionalInfo.vue";
import ProductBreadcrumbs from "~/components/Product/ProductBreadcrumbs.vue";
import ProductCharacteristics from "~/components/Product/ProductCharacteristics.vue";
import ProductDelivery from "~/components/Product/ProductDelivery.vue";
import ProductDescription from "~/components/Product/ProductDescription.vue";
import ProductImage from "~/components/Product/ProductImage.vue";
import ProductInfo from "~/components/Product/ProductInfo.vue";

const route = useRoute();
const router = useRouter();

// Хлебные крошки
const breadcrumbs = ref([
  { title: "Главная", to: "/" },
  { title: "Мебель", to: "/catalog/furniture" },
  { title: "По помещениям", to: "/catalog/furniture/rooms" },
  { title: "Гостиная", to: "/catalog/furniture/rooms/living" },
  { title: "Диваны", to: "/catalog/furniture/rooms/living/sofas" },
]);

// Данные товара
const product = ref({
  id: 1,
  name: "Мини диван 1180x540x740",
  price: 9990,
  oldPrice: 12990,
  rating: 0,
  article: "619177306",
  upholstery: "Велюр",
  material: "ЛДСП",
  legs: "пластик",
  bedWidth: "54 см",
  firmness: "жесткая",
  style: "Классический",
  description:
    "Уютный мини-диван идеально подходит для небольших помещений. Компактный размер позволяет разместить его даже в малогабаритных гостиных. Мягкая обивка из велюра приятна на ощупь и устойчива к износу.",
  image: "/images/sofa.jpg",
  deliveryDate: "10 октября",
  seller: "САЛОН МЕБЕЛИ",
  sellerRating: 0,
});

// Характеристики для компонента
const characteristics = computed(() => ({
  article: { label: "Артикул", value: product.value.article },
  upholstery: { label: "Материал обивки", value: product.value.upholstery },
  material: { label: "Материал корпуса", value: product.value.material },
  legs: { label: "Материал ножек", value: product.value.legs },
}));

// Дополнительная информация
const additionalInfo = computed(() => ({
  bedWidth: { label: "Ширина спального места", value: product.value.bedWidth },
  firmness: { label: "Жесткость", value: product.value.firmness },
  style: { label: "Стиль дизайна", value: product.value.style, cols: 12 },
}));

// Похожие товары (заглушка)
const relatedProducts = ref([
  { id: 2, name: "Диван угловой", price: 15990, image: "/images/sofa2.jpg" },
  { id: 3, name: "Диван-книжка", price: 12990, image: "/images/sofa3.jpg" },
]);

// Обработчики событий
const handleAddToCart = () => {
  console.log("Добавлено в корзину:", product.value.id);
  // Логика добавления в корзину
};

const handleBuyNow = () => {
  console.log("Купить сейчас:", product.value.id);
  router.push("/checkout");
};

const handleViewAll = () => {
  router.push("/catalog/furniture/rooms/living/sofas");
};

// Загрузка данных с API
const { data, error } = await useFetch(`/api/products/${route.params.id}`);

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Товар не найден",
  });
}

if (data.value) {
  product.value = data.value;
}
</script>

<style scoped>
.product-page {
  padding-top: 20px;
  padding-bottom: 40px;
}

@media (max-width: 600px) {
  .product-page {
    padding-top: 10px;
    padding-bottom: 20px;
  }
}
</style>
