import "./Item.css"
import { useState } from "react"

export const Item = ({ name, image, price, author }) => {
    // const [ favourite, setFavourite ] = useState(false)

    const product = <div className="product-container">
        <article className="product-card">
            <div>
                <div className="product-container">
                    {/* <p className="favourite-button" onClick={() => {setFavourite(!favourite)}}>{favourite ? "💚" : "🖤"}</p> */}
                    <p><img className="product-image" title={name} src={image}></img></p>
                </div>
                <div>
                    <h4 className="title">{name}</h4>
                    <h5 className="author">{author}</h5>
                </div>
            </div>
            <p>${price}</p>
        </article>
    </div>

    return product
} 