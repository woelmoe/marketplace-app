<template>
  <v-main>
    <v-container class="product-page">
      <v-row>
        <v-col cols="12" md="6">
          1
          <ProductImage :product="currentProduct" />
        </v-col>

        <v-col cols="12" md="6">
          2

          <div v-if="!currentProduct">
            <v-skeleton-loader
              type="heading, text, image, paragraph"
              class="mb-4"
            ></v-skeleton-loader>
          </div>

          <template v-else>
            <ProductInfo :product="currentProduct" />

            <ProductCharacteristics :product="currentProduct" />

            <!-- <ProductAdditionalInfo :items="additionalInfo" /> -->

            <!-- <ProductDescription :description="product.description" /> -->

            <!-- <ProductActions
            :price="product.price"
            :old-price="product.oldPrice"
            @add-to-cart="handleAddToCart"
            @buy-now="handleBuyNow"
            />
            
            <ProductDelivery
            :delivery-date="product.deliveryDate"
            :seller="product.seller"
            :rating="product.sellerRating"
            /> -->
          </template>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import { LocalStorageKeys, type Product } from '~/assets/types/types'
import { useProductsStore } from '~/stores/product'

const router = useRouter()

const store = useProductsStore()
const { currentProduct } = storeToRefs(store)
const { setCurrentProduct } = store

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
