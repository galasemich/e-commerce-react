import { Routes, Route } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import './App.css'

function App() {
  return (
    <>
    <Header/>
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/products/" element={<ItemListContainer/>}/>
        <Route path="/product/:id" element={<ItemDetailContainer/>}/>
        <Route path="/category/:category" element={<ItemListContainer/>}/>
        <Route path="/cart" element={<h1>Tu carrito</h1>}/>
      </Routes>
    </main>
    <Footer/>
    </>
  )
}

export default App
