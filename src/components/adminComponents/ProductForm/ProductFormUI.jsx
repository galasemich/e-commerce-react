import "./ProductFormContainer/ProductFormContainer.css"

export const ProductFormUI = ({ product, errors, loading, onChange, onSubmit, onFileChange }) => {
    return (
        <section>
            <form className="product-form" onSubmit={onSubmit}>
                <h2>Agregar un libro</h2>

                <div>
                    <label>Título:</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={onChange}
                    />
                </div>

                {errors.name && <p className="error">{errors.name}</p>}

                <div>
                    <label>Autor:</label>
                    <input
                        type="text"
                        name="author"
                        value={product.author}
                        onChange={onChange}
                    />
                </div>

                {errors.author && <p className="error">{errors.author}</p>}

                <div>
                    <label>Precio:</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={onChange}
                    />
                </div>

                {errors.price && <p className="error">{errors.price}</p>}

                <div>
                    <label>Sinopsis:</label>
                    <textarea name="description" rows="5" cols="33" onChange={onChange}>{product.description}</textarea>
                </div>

                {errors.description && <p className="error">{errors.description}</p>}

                <div>
                    <label>Género:</label>
                    <input
                        type="text"
                        name="category"
                        value={product.category}
                        onChange={onChange}
                    />
                </div>

                {errors.category && <p className="error">{errors.category}</p>}

                <div>
                    <label>Portada:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={onFileChange}
                    />
                </div>

                {errors.file && <p className="error">{errors.file}</p>}

                <button className="generic-button">
                    {loading ? "Cargando..." : "Guardar libro"}
                </button>

                {errors.general && <p className="error">{errors.general}</p>}
            </form>
        </section>
    )
}