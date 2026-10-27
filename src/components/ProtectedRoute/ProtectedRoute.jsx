import { Navigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

export const ProtectedRoute = ({ children }) => {
    const { loading, user } = useAuth()

    if (loading) return <p>Cargando...</p>
    if (!user) return <Navigate to={"/admin/login"}/>

    return children
}