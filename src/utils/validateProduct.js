export const validateProduct = (product) => {
    const errors = {}

    if (!product.name.trim()) {
        errors.name = "El título del libro es obligatorio."
    }

    if (!product.author.trim()) {
        errors.author = "El autor del libro es obligatorio."
    }

    if (!product.price || product.price <= 0) {
        errors.price = "El precio del libro es obligatorio y debe ser mayor a 0"
    }

    if (!product.description.trim()) {
        errors.description = "La descripción del libro es obligatoria."
    }

    if (!product.category.trim()) {
        errors.category = "El género del libro es obligatorio."
    }

    if (!product.file) {
        errors.file = "La imagen para el libro es obligatoria."
    }

    return errors
}