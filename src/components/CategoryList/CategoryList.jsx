import { Link } from "react-router-dom"

export const CategoryList = ({ categories }) => {
    if (categories) {
        return (
            categories.map((cat) => (
                <p key={cat.id}><Link to={`/category/${cat.name}`} >{cat.name}</Link></p>
        ))) 
    }
}

