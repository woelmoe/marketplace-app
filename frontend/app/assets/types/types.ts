export interface ProductProperty {
  name: string
  value: string
}

export interface Product {
  id: number
  title: string
  price: number
  properties?: ProductProperty[]
  old_price?: number
  discount?: number
  rating: number
  reviews: number
  is_in_cart: boolean
  is_favorite?: boolean
  imgs?: string[]
  is_fast_view?: boolean
  delivery_date?: string
  created_at?: string
  updated_at?: string
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  errors?: any[]
  pagination?: {
    total: number
    limit: number
    offset: number
    pages: number
  }
}

export enum LocalStorageKeys {
  currentProduct = 'currentProduct'
}
