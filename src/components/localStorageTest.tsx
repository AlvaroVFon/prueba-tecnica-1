import useCart from '../hook/useCart'
import { ICartProduct } from '../types'
const LocalStorageTest = () => {
  const { getCartCotent, addProduct } = useCart()
  const newItem: ICartProduct = {
    id: 44,
    name: 'pijotes',
    quantity: 99,
    unitPrice: 1.99,
  }
  return (
    <div className=''>
      <div className='flex gap-3'>
        <button
          className='p-3 border hover:bg-slate-50'
          onClick={() => getCartCotent()}
        >
          GetItem
        </button>
        <button
          className='p-3 border hover:bg-slate-50'
          onClick={() => addProduct(newItem)}
        >
          Set Cart
        </button>
        <button className='p-3 border hover:bg-slate-50'>remove item</button>
      </div>
    </div>
  )
}

export default LocalStorageTest
