import Product from './Product'
export interface IProduct {
  stock: number
  productType: string
  price: number
  name: string
  image: string
}
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
