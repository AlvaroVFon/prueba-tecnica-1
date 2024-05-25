import products from './mocks/products.json'
import MainLayout from './layouts/Main.layout'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
function App() {
  return (
    <MainLayout>
      <ProductList products={products.productos} />
      <Cart purchasedProducts={[]} />
    </MainLayout>
  )
}

export default App
