import { AddToCart } from "../AddToCart/AddToCart"
import "./ItemDetail.css"

export const ItemDetail = ({ item }) => {
    return (
        <article className="detail-product-card">
            <div className="product-container">
                <div className="book-primary-data">
                    <p><img className="product-image" title={item.name} src={item.image}></img></p>
                    <h4 className="title">{item.name}</h4>
                    <h5 className="author">{item.author}</h5>
                </div>
                <div>
                    <p className="description">{item.description}</p>
                    <p className="category">Género: {item.category}</p>
                    <p>${item.price}</p>
                    <AddToCart item={item}/>
                </div>
            </div>
        </article>
    )
}