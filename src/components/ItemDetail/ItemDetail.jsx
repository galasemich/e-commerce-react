import "./ItemDetail.css"

export const ItemDetail = ({ name, price, author, image, category, description }) => {
    return (
        <div className="product-container">
            <article className="product-card-detail">
                <div className="product-container">
                    <p><img className="product-image" title={name} src={image}></img></p>
                    <div>
                        <h4 className="title">{name}</h4>
                        <h5 className="author">{author}</h5>
                    </div>
                </div>
                <p className="category">Género: {category}</p>
                <p>${price}</p>
                <p className="description">{description}</p>
                <button className="generic-button add-to-cart">Agregar al carrito</button>
            </article>
        </div>
    )
}