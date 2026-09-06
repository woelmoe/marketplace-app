<template>
  <v-main>
    <v-container class="product-page">
      <v-row>
        <v-col cols="12" md="6">
          <v-row class="d-flex" no-gutters>
            <v-col cols="9">
              <ProductGallery :product="currentProduct" />
            </v-col>
          </v-row>
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
  </v-main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { LocalStorageKeys, type Product } from '~/assets/types/types'
import { useProductsStore } from '~/stores/product'

const router = useRouter()

const store = useProductsStore()
const { currentProduct } = storeToRefs(store)
const { setCurrentProduct } = store

const selectedImageIndex = ref(0)

function setProductFromLocalStorage() {
  const productStr = localStorage.getItem(LocalStorageKeys.currentProduct)
  if (!productStr) {
    router.push('/')
    return
  }

  const value: Product = JSON.parse(productStr)
  setCurrentProduct(value)
}

onMounted(() => {
  setProductFromLocalStorage()
})

watch(currentProduct, () => {
  selectedImageIndex.value = 0
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
