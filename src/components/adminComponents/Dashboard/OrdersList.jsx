import { Order } from "./Order"

export const OrdersList = ({ orders }) => {
    if (!orders.length) {
        return <p>Aún no tenés pedidos.</p>
    }

    return (
        orders.map((order) => (
            <Order {...order} key={order.id}/>
        ))
    )
}