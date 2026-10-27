import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { validateUser } from "../../utils/validateUser"

export const Login = () => {
    const { login } = useAuth()
    const [ userData, setUserData ] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const [ errors, setErrors ] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData({...userData, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const userErrors = validateUser(userData)
        console.log(userErrors)

        if (Object.keys(userErrors).length > 0){
            setErrors(userErrors)
            return 
        }

        try{
            console.log(userData.email, userData.password)
            console.log(userData)
            await login(userData.email, userData.password)
            navigate("/admin", { replace: true })
        }catch (error){
            console.log("Se produjo un error al iniciar sesión:", error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="product-form">
            <h3>Iniciar sesión</h3>
            <h4>Ingresá tu usuario y contraseña</h4>

            <div>
                <label>Correo electrónico</label>
                <input
                    type="text"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                />
            </div>

            {errors.email && <p className="error">{errors.email}</p>}

            <div>
                <label>Contraseña</label>
                <input
                    type="text"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                />
            </div>

            {errors.password && <p className="error">{errors.password}</p>}

            <button className="generic-button" type="submit">Iniciar sesión</button>
        </form>
        
    )
}