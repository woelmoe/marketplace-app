export interface Product {
  id: number
  title: string
  price: number
  properties?: Record<string, string>[]
  oldPrice?: number
  discount?: number
  rating: number
  reviews: number
  isFavorite: boolean
  imgs?: string[]
  isFastView?: boolean
  badgeText?: string
  badgeColor?: string
  deliveryDate?: string
}

export enum LocalStorageKeys {
  currentProduct = 'currentProduct'
}
