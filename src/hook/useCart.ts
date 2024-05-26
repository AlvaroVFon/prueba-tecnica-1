import { IProduct, ICartProduct, ICartProductList } from '../types'
import { useState, useEffect } from 'react'

type localstorageCart = string | null
export const useCart = () => {
  const [productList, setProductList] = useState<IProduct[]>()

  useEffect(() => {
    const products = window.localStorage.getItem('productList')
  }, [])
  const getCartCotent = (): ICartProductList => {
    const cartList: any = localStorage.getItem('cart')
    const retrievedData = JSON.parse(cartList)
    return retrievedData
  }
  const addProduct = (product: ICartProduct): void => {
    let cart = getCartCotent()
    if (!cart) cart = []
    cart.push(product)
    localStorage.setItem('cart', JSON.stringify(cart))
  }
  const removeProduct = (productId: number) => {}
  const generateReport = (productList: IProduct): Object => {
    return {}
  }
  return {
    productList,
    getCartCotent,
    addProduct,
    removeProduct,
    generateReport,
  }
}
export default useCart
