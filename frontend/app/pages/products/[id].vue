<template>
  <v-container class="product-page">
    <v-row>
      <v-col cols="12" md="5">
        <ProductGallery :product="currentProduct" />
      </v-col>

      <v-col cols="12" md="6">
        <div v-if="!currentProduct">
          <v-skeleton-loader
            type="heading, text, image, paragraph"
            class="mb-4"
          ></v-skeleton-loader>
        </div>

        <template v-else>
          <ProductInfo :product="currentProduct" />
          <ProductProperties :product="currentProduct" />
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { LocalStorageKeys, type Product } from '~/assets/types/types'
import { useProductsStore } from '~/stores/product'

const productStore = useProductsStore()
const { currentProduct } = storeToRefs(productStore)
const { setCurrentProduct } = productStore

const selectedImageIndex = ref(0)

async function setProductFromApi(id: number) {
  const product = await productApi.getById(id)
  setCurrentProduct(product)
}

function setProductFromLocalStorage() {
  const productStr = localStorage.getItem(LocalStorageKeys.currentProduct)
  if (!productStr) {
    return
  }

  const value: Product = JSON.parse(productStr)
  setCurrentProduct(value)
}

watch(currentProduct, () => {
  selectedImageIndex.value = 0
})

onMounted(() => {
  if (currentProduct.value) {
    setProductFromApi
  } else {
    setProductFromLocalStorage()
  }
})
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
