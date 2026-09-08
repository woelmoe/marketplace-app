<template>
  <v-sheet class="pa-4 mb-4">
    <v-row dense>
      <v-col
        v-for="prop in props.product.properties"
        :key="prop.key"
        cols="12"
        sm="6"
      >
        <div class="d-flex flex-column">
          <span class="text-body-2 text-grey">{{ prop.key }}</span>
          <span class="font-weight-medium text-grey-darken-1">{{
            prop.value
          }}</span>
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

const props = defineProps<IProps>()
</script>
