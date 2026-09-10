<template>
  <v-navigation-drawer v-model="localDrawer" app temporary>
    <v-list dense>
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        @click="navigateTo(item.route)"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

interface IProps {
  modelValue: boolean
}
interface IEmit {
  (e: 'update:modelValue', value: boolean): void
}

const props = defineProps<IProps>()
const emit = defineEmits<IEmit>()

const router = useRouter()
const productStore = useProductsStore()
const { currentProduct } = storeToRefs(productStore)

const localDrawer = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const menuItems = computed(() => {
  const items = [
    { title: 'Главная', icon: 'mdi-home', route: '/' },
    { title: 'Корзина', icon: 'mdi-cart', route: '/cart' },
    { title: 'Контакты', icon: 'mdi-contacts', route: '/contacts' }
  ]

  if (currentProduct.value) {
    items.push({
      title: 'Последний выбранный',
      icon: 'mdi-package-variant-closed',
      route: `/products/${currentProduct.value.id}`
    })
  }

  return items
})

const navigateTo = (route: string) => {
  router.push(route)
  localDrawer.value = false
}
</script>
