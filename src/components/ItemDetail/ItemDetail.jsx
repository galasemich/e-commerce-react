import { AddToCart } from "../AddToCart/AddToCart"
import { Item } from "../Item/Item"
import "./ItemDetail.css"

export const ItemDetail = ({ item }) => {
    return (
        <div>
            <Item {...item}>
                <p className="description">{item.description}</p>
                <p className="category">Género: {item.category}</p>
                <p>${item.price}</p>
                <div>
                    <AddToCart item={item}/>
                </div>
            </Item>
        </div>
    )
}