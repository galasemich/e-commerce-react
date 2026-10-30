import { DashboardProduct } from "./DashboardProduct"
import { Link } from "react-router-dom"
import "./Dashboard.css"

// export const DashboardProductList = ({ products, onDelete }) => {
//     if (!products.length) {
//         return <p>No hay productos para mostrar.</p>
//     }

//     return (
//         products.map((product) => (
//             <div className="flex-container">
//                 <DashboardProduct {...product} key={product.id}/>
//                 <div className="button-container">
//                     <Link className="generic-button edit-button" to={`/admin/products/edit-product/${product.id}`}>Editar</Link>
//                     <Link className="generic-button delete-button" to="" onClick={() => {onDelete(product.id)}}>Eliminar</Link>
//                 </div>
//             </div>            
//         ))
//     )
// }