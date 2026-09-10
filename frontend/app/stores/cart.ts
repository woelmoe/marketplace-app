import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { ICartItem } from '~/components/Carts/types'

const STORAGE_KEY = 'cart'

export const useCartStore = defineStore('cart', () => {
  // ---- state ----
  const items = ref<ICartItem[]>([])

  // ---- getters ----
  const count = computed(() =>
    items.value.reduce((sum, i) => sum + i.quantity, 0)
  )

  const totalPrice = computed(() =>
    items.value.reduce((sum, i) => sum + i.price * i.quantity, 0)
  )

  const isEmpty = computed(() => items.value.length === 0)

  const itemById = computed(
    () => (id: ICartItem['id']) => items.value.find((i) => i.id === id)
  )

  // ---- helpers ----
  const persist = () => {
    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items.value))
    }
  }

  // ---- actions ----
  const add = (product: Omit<ICartItem, 'quantity'>, quantity = 1) => {
    const existing = items.value.find((i) => i.id === product.id)

    if (existing) {
      existing.quantity += quantity
    } else {
      items.value.push({ ...product, quantity })
    }

    persist()
  }

  const remove = (id: ICartItem['id']) => {
    items.value = items.value.filter((i) => i.id !== id)
    persist()
  }

  const setQuantity = (id: ICartItem['id'], quantity: number) => {
    const item = items.value.find((i) => i.id === id)
    if (!item) return

    if (quantity <= 0) {
      remove(id)
      return
    }

    item.quantity = quantity
    persist()
  }

  const increment = (id: ICartItem['id']) => {
    const item = items.value.find((i) => i.id === id)
    if (item) setQuantity(id, item.quantity + 1)
  }

  const decrement = (id: ICartItem['id']) => {
    const item = items.value.find((i) => i.id === id)
    if (item) setQuantity(id, item.quantity - 1)
  }

  const clear = () => {
    items.value = []
    persist()
  }

  const hydrate = () => {
    if (!import.meta.client) return

    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return

    try {
      items.value = JSON.parse(raw) as ICartItem[]
    } catch {
      items.value = []
    }
  }

  return {
    // state
    items,
    // getters
    count,
    totalPrice,
    isEmpty,
    itemById,
    // actions
    add,
    remove,
    setQuantity,
    increment,
    decrement,
    clear,
    persist,
    hydrate
  }
})
