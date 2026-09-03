export interface Product {
  id: number
  title: string
  price: number
  oldPrice?: number
  discount?: number
  rating: number
  reviews: number
  isFavorite: boolean
  isFastView?: boolean
  badgeText?: string
  badgeColor?: string
  deliveryDate?: string
}
