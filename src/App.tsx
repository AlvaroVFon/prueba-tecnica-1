import products from './mocks/products.json'
import productTest from './mocks/productTest.json'
import MainLayout from './layouts/Main.layout'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
function App() {
  return (
    <MainLayout>
      <ProductList products={productTest.products} />
      <Cart />
    </MainLayout>
  )
}

export default App
