export const validateUser = (user) => {
    const errors = {}

    if (!user.email){
        errors.email = "El email es obligatorio."
    }

    if (!user.password){
        errors.password = "La contraseña es obligatoria."
    }
    
    return errors
}