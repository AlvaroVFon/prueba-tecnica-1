import Product from './Product'
import { IProduct } from '../types'
const ProductLicst = ({ products }: { products: IProduct[] }) => {
  return (
    <div className='grid grid-cols-2 gap-3'>
      {products.map((product) => (
        <Product
          product={product}
          key={product.name}
        />
      ))}
    </div>
  )
}

export default ProductLicst
