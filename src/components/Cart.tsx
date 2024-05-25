interface CartProduct {
  name: string
  quantity: number
  unitPrice: number
  totalPrice: number
}
const Cart = ({ cartProducts }: { cartProducts: CartProduct[] }) => {
  return (
    <div className='border max-h-screen'>
      {cartProducts?.map((cartProduct) => (
        <div className='flex'>
          <p>{cartProduct.name}</p>
          <p>{cartProduct.quantity}</p>
          <p>{cartProduct.unitPrice}</p>
          <p>{cartProduct.quantity * cartProduct.unitPrice}</p>
        </div>
      ))}
    </div>
  )
}

export default Cart
