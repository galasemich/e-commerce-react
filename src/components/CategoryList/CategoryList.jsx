import { Link } from "react-router-dom"

export const CategoryList = ({ categories }) => {
    if (categories) {
        const formattedCategories = categories.map((cat) => {
            return cat.name
        })
        
        return (
            formattedCategories.map((cat) => (
                <p><Link to={`/category/${cat}`}>{cat}</Link></p>
        ))) 
    }
}

