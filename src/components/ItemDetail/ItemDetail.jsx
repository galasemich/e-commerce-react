import { AddToCart } from "../AddToCart/AddToCart"
import "./ItemDetail.css"

export const ItemDetail = ({ item }) => {
    return (
        <div className="product-container">
            <article className="product-card-detail">
                <div className="product-container">
                    <p><img className="product-image" title={item.name} src={item.image}></img></p>
                    <div>
                        <h4 className="title">{item.name}</h4>
                        <h5 className="author">{item.author}</h5>
                    </div>
                </div>
                <p className="category">Género: {item.category}</p>
                <p>${item.price}</p>
                <p className="description">{item.description}</p>
                <AddToCart item={item}/>
            </article>
        </div>
    )
}