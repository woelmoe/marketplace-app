<template>
  <v-sheet class="pa-4 rounded mb-4" color="grey-lighten-4">
    <v-row dense>
      <v-col
        v-for="(value, key) in product.properties"
        :key="key"
        cols="12"
        sm="6"
      >
        <div class="d-flex flex-column">
          <span class="text-body-2 text-grey">{{ key }}</span>
          <span class="font-weight-medium text-grey-darken-3">{{ value }}</span>
        </div>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup lang="ts">
import type { Product } from '~/assets/types/types'

interface IProps {
  product: Product
}

defineProps<IProps>()
</script>
