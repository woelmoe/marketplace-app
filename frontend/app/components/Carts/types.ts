export interface ICartItem {
  id: number | string
  name: string
  price: number
  image?: string
  quantity: number
}

export interface ICartState {
  items: ICartItem[]
}
