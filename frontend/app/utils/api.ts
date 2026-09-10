import type { Product } from '~/assets/types/types'

const API_BASE_URL = 'http://localhost:5000'
// process.env.NODE_ENV === 'production'
// ? 'https://your-api-domain.com/api'
// : 'http://localhost:5000'

export const apiClient = {
  async get<T>(endpoint: string, signal?: AbortSignal): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      signal
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`)
    }

    return response.json()
  },

  async post<T>(
    endpoint: string,
    data?: any,
    signal?: AbortSignal
  ): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      signal
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`)
    }

    return response.json()
  },

  async put<T>(endpoint: string, data?: any, signal?: AbortSignal): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      signal
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`)
    }

    return response.json()
  },

  async delete<T>(endpoint: string, signal?: AbortSignal): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      signal
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`)
    }

    return response.json()
  }
}

export const productApi = {
  // Получить все товары
  getAll: (signal?: AbortSignal) =>
    apiClient.get<{ success: boolean; data: Product[] }>('/products', signal),

  // Получить товар по ID
  getById: (id: number, signal?: AbortSignal) =>
    apiClient.get<Product>(`/products/${id}`, signal),

  // Создать товар
  create: (data: Partial<Product>, signal?: AbortSignal) =>
    apiClient.post<{ success: boolean; data: Product }>(
      '/products',
      data,
      signal
    ),

  // Обновить товар
  update: (id: number, data: Partial<Product>, signal?: AbortSignal) =>
    apiClient.put<{ success: boolean; data: Product }>(
      `/products/${id}`,
      data,
      signal
    ),

  // Удалить товар
  delete: (id: number, signal?: AbortSignal) =>
    apiClient.delete<{ success: boolean; message: string }>(
      `/products/${id}`,
      signal
    ),

  // Поиск товаров
  search: (query: string, signal?: AbortSignal) =>
    apiClient.get<{ success: boolean; data: Product[] }>(
      `/products/search?q=${encodeURIComponent(query)}`,
      signal
    ),

  // Фильтр по цене
  filterByPrice: (min: number, max: number, signal?: AbortSignal) =>
    apiClient.get<{ success: boolean; data: Product[] }>(
      `/products/filter/price?min=${min}&max=${max}`,
      signal
    ),

  // Получить избранные товары (в корзине)
  getFavorites: (signal?: AbortSignal) =>
    apiClient.get<{ success: boolean; data: Product[] }>(
      '/products/favorites',
      signal
    ),

  // Массовое создание товаров (для мок-данных)
  createMany: (products: Product[], signal?: AbortSignal) =>
    apiClient.post<{ success: boolean; data: Product[]; errors?: any[] }>(
      '/products/batch',
      { products },
      signal
    )
}
