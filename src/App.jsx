import { Routes, Route, Navigate } from 'react-router-dom'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import './App.css'
import { CartView } from './components/Cart/CartView'
import { ProductFormContainer } from './components/adminComponents/ProductForm/ProductFormContainer/ProductFormContainer'
import { PublicLayout } from './layout/PublicLayout'
import { Login } from './components/Login/Login'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { AdminLayout } from './layout/AdminLayout'

function App() {
  return (
    <>
          <Routes>
            {/* Rutas públicas */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/product/:id" element={<ItemDetailContainer/>}/>
              <Route path="/category/:category" element={<ItemListContainer/>}/>
              <Route path="/cart" element={<CartView/>}/>
            </Route>

            {/* Ruta por fuera de las rutas protegidas (para hacer el login) */}
            <Route path="/admin/login" element={<Login />}/>

            {/* Rutas protegidas para el administrador */}
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminLayout/>
              </ProtectedRoute>
            }>
              <Route index element={<Navigate to={"dashboard"}/>}/>
              <Route path="dashboard" element={<Dashboard />}/>
              <Route path="products/new" element={<ProductFormContainer/>}/>
              <Route path="products/success/:id" element={<h1>Producto subido con éxito.</h1>}/>
            </Route>
          </Routes>
    </>
  )
}

export default App
