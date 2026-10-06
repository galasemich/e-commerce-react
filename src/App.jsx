import { Routes, Route } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import './App.css'
import { CartView } from './components/Cart/CartView'

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
      </Routes>
    </main>
    <Footer/>
    </>
  )
}

export default App
