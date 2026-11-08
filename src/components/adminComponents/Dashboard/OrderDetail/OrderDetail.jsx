import { Link } from "react-router-dom"
import "./OrderDetail.css"
import "./Dashboard.css"

export const OrderDetail = ({ totalUnits, total, books }) => {
    return (
        <div className="order-detail">
            <h1>Detalle del pedido</h1>
            <div className="book-titles">
                <p className="left-titles">Títulos</p>
                {books.map((book, index) => (
                    <div key={index}>
                        <p className="left-titles">({book.units})       {book.title}</p>
                    </div>
                ))}
            </div>
            <p className="left-titles">Unidades totales: {totalUnits}</p>
            <p className="left-titles">Total: ${total}</p>
            <div className="order-detail-button-container">
                <Link className="generic-button" to="/">Volver a la tienda</Link>
                <Link className="generic-button" to="/admin/dashboard">Volver al dashboard</Link>
            </div>
        </div>
    )
}