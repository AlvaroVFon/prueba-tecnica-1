import { useState, useEffect } from 'react'
import useCart from '../hook/useCart'
import { ICartProductList } from '../types'
const Cart = () => {
  const [cartProducts, setCartProducts] = useState<ICartProductList>()
  const { getCartCotent } = useCart()

  return (
    <div className='border max-h-screen'>
      <h2 className='text-center text-xl'>Cart</h2>
      {cartProducts?.map((cartProduct, index) => (
        <div
          className='grid grid-cols-4 gap-3 p-3'
          key={index}
        >
          <p>{cartProduct?.name}</p>
          <p>{cartProduct?.quantity}</p>
          <p>{cartProduct?.unitPrice}</p>
          <p>
            {cartProduct
              ? cartProduct?.quantity * cartProduct?.unitPrice
              : null}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Cart
