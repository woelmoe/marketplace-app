<template>
  <v-sheet class="pa-4 mb-4">
    <v-row dense>
      <v-col v-for="prop in propertiesList" :key="prop.key" cols="12" sm="6">
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
import { computed } from 'vue'
import type { Product } from '~/assets/types/types'

interface IProps {
  product: Product
}

const props = defineProps<IProps>()

const propertiesList = computed(() => {
  if (!props.product.properties || !Array.isArray(props.product.properties)) {
    return []
  }

  return props.product.properties.map((item) => {
    return {
      key: Object.keys(item)[0] as string,
      value: Object.values(item)[0] as string
    }
  })
})
</script>
