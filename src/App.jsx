import { Routes, Route } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import './App.css'
import { CartView } from './components/Cart/CartView'
import { ProductFormContainer } from './components/adminComponents/ProductForm/ProductFormContainer/ProductFormContainer'

function App() {
  return (
    <>
    <Header/>
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/product/:id" element={<ItemDetailContainer/>}/>
        <Route path="/category/:category" element={<ItemListContainer/>}/>
        <Route path="/cart" element={<CartView/>}/>
        <Route path="/admin" element={<ProductFormContainer/>}/>
        <Route path="/admin/product/success/:id" element={<h1>Producto subido con éxito.</h1>}/>
      </Routes>
    </main>
    <Footer/>
    </>
  )
}

export default App
