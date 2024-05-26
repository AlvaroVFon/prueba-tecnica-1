export interface IProduct {
  id: number
  stock: number
  productType: string
  price: number
  name: string
  image: string
}

export type ICartProduct = {
  id: number
  name: string
  quantity: number
  unitPrice: number
} | null
export type ICartProductList = ICartProduct[]

export interface Link {
  label: string
  url: string
}
