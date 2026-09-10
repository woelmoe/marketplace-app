import { defineStore } from 'pinia'
import type { ICartItem } from '~/components/Carts/types'

const STORAGE_KEY = 'cart'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as ICartItem[]
  }),

  getters: {
    count: (state) => state.items.reduce((sum, i) => sum + i.quantity, 0),

    totalPrice: (state) =>
      state.items.reduce((sum, i) => sum + i.price * i.quantity, 0),

    isEmpty: (state) => state.items.length === 0,

    itemById: (state) => (id: ICartItem['id']) =>
      state.items.find((i) => i.id === id)
  },

  actions: {
    add(product: Omit<ICartItem, 'quantity'>, quantity = 1) {
      const existing = this.items.find((i) => i.id === product.id)

      if (existing) {
        existing.quantity += quantity
      } else {
        this.items.push({ ...product, quantity })
      }

      this.persist()
    },

    remove(id: ICartItem['id']) {
      this.items = this.items.filter((i) => i.id !== id)
      this.persist()
    },

    setQuantity(id: ICartItem['id'], quantity: number) {
      const item = this.items.find((i) => i.id === id)
      if (!item) return

      if (quantity <= 0) {
        this.remove(id)
        return
      }

      item.quantity = quantity
      this.persist()
    },

    increment(id: ICartItem['id']) {
      const item = this.items.find((i) => i.id === id)
      if (item) this.setQuantity(id, item.quantity + 1)
    },

    decrement(id: ICartItem['id']) {
      const item = this.items.find((i) => i.id === id)
      if (item) this.setQuantity(id, item.quantity - 1)
    },

    clear() {
      this.items = []
      this.persist()
    },

    // Персистентность
    persist() {
      if (import.meta.client) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items))
      }
    },

    hydrate() {
      if (!import.meta.client) return

      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return

      try {
        this.items = JSON.parse(raw) as ICartItem[]
      } catch {
        this.items = []
      }
    }
  }
})
