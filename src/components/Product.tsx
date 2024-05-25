import { IProduct } from './ProductList'
import { useState, useEffect } from 'react'
const Product = ({ product }: { product: IProduct }) => {
  const [desiredQuantity, setDesiredQuantity] = useState(0)
  const [error, setError] = useState<string>()
  const [noStock, setNoStock] = useState<string>()

  useEffect(() => {
    if (product.stock === 0) setNoStock('Out of stock')
  }, [product.stock])
  useEffect(() => {
    if (desiredQuantity === product.stock) setError('Max. quantity avaiable')
    if (desiredQuantity < product.stock) setError(undefined)
  }, [desiredQuantity])
  const incrementDesiredQuantity = (): void => {
    setDesiredQuantity((prev) => prev + 1)
  }
  const decrementDesiredQuantity = (): void => {
    setDesiredQuantity((prev) => prev - 1)
  }
  const addToCart = (): void => {
    setDesiredQuantity(0)
  }
  return (
    <div className=''>
      <div
        key={product.name}
        className='w-52 p-2 flex flex-col items-center justify-evenly bg-slate-200 rounded gap-3'
      >
        <img
          src={product.image}
          alt='Product image'
          width={200}
          height={300}
          className='rounded'
        />
        <p>{product.name}</p>
        <div className='flex items-center justify-between gap-3 w-full p-2'>
          <div className='flex items-center gap-2'>
            <button
              className='btn'
              onClick={() => decrementDesiredQuantity()}
              disabled={desiredQuantity === 0}
            >
              -
            </button>
            <p>{desiredQuantity}</p>
            <button
              className='btn'
              onClick={() => incrementDesiredQuantity()}
              disabled={desiredQuantity >= product.stock}
            >
              +
            </button>
          </div>
          <button
            onClick={() => addToCart()}
            className=''
          >
            Add to cart
          </button>
        </div>
      </div>
      {noStock && <p className='text-red-400'>{noStock}</p>}
      {error && !noStock && <p className='max-w-52 text-red-400'>{error}</p>}
    </div>
  )
}

export default Product
