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
          <!-- <ProductInfo
            :name="product.name"
            :rating="product.rating"
            :sale="!!product.oldPrice"
          /> -->

          <!-- <ProductCharacteristics :characteristics="characteristics" /> -->

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
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import type { Product } from '~/assets/types/types'
import { useProductsStore } from '~/stores/product'

const route = useRoute()
const router = useRouter()

const { currentProduct } = useProductsStore()
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
