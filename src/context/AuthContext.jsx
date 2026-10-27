import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../firebase/config"

const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error("No se puede acceder al contexto.")
    }

    return context
}

export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const login = (email, password) => {
        console.log(email, password)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = async () => {
        try{
            await signOut(auth)
        }catch (error) {
            console.log(error)
            throw new Error("Se produjo un error al cerrar la sesión:", error)
        }
    }

    return (
        <AuthContext.Provider value={{ login, logout, user, loading }}>
            { children }  
        </AuthContext.Provider>
    )
}