import type { Product } from '~/assets/types/types'

const API_BASE_URL = 'http://localhost:5000'
// process.env.NODE_ENV === 'production'
// ? 'https://your-api-domain.com/api'
// : 'http://localhost:5000'

export const apiClient = {
  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`)
    }

    return response.json()
  },

  async post<T>(endpoint: string, data?: any): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`)
    }

    return response.json()
  },

  async put<T>(endpoint: string, data?: any): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`)
    }

    return response.json()
  },

  async delete<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`)
    }

    return response.json()
  }
}

export const productApi = {
  // Получить все товары
  getAll: () =>
    apiClient.get<{ success: boolean; data: Product[] }>('/products'),

  // Получить товар по ID
  getById: (id: number) => apiClient.get<Product>(`/products/${id}`),

  // Создать товар
  create: (data: Partial<Product>) =>
    apiClient.post<{ success: boolean; data: Product }>('/products', data),

  // Обновить товар
  update: (id: number, data: Partial<Product>) =>
    apiClient.put<{ success: boolean; data: Product }>(`/products/${id}`, data),

  // Удалить товар
  delete: (id: number) =>
    apiClient.delete<{ success: boolean; message: string }>(`/products/${id}`),

  // Поиск товаров
  search: (query: string) =>
    apiClient.get<{ success: boolean; data: Product[] }>(
      `/products/search?q=${encodeURIComponent(query)}`
    ),

  // Фильтр по цене
  filterByPrice: (min: number, max: number) =>
    apiClient.get<{ success: boolean; data: Product[] }>(
      `/products/filter/price?min=${min}&max=${max}`
    ),

  // Получить избранные товары (в корзине)
  getFavorites: () =>
    apiClient.get<{ success: boolean; data: Product[] }>('/products/favorites'),

  // Массовое создание товаров (для мок-данных)
  createMany: (products: Product[]) =>
    apiClient.post<{ success: boolean; data: Product[]; errors?: any[] }>(
      '/products/batch',
      { products }
    )
}
